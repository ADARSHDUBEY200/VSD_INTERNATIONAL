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
import WhatsAppIcon from './WhatsAppIcon';

export type ProductItem = { name: string; spec: string; image: string; category: string };

/* Shared WhatsApp deep link — same generic prefill used across the landing page */
const WA = `https://wa.me/919250346370?text=${encodeURIComponent(
  "Hi VSD International! I'm looking for commercial kitchen equipment. Please share your best quote.",
)}`;

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

    // Always open on the first product — guard against scroll restoration / autoplay races
    track.scrollLeft = 0;

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
            </div>
            <div className="lp-prod-info">
              <div className="lp-prod-info-head">
                <h3>{item.name}</h3>
                <p>{item.spec}</p>
              </div>
              <div className="lp-prod-cta">
                <span className="lp-prod-cta-hook">Get today&apos;s best price →</span>
                <a
                  href={WA}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="lp-prod-wa"
                  aria-label={`Enquire about ${item.name} on WhatsApp`}
                >
                  <WhatsAppIcon size={16} /> WhatsApp for Price
                </a>
              </div>
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
