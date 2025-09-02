"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface WhoMeClientProps {
  children: ReactNode;
}

// Animation variants
const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.8 },
  },
};

const containerAnimation = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

export function WhoMeAnimationWrapper({ children }: WhoMeClientProps) {
  return (
    <motion.div
      className="flex items-start justify-center max-w-6xl mx-auto"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerAnimation}
    >
      {children}
    </motion.div>
  );
}

export function AnimatedText({ 
  children, 
  className = ""
}: { 
  children: ReactNode; 
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      variants={fadeIn}
    >
      {children}
    </motion.div>
  );
}

export function AnimatedBottomText({ children }: { children: ReactNode }) {
  return (
    <motion.p
      className="text-center max-w-lg mx-auto mt-6 mb-32 font-semibold"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 1.2, delay: 0.5 }}
    >
      {children}
    </motion.p>
  );
}