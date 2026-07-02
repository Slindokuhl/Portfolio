import { motion, useMotionValue, useSpring, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Download, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { useRef } from "react";
import { StatCounter } from "@/components/motion/StatCounter";
import { GlowCard } from "@/components/motion/GlowCard";
import { staggerContainer, revealItem, EASE_CINEMATIC } from "@/lib/motion";
import { useKzdDuration } from "@/hooks/useKzdDuration";

export function Hero() {
  const kzdDuration = useKzdDuration();
  const sectionRef = useRef<HTMLElement>(null);
  const imageWrapRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end start"] });
  const parallaxY = useTransform(scrollYProgress, [0, 1], [0, 60]);

  const tiltX = useMotionValue(0);
  const tiltY = useMotionValue(0);
  const springTiltX = useSpring(tiltX, { stiffness: 150, damping: 20 });
  const springTiltY = useSpring(tiltY, { stiffness: 150, damping: 20 });

  function handleImageMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = imageWrapRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    tiltY.set(x * 12);
    tiltX.set(-y * 12);
  }

  function handleImageMouseLeave() {
    tiltX.set(0);
    tiltY.set(0);
  }

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative min-h-screen flex items-center pt-20 pb-16 overflow-hidden"
    >
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

          <motion.div
            className="flex-1 max-w-2xl"
            initial="hidden"
            animate="show"
            variants={staggerContainer(0.12)}
          >
            <motion.div variants={revealItem} className="flex items-center gap-3 mb-6">
              <div className="h-px w-12 bg-primary" />
              <span className="text-primary font-medium tracking-wider uppercase text-sm">
                Portfolio 2025
              </span>
            </motion.div>

            <motion.h1
              variants={revealItem}
              className="font-serif text-display font-bold leading-[1.05] text-foreground mb-4"
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
              variants={revealItem}
              className="text-xl md:text-2xl text-muted-foreground font-medium mb-6 tracking-wide"
            >
              Full Stack Developer
            </motion.h2>

            <motion.p variants={revealItem} className="text-base md:text-lg text-muted-foreground max-w-xl leading-relaxed mb-6">
              Results-driven developer building scalable academic platforms and real-time
              communication systems. Delivered solutions that reduced manual workloads by ~40%
              and reached students university-wide.
            </motion.p>

            <motion.div variants={revealItem} className="flex items-center gap-3 mb-10">
              <StatCounter value={40} suffix="%" valueClassName="text-3xl" duration={1.5} />
              <span className="text-sm text-muted-foreground max-w-[14rem] leading-snug">
                manual workload reduction
              </span>
            </motion.div>

            <motion.div variants={revealItem} className="flex flex-wrap gap-4 mb-10">
              <Button
                size="lg"
                className="h-13 px-8 text-base group bg-primary text-primary-foreground hover:bg-primary/90 shadow-[var(--shadow-glow-primary)]"
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

            <motion.div variants={revealItem} className="flex items-center gap-5">
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
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: EASE_CINEMATIC }}
            style={{ y: parallaxY }}
            className="flex-shrink-0 relative mt-8 lg:mt-0"
          >
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/30 via-transparent to-glow-cyan/20 blur-xl scale-110 pointer-events-none" />

            <div
              ref={imageWrapRef}
              onMouseMove={handleImageMouseMove}
              onMouseLeave={handleImageMouseLeave}
              style={{ perspective: 800 }}
              className="relative"
            >
              <motion.div
                style={{ rotateX: springTiltX, rotateY: springTiltY, transformStyle: "preserve-3d" }}
                className="relative rounded-2xl p-[2px] bg-gradient-to-br from-primary via-primary/40 to-transparent shadow-[var(--shadow-xl)]"
              >
                <div className="rounded-2xl overflow-hidden w-[260px] md:w-[300px] lg:w-[340px] bg-card">
                  <img
                    src="/profile.png"
                    alt="Slindokuhle Atlehang Ngidi"
                    className="w-full object-cover object-top"
                    style={{ height: "380px", objectPosition: "50% 8%" }}
                  />
                </div>
              </motion.div>
            </div>

            <GlowCard
              animate={{ y: [0, -6, 0] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              className="absolute -bottom-4 -left-6 px-4 py-3"
            >
              <p className="text-xs text-muted-foreground font-medium">🎓 Innovation Lab</p>
              <p className="text-sm font-bold text-foreground">MUT Intern</p>
              <p className="text-xs text-primary font-medium mt-0.5">12 Months</p>
            </GlowCard>

            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut", delay: 0.5 }}
              className="absolute -top-4 -right-6 bg-primary rounded-xl px-4 py-3 shadow-[var(--shadow-glow-primary)]"
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
