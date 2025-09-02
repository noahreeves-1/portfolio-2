import Link from "next/link";
import Image from "next/image";
import Rocket from "@/public/rocket.svg";
import NavbarClient from "./NavbarClient";

const Navbar = () => {

  return (
    <nav className="fixed w-full z-50 border-b-stone-200 border-b-1 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 min-h-[64px] items-center">
          {/* Logo - Server rendered */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center">
              <Image src={Rocket} alt="Rocket" className="w-6 h-6" />
              <span className="ml-4 text-xl font-bold text-gray-800">Noah</span>
            </Link>
          </div>

          {/* Desktop Navigation - Client Component for smooth scroll */}
          <NavbarClient />

          {/* Mobile Navigation - Client Component for menu toggle */}
          <NavbarClient isMobile />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
