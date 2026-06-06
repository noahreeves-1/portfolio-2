"use client";

import { useEffect, useState } from "react";
import { useReducedMotion } from "motion/react";

// SSR-safe reduced-motion. `useReducedMotion()` reads matchMedia eagerly, so on a
// client whose OS has reduced-motion enabled it returns `true` on the first
// render while the server rendered `false`, a hydration mismatch for any
// component that branches its output on it. This returns `false` on the server
// and the first client render (matching hydration), then the real preference.
export function useReducedMotionSafe(): boolean {
  const reduce = useReducedMotion();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  return mounted ? (reduce ?? false) : false;
}
