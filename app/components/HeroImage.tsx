"use client";

import Image from "next/image";
import { motion, type MotionValue } from "motion/react";
import { HERO } from "../content";

// The full-bleed hero artwork. Art-directed: a landscape desktop crop and a
// portrait mobile crop swap at `sm` (both LCP-priority). The wrapper is
// over-scaled and shifts by the parallax `y` the Hero feeds in from scroll; the
// scale gives headroom so the shift never reveals an edge. `y` is undefined under
// prefers-reduced-motion (Hero gates it), so it sits static.
export function HeroImage({ y }: { y?: MotionValue<string> }) {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <motion.div className="absolute inset-0 scale-[1.14]" style={{ y }}>
        <Image
          src={HERO.image.desktop}
          alt={HERO.image.alt}
          fill
          priority
          sizes="100vw"
          className="hidden object-cover object-center sm:block"
        />
        <Image
          src={HERO.image.mobile}
          alt={HERO.image.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center sm:hidden"
        />
      </motion.div>
    </div>
  );
}
