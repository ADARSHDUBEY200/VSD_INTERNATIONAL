import type { Product } from '@/types/product';

interface ProductBestForProps {
  bestFor: Product['bestFor'];
}

export default function ProductBestFor({ bestFor }: ProductBestForProps) {
  return (
    <section
      aria-labelledby="best-for-heading"
      style={{ background: 'var(--surface-alt)', padding: '5rem 0' }}
    >
      <div className="container">
        <p className="section-label" style={{ marginBottom: '0.75rem', color: 'var(--gold-deep)' }}>
          Use Cases
        </p>
        <h2
          id="best-for-heading"
          style={{
            fontFamily: 'var(--font-cormorant), Cormorant Garamond, Georgia, serif',
            fontSize: 'clamp(1.6rem, 3vw, 2rem)',
            fontWeight: 600,
            color: 'var(--text-dark)',
            lineHeight: 1.2,
            marginBottom: '2.5rem',
          }}
        >
          Best For
        </h2>

        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '1rem',
          }}
        >
          {bestFor.map((item) => (
            <div
              key={item.industry}
              style={{
                background: 'var(--white)',
                border: '1px solid var(--border)',
                borderRadius: '10px',
                padding: '1.25rem 1.5rem',
                flex: '1 1 280px',
                maxWidth: '440px',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.6rem',
                  marginBottom: '0.5rem',
                }}
              >
                <span
                  aria-hidden="true"
                  style={{
                    width: '8px',
                    height: '8px',
                    borderRadius: '50%',
                    background: 'var(--gold)',
                    flexShrink: 0,
                    display: 'inline-block',
                  }}
                />
                <strong
                  style={{
                    fontFamily: 'var(--font-dm-sans), DM Sans, sans-serif',
                    fontSize: '0.9375rem',
                    fontWeight: 600,
                    color: 'var(--text-dark)',
                  }}
                >
                  {item.industry}
                </strong>
              </div>
              <p
                style={{
                  fontFamily: 'var(--font-dm-sans), DM Sans, sans-serif',
                  fontSize: '0.875rem',
                  color: 'var(--text-body)',
                  lineHeight: 1.7,
                  margin: 0,
                  paddingLeft: '1.4rem',
                }}
              >
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
