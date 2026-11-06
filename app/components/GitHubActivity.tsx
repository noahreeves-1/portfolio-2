import type { CSSProperties } from "react";
import { GITHUB } from "../content";
import { EXTERNAL } from "./lib/EntryRow";
import { getContributions } from "./lib/githubContributions";
import { SectionHead } from "./lib/SectionHead";

const COUNT = new Intl.NumberFormat("en-US");
const MONTH = new Intl.DateTimeFormat("en-US", { month: "short", year: "numeric", timeZone: "UTC" });
const monthOf = (isoDate: string) => MONTH.format(new Date(`${isoDate}T00:00:00Z`));

// A year of GitHub activity: the count, the active days, and the heatmap.
// Server component. Renders nothing when the calendar cannot be read.
export async function GitHubActivity() {
  const data = await getContributions(GITHUB.user);
  if (!data) return null;

  const from = monthOf(data.from);
  const to = monthOf(data.to);
  const weeks = Math.ceil((data.leadingBlanks + data.levels.length) / 7);

  return (
    <section className="m-sec">
      <SectionHead icon="github" title={GITHUB.title}>
        <a className="m-aside" href={GITHUB.url} {...EXTERNAL}>
          {GITHUB.user} <span aria-hidden="true">↗</span>
        </a>
      </SectionHead>
      <p className="m-line">
        <span className="m-fig">{COUNT.format(data.total)}</span> contributions in the last year, on{" "}
        <span className="m-fig">{COUNT.format(data.activeDays)}</span> days.
      </p>
      <div
        className="m-heat"
        style={{ "--m-weeks": weeks } as CSSProperties}
        role="img"
        aria-label={`Contribution heatmap from ${from} to ${to}`}
      >
        {Array.from({ length: data.leadingBlanks }, (_, index) => (
          <i key={`blank-${index}`} className="m-blank" />
        ))}
        {data.levels.map((level, index) => (
          <i key={index} className={`m-l${level}`} />
        ))}
      </div>
      <div className="m-heat-axis">
        <span>{from}</span>
        <span>{to}</span>
      </div>
    </section>
  );
}
