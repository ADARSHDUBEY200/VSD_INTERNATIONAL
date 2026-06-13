import type { Product } from '@/types/product';

interface ProductBestForProps {
  bestFor: Product['bestFor'];
}

function getIndustryIcon(industry: string) {
  const l = industry.toLowerCase();
  if (l.includes('hotel') || l.includes('luxury') || l.includes('hospitality'))
    return (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>
      </svg>
    );
  if (l.includes('hospital') || l.includes('health') || l.includes('clinic') || l.includes('medical'))
    return (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
      </svg>
    );
  if (l.includes('central') || l.includes('production') || l.includes('cloud') || l.includes('airline') || l.includes('institutional'))
    return (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/><line x1="12" y1="12" x2="12" y2="16"/><line x1="10" y1="14" x2="14" y2="14"/>
      </svg>
    );
  if (l.includes('restaurant') || l.includes('qsr') || l.includes('dining') || l.includes('standalone'))
    return (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 11l19-9-9 19-2-8-8-2z"/>
      </svg>
    );
  if (l.includes('bake') || l.includes('pastry') || l.includes('patiss') || l.includes('confect'))
    return (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a10 10 0 0 1 10 10c0 5.52-4.48 10-10 10S2 17.52 2 12c0-2.76 1.12-5.26 2.93-7.07"/><path d="M12 6v6l4 2"/>
      </svg>
    );
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/>
    </svg>
  );
}

export default function ProductBestFor({ bestFor }: ProductBestForProps) {
  return (
    <section aria-labelledby="best-for-heading" className="pbf-section">
      <div className="container">

        {/* ── Header ── */}
        <div className="pbf-header">
          <div className="pbf-eyebrow-row">
            <span className="pbf-dot" aria-hidden="true" />
            <span className="pbf-eyebrow">Use Cases</span>
            <div className="pbf-eyebrow-line" aria-hidden="true" />
          </div>
          <div className="pbf-header-body">
            <h2 id="best-for-heading" className="pbf-heading">Who relies on this?</h2>
            <p className="pbf-sub">Trusted across India's most demanding professional kitchens.</p>
          </div>
        </div>

        {/* ── Cards grid ── */}
        <div className="pbf-grid">
          {bestFor.map((item, i) => (
            <article key={item.industry} className="pbf-card">
              {/* Index */}
              <span className="pbf-card-num" aria-hidden="true">
                {String(i + 1).padStart(2, '0')}
              </span>

              {/* Icon */}
              <div className="pbf-card-icon" aria-hidden="true">
                {getIndustryIcon(item.industry)}
              </div>

              <h3 className="pbf-card-title">{item.industry}</h3>
              <p className="pbf-card-desc">{item.description}</p>

              {/* Bottom gold accent bar */}
              <div className="pbf-card-bar" aria-hidden="true" />
            </article>
          ))}
        </div>

      </div>

      <style>{`
        /* ── Dark premium section ── */
        .pbf-section {
          background: #131310;
          padding: 2.75rem 0 3rem;
        }

        /* ── Header ── */
        .pbf-header {
          margin-bottom: 2.25rem;
        }
        .pbf-eyebrow-row {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin-bottom: 1rem;
        }
        .pbf-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--gold);
          flex-shrink: 0;
        }
        .pbf-eyebrow {
          font-family: var(--font-inter), Inter, ui-sans-serif, sans-serif;
          font-size: 0.625rem;
          font-weight: 700;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--gold);
          white-space: nowrap;
        }
        .pbf-eyebrow-line {
          flex: 1;
          height: 1px;
          background: linear-gradient(90deg, rgba(200,146,42,0.3), transparent);
        }
        .pbf-header-body {
          display: flex;
          align-items: baseline;
          gap: 2rem;
          flex-wrap: wrap;
        }
        .pbf-heading {
          font-family: var(--font-playfair), 'Playfair Display', Georgia, serif;
          font-size: clamp(1.75rem, 3vw, 2.5rem);
          font-weight: 700;
          color: #e8e4d8;
          line-height: 1.1;
          letter-spacing: -0.02em;
          margin: 0;
          white-space: nowrap;
        }
        .pbf-sub {
          font-family: var(--font-inter), Inter, ui-sans-serif, sans-serif;
          font-size: 0.9375rem;
          color: rgba(232,228,216,0.45);
          line-height: 1.6;
          margin: 0;
        }

        /* ── Grid ── */
        .pbf-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1px;
          background: rgba(255,255,255,0.07);
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 16px;
          overflow: hidden;
        }
        @media (max-width: 900px) {
          .pbf-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 540px) {
          .pbf-grid { grid-template-columns: 1fr; }
        }

        /* ── Card ── */
        .pbf-card {
          position: relative;
          background: #1a1a14;
          padding: 1.75rem 1.625rem 2rem;
          display: flex;
          flex-direction: column;
          gap: 0.625rem;
          overflow: hidden;
          transition: background 0.22s ease;
        }
        .pbf-card:hover { background: #212118; }

        /* Faint large index top-right */
        .pbf-card-num {
          position: absolute;
          top: 1rem;
          right: 1.25rem;
          font-family: var(--font-playfair), 'Playfair Display', Georgia, serif;
          font-size: 3.5rem;
          font-weight: 800;
          line-height: 1;
          color: rgba(255,255,255,0.04);
          letter-spacing: -0.04em;
          pointer-events: none;
          user-select: none;
          transition: color 0.22s ease;
        }
        .pbf-card:hover .pbf-card-num { color: rgba(200,146,42,0.1); }

        /* Icon */
        .pbf-card-icon {
          width: 44px;
          height: 44px;
          border-radius: 10px;
          background: rgba(200,146,42,0.12);
          border: 1px solid rgba(200,146,42,0.25);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--gold);
          flex-shrink: 0;
          margin-bottom: 0.25rem;
          transition: background 0.22s ease, border-color 0.22s ease, transform 0.22s ease;
        }
        .pbf-card:hover .pbf-card-icon {
          background: rgba(200,146,42,0.2);
          border-color: rgba(200,146,42,0.5);
          transform: scale(1.06);
        }

        .pbf-card-title {
          font-family: var(--font-playfair), 'Playfair Display', Georgia, serif;
          font-size: 1.0625rem;
          font-weight: 700;
          color: #e8e4d8;
          line-height: 1.3;
          margin: 0;
        }

        .pbf-card-desc {
          font-family: var(--font-inter), Inter, ui-sans-serif, sans-serif;
          font-size: 0.8375rem;
          color: rgba(232,228,216,0.55);
          line-height: 1.78;
          margin: 0;
          flex: 1;
          transition: color 0.22s ease;
        }
        .pbf-card:hover .pbf-card-desc { color: rgba(232,228,216,0.75); }

        /* Bottom gold bar — reveals on hover */
        .pbf-card-bar {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 2px;
          background: linear-gradient(90deg, var(--gold), #c8922a 60%, transparent);
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.28s ease;
        }
        .pbf-card:hover .pbf-card-bar { transform: scaleX(1); }
      `}</style>
    </section>
  );
}
