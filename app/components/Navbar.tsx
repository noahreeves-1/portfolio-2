"use client";

import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
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
    }
  };

  return (
    <nav className="bg-white fixed w-full z-10 border-b-stone-200 border-b-1">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center">
              <span className="text-xl font-bold text-gray-800">Portfolio</span>
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              <Link
                href="#projects"
                className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
                onClick={(e) => handleScrollToSection(e, "#projects")}
              >
                Projects
              </Link>
              <Link
                href="#skills"
                className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
                onClick={(e) => handleScrollToSection(e, "#skills")}
              >
                Skills
              </Link>
              <Link
                href="#mapview"
                className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
                onClick={(e) => handleScrollToSection(e, "#mapview")}
              >
                {`Countries`}
              </Link>
              {/* <Link
                href="/resume"
                className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 focus:outline-none"
              >
                Resume
              </Link>
              <Link
                href="#about"
                className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
                onClick={(e) => handleScrollToSection(e, "#about")}
              >
                About
              </Link> */}
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:block">
            <div className="ml-4 flex items-center">
              <Link
                href="#contact"
                className="ml-3 px-4 py-2 rounded-md text-sm font-medium text-white bg-black hover:bg-blue-700 focus:outline-none"
                onClick={(e) => handleScrollToSection(e, "#contact")}
              >
                Get in touch
              </Link>
            </div>
          </div>

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
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      <div
        className={`${isMenuOpen ? "block" : "hidden"} md:hidden`}
        id="mobile-menu"
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
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
            href="/resume"
            className="text-gray-600 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium"
          >
            Resume
          </Link>
          <Link
            href="#about"
            className="text-gray-600 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium"
            onClick={(e) => handleScrollToSection(e, "#about")}
          >
            About
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
    </nav>
  );
};

export default Navbar;
