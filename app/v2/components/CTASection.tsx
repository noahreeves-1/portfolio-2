"use client";

import { ShimmerButton } from "@/components/ui/shimmer-button";
import { CALENDLY_URL } from "@/app/v2/constants";

export function CTASection() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden border-t border-white/5 bg-zinc-950 py-32 md:py-40"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.15),transparent_60%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[color:var(--color-accent)]/40 to-transparent"
      />

      <div className="relative mx-auto max-w-3xl px-6 text-center">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[color:var(--color-accent)]/30 bg-[color:var(--color-accent)]/5 px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-[color:var(--color-accent-soft)]">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[var(--color-accent)]" />
          Have a high-stakes project?
        </div>

        <h2 className="font-display text-4xl font-semibold leading-[1.05] tracking-tighter text-white sm:text-5xl md:text-6xl lg:text-7xl">
          Let&apos;s talk about your
          <br />
          <span className="bg-gradient-to-b from-[color:var(--color-accent-soft)] via-[color:var(--color-accent-muted)] to-[color:var(--color-accent-deep)] bg-clip-text text-transparent">
            technical bottleneck.
          </span>
        </h2>

        <p className="mx-auto mt-8 max-w-xl text-base text-zinc-400 md:text-lg">
          If your build is broken, your pipeline won&apos;t run, or you need to ship a product yesterday — I have 30 minutes open this week.
        </p>

        <div className="mt-12 flex flex-col items-center gap-4">
          <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer">
            <ShimmerButton
              shimmerColor="var(--color-accent-gold-soft)"
              background="rgba(15, 12, 29, 1)"
              className="px-10 py-5 text-base font-semibold md:text-lg"
            >
              Book a Consultation
            </ShimmerButton>
          </a>
          <span className="text-xs uppercase tracking-[0.2em] text-zinc-600">
            30-minute call · Free · No pitch deck
          </span>
        </div>
      </div>
    </section>
  );
}
