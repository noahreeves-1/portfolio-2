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

- **Entrypoint**: `app/page.tsx` renders the v2 landing (`app/v2/components/*`)
- **Shared UI**: `components/ui/*` (magicui/shadcn-style primitives) and `app/components/layout/Footer.tsx`
- **Data**: `app/lib/data/rescueProjects.ts`
- **Analytics**: PostHog via `app/providers.tsx` + `app/PostHogProviderLazy.tsx`
- **Styling**: Tailwind CSS v4 with PostCSS
- **Path aliases**: `@/*` → repo root

## Key Dependencies

- **Animation**: `motion` (the successor to framer-motion)
- **UI primitives**: `@radix-ui/*`, `class-variance-authority`, `clsx`, `tailwind-merge`, `next-themes`
- **Analytics**: `posthog-js`

## Environment Variables

- `NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN`
- `NEXT_PUBLIC_POSTHOG_HOST`

## Deployment

Deployed on Vercel.
