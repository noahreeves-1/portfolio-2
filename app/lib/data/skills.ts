import { StaticImageData } from "next/image";

// Import all skill logos
import AdonisJS from "@/public/adonis.svg";
import ExpressJS from "@/public/express.svg";
import NX from "@/public/nx.svg";
import Turbo from "@/public/turbo.svg";
import MySQL from "@/public/mysql.svg";
import SQLServer from "@/public/sqlserver.svg";
import Flyio from "@/public/flyio.svg";
import Hadoop from "@/public/hadoop.svg";
import R from "@/public/r.svg";
import PowerBI from "@/public/powerbi.svg";
import Tableau from "@/public/tableau.svg";
import BluePrism from "@/public/blueprism.svg";
import Excel from "@/public/excel.webp";
import PowerPoint from "@/public/powerpoint.svg";
import SharePoint from "@/public/sharepoint.webp";
import Slack from "@/public/slack.svg";
import Jira from "@/public/jira.svg";
import Git from "@/public/git.svg";
import GitHub from "@/public/github-logo.png";
import Docker from "@/public/docker.svg";
import TypeScript from "@/public/typescript.svg";
import ReactLogo from "@/public/react.svg";
import ReactNative from "@/public/reactnative.svg";
import Expo from "@/public/expo.webp";
import NextJS from "@/public/nextjs.svg";
import TailwindCSS from "@/public/tailwind.svg";
import NodeJS from "@/public/nodejs.svg";
import Express from "@/public/express.svg";
import NestJS from "@/public/nestjs.svg";
import PostgreSQL from "@/public/postgresql.svg";
import MongoDB from "@/public/mongodb.svg";
import Nx from "@/public/nx.svg";
import Firebase from "@/public/firebase.svg";
import ReduxLogo from "@/public/redux.svg";
import ReactQueryLogo from "@/public/tanstack.webp";
import CssLogo from "@/public/css.svg";
import PrismaLogo from "@/public/prisma.svg";
import ElasticsearchLogo from "@/public/elasticsearch.svg";
import RedisLogo from "@/public/redis.svg";
import CloudinaryLogo from "@/public/cloudinary-logo-dark.webp";
import DigitalOceanLogo from "@/public/digitalocean.svg";
import OpenAILogo from "@/public/openai.webp";
import GoogleMapsLogo from "@/public/google-maps.svg";
import SendGridLogo from "@/public/sendgrid.svg";
import OpenSaaSLogo from "@/public/opensaas.webp";
import StripeLogo from "@/public/stripe.svg";
import PythonLogo from "@/public/python.svg";
import PineconeLogo from "@/public/pinecone.webp";
import TwilioLogo from "@/public/twilio.svg";
import ApifyLogo from "@/public/apify.svg";
import CrawleeLogo from "@/public/crawlee.webp";
import JavaScriptLogo from "@/public/javascript.svg";
import SupabaseLogo from "@/public/supabase.svg";
import VercelLogo from "@/public/vercel.svg";
import RailwayLogo from "@/public/railway.svg";
import SQLLogo from "@/public/sql.svg";
import HTMLLogo from "@/public/html5.svg";
import TypeOrmLogo from "@/public/typeorm.svg";
import PuppeteerLogo from "@/public/puppeteer.webp";
import ResendLogo from "@/public/resend.svg";
import NeonLogo from "@/public/neon-logo.png";
import DrizzleLogo from "@/public/drizzle-icon.png";
import ViteLogo from "@/public/vite-logo.png";
import ReactRouterLogo from "@/public/react-router-logo.svg";
import ShadcnLogo from "@/public/shadcn-logo.png";
import AWSS3Logo from "@/public/aws-s3-logo.png";
import FramerMotionLogo from "@/public/motion-dev-logo.png";
import NextAuthLogo from "@/public/next-auth-logo.png";
import PostHogLogo from "@/public/posthog-logo.png";
import RadixLogo from "@/public/radix-logo.png";
import TurbopackLogo from "@/public/turbopack-logo.png";
import VitestLogo from "@/public/vitest-logo.svg";
import ReactTestingLibraryLogo from "@/public/react-testing-library.png";
import FastAPILogo from "@/public/fastapi-logo.png";
import RetellAILogo from "@/public/retell-ai-logo.png";
import CloverLogo from "@/public/clover-logo.png";
import NetlifyLogo from "@/public/netlify-logo.svg";

// Map skill names to their corresponding logos
export const skillLogos: Record<string, StaticImageData> = {
  AdonisJS,
  ExpressJS,
  NX,
  Turbo,
  MySQL,
  "SQL Server": SQLServer,
  "Fly.io": Flyio,
  Hadoop,
  R,
  PowerBI,
  Tableau,
  BluePrism,
  Excel,
  PowerPoint,
  SharePoint,
  Slack,
  Jira,
  Git,
  GitHub,
  Docker,
  TypeScript,
  React: ReactLogo,
  "React Native": ReactNative,
  Expo,
  "Next.js": NextJS,
  "Tailwind CSS": TailwindCSS,
  "Node.js": NodeJS,
  Express,
  NestJS,
  PostgreSQL,
  MongoDB,
  Nx,
  Firebase,
  Redux: ReduxLogo,
  "TanStack Query": ReactQueryLogo,
  CSS: CssLogo,
  Prisma: PrismaLogo,
  Elasticsearch: ElasticsearchLogo,
  Redis: RedisLogo,
  Cloudinary: CloudinaryLogo,
  "Digital Ocean": DigitalOceanLogo,
  OpenAI: OpenAILogo,
  "Google Maps API": GoogleMapsLogo,
  SendGrid: SendGridLogo,
  OpenSaaS: OpenSaaSLogo,
  Stripe: StripeLogo,
  Python: PythonLogo,
  Pinecone: PineconeLogo,
  Twilio: TwilioLogo,
  Apify: ApifyLogo,
  Crawlee: CrawleeLogo,
  JavaScript: JavaScriptLogo,
  Supabase: SupabaseLogo,
  Vercel: VercelLogo,
  Railway: RailwayLogo,
  SQL: SQLLogo,
  HTML: HTMLLogo,
  TypeORM: TypeOrmLogo,
  Puppeteer: PuppeteerLogo,
  Resend: ResendLogo,
  Neon: NeonLogo,
  "Drizzle ORM": DrizzleLogo,
  Vite: ViteLogo,
  "React Router": ReactRouterLogo,
  shadcn: ShadcnLogo,
  "AWS S3": AWSS3Logo,
  "Framer Motion": FramerMotionLogo,
  NextAuth: NextAuthLogo,
  PostHog: PostHogLogo,
  Radix: RadixLogo,
  Turbopack: TurbopackLogo,
  Vitest: VitestLogo,
  "React Testing Library": ReactTestingLibraryLogo,
  FastAPI: FastAPILogo,
  "Retell AI SDK": RetellAILogo,
  "Clover API": CloverLogo,
  Netlify: NetlifyLogo,
};

export interface Skill {
  name: string;
  icon?: StaticImageData;
}

export interface SkillCategory {
  name: string;
  skills: string[];
}

// Define primary skill categories with logos
export const primarySkills: Skill[] = [
  { name: "TypeScript", icon: skillLogos["TypeScript"] },
  { name: "React", icon: skillLogos["React"] },
  { name: "React Native", icon: skillLogos["React Native"] },
  { name: "Expo", icon: skillLogos["Expo"] },
  { name: "Next.js", icon: skillLogos["Next.js"] },
  { name: "Tailwind CSS", icon: skillLogos["Tailwind CSS"] },
  { name: "Node.js", icon: skillLogos["Node.js"] },
  { name: "Express", icon: skillLogos["Express"] },
  { name: "NestJS", icon: skillLogos["NestJS"] },
  { name: "PostgreSQL", icon: skillLogos["PostgreSQL"] },
  { name: "MongoDB", icon: skillLogos["MongoDB"] },
  { name: "Nx", icon: skillLogos["Nx"] },
  { name: "Firebase", icon: skillLogos["Firebase"] },
];

// Define other technology categories - ordered by importance
export const otherTechCategories: SkillCategory[] = [
  {
    name: "Frontend Libraries & Tools",
    skills: [
      "Tailwind CSS",
      "Radix",
      "shadcn",
      "React Router",
      "TanStack Query",
      "Redux",
      "Framer Motion",
      "Vite",
    ],
  },
  {
    name: "Databases & Backend",
    skills: [
      "Express",
      "FastAPI",
      "Supabase",
      "Neon",
      "MongoDB",
      "Elasticsearch",
      "Redis",
      "Cloudinary",
      "Prisma",
      "Drizzle ORM",
      "NextAuth",
      "OpenSaaS",
    ],
  },
  {
    name: "Languages & Styling",
    skills: ["TypeScript", "Python", "JavaScript", "HTML", "CSS"],
  },
  {
    name: "Cloud & DevOps",
    skills: ["Docker", "Vercel", "Netlify", "Fly.io", "Digital Ocean", "Railway", "Git", "GitHub"],
  },
  {
    name: "APIs & Services",
    skills: [
      "OpenAI",
      "Stripe",
      "SendGrid",
      "Google Maps API",
      "Resend",
      "AWS S3",
      "PostHog",
      "Firebase",
      "Retell AI SDK",
      "Clover API",
    ],
  },
  {
    name: "Testing & Build Tools",
    skills: ["Vitest", "React Testing Library", "Turbopack"],
  },
  {
    name: "Data & Analytics",
    skills: ["SQL", "PowerBI", "Tableau"],
  },
  {
    name: "Web Scraping",
    skills: ["Apify", "Crawlee", "Puppeteer"],
  },
];

// Preferred tech stack
export const preferredTechStack: SkillCategory[] = [
  {
    name: "Main Technologies",
    skills: [
      "TypeScript",
      "Python",
      "React",
      "React Native",
      "Expo",
      "Next.js",
      "Tailwind CSS",
      "Node.js",
      "Express",
      "NestJS",
      "PostgreSQL",
      "Docker",
    ],
  },
];