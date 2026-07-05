import Link from 'next/link';
import type { Product } from '@/types/product';

interface ProductComparisonProps {
  comparison: Product['comparison'];
  comparisonModels: Product['comparisonModels'];
  fullName: Product['fullName'];
  category: Product['category'];
}

export default function ProductComparison({
  comparison,
  comparisonModels,
  fullName,
  category,
}: ProductComparisonProps) {
  return (
    <section aria-labelledby="comparison-heading" className="pcmp-section">
      <div className="container">

        {/* ── Header ── */}
        <div className="pcmp-header">
          <div className="pcmp-eyebrow-row">
            <span className="pcmp-dot" aria-hidden="true" />
            <span className="pcmp-eyebrow">Compare</span>
            <div className="pcmp-eyebrow-line" aria-hidden="true" />
          </div>
          <div className="pcmp-heading-row">
            <h2 id="comparison-heading" className="pcmp-heading">
              How does it compare?
            </h2>
            <p className="pcmp-sub">
              Measured against the closest alternatives available in India.
            </p>
          </div>
        </div>

        {/* ── Table (scrollable on mobile) ── */}
        <div className="pcmp-table-outer" role="region" aria-label="Model comparison table" tabIndex={0}>
          <div className="pcmp-table-wrap">

            {/* Header row */}
            <div className="pcmp-hrow" role="row">

              {/* Attribute column header */}
              <div className="pcmp-hcell pcmp-hattr" role="columnheader" aria-sort="none">
                <span className="pcmp-hattr-label">Attribute</span>
              </div>

              {/* "This model" header — gold highlighted */}
              <div className="pcmp-hcell pcmp-hmain" role="columnheader">
                <div className="pcmp-hmain-topbar" aria-hidden="true" />
                <div className="pcmp-hmain-body">
                  <span className="pcmp-hmain-badge">
                    <svg width="7" height="7" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                    </svg>
                    Our Pick
                  </span>
                  <span className="pcmp-hmain-name">{fullName}</span>
                </div>
              </div>

              {/* Competitor headers */}
              {comparisonModels.map((m) => (
                <div key={m.slug} className="pcmp-hcell pcmp-halt" role="columnheader">
                  <span className="pcmp-halt-name">{m.name}</span>
                </div>
              ))}
            </div>

            {/* Data rows */}
            {comparison.map((row, i) => (
              <div
                key={row.attribute}
                className="pcmp-row"
                role="row"
                aria-rowindex={i + 2}
              >
                <div className="pcmp-row-accent" aria-hidden="true" />

                {/* Attribute label */}
                <div className="pcmp-cell pcmp-cattr" role="cell">
                  <span className="pcmp-cattr-num" aria-hidden="true">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="pcmp-cattr-text">{row.attribute}</span>
                </div>

                {/* This model value — gold-tinted */}
                <div className="pcmp-cell pcmp-cmain" role="cell">
                  <span className="pcmp-cmain-check" aria-hidden="true">
                    <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                  </span>
                  {row.thisModel}
                </div>

                {/* Competitor values */}
                <div className="pcmp-cell pcmp-calt" role="cell">{row.alternative1}</div>
                <div className="pcmp-cell pcmp-calt" role="cell">{row.alternative2}</div>
              </div>
            ))}

          </div>
        </div>

        {/* ── Bottom links ── */}
        <div className="pcmp-links">
          <span className="pcmp-links-label">View alternatives</span>
          {comparisonModels.map((m) => (
            <Link
              key={m.slug}
              href={`/products/${category}/${m.slug}`}
              className="pcmp-link"
            >
              {m.name}
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <line x1="5" y1="12" x2="19" y2="12"/>
                <polyline points="12 5 19 12 12 19"/>
              </svg>
            </Link>
          ))}
        </div>

      </div>

      <style>{`
        /* ── Section ── */
        .pcmp-section {
          background: #131310;
          padding: 2.75rem 0 3rem;
          border-top: 1px solid rgba(255,255,255,0.07);
        }

        /* ── Header ── */
        .pcmp-header { margin-bottom: 2.25rem; }

        .pcmp-eyebrow-row {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin-bottom: 1rem;
        }
        .pcmp-dot {
          width: 6px; height: 6px;
          border-radius: 50%;
          background: var(--gold);
          flex-shrink: 0;
        }
        .pcmp-eyebrow {
          font-family: var(--font-inter), Inter, ui-sans-serif, sans-serif;
          font-size: 0.625rem;
          font-weight: 700;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--gold);
          white-space: nowrap;
        }
        .pcmp-eyebrow-line {
          flex: 1;
          height: 1px;
          background: linear-gradient(90deg, rgba(200,146,42,0.3), transparent);
        }

        .pcmp-heading-row {
          display: flex;
          align-items: baseline;
          gap: 2rem;
          flex-wrap: wrap;
        }
        .pcmp-heading {
          font-family: var(--font-playfair), 'Playfair Display', Georgia, serif;
          font-size: clamp(1.75rem, 3vw, 2.5rem);
          font-weight: 700;
          color: #e8e4d8;
          line-height: 1.1;
          letter-spacing: -0.02em;
          margin: 0;
          white-space: nowrap;
        }
        .pcmp-sub {
          font-family: var(--font-inter), Inter, ui-sans-serif, sans-serif;
          font-size: 0.9375rem;
          color: rgba(232,228,216,0.4);
          margin: 0;
          line-height: 1.6;
        }
        @media (max-width: 900px) {
          .pcmp-heading { white-space: normal; }
          .pcmp-heading-row { flex-direction: column; gap: 0.5rem; }
        }

        /* ── Table scroll container ── */
        .pcmp-table-outer {
          overflow-x: auto;
          -webkit-overflow-scrolling: touch;
          margin-bottom: 1.75rem;
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 14px;
          outline: none;
        }
        .pcmp-table-wrap { min-width: 600px; }

        /* ── Grid layout shared by header + data rows ── */
        .pcmp-hrow,
        .pcmp-row {
          display: grid;
          grid-template-columns: 170px 1fr 1fr 1fr;
        }

        /* ── Header row ── */
        .pcmp-hrow {
          background: #1c1c17;
          border-bottom: 1px solid rgba(255,255,255,0.06);
        }

        .pcmp-hcell {
          padding: 1.125rem 1.25rem;
        }

        /* Attribute col header */
        .pcmp-hattr {
          display: flex;
          align-items: center;
          border-right: 1px solid rgba(255,255,255,0.05);
        }
        .pcmp-hattr-label {
          font-family: var(--font-inter), Inter, ui-sans-serif, sans-serif;
          font-size: 0.5625rem;
          font-weight: 700;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: rgba(232,228,216,0.28);
        }

        /* "This model" header */
        .pcmp-hmain {
          position: relative;
          padding-top: 0;
          background: rgba(200,146,42,0.08);
          border-left: 1px solid rgba(200,146,42,0.2);
          border-right: 1px solid rgba(200,146,42,0.2);
          overflow: hidden;
          display: flex;
          flex-direction: column;
        }
        .pcmp-hmain-topbar {
          height: 3px;
          background: linear-gradient(90deg, var(--gold), #c8922a 65%, transparent);
          flex-shrink: 0;
        }
        .pcmp-hmain-body {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          padding: 0.875rem 1.25rem 1.125rem;
          flex: 1;
        }
        .pcmp-hmain-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.3rem;
          padding: 0.2rem 0.625rem;
          border-radius: 999px;
          background: var(--gold);
          color: #1a1a14;
          font-family: var(--font-inter), Inter, ui-sans-serif, sans-serif;
          font-size: 0.5rem;
          font-weight: 800;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          width: fit-content;
        }
        .pcmp-hmain-name {
          font-family: var(--font-inter), Inter, ui-sans-serif, sans-serif;
          font-size: 0.75rem;
          font-weight: 700;
          color: #e8e4d8;
          line-height: 1.45;
        }

        /* Competitor column headers */
        .pcmp-halt {
          display: flex;
          align-items: flex-end;
          border-left: 1px solid rgba(255,255,255,0.05);
        }
        .pcmp-halt-name {
          font-family: var(--font-inter), Inter, ui-sans-serif, sans-serif;
          font-size: 0.6875rem;
          font-weight: 600;
          color: rgba(232,228,216,0.42);
          line-height: 1.45;
        }

        /* ── Data rows ── */
        .pcmp-row {
          position: relative;
          border-bottom: 1px solid rgba(255,255,255,0.04);
          overflow: hidden;
          transition: background 0.18s ease;
          cursor: default;
        }
        .pcmp-row:last-child { border-bottom: none; }
        .pcmp-row:hover { background: rgba(255,255,255,0.025); }

        /* Gold left accent bar scaleY on hover */
        .pcmp-row-accent {
          position: absolute;
          left: 0; top: 0; bottom: 0;
          width: 3px;
          background: linear-gradient(to bottom, var(--gold), #c8922a);
          transform: scaleY(0);
          transform-origin: center;
          transition: transform 0.22s ease;
          border-radius: 0 2px 2px 0;
        }
        .pcmp-row:hover .pcmp-row-accent { transform: scaleY(1); }

        /* ── Cells ── */
        .pcmp-cell {
          padding: 0.875rem 1.25rem;
          font-family: var(--font-inter), Inter, ui-sans-serif, sans-serif;
          font-size: 0.875rem;
          line-height: 1.5;
          display: flex;
          align-items: center;
        }

        /* Attribute cell */
        .pcmp-cattr {
          gap: 0.75rem;
          border-right: 1px solid rgba(255,255,255,0.04);
        }
        .pcmp-cattr-num {
          font-family: var(--font-playfair), 'Playfair Display', Georgia, serif;
          font-size: 0.9375rem;
          font-weight: 800;
          color: rgba(255,255,255,0.07);
          flex-shrink: 0;
          line-height: 1;
          letter-spacing: -0.03em;
          transition: color 0.18s ease;
        }
        .pcmp-row:hover .pcmp-cattr-num { color: rgba(200,146,42,0.4); }
        .pcmp-cattr-text {
          font-size: 0.8125rem;
          color: rgba(232,228,216,0.42);
          font-weight: 400;
        }

        /* "This model" cell */
        .pcmp-cmain {
          gap: 0.625rem;
          background: rgba(200,146,42,0.055);
          border-left: 1px solid rgba(200,146,42,0.12);
          border-right: 1px solid rgba(200,146,42,0.12);
          color: #e8e4d8;
          font-weight: 600;
          transition: background 0.18s ease;
        }
        .pcmp-row:hover .pcmp-cmain { background: rgba(200,146,42,0.1); }

        /* Gold check circle icon */
        .pcmp-cmain-check {
          width: 18px; height: 18px;
          border-radius: 50%;
          background: rgba(200,146,42,0.14);
          border: 1px solid rgba(200,146,42,0.28);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--gold);
          flex-shrink: 0;
          transition: background 0.18s ease, border-color 0.18s ease;
        }
        .pcmp-row:hover .pcmp-cmain-check {
          background: rgba(200,146,42,0.24);
          border-color: rgba(200,146,42,0.5);
        }

        /* Competitor cells */
        .pcmp-calt {
          color: rgba(232,228,216,0.38);
          border-left: 1px solid rgba(255,255,255,0.04);
          font-size: 0.8375rem;
          font-weight: 400;
          transition: color 0.18s ease;
        }
        .pcmp-row:hover .pcmp-calt { color: rgba(232,228,216,0.58); }

        /* ── Bottom links ── */
        .pcmp-links {
          display: flex;
          align-items: center;
          gap: 0.875rem;
          flex-wrap: wrap;
        }
        .pcmp-links-label {
          font-family: var(--font-inter), Inter, ui-sans-serif, sans-serif;
          font-size: 0.5625rem;
          font-weight: 700;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: rgba(232,228,216,0.28);
        }
        .pcmp-link {
          display: inline-flex;
          align-items: center;
          gap: 0.45rem;
          padding: 0.45rem 0.875rem 0.45rem 0.75rem;
          border-radius: 8px;
          border: 1px solid rgba(200,146,42,0.2);
          background: rgba(200,146,42,0.05);
          font-family: var(--font-inter), Inter, ui-sans-serif, sans-serif;
          font-size: 0.75rem;
          font-weight: 600;
          color: var(--gold);
          text-decoration: none;
          transition: border-color 0.18s ease, background 0.18s ease, gap 0.18s ease;
        }
        .pcmp-link:hover {
          border-color: rgba(200,146,42,0.45);
          background: rgba(200,146,42,0.12);
          gap: 0.65rem;
        }
        .pcmp-link svg { flex-shrink: 0; }
      `}</style>
    </section>
  );
}
