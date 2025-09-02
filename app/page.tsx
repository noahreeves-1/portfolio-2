import dynamic from "next/dynamic";
import { Suspense } from "react";
import Footer from "./components/Footer";
import DiagonalDivider from "./components/DiagonalDivider";
import {
  NavbarSkeleton,
  HeroSkeleton,
  ContactSkeleton,
  MapviewSkeleton,
} from "./components/LoadingSkeletons";

// Server Components (can be imported normally if they don't use client features)
// These will be converted to server components in next steps

// Dynamic imports for client components
const Navbar = dynamic(() => import("./components/Navbar"));
const Hero = dynamic(() => import("./components/Hero"));
const SocialProof = dynamic(() => import("./components/SocialProof"));
const WhoMe = dynamic(() => import("./components/WhoMe"));
const Projects = dynamic(() => import("./components/Projects"));
const Skills = dynamic(() => import("./components/Skills"));
const Contact = dynamic(() => import("./components/Contact"));
const CTA = dynamic(() => import("./components/CTA"));

// Lazy load Mapview only when needed (heavy Leaflet library)
const Mapview = dynamic(() => import("./components/Mapview"));

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
        <Suspense fallback={null}>
          <SocialProof />
        </Suspense>
        <Suspense fallback={null}>
          <WhoMe />
        </Suspense>
        <div className="bg-gray-50">
          <DiagonalDivider direction="top" color="#f9fafb" backgroundColor="white" />
          <Suspense fallback={null}>
            <Projects />
          </Suspense>
          <DiagonalDivider direction="bottom" color="#f9fafb" backgroundColor="white" />
        </div>
        <Suspense fallback={null}>
          <Skills />
        </Suspense>
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
