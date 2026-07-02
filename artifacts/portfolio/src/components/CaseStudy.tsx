import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { GlowCard } from "@/components/motion/GlowCard";
import { StatCounter } from "@/components/motion/StatCounter";
import { fadeUp, EASE_CINEMATIC } from "@/lib/motion";
import type { CaseStudy as CaseStudyData } from "@/data/caseStudies";

interface CaseStudyProps {
  study: CaseStudyData;
  /** When false, the full write-up is always shown and the toggle is hidden — for dedicated case study pages. */
  collapsible?: boolean;
}

export function CaseStudy({ study, collapsible = true }: CaseStudyProps) {
  const [expanded, setExpanded] = useState(!collapsible);

  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-100px" }}
      variants={fadeUp}
    >
      <GlowCard glowColor="cyan" className="p-8 md:p-10">
        <span className="text-primary font-medium tracking-wider uppercase text-sm mb-3 block">
          {study.kicker}
        </span>
        <h3 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-6">
          {study.title}
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6 text-sm">
          <div>
            <p className="text-muted-foreground uppercase tracking-wider text-xs mb-1">Challenge</p>
            <p className="text-foreground/90">{study.challenge}</p>
          </div>
          <div>
            <p className="text-muted-foreground uppercase tracking-wider text-xs mb-1">Solution</p>
            <p className="text-foreground/90">{study.solution}</p>
          </div>
          <div>
            <p className="text-muted-foreground uppercase tracking-wider text-xs mb-1">Result</p>
            <p className="text-foreground/90">{study.result}</p>
          </div>
        </div>

        <div className="flex flex-wrap gap-8 mb-8 py-6 border-y border-border">
          {study.highlightStats.map((stat) => (
            <StatCounter
              key={stat.label}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
              valueClassName="text-3xl md:text-4xl"
              duration={1.6}
            />
          ))}
        </div>

        {collapsible && (
          <button
            onClick={() => setExpanded((v) => !v)}
            className="flex items-center gap-2 text-primary font-medium text-sm hover:text-primary/80 transition-colors"
          >
            {expanded ? "Hide Full Case Study" : "View Full Case Study"}
            <motion.span
              animate={{ rotate: expanded ? 180 : 0 }}
              transition={{ duration: 0.3, ease: EASE_CINEMATIC }}
            >
              <ChevronDown size={16} />
            </motion.span>
          </button>
        )}

        <AnimatePresence initial={false}>
          {expanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4, ease: EASE_CINEMATIC }}
              className="overflow-hidden"
            >
              <div className="pt-8 space-y-8">
                <div>
                  <h4 className="text-lg font-serif font-semibold text-foreground mb-3">
                    Problem Statement
                  </h4>
                  <p className="text-muted-foreground leading-relaxed">{study.problemStatement}</p>
                </div>

                <div>
                  <h4 className="text-lg font-serif font-semibold text-foreground mb-3">
                    Technical Approach
                  </h4>
                  <p className="text-muted-foreground leading-relaxed mb-4">{study.technicalApproach}</p>
                  <pre className="bg-background border border-border rounded-lg p-4 overflow-x-auto text-xs md:text-sm leading-relaxed">
                    <code className="font-mono text-foreground/90">{study.codeSnippet}</code>
                  </pre>
                </div>

                <div>
                  <h4 className="text-lg font-serif font-semibold text-foreground mb-3">
                    Metrics &amp; Results
                  </h4>
                  <div className="overflow-x-auto rounded-lg border border-border">
                    <table className="w-full text-sm text-left">
                      <thead>
                        <tr className="bg-secondary/50 text-muted-foreground uppercase text-xs tracking-wider">
                          <th className="px-4 py-3 font-medium">Metric</th>
                          <th className="px-4 py-3 font-medium">Before</th>
                          <th className="px-4 py-3 font-medium">After</th>
                          <th className="px-4 py-3 font-medium">Change</th>
                        </tr>
                      </thead>
                      <tbody>
                        {study.metrics.map((row, i) => (
                          <tr key={row.metric} className={i % 2 === 0 ? "bg-transparent" : "bg-secondary/20"}>
                            <td className="px-4 py-3 text-foreground/90">{row.metric}</td>
                            <td className="px-4 py-3 text-muted-foreground">{row.before}</td>
                            <td className="px-4 py-3 text-foreground/90">{row.after}</td>
                            <td className="px-4 py-3 text-primary font-semibold">{row.change}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-serif font-semibold text-foreground mb-3">
                    Skills Demonstrated
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {study.skillsDemonstrated.map((skill) => (
                      <Badge
                        key={skill}
                        variant="secondary"
                        className="bg-secondary/80 hover:bg-secondary text-secondary-foreground font-mono text-xs"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </GlowCard>
    </motion.div>
  );
}
