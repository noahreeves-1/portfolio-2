"use client";

import { useEffect, useRef } from "react";
import { useReducedMotion } from "motion/react";

interface Blob {
  color: [number, number, number];
  x: number; // base position, normalized 0..1
  y: number;
  ax: number; // drift amplitude
  ay: number;
  fx: number; // drift frequency
  fy: number;
  phase: number;
  r: number; // radius as fraction of the larger viewport edge
  alpha: number;
}

// Teal family only — single rationed accent, kept low-alpha so the field reads
// as quiet depth behind glass, not a lava lamp.
const BLOBS: Blob[] = [
  { color: [45, 212, 191], x: 0.28, y: 0.32, ax: 0.1, ay: 0.08, fx: 0.045, fy: 0.038, phase: 0.0, r: 0.46, alpha: 0.3 },
  { color: [15, 118, 110], x: 0.74, y: 0.58, ax: 0.12, ay: 0.1, fx: 0.038, fy: 0.052, phase: 1.7, r: 0.52, alpha: 0.34 },
  { color: [94, 234, 212], x: 0.58, y: 0.22, ax: 0.09, ay: 0.07, fx: 0.05, fy: 0.044, phase: 3.1, r: 0.34, alpha: 0.2 },
  { color: [13, 148, 136], x: 0.4, y: 0.74, ax: 0.11, ay: 0.09, fx: 0.034, fy: 0.048, phase: 4.4, r: 0.44, alpha: 0.26 },
];

// Fixed, full-viewport ambient teal backdrop. Rendered at low resolution and
// heavily blurred, so it's cheap; pauses when the tab is hidden; renders a
// single static frame under prefers-reduced-motion. Ported + retinted from the
// proto MeshCanvas spike.
export function AmbientField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const reduce = useReducedMotion();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = 0;
    let height = 0;
    const scale = Math.min(window.devicePixelRatio || 1, 1.5) * 0.55;

    const resize = () => {
      width = canvas.clientWidth;
      height = canvas.clientHeight;
      canvas.width = Math.max(1, Math.floor(width * scale));
      canvas.height = Math.max(1, Math.floor(height * scale));
    };

    const draw = (t: number) => {
      const w = canvas.width;
      const h = canvas.height;
      const max = Math.max(w, h);
      ctx.clearRect(0, 0, w, h);
      ctx.fillStyle = "#07090a";
      ctx.fillRect(0, 0, w, h);
      ctx.globalCompositeOperation = "lighter";
      for (const b of BLOBS) {
        const cx = (b.x + b.ax * Math.sin(2 * Math.PI * b.fx * t + b.phase)) * w;
        const cy = (b.y + b.ay * Math.cos(2 * Math.PI * b.fy * t + b.phase)) * h;
        const radius = b.r * max;
        const g = ctx.createRadialGradient(cx, cy, 0, cx, cy, radius);
        const [r, gr, bl] = b.color;
        g.addColorStop(0, `rgba(${r},${gr},${bl},${b.alpha})`);
        g.addColorStop(1, `rgba(${r},${gr},${bl},0)`);
        ctx.fillStyle = g;
        ctx.fillRect(0, 0, w, h);
      }
      ctx.globalCompositeOperation = "source-over";
    };

    resize();

    if (reduce) {
      draw(0);
      const onResizeStatic = () => {
        resize();
        draw(0);
      };
      window.addEventListener("resize", onResizeStatic);
      return () => window.removeEventListener("resize", onResizeStatic);
    }

    let raf = 0;
    let start = 0;
    let paused = false;

    const loop = (now: number) => {
      if (!start) start = now;
      const t = (now - start) / 1000;
      draw(t);
      raf = requestAnimationFrame(loop);
    };

    const onVisibility = () => {
      if (document.hidden && !paused) {
        paused = true;
        cancelAnimationFrame(raf);
      } else if (!document.hidden && paused) {
        paused = false;
        start = 0;
        raf = requestAnimationFrame(loop);
      }
    };

    const onResize = () => resize();

    window.addEventListener("resize", onResize);
    document.addEventListener("visibilitychange", onVisibility);
    raf = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, [reduce]);

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 h-full w-full"
        style={{ filter: "blur(70px)", transform: "scale(1.15)" }}
      />
      {/* vignette: pull the edges back to near-black so text stays legible */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(125% 95% at 50% 0%, transparent 38%, var(--v3-bg) 100%)",
        }}
      />
    </div>
  );
}
