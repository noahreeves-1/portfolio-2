"use client";

import { useState } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
} from "motion/react";
import { CtaButton } from "./CtaButton";
import { springSnappy } from "./lib/springs";
import { HERO } from "../content";

// The always-available primary action — a floating teal pill that slides in once
// you're past the hero (app-feel without a full tab-bar, matching the chosen
// scrolling-sheets model). Sits below any open Vaul sheet (z-30 < overlay z-40).
export function AppChrome() {
  const reduce = useReducedMotion();
  const { scrollY } = useScroll();
  const [show, setShow] = useState(false);

  useMotionValueEvent(scrollY, "change", (y) => {
    const threshold = typeof window !== "undefined" ? window.innerHeight * 0.8 : 600;
    setShow(y > threshold);
  });

  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-0 z-30 flex justify-center pb-[calc(var(--v4-s4)+env(safe-area-inset-bottom))]">
      <AnimatePresence>
        {show ? (
          <motion.div
            initial={reduce ? { opacity: 0 } : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduce ? { opacity: 0 } : { opacity: 0, y: 24 }}
            transition={reduce ? { duration: 0.2 } : springSnappy}
            className="pointer-events-auto"
          >
            <CtaButton href={HERO.cta.href} className="px-6 shadow-[0_12px_36px_rgba(2,20,18,0.34)]">
              {HERO.cta.label}
            </CtaButton>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
