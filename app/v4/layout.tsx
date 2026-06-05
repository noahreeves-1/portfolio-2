import type { Metadata } from "next";

// /v4 redesign — isolated route, kept out of search + social previews until it's
// promoted to /. Fonts + <html>/<body> come from the root app/layout.tsx; here we
// only establish the .v4-scope theme (teal + white-sheet + glass tokens). The base
// surface is the deepest teal so the hero blends; white sheets cover the rest.
export const metadata: Metadata = {
  title: "Noah Kim — Consulting → Engineering → Founder",
  robots: { index: false, follow: false },
};

export default function V4Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="v4-scope relative isolate min-h-[100svh] overflow-x-clip bg-[var(--v4-teal-ink)] text-[var(--v4-ink)] antialiased">
      {children}
    </div>
  );
}
