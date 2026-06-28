'use client';

/* ───────────────────────────────────────────────────────────────────────────
   IconBadge — a lucide icon inside a gold tile whose SVG ring "draws" itself
   on scroll-into-view, then breathes a soft glow. Pure-SVG stroke animation,
   crisp at any size; the breathing glow is CSS and pauses under reduced-motion.
   ─────────────────────────────────────────────────────────────────────────── */

import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

export default function IconBadge({
  children,
  size = 48,
}: {
  children: ReactNode;
  size?: number;
}) {
  const r = size / 2 - 1.5;
  const circumference = 2 * Math.PI * r;

  return (
    <div className="lp-icon-badge" style={{ width: size, height: size }}>
      <svg
        className="lp-icon-badge-ring"
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        aria-hidden="true"
      >
        <motion.circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          fill="none"
          stroke="var(--gold)"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeDasharray={circumference}
          initial={{ strokeDashoffset: circumference }}
          whileInView={{ strokeDashoffset: circumference * 0.12 }}
          viewport={{ once: true, amount: 0.7 }}
          transition={{ duration: 1.05, ease: [0.22, 1, 0.36, 1] }}
          style={{ transform: 'rotate(-90deg)', transformOrigin: 'center' }}
        />
      </svg>
      <span className="lp-icon-badge-inner">{children}</span>
    </div>
  );
}
