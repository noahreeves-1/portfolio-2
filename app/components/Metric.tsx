"use client";

import { useEffect, useRef, useState } from "react";
import NumberFlow from "@number-flow/react";
import { useInView } from "motion/react";
import { cn } from "@/lib/utils";

// NumberFlow's `format` only permits "compact" | "standard" notation.
type NumberFlowFormat = { notation?: "compact" | "standard"; maximumFractionDigits?: number };

interface MetricValueProps {
  value?: number;
  prefix?: string;
  suffix?: string;
  text?: string;
  className?: string;
  format?: NumberFlowFormat;
}

// Smooth count-up (NumberFlow). Numeric values animate 0 → value when scrolled
// into view; text values ("MSc") render as-is. NumberFlow respects
// prefers-reduced-motion internally, it renders the final value, no rolling.
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
