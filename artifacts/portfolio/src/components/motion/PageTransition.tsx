import { AnimatePresence, motion, type Variants } from "framer-motion";
import { useLocation } from "wouter";
import { type ReactNode } from "react";
import { EASE_CINEMATIC } from "@/lib/motion";

interface PageTransitionProps {
  children: ReactNode;
}

const variants: Variants = {
  initial: { opacity: 0, scale: 0.98, y: 8 },
  animate: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.3, ease: EASE_CINEMATIC },
  },
  exit: {
    opacity: 0,
    scale: 0.98,
    transition: { duration: 0.18, ease: EASE_CINEMATIC },
  },
};

export function PageTransition({ children }: PageTransitionProps) {
  const [location] = useLocation();

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div key={location} initial="initial" animate="animate" exit="exit" variants={variants}>
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
