// import Image from "next/image";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SocialProof from "./components/SocialProof";
// import Mapview from "./components/Mapview";
import Projects from "./components/Projects";
import WhyMe from "./components/WhyMe";
export default function Home() {
  return (
    <div>
      <Navbar />
      <main>
        <Hero />
        <SocialProof />
        <WhyMe />
        {/* <Mapview /> */}
        <Projects />
      </main>
      <Footer />
    </div>
  );
}
