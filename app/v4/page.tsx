import { Hero } from "./components/Hero";
import { WorkSheet } from "./components/WorkSheet";
import { MetricsBand } from "./components/MetricsBand";
import { MoreList } from "./components/MoreList";
import { Arc } from "./components/Arc";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { AppChrome } from "./components/AppChrome";

// The teal Ken Burns hero is sticky; the white sheet (everything else) rises over
// it via a negative top margin + rounded top, like an iOS bottom sheet. The
// data-vaul-drawer-wrapper lets project sheets scale this surface back as they open.
export default function V4Page() {
  return (
    <main data-vaul-drawer-wrapper="" className="relative bg-[var(--v4-teal-ink)]">
      <Hero />

      {/* Negative margin pulls the white sheet up over the sticky hero so it peeks
          at rest (then rises on scroll). Inline calc avoids Tailwind v4's unreliable
          negation of arbitrary CSS-variable values. */}
      <div
        className="relative z-10 rounded-t-[var(--v4-r-sheet)] bg-[var(--v4-sheet)] shadow-[var(--v4-shadow-sheet)]"
        style={{ marginTop: "calc(var(--v4-peek) * -1)" }}
      >
        <WorkSheet />
        <MetricsBand />
        <MoreList />
        <Arc />
        <Contact />
        <Footer />
      </div>

      <AppChrome />
    </main>
  );
}
