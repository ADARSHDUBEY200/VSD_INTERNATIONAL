'use client';

import { useRef, useEffect, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

/* ── Types ─────────────────────────────────────────────────────────────────── */
type Card = {
  id: number;
  name: string;
  capacity: string;
  mainImage: string;
  thumbImages: [string, string, string, string];
};

/* ── Placeholder images — replace with real product photos ─────────────────── */
const I1 = 'https://plus.unsplash.com/premium_photo-1723823036427-b19e6d270bb6?q=80&w=900&auto=format&fit=crop';
const I2 = 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=600&auto=format&fit=crop';
const I3 = 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=600&auto=format&fit=crop';
const I4 = 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=600&auto=format&fit=crop';
const I5 = 'https://images.unsplash.com/photo-1565299507177-b0ac66763828?q=80&w=600&auto=format&fit=crop';

/* ── 9 Static Cards ─────────────────────────────────────────────────────────── */
const CARDS: Card[] = [
  { id: 1, name: 'Wet Masala Grinder',        capacity: 'Electric · 5 to 25 Ltr.',      mainImage: I1, thumbImages: [I2, I3, I4, I5] },
  { id: 2, name: 'Tilting Wet Grinder',        capacity: 'Electric · 5 to 30 Ltr.',      mainImage: I2, thumbImages: [I1, I4, I5, I3] },
  { id: 3, name: 'Dough Kneader',              capacity: 'Electric · 5 to 100 Ltr.',     mainImage: I3, thumbImages: [I4, I1, I2, I5] },
  { id: 4, name: 'Pulverizer Machine',         capacity: 'Electric · 2 / 3 / 5 HP',     mainImage: I4, thumbImages: [I5, I2, I1, I3] },
  { id: 5, name: 'Vegetable Cutting Machine',  capacity: 'Electric · 40–200 kg / hr',    mainImage: I5, thumbImages: [I1, I3, I4, I2] },
  { id: 6, name: 'Potato Peeler',              capacity: 'Electric · 5 to 50 kg',        mainImage: I1, thumbImages: [I3, I5, I2, I4] },
  { id: 7, name: 'Chapati Making Machine',     capacity: 'Electric · 500–2000 pcs / hr', mainImage: I2, thumbImages: [I4, I1, I3, I5] },
  { id: 8, name: 'Commercial Mixer Grinder',   capacity: 'Electric · 10 to 40 Ltr.',     mainImage: I3, thumbImages: [I2, I5, I1, I4] },
  { id: 9, name: 'Spice Pulverizer',           capacity: 'Electric · 20–100 kg / hr',    mainImage: I4, thumbImages: [I5, I3, I2, I1] },
];

/* ── Carousel constants ─────────────────────────────────────────────────────── */
const CARD_W   = 530;  // card width in px
const CARD_GAP = 20;   // gap between cards in px
const SPEED    = 0.7;  // auto-scroll speed: px per frame (~42px/s at 60fps)

/* ── Single Card — main image left · 2×2 thumbnails right ──────────────────── */
function CarouselCard({ card }: { card: Card }) {
  return (
    <article
      className="prep-card"
      style={{
        flexShrink: 0,
        background: '#FFFFFF',
        borderRadius: '1rem',
        border: '1px solid var(--border)',
        overflow: 'hidden',
        boxShadow: '0 4px 24px rgba(0,0,0,0.08)',
        display: 'flex',
        flexDirection: 'column',
        height: 300,
      }}
    >
      {/* ── Image area: main left (55%) + 2×2 grid right (45%) ─────────── */}
      <div
        style={{
          display: 'flex',
          flex: 1,
          overflow: 'hidden',
          background: '#14110C',
        }}
      >
        {/* Main image — left column (~55% of card) */}
        <div
          style={{
            position: 'relative',
            width: '55%',
            flexShrink: 0,
            overflow: 'hidden',
          }}
        >
          <Image
            src={card.mainImage}
            alt={card.name}
            fill
            sizes="(max-width: 640px) 55vw, 292px"
            style={{ objectFit: 'cover' }}
            className="prep-carousel-main-img"
          />
          {/* Gradient for text legibility */}
          <div
            aria-hidden="true"
            style={{
              position: 'absolute', inset: 0,
              background: 'linear-gradient(to top, rgba(5,4,2,0.86) 0%, rgba(5,4,2,0.10) 50%, transparent 100%)',
            }}
          />
          {/* Category badge */}
          <div
            aria-hidden="true"
            style={{
              position: 'absolute', top: 12, left: 12,
              background: 'rgba(0,0,0,0.50)',
              border: '1px solid rgba(201,168,76,0.55)',
              borderRadius: '999px',
              padding: '0.21rem 0.65rem',
              backdropFilter: 'blur(8px)',
            }}
          >
            <span style={{
              fontFamily: 'var(--font-inter)',
              fontSize: '0.555rem',
              fontWeight: 700,
              letterSpacing: '0.17em',
              textTransform: 'uppercase',
              color: 'var(--gold-light)',
            }}>
              Preparation
            </span>
          </div>
          {/* Product name + capacity overlaid at bottom */}
          <div style={{ position: 'absolute', bottom: 13, left: 13, right: 13 }}>
            <h3 style={{
              fontFamily: 'var(--font-playfair)',
              fontSize: '1rem',
              fontWeight: 700,
              color: '#FFFFFF',
              lineHeight: 1.2,
              marginBottom: '0.2rem',
            }}>
              {card.name}
            </h3>
            <p style={{
              fontFamily: 'var(--font-inter)',
              fontSize: '0.685rem',
              color: 'rgba(255,255,255,0.62)',
              fontWeight: 500,
            }}>
              {card.capacity}
            </p>
          </div>
        </div>

        {/* Separator */}
        <div style={{ width: 4, flexShrink: 0, background: '#14110C' }} aria-hidden="true" />

        {/* 2×2 thumbnail grid — right column */}
        <div
          style={{
            flex: 1,
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gridTemplateRows: '1fr 1fr',
            gap: '4px',
            overflow: 'hidden',
          }}
        >
          {card.thumbImages.map((src, i) => (
            <div
              key={i}
              style={{ position: 'relative', overflow: 'hidden' }}
            >
              <Image
                src={src}
                alt={`${card.name} — view ${i + 1}`}
                fill
                sizes="(max-width: 640px) 22vw, 117px"
                style={{ objectFit: 'cover' }}
                className="prep-carousel-thumb-img"
              />
            </div>
          ))}
        </div>
      </div>

    </article>
  );
}

/* ── Nav Button ─────────────────────────────────────────────────────────────── */
function NavBtn({
  dir, onClick,
}: { dir: 'prev' | 'next'; onClick: () => void }) {
  const isNext = dir === 'next';
  return (
    <button
      onClick={onClick}
      aria-label={isNext ? 'Next products' : 'Previous products'}
      style={{
        position: 'absolute',
        [isNext ? 'right' : 'left']: 14,
        top: '50%',
        transform: 'translateY(-50%)',
        zIndex: 10,
        width: 44,
        height: 44,
        borderRadius: '50%',
        border: isNext ? 'none' : '1.5px solid var(--border)',
        background: isNext
          ? 'linear-gradient(135deg, var(--gold-light) 0%, var(--gold) 50%, var(--gold-deep) 100%)'
          : '#FFFFFF',
        boxShadow: isNext
          ? '0 4px 18px rgba(201,168,76,0.42)'
          : '0 4px 14px rgba(0,0,0,0.10)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        transition: 'transform 0.18s ease, box-shadow 0.18s ease',
        flexShrink: 0,
      }}
      className={isNext ? 'prep-nav-next' : 'prep-nav-prev'}
    >
      {isNext
        ? <ChevronRight size={20} style={{ color: '#1A1508' }} aria-hidden="true" />
        : <ChevronLeft  size={20} style={{ color: 'var(--text-dark)' }} aria-hidden="true" />}
    </button>
  );
}

/* ── Main Section ───────────────────────────────────────────────────────────── */
export default function PreparationCarousel() {
  const trackRef  = useRef<HTMLDivElement>(null);
  const pausedRef = useRef(false);
  const rafRef    = useRef<number>(0);

  /* Auto-scroll tick */
  const tick = useCallback(() => {
    const el = trackRef.current;
    if (el && !pausedRef.current) {
      el.scrollLeft += SPEED;
      const half = el.scrollWidth / 2;
      if (el.scrollLeft >= half) el.scrollLeft -= half;
    }
    rafRef.current = requestAnimationFrame(tick);
  }, []);

  useEffect(() => {
    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [tick]);

  /* Touch pause / resume on mobile */
  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    let resumeTimer: ReturnType<typeof setTimeout>;
    const pause  = () => { clearTimeout(resumeTimer); pausedRef.current = true; };
    const resume = () => { resumeTimer = setTimeout(() => { pausedRef.current = false; }, 1800); };
    el.addEventListener('touchstart', pause,  { passive: true });
    el.addEventListener('touchend',   resume, { passive: true });
    return () => {
      el.removeEventListener('touchstart', pause);
      el.removeEventListener('touchend',   resume);
    };
  }, []);

  /* Button step */
  function step(dir: 'prev' | 'next') {
    const el = trackRef.current;
    if (!el) return;
    const jump = CARD_W + CARD_GAP;
    const half = el.scrollWidth / 2;
    let next = el.scrollLeft + (dir === 'next' ? jump : -jump);
    if (next < 0)    next += half;
    if (next >= half) next -= half;
    el.scrollLeft = next;
  }

  return (
    <section
      aria-labelledby="prep-carousel-heading"
      style={{
        background: '#FFFFFF',
        padding: '3.5rem 0',
        borderTop: '1px solid var(--border)',
      }}
    >
      {/* ── Section header ──────────────────────────────────────────────── */}
      <div
        className="container mx-auto"
        style={{ textAlign: 'center', marginBottom: '2.25rem' }}
      >
        <p className="section-label" style={{ marginBottom: '0.625rem' }}>
          Equipment Showcase
        </p>
        <h2
          id="prep-carousel-heading"
          style={{
            fontFamily: 'var(--font-playfair)',
            fontSize: 'clamp(1.625rem, 2.8vw, 2.375rem)',
            color: 'var(--text-dark)',
            lineHeight: 1.15,
            letterSpacing: '-0.02em',
            marginBottom: '0.875rem',
          }}
        >
          Preparation{' '}
          <span className="accent-gold" style={{ fontWeight: 800 }}>Equipment</span>{' '}
          We Supply
        </h2>
        <div
          aria-hidden="true"
          style={{
            width: '52px', height: '3px',
            background: 'linear-gradient(90deg, var(--gold-bright), var(--gold), var(--gold-deep))',
            borderRadius: '2px',
            margin: '0 auto 1rem',
          }}
        />
        <p style={{
          fontFamily: 'var(--font-inter)',
          fontSize: '0.9375rem',
          color: 'var(--text-muted)',
          lineHeight: 1.7,
          maxWidth: '500px',
          margin: '0 auto',
        }}>
          Precision-built preparation machines for hotels, hospitals, cloud kitchens
          &amp; institutions across India.
        </p>
      </div>

      {/* ── Carousel ────────────────────────────────────────────────────── */}
      <div style={{ position: 'relative' }}>
        {/* Gradient fade — left edge */}
        <div
          aria-hidden="true"
          className="prep-fade-left"
          style={{
            position: 'absolute', top: 0, left: 0, bottom: 0, width: 72,
            background: 'linear-gradient(to right, #FFFFFF, transparent)',
            zIndex: 5, pointerEvents: 'none',
          }}
        />
        {/* Gradient fade — right edge */}
        <div
          aria-hidden="true"
          className="prep-fade-right"
          style={{
            position: 'absolute', top: 0, right: 0, bottom: 0, width: 72,
            background: 'linear-gradient(to left, #FFFFFF, transparent)',
            zIndex: 5, pointerEvents: 'none',
          }}
        />

        {/* Prev button */}
        <NavBtn dir="prev" onClick={() => step('prev')} />

        {/* Scrollable track */}
        <div
          ref={trackRef}
          onMouseEnter={() => { pausedRef.current = true; }}
          onMouseLeave={() => { pausedRef.current = false; }}
          className="prep-carousel-track"
          style={{
            display: 'flex',
            gap: CARD_GAP,
            overflowX: 'auto',
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
            WebkitOverflowScrolling: 'touch',
            padding: '14px 72px',
          } as React.CSSProperties}
        >
          {[...CARDS, ...CARDS].map((card, idx) => (
            <CarouselCard key={`${card.id}-${idx}`} card={card} />
          ))}
        </div>

        {/* Next button */}
        <NavBtn dir="next" onClick={() => step('next')} />
      </div>

      {/* ── Bottom CTA ──────────────────────────────────────────────────── */}
      <div style={{ textAlign: 'center', marginTop: '2rem' }}>
        <Link
          href="/products?category=preparation"
          className="btn-ghost inline-flex items-center gap-2"
          aria-label="Browse all preparation equipment"
        >
          View All Preparation Equipment
          <ArrowRight size={15} aria-hidden="true" />
        </Link>
      </div>
    </section>
  );
}
