'use client';
import { useState, useEffect, useCallback } from 'react';
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
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIdx, setLightboxIdx] = useState(0);

  const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(product.whatsappMessage)}`;

  const openLightbox = (idx: number) => { setLightboxIdx(idx); setLightboxOpen(true); };
  const closeLightbox = () => setLightboxOpen(false);

  const prevLightbox = useCallback(() => {
    setLightboxIdx((i) => (i === 0 ? product.images.length - 1 : i - 1));
  }, [product.images.length]);

  const nextLightbox = useCallback(() => {
    setLightboxIdx((i) => (i === product.images.length - 1 ? 0 : i + 1));
  }, [product.images.length]);

  useEffect(() => {
    if (!lightboxOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') prevLightbox();
      if (e.key === 'ArrowRight') nextLightbox();
    };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [lightboxOpen, prevLightbox, nextLightbox]);

  const subImages = product.images.slice(1, 4);
  const totalImages = product.images.length;
  // 3× duplication → -33.333% = exactly one full set (seamless loop)
  const loopImgs = [...product.images, ...product.images, ...product.images];

  // Icon mapping for key fact cards
  const getFactIcon = (label: string) => {
    const l = label.toLowerCase();
    if (l.includes('capaci') || l.includes('tray') || l.includes('size'))
      return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/></svg>;
    if (l.includes('power') || l.includes('kw') || l.includes('watt') || l.includes('electric'))
      return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>;
    if (l.includes('cook') || l.includes('mode') || l.includes('steam') || l.includes('heat') || l.includes('air'))
      return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/></svg>;
    if (l.includes('control') || l.includes('touch') || l.includes('display') || l.includes('panel') || l.includes('interface'))
      return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>;
    if (l.includes('material') || l.includes('steel') || l.includes('stainless') || l.includes('finish'))
      return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>;
    if (l.includes('warrant') || l.includes('guarant') || l.includes('certif'))
      return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/></svg>;
    if (l.includes('weight') || l.includes('kg') || l.includes('dimension'))
      return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="5" r="3"/><line x1="12" y1="22" x2="12" y2="8"/><path d="M5 12H2a10 10 0 0 0 20 0h-3"/></svg>;
    return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>;
  };

  return (
    <>
      <section
        aria-label={`${product.fullName} product hero`}
        className="ph-section"
      >
        <div className="container">

          {/* ── GALLERY + RIGHT VERTICAL CAROUSEL (side by side) ─── */}
          <div className="ph-gallery-wrapper">

            {/* 4-image gallery grid */}
            <div className="ph-gallery-grid">

              {/* Large hero image — spans both rows */}
              <button
                type="button"
                className="ph-main-cell"
                onClick={() => openLightbox(0)}
                aria-label={`${product.brand} ${product.fullName} — front view (click to open gallery)`}
              >
                <Image
                  src={product.images[0]}
                  alt={`${product.brand} ${product.fullName} — front view`}
                  fill
                  priority
                  sizes="(max-width: 767px) 100vw, 55vw"
                  style={{ objectFit: 'cover' }}
                  placeholder="blur"
                  blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAwIiBoZWlnaHQ9IjYwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjRjRGMUVBIi8+PC9zdmc+"
                />
                <div className="ph-cell-hover" aria-hidden="true">
                  <span className="ph-expand-icon">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/>
                    </svg>
                  </span>
                </div>
              </button>

              {/* Right 2×2 sub-grid */}
              <div className="ph-right-grid">
                {subImages.map((src, i) => (
                  <button
                    key={src}
                    type="button"
                    className="ph-sub-cell"
                    onClick={() => openLightbox(i + 1)}
                    aria-label={`${product.brand} ${product.fullName} — image ${i + 2}`}
                  >
                    <Image
                      src={src}
                      alt={`${product.brand} ${product.fullName} — view ${i + 2}`}
                      fill
                      loading="lazy"
                      sizes="(max-width: 767px) 50vw, 18vw"
                      style={{ objectFit: 'cover' }}
                    />
                    <div className="ph-cell-hover" aria-hidden="true" />
                  </button>
                ))}

                {/* 4th tile — "View all" */}
                <button
                  type="button"
                  className="ph-sub-cell ph-viewall-cell"
                  onClick={() => openLightbox(0)}
                  aria-label={`View all ${totalImages} photos`}
                >
                  <div className="ph-viewall-inner">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                      <circle cx="8.5" cy="8.5" r="1.5"/>
                      <polyline points="21 15 16 10 5 21"/>
                    </svg>
                    <span className="ph-viewall-label">View all photos</span>
                    <span className="ph-viewall-count">{totalImages} images</span>
                  </div>
                </button>
              </div>
            </div>

            {/* ── VERTICAL bottom-to-top carousel — right of gallery ── */}
            <div className="ph-vcar" aria-hidden="true">
              <div className="ph-vcar-track">
                {loopImgs.map((src, i) => (
                  <div key={`v-${i}`} className="ph-vcar-item">
                    <Image
                      src={src}
                      alt=""
                      fill
                      sizes="120px"
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          

          {/* Mobile-only: "View all photos" link */}
          <button
            type="button"
            className="ph-mobile-gallery-link"
            onClick={() => openLightbox(0)}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
              <circle cx="8.5" cy="8.5" r="1.5"/>
              <polyline points="21 15 16 10 5 21"/>
            </svg>
            View all {totalImages} photos
          </button>

          {/* ── HERO PANEL — warm contained card ────────────────── */}
          <div className="ph-hero-panel">

            {/* ── PRODUCT INFO GRID ── */}
            <div className="ph-info-grid">

              {/* ── Identity (left) ── */}
              <div className="ph-identity">
                <span className="ph-brand-badge">{product.brand}</span>
                <h1 className="ph-title">{product.fullName}</h1>
                <p className="ph-tagline">{product.tagline}</p>

                {/* Quick stats strip — 3 headline numbers */}
                <div className="ph-stats-strip" aria-label="Key product highlights">
                  {product.keyFacts.slice(0, 3).map((fact, i) => (
                    <div key={fact.label} className="ph-stat-item">
                      {i > 0 && <div className="ph-stat-sep" aria-hidden="true" />}
                      <div className="ph-stat-content">
                        <span className="ph-stat-value">{fact.value}</span>
                        <span className="ph-stat-label">{fact.label}</span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="ph-divider" aria-hidden="true" />

                <div className="ph-trust-chips">
                  {(['Authorized Dealer', 'Delhi Stock', 'ISO 9001', '5-Star Approved'] as const).map((label) => (
                    <span key={label} className="ph-chip">
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg>
                      {label}
                    </span>
                  ))}
                </div>
              </div>

              {/* ── CTA Panel (right) — dark premium card ── */}
              <div className="ph-cta-panel">
                <div className="ph-cta-topline" aria-hidden="true" />
                <div className="ph-cta-inner">

                  <p className="ph-cta-eyebrow">Request a Quote</p>

                  <div className="ph-price-block">
                    <span className="ph-price-label">Indicative Price</span>
                    <span className="ph-price-value">{product.priceContext}</span>
                  </div>

                  <div className="ph-lead-block">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
                    </svg>
                    Lead time:&nbsp;<strong>{product.leadTime}</strong>
                  </div>

                  <div className="ph-cta-sep" aria-hidden="true" />

                  <a
                    id={heroCtaId}
                    href="/contact/"
                    className="btn-gold ph-cta-primary"
                    aria-label={`Get price and lead time for the ${product.fullName}`}
                  >
                    Get Price &amp; Lead Time
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
                    </svg>
                  </a>

                  <a
                    href={waUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ph-wa-link"
                    aria-label={`Chat on WhatsApp about the ${product.fullName}`}
                  >
                    <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                    Chat on WhatsApp
                  </a>
                </div>

                <div className="ph-cta-trust">
                  <span>ISO 9001</span>
                  <span className="ph-cta-dot" />
                  <span>Delhi Stock</span>
                  <span className="ph-cta-dot" />
                  <span>2yr Warranty</span>
                </div>
              </div>
            </div>

            {/* ── KEY SPECS inside panel ── */}
            <div className="ph-specs-wrap">
              <div className="ph-specs-header">
                <span className="ph-specs-eyebrow">Key Specifications</span>
                <div className="ph-specs-line" aria-hidden="true" />
              </div>
              <dl className="ph-facts-strip" aria-label="Key product facts">
                {product.keyFacts.map((fact) => (
                  <div key={fact.label} className="ph-fact-card">
                    <div className="ph-fact-icon" aria-hidden="true">
                      {getFactIcon(fact.label)}
                    </div>
                    <dt className="ph-fact-label">{fact.label}</dt>
                    <dd className="ph-fact-value">{fact.value}</dd>
                  </div>
                ))}
              </dl>
            </div>

          </div>{/* end ph-hero-panel */}

        </div>

        {/* ── Scoped styles ───────────────────────────────────────── */}
        <style>{`

          .ph-section {
            background: var(--white);
            padding-bottom: 2.5rem;
          }

          /* ── Outer wrapper: gallery grid + vertical carousel side by side ── */
          .ph-gallery-wrapper {
            display: flex;
            gap: 6px;
            height: 500px;
            margin-top: 1.5rem;
            border-radius: 16px;
            overflow: hidden;
          }
          @media (max-width: 767px) {
            .ph-gallery-wrapper {
              height: auto;
              border-radius: 12px;
            }
          }

          /* 4-image gallery grid — flex child */
          .ph-gallery-grid {
            display: grid;
            grid-template-columns: 3fr 2fr;
            gap: 6px;
            flex: 1;
            min-width: 0;
            height: 100%;
          }
          @media (max-width: 767px) {
            .ph-gallery-grid {
              grid-template-columns: 1fr;
              height: auto;
            }
          }

          /* Main hero cell — round left outer corners */
          .ph-main-cell {
            position: relative;
            width: 100%;
            height: 100%;
            overflow: hidden;
            cursor: pointer;
            display: block;
            padding: 0;
            border: none;
            background: var(--surface-alt);
            border-top-left-radius: 10px;
            border-bottom-left-radius: 10px;
          }
          @media (max-width: 767px) {
            .ph-main-cell { aspect-ratio: 4 / 3; height: auto; border-radius: 10px; }
          }

          /* Right 2×2 sub-grid */
          .ph-right-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-template-rows: 1fr 1fr;
            gap: 6px;
            height: 100%;
          }
          @media (max-width: 767px) {
            .ph-right-grid { display: none; }
          }

          /* Individual sub cells */
          .ph-sub-cell {
            position: relative;
            width: 100%;
            height: 100%;
            overflow: hidden;
            cursor: pointer;
            display: block;
            padding: 0;
            border: none;
            background: var(--surface-alt);
          }
          /* Top-right cell: round top-right outer corner */
          .ph-right-grid > :nth-child(2) {
            border-top-right-radius: 10px;
          }
          /* Bottom-left cell: round bottom-left outer corner */
          .ph-right-grid > :nth-child(3) {
            border-bottom-left-radius: 10px;
          }
          /* Bottom-right cell (viewall): round bottom-right outer corner */
          .ph-right-grid > :nth-child(4) {
            border-bottom-right-radius: 10px;
            overflow: hidden;
          }
          .ph-right-grid > :nth-child(4) .ph-viewall-inner {
            border-bottom-right-radius: 10px;
          }

          /* Hover overlay */
          .ph-cell-hover {
            position: absolute;
            inset: 0;
            background: rgba(8, 6, 2, 0);
            transition: background 0.22s ease;
            z-index: 2;
          }
          .ph-main-cell:hover .ph-cell-hover,
          .ph-sub-cell:hover .ph-cell-hover {
            background: rgba(8, 6, 2, 0.2);
          }

          /* Expand icon on main hover */
          .ph-expand-icon {
            position: absolute;
            bottom: 18px;
            right: 18px;
            z-index: 3;
            width: 40px;
            height: 40px;
            border-radius: 50%;
            background: rgba(255,255,255,0.14);
            backdrop-filter: blur(8px);
            -webkit-backdrop-filter: blur(8px);
            border: 1px solid rgba(255,255,255,0.28);
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            opacity: 0;
            transform: scale(0.85);
            transition: opacity 0.22s ease, transform 0.22s ease;
          }
          .ph-main-cell:hover .ph-expand-icon {
            opacity: 1;
            transform: scale(1);
          }

          /* "View all" tile */
          .ph-viewall-inner {
            position: absolute;
            inset: 0;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 0.4rem;
            background: var(--surface-alt);
            border: 1px solid var(--border);
            transition: background 0.2s ease, border-color 0.2s ease;
          }
          .ph-viewall-cell:hover .ph-viewall-inner {
            background: var(--gold-pale);
            border-color: var(--gold);
          }
          .ph-viewall-inner svg { color: var(--gold-deep); }
          .ph-viewall-label {
            font-family: var(--font-inter), Inter, ui-sans-serif, sans-serif;
            font-size: 0.8125rem;
            font-weight: 600;
            color: var(--text-dark);
          }
          .ph-viewall-count {
            font-family: var(--font-inter), Inter, ui-sans-serif, sans-serif;
            font-size: 0.6875rem;
            color: var(--text-muted);
          }

          /* ── Vertical carousel — right column of wrapper ── */
          .ph-vcar {
            flex-shrink: 0;
            width: 120px;
            height: 100%;
            overflow: hidden;
            border-radius: 10px;
            mask-image: linear-gradient(to bottom,
              transparent 0%,
              #000 14%,
              #000 86%,
              transparent 100%
            );
            -webkit-mask-image: linear-gradient(to bottom,
              transparent 0%,
              #000 14%,
              #000 86%,
              transparent 100%
            );
          }
          @media (max-width: 767px) {
            .ph-vcar { display: none; }
          }
          .ph-vcar-track {
            display: flex;
            flex-direction: column;
            animation: ph-scroll-up 9s linear infinite;
          }
          .ph-vcar:hover .ph-vcar-track {
            animation-play-state: paused;
          }
          /* margin-bottom on each item (not gap) ensures -33.333% = exactly one set */
          .ph-vcar-item {
            position: relative;
            width: 120px;
            height: 110px;
            flex-shrink: 0;
            border-radius: 8px;
            overflow: hidden;
            margin-bottom: 8px;
          }
          @keyframes ph-scroll-up {
            from { transform: translateY(0); }
            to   { transform: translateY(-33.333%); }
          }

          /* ── Horizontal carousel — directly below wrapper ── */
          .ph-hcar {
            overflow: hidden;
            margin-top: 6px;
            border-radius: 10px;
            mask-image: linear-gradient(to right,
              transparent 0%,
              #000 5%,
              #000 95%,
              transparent 100%
            );
            -webkit-mask-image: linear-gradient(to right,
              transparent 0%,
              #000 5%,
              #000 95%,
              transparent 100%
            );
          }
          .ph-hcar-track {
            display: flex;
            animation: ph-scroll-left 16s linear infinite;
            width: max-content;
          }
          .ph-hcar:hover .ph-hcar-track {
            animation-play-state: paused;
          }
          /* margin-right on each item for perfect -33.333% loop */
          .ph-hcar-item {
            position: relative;
            width: 250px;
            height: 155px;
            flex-shrink: 0;
            border-radius: 8px;
            overflow: hidden;
            margin-right: 6px;
          }
          @keyframes ph-scroll-left {
            from { transform: translateX(0); }
            to   { transform: translateX(-33.333%); }
          }

          /* Mobile "view all" link */
          .ph-mobile-gallery-link {
            display: none;
            align-items: center;
            gap: 0.4rem;
            margin-top: 0.625rem;
            font-family: var(--font-inter), Inter, ui-sans-serif, sans-serif;
            font-size: 0.8125rem;
            font-weight: 500;
            color: var(--text-muted);
            background: none;
            border: none;
            cursor: pointer;
            padding: 0;
            text-decoration: underline;
            text-underline-offset: 3px;
          }
          @media (max-width: 767px) {
            .ph-mobile-gallery-link { display: flex; }
          }

          /* ── Hero panel wrapper — warm contained card ── */
          .ph-hero-panel {
            margin-top: 1.25rem;
            background: #faf9f6;
            border: 1px solid #ede9df;
            border-radius: 16px;
            padding: 2rem 2rem 1.75rem;
            box-shadow: 0 2px 20px rgba(0,0,0,0.05), 0 1px 4px rgba(0,0,0,0.03);
          }
          @media (max-width: 767px) {
            .ph-hero-panel { padding: 1.25rem; border-radius: 12px; }
          }

          /* ── Product info ── */
          .ph-info-grid {
            display: grid;
            grid-template-columns: 1fr;
            gap: 1.5rem;
            align-items: start;
          }
          @media (min-width: 768px) {
            .ph-info-grid {
              grid-template-columns: 1fr 288px;
              gap: 2.5rem;
            }
          }

          /* Brand badge — gold pill */
          .ph-brand-badge {
            display: inline-flex;
            align-items: center;
            padding: 0.25rem 0.75rem;
            border-radius: 999px;
            background: var(--gold-pale, #fffbe6);
            border: 1px solid var(--gold);
            font-family: var(--font-inter), Inter, ui-sans-serif, sans-serif;
            font-size: 0.625rem;
            font-weight: 700;
            letter-spacing: 0.15em;
            text-transform: uppercase;
            color: var(--gold-deep);
            margin-bottom: 0.625rem;
          }

          .ph-title {
            font-family: var(--font-playfair), 'Playfair Display', Georgia, serif;
            font-size: clamp(1.65rem, 3.5vw, 2.75rem);
            font-weight: 700;
            color: var(--text-dark);
            line-height: 1.1;
            letter-spacing: -0.015em;
            margin-bottom: 0.5rem;
          }
          .ph-tagline {
            font-family: var(--font-inter), Inter, ui-sans-serif, sans-serif;
            font-size: 0.9375rem;
            color: var(--text-muted);
            font-style: italic;
            margin-bottom: 0.875rem;
            line-height: 1.6;
            max-width: 52ch;
          }
          /* Quick stats strip */
          .ph-stats-strip {
            display: flex;
            align-items: stretch;
            border: 1px solid #e8e2d4;
            border-radius: 10px;
            overflow: hidden;
            margin-bottom: 1.125rem;
            background: var(--white);
          }
          .ph-stat-item {
            display: flex;
            align-items: stretch;
            flex: 1;
            min-width: 0;
          }
          .ph-stat-sep {
            width: 1px;
            background: #e8e2d4;
            flex-shrink: 0;
          }
          .ph-stat-content {
            display: flex;
            flex-direction: column;
            padding: 0.75rem 1rem;
            gap: 0.2rem;
            flex: 1;
            min-width: 0;
          }
          .ph-stat-value {
            font-family: var(--font-inter), Inter, ui-sans-serif, sans-serif;
            font-size: 0.9375rem;
            font-weight: 700;
            color: var(--text-dark);
            line-height: 1.2;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
          }
          .ph-stat-label {
            font-family: var(--font-inter), Inter, ui-sans-serif, sans-serif;
            font-size: 0.5625rem;
            font-weight: 600;
            letter-spacing: 0.1em;
            text-transform: uppercase;
            color: var(--gold-deep);
          }

          .ph-divider {
            width: 40px;
            height: 2px;
            background: linear-gradient(90deg, var(--gold), transparent);
            margin-bottom: 0.875rem;
          }

          /* Trust chips row */
          .ph-trust-chips {
            display: flex;
            flex-wrap: wrap;
            gap: 0.375rem;
          }
          .ph-chip {
            display: inline-flex;
            align-items: center;
            gap: 0.275rem;
            padding: 0.2rem 0.625rem;
            border-radius: 999px;
            background: #f5f5f0;
            border: 1px solid #e2e0d8;
            font-family: var(--font-inter), Inter, ui-sans-serif, sans-serif;
            font-size: 0.625rem;
            font-weight: 600;
            color: var(--text-muted);
            letter-spacing: 0.02em;
          }
          .ph-chip svg { color: var(--gold-deep); flex-shrink: 0; }

          /* ── CTA card — dark charcoal premium card ── */
          .ph-cta-panel {
            border-radius: 12px;
            background: #1a1a16;
            color: #e8e4d8;
            overflow: hidden;
            box-shadow: 0 8px 32px rgba(0,0,0,0.16), 0 2px 6px rgba(0,0,0,0.1);
          }
          /* Gold top-accent line */
          .ph-cta-topline {
            height: 3px;
            background: linear-gradient(90deg, var(--gold), #c8922a 60%, transparent);
          }
          /* Inner padded container */
          .ph-cta-inner {
            padding: 1.125rem 1.375rem 1rem;
          }

          .ph-cta-eyebrow {
            font-family: var(--font-inter), Inter, ui-sans-serif, sans-serif;
            font-size: 0.5625rem;
            font-weight: 700;
            letter-spacing: 0.2em;
            text-transform: uppercase;
            color: var(--gold);
            margin: 0 0 0.75rem;
          }

          .ph-price-block {
            display: flex;
            flex-direction: column;
            gap: 0.125rem;
            margin-bottom: 0.625rem;
          }
          .ph-price-label {
            font-family: var(--font-inter), Inter, ui-sans-serif, sans-serif;
            font-size: 0.5625rem;
            font-weight: 600;
            letter-spacing: 0.08em;
            text-transform: uppercase;
            color: rgba(232,228,216,0.45);
          }
          .ph-price-value {
            font-family: var(--font-inter), Inter, ui-sans-serif, sans-serif;
            font-size: 1rem;
            font-weight: 700;
            color: #e8e4d8;
            line-height: 1.3;
          }

          .ph-lead-block {
            display: flex;
            align-items: center;
            gap: 0.4rem;
            margin-bottom: 0.875rem;
            font-family: var(--font-inter), Inter, ui-sans-serif, sans-serif;
            font-size: 0.75rem;
            color: rgba(232,228,216,0.6);
          }
          .ph-lead-block strong {
            color: #e8e4d8;
            font-weight: 600;
          }
          .ph-lead-block svg { color: var(--gold); flex-shrink: 0; }

          .ph-cta-sep {
            height: 1px;
            background: rgba(255,255,255,0.08);
            margin-bottom: 0.875rem;
          }

          .ph-cta-primary {
            display: flex;
            width: 100%;
            justify-content: center;
            align-items: center;
            gap: 0.5rem;
            height: 44px;
            font-size: 0.875rem;
            font-weight: 600;
            border-radius: 6px;
            margin-bottom: 0.625rem;
          }

          .ph-wa-link {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 0.4rem;
            font-family: var(--font-inter), Inter, ui-sans-serif, sans-serif;
            font-size: 0.875rem;
            font-weight: 500;
            color: #25D366;
            text-decoration: none;
            transition: opacity 0.15s ease;
          }
          .ph-wa-link:hover { opacity: 0.8; }

          /* Bottom trust row inside CTA card */
          .ph-cta-trust {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 0.5rem;
            padding: 0.625rem 1.375rem;
            border-top: 1px solid rgba(255,255,255,0.07);
            font-family: var(--font-inter), Inter, ui-sans-serif, sans-serif;
            font-size: 0.5625rem;
            font-weight: 500;
            color: rgba(232,228,216,0.38);
            letter-spacing: 0.05em;
            text-transform: uppercase;
          }
          .ph-cta-dot {
            width: 2px;
            height: 2px;
            border-radius: 50%;
            background: rgba(232,228,216,0.25);
            display: inline-block;
          }

          /* ── Key Specs section ── */
          .ph-specs-wrap {
            margin-top: 1.5rem;
            padding-top: 1.5rem;
            border-top: 1px solid #e8e2d4;
          }
          .ph-specs-header {
            display: flex;
            align-items: center;
            gap: 1rem;
            margin-bottom: 1rem;
          }
          .ph-specs-eyebrow {
            font-family: var(--font-inter), Inter, ui-sans-serif, sans-serif;
            font-size: 0.5625rem;
            font-weight: 700;
            letter-spacing: 0.2em;
            text-transform: uppercase;
            color: var(--gold-deep);
            white-space: nowrap;
          }
          .ph-specs-line {
            flex: 1;
            height: 1px;
            background: linear-gradient(90deg, var(--border), transparent);
          }

          /* Key facts grid */
          .ph-facts-strip {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 0.625rem;
          }
          @media (min-width: 640px) {
            .ph-facts-strip { grid-template-columns: repeat(3, 1fr); }
          }
          @media (min-width: 1024px) {
            .ph-facts-strip { grid-template-columns: repeat(${product.keyFacts.length}, 1fr); }
          }
          .ph-fact-card {
            background: var(--white);
            border: 1px solid #e8e2d4;
            border-radius: 10px;
            padding: 0.875rem 1rem 0.75rem;
            display: flex;
            flex-direction: column;
            gap: 0.375rem;
            transition: border-color 0.18s ease, box-shadow 0.18s ease, transform 0.18s ease;
          }
          .ph-fact-card:hover {
            border-color: var(--gold-light);
            box-shadow: 0 4px 16px var(--gold-glow-sm);
            transform: translateY(-2px);
          }
          .ph-fact-icon {
            width: 30px;
            height: 30px;
            border-radius: 7px;
            background: var(--gold-pale, #fffbe6);
            display: flex;
            align-items: center;
            justify-content: center;
            color: var(--gold-deep);
            flex-shrink: 0;
          }
          .ph-fact-icon svg { width: 16px; height: 16px; }
          .ph-fact-label {
            display: block;
            font-family: var(--font-inter), Inter, ui-sans-serif, sans-serif;
            font-size: 0.5625rem;
            font-weight: 700;
            letter-spacing: 0.12em;
            text-transform: uppercase;
            color: var(--text-muted);
            margin: 0;
          }
          .ph-fact-value {
            font-family: var(--font-inter), Inter, ui-sans-serif, sans-serif;
            font-size: 0.875rem;
            font-weight: 600;
            color: var(--text-dark);
            margin: 0;
            line-height: 1.3;
          }
        `}</style>
      </section>

      {/* ── LIGHTBOX ──────────────────────────────────────────────────────── */}
      {lightboxOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`${product.fullName} image gallery`}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 9999,
            background: 'rgba(8, 8, 10, 0.95)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '4.5rem 1rem 1rem',
          }}
          onClick={(e) => { if (e.target === e.currentTarget) closeLightbox(); }}
        >
          <div style={{
            position: 'absolute',
            top: 0, left: 0, right: 0,
            height: '56px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '0 1.25rem',
            borderBottom: '1px solid rgba(201,168,76,0.15)',
            backdropFilter: 'blur(8px)',
          }}>
            <span style={{ fontFamily: 'var(--font-inter), Inter, ui-sans-serif, sans-serif', fontSize: '0.8125rem', fontWeight: 600, color: 'rgba(255,255,255,0.7)', letterSpacing: '0.04em', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
              {product.brand} — {product.fullName}
            </span>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexShrink: 0 }}>
              <span style={{ fontFamily: 'var(--font-inter), Inter, ui-sans-serif, sans-serif', fontSize: '0.8125rem', color: 'var(--gold)', fontWeight: 600 }}>
                {lightboxIdx + 1} <span style={{ color: 'rgba(255,255,255,0.35)' }}>/</span> {product.images.length}
              </span>
              <button
                type="button"
                onClick={closeLightbox}
                aria-label="Close gallery"
                style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.15)', borderRadius: '50%', width: '36px', height: '36px', color: 'white', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.25rem', lineHeight: 1, transition: 'background 0.15s ease' }}
                onMouseEnter={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.2)')}
                onMouseLeave={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.1)')}
              >×</button>
            </div>
          </div>

          <div style={{ position: 'relative', width: '100%', maxWidth: '920px', flex: '1 1 auto', minHeight: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            {product.images.length > 1 && (
              <button type="button" onClick={prevLightbox} aria-label="Previous image"
                style={{ position: 'absolute', left: '-4px', top: '50%', transform: 'translateY(-50%)', zIndex: 2, background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)', borderRadius: '50%', width: '48px', height: '48px', color: 'white', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'background 0.15s ease, border-color 0.15s ease' }}
                onMouseEnter={e => { e.currentTarget.style.background = 'rgba(201,168,76,0.25)'; e.currentTarget.style.borderColor = 'var(--gold)'; }}
                onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.1)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)'; }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="15 18 9 12 15 6"/></svg>
              </button>
            )}
            <div style={{ position: 'relative', width: '100%', aspectRatio: '4 / 3', borderRadius: '8px', overflow: 'hidden', border: '1px solid rgba(201,168,76,0.2)' }}>
              <Image
                src={product.images[lightboxIdx]}
                alt={lightboxIdx === 0 ? `${product.brand} ${product.fullName} — front view` : `${product.brand} ${product.fullName} — view ${lightboxIdx + 1}`}
                fill sizes="(max-width: 920px) 100vw, 920px" style={{ objectFit: 'contain' }} priority
              />
            </div>
            {product.images.length > 1 && (
              <button type="button" onClick={nextLightbox} aria-label="Next image"
                style={{ position: 'absolute', right: '-4px', top: '50%', transform: 'translateY(-50%)', zIndex: 2, background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)', borderRadius: '50%', width: '48px', height: '48px', color: 'white', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'background 0.15s ease, border-color 0.15s ease' }}
                onMouseEnter={e => { e.currentTarget.style.background = 'rgba(201,168,76,0.25)'; e.currentTarget.style.borderColor = 'var(--gold)'; }}
                onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.1)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)'; }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="9 18 15 12 9 6"/></svg>
              </button>
            )}
          </div>

          {product.images.length > 1 && (
            <div style={{ display: 'flex', gap: '0.5rem', marginTop: '0.875rem', overflowX: 'auto', maxWidth: '920px', width: '100%', justifyContent: 'center', padding: '4px 0', scrollbarWidth: 'none', flexShrink: 0 }} role="list" aria-label="Gallery thumbnails">
              {product.images.map((src, i) => (
                <button key={src} type="button" role="listitem" onClick={() => setLightboxIdx(i)} aria-label={`View image ${i + 1}`} aria-pressed={lightboxIdx === i}
                  style={{ position: 'relative', flexShrink: 0, width: '72px', height: '54px', borderRadius: '5px', overflow: 'hidden', border: lightboxIdx === i ? '2px solid var(--gold)' : '2px solid rgba(255,255,255,0.2)', cursor: 'pointer', padding: 0, background: 'rgba(255,255,255,0.05)', opacity: lightboxIdx === i ? 1 : 0.55, transition: 'border-color 0.15s ease, opacity 0.15s ease, transform 0.15s ease', transform: lightboxIdx === i ? 'scale(1.06)' : 'scale(1)' }}
                  onMouseEnter={e => { if (lightboxIdx !== i) e.currentTarget.style.opacity = '0.85'; }}
                  onMouseLeave={e => { if (lightboxIdx !== i) e.currentTarget.style.opacity = '0.55'; }}
                >
                  <Image src={src} alt={`View ${i + 1}`} fill sizes="72px" style={{ objectFit: 'cover' }} />
                </button>
              ))}
            </div>
          )}

          <p style={{ marginTop: '0.625rem', fontFamily: 'var(--font-inter), Inter, ui-sans-serif, sans-serif', fontSize: '0.6875rem', color: 'rgba(255,255,255,0.25)', letterSpacing: '0.06em', flexShrink: 0 }}>
            ← → navigate &nbsp;·&nbsp; ESC close
          </p>
        </div>
      )}
    </>
  );
}
