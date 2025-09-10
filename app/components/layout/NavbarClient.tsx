"use client";

import { useState } from "react";
import Link from "next/link";

interface NavbarClientProps {
  isMobile?: boolean;
}

export default function NavbarClient({ isMobile = false }: NavbarClientProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleScrollToSection = (
    e: React.MouseEvent<HTMLAnchorElement>,
    sectionId: string
  ) => {
    // Only prevent default for same-page navigation (hash links)
    if (sectionId.startsWith("#")) {
      e.preventDefault();
      const targetId = sectionId.substring(1); // Remove the # from the ID
      const element = document.getElementById(targetId);

      if (element) {
        // Close mobile menu if open
        if (isMenuOpen) {
          setIsMenuOpen(false);
        }

        // Smooth scroll to the element
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    } else if (sectionId === "top") {
      e.preventDefault();
      // Close mobile menu if open
      if (isMenuOpen) {
        setIsMenuOpen(false);
      }

      // Smooth scroll to the top of the page
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  if (!isMobile) {
    // Desktop navigation links with smooth scroll
    return (
      <>
        <div className="hidden md:block">
          <div className="ml-10 flex items-center space-x-4">
            <Link
              href="#about-me"
              className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium tracking-wide"
              onClick={(e) => handleScrollToSection(e, "#about-me")}
            >
              About Me
            </Link>
            <Link
              href="#projects"
              className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium tracking-wide"
              onClick={(e) => handleScrollToSection(e, "#projects")}
            >
              Projects
            </Link>
            <Link
              href="#skills"
              className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium tracking-wide"
              onClick={(e) => handleScrollToSection(e, "#skills")}
            >
              Skills
            </Link>
            <Link
              href="#mapview"
              className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium tracking-wide"
              onClick={(e) => handleScrollToSection(e, "#mapview")}
            >
              Countries
            </Link>
          </div>
        </div>
        <div className="hidden md:block">
          <div className="ml-4 flex items-center">
            <Link
              href="#contact"
              className="ml-3 px-5 py-2.5 rounded-lg text-sm font-semibold text-white bg-gray-900 hover:bg-gray-800 focus:outline-none tracking-wide transition-colors"
              onClick={(e) => handleScrollToSection(e, "#contact")}
            >
              Get in touch
            </Link>
          </div>
        </div>
      </>
    );
  }

  // Mobile menu
  return (
    <>
      {/* Mobile menu button */}
      <div className="md:hidden flex items-center">
        <button
          type="button"
          className="bg-white p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none"
          aria-controls="mobile-menu"
          aria-expanded={isMenuOpen}
          onClick={toggleMenu}
        >
          <span className="sr-only">Open main menu</span>
          {/* Icon when menu is closed */}
          <svg
            className={`${isMenuOpen ? "hidden" : "block"} h-6 w-6`}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
          {/* Icon when menu is open */}
          <svg
            className={`${isMenuOpen ? "block" : "hidden"} h-6 w-6`}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>

      {/* Mobile menu dropdown */}
      {isMenuOpen && (
        <div
          className="md:hidden absolute top-16 left-0 w-full bg-white"
          id="mobile-menu"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 shadow-lg bg-white">
            <Link
              href="#about-me"
              className="text-gray-600 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium"
              onClick={(e) => handleScrollToSection(e, "#about-me")}
            >
              About Me
            </Link>
            <Link
              href="#projects"
              className="text-gray-600 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium"
              onClick={(e) => handleScrollToSection(e, "#projects")}
            >
              Projects
            </Link>
            <Link
              href="#skills"
              className="text-gray-600 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium"
              onClick={(e) => handleScrollToSection(e, "#skills")}
            >
              Skills
            </Link>
            <Link
              href="#mapview"
              className="text-gray-600 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium"
              onClick={(e) => handleScrollToSection(e, "#mapview")}
            >
              Countries
            </Link>
            <Link
              href="#contact"
              className="text-white bg-black hover:bg-blue-700 block px-3 py-2 rounded-md text-base font-medium mt-4"
              onClick={(e) => handleScrollToSection(e, "#contact")}
            >
              Get in touch
            </Link>
          </div>
        </div>
      )}
    </>
  );
}