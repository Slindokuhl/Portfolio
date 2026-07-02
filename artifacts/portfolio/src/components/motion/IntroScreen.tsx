import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { EASE_CINEMATIC } from "@/lib/motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";

const SESSION_KEY = "portfolio-intro-seen";

export function IntroScreen() {
  const prefersReducedMotion = useReducedMotion();
  const [visible, setVisible] = useState(() => {
    if (typeof window === "undefined") return false;
    return !sessionStorage.getItem(SESSION_KEY);
  });

  function dismiss() {
    sessionStorage.setItem(SESSION_KEY, "1");
    setVisible(false);
  }

  useEffect(() => {
    if (!visible) return;
    if (prefersReducedMotion) {
      dismiss();
      return;
    }

    const timer = setTimeout(dismiss, 2200);
    const handleKey = () => dismiss();
    window.addEventListener("keydown", handleKey);
    window.addEventListener("pointerdown", handleKey);
    return () => {
      clearTimeout(timer);
      window.removeEventListener("keydown", handleKey);
      window.removeEventListener("pointerdown", handleKey);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [visible, prefersReducedMotion]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.5, ease: EASE_CINEMATIC } }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-background cursor-pointer"
        >
          <motion.div
            initial={{ clipPath: "inset(0 100% 0 0)" }}
            exit={{ clipPath: "inset(0 0 0 100%)", transition: { duration: 0.6, ease: EASE_CINEMATIC } }}
            className="absolute inset-0 bg-background"
          />
          <motion.span
            initial={{ opacity: 0, scale: 0.85, letterSpacing: "0.3em" }}
            animate={{ opacity: 1, scale: 1, letterSpacing: "0.05em" }}
            transition={{ duration: 0.9, ease: EASE_CINEMATIC }}
            className="relative font-serif text-5xl md:text-6xl font-bold text-foreground"
          >
            S.A.<span className="text-primary">N</span>
          </motion.span>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.4, ease: EASE_CINEMATIC, delay: 0.2 }}
            className="absolute bottom-[38%] h-px w-40 bg-primary origin-center"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
