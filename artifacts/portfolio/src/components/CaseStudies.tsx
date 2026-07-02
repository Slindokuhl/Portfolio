import { motion } from "framer-motion";
import { CaseStudy } from "@/components/CaseStudy";
import { fadeUp } from "@/lib/motion";
import { DC_DELIVERY_CASE_STUDY } from "@/data/caseStudies";

export function CaseStudies() {
  return (
    <section id="case-study" className="py-24 md:py-32 relative">
      <div className="container mx-auto px-6 md:px-12 max-w-4xl">
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
            A closer look at how I diagnose and solve real performance and cost problems in
            production systems.
          </p>
          <div className="h-px w-full bg-border max-w-md mt-8" />
        </motion.div>

        <CaseStudy study={DC_DELIVERY_CASE_STUDY} collapsible={false} />
      </div>
    </section>
  );
}
