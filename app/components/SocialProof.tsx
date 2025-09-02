"use client";

import { motion } from "framer-motion";

const SocialProof = () => {
  // Previous roles for carousel display
  const priorExperience = [
    // "Tennis Coach",
    // "Math Tutor",
    // "Cold Caller",
    // "Marketing Intern",
    // "Translator",
    // "Customer Support Specialist",
    // "Research Assistant",
    "SEO Specialist",
    "Marketing Lead",
    "Club President",
    "Business Analyst",
    "Data Analyst",
    "BI Developer",
    "Management Consultant",
    "Software Engineer",
    "Startup Founder",
  ];

  // Animation variant for heading text
  const headingVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        delay: 1.5,
      },
    },
  };

  // Animation variants for container
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.15,
        delayChildren: 1.5,
      },
    },
  };

  // Animation variants for items
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
      },
    },
  };

  return (
    <div className="mt-8 md:mt-12">
      <motion.h2
        className="text-center text-sm font-semibold text-gray-800 px-4"
        variants={headingVariants}
        initial="hidden"
        animate="visible"
      >
        TRUSTED BY SMALL BUSINESSES AND FORTUNE 500 COMPANIES
      </motion.h2>
      <motion.div
        className="flex flex-wrap justify-center items-center gap-4 md:gap-6 lg:gap-8 mt-4 px-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          className="w-16 h-12 md:w-16 md:h-12 flex items-center justify-center"
          variants={itemVariants}
        >
          <img
            src="/rnl.webp"
            alt="RNL"
            className="max-w-full max-h-full object-contain"
          />
        </motion.div>
        <motion.div
          className="w-20 h-12 md:w-24 md:h-14 flex items-center justify-center"
          variants={itemVariants}
        >
          <img
            src="/business-expo-center.webp"
            alt="Business Expo Center"
            className="max-w-full max-h-full object-contain"
          />
        </motion.div>
        <motion.div
          className="w-20 h-12 md:w-24 md:h-14 flex items-center justify-center"
          variants={itemVariants}
        >
          <img
            src="/glass-doctor.webp"
            alt="Glass Doctor"
            className="max-w-full max-h-full object-contain"
          />
        </motion.div>
        <motion.div
          className="w-32 h-12 md:w-36 md:h-14 flex items-center justify-center"
          variants={itemVariants}
        >
          <img
            src="/Knoxlabs-logo-2024.svg"
            alt="KnoxLabs"
            className="max-w-full max-h-full object-contain"
          />
        </motion.div>
        <motion.div
          className="w-28 h-24 md:w-32 md:h-24 flex items-center justify-center"
          variants={itemVariants}
        >
          <img
            src="/accenture.webp"
            alt="Accenture"
            className="max-w-full max-h-full object-contain"
          />
        </motion.div>
      </motion.div>

      {/* Left-to-Right Carousel (visible on all screens) */}
      <div className="mt-6">
        <div className="carousel-container w-full">
          <div className="carousel-track animate-scrollX">
            {/* First set of items */}
            <div className="carousel-content flex space-x-8 mr-8">
              {priorExperience.map((experience, index) => (
                <div
                  key={`item-1-${index}`}
                  className="carousel-item px-3 py-2"
                >
                  <p className="text-gray-400 font-semibold whitespace-nowrap">
                    {experience.toUpperCase()}
                  </p>
                </div>
              ))}
            </div>

            {/* Duplicate set for seamless looping */}
            <div className="carousel-content flex space-x-8">
              {priorExperience.map((experience, index) => (
                <div
                  key={`item-2-${index}`}
                  className="carousel-item px-3 py-2"
                >
                  <p className="text-gray-400 font-semibold whitespace-nowrap">
                    {experience.toUpperCase()}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Right-to-Left Carousel (visible only on mobile) */}
      <div className="block md:hidden mt-2">
        <div className="carousel-container w-full">
          <div className="carousel-track animate-scrollX-reverse">
            {/* First set of items */}
            <div className="carousel-content flex space-x-8 mr-8">
              {priorExperience.map((experience, index) => (
                <div key={`reverse-1-${index}`} className="carousel-item px-3">
                  <p className="text-gray-400 font-semibold whitespace-nowrap">
                    {experience.toUpperCase()}
                  </p>
                </div>
              ))}
            </div>

            {/* Duplicate set for seamless looping */}
            <div className="carousel-content flex space-x-8">
              {priorExperience.map((experience, index) => (
                <div key={`reverse-2-${index}`} className="carousel-item px-3">
                  <p className="text-gray-400 font-semibold whitespace-nowrap">
                    {experience.toUpperCase()}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialProof;
