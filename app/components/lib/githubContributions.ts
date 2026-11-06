// Reads the public contribution calendar GitHub serves for a profile.
// It is an HTML fragment, not a documented API, so every value is checked
// before use and anything unexpected counts as a failed read.

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
const READ_TIMEOUT_MS = 10_000;
// The value Next sets in NEXT_PHASE while `next build` runs (PHASE_PRODUCTION_BUILD
// in next/constants). Kept as a literal so this module has no imports.
const BUILD_PHASE = "phase-production-build";
// A year of days, with room for leap years and the partial weeks GitHub adds
// at either end.
const MIN_DAYS = 350;
const MAX_DAYS = 380;

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

function withTimeout<T>(work: Promise<T>, ms: number, what: string): Promise<T> {
  let timer: ReturnType<typeof setTimeout> | undefined;
  const timeout = new Promise<never>((_, reject) => {
    timer = setTimeout(() => reject(new Error(`${what} timed out after ${ms} ms`)), ms);
  });
  return Promise.race([work, timeout]).finally(() => clearTimeout(timer));
}

async function readCalendar(url: string): Promise<Contributions> {
  const response = await fetch(url, { next: { revalidate: ONE_DAY_SECONDS } });
  if (!response.ok) throw new Error(`${url} answered ${response.status}`);
  const parsed = parseContributions(await response.text());
  if (!parsed) throw new Error(`${url} no longer matches the expected markup`);
  return parsed;
}

// Cached for a day by Next, so the page reads GitHub at most once every 24 hours.
//
// What a failed read does depends on when it happens:
// - During the build, or in development: return null so the section is left
//   out. GitHub having a bad minute should not fail a deploy.
// - While the live site refreshes its daily copy: throw. Next then keeps
//   serving the last good page and tries again on the next visit, instead of
//   dropping the section for a full day.
export async function getContributions(user: string): Promise<Contributions | null> {
  const url = `https://github.com/users/${encodeURIComponent(user)}/contributions`;
  try {
    return await withTimeout(readCalendar(url), READ_TIMEOUT_MS, `reading ${url}`);
  } catch (error) {
    const building = process.env.NEXT_PHASE === BUILD_PHASE;
    if (!building && process.env.NODE_ENV === "production") throw error;
    console.error("[github] could not read the contribution calendar; leaving the section out", error);
    return null;
  }
}
