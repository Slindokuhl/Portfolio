import { Github, Linkedin, Mail } from "lucide-react";
import { Link } from "wouter";

export function Footer() {
  return (
    <footer className="py-10 border-t border-border bg-background">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex flex-col items-center md:items-start">
          <Link href="/" className="font-serif font-bold text-xl text-foreground mb-2">
            S.A.<span className="text-primary">N</span>
          </Link>
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Slindokuhle Atlehang Ngidi. All rights reserved.
          </p>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          {[
            { name: "Home", href: "/" },
            { name: "Experience", href: "/experience" },
            { name: "Projects", href: "/projects" },
            { name: "Contact", href: "/contact" },
          ].map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-6">
          <a
            href="https://github.com/Slindokuhl"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Github size={20} />
            <span className="sr-only">GitHub</span>
          </a>
          <a
            href="https://linkedin.com/in/slindokuhle-ngidi-691b8137"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Linkedin size={20} />
            <span className="sr-only">LinkedIn</span>
          </a>
          <a
            href="mailto:slindokuhleatlehang1998@gmail.com"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Mail size={20} />
            <span className="sr-only">Email</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
