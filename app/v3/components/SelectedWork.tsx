import { FEATURED } from "../content";
import { WorkCard } from "./WorkCard";
import { Reveal } from "./primitives/Reveal";

export function SelectedWork() {
  return (
    <section
      id="work"
      aria-labelledby="work-heading"
      className="mx-auto w-full max-w-5xl scroll-mt-24 px-5 py-20 sm:py-28"
    >
      <Reveal>
        <p className="font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-[0.25em] text-[var(--v3-teal-soft)]">
          Selected work
        </p>
        <h2
          id="work-heading"
          className="mt-3 max-w-xl font-[family-name:var(--font-display)] text-3xl font-semibold leading-[1.1] tracking-tight text-[var(--v3-fg)] sm:text-4xl"
        >
          Four products. The receipts are the point.
        </h2>
      </Reveal>

      <div className="mt-10 grid grid-cols-1 gap-5 sm:mt-14 md:grid-cols-2">
        {FEATURED.map((work, i) => (
          <Reveal key={work.id} delay={i * 0.06} className="h-full">
            <WorkCard work={work} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
