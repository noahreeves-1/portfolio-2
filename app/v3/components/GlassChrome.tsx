"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { cn } from "@/lib/utils";
import { NAV, NAME, CALENDLY_URL } from "../content";
import { springSnappy } from "./lib/springs";

const glassRaised =
  "bg-[var(--v3-glass-bg-raise)] shadow-[var(--v3-glass-shadow)] ring-[var(--v3-glass-stroke)] backdrop-blur-[var(--v3-glass-blur)] backdrop-saturate-[var(--v3-glass-sat)]";

// The app chrome: a floating glass top bar (brand + call) and, on mobile, a
// thumb-reachable bottom tab-bar. Scroll-spy lights the active section via an
// IntersectionObserver (off the main thread — no scroll math), and the active
// pill slides between tabs with a shared layoutId.
export function GlassChrome() {
  const reduce = useReducedMotion();
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const els = NAV.map((n) => document.getElementById(n.id)).filter(
      (el): el is HTMLElement => el !== null,
    );
    if (!els.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: [0, 0.25, 0.5, 1] },
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const pillTransition = reduce ? { duration: 0 } : springSnappy;

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-40 flex justify-center px-4 pt-[max(0.7rem,env(safe-area-inset-top))]">
        <div
          className={cn(
            "flex w-full max-w-3xl items-center justify-between gap-3 rounded-full px-2 py-2 ring-1 ring-inset transition-all duration-300",
            scrolled ? glassRaised : "bg-transparent ring-transparent",
          )}
        >
          <a
            href="#top"
            className="flex items-center gap-2 rounded-full px-3 py-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--v3-ring)]"
          >
            <span
              className="h-2.5 w-2.5 rounded-full"
              style={{ backgroundImage: "var(--v3-grad)" }}
            />
            <span className="font-[family-name:var(--font-display)] font-semibold text-[var(--v3-fg)]">
              {NAME}
            </span>
          </a>

          <nav aria-label="Primary" className="hidden items-center gap-0.5 md:flex">
            {NAV.map((n) => (
              <a
                key={n.id}
                href={`#${n.id}`}
                className={cn(
                  "relative rounded-full px-3.5 py-1.5 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--v3-ring)]",
                  active === n.id
                    ? "text-[var(--v3-fg)]"
                    : "text-[var(--v3-fg-muted)] hover:text-[var(--v3-fg)]",
                )}
              >
                {active === n.id && (
                  <motion.span
                    layoutId="nav-pill-desktop"
                    className="absolute inset-0 -z-10 rounded-full bg-white/[0.06] ring-1 ring-inset ring-[var(--v3-glass-stroke)]"
                    transition={pillTransition}
                  />
                )}
                {n.label}
              </a>
            ))}
          </nav>

          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full px-4 py-2 text-sm font-semibold text-[var(--v3-bg)] transition-transform duration-200 active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--v3-ring)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--v3-bg)]"
            style={{ backgroundImage: "var(--v3-grad)" }}
          >
            Book a call
          </a>
        </div>
      </header>

      <nav
        aria-label="Sections"
        className="fixed inset-x-0 bottom-0 z-40 flex justify-center px-4 pb-[max(0.7rem,env(safe-area-inset-bottom))] md:hidden"
      >
        <div
          className={cn(
            "flex items-center gap-0.5 rounded-full p-1.5 ring-1 ring-inset",
            glassRaised,
          )}
        >
          {NAV.map((n) => (
            <a
              key={n.id}
              href={`#${n.id}`}
              aria-current={active === n.id ? "true" : undefined}
              className={cn(
                "relative rounded-full px-4 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--v3-ring)]",
                active === n.id ? "text-[var(--v3-fg)]" : "text-[var(--v3-fg-muted)]",
              )}
            >
              {active === n.id && (
                <motion.span
                  layoutId="nav-pill-mobile"
                  className="absolute inset-0 -z-10 rounded-full bg-white/[0.07] ring-1 ring-inset ring-[var(--v3-glass-stroke)]"
                  transition={pillTransition}
                />
              )}
              {n.label}
            </a>
          ))}
        </div>
      </nav>
    </>
  );
}
