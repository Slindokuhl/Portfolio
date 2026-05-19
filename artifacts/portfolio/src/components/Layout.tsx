import { NavBar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";
import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="bg-background text-foreground min-h-screen selection:bg-primary/30 selection:text-primary">
      <NavBar />
      <main>
        {children}
      </main>
      <Footer />
    </div>
  );
}
