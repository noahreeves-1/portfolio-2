// Tech stack color mapping for consistent visual representation across project cards
// Colors are chosen to highlight expertise areas and create visual patterns

interface TechColorConfig {
  bg: string;
  border: string;
  text: string;
}

// Authentic brand color mapping for technologies
const TECH_COLORS: Record<string, TechColorConfig> = {
  // React Ecosystem - Sky Blue (React's brand color)
  'React': {
    bg: 'bg-sky-50',
    border: 'border-sky-200',
    text: 'text-sky-700'
  },
  'React Native': {
    bg: 'bg-cyan-50',
    border: 'border-cyan-200',
    text: 'text-cyan-700'
  },

  // Next.js - Black/Dark (Next.js brand)
  'Next.js': {
    bg: 'bg-gray-100',
    border: 'border-gray-400',
    text: 'text-gray-800'
  },
  'Next.js API Routes': {
    bg: 'bg-gray-50',
    border: 'border-gray-300',
    text: 'text-gray-700'
  },

  // TypeScript - Blue (TypeScript brand)
  'TypeScript': {
    bg: 'bg-blue-50',
    border: 'border-blue-200',
    text: 'text-blue-700'
  },

  // NestJS - Red (NestJS brand color)
  'NestJS': {
    bg: 'bg-red-50',
    border: 'border-red-200',
    text: 'text-red-700'
  },

  // Express - Neutral gray
  'Express': {
    bg: 'bg-gray-100',
    border: 'border-gray-300',
    text: 'text-gray-800'
  },

  // Node.js - Green (Node.js brand)
  'Node.js': {
    bg: 'bg-green-50',
    border: 'border-green-200',
    text: 'text-green-700'
  },

  // Databases - PostgreSQL Blue, MongoDB Green, Redis Red
  'PostgreSQL': {
    bg: 'bg-blue-100',
    border: 'border-blue-300',
    text: 'text-blue-800'
  },
  'MongoDB': {
    bg: 'bg-green-50',
    border: 'border-green-200',
    text: 'text-green-700'
  },
  'Redis': {
    bg: 'bg-red-100',
    border: 'border-red-300',
    text: 'text-red-800'
  },
  'Prisma': {
    bg: 'bg-slate-100',
    border: 'border-slate-300',
    text: 'text-slate-800'
  },

  // OpenAI - Green (OpenAI brand)
  'OpenAI': {
    bg: 'bg-green-100',
    border: 'border-green-300',
    text: 'text-green-800'
  },

  // Mobile/Tools
  'Expo': {
    bg: 'bg-slate-50',
    border: 'border-slate-200',
    text: 'text-slate-700'
  },
  'Vite': {
    bg: 'bg-purple-50',
    border: 'border-purple-200',
    text: 'text-purple-700'
  },
  'Tailwind CSS': {
    bg: 'bg-cyan-50',
    border: 'border-cyan-200',
    text: 'text-cyan-700'
  },
  'Framer Motion': {
    bg: 'bg-pink-50',
    border: 'border-pink-200',
    text: 'text-pink-700'
  },

  // Cloud/Infrastructure - Keep deployment neutral
  'Vercel': {
    bg: 'bg-gray-50',
    border: 'border-gray-200',
    text: 'text-gray-700'
  },
  'Railway': {
    bg: 'bg-purple-50',
    border: 'border-purple-200',
    text: 'text-purple-700'
  },
  'Docker': {
    bg: 'bg-blue-50',
    border: 'border-blue-200',
    text: 'text-blue-700'
  },

  // APIs & Services
  'TMDB': {
    bg: 'bg-yellow-50',
    border: 'border-yellow-200',
    text: 'text-yellow-800'
  },
  'TMDB API': {
    bg: 'bg-yellow-50',
    border: 'border-yellow-200',
    text: 'text-yellow-800'
  },
  'HubSpot': {
    bg: 'bg-orange-50',
    border: 'border-orange-200',
    text: 'text-orange-700'
  },
  'Clover API': {
    bg: 'bg-green-50',
    border: 'border-green-200',
    text: 'text-green-600'
  },
  'Retell AI': {
    bg: 'bg-indigo-50',
    border: 'border-indigo-200',
    text: 'text-indigo-700'
  },
  'Stripe': {
    bg: 'bg-purple-50',
    border: 'border-purple-200',
    text: 'text-purple-700'
  },
};

// Default color for unmapped technologies
const DEFAULT_TECH_COLOR: TechColorConfig = {
  bg: 'bg-gray-50',
  border: 'border-gray-200',
  text: 'text-gray-700'
};

/**
 * Get color configuration for a specific technology
 */
export const getTechColor = (techName: string): TechColorConfig => {
  return TECH_COLORS[techName] || DEFAULT_TECH_COLOR;
};

/**
 * Get combined CSS classes for a technology badge
 */
export const getTechBadgeClasses = (techName: string): string => {
  const colors = getTechColor(techName);
  return `${colors.bg} ${colors.border} ${colors.text}`;
};

/**
 * Get all available technologies (useful for development/testing)
 */
export const getAllSupportedTechs = (): string[] => {
  return Object.keys(TECH_COLORS);
};