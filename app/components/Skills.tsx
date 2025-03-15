import React from "react";
import { StaticImageData } from "next/image";
import Image from "next/image";

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
import Excel from "@/public/excel.svg";
import PowerPoint from "@/public/powerpoint.svg";
import SharePoint from "@/public/sharepoint.svg";
import Slack from "@/public/slack.svg";
import Jira from "@/public/jira.svg";
import Git from "@/public/git.svg";
import GitHub from "@/public/github.svg";
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
// Import additional logos from Projects.tsx
import ReduxLogo from "@/public/redux.svg";
import ReactQueryLogo from "@/public/tanstack.webp";
import CssLogo from "@/public/css.svg";
import PrismaLogo from "@/public/prisma.svg";
import ElasticsearchLogo from "@/public/elasticsearch.svg";
import RedisLogo from "@/public/redis.svg";
import CloudinaryLogo from "@/public/cloudinary.webp";
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

// Map skill names to their corresponding logos
const skillLogos: Record<string, StaticImageData> = {
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
  Express: Express,
  NestJS: NestJS,
  PostgreSQL: PostgreSQL,
  MongoDB: MongoDB,
  Nx,
  Firebase,
  // Add additional logos
  Redux: ReduxLogo,
  "React Query": ReactQueryLogo,
  CSS: CssLogo,
  Prisma: PrismaLogo,
  TypeORM: TypeOrmLogo,
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
  Puppeteer: PuppeteerLogo,
  Resend: ResendLogo,
};

// Define category type
interface SkillCategoryType {
  name: string;
  skills: string[];
}

// Define preferred tech stack
const preferredTechStack: SkillCategoryType[] = [
  {
    name: "Main Technologies",
    skills: [
      "TypeScript",
      "React",
      "React Native",
      "Expo",
      "Next.js",
      "Tailwind CSS",
      "Node.js",
      "Express",
      "NestJS",
      "Firebase",
      "PostgreSQL",
      "Docker",
    ],
  },
];

// Define other technologies
const otherTechCategories: SkillCategoryType[] = [
  {
    name: "Languages & Styling",
    skills: ["Python", "JavaScript", "HTML", "CSS"],
  },
  {
    name: "Frameworks & Libraries",
    skills: ["AdonisJS", "Turbo", "Nx", "Redux", "React Query", "OpenSaaS"],
  },
  {
    name: "Databases & Backend",
    skills: [
      "MySQL",
      "SQL Server",
      "Supabase",
      "MongoDB",
      "Elasticsearch",
      "Redis",
      "Cloudinary",
      "Pinecone",
      "Prisma",
      "TypeORM",
    ],
  },
  {
    name: "Cloud & DevOps",
    skills: ["Digital Ocean", "Fly.io", "Vercel", "Railway", "Git", "GitHub"],
  },
  {
    name: "APIs & Services",
    skills: [
      "OpenAI",
      "Stripe",
      "SendGrid",
      "Twilio",
      "Resend",
      "Google Maps API",
    ],
  },
  {
    name: "Web Scraping",
    skills: ["Apify", "Crawlee", "Puppeteer"],
  },
  {
    name: "Data & Analytics",
    skills: ["SQL", "Hadoop", "R", "PowerBI", "Tableau"],
  },
  {
    name: "Automation & RPA",
    skills: ["BluePrism"],
  },
  {
    name: "Office & Productivity",
    skills: ["Slack", "Jira", "Excel", "PowerPoint", "SharePoint"],
  },
];

interface SkillCategoryProps {
  category: SkillCategoryType;
  className?: string;
}

const SkillCategory = ({ category, className = "" }: SkillCategoryProps) => (
  <div
    className={`bg-gray-800 rounded-xl p-6 shadow-md border border-gray-600 hover:shadow-lg transition-shadow ${className}`}
  >
    <h4 className="text-lg font-medium mb-4 pb-2 border-b border-gray-600 text-white">
      {category.name}
    </h4>
    <div className="flex flex-wrap gap-2">
      {category.skills.map((skill: string) => (
        <span
          key={skill}
          className="inline-flex items-center px-3.5 sm:px-4 py-1.5 sm:py-2 bg-gray-600 text-gray-200 rounded-full text-sm sm:text-base font-medium border border-gray-500 hover:bg-gray-500 transition-colors"
        >
          <Image
            src={skillLogos[skill]}
            alt={`${skill} logo`}
            width={20}
            height={20}
            className="w-4 h-4 sm:w-5 sm:h-5 object-contain mr-2"
          />
          {skill}
        </span>
      ))}
    </div>
  </div>
);

const Skills = () => {
  return (
    <section id="skills" className="py-24 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <h2 className="text-sm font-bold text-center mb-4 md:text-3xl">
          {`SKILLS`}
        </h2>

        {/* Preferred Tech Stack */}
        <div className="mb-8">
          {/* <h3 className="font-semibold mb-6 text-center text-gray-500">
            PREFERRED
          </h3> */}
          <div className="">
            {preferredTechStack.map((category) => (
              <SkillCategory
                key={category.name}
                category={category}
                className="border-blue-500"
              />
            ))}
          </div>
        </div>

        {/* Other Technologies */}
        <div>
          <h3 className="font-semibold mb-4 text-center text-gray-500 text-sm">
            ADDITIONAL
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherTechCategories.map((category) => (
              <SkillCategory key={category.name} category={category} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
