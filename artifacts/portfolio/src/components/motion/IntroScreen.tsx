import { useEffect, useState } from "react";
import { AnimatePresence, motion, animate, useMotionValue, useMotionTemplate } from "framer-motion";
import { EASE_CINEMATIC } from "@/lib/motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";

const SESSION_KEY = "portfolio-intro-seen";

// The star's slow, sweeping orbit — wide circling arc that spirals inward
// toward the logo at the very end, Paramount-logo style, before impact.
const ORBIT_SAMPLES = 32;
const ORBIT_RADIUS = 170;
const ORBIT_START_ANGLE = -70; // degrees
const ORBIT_SWEEP = 300; // degrees of arc traced before convergence

const ORBIT_PATH = Array.from({ length: ORBIT_SAMPLES + 1 }, (_, i) => {
  const t = i / ORBIT_SAMPLES;
  const angleRad = ((ORBIT_START_ANGLE + t * ORBIT_SWEEP) * Math.PI) / 180;
  const radius = ORBIT_RADIUS * (1 - Math.pow(t, 3)); // stays wide, dives in near the end
  return { x: radius * Math.cos(angleRad), y: radius * Math.sin(angleRad) };
});
const PATH_X = ORBIT_PATH.map((p) => p.x);
const PATH_Y = ORBIT_PATH.map((p) => p.y);
const PATH_TIMES = ORBIT_PATH.map((_, i) => i / ORBIT_SAMPLES);

const ORBIT_START = 0.2;
const ORBIT_DURATION = 2.3;
const IMPACT = ORBIT_START + ORBIT_DURATION;
const BURST_DURATION = 0.5;
const REVEAL_START = IMPACT + 0.15;
const REVEAL_DURATION = 0.8;

const STAR_ECHOES = [
  { delay: 0, size: 14, opacity: 1 },
  { delay: 0.07, size: 10, opacity: 0.55 },
  { delay: 0.14, size: 7, opacity: 0.32 },
  { delay: 0.21, size: 5, opacity: 0.18 },
];

// Deterministic burst-particle directions (not randomized per render)
const PARTICLES = Array.from({ length: 12 }, (_, i) => {
  const angle = (i / 12) * Math.PI * 2;
  const distance = 70 + (i % 3) * 35;
  return {
    x: Math.cos(angle) * distance,
    y: Math.sin(angle) * distance,
    delay: (i % 4) * 0.02,
  };
});

export function IntroScreen() {
  const prefersReducedMotion = useReducedMotion();
  const [visible, setVisible] = useState(() => {
    if (typeof window === "undefined") return false;
    return !sessionStorage.getItem(SESSION_KEY);
  });

  const radius = useMotionValue(0);
  // Transparent = hole (reveals the real page/galaxy behind); white = overlay stays opaque.
  const maskImage = useMotionTemplate`radial-gradient(circle at 50% 50%, transparent 0%, transparent ${radius}%, white calc(${radius}% + 1%), white 100%)`;

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

    const controls = animate(radius, 150, {
      duration: REVEAL_DURATION,
      delay: REVEAL_START,
      ease: EASE_CINEMATIC,
    });
    controls.then(() => dismiss());

    const handleSkip = () => dismiss();
    window.addEventListener("keydown", handleSkip);
    window.addEventListener("pointerdown", handleSkip);
    return () => {
      controls.stop();
      window.removeEventListener("keydown", handleSkip);
      window.removeEventListener("pointerdown", handleSkip);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [visible, prefersReducedMotion]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.4, ease: EASE_CINEMATIC } }}
          className="fixed inset-0 z-[100] cursor-pointer overflow-hidden"
        >
          {/* Dark overlay — splits open from the impact point, revealing the galaxy already rendering behind it */}
          <motion.div
            style={{ WebkitMaskImage: maskImage, maskImage }}
            className="absolute inset-0 bg-background"
          />

          {/* Logo — fades in early, holds through the orbit, fades out right at impact */}
          <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            transition={{ duration: 0.3, delay: IMPACT, ease: EASE_CINEMATIC }}
            className="absolute inset-0 flex items-center justify-center pointer-events-none"
          >
            <motion.span
              initial={{ opacity: 0, scale: 0.85, letterSpacing: "0.3em" }}
              animate={{ opacity: 1, scale: 1, letterSpacing: "0.05em" }}
              transition={{ duration: 0.9, delay: 0.2, ease: EASE_CINEMATIC }}
              className="font-serif text-5xl md:text-6xl font-bold text-foreground"
            >
              S.A.<span className="text-primary">N</span>
            </motion.span>
          </motion.div>

          {/* The orbiting star and its trailing echoes — sweeps wide, then spirals in to impact */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            {STAR_ECHOES.map((echo, i) => (
              <motion.div
                key={i}
                initial={{ x: PATH_X[0], y: PATH_Y[0], opacity: 0 }}
                animate={{
                  x: PATH_X,
                  y: PATH_Y,
                  opacity: [0, echo.opacity, echo.opacity, 0],
                }}
                transition={{
                  x: { duration: ORBIT_DURATION, delay: ORBIT_START + echo.delay, times: PATH_TIMES, ease: "linear" },
                  y: { duration: ORBIT_DURATION, delay: ORBIT_START + echo.delay, times: PATH_TIMES, ease: "linear" },
                  opacity: {
                    duration: ORBIT_DURATION,
                    delay: ORBIT_START + echo.delay,
                    times: [0, 0.06, 0.9, 1],
                    ease: "easeInOut",
                  },
                }}
                className="absolute rounded-full"
                style={{
                  width: echo.size,
                  height: echo.size,
                  background: "radial-gradient(circle, #fff 0%, #facc15 55%, transparent 100%)",
                  boxShadow: `0 0 ${echo.size * 1.4}px ${echo.size * 0.4}px rgba(250,204,21,0.7)`,
                }}
              />
            ))}
          </div>

          {/* Impact flash */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 3.2, opacity: [0, 0.9, 0] }}
              transition={{ duration: BURST_DURATION, delay: IMPACT, ease: "easeOut" }}
              style={{
                width: 60,
                height: 60,
                borderRadius: "9999px",
                background: "radial-gradient(circle, #fff 0%, #facc15 40%, transparent 75%)",
                mixBlendMode: "screen",
              }}
            />
          </div>

          {/* Burst particles */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            {PARTICLES.map((p, i) => (
              <motion.span
                key={i}
                initial={{ x: 0, y: 0, opacity: 1, scale: 1 }}
                animate={{ x: p.x, y: p.y, opacity: 0, scale: 0.3 }}
                transition={{
                  duration: 0.55,
                  delay: IMPACT + p.delay,
                  ease: EASE_CINEMATIC,
                }}
                className="absolute h-1.5 w-1.5 rounded-full"
                style={{
                  background: i % 2 === 0 ? "#facc15" : "#ffffff",
                  boxShadow: "0 0 8px 2px rgba(250,204,21,0.6)",
                }}
              />
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
