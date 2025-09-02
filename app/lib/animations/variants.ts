/**
 * Centralized animation variants for Framer Motion
 * All animation configurations in one place for consistency and reusability
 */

// ============================================
// Fade Animations
// ============================================

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: "easeInOut" as const,
    },
  },
};

export const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut" as const,
    },
  },
};

export const fadeInDown = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut" as const,
    },
  },
};

// ============================================
// Container Animations (with stagger effects)
// ============================================

export const containerWithStagger = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

export const containerWithDelayedStagger = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren" as const,
      staggerChildren: 0.15,
      delayChildren: 1.5,
    },
  },
};

// ============================================
// Spring Animations
// ============================================

export const springFadeUp = {
  hidden: { y: 50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring" as const,
      stiffness: 100,
      damping: 12,
    },
  },
};

export const springScale = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring" as const,
      stiffness: 150,
      damping: 15,
    },
  },
};

// ============================================
// Slide Animations
// ============================================

export const slideInFromLeft = {
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut" as const,
    },
  },
};

export const slideInFromRight = {
  hidden: { x: 100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut" as const,
    },
  },
};

// ============================================
// Scale Animations
// ============================================

export const scaleIn = {
  hidden: { scale: 0, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.4,
      ease: "easeOut" as const,
    },
  },
};

export const scaleInSpring = {
  initial: { opacity: 0, scale: 0 },
  animate: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.3,
      ease: "easeOut" as const,
    },
  },
};

// ============================================
// Hover Effects
// ============================================

export const hoverScale = {
  scale: 1.1,
  transition: {
    duration: 0.2,
    ease: "easeInOut" as const,
  },
};

export const hoverScaleSmall = {
  scale: 1.02,
  transition: {
    duration: 0.2,
    ease: "easeInOut" as const,
  },
};

// ============================================
// Tap Effects
// ============================================

export const tapScale = {
  scale: 0.95,
  transition: {
    duration: 0.1,
    ease: "easeInOut" as const,
  },
};

// ============================================
// Custom Delayed Animations
// ============================================

export const createDelayedFadeIn = (delay: number = 0) => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: "easeInOut" as const,
      delay,
    },
  },
});

export const createDelayedFadeInUp = (delay: number = 0) => ({
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut" as const,
      delay,
    },
  },
});

// ============================================
// Timeline/Sequence Animations
// ============================================

export const timelineMarker = (index: number, stepDuration: number = 0.8) => ({
  initial: { opacity: 0, scale: 0 },
  animate: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.3,
      delay: index * stepDuration,
      ease: "easeOut" as const,
    },
  },
});

export const timelineLine = (index: number, stepDuration: number = 0.8) => ({
  initial: { scaleX: 0 },
  animate: {
    scaleX: 1,
    transition: {
      duration: 0.4,
      delay: index * stepDuration + 0.3, // Start after marker
      ease: "easeOut" as const,
    },
  },
});

// ============================================
// Viewport-based Animation Settings
// ============================================

export const viewportSettings = {
  once: true,
  amount: 0.3,
};

export const viewportSettingsSmall = {
  once: true,
  amount: 0.1,
};

export const viewportSettingsLarge = {
  once: true,
  amount: 0.5,
};