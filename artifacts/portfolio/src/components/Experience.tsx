import { motion } from "framer-motion";
import {
  SiHtml5, SiJavascript, SiTypescript,
  SiNodedotjs, SiExpress, SiPostgresql,
  SiGit, SiMui, SiIonic, SiFirebase,
  SiDocker, SiLinux, SiPhp,
} from "react-icons/si";
import {
  FaRobot, FaExchangeAlt, FaEnvelopeOpenText,
  FaCloud, FaPaintBrush, FaBullhorn,
  FaSearchDollar, FaChartLine,
} from "react-icons/fa";

const CssIcon = () => (
  <span style={{ fontWeight: 800, fontSize: "1.1rem", color: "#1572B6", letterSpacing: "-1px" }}>CSS</span>
);

const LaragonIcon = () => (
  <span style={{ fontWeight: 800, fontSize: "0.8rem", color: "#FF5B00", letterSpacing: "-0.5px" }}>LRG</span>
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
  { name: "Docker", level: 45, icon: SiDocker, color: "#2496ED", label: "Basic" },
  { name: "Linux", level: 65, icon: SiLinux, color: "#FCC624", label: "Intermediate" },
  { name: "PHP", level: 40, icon: SiPhp, color: "#8892BF", label: "Basic" },
  { name: "Laragon", level: 35, icon: LaragonIcon, color: "#FF5B00", label: "Basic" },
];

const EXTENDED_CAPABILITIES = [
  {
    icon: FaRobot,
    title: "AI Generalist & No-Code Tools",
    description:
      "Fluent in AI-powered workflows using no-code and low-code platforms to ship fast without writing every line from scratch.",
    tags: ["Claude", "ChatGPT", "Cursor", "Replit", "v0"],
  },
  {
    icon: FaExchangeAlt,
    title: "Code Migration & Platform Moves",
    description:
      "Experienced moving codebases across environments — from Replit to GitHub with proper structure, CI/CD scaffolding, and multi-developer workflows.",
    tags: ["GitHub", "Replit", "CI/CD", "Git"],
  },
  {
    icon: FaEnvelopeOpenText,
    title: "Email Automation",
    description:
      "Builds transactional and triggered email systems with branded templates, delivery infrastructure, and DNS configuration.",
    tags: ["EmailJS", "Cloudflare", "DNS", "Templates"],
  },
  {
    icon: FaCloud,
    title: "Cloud & Deployment",
    description:
      "Deploys and manages apps on cloud infrastructure — VPS setup, panel-based server management, and domain configuration end-to-end.",
    tags: ["Cloudflare", "Vercel", "Contabo VPS", "aaPanel"],
  },
  {
    icon: FaPaintBrush,
    title: "AI-Powered Design",
    description:
      "Creates UI designs, visual assets, and production-ready interfaces using AI design tools — from concept to deployable component.",
    tags: ["Claude Code", "Figma", "Midjourney", "v0"],
  },
  {
    icon: FaBullhorn,
    title: "Google Ads & Digital Marketing",
    description:
      "Creates and manages Google Ads campaigns using AI tools — from copy generation to targeting strategy and performance review.",
    tags: ["Google Ads", "AI Copy", "Targeting", "Analytics"],
  },
  {
    icon: FaSearchDollar,
    title: "SEO & Growth",
    description:
      "Applies modern SEO best practices — semantic HTML, Core Web Vitals, metadata, structured data, and content strategy for organic growth.",
    tags: ["On-Page SEO", "Core Web Vitals", "Schema", "Search Console"],
  },
  {
    icon: FaChartLine,
    title: "Digital Marketing Platforms",
    description:
      "Comfortable navigating major digital marketing platforms for audience building, content distribution, and campaign management.",
    tags: ["Meta Ads", "Google Analytics", "Mailchimp", "Hootsuite"],
  },
];

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

function SkillCard({ skill }: { skill: (typeof FRONTEND_SKILLS)[0] }) {
  return (
    <motion.div
      variants={item}
      className="bg-card border border-card-border p-5 rounded-xl hover:border-primary/50 transition-colors group relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-150 duration-500" />
      <div className="flex items-center gap-4 mb-4 relative z-10">
        <div
          className="p-3 rounded-lg bg-secondary text-2xl flex-shrink-0"
          style={{ color: skill.color }}
        >
          <skill.icon />
        </div>
        <div>
          <h4 className="font-semibold text-foreground">{skill.name}</h4>
          <span className="text-xs text-muted-foreground uppercase tracking-wider">
            {skill.label}
          </span>
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
  );
}

export function Experience() {
  return (
    <section id="experience" className="py-24 md:py-32 relative">
      <div className="container mx-auto px-6 md:px-12">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 md:mb-24"
        >
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">
            Experience & Skills
          </h2>
          <div className="h-px w-full bg-border max-w-2xl mb-12" />
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
              variants={container}
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
              Backend & Infrastructure
            </h3>
            <motion.div
              variants={container}
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
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-serif font-semibold mb-3 text-foreground">
            Extended Capabilities
          </h3>
          <p className="text-muted-foreground mb-10 max-w-2xl">
            Beyond writing code — leveraging AI tools, cloud platforms, and digital marketing
            knowledge to deliver end-to-end solutions.
          </p>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {EXTENDED_CAPABILITIES.map((cap) => (
              <motion.div
                key={cap.title}
                variants={item}
                className="bg-card border border-card-border p-6 rounded-xl hover:border-primary/50 transition-all duration-300 group relative overflow-hidden"
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
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}