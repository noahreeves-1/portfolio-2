"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { EASE } from "./lib/springs";
import { useReducedMotionSafe } from "./lib/useReducedMotionSafe";
import { Rich } from "./lib/Rich";
import { HERO } from "../content";

// The signature: "I SHIP" over a bronze line that rolls through Noah's real
// outcomes. Staggered load-in via CSS (.m-anim*). The rotator always cycles;
// under reduced motion it crossfades (opacity only, no vertical travel).
export function Hero() {
  const reduce = useReducedMotionSafe();
  const [i, setI] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setI((v) => (v + 1) % HERO.rotator.length);
    }, 2400);
    return () => clearInterval(id);
  }, []);

  const rotatorLabel = `Also: ${HERO.rotator.join(" ")}`;

  return (
    <section className="m-hero">
      <p className="m-eyebrow m-anim m-anim-1">{HERO.eyebrow}</p>

      <h1 className="m-lead m-anim m-anim-2">{HERO.lead}</h1>

      <p className="m-rotate m-anim m-anim-3" aria-label={rotatorLabel}>
        <AnimatePresence initial={false}>
          <motion.span
            key={i}
            className="m-rotate-word"
            aria-hidden="true"
            initial={reduce ? { opacity: 0 } : { y: "115%", opacity: 0 }}
            animate={reduce ? { opacity: 1 } : { y: "0%", opacity: 1 }}
            exit={reduce ? { opacity: 0 } : { y: "-115%", opacity: 0 }}
            transition={{ duration: reduce ? 0.35 : 0.55, ease: EASE }}
          >
            {HERO.rotator[i]}
          </motion.span>
        </AnimatePresence>
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
