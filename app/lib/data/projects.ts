import { Project } from "../types/project";

// Import project images
import MuffinApp from "@/public/muffin-app.webp";
import MuffinLogo from "@/public/muffin-white.svg";
import StoryDiscountDashboard from "@/public/storydiscount-dashboard.webp";
import StoryDiscountLogo from "@/public/storydiscount.svg";
import SpeedScribeScreenshot from "@/public/speed-scribe-screenshot.png";
import KnoxlabsScreenshot from "@/public/knoxlabs-screenshot.png";
import KnoxlabsInProgress from "@/public/knoxlabs-inprogress-screenshot.png";
import ClearThinkerIntro from "@/public/clear-thinker-intro.png";
import ClearThinkerGame from "@/public/clear-thinker-game.png";
import CallhoundScreenshot from "@/public/callhound-ai-screenshot.png";
import ReelMatchmakerScreenshot from "@/public/stealth-product.png";

export const projects: Project[] = [
  {
    id: "knoxlabs",
    title: "Knoxlabs - B2B Orders",
    description:
      "Bespoke order management platform with HubSpot integration and embeddable web modules for white-label vendor solutions.",
    longDescription:
      "A comprehensive B2B platform that streamlines order management for VR resellers while providing reusable web components for vendor integration. Features HubSpot CRM synchronization and modular architecture that enables partners to embed order functionality directly into their websites via HTML script tags, creating seamless white-label experiences.",
    imageSrc: KnoxlabsScreenshot,
    additionalImages: [
      {
        src: KnoxlabsInProgress,
        alt: "In Progress orders view showing real-time order tracking and status updates",
      },
    ],
    category: "Enterprise",
    type: "professional" as const,
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
      other: ["AWS S3", "Resend", "Docker", "Fly.io", "PostHog", "HubSpot", "Vercel"],
    },
    simpleTechStack: ["React", "NestJS", "PostgreSQL", "AWS"],
    features: [
      "Unified order management with HubSpot CRM integration",
      "Embeddable web modules for vendor white-labeling",
      "Real-time inventory tracking across multiple partners",
      "Automated workflow notifications and status updates",
      "Custom reporting and analytics dashboard",
      "Role-based access control and permissions",
      "Reusable components for website integration",
    ],
    metrics: [
      { label: "FTE hours/week saved", value: "~10" },
      { label: "Headsets/month", value: "500+" },
    ],
    isFeatured: true,
  },
  {
    id: "callhound",
    title: "Callhound - AI Receptionist",
    description:
      "AI receptionist for retail businesses and blue collar service providers. Never miss another customer call - available 24/7 for just $129/month.",
    longDescription:
      "Callhound AI is your dedicated AI receptionist designed specifically for retail businesses and blue collar business owners like plumbers and electricians who often work alone. Built with Retell AI's advanced voice technology and integrated with Clover POS systems for real-time sync, Callhound answers calls 24/7, handles questions about store hours, location, and product inventory, and ensures customers always get accurate information while you focus on your work. With 95% less cost than hiring staff, Callhound picks up what matters - because your customers deserve more than voicemail.",
    imageSrc: CallhoundScreenshot,
    category: "AI Voice Technology",
    type: "professional" as const,
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
      backend: ["Node.js", "Express", "Prisma"],
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
      { label: "Calls Handled per Month", value: "300+" },
      { label: "Cost Savings", value: "95%" },
    ],
    websiteUrl: "https://callhound.ai",
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
    type: "professional" as const,
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
    simpleTechStack: ["Next.js", "PostgreSQL", "OpenAI"],
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
    type: "professional" as const,
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
    simpleTechStack: ["Next.js", "OpenAI", "Redis", "TypeScript"],
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
    id: "muffin",
    title: "Muffin",
    description:
      "Native B2B food marketplace app connecting restaurants with suppliers, optimizing procurement through group buying.",
    longDescription:
      "Muffin revolutionizes restaurant supply chain management by aggregating demand across multiple businesses to negotiate better prices with suppliers. The platform handles everything from order placement to delivery scheduling, reducing costs while improving reliability.",
    imageSrc: MuffinApp,
    logoSrc: MuffinLogo,
    category: "Marketplace",
    type: "personal" as const,
    techStack: {
      frontend: ["React Native", "Expo", "TypeScript", "TanStack Query"],
      backend: ["Node.js", "NestJS", "TypeORM"],
      database: ["MongoDB", "Redis"],
      other: ["Twilio", "Google Maps API", "Firebase"],
    },
    simpleTechStack: ["React Native", "NestJS", "MongoDB", "Expo"],
    features: [
      "Group buying for better prices",
      "Real-time inventory management",
      "Automated reordering system",
      "Delivery route optimization",
      "Supplier performance analytics",
    ],
    metrics: [
      { label: "Cost Savings", value: "15-20%" },
      { label: "Active Restaurants", value: "3" },
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
    type: "personal" as const,
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
    id: "reelmatchmaker",
    title: "Reel Matchmaker",
    description:
      "AI-powered movie discovery platform that learns from your ratings and bookmarks to recommend personalized film selections.",
    longDescription:
      "Reel Matchmaker combines machine learning with user preference data to create highly personalized movie recommendations. Users rate and bookmark films they enjoy, and the AI analyzes viewing patterns, genre preferences, and rating behaviors to suggest new movies that match their taste profile.",
    imageSrc: ReelMatchmakerScreenshot,
    category: "Entertainment",
    type: "personal" as const,
    techStack: {
      frontend: [
        "Next.js",
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Framer Motion",
      ],
      backend: ["Next.js API Routes", "AI SDK"],
      database: ["PostgreSQL", "Prisma"],
      other: ["OpenAI", "TMDB API", "Vercel", "NextAuth"],
    },
    simpleTechStack: ["Next.js", "TypeScript", "PostgreSQL", "OpenAI", "TMDB"],
    features: [
      "AI-powered movie recommendation engine",
      "Personal rating and bookmarking system",
      "Advanced filtering by genre, year, and ratings",
      "Movie details with cast, crew, and reviews",
      "Personalized watchlist management",
      "Recommendation accuracy improvement over time",
    ],
    metrics: [
      { label: "Movies in Database", value: "500K+" },
      { label: "Recommendation Accuracy", value: "85%+" },
    ],
    websiteUrl: "https://reel-matchmaker.vercel.app/",
    isFeatured: false,
  },
];
