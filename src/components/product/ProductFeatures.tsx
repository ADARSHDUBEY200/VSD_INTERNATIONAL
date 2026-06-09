import type { Product } from '@/types/product';

interface ProductFeaturesProps {
  features: Product['features'];
}

export default function ProductFeatures({ features }: ProductFeaturesProps) {
  return (
    <section
      aria-labelledby="features-heading"
      style={{ background: 'var(--white)', padding: '5rem 0' }}
    >
      <div className="container">
        <p className="section-label" style={{ marginBottom: '0.75rem', color: 'var(--gold-deep)' }}>
          Features
        </p>
        <h2
          id="features-heading"
          style={{
            fontFamily: 'var(--font-cormorant), Cormorant Garamond, Georgia, serif',
            fontSize: 'clamp(1.6rem, 3vw, 2rem)',
            fontWeight: 600,
            color: 'var(--text-dark)',
            lineHeight: 1.2,
            marginBottom: '2.5rem',
          }}
        >
          Features &amp; Benefits
        </h2>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 360px), 1fr))',
            gap: '1.5rem',
          }}
        >
          {features.map((feature) => (
            <FeatureCard key={feature.title} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ feature }: { feature: Product['features'][number] }) {
  return (
    <article
      style={{
        background: 'var(--surface)',
        border: '1.5px solid var(--border)',
        borderRadius: '12px',
        padding: '1.5rem',
        transition: 'border-color 0.22s ease, transform 0.22s ease, box-shadow 0.22s ease',
      }}
      className="card-lift"
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.75rem',
          marginBottom: '0.875rem',
        }}
      >
        <span
          aria-hidden="true"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '28px',
            height: '28px',
            borderRadius: '50%',
            background: 'var(--gold-pale)',
            border: '1.5px solid var(--gold)',
            flexShrink: 0,
          }}
        >
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
            <path
              d="M2 6l3 3 5-5"
              stroke="var(--gold-deep)"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
        <h3
          style={{
            fontFamily: 'var(--font-cormorant), Cormorant Garamond, Georgia, serif',
            fontSize: '1.15rem',
            fontWeight: 600,
            color: 'var(--text-dark)',
            lineHeight: 1.3,
            margin: 0,
          }}
        >
          {feature.title}
        </h3>
      </div>
      <p
        style={{
          fontFamily: 'var(--font-dm-sans), DM Sans, sans-serif',
          fontSize: '0.9375rem',
          color: 'var(--text-body)',
          lineHeight: 1.75,
          margin: 0,
        }}
      >
        {feature.description}
      </p>
    </article>
  );
}
