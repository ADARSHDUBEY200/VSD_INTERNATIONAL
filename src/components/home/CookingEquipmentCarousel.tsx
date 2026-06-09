'use client';

import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';

/* ── Types ─────────────────────────────────────────────────────────────────── */
type CookItem = {
  id: number;
  name: string;
  spec: string;
  image: string;
};

/* ── Placeholder images — replace with real product photos ─────────────────── */
const K1 = 'https://plus.unsplash.com/premium_photo-1723823036427-b19e6d270bb6?q=80&w=700&auto=format&fit=crop';
const K2 = 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=700&auto=format&fit=crop';
const K3 = 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=700&auto=format&fit=crop';
const K4 = 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?q=80&w=700&auto=format&fit=crop';
const K5 = 'https://images.unsplash.com/photo-1565299507177-b0ac66763828?q=80&w=700&auto=format&fit=crop';
const K6 = 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=700&auto=format&fit=crop';
const K7 = 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=700&auto=format&fit=crop';
const K8 = 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?q=80&w=700&auto=format&fit=crop';

/* ── 16 Cooking Equipment Items ─────────────────────────────────────────────── */
const ITEMS: CookItem[] = [
  { id:  1, name: 'Single Burner Range',         spec: 'Gas · Size Customised',             image: K1 },
  { id:  2, name: 'Three Burner Range',           spec: 'Gas · Size Customised',             image: K2 },
  { id:  3, name: 'Three Burner Chinese Range',   spec: 'Gas · Size Customised',             image: K3 },
  { id:  4, name: '4 Burner Range With Oven',     spec: 'Gas · Size Customised',             image: K4 },
  { id:  5, name: 'Gravy Grid (Griddle Plate)',   spec: 'Gas / Electric · Customised',       image: K5 },
  { id:  6, name: 'Deck Plate',                   spec: 'Gas · Size Customised',             image: K6 },
  { id:  7, name: 'Chapati Plate With Puffer',    spec: 'Gas · Size Customised',             image: K7 },
  { id:  8, name: 'Bulk Cooker (Rice Boiler)',    spec: 'Gas / Electric · 10–200 Ltr',       image: K8 },
  { id:  9, name: 'Tilting Braising Pan',         spec: 'Gas / Electric · 10–200 Ltr',       image: K1 },
  { id: 10, name: 'Deep Fat Fryer',               spec: 'Gas / Electric · 8–20 Ltr',         image: K2 },
  { id: 11, name: 'Pasta Cooker',                 spec: 'Gas / Electric · Customised',       image: K3 },
  { id: 12, name: 'Lava Grill (Stone)',           spec: 'Gas / Electric · Customised',       image: K4 },
  { id: 13, name: 'SS Mobile Tandoor',            spec: 'Gas / Charcoal · 2–4 Burner',       image: K5 },
  { id: 14, name: 'Charcoal Grill',               spec: 'Charcoal / Gas / Electric',         image: K6 },
  { id: 15, name: 'SS Steamer',                   spec: 'Gas / Electric · 30–250 Ltr',       image: K7 },
  { id: 16, name: 'Shawarma Grill',               spec: 'Gas / Electric · 2–4 Burner',       image: K8 },
];

/* ── Carousel constants ─────────────────────────────────────────────────────── */
const CARD_W   = 260;
const CARD_GAP = 18;

/* ── Single Card ────────────────────────────────────────────────────────────── */
function CookCard({ item }: { item: CookItem }) {
  return (
    <article
      className="cook-card"
      style={{
        width: CARD_W,
        height: 390,
        flexShrink: 0,
        borderRadius: '1rem',
        overflow: 'hidden',
        position: 'relative',
        boxShadow: '0 4px 20px rgba(0,0,0,0.09)',
        border: '1px solid var(--border)',
        cursor: 'pointer',
      }}
    >
      {/* Full-bleed image */}
      <Image
        src={item.image}
        alt={item.name}
        fill
        sizes="(max-width: 640px) 75vw, 260px"
        style={{ objectFit: 'cover' }}
        className="cook-card-img"
      />

      {/* Dark gradient overlay — bottom heavy */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(to top, rgba(5,4,2,0.93) 0%, rgba(5,4,2,0.42) 52%, transparent 100%)',
        }}
      />

      {/* Category badge — top left */}
      <div
        style={{
          position: 'absolute', top: 14, left: 14,
          background: 'rgba(0,0,0,0.52)',
          border: '1px solid rgba(201,168,76,0.52)',
          borderRadius: '999px',
          padding: '0.22rem 0.68rem',
          backdropFilter: 'blur(8px)',
          display: 'flex',
          alignItems: 'center',
          gap: '0.38rem',
        }}
      >
        <span
          aria-hidden="true"
          style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--gold)', flexShrink: 0, display: 'inline-block' }}
        />
        <span style={{
          fontFamily: 'var(--font-inter)',
          fontSize: '0.515rem',
          fontWeight: 700,
          letterSpacing: '0.17em',
          textTransform: 'uppercase',
          color: 'var(--gold-light)',
        }}>
          Cooking
        </span>
      </div>

      {/* Bottom content */}
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '1rem 1rem 1.125rem' }}>
        <h3 style={{
          fontFamily: 'var(--font-playfair)',
          fontSize: '1.0625rem',
          fontWeight: 700,
          color: '#FFFFFF',
          lineHeight: 1.2,
          marginBottom: '0.28rem',
        }}>
          {item.name}
        </h3>
        <p style={{
          fontFamily: 'var(--font-inter)',
          fontSize: '0.715rem',
          color: 'rgba(255,255,255,0.52)',
          marginBottom: '0.9rem',
          fontWeight: 500,
        }}>
          {item.spec}
        </p>
        <Link
          href="/products?category=cooking"
          className="cook-enquire-btn"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.35rem',
            padding: '0.42rem 0.9rem',
            borderRadius: '7px',
            background: 'rgba(255,255,255,0.12)',
            border: '1px solid rgba(255,255,255,0.28)',
            color: '#FFFFFF',
            fontFamily: 'var(--font-inter)',
            fontSize: '0.725rem',
            fontWeight: 600,
            textDecoration: 'none',
            backdropFilter: 'blur(6px)',
          }}
        >
          View Details
          <ArrowRight size={11} aria-hidden="true" />
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
      aria-label={isNext ? 'Next cooking equipment' : 'Previous cooking equipment'}
      className={isNext ? 'cook-nav-next' : 'cook-nav-prev'}
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
export default function CookingEquipmentCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);

  function scroll(dir: 'prev' | 'next') {
    const el = trackRef.current;
    if (!el) return;
    el.scrollBy({ left: (dir === 'next' ? 1 : -1) * (CARD_W + CARD_GAP), behavior: 'smooth' });
  }

  return (
    <section
      aria-labelledby="cook-carousel-heading"
      style={{
        background: '#FAFAF8',
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
          Product Range
        </p>
        <h2
          id="cook-carousel-heading"
          style={{
            fontFamily: 'var(--font-playfair)',
            fontSize: 'clamp(1.625rem, 2.8vw, 2.375rem)',
            color: 'var(--text-dark)',
            lineHeight: 1.15,
            letterSpacing: '-0.02em',
            marginBottom: '0.875rem',
          }}
        >
          Cooking{' '}
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
          High-performance gas &amp; electric cooking solutions for hotels, restaurants,
          hospitals and cloud kitchens across India.
        </p>
      </div>

      {/* ── Carousel ────────────────────────────────────────────────────── */}
      <div style={{ position: 'relative' }}>
        {/* Edge fades */}
        <div aria-hidden="true" className="cook-fade-left" style={{
          position: 'absolute', top: 0, left: 0, bottom: 0, width: 72,
          background: 'linear-gradient(to right, #FAFAF8, transparent)',
          zIndex: 5, pointerEvents: 'none',
        }} />
        <div aria-hidden="true" className="cook-fade-right" style={{
          position: 'absolute', top: 0, right: 0, bottom: 0, width: 72,
          background: 'linear-gradient(to left, #FAFAF8, transparent)',
          zIndex: 5, pointerEvents: 'none',
        }} />

        <NavBtn dir="prev" onClick={() => scroll('prev')} />

        {/* Scrollable track */}
        <div
          ref={trackRef}
          className="cook-carousel-track"
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
            <CookCard key={item.id} item={item} />
          ))}
        </div>

        <NavBtn dir="next" onClick={() => scroll('next')} />
      </div>

      {/* ── Bottom CTA ──────────────────────────────────────────────────── */}
      <div style={{ textAlign: 'center', marginTop: '2.25rem' }}>
        <Link
          href="/products?category=cooking"
          className="btn-ghost inline-flex items-center gap-2"
          aria-label="Browse all cooking equipment"
        >
          View All Cooking Equipment
          <ArrowRight size={15} aria-hidden="true" />
        </Link>
      </div>
    </section>
  );
}
