import { Reveal } from "./Reveal";
import { MetricValue } from "./Metric";
import { PROOF, PROOF_HEADING } from "../content";

// The proof band — big NumberFlow count-ups in a hairline-divided grid. The
// numbers do the talking (minimal words).
export function MetricsBand() {
  return (
    <section className="px-[var(--v4-s5)] pt-[var(--v4-s8)]">
      <Reveal>
        <p className="font-[family-name:var(--font-mono)] text-[12px] uppercase tracking-[0.2em] text-[var(--v4-teal-deep)]">
          The numbers
        </p>
        <h2 className="mt-2 font-[family-name:var(--font-display)] text-[clamp(2rem,9vw,2.75rem)] font-bold tracking-[-0.03em] text-[var(--v4-ink)]">
          {PROOF_HEADING}
        </h2>
      </Reveal>

      <div className="mt-[var(--v4-s6)] grid grid-cols-2 gap-px overflow-hidden rounded-[var(--v4-r-card)] bg-[var(--v4-hairline)] ring-1 ring-inset ring-[var(--v4-hairline)]">
        {PROOF.map((m, i) => (
          <Reveal key={m.sub ?? i} delay={i * 0.05} className="bg-[var(--v4-sheet)] p-[var(--v4-s5)]">
            <MetricValue
              value={m.value}
              prefix={m.prefix}
              suffix={m.suffix}
              text={m.text}
              className="font-[family-name:var(--font-display)] text-[clamp(2rem,11vw,3rem)] font-bold leading-none tracking-[-0.02em] text-[var(--v4-teal-deep)]"
            />
            <p className="mt-2 text-[13px] leading-snug text-[var(--v4-ink-muted)]">{m.label}</p>
            {m.sub ? (
              <p className="mt-1 font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.18em] text-[var(--v4-ink-soft)]">
                {m.sub}
              </p>
            ) : null}
          </Reveal>
        ))}
      </div>
    </section>
  );
}
