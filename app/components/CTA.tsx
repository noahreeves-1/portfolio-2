"use client";

import Preparation from "@/public/preparation.svg";
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
        ease: "easeInOut",
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
        ease: "easeInOut",
        delay: 0.5, // Wait for text to appear first
      },
    },
  };

  // SDLC steps data
  const sdlcSteps = [
    {
      name: "Plan",
      iconSrc: "/icons/plan.svg",
    },
    {
      name: "Analyze",
      iconSrc: "/icons/analyze.svg",
    },
    {
      name: "Design",
      iconSrc: "/icons/design.svg",
    },
    {
      name: "Implement",
      iconSrc: "/icons/implement.svg",
    },
    {
      name: "Test",
      iconSrc: "/icons/test.svg",
    },
    {
      name: "Maintain",
      iconSrc: "/icons/maintain.svg",
    },
  ];

  // Base animation duration (in seconds)
  const baseDuration = 0.6;
  const staggerDelay = 0.1;

  // Animation for the icons (they appear sequentially)
  const iconAnimation = (index: number) => ({
    initial: { opacity: 0, scale: 0 },
    animate: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3,
        delay: index === 0 ? 0.3 : index * baseDuration + 0.2,
        ease: "easeOut",
      },
    },
  });

  // Animation for text labels (fade in with icons)
  const labelAnimation = (index: number) => ({
    initial: { opacity: 0, y: isMobile ? -5 : -5, x: isMobile ? -5 : 0 },
    animate: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        duration: 0.3,
        delay: index === 0 ? 0.3 : index * baseDuration + 0.2, // Same timing as icon
        ease: "easeOut",
      },
    },
  });

  // Animation for circles (color change when icons appear)
  const circleAnimation = (index: number) => ({
    initial: { stroke: "#d1d5db" }, // Start with gray-300
    animate: {
      stroke: "#3b82f6", // Animate to blue-500
      transition: {
        duration: 0.3,
        delay: index === 0 ? 0.3 : index * baseDuration + 0.2, // Same timing as icon
        ease: "easeOut",
      },
    },
  });

  // Render horizontal timeline for desktop
  const renderHorizontalTimeline = () => {
    return (
      <div className="w-full relative h-[140px]">
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 1200 140"
          preserveAspectRatio="xMidYMid meet"
        >
          {/* Define clipPaths for each line */}
          <defs>
            {sdlcSteps.map((_, index) => {
              if (index < sdlcSteps.length - 1) {
                const x1 = 100 + index * 200;
                const x2 = 100 + (index + 1) * 200;
                const width = x2 - x1 - 60; // Account for circle radius on both sides
                return (
                  <clipPath key={`clip-path-${index}`} id={`clip-${index}`}>
                    <motion.rect
                      x={x1 + 30}
                      y="69"
                      width={width}
                      height="3"
                      initial={{ width: 0 }}
                      animate={{
                        width: width,
                        transition: {
                          duration: baseDuration - staggerDelay,
                          delay: index === 0 ? 0.6 : index * baseDuration + 0.4,
                          ease: "easeInOut",
                        },
                      }}
                    />
                  </clipPath>
                );
              }
              return null;
            })}
          </defs>

          {/* Base Connecting Lines (grey background lines) */}
          {sdlcSteps.map((_, index) => {
            if (index < sdlcSteps.length - 1) {
              const x1 = 100 + index * 200;
              const x2 = 100 + (index + 1) * 200;
              return (
                <line
                  key={`base-line-${index}`}
                  x1={x1 + 30} // Start from right edge of current circle
                  y1="70"
                  x2={x2 - 30} // End at left edge of next circle
                  y2="70"
                  stroke="#e5e7eb" // Base line color (gray-200)
                  strokeWidth="2"
                />
              );
            }
            return null;
          })}

          {/* Circles with color animation */}
          {sdlcSteps.map((step, index) => {
            const cx = 100 + index * 200;
            return (
              <g key={`step-${index}`}>
                {/* Circle Background with Animation */}
                <motion.circle
                  cx={cx}
                  cy="70"
                  r="30"
                  fill="white"
                  strokeWidth="3"
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true, amount: 0.8 }}
                  variants={circleAnimation(index)}
                />
              </g>
            );
          })}

          {/* Dark gray animated lines that animate from left to right */}
          {sdlcSteps.map((_, index) => {
            if (index < sdlcSteps.length - 1) {
              const x1 = 100 + index * 200;
              const x2 = 100 + (index + 1) * 200;
              const width = x2 - x1 - 60; // Account for circle radius on both sides
              return (
                <motion.line
                  key={`animated-line-${index}`}
                  x1={x1 + 30}
                  y1="70"
                  x2={x2 - 30}
                  y2="70"
                  stroke="#6B7280" // Lighter gray (gray-500)
                  strokeWidth="2"
                  initial={{
                    strokeDasharray: width,
                    strokeDashoffset: width,
                  }}
                  whileInView={{
                    strokeDashoffset: 0,
                    transition: {
                      duration: baseDuration - staggerDelay,
                      delay: index === 0 ? 0.6 : index * baseDuration + 0.4,
                      ease: "easeInOut",
                    },
                  }}
                  viewport={{ once: true, amount: 0.8 }}
                />
              );
            }
            return null;
          })}

          {/* Animated Icons and Labels (appear one by one) */}
          {sdlcSteps.map((step, index) => {
            const cx = 100 + index * 200;
            return (
              <g key={`content-${index}`}>
                {/* Icon */}
                <motion.g
                  key={`icon-${index}`}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true, amount: 0.8 }}
                  custom={index}
                  variants={iconAnimation(index)}
                >
                  <foreignObject width="24" height="24" x={cx - 12} y={70 - 12}>
                    <div className="w-6 h-6 flex items-center justify-center">
                      <img
                        src={step.iconSrc}
                        alt={step.name}
                        className="w-5 h-5"
                      />
                    </div>
                  </foreignObject>
                </motion.g>

                {/* Animated Label */}
                <motion.text
                  x={cx}
                  y="120"
                  textAnchor="middle"
                  fill="#374151" // text-gray-700
                  className="text-sm font-medium"
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true, amount: 0.8 }}
                  variants={labelAnimation(index)}
                >
                  {step.name}
                </motion.text>
              </g>
            );
          })}
        </svg>
      </div>
    );
  };

  // Render vertical timeline for mobile
  const renderVerticalTimeline = () => {
    const verticalSpacing = 80; // Vertical spacing between circles
    const svgHeight = (sdlcSteps.length - 1) * verticalSpacing + 200; // Calculate total height needed

    return (
      <div
        className="w-full relative mx-auto flex justify-center"
        style={{ height: `${svgHeight}px` }}
      >
        <svg
          width="250"
          height={svgHeight}
          viewBox={`0 0 250 ${svgHeight}`}
          preserveAspectRatio="xMidYMid meet"
        >
          {/* Base Connecting Lines (grey background lines) */}
          {sdlcSteps.map((_, index) => {
            if (index < sdlcSteps.length - 1) {
              const y1 = 70 + index * verticalSpacing;
              const y2 = 70 + (index + 1) * verticalSpacing;
              return (
                <line
                  key={`base-line-${index}`}
                  x1="60"
                  y1={y1 + 30} // Start from bottom edge of current circle
                  x2="60"
                  y2={y2 - 30} // End at top edge of next circle
                  stroke="#e5e7eb" // Base line color (gray-200)
                  strokeWidth="2"
                />
              );
            }
            return null;
          })}

          {/* Dark gray animated lines that animate from top to bottom */}
          {sdlcSteps.map((_, index) => {
            if (index < sdlcSteps.length - 1) {
              const y1 = 70 + index * verticalSpacing;
              const y2 = 70 + (index + 1) * verticalSpacing;
              const height = y2 - y1 - 60; // Account for circle radius on both sides
              return (
                <motion.line
                  key={`animated-line-${index}`}
                  x1="60"
                  y1={y1 + 30}
                  x2="60"
                  y2={y2 - 30}
                  stroke="#6B7280" // Lighter gray (gray-500)
                  strokeWidth="2"
                  initial={{
                    strokeDasharray: height,
                    strokeDashoffset: height,
                  }}
                  whileInView={{
                    strokeDashoffset: 0,
                    transition: {
                      duration: baseDuration - staggerDelay,
                      delay: index === 0 ? 0.6 : index * baseDuration + 0.4,
                      ease: "easeInOut",
                    },
                  }}
                  viewport={{ once: true, amount: 0.2 }}
                />
              );
            }
            return null;
          })}

          {/* Steps (circles, icons, and labels) */}
          {sdlcSteps.map((step, index) => {
            const cy = 70 + index * verticalSpacing;
            return (
              <g key={`step-${index}`}>
                {/* Circle Background with Animation */}
                <motion.circle
                  cx="60"
                  cy={cy}
                  r="30"
                  fill="white"
                  strokeWidth="3"
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true, amount: 0.2 }}
                  variants={circleAnimation(index)}
                />

                {/* Icon */}
                <motion.g
                  key={`icon-${index}`}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true, amount: 0.2 }}
                  custom={index}
                  variants={iconAnimation(index)}
                >
                  <foreignObject width="24" height="24" x={60 - 12} y={cy - 12}>
                    <div className="w-6 h-6 flex items-center justify-center">
                      <img
                        src={step.iconSrc}
                        alt={step.name}
                        className="w-5 h-5"
                      />
                    </div>
                  </foreignObject>
                </motion.g>

                {/* Label to the right side of circle */}
                <motion.text
                  x="110"
                  y={cy + 5} // Centered vertically with the circle
                  textAnchor="start"
                  fill="#374151" // text-gray-700
                  className="text-sm font-medium"
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true, amount: 0.2 }}
                  variants={labelAnimation(index)}
                >
                  {step.name}
                </motion.text>
              </g>
            );
          })}
        </svg>
      </div>
    );
  };

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        {/* SDLC Timeline - conditionally render based on screen size */}
        <motion.div
          className=""
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
              {`Let's create something amazing together`}
              <span className="text-gray-500">-from idea to execution.</span>
            </h2>
            <p className="text-gray-500 text-lg">
              {`As a life-long learner, I'm always looking for new challenges and opportunities to grow and expand my skillset. Let's talk!`}
            </p>
          </motion.div>
          <motion.div
            className="relative h-80 w-80 md:h-96 md:w-96 flex items-center justify-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={imageFadeIn}
          >
            <img
              src={Preparation.src}
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
