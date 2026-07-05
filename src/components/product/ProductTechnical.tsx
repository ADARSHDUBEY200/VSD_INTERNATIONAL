import type { Product } from '@/types/product';

interface ProductTechnicalProps {
  technical: Product['technical'];
  compliance: Product['compliance'];
  fullName: Product['fullName'];
}

export default function ProductTechnical({ technical, compliance, fullName }: ProductTechnicalProps) {
  return (
    <section aria-labelledby="technical-heading" className="pt-section">
      <div className="container">

        {/* ── Header ── */}
        <div className="pt-header">
          <div className="pt-eyebrow-row">
            <span className="pt-dot" aria-hidden="true" />
            <span className="pt-eyebrow">Technical</span>
            <div className="pt-eyebrow-line" aria-hidden="true" />
          </div>
          <h2 id="technical-heading" className="pt-heading">
            Technical Details &amp; Compliance
          </h2>
        </div>

        {/* ── Two-column layout ── */}
        <div className="pt-layout">

          {/* ── Left: Installation requirements table ── */}
          <div className="pt-left">
            <div className="pt-block-header">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <circle cx="12" cy="12" r="3"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14M4.93 4.93a10 10 0 0 0 0 14.14"/>
              </svg>
              <h3 className="pt-block-title">Installation Requirements</h3>
            </div>
            <p className="pt-block-sub">{fullName}</p>

            <div className="pt-table-wrap">
              <dl className="pt-dl">
                {technical.map((item, i) => (
                  <div key={item.label} className={`pt-row${i === technical.length - 1 ? ' pt-row-last' : ''}`}>
                    <div className="pt-row-accent" aria-hidden="true" />
                    <dt className="pt-dt">{item.label}</dt>
                    <dd className="pt-dd">{item.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>

          {/* ── Right: Certifications ── */}
          <div className="pt-right">
            <div className="pt-block-header">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/>
              </svg>
              <h3 className="pt-block-title">Certifications &amp; Standards</h3>
            </div>
            <p className="pt-block-sub">All applicable compliance marks for this unit</p>

            {/* Cert cards */}
            <div className="pt-cert-grid">
              {compliance.map((cert, i) => (
                <div key={cert} className="pt-cert-card">
                  <span className="pt-cert-num" aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="pt-cert-check">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                  <span className="pt-cert-label">{cert}</span>
                </div>
              ))}
            </div>

            {/* VSD promise card */}
            <div className="pt-promise">
              <div className="pt-promise-topline" aria-hidden="true" />
              <div className="pt-promise-inner">
                <div className="pt-promise-icon" aria-hidden="true">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                  </svg>
                </div>
                <div>
                  <p className="pt-promise-text">
                    All Rational iCombi Pro units supplied by VSD International carry full Indian warranty.
                    Our engineers provide on-site commissioning, HACCP documentation support, and
                    post-installation service across India.
                  </p>
                  <a href="/services/commercial-kitchen-equipment" className="pt-promise-link">
                    Learn about our AMC service
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      <style>{`
        .pt-section {
          background: var(--white);
          padding: 2.75rem 0 3rem;
          border-top: 1px solid var(--border);
        }

        /* ── Header ── */
        .pt-header { margin-bottom: 2rem; }
        .pt-eyebrow-row {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin-bottom: 0.875rem;
        }
        .pt-dot {
          width: 6px; height: 6px;
          border-radius: 50%;
          background: var(--gold);
          flex-shrink: 0;
        }
        .pt-eyebrow {
          font-family: var(--font-inter), Inter, ui-sans-serif, sans-serif;
          font-size: 0.625rem;
          font-weight: 700;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--gold-deep);
          white-space: nowrap;
        }
        .pt-eyebrow-line {
          flex: 1;
          height: 1px;
          background: linear-gradient(90deg, var(--border), transparent);
        }
        .pt-heading {
          font-family: var(--font-playfair), 'Playfair Display', Georgia, serif;
          font-size: clamp(1.625rem, 3vw, 2.375rem);
          font-weight: 700;
          color: var(--text-dark);
          line-height: 1.12;
          letter-spacing: -0.02em;
          margin: 0;
        }

        /* ── Layout ── */
        .pt-layout {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2.5rem;
        }
        @media (min-width: 900px) {
          .pt-layout {
            grid-template-columns: 1.1fr 1fr;
            gap: 3.5rem;
            align-items: start;
          }
        }

        /* Block header — icon + title */
        .pt-block-header {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin-bottom: 0.25rem;
        }
        .pt-block-header svg { color: var(--gold-deep); flex-shrink: 0; }
        .pt-block-title {
          font-family: var(--font-inter), Inter, ui-sans-serif, sans-serif;
          font-size: 0.6875rem;
          font-weight: 700;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: var(--text-dark);
          margin: 0;
        }
        .pt-block-sub {
          font-family: var(--font-inter), Inter, ui-sans-serif, sans-serif;
          font-size: 0.6875rem;
          color: var(--text-muted);
          margin: 0 0 1.25rem;
          padding-left: 1.375rem;
        }

        /* ── Technical table ── */
        .pt-table-wrap {
          border: 1px solid var(--border);
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 2px 12px rgba(0,0,0,0.04);
        }
        .pt-dl { margin: 0; }

        .pt-row {
          position: relative;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 1rem;
          padding: 0.75rem 1.125rem;
          border-bottom: 1px solid var(--border);
          background: var(--white);
          transition: background 0.16s ease;
          overflow: hidden;
        }
        .pt-row-last { border-bottom: none; }
        .pt-row:nth-child(even) { background: #faf9f6; }
        .pt-row:hover { background: #f5f3ed; }

        .pt-row-accent {
          position: absolute;
          left: 0; top: 0; bottom: 0;
          width: 3px;
          background: var(--gold);
          transform: scaleY(0);
          transform-origin: center;
          transition: transform 0.18s ease;
        }
        .pt-row:hover .pt-row-accent { transform: scaleY(1); }

        .pt-dt {
          font-family: var(--font-inter), Inter, ui-sans-serif, sans-serif;
          font-size: 0.8125rem;
          color: var(--text-muted);
          font-weight: 400;
        }
        .pt-dd {
          font-family: var(--font-inter), Inter, ui-sans-serif, sans-serif;
          font-size: 0.8375rem;
          color: var(--text-dark);
          font-weight: 600;
          text-align: right;
          margin: 0;
          white-space: nowrap;
        }

        /* ── Certifications grid ── */
        .pt-cert-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0.625rem;
          margin-bottom: 1.25rem;
        }
        .pt-cert-card {
          position: relative;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.75rem 1rem;
          border-radius: 10px;
          background: #faf9f6;
          border: 1px solid #e8e2d4;
          transition: border-color 0.18s ease, background 0.18s ease, transform 0.18s ease;
          overflow: hidden;
        }
        .pt-cert-card:hover {
          border-color: var(--gold);
          background: var(--gold-pale, #fffbe6);
          transform: translateY(-2px);
        }
        .pt-cert-num {
          position: absolute;
          top: 0.4rem; right: 0.6rem;
          font-family: var(--font-inter), Inter, ui-sans-serif, sans-serif;
          font-size: 0.5rem;
          font-weight: 700;
          color: var(--border);
          letter-spacing: 0.06em;
        }
        .pt-cert-check {
          color: var(--gold-deep);
          flex-shrink: 0;
        }
        .pt-cert-label {
          font-family: var(--font-inter), Inter, ui-sans-serif, sans-serif;
          font-size: 0.75rem;
          font-weight: 600;
          color: var(--text-dark);
          line-height: 1.3;
        }

        /* ── VSD Promise card ── */
        .pt-promise {
          border-radius: 12px;
          background: #1a1a16;
          overflow: hidden;
          box-shadow: 0 4px 20px rgba(0,0,0,0.12);
        }
        .pt-promise-topline {
          height: 3px;
          background: linear-gradient(90deg, var(--gold), #c8922a 60%, transparent);
        }
        .pt-promise-inner {
          display: flex;
          gap: 1rem;
          padding: 1.25rem 1.375rem;
          align-items: flex-start;
        }
        .pt-promise-icon {
          width: 36px; height: 36px;
          border-radius: 8px;
          background: rgba(200,146,42,0.15);
          border: 1px solid rgba(200,146,42,0.3);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--gold);
          flex-shrink: 0;
        }
        .pt-promise-text {
          font-family: var(--font-inter), Inter, ui-sans-serif, sans-serif;
          font-size: 0.8125rem;
          color: rgba(232,228,216,0.7);
          line-height: 1.72;
          margin: 0 0 0.75rem;
        }
        .pt-promise-link {
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          font-family: var(--font-inter), Inter, ui-sans-serif, sans-serif;
          font-size: 0.75rem;
          font-weight: 600;
          color: var(--gold);
          text-decoration: none;
          transition: gap 0.15s ease, opacity 0.15s ease;
        }
        .pt-promise-link:hover { gap: 0.55rem; opacity: 0.8; }
        .pt-promise-link svg { flex-shrink: 0; }
      `}</style>
    </section>
  );
}
