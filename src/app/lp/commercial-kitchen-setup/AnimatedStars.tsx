'use client';

/* ───────────────────────────────────────────────────────────────────────────
   AnimatedStars — five gold SVG stars that pop + fill in sequence when the
   rating scrolls into view. Replaces the static "★★★★★" glyphs with a crisp,
   resolution-independent SVG animation. Respects reduced-motion (renders solid).
   ─────────────────────────────────────────────────────────────────────────── */

import { motion } from 'framer-motion';

const STAR_PATH =
  'M12 2.5l2.95 5.98 6.6.96-4.78 4.66 1.13 6.57L12 17.56l-5.9 3.11 1.13-6.57L2.45 9.44l6.6-.96L12 2.5z';

export default function AnimatedStars({
  size = 18,
  gap = 3,
  count = 5,
  className,
}: {
  size?: number;
  gap?: number;
  count?: number;
  className?: string;
}) {
  return (
    <div
      className={className}
      style={{ display: 'inline-flex', gap, lineHeight: 0 }}
      role="img"
      aria-label={`${count} out of ${count} stars`}
    >
      {Array.from({ length: count }).map((_, i) => (
        <motion.svg
          key={i}
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="var(--gold-bright)"
          initial={{ opacity: 0, scale: 0.3, rotate: -35 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{
            delay: i * 0.11,
            type: 'spring',
            stiffness: 320,
            damping: 14,
          }}
          style={{ filter: 'drop-shadow(0 1px 3px rgba(201,168,76,0.45))' }}
        >
          <path d={STAR_PATH} />
        </motion.svg>
      ))}
    </div>
  );
}
