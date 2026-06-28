'use client';

/* ───────────────────────────────────────────────────────────────────────────
   RevealTitle — splits a heading into words and reveals them with a staggered
   slide-up as the section scrolls into view. Drop-in replacement for a plain
   <h2 style={...}>text</h2> — same id/className/style props, same markup.
   ─────────────────────────────────────────────────────────────────────────── */

import { motion } from 'framer-motion';
import type { CSSProperties } from 'react';

export default function RevealTitle({
  text,
  id,
  className,
  style,
}: {
  text: string;
  id?: string;
  className?: string;
  style?: CSSProperties;
}) {
  const words = text.split(' ');

  return (
    <motion.h2
      id={id}
      className={className}
      style={style}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.6 }}
    >
      {words.map((word, i) => (
        <motion.span
          key={`${word}-${i}`}
          style={{ display: 'inline-block' }}
          variants={{
            hidden: { opacity: 0, y: '0.6em' },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.55, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
        >
          {word}
          {i < words.length - 1 ? ' ' : ''}
        </motion.span>
      ))}
    </motion.h2>
  );
}
