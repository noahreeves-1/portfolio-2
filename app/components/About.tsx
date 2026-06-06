import { Reveal } from "./Reveal";
import { ABOUT } from "../content";

// The short paragraph, one tight statement of the arc, with a single Fraunces
// italic emphasis. Sparse on purpose; the trust bar and work carry the proof.
export function About() {
  return (
    <section className="px-[var(--v6-s5)] pt-[var(--v6-s8)] sm:px-[var(--v6-s7)] sm:pt-[var(--v6-s9)]">
      <div className="mx-auto max-w-[72rem]">
        <Reveal>
          <p className="font-[family-name:var(--font-mono)] text-[12px] uppercase tracking-[0.2em] text-[var(--v6-accent-deep)]">
            {ABOUT.eyebrow}
          </p>
        </Reveal>
        <Reveal delay={0.05}>
          <p className="mt-[var(--v6-s5)] max-w-[40rem] text-[clamp(1.25rem,3vw,1.75rem)] leading-[1.4] text-[var(--v6-ink)]">
            {ABOUT.body.map((part, i) =>
              part.italic ? (
                <em
                  key={i}
                  className="font-[family-name:var(--font-serif)] italic text-[var(--v6-accent-deep)]"
                >
                  {part.text}
                </em>
              ) : (
                <span key={i}>{part.text}</span>
              ),
            )}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
