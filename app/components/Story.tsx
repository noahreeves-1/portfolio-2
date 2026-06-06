import { Reveal } from "./Reveal";
import { STORY } from "../content";

// "The long way here", the winding-path story that's the brand. Heading left,
// a two-paragraph narrative right (editorial). One Fraunces-italic emphasis.
export function Story() {
  return (
    <section id="story" className="px-[var(--v6-s5)] pt-[var(--v6-s8)] sm:px-[var(--v6-s7)] sm:pt-[var(--v6-s9)]">
      <div className="mx-auto max-w-[72rem]">
        <div className="grid gap-[var(--v6-s5)] lg:grid-cols-[1fr_1.6fr] lg:gap-[var(--v6-s7)]">
          <Reveal className="min-w-0">
            <p className="font-[family-name:var(--font-mono)] text-[12px] uppercase tracking-[0.2em] text-[var(--v6-accent-deep)]">
              {STORY.eyebrow}
            </p>
            <h2 className="mt-2 font-[family-name:var(--font-display)] text-[clamp(2rem,6vw,3rem)] font-bold leading-[0.98] tracking-[-0.03em] text-[var(--v6-ink)]">
              {STORY.heading}
            </h2>
          </Reveal>

          <Reveal delay={0.05} className="min-w-0 space-y-[var(--v6-s5)]">
            {STORY.paragraphs.map((para, i) => (
              <p
                key={i}
                className="max-w-[46rem] text-[clamp(1.0625rem,1.6vw,1.25rem)] leading-relaxed text-[var(--v6-ink-muted)]"
              >
                {para.map((part, j) =>
                  part.italic ? (
                    <em key={j} className="font-[family-name:var(--font-serif)] italic text-[var(--v6-accent-deep)]">
                      {part.text}
                    </em>
                  ) : (
                    <span key={j}>{part.text}</span>
                  ),
                )}
              </p>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
