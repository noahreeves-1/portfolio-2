// import Image from "next/image";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SocialProof from "./components/SocialProof";

export default function Home() {
  return (
    <div>
      <Navbar />
      <main>
        <Hero />
        <SocialProof />
      </main>
      <Footer />
    </div>
  );
}
