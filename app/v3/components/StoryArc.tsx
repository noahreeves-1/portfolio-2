"use client";

import { motion, useReducedMotion } from "motion/react";
import { ARC } from "../content";
import { EASE } from "./lib/springs";

// The story, compressed to four serif lines that rise into view behind a mask
// (the one place serif is allowed — it carries the founder warmth the rest of the
// app-chrome deliberately withholds). Static under prefers-reduced-motion.
export function StoryArc() {
  const reduce = useReducedMotion();

  return (
    <section
      id="story"
      aria-labelledby="story-heading"
      className="mx-auto w-full max-w-3xl scroll-mt-24 px-5 py-20 sm:py-28"
    >
      <h2 id="story-heading" className="sr-only">
        About Noah
      </h2>
      <p className="font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-[0.25em] text-[var(--v3-teal-soft)]">
        {ARC.kicker}
      </p>

      <div className="mt-8 space-y-4">
        {ARC.lines.map((line, i) => (
          <span key={i} className="block overflow-hidden">
            <motion.span
              className="block text-xl leading-snug text-[var(--v3-fg)] sm:text-2xl"
              style={{ fontFamily: "var(--font-serif)" }}
              initial={reduce ? false : { y: "115%" }}
              whileInView={{ y: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ duration: 0.85, ease: EASE, delay: i * 0.08 }}
            >
              {line}
            </motion.span>
          </span>
        ))}
      </div>
    </section>
  );
}
