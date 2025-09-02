"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import HeroAnimationLazy from "./HeroAnimationLazy";

const rotatingPhrases = [
  { text: "traveled the world", color: "text-orange-400" },
  { text: "learned to code", color: "text-emerald-400" },
  { text: "launched a startup", color: "text-blue-400" },
  { text: "built for others", color: "text-purple-400" },
];

const Hero = () => {
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhraseIndex((prev) => (prev + 1) % rotatingPhrases.length);
    }, 2500);

    return () => clearInterval(interval);
  }, []);
  return (
    <div
      className="relative bg-gradient-to-br from-gray-950 via-gray-900 to-gray-800 pt-40 pb-32 md:pt-48 md:pb-40 overflow-hidden"
      aria-hidden="true"
    >
      {/* Grid line pattern */}
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(14, 165, 233, 0.15) 1px, transparent 1px),
            linear-gradient(90deg, rgba(14, 165, 233, 0.15) 1px, transparent 1px)
          `,
          backgroundSize: '30px 30px',
          opacity: 0.4
        }}
      />
      
      {/* Noise texture overlay */}
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100' height='100' filter='url(%23noise)' opacity='0.02'/%3E%3C/svg%3E")`,
        }}
      />
      
      {/* Subtle radial gradient behind torus knot */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          background: 'radial-gradient(circle at 70% 50%, rgba(14, 165, 233, 0.3), transparent 50%)'
        }}
      />
      
      {/* Floating tech keywords - top left */}
      <motion.div 
        className="absolute top-24 left-8 hidden md:block"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, delay: 1.2 }}
      >
        <div className="text-xs text-gray-500 font-mono space-y-1">
          <div className="opacity-50">{`// Full Stack Developer`}</div>
          <div className="opacity-40">{`// Systems Architect`}</div>
          <div className="opacity-30">{`// Startup Founder`}</div>
        </div>
      </motion.div>
      
      {/* Floating tech keywords - top right */}
      <motion.div 
        className="absolute top-24 right-8 hidden md:block text-right"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, delay: 1.4 }}
      >
        <div className="text-xs text-gray-500 font-mono space-y-1">
          <div className="opacity-30">TypeScript</div>
          <div className="opacity-40">React / Next.js</div>
          <div className="opacity-50">Node.js / Python</div>
        </div>
      </motion.div>
      
      <div className="flex flex-col md:flex-row max-w-5xl mx-auto px-4 md:px-6 relative">
        <div className="w-full md:w-1/2 pt-8 md:pt-24">
          <motion.div
            className="text-4xl md:text-5xl lg:text-6xl font-bold pb-2 md:pb-4 text-white font-space-grotesk"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            {`Hi, I'm `}
            <span className="relative inline-block">
              Noah!
              <motion.span
                className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-blue-400 to-cyan-400"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 0.5, delay: 0.9 }}
              />
            </span>
          </motion.div>

          <motion.div
            className="text-xl md:text-2xl font-medium text-gray-400 max-w-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            <div>After 5 years in management consulting,</div>
            <div className="flex items-baseline flex-wrap">
              <span>I&nbsp;</span>
              <span className="relative inline-block min-w-[200px]">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={currentPhraseIndex}
                    className="inline-block whitespace-nowrap"
                    initial={{ y: -10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 10, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <span className={rotatingPhrases[currentPhraseIndex].color}>
                      {rotatingPhrases[currentPhraseIndex].text}
                    </span>
                    <span className="text-gray-400">.</span>
                  </motion.span>
                </AnimatePresence>
              </span>
            </div>
          </motion.div>

          <motion.button
            className="bg-transparent border border-blue-500 text-blue-400 px-4 py-2 mt-4 md:mt-6 rounded-md text-sm font-medium hover:bg-blue-500 hover:text-white transition-all duration-200 hover:cursor-pointer"
            onClick={() => {
              document.getElementById("contact")?.scrollIntoView({
                behavior: "smooth",
              });
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.0 }}
          >
            {`Get in touch`}
          </motion.button>
        </div>
        <div className="w-full md:w-1/2 h-[300px] md:h-[400px] mt-8 md:mt-0">
          <HeroAnimationLazy speed={0.3} intensity={0.8} />
        </div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: -10 }}
        animate={{ 
          opacity: 0.4,
          y: [0, 10, 0]
        }}
        transition={{ 
          opacity: { duration: 0.7, delay: 1.5 },
          y: { duration: 2, repeat: Infinity, ease: "easeInOut" }
        }}
      >
        <div className="flex flex-col items-center">
          <span className="text-xs text-gray-400 mb-2 font-mono">scroll</span>
          <svg 
            className="w-5 h-5 text-gray-400" 
            fill="none" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth="2" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
