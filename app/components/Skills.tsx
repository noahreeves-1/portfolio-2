"use client";

import React from "react";
import { StaticImageData } from "next/image";
import Image from "next/image";
import { motion } from "framer-motion";

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

// Animation variants for container elements
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

// Animation variants for grid container
const gridContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

// Animation variants for individual categories
const categoryVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 12,
    },
  },
};

// Animation variants for skill tags
const skillVariants = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 150,
    },
  },
};

interface SkillCategoryProps {
  category: SkillCategoryType;
  className?: string;
}

const SkillCategory = ({ category, className = "" }: SkillCategoryProps) => (
  <motion.div
    variants={categoryVariants}
    className={`bg-gray-800 rounded-xl p-6 shadow-md border border-gray-600 hover:shadow-lg transition-shadow ${className}`}
  >
    <h4 className="text-lg font-medium mb-4 pb-2 border-b border-gray-600 text-white">
      {category.name}
    </h4>
    <motion.div
      className="flex flex-wrap gap-2"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
    >
      {category.skills.map((skill: string) => (
        <motion.span
          key={skill}
          variants={skillVariants}
          whileHover={{
            scale: 1.05,
            boxShadow: "0px 5px 10px rgba(0,0,0,0.2)",
            y: -5,
          }}
          className="inline-flex items-center px-3.5 sm:px-4 py-1.5 sm:py-2 bg-gray-600 text-gray-200 rounded-full text-sm sm:text-base font-medium border border-gray-500 hover:bg-gray-500 transition-colors"
        >
          <motion.div
            whileHover={{ rotate: [0, -10, 10, -10, 0] }}
            transition={{ duration: 0.5 }}
          >
            <Image
              src={skillLogos[skill]}
              alt={`${skill} logo`}
              width={20}
              height={20}
              className="w-4 h-4 sm:w-5 sm:h-5 object-contain mr-2"
            />
          </motion.div>
          {skill}
        </motion.span>
      ))}
    </motion.div>
  </motion.div>
);

const Skills = () => {
  return (
    <motion.section
      id="skills"
      className="py-24 bg-gray-100"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-200px" }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <motion.h2
          className="text-xl font-bold text-center mb-4 text-slate-800 md:text-3xl"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {`SKILLS`}
        </motion.h2>

        {/* Preferred Tech Stack */}
        <motion.div
          className="mb-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <div className="">
            {preferredTechStack.map((category) => (
              <SkillCategory
                key={category.name}
                category={category}
                className="border-blue-500"
              />
            ))}
          </div>
        </motion.div>

        {/* Other Technologies */}
        <div>
          <motion.h3
            className="font-semibold mb-4 text-center text-gray-500 text-lg"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            ADDITIONAL
          </motion.h3>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={gridContainerVariants}
          >
            {otherTechCategories.map((category, index) => (
              <motion.div
                key={category.name}
                variants={categoryVariants}
                custom={index}
                transition={{
                  delay: index * 0.1,
                  duration: 0.5,
                  type: "spring",
                  stiffness: 80,
                }}
              >
                <SkillCategory category={category} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Skills;
