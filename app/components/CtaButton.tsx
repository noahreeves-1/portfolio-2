"use client";

import type { ReactNode } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { springPress } from "./lib/springs";
import { useReducedMotionSafe } from "./lib/useReducedMotionSafe";

interface CtaButtonProps {
  href: string;
  children: ReactNode;
  className?: string;
  variant?: "solid" | "ghost";
}

// The one primary action. `solid` = filled sunset-orange with deep-indigo ink;
// `ghost` = glass outline over the dark hero. Tap gives a tight press cue.
export function CtaButton({ href, children, className, variant = "solid" }: CtaButtonProps) {
  const reduce = useReducedMotionSafe();
  const external = href.startsWith("http");

  return (
    <motion.a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      whileTap={reduce ? undefined : { scale: 0.96 }}
      transition={springPress}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-[var(--v6-r-control)] px-5 py-3",
        "font-[family-name:var(--font-display)] text-[15px] font-semibold tracking-[-0.01em]",
        "transition-colors duration-200",
        variant === "solid"
          ? "bg-[var(--v6-accent)] text-[var(--v6-sky-ink)] shadow-[0_10px_30px_color-mix(in_srgb,var(--v6-accent)_38%,transparent)] hover:bg-[var(--v6-accent-soft)]"
          : "bg-[var(--v6-glass-bg)] text-[var(--v6-cream)] ring-1 ring-inset ring-[var(--v6-glass-stroke)] backdrop-blur-[var(--v6-glass-blur)] hover:bg-[var(--v6-glass-bg-raise)]",
        className,
      )}
    >
      {children}
    </motion.a>
  );
}
