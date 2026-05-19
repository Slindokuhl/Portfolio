import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const PROJECTS = [
  {
    title: "Student Performance System",
    description: "Web-based system to track and manage student academic performance with real-time analytics. Built during university innovation lab internship.",
    tags: ["React", "Firebase", "Web App", "Analytics"],
    liveUrl: "https://studentmanagementsytem-96ac6.web.app/login",
    githubUrl: "https://github.com/slindokuhle",
    image: "/images/student-performance.png"
  },
  {
    title: "Attendify",
    description: "Smart attendance management app with QR code scanning and real-time reporting. Streamlines the attendance process for educators and events.",
    tags: ["Mobile First", "Firebase", "QR Code", "Real-time"],
    liveUrl: "https://scholarship-832f3.web.app/",
    githubUrl: "https://github.com/slindokuhle",
    image: "/images/attendify.png"
  },
  {
    title: "Crolix Meet",
    description: "Online meeting app for real-time team collaboration. Features high-quality video and audio streaming built on top of Agora SDK.",
    tags: ["WebRTC", "Agora SDK", "Online Meeting", "Collaboration"],
    liveUrl: "#contact",
    githubUrl: "https://github.com/slindokuhle",
    image: "/images/crolix-meet.png"
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-24 md:py-32 bg-secondary/30 relative">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 md:mb-24 flex items-center justify-between"
        >
          <div>
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">
              <span className="text-primary">02.</span> Selected Work
            </h2>
            <div className="h-px w-full bg-border max-w-md"></div>
          </div>
        </motion.div>

        <div className="flex flex-col gap-24 md:gap-32">
          {PROJECTS.map((project, index) => (
            <motion.div 
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
              className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-8 lg:gap-16 items-center`}
            >
              {/* Image Container */}
              <div className="w-full lg:w-3/5 relative group rounded-2xl overflow-hidden border border-border bg-card">
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
                <div className="aspect-[16/9] w-full overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              </div>

              {/* Content Container */}
              <div className="w-full lg:w-2/5 flex flex-col justify-center">
                <div className="mb-4">
                  <span className="text-primary text-sm font-bold tracking-wider uppercase mb-2 block">Featured Project</span>
                  <h3 className="text-3xl font-serif font-bold text-foreground">{project.title}</h3>
                </div>
                
                <div className="bg-card border border-card-border p-6 rounded-xl shadow-xl z-20 -ml-0 lg:-ml-12 lg:mr-0 mb-6 relative">
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tags.map(tag => (
                    <Badge key={tag} variant="secondary" className="bg-secondary/80 hover:bg-secondary text-secondary-foreground font-mono text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex items-center gap-6">
                  {project.githubUrl && (
                    <a 
                      href={project.githubUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 group"
                    >
                      <Github size={22} className="transition-transform group-hover:-translate-y-1" />
                      <span className="font-medium text-sm">Source</span>
                    </a>
                  )}
                  {project.liveUrl && (
                    <a 
                      href={project.liveUrl} 
                      target={project.liveUrl.startsWith('http') ? "_blank" : "_self"} 
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 group"
                    >
                      <ExternalLink size={22} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                      <span className="font-medium text-sm">Live Demo</span>
                    </a>
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
