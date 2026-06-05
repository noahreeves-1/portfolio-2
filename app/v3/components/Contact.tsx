import Image from "next/image";
import { GlassSurface } from "./GlassSurface";
import { Reveal } from "./primitives/Reveal";
import { CONTACT, CALENDLY_URL, RESUME_URL, SOCIALS, NAME } from "../content";

const GitHubIcon = (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden="true">
    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.6.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.5 11.5 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.91 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12Z" />
  </svg>
);

const iconButton =
  "flex h-11 w-11 items-center justify-center rounded-full bg-[var(--v3-glass-bg)] text-[var(--v3-fg-muted)] ring-1 ring-inset ring-[var(--v3-glass-stroke)] transition-colors duration-200 hover:text-[var(--v3-fg)] hover:ring-[var(--v3-glass-stroke-hi)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--v3-ring)]";

// Final beat + footer. The primary action is the call; the résumé surfaces only
// when a file exists (RESUME_URL) so we never ship a 404.
export function Contact() {
  const year = new Date().getFullYear();

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="mx-auto w-full max-w-3xl scroll-mt-24 px-5 pb-36 pt-20 sm:pt-28"
    >
      <Reveal>
        <GlassSurface className="px-6 py-12 text-center sm:px-12 sm:py-16">
          <h2
            id="contact-heading"
            className="text-3xl font-medium text-[var(--v3-fg)] sm:text-4xl"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            {CONTACT.heading}
          </h2>
          <p className="mx-auto mt-4 max-w-md text-[var(--v3-fg-muted)]">{CONTACT.line}</p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-[var(--v3-bg)] shadow-[0_6px_24px_color-mix(in_srgb,var(--v3-teal)_30%,transparent)] transition-transform duration-200 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--v3-ring)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--v3-bg)]"
              style={{ backgroundImage: "var(--v3-grad)" }}
            >
              Book a call
            </a>
            {RESUME_URL ? (
              <a
                href={RESUME_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full px-5 py-3 text-sm font-medium text-[var(--v3-fg-muted)] ring-1 ring-inset ring-[var(--v3-glass-stroke)] transition-colors hover:text-[var(--v3-fg)] hover:ring-[var(--v3-glass-stroke-hi)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--v3-ring)]"
              >
                Résumé
              </a>
            ) : null}
          </div>

          <div className="mt-9 flex items-center justify-center gap-3">
            <a
              href={SOCIALS.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className={iconButton}
            >
              <Image src="/linkedin.svg" alt="" width={20} height={20} className="h-5 w-5" />
            </a>
            <a
              href={SOCIALS.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className={iconButton}
            >
              {GitHubIcon}
            </a>
          </div>
        </GlassSurface>
      </Reveal>

      <footer className="mt-10 flex flex-col items-center justify-between gap-2 text-xs text-[var(--v3-fg-faint)] sm:flex-row">
        <span>© {year} {NAME}</span>
        <span className="font-[family-name:var(--font-mono)] tracking-wide">
          Built with Next.js · deployed on Vercel
        </span>
      </footer>
    </section>
  );
}
