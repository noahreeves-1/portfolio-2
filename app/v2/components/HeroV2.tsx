"use client";

import { Particles } from "@/components/ui/particles";
import {
  ScrollVelocityContainer,
  ScrollVelocityRow,
} from "@/components/ui/scroll-based-velocity";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { CALENDLY_URL, TRUST_CLIENTS, VELOCITY_WORDS } from "@/app/v2/constants";

export function HeroV2() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen flex-col overflow-hidden pt-28 sm:pt-32 md:pt-36"
    >
      <Particles
        className="absolute inset-0"
        quantity={140}
        ease={80}
        color="#ffffff"
        refresh={false}
      />

      <div className="pointer-events-none absolute inset-x-0 top-24 opacity-60">
        <ScrollVelocityContainer>
          <ScrollVelocityRow
            baseVelocity={4}
            direction={1}
            className="font-display text-6xl font-bold tracking-tighter text-white/5 sm:text-7xl md:text-8xl"
          >
            {VELOCITY_WORDS.map((word, i) => (
              <span key={i} className="mx-8">
                {word} ·
              </span>
            ))}
          </ScrollVelocityRow>
        </ScrollVelocityContainer>
      </div>

      <div className="relative z-10 mx-auto flex max-w-5xl flex-1 flex-col items-center px-6 text-center">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-violet-400/20 bg-violet-500/5 px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-violet-200 backdrop-blur-sm">
          <span className="h-1.5 w-1.5 rounded-full bg-violet-400 shadow-[0_0_8px_#a78bfa]" />
          Product & Rescue Engineer
        </div>

        <h1 className="font-display text-5xl font-semibold leading-[1.05] tracking-tighter text-white sm:text-6xl md:text-7xl lg:text-8xl">
          I fix what&apos;s broken.
          <br />
          <span className="bg-gradient-to-b from-violet-200 via-violet-300 to-violet-500 bg-clip-text text-transparent">
            I build what&apos;s next.
          </span>
        </h1>

        <p className="mt-8 max-w-xl text-lg text-zinc-400 md:text-xl">
          40-hour rescues. 12M-row pipelines. $600K B2B order flows — shipped.
        </p>

        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
          <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer">
            <ShimmerButton
              shimmerColor="#c4b5fd"
              background="rgba(15, 12, 29, 1)"
              className="px-8 py-4 text-base font-semibold"
            >
              Book a Consultation
            </ShimmerButton>
          </a>
          <a
            href="#rescue"
            className="group inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm text-zinc-400 transition-colors hover:text-white"
          >
            See the rescues
            <span className="inline-block transition-transform group-hover:translate-y-0.5">↓</span>
          </a>
        </div>

        <div className="mt-20 flex w-full flex-col items-center gap-4">
          <span className="text-[0.65rem] uppercase tracking-[0.3em] text-zinc-600">
            Shipped for
          </span>
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
            {TRUST_CLIENTS.map((client) => (
              <span
                key={client}
                className="font-display text-lg font-semibold tracking-tight text-zinc-500"
              >
                {client}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-zinc-950" />
    </section>
  );
}
