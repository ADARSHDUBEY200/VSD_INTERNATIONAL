import type { Product } from '@/types/product';

interface ProductSpecsProps {
  specs: Product['specs'];
  fullName: Product['fullName'];
}

export default function ProductSpecs({ specs, fullName }: ProductSpecsProps) {
  return (
    <section aria-labelledby="specs-heading" className="ps-section">
      <div className="container">

        {/* ── Section header ── */}
        <div className="ps-header">
          <div className="ps-header-left">
            <div className="ps-eyebrow-row">
              <span className="ps-dot" aria-hidden="true" />
              <span className="ps-eyebrow">Specifications</span>
            </div>
            <h2 id="specs-heading" className="ps-heading">Key Specifications</h2>
            <p className="ps-subhead">{fullName} — complete technical specification</p>
          </div>
          <div className="ps-header-deco" aria-hidden="true">
            <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
              <rect x="1" y="1" width="62" height="62" rx="12" stroke="var(--gold)" strokeWidth="1" strokeDasharray="4 3" opacity="0.35"/>
              <path d="M20 32h24M32 20v24" stroke="var(--gold)" strokeWidth="1.5" strokeLinecap="round" opacity="0.5"/>
              <circle cx="32" cy="32" r="5" stroke="var(--gold)" strokeWidth="1.5" opacity="0.6"/>
            </svg>
          </div>
        </div>

        {/* ── Table ── */}
        <div className="ps-table-wrap">
          {/* Table head — dark bar */}
          <div className="ps-thead">
            <div className="ps-th ps-th-idx" aria-hidden="true">#</div>
            <div className="ps-th ps-th-name">Specification</div>
            <div className="ps-th ps-th-val">Value</div>
          </div>

          {/* Table body */}
          <div className="ps-tbody">
            {specs.map((spec, i) => (
              <div
                key={spec.name}
                className={`ps-row${i === specs.length - 1 ? ' ps-row-last' : ''}`}
                itemProp="additionalProperty"
                itemScope
                itemType="https://schema.org/PropertyValue"
              >
                <div className="ps-cell-idx" aria-hidden="true">
                  {String(i + 1).padStart(2, '0')}
                </div>
                <div className="ps-cell-name" itemProp="name">{spec.name}</div>
                <div className="ps-cell-val" itemProp="value">{spec.value}</div>
                {/* Gold hover-accent left line */}
                <div className="ps-row-accent" aria-hidden="true" />
              </div>
            ))}
          </div>

          {/* Table foot */}
          <div className="ps-tfoot">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
            </svg>
            Specifications subject to change without notice. Confirm with VSD International before procurement.
          </div>
        </div>

      </div>

      <style>{`
        .ps-section {
          background: var(--surface);
          padding: 2.75rem 0 3rem;
          border-top: 1px solid var(--border);
        }

        /* ── Section header ── */
        .ps-header {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          margin-bottom: 2rem;
        }
        .ps-header-left { flex: 1; }
        .ps-header-deco { flex-shrink: 0; margin-top: 0.25rem; }
        @media (max-width: 640px) { .ps-header-deco { display: none; } }

        .ps-eyebrow-row {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin-bottom: 0.75rem;
        }
        .ps-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--gold);
          flex-shrink: 0;
        }
        .ps-eyebrow {
          font-family: var(--font-inter), Inter, ui-sans-serif, sans-serif;
          font-size: 0.625rem;
          font-weight: 700;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--gold-deep);
        }
        .ps-heading {
          font-family: var(--font-playfair), 'Playfair Display', Georgia, serif;
          font-size: clamp(1.6rem, 3vw, 2.25rem);
          font-weight: 700;
          color: var(--text-dark);
          line-height: 1.15;
          letter-spacing: -0.01em;
          margin: 0 0 0.5rem;
        }
        .ps-subhead {
          font-family: var(--font-inter), Inter, ui-sans-serif, sans-serif;
          font-size: 0.875rem;
          color: var(--text-muted);
          margin: 0;
        }

        /* ── Table wrap ── */
        .ps-table-wrap {
          border-radius: 14px;
          overflow: hidden;
          border: 1px solid var(--border);
          box-shadow: 0 4px 24px rgba(0,0,0,0.06), 0 1px 4px rgba(0,0,0,0.04);
        }

        /* ── Head ── */
        .ps-thead {
          display: grid;
          grid-template-columns: 48px 1fr 1fr;
          background: #1a1a16;
          padding: 0;
        }
        .ps-th {
          font-family: var(--font-inter), Inter, ui-sans-serif, sans-serif;
          font-size: 0.625rem;
          font-weight: 700;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: rgba(232,228,216,0.55);
          padding: 1rem 1.25rem;
        }
        .ps-th-idx {
          color: rgba(232,228,216,0.25);
          padding-right: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          border-right: 1px solid rgba(255,255,255,0.07);
        }
        .ps-th-name {
          border-right: 1px solid rgba(255,255,255,0.07);
        }

        /* ── Body rows ── */
        .ps-tbody { background: var(--white); }

        .ps-row {
          position: relative;
          display: grid;
          grid-template-columns: 48px 1fr 1fr;
          border-bottom: 1px solid var(--border);
          transition: background 0.16s ease;
          overflow: hidden;
        }
        .ps-row-last { border-bottom: none; }
        .ps-row:hover { background: #fdfcf7; }

        /* Gold left-edge accent on hover */
        .ps-row-accent {
          position: absolute;
          left: 0;
          top: 0;
          bottom: 0;
          width: 3px;
          background: var(--gold);
          transform: scaleY(0);
          transform-origin: center;
          transition: transform 0.18s ease;
        }
        .ps-row:hover .ps-row-accent { transform: scaleY(1); }

        .ps-cell-idx {
          font-family: var(--font-inter), Inter, ui-sans-serif, sans-serif;
          font-size: 0.625rem;
          font-weight: 700;
          color: var(--gold);
          opacity: 0.55;
          display: flex;
          align-items: center;
          justify-content: center;
          border-right: 1px solid var(--border);
          padding: 1rem 0;
          transition: opacity 0.16s ease;
          letter-spacing: 0.04em;
        }
        .ps-row:hover .ps-cell-idx { opacity: 1; }

        .ps-cell-name {
          font-family: var(--font-inter), Inter, ui-sans-serif, sans-serif;
          font-size: 0.875rem;
          font-weight: 500;
          color: var(--text-body);
          padding: 1rem 1.25rem;
          display: flex;
          align-items: center;
          border-right: 1px solid var(--border);
        }

        .ps-cell-val {
          font-family: var(--font-inter), Inter, ui-sans-serif, sans-serif;
          font-size: 0.9375rem;
          font-weight: 600;
          color: var(--text-dark);
          padding: 1rem 1.25rem;
          display: flex;
          align-items: center;
        }

        /* ── Foot ── */
        .ps-tfoot {
          display: flex;
          align-items: flex-start;
          gap: 0.5rem;
          background: #f7f5ef;
          border-top: 1px solid var(--border);
          padding: 0.875rem 1.25rem;
          font-family: var(--font-inter), Inter, ui-sans-serif, sans-serif;
          font-size: 0.75rem;
          color: var(--text-muted);
          line-height: 1.6;
        }
        .ps-tfoot svg {
          flex-shrink: 0;
          color: var(--gold-deep);
          margin-top: 1px;
          opacity: 0.7;
        }

        @media (max-width: 540px) {
          .ps-thead { grid-template-columns: 36px 1fr 1fr; }
          .ps-row { grid-template-columns: 36px 1fr 1fr; }
          .ps-cell-idx { font-size: 0.5625rem; padding: 0.875rem 0; }
          .ps-cell-name, .ps-cell-val { padding: 0.875rem 0.875rem; font-size: 0.8125rem; }
          .ps-th { padding: 0.875rem 0.875rem; }
          .ps-th-idx { padding-right: 0; }
        }
      `}</style>
    </section>
  );
}
