'use client';

/* ───────────────────────────────────────────────────────────────────────────
   ProductsCarousel — image-forward, snap-scroll equipment carousel for the
   "Our Products" section. Autoplays smoothly (pausing on hover/touch), with
   prev/next arrows. Card width is fixed in CSS so the count-per-view adapts
   naturally to viewport width; native touch scroll handles swipe on mobile.
   ─────────────────────────────────────────────────────────────────────────── */

import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import { useEffect, useRef } from 'react';

export type ProductItem = { name: string; spec: string; image: string; category: string };

export default function ProductsCarousel({ items }: { items: ProductItem[] }) {
  const trackRef = useRef<HTMLDivElement>(null);

  const cardStep = () => {
    const track = trackRef.current;
    if (!track) return 280;
    const card = track.querySelector<HTMLElement>('[data-prod-card]');
    if (!card) return 280;
    const gap = parseFloat(getComputedStyle(track).columnGap || '18');
    return card.getBoundingClientRect().width + gap;
  };

  const scrollByCard = (dir: 1 | -1) => {
    trackRef.current?.scrollBy({ left: dir * cardStep(), behavior: 'smooth' });
  };

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    let paused = false;
    const id = setInterval(() => {
      if (paused || !track) return;
      const atEnd = track.scrollLeft + track.clientWidth >= track.scrollWidth - 4;
      if (atEnd) {
        track.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        track.scrollBy({ left: cardStep(), behavior: 'smooth' });
      }
    }, 3400);

    const pause = () => { paused = true; };
    const resume = () => { paused = false; };
    track.addEventListener('mouseenter', pause);
    track.addEventListener('mouseleave', resume);
    track.addEventListener('touchstart', pause, { passive: true });
    track.addEventListener('touchend', () => setTimeout(resume, 2600), { passive: true });

    return () => {
      clearInterval(id);
      track.removeEventListener('mouseenter', pause);
      track.removeEventListener('mouseleave', resume);
      track.removeEventListener('touchstart', pause);
      track.removeEventListener('touchend', resume);
    };
  }, []);

  return (
    <div className="lp-prod-wrap">
      <button type="button" className="lp-prod-arrow lp-prod-arrow--prev" aria-label="Previous products" onClick={() => scrollByCard(-1)}>
        <ChevronLeft size={20} />
      </button>

      <div className="lp-prod-track" ref={trackRef}>
        {items.map((item, i) => (
          <div className="lp-prod-card" data-prod-card key={`${item.name}-${i}`}>
            <div className="lp-prod-photo">
              <Image src={item.image} alt={item.name} fill sizes="(max-width: 640px) 75vw, 260px" style={{ objectFit: 'cover' }} />
              <span className="lp-prod-badge">{item.category}</span>
            </div>
            <div className="lp-prod-info">
              <h3>{item.name}</h3>
              <p>{item.spec}</p>
            </div>
          </div>
        ))}
      </div>

      <button type="button" className="lp-prod-arrow lp-prod-arrow--next" aria-label="Next products" onClick={() => scrollByCard(1)}>
        <ChevronRight size={20} />
      </button>
    </div>
  );
}
