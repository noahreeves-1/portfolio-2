import { Hero } from "./components/Hero";
import { TrustBar } from "./components/TrustBar";
import { About } from "./components/About";
import { Work } from "./components/Work";
import { Story } from "./components/Story";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

// The simplified scroll: a full-bleed dark hero, then a warm ivory "paper" that
// rises over its bottom edge and carries the body, trust bar → short paragraph
// → work (project index + capabilities) → contact. The .v6-scope wrapper (moved
// up from the former app/v6/layout.tsx) establishes the theme; fonts + <html>/
// <body> + PostHog come from the root app/layout.tsx.
export default function Home() {
  return (
    <div className="v6-scope relative isolate min-h-[100svh] overflow-x-clip bg-[var(--v6-sky-ink)] text-[var(--v6-cream)] antialiased">
      <main className="relative">
        <Hero />

        <div className="relative z-10 -mt-[var(--v6-s5)] rounded-t-[var(--v6-r-sheet)] bg-[var(--v6-paper)] pb-[var(--v6-s4)] pt-[var(--v6-s2)] text-[var(--v6-ink)] shadow-[var(--v6-shadow-sheet)]">
          <TrustBar />
          <About />
          <Work />
          <Story />
          <Contact />
          <Footer />
        </div>
      </main>
    </div>
  );
}
