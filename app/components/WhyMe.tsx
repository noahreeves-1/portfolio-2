"use client";

import { motion } from "framer-motion";

const WhyMe = () => {
  const priorExperience = [
    "Tennis Coach",
    "Math Tutor",
    "Cold Caller",
    "Marketing Intern",
    "Marketing Lead",
    "Translator",
    "Research Assistant",
    "Customer Support Specialist",
    "SEO Specialist",
    "Club President",
    "Business Analyst",
    "Data Analyst",
    "BI Developer",
    "Management Consultant",
    "Software Engineer",
    "Startup Founder",
  ];

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
    <section id="why-hire-me" className="my-8">
      <div className="py-20 px-4 text-black">
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
              WHY HIRE ME?
            </motion.h3>

            <motion.h2
              className="text-center text-2xl md:text-3xl font-bold mb-6"
              variants={fadeIn}
            >
              <p className="text-black">I Bridge the Gap Between </p>
              <p className="text-green-400">Business and Tech</p>
            </motion.h2>

            <motion.p
              className="text-center text-lg max-w-lg mx-auto mb-16"
              variants={fadeIn}
            >
              {`As an immigrant who started his career with unpaid internships, worked his way up to management consulting, then quit to learn how to code and build a startup, I don't expect anything to be handed to me. With experience in small business marketing, Fortune 500 consulting, software engineering, and startup operations, I am uniquely positioned to take on any challenge in business and tech.`}
            </motion.p>
          </div>

          {/* Right side image */}
          {/* <div className="hidden md:block w-32 h-32 lg:w-40 lg:h-40 flex-shrink-0 self-start mt-24">
            <Image src={ShipIt} alt="Ship It" width={150} height={150} />
          </div> */}
        </motion.div>

        {/* Experience Carousel */}
        <div className="carousel-container w-full">
          <div className="carousel-track animate-scrollX">
            {/* First set of items */}
            <div className="carousel-content flex space-x-8 mr-8">
              {priorExperience.map((experience, index) => (
                <div
                  key={`item-1-${index}`}
                  className="carousel-item px-3 py-2"
                >
                  <p className="text-gray-400 font-semibold whitespace-nowrap">
                    {experience.toUpperCase()}
                  </p>
                </div>
              ))}
            </div>

            {/* Duplicate set for seamless looping */}
            <div className="carousel-content flex space-x-8">
              {priorExperience.map((experience, index) => (
                <div
                  key={`item-2-${index}`}
                  className="carousel-item px-3 py-2"
                >
                  <p className="text-gray-400 font-semibold whitespace-nowrap">
                    {experience.toUpperCase()}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyMe;
