'use client';

/* ───────────────────────────────────────────────────────────────────────────
   TestimonialSlider — horizontally scrollable, snap-aligned review carousel.
   Autoplays smoothly (pausing on hover/touch), with prev/next arrows for
   manual control. Card count per view adapts purely via CSS flex-basis, so
   it's responsive without any JS breakpoint logic (1 card on phones, ~2 on
   tablets, 3 on desktop). Native touch scrolling handles swipe on mobile.
   ─────────────────────────────────────────────────────────────────────────── */

import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { useEffect, useRef } from 'react';
import AnimatedStars from './AnimatedStars';
import TiltCard from './TiltCard';

export type Review = { name: string; role: string; text: string };

export default function TestimonialSlider({ reviews }: { reviews: Review[] }) {
  const trackRef = useRef<HTMLDivElement>(null);

  const cardStep = () => {
    const track = trackRef.current;
    if (!track) return 320;
    const card = track.querySelector<HTMLElement>('[data-testi-card]');
    if (!card) return 320;
    const gap = parseFloat(getComputedStyle(track).columnGap || '20');
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
    }, 4200);

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
    <div className="lp-testi-wrap">
      <button
        type="button"
        className="lp-testi-arrow lp-testi-arrow--prev"
        aria-label="Previous testimonials"
        onClick={() => scrollByCard(-1)}
      >
        <ChevronLeft size={20} />
      </button>

      <div className="lp-testi-track" ref={trackRef}>
        {reviews.map((r, i) => (
          <div className="lp-testi-card" data-testi-card key={`${r.name}-${i}`}>
            <TiltCard style={{ background: '#fff', border: '1px solid var(--border)', padding: '1.75rem', height: '100%' }}>
              <Quote className="lp-quote-mark" strokeWidth={1.5} aria-hidden="true" />
              <AnimatedStars size={17} />
              <blockquote style={{ fontFamily: 'var(--font-inter)', fontSize: '0.92rem', color: 'var(--text-body)', lineHeight: 1.7, margin: '0.9rem 0 1.25rem' }}>
                “{r.text}”
              </blockquote>
              <div style={{ borderTop: '1px solid var(--border)', paddingTop: '0.9rem' }}>
                <div style={{ fontFamily: 'var(--font-inter)', fontWeight: 700, fontSize: '0.9rem', color: 'var(--text-dark)' }}>{r.name}</div>
                <div style={{ fontFamily: 'var(--font-inter)', fontSize: '0.78rem', color: 'var(--text-muted)' }}>{r.role}</div>
              </div>
            </TiltCard>
          </div>
        ))}
      </div>

      <button
        type="button"
        className="lp-testi-arrow lp-testi-arrow--next"
        aria-label="Next testimonials"
        onClick={() => scrollByCard(1)}
      >
        <ChevronRight size={20} />
      </button>
    </div>
  );
}
