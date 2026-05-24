import { motion } from "framer-motion";
import { ArrowRight, Download, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { useEffect, useState } from "react";

function useKzdDuration() {
  const [duration, setDuration] = useState("");

  useEffect(() => {
    const start = new Date("2026-04-07");

    function update() {
      const now = new Date();
      const diff = now.getTime() - start.getTime();
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const months = Math.floor(days / 30);
      const remainingDays = days % 30;
      if (months > 0) {
        setDuration(`${months}m ${remainingDays}d`);
      } else {
        setDuration(`${days}d`);
      }
    }

    update();
    const interval = setInterval(update, 60000);
    return () => clearInterval(interval);
  }, []);

  return duration;
}

export function Hero() {
  const kzdDuration = useKzdDuration();

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-20 pb-16 overflow-hidden"
    >
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/4 right-0 w-[700px] h-[700px] bg-primary/10 rounded-full blur-[130px]" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-900/15 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

          <div className="flex-1 max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-3 mb-6"
            >
              <div className="h-px w-12 bg-primary" />
              <span className="text-primary font-medium tracking-wider uppercase text-sm">
                Portfolio 2025
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="font-serif text-5xl md:text-7xl lg:text-[5.5rem] font-bold leading-[1.05] text-foreground mb-4"
            >
              Slindokuhle
              <br />
              Atlehang
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/60">
                Ngidi
              </span>
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="text-xl md:text-2xl text-muted-foreground font-medium mb-6 tracking-wide"
            >
              Full Stack Developer
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="text-base md:text-lg text-muted-foreground max-w-xl leading-relaxed mb-10"
            >
              Results-driven developer building scalable academic platforms and real-time
              communication systems. Delivered solutions that reduced manual workloads by ~40%
              and reached students university-wide.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-wrap gap-4 mb-10"
            >
              <Button
                size="lg"
                className="h-13 px-8 text-base group bg-primary text-primary-foreground hover:bg-primary/90"
                asChild
              >
                <Link href="/projects">
                  View My Work
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="h-13 px-8 text-base border-border hover:bg-secondary hover:text-foreground"
                asChild
              >
                <a href="/Slindokuhle_Ngidi_CV.pdf" download>
                  <Download className="mr-2 h-5 w-5" />
                  Download CV
                </a>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.55 }}
              className="flex items-center gap-5"
            >
              <a
                href="https://github.com/Slindokuhl"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Github size={22} />
              </a>
              <a
                href="https://linkedin.com/in/slindokuhle-ngidi-691b8137"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin size={22} />
              </a>
              <div className="h-px w-8 bg-border" />
              <span className="text-sm text-muted-foreground">
                Amanzimtoti, KwaZulu-Natal, ZA
              </span>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="flex-shrink-0 relative mt-8 lg:mt-0"
          >
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/30 via-transparent to-blue-500/20 blur-xl scale-110 pointer-events-none" />

            <div className="relative rounded-2xl p-[2px] bg-gradient-to-br from-primary via-primary/40 to-transparent shadow-2xl">
              <div className="rounded-2xl overflow-hidden w-[260px] md:w-[300px] lg:w-[340px] bg-card">
                <img
                  src="/profile.png"
                  alt="Slindokuhle Atlehang Ngidi"
                  className="w-full object-cover object-top"
                  style={{ height: "380px", objectPosition: "50% 8%" }}
                />
              </div>
            </div>

            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              className="absolute -bottom-4 -left-6 bg-card border border-border rounded-xl px-4 py-3 shadow-xl"
            >
              <p className="text-xs text-muted-foreground font-medium">🎓 Innovation Lab</p>
              <p className="text-sm font-bold text-foreground">MUT Intern</p>
              <p className="text-xs text-primary font-medium mt-0.5">12 Months</p>
            </motion.div>

            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut", delay: 0.5 }}
              className="absolute -top-4 -right-6 bg-primary rounded-xl px-4 py-3 shadow-xl"
            >
              <p className="text-xs text-primary-foreground/70 font-medium">💼 KZD Solutions</p>
              <p className="text-sm font-bold text-primary-foreground">Intern</p>
              <p className="text-xs text-primary-foreground/80 font-medium mt-0.5">{kzdDuration}</p>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
