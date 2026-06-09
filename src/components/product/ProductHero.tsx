'use client';

import { useState } from 'react';
import Image from 'next/image';
import type { Product } from '@/types/product';
import { WHATSAPP_NUMBER } from '@/lib/config';

interface ProductHeroProps {
  product: Pick<
    Product,
    | 'brand'
    | 'fullName'
    | 'tagline'
    | 'images'
    | 'keyFacts'
    | 'priceContext'
    | 'leadTime'
    | 'whatsappMessage'
  >;
  heroCtaId?: string;
}

export default function ProductHero({ product, heroCtaId = 'hero-cta' }: ProductHeroProps) {
  const [activeIdx, setActiveIdx] = useState(0);
  const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(product.whatsappMessage)}`;

  return (
    <section
      aria-label={`${product.fullName} product hero`}
      style={{ background: 'var(--white)', padding: '3rem 0 4rem' }}
    >
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(0,1fr)',
            gap: '2.5rem',
            alignItems: 'start',
          }}
          className="product-hero-grid"
        >
          {/* ── IMAGE GALLERY ─────────────────────────────────────────────── */}
          <div>
            {/* Main image */}
            <div
              style={{
                position: 'relative',
                aspectRatio: '4/3',
                borderRadius: '12px',
                overflow: 'hidden',
                background: 'var(--surface-alt)',
                boxShadow: '0 0 40px var(--gold-glow-sm)',
                border: '1px solid var(--border)',
              }}
            >
              {product.images.map((src, i) => (
                <Image
                  key={src}
                  src={src}
                  // Production filenames follow the pattern: [brand]-[model-slug]-[view].webp
                  alt={
                    i === 0
                      ? `${product.brand} ${product.fullName} — front view`
                      : `${product.brand} ${product.fullName} — view ${i + 1}`
                  }
                  fill
                  priority={i === 0}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 55vw, 55vw"
                  style={{
                    objectFit: 'cover',
                    opacity: activeIdx === i ? 1 : 0,
                    transition: 'opacity 0.35s ease',
                    position: 'absolute',
                    inset: 0,
                  }}
                  placeholder="blur"
                  blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAwIiBoZWlnaHQ9IjYwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjRjRGMUVBIi8+PC9zdmc+"
                />
              ))}
            </div>

            {/* Thumbnail strip */}
            {product.images.length > 1 && (
              <div
                style={{
                  display: 'flex',
                  gap: '0.625rem',
                  marginTop: '0.875rem',
                  overflowX: 'auto',
                  WebkitOverflowScrolling: 'touch',
                  scrollbarWidth: 'none',
                  paddingBottom: '2px',
                }}
                role="list"
                aria-label="Product image thumbnails"
              >
                {product.images.map((src, i) => (
                  <button
                    key={src}
                    type="button"
                    role="listitem"
                    onClick={() => setActiveIdx(i)}
                    aria-label={`View image ${i + 1} of ${product.images.length}`}
                    aria-pressed={activeIdx === i}
                    style={{
                      flexShrink: 0,
                      position: 'relative',
                      width: '72px',
                      height: '54px',
                      borderRadius: '6px',
                      overflow: 'hidden',
                      border: activeIdx === i ? '2px solid var(--gold)' : '2px solid var(--border)',
                      background: 'var(--surface-alt)',
                      cursor: 'pointer',
                      padding: 0,
                      transition: 'border-color 0.18s ease',
                    }}
                  >
                    <Image
                      src={src}
                      alt={`${product.brand} ${product.fullName} thumbnail ${i + 1}`}
                      fill
                      loading="lazy"
                      sizes="72px"
                      style={{ objectFit: 'cover' }}
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* ── PRODUCT DETAILS PANEL ─────────────────────────────────────── */}
          <div>
            {/* Brand label */}
            <span
              style={{
                display: 'block',
                fontFamily: 'var(--font-dm-sans), DM Sans, sans-serif',
                fontSize: '0.75rem',
                fontWeight: 700,
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: 'var(--gold-deep)',
                marginBottom: '0.5rem',
              }}
            >
              {product.brand}
            </span>

            {/* H1 */}
            <h1
              style={{
                fontFamily: 'var(--font-cormorant), Cormorant Garamond, Georgia, serif',
                fontSize: 'clamp(1.9rem, 4vw, 2.75rem)',
                fontWeight: 700,
                color: 'var(--text-dark)',
                lineHeight: 1.1,
                letterSpacing: '-0.01em',
                marginBottom: '0.625rem',
              }}
            >
              {product.fullName}
            </h1>

            {/* Tagline */}
            <p
              style={{
                fontFamily: 'var(--font-dm-sans), DM Sans, sans-serif',
                fontSize: '1rem',
                color: 'var(--text-muted)',
                fontStyle: 'italic',
                marginBottom: '1.25rem',
                lineHeight: 1.6,
              }}
            >
              {product.tagline}
            </p>

            {/* Gold divider */}
            <div
              style={{
                width: '60px',
                height: '1px',
                background: 'var(--gold)',
                marginBottom: '1.5rem',
              }}
              aria-hidden="true"
            />

            {/* Key facts grid */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: '0.625rem',
                marginBottom: '1.5rem',
              }}
              aria-label="Key product facts"
            >
              {product.keyFacts.map((fact) => (
                <div
                  key={fact.label}
                  style={{
                    background: 'var(--surface-alt)',
                    border: '1px solid var(--border)',
                    borderRadius: '8px',
                    padding: '0.75rem 1rem',
                  }}
                >
                  <dt
                    style={{
                      fontFamily: 'var(--font-dm-sans), DM Sans, sans-serif',
                      fontSize: '0.6875rem',
                      fontWeight: 700,
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      color: 'var(--text-muted)',
                      marginBottom: '0.25rem',
                    }}
                  >
                    {fact.label}
                  </dt>
                  <dd
                    style={{
                      fontFamily: 'var(--font-dm-sans), DM Sans, sans-serif',
                      fontSize: '1rem',
                      fontWeight: 500,
                      color: 'var(--text-dark)',
                      margin: 0,
                    }}
                  >
                    {fact.value}
                  </dd>
                </div>
              ))}
            </div>

            {/* Price context */}
            <p
              style={{
                fontFamily: 'var(--font-dm-sans), DM Sans, sans-serif',
                fontSize: '0.875rem',
                color: 'var(--text-muted)',
                marginBottom: '0.5rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.375rem',
              }}
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
                style={{ flexShrink: 0, color: 'var(--gold)' }}
              >
                <circle cx="12" cy="12" r="10" />
                <line x1="12" y1="8" x2="12" y2="12" />
                <line x1="12" y1="16" x2="12.01" y2="16" />
              </svg>
              Indicative price: {product.priceContext}
            </p>

            {/* Lead time */}
            <p
              style={{
                fontFamily: 'var(--font-dm-sans), DM Sans, sans-serif',
                fontSize: '0.875rem',
                color: 'var(--text-muted)',
                marginBottom: '1.75rem',
              }}
            >
              <span
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.375rem',
                  padding: '0.25rem 0.75rem',
                  borderRadius: '999px',
                  background: 'var(--gold-pale)',
                  border: '1px solid var(--gold)',
                  color: 'var(--gold-deep)',
                  fontSize: '0.8125rem',
                  fontWeight: 500,
                }}
              >
                ⏱ Lead time: {product.leadTime}
              </span>
            </p>

            {/* Primary CTA */}
            <a
              id={heroCtaId}
              href="/contact/"
              className="btn-gold"
              style={{
                width: '100%',
                justifyContent: 'center',
                height: '52px',
                fontSize: '1rem',
                fontWeight: 600,
                marginBottom: '0.875rem',
                borderRadius: '4px',
              }}
              aria-label={`Get price and lead time for the ${product.fullName}`}
            >
              Get Price &amp; Lead Time
            </a>

            {/* WhatsApp secondary link */}
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.5rem',
                fontFamily: 'var(--font-dm-sans), DM Sans, sans-serif',
                fontSize: '0.9375rem',
                fontWeight: 500,
                color: '#25D366',
                textDecoration: 'none',
                transition: 'opacity 0.15s ease',
              }}
              aria-label={`Chat on WhatsApp about the ${product.fullName}`}
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 1024px) {
          .product-hero-grid {
            grid-template-columns: 55fr 45fr !important;
          }
        }
        .product-hero-grid > div:first-child img {
          will-change: opacity;
        }
      `}</style>
    </section>
  );
}
