"use client";

import type { ReactNode } from "react";
import { motion } from "motion/react";
import { EASE } from "./lib/springs";
import { useReducedMotionSafe } from "./lib/useReducedMotionSafe";

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
}

// Fade + rise on scroll-into-view, once. Static under prefers-reduced-motion.
export function Reveal({ children, className, delay = 0, y = 18 }: RevealProps) {
  const reduce = useReducedMotionSafe();

  if (reduce) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-12% 0px" }}
      transition={{ duration: 0.7, ease: EASE, delay }}
    >
      {children}
    </motion.div>
  );
}
