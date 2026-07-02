import { motion, type HTMLMotionProps } from "framer-motion";
import { type ReactNode } from "react";
import { cn } from "@/lib/utils";

type GlowColor = "primary" | "cyan" | "violet";

const GLOW_SHADOW: Record<GlowColor, string> = {
  primary: "hover:shadow-[var(--shadow-glow-primary)]",
  cyan: "hover:shadow-[var(--shadow-glow-cyan)]",
  violet: "hover:shadow-[var(--shadow-glow-violet)]",
};

interface GlowCardProps extends HTMLMotionProps<"div"> {
  children: ReactNode;
  glowColor?: GlowColor;
  className?: string;
}

export function GlowCard({ children, glowColor = "primary", className, ...motionProps }: GlowCardProps) {
  return (
    <motion.div
      className={cn(
        "glass-panel border rounded-xl shadow-[var(--shadow-lg)] transition-shadow duration-500",
        "hover:border-primary/50",
        GLOW_SHADOW[glowColor],
        className,
      )}
      {...motionProps}
    >
      {children}
    </motion.div>
  );
}
