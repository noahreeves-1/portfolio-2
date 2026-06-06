// Centralized copy + data for /v6, the simplified editorial portfolio.
// Project facts come from the canonical source of truth
// (app/lib/data/rescueProjects.ts); this file only layers /v6 display framing:
// the hero copy, the trust-bar numbers, the short about paragraph, the project
// index (with the "current" flags), and the full-stack capabilities matrix.

import { rescueProjects, type RescueProject } from "@/app/lib/data/rescueProjects";

const byId = (id: string): RescueProject => {
  const p = rescueProjects.find((x) => x.id === id);
  if (!p) throw new Error(`v6 content: unknown project id "${id}"`);
  return p;
};

// The projects shown with the emerald "Current" marker (also drives the hero
// pill count). Confirmed with Noah: Dx-Chart + Crawler.
export const CURRENT_IDS = ["dxchart", "crawler"] as const;

// One line of an oversized clip-reveal headline; `accent` is the lone italic.
export interface HeadlineLine {
  text: string;
  accent?: string;
}

// An inline run inside a paragraph; `italic` marks the one Fraunces emphasis.
export interface LeadPart {
  text: string;
  italic?: boolean;
}

// ── HERO ──────────────────────────────────────────────────────────────────────
export interface HeroContent {
  name: string;
  location: string;
  nav: { label: string; href: string }[];
  headline: HeadlineLine[];
  scrollLabel: string;
  cta: { label: string; href: string };
  image: { desktop: string; mobile: string; alt: string };
}

export const HERO: HeroContent = {
  name: "Noah Kim",
  location: "Based in LA",
  nav: [
    { label: "Work", href: "#work" },
    { label: "Contact", href: "#contact" },
  ],
  headline: [
    { text: "From Fortune 500 decks" },
    { text: "to shipping ", accent: "code." },
  ],
  scrollLabel: "Scroll",
  cta: { label: "Book a call", href: "https://cal.com/noahkim/30min" },
  image: {
    desktop: "/hero/skyline-desktop.jpeg",
    mobile: "/hero/skyline-mobile.jpeg",
    alt: "Illustrated synthwave sunset of three skylines blended under one setting sun",
  },
};

// ── TRUST BAR (numbers + the MSc) ─────────────────────────────────────────────
export interface TrustItem {
  value?: number;
  prefix?: string;
  suffix?: string;
  text?: string; // for the non-numeric degree mark
  label: string;
}

export const TRUST: TrustItem[] = [
  { value: 50000, prefix: "~", label: "downloads in ~4 months" },
  { value: 7, label: "clients shipped 0 → 1" },
  { value: 600000, prefix: "$", suffix: "+", label: "B2B order flow automated" },
  { value: 75000, suffix: "+", label: "plays in month one" },
];

// ── ABOUT (short paragraph) ───────────────────────────────────────────────────
export interface AboutContent {
  eyebrow: string;
  body: LeadPart[];
}

export const ABOUT: AboutContent = {
  eyebrow: "About",
  body: [
    { text: "Self-taught engineer and founder. I build " },
    { text: "data-first", italic: true },
    { text: ". I've owned the database and backend on most of what I ship, and taken 0 → 1 products to market for seven clients and two companies of my own." },
  ],
};

// ── STORY (the long way here) ─────────────────────────────────────────────────
export interface StoryContent {
  eyebrow: string;
  heading: string;
  paragraphs: LeadPart[][];
}

export const STORY: StoryContent = {
  eyebrow: "The long way here",
  heading: "I took the scenic route.",
  paragraphs: [
    [
      {
        text: "Working is core to who I am. I started in high school, tutoring kids and coaching tennis camps. In college I waited tables and did marketing for small businesses, two unpaid internships at once. Pitching a project to one CEO earned my first promotion.",
      },
    ],
    [
      { text: "One of those marketing jobs introduced me to Google Analytics, and " },
      { text: "I was hooked", italic: true },
      {
        text: ". I earned my master's in business analytics, spent five years in data consulting at Accenture, and in 2021 I quit to teach myself to code. I've been building ever since.",
      },
    ],
  ],
};

// ── WORK (the project index) ──────────────────────────────────────────────────
export type ProjectRole = "Full Stack" | "Backend" | "Frontend" | "Data";

export interface ProjectCard {
  id: string;
  name: string;
  tagline: string;
  role: ProjectRole;
  monogram: string;
  logo?: string;
  url: string;
  current: boolean;
  /** Which of your own startups this was, shown as a chip in the project index. */
  startup?: 1 | 2;
}

const isCurrent = (id: string): boolean => (CURRENT_IDS as readonly string[]).includes(id);

export const WORK = {
  eyebrow: "Work",
  heading: "Everything I've built.",
  since: "Since 2023",
};

// Current first, then by impact. Taglines are concise editorial framing.
export const PROJECTS: ProjectCard[] = (
  [
    { id: "dxchart", name: "Dx-Chart", tagline: "HIPAA-ready AI charting, built solo end-to-end.", role: "Full Stack", monogram: "Dx", logo: "/dx-chart-logo.png", startup: 2 },
    { id: "crawler", name: "Crawler", tagline: "~50K downloads in 4 months. I own the backend and help on mobile.", role: "Backend", monogram: "Cr", logo: "/crawler-logo.svg" },
    { id: "conin", name: "Conin", tagline: "Real estate pipeline: 12M rows, 0 runs → 24 hours.", role: "Backend", monogram: "Co", logo: "/conin-logo.svg" },
    { id: "knoxlabs", name: "Knoxlabs", tagline: "$600K+/yr VR hardware order flow, automated.", role: "Full Stack", monogram: "Kx", logo: "/knoxlabs-logo.svg" },
    { id: "clearthinker", name: "ClearThinker", tagline: "A logical-fallacy quiz for an Emmy-winning influencer with 2M+ followers.", role: "Full Stack", monogram: "Ct", logo: "/clear-thinker-logo.png" },
    { id: "speedscribe", name: "SpeedScribeAI", tagline: "Adaptive AI reading-comprehension quizzes.", role: "Full Stack", monogram: "Ss" },
    { id: "invenboost", name: "Invenboost", tagline: "AI voice MVP for missed calls & scheduling.", role: "Full Stack", monogram: "Iv", logo: "/invenboost-logo.png" },
    { id: "muffin", name: "Muffin", tagline: "My first startup, where I learned what shipping really costs.", role: "Full Stack", monogram: "Mu", logo: "/muffin.svg", startup: 1 },
    { id: "accenture", name: "Accenture · 5 yrs", tagline: "7 Fortune 500 clients. Where it started.", role: "Data", monogram: "Ac", logo: "/accenture.webp" },
  ] satisfies Array<Omit<ProjectCard, "url" | "current">>
).map((p) => ({ ...p, url: byId(p.id).url ?? "#", current: isCurrent(p.id) }));

// ── CAPABILITIES (the desktop side panel) ─────────────────────────────────────
export interface CapabilityGroup {
  label: string;
  items: string[];
}

export const CAPABILITIES = {
  eyebrow: "Capabilities",
  heading: "Full-stack, end-to-end.",
  note: "One person, the whole stack, from the database to the deploy.",
  groups: [
    { label: "Web", items: ["Next.js", "React", "TypeScript"] },
    { label: "Backend", items: ["NestJS", "Express", "Node"] },
    { label: "Database", items: ["Postgres", "Supabase", "Redis"] },
    { label: "Mobile", items: ["Expo", "React Native"] },
    { label: "AI", items: ["Cursor", "Claude Code", "Codex"] },
    { label: "Payments", items: ["Stripe"] },
    { label: "Auth & security", items: ["Multi-tenant", "MFA", "HIPAA-ready"] },
    { label: "Infra", items: ["GCP", "Cloudflare", "AWS", "BullMQ"] },
  ] satisfies CapabilityGroup[],
};

// ── CONTACT (compact close) ───────────────────────────────────────────────────
export interface ContactContent {
  eyebrow: string;
  head: string;
  sub: string;
  cta: { label: string; href: string };
  note: string;
  // Background art for the contact card, an illustrated sunset of cities Noah
  // has visited (travel, in the same synthwave style as the hero).
  image: { src: string; alt: string };
  socials: { label: string; href: string; icon: string }[];
}

export const CONTACT: ContactContent = {
  eyebrow: "Contact",
  head: "Let's ship something great.",
  sub: "A broken pipeline, a stalled product, or something you need shipped quick.",
  image: {
    src: "/hero/contact-cities.png",
    alt: "Illustrated sunset over a skyline of cities around the world",
  },
  cta: { label: "Book a call", href: "https://cal.com/noahkim/30min" },
  note: "30-min call · free · no pitch",
  socials: [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/noahh-kim/", icon: "/linkedin.svg" },
    { label: "GitHub", href: "https://github.com/noahreeves-1/", icon: "/github-logo.png" },
  ],
};
