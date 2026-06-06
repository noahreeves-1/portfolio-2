"use client";

import type { ElementType, ReactNode } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { EASE } from "./lib/springs";
import { useReducedMotionSafe } from "./lib/useReducedMotionSafe";

interface ClipTextProps {
  lines: ReactNode[];
  as?: ElementType;
  className?: string;
  lineClassName?: string;
  stagger?: number;
  delay?: number;
}

// The signature reveal: each line sits in an overflow-hidden mask and rises from
// below on mount, staggered. Static under prefers-reduced-motion.
export function ClipText({ lines, as, className, lineClassName, stagger = 0.08, delay = 0.1 }: ClipTextProps) {
  const reduce = useReducedMotionSafe();
  const Tag: ElementType = as ?? "div";

  if (reduce) {
    return (
      <Tag className={className}>
        {lines.map((line, i) => (
          <span key={i} className={cn("block", lineClassName)}>
            {line}
          </span>
        ))}
      </Tag>
    );
  }

  return (
    <Tag className={className}>
      {lines.map((line, i) => (
        <span key={i} className={cn("block overflow-hidden pb-[0.12em]", lineClassName)}>
          <motion.span
            className="block will-change-transform"
            initial={{ y: "115%" }}
            animate={{ y: "0%" }}
            transition={{ duration: 0.85, ease: EASE, delay: delay + i * stagger }}
          >
            {line}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
}
