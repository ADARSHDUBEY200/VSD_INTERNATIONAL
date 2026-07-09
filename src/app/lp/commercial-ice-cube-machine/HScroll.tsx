'use client';

/* ───────────────────────────────────────────────────────────────────────────
   HScroll — responsive horizontal card rail for the landing-page sections.
   • Phones/tablets (< 900px): cards lay out in a horizontal row.
       – auto = true  → infinite auto-scrolling marquee (pauses on hover/touch),
                        used by "Find Your Fit".
       – auto = false → manual swipe carousel with scroll-snap, used by
                        "How It Works".
   • Desktop (≥ 900px): reverts to the normal 4-up grid, identical to the rest
     of the page. Purely presentational — all styling lives in globals.css.
   ─────────────────────────────────────────────────────────────────────────── */

import type { ReactNode } from 'react';

export default function HScroll({ items, auto = false }: { items: ReactNode[]; auto?: boolean }) {
  if (auto) {
    return (
      <div className="lphs-marquee">
        <div className="lphs-track">
          {items.map((it, i) => (
            <div className="lphs-item" key={`a-${i}`}>
              {it}
            </div>
          ))}
          {/* Seamless-loop duplicate — hidden from assistive tech and from desktop */}
          {items.map((it, i) => (
            <div className="lphs-item lphs-dup" aria-hidden="true" key={`b-${i}`}>
              {it}
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="lphs-scroll">
      {items.map((it, i) => (
        <div className="lphs-item" key={i}>
          {it}
        </div>
      ))}
    </div>
  );
}
