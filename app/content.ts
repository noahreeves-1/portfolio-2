// All copy and data for the landing page, in one place.
// Rule for project lines: say what the product is, not what I did on it.
// Rule for numbers: only ones that cannot go stale (the GitHub figures are fetched live).
// No em dashes anywhere in copy.

const CAL_URL = "https://cal.com/noahkim/30min";
const GITHUB_USER = "noahreeves-1";
const GITHUB_URL = `https://github.com/${GITHUB_USER}/`;
const LINKEDIN_URL = "https://www.linkedin.com/in/noahh-kim/";
const OSMOS_URL = "https://www.osmos.co/";
const DXCHART_URL = "https://dx-chart.com/";

// A run of inline copy; `href` turns the run into a link.
export interface TextPart {
  readonly text: string;
  readonly href?: string;
}

interface Link {
  readonly label: string;
  readonly href: string;
}

// ── SITE / HEADER ─────────────────────────────────────────────────────────────
export const SITE = {
  name: "Noah Kim",
  site: "noahk.im",
  nav: [
    { label: "GitHub", href: GITHUB_URL },
    { label: "LinkedIn", href: LINKEDIN_URL },
  ] as readonly Link[],
} as const;

// ── INTRO ─────────────────────────────────────────────────────────────────────
export const INTRO: {
  readonly headline: string;
  readonly title: readonly TextPart[];
  readonly bio: readonly string[];
  readonly cta: Link;
} = {
  headline: "Good with numbers. Better with people.",
  title: [
    { text: "Backend engineer at " },
    { text: "OSMOS", href: OSMOS_URL },
    { text: ". Co-founder of " },
    { text: "Dx-Chart", href: DXCHART_URL },
    { text: "." },
  ],
  bio: [
    "I got a perfect math score on the ACT, so I probably should have studied math or engineering. But I liked people and psychology, so I studied marketing. Then I ended up doing analytics, consulting, and engineering anyway.",
    "At OSMOS I work with early-stage founders to turn their ideas into a working MVP. My title is backend engineer, but I also build web apps and a little mobile. I take a data-first approach, so I always start with what the data should look like. I ask a lot of questions, and people tell me they're good ones.",
    "I like people and I value my relationships. I still have friends from high school and college. I have a small army of AI sidekicks running parts of my life. Off the clock I exercise, try new ChatGPT recipes, and read. I'm a builder at heart, so I'm always working on something of my own.",
  ],
  cta: { label: "Book 30 minutes", href: CAL_URL },
};

// ── EXPERIENCE ────────────────────────────────────────────────────────────────
// `current` marks work I am doing right now: it gets the green dot and a bolder
// name. An entry with no `url` renders as plain text (not launched, or site gone).
export interface Entry {
  readonly name: string;
  readonly when: string;
  readonly desc: string;
  readonly stack?: readonly string[];
  readonly url?: string;
  readonly current?: boolean;
}

// How `stack` is chosen. Every row answers "what is this built with?" the same
// way and in the same order: front end (React for web, Expo or Swift for mobile),
// back end, database, then at most two extras that set the project apart (a
// queue, search, the AI model when AI is the product). Next.js is listed only
// when it is also the back end. Left out: TypeScript, because it is in every
// project and the frameworks already imply it; tools that sit under another chip
// (ORMs, Vite, Tailwind); hosting; and services that do one job behind an API
// key (payments, sign-in, email).

// A place I work, with the client products I build there nested under it.
export interface Org {
  readonly name: string;
  readonly url: string;
  readonly when: string;
  readonly desc: string;
  readonly entries: readonly Entry[];
}

export const CLIENT_WORK: {
  readonly title: string;
  readonly org: Org;
  readonly entries: readonly Entry[];
} = {
  title: "Client work",
  org: {
    name: "OSMOS",
    url: OSMOS_URL,
    when: "Oct 2025 - now",
    desc: "Backend engineer on client products. I like my schemas tidy and my deploys boring.",
    entries: [
      {
        name: "Crawler",
        when: "Oct 2025 - now",
        desc: "A happy hour finder for New York City, on iOS and Android.",
        stack: ["React", "Expo", "NestJS", "Postgres", "Redis", "BullMQ"],
        url: "https://apps.apple.com/us/app/crawler-nyc-bars-night-club/id6477375437",
        current: true,
      },
      {
        name: "HeyMe",
        when: "Jul 2026 - now",
        desc: "A wellness app where you talk with an AI version of your future self.",
        stack: ["React", "Expo", "NestJS", "Postgres", "Claude"],
        current: true,
      },
      {
        name: "BumpSeat",
        when: "Oct 2026 - now",
        desc: "An iOS app for buying a better seat at a discount once a live event has started.",
        stack: ["Swift", "NestJS", "Postgres"],
        current: true,
      },
      {
        name: "Conin",
        when: "Nov 2025 - Jan 2026",
        desc: "A web platform that uses AI to analyze every residential property in New York City for investment opportunities.",
        stack: ["React", "NestJS", "Postgres", "BullMQ", "Claude"],
        url: "https://conin.io/",
      },
    ],
  },
  entries: [
    {
      name: "SpeedScribeAI",
      when: "Sep - Dec 2025",
      desc: "AI speed-reading practice for the ACT.",
      stack: ["React", "Next.js", "Supabase", "OpenAI"],
      url: "https://www.speedscribeai.com/",
    },
    {
      name: "Knoxlabs",
      when: "May - Nov 2025",
      desc: "A self-service B2B ordering portal for an XR hardware company.",
      stack: ["React", "NestJS", "Firebase"],
      url: "https://www.knoxlabs.com/",
    },
    {
      name: "Invenboost",
      when: "Jul - Sep 2025",
      desc: "An AI voice agent that answers missed calls and books appointments.",
      stack: ["React", "Express", "Supabase", "Retell AI"],
    },
    {
      name: "ClearThinker",
      when: "Jun - Jul 2025",
      desc: "A quiz game that teaches logical fallacies with fake tweets written from the day's headlines.",
      stack: ["React", "Next.js", "Redis", "Claude"],
      url: "https://clearthinkeracademy.com/",
    },
  ],
};

export const STARTUPS: { readonly title: string; readonly entries: readonly Entry[] } = {
  title: "Startups and personal projects",
  entries: [
    {
      name: "Dx-Chart",
      when: "Dec 2025 - now",
      desc: "Co-founder. HIPAA-ready AI charting for acupuncturists.",
      stack: ["React", "NestJS", "Postgres", "Gemini", "Claude"],
      url: DXCHART_URL,
      current: true,
    },
    {
      name: "Muffin",
      when: "May 2023 - Mar 2025",
      desc: "Co-founder. My first startup, an app for personalized food recommendations.",
      stack: ["React", "Expo", "NestJS", "Postgres", "Elasticsearch"],
      url: "https://muffinapp.io/",
    },
  ],
};

// A job and school. Internships are stories, so they live in FLEXES instead.
export const BEFORE: { readonly title: string; readonly entries: readonly Entry[] } = {
  title: "Before engineering",
  entries: [
    {
      name: "Accenture",
      when: "Nov 2016 - Sep 2021",
      desc: "Digital Strategy Consultant. 10 projects at 7 Fortune 500 clients on all things data: strategy, analytics, implementation.",
      stack: ["SQL", "Tableau", "MDM", "RPA", "Salesforce"],
      url: "https://www.accenture.com/",
    },
    {
      name: "Southern Methodist University",
      when: "2011 - 2016",
      desc: "Bachelor's in marketing, then an MS in Business Analytics in the second cohort of a brand-new program.",
      url: "https://www.smu.edu/",
    },
  ],
};

// ── FLEXES ────────────────────────────────────────────────────────────────────
// One bold claim, then the dry follow-up.
export interface Flex {
  readonly claim: string;
  readonly detail: string;
}

export const FLEXES: { readonly title: string; readonly items: readonly Flex[] } = {
  title: "Things I'll bring up if you let me",
  items: [
    {
      claim: "Started as an unpaid intern.",
      detail: "Two weeks in, I handed the CEO a three-page marketing plan, and I ended the summer leading more than ten interns.",
    },
    {
      claim: "Won Franchisee of the Year out of 275+ locations.",
      detail: "That was a glass repair franchise, and I was the intern running their entire marketing (sales up 15%, ad spend down 13%).",
    },
    {
      claim: "Learned to code in Southeast Asia.",
      detail: "I quit consulting in 2021 and moved there for over a year to teach myself.",
    },
    {
      claim: "Led the backend on nearly every product on this page.",
      detail: "The one exception got 100K plays in its first month.",
    },
  ],
};

// ── GITHUB ────────────────────────────────────────────────────────────────────
// The numbers and the heatmap are read from the public profile once a day
// (app/components/lib/githubContributions.ts). If that read fails, the section hides.
export const GITHUB = {
  title: "On GitHub",
  user: GITHUB_USER,
  url: GITHUB_URL,
} as const;

// ── TRAVEL ────────────────────────────────────────────────────────────────────
// Countries I have visited, keyed by ISO 3166-1 numeric code (what the globe's
// map data uses). Add a country here and both the globe and the count update.
// The map is low-resolution, so a very small country (Singapore, Hong Kong,
// Monaco) raises the count but has no shape to fill in.
export interface Country {
  readonly name: string;
  readonly iso: string;
}

export const TRAVEL: { readonly title: string; readonly visited: readonly Country[] } = {
  title: "Travel",
  visited: [
    { name: "South Korea", iso: "410" },
    { name: "Japan", iso: "392" },
    { name: "China", iso: "156" },
    { name: "United States", iso: "840" },
    { name: "Canada", iso: "124" },
    { name: "Mexico", iso: "484" },
    { name: "United Kingdom", iso: "826" },
    { name: "France", iso: "250" },
    { name: "Italy", iso: "380" },
    { name: "Netherlands", iso: "528" },
    { name: "Poland", iso: "616" },
    { name: "Czechia", iso: "203" },
    { name: "Cambodia", iso: "116" },
    { name: "Thailand", iso: "764" },
    { name: "Laos", iso: "418" },
    { name: "Malaysia", iso: "458" },
    { name: "Vietnam", iso: "704" },
    { name: "Philippines", iso: "608" },
    { name: "Brazil", iso: "076" },
    { name: "Argentina", iso: "032" },
  ],
};

// ── FOOTER ────────────────────────────────────────────────────────────────────
export const FOOTER = {
  lead: "Hiring?",
  cta: { label: "Let's talk.", href: CAL_URL },
  socials: [
    { label: "LinkedIn", href: LINKEDIN_URL },
    { label: "GitHub", href: GITHUB_URL },
  ] as readonly Link[],
  quote: {
    text: "Don't pray for an easy life. Pray for the strength to endure a difficult one.",
    by: "Bruce Lee",
  },
} as const;
