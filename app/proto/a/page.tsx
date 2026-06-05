"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ARC, NAME, VERBS, WORK } from "../content";
import { Grain } from "../Grain";

const TEASER = WORK.slice(0, 4);

export default function HeroAPage() {
  const reduce = useReducedMotion();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (reduce) return;
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % VERBS.length);
    }, 2100);
    return () => clearInterval(id);
  }, [reduce]);

  const verb = VERBS[index];

  return (
    <main className="relative flex min-h-screen items-center overflow-hidden">
      {/* breathing accent glow */}
      {!reduce && (
        <motion.div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-1/3 -z-0 h-[42rem] w-[42rem] -translate-x-1/2 -translate-y-1/2 rounded-full"
          style={{
            background:
              "radial-gradient(circle, color-mix(in oklab, var(--color-accent) 22%, transparent) 0%, transparent 62%)",
            filter: "blur(20px)",
          }}
          animate={{ scale: [1, 1.12, 1], opacity: [0.55, 0.8, 0.55] }}
          transition={{ duration: 9, ease: "easeInOut", repeat: Infinity }}
        />
      )}
      <Grain opacity={0.05} />

      <div className="relative z-10 mx-auto w-full max-w-3xl px-6">
        {/* eyebrow */}
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8 flex items-center gap-2.5 font-mono text-[0.72rem] uppercase tracking-[0.2em] text-zinc-400"
        >
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[color:var(--color-accent)] opacity-60" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[color:var(--color-accent)]" />
          </span>
          {NAME} — Software engineer &amp; founder
        </motion.div>

        {/* headline — verb sits at the end of line 1, so its width never reflows the rest */}
        <h1
          style={{ fontFamily: "var(--font-serif)" }}
          className="text-[clamp(2.9rem,9.5vw,6.25rem)] font-light leading-[1.02] tracking-[-0.02em] text-white"
        >
          <span className="whitespace-nowrap">
            I{" "}
            <span className="relative inline-block align-baseline">
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={verb}
                  initial={reduce ? false : { y: "0.42em", opacity: 0, filter: "blur(6px)" }}
                  animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                  exit={reduce ? undefined : { y: "-0.42em", opacity: 0, filter: "blur(6px)" }}
                  transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
                  className="inline-block italic text-[color:var(--color-accent-muted)]"
                >
                  {verb}
                </motion.span>
              </AnimatePresence>
            </span>
          </span>
          <br />
          what others can&apos;t.
        </h1>

        {/* arc */}
        <motion.p
          initial={reduce ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mt-9 max-w-xl text-base leading-relaxed text-zinc-400 sm:text-lg"
        >
          {ARC}
        </motion.p>

        {/* selected work teaser */}
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-10 flex flex-wrap items-center gap-x-5 gap-y-2"
        >
          <span className="font-mono text-[0.7rem] uppercase tracking-[0.2em] text-zinc-600">
            Selected work
          </span>
          {TEASER.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="group inline-flex items-center gap-1.5 text-sm text-zinc-300 transition-colors hover:text-white"
            >
              <span className="border-b border-transparent pb-0.5 transition-colors group-hover:border-[color:var(--color-accent)]">
                {item.name}
              </span>
              <span className="text-zinc-600 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[color:var(--color-accent-soft)]">
                ↗
              </span>
            </Link>
          ))}
        </motion.div>
      </div>
    </main>
  );
}
