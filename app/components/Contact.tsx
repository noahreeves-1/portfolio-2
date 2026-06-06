import Image from "next/image";
import { Reveal } from "./Reveal";
import { CtaButton } from "./CtaButton";
import { CONTACT } from "../content";

// The closing CTA, a compact dark indigo panel that bookends the hero. One
// action: book a call. Socials sit alongside.
export function Contact() {
  return (
    <section id="contact" className="px-[var(--v6-s5)] pt-[var(--v6-s8)] sm:px-[var(--v6-s7)] sm:pt-[var(--v6-s9)]">
      <div className="mx-auto max-w-[72rem]">
        <Reveal>
          <div className="relative overflow-hidden rounded-[var(--v6-r-sheet)] bg-[var(--v6-sky-ink)] px-[var(--v6-s6)] py-[var(--v6-s8)] text-center">
            {/* Travel art, cities Noah has visited, in the hero's synthwave style. */}
            <Image
              src={CONTACT.image.src}
              alt=""
              fill
              sizes="(max-width: 75rem) 92vw, 72rem"
              className="object-cover object-center"
            />
            {/* legibility scrims over the art so the white text stays readable */}
            <div
              aria-hidden
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(180deg, color-mix(in srgb, var(--v6-sky-ink) 58%, transparent) 0%, color-mix(in srgb, var(--v6-sky-ink) 82%, transparent) 100%)",
              }}
            />
            <div
              aria-hidden
              className="absolute inset-0"
              style={{
                background:
                  "radial-gradient(78% 72% at 50% 56%, color-mix(in srgb, var(--v6-sky-ink) 48%, transparent), transparent 80%)",
              }}
            />

            <div className="relative">
              <p className="font-[family-name:var(--font-mono)] text-[12px] uppercase tracking-[0.2em] text-[var(--v6-accent-soft)]">
                {CONTACT.eyebrow}
              </p>
              <h2 className="mx-auto mt-[var(--v6-s3)] max-w-[18ch] font-[family-name:var(--font-display)] text-[clamp(1.9rem,8vw,3rem)] font-bold leading-tight tracking-[-0.03em] text-[var(--v6-cream)]">
                {CONTACT.head}
              </h2>
              <p className="mx-auto mt-[var(--v6-s4)] max-w-[26rem] text-[15px] leading-relaxed text-[var(--v6-cream-muted)]">
                {CONTACT.sub}
              </p>

              <div className="mt-[var(--v6-s6)] flex justify-center">
                <CtaButton href={CONTACT.cta.href}>{CONTACT.cta.label}</CtaButton>
              </div>

              <p className="mt-[var(--v6-s4)] font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-[0.18em] text-[var(--v6-cream-muted)]">
                {CONTACT.note}
              </p>

              <div className="mt-[var(--v6-s6)] flex items-center justify-center gap-3">
                {CONTACT.socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full px-3 py-2 text-[13px] font-medium text-[var(--v6-cream)] ring-1 ring-inset ring-[var(--v6-glass-stroke)] transition-colors hover:bg-[var(--v6-glass-bg)]"
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
      </div>
    </section>
  );
}
