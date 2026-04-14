export type Tier = "rescue" | "product" | "foundation";

export interface RescueMetric {
  value: number;
  prefix?: string;
  suffix?: string;
  label: string;
}

export interface RescueProject {
  id: string;
  tier: Tier;
  client: string;
  name: string;
  tagline: string;
  beats: string[];
  tech: string[];
  metric?: RescueMetric;
  gradient: string;
  url?: string;
  imageSrc?: string;
  monogram?: string;
}

export const rescueProjects: RescueProject[] = [
  {
    id: "conin",
    tier: "rescue",
    client: "OSMOS",
    name: "Conin",
    tagline: "12M rows. 0 successful runs. 24-hour pipeline.",
    beats: [
      "Brought in pre-beta as final blocker: after weeks of CTO effort, the pipeline still had 0 successful runs (even on 64GB RAM).",
      "Rebuilt the data flow so CSVs were ingested once into Postgres, then deduped, standardized, and pre-processed across 37 rules.",
      "Added a Claude-powered investment-thesis step with hallucination validation, so AI output stayed useful without sacrificing trust.",
      "Cut runtime from an estimated 30+ days to ~24 hours on 4GB CPU + 16GB Postgres, reducing backend cost by 70%+.",
      "Unblocked launch: 15+ paid users and $2K MRR in the first 2 months.",
    ],
    tech: ["NestJS", "Postgres", "Claude API", "AWS", "TypeScript"],
    metric: { value: 70, suffix: "%+", label: "backend cost reduction" },
    gradient: "from-violet-500/20 via-fuchsia-500/10 to-transparent",
    url: "https://conin.io/",
    imageSrc: "/conin-logo.svg",
    monogram: "Co",
  },
  {
    id: "crawler",
    tier: "rescue",
    client: "OSMOS",
    name: "Crawler",
    tagline: "2 years of legacy debt. Stabilized in 40 hours.",
    beats: [
      "Zero staging, zero dev, severe schema drift, a map-based app nobody shipped to users.",
      "Stabilized the entire architecture and established Docker parity in 40 hours.",
      "Built a brand new Expo happy-hour app with my brother in 2 months — 7.5K signups, 3K MAU, 150+ confirmed bar sales in 2.6 months.",
      "Integrated a Customer.io webhook processing 5,000+ notifications/second via BullMQ.",
    ],
    tech: ["Expo", "NestJS", "Redis", "BullMQ", "AWS RDS"],
    metric: { value: 40, suffix: " hrs", label: "to stabilize 2 years of debt" },
    gradient: "from-cyan-500/20 via-blue-500/10 to-transparent",
    url: "https://www.joincrawler.com/",
    imageSrc: "/crawler-logo.svg",
    monogram: "Cr",
  },
  {
    id: "knoxlabs",
    tier: "product",
    client: "Knoxlabs",
    name: "Knoxlabs",
    tagline: "$600K+ annual B2B order flow automated.",
    beats: [
      "Led initial meeting → requirements → MVP → production system in 3 months.",
      "Multi-tenant self-service portal replaced dozens of emails per sale.",
      "Google Sheets integration kept ops in their existing source of truth.",
      "Over $600K in orders processed — automated a workflow that used to eat hours of sales time per week.",
    ],
    tech: ["Next.js", "NestJS", "GCP Cloud Run", "Cloud SQL", "Firebase"],
    metric: { value: 600000, prefix: "$", suffix: "+", label: "annual order flow" },
    gradient: "from-emerald-500/20 via-teal-500/10 to-transparent",
    imageSrc: "/knoxlabs-logo.svg",
    monogram: "Kx",
  },
  {
    id: "clearthinker",
    tier: "product",
    client: "ClearThinker",
    name: "ClearThinker",
    tagline: "75K+ plays in month one. 10K on day one.",
    beats: [
      "Built an interactive logical fallacy quiz for an Oscar-winning influencer with 1M+ followers.",
      "Cron jobs run 3×/day scanning headlines, generating fresh fake tweets with 12 fallacy types.",
      "No login. Session-based caching in Redis. Designed for political-news audience concurrency.",
      "Day one: 10,000 users. Month one: 75,000+ plays.",
    ],
    tech: ["Next.js", "Redis", "Cron AI", "TypeScript"],
    metric: { value: 75000, suffix: "+", label: "plays in month one" },
    gradient: "from-amber-500/20 via-orange-500/10 to-transparent",
    imageSrc: "/clear-thinker-logo.png",
    monogram: "Ct",
  },
  {
    id: "dxchart",
    tier: "product",
    client: "Dx Chart",
    name: "Dx Chart",
    tagline: "HIPAA-ready AI charting for acupuncturists.",
    beats: [
      "180+ patient chart inputs, 100+ MNR inputs. One-click SOAP / HPI / diagnosis generation.",
      "AI Translate & Improve for Korean/Chinese fields — outputs medically-professional English.",
      "HIPAA-ready: GCP encryption + signed BAA + Cloudflare + multiple security passes + MFA.",
      "My founder uses it daily for 2 months and 'can't live without it.' Beta invites going out next week.",
    ],
    tech: ["NestJS", "GCP", "Cloudflare", "Stripe", "Multi-tenant"],
    gradient: "from-rose-500/20 via-pink-500/10 to-transparent",
    monogram: "Dx",
  },
  {
    id: "speedscribe",
    tier: "foundation",
    client: "SpeedScribeAI",
    name: "SpeedScribeAI",
    tagline: "Adaptive AI reading-comprehension quizzes.",
    beats: [
      "Initial assessment measures reading speed + comprehension, then adapts difficulty.",
      "Students level up on 3×(4/5 correct), level down on 2×(3/5).",
      "Teacher dashboard: live class progress, per-student strengths/weaknesses.",
      "Multi-tenant org auth + admin system. Shipped; client didn't execute GTM.",
    ],
    tech: ["Next.js", "Supabase", "Vercel AI SDK", "OpenAI"],
    gradient: "from-indigo-500/15 via-violet-500/10 to-transparent",
    url: "https://speed-scribe-ai.vercel.app",
    imageSrc: "/speed-scribe-screenshot.png",
    monogram: "Ss",
  },
  {
    id: "invenboost",
    tier: "foundation",
    client: "Invenboost",
    name: "Invenboost",
    tagline: "AI voice MVP for missed calls and scheduling.",
    beats: [
      "Voice AI MVP built for a smoke shop (later pivoted to plumbers).",
      "Retell AI + OpenAI handled calls, scheduling, and order capture.",
      "Shipped the MVP; client wound the business down.",
      "Walked away with deep Retell + voice-agent experience.",
    ],
    tech: ["Retell AI", "Express", "Supabase", "Vercel AI SDK"],
    gradient: "from-sky-500/15 via-cyan-500/10 to-transparent",
    monogram: "Iv",
  },
  {
    id: "accenture",
    tier: "foundation",
    client: "Accenture",
    name: "Accenture (5 yrs)",
    tagline: "10 projects, 7 Fortune 500 clients, data everywhere.",
    beats: [
      "Master data management, Tableau analytics, SQL cleansing, RDBMS schema design, RPA automation.",
      "Assessed data governance at 6 Salesforce orgs. Supported RFPs by interviewing stakeholders.",
      "Took unemployment center calls during the pandemic — 10× the normal volume.",
      "Foundation for everything I ship now.",
    ],
    tech: ["SQL", "Tableau", "MDM", "RPA", "Salesforce", "slide savant"],
    gradient: "from-zinc-500/15 via-slate-500/10 to-transparent",
    imageSrc: "/accenture.webp",
    monogram: "Ac",
  },
];

export const getRescueProjects = (tier: Tier) =>
  rescueProjects.filter((project) => project.tier === tier);
