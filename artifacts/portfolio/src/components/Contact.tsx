import { motion } from "framer-motion";
import { Mail, Linkedin, Phone, Github, Video } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-[600px] bg-primary/5 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center max-w-2xl mx-auto"
        >
          <span className="text-primary font-medium tracking-wider uppercase text-sm mb-4 block">What's Next?</span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Get In Touch
          </h2>
          <p className="text-lg text-muted-foreground">
            I'm currently looking for new opportunities. Whether you have a question, a project idea, or just want to say hi, my inbox is always open.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 max-w-5xl mx-auto">
          {/* Contact Info Cards */}
          <div className="lg:col-span-2 space-y-4">
            <motion.a 
              href="mailto:slindokuhleatlehang1998@gmail.com"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex items-center gap-4 p-4 bg-card border border-card-border rounded-xl hover:border-primary/50 transition-all group"
            >
              <div className="h-12 w-12 rounded-full bg-secondary flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                <Mail size={20} />
              </div>
              <div className="overflow-hidden">
                <p className="text-sm text-muted-foreground">Email</p>
                <p className="font-medium text-foreground truncate">slindokuhleatlehang1998@gmail.com</p>
              </div>
            </motion.a>

            <motion.a 
              href="https://linkedin.com/in/slindokuhle-ngidi-691b8137"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex items-center gap-4 p-4 bg-card border border-card-border rounded-xl hover:border-primary/50 transition-all group"
            >
              <div className="h-12 w-12 rounded-full bg-secondary flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                <Linkedin size={20} />
              </div>
              <div className="overflow-hidden">
                <p className="text-sm text-muted-foreground">LinkedIn</p>
                <p className="font-medium text-foreground truncate">Slindokuhle Ngidi</p>
              </div>
            </motion.a>

            <motion.a 
              href="tel:+27848038960"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex items-center gap-4 p-4 bg-card border border-card-border rounded-xl hover:border-primary/50 transition-all group"
            >
              <div className="h-12 w-12 rounded-full bg-secondary flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                <Phone size={20} />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Phone</p>
                <p className="font-medium text-foreground">+27 84 803 8960</p>
              </div>
            </motion.a>

            <motion.a 
              href="https://github.com/Slindokuhl"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex items-center gap-4 p-4 bg-card border border-card-border rounded-xl hover:border-primary/50 transition-all group"
            >
              <div className="h-12 w-12 rounded-full bg-secondary flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                <Github size={20} />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">GitHub</p>
                <p className="font-medium text-foreground truncate">@Slindokuhl</p>
              </div>
            </motion.a>
          </div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3 bg-card border border-card-border p-8 rounded-2xl shadow-2xl"
          >
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-foreground">Name</label>
                  <Input id="name" placeholder="John Doe" className="bg-background border-border h-12" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-foreground">Email</label>
                  <Input id="email" type="email" placeholder="john@example.com" className="bg-background border-border h-12" />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium text-foreground">Subject</label>
                <Input id="subject" placeholder="Project Inquiry" className="bg-background border-border h-12" />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-foreground">Message</label>
                <Textarea id="message" placeholder="Hello Slindokuhle..." className="bg-background border-border min-h-[150px] resize-none" />
              </div>
              <Button type="submit" size="lg" className="w-full h-14 bg-primary text-primary-foreground hover:bg-primary/90 text-lg">
                Send Message
              </Button>
            </form>
          </motion.div>
        </div>

        {/* ── Crolix Meet Video Call Section ─────────────────────────── */}
        <motion.div
          id="video-call"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="mt-28 max-w-5xl mx-auto"
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
          <div className="relative rounded-2xl overflow-hidden border border-border shadow-2xl bg-[#020617]"
               style={{ height: "720px" }}>
            {/* Subtle gold corner glow */}
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

          {/* Hint row */}
          <p className="text-center text-xs text-muted-foreground/60 mt-4">
            Camera &amp; microphone access required · Works best in Chrome or Edge
          </p>
        </motion.div>
      </div>
    </section>
  );
}
