import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/motion";
import { CASE_STUDIES } from "@/data/caseStudies";
import { CaseStudyCard } from "@/components/case-study/CaseStudyCard";

export default function CaseStudiesPage() {
  return (
    <section className="py-24 md:py-32 relative">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="mb-16"
        >
          <span className="text-primary font-medium tracking-wider uppercase text-sm mb-3 block">
            Engineering Deep Dive
          </span>
          <h1 className="font-serif text-h1 font-bold mb-6">Case Studies</h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            A closer look at how I diagnose and solve real performance, cost, and security
            problems in production systems.
          </p>
          <div className="h-px w-full bg-border max-w-md mt-8" />
        </motion.div>

        <motion.div
          variants={staggerContainer(0.12)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {CASE_STUDIES.map((study) => (
            <CaseStudyCard key={study.slug} study={study} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
