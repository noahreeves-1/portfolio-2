import { GlassChrome } from "./components/GlassChrome";
import { AmbientField } from "./components/AmbientField";
import { Grain } from "./components/Grain";
import { Hero } from "./components/Hero";
import { SelectedWork } from "./components/SelectedWork";
import { StoryArc } from "./components/StoryArc";
import { MoreStrip } from "./components/MoreStrip";
import { Contact } from "./components/Contact";

export default function V3Page() {
  return (
    <>
      <AmbientField />
      <GlassChrome />
      <main className="relative z-10">
        <Hero />
        <SelectedWork />
        <StoryArc />
        <MoreStrip />
        <Contact />
      </main>
      <Grain />
    </>
  );
}
