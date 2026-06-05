"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { NAME } from "../content";
import { Grain } from "../Grain";
import { MeshCanvas } from "./MeshCanvas";
import { MagneticButton } from "./MagneticButton";

export default function HeroCPage() {
  const reduce = useReducedMotion();

  return (
    <main className="relative flex min-h-screen items-center overflow-hidden">
      <MeshCanvas />

      {/* vignette for legibility over the mesh */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-10"
        style={{
          background:
            "radial-gradient(120% 90% at 50% 40%, transparent 35%, rgba(9,9,11,0.55) 75%, rgba(9,9,11,0.92) 100%)",
        }}
      />
      <Grain opacity={0.06} />

      <div className="relative z-30 mx-auto w-full max-w-3xl px-6">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8 flex items-center gap-2.5 font-mono text-[0.72rem] uppercase tracking-[0.2em] text-zinc-300"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--color-accent-soft)] shadow-[0_0_10px_var(--color-accent)]" />
          {NAME} — Engineer &amp; founder
        </motion.div>

        <motion.h1
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          style={{ fontFamily: "var(--font-serif)" }}
          className="text-[clamp(3rem,10vw,6.75rem)] font-light leading-[1.0] tracking-[-0.02em] text-white"
        >
          I build what&apos;s{" "}
          <span className="italic text-[color:var(--color-accent-soft)]">next.</span>
        </motion.h1>

        <motion.p
          initial={reduce ? false : { opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="mt-8 max-w-xl text-base leading-relaxed text-zinc-300 sm:text-lg"
        >
          Self-taught engineer and founder. 7 clients, a mobile app past 50,000 downloads,
          and Dx-Chart — a healthcare SaaS I built end to end, solo.
        </motion.p>

        <motion.div
          initial={reduce ? false : { opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-10 flex items-center gap-6"
        >
          <MagneticButton href="#">Let&apos;s talk ↗</MagneticButton>
          <Link
            href="#"
            className="text-sm text-zinc-300 underline-offset-4 transition-colors hover:text-white hover:underline"
          >
            See the work
          </Link>
        </motion.div>
      </div>
    </main>
  );
}
