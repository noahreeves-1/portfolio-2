// Server Component - no "use client" directive
import Image from "next/image";
import { AnimatedHeading, AnimatedLogosContainer, AnimatedLogoItem } from "./SocialProofClient";
import { trustedCompanies, priorExperience } from "@/app/lib/data/companies";

const SocialProof = () => {

  return (
    <div className="mt-8 md:mt-12">
      <AnimatedHeading>
        TRUSTED BY FORTUNE 500 AND SMALL BUSINESSES
      </AnimatedHeading>
      <AnimatedLogosContainer>
        {trustedCompanies.map((company) => (
          <AnimatedLogoItem
            key={company.name}
            className={`${company.width} ${company.height} ${company.mdWidth} ${company.mdHeight} flex items-center justify-center`}
          >
            <div className="relative w-full h-full">
              <Image
                src={company.logo}
                alt={company.name}
                fill
                className="object-contain"
                sizes={company.sizes}
              />
            </div>
          </AnimatedLogoItem>
        ))}
      </AnimatedLogosContainer>

      {/* Left-to-Right Carousel (visible on all screens) */}
      <div className="mt-6">
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

      {/* Right-to-Left Carousel (visible only on mobile) */}
      <div className="block md:hidden mt-2">
        <div className="carousel-container w-full">
          <div className="carousel-track animate-scrollX-reverse">
            {/* First set of items */}
            <div className="carousel-content flex space-x-8 mr-8">
              {priorExperience.map((experience, index) => (
                <div key={`reverse-1-${index}`} className="carousel-item px-3">
                  <p className="text-gray-400 font-semibold whitespace-nowrap">
                    {experience.toUpperCase()}
                  </p>
                </div>
              ))}
            </div>

            {/* Duplicate set for seamless looping */}
            <div className="carousel-content flex space-x-8">
              {priorExperience.map((experience, index) => (
                <div key={`reverse-2-${index}`} className="carousel-item px-3">
                  <p className="text-gray-400 font-semibold whitespace-nowrap">
                    {experience.toUpperCase()}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialProof;
