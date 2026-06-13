import type { Product } from '@/types/product';

interface ProductFeaturesProps {
  features: Product['features'];
}

export default function ProductFeatures({ features }: ProductFeaturesProps) {
  return (
    <section aria-labelledby="features-heading" className="pf-section">
      <div className="container">

        {/* ── Header ── */}
        <div className="pf-header">
          <div className="pf-eyebrow-row">
            <span className="pf-dot" aria-hidden="true" />
            <span className="pf-eyebrow">Features &amp; Benefits</span>
            <div className="pf-eyebrow-line" aria-hidden="true" />
          </div>
          <h2 id="features-heading" className="pf-heading">
            Built different. Engineered to perform.
          </h2>
          <p className="pf-sub">
            Every feature is a deliberate engineering decision — tested in professional kitchens across India before it reaches yours.
          </p>
        </div>

        {/* ── Feature rows ── */}
        <div className="pf-list" role="list">
          {features.map((feature, i) => (
            <article key={feature.title} className="pf-row" role="listitem">

              {/* Index number */}
              <span className="pf-row-num" aria-hidden="true">
                {String(i + 1).padStart(2, '0')}
              </span>

              {/* Check badge */}
              <div className="pf-row-badge" aria-hidden="true">
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" strokeWidth="3"
                  strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
              </div>

              {/* Title */}
              <h3 className="pf-row-title">{feature.title}</h3>

              {/* Description */}
              <p className="pf-row-desc">{feature.description}</p>

              {/* Hover arrow */}
              <div className="pf-row-arrow" aria-hidden="true">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" strokeWidth="1.75"
                  strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"/>
                  <polyline points="12 5 19 12 12 19"/>
                </svg>
              </div>

              {/* Gold left-accent */}
              <div className="pf-row-accent" aria-hidden="true" />
            </article>
          ))}
        </div>

      </div>

      <style>{`
        .pf-section {
          background: var(--white);
          padding: 2.75rem 0 0;
          border-top: 1px solid var(--border);
        }

        /* ── Header ── */
        .pf-header {
          margin-bottom: 2rem;
        }
        .pf-eyebrow-row {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin-bottom: 1rem;
        }
        .pf-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--gold);
          flex-shrink: 0;
        }
        .pf-eyebrow {
          font-family: var(--font-inter), Inter, ui-sans-serif, sans-serif;
          font-size: 0.625rem;
          font-weight: 700;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--gold-deep);
          white-space: nowrap;
        }
        .pf-eyebrow-line {
          flex: 1;
          height: 1px;
          background: linear-gradient(90deg, var(--border), transparent);
        }

        .pf-heading {
          font-family: var(--font-playfair), 'Playfair Display', Georgia, serif;
          font-size: clamp(1.375rem, 2.4vw, 2rem);
          font-weight: 800;
          color: var(--text-dark);
          line-height: 1.2;
          letter-spacing: -0.02em;
          margin: 0 0 0.875rem;
          white-space: nowrap;
        }
        @media (max-width: 640px) {
          .pf-heading { white-space: normal; }
        }
        .pf-sub {
          font-family: var(--font-inter), Inter, ui-sans-serif, sans-serif;
          font-size: 0.9375rem;
          color: var(--text-muted);
          line-height: 1.65;
          margin: 0;
          max-width: 58ch;
        }

        /* ── Feature list ── */
        .pf-list {
          border-top: 1px solid var(--border);
        }

        .pf-row {
          position: relative;
          display: grid;
          grid-template-columns: 52px 36px 1fr 1fr 40px;
          align-items: center;
          gap: 0 1.5rem;
          padding: 1.5rem 0;
          border-bottom: 1px solid var(--border);
          transition: background 0.2s ease;
          overflow: hidden;
          cursor: default;
        }
        @media (max-width: 767px) {
          .pf-row {
            grid-template-columns: 40px 28px 1fr 32px;
            grid-template-rows: auto auto;
            gap: 0.375rem 0.875rem;
            padding: 1.25rem 0;
          }
        }

        /* Hover state */
        .pf-row:hover { background: #faf9f6; }

        /* Gold left-accent line */
        .pf-row-accent {
          position: absolute;
          left: -1px;
          top: 0;
          bottom: 0;
          width: 3px;
          background: linear-gradient(to bottom, var(--gold), #c8922a);
          transform: scaleY(0);
          transform-origin: top;
          transition: transform 0.24s ease;
          border-radius: 0 2px 2px 0;
        }
        .pf-row:hover .pf-row-accent { transform: scaleY(1); }

        /* Index number */
        .pf-row-num {
          font-family: var(--font-playfair), 'Playfair Display', Georgia, serif;
          font-size: 1.75rem;
          font-weight: 800;
          color: var(--border);
          line-height: 1;
          letter-spacing: -0.04em;
          transition: color 0.2s ease;
          text-align: right;
        }
        .pf-row:hover .pf-row-num { color: var(--gold); }

        /* Badge */
        .pf-row-badge {
          width: 32px;
          height: 32px;
          border-radius: 8px;
          background: var(--gold-pale, #fffbe6);
          border: 1px solid var(--gold);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--gold-deep);
          flex-shrink: 0;
          transition: background 0.2s ease, transform 0.2s ease;
        }
        .pf-row:hover .pf-row-badge {
          background: var(--gold);
          color: #fff;
          transform: rotate(5deg) scale(1.05);
        }
        @media (max-width: 767px) {
          .pf-row-badge { width: 26px; height: 26px; border-radius: 6px; }
        }

        /* Title */
        .pf-row-title {
          font-family: var(--font-playfair), 'Playfair Display', Georgia, serif;
          font-size: clamp(0.9375rem, 1.2vw, 1.125rem);
          font-weight: 700;
          color: var(--text-dark);
          line-height: 1.3;
          margin: 0;
          transition: color 0.2s ease;
        }
        .pf-row:hover .pf-row-title { color: #1a1a14; }
        @media (max-width: 767px) {
          .pf-row-title {
            grid-column: 3 / 4;
            grid-row: 1;
          }
        }

        /* Description */
        .pf-row-desc {
          font-family: var(--font-inter), Inter, ui-sans-serif, sans-serif;
          font-size: 0.875rem;
          color: var(--text-muted);
          line-height: 1.72;
          margin: 0;
          transition: color 0.2s ease;
        }
        .pf-row:hover .pf-row-desc { color: var(--text-body); }
        @media (max-width: 767px) {
          .pf-row-desc {
            grid-column: 1 / -1;
            grid-row: 2;
            padding-left: calc(40px + 28px + 1.75rem);
            font-size: 0.8125rem;
          }
        }

        /* Arrow */
        .pf-row-arrow {
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--border);
          transition: color 0.2s ease, transform 0.2s ease;
          flex-shrink: 0;
        }
        .pf-row:hover .pf-row-arrow {
          color: var(--gold-deep);
          transform: translateX(4px);
        }
        @media (max-width: 767px) {
          .pf-row-arrow { grid-row: 1; }
        }
      `}</style>
    </section>
  );
}
