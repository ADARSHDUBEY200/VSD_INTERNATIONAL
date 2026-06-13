import type { Product } from '@/types/product';

interface ProductDescriptionProps {
  description: Product['description'];
  fullName: Product['fullName'];
  brand: Product['brand'];
}

const HIGHLIGHTS = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
    label: 'Construction',
    value: 'AISI 304 Grade',
    detail: 'Interior & exterior cabinet in austenitic 304 SS — withstands high-alkaline CIP detergent cycles for the full working life of the unit.',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 2a10 10 0 1 0 10 10"/><polyline points="12 6 12 12 16 14"/>
      </svg>
    ),
    label: 'Temperature Control',
    value: '±1 °C Uniformity',
    detail: 'HiDensityControl maintains ±1 °C across all 10 tray positions simultaneously — no hot spots, no batch variation.',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M5 12.55a11 11 0 0 1 14.08 0"/><path d="M1.42 9a16 16 0 0 1 21.16 0"/><path d="M8.53 16.11a6 6 0 0 1 6.95 0"/><line x1="12" y1="20" x2="12.01" y2="20"/>
      </svg>
    ),
    label: 'Connectivity',
    value: 'ConnectedCooking',
    detail: 'WLAN & LAN-ready — remote monitoring, recipe sync, and HACCP log export from any device, anywhere in India.',
  },
];

export default function ProductDescription({ description, brand }: ProductDescriptionProps) {
  const [lede, ...body] = description;

  return (
    <section aria-labelledby="description-heading" className="pdesc-section">
      <div className="container">

        {/* ── Eyebrow ── */}
        <div className="pdesc-eyebrow-row">
          <span className="pdesc-dot" aria-hidden="true" />
          <span className="pdesc-eyebrow">Product Story</span>
          <div className="pdesc-eyebrow-line" aria-hidden="true" />
        </div>

        {/* ── Heading ── */}
        <h2 id="description-heading" className="pdesc-heading">
          The engineering behind the {brand} iCombi Pro
        </h2>
        <div className="pdesc-rule" aria-hidden="true" />

        {/* ── Two-column: editorial text + heritage card ── */}
        <div className="pdesc-layout">

          {/* Left: editorial description */}
          <div className="pdesc-text">
            <div className="pdesc-lede-wrap">
              <div className="pdesc-lede-bar" aria-hidden="true" />
              <p className="pdesc-lede">
                <span className="pdesc-lede-quote" aria-hidden="true">&ldquo;</span>
                {lede}
              </p>
            </div>
            {body.length > 0 && (
              <div className="pdesc-body-wrap">
                {body.map((para, i) => (
                  <p key={i} className="pdesc-body">{para}</p>
                ))}
              </div>
            )}
          </div>

          {/* Right: brand heritage card */}
          <aside className="pdesc-card" aria-label={`${brand} brand heritage`}>
            <div className="pdesc-card-topline" aria-hidden="true" />
            <div className="pdesc-card-inner">

              <div className="pdesc-card-badge-row">
                <span className="pdesc-card-badge">Brand Heritage</span>
              </div>

              <div className="pdesc-card-est-block">
                <span className="pdesc-card-est-label">Est.</span>
                <span className="pdesc-card-est-year">1973</span>
              </div>

              <p className="pdesc-card-origin">Rational AG &middot; Landsberg am Lech, Bavaria</p>

              <div className="pdesc-card-divider" aria-hidden="true" />

              <div className="pdesc-card-stats">
                <div className="pdesc-card-stat">
                  <span className="pdesc-card-stat-val">150+</span>
                  <span className="pdesc-card-stat-lbl">Countries</span>
                </div>
                <div className="pdesc-card-sep" aria-hidden="true" />
                <div className="pdesc-card-stat">
                  <span className="pdesc-card-stat-val">50+</span>
                  <span className="pdesc-card-stat-lbl">Years innovation</span>
                </div>
                <div className="pdesc-card-sep" aria-hidden="true" />
                <div className="pdesc-card-stat">
                  <span className="pdesc-card-stat-val">#1</span>
                  <span className="pdesc-card-stat-lbl">Global brand</span>
                </div>
              </div>

              <div className="pdesc-card-quote">
                <p className="pdesc-card-quote-text">
                  &ldquo;We don&rsquo;t make ovens. We make chefs&rsquo; careers possible.&rdquo;
                </p>
                <span className="pdesc-card-quote-attr">Rational Engineering Philosophy</span>
              </div>

            </div>
            <span className="pdesc-card-watermark" aria-hidden="true">1973</span>
          </aside>

        </div>

        {/* ── Engineering highlights strip ── */}
        <div className="pdesc-highlights">
          {HIGHLIGHTS.map((h) => (
            <div key={h.label} className="pdesc-hl">
              <div className="pdesc-hl-topbar" aria-hidden="true" />
              <div className="pdesc-hl-icon">
                {h.icon}
              </div>
              <span className="pdesc-hl-label">{h.label}</span>
              <span className="pdesc-hl-value">{h.value}</span>
              <p className="pdesc-hl-detail">{h.detail}</p>
            </div>
          ))}
        </div>

      </div>

      <style>{`
        /* ── Section ── */
        .pdesc-section {
          background: #faf9f6;
          padding: 2.75rem 0 3rem;
          border-top: 1px solid var(--border);
        }

        /* ── Eyebrow ── */
        .pdesc-eyebrow-row {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin-bottom: 1rem;
        }
        .pdesc-dot {
          width: 6px; height: 6px;
          border-radius: 50%;
          background: var(--gold);
          flex-shrink: 0;
        }
        .pdesc-eyebrow {
          font-family: var(--font-inter), Inter, ui-sans-serif, sans-serif;
          font-size: 0.625rem;
          font-weight: 700;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--gold-deep);
          white-space: nowrap;
        }
        .pdesc-eyebrow-line {
          flex: 1;
          height: 1px;
          background: linear-gradient(90deg, var(--border), transparent);
        }

        /* ── Heading ── */
        .pdesc-heading {
          font-family: var(--font-playfair), 'Playfair Display', Georgia, serif;
          font-size: clamp(1.75rem, 3.5vw, 2.75rem);
          font-weight: 700;
          color: var(--text-dark);
          line-height: 1.12;
          letter-spacing: -0.02em;
          margin: 0 0 1rem;
        }
        .pdesc-rule {
          width: 48px; height: 3px;
          border-radius: 2px;
          background: linear-gradient(90deg, var(--gold), #e8b86d 50%, transparent);
          margin-bottom: 2rem;
        }

        /* ── Two-column main layout ── */
        .pdesc-layout {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2.5rem;
          margin-bottom: 2.5rem;
        }
        @media (min-width: 900px) {
          .pdesc-layout {
            grid-template-columns: 1fr 340px;
            gap: 3.5rem;
            align-items: start;
          }
        }

        /* ── Editorial text (left) ── */
        .pdesc-text {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        /* Lede paragraph with gold left bar */
        .pdesc-lede-wrap {
          position: relative;
          padding-left: 1.375rem;
        }
        .pdesc-lede-bar {
          position: absolute;
          left: 0; top: 0; bottom: 0;
          width: 3px;
          background: linear-gradient(to bottom, var(--gold), #c8922a);
          border-radius: 2px;
        }
        .pdesc-lede {
          font-family: var(--font-inter), Inter, ui-sans-serif, sans-serif;
          font-size: clamp(1.0625rem, 1.5vw, 1.1875rem);
          font-weight: 500;
          color: var(--text-dark);
          line-height: 1.78;
          margin: 0;
        }
        .pdesc-lede-quote {
          font-family: var(--font-playfair), 'Playfair Display', Georgia, serif;
          font-size: 2.25em;
          line-height: 0;
          vertical-align: -0.3em;
          color: var(--gold);
          opacity: 0.4;
          margin-right: 0.06em;
          user-select: none;
        }

        /* Body paragraphs */
        .pdesc-body-wrap {
          display: flex;
          flex-direction: column;
          gap: 1.125rem;
        }
        .pdesc-body {
          font-family: var(--font-inter), Inter, ui-sans-serif, sans-serif;
          font-size: 0.9375rem;
          color: var(--text-body);
          line-height: 1.85;
          margin: 0;
        }

        /* ── Heritage card (right) ── */
        .pdesc-card {
          position: relative;
          background: #1a1a16;
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 8px 40px rgba(0,0,0,0.18), 0 2px 8px rgba(0,0,0,0.08);
        }
        .pdesc-card-topline {
          height: 3px;
          background: linear-gradient(90deg, var(--gold), #c8922a 60%, transparent);
        }
        .pdesc-card-inner {
          position: relative;
          z-index: 1;
          padding: 1.625rem 1.75rem 1.875rem;
        }

        /* Badge */
        .pdesc-card-badge-row { margin-bottom: 1.375rem; }
        .pdesc-card-badge {
          display: inline-flex;
          align-items: center;
          padding: 0.25rem 0.75rem;
          border-radius: 999px;
          background: rgba(200,146,42,0.12);
          border: 1px solid rgba(200,146,42,0.25);
          font-family: var(--font-inter), Inter, ui-sans-serif, sans-serif;
          font-size: 0.5625rem;
          font-weight: 700;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: var(--gold);
        }

        /* Established year */
        .pdesc-card-est-block {
          display: flex;
          align-items: baseline;
          gap: 0.5rem;
          margin-bottom: 0.375rem;
        }
        .pdesc-card-est-label {
          font-family: var(--font-inter), Inter, ui-sans-serif, sans-serif;
          font-size: 0.8125rem;
          font-weight: 500;
          color: rgba(232,228,216,0.45);
          text-transform: uppercase;
          letter-spacing: 0.08em;
        }
        .pdesc-card-est-year {
          font-family: var(--font-playfair), 'Playfair Display', Georgia, serif;
          font-size: 3.25rem;
          font-weight: 700;
          color: var(--gold);
          line-height: 1;
          letter-spacing: -0.03em;
        }

        /* Origin */
        .pdesc-card-origin {
          font-family: var(--font-inter), Inter, ui-sans-serif, sans-serif;
          font-size: 0.6875rem;
          color: rgba(232,228,216,0.38);
          margin: 0 0 1.375rem;
          letter-spacing: 0.04em;
        }

        /* Thin gold divider */
        .pdesc-card-divider {
          height: 1px;
          background: linear-gradient(90deg, rgba(200,146,42,0.25), transparent);
          margin-bottom: 1.375rem;
        }

        /* Stats row */
        .pdesc-card-stats {
          display: flex;
          align-items: stretch;
          margin-bottom: 1.375rem;
        }
        .pdesc-card-stat {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 0.2rem;
        }
        .pdesc-card-sep {
          width: 1px;
          background: rgba(255,255,255,0.07);
          margin: 0 1rem;
          flex-shrink: 0;
        }
        .pdesc-card-stat-val {
          font-family: var(--font-playfair), 'Playfair Display', Georgia, serif;
          font-size: 1.5rem;
          font-weight: 700;
          color: #e8e4d8;
          line-height: 1;
          letter-spacing: -0.02em;
        }
        .pdesc-card-stat-lbl {
          font-family: var(--font-inter), Inter, ui-sans-serif, sans-serif;
          font-size: 0.5625rem;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: rgba(232,228,216,0.38);
          line-height: 1.35;
        }

        /* Inline quote */
        .pdesc-card-quote {
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 10px;
          padding: 1rem 1.125rem;
        }
        .pdesc-card-quote-text {
          font-family: var(--font-playfair), 'Playfair Display', Georgia, serif;
          font-size: 0.9375rem;
          font-style: italic;
          color: rgba(232,228,216,0.72);
          line-height: 1.65;
          margin: 0 0 0.5rem;
        }
        .pdesc-card-quote-attr {
          font-family: var(--font-inter), Inter, ui-sans-serif, sans-serif;
          font-size: 0.5rem;
          font-weight: 700;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: var(--gold);
          opacity: 0.65;
        }

        /* Decorative faint year watermark */
        .pdesc-card-watermark {
          position: absolute;
          bottom: -1rem;
          right: -0.25rem;
          font-family: var(--font-playfair), 'Playfair Display', Georgia, serif;
          font-size: 7.5rem;
          font-weight: 900;
          color: rgba(255,255,255,0.03);
          line-height: 1;
          pointer-events: none;
          user-select: none;
          letter-spacing: -0.04em;
          z-index: 0;
        }

        /* ── Engineering highlights strip ── */
        .pdesc-highlights {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1px;
          background: var(--border);
          border: 1px solid var(--border);
          border-radius: 14px;
          overflow: hidden;
        }
        @media (min-width: 640px) {
          .pdesc-highlights { grid-template-columns: repeat(3, 1fr); }
        }

        .pdesc-hl {
          position: relative;
          background: var(--white);
          padding: 1.5rem 1.625rem 1.75rem;
          display: flex;
          flex-direction: column;
          gap: 0.375rem;
          overflow: hidden;
          transition: background 0.18s ease;
        }
        .pdesc-hl:hover { background: #fdfdfc; }

        /* Gold top bar scaleX reveals on hover */
        .pdesc-hl-topbar {
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 2px;
          background: linear-gradient(90deg, var(--gold), #c8922a 70%, transparent);
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.25s ease;
        }
        .pdesc-hl:hover .pdesc-hl-topbar { transform: scaleX(1); }

        .pdesc-hl-icon {
          width: 40px; height: 40px;
          border-radius: 10px;
          background: rgba(200,146,42,0.08);
          border: 1px solid rgba(200,146,42,0.2);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--gold-deep);
          margin-bottom: 0.5rem;
          flex-shrink: 0;
          transition: background 0.18s ease, border-color 0.18s ease;
        }
        .pdesc-hl:hover .pdesc-hl-icon {
          background: rgba(200,146,42,0.15);
          border-color: rgba(200,146,42,0.4);
        }

        .pdesc-hl-label {
          font-family: var(--font-inter), Inter, ui-sans-serif, sans-serif;
          font-size: 0.5625rem;
          font-weight: 700;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: var(--gold-deep);
        }
        .pdesc-hl-value {
          font-family: var(--font-playfair), 'Playfair Display', Georgia, serif;
          font-size: 1.125rem;
          font-weight: 700;
          color: var(--text-dark);
          line-height: 1.2;
          letter-spacing: -0.01em;
        }
        .pdesc-hl-detail {
          font-family: var(--font-inter), Inter, ui-sans-serif, sans-serif;
          font-size: 0.8125rem;
          color: var(--text-muted);
          line-height: 1.72;
          margin: 0.125rem 0 0;
        }
      `}</style>
    </section>
  );
}
