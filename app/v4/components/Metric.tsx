"use client";

import { useEffect, useRef, useState } from "react";
import NumberFlow from "@number-flow/react";
import { useInView } from "motion/react";
import { cn } from "@/lib/utils";
import type { DisplayMetric } from "../content";

// NumberFlow's `format` only permits "compact" | "standard" notation, so narrow
// to that shape rather than the full Intl.NumberFormatOptions.
type NumberFlowFormat = { notation?: "compact" | "standard"; maximumFractionDigits?: number };

interface MetricValueProps {
  value?: number;
  prefix?: string;
  suffix?: string;
  text?: string;
  className?: string;
  format?: NumberFlowFormat;
}

// Apple-smooth count-up (NumberFlow). Numeric metrics animate 0 → value when
// scrolled into view; text metrics ("Solo") render as-is. NumberFlow respects
// prefers-reduced-motion internally — it renders the final value without rolling.
export function MetricValue({ value, prefix, suffix, text, className, format }: MetricValueProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (inView && value != null) setDisplay(value);
  }, [inView, value]);

  if (text) {
    return (
      <span ref={ref} className={className}>
        {text}
      </span>
    );
  }

  const fmt: NumberFlowFormat =
    format ?? (value != null && Math.abs(value) >= 1000 ? { notation: "compact", maximumFractionDigits: 1 } : {});

  return (
    <span ref={ref} className={cn("tabular-nums", className)}>
      <NumberFlow value={display} prefix={prefix} suffix={suffix} format={fmt} willChange />
    </span>
  );
}

// Small teal-tinted pill used on work cards — the "receipt." Teal-deep value for
// AA contrast on white; muted-ink label.
export function MetricChip({ metric, className }: { metric: DisplayMetric; className?: string }) {
  return (
    <div
      className={cn(
        "inline-flex items-baseline gap-2 rounded-full px-3 py-1 ring-1 ring-inset",
        "ring-[color-mix(in_srgb,var(--v4-teal)_30%,transparent)]",
        className,
      )}
      style={{ backgroundColor: "color-mix(in srgb, var(--v4-teal) 12%, transparent)" }}
    >
      <span className="font-[family-name:var(--font-mono)] text-sm font-semibold text-[var(--v4-teal-deep)]">
        <MetricValue value={metric.value} prefix={metric.prefix} suffix={metric.suffix} text={metric.text} />
      </span>
      <span className="text-xs text-[var(--v4-ink-muted)]">{metric.label}</span>
    </div>
  );
}
