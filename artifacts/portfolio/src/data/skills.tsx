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
import type { IconType } from "react-icons";

export const CssIcon = () => (
  <span style={{ fontWeight: 800, fontSize: "1.1rem", color: "#1572B6", letterSpacing: "-1px" }}>CSS</span>
);

export const LaragonIcon = () => (
  <span style={{ fontWeight: 800, fontSize: "0.8rem", color: "#FF5B00", letterSpacing: "-0.5px" }}>LRG</span>
);

export interface Skill {
  name: string;
  level: number;
  icon: IconType | (() => JSX.Element);
  color: string;
  label: string;
}

export const FRONTEND_SKILLS: Skill[] = [
  { name: "HTML", level: 95, icon: SiHtml5, color: "#E34F26", label: "Experienced" },
  { name: "CSS", level: 90, icon: CssIcon, color: "#1572B6", label: "Experienced" },
  { name: "JavaScript", level: 75, icon: SiJavascript, color: "#F7DF1E", label: "Intermediate" },
  { name: "TypeScript", level: 40, icon: SiTypescript, color: "#3178C6", label: "Basic" },
  { name: "Ionic", level: 85, icon: SiIonic, color: "#3880FF", label: "Experienced" },
  { name: "Material UI", level: 85, icon: SiMui, color: "#007FFF", label: "Experienced" },
];

export const BACKEND_SKILLS: Skill[] = [
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

export interface ExtendedCapability {
  icon: IconType;
  title: string;
  description: string;
  tags: string[];
}

export const EXTENDED_CAPABILITIES: ExtendedCapability[] = [
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
    tags: ["Cloudflare", "Vercel", "Contabo VPS", "aaPanel", "Host Africa"],
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
