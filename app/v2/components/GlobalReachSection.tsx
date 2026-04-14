"use client";

import dynamic from "next/dynamic";

const MapView = dynamic(
  () => import("@/app/components/features/map/Mapview"),
  {
    ssr: false,
    loading: () => (
      <div className="flex h-[500px] items-center justify-center text-sm text-zinc-500">
        Loading global map…
      </div>
    ),
  }
);

export function GlobalReachSection() {
  return (
    <section
      id="reach"
      className="relative border-t border-white/5 bg-zinc-950 py-24 md:py-32"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 flex flex-col items-start gap-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-500/5 px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-cyan-300">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
            Global Reach
          </div>
          <h2 className="font-display text-4xl font-semibold leading-[1.05] tracking-tight text-white sm:text-5xl md:text-6xl">
            Built across{" "}
            <span className="bg-gradient-to-r from-violet-300 to-cyan-300 bg-clip-text text-transparent">
              19 countries
            </span>
            .
            <br />
            <span className="text-zinc-500">Currently coding from SE Asia.</span>
          </h2>
          <p className="max-w-2xl text-base text-zinc-400 md:text-lg">
            I quit Accenture in 2021, moved to Southeast Asia in 2022, and have been shipping product ever since — across timezones, clients, and continents.
          </p>
        </div>

        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-zinc-950/60 p-4 backdrop-blur-sm sm:p-6 md:p-8">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(167,139,250,0.08),transparent_70%)]"
          />
          <div className="relative">
            <MapView theme="dark" hideChrome />
          </div>
        </div>

        <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-zinc-500">
          <span className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-sm bg-violet-400" />
            Visited
          </span>
          <span className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-sm bg-zinc-800" />
            Not yet
          </span>
        </div>
      </div>
    </section>
  );
}
