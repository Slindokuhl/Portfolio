import { NavBar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";
import { PageTransition } from "@/components/motion/PageTransition";
import { SiteBackground } from "@/components/three/SiteBackground";
import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="relative bg-background text-foreground min-h-screen selection:bg-primary/30 selection:text-primary">
      <SiteBackground />
      <div className="relative z-10">
        <NavBar />
        <main>
          <PageTransition>{children}</PageTransition>
        </main>
        <Footer />
      </div>
    </div>
  );
}
