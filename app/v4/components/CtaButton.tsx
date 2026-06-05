"use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion } from "motion/react";
import { cn } from "@/lib/utils";
import { springPress } from "./lib/springs";

interface CtaButtonProps {
  href: string;
  children: ReactNode;
  className?: string;
  variant?: "solid" | "ghost";
}

// The one primary action, reused in the hero, contact, and floating chrome.
// `solid` = filled teal (dark ink for AA contrast); `ghost` = glass outline for
// use over the dark hero imagery. Tap gives a tight spring press cue.
export function CtaButton({ href, children, className, variant = "solid" }: CtaButtonProps) {
  const reduce = useReducedMotion();
  const external = href.startsWith("http");

  return (
    <motion.a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      whileTap={reduce ? undefined : { scale: 0.96 }}
      transition={springPress}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-[var(--v4-r-control)] px-5 py-3",
        "font-[family-name:var(--font-display)] text-[15px] font-semibold tracking-[-0.01em]",
        "transition-colors duration-200",
        variant === "solid"
          ? "bg-[var(--v4-teal)] text-[var(--v4-teal-ink)] shadow-[0_10px_30px_color-mix(in_srgb,var(--v4-teal)_36%,transparent)] hover:bg-[var(--v4-teal-soft)]"
          : "bg-[var(--v4-glass-bg)] text-[var(--v4-hero-ink)] ring-1 ring-inset ring-[var(--v4-glass-stroke)] backdrop-blur-[var(--v4-glass-blur)] hover:bg-[var(--v4-glass-bg-raise)]",
        className,
      )}
    >
      {children}
    </motion.a>
  );
}
