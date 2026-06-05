import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface GlassSurfaceProps {
  children?: ReactNode;
  className?: string;
  /** `raise` = elevated/hover translucency. */
  elevation?: "base" | "raise";
  /** Adds a smooth transition for hover/press driven by a parent wrapper. */
  interactive?: boolean;
}

// The single source of the Liquid-Glass material for /v4 — used for chrome that
// floats over the dark teal hero imagery (status pill, the persistent CTA, the
// hero's glass button). White sheet content does NOT use this; it's plain white.
//
// Recipe: a light translucent fill the backdrop blur/saturate refracts the teal
// through; a 1px inset hairline; a specular top edge + soft top-down sheen; a soft
// float shadow. All values come from --v4-glass-* tokens, so the reduced-
// transparency / no-backdrop-filter fallbacks in globals.css flow through.
export function GlassSurface({
  children,
  className,
  elevation = "base",
  interactive = false,
}: GlassSurfaceProps) {
  return (
    <div
      className={cn(
        "relative isolate overflow-hidden rounded-[var(--v4-r-control)]",
        "ring-1 ring-inset ring-[var(--v4-glass-stroke)]",
        "backdrop-blur-[var(--v4-glass-blur)] backdrop-saturate-[var(--v4-glass-sat)]",
        "shadow-[var(--v4-glass-shadow)]",
        elevation === "raise" ? "bg-[var(--v4-glass-bg-raise)]" : "bg-[var(--v4-glass-bg)]",
        interactive && "transition-[background-color,box-shadow,transform] duration-300 ease-out",
        className,
      )}
    >
      <span
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px"
        style={{
          background: "linear-gradient(90deg, transparent, var(--v4-glass-stroke-hi), transparent)",
        }}
      />
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{ background: "linear-gradient(180deg, rgba(255,255,255,0.06), transparent 45%)" }}
      />
      {children}
    </div>
  );
}
