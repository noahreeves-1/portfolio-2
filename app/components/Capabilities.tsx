import { cn } from "@/lib/utils";
import { CAPABILITIES } from "../content";

// The full-stack capabilities matrix, the desktop side panel beside the project
// index. Proves Noah builds end-to-end: grouped capability areas, each with the
// real tools from the work. Server component.
export function Capabilities({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "rounded-[var(--v6-r-card)] bg-[var(--v6-paper)] p-[var(--v6-s5)] shadow-[var(--v6-shadow-card)] ring-1 ring-inset ring-[var(--v6-hairline-ink)]",
        className,
      )}
    >
      <p className="font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-[0.2em] text-[var(--v6-accent-deep)]">
        {CAPABILITIES.eyebrow}
      </p>
      <h3 className="mt-2 font-[family-name:var(--font-display)] text-[clamp(1.5rem,3.5vw,2rem)] font-bold tracking-[-0.02em] text-[var(--v6-ink)]">
        {CAPABILITIES.heading}
      </h3>
      <p className="mt-2 max-w-[34ch] text-[13px] leading-relaxed text-[var(--v6-ink-muted)]">{CAPABILITIES.note}</p>

      <dl className="mt-[var(--v6-s5)] space-y-[var(--v6-s4)]">
        {CAPABILITIES.groups.map((group) => (
          <div
            key={group.label}
            className="grid grid-cols-[5.5rem_1fr] items-center gap-3 border-t border-[var(--v6-hairline-ink)] pt-[var(--v6-s3)]"
          >
            <dt className="font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.14em] text-[var(--v6-ink-soft)]">
              {group.label}
            </dt>
            <dd className="flex flex-wrap gap-1.5">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="inline-flex items-center rounded-full bg-[var(--v6-paper-sunk)] px-2.5 py-1 text-[12px] font-medium text-[var(--v6-ink)] ring-1 ring-inset ring-[var(--v6-hairline-ink)]"
                >
                  {item}
                </span>
              ))}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
