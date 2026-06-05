import { MORE } from "../content";
import { GlassSurface } from "./GlassSurface";
import { Reveal } from "./primitives/Reveal";

const Chevron = (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-4 w-4"
    aria-hidden="true"
  >
    <path d="m9 18 6-6-6-6" />
  </svg>
);

// The rest, as a compact iOS-settings-style list. CSS-only press feedback keeps
// it zero-JS; each row is a whole-row link.
export function MoreStrip() {
  return (
    <section
      id="more"
      aria-labelledby="more-heading"
      className="mx-auto w-full max-w-3xl scroll-mt-24 px-5 py-20 sm:py-28"
    >
      <Reveal>
        <p className="font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-[0.25em] text-[var(--v3-teal-soft)]">
          More
        </p>
        <h2
          id="more-heading"
          className="mt-3 font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight text-[var(--v3-fg)] sm:text-4xl"
        >
          Everything else that got me here.
        </h2>
      </Reveal>

      <Reveal className="mt-8">
        <GlassSurface className="p-1.5">
          <div className="divide-y divide-white/5">
            {MORE.map((row) => (
              <a
                key={row.id}
                href={row.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 rounded-2xl px-3 py-3.5 transition-[background-color,transform] duration-200 hover:bg-white/[0.03] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[var(--v3-ring)] active:scale-[0.99]"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[var(--v3-bg-raise)] font-[family-name:var(--font-mono)] text-sm text-[var(--v3-teal-soft)] ring-1 ring-inset ring-[var(--v3-glass-stroke)]">
                  {row.monogram}
                </span>
                <span className="min-w-0 flex-1">
                  <span className="flex flex-wrap items-baseline gap-x-2">
                    <span className="font-[family-name:var(--font-display)] font-semibold text-[var(--v3-fg)]">
                      {row.name}
                    </span>
                    <span className="font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-wider text-[var(--v3-fg-faint)]">
                      {row.receipt}
                    </span>
                  </span>
                  <span className="mt-0.5 block truncate text-sm text-[var(--v3-fg-muted)]">
                    {row.line}
                  </span>
                </span>
                <span className="text-[var(--v3-fg-faint)] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:text-[var(--v3-teal-soft)]">
                  {Chevron}
                </span>
              </a>
            ))}
          </div>
        </GlassSurface>
      </Reveal>
    </section>
  );
}
