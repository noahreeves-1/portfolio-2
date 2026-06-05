// Concise, v3-specific copy. Numbers are verified against
// app/lib/data/rescueProjects.ts and Noah's brief. Kept deliberately terse —
// the work (and the design) speak louder than prose.

export const NAME = "Noah Kim";
export const CALENDLY_URL = "https://cal.com/noahkim/30min";

// Drop a PDF into /public and set this (e.g. "/noah-kim-resume.pdf") to surface
// the résumé button. Left undefined so we never ship a broken link.
export const RESUME_URL: string | undefined = undefined;

export const SOCIALS = {
  linkedin: "https://www.linkedin.com/in/noahh-kim/",
  github: "https://github.com/noahreeves-1/",
} as const;

export const HERO = {
  kicker: "Product engineer · Founder",
  // Rendered as two lines; `accent` is the serif-italic phrase.
  lead: "I build what works,",
  accent: "and fix what doesn't.",
  subline:
    "Self-taught in 2021. Seven clients, an app nearing 50,000 downloads, and Dx-Chart — a healthcare SaaS built solo.",
} as const;

export type FrameKind = "phone" | "browser" | "none";

export interface Metric {
  value?: number;
  prefix?: string;
  suffix?: string;
  text?: string; // use instead of `value` for a non-numeric receipt
  label: string;
}

export interface FeaturedWork {
  id: string;
  name: string;
  kicker: string; // tiny mono label
  line: string; // one concise sentence
  metric: Metric;
  tech: string[];
  url: string;
  frame: FrameKind;
  screenshot?: string; // omit → intentional fallback tile
  logo?: string; // for the fallback tile
  monogram: string;
}

export const FEATURED: FeaturedWork[] = [
  {
    id: "dxchart",
    name: "Dx Chart",
    kicker: "Founder · solo-built",
    line: "A HIPAA-ready AI charting platform for clinicians — backend, frontend, security, and payments, built end to end alone.",
    metric: { text: "Solo", label: "every layer, one engineer" },
    tech: ["NestJS", "GCP", "Cloudflare", "Stripe"],
    url: "https://dx-chart.com/",
    frame: "browser",
    logo: "/dx-chart-logo.png",
    monogram: "Dx",
  },
  {
    id: "crawler",
    name: "Crawler",
    kicker: "Rescue → rebuild · mobile",
    line: "Took over a buggy, map-based app, paid down two years of legacy debt, and rebuilt it into a product that ships.",
    metric: { prefix: "~", value: 50000, label: "downloads · 4 months" },
    tech: ["Expo", "NestJS", "Redis", "BullMQ"],
    url: "https://www.joincrawler.com/",
    frame: "phone",
    logo: "/crawler-logo.svg",
    monogram: "Cr",
  },
  {
    id: "knoxlabs",
    name: "Knoxlabs",
    kicker: "Client · 0 → production in 3 months",
    line: "Replaced dozens of emails per sale with a multi-tenant, self-service ordering portal.",
    metric: { prefix: "$", value: 600000, suffix: "+", label: "annual order flow automated" },
    tech: ["Next.js", "NestJS", "GCP", "Cloud SQL"],
    url: "https://www.knoxlabs.com/",
    frame: "browser",
    screenshot: "/knoxlabs-screenshot.png",
    logo: "/knoxlabs-logo.svg",
    monogram: "Kx",
  },
  {
    id: "conin",
    name: "Conin",
    kicker: "Rescue · real-estate data engine",
    line: "Rebuilt the architecture and core engine of an investment pipeline — from zero successful runs to a 24-hour run.",
    metric: { value: 70, suffix: "%+", label: "backend cost cut · ~31 days → 24 hrs" },
    tech: ["NestJS", "Postgres", "Claude AI", "Stripe"],
    url: "https://conin.io/",
    frame: "none",
    logo: "/conin-logo.svg",
    monogram: "Co",
  },
];

export interface MoreWork {
  id: string;
  name: string;
  line: string;
  receipt: string;
  url: string;
  monogram: string;
}

export const MORE: MoreWork[] = [
  {
    id: "clearthinker",
    name: "ClearThinker",
    line: "Viral logical-fallacy quiz for a 1M-follower creator.",
    receipt: "75K plays · month one",
    url: "https://clearthinkeracademy.com/",
    monogram: "Ct",
  },
  {
    id: "muffin",
    name: "Muffin",
    line: "My first startup — where I learned what shipping costs.",
    receipt: "Founder · 2021",
    url: "https://muffinapp.io/",
    monogram: "Mu",
  },
  {
    id: "speedscribe",
    name: "SpeedScribeAI",
    line: "Adaptive AI reading-comprehension quizzes.",
    receipt: "Shipped",
    url: "https://www.speedscribeai.com/",
    monogram: "Ss",
  },
  {
    id: "invenboost",
    name: "Invenboost",
    line: "AI voice MVP for missed calls and scheduling.",
    receipt: "Shipped",
    url: "https://www.invenboost.com/",
    monogram: "Iv",
  },
  {
    id: "accenture",
    name: "Accenture",
    line: "Five years in consulting before the pivot to code.",
    receipt: "7 Fortune 500",
    url: "https://www.accenture.com/",
    monogram: "Ac",
  },
];

export const ARC = {
  kicker: "The short version",
  lines: [
    "In 2021 I left management consulting and taught myself to code.",
    "My first app failed — and taught me what shipping actually costs.",
    "Since then: seven clients, a pipeline rescued from zero runs to production, an app nearing 50,000 downloads.",
    "And Dx-Chart — a healthcare SaaS I built end to end, alone.",
  ],
} as const;

export const CONTACT = {
  heading: "Let's build something.",
  line: "Open to product roles, founder collaborations, and select client work.",
} as const;

export const NAV = [
  { id: "work", label: "Work" },
  { id: "story", label: "Story" },
  { id: "more", label: "More" },
  { id: "contact", label: "Contact" },
] as const;
