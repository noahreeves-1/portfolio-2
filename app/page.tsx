import dynamic from "next/dynamic";
import { Suspense } from "react";

// Server Components (imported normally)
import { Footer } from "./components/layout";
import { DiagonalDivider } from "./components/ui";
import { SocialProof, WhoMe, Skills } from "./components/sections";

// Loading skeletons
import {
  NavbarSkeleton,
  HeroSkeleton,
  ContactSkeleton,
  MapviewSkeleton,
} from "./components/ui";

// Client components that still need dynamic imports
const Navbar = dynamic(() => import("./components/layout/Navbar"));
const Hero = dynamic(() => import("./components/sections/Hero"));
const Projects = dynamic(() => import("./components/sections/Projects"));
const Contact = dynamic(() => import("./components/sections/Contact"));
const CTA = dynamic(() => import("./components/sections/CTA"));

// Heavy libraries - keep lazy loaded
const Mapview = dynamic(() => import("./components/features/map/Mapview"));

export default function Home() {
  return (
    <div>
      <Suspense fallback={<NavbarSkeleton />}>
        <Navbar />
      </Suspense>
      <main>
        <Suspense fallback={<HeroSkeleton />}>
          <Hero />
        </Suspense>
        <SocialProof />
        <WhoMe />
        <div className="bg-gray-800">
          <DiagonalDivider direction="top" color="#1f2937" backgroundColor="white" />
          <Suspense fallback={null}>
            <Projects />
          </Suspense>
          <DiagonalDivider direction="bottom" color="#1f2937" backgroundColor="white" />
        </div>
        <Skills />
        <Suspense fallback={<MapviewSkeleton />}>
          <Mapview />
        </Suspense>
        <Suspense fallback={null}>
          <CTA />
        </Suspense>
        <Suspense fallback={<ContactSkeleton />}>
          <Contact />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}
