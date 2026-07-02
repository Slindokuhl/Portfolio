import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Mail, Linkedin, Phone, Github, Video, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { GlowCard } from "@/components/motion/GlowCard";
import { fadeUp } from "@/lib/motion";
import { useToast } from "@/hooks/use-toast";

const FORMSPREE_ENDPOINT = import.meta.env.VITE_FORMSPREE_ENDPOINT as string | undefined;

const contactSchema = z.object({
  name: z.string().min(2, "Please enter your name"),
  email: z.string().email("Please enter a valid email"),
  subject: z.string().min(2, "Please add a subject"),
  message: z.string().min(10, "Message should be at least 10 characters"),
});

type ContactFormValues = z.infer<typeof contactSchema>;

const CONTACT_INFO = [
  { icon: Mail, label: "Email", value: "slindokuhleatlehang1998@gmail.com", href: "mailto:slindokuhleatlehang1998@gmail.com" },
  { icon: Linkedin, label: "LinkedIn", value: "Slindokuhle Ngidi", href: "https://linkedin.com/in/slindokuhle-ngidi-691b8137", external: true },
  { icon: Phone, label: "Phone", value: "+27 84 803 8960", href: "tel:+27848038960" },
  { icon: Github, label: "GitHub", value: "@Slindokuhl", href: "https://github.com/Slindokuhl", external: true },
];

export function Contact() {
  const { toast } = useToast();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({ resolver: zodResolver(contactSchema) });

  async function onSubmit(values: ContactFormValues) {
    if (!FORMSPREE_ENDPOINT) {
      const body = encodeURIComponent(`${values.message}\n\n— ${values.name} (${values.email})`);
      window.location.href = `mailto:slindokuhleatlehang1998@gmail.com?subject=${encodeURIComponent(values.subject)}&body=${body}`;
      toast({ title: "Opening your email client…", description: "Message pre-filled — just hit send." });
      reset();
      return;
    }

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(values),
      });
      if (!res.ok) throw new Error("Request failed");
      toast({ title: "Message sent!", description: "Thanks for reaching out — I'll get back to you soon." });
      reset();
    } catch {
      toast({
        title: "Something went wrong",
        description: "Please try again, or email me directly.",
        variant: "destructive",
      });
    }
  }

  return (
    <section id="contact" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-[600px] bg-primary/5 rounded-full blur-[150px] pointer-events-none ambient-glow"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">

        {/* ── Page heading ──────────────────────────────────────── */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="mb-16 text-center max-w-2xl mx-auto"
        >
          <span className="text-primary font-medium tracking-wider uppercase text-sm mb-4 block">What's Next?</span>
          <h2 className="font-serif text-h1 font-bold mb-6">
            Get In Touch
          </h2>
          <p className="text-lg text-muted-foreground">
            Jump into a live video call or drop me a message below — I'm always open to new opportunities and conversations.
          </p>
        </motion.div>

        {/* ── Crolix Meet Video Call — shown FIRST ─────────────── */}
        <motion.div
          id="video-call"
          initial={{ opacity: 0, y: 40, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-5xl mx-auto mb-28"
        >
          {/* Section header */}
          <div className="flex flex-col items-center text-center mb-10">
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="h-10 w-10 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center text-primary">
                <Video size={18} />
              </div>
              <span className="text-primary font-medium tracking-wider uppercase text-sm">Live Demo</span>
            </div>
            <h3 className="font-serif text-3xl md:text-4xl font-bold mb-4">
              Crolix Meet — Video Call
            </h3>
            <p className="text-muted-foreground max-w-xl text-base leading-relaxed">
              Experience Crolix Meet directly in the browser. Enter a name, create or share a meeting ID, and connect instantly via real-time video.
            </p>
          </div>

          {/* Gold accent line */}
          <div className="h-px w-24 bg-primary mx-auto mb-10 rounded-full opacity-60" />

          {/* iframe wrapper */}
          <div
            className="relative rounded-2xl overflow-hidden border border-border shadow-[var(--shadow-glow-primary),var(--shadow-2xl)] bg-[#020617]"
            style={{ height: "720px" }}
          >
            <div className="absolute top-0 left-0 w-48 h-48 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-48 h-48 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
            <iframe
              src="/crolix-meet.html"
              title="Crolix Meet — Live Video Call"
              allow="camera; microphone; display-capture; fullscreen"
              className="w-full h-full border-0 relative z-10"
              style={{ display: "block" }}
            />
          </div>

          <p className="text-center text-xs text-muted-foreground/60 mt-4">
            Camera &amp; microphone access required · Works best in Chrome or Edge
          </p>
        </motion.div>

        {/* ── Contact details + form below the video ────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 max-w-5xl mx-auto">
          {/* Contact Info Cards */}
          <div className="lg:col-span-2 space-y-4">
            {CONTACT_INFO.map((info, i) => (
              <GlowCard key={info.label} className="p-0" glowColor={i % 2 === 0 ? "primary" : "cyan"}>
                <motion.a
                  href={info.href}
                  target={info.external ? "_blank" : undefined}
                  rel={info.external ? "noopener noreferrer" : undefined}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 * (i + 1) }}
                  className="flex items-center gap-4 p-4 group"
                >
                  <div className="h-12 w-12 rounded-full bg-secondary flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                    <info.icon size={20} />
                  </div>
                  <div className="overflow-hidden">
                    <p className="text-sm text-muted-foreground">{info.label}</p>
                    <p className="font-medium text-foreground truncate">{info.value}</p>
                  </div>
                </motion.a>
              </GlowCard>
            ))}
          </div>

          {/* Contact Form */}
          <GlowCard
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3 p-8"
          >
            <form className="space-y-6" onSubmit={handleSubmit(onSubmit)} noValidate>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-foreground">Name</label>
                  <Input id="name" placeholder="John Doe" className="bg-background border-border h-12" {...register("name")} />
                  {errors.name && <p className="text-xs text-destructive">{errors.name.message}</p>}
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-foreground">Email</label>
                  <Input id="email" type="email" placeholder="john@example.com" className="bg-background border-border h-12" {...register("email")} />
                  {errors.email && <p className="text-xs text-destructive">{errors.email.message}</p>}
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium text-foreground">Subject</label>
                <Input id="subject" placeholder="Project Inquiry" className="bg-background border-border h-12" {...register("subject")} />
                {errors.subject && <p className="text-xs text-destructive">{errors.subject.message}</p>}
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-foreground">Message</label>
                <Textarea id="message" placeholder="Hello Slindokuhle..." className="bg-background border-border min-h-[150px] resize-none" {...register("message")} />
                {errors.message && <p className="text-xs text-destructive">{errors.message.message}</p>}
              </div>
              <Button
                type="submit"
                size="lg"
                disabled={isSubmitting}
                className="w-full h-14 bg-primary text-primary-foreground hover:bg-primary/90 text-lg shadow-[var(--shadow-glow-primary)]"
              >
                {isSubmitting ? <Loader2 className="h-5 w-5 animate-spin" /> : "Send Message"}
              </Button>
            </form>
          </GlowCard>
        </div>
      </div>
    </section>
  );
}
