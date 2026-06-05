// Static film-grain overlay (SVG feTurbulence baked into a data URI).
// Pure CSS, zero JS, fine under prefers-reduced-motion. Fixed + full-viewport so
// the texture is consistent as the page scrolls. Copied into v3 so the redesign
// stays self-contained (the /proto spikes can be deleted independently).

const NOISE =
  "data:image/svg+xml;utf8," +
  encodeURIComponent(
    `<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'>
      <filter id='n'>
        <feTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='2' stitchTiles='stitch'/>
        <feColorMatrix type='saturate' values='0'/>
      </filter>
      <rect width='100%' height='100%' filter='url(#n)'/>
    </svg>`,
  );

export function Grain({ opacity = 0.035 }: { opacity?: number }) {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-30 mix-blend-overlay"
      style={{ backgroundImage: `url("${NOISE}")`, opacity }}
    />
  );
}
