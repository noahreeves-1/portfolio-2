"use client";

import { NumberTicker } from "@/components/ui/number-ticker";
import { TypingAnimation } from "@/components/ui/typing-animation";

interface Metric {
  value: number;
  prefix?: string;
  suffix?: string;
  label: string;
  accent: string;
}

const METRICS: Metric[] = [
  {
    value: 600000,
    prefix: "$",
    suffix: "+",
    label: "Annual B2B order flow automated at Knoxlabs",
    accent: "text-emerald-300",
  },
  {
    value: 75000,
    suffix: "+",
    label: "Plays in month one for ClearThinker",
    accent: "text-[color:var(--color-accent-gold)]",
  },
  {
    value: 70,
    suffix: "%+",
    label: "Backend cost reduction on Conin's 12M-row pipeline",
    accent: "text-[color:var(--color-accent-muted)]",
  },
];

const TECH_SPECS = [
  "NestJS · Postgres · Claude API · BullMQ",
  "Next.js · Redis · Vercel AI SDK · Supabase",
  "Expo · React Native · GCP · AWS · Cloudflare",
  "TypeScript all the way down.",
];

export function MetricsBand() {
  return (
    <section className="relative overflow-hidden border-y border-white/5 bg-zinc-950 py-24 md:py-32">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.12),transparent_60%)]"
      />

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="mb-16 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-zinc-400">
            The Numbers
          </div>
          <h2 className="font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl">
            Receipts, not vibes.
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 lg:gap-8">
          {METRICS.map((metric) => (
            <div
              key={metric.label}
              className="group relative flex flex-col items-start gap-4 overflow-hidden rounded-2xl border border-white/5 bg-white/[0.02] p-6 backdrop-blur-sm transition-colors hover:border-white/10 md:p-7 lg:p-8"
            >
              <div
                className={`font-display flex w-full items-baseline font-bold leading-none tracking-tight ${metric.accent}`}
              >
                {metric.prefix && (
                  <span className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl">
                    {metric.prefix}
                  </span>
                )}
                <NumberTicker
                  value={metric.value}
                  className={`tabular-nums text-3xl sm:text-4xl md:text-4xl lg:text-5xl ${metric.accent}`}
                />
                {metric.suffix && (
                  <span className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl">
                    {metric.suffix}
                  </span>
                )}
              </div>
              <p className="text-sm text-zinc-400 md:text-base">
                {metric.label}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 flex items-center justify-center">
          <div className="flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.02] px-6 py-3 font-mono text-sm text-zinc-400 backdrop-blur-sm">
            <span className="h-2 w-2 animate-pulse rounded-full bg-[var(--color-accent)] shadow-[0_0_8px_var(--color-accent)]" />
            <TypingAnimation
              words={TECH_SPECS}
              loop
              duration={60}
              className="text-sm text-zinc-300"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
