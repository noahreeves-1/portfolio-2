import { cn } from "@/lib/utils";

// Mono tech tags — instrument-panel restraint, no fills. Tuned for the white
// sheet world (muted ink on a hairline ring).
export function TechRow({ tech, className }: { tech: string[]; className?: string }) {
  return (
    <ul className={cn("flex flex-wrap gap-1.5", className)}>
      {tech.map((t) => (
        <li
          key={t}
          className="rounded-md px-2 py-1 font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-wider text-[var(--v4-ink-muted)] ring-1 ring-inset ring-[var(--v4-hairline-strong)]"
        >
          {t}
        </li>
      ))}
    </ul>
  );
}
