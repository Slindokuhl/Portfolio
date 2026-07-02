import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import { Menu, X } from "lucide-react";
import { EASE_CINEMATIC } from "@/lib/motion";

const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "Experience", href: "/experience" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

export function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  const { scrollYProgress } = useScroll();
  const scrollProgress = useSpring(scrollYProgress, { stiffness: 300, damping: 40, restDelta: 0.001 });

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location]);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: EASE_CINEMATIC }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "glass-panel border-b shadow-[var(--shadow-sm)] py-4"
          : "bg-transparent py-6"
      }`}
    >
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-[2px] origin-left bg-gradient-to-r from-primary via-primary/70 to-transparent"
        style={{ scaleX: scrollProgress }}
      />

      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        <Link href="/" className="text-xl md:text-2xl font-serif font-bold tracking-tight text-foreground">
          S.A.<span className="text-primary">N</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link, i) => {
            const isActive = link.href === "/" ? location === "/" : location.startsWith(link.href);
            return (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, y: -12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.07, ease: EASE_CINEMATIC }}
              >
                <Link
                  href={link.href}
                  className={`text-sm font-medium transition-colors relative pb-1 ${
                    isActive ? "text-primary" : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary rounded-full shadow-[var(--shadow-glow-primary)]"
                      initial={false}
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </Link>
              </motion.div>
            );
          })}
        </nav>

        <button
          className="md:hidden text-foreground p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          data-testid="button-hamburger"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: EASE_CINEMATIC }}
            className="md:hidden glass-panel border-b overflow-hidden"
          >
            <nav className="flex flex-col items-center py-8 gap-6">
              {NAV_LINKS.map((link) => {
                const isActive = link.href === "/" ? location === "/" : location.startsWith(link.href);
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`text-lg font-medium ${
                      isActive ? "text-primary" : "text-muted-foreground"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
