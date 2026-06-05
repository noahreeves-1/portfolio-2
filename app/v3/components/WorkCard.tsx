"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { GlassSurface } from "./GlassSurface";
import { DeviceFrame } from "./DeviceFrame";
import { ScreenshotFallback } from "./ScreenshotFallback";
import { MetricChip } from "./primitives/MetricChip";
import { TechRow } from "./primitives/TechRow";
import { springSnappy } from "./lib/springs";
import type { FeaturedWork } from "../content";

const ArrowIcon = (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-4 w-4"
    aria-hidden="true"
  >
    <path d="M7 17 17 7" />
    <path d="M7 7h10v10" />
  </svg>
);

// A glass "app screen" card: device-framed screenshot (or an intentional splash
// fallback) over the kicker / name / one-liner / metric / tech. The whole card is
// the link; it lifts on hover and depresses on press (the native-app tactile cue).
export function WorkCard({ work }: { work: FeaturedWork }) {
  const reduce = useReducedMotion();

  const screen = work.screenshot ? (
    <Image
      src={work.screenshot}
      alt={`${work.name} product screenshot`}
      fill
      sizes="(max-width: 768px) 90vw, 540px"
      className="object-cover object-top"
    />
  ) : (
    <ScreenshotFallback
      name={work.name}
      monogram={work.monogram}
      logo={work.logo}
      caption={work.kicker}
    />
  );

  const framed =
    work.frame === "phone" ? (
      <div className="flex justify-center rounded-2xl bg-gradient-to-b from-white/[0.03] to-transparent py-5">
        <DeviceFrame variant="phone">{screen}</DeviceFrame>
      </div>
    ) : work.frame === "browser" ? (
      <DeviceFrame variant="browser">{screen}</DeviceFrame>
    ) : (
      <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl bg-[var(--v3-bg-raise)] ring-1 ring-inset ring-white/10">
        {screen}
      </div>
    );

  return (
    <motion.a
      href={work.url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${work.name} — ${work.line} (opens in a new tab)`}
      className="group block h-full focus-visible:outline-none"
      whileHover={reduce ? undefined : { y: -4 }}
      whileTap={reduce ? undefined : { scale: 0.985 }}
      transition={springSnappy}
    >
      <GlassSurface
        interactive
        className="h-full p-4 group-hover:bg-[var(--v3-glass-bg-raise)] group-hover:shadow-[var(--v3-glass-shadow-lift)] group-focus-visible:ring-2 group-focus-visible:ring-[var(--v3-ring)] sm:p-5"
      >
        {framed}
        <div className="mt-5 px-1 pb-1">
          <p className="font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-[0.2em] text-[var(--v3-fg-faint)]">
            {work.kicker}
          </p>
          <div className="mt-2 flex items-center gap-2">
            <h3 className="font-[family-name:var(--font-display)] text-2xl font-semibold tracking-tight text-[var(--v3-fg)]">
              {work.name}
            </h3>
            <span className="text-[var(--v3-fg-faint)] transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[var(--v3-teal-soft)]">
              {ArrowIcon}
            </span>
          </div>
          <p className="mt-2 text-sm leading-relaxed text-[var(--v3-fg-muted)]">{work.line}</p>
          <div className="mt-4">
            <MetricChip metric={work.metric} />
          </div>
          <TechRow tech={work.tech} className="mt-4" />
        </div>
      </GlassSurface>
    </motion.a>
  );
}
