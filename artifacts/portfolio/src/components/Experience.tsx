import { motion } from "framer-motion";
import { 
  SiHtml5, SiJavascript, SiTypescript, 
  SiReact, SiNodedotjs, SiExpress, SiPostgresql, 
  SiGit, SiMui, SiIonic, SiFirebase
} from "react-icons/si";

const CssIcon = () => (
  <span style={{ fontWeight: 800, fontSize: "1.1rem", color: "#1572B6", letterSpacing: "-1px" }}>CSS</span>
);

const FRONTEND_SKILLS = [
  { name: "HTML", level: 95, icon: SiHtml5, color: "#E34F26", label: "Experienced" },
  { name: "CSS", level: 90, icon: CssIcon, color: "#1572B6", label: "Experienced" },
  { name: "JavaScript", level: 75, icon: SiJavascript, color: "#F7DF1E", label: "Intermediate" },
  { name: "TypeScript", level: 40, icon: SiTypescript, color: "#3178C6", label: "Basic" },
  { name: "Ionic", level: 85, icon: SiIonic, color: "#3880FF", label: "Experienced" },
  { name: "Material UI", level: 85, icon: SiMui, color: "#007FFF", label: "Experienced" },
];

const BACKEND_SKILLS = [
  { name: "Node.js", level: 70, icon: SiNodedotjs, color: "#339933", label: "Intermediate" },
  { name: "Express.js", level: 75, icon: SiExpress, color: "#ffffff", label: "Intermediate" },
  { name: "PostgreSQL", level: 65, icon: SiPostgresql, color: "#4169E1", label: "Intermediate" },
  { name: "Git", level: 80, icon: SiGit, color: "#F05032", label: "Intermediate" },
  { name: "Firebase", level: 75, icon: SiFirebase, color: "#FFCA28", label: "Intermediate" },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

export function Experience() {
  return (
    <section id="experience" className="py-24 md:py-32 relative">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 md:mb-24"
        >
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">
            <span className="text-primary">01.</span> Experience & Skills
          </h2>
          <div className="h-px w-full bg-border max-w-2xl mb-12"></div>
          
          <div className="max-w-3xl">
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              12 months internship at Mangosuthu University of Technology's Innovation Lab. 
              Diploma in IT, Mangosuthu University of Technology.
            </p>
            <p className="text-lg text-foreground/90 leading-relaxed font-medium">
              Developing production-ready applications with a focus on clean code, scalability, and exceptional user experiences.
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Frontend Skills */}
          <div>
            <h3 className="text-2xl font-serif font-semibold mb-8 text-foreground">Frontend Engineering</h3>
            <motion.div 
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-50px" }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-6"
            >
              {FRONTEND_SKILLS.map((skill) => (
                <motion.div 
                  key={skill.name} 
                  variants={item}
                  className="bg-card border border-card-border p-5 rounded-xl hover:border-primary/50 transition-colors group relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-150 duration-500"></div>
                  
                  <div className="flex items-center gap-4 mb-4 relative z-10">
                    <div className="p-3 rounded-lg bg-secondary text-2xl flex-shrink-0" style={{ color: skill.color }}>
                      <skill.icon />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">{skill.name}</h4>
                      <span className="text-xs text-muted-foreground uppercase tracking-wider">{skill.label}</span>
                    </div>
                  </div>
                  
                  <div className="w-full h-1.5 bg-secondary rounded-full overflow-hidden relative z-10">
                    <motion.div 
                      className="h-full bg-primary"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
                    />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Backend Skills */}
          <div>
            <h3 className="text-2xl font-serif font-semibold mb-8 text-foreground">Backend & Infrastructure</h3>
            <motion.div 
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-50px" }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-6"
            >
              {BACKEND_SKILLS.map((skill) => (
                <motion.div 
                  key={skill.name} 
                  variants={item}
                  className="bg-card border border-card-border p-5 rounded-xl hover:border-primary/50 transition-colors group relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-150 duration-500"></div>
                  
                  <div className="flex items-center gap-4 mb-4 relative z-10">
                    <div className="p-3 rounded-lg bg-secondary text-2xl flex-shrink-0" style={{ color: skill.color }}>
                      <skill.icon />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">{skill.name}</h4>
                      <span className="text-xs text-muted-foreground uppercase tracking-wider">{skill.label}</span>
                    </div>
                  </div>
                  
                  <div className="w-full h-1.5 bg-secondary rounded-full overflow-hidden relative z-10">
                    <motion.div 
                      className="h-full bg-primary"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
                    />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
