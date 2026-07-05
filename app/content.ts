// Centralized copy + data for the landing page (the "Monument" design).
// Project facts come from the canonical source of truth
// (app/lib/data/rescueProjects.ts); this file layers the display framing on top:
// hero rotator, three featured cards, the compact project index, the data-first
// section, the stack pills, and the footer. No em dashes anywhere in copy.

import { rescueProjects, type RescueProject } from "@/app/lib/data/rescueProjects";

const urlOf = (id: string): string => {
  const p: RescueProject | undefined = rescueProjects.find((x) => x.id === id);
  if (!p) throw new Error(`content: unknown project id "${id}"`);
  return p.url ?? "#";
};

// An inline run of copy; `strong` marks a bold emphasis, `accent` the bronze one.
export interface TextPart {
  text: string;
  strong?: boolean;
  accent?: boolean;
}

// ── SITE / HEADER ─────────────────────────────────────────────────────────────
export const SITE = {
  name: "Noah Kim",
  site: "noahk.im",
  nav: [
    { label: "GitHub", href: "https://github.com/noahreeves-1/" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/noahh-kim/" },
  ],
} as const;

const CAL_URL = "https://cal.com/noahkim/30min";

// ── HERO ──────────────────────────────────────────────────────────────────────
export interface HeroContent {
  eyebrow: string;
  lead: string;
  rotator: string[];
  sub: TextPart[];
  ctas: { label: string; href: string; primary?: boolean }[];
}

export const HERO: HeroContent = {
  eyebrow: "Noah Kim · Full-stack engineer · Backend lead",
  lead: "I ship",
  rotator: ["12M-row pipelines.", "50K-download apps.", "$600K order flows.", "production systems."],
  sub: [
    { text: "Data consultant turned self-taught engineer. " },
    { text: "Nine products since 2023.", strong: true },
    { text: " I own the schema, the backend, and the deploy." },
  ],
  ctas: [
    { label: "See the work", href: "#work", primary: true },
    { label: "Book 30 minutes", href: CAL_URL },
  ],
};

// ── FEATURED WORK (three deep cards) ──────────────────────────────────────────
export interface FeaturedCard {
  id: string;
  name: string;
  metric: string;
  role: string;
  body: TextPart[];
  tech: string;
  url: string;
}

export const FEATURED: { eyebrow: string; cards: FeaturedCard[] } = {
  eyebrow: "Featured work",
  cards: [
    {
      id: "crawler",
      name: "Crawler",
      metric: "50K",
      role: "Backend lead · current",
      body: [
        { text: "Consumer social app, 50K downloads in 4 months. Two years of legacy debt had killed local dev; I restored Docker parity in " },
        { text: "40 hours", strong: true },
        { text: ". My notification pipeline handles " },
        { text: "5,000+ events/sec", strong: true },
        { text: "." },
      ],
      tech: "NestJS · Redis · BullMQ · Expo",
      url: urlOf("crawler"),
    },
    {
      id: "conin",
      name: "Conin",
      metric: "24 hrs",
      role: "Backend lead",
      body: [
        { text: "12M-row real estate pipeline with " },
        { text: "zero successful runs", strong: true },
        { text: ". Rebuilt it: 31 days down to 24 hours on a quarter of the hardware, " },
        { text: "70% cost cut", strong: true },
        { text: ". Client hit $2K MRR in two months." },
      ],
      tech: "NestJS · Postgres · Stripe · Claude",
      url: urlOf("conin"),
    },
    {
      id: "knoxlabs",
      name: "Knoxlabs",
      metric: "$600K",
      role: "Backend lead · full-stack",
      body: [
        { text: "Replaced an email-thread B2B order flow worth $600K a year with a multi-tenant portal. " },
        { text: "First meeting to production in 3 months.", strong: true },
      ],
      tech: "Next.js · NestJS · GCP",
      url: urlOf("knoxlabs"),
    },
  ],
};

// ── PROJECT INDEX (everything else) ───────────────────────────────────────────
export interface IndexRow {
  name: string;
  desc: string;
  url?: string;
}

export const INDEX: { eyebrow: string; rows: IndexRow[] } = {
  eyebrow: "Everything else",
  rows: [
    { name: "Dx-Chart", desc: "Founder · HIPAA-ready AI charting", url: urlOf("dxchart") },
    { name: "ClearThinker", desc: "75K plays in month one", url: urlOf("clearthinker") },
    { name: "SpeedScribeAI", desc: "Founder · adaptive AI reading quizzes", url: urlOf("speedscribe") },
    { name: "Invenboost", desc: "Backend lead · AI voice agent MVP", url: urlOf("invenboost") },
    { name: "Muffin", desc: "Founder · first startup", url: urlOf("muffin") },
    { name: "Accenture", desc: "5 yrs · 7 Fortune 500 clients" },
  ],
};

// ── DATA-FIRST (the differentiator) ───────────────────────────────────────────
export interface DataFirstContent {
  eyebrow: string;
  creed: TextPart[];
  body1: TextPart[];
  creds: TextPart[][];
  body2: TextPart[];
}

export const DATA_FIRST: DataFirstContent = {
  eyebrow: "Data-first",
  creed: [
    { text: "Good schemas. Safe migrations. Tested backups. " },
    { text: "Boring deploys.", accent: true },
  ],
  body1: [
    { text: "Products change every week; the data has to survive all of it. " },
    { text: "I was a data person before I was an engineer", strong: true },
    { text: ", and it shows in how I build." },
  ],
  creds: [
    [{ text: "MS, Business Analytics", strong: true }],
    [{ text: "5 years", strong: true }, { text: " of data consulting at Accenture · 7 Fortune 500 clients" }],
  ],
  body2: [
    { text: "In 2021 I quit consulting to teach myself to code. " },
    { text: "Everything above shipped since.", strong: true },
  ],
};

// ── STACK ─────────────────────────────────────────────────────────────────────
export const STACK: { eyebrow: string; items: string[] } = {
  eyebrow: "Stack",
  items: [
    "Next.js", "React", "TypeScript", "NestJS", "Node", "Postgres",
    "Redis", "BullMQ", "Expo", "GCP", "AWS", "Stripe",
  ],
};

// ── FOOTER ────────────────────────────────────────────────────────────────────
export const FOOTER = {
  lead: "Hiring?",
  cta: { label: "Let's talk.", href: CAL_URL },
  socials: [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/noahh-kim/" },
    { label: "GitHub", href: "https://github.com/noahreeves-1/" },
  ],
} as const;
