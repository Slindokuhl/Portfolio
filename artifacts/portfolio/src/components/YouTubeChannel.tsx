import { motion } from "framer-motion";
import { Play, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { GlowCard } from "@/components/motion/GlowCard";
import { fadeUp } from "@/lib/motion";
import { YOUTUBE_CHANNEL, YOUTUBE_VIDEOS } from "@/data/youtube";

export function YouTubeChannel() {
  return (
    <section id="youtube" className="py-24 md:py-32 relative">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="mb-12 md:mb-16 flex flex-col md:flex-row items-start md:items-end justify-between gap-8"
        >
          <div className="max-w-2xl">
            <span className="text-primary font-medium tracking-wider uppercase text-sm mb-3 block">
              {YOUTUBE_CHANNEL.tagline}
            </span>
            <h2 className="font-serif text-h1 font-bold mb-4">
              {YOUTUBE_CHANNEL.name} on YouTube
            </h2>
            <p className="text-muted-foreground leading-relaxed">{YOUTUBE_CHANNEL.description}</p>
          </div>
          <Button size="lg" className="h-13 px-8 text-base shrink-0" asChild>
            <a href={YOUTUBE_CHANNEL.subscribeUrl} target="_blank" rel="noopener noreferrer">
              <Youtube className="mr-2 h-5 w-5" />
              Subscribe {YOUTUBE_CHANNEL.handle}
            </a>
          </Button>
        </motion.div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {YOUTUBE_VIDEOS.map((video, i) => (
            <motion.a
              key={video.id}
              href={`https://www.youtube.com/watch?v=${video.id}`}
              target="_blank"
              rel="noopener noreferrer"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeUp}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -4 }}
              className="group block"
            >
              <GlowCard className="overflow-hidden h-full flex flex-col">
                <div className="relative aspect-video overflow-hidden bg-secondary">
                  <img
                    src={`https://i.ytimg.com/vi/${video.id}/hqdefault.jpg`}
                    alt={video.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/40 transition-colors">
                    <span className="flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg transition-transform group-hover:scale-110">
                      <Play className="h-6 w-6 ml-0.5" fill="currentColor" />
                    </span>
                  </div>
                </div>
                <div className="p-5 flex flex-col gap-3 flex-1">
                  <h3 className="font-semibold text-foreground leading-snug group-hover:text-primary transition-colors">
                    {video.title}
                  </h3>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {video.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="font-mono text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </GlowCard>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
