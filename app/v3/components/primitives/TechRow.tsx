import { cn } from "@/lib/utils";

// Mono tech tags — instrument-panel restraint, no fills.
export function TechRow({ tech, className }: { tech: string[]; className?: string }) {
  return (
    <ul className={cn("flex flex-wrap gap-1.5", className)}>
      {tech.map((t) => (
        <li
          key={t}
          className="rounded-md px-2 py-1 font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-wider text-[var(--v3-fg-muted)] ring-1 ring-inset ring-[var(--v3-glass-stroke)]"
        >
          {t}
        </li>
      ))}
    </ul>
  );
}
