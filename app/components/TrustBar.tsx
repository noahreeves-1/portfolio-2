import { Reveal } from "./Reveal";
import { MetricValue } from "./Metric";
import { TRUST } from "../content";

// The trust bar, the degree + three hard numbers, the first thing on the ivory
// paper. Numbers count up as they scroll into view; "MSc" renders as-is.
export function TrustBar() {
  return (
    <section className="px-[var(--v6-s5)] pt-[var(--v6-s8)] sm:px-[var(--v6-s7)] sm:pt-[var(--v6-s9)]">
      <div className="mx-auto max-w-[72rem]">
        <Reveal className="grid grid-cols-2 gap-x-[var(--v6-s5)] gap-y-[var(--v6-s6)] lg:grid-cols-4">
          {TRUST.map((item) => (
            <div key={item.label} className="border-t border-[var(--v6-hairline-ink-strong)] pt-[var(--v6-s4)]">
              <MetricValue
                value={item.value}
                prefix={item.prefix}
                suffix={item.suffix}
                text={item.text}
                className="font-[family-name:var(--font-display)] text-[clamp(2rem,6vw,3rem)] font-bold leading-none tracking-[-0.02em] text-[var(--v6-ink)]"
              />
              <p className="mt-[var(--v6-s3)] text-[13px] leading-snug text-[var(--v6-ink-muted)]">{item.label}</p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
