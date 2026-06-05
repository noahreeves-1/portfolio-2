"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useReducedMotion } from "motion/react";
import { cn } from "@/lib/utils";
import { CITIES } from "../content";

const PERIOD = 6500; // ms each city is featured before crossfading

// Cinematic crossfading city backdrop with a slow Ken Burns zoom. One lightweight
// state tick every ~6.5s (negligible for INP — never during interaction); the
// crossfade (opacity) and zoom (transform) run on the compositor. The first image
// is eager/LCP-priority; the rest lazy-load. Pauses while the tab is hidden.
// Under prefers-reduced-motion: only the first image shows, no fade, no zoom.
export function KenBurns() {
  const reduce = useReducedMotion();
  const [active, setActive] = useState(0);
  const pausedRef = useRef(false);

  useEffect(() => {
    if (reduce) return;
    const onVisibility = () => {
      pausedRef.current = document.hidden;
    };
    document.addEventListener("visibilitychange", onVisibility);
    const id = setInterval(() => {
      if (!pausedRef.current) setActive((i) => (i + 1) % CITIES.length);
    }, PERIOD);
    return () => {
      clearInterval(id);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, [reduce]);

  return (
    <div aria-hidden className="absolute inset-0 overflow-hidden bg-[var(--v4-teal-ink)]">
      {CITIES.map((city, i) => {
        const visible = reduce ? i === 0 : i === active;
        return (
          <div
            key={city.src}
            className="absolute inset-0 transition-opacity duration-[1600ms] ease-in-out"
            style={{ opacity: visible ? 1 : 0 }}
          >
            <Image
              src={city.src}
              alt=""
              fill
              priority={i === 0}
              loading={i === 0 ? "eager" : "lazy"}
              sizes="100vw"
              className={cn(
                "object-cover",
                "v4-kenburns",
                !reduce && visible && "v4-kenburns--active",
              )}
            />
          </div>
        );
      })}
    </div>
  );
}
