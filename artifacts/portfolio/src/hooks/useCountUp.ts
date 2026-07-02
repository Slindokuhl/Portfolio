import { useEffect, useRef } from "react";
import { useInView } from "framer-motion";
import { useCountUp as useReactCountUp } from "react-countup";

interface UseCountUpOptions {
  end: number;
  duration?: number;
  decimals?: number;
  suffix?: string;
  prefix?: string;
}

/** Triggers a react-countup animation once, when the ref scrolls into view. */
export function useCountUp({ end, duration = 2, decimals = 0, suffix = "", prefix = "" }: UseCountUpOptions) {
  const containerRef = useRef<HTMLSpanElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-50px" });

  const { start } = useReactCountUp({
    ref: containerRef,
    end,
    duration,
    decimals,
    suffix,
    prefix,
    start: 0,
    startOnMount: false,
  });

  useEffect(() => {
    if (isInView) {
      start();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isInView]);

  return containerRef;
}
