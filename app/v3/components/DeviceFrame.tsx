import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface DeviceFrameProps {
  variant: "phone" | "browser";
  children: ReactNode; // the screen content (fills an aspect-locked, relative box)
  className?: string;
}

// Pure-CSS device frames. The screen area is aspect-locked + relative so a
// next/image with `fill` (or a fallback) never causes layout shift.
export function DeviceFrame({ variant, children, className }: DeviceFrameProps) {
  if (variant === "phone") {
    return (
      <div
        className={cn(
          "mx-auto w-full max-w-[232px] rounded-[2.3rem] bg-zinc-900/90 p-2 shadow-2xl ring-1 ring-inset ring-white/10",
          className,
        )}
      >
        <div className="relative aspect-[9/19.5] overflow-hidden rounded-[1.8rem] bg-[var(--v3-bg-raise)] ring-1 ring-inset ring-black/50">
          {/* notch */}
          <div className="absolute left-1/2 top-2 z-10 h-1.5 w-16 -translate-x-1/2 rounded-full bg-black/70" />
          {children}
        </div>
      </div>
    );
  }

  return (
    <div
      className={cn(
        "w-full overflow-hidden rounded-2xl bg-zinc-900/80 shadow-2xl ring-1 ring-inset ring-white/10",
        className,
      )}
    >
      {/* faux browser chrome */}
      <div className="flex items-center gap-2 border-b border-white/5 px-3 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
        <span className="ml-2 h-4 flex-1 rounded-md bg-white/[0.04]" />
      </div>
      <div className="relative aspect-[16/10] overflow-hidden bg-[var(--v3-bg-raise)]">
        {children}
      </div>
    </div>
  );
}
