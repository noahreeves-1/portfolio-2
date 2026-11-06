# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
pnpm dev        # Dev server (Turbopack is the default in Next 16)
pnpm build      # Production build
pnpm start      # Start production server
pnpm lint       # ESLint
```

## Architecture

Next.js 16 portfolio site on the App Router with TypeScript.
Single landing page: one text-first column.

- **Entrypoint**: `app/page.tsx` is the landing page, wrapped in the `.monument-scope` theme.
  It is self-contained under `app/`: composition in `app/page.tsx`, all copy and data in `app/content.ts`, and section components in `app/components/*` (shared pieces in `app/components/lib/*`).
- **Root layout**: `app/layout.tsx` supplies `<html>`/`<body>`, fonts (`next/font`), site metadata (title/description/OG/favicon), and the PostHog provider.
- **Content**: `app/content.ts` is the single source for everything on the page: intro, experience entries, stories, visited countries, footer.
  Project lines describe the product, not what Noah did on it, and avoid numbers that go stale.
  Each project's `stack` follows one rule, written above `CLIENT_WORK` in that file: front end, back end, database, then at most two extras.
  TypeScript, hosting, ORMs, and one-job services such as payments are left out.
- **GitHub section**: `app/components/lib/githubContributions.ts` reads the public contribution calendar server-side, cached for a day (so the page revalidates daily).
  If the read or the parse fails, the section renders nothing.
- **Travel globe**: `app/components/TravelGlobe.tsx` is the only client component.
  It lazy-loads `d3-geo`, `topojson-client`, and the `world-atlas` map data when it nears the viewport.
- **Analytics**: PostHog via `app/providers.tsx` + `app/PostHogProviderLazy.tsx` + `app/PostHogPageView.tsx`
- **Styling**: Tailwind CSS v4 with PostCSS.
  Theme tokens and all page styles are scoped under `.monument-scope` in `app/globals.css`; shared base typography lives on `body`.
  Teal (`--m-accent`) marks data and green (`--m-live`) marks current work.
  Stack chips carry a soft tint of their brand's hue: brand colors live in `TECH_COLORS` (`app/components/lib/techIcons.ts`), and the `.m-tint` rules in `globals.css` set how strong the tint is for all of them at once.
- **Path aliases**: `@/*` → repo root

## Key Dependencies

- **Globe**: `d3-geo` + `topojson-client` + `world-atlas` (lazy-loaded)
- **Stack chip icons**: SVG paths in `app/components/lib/techIcons.ts`, mostly copied from Simple Icons (no runtime dependency).
  The file's header notes the few that come from elsewhere.
  Keep only icons that a `stack` in `app/content.ts` uses: every entry is sent with the page.
- **Class utilities**: `clsx` + `tailwind-merge` (the `cn` helper in `lib/utils.ts`)
- **Analytics**: `posthog-js`

## Environment Variables

- `NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN`
- `NEXT_PUBLIC_POSTHOG_HOST`

## Deployment

Deployed on Vercel.
