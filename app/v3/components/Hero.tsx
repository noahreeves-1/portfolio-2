"use client";

import { motion, useReducedMotion } from "motion/react";
import { HERO, CALENDLY_URL } from "../content";
import { EASE } from "./lib/springs";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.75, ease: EASE } },
};

// App launch-screen: a confident headline (one serif-italic phrase), a single
// supporting line, and the primary action — nothing more. Mounts with a staggered
// reveal; renders static under prefers-reduced-motion.
export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section
      id="top"
      className="relative mx-auto flex min-h-[100svh] w-full max-w-5xl flex-col justify-center px-5 pb-28 pt-28"
    >
      <motion.div variants={container} initial={reduce ? false : "hidden"} animate="show">
        <motion.div variants={item} className="inline-flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            {!reduce && (
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--v3-teal)] opacity-60" />
            )}
            <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--v3-teal)]" />
          </span>
          <span className="font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-[0.22em] text-[var(--v3-fg-muted)]">
            {HERO.kicker}
          </span>
        </motion.div>

        <motion.h1
          variants={item}
          className="mt-6 text-[clamp(2.5rem,9vw,4.75rem)] font-semibold leading-[1.02] tracking-[-0.03em]"
        >
          <span className="block font-[family-name:var(--font-display)] text-[var(--v3-fg)]">
            {HERO.lead}
          </span>
          <span
            className="block italic text-[var(--v3-teal-soft)]"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            {HERO.accent}
          </span>
        </motion.h1>

        <motion.p
          variants={item}
          className="mt-7 max-w-md text-base leading-relaxed text-[var(--v3-fg-muted)]"
        >
          {HERO.subline}
        </motion.p>

        <motion.div variants={item} className="mt-9 flex flex-wrap items-center gap-3">
          <motion.a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            whileTap={reduce ? undefined : { scale: 0.97 }}
            className="inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-[var(--v3-bg)] shadow-[0_6px_24px_color-mix(in_srgb,var(--v3-teal)_30%,transparent)] transition-transform duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--v3-ring)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--v3-bg)]"
            style={{ backgroundImage: "var(--v3-grad)" }}
          >
            Book a call
          </motion.a>
          <a
            href="#work"
            className="inline-flex items-center gap-1.5 rounded-full px-5 py-3 text-sm font-medium text-[var(--v3-fg-muted)] ring-1 ring-inset ring-[var(--v3-glass-stroke)] transition-colors hover:text-[var(--v3-fg)] hover:ring-[var(--v3-glass-stroke-hi)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--v3-ring)]"
          >
            See the work
            <span aria-hidden>↓</span>
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
