import { Card, CardContent } from "@/components/ui/card";
import { AlertCircle } from "lucide-react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { fadeUp } from "@/lib/motion";

export default function NotFound() {
  return (
    <motion.div
      initial="hidden"
      animate="show"
      variants={fadeUp}
      className="min-h-screen w-full flex items-center justify-center bg-background px-6"
    >
      <Card className="w-full max-w-md mx-4 bg-card border-card-border shadow-[var(--shadow-lg)]">
        <CardContent className="pt-6">
          <div className="flex mb-4 gap-2 items-center">
            <AlertCircle className="h-8 w-8 text-destructive" />
            <h1 className="text-2xl font-serif font-bold text-foreground">404 Page Not Found</h1>
          </div>

          <p className="mt-4 text-sm text-muted-foreground">
            This page doesn't exist. Let's get you back on track.
          </p>

          <Link
            href="/"
            className="inline-block mt-6 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
          >
            Back to Home →
          </Link>
        </CardContent>
      </Card>
    </motion.div>
  );
}
