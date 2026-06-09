import type { Product } from '@/types/product';

interface ProductOverviewProps {
  overview: Product['overview'];
  fullName: Product['fullName'];
  category: Product['category'];
}

export default function ProductOverview({ overview, fullName, category }: ProductOverviewProps) {
  return (
    <section
      aria-labelledby="overview-heading"
      style={{ background: 'var(--white)', padding: '5rem 0' }}
    >
      <div className="container">
        <div style={{ maxWidth: '820px' }}>
          <p
            className="section-label"
            style={{ marginBottom: '0.75rem', color: 'var(--gold-deep)' }}
          >
            Overview
          </p>
          <h2
            id="overview-heading"
            style={{
              fontFamily: 'var(--font-cormorant), Cormorant Garamond, Georgia, serif',
              fontSize: 'clamp(1.6rem, 3vw, 2rem)',
              fontWeight: 600,
              color: 'var(--text-dark)',
              lineHeight: 1.2,
              marginBottom: '1.5rem',
            }}
          >
            What is the {fullName}?
          </h2>
          <div
            style={{
              borderLeft: '3px solid var(--gold)',
              paddingLeft: '1.5rem',
            }}
          >
            <p
              style={{
                fontFamily: 'var(--font-dm-sans), DM Sans, sans-serif',
                fontSize: '1.0625rem',
                color: 'var(--text-body)',
                lineHeight: 1.85,
                margin: 0,
              }}
            >
              {overview}
            </p>
          </div>
          <div style={{ marginTop: '1.5rem' }}>
            <a
              href={`/products/${category}/`}
              style={{
                fontFamily: 'var(--font-dm-sans), DM Sans, sans-serif',
                fontSize: '0.875rem',
                color: 'var(--gold-deep)',
                textDecoration: 'none',
                fontWeight: 500,
              }}
              className="link-hover-gold"
            >
              ← Browse all Combi Ovens
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
