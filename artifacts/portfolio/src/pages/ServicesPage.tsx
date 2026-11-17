import { motion } from "framer-motion";
import { Link } from "wouter";
import { Check, Clock, MessageCircle, Mail, PlayCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { GlowCard } from "@/components/motion/GlowCard";
import { fadeUp, staggerContainer, revealItem } from "@/lib/motion";
import { SERVICES, PROCESS_STEPS, CONTACT_EMAIL, whatsappLink } from "@/data/services";

function ProofLink({ label, href }: { label: string; href: string }) {
  const className =
    "inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline underline-offset-4";
  const icon = href.includes("youtube") ? <PlayCircle size={16} /> : <ArrowRight size={16} />;
  return href.startsWith("http") ? (
    <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
      {icon}
      {label}
    </a>
  ) : (
    <Link href={href} className={className}>
      {icon}
      {label}
    </Link>
  );
}

export default function ServicesPage() {
  return (
    <section className="py-24 md:py-32 relative">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="mb-16 max-w-3xl"
        >
          <span className="text-primary font-medium tracking-wider uppercase text-sm mb-3 block">
            Hire Me
          </span>
          <h1 className="font-serif text-h1 font-bold mb-6">Services</h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Fixed-price help with the things that slow teams down: shipping iOS apps, deploying
            safely, cutting cloud bills, getting a business online, and building full online stores
            and delivery platforms. Every service comes from
            work I've already done on real projects.
          </p>
          <div className="flex flex-wrap gap-4 mt-8">
            <Button size="lg" className="h-13 px-8 text-base" asChild>
              <a href={whatsappLink()} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 h-5 w-5" />
                Chat on WhatsApp
              </a>
            </Button>
            <Button size="lg" variant="outline" className="h-13 px-8 text-base" asChild>
              <a href={`mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent("Project enquiry")}`}>
                <Mail className="mr-2 h-5 w-5" />
                Email me
              </a>
            </Button>
          </div>
        </motion.div>

        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-24"
        >
          {SERVICES.map((s) => (
            <motion.div key={s.id} variants={revealItem}>
              <GlowCard className="p-7 h-full flex flex-col relative">
                {s.featured && (
                  <span className="absolute top-5 right-5 text-xs font-bold uppercase tracking-wider bg-primary text-primary-foreground px-3 py-1 rounded-full">
                    Most requested
                  </span>
                )}
                <h2 className="text-xl font-serif font-bold text-foreground mb-2 pr-28">{s.title}</h2>
                <p className="text-muted-foreground mb-4">{s.tagline}</p>
                <p className="text-sm text-foreground/80 mb-5">
                  <span className="font-semibold">For: </span>
                  {s.forWho}
                </p>
                <ul className="space-y-2 mb-6">
                  {s.includes.map((item) => (
                    <li key={item} className="flex gap-2 text-sm text-muted-foreground">
                      <Check size={16} className="text-primary mt-0.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                {s.stack && (
                  <div className="flex flex-wrap gap-2 mb-6">
                    {s.stack.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs font-medium px-2.5 py-1 rounded-full border border-border text-muted-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
                <div className="mt-auto pt-5 border-t border-border">
                  <div className="flex flex-wrap items-end justify-between gap-4 mb-5">
                    <div>
                      <div className="text-xs uppercase tracking-wider text-muted-foreground">From</div>
                      <div className="text-2xl font-bold text-foreground">
                        {s.priceZar}{" "}
                        <span className="text-base font-medium text-muted-foreground">/ {s.priceUsd}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                      <Clock size={16} />
                      {s.timeline}
                    </div>
                  </div>
                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <Button asChild>
                      <a href={whatsappLink(s.title)} target="_blank" rel="noopener noreferrer">
                        <MessageCircle className="mr-2 h-4 w-4" />
                        Book this
                      </a>
                    </Button>
                    <ProofLink {...s.proof} />
                  </div>
                </div>
              </GlowCard>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
        >
          <h2 className="text-2xl font-serif font-semibold mb-8 text-foreground">How it works</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {PROCESS_STEPS.map((step, i) => (
              <GlowCard key={step.title} className="p-6">
                <div className="text-primary font-bold text-sm mb-2">0{i + 1}</div>
                <h3 className="font-semibold text-foreground mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{step.text}</p>
              </GlowCard>
            ))}
          </div>

          <GlowCard className="p-8 md:p-10 text-center">
            <h2 className="text-2xl md:text-3xl font-serif font-bold mb-3">Not sure what you need?</h2>
            <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
              Send me a quick message about your app or business. I'll tell you honestly what will
              help, even if it's not something I sell.
            </p>
            <Button size="lg" className="h-13 px-8 text-base" asChild>
              <a href={whatsappLink()} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 h-5 w-5" />
                Message me on WhatsApp
              </a>
            </Button>
          </GlowCard>
        </motion.div>
      </div>
    </section>
  );
}
