// Shared copy for the hero prototypes. Single source of truth so all three
// variants render the same story and only the *treatment* differs.

export const NAME = "Noah Kim";

// Hero A — the verb that cycles. Each must read naturally in
// "I ___ what others can't."
export const VERBS = ["fix", "rebuild", "rescue", "ship"] as const;

// Short narrative arc (the story, compressed).
export const ARC =
  "I quit management consulting in 2021 and taught myself to code during the pandemic. My first app failed. Since then I've shipped for 7 clients, rebuilt a mobile app now past 50,000 downloads, and built Dx-Chart — a healthcare SaaS — entirely on my own.";

export type WorkStatus = "shipped" | "rescue";

export interface WorkItem {
  name: string;
  blurb: string; // a few words, no more
  metric: string; // the receipt
  href: string; // placeholder for now — wired up in the real build
  status: WorkStatus;
}

// Order = by impact / recency. Tunable later.
export const WORK: readonly WorkItem[] = [
  { name: "Dx-Chart", blurb: "Solo-built healthcare SaaS", metric: "Founder", href: "#", status: "shipped" },
  { name: "Crawler", blurb: "Rebuilt the mobile app", metric: "50k+ installs", href: "#", status: "rescue" },
  { name: "Knoxlabs", blurb: "B2B order automation", metric: "$600K flow", href: "#", status: "shipped" },
  { name: "Conin", blurb: "Data-pipeline rescue", metric: "12M rows", href: "#", status: "rescue" },
  { name: "Accenture", blurb: "Management consulting", metric: "5 yrs · 7 F500", href: "#", status: "shipped" },
] as const;
