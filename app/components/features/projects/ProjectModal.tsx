"use client";

import { useEffect } from "react";
import Image, { StaticImageData } from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { skillLogos } from "@/app/lib/data/skills";

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: {
    title: string;
    description: string;
    longDescription?: string;
    imageSrc: StaticImageData | string;
    additionalImages?: {
      src: StaticImageData | string;
      alt: string;
    }[];
    logoSrc?: StaticImageData | string;
    category: string;
    techStack: {
      frontend?: string[];
      backend?: string[];
      database?: string[];
      other?: string[];
    };
    features?: string[];
    metrics?: {
      label: string;
      value: string;
    }[];
    websiteUrl?: string;
    githubUrl?: string;
    challenges?: string[];
    learnings?: string[];
  } | null;
}

const ProjectModal = ({ isOpen, onClose, project }: ProjectModalProps) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!project) return null;

  const getTechLogo = (tech: string): StaticImageData | null => {
    return skillLogos[tech] || null;
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
            onClick={onClose}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed inset-x-4 top-[50%] translate-y-[-50%] md:inset-x-auto md:left-[50%] md:translate-x-[-50%] max-w-4xl max-h-[90vh] bg-white rounded-2xl shadow-2xl z-50 overflow-hidden"
          >
            <div className="relative max-h-[90vh] overflow-y-auto">
              <button
                onClick={onClose}
                className="absolute top-4 right-4 p-2 bg-white/90 backdrop-blur-sm rounded-full hover:bg-gray-100 transition-colors z-10"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>

              <div className="h-64 md:h-80 bg-gradient-to-br from-gray-50 to-gray-100 relative">
                <Image
                  src={project.imageSrc}
                  alt={project.title}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 896px"
                  priority
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-sm font-medium text-gray-700">
                    {project.category}
                  </span>
                </div>
              </div>

              <div className="p-6 md:p-8">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-2">
                      {project.title}
                    </h2>
                    <p className="text-gray-600 text-lg">
                      {project.description}
                    </p>
                  </div>
                  {project.logoSrc && (
                    <div className="relative w-16 h-16 ml-4">
                      <Image
                        src={project.logoSrc}
                        alt={`${project.title} logo`}
                        fill
                        className="object-contain"
                        sizes="64px"
                      />
                    </div>
                  )}
                </div>

                {project.longDescription && (
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {project.longDescription}
                  </p>
                )}

                {project.additionalImages && project.additionalImages.length > 0 && (
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">
                      Screenshots
                    </h3>
                    <div className="grid grid-cols-1 gap-4">
                      {project.additionalImages.map((image, index) => (
                        <div
                          key={index}
                          className="relative rounded-lg overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 border border-gray-200"
                        >
                          <div className="relative h-64 md:h-80">
                            <Image
                              src={image.src}
                              alt={image.alt}
                              fill
                              className="object-contain p-2"
                              sizes="(max-width: 768px) 100vw, 896px"
                            />
                          </div>
                          {image.alt && (
                            <p className="text-sm text-gray-600 text-center p-2 border-t border-gray-200 bg-white">
                              {image.alt}
                            </p>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {project.metrics && project.metrics.length > 0 && (
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
                    {project.metrics.map((metric, index) => (
                      <div
                        key={index}
                        className="bg-gray-50 rounded-lg p-4 text-center"
                      >
                        <div className="text-2xl font-bold text-gray-900">
                          {metric.value}
                        </div>
                        <div className="text-sm text-gray-600">
                          {metric.label}
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {project.features && project.features.length > 0 && (
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">
                      Key Features
                    </h3>
                    <ul className="space-y-2">
                      {project.features.map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <svg
                            className="w-5 h-5 text-green-500 mt-0.5 mr-2 flex-shrink-0"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                          <span className="text-gray-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    Tech Stack
                  </h3>
                  <div className="space-y-4">
                    {project.techStack.frontend &&
                      project.techStack.frontend.length > 0 && (
                        <div>
                          <h4 className="text-sm font-medium text-gray-700 mb-2">
                            Frontend
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {project.techStack.frontend.map((tech, idx) => (
                              <span
                                key={idx}
                                className="px-3 py-1.5 bg-gray-50 border border-gray-200 rounded-full text-sm text-gray-700 flex items-center gap-1.5"
                              >
                                {getTechLogo(tech) && (
                                  <div className="relative w-4 h-4">
                                    <Image
                                      src={getTechLogo(tech)!}
                                      alt={tech}
                                      fill
                                      className="object-contain"
                                      sizes="16px"
                                    />
                                  </div>
                                )}
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    {project.techStack.backend &&
                      project.techStack.backend.length > 0 && (
                        <div>
                          <h4 className="text-sm font-medium text-gray-700 mb-2">
                            Backend
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {project.techStack.backend.map((tech, idx) => (
                              <span
                                key={idx}
                                className="px-3 py-1.5 bg-gray-50 border border-gray-200 rounded-full text-sm text-gray-700 flex items-center gap-1.5"
                              >
                                {getTechLogo(tech) && (
                                  <div className="relative w-4 h-4">
                                    <Image
                                      src={getTechLogo(tech)!}
                                      alt={tech}
                                      fill
                                      className="object-contain"
                                      sizes="16px"
                                    />
                                  </div>
                                )}
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    {project.techStack.database &&
                      project.techStack.database.length > 0 && (
                        <div>
                          <h4 className="text-sm font-medium text-gray-700 mb-2">
                            Database & Storage
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {project.techStack.database.map((tech, idx) => (
                              <span
                                key={idx}
                                className="px-3 py-1.5 bg-gray-50 border border-gray-200 rounded-full text-sm text-gray-700 flex items-center gap-1.5"
                              >
                                {getTechLogo(tech) && (
                                  <div className="relative w-4 h-4">
                                    <Image
                                      src={getTechLogo(tech)!}
                                      alt={tech}
                                      fill
                                      className="object-contain"
                                      sizes="16px"
                                    />
                                  </div>
                                )}
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    {project.techStack.other &&
                      project.techStack.other.length > 0 && (
                        <div>
                          <h4 className="text-sm font-medium text-gray-700 mb-2">
                            Other Technologies
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {project.techStack.other.map((tech, idx) => (
                              <span
                                key={idx}
                                className="px-3 py-1.5 bg-gray-50 border border-gray-200 rounded-full text-sm text-gray-700 flex items-center gap-1.5"
                              >
                                {getTechLogo(tech) && (
                                  <div className="relative w-4 h-4">
                                    <Image
                                      src={getTechLogo(tech)!}
                                      alt={tech}
                                      fill
                                      className="object-contain"
                                      sizes="16px"
                                    />
                                  </div>
                                )}
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                  </div>
                </div>

                <div className="flex gap-3 pt-4 border-t border-gray-200">
                  {project.websiteUrl && (
                    <a
                      href={project.websiteUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 px-4 py-2 bg-gray-900 text-white text-center rounded-lg hover:bg-gray-800 transition-colors"
                    >
                      Visit Live Site
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 text-center rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      View on GitHub
                    </a>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;