import type { Product } from '@/types/product';

interface ProductProofProps {
  projectProof: Product['projectProof'];
  fullName: Product['fullName'];
}

export default function ProductProof({ projectProof, fullName }: ProductProofProps) {
  return (
    <section
      aria-labelledby="proof-heading"
      style={{ background: 'var(--white)', padding: '5rem 0' }}
    >
      <div className="container">
        <p className="section-label" style={{ marginBottom: '0.75rem', color: 'var(--gold-deep)' }}>
          Project Proof
        </p>
        <h2
          id="proof-heading"
          style={{
            fontFamily: 'var(--font-cormorant), Cormorant Garamond, Georgia, serif',
            fontSize: 'clamp(1.6rem, 3vw, 2rem)',
            fontWeight: 600,
            color: 'var(--text-dark)',
            lineHeight: 1.2,
            marginBottom: '0.5rem',
          }}
        >
          Where We&apos;ve Installed It
        </h2>
        <p
          style={{
            fontFamily: 'var(--font-dm-sans), DM Sans, sans-serif',
            fontSize: '0.9375rem',
            color: 'var(--text-muted)',
            marginBottom: '2.5rem',
          }}
        >
          Real {fullName} installations by VSD International
        </p>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 280px), 1fr))',
            gap: '1.25rem',
          }}
        >
          {projectProof.map((project) => (
            <article
              key={`${project.client}-${project.year}`}
              style={{
                background: 'var(--surface)',
                borderLeft: '3px solid var(--gold)',
                borderRadius: '0 10px 10px 0',
                padding: '1.375rem 1.5rem',
                transition: 'box-shadow 0.22s ease',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'baseline',
                  justifyContent: 'space-between',
                  gap: '0.5rem',
                  marginBottom: '0.375rem',
                  flexWrap: 'wrap',
                }}
              >
                <strong
                  style={{
                    fontFamily: 'var(--font-dm-sans), DM Sans, sans-serif',
                    fontSize: '1rem',
                    fontWeight: 600,
                    color: 'var(--text-dark)',
                  }}
                >
                  {project.client}
                </strong>
                <span
                  style={{
                    fontFamily: 'var(--font-dm-sans), DM Sans, sans-serif',
                    fontSize: '0.8125rem',
                    color: 'var(--gold-deep)',
                    fontWeight: 500,
                  }}
                >
                  {project.year}
                </span>
              </div>
              <p
                style={{
                  fontFamily: 'var(--font-dm-sans), DM Sans, sans-serif',
                  fontSize: '0.8125rem',
                  color: 'var(--text-muted)',
                  marginBottom: '0.625rem',
                }}
              >
                📍 {project.city}
              </p>
              <p
                style={{
                  fontFamily: 'var(--font-dm-sans), DM Sans, sans-serif',
                  fontSize: '0.875rem',
                  color: 'var(--text-body)',
                  lineHeight: 1.7,
                  margin: 0,
                }}
              >
                {project.scope}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
