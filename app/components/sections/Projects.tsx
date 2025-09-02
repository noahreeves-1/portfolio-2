"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import { ProjectHeroCard, ProjectGridCard } from "../features/projects";
import { projects } from "@/app/lib/data/projects";
import { Project } from "@/app/lib/types/project";

// Dynamic import for ProjectModal to reduce initial bundle
const ProjectModal = dynamic(() => import("../features/projects/ProjectModal"), {
  ssr: false,
});

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const featuredProjects = projects.filter((p) => p.isFeatured);
  const additionalProjects = projects.filter((p) => !p.isFeatured);

  const handleViewDetails = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    // Small delay to allow animation to complete before clearing project
    setTimeout(() => setSelectedProject(null), 300);
  };

  return (
    <section id="projects" className="py-12 md:py-16">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
            Featured Work
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            {`A collection of my most impactful projects showcasing enterprise
            solutions, AI innovations, and full-stack development`}
          </p>
        </div>

        {/* Featured Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {featuredProjects.map((project) => (
            <ProjectHeroCard
              key={project.id}
              title={project.title}
              description={project.description}
              imageSrc={project.imageSrc}
              category={project.category}
              techStack={project.simpleTechStack || []}
              features={project.features}
              metrics={project.metrics}
              websiteUrl={project.websiteUrl}
              githubUrl={project.githubUrl}
              onViewDetails={() => handleViewDetails(project)}
            />
          ))}
        </div>

        {/* Additional Projects */}
        <div className="mb-8">
          <h3 className="text-2xl md:text-3xl font-bold text-white text-center mb-6">
            More Projects
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {additionalProjects.map((project) => (
              <ProjectGridCard
                key={project.id}
                title={project.title}
                description={project.description}
                imageSrc={project.imageSrc}
                category={project.category}
                techStack={project.simpleTechStack || []}
                websiteUrl={project.websiteUrl}
                githubUrl={project.githubUrl}
                onViewDetails={() => handleViewDetails(project)}
              />
            ))}
          </div>
        </div>

        {/* Project Modal */}
        <ProjectModal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          project={selectedProject}
        />
      </div>
    </section>
  );
};

export default Projects;