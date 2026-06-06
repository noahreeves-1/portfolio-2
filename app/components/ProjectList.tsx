import Image from "next/image";
import { cn } from "@/lib/utils";
import { PROJECTS } from "../content";

// A small emerald "Current" marker for actively-built projects. The ping is
// disabled under prefers-reduced-motion via the CSS variant (no JS needed, so
// this stays a server component).
function CurrentTag() {
  return (
    <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-[color-mix(in_srgb,var(--v6-current)_14%,transparent)] px-2 py-0.5 ring-1 ring-inset ring-[color-mix(in_srgb,var(--v6-current)_30%,transparent)]">
      <span className="relative flex h-1.5 w-1.5">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--v6-current-soft)] opacity-70 motion-reduce:animate-none" />
        <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[var(--v6-current-soft)]" />
      </span>
      <span className="font-[family-name:var(--font-mono)] text-[10px] font-semibold uppercase tracking-[0.16em] text-[var(--v6-current)]">
        Current
      </span>
    </span>
  );
}

function StartupTag({ n }: { n: 1 | 2 }) {
  return (
    <span className="inline-flex shrink-0 items-center rounded-full bg-[color-mix(in_srgb,var(--v6-accent)_18%,transparent)] px-2 py-0.5 ring-1 ring-inset ring-[color-mix(in_srgb,var(--v6-accent-deep)_28%,transparent)]">
      <span className="font-[family-name:var(--font-mono)] text-[10px] font-semibold uppercase tracking-[0.14em] text-[var(--v6-accent-deep)]">
        Startup #{n}
      </span>
    </span>
  );
}

// The project index, every project as a row in one grouped, hairline-divided
// card (the image Noah shared). Whole row is a link; logo-or-monogram badge on
// the left; current work flagged emerald. Server component (hover is pure CSS).
export function ProjectList({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-[var(--v6-r-card)] bg-[var(--v6-paper-warm)] shadow-[var(--v6-shadow-card)] ring-1 ring-inset ring-[var(--v6-hairline-ink)]",
        className,
      )}
    >
      <ul className="divide-y divide-[var(--v6-hairline-ink)]">
        {PROJECTS.map((item) => (
          <li key={item.id}>
            <a
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 px-[var(--v6-s4)] py-[var(--v6-s4)] transition-colors hover:bg-[var(--v6-paper-sunk)]"
            >
              {item.logo ? (
                <span className="relative h-11 w-11 shrink-0 overflow-hidden rounded-[12px] bg-[var(--v6-paper)] ring-1 ring-inset ring-[var(--v6-hairline-ink-strong)]">
                  <Image src={item.logo} alt="" fill sizes="44px" className="object-contain p-2" />
                </span>
              ) : (
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[12px] bg-[color-mix(in_srgb,var(--v6-accent-deep)_12%,transparent)] font-[family-name:var(--font-display)] text-base font-semibold text-[var(--v6-accent-deep)] ring-1 ring-inset ring-[color-mix(in_srgb,var(--v6-accent-deep)_24%,transparent)]">
                  {item.monogram}
                </span>
              )}

              <span className="min-w-0 flex-1">
                <span className="flex flex-wrap items-center gap-x-2 gap-y-1">
                  <span className="font-[family-name:var(--font-display)] text-[15px] font-semibold text-[var(--v6-ink)]">
                    {item.name}
                  </span>
                  {item.startup ? <StartupTag n={item.startup} /> : null}
                  {item.current ? <CurrentTag /> : null}
                </span>
                <span className="mt-0.5 block truncate text-[13px] text-[var(--v6-ink-muted)]">{item.tagline}</span>
              </span>

              <span
                aria-hidden
                className="shrink-0 text-[var(--v6-ink-faint)] transition-all duration-300 group-hover:translate-x-0.5 group-hover:text-[var(--v6-accent-deep)]"
              >
                ↗
              </span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
