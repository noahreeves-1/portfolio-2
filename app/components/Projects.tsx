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
import AIVoiceAgentScreenshot from "@/public/ai-voice-agent-screenshot.png";

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
    id: "knoxlabs",
    title: "Order Management System",
    description:
      "Custom internal tool for Meta Partner VR resellers, streamlining sales and operations with unified order management.",
    longDescription:
      "A bespoke web platform designed specifically for VR resellers' unique workflow needs. Consolidates multiple manual processes into a single, efficient dashboard that manages the entire order lifecycle from initial contact to fulfillment.",
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
        "Tailwind CSS",
        "Vite",
        "React Router",
        "TanStack Query",
        "shadcn",
      ],
      backend: ["NestJS", "Prisma"],
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
    id: "callhound",
    title: "AI Customer Service Voice Agent",
    description:
      "AI-powered voice agent that handles customer service calls about store hours, location, and product availability 24/7.",
    longDescription:
      "CallHound AI provides businesses with an intelligent voice agent that seamlessly handles customer inquiries. Built with Retell AI's advanced voice technology and integrated with Clover POS systems for real-time sync, it answers questions about store hours, location, and product inventory, ensuring customers always get accurate, up-to-date information while freeing staff to focus on in-person service.",
    imageSrc: AIVoiceAgentScreenshot,
    category: "AI Voice Technology",
    techStack: {
      frontend: [
        "React",
        "TypeScript",
        "Vite",
        "Tailwind CSS",
        "shadcn",
        "React Router",
        "TanStack Query",
      ],
      backend: ["Node.js", "Express", "TypeScript", "Prisma"],
      database: ["PostgreSQL", "Supabase"],
      other: ["Retell AI SDK", "Clover API", "Railway", "Docker"],
    },
    simpleTechStack: [
      "React",
      "TypeScript",
      "Express",
      "PostgreSQL",
      "Retell AI",
    ],
    features: [
      "24/7 automated customer service",
      "Natural voice interactions with customers",
      "Real-time Clover POS sync for business info",
      "Instant product/inventory availability checks",
      "Store hours and location information",
      "Analytics dashboard for call insights",
    ],
    metrics: [
      { label: "Calls per Month", value: "500+" },
      { label: "Calls Handled", value: "30%" },
    ],
    isFeatured: true,
  },
  {
    id: "speedscribe",
    title: "AI Speed Reading Tutor",
    description:
      "AI-powered speed reading comprehension tutor helping U.S. students prepare for the ACT.",
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
        "shadcn",
        "Framer Motion",
      ],
      backend: ["Next.js", "Drizzle", "NextAuth"],
      database: ["PostgreSQL", "Neon"],
      other: ["OpenAI", "AI SDK", "TanStack Query", "Vercel"],
    },
    simpleTechStack: ["Next.js", "PostgreSQL", "OpenAI", "Neon", "NextAuth"],
    features: [
      "Adaptive learning algorithm",
      "Real ACT passage analysis",
      "Personalized study plans",
      "Progress tracking and analytics",
      "Timed practice sessions",
    ],
    metrics: [
      { label: "WPM Increase", value: "30%+" },
      { label: "Students Registered", value: "8" },
    ],
    websiteUrl: "https://speed-scribe-ai.vercel.app",
    isFeatured: false,
  },
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
        "Radix",
        "shadcn",
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
      { label: "Students", value: "30+" },
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
      frontend: ["TypeScript", "React", "Tailwind CSS", "OpenSaaS"],
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
      frontend: [
        "TypeScript",
        "React Native",
        "Expo",
        "TanStack Query",
        "Redux",
      ],
      backend: ["Node.js", "NestJS", "Firebase", "Prisma"],
      database: ["PostgreSQL", "Elasticsearch", "Redis"],
      other: [
        "OpenAI",
        "Google Maps API",
        "SendGrid",
        "Cloudinary",
        "Digital Ocean",
      ],
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
          <h2 className="text-3xl md:text-4xl font-bold text-gray-100 mb-4">
            Featured Work
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
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
          <h3 className="text-2xl font-semibold text-gray-100 mb-6">
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
