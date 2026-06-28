'use client';

/* ───────────────────────────────────────────────────────────────────────────
   CountUp — animates a number from 0 to `value` once it scrolls into view.
   Mirrors the count-up convention already used in components/home/TrustMetrics.tsx,
   built on framer-motion's useInView instead of a manual IntersectionObserver.
   ─────────────────────────────────────────────────────────────────────────── */

import { useInView } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

export default function CountUp({
  value,
  decimals = 0,
  duration = 1600,
}: {
  value: number;
  decimals?: number;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start: number | null = null;
    let frame: number;
    const step = (timestamp: number) => {
      if (start === null) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setDisplay(eased * value);
      if (progress < 1) frame = requestAnimationFrame(step);
    };
    frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, [inView, value, duration]);

  return <span ref={ref}>{display.toFixed(decimals)}</span>;
}
