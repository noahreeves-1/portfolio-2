// Motion vocabulary for /v4. Named presets so every surface shares one identical
// feel. Every consumer gates animation on useReducedMotion() at the call site —
// these are just the values. (Ported from /v4's predecessor; kept self-contained.)

// The "premium" easing curve — used for reveals + the hero mount.
export const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

// iOS "soft" — section reveals, hero mount, sheet entrances.
export const springSoft = { type: "spring" as const, stiffness: 260, damping: 30, mass: 0.9 };

// iOS "snappy" — card hover lift, chrome pill.
export const springSnappy = { type: "spring" as const, stiffness: 420, damping: 32, mass: 0.6 };

// Press feedback (whileTap) — quick, tight. The key "native app" tactile cue.
export const springPress = { type: "spring" as const, stiffness: 600, damping: 38, mass: 0.5 };
