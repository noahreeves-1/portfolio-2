import { Reveal } from "./Reveal";
import { cn } from "@/lib/utils";
import { ARC } from "../content";

// The brand spine — four restrained lines (consulting → engineering → founder).
// Minimal words; the last line is the payoff, set in teal.
export function Arc() {
  return (
    <section id="about" className="px-[var(--v4-s5)] pt-[var(--v4-s8)]">
      <Reveal>
        <p className="font-[family-name:var(--font-mono)] text-[12px] uppercase tracking-[0.2em] text-[var(--v4-teal-deep)]">
          {ARC.label}
        </p>
      </Reveal>

      <div className="mt-[var(--v4-s5)] space-y-[var(--v4-s4)] border-l-2 border-[color-mix(in_srgb,var(--v4-teal)_45%,transparent)] pl-[var(--v4-s5)]">
        {ARC.lines.map((line, i) => {
          const isLast = i === ARC.lines.length - 1;
          return (
            <Reveal key={line} delay={i * 0.06}>
              <p
                className={cn(
                  "font-[family-name:var(--font-display)] text-[clamp(1.25rem,5.5vw,1.65rem)] leading-snug tracking-[-0.02em]",
                  isLast ? "font-bold text-[var(--v4-teal-deep)]" : "font-medium text-[var(--v4-ink)]",
                )}
              >
                {line}
              </p>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
