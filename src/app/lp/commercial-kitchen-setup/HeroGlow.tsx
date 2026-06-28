'use client';

/* ───────────────────────────────────────────────────────────────────────────
   HeroGlow — ambient floating gold orbs behind the hero copy, drifting
   slightly toward the cursor (desktop) for a subtle living-light feel.
   Mirrors the parallax-glow pattern already used in the main site's
   components/home/Hero.tsx.
   ─────────────────────────────────────────────────────────────────────────── */

import { useEffect, useRef } from 'react';

export default function HeroGlow() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const handle = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 24;
      const y = (e.clientY / window.innerHeight - 0.5) * 14;
      el.style.transform = `translate(${x}px, ${y}px)`;
    };
    window.addEventListener('mousemove', handle, { passive: true });
    return () => window.removeEventListener('mousemove', handle);
  }, []);

  return (
    <div ref={ref} className="lp-hero-glow-layer" aria-hidden="true">
      <span className="lp-hero-glow-blob lp-hero-glow-blob--1" />
      <span className="lp-hero-glow-blob lp-hero-glow-blob--2" />
      <span className="lp-hero-glow-blob lp-hero-glow-blob--3" />
    </div>
  );
}
