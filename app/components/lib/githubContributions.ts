// Reads the public contribution calendar GitHub serves for a profile.
// It is an HTML fragment, not a documented API, so every value is checked
// before use. Anything unexpected returns null and the caller hides the section
// instead of showing wrong numbers or empty squares.

export interface Contributions {
  readonly total: number;
  readonly activeDays: number;
  // One entry per day, oldest first. 0 is no activity, 4 is the most.
  readonly levels: readonly number[];
  // Days missing before the first cell in its Sunday-first week.
  readonly leadingBlanks: number;
  // ISO dates (YYYY-MM-DD) of the first and last day covered.
  readonly from: string;
  readonly to: string;
}

const ONE_DAY_SECONDS = 86_400;
// A year of days, give or take the partial weeks GitHub adds at either end.
const MIN_DAYS = 357;
const MAX_DAYS = 372;

export function parseContributions(html: string): Contributions | null {
  const days: { date: string; level: number }[] = [];
  for (const tag of html.match(/<td\b[^>]*>/g) ?? []) {
    const date = /\bdata-date="(\d{4}-\d{2}-\d{2})"/.exec(tag)?.[1];
    if (!date) continue; // legend swatches and spacer cells carry no date
    const level = Number(/\bdata-level="([0-4])"/.exec(tag)?.[1]);
    if (!Number.isInteger(level)) return null;
    days.push({ date, level });
  }
  if (days.length < MIN_DAYS || days.length > MAX_DAYS) return null;

  const total = Number(
    /([\d,]+)\s+contributions?\s+in\s+the\s+last\s+year/.exec(html)?.[1]?.replace(/,/g, "")
  );
  if (!Number.isInteger(total) || total < 0) return null;

  // The markup lists cells week-row by week-row, so order them by date.
  const sorted = [...days].sort((a, b) => a.date.localeCompare(b.date));
  const first = sorted[0];
  const last = sorted[sorted.length - 1];
  const firstDay = new Date(`${first.date}T00:00:00Z`);
  if (Number.isNaN(firstDay.getTime()) || Number.isNaN(new Date(`${last.date}T00:00:00Z`).getTime())) {
    return null;
  }

  return {
    total,
    activeDays: sorted.filter((day) => day.level > 0).length,
    levels: sorted.map((day) => day.level),
    leadingBlanks: firstDay.getUTCDay(),
    from: first.date,
    to: last.date,
  };
}

// Cached for a day by Next, so the page reads GitHub at most once every 24 hours.
export async function getContributions(user: string): Promise<Contributions | null> {
  const url = `https://github.com/users/${encodeURIComponent(user)}/contributions`;
  try {
    const response = await fetch(url, { next: { revalidate: ONE_DAY_SECONDS } });
    if (!response.ok) {
      console.error(`[github] ${url} answered ${response.status}; hiding the GitHub section`);
      return null;
    }
    const parsed = parseContributions(await response.text());
    if (!parsed) {
      console.error(`[github] ${url} no longer matches the expected markup; hiding the GitHub section`);
    }
    return parsed;
  } catch (error) {
    console.error(`[github] could not read ${url}; hiding the GitHub section`, error);
    return null;
  }
}
