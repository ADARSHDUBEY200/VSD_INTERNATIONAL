import type { Product } from '@/types/product';

interface ProductWhyVSDProps {
  whyVSD: Product['whyVSD'];
}

export default function ProductWhyVSD({ whyVSD }: ProductWhyVSDProps) {
  return (
    <section
      aria-labelledby="why-vsd-heading"
      style={{ background: 'var(--gold-pale)', padding: '5rem 0' }}
    >
      <div className="container">
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', flexWrap: 'wrap', marginBottom: '2.5rem' }}>
          <div>
            <p
              className="section-label"
              style={{ marginBottom: '0.75rem', color: 'var(--gold-deep)' }}
            >
              Why VSD
            </p>
            <h2
              id="why-vsd-heading"
              style={{
                fontFamily: 'var(--font-cormorant), Cormorant Garamond, Georgia, serif',
                fontSize: 'clamp(1.6rem, 3vw, 2rem)',
                fontWeight: 600,
                color: 'var(--text-dark)',
                lineHeight: 1.2,
                marginBottom: '0',
              }}
            >
              Why Buy From VSD International
            </h2>
          </div>
          <span
            style={{
              marginTop: '0.25rem',
              padding: '0.3rem 0.875rem',
              borderRadius: '4px',
              background: 'var(--charcoal-mid)',
              color: 'var(--gold-bright)',
              fontFamily: 'var(--font-dm-sans), DM Sans, sans-serif',
              fontSize: '0.6875rem',
              fontWeight: 600,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              whiteSpace: 'nowrap',
            }}
          >
            Authorised Dealer
          </span>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 340px), 1fr))',
            gap: '1.25rem',
          }}
        >
          {whyVSD.map((item, i) => (
            <div
              key={item.point}
              style={{
                background: 'var(--white)',
                border: '1px solid var(--border)',
                borderRadius: '10px',
                padding: '1.5rem',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  marginBottom: '0.625rem',
                }}
              >
                <span
                  aria-hidden="true"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '32px',
                    height: '32px',
                    borderRadius: '50%',
                    background: 'var(--gold)',
                    color: '#fff',
                    fontFamily: 'var(--font-dm-sans), DM Sans, sans-serif',
                    fontSize: '0.8125rem',
                    fontWeight: 700,
                    flexShrink: 0,
                  }}
                >
                  {i + 1}
                </span>
                <strong
                  style={{
                    fontFamily: 'var(--font-dm-sans), DM Sans, sans-serif',
                    fontSize: '0.9375rem',
                    fontWeight: 600,
                    color: 'var(--text-dark)',
                  }}
                >
                  {item.point}
                </strong>
              </div>
              <p
                style={{
                  fontFamily: 'var(--font-dm-sans), DM Sans, sans-serif',
                  fontSize: '0.875rem',
                  color: 'var(--text-body)',
                  lineHeight: 1.75,
                  margin: 0,
                  paddingLeft: '2.75rem',
                }}
              >
                {item.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
