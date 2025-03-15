"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import accenture from "@public/accenture.webp";
import businessExpoCenter from "@public/business-expo-center.webp";
import glassDoctor from "@public/glass-doctor.webp";
import kornFerry from "@public/korn-ferry.webp";
import att from "@public/att.webp";
import ecolab from "@public/ecolab.webp";
import couchetard from "@public/couche-tard.webp";
import rnl from "@public/rnl.webp";
import redHat from "@public/red-hat.webp";
import navyFederal from "@public/navy-federal-credit-union.svg";
import salesforce from "@public/salesforce.svg";
import twc from "@public/twc.webp";

const SocialProof = () => {
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
        className="text-center text-xs md:text-sm font-semibold text-gray-800 px-4"
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
          className="w-20 h-18 md:w-18 md:h-18 flex items-center justify-center"
          variants={itemVariants}
        >
          <Image
            src={accenture}
            alt="Accenture"
            className="max-w-full max-h-full object-contain"
          />
        </motion.div>
        <motion.div
          className="w-16 h-12 md:w-14 md:h-14 flex items-center justify-center"
          variants={itemVariants}
        >
          <Image
            src={att}
            alt="AT&T"
            className="max-w-full max-h-full object-contain"
          />
        </motion.div>
        <motion.div
          className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center"
          variants={itemVariants}
        >
          <Image
            src={salesforce}
            alt="Salesforce"
            className="max-w-full max-h-full object-contain"
          />
        </motion.div>
        <motion.div
          className="w-20 h-12 md:w-22 md:h-14 flex items-center justify-center"
          variants={itemVariants}
        >
          <Image
            src={redHat}
            alt="Red Hat"
            className="max-w-full max-h-full object-contain"
          />
        </motion.div>
        <motion.div
          className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center"
          variants={itemVariants}
        >
          <Image
            src={navyFederal}
            alt="Navy Federal Credit Union"
            className="max-w-full max-h-full object-contain"
          />
        </motion.div>
        <motion.div
          className="w-20 h-12 md:w-20 md:h-14 flex items-center justify-center"
          variants={itemVariants}
        >
          <Image
            src={ecolab}
            alt="Ecolab"
            className="max-w-full max-h-full object-contain"
          />
        </motion.div>
        <motion.div
          className="w-24 h-12 md:w-24 md:h-14 flex items-center justify-center"
          variants={itemVariants}
        >
          <Image
            src={kornFerry}
            alt="Korn Ferry"
            className="max-w-full max-h-full object-contain"
          />
        </motion.div>
        <motion.div
          className="w-12 h-12 flex items-center justify-center"
          variants={itemVariants}
        >
          <Image
            src={twc}
            alt="TWC"
            className="max-w-full max-h-full object-contain"
          />
        </motion.div>
        <motion.div
          className="w-20 h-12 md:w-24 md:h-14 flex items-center justify-center"
          variants={itemVariants}
        >
          <Image
            src={couchetard}
            alt="Couche Tard"
            className="max-w-full max-h-full object-contain"
          />
        </motion.div>
        <motion.div
          className="w-16 h-12 md:w-16 md:h-12 flex items-center justify-center"
          variants={itemVariants}
        >
          <Image
            src={rnl}
            alt="RNL"
            className="max-w-full max-h-full object-contain"
          />
        </motion.div>
        <motion.div
          className="w-20 h-12 md:w-24 md:h-14 flex items-center justify-center"
          variants={itemVariants}
        >
          <Image
            src={businessExpoCenter}
            alt="Business Expo Center"
            className="max-w-full max-h-full object-contain"
          />
        </motion.div>
        <motion.div
          className="w-20 h-12 md:w-24 md:h-14 flex items-center justify-center"
          variants={itemVariants}
        >
          <Image
            src={glassDoctor}
            alt="Glass Doctor"
            className="max-w-full max-h-full object-contain"
          />
        </motion.div>
        {/* <div className="w-16 h-12 md:w-18 md:h-14 flex items-center justify-center">
          <Image
            src={muffin}
            alt="Muffin"
            className="max-w-full max-h-full object-contain"
          />
        </div> */}
      </motion.div>
    </div>
  );
};

export default SocialProof;
