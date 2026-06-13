import type { Product } from '@/types/product';

interface ProductOverviewProps {
  overview: Product['overview'];
  fullName: Product['fullName'];
  category: Product['category'];
}

const CATEGORY_LABELS: Record<string, string> = {
  'combi-ovens':             'Combi Ovens',
  'blast-chillers':          'Blast Chillers',
  'dishwashers':             'Dishwashers',
  'multifunctional-cooking': 'Multifunctional Cooking',
  'refrigeration':           'Refrigeration',
  'fabrication':             'SS Fabrication',
};

function splitLede(text: string): [string, string] {
  const idx = text.search(/\.\s+[A-Z]/);
  if (idx === -1) return [text, ''];
  return [text.slice(0, idx + 1), text.slice(idx + 2)];
}

const BADGES = ['CE Marked', 'HACCP-Suitable', 'Authorised Dealer', 'Pan-India Supply'];

export default function ProductOverview({ overview, fullName, category }: ProductOverviewProps) {
  const categoryLabel = CATEGORY_LABELS[category] ?? category;
  const [lede, body] = splitLede(overview);

  return (
    <section aria-labelledby="overview-heading" className="pov-section">
      <div className="container">

        {/* ── Eyebrow — full width with extending line ── */}
        <div className="pov-eyebrow-row">
          <span className="pov-dot" aria-hidden="true" />
          <span className="pov-eyebrow">Overview</span>
          <div className="pov-eyebrow-line" aria-hidden="true" />
        </div>

        {/* ── Heading — full width, no constraint ── */}
        <h2 id="overview-heading" className="pov-heading">
          What is the {fullName}?
        </h2>
        <div className="pov-rule" aria-hidden="true" />

        {/* ── Lede — full width, bold first sentence ── */}
        <p className="pov-lede">
          <span className="pov-quote-inline" aria-hidden="true">&ldquo;</span>
          {lede}
        </p>

        {/* ── Body — 2-col newspaper flow on desktop ── */}
        {body && (
          <div className="pov-body-wrap">
            <p className="pov-body">{body}</p>
          </div>
        )}

        {/* ── Bottom strip — badges + link ── */}
        <div className="pov-strip">
          <div className="pov-badges">
            {BADGES.map((label) => (
              <span key={label} className="pov-badge">
                <svg width="9" height="9" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" strokeWidth="3.5"
                  strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
                {label}
              </span>
            ))}
          </div>
          <a href={`/products/${category}/`} className="pov-browse-link">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="2"
              strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <line x1="19" y1="12" x2="5" y2="12"/>
              <polyline points="12 19 5 12 12 5"/>
            </svg>
            Browse all {categoryLabel}
          </a>
        </div>

      </div>

      <style>{`
        .pov-section {
          background: var(--white);
          padding: 2.5rem 0 2.75rem;
          border-top: 1px solid var(--border);
        }

        /* Eyebrow */
        .pov-eyebrow-row {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin-bottom: 1rem;
        }
        .pov-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--gold);
          flex-shrink: 0;
        }
        .pov-eyebrow {
          font-family: var(--font-inter), Inter, ui-sans-serif, sans-serif;
          font-size: 0.625rem;
          font-weight: 700;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--gold-deep);
          white-space: nowrap;
        }
        .pov-eyebrow-line {
          flex: 1;
          height: 1px;
          background: linear-gradient(90deg, var(--border), transparent);
        }

        /* Heading — full width */
        .pov-heading {
          font-family: var(--font-playfair), 'Playfair Display', Georgia, serif;
          font-size: clamp(1.75rem, 3.5vw, 2.75rem);
          font-weight: 700;
          color: var(--text-dark);
          line-height: 1.1;
          letter-spacing: -0.02em;
          margin: 0 0 1rem;
        }
        .pov-rule {
          width: 48px;
          height: 3px;
          border-radius: 2px;
          background: linear-gradient(90deg, var(--gold), #e8b86d 50%, transparent);
          margin-bottom: 1.75rem;
        }

        /* Lede — full width, medium weight */
        .pov-lede {
          font-family: var(--font-inter), Inter, ui-sans-serif, sans-serif;
          font-size: clamp(1.0625rem, 1.5vw, 1.1875rem);
          font-weight: 500;
          color: var(--text-dark);
          line-height: 1.72;
          margin: 0 0 1.25rem;
        }
        .pov-quote-inline {
          font-family: var(--font-playfair), 'Playfair Display', Georgia, serif;
          font-size: 2.5em;
          line-height: 0;
          vertical-align: -0.35em;
          color: var(--gold);
          opacity: 0.35;
          margin-right: 0.1em;
          user-select: none;
        }

        /* Body — newspaper 2-col on desktop */
        .pov-body-wrap {
          margin-bottom: 1.75rem;
        }
        .pov-body {
          font-family: var(--font-inter), Inter, ui-sans-serif, sans-serif;
          font-size: 0.9375rem;
          color: var(--text-body);
          line-height: 1.85;
          margin: 0;
          columns: 1;
        }
        @media (min-width: 900px) {
          .pov-body {
            columns: 2;
            column-gap: 3.5rem;
            column-rule: 1px solid var(--border);
          }
        }

        /* Bottom strip */
        .pov-strip {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 0.75rem;
          padding-top: 1.25rem;
          border-top: 1px solid var(--border);
        }
        .pov-badges {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }
        .pov-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          padding: 0.275rem 0.75rem;
          border-radius: 999px;
          background: #faf9f6;
          border: 1px solid #e8e2d4;
          font-family: var(--font-inter), Inter, ui-sans-serif, sans-serif;
          font-size: 0.6875rem;
          font-weight: 600;
          color: var(--text-muted);
        }
        .pov-badge svg { color: var(--gold-deep); flex-shrink: 0; }

        .pov-browse-link {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          font-family: var(--font-inter), Inter, ui-sans-serif, sans-serif;
          font-size: 0.6875rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--gold-deep);
          text-decoration: none;
          white-space: nowrap;
          border-bottom: 1px solid currentColor;
          padding-bottom: 1px;
          transition: opacity 0.15s ease, gap 0.15s ease;
        }
        .pov-browse-link:hover { opacity: 0.7; gap: 0.6rem; }
        .pov-browse-link svg { flex-shrink: 0; transition: transform 0.15s ease; }
        .pov-browse-link:hover svg { transform: translateX(-2px); }
      `}</style>
    </section>
  );
}
