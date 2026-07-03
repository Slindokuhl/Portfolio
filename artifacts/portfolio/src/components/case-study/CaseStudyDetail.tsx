import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { GlowCard } from "@/components/motion/GlowCard";
import { StatCounter } from "@/components/motion/StatCounter";
import { CodeBlock } from "@/components/case-study/CodeBlock";
import { fadeUp, staggerContainer, revealItem } from "@/lib/motion";
import { CASE_STUDIES, type CaseStudy } from "@/data/caseStudies";

function MetricsTable({ study }: { study: CaseStudy }) {
  return (
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
  );
}

export function CaseStudyDetail({ study }: { study: CaseStudy }) {
  const currentIndex = CASE_STUDIES.findIndex((s) => s.slug === study.slug);
  const nextStudy = CASE_STUDIES[(currentIndex + 1) % CASE_STUDIES.length];

  return (
    <article className="py-24 md:py-32">
      <div className="container mx-auto px-6 md:px-12 max-w-4xl">
        {/* Header */}
        <motion.div initial="hidden" animate="show" variants={fadeUp} className="mb-12">
          <Link
            href="/case-studies"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft size={16} />
            Back to Case Studies
          </Link>

          <div className="flex items-center gap-3 mb-4">
            <Badge variant="secondary" className="bg-secondary/80 text-secondary-foreground font-mono text-xs">
              {study.category}
            </Badge>
            <span className="text-xs text-muted-foreground uppercase tracking-wider">
              {study.project} &middot; {study.date}
            </span>
          </div>

          <h1 className="font-serif text-h1 font-bold mb-6">{study.title}</h1>
          <div className="h-px w-full bg-border max-w-md" />
        </motion.div>

        {/* Executive summary */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
        >
          <GlowCard glowColor={study.glowColor} className="p-6 md:p-8 mb-16">
            <p className="text-primary font-medium tracking-wider uppercase text-xs mb-6">
              Results at a Glance
            </p>
            <div className="flex flex-wrap gap-8">
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
          </GlowCard>
        </motion.div>

        {/* Challenge */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
          className="mb-16"
        >
          <h2 className="text-2xl font-serif font-bold text-foreground mb-4">The Challenge</h2>
          <p className="text-muted-foreground leading-relaxed">{study.problemStatement}</p>
        </motion.div>

        {/* Solution steps */}
        <div className="mb-16">
          <motion.h2
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp}
            className="text-2xl font-serif font-bold text-foreground mb-8"
          >
            The Solution
          </motion.h2>

          <motion.div
            variants={staggerContainer(0.1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
            className="space-y-10"
          >
            {study.solutionSteps.map((step, i) => (
              <motion.div key={step.title} variants={revealItem}>
                <div className="flex items-start gap-4 mb-4">
                  <span className="flex-shrink-0 h-8 w-8 rounded-full bg-primary/10 border border-primary/30 text-primary font-serif font-bold text-sm flex items-center justify-center">
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">{step.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                  </div>
                </div>
                {step.code && (
                  <div className="ml-12">
                    <CodeBlock {...step.code} />
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Metrics */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
          className="mb-16"
        >
          <h2 className="text-2xl font-serif font-bold text-foreground mb-6">Impact by the Numbers</h2>
          <MetricsTable study={study} />
        </motion.div>

        {/* Technical details */}
        {study.technicalDetails && (
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp}
            className="mb-16"
          >
            <h2 className="text-2xl font-serif font-bold text-foreground mb-6">Technical Architecture</h2>
            <GlowCard className="p-6 md:p-8">
              <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
                {study.technicalDetails.map((item) => (
                  <div key={item.label} className="flex flex-col">
                    <dt className="text-xs text-muted-foreground uppercase tracking-wider mb-1">{item.label}</dt>
                    <dd className="text-sm text-foreground/90 font-mono">{item.value}</dd>
                  </div>
                ))}
              </dl>
            </GlowCard>
          </motion.div>
        )}

        {/* Technologies */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
          className="mb-16"
        >
          <h2 className="text-2xl font-serif font-bold text-foreground mb-6">Technologies &amp; Tools</h2>
          <div className="flex flex-wrap gap-2">
            {study.technologies.map((tech) => (
              <Badge
                key={tech}
                variant="secondary"
                className="bg-secondary/80 hover:bg-secondary text-secondary-foreground font-mono text-xs"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </motion.div>

        {/* Lessons learned */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
          className="mb-16"
        >
          <h2 className="text-2xl font-serif font-bold text-foreground mb-6">Key Lessons</h2>
          <ul className="space-y-3">
            {study.lessonsLearned.map((lesson) => (
              <li key={lesson} className="flex items-start gap-3 text-muted-foreground leading-relaxed">
                <CheckCircle2 size={18} className="text-primary flex-shrink-0 mt-0.5" />
                {lesson}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Skills demonstrated */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
          className="mb-20"
        >
          <h2 className="text-2xl font-serif font-bold text-foreground mb-6">Skills Demonstrated</h2>
          <div className="flex flex-wrap gap-2">
            {study.skillsDemonstrated.map((skill) => (
              <Badge
                key={skill}
                className="bg-primary/10 text-primary border border-primary/30 font-mono text-xs"
              >
                {skill}
              </Badge>
            ))}
          </div>
        </motion.div>

        {/* Navigation */}
        <div className="flex items-center justify-between pt-8 border-t border-border">
          <Link
            href="/case-studies"
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft size={16} />
            Back to Case Studies
          </Link>
          <Link
            href={`/case-studies/${nextStudy.slug}`}
            className="flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
          >
            Next: {nextStudy.title}
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </article>
  );
}
