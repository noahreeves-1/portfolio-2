"use client";

import { useState } from "react";
import { StaticImageData } from "next/image";

// Tech logos
import MuffinLogo from "@/public/muffin-white.svg";
import ExpoLogo from "@/public/expo.webp";
import ReactNativeLogo from "@/public/reactnative.svg";
import TypeScriptLogo from "@/public/typescript.svg";
import ReactQueryLogo from "@/public/tanstack.webp";
import ReduxLogo from "@/public/redux.svg";
import NodeJSLogo from "@/public/nodejs.svg";
import NestJSLogo from "@/public/nestjs.svg";
import FirebaseLogo from "@/public/firebase.svg";
import SendGridLogo from "@/public/sendgrid.svg";
import PostgreSQLLogo from "@/public/postgresql.svg";
import ElasticsearchLogo from "@/public/elasticsearch.svg";
import RedisLogo from "@/public/redis.svg";
import DockerLogo from "@/public/docker.svg";
import DigitalOceanLogo from "@/public/digitalocean.svg";
import OpenAILogo from "@/public/openai.webp";
import GoogleMapsLogo from "@/public/google-maps.svg";
import CloudinaryLogo from "@/public/cloudinary.webp";
import CssLogo from "@/public/css.svg";
import StoryDiscountLogo from "@/public/storydiscount.svg";
import OpenSaaSLogo from "@/public/opensaas.webp";
import ReactLogo from "@/public/react.svg";
import TailwindLogo from "@/public/tailwind.svg";
import StoryDiscountDashboard from "@/public/storydiscount-dashboard.webp";
import MuffinApp from "@/public/muffin-app.webp";
import PythonLogo from "@/public/python.svg";
import CrawleeLogo from "@/public/crawlee.webp";
import ApifyLogo from "@/public/apify.svg";
import NextJSLogo from "@/public/nextjs.svg";
import TwilioLogo from "@/public/twilio.svg";
import MongoDBLogo from "@/public/mongodb.svg";
import PineconeLogo from "@/public/pinecone.webp";
import StripeLogo from "@/public/stripe.svg";
import LexcaliburLogo from "@/public/lexcaliburai.svg";
import PrismaLogo from "@/public/prisma.svg";
import PuppeteerLogo from "@/public/puppeteer.webp";
import StealthProduct from "@/public/stealth-product.png";
// Map of technology names to their logos
const techLogos: Record<string, StaticImageData | string> = {
  Expo: ExpoLogo,
  "React Native": ReactNativeLogo,
  TypeScript: TypeScriptLogo,
  "React Query": ReactQueryLogo,
  Redux: ReduxLogo,
  "Node.js": NodeJSLogo,
  NestJS: NestJSLogo,
  Firebase: FirebaseLogo,
  SendGrid: SendGridLogo,
  PostgreSQL: PostgreSQLLogo,
  Elasticsearch: ElasticsearchLogo,
  Redis: RedisLogo,
  Docker: DockerLogo,
  "Digital Ocean": DigitalOceanLogo,
  OpenAI: OpenAILogo,
  "Google Maps API": GoogleMapsLogo,
  Cloudinary: CloudinaryLogo,
  CSS: CssLogo,
  "Story Discount": StoryDiscountLogo,
  OpenSaaS: OpenSaaSLogo,
  React: ReactLogo,
  Tailwind: TailwindLogo,
  Python: PythonLogo,
  Crawlee: CrawleeLogo,
  Apify: ApifyLogo,
  "Next.JS": NextJSLogo,
  Twilio: TwilioLogo,
  MongoDB: MongoDBLogo,
  Pinecone: PineconeLogo,
  Stripe: StripeLogo,
  Prisma: PrismaLogo,
  Puppeteer: PuppeteerLogo,
  "Stealth Product": StealthProduct,
};

// Project Details Modal Component
const ProjectDetailsModal = ({
  isOpen,
  onClose,
  title,
  techStack,
}: {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  techStack: {
    frontend?: string[];
    backend?: string[];
    database?: string[];
    devops?: string[];
    other?: string[];
  };
  description: string;
  bgColor?: string;
}) => {
  if (!isOpen) return null;

  // Get pill styles - using consistent gray styling
  const getPillStyles = () => {
    return {
      bg: "bg-gray-700",
      border: "border-gray-600",
      hoverBg: "hover:bg-gray-600",
    };
  };

  const {
    bg: pillBg,
    border: pillBorder,
    hoverBg: pillHoverBg,
  } = getPillStyles();

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen px-4 py-4 text-center">
        {/* Overlay */}
        <div
          className="fixed inset-0 backdrop-blur-md bg-white/30 transition-opacity"
          onClick={onClose}
        ></div>

        {/* Modal Panel */}
        <div className="relative inline-block overflow-hidden text-left align-middle transition-all transform rounded-lg shadow-xl w-full max-w-3xl">
          {/* Header Section - Now using dark gray */}
          <div className="bg-gray-800 px-4 sm:px-6 py-4 sm:py-5 relative border-b border-gray-700">
            {/* Close Button (X) */}
            <button
              onClick={onClose}
              className="absolute top-3 sm:top-4 right-3 sm:right-4 text-white hover:text-gray-300 focus:outline-none"
              aria-label="Close modal"
            >
              <svg
                className="w-5 h-5 sm:w-6 sm:h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white pr-8">
              {title} Tech Stack
            </h3>
          </div>

          {/* Content Section - Dark Gray Background */}
          <div className="bg-gray-800 px-4 sm:px-6 py-4 sm:py-6">
            <div className="mb-4 sm:mb-6">
              {/* Tech Stack Categorized */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                {techStack.frontend && techStack.frontend.length > 0 && (
                  <div>
                    <h4 className="text-lg sm:text-xl font-medium text-white mb-2 sm:mb-3">
                      Frontend
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {techStack.frontend.map((tech, index) => (
                        <span
                          key={index}
                          className={`px-3.5 sm:px-4 py-1.5 sm:py-2 ${pillBg} border ${pillBorder} rounded-full text-white text-sm sm:text-base font-medium transition-colors ${pillHoverBg} flex items-center gap-1.5 sm:gap-2`}
                        >
                          {techLogos[tech] && (
                            <img
                              src={
                                typeof techLogos[tech] === "string"
                                  ? (techLogos[tech] as string)
                                  : (techLogos[tech] as StaticImageData).src
                              }
                              alt={`${tech} logo`}
                              width={16}
                              height={16}
                              className="w-4 h-4 sm:w-5 sm:h-5 object-contain"
                            />
                          )}
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {techStack.backend && techStack.backend.length > 0 && (
                  <div>
                    <h4 className="text-lg sm:text-xl font-medium text-white mb-2 sm:mb-3">
                      Backend
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {techStack.backend.map((tech, index) => (
                        <span
                          key={index}
                          className={`px-3.5 sm:px-4 py-1.5 sm:py-2 ${pillBg} border ${pillBorder} rounded-full text-white text-sm sm:text-base font-medium transition-colors ${pillHoverBg} flex items-center gap-1.5 sm:gap-2`}
                        >
                          {techLogos[tech] && (
                            <img
                              src={
                                typeof techLogos[tech] === "string"
                                  ? (techLogos[tech] as string)
                                  : (techLogos[tech] as StaticImageData).src
                              }
                              alt={`${tech} logo`}
                              width={16}
                              height={16}
                              className="w-4 h-4 sm:w-5 sm:h-5 object-contain"
                            />
                          )}
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {techStack.database && techStack.database.length > 0 && (
                  <div>
                    <h4 className="text-lg sm:text-xl font-medium text-white mb-2 sm:mb-3">
                      Database
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {techStack.database.map((tech, index) => (
                        <span
                          key={index}
                          className={`px-3.5 sm:px-4 py-1.5 sm:py-2 ${pillBg} border ${pillBorder} rounded-full text-white text-sm sm:text-base font-medium transition-colors ${pillHoverBg} flex items-center gap-1.5 sm:gap-2`}
                        >
                          {techLogos[tech] && (
                            <img
                              src={
                                typeof techLogos[tech] === "string"
                                  ? (techLogos[tech] as string)
                                  : (techLogos[tech] as StaticImageData).src
                              }
                              alt={`${tech} logo`}
                              width={16}
                              height={16}
                              className="w-4 h-4 sm:w-5 sm:h-5 object-contain"
                            />
                          )}
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {techStack.devops && techStack.devops.length > 0 && (
                  <div>
                    <h4 className="text-lg sm:text-xl font-medium text-white mb-2 sm:mb-3">
                      DevOps
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {techStack.devops.map((tech, index) => (
                        <span
                          key={index}
                          className={`px-3.5 sm:px-4 py-1.5 sm:py-2 ${pillBg} border ${pillBorder} rounded-full text-white text-sm sm:text-base font-medium transition-colors ${pillHoverBg} flex items-center gap-1.5 sm:gap-2`}
                        >
                          {techLogos[tech] && (
                            <img
                              src={
                                typeof techLogos[tech] === "string"
                                  ? (techLogos[tech] as string)
                                  : (techLogos[tech] as StaticImageData).src
                              }
                              alt={`${tech} logo`}
                              width={16}
                              height={16}
                              className="w-4 h-4 sm:w-5 sm:h-5 object-contain"
                            />
                          )}
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {techStack.other && techStack.other.length > 0 && (
                  <div>
                    <h4 className="text-lg sm:text-xl font-medium text-white mb-2 sm:mb-3">
                      Other
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {techStack.other.map((tech, index) => (
                        <span
                          key={index}
                          className={`px-3.5 sm:px-4 py-1.5 sm:py-2 ${pillBg} border ${pillBorder} rounded-full text-white text-sm sm:text-base font-medium transition-colors ${pillHoverBg} flex items-center gap-1.5 sm:gap-2`}
                        >
                          {techLogos[tech] && (
                            <img
                              src={
                                typeof techLogos[tech] === "string"
                                  ? (techLogos[tech] as string)
                                  : (techLogos[tech] as StaticImageData).src
                              }
                              alt={`${tech} logo`}
                              width={16}
                              height={16}
                              className="w-4 h-4 sm:w-5 sm:h-5 object-contain"
                            />
                          )}
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Project Card component for reusability
const ProjectCard = ({
  title,
  description,
  imageSrc,
  logoSrc,
  features,
  orientation = "left",
  bgColor = "bg-blue-600",
  stat = {
    value: "+2x",
    description: "User engagement compared to similar apps",
  },
  websiteUrl = "#",
  techStack = {
    frontend: [],
    backend: [],
    database: [],
    devops: [],
    other: [],
  },
  hasTopDiagonal = false,
  hasBottomDiagonal = false,
}: {
  title: string;
  description: string;
  imageSrc: StaticImageData;
  logoSrc?: StaticImageData | string;
  features: string[];
  orientation?: "left" | "right";
  bgColor?: string;
  stat?: {
    value: string;
    description: string;
  };
  websiteUrl?: string;
  techStack?: {
    frontend?: string[];
    backend?: string[];
    database?: string[];
    devops?: string[];
    other?: string[];
  };
  hasTopDiagonal?: boolean;
  hasBottomDiagonal?: boolean;
}) => {
  // Modal state
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Determine logo size based on the logo source
  const getLogoSize = () => {
    // Check if the logo is StoryDiscount logo and return smaller dimensions
    if (logoSrc === StoryDiscountLogo) {
      return { width: 40, height: 40 };
    }
    if (logoSrc === LexcaliburLogo) {
      return { width: 50, height: 50 };
    }
    // Default size for other logos
    return { width: 120, height: 120 };
  };

  const logoSize = getLogoSize();

  // Calculate stats background color (one shade lighter)
  const getStatsBackgroundColor = () => {
    if (!bgColor) return "bg-blue-500";

    // Parse the bgColor to extract color and shade
    const match = bgColor.match(/bg-(\w+)-(\d+)/);
    if (!match) return "bg-blue-500";

    const [, colorName] = match;
    const lighterShade = parseInt(match[2]) - 100;

    // Ensure the shade is valid (not below 50)
    if (lighterShade < 50) return `bg-${colorName}-50`;

    return `bg-${colorName}-${lighterShade}`;
  };

  // Calculate bullet color (darker shade)
  const getBulletColor = () => {
    if (!bgColor) return "bg-blue-800";

    // Parse the bgColor to extract color and shade
    const match = bgColor.match(/bg-(\w+)-(\d+)/);
    if (!match) return "bg-blue-800";

    const [, colorName] = match;

    // Use a more reliable mapping for bullet colors
    const colorMapping: Record<string, string> = {
      blue: "bg-blue-800",
      orange: "bg-orange-800",
      purple: "bg-purple-900",
      red: "bg-red-800",
      green: "bg-green-800",
      yellow: "bg-yellow-800",
      indigo: "bg-indigo-800",
      teal: "bg-teal-800",
      pink: "bg-pink-800",
    };

    // Return a mapped color if available, otherwise use a safe fallback
    return colorMapping[colorName] || "bg-gray-800";
  };

  // Get a darker background color for the image container
  const getImageContainerBgColor = () => {
    if (!bgColor) return "bg-blue-700";

    // Use a direct mapping approach instead of dynamic calculation
    const colorMap: Record<string, string> = {
      "bg-blue-600": "bg-blue-700",
      "bg-orange-500": "bg-orange-600",
      "bg-purple-700": "bg-purple-800",
      "bg-red-600": "bg-red-700",
      "bg-green-600": "bg-green-700",
      "bg-yellow-600": "bg-yellow-700",
      "bg-teal-700": "bg-teal-800",
    };

    // Return the mapped color or a default
    return colorMap[bgColor] || "bg-gray-700";
  };

  // Get border color for stat container - darker shade
  const getStatBorderColor = () => {
    if (!bgColor) return "border-blue-800";

    const match = bgColor.match(/bg-(\w+)-(\d+)/);
    if (!match) return "border-blue-800";

    const [, colorName] = match;
    const borderShade = parseInt(match[2]) + 100;

    // Ensure the shade is valid (not above 900)
    if (borderShade > 900) return `border-${colorName}-900`;

    return `border-${colorName}-${borderShade}`;
  };

  const statsBackgroundColor = getStatsBackgroundColor();
  const bulletColor = getBulletColor();
  const imageContainerBgColor = getImageContainerBgColor();
  const statBorderColor = getStatBorderColor();

  // For debugging
  console.log("Final imageContainerBgColor:", imageContainerBgColor);
  console.log("Original bgColor:", bgColor);

  // Pick a forced background color only for the purple-700 case
  const forcedBgColor =
    bgColor === "bg-purple-700" ? "bg-purple-800" : imageContainerBgColor;

  // Set diagonal styles
  const diagonalStyles = {
    container: `relative ${
      hasTopDiagonal || hasBottomDiagonal ? "overflow-hidden" : ""
    }`,
    topDiagonal: hasTopDiagonal
      ? 'before:absolute before:content-[""] before:w-[200%] before:h-[150px] before:bg-white before:top-0 before:left-[-50%] before:right-[-50%] before:rotate-[-3deg] before:origin-center before:translate-y-[-60%]'
      : "",
    bottomDiagonal: hasBottomDiagonal
      ? 'after:absolute after:content-[""] after:w-[200%] after:h-[150px] after:bg-white after:bottom-0 after:left-[-50%] after:right-[-50%] after:rotate-[-3deg] after:origin-center after:translate-y-[60%]'
      : "",
    topPadding: hasTopDiagonal ? "pt-40" : "pt-28",
    bottomPadding: hasBottomDiagonal ? "pb-40" : "pb-28",
  };

  return (
    <>
      <div
        className={`${bgColor} ${diagonalStyles.topPadding} ${diagonalStyles.bottomPadding} ${diagonalStyles.container} ${diagonalStyles.topDiagonal} ${diagonalStyles.bottomDiagonal}`}
      >
        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <div
            className={`flex flex-col ${
              orientation === "right" ? "md:flex-row-reverse" : "md:flex-row"
            } gap-8 items-center`}
          >
            {/* Project Image */}
            <div className="w-full md:w-1/2">
              <div
                className={`${forcedBgColor} px-12 py-8 rounded-3xl shadow-xl flex items-center justify-center`}
              >
                <div className="overflow-hidden rounded-xl max-h-[500px] flex justify-center">
                  <img
                    src={typeof imageSrc === "string" ? imageSrc : imageSrc.src}
                    alt={title}
                    width={750}
                    height={500}
                    className="max-h-[500px] w-auto object-contain rounded-xl"
                  />
                </div>
              </div>
            </div>

            {/* Project Details */}
            <div className="w-full md:w-1/2 text-white">
              <h3 className="text-4xl font-semibold mb-4">{title}</h3>
              <p className="mb-4">{description}</p>

              {/* Features List */}
              <ul className="space-y-2 mb-24 pl-4 md:pl-0">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <div
                      className={`h-2 w-2 ${bulletColor} rounded-full mr-3 flex-shrink-0`}
                    ></div>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Stats Section */}
              <div className="mt-8">
                <div className="flex items-center mb-4">
                  <div
                    className={`inline-block ${statsBackgroundColor} py-2 px-4 rounded mr-4 border ${statBorderColor}`}
                  >
                    <div className="text-3xl font-bold">{stat.value}</div>
                  </div>
                  <p className="">{stat.description}</p>
                </div>

                {/* Divider Line */}
                <div className="border-t border-white opacity-30 mb-6"></div>

                {/* Action Links */}
                <div className="flex items-center gap-4 justify-between">
                  <a
                    href={websiteUrl}
                    target="_blank"
                    className={`text-white px-4 py-2 rounded flex items-center gap-4`}
                  >
                    <img
                      src={
                        typeof logoSrc === "string"
                          ? logoSrc
                          : logoSrc
                          ? (logoSrc as StaticImageData).src
                          : MuffinLogo.src
                      }
                      alt="Website"
                      width={logoSize.width}
                      height={logoSize.height}
                      className="object-contain"
                    />
                    <span className="text-lg hover:text-blue-100 underline">
                      Website
                    </span>
                  </a>
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="text-white hover:text-blue-100 flex items-center gap-1 cursor-pointer"
                  >
                    <span className="text-lg">Tech Stack</span>
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Project Details Modal */}
      <ProjectDetailsModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={title}
        description={description}
        techStack={techStack}
      />
    </>
  );
};

const Projects = () => {
  // Project data
  const muffinProject = {
    title: "Muffin: Food App",
    description:
      "A social media mobile app where users can find meals near them based on their preferences with a TikTok-style UI. Sign up, swipe, and find your next perfect meal. Features include...",
    imageSrc: MuffinApp,
    logoSrc: MuffinLogo,
    features: [
      "Personalized home feed",
      "Location-based search",
      "AI-powered image classification",
      "Push notifications",
      "& more",
    ],
    stat: {
      value: "1K+",
      description: "Downloads with zero ad spend",
    },
    bgColor: "bg-orange-500",
    websiteUrl: "https://muffinapp.io",
    techStack: {
      frontend: [
        "TypeScript",
        "CSS",
        "Expo",
        "React Native",
        "React Query",
        "Redux",
      ],
      backend: ["Node.js", "NestJS", "Firebase", "Prisma"],
      database: ["PostgreSQL", "Elasticsearch", "Redis", "Cloudinary"],
      devops: ["Docker", "Digital Ocean"],
      other: ["OpenAI", "Google Maps API", "SendGrid"],
    },
    hasTopDiagonal: true,
  };

  const storyDiscountProject = {
    title: "StoryDiscount.com",
    description:
      "A QR-based marketing tool for small businesses to share their founding story and get customers to scan a QR code to receive a discount. Features include...",
    imageSrc: StoryDiscountDashboard,
    logoSrc: StoryDiscountLogo,
    features: [
      "QR code scanning",
      "Coupon redemption",
      "Customer engagement",
      "Business owner dashboard",
      "& more",
    ],
    stat: {
      value: "2",
      description: "Small businesses using the app",
    },
    bgColor: "bg-purple-700",
    websiteUrl: "https://storydiscount.com",
    techStack: {
      frontend: ["TypeScript", "Tailwind", "React", "OpenSaaS"],
      backend: ["Node.js", "OpenSaaS"],
      database: ["PostgreSQL", "Cloudinary"],
      devops: ["Docker", "Digital Ocean"],
      other: ["SendGrid", "Stripe"],
    },
  };

  const lexcaliburAiProject = {
    title: "Lexcalibur AI (Coming Soon)",
    description:
      "An AI that alerts you when new laws that could affect you are passed. Features include...",
    imageSrc: StealthProduct,
    logoSrc: LexcaliburLogo,
    features: [
      "Personalized SMS alerts",
      "Federal and state laws",
      "AI-generated summaries",
      "& more",
    ],
    stat: {
      value: "X",
      description: "Users signed up for instant alerts",
    },
    bgColor: "bg-teal-700",
    websiteUrl: "https://lexcalibur.ai",
    techStack: {
      frontend: ["TypeScript", "Tailwind", "React", "Next.JS"],
      backend: ["Python", "Node.js", "NestJS"],
      database: ["MongoDB", "Pinecone"],
      devops: ["Docker", "Digital Ocean"],
      other: [
        "OpenAI",
        "Stripe",
        "Twilio",
        "SendGrid",
        "Apify",
        "Crawlee",
        "Puppeteer",
      ],
    },
    hasBottomDiagonal: true,
  };

  return (
    <section id="projects">
      <h2 className="text-xl font-bold text-center text-slate-800 md:text-3xl">
        My Projects
      </h2>

      {/* First Project using the ProjectCard component */}
      <ProjectCard {...muffinProject} orientation="left" />
      <ProjectCard {...storyDiscountProject} orientation="right" />
      <ProjectCard {...lexcaliburAiProject} orientation="left" />
    </section>
  );
};

export default Projects;
