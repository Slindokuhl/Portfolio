import { useCountUp } from "@/hooks/useCountUp";
import { cn } from "@/lib/utils";

interface StatCounterProps {
  value: number;
  suffix?: string;
  prefix?: string;
  label?: string;
  duration?: number;
  decimals?: number;
  className?: string;
  valueClassName?: string;
}

export function StatCounter({
  value,
  suffix = "",
  prefix = "",
  label,
  duration = 2,
  decimals = 0,
  className,
  valueClassName,
}: StatCounterProps) {
  const ref = useCountUp({ end: value, duration, decimals, suffix, prefix });

  return (
    <div className={cn("flex flex-col", className)}>
      <span ref={ref} className={cn("font-serif font-bold text-primary tabular-nums", valueClassName)}>
        {prefix}0{suffix}
      </span>
      {label && <span className="text-xs text-muted-foreground uppercase tracking-wider mt-1">{label}</span>}
    </div>
  );
}
