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

Next.js 16 portfolio site on the App Router with TypeScript. Single landing page; the
earlier v2–v5 redesigns and `proto` experiments have been removed.

- **Entrypoint**: `app/page.tsx` is the landing page, wrapped in the `.v6-scope` theme. It is
  self-contained under `app/`: composition in `app/page.tsx`, display copy/data framing in
  `app/content.ts`, and section components in `app/components/*` (shared helpers in
  `app/components/lib/*`).
- **Root layout**: `app/layout.tsx` supplies `<html>`/`<body>`, fonts (`next/font`), site
  metadata (title/description/OG/favicon), and the PostHog provider.
- **Data**: `app/lib/data/rescueProjects.ts` is the canonical source of project facts;
  `app/content.ts` layers landing-specific copy on top of it.
- **Analytics**: PostHog via `app/providers.tsx` + `app/PostHogProviderLazy.tsx` + `app/PostHogPageView.tsx`
- **Styling**: Tailwind CSS v4 with PostCSS. Theme tokens are scoped under `.v6-scope` in
  `app/globals.css`; shared typography/base styles live in `:root`.
- **Path aliases**: `@/*` → repo root

## Key Dependencies

- **Animation**: `motion` (the successor to framer-motion)
- **Animated numbers**: `@number-flow/react` (trust-bar counters)
- **Class utilities**: `clsx` + `tailwind-merge` (the `cn` helper in `lib/utils.ts`)
- **Analytics**: `posthog-js`

## Environment Variables

- `NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN`
- `NEXT_PUBLIC_POSTHOG_HOST`

## Deployment

Deployed on Vercel.
