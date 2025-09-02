# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
# Development server with Turbopack
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start

# Run linting
pnpm lint
```

## Architecture

This is a Next.js 15 portfolio site using App Router with TypeScript. The codebase follows a component-based architecture with:

- **App Router Structure**: All pages and layouts are in `/app`
- **API Routes**: Contact form endpoint at `/app/api/send/route.ts` using Resend for email delivery
- **Components**: Modular React components in `/app/components/` including:
  - Hero section with Three.js animations (`HeroAnimation.tsx`)
  - Interactive map using React Leaflet (`Mapview.tsx`)
  - Project showcase with Framer Motion animations (`Projects.tsx`)
  - Contact form with email integration (`Contact.tsx`)
- **Analytics**: PostHog integration via provider pattern in `providers.tsx`
- **Styling**: Tailwind CSS v4 with PostCSS
- **Path Aliases**: 
  - `@/*` maps to root directory
  - `@public/*` maps to `/public/`

## Key Dependencies

- **UI/Animation**: Framer Motion for animations, Three.js with React Three Fiber for 3D graphics
- **Maps**: React Leaflet for interactive location display
- **Email**: Resend SDK for contact form email delivery
- **Analytics**: PostHog for user analytics

## Development Guidelines

From .cursor rules - always follow these preferences:

### Code Quality
- Prefer simple solutions and avoid code duplication
- Check for existing similar functionality before implementing new patterns
- Keep files under 200-300 lines, refactor when needed
- Never mock data for dev/prod environments (only for tests)
- Focus only on code relevant to the task, don't touch unrelated areas
- Never overwrite .env files without confirmation

### Patterns
- TypeScript for everything
- Next.js for both frontend and backend
- No database integration
- Node tests for testing

### Environment Handling
- Write code that accounts for dev, test, and prod environments
- Required environment variables:
  - `RESEND_API_KEY`: For email functionality
  - `MY_EMAIL`: Recipient email for contact form
  - `NEXT_PUBLIC_POSTHOG_KEY`: For analytics (if enabled)
  - `NEXT_PUBLIC_POSTHOG_HOST`: PostHog host URL

## Important Notes

- The site is deployed on Vercel/Cloudflare (wrangler.toml present)
- Leaflet CSS is loaded via CDN in the root layout
- The portfolio includes interactive 3D elements and requires browser WebGL support