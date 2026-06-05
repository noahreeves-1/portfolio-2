import Image from "next/image";
import { DeviceFrame } from "./DeviceFrame";
import { ScreenshotFallback } from "./ScreenshotFallback";
import { MetricChip } from "./Metric";
import type { FeaturedWork } from "../content";

// The screen content for a work item: a real screenshot when we have one, else a
// deliberate branded splash (HIPAA / backend work). Reused in the card + sheet.
export function WorkScreen({ work }: { work: FeaturedWork }) {
  return work.screenshot ? (
    <Image
      src={work.screenshot}
      alt={`${work.name} product screenshot`}
      fill
      sizes="(max-width: 768px) 90vw, 520px"
      className="object-cover object-top"
    />
  ) : (
    <ScreenshotFallback
      name={work.name}
      monogram={work.monogram}
      logo={work.logo}
      caption={work.splashCaption}
    />
  );
}

// Presentational card body (no interactivity — the ProjectSheet trigger wraps this
// in a motion button). A dark teal media well (echoing the hero) under a white
// text block; radii are concentric (media = card − pad).
export function WorkCard({ work }: { work: FeaturedWork }) {
  return (
    <div className="flex h-full flex-col overflow-hidden rounded-[var(--v4-r-card)] bg-[var(--v4-sheet)] shadow-[var(--v4-shadow-card)] ring-1 ring-inset ring-[var(--v4-hairline)] transition-shadow duration-300 group-hover:shadow-[var(--v4-shadow-card-lift)]">
      <div
        className="p-[var(--v4-pad)]"
      >
        <div
          className="flex items-center justify-center overflow-hidden rounded-[var(--v4-r-card-in)] px-5 pt-6"
          style={{
            background: "linear-gradient(165deg, var(--v4-teal-deep), var(--v4-teal-ink))",
          }}
        >
          <DeviceFrame variant={work.device} className="translate-y-1">
            <WorkScreen work={work} />
          </DeviceFrame>
        </div>
      </div>

      <div className="flex flex-1 flex-col px-[var(--v4-s5)] pb-[var(--v4-s5)] pt-[var(--v4-s2)]">
        <p className="font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-[0.18em] text-[var(--v4-teal-deep)]">
          {work.kind}
        </p>
        <h3 className="mt-1 font-[family-name:var(--font-display)] text-2xl font-bold tracking-[-0.02em] text-[var(--v4-ink)]">
          {work.name}
        </h3>
        <p className="mt-1.5 text-[15px] leading-snug text-[var(--v4-ink-muted)]">{work.tagline}</p>

        <div className="mt-[var(--v4-s4)]">
          <MetricChip metric={work.metric} />
        </div>

        <span className="mt-[var(--v4-s4)] inline-flex items-center gap-1 font-[family-name:var(--font-mono)] text-[12px] uppercase tracking-[0.14em] text-[var(--v4-ink-soft)] transition-colors group-hover:text-[var(--v4-teal-deep)]">
          View case study
          <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-0.5">
            →
          </span>
        </span>
      </div>
    </div>
  );
}
