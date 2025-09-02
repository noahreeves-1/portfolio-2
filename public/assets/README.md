# Asset Organization Guide

## Current State
The public folder contains 117 files (49 images, 68 SVGs) in a flat structure. Due to the extensive number of imports throughout the codebase, we're implementing a gradual migration strategy.

## New Asset Organization Structure

All NEW assets should be placed in the following structure:

```
/public/assets/
├── images/
│   ├── projects/      # Project screenshots and demos
│   ├── profile/       # Profile photos and personal images
│   └── misc/          # Other images
├── logos/
│   ├── companies/     # Company logos (Accenture, AT&T, etc.)
│   ├── tech/          # Technology logos (React, Node.js, etc.)
│   └── brands/        # Brand logos
├── icons/             # UI icons and small graphics
└── illustrations/     # SVG illustrations and graphics
```

## Migration Strategy

### Phase 1: New Assets Only (Current)
- All NEW assets should follow the organized structure above
- Existing assets remain in `/public/` to avoid breaking imports
- Document all new asset locations

### Phase 2: Gradual Migration (Future)
- As components are updated, migrate their assets
- Update imports one component at a time
- Test thoroughly after each migration

### Phase 3: Complete Migration (Future)
- Once all components are updated, remove old assets
- Update any remaining references
- Clean up root `/public/` folder

## Asset Naming Conventions

- Use kebab-case for all files: `my-image-name.png`
- Include descriptive names: `react-logo.svg` not `logo1.svg`
- Add size suffix for responsive images: `hero-mobile.png`, `hero-desktop.png`
- Use appropriate formats:
  - `.svg` for logos and icons
  - `.webp` for photos (with `.png` fallback)
  - `.png` for screenshots and images with transparency

## Import Examples

```typescript
// Current (legacy assets)
import logo from '/public/accenture.webp'

// New organized assets
import logo from '/public/assets/logos/companies/accenture.webp'
```

## Current Asset Categories

Based on analysis, here's how existing assets would be organized:

### Company Logos (17 files)
- accenture.webp, att.webp, clover-logo.png, etc.

### Technology Logos (68 SVGs)
- react.svg, nodejs.svg, typescript.svg, etc.

### Project Screenshots (15 files)
- clear-thinker-game.png, ai-voice-agent-screenshot.png, etc.

### UI Icons (10 files)
- brush.svg, code.svg, hammer.svg, etc.

### Illustrations (7 files)
- preparation.svg, etc.

## Notes

- This gradual approach prevents breaking changes
- Focus on organization for new assets first
- Migration can happen organically as code is updated
- Maintains stability while improving organization