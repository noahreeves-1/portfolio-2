"use client";

import { useEffect, useRef } from "react";
import { useReducedMotion } from "motion/react";

interface Blob {
  color: [number, number, number];
  x: number; // base position, normalized 0..1
  y: number;
  ax: number; // drift amplitude
  ay: number;
  fx: number; // drift frequency (Hz-ish)
  fy: number;
  phase: number;
  r: number; // radius as fraction of the larger viewport edge
  alpha: number;
}

// Cobalt family from the v2 palette + one sparing warm-gold accent.
const BLOBS: Blob[] = [
  { color: [59, 130, 246], x: 0.3, y: 0.36, ax: 0.1, ay: 0.08, fx: 0.05, fy: 0.04, phase: 0.0, r: 0.46, alpha: 0.55 },
  { color: [37, 99, 235], x: 0.72, y: 0.56, ax: 0.12, ay: 0.1, fx: 0.04, fy: 0.06, phase: 1.7, r: 0.5, alpha: 0.5 },
  { color: [147, 197, 253], x: 0.56, y: 0.24, ax: 0.09, ay: 0.07, fx: 0.06, fy: 0.05, phase: 3.1, r: 0.36, alpha: 0.45 },
  { color: [99, 102, 241], x: 0.4, y: 0.72, ax: 0.11, ay: 0.09, fx: 0.038, fy: 0.052, phase: 4.4, r: 0.42, alpha: 0.45 },
  { color: [251, 191, 36], x: 0.8, y: 0.3, ax: 0.07, ay: 0.06, fx: 0.045, fy: 0.035, phase: 2.2, r: 0.22, alpha: 0.32 },
];

export function MeshCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const reduce = useReducedMotion();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = 0;
    let height = 0;
    // The whole field is heavily blurred, so we can render at low resolution.
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
      ctx.fillStyle = "#09090b";
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
    <canvas
      ref={canvasRef}
      aria-hidden
      className="absolute inset-0 h-full w-full"
      style={{ filter: "blur(70px)", transform: "scale(1.15)" }}
    />
  );
}
