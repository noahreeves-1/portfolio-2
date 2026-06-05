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

// The single source of the Liquid-Glass material. Every card, sheet, nav pill,
// and CTA composes this so retuning the look is a one-file edit.
//
// Recipe: near-black base lets the backdrop blur/saturate refract the teal
// behind it; a 1px inset hairline; a specular top edge + soft top-down sheen
// (the "light catching the rounded glass" cue); a soft float shadow.
// All glass values come from --v3-* tokens, so the reduced-transparency /
// no-backdrop-filter fallbacks in globals.css flow through automatically.
export function GlassSurface({
  children,
  className,
  elevation = "base",
  interactive = false,
}: GlassSurfaceProps) {
  return (
    <div
      className={cn(
        "relative isolate overflow-hidden rounded-3xl",
        "ring-1 ring-inset ring-[var(--v3-glass-stroke)]",
        "backdrop-blur-[var(--v3-glass-blur)] backdrop-saturate-[var(--v3-glass-sat)]",
        "shadow-[var(--v3-glass-shadow)]",
        // bg via class (not inline) so consumers can override on hover/focus
        elevation === "raise" ? "bg-[var(--v3-glass-bg-raise)]" : "bg-[var(--v3-glass-bg)]",
        interactive &&
          "transition-[background-color,box-shadow,transform] duration-300 ease-out",
        className,
      )}
    >
      {/* specular: bright 1px top edge */}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, var(--v3-glass-stroke-hi), transparent)",
        }}
      />
      {/* specular: soft top-down sheen (subtle, sits over content like real glass) */}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background: "linear-gradient(180deg, rgba(255,255,255,0.05), transparent 45%)",
        }}
      />
      {children}
    </div>
  );
}
