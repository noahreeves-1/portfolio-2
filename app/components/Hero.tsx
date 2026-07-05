"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { EASE } from "./lib/springs";
import { useReducedMotionSafe } from "./lib/useReducedMotionSafe";
import { Rich } from "./lib/Rich";
import { HERO } from "../content";

// The signature: "I SHIP" over a bronze line that rolls through Noah's real
// outcomes. Staggered load-in via CSS (.m-anim*, disabled under reduced motion);
// the rotator itself is gated on reduced motion here (static first phrase).
export function Hero() {
  const reduce = useReducedMotionSafe();
  const [i, setI] = useState(0);

  useEffect(() => {
    if (reduce) return;
    const id = setInterval(() => {
      setI((v) => (v + 1) % HERO.rotator.length);
    }, 2400);
    return () => clearInterval(id);
  }, [reduce]);

  const rotatorLabel = `Also: ${HERO.rotator.join(" ")}`;

  return (
    <section className="m-hero">
      <p className="m-eyebrow m-anim m-anim-1">{HERO.eyebrow}</p>

      <h1 className="m-lead m-anim m-anim-2">{HERO.lead}</h1>

      <p className="m-rotate m-anim m-anim-3" aria-label={rotatorLabel}>
        {reduce ? (
          <span className="m-rotate-word" aria-hidden="true">
            {HERO.rotator[0]}
          </span>
        ) : (
          <AnimatePresence initial={false}>
            <motion.span
              key={i}
              className="m-rotate-word"
              aria-hidden="true"
              initial={{ y: "115%", opacity: 0 }}
              animate={{ y: "0%", opacity: 1 }}
              exit={{ y: "-115%", opacity: 0 }}
              transition={{ duration: 0.55, ease: EASE }}
            >
              {HERO.rotator[i]}
            </motion.span>
          </AnimatePresence>
        )}
      </p>

      <p className="m-sub m-anim m-anim-4">
        <Rich parts={HERO.sub} />
      </p>

      <div className="m-cta m-anim m-anim-5">
        {HERO.ctas.map((cta) => {
          const external = cta.href.startsWith("http");
          return (
            <a
              key={cta.href}
              href={cta.href}
              className={`m-btn ${cta.primary ? "m-btn-solid" : "m-btn-ghost"}`}
              {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            >
              {cta.label}
            </a>
          );
        })}
      </div>
    </section>
  );
}
