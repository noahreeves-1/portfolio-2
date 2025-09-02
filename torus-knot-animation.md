Outcome

Render a rotating TorusKnot as the hero visual that looks premium, loads fast, and runs smoothly. It should feel “confident” rather than flashy.

Freedom to Choose

Libraries: Any (Three.js, Babylon, PlayCanvas, custom WebGL, Canvas2D with fake 3D, etc.).

Framework: Works in Next.js (TypeScript) and any other stack.

Shaders/Materials: Your call—standard material, matcap, or lightweight custom shader.

Musts (non-negotiable)

Visual

Single TorusKnot centered in a fixed-height hero container.

Slow rotation on X and Y axes; subtle parallax or camera drift is OK but not required.

Palette: dominant primary hue with optional secondary tint; no rainbow cycling.

Performance

Smooth on mid-tier laptops. Cap device pixel ratio to control GPU load.

Avoid layout shift: reserve the hero height in CSS.

Pause animation when offscreen and when the tab is hidden.

Accessibility & Fallback

Honor prefers-reduced-motion: reduce → render a static visual (SVG or image).

If WebGL/3D unsupported, render the same static visual.

SSR Safety

Don’t access window/document during SSR. Initialize 3D on the client only.

Provide a static server-rendered fallback to avoid hydration issues.

Shoulds (strong suggestions)

Keep geometry “medium” detail—smooth enough but not over-tessellated.

Use one material; if adding glow/bloom, keep it very subtle and disable if perf dips.

Expose a small config surface (props/attributes or CSS vars):

primary, secondary, bg, speed (0.2–1.5), intensity (0–1).

Lazy-load heavy bits (e.g., 3D runtime) so first paint is quick.

Cans (nice-to-have, optional)

Micro parallax following the pointer (tiny, eased).

Slow color drift between primary and secondary (barely perceptible).

A quality mode that caps DPR or disables bloom on weaker devices.

Don’ts

No noisy particles, no strobe effects, no high-contrast flicker.

No blocking the main thread with big sync work on mount.

No reliance on exact pixel values or “magic numbers” without naming them.

Static Fallback Guidance

Provide a clean SVG silhouette or shaded render of a torus knot.

Tint via currentColor so themes can set color easily.

Match the 3D aspect ratio to prevent layout shifts when swapping.

Success Criteria (acceptance tests)

Hero area renders with zero CLS.

Animation is smooth and quiet (fans don’t spin up on idle scenes).

Reduced-motion users see a static image—no rotation occurs.

Tabbing through the page is normal; the canvas (if any) doesn’t trap focus.

Resizing the window or switching theme doesn’t cause jank or re-mount loops.

Handoff Notes

Deliver a single reusable component/module (e.g., HeroVisual) with the small config above.

Provide a minimal usage example (how to pass colors, speed, and background).

Document any library choices and how to switch them if needed later.
