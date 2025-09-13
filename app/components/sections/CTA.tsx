"use client";

import Preparation from "@/public/preparation.svg";
import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const CTA = () => {
  // Add state to track screen width for responsive behavior
  const [isMobile, setIsMobile] = useState(false);

  // Effect to handle screen resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // 768px is typically md breakpoint
    };

    // Set initial value
    handleResize();

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Clean up
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Fade-in animation for text
  const textFadeIn = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeInOut" as const,
      },
    },
  };

  // Fade-in animation for image with delay
  const imageFadeIn = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeInOut" as const,
        delay: 0.5, // Wait for text to appear first
      },
    },
  };

  // SDLC steps data
  const sdlcSteps = [
    {
      name: "Plan",
      icon: "M3 9h18M9 21V9M3 3h18a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",
      useSvgFile: false,
    },
    {
      name: "Analyze",
      icon: "M21 21l-4.3-4.3M11 19a8 8 0 1 0 0-16 8 8 0 0 0 0 16z",
      useSvgFile: false,
    },
    {
      name: "Design",
      icon: "/brush.svg",
      useSvgFile: true,
    },
    {
      name: "Develop",
      icon: "M16 18l6-6-6-6M8 6l-6 6 6 6",
      useSvgFile: false,
    },
    {
      name: "Test",
      icon: "M9 15l2 2 4-4M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14 2zM14 2v6h6",
      useSvgFile: false,
    },
    {
      name: "Maintain",
      icon: "M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z",
      useSvgFile: false,
    },
  ];

  // Animation durations and timing (in seconds)
  const animationStep = 0.8; // Time between each step in the sequence
  const markerDuration = 0.3; // Duration of marker animation
  const lineDuration = 0.4; // Duration of line animation
  const lineDelay = markerDuration; // Delay for line to start after marker begins

  // Animation for the icons
  const iconAnimation = (index: number) => ({
    initial: { opacity: 0, scale: 0 },
    animate: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: markerDuration,
        delay: index * animationStep,
        ease: "easeOut" as const,
      },
    },
  });

  // Animation for text labels
  const labelAnimation = (index: number) => ({
    initial: { opacity: 0, y: isMobile ? -5 : -5, x: isMobile ? -5 : 0 },
    animate: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        duration: markerDuration,
        delay: index * animationStep,
        ease: "easeOut" as const,
      },
    },
  });

  // Animation for circles
  const circleAnimation = (index: number) => ({
    initial: { borderColor: "#d1d5db" }, // Start with gray-300
    animate: {
      borderColor: "#3b82f6", // Animate to blue-500
      transition: {
        duration: markerDuration,
        delay: index * animationStep,
        ease: "easeOut" as const,
      },
    },
  });

  // Animation for connecting lines
  /*
  const lineAnimation = (index: number) => ({
    initial: { width: 0 },
    animate: {
      width: "100%",
      transition: {
        duration: baseDuration - staggerDelay,
        delay: index === 0 ? 0.6 : index * baseDuration + 0.4,
        ease: "easeInOut" as const,
      },
    },
  });
  */

  // Vertical line animation for mobile
  /*
  const verticalLineAnimation = (index: number) => ({
    initial: { height: 0 },
    animate: {
      height: "100%",
      transition: {
        duration: baseDuration - staggerDelay,
        delay: index === 0 ? 0.6 : index * baseDuration + 0.4,
        ease: "easeInOut" as const,
      },
    },
  });
  */

  // Helper function to render SVG icon
  const renderIcon = (step: (typeof sdlcSteps)[0]) => {
    if (step.useSvgFile) {
      return (
        <div className="relative w-6 h-6">
          <Image
            src={step.icon}
            alt={step.name}
            fill
            className="object-contain"
            sizes="24px"
          />
        </div>
      );
    } else {
      return (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          className="text-gray-700"
        >
          <path
            d={step.icon}
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
        </svg>
      );
    }
  };

  // Render horizontal timeline for desktop
  const renderHorizontalTimeline = () => {
    return (
      <div className="w-full mb-12 overflow-x-auto">
        <div className="flex justify-center">
          <div className="relative w-full max-w-4xl px-6">
            {/* Main container with a continuous background line */}
            <div className="relative flex justify-between items-center">
              {/* Remove the gray background line and keep only blue animated segments */}
              <div className="absolute top-[30px] h-[2px] left-[30px] right-[30px] z-[1] overflow-hidden">
                {sdlcSteps.map((_, index) => {
                  if (index === sdlcSteps.length - 1) return null; // No line after last element

                  // Calculate segment width - dividing line into equal parts
                  const segmentWidth = `${100 / (sdlcSteps.length - 1)}%`;

                  return (
                    <motion.div
                      key={`line-${index}`}
                      className="absolute h-full bg-gray-500"
                      style={{
                        left: `${(index / (sdlcSteps.length - 1)) * 100}%`,
                        width: segmentWidth,
                        transformOrigin: "left",
                      }}
                      initial={{ scaleX: 0 }}
                      whileInView={{
                        scaleX: 1,
                        transition: {
                          duration: lineDuration,
                          delay: index * animationStep + lineDelay, // Start after circle animation
                          ease: "easeOut" as const,
                        },
                      }}
                      viewport={{ once: true, amount: 0.5 }}
                    />
                  );
                })}
              </div>

              {/* Circles and labels placed on top of the line */}
              {sdlcSteps.map((step, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center relative z-[2]"
                >
                  <motion.div
                    className="w-[60px] h-[60px] rounded-full bg-white border-2 border-blue-400 flex items-center justify-center"
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true, amount: 0.5 }}
                    variants={circleAnimation(index)}
                  >
                    <motion.div
                      variants={iconAnimation(index)}
                      initial="initial"
                      whileInView="animate"
                      viewport={{ once: true, amount: 0.5 }}
                    >
                      {renderIcon(step)}
                    </motion.div>
                  </motion.div>

                  <motion.div
                    className="mt-3 text-sm font-medium text-gray-700"
                    variants={labelAnimation(index)}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true, amount: 0.5 }}
                  >
                    {step.name}
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  };

  // Render vertical timeline for mobile
  const renderVerticalTimeline = () => {
    return (
      <div
        className="w-full mb-10 px-8 pt-14 flex justify-center relative"
        style={{ zIndex: 1 }}
      >
        <div className="relative flex flex-col items-start">
          {sdlcSteps.map((step, index) => (
            <div key={index} className="flex items-center mb-14 relative">
              {/* Circle with icon */}
              <motion.div
                className="relative flex items-center justify-center w-[60px] h-[60px] rounded-full bg-white border-2 border-blue-400 flex items-center justify-center z-[1]"
                initial="initial"
                whileInView="animate"
                viewport={{ once: true, amount: 0.2 }}
                variants={circleAnimation(index)}
              >
                {/* Icon */}
                <motion.div
                  variants={iconAnimation(index)}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true, amount: 0.2 }}
                >
                  {renderIcon(step)}
                </motion.div>
              </motion.div>

              {/* Label */}
              <motion.div
                className="ml-4 text-sm font-medium text-gray-700"
                variants={labelAnimation(index)}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true, amount: 0.2 }}
              >
                {step.name}
              </motion.div>

              {/* Vertical connecting line (except for last item) */}
              {index < sdlcSteps.length - 1 && (
                <div className="absolute top-[59px] w-[2px] bg-gray-200 h-[82px] left-[29px] z-0">
                  <motion.div
                    className="w-full bg-gray-500 origin-top absolute top-0 left-0"
                    style={{ height: "100%", transformOrigin: "top" }}
                    initial={{ scaleY: 0 }}
                    whileInView={{
                      scaleY: 1,
                      transition: {
                        duration: lineDuration,
                        delay: index * animationStep + lineDelay, // Start after circle animation
                        ease: "easeInOut" as const,
                      },
                    }}
                    viewport={{ once: true, amount: 0.2 }}
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <section className="py-24 bg-white relative">
      <div
        className="container mx-auto px-4 md:px-6 relative"
        style={{ zIndex: 1 }}
      >
        {/* SDLC Timeline - conditionally render based on screen size */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1 },
          }}
        >
          {/* Render either horizontal (desktop) or vertical (mobile) timeline */}
          {isMobile ? renderVerticalTimeline() : renderHorizontalTimeline()}
        </motion.div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <motion.div
            className="max-w-2xl md:w-1/2 flex flex-col justify-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={textFadeIn}
          >
            <h2 className="text-3xl md:text-5xl font-semibold mb-4 md:mb-6">
              {`Website, Mobile App, or AI?`}
            </h2>
            <p className="text-gray-500 text-lg">
              {`With over 3 years of experience in software engineering and my background in consulting, I can take an idea from concept to reality. Check out my latest launch: `}
              <a 
                href="https://callhound.ai" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-600 underline font-medium"
              >
                Callhound AI
              </a>
              {` - an AI receptionist for businesses.`}
            </p>
          </motion.div>
          <motion.div
            className="relative h-80 w-80 md:h-96 md:w-96 flex items-center justify-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={imageFadeIn}
          >
            <Image
              src={Preparation}
              alt="Preparation"
              width={500}
              height={500}
              className="object-contain"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
