import type { Product } from '@/types/product';

interface ProductProofProps {
  projectProof: Product['projectProof'];
  fullName: Product['fullName'];
}

export default function ProductProof({ projectProof, fullName }: ProductProofProps) {
  return (
    <section aria-labelledby="proof-heading" className="pproof-section">
      <div className="container">

        {/* ── Header ── */}
        <div className="pproof-header">
          <div className="pproof-eyebrow-row">
            <span className="pproof-dot" aria-hidden="true" />
            <span className="pproof-eyebrow">Project Proof</span>
            <div className="pproof-eyebrow-line" aria-hidden="true" />
          </div>
          <div className="pproof-heading-row">
            <h2 id="proof-heading" className="pproof-heading">
              Where we&rsquo;ve installed it
            </h2>
            <p className="pproof-sub">
              Real {fullName} deployments commissioned by VSD International.
            </p>
          </div>
        </div>

        {/* ── Row list ── */}
        <div className="pproof-list" role="list">
          {projectProof.map((project, i) => (
            <article
              key={`${project.client}-${project.year}`}
              className="pproof-row"
              role="listitem"
            >
              <div className="pproof-row-accent" aria-hidden="true" />

              {/* Index */}
              <span className="pproof-num" aria-hidden="true">
                {String(i + 1).padStart(2, '0')}
              </span>

              {/* Client identity */}
              <div className="pproof-client">
                <div className="pproof-client-top">
                  <h3 className="pproof-client-name">{project.client}</h3>
                  <span className="pproof-year">{project.year}</span>
                </div>
                <div className="pproof-location">
                  <svg
                    width="11" height="11"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                    className="pproof-pin"
                  >
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                  <span className="pproof-city">{project.city}</span>
                </div>
              </div>

              {/* Scope */}
              <p className="pproof-scope">{project.scope}</p>

              {/* Arrow */}
              <div className="pproof-arrow" aria-hidden="true">
                <svg
                  width="16" height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="5" y1="12" x2="19" y2="12"/>
                  <polyline points="12 5 19 12 12 19"/>
                </svg>
              </div>
            </article>
          ))}
        </div>

        {/* ── Footer strip ── */}
        <div className="pproof-footer">
          <span className="pproof-footer-text">
            {projectProof.length} verified installations &middot; pan-India supply &amp; commissioning
          </span>
          <a href="/projects/" className="pproof-footer-link">
            View all projects
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <line x1="5" y1="12" x2="19" y2="12"/>
              <polyline points="12 5 19 12 12 19"/>
            </svg>
          </a>
        </div>

      </div>

      <style>{`
        /* ── Section ── */
        .pproof-section {
          background: var(--white);
          padding: 2.75rem 0 3rem;
          border-top: 1px solid var(--border);
        }

        /* ── Header ── */
        .pproof-header { margin-bottom: 2rem; }

        .pproof-eyebrow-row {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin-bottom: 0.875rem;
        }
        .pproof-dot {
          width: 6px; height: 6px;
          border-radius: 50%;
          background: var(--gold);
          flex-shrink: 0;
        }
        .pproof-eyebrow {
          font-family: var(--font-inter), Inter, ui-sans-serif, sans-serif;
          font-size: 0.625rem;
          font-weight: 700;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--gold-deep);
          white-space: nowrap;
        }
        .pproof-eyebrow-line {
          flex: 1;
          height: 1px;
          background: linear-gradient(90deg, var(--border), transparent);
        }

        .pproof-heading-row {
          display: flex;
          align-items: baseline;
          gap: 2rem;
          flex-wrap: wrap;
        }
        .pproof-heading {
          font-family: var(--font-playfair), 'Playfair Display', Georgia, serif;
          font-size: clamp(1.75rem, 3vw, 2.5rem);
          font-weight: 700;
          color: var(--text-dark);
          line-height: 1.1;
          letter-spacing: -0.02em;
          margin: 0;
          white-space: nowrap;
        }
        .pproof-sub {
          font-family: var(--font-inter), Inter, ui-sans-serif, sans-serif;
          font-size: 0.9375rem;
          color: var(--text-muted);
          margin: 0;
          line-height: 1.6;
        }
        @media (max-width: 900px) {
          .pproof-heading { white-space: normal; }
          .pproof-heading-row { flex-direction: column; gap: 0.375rem; }
        }

        /* ── Row list ── */
        .pproof-list {
          border-top: 1px solid var(--border);
        }

        .pproof-row {
          position: relative;
          display: grid;
          grid-template-columns: 52px 1fr 1.4fr 28px;
          align-items: center;
          gap: 0 1.5rem;
          padding: 1.625rem 0;
          border-bottom: 1px solid var(--border);
          overflow: hidden;
          transition: background 0.18s ease;
          cursor: default;
        }
        .pproof-row:hover { background: #faf9f6; }

        /* Gold left bar scaleY on hover */
        .pproof-row-accent {
          position: absolute;
          left: -1px; top: 0; bottom: 0;
          width: 3px;
          background: linear-gradient(to bottom, var(--gold), #c8922a);
          transform: scaleY(0);
          transform-origin: top;
          transition: transform 0.24s ease;
          border-radius: 0 2px 2px 0;
        }
        .pproof-row:hover .pproof-row-accent { transform: scaleY(1); }

        /* Index number */
        .pproof-num {
          font-family: var(--font-playfair), 'Playfair Display', Georgia, serif;
          font-size: 1.75rem;
          font-weight: 800;
          color: var(--border);
          line-height: 1;
          letter-spacing: -0.04em;
          text-align: right;
          transition: color 0.18s ease;
        }
        .pproof-row:hover .pproof-num { color: var(--gold); }

        /* Client block */
        .pproof-client { min-width: 0; }

        .pproof-client-top {
          display: flex;
          align-items: center;
          gap: 0.625rem;
          flex-wrap: wrap;
          margin-bottom: 0.4rem;
        }
        .pproof-client-name {
          font-family: var(--font-playfair), 'Playfair Display', Georgia, serif;
          font-size: 1.0625rem;
          font-weight: 700;
          color: var(--text-dark);
          margin: 0;
          line-height: 1.25;
        }
        .pproof-year {
          display: inline-block;
          padding: 0.175rem 0.55rem;
          border-radius: 999px;
          background: rgba(200,146,42,0.08);
          border: 1px solid rgba(200,146,42,0.22);
          font-family: var(--font-inter), Inter, ui-sans-serif, sans-serif;
          font-size: 0.5625rem;
          font-weight: 700;
          letter-spacing: 0.12em;
          color: var(--gold-deep);
          flex-shrink: 0;
        }

        .pproof-location {
          display: flex;
          align-items: center;
          gap: 0.3rem;
        }
        .pproof-pin {
          color: var(--gold-deep);
          opacity: 0.65;
          flex-shrink: 0;
          transition: opacity 0.18s ease;
        }
        .pproof-row:hover .pproof-pin { opacity: 1; }
        .pproof-city {
          font-family: var(--font-inter), Inter, ui-sans-serif, sans-serif;
          font-size: 0.8125rem;
          color: var(--text-muted);
        }

        /* Scope paragraph */
        .pproof-scope {
          font-family: var(--font-inter), Inter, ui-sans-serif, sans-serif;
          font-size: 0.875rem;
          color: var(--text-muted);
          line-height: 1.72;
          margin: 0;
          transition: color 0.18s ease;
        }
        .pproof-row:hover .pproof-scope { color: var(--text-body); }

        /* Arrow */
        .pproof-arrow {
          display: flex;
          align-items: center;
          justify-content: center;
          color: #ddd8cc;
          transition: color 0.18s ease, transform 0.18s ease;
          flex-shrink: 0;
        }
        .pproof-row:hover .pproof-arrow {
          color: var(--gold-deep);
          transform: translateX(3px);
        }

        /* Mobile collapse */
        @media (max-width: 767px) {
          .pproof-row {
            grid-template-columns: 40px 1fr 28px;
            grid-template-rows: auto auto;
            gap: 0.5rem 0.875rem;
            padding: 1.25rem 0;
          }
          .pproof-num { font-size: 1.375rem; }
          .pproof-scope {
            grid-column: 1 / -1;
            grid-row: 2;
            padding-left: calc(40px + 0.875rem);
            font-size: 0.8125rem;
          }
          .pproof-arrow { grid-row: 1; }
        }

        /* ── Footer strip ── */
        .pproof-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 0.75rem;
          padding-top: 1.25rem;
        }
        .pproof-footer-text {
          font-family: var(--font-inter), Inter, ui-sans-serif, sans-serif;
          font-size: 0.75rem;
          color: var(--text-muted);
        }
        .pproof-footer-link {
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          font-family: var(--font-inter), Inter, ui-sans-serif, sans-serif;
          font-size: 0.6875rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--gold-deep);
          text-decoration: none;
          border-bottom: 1px solid currentColor;
          padding-bottom: 1px;
          transition: opacity 0.15s ease, gap 0.15s ease;
        }
        .pproof-footer-link:hover { opacity: 0.7; gap: 0.55rem; }
        .pproof-footer-link svg { flex-shrink: 0; }
      `}</style>
    </section>
  );
}
