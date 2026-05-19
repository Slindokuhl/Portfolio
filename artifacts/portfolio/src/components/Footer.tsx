import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="py-10 border-t border-border bg-background mt-20">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex flex-col items-center md:items-start">
          <span className="font-serif font-bold text-xl text-foreground mb-2">
            S.A.<span className="text-primary">N</span>
          </span>
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Slindokuhle Atlehang Ngidi. All rights reserved.
          </p>
        </div>
        
        <div className="flex items-center gap-6">
          <a href="https://github.com/slindokuhle" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
            <Github size={20} />
            <span className="sr-only">GitHub</span>
          </a>
          <a href="https://www.linkedin.com/in/slindokuhle-ngidi-69181b217" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
            <Linkedin size={20} />
            <span className="sr-only">LinkedIn</span>
          </a>
          <a href="mailto:slindokuhleatlehang22009757@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
            <Mail size={20} />
            <span className="sr-only">Email</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
