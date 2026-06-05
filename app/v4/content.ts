// Centralized copy + data for /v4. Project facts (beats, tech, URLs) are pulled
// from the canonical source of truth (app/lib/data/rescueProjects.ts) so there's
// one place for the truth; this file only adds /v4 display framing (order, the
// concise card taglines, headline metrics, device/imagery choices).

import { rescueProjects, type RescueProject } from "@/app/lib/data/rescueProjects";

const byId = (id: string): RescueProject => {
  const p = rescueProjects.find((x) => x.id === id);
  if (!p) throw new Error(`v4 content: unknown project id "${id}"`);
  return p;
};

export interface DisplayMetric {
  value?: number;
  prefix?: string;
  suffix?: string;
  text?: string;
  label: string;
  sub?: string;
}

export interface FeaturedWork {
  id: string;
  name: string;
  kind: string; // small mono label, e.g. "Rescue · Data pipeline"
  tagline: string; // concise card headline
  metric: DisplayMetric;
  device: "phone" | "browser";
  screenshot?: string; // real screenshot; falls back to a branded splash
  splashCaption?: string;
  monogram: string;
  logo?: string;
  tech: string[];
  beats: string[];
  url: string;
}

// Outcome-led order (Noah's pick): biggest business signal first.
export const FEATURED: FeaturedWork[] = [
  {
    id: "knoxlabs",
    name: "Knoxlabs",
    kind: "Greenfield · B2B portal",
    tagline: "A $600K+/yr B2B order flow, automated.",
    metric: { value: 600000, prefix: "$", suffix: "+", label: "annual order flow" },
    device: "browser",
    screenshot: "/knoxlabs-screenshot.png",
    monogram: "Kx",
    logo: "/knoxlabs-logo.svg",
    tech: byId("knoxlabs").tech,
    beats: byId("knoxlabs").beats,
    url: byId("knoxlabs").url ?? "#",
  },
  {
    id: "conin",
    name: "Conin",
    kind: "Rescue · Data pipeline",
    tagline: "12M rows. 0 runs → a 24-hour pipeline.",
    metric: { value: 70, suffix: "%+", label: "backend cost cut" },
    device: "browser",
    splashCaption: "12M rows · 24h run",
    monogram: "Co",
    logo: "/conin-logo.svg",
    tech: byId("conin").tech,
    beats: byId("conin").beats,
    url: byId("conin").url ?? "#",
  },
  {
    id: "dxchart",
    name: "Dx Chart",
    kind: "Founder · HIPAA SaaS",
    tagline: "HIPAA-ready AI charting, built solo end-to-end.",
    metric: { text: "Solo", label: "backend · frontend · security · payments" },
    device: "browser",
    splashCaption: "HIPAA-ready",
    monogram: "Dx",
    logo: "/dx-chart-logo.png",
    tech: byId("dxchart").tech,
    beats: byId("dxchart").beats,
    url: byId("dxchart").url ?? "#",
  },
  {
    id: "crawler",
    name: "Crawler",
    kind: "Rescue · Mobile app",
    tagline: "Two years of legacy debt, rebuilt.",
    metric: { value: 50000, prefix: "~", label: "downloads in ~4 months" },
    device: "phone",
    splashCaption: "~50K downloads",
    monogram: "Cr",
    logo: "/crawler-logo.svg",
    tech: byId("crawler").tech,
    beats: byId("crawler").beats,
    url: byId("crawler").url ?? "#",
  },
];

export interface MoreItem {
  id: string;
  name: string;
  tagline: string;
  monogram: string;
  logo?: string;
  url: string;
}

export const MORE: MoreItem[] = [
  {
    id: "clearthinker",
    name: "ClearThinker",
    tagline: "75K+ plays in month one.",
    monogram: "Ct",
    logo: "/clear-thinker-logo.png",
    url: byId("clearthinker").url ?? "#",
  },
  {
    id: "speedscribe",
    name: "SpeedScribeAI",
    tagline: "Adaptive AI reading quizzes.",
    monogram: "Ss",
    url: byId("speedscribe").url ?? "#",
  },
  {
    id: "invenboost",
    name: "Invenboost",
    tagline: "AI voice MVP for missed calls.",
    monogram: "Iv",
    logo: "/invenboost-logo.png",
    url: byId("invenboost").url ?? "#",
  },
  {
    id: "muffin",
    name: "Muffin",
    tagline: "My first startup — what shipping costs.",
    monogram: "Mu",
    logo: "/muffin.svg",
    url: byId("muffin").url ?? "#",
  },
  {
    id: "accenture",
    name: "Accenture · 5 yrs",
    tagline: "7 Fortune 500 clients. Where it started.",
    monogram: "Ac",
    logo: "/accenture.webp",
    url: byId("accenture").url ?? "#",
  },
];

export const HERO = {
  status: "Available for new projects",
  // Non-breaking spaces keep "0 → 1." intact so the line wraps as "Shipping" / "0 → 1."
  head: "Shipping 0 → 1.",
  sub: "Five years in consulting. Then I taught myself to code. Now I build products that actually work.",
  cta: { label: "Book a call", href: "https://cal.com/noahkim/30min" },
};

export const PROOF: DisplayMetric[] = [
  { value: 600000, prefix: "$", suffix: "+", label: "annual B2B order flow automated", sub: "Knoxlabs" },
  { value: 75000, suffix: "+", label: "plays in month one", sub: "ClearThinker" },
  { value: 70, suffix: "%+", label: "backend cost cut on a 12M-row pipeline", sub: "Conin" },
  { value: 50000, prefix: "~", label: "app downloads in ~4 months", sub: "Crawler" },
];

export const PROOF_HEADING = "Receipts, not vibes.";

export const ARC = {
  label: "The short version",
  lines: [
    "Five years in management consulting at Accenture.",
    "Quit in 2021. Taught myself to code through the pandemic.",
    "My first startup failed — it taught me what shipping really costs.",
    "Since then: seven clients, shipped 0 → 1.",
  ],
};

export const CONTACT = {
  head: "Have a high-stakes build?",
  sub: "A broken pipeline, a stalled product, or a 0 → 1 you need shipped — I keep a few hours open each week.",
  cta: { label: "Book a call", href: "https://cal.com/noahkim/30min" },
  note: "30-min call · free · no pitch",
  socials: [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/noahh-kim/", icon: "/linkedin.svg" },
    { label: "GitHub", href: "https://github.com/noahreeves-1/", icon: "/github-logo.png" },
  ],
};

export interface City {
  src: string;
  alt: string;
}

// Purely aesthetic, cinematic blue-hour skylines (Unsplash, self-hosted). NOT a
// "places I've been" map — alt text stays generic and atmospheric on purpose.
export const CITIES: City[] = [
  { src: "/cities/seoul.jpg", alt: "Cinematic city skyline at blue hour" },
  { src: "/cities/new-york.jpg", alt: "City skyline at dusk" },
  { src: "/cities/london.jpg", alt: "City at twilight" },
  { src: "/cities/san-francisco.jpg", alt: "City skyline in the blue hour" },
  { src: "/cities/bangkok.jpg", alt: "City lights at dusk" },
  { src: "/cities/amsterdam.jpg", alt: "City at blue hour" },
  { src: "/cities/los-angeles.jpg", alt: "City skyline at twilight" },
  { src: "/cities/dallas.jpg", alt: "City skyline at dusk" },
  { src: "/cities/rio.jpg", alt: "Coastal city at blue hour" },
];
