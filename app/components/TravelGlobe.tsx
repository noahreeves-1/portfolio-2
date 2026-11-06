"use client";

import { useEffect, useRef } from "react";
import type { GeometryCollection, Topology } from "topojson-specification";

interface TravelGlobeProps {
  // ISO 3166-1 numeric codes of the countries to fill in.
  readonly visited: readonly string[];
  readonly label: string;
}

type World = Topology<{ countries: GeometryCollection; land: GeometryCollection }>;

const SPIN_DEG_PER_MS = 0.006; // one turn a minute
const DRAG_DEG_PER_PX = 0.4;
const MAX_FRAME_MS = 50; // a paused tab resumes where it left off instead of jumping
const MAX_TILT_DEG = 60;
const START_ROTATION: [number, number] = [-105, -18]; // opens on East Asia
const PRELOAD_MARGIN = "600px";

// A small globe drawn on a canvas. Visited countries are filled with the accent
// color. It turns slowly, can be dragged, and holds still under reduced motion.
// The map code and data load only when the globe is about to scroll into view.
export function TravelGlobe({ visited, label }: TravelGlobeProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const visitedKey = visited.join(",");

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    let cancelled = false;
    let teardown = () => {};

    const start = async () => {
      const [{ geoGraticule10, geoOrthographic, geoPath }, { feature, mesh }, atlas] = await Promise.all([
        import("d3-geo"),
        import("topojson-client"),
        import("world-atlas/countries-110m.json"),
      ]);
      if (cancelled) return;

      const context = canvas.getContext("2d");
      if (!context) throw new Error("2D canvas is not available");

      const world = atlas.default as unknown as World;
      const wanted = new Set(visitedKey.split(","));
      const land = feature(world, world.objects.land);
      const borders = mesh(world, world.objects.countries, (a, b) => a !== b);
      const mine = {
        type: "FeatureCollection" as const,
        features: feature(world, world.objects.countries).features.filter((country) =>
          wanted.has(String(country.id).padStart(3, "0"))
        ),
      };
      const graticule = geoGraticule10();

      const styles = getComputedStyle(canvas);
      const token = (name: string) => styles.getPropertyValue(name).trim();
      const colors = {
        line: token("--m-line"),
        accent: token("--m-accent"),
        ground: token("--m-ground"),
        mute: token("--m-mute"),
      };

      const projection = geoOrthographic().rotate(START_ROTATION);
      const path = geoPath(projection, context);
      let size = 0;

      const fit = () => {
        size = canvas.clientWidth;
        const ratio = Math.min(window.devicePixelRatio || 1, 2);
        canvas.width = Math.round(size * ratio);
        canvas.height = Math.round(size * ratio);
        context.setTransform(ratio, 0, 0, ratio, 0, 0);
        projection.fitExtent(
          [
            [1, 1],
            [size - 1, size - 1],
          ],
          { type: "Sphere" }
        );
      };

      const draw = () => {
        context.clearRect(0, 0, size, size);
        context.beginPath();
        path(graticule);
        context.strokeStyle = colors.line;
        context.lineWidth = 0.5;
        context.stroke();
        context.beginPath();
        path(land);
        context.fillStyle = colors.line;
        context.fill();
        context.beginPath();
        path(mine);
        context.fillStyle = colors.accent;
        context.fill();
        context.beginPath();
        path(borders);
        context.strokeStyle = colors.ground;
        context.lineWidth = 0.5;
        context.stroke();
        context.beginPath();
        path({ type: "Sphere" });
        context.strokeStyle = colors.mute;
        context.lineWidth = 1;
        context.stroke();
      };

      const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      let onScreen = false;
      let frame = 0;
      let previous: number | null = null;
      let drag: { x: number; y: number } | null = null;

      const tick = (now: number) => {
        frame = 0;
        if (!onScreen) return;
        if (previous !== null && !drag) {
          const [lambda, phi] = projection.rotate();
          projection.rotate([lambda + Math.min(now - previous, MAX_FRAME_MS) * SPIN_DEG_PER_MS, phi]);
        }
        previous = now;
        draw();
        frame = requestAnimationFrame(tick);
      };
      const spin = () => {
        if (reduceMotion || frame || !onScreen) return;
        previous = null;
        frame = requestAnimationFrame(tick);
      };

      const onPointerDown = (event: PointerEvent) => {
        if (event.button !== 0) return; // a right-click opens the menu and never sends pointerup
        drag = { x: event.clientX, y: event.clientY };
        canvas.setPointerCapture(event.pointerId);
      };
      const onPointerMove = (event: PointerEvent) => {
        if (!drag) return;
        const [lambda, phi] = projection.rotate();
        const tilt = phi - (event.clientY - drag.y) * DRAG_DEG_PER_PX;
        projection.rotate([
          lambda + (event.clientX - drag.x) * DRAG_DEG_PER_PX,
          Math.max(-MAX_TILT_DEG, Math.min(MAX_TILT_DEG, tilt)),
        ]);
        drag = { x: event.clientX, y: event.clientY };
        if (reduceMotion) draw();
      };
      const onPointerEnd = () => {
        drag = null;
      };

      const visibility = new IntersectionObserver((entries) => {
        onScreen = entries.some((entry) => entry.isIntersecting);
        if (!onScreen) return;
        draw();
        spin();
      });
      const resize = new ResizeObserver(() => {
        fit();
        draw();
      });

      fit();
      draw();
      canvas.addEventListener("pointerdown", onPointerDown);
      canvas.addEventListener("pointermove", onPointerMove);
      canvas.addEventListener("pointerup", onPointerEnd);
      canvas.addEventListener("pointercancel", onPointerEnd);
      canvas.addEventListener("lostpointercapture", onPointerEnd);
      visibility.observe(canvas);
      resize.observe(canvas);

      teardown = () => {
        cancelAnimationFrame(frame);
        visibility.disconnect();
        resize.disconnect();
        canvas.removeEventListener("pointerdown", onPointerDown);
        canvas.removeEventListener("pointermove", onPointerMove);
        canvas.removeEventListener("pointerup", onPointerEnd);
        canvas.removeEventListener("pointercancel", onPointerEnd);
        canvas.removeEventListener("lostpointercapture", onPointerEnd);
      };
    };

    // The count above the globe still tells the story if the map cannot load.
    const hide = (error: unknown) => {
      console.error("Travel globe could not load", error);
      canvas.hidden = true;
    };

    const preload = new IntersectionObserver(
      (entries) => {
        if (!entries.some((entry) => entry.isIntersecting)) return;
        preload.disconnect();
        start().catch(hide);
      },
      { rootMargin: PRELOAD_MARGIN }
    );
    preload.observe(canvas);

    return () => {
      cancelled = true;
      preload.disconnect();
      teardown();
    };
  }, [visitedKey]);

  return <canvas ref={canvasRef} className="m-globe" role="img" aria-label={label} />;
}
