import type { Metadata } from "next";

// v3 redesign — isolated route, kept out of search + social previews until it's
// promoted to /. Fonts + <html>/<body> come from the root app/layout.tsx; here we
// only establish the .v3-scope theme (teal + glass tokens) on a dark surface.
export const metadata: Metadata = {
  title: "Noah Kim — Product engineer & founder",
  robots: { index: false, follow: false },
};

export default function V3Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="v3-scope dark relative isolate min-h-screen overflow-x-hidden bg-[var(--v3-bg)] text-[var(--v3-fg)] antialiased">
      {children}
    </div>
  );
}
