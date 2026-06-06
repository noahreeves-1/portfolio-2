import { Reveal } from "./Reveal";
import { ProjectList } from "./ProjectList";
import { Capabilities } from "./Capabilities";
import { WORK } from "../content";

// The work section, the project index beside the capabilities matrix. On
// desktop the matrix sits in a narrower, sticky left column while the list
// scrolls; on mobile they stack (list first, matrix below).
export function Work() {
  return (
    <section id="work" className="px-[var(--v6-s5)] pt-[var(--v6-s8)] sm:px-[var(--v6-s7)] sm:pt-[var(--v6-s9)]">
      <div className="mx-auto max-w-[72rem]">
        <Reveal>
          <p className="font-[family-name:var(--font-mono)] text-[12px] uppercase tracking-[0.2em] text-[var(--v6-accent-deep)]">
            {WORK.eyebrow}
          </p>
          <h2 className="mt-2 font-[family-name:var(--font-display)] text-[clamp(2rem,7vw,3.25rem)] font-bold tracking-[-0.03em] text-[var(--v6-ink)]">
            {WORK.heading}
          </h2>
          <p className="mt-2 font-[family-name:var(--font-mono)] text-[12px] uppercase tracking-[0.16em] text-[var(--v6-ink-soft)]">
            {WORK.since}
          </p>
        </Reveal>

        <div className="mt-[var(--v6-s7)] grid gap-[var(--v6-s6)] lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.3fr)] lg:items-start">
          <Reveal className="order-2 min-w-0 lg:order-1 lg:sticky lg:top-[var(--v6-s6)]">
            <Capabilities />
          </Reveal>
          <Reveal delay={0.05} className="order-1 min-w-0 lg:order-2">
            <ProjectList />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
