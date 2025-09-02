"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

// Animation variants for container elements
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

// Animation variants for individual categories
const categoryVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring" as const,
      stiffness: 100,
      damping: 12,
    },
  },
};

// Animation variants for skill items
const itemVariants = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring" as const,
      stiffness: 150,
      damping: 15,
    },
  },
};

export function AnimatedSkillsContainer({ children }: { children: ReactNode }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={containerVariants}
    >
      {children}
    </motion.div>
  );
}

export function AnimatedPrimarySkills({ children }: { children: ReactNode }) {
  return (
    <motion.div
      className="flex flex-wrap justify-center gap-6 mb-12"
      variants={categoryVariants}
    >
      {children}
    </motion.div>
  );
}

export function AnimatedSkillItem({ children }: { children: ReactNode }) {
  return (
    <motion.div
      className="flex flex-col items-center"
      variants={itemVariants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </motion.div>
  );
}

export function AnimatedCategoryGrid({ children }: { children: ReactNode }) {
  return (
    <motion.div
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
      variants={categoryVariants}
    >
      {children}
    </motion.div>
  );
}

export function AnimatedCategoryCard({ 
  children,
  className = ""
}: { 
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      variants={itemVariants}
      whileHover={{ scale: 1.02 }}
    >
      {children}
    </motion.div>
  );
}