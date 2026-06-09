import type { Product } from '@/types/product';

interface ProductTechnicalProps {
  technical: Product['technical'];
  compliance: Product['compliance'];
  fullName: Product['fullName'];
}

export default function ProductTechnical({
  technical,
  compliance,
  fullName,
}: ProductTechnicalProps) {
  return (
    <section
      aria-labelledby="technical-heading"
      style={{ background: 'var(--white)', padding: '5rem 0' }}
    >
      <div className="container">
        <p className="section-label" style={{ marginBottom: '0.75rem', color: 'var(--gold-deep)' }}>
          Technical
        </p>
        <h2
          id="technical-heading"
          style={{
            fontFamily: 'var(--font-cormorant), Cormorant Garamond, Georgia, serif',
            fontSize: 'clamp(1.6rem, 3vw, 2rem)',
            fontWeight: 600,
            color: 'var(--text-dark)',
            lineHeight: 1.2,
            marginBottom: '2.5rem',
          }}
        >
          Technical Details &amp; Compliance
        </h2>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 460px), 1fr))',
            gap: '2.5rem',
          }}
        >
          {/* Technical details list */}
          <div>
            <h3
              style={{
                fontFamily: 'var(--font-dm-sans), DM Sans, sans-serif',
                fontSize: '0.875rem',
                fontWeight: 600,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: 'var(--text-muted)',
                marginBottom: '1rem',
              }}
            >
              Installation Requirements — {fullName}
            </h3>
            <dl style={{ margin: 0 }}>
              {technical.map((item) => (
                <div
                  key={item.label}
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'baseline',
                    gap: '1rem',
                    padding: '0.625rem 0',
                    borderBottom: '1px solid var(--border)',
                  }}
                >
                  <dt
                    style={{
                      fontFamily: 'var(--font-dm-sans), DM Sans, sans-serif',
                      fontSize: '0.9rem',
                      color: 'var(--text-muted)',
                      fontWeight: 400,
                      flexShrink: 0,
                    }}
                  >
                    {item.label}
                  </dt>
                  <dd
                    style={{
                      fontFamily: 'var(--font-dm-sans), DM Sans, sans-serif',
                      fontSize: '0.9rem',
                      color: 'var(--text-dark)',
                      fontWeight: 500,
                      textAlign: 'right',
                      margin: 0,
                    }}
                  >
                    {item.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Compliance badges */}
          <div>
            <h3
              style={{
                fontFamily: 'var(--font-dm-sans), DM Sans, sans-serif',
                fontSize: '0.875rem',
                fontWeight: 600,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: 'var(--text-muted)',
                marginBottom: '1rem',
              }}
            >
              Certifications &amp; Standards
            </h3>
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '0.625rem',
                marginBottom: '1.5rem',
              }}
            >
              {compliance.map((cert) => (
                <span
                  key={cert}
                  style={{
                    padding: '0.4rem 1rem',
                    borderRadius: '999px',
                    background: 'var(--gold-pale)',
                    border: '1px solid var(--gold)',
                    color: 'var(--gold-deep)',
                    fontFamily: 'var(--font-dm-sans), DM Sans, sans-serif',
                    fontSize: '0.8125rem',
                    fontWeight: 500,
                    whiteSpace: 'nowrap',
                  }}
                >
                  {cert}
                </span>
              ))}
            </div>
            <div
              style={{
                background: 'var(--surface-alt)',
                borderRadius: '10px',
                padding: '1.25rem',
                borderLeft: '3px solid var(--gold)',
              }}
            >
              <p
                style={{
                  fontFamily: 'var(--font-dm-sans), DM Sans, sans-serif',
                  fontSize: '0.875rem',
                  color: 'var(--text-body)',
                  lineHeight: 1.7,
                  margin: 0,
                }}
              >
                All Rational iCombi Pro units supplied by VSD International carry full Indian
                warranty. Our engineers provide on-site commissioning, HACCP documentation
                support, and post-installation service across India.{' '}
                <a
                  href="/services/commercial-kitchen-equipment/"
                  style={{ color: 'var(--gold-deep)', textDecoration: 'none' }}
                  className="link-hover-gold"
                >
                  Learn about our AMC service →
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
