import { Reveal } from "./Reveal";
import { ProjectSheet } from "./ProjectSheet";
import { FEATURED } from "../content";

// The first white sheet: the four featured projects (outcome-led), each a card
// that opens a native case-study sheet. 1-up on mobile, 2-up from sm.
export function WorkSheet() {
  return (
    <section id="work" className="px-[var(--v4-s5)] pt-[var(--v4-s8)]">
      <Reveal>
        <p className="font-[family-name:var(--font-mono)] text-[12px] uppercase tracking-[0.2em] text-[var(--v4-teal-deep)]">
          Selected work
        </p>
        <h2 className="mt-2 max-w-[20rem] font-[family-name:var(--font-display)] text-[clamp(2rem,9vw,2.75rem)] font-bold leading-[1.02] tracking-[-0.03em] text-[var(--v4-ink)]">
          Four that mattered.
        </h2>
        <p className="mt-3 max-w-[24rem] text-[15px] leading-relaxed text-[var(--v4-ink-muted)]">
          Rescue to revenue. Tap any card for the case study.
        </p>
      </Reveal>

      <div className="mt-[var(--v4-s6)] grid grid-cols-1 gap-[var(--v4-s5)] sm:grid-cols-2">
        {FEATURED.map((work, i) => (
          <Reveal key={work.id} delay={i * 0.05}>
            <ProjectSheet work={work} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
