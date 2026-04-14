import type { Metadata } from "next";
import Footer from "@/app/components/layout/Footer";
import { NavbarV2 } from "@/app/v2/components/NavbarV2";
import { HeroV2 } from "@/app/v2/components/HeroV2";
import { RescueBento } from "@/app/v2/components/RescueBento";
import { MetricsBand } from "@/app/v2/components/MetricsBand";
import { ProjectGridV2 } from "@/app/v2/components/ProjectGridV2";
import { GlobalReachSection } from "@/app/v2/components/GlobalReachSection";
import { CTASection } from "@/app/v2/components/CTASection";

export const metadata: Metadata = {
  title: "Noah Kim — Product & Rescue Engineer",
  description:
    "I fix what's broken and build what's next. 12M-row pipelines, 40-hour stabilizations, $600K B2B order flows. Book a consultation.",
};

export default function V2Page() {
  return (
    <div className="v2-scope dark min-h-screen bg-zinc-950 text-zinc-100 antialiased">
      <NavbarV2 />
      <main>
        <HeroV2 />
        <RescueBento />
        <MetricsBand />
        <ProjectGridV2 />
        <GlobalReachSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
