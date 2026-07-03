import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, Zap } from "lucide-react";
import { GlowCard } from "@/components/motion/GlowCard";
import { revealItem } from "@/lib/motion";
import type { CaseStudy } from "@/data/caseStudies";

const CATEGORY_ICON: Record<string, typeof ShieldCheck> = {
  Infrastructure: ShieldCheck,
  Performance: Zap,
};

export function CaseStudyCard({ study }: { study: CaseStudy }) {
  const Icon = CATEGORY_ICON[study.category] ?? Zap;

  return (
    <motion.div variants={revealItem}>
      <Link href={`/case-studies/${study.slug}`}>
        <GlowCard glowColor={study.glowColor} className="p-6 md:p-8 h-full flex flex-col cursor-pointer group">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-10 w-10 rounded-full bg-secondary flex items-center justify-center text-primary flex-shrink-0">
              <Icon size={18} />
            </div>
            <span className="text-xs font-medium tracking-wider uppercase text-muted-foreground">
              {study.category}
            </span>
          </div>

          <h3 className="text-xl font-serif font-bold text-foreground mb-1 leading-snug">
            {study.title}
          </h3>
          <p className="text-xs text-muted-foreground uppercase tracking-wider mb-4">
            {study.project} &middot; {study.date}
          </p>

          <p className="text-sm text-muted-foreground leading-relaxed mb-6 flex-1">
            {study.summary}
          </p>

          <div className="flex flex-wrap gap-2 mb-6">
            {study.highlightStats.slice(0, 3).map((stat) => (
              <span
                key={stat.label}
                className="text-xs bg-secondary text-foreground/90 border border-card-border px-2.5 py-1 rounded-full font-medium"
              >
                {stat.value}
                {stat.suffix} {stat.label}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-2 text-primary font-medium text-sm mt-auto">
            Read Full Study
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </div>
        </GlowCard>
      </Link>
    </motion.div>
  );
}
