import Image from "next/image";
import { Reveal } from "./Reveal";
import { CtaButton } from "./CtaButton";
import { CONTACT } from "../content";

// The closing CTA — a dark teal panel (bookend echoing the hero) that breaks the
// white. The one action: book a call.
export function Contact() {
  return (
    <section id="contact" className="px-[var(--v4-s5)] pt-[var(--v4-s8)]">
      <Reveal>
        <div
          className="relative overflow-hidden rounded-[var(--v4-r-sheet)] px-[var(--v4-s6)] py-[var(--v4-s8)] text-center"
          style={{ background: "linear-gradient(165deg, var(--v4-teal-deep), var(--v4-teal-ink))" }}
        >
          <div
            aria-hidden
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(90% 60% at 50% 0%, color-mix(in srgb, var(--v4-teal) 30%, transparent), transparent 70%)",
            }}
          />

          <div className="relative">
            <h2 className="mx-auto max-w-[18rem] font-[family-name:var(--font-display)] text-[clamp(1.75rem,8vw,2.5rem)] font-bold leading-tight tracking-[-0.03em] text-[var(--v4-hero-ink)]">
              {CONTACT.head}
            </h2>
            <p className="mx-auto mt-[var(--v4-s4)] max-w-[24rem] text-[15px] leading-relaxed text-[var(--v4-hero-ink-muted)]">
              {CONTACT.sub}
            </p>

            <div className="mt-[var(--v4-s6)] flex justify-center">
              <CtaButton href={CONTACT.cta.href}>{CONTACT.cta.label}</CtaButton>
            </div>

            <p className="mt-[var(--v4-s4)] font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-[0.18em] text-[var(--v4-hero-ink-muted)]">
              {CONTACT.note}
            </p>

            <div className="mt-[var(--v4-s6)] flex items-center justify-center gap-3">
              {CONTACT.socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full px-3 py-2 text-[13px] font-medium text-[var(--v4-hero-ink)] ring-1 ring-inset ring-[var(--v4-glass-stroke)] transition-colors hover:bg-[var(--v4-glass-bg)]"
                >
                  <span className="relative h-5 w-5 overflow-hidden rounded-full bg-white">
                    <Image src={s.icon} alt="" fill sizes="20px" className="object-contain p-0.5" />
                  </span>
                  {s.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
