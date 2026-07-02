import type { Transition, Variants } from "framer-motion";

export const EASE_CINEMATIC = [0.22, 1, 0.36, 1] as const;
export const EASE_SNAPPY = [0.4, 0, 0.2, 1] as const;

export const DURATIONS = {
  fast: 0.2,
  base: 0.4,
  slow: 0.7,
  cinematic: 1.2,
} as const;

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: DURATIONS.slow, ease: EASE_CINEMATIC },
  },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { duration: DURATIONS.base, ease: EASE_CINEMATIC },
  },
};

export const revealItem: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: DURATIONS.base, ease: EASE_CINEMATIC },
  },
};

export function staggerContainer(stagger = 0.08, delayChildren = 0): Variants {
  return {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: stagger, delayChildren },
    },
  };
}

export const pageExit: Transition = {
  duration: DURATIONS.fast,
  ease: EASE_CINEMATIC,
};

export const pageEnter: Transition = {
  duration: 0.3,
  ease: EASE_CINEMATIC,
};
