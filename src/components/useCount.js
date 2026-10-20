import { useEffect, useState } from "react";

export function useCount(target, active) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!active) return undefined;
    let frame = 0;
    const start = performance.now();
    const tick = (now) => {
      const progress = Math.min(1, (now - start) / 1200);
      const eased = 1 - (1 - progress) ** 3;
      setValue(Math.round(target * eased));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [active, target]);

  return value;
}
