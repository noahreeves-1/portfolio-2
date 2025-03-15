"use client";

import Image from "next/image";
import Preparation from "@/public/preparation.svg";
import { motion } from "framer-motion";
import Brush from "@/public/brush.svg";
import Code from "@/public/code.svg";

const CTA = () => {
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
      svgComponent: Brush,
      useSvgFile: true,
    },
    {
      name: "Implement",
      svgComponent: Code,
      useSvgFile: true,
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
    initial: { opacity: 0, y: -5 },
    animate: {
      opacity: 1,
      y: 0,
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

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        {/* SDLC Timeline */}
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
          {/* SVG Timeline for perfect alignment */}
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
                              delay:
                                index === 0 ? 0.6 : index * baseDuration + 0.4,
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
                      stroke="#4B5563" // Dark gray (gray-600)
                      strokeWidth="2"
                      initial={{
                        strokeDasharray: width,
                        strokeDashoffset: width,
                      }}
                      animate={{
                        strokeDashoffset: 0,
                        transition: {
                          duration: baseDuration - staggerDelay,
                          delay: index === 0 ? 0.6 : index * baseDuration + 0.4,
                          ease: "easeInOut",
                        },
                      }}
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
                      {step.useSvgFile ? (
                        <foreignObject
                          width="24"
                          height="24"
                          x={cx - 12}
                          y={70 - 12}
                        >
                          <div className="w-6 h-6">
                            <Image
                              src={step.svgComponent}
                              alt={step.name}
                              width={24}
                              height={24}
                            />
                          </div>
                        </foreignObject>
                      ) : (
                        <path
                          d={step.icon}
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          fill="none"
                          transform={`translate(${cx - 12}, ${70 - 12})`}
                        />
                      )}
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
        </motion.div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <motion.div
            className="max-w-2xl md:w-1/2 flex flex-col justify-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={textFadeIn}
          >
            <h2 className="text-3xl md:text-5xl font-semibold mb-4 md:mb-6">
              {`Let's create something amazing together`}
              <span className="text-gray-500">
                —bringing your vision to life.
              </span>
            </h2>
            <p className="text-gray-500 text-lg">
              {`As a life-long learner, I'm always looking for new challenges and opportunities to grow and expand my skillset. Let's talk!`}
            </p>
            {/* <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-black text-white rounded-full text-lg font-medium transition-transform hover:scale-105"
            >
              Start building for free
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 12H19M19 12L12 5M19 12L12 19"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a> */}
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
