"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

// Animation variant for heading text
const headingVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut" as const,
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
      when: "beforeChildren" as const,
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
      type: "spring" as const,
      damping: 12,
    },
  },
};

export function AnimatedHeading({ children }: { children: ReactNode }) {
  return (
    <motion.h2
      className="text-center text-sm font-semibold text-gray-800 px-4"
      variants={headingVariants}
      initial="hidden"
      animate="visible"
    >
      {children}
    </motion.h2>
  );
}

export function AnimatedLogosContainer({ children }: { children: ReactNode }) {
  return (
    <motion.div
      className="flex flex-wrap justify-center items-center gap-4 md:gap-6 lg:gap-8 mt-4 px-4"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {children}
    </motion.div>
  );
}

export function AnimatedLogoItem({ 
  children, 
  className 
}: { 
  children: ReactNode;
  className: string;
}) {
  return (
    <motion.div
      className={className}
      variants={itemVariants}
    >
      {children}
    </motion.div>
  );
}