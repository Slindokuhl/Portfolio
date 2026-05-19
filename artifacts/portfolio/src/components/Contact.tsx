import { motion } from "framer-motion";
import { Mail, Linkedin, Phone, Github } from "lucide-react";
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
              href="mailto:slindokuhleatlehang22009757@gmail.com"
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
                <p className="font-medium text-foreground truncate">slindokuhleatlehang22009757@gmail.com</p>
              </div>
            </motion.a>

            <motion.a 
              href="https://www.linkedin.com/in/slindokuhle-ngidi-69181b217"
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
              href="https://github.com/slindokuhle"
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
                <p className="font-medium text-foreground truncate">@slindokuhle</p>
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
      </div>
    </section>
  );
}
