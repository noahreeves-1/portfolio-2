"use client";

import { Drawer } from "vaul";
import { motion, useReducedMotion } from "motion/react";
import { DeviceFrame } from "./DeviceFrame";
import { WorkCard, WorkScreen } from "./WorkCard";
import { MetricChip } from "./Metric";
import { TechRow } from "./TechRow";
import { CtaButton } from "./CtaButton";
import { springSnappy } from "./lib/springs";
import type { FeaturedWork } from "../content";

// A work card that opens its case study as a real iOS-style bottom sheet (Vaul:
// drag-to-dismiss, the iOS spring curve, background-scale). The card is the
// drawer trigger; hover/press use springs and are reduced-motion gated.
export function ProjectSheet({ work }: { work: FeaturedWork }) {
  const reduce = useReducedMotion();

  return (
    <Drawer.Root shouldScaleBackground>
      <Drawer.Trigger asChild>
        <motion.button
          type="button"
          aria-label={`Open ${work.name} case study`}
          whileHover={reduce ? undefined : { y: -4 }}
          whileTap={reduce ? undefined : { scale: 0.985 }}
          transition={springSnappy}
          className="group block h-full w-full rounded-[var(--v4-r-card)] text-left outline-none focus-visible:ring-2 focus-visible:ring-[var(--v4-ring)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--v4-sheet)]"
        >
          <WorkCard work={work} />
        </motion.button>
      </Drawer.Trigger>

      <Drawer.Portal>
        <Drawer.Overlay className="fixed inset-0 z-40 bg-[rgba(2,18,16,0.55)] backdrop-blur-[2px]" />
        <Drawer.Content
          className="fixed inset-x-0 bottom-0 z-50 mx-auto flex max-h-[93vh] max-w-[40rem] flex-col rounded-t-[var(--v4-r-sheet)] bg-[var(--v4-sheet)] outline-none"
        >
          {/* grabber */}
          <div className="mx-auto mt-3 h-1.5 w-10 shrink-0 rounded-full bg-[var(--v4-hairline-strong)]" />

          <div className="overflow-y-auto overscroll-contain px-[var(--v4-s5)] pb-[calc(var(--v4-s8)+env(safe-area-inset-bottom))] pt-[var(--v4-s4)]">
            <p className="font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-[0.18em] text-[var(--v4-teal-deep)]">
              {work.kind}
            </p>
            <Drawer.Title className="mt-1 font-[family-name:var(--font-display)] text-[2rem] font-bold leading-tight tracking-[-0.025em] text-[var(--v4-ink)]">
              {work.name}
            </Drawer.Title>
            <Drawer.Description className="mt-1.5 text-[15px] leading-snug text-[var(--v4-ink-muted)]">
              {work.tagline}
            </Drawer.Description>

            <div
              className="mt-[var(--v4-s5)] flex items-center justify-center overflow-hidden rounded-[var(--v4-r-card)] px-6 pt-8"
              style={{ background: "linear-gradient(165deg, var(--v4-teal-deep), var(--v4-teal-ink))" }}
            >
              <DeviceFrame variant={work.device} className="translate-y-1">
                <WorkScreen work={work} />
              </DeviceFrame>
            </div>

            <div className="mt-[var(--v4-s5)]">
              <MetricChip metric={work.metric} />
            </div>

            <ul className="mt-[var(--v4-s5)] space-y-3">
              {work.beats.map((beat) => (
                <li key={beat} className="flex gap-3 text-[15px] leading-relaxed text-[var(--v4-ink-muted)]">
                  <span
                    aria-hidden
                    className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--v4-teal)]"
                  />
                  <span>{beat}</span>
                </li>
              ))}
            </ul>

            <div className="mt-[var(--v4-s5)]">
              <TechRow tech={work.tech} />
            </div>

            {work.url && work.url !== "#" ? (
              <div className="mt-[var(--v4-s6)]">
                <CtaButton href={work.url} className="w-full">
                  Visit {work.name}
                  <span aria-hidden>↗</span>
                </CtaButton>
              </div>
            ) : null}
          </div>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
}
