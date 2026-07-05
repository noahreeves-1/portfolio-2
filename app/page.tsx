import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { FeaturedWork } from "./components/FeaturedWork";
import { ProjectIndex } from "./components/ProjectIndex";
import { DataFirst } from "./components/DataFirst";
import { Stack } from "./components/Stack";
import { Footer } from "./components/Footer";

// The "Monument" landing: a dark, condensed, single-column read. Hero signature
// (animated rotator) → three deep featured cards → quiet project index →
// data-first credentials → stack → closing CTA. The .monument-scope wrapper
// establishes the theme; fonts + <html>/<body> + PostHog come from app/layout.tsx.
export default function Home() {
  return (
    <div className="monument-scope min-h-[100svh] antialiased">
      <div className="m-wrap">
        <Header />
        <main>
          <Hero />
          <FeaturedWork />
          <ProjectIndex />
          <DataFirst />
          <Stack />
        </main>
        <Footer />
      </div>
    </div>
  );
}
