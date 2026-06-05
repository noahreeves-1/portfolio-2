import Image from "next/image";
import { Reveal } from "./Reveal";
import { MORE } from "../content";

// iOS Settings-style grouped list for the secondary work. Whole row is a link;
// hairline dividers; a badge (logo or monogram) on the left.
export function MoreList() {
  return (
    <section id="more" className="px-[var(--v4-s5)] pt-[var(--v4-s8)]">
      <Reveal>
        <p className="font-[family-name:var(--font-mono)] text-[12px] uppercase tracking-[0.2em] text-[var(--v4-teal-deep)]">
          More work
        </p>
        <h2 className="mt-2 font-[family-name:var(--font-display)] text-[clamp(2rem,9vw,2.75rem)] font-bold tracking-[-0.03em] text-[var(--v4-ink)]">
          And the rest.
        </h2>
      </Reveal>

      <Reveal className="mt-[var(--v4-s5)] overflow-hidden rounded-[var(--v4-r-card)] bg-[var(--v4-sheet)] shadow-[var(--v4-shadow-card)] ring-1 ring-inset ring-[var(--v4-hairline)]">
        <ul className="divide-y divide-[var(--v4-hairline)]">
          {MORE.map((item) => (
            <li key={item.id}>
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 px-[var(--v4-s4)] py-[var(--v4-s4)] transition-colors hover:bg-[var(--v4-sheet-sunk)]"
              >
                {item.logo ? (
                  <span className="relative h-11 w-11 shrink-0 overflow-hidden rounded-[12px] bg-[var(--v4-sheet)] ring-1 ring-inset ring-[var(--v4-hairline-strong)]">
                    <Image src={item.logo} alt="" fill sizes="44px" className="object-contain p-2" />
                  </span>
                ) : (
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[12px] bg-[color-mix(in_srgb,var(--v4-teal)_14%,transparent)] font-[family-name:var(--font-display)] text-base font-semibold text-[var(--v4-teal-deep)] ring-1 ring-inset ring-[color-mix(in_srgb,var(--v4-teal)_24%,transparent)]">
                    {item.monogram}
                  </span>
                )}

                <span className="min-w-0 flex-1">
                  <span className="block font-[family-name:var(--font-display)] text-[15px] font-semibold text-[var(--v4-ink)]">
                    {item.name}
                  </span>
                  <span className="block truncate text-[13px] text-[var(--v4-ink-muted)]">{item.tagline}</span>
                </span>

                <span
                  aria-hidden
                  className="shrink-0 text-[var(--v4-ink-faint)] transition-all duration-300 group-hover:translate-x-0.5 group-hover:text-[var(--v4-teal-deep)]"
                >
                  ↗
                </span>
              </a>
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  );
}
