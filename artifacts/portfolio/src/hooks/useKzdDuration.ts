import { useEffect, useState } from "react";

export function useKzdDuration() {
  const [duration, setDuration] = useState("");

  useEffect(() => {
    const start = new Date("2026-04-07");

    function update() {
      const now = new Date();
      const diff = now.getTime() - start.getTime();
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const months = Math.floor(days / 30);
      const remainingDays = days % 30;
      if (months > 0) {
        setDuration(`${months}m ${remainingDays}d`);
      } else {
        setDuration(`${days}d`);
      }
    }

    update();
    const interval = setInterval(update, 60000);
    return () => clearInterval(interval);
  }, []);

  return duration;
}
