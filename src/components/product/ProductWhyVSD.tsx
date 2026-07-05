import type { Product } from '@/types/product';

interface ProductWhyVSDProps {
  whyVSD: Product['whyVSD'];
}

export default function ProductWhyVSD({ whyVSD }: ProductWhyVSDProps) {
  return (
    <section aria-labelledby="why-vsd-heading" className="pvsd-section">
      <div className="container">
        <div className="pvsd-layout">

          {/* ── Left — sticky identity column ── */}
          <div className="pvsd-left">
            <div className="pvsd-eyebrow-row">
              <span className="pvsd-dot" aria-hidden="true" />
              <span className="pvsd-eyebrow">Why VSD</span>
            </div>

            <h2 id="why-vsd-heading" className="pvsd-heading">
              Why Buy From<br />VSD International
            </h2>

            <div className="pvsd-rule" aria-hidden="true" />

            <span className="pvsd-auth-badge">
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/>
              </svg>
              Authorised Dealer
            </span>

            <p className="pvsd-pitch">
              India's trusted partner for Rational commercial kitchen equipment — from survey to commissioning.
            </p>

            <a href="/contact" className="pvsd-cta">
              Get in Touch
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
              </svg>
            </a>

            {/* Stat row */}
            <div className="pvsd-stats">
              <div className="pvsd-stat">
                <span className="pvsd-stat-val">30+</span>
                <span className="pvsd-stat-lbl">Hotel kitchens</span>
              </div>
              <div className="pvsd-stat-sep" aria-hidden="true" />
              <div className="pvsd-stat">
                <span className="pvsd-stat-val">48h</span>
                <span className="pvsd-stat-lbl">Response time</span>
              </div>
              <div className="pvsd-stat-sep" aria-hidden="true" />
              <div className="pvsd-stat">
                <span className="pvsd-stat-val">15+</span>
                <span className="pvsd-stat-lbl">Years serving India</span>
              </div>
            </div>
          </div>

          {/* ── Right — reasons list ── */}
          <div className="pvsd-right">
            {whyVSD.map((item, i) => (
              <article key={item.point} className="pvsd-row">
                <div className="pvsd-row-accent" aria-hidden="true" />
                <span className="pvsd-row-num" aria-hidden="true">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div className="pvsd-row-body">
                  <h3 className="pvsd-row-title">{item.point}</h3>
                  <p className="pvsd-row-detail">{item.detail}</p>
                </div>
                <div className="pvsd-row-arrow" aria-hidden="true">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
                  </svg>
                </div>
              </article>
            ))}
          </div>

        </div>
      </div>

      <style>{`
        .pvsd-section {
          background: #faf9f6;
          padding: 2.75rem 0 3rem;
          border-top: 1px solid var(--border);
        }

        /* ── Two-column layout ── */
        .pvsd-layout {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2.5rem;
        }
        @media (min-width: 900px) {
          .pvsd-layout {
            grid-template-columns: 300px 1fr;
            gap: 4rem;
            align-items: start;
          }
        }

        /* ── Left column ── */
        .pvsd-left {
          display: flex;
          flex-direction: column;
          gap: 0;
        }
        @media (min-width: 900px) {
          .pvsd-left {
            position: sticky;
            top: 5rem;
          }
        }

        .pvsd-eyebrow-row {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin-bottom: 0.875rem;
        }
        .pvsd-dot {
          width: 6px; height: 6px;
          border-radius: 50%;
          background: var(--gold);
          flex-shrink: 0;
        }
        .pvsd-eyebrow {
          font-family: var(--font-inter), Inter, ui-sans-serif, sans-serif;
          font-size: 0.625rem;
          font-weight: 700;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--gold-deep);
        }

        .pvsd-heading {
          font-family: var(--font-playfair), 'Playfair Display', Georgia, serif;
          font-size: clamp(1.625rem, 2.5vw, 2.125rem);
          font-weight: 700;
          color: var(--text-dark);
          line-height: 1.15;
          letter-spacing: -0.02em;
          margin: 0 0 1.125rem;
        }

        .pvsd-rule {
          width: 40px; height: 2px;
          background: linear-gradient(90deg, var(--gold), transparent);
          margin-bottom: 1.25rem;
        }

        .pvsd-auth-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.375rem;
          padding: 0.3rem 0.875rem;
          border-radius: 999px;
          background: #1a1a16;
          color: var(--gold);
          font-family: var(--font-inter), Inter, ui-sans-serif, sans-serif;
          font-size: 0.625rem;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          margin-bottom: 1.125rem;
          width: fit-content;
        }

        .pvsd-pitch {
          font-family: var(--font-inter), Inter, ui-sans-serif, sans-serif;
          font-size: 0.875rem;
          color: var(--text-muted);
          line-height: 1.7;
          margin: 0 0 1.5rem;
        }

        .pvsd-cta {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.625rem 1.25rem;
          border-radius: 6px;
          background: var(--gold);
          color: #1a1a14;
          font-family: var(--font-inter), Inter, ui-sans-serif, sans-serif;
          font-size: 0.8125rem;
          font-weight: 700;
          text-decoration: none;
          width: fit-content;
          margin-bottom: 2rem;
          transition: opacity 0.15s ease, transform 0.15s ease;
        }
        .pvsd-cta:hover { opacity: 0.88; transform: translateY(-1px); }

        /* Mini stats strip */
        .pvsd-stats {
          display: flex;
          align-items: stretch;
          border: 1px solid #e8e2d4;
          border-radius: 10px;
          overflow: hidden;
          background: var(--white);
        }
        .pvsd-stat {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 0.875rem 0.5rem;
          gap: 0.2rem;
        }
        .pvsd-stat-sep {
          width: 1px;
          background: #e8e2d4;
          flex-shrink: 0;
        }
        .pvsd-stat-val {
          font-family: var(--font-playfair), 'Playfair Display', Georgia, serif;
          font-size: 1.375rem;
          font-weight: 700;
          color: var(--text-dark);
          line-height: 1;
        }
        .pvsd-stat-lbl {
          font-family: var(--font-inter), Inter, ui-sans-serif, sans-serif;
          font-size: 0.5625rem;
          font-weight: 600;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: var(--gold-deep);
          text-align: center;
          line-height: 1.3;
        }

        /* ── Right — reasons list ── */
        .pvsd-right {
          border-top: 1px solid var(--border);
        }

        .pvsd-row {
          position: relative;
          display: grid;
          grid-template-columns: 48px 1fr 32px;
          align-items: center;
          gap: 1.25rem;
          padding: 1.5rem 0;
          border-bottom: 1px solid var(--border);
          background: transparent;
          transition: background 0.18s ease;
          overflow: hidden;
          cursor: default;
        }
        .pvsd-row:hover { background: rgba(255,255,255,0.8); }

        .pvsd-row-accent {
          position: absolute;
          left: 0; top: 0; bottom: 0;
          width: 3px;
          background: linear-gradient(to bottom, var(--gold), #c8922a);
          transform: scaleY(0);
          transform-origin: top;
          transition: transform 0.22s ease;
          border-radius: 0 2px 2px 0;
        }
        .pvsd-row:hover .pvsd-row-accent { transform: scaleY(1); }

        .pvsd-row-num {
          font-family: var(--font-playfair), 'Playfair Display', Georgia, serif;
          font-size: 1.625rem;
          font-weight: 800;
          color: #e2ddd4;
          line-height: 1;
          letter-spacing: -0.04em;
          text-align: right;
          transition: color 0.18s ease;
        }
        .pvsd-row:hover .pvsd-row-num { color: var(--gold); }

        .pvsd-row-body { min-width: 0; }

        .pvsd-row-title {
          font-family: var(--font-playfair), 'Playfair Display', Georgia, serif;
          font-size: 1rem;
          font-weight: 700;
          color: var(--text-dark);
          margin: 0 0 0.375rem;
          line-height: 1.3;
        }
        .pvsd-row-detail {
          font-family: var(--font-inter), Inter, ui-sans-serif, sans-serif;
          font-size: 0.85rem;
          color: var(--text-muted);
          line-height: 1.72;
          margin: 0;
          transition: color 0.18s ease;
        }
        .pvsd-row:hover .pvsd-row-detail { color: var(--text-body); }

        .pvsd-row-arrow {
          color: #ddd8cc;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: color 0.18s ease, transform 0.18s ease;
        }
        .pvsd-row:hover .pvsd-row-arrow {
          color: var(--gold-deep);
          transform: translateX(3px);
        }

        @media (max-width: 540px) {
          .pvsd-row { grid-template-columns: 36px 1fr 28px; gap: 0.875rem; }
          .pvsd-row-num { font-size: 1.25rem; }
        }
      `}</style>
    </section>
  );
}
