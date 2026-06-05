import { NumberTicker } from "@/components/ui/number-ticker";
import { cn } from "@/lib/utils";
import type { Metric } from "../../content";

// A small glass-tinted pill: the "receipt." Numeric metrics count up on view;
// text metrics render as-is. The value is always teal; the label stays muted.
export function MetricChip({ metric, className }: { metric: Metric; className?: string }) {
  return (
    <div
      className={cn(
        "inline-flex items-baseline gap-2 rounded-full px-3 py-1 ring-1 ring-inset",
        "ring-[color-mix(in_srgb,var(--v3-teal)_28%,transparent)]",
        className,
      )}
      style={{ backgroundColor: "color-mix(in srgb, var(--v3-teal) 12%, transparent)" }}
    >
      <span className="font-[family-name:var(--font-mono)] text-sm font-semibold tabular-nums text-[var(--v3-teal-soft)]">
        {metric.text ? (
          metric.text
        ) : (
          <>
            {metric.prefix}
            <NumberTicker value={metric.value ?? 0} className="!text-[var(--v3-teal-soft)]" />
            {metric.suffix}
          </>
        )}
      </span>
      <span className="text-xs text-[var(--v3-fg-muted)]">{metric.label}</span>
    </div>
  );
}
