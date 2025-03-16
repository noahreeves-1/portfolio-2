"use client";

import { motion } from "framer-motion";

const WhoMe = () => {
  // Animation variants removed from here - no longer needed for carousel

  // Fade-in animation variants
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.8 },
    },
  };

  // Staggered children animation for text elements
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

  return (
    <section id="about-me" className="my-8">
      <div className="pt-20 px-4 text-black">
        <motion.div
          className="flex items-start justify-center max-w-6xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerAnimation}
        >
          {/* Left side image */}
          {/* <div className="hidden md:block w-32 h-32 lg:w-40 lg:h-40 flex-shrink-0 self-start mt-24">
            <Image
              src={Collaboration}
              alt="Collaboration"
              width={150}
              height={150}
            />
          </div> */}

          {/* Center text content */}
          <div className="max-w-4xl mx-4 md:mx-8 flex-grow">
            <motion.h3
              className="text-center text-green-400 font-medium mb-4"
              variants={fadeIn}
            >
              WHO, ME?
            </motion.h3>

            <motion.h2
              className="text-center text-2xl md:text-3xl font-bold mb-6"
              variants={fadeIn}
            >
              <p className="text-black">I Bridge the Gap Between </p>
              <p className="text-green-400">Business and Tech</p>
            </motion.h2>

            <motion.p
              className="text-center text-lg max-w-lg mx-auto"
              variants={fadeIn}
            >
              {/* {`Started with unpaid internships, worked my way up to management consulting, then quit to learn how to code and build a startup. I've worked across small business marketing, Fortune 500 consulting, software engineering, and startup operations—giving me a rare mix of technical depth and business sense. Whether it's scaling a product, solving complex problems, or navigating ambiguity, I'm built for tackling challenges head-on.`} */}
              {`I've worked across small business marketing, Fortune 500 consulting, software engineering, and startup operations—giving me a rare mix of technical depth and business sense. Whether it's scaling a product, solving complex problems, or navigating ambiguity, I'm built for tackling challenges head-on.`}
            </motion.p>
          </div>

          {/* Right side image */}
          {/* <div className="hidden md:block w-32 h-32 lg:w-40 lg:h-40 flex-shrink-0 self-start mt-24">
            <Image src={ShipIt} alt="Ship It" width={150} height={150} />
          </div> */}
        </motion.div>
        <motion.p
          className="text-center max-w-lg mx-auto mt-6 mb-32 font-semibold"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1.2, delay: 0.5 }}
        >
          Marketing <span className="text-green-500">x</span> Consulting{" "}
          <span className="text-green-500">x</span> Software Engineering
        </motion.p>
      </div>
    </section>
  );
};

export default WhoMe;
