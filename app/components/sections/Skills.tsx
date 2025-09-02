// Server Component - no "use client" directive
import React from "react";
import Image from "next/image";
import { 
  AnimatedSkillsContainer, 
  AnimatedCategoryCard
} from "./SkillsClient";
import { skillLogos, preferredTechStack, otherTechCategories, SkillCategory } from "@/app/lib/data/skills";

interface SkillCategoryProps {
  category: SkillCategory;
  className?: string;
  isPreferred?: boolean;
}

const SkillCategoryContent = ({ category, className = "", isPreferred = false }: SkillCategoryProps) => (
  <div className={`bg-gray-800 rounded-xl p-5 shadow-md border ${isPreferred ? 'border-blue-500' : 'border-gray-600'} hover:shadow-xl transition-all duration-300 mb-6 ${className}`}>
    <h4 className="text-lg font-medium mb-3 pb-2 border-b border-gray-600 text-white">
      {category.name}
    </h4>
    <div className="flex flex-wrap gap-2">
      {category.skills.map((skill: string) => (
        <span
          key={skill}
          className="inline-flex items-center px-3 sm:px-3.5 py-1.5 sm:py-2 bg-gray-600 text-gray-200 rounded-full text-sm font-medium border border-gray-500 hover:bg-gray-500 transition-colors"
        >
          {skillLogos[skill] && (
            <div className="relative w-4 h-4 sm:w-5 sm:h-5 mr-2">
              <Image
                src={skillLogos[skill]}
                alt={`${skill} logo`}
                fill
                className="object-contain"
                sizes="20px"
              />
            </div>
          )}
          {skill}
        </span>
      ))}
    </div>
  </div>
);

const Skills = () => {
  return (
    <section id="skills" className="py-24">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <AnimatedSkillsContainer>
          <h2 className="text-xl font-bold text-center mb-4 text-slate-800 md:text-3xl">
            Skills
          </h2>

          {/* Preferred Tech Stack */}
          <div className="mb-8">
            <div>
              {preferredTechStack.map((category) => (
                <AnimatedCategoryCard key={category.name} className="">
                  <SkillCategoryContent
                    category={category}
                    isPreferred={true}
                  />
                </AnimatedCategoryCard>
              ))}
            </div>
          </div>

          {/* Other Technologies */}
          <div>
            <h3 className="font-semibold mb-4 text-center text-gray-500 text-xl md:text-3xl">
              Additional Skills
            </h3>
            <div className="columns-1 md:columns-2 lg:columns-3 gap-6">
              {otherTechCategories.map((category) => (
                <div key={category.name} className="break-inside-avoid">
                  <AnimatedCategoryCard>
                    <SkillCategoryContent category={category} />
                  </AnimatedCategoryCard>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSkillsContainer>
      </div>
    </section>
  );
};

export default Skills;