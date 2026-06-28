'use client';

/* ───────────────────────────────────────────────────────────────────────────
   TiltCard — premium interactive card. On fine-pointer devices the card tilts
   in 3D toward the cursor and a soft gold spotlight + sheen follows the pointer.
   On touch / reduced-motion it stays perfectly flat (CSS-gated), so it is fully
   responsive and degrades to a clean static card on phones.

   Drop-in for a card <div>: pass the same className / style. Renders one element.
   ─────────────────────────────────────────────────────────────────────────── */

import { useRef } from 'react';
import type { CSSProperties, MouseEvent, ReactNode } from 'react';

export default function TiltCard({
  children,
  className,
  style,
  max = 7,
}: {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  max?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const raf = useRef<number | undefined>(undefined);

  const handleMove = (e: MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    // Skip the heavy transform work on coarse pointers (touch) entirely.
    if (window.matchMedia('(hover: none)').matches) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width; // 0 → 1
    const py = (e.clientY - rect.top) / rect.height; // 0 → 1
    const rotX = (0.5 - py) * max * 2;
    const rotY = (px - 0.5) * max * 2;
    if (raf.current) cancelAnimationFrame(raf.current);
    raf.current = requestAnimationFrame(() => {
      el.style.setProperty('--rx', `${rotX.toFixed(2)}deg`);
      el.style.setProperty('--ry', `${rotY.toFixed(2)}deg`);
      el.style.setProperty('--mx', `${(px * 100).toFixed(1)}%`);
      el.style.setProperty('--my', `${(py * 100).toFixed(1)}%`);
    });
  };

  const reset = () => {
    const el = ref.current;
    if (!el) return;
    if (raf.current) cancelAnimationFrame(raf.current);
    el.style.setProperty('--rx', '0deg');
    el.style.setProperty('--ry', '0deg');
  };

  return (
    <div
      ref={ref}
      className={`lp-tilt${className ? ` ${className}` : ''}`}
      style={style}
      onMouseMove={handleMove}
      onMouseLeave={reset}
    >
      <span className="lp-tilt-sheen" aria-hidden="true" />
      <div className="lp-tilt-body">{children}</div>
    </div>
  );
}
