"use client";

import { motion } from "framer-motion";
import HeroAnimationLazy from "./HeroAnimationLazy";

const Hero = () => {
  return (
    <div
      className="relative bg-gradient-to-br from-gray-900 to-gray-800 py-32 md:py-40"
      aria-hidden="true"
    >
      <div className="flex flex-col md:flex-row max-w-5xl mx-auto px-4 md:px-6 relative">
        <div className="w-full md:w-1/2 pt-8 md:pt-24">
          <motion.p
            className="text-4xl md:text-5xl lg:text-6xl font-bold pb-2 md:pb-4 text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            {`Hi, I'm Noah!`}
          </motion.p>

          <motion.p
            className="text-xl md:text-2xl font-medium text-gray-400"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            {`After 5 years in `}
            <span className="text-gray-400">{`management consulting`}</span>
            {`, I `}
            <span className="text-orange-400">{`traveled`}</span>
            {`, learned to `}
            <span className="text-emerald-400">{`code`}</span>
            {`, and launched a `}
            <span className="text-blue-400">{`startup.`}</span>
          </motion.p>

          <motion.button
            className="bg-transparent border border-blue-500 text-blue-400 px-4 py-2 mt-4 md:mt-6 rounded-md text-sm font-medium hover:bg-blue-600 hover:text-white hover:shadow-[0_0_20px_rgba(37,99,235,0.5)] transition-all duration-300 hover:cursor-pointer"
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
    </div>
  );
};

export default Hero;
