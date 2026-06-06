// Motion vocabulary for /v6. Named presets so every surface shares one feel.
// Every consumer gates animation on reduced motion at the call site.

export const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

export const springSoft = { type: "spring" as const, stiffness: 260, damping: 30, mass: 0.9 };
export const springSnappy = { type: "spring" as const, stiffness: 420, damping: 32, mass: 0.6 };
export const springPress = { type: "spring" as const, stiffness: 600, damping: 38, mass: 0.5 };
