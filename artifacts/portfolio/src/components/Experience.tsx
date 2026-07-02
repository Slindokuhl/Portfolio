import { motion } from "framer-motion";
import { FRONTEND_SKILLS, BACKEND_SKILLS, EXTENDED_CAPABILITIES, type Skill } from "@/data/skills";
import { GlowCard } from "@/components/motion/GlowCard";
import { StatCounter } from "@/components/motion/StatCounter";
import { staggerContainer, revealItem, fadeUp } from "@/lib/motion";

function SkillCard({ skill }: { skill: Skill }) {
  return (
    <GlowCard
      variants={revealItem}
      className="p-5 group relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-150 duration-500" />
      <div className="flex items-center gap-4 mb-4 relative z-10">
        <div
          className="p-3 rounded-lg bg-secondary text-2xl flex-shrink-0"
          style={{ color: skill.color }}
        >
          <skill.icon />
        </div>
        <div className="flex-1 flex items-center justify-between gap-2">
          <div>
            <h4 className="font-semibold text-foreground">{skill.name}</h4>
            <span className="text-xs text-muted-foreground uppercase tracking-wider">
              {skill.label}
            </span>
          </div>
          <StatCounter value={skill.level} suffix="%" valueClassName="text-lg" duration={1.2} />
        </div>
      </div>
      <div className="w-full h-1.5 bg-secondary rounded-full overflow-hidden relative z-10">
        <motion.div
          className="h-full bg-primary origin-left"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: skill.level / 100 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
        />
      </div>
    </GlowCard>
  );
}

export function Experience() {
  return (
    <section id="experience" className="py-24 md:py-32 relative">
      <div className="container mx-auto px-6 md:px-12">

        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="mb-16 md:mb-24"
        >
          <h2 className="font-serif text-h1 font-bold mb-6 relative inline-block">
            Experience &amp; Skills
            <motion.span
              className="absolute -bottom-2 left-0 h-[3px] bg-primary rounded-full origin-left"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              style={{ width: "100%" }}
            />
          </h2>
          <div className="h-px w-full bg-border max-w-2xl mb-12 mt-6" />
          <div className="max-w-3xl space-y-4">
            <p className="text-lg text-muted-foreground leading-relaxed">
              12 months internship at Mangosuthu University of Technology's Innovation Lab.
              Diploma in IT, Mangosuthu University of Technology.
            </p>
            <p className="text-lg text-foreground/90 leading-relaxed font-medium">
              Developing production-ready applications with a focus on clean code, scalability,
              and exceptional user experiences — blending engineering with AI-powered workflows
              and digital strategy.
            </p>
          </div>
        </motion.div>

        {/* Technical Skills */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
          <div>
            <h3 className="text-2xl font-serif font-semibold mb-8 text-foreground">
              Frontend Engineering
            </h3>
            <motion.div
              variants={staggerContainer()}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-50px" }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-6"
            >
              {FRONTEND_SKILLS.map((skill) => (
                <SkillCard key={skill.name} skill={skill} />
              ))}
            </motion.div>
          </div>

          <div>
            <h3 className="text-2xl font-serif font-semibold mb-8 text-foreground">
              Backend &amp; Infrastructure
            </h3>
            <motion.div
              variants={staggerContainer()}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-50px" }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-6"
            >
              {BACKEND_SKILLS.map((skill) => (
                <SkillCard key={skill.name} skill={skill} />
              ))}
            </motion.div>
          </div>
        </div>

        {/* Extended Capabilities */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
        >
          <h3 className="text-2xl font-serif font-semibold mb-3 text-foreground">
            Extended Capabilities
          </h3>
          <p className="text-muted-foreground mb-10 max-w-2xl">
            Beyond writing code — leveraging AI tools, cloud platforms, and digital marketing
            knowledge to deliver end-to-end solutions.
          </p>

          <motion.div
            variants={staggerContainer()}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {EXTENDED_CAPABILITIES.map((cap) => (
              <GlowCard
                key={cap.title}
                variants={revealItem}
                className="p-6 group relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10">
                  <div className="mb-4 p-3 rounded-lg bg-secondary inline-flex text-xl text-primary">
                    <cap.icon />
                  </div>
                  <h4 className="font-semibold text-foreground mb-2 leading-snug">
                    {cap.title}
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    {cap.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {cap.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs bg-secondary text-muted-foreground border border-card-border px-2.5 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </GlowCard>
            ))}
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
