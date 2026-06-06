"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { HeroImage } from "./HeroImage";
import { ClipText } from "./ClipText";
import { Grain } from "./Grain";
import { CtaButton } from "./CtaButton";
import { EASE } from "./lib/springs";
import { useReducedMotionSafe } from "./lib/useReducedMotionSafe";
import { useAvailabilityStatus } from "./lib/availabilityStatus";
import { HERO } from "../content";

// The full-bleed, bottom-left-anchored hero. Same composition as before, simpler
// copy: a "from consulting to engineering" line, and an emerald "Current
// projects" pill instead of an availability badge.
export function Hero() {
  const reduce = useReducedMotionSafe();
  const availability = useAvailabilityStatus();

  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end start"] });
  const parallaxY = useTransform(scrollYProgress, [0, 1], ["0%", "6%"]);

  // `animate` always settles on the final state (even when reduced) so nothing
  // can freeze mid-fade when the reduced-motion preference resolves post-mount.
  const fade = (delay: number) => ({
    initial: reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 },
    animate: { opacity: 1, y: 0 },
    transition: reduce ? { duration: 0 } : { duration: 0.7, ease: EASE, delay },
  });

  const headlineLines = HERO.headline.map((line, i) =>
    line.accent ? (
      <span key={i}>
        {line.text}
        <em className="font-[family-name:var(--font-serif)] font-light italic text-[var(--v6-accent)]">
          {line.accent}
        </em>
      </span>
    ) : (
      line.text
    ),
  );

  return (
    <section
      ref={sectionRef}
      className="relative flex h-[100svh] min-h-[34rem] flex-col justify-between overflow-hidden"
    >
      <HeroImage y={reduce ? undefined : parallaxY} />

      {/* Legibility scrims, bottom-weighted, left bias for the lower-left copy. */}
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, color-mix(in srgb, var(--v6-sky-ink) 46%, transparent) 0%, transparent 24%, transparent 48%, color-mix(in srgb, var(--v6-sky-ink) 82%, transparent) 100%)",
        }}
      />
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(96deg, color-mix(in srgb, var(--v6-sky-ink) 58%, transparent) 0%, transparent 50%)",
        }}
      />
      <Grain opacity={0.06} className="pointer-events-none absolute inset-0 z-[5] mix-blend-overlay" />

      {/* Top bar, name left, nav right. */}
      <motion.header
        {...fade(0)}
        className="relative z-10 px-[var(--v6-s5)] pt-[calc(var(--v6-s5)+env(safe-area-inset-top))] sm:px-[var(--v6-s7)]"
      >
        <div className="mx-auto flex w-full max-w-[72rem] items-center justify-between">
          <span className="font-[family-name:var(--font-mono)] text-[13px] uppercase tracking-[0.22em] text-[var(--v6-cream)]">
            {HERO.name}
          </span>
          <nav className="flex items-center gap-[var(--v6-s5)]">
            {HERO.nav.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="font-[family-name:var(--font-mono)] text-[12px] uppercase tracking-[0.18em] text-[var(--v6-cream-muted)] transition-colors hover:text-[var(--v6-accent)]"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </motion.header>

      {/* Bottom-left cluster, live availability pill, headline, action row. */}
      <div className="relative z-10 px-[var(--v6-s5)] pb-[calc(var(--v6-s7)+env(safe-area-inset-bottom))] sm:px-[var(--v6-s7)] sm:pb-[var(--v6-s8)]">
        <div className="mx-auto w-full max-w-[72rem]">
          <motion.div {...fade(0.12)}>
          <span className="inline-flex items-center gap-2 rounded-full bg-[var(--v6-glass-bg)] px-3 py-1.5 ring-1 ring-inset ring-[var(--v6-glass-stroke)] backdrop-blur-[var(--v6-glass-blur)]">
            <span className="relative flex h-2 w-2">
              {!reduce && availability.ping ? (
                <span
                  className="absolute inline-flex h-full w-full animate-ping rounded-full opacity-70"
                  style={{ backgroundColor: availability.dotColor }}
                />
              ) : null}
              <span
                className="relative inline-flex h-2 w-2 rounded-full"
                style={{ backgroundColor: availability.dotColor }}
              />
            </span>
            <span className="font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-[0.18em]">
              <span className="text-[var(--v6-cream)]">{availability.label}</span>
              <span className="text-[var(--v6-cream-muted)]"> · {HERO.location}</span>
            </span>
          </span>
        </motion.div>

        <ClipText
          as="h1"
          lines={headlineLines}
          delay={0.24}
          stagger={0.09}
          className="mt-[var(--v6-s5)] max-w-[24ch] font-[family-name:var(--font-display)] text-[clamp(2.5rem,8vw,5.5rem)] font-bold leading-[0.94] tracking-[-0.035em] text-[var(--v6-cream)]"
        />

        <motion.div {...fade(0.66)} className="mt-[var(--v6-s6)] flex items-center gap-[var(--v6-s5)]">
          <CtaButton href={HERO.cta.href} variant="ghost">
            {HERO.cta.label}
          </CtaButton>
          <span className="flex items-center gap-2 font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-[0.18em] text-[var(--v6-cream-muted)]">
            <span aria-hidden className={reduce ? "" : "animate-bounce"}>
              ↓
            </span>
            {HERO.scrollLabel}
          </span>
        </motion.div>
        </div>
      </div>
    </section>
  );
}
