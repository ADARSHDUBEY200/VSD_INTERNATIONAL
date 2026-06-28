'use client';

/* ───────────────────────────────────────────────────────────────────────────
   Reveal — thin framer-motion wrapper for entrance animations on the LP.
   • `immediate` (Hero): animates on mount, like the main site's Hero.tsx.
   • default: animates once when scrolled into view (whileInView).
   A Client Component boundary so server-rendered children can still be
   passed in from page.tsx without converting the whole page to 'use client'.
   ─────────────────────────────────────────────────────────────────────────── */

import { motion } from 'framer-motion';
import type { CSSProperties, ReactNode } from 'react';

export default function Reveal({
  children,
  delay = 0,
  duration = 0.6,
  y = 22,
  x = 0,
  immediate = false,
  className,
  style,
}: {
  children: ReactNode;
  delay?: number;
  duration?: number;
  y?: number;
  x?: number;
  immediate?: boolean;
  className?: string;
  style?: CSSProperties;
}) {
  const visible = { opacity: 1, y: 0, x: 0 };
  const hidden = { opacity: 0, y, x };

  return (
    <motion.div
      className={className}
      style={style}
      initial={hidden}
      {...(immediate ? { animate: visible } : { whileInView: visible, viewport: { once: true, amount: 0.2 } })}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
