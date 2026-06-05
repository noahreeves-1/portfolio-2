"use client";

import { motion, useReducedMotion } from "motion/react";
import { KenBurns } from "./KenBurns";
import { Grain } from "./Grain";
import { GlassSurface } from "./GlassSurface";
import { CtaButton } from "./CtaButton";
import { EASE } from "./lib/springs";
import { HERO } from "../content";

// The teal-tinted Ken Burns hero. Sticky so the white work sheet rises over it.
// Content mounts with a staggered reveal; everything is gated on reduced motion.
export function Hero() {
  const reduce = useReducedMotion();

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.08, delayChildren: 0.12 } },
  };
  const item = {
    hidden: { opacity: 0, y: 14 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
  };

  return (
    <section className="sticky top-0 z-0 flex h-[100svh] flex-col justify-end overflow-hidden">
      <KenBurns />

      {/* legibility scrim — bottom-weighted so the content band (now lower-middle,
          above the peeking sheet) stays readable; solid by ~66% (behind the sheet). */}
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, color-mix(in srgb, var(--v4-teal-ink) 40%, transparent) 0%, transparent 24%, color-mix(in srgb, var(--v4-teal-ink) 55%, transparent) 48%, var(--v4-teal-ink) 66%)",
        }}
      />
      <div
        aria-hidden
        className="absolute inset-0 mix-blend-multiply"
        style={{
          background:
            "radial-gradient(120% 75% at 50% 18%, transparent 42%, color-mix(in srgb, var(--v4-teal-deep) 42%, transparent))",
        }}
      />
      <Grain opacity={0.05} />

      <motion.div
        variants={container}
        initial={reduce ? false : "hidden"}
        animate={reduce ? false : "show"}
        className="relative z-10 mx-auto w-full max-w-[34rem] px-[var(--v4-s5)] pb-[calc(var(--v4-peek)+var(--v4-s6))]"
      >
        <motion.div variants={reduce ? undefined : item}>
          <GlassSurface className="inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-[var(--v4-hero-ink)]">
            <span className="relative flex h-2 w-2">
              {!reduce && (
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--v4-teal-soft)] opacity-70" />
              )}
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--v4-teal-soft)]" />
            </span>
            <span className="font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-[0.18em]">
              {HERO.status}
            </span>
          </GlassSurface>
        </motion.div>

        <motion.h1
          variants={reduce ? undefined : item}
          className="mt-[var(--v4-s5)] font-[family-name:var(--font-display)] text-[clamp(3rem,16vw,5.25rem)] font-bold leading-[0.94] tracking-[-0.035em] text-[var(--v4-hero-ink)]"
        >
          {/* keep "0 → 1." on one line (nbsp) so it wraps as "Shipping" / "0 → 1." */}
          {HERO.head.replace(/ → /g, " → ")}
        </motion.h1>

        <motion.p
          variants={reduce ? undefined : item}
          className="mt-[var(--v4-s4)] max-w-[24rem] text-[1.0625rem] leading-relaxed text-[var(--v4-hero-ink-muted)]"
        >
          {HERO.sub}
        </motion.p>

        <motion.div variants={reduce ? undefined : item} className="mt-[var(--v4-s6)]">
          <CtaButton href={HERO.cta.href}>{HERO.cta.label}</CtaButton>
        </motion.div>
      </motion.div>
    </section>
  );
}
