import { lazy, Suspense } from "react";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { useIsMobile } from "@/hooks/use-mobile";
import { SceneFallback } from "@/components/three/SceneFallback";

const GalaxyScene = lazy(() => import("@/components/three/GalaxyScene"));

/** Persistent, site-wide galaxy backdrop — mounted once in Layout so it never remounts on route change. */
export function SiteBackground() {
  const prefersReducedMotion = useReducedMotion();
  const isMobile = useIsMobile();

  if (prefersReducedMotion || isMobile) {
    return <SceneFallback />;
  }

  return (
    <Suspense fallback={<SceneFallback />}>
      <GalaxyScene />
    </Suspense>
  );
}
