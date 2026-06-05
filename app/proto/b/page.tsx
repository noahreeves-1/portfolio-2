"use client";

import Link from "next/link";
import { motion, useReducedMotion, type Variants } from "motion/react";
import { WORK } from "../content";

const LINES = ["I fix the", "unfixable —", "and build the rest."];

const TEASER = WORK.slice(0, 4);

export default function HeroBPage() {
  const reduce = useReducedMotion();

  const container: Variants = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.1, delayChildren: 0.15 },
    },
  };

  const lineInner: Variants = {
    hidden: reduce ? { opacity: 0 } : { y: "118%" },
    show: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const fade: Variants = {
    hidden: { opacity: 0, y: reduce ? 0 : 10 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7 } },
  };

  return (
    <main className="relative flex min-h-screen flex-col justify-center overflow-hidden px-6">
      {/* corner labels */}
      <motion.div
        initial="hidden"
        animate="show"
        variants={fade}
        transition={{ delay: 0.6 }}
        className="pointer-events-none absolute inset-0 hidden p-7 font-mono text-[0.7rem] uppercase tracking-[0.18em] text-zinc-500 sm:block"
      >
        <span className="absolute left-7 top-7">Noah Kim</span>
        <span className="absolute right-7 top-7">Software engineer &amp; founder</span>
        <span className="absolute bottom-7 left-7 flex items-center gap-2">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[color:var(--color-accent)] opacity-60" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[color:var(--color-accent)]" />
          </span>
          Available for work
        </span>
        <span className="absolute bottom-7 right-7">Est. 2021</span>
      </motion.div>

      <div className="mx-auto w-full max-w-4xl">
        {/* mobile-only top label (corners are hidden on mobile) */}
        <motion.div
          initial="hidden"
          animate="show"
          variants={fade}
          className="mb-8 flex items-center gap-2 font-mono text-[0.7rem] uppercase tracking-[0.2em] text-zinc-500 sm:hidden"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--color-accent)]" />
          Noah Kim · Available for work
        </motion.div>

        {/* masked line reveal */}
        <motion.h1
          initial="hidden"
          animate="show"
          variants={container}
          style={{ fontFamily: "var(--font-serif)" }}
          className="text-[clamp(2.8rem,11vw,7rem)] font-light leading-[1.0] tracking-[-0.025em] text-white"
        >
          {LINES.map((line, i) => (
            <span key={i} className="block overflow-hidden pb-[0.06em]">
              <motion.span variants={lineInner} className="block">
                {line}
              </motion.span>
            </span>
          ))}
        </motion.h1>

        {/* accent line that draws itself */}
        <motion.div
          aria-hidden
          initial={reduce ? { opacity: 1 } : { scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.9, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mt-9 h-px w-full max-w-sm origin-left bg-gradient-to-r from-[color:var(--color-accent)] to-transparent"
        />

        {/* sub */}
        <motion.p
          initial="hidden"
          animate="show"
          variants={fade}
          transition={{ delay: 0.85, duration: 0.7 }}
          className="mt-7 max-w-lg text-base leading-relaxed text-zinc-400"
        >
          Self-taught in a pandemic. Now 7 clients, a 50k-download app, and Dx-Chart — a
          healthcare SaaS I built solo.
        </motion.p>

        {/* work teaser */}
        <motion.div
          initial="hidden"
          animate="show"
          variants={fade}
          transition={{ delay: 1, duration: 0.7 }}
          className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2"
        >
          {TEASER.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="group inline-flex items-center gap-1.5 text-sm text-zinc-300 transition-colors hover:text-white"
            >
              <span className="border-b border-transparent pb-0.5 transition-colors group-hover:border-[color:var(--color-accent)]">
                {item.name}
              </span>
              <span className="text-zinc-600 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
                ↗
              </span>
            </Link>
          ))}
        </motion.div>
      </div>
    </main>
  );
}
