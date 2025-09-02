"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import { StaticImageData } from "next/image";
import ProjectHeroCard from "./ProjectHeroCard";
import ProjectGridCard from "./ProjectGridCard";

// Dynamic import for ProjectModal to reduce initial bundle
const ProjectModal = dynamic(() => import("./ProjectModal"), {
  ssr: false,
});

// Import existing images
import MuffinApp from "@/public/muffin-app.webp";
import MuffinLogo from "@/public/muffin-white.svg";
import StoryDiscountDashboard from "@/public/storydiscount-dashboard.webp";
import StoryDiscountLogo from "@/public/storydiscount.svg";
import SpeedScribeScreenshot from "@/public/speed-scribe-screenshot.png";
import KnoxlabsScreenshot from "@/public/knoxlabs-screenshot.png";
import KnoxlabsInProgress from "@/public/knoxlabs-inprogress-screenshot.png";
import ClearThinkerIntro from "@/public/clear-thinker-intro.png";
import ClearThinkerGame from "@/public/clear-thinker-game.png";

interface Project {
  id: string;
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
  simpleTechStack: string[];
  features?: string[];
  metrics?: {
    label: string;
    value: string;
  }[];
  websiteUrl?: string;
  githubUrl?: string;
  challenges?: string[];
  learnings?: string[];
  isFeatured: boolean;
}

const projects: Project[] = [
  {
    id: "clearthinker",
    title: "Clear Thinker Challenge",
    description:
      "Educational game that helps students identify logical fallacies in AI-generated tweets, improving critical thinking skills.",
    longDescription:
      "Clear Thinker Challenge gamifies logic education by presenting students with realistic social media posts containing various logical fallacies. Using AI to generate diverse examples, students learn to spot misinformation and flawed reasoning in real-world contexts.",
    imageSrc: ClearThinkerIntro,
    additionalImages: [
      {
        src: ClearThinkerGame,
        alt: "Game interface showing logical fallacy detection in a social media post",
      },
    ],
    category: "Education",
    techStack: {
      frontend: [
        "Next.js",
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Radix UI",
        "shadcn/ui",
      ],
      backend: ["Next.js", "AI SDK", "AI Gateway"],
      database: ["Redis"],
      other: ["Vitest", "React Testing Library", "Turbopack", "Vercel"],
    },
    simpleTechStack: ["Next.js", "AI SDK", "Redis", "TypeScript"],
    features: [
      "AI-generated tweets with embedded logical fallacies",
      "Progressive difficulty levels",
      "Detailed explanations for each fallacy",
      "Leaderboard and achievement system",
      "Teacher dashboard for classroom management",
    ],
    metrics: [
      { label: "Students", value: "50+" },
      { label: "Accuracy Improvement", value: "+35%" },
    ],
    isFeatured: false,
  },
  {
    id: "storydiscount",
    title: "StoryDiscount",
    description:
      "QR-based marketing platform helping small businesses share their founding story and engage customers with personalized discounts.",
    longDescription:
      "StoryDiscount bridges the gap between traditional retail and digital engagement. Business owners create compelling brand stories that customers discover through QR codes, building deeper connections while driving sales through targeted discounts.",
    imageSrc: StoryDiscountDashboard,
    logoSrc: StoryDiscountLogo,
    category: "SaaS",
    techStack: {
      frontend: ["TypeScript", "React", "Tailwind", "OpenSaaS"],
      backend: ["Node.js", "OpenSaaS"],
      database: ["PostgreSQL", "Cloudinary"],
      other: ["Stripe", "SendGrid"],
    },
    simpleTechStack: [
      "React",
      "TypeScript",
      "PostgreSQL",
      "Stripe",
      "Tailwind",
    ],
    features: [
      "QR code generation and management",
      "Story builder with rich media support",
      "Coupon creation and redemption tracking",
      "Customer engagement analytics",
      "Business owner dashboard with insights",
    ],
    metrics: [
      { label: "Active Businesses", value: "2+" },
      { label: "Scans/Month", value: "100+" },
    ],
    websiteUrl: "https://storydiscount.com",
    isFeatured: false,
  },
  {
    id: "muffin",
    title: "Muffin",
    description:
      "A social media mobile app where users discover meals near them with a TikTok-style UI. Swipe through personalized food content and find your next perfect meal.",
    longDescription:
      "Muffin revolutionizes food discovery by combining social media engagement with location-based restaurant recommendations. Built with React Native and powered by AI, the app learns user preferences to deliver increasingly personalized meal suggestions.",
    imageSrc: MuffinApp,
    logoSrc: MuffinLogo,
    category: "Mobile App",
    techStack: {
      frontend: ["TypeScript", "React Native", "Expo", "React Query", "Redux"],
      backend: ["Node.js", "NestJS", "Firebase", "Prisma"],
      database: ["PostgreSQL", "Elasticsearch", "Redis", "Cloudinary"],
      other: ["OpenAI", "Google Maps API", "SendGrid"],
    },
    simpleTechStack: [
      "React Native",
      "TypeScript",
      "NestJS",
      "PostgreSQL",
      "OpenAI",
    ],
    features: [
      "Personalized home feed with AI-powered recommendations",
      "Location-based search with real-time filtering",
      "AI-powered image classification for food photos",
      "Push notifications for nearby restaurant deals",
      "Social features for sharing and saving meals",
    ],
    metrics: [
      { label: "Downloads", value: "1K+" },
      { label: "Ad Spend", value: "$0" },
      { label: "User Rating", value: "4.8★" },
    ],
    websiteUrl: "https://muffinapp.io",
    isFeatured: false,
  },
  {
    id: "knoxlabs",
    title: "Knoxlabs Dashboard",
    description:
      "Custom internal tool streamlining sales and operations for Knoxlabs team with unified order management.",
    longDescription:
      "A bespoke web platform designed specifically for Knoxlabs' unique workflow needs. Consolidates multiple manual processes into a single, efficient dashboard that manages the entire order lifecycle from initial contact to fulfillment.",
    imageSrc: KnoxlabsScreenshot,
    additionalImages: [
      {
        src: KnoxlabsInProgress,
        alt: "In Progress orders view showing real-time order tracking and status updates",
      },
    ],
    category: "Enterprise",
    techStack: {
      frontend: [
        "React",
        "TypeScript",
        "Tailwind CSS v4",
        "Vite",
        "React Router v7",
        "TanStack Query",
        "shadcn/ui",
      ],
      backend: ["NestJS", "Prisma ORM", "Supabase Auth"],
      database: ["PostgreSQL", "Supabase"],
      other: ["AWS S3", "Resend", "Docker", "Fly.io", "PostHog"],
    },
    simpleTechStack: ["React", "NestJS", "PostgreSQL", "Supabase", "Fly.io"],
    features: [
      "Unified order management system",
      "Real-time inventory tracking",
      "Automated workflow notifications",
      "Custom reporting and analytics",
      "Role-based access control",
    ],
    metrics: [
      { label: "FTE hours/week saved", value: "~10" },
      { label: "Headsets/month", value: "500+" },
    ],
    isFeatured: true,
  },
  {
    id: "speedscribe",
    title: "Speed Scribe AI",
    description:
      "AI-powered ACT reading comprehension tutor helping students prepare for college entrance exams.",
    longDescription:
      "Speed Scribe AI leverages advanced language models to create personalized ACT prep experiences. The platform adapts to each student's learning pace and identifies weak areas, providing targeted practice to maximize score improvements.",
    imageSrc: SpeedScribeScreenshot,
    category: "EdTech",
    techStack: {
      frontend: [
        "Next.js",
        "React",
        "TypeScript",
        "Tailwind CSS",
        "shadcn/ui",
        "Framer Motion",
      ],
      backend: ["Next.js API Routes", "Drizzle ORM", "NextAuth.js"],
      database: ["PostgreSQL (Neon)"],
      other: ["OpenAI GPT-4o", "Vercel AI SDK", "React Query", "Vercel"],
    },
    simpleTechStack: [
      "Next.js",
      "PostgreSQL",
      "OpenAI GPT-4o",
      "Neon",
      "NextAuth",
    ],
    features: [
      "Adaptive learning algorithm",
      "Real ACT passage analysis",
      "Personalized study plans",
      "Progress tracking and analytics",
      "Timed practice sessions",
    ],
    metrics: [
      { label: "WPM Increase", value: "40%+" },
      { label: "Active Users", value: "11" },
    ],
    websiteUrl: "https://speed-scribe-ai.vercel.app",
    isFeatured: true,
  },
];

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
    setTimeout(() => setSelectedProject(null), 300);
  };

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Featured Work
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            From consumer mobile apps to enterprise solutions, I build products
            that solve real problems and deliver exceptional user experiences.
          </p>
        </div>

        {/* Featured Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-16">
          {featuredProjects.map((project) => (
            <ProjectHeroCard
              key={project.id}
              title={project.title}
              description={project.description}
              imageSrc={project.imageSrc}
              logoSrc={project.logoSrc}
              category={project.category}
              techStack={project.simpleTechStack}
              features={project.features}
              metrics={project.metrics}
              websiteUrl={project.websiteUrl}
              githubUrl={project.githubUrl}
              onViewDetails={() => handleViewDetails(project)}
            />
          ))}
        </div>

        {/* Additional Projects Section */}
        <div className="mb-8">
          <h3 className="text-2xl font-semibold text-gray-900 mb-6">
            Other Projects
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalProjects.map((project, index) => (
              <ProjectGridCard
                key={project.id}
                title={project.title}
                description={project.description}
                imageSrc={project.imageSrc}
                category={project.category}
                techStack={project.simpleTechStack}
                websiteUrl={project.websiteUrl}
                githubUrl={project.githubUrl}
                onViewDetails={() => handleViewDetails(project)}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Project Details Modal */}
      <ProjectModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        project={selectedProject}
      />
    </section>
  );
};

export default Projects;
