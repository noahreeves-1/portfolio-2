"use client";

import { useState } from "react";
import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";
import { getTechBadgeClasses } from "@/app/lib/utils/techColors";

interface ProjectHeroCardProps {
  title: string;
  description: string;
  longDescription?: string;
  imageSrc: StaticImageData | string;
  logoSrc?: StaticImageData | string;
  category: string;
  techStack: string[];
  features?: string[];
  metrics?: {
    label: string;
    value: string;
  }[];
  websiteUrl?: string;
  githubUrl?: string;
  onViewDetails: () => void;
}

const ProjectHeroCard = ({
  title,
  description,
  imageSrc,
  logoSrc,
  category,
  techStack,
  metrics = [],
  websiteUrl,
  githubUrl,
  onViewDetails,
}: ProjectHeroCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow duration-300 cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onViewDetails}
    >
      <div className="relative h-48 md:h-64 bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden">
        <motion.div
          className="relative w-full h-full"
          animate={{ scale: isHovered ? 1.1 : 1 }}
          transition={{ duration: 0.3 }}
        >
          <Image
            src={imageSrc}
            alt={title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority
          />
        </motion.div>
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-mono font-medium text-gray-700 tracking-wider uppercase">
            {category}
          </span>
        </div>
      </div>

      <div className="p-5 md:p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <h3 className="text-2xl font-display font-semibold text-gray-900 mb-2 tracking-tight">
              {title}
            </h3>
            <p className="text-gray-600 leading-relaxed font-light">{description}</p>
          </div>
          {logoSrc && (
            <div className="relative w-12 h-12 ml-4">
              <Image
                src={logoSrc}
                alt={`${title} logo`}
                fill
                className="object-contain"
                sizes="48px"
              />
            </div>
          )}
        </div>

        {metrics.length > 0 && (
          <div className="flex gap-6 mb-6">
            {metrics.map((metric, index) => (
              <div key={index}>
                <div className="text-2xl font-display font-bold text-gray-900 tracking-tight">
                  {metric.value}
                </div>
                <div className="text-xs text-gray-500 font-medium tracking-wide">{metric.label}</div>
              </div>
            ))}
          </div>
        )}

        <div className="flex flex-wrap gap-2 mb-6">
          {techStack.slice(0, 5).map((tech, index) => (
            <span
              key={index}
              className={`px-3 py-1 border rounded-full text-xs font-medium tracking-wide ${getTechBadgeClasses(tech)}`}
            >
              {tech}
            </span>
          ))}
          {techStack.length > 5 && (
            <span className="px-3 py-1 bg-gray-50 border border-gray-200 rounded-full text-xs font-medium text-gray-500 tracking-wide">
              +{techStack.length - 5} more
            </span>
          )}
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={(e) => {
              e.stopPropagation();
              onViewDetails();
            }}
            className="px-4 py-2 bg-gray-900 text-white text-sm font-medium rounded-lg hover:bg-gray-800 transition-colors tracking-wide"
          >
            View Details
          </button>
          {websiteUrl && (
            <a
              href={websiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="px-4 py-2 border border-gray-300 text-gray-700 text-sm font-medium rounded-lg hover:bg-gray-50 transition-colors tracking-wide"
            >
              Live Site →
            </a>
          )}
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="px-4 py-2 border border-gray-300 text-gray-700 text-sm font-medium rounded-lg hover:bg-gray-50 transition-colors tracking-wide"
            >
              GitHub
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectHeroCard;
