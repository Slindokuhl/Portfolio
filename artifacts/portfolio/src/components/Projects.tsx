import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { GlowCard } from "@/components/motion/GlowCard";
import { StatCounter } from "@/components/motion/StatCounter";
import { fadeUp } from "@/lib/motion";
import { PROJECTS } from "@/data/projects";

export function Projects() {
  return (
    <section id="projects" className="py-24 md:py-32 bg-secondary/30 relative">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="mb-16 md:mb-24 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6"
        >
          <div>
            <span className="text-primary font-medium tracking-wider uppercase text-sm mb-3 block">
              Product Launches
            </span>
            <h2 className="font-serif text-h1 font-bold mb-6">Selected Work</h2>
            <div className="h-px w-full bg-border max-w-md"></div>
          </div>
          <StatCounter
            value={PROJECTS.length}
            label="Projects Shipped"
            valueClassName="text-4xl"
            duration={1}
          />
        </motion.div>

        <div className="flex flex-col gap-24 md:gap-32">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.title}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeUp}
              className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-8 lg:gap-16 items-center`}
            >
              {/* Image Container */}
              <div className="w-full lg:w-3/5 relative group rounded-2xl overflow-hidden border border-border bg-card shadow-[var(--shadow-lg)]">
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
                <motion.div
                  className="aspect-[16/9] w-full overflow-hidden"
                  initial={{ clipPath: "inset(0 100% 0 0)" }}
                  whileInView={{ clipPath: "inset(0 0% 0 0)" }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  />
                </motion.div>
              </div>

              {/* Content Container */}
              <div className="w-full lg:w-2/5 flex flex-col justify-center">
                <div className="mb-4">
                  <span className="text-primary text-sm font-bold tracking-wider uppercase mb-2 block">Featured Project</span>
                  <h3 className="text-3xl font-serif font-bold text-foreground">{project.title}</h3>
                </div>

                <GlowCard className="p-6 z-20 -ml-0 lg:-ml-12 lg:mr-0 mb-6 relative">
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                </GlowCard>

                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tags.map(tag => (
                    <Badge key={tag} variant="secondary" className="bg-secondary/80 hover:bg-secondary text-secondary-foreground font-mono text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <div className="flex items-center gap-6">
                  {project.githubUrl && (
                    <motion.a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ y: -2 }}
                      className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"
                    >
                      <Github size={22} />
                      <span className="font-medium text-sm">Source</span>
                    </motion.a>
                  )}
                  {project.liveUrl && (
                    <motion.a
                      href={project.liveUrl}
                      target={project.liveUrl.startsWith('http') ? "_blank" : "_self"}
                      rel="noopener noreferrer"
                      whileHover={{ x: 4, y: -2 }}
                      className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"
                    >
                      <ExternalLink size={22} />
                      <span className="font-medium text-sm">Live Demo</span>
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
