'use client';

import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronLeft, ChevronRight, ArrowRight, Snowflake, Star, Thermometer } from 'lucide-react';

/* ── Types ─────────────────────────────────────────────────────────────────── */
type RefrigItem = {
  id: number;
  name: string;
  capacity: string;
  image: string;
};

/* ── Placeholder images — replace with real product photos ─────────────────── */
const R1 = 'https://plus.unsplash.com/premium_photo-1723823036427-b19e6d270bb6?q=80&w=700&auto=format&fit=crop';
const R2 = 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=700&auto=format&fit=crop';
const R3 = 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=700&auto=format&fit=crop';
const R4 = 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?q=80&w=700&auto=format&fit=crop';
const R5 = 'https://images.unsplash.com/photo-1565299507177-b0ac66763828?q=80&w=700&auto=format&fit=crop';
const R6 = 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=700&auto=format&fit=crop';
const R7 = 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=700&auto=format&fit=crop';
const R8 = 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?q=80&w=700&auto=format&fit=crop';
const R9 = 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=700&auto=format&fit=crop';

/* ── 9 Refrigerator Items ───────────────────────────────────────────────────── */
const ITEMS: RefrigItem[] = [
  { id: 1, name: '3 Door Under Counter Refrigerator / Freezer',          capacity: 'Electric · Size Customised',      image: R1 },
  { id: 2, name: '3 Door Under Counter Pizza Makeline Refrigerator',     capacity: 'Electric · Size Customised',      image: R2 },
  { id: 3, name: 'Under Counter Pizza Makeline Refrigerator / Freezer',  capacity: 'Electric · Size Customised',      image: R3 },
  { id: 4, name: 'Glass Door Under Counter (Back Bar Chiller)',           capacity: 'Electric · Size Customised',      image: R4 },
  { id: 5, name: 'Chest Freezer (Deep Freezer)',                         capacity: 'Electric · 100 to 1000 Ltr.',     image: R5 },
  { id: 6, name: 'Visi Cooler',                                          capacity: 'Electric · 300 to 500 Ltr.',      image: R6 },
  { id: 7, name: 'Vertical Two Door Refrigerator / Freezer',             capacity: 'Electric · 400 to 600 Ltr.',      image: R7 },
  { id: 8, name: 'Vertical Four Door Refrigerator / Freezer',            capacity: 'Electric · 800 to 1200 Ltr.',     image: R8 },
  { id: 9, name: 'Walk in Chiller / Walk in Freezer',                    capacity: 'Electric · Size Customised',      image: R9 },
];

/* ── Carousel constants ─────────────────────────────────────────────────────── */
const CARD_W   = 380;
const CARD_GAP = 22;

/* ── Single Card ────────────────────────────────────────────────────────────── */
function RefrigCard({ item }: { item: RefrigItem }) {
  return (
    <article
      className="refrig-card"
      style={{
        width: CARD_W,
        height: 530,
        flexShrink: 0,
        borderRadius: '1.125rem',
        overflow: 'hidden',
        position: 'relative',
        cursor: 'pointer',
        boxShadow: '0 4px 24px rgba(0,0,0,0.11)',
      }}
    >
      {/* Full-bleed image */}
      <Image
        src={item.image}
        alt={item.name}
        fill
        sizes="(max-width: 640px) 85vw, 380px"
        style={{ objectFit: 'cover' }}
        className="refrig-card-img"
      />

      {/* Dark gradient overlay — heavy at bottom */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute', inset: 0,
          background:
            'linear-gradient(to top, rgba(4,3,2,0.97) 0%, rgba(4,3,2,0.70) 38%, rgba(4,3,2,0.14) 62%, transparent 100%)',
        }}
      />

      {/* ── Top badges row ──────────────────────────────────────────────── */}
      <div style={{
        position: 'absolute', top: 14, left: 14, right: 14,
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      }}>
        {/* Left — category badge (cool blue tint) */}
        <div style={{
          background: 'rgba(5, 18, 48, 0.62)',
          border: '1px solid rgba(120,180,255,0.38)',
          borderRadius: '999px',
          padding: '0.25rem 0.72rem',
          backdropFilter: 'blur(10px)',
          display: 'flex', alignItems: 'center', gap: '0.38rem',
        }}>
          <Snowflake size={9} style={{ color: '#90CAF9', flexShrink: 0 }} aria-hidden="true" />
          <span style={{
            fontFamily: 'var(--font-inter)',
            fontSize: '0.52rem',
            fontWeight: 700,
            letterSpacing: '0.16em',
            textTransform: 'uppercase',
            color: '#90CAF9',
          }}>
            Refrigerators
          </span>
        </div>

        {/* Right — ISO / rating badge */}
        <div style={{
          background: 'rgba(0,0,0,0.52)',
          border: '1px solid rgba(201,168,76,0.42)',
          borderRadius: '999px',
          padding: '0.25rem 0.72rem',
          backdropFilter: 'blur(10px)',
          display: 'flex', alignItems: 'center', gap: '0.35rem',
        }}>
          <Star size={9} fill="#FFC107" color="#FFC107" aria-hidden="true" />
          <span style={{
            fontFamily: 'var(--font-inter)',
            fontSize: '0.52rem',
            fontWeight: 700,
            color: 'rgba(255,255,255,0.88)',
            letterSpacing: '0.04em',
          }}>
            ISO 9001
          </span>
        </div>
      </div>

      {/* ── Bottom content ───────────────────────────────────────────────── */}
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '1.125rem' }}>
        <h3 style={{
          fontFamily: 'var(--font-playfair)',
          fontSize: '1rem',
          fontWeight: 700,
          color: '#FFFFFF',
          lineHeight: 1.25,
          marginBottom: '0.5rem',
        }}>
          {item.name}
        </h3>

        {/* Capacity with icon */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.38rem', marginBottom: '0.875rem' }}>
          <Thermometer size={11} style={{ color: 'rgba(144,202,249,0.65)', flexShrink: 0 }} aria-hidden="true" />
          <span style={{
            fontFamily: 'var(--font-inter)',
            fontSize: '0.715rem',
            color: 'rgba(255,255,255,0.50)',
            fontWeight: 500,
          }}>
            {item.capacity}
          </span>
        </div>

        {/* Divider */}
        <div aria-hidden="true" style={{ height: '1px', background: 'rgba(255,255,255,0.14)', marginBottom: '0.875rem' }} />

        {/* White pill CTA — matches reference design */}
        <Link
          href="/products?category=refrigerators"
          className="refrig-enquire-btn"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.4rem',
            width: '100%',
            padding: '0.625rem 1rem',
            borderRadius: '999px',
            background: '#FFFFFF',
            color: '#111008',
            fontFamily: 'var(--font-inter)',
            fontSize: '0.8125rem',
            fontWeight: 700,
            textDecoration: 'none',
            letterSpacing: '0.01em',
          }}
        >
          Get Enquiry
          <ArrowRight size={13} aria-hidden="true" />
        </Link>
      </div>
    </article>
  );
}

/* ── Nav Button ─────────────────────────────────────────────────────────────── */
function NavBtn({ dir, onClick }: { dir: 'prev' | 'next'; onClick: () => void }) {
  const isNext = dir === 'next';
  return (
    <button
      onClick={onClick}
      aria-label={isNext ? 'Next refrigerators' : 'Previous refrigerators'}
      className={isNext ? 'refrig-nav-next' : 'refrig-nav-prev'}
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
    >
      {isNext
        ? <ChevronRight size={20} style={{ color: '#1A1508' }} aria-hidden="true" />
        : <ChevronLeft  size={20} style={{ color: 'var(--text-dark)' }} aria-hidden="true" />}
    </button>
  );
}

/* ── Main Section ───────────────────────────────────────────────────────────── */
export default function RefrigeratorsCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);

  function scroll(dir: 'prev' | 'next') {
    const el = trackRef.current;
    if (!el) return;
    el.scrollBy({ left: (dir === 'next' ? 1 : -1) * (CARD_W + CARD_GAP), behavior: 'smooth' });
  }

  return (
    <section
      aria-labelledby="refrig-carousel-heading"
      style={{
        background: '#FFFFFF',
        padding: '4.5rem 0',
        borderTop: '1px solid var(--border)',
      }}
    >
      {/* ── Section header ──────────────────────────────────────────────── */}
      <div
        className="container mx-auto"
        style={{ textAlign: 'center', marginBottom: '2.5rem' }}
      >
        <p className="section-label" style={{ marginBottom: '0.625rem' }}>
          Cold Chain Solutions
        </p>
        <h2
          id="refrig-carousel-heading"
          style={{
            fontFamily: 'var(--font-playfair)',
            fontSize: 'clamp(1.625rem, 2.8vw, 2.375rem)',
            color: 'var(--text-dark)',
            lineHeight: 1.15,
            letterSpacing: '-0.02em',
            marginBottom: '0.875rem',
          }}
        >
          Refrigeration{' '}
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
          maxWidth: '520px',
          margin: '0 auto',
        }}>
          Commercial-grade cold storage for hotels, restaurants, hospitals and cloud kitchens.
          ISO 9001 certified supply &amp; pan-India installation.
        </p>
      </div>

      {/* ── Carousel ────────────────────────────────────────────────────── */}
      <div style={{ position: 'relative' }}>
        {/* Edge fades */}
        <div aria-hidden="true" className="refrig-fade-left" style={{
          position: 'absolute', top: 0, left: 0, bottom: 0, width: 72,
          background: 'linear-gradient(to right, #FFFFFF, transparent)',
          zIndex: 5, pointerEvents: 'none',
        }} />
        <div aria-hidden="true" className="refrig-fade-right" style={{
          position: 'absolute', top: 0, right: 0, bottom: 0, width: 72,
          background: 'linear-gradient(to left, #FFFFFF, transparent)',
          zIndex: 5, pointerEvents: 'none',
        }} />

        <NavBtn dir="prev" onClick={() => scroll('prev')} />

        {/* Scrollable track */}
        <div
          ref={trackRef}
          className="refrig-carousel-track"
          style={{
            display: 'flex',
            gap: CARD_GAP,
            overflowX: 'auto',
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
            WebkitOverflowScrolling: 'touch',
            padding: '24px 72px',
            scrollSnapType: 'x mandatory',
          } as React.CSSProperties}
        >
          {ITEMS.map((item) => (
            <RefrigCard key={item.id} item={item} />
          ))}
        </div>

        <NavBtn dir="next" onClick={() => scroll('next')} />
      </div>

      {/* ── Bottom CTA ──────────────────────────────────────────────────── */}
      <div style={{ textAlign: 'center', marginTop: '2.25rem' }}>
        <Link
          href="/products?category=refrigerators"
          className="btn-ghost inline-flex items-center gap-2"
          aria-label="Browse all refrigeration equipment"
        >
          View All Refrigeration Equipment
          <ArrowRight size={15} aria-hidden="true" />
        </Link>
      </div>
    </section>
  );
}
