// import Image from "next/image";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SocialProof from "./components/SocialProof";
import Projects from "./components/Projects";
import WhoMe from "./components/WhoMe";
import Skills from "./components/Skills";
import Mapview from "./components/Mapview";
import Contact from "./components/Contact";
import CTA from "./components/CTA";

export default function Home() {
  return (
    <div>
      <Navbar />
      <main>
        <Hero />
        <SocialProof />
        <WhoMe />
        <Projects />
        <Skills />
        <Mapview />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
