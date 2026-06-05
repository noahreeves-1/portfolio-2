import Image from "next/image";
import { cn } from "@/lib/utils";

interface ScreenshotFallbackProps {
  name: string;
  monogram: string;
  logo?: string;
  caption?: string;
  className?: string;
}

// Intentional "app splash" tile for work with no shippable screenshot (HIPAA
// charting, backend pipelines, etc.). Reads as a deliberate launch screen — a
// teal glow, the app icon, the name — not a placeholder. Absolutely positioned so
// it fills a DeviceFrame screen. Sits on the dark teal-ink screen background.
export function ScreenshotFallback({ name, monogram, logo, caption, className }: ScreenshotFallbackProps) {
  return (
    <div
      className={cn(
        "absolute inset-0 flex flex-col items-center justify-center gap-4 p-6 text-center",
        className,
      )}
    >
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(80% 60% at 50% 34%, color-mix(in srgb, var(--v4-teal) 26%, transparent), transparent 70%)",
        }}
      />
      <div className="relative flex h-16 w-16 items-center justify-center overflow-hidden rounded-2xl bg-[color-mix(in_srgb,var(--v4-teal-ink)_70%,#000)] ring-1 ring-inset ring-[color-mix(in_srgb,var(--v4-teal)_40%,transparent)]">
        {logo ? (
          <Image src={logo} alt={`${name} logo`} fill sizes="64px" className="object-contain p-3" />
        ) : (
          <span className="font-[family-name:var(--font-display)] text-2xl font-semibold text-[var(--v4-teal-soft)]">
            {monogram}
          </span>
        )}
      </div>
      <div className="relative">
        <p className="font-[family-name:var(--font-display)] text-lg font-semibold text-[var(--v4-hero-ink)]">
          {name}
        </p>
        {caption ? (
          <p className="mt-1 font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-[0.2em] text-[var(--v4-hero-ink-muted)]">
            {caption}
          </p>
        ) : null}
      </div>
    </div>
  );
}
