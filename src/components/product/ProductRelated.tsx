import Image from 'next/image';
import Link from 'next/link';
import type { Product } from '@/types/product';

interface ProductRelatedProps {
  relatedProducts: Product['relatedProducts'];
}

const CATEGORY_LABELS: Record<string, string> = {
  'combi-ovens': 'Combi Ovens',
  'blast-chillers': 'Blast Chillers',
  'multifunctional-cooking': 'Multifunctional Cooking',
  'refrigeration': 'Refrigeration',
  'fabrication': 'SS Fabrication',
};

export default function ProductRelated({ relatedProducts }: ProductRelatedProps) {
  return (
    <section
      aria-labelledby="related-heading"
      style={{ background: 'var(--surface)', padding: '5rem 0' }}
    >
      <div className="container">
        <p className="section-label" style={{ marginBottom: '0.75rem', color: 'var(--gold-deep)' }}>
          Related
        </p>
        <h2
          id="related-heading"
          style={{
            fontFamily: 'var(--font-cormorant), Cormorant Garamond, Georgia, serif',
            fontSize: 'clamp(1.6rem, 3vw, 2rem)',
            fontWeight: 600,
            color: 'var(--text-dark)',
            lineHeight: 1.2,
            marginBottom: '2.5rem',
          }}
        >
          You May Also Like
        </h2>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 280px), 1fr))',
            gap: '1.5rem',
          }}
        >
          {relatedProducts.map((related) => (
            <Link
              key={related.slug}
              href={`/products/${related.category}/${related.slug}/`}
              style={{ textDecoration: 'none', display: 'block' }}
            >
              <article
                style={{
                  border: '1px solid var(--border)',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  background: 'var(--white)',
                  transition: 'border-color 0.22s ease, transform 0.22s ease, box-shadow 0.22s ease',
                }}
                className="card-lift"
              >
                <div
                  style={{
                    position: 'relative',
                    aspectRatio: '4/3',
                    background: 'var(--surface-alt)',
                    overflow: 'hidden',
                  }}
                >
                  <Image
                    src={related.image}
                    alt={`${related.name} — commercial kitchen equipment`}
                    fill
                    style={{ objectFit: 'cover' }}
                    loading="lazy"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div style={{ padding: '1.25rem' }}>
                  <span
                    style={{
                      fontFamily: 'var(--font-dm-sans), DM Sans, sans-serif',
                      fontSize: '0.6875rem',
                      fontWeight: 700,
                      letterSpacing: '0.15em',
                      textTransform: 'uppercase',
                      color: 'var(--gold-deep)',
                      display: 'block',
                      marginBottom: '0.375rem',
                    }}
                  >
                    {CATEGORY_LABELS[related.category] ?? related.category}
                  </span>
                  <strong
                    style={{
                      fontFamily: 'var(--font-dm-sans), DM Sans, sans-serif',
                      fontSize: '1rem',
                      fontWeight: 600,
                      color: 'var(--text-dark)',
                      display: 'block',
                      marginBottom: '0.375rem',
                    }}
                  >
                    {related.name}
                  </strong>
                  <p
                    style={{
                      fontFamily: 'var(--font-dm-sans), DM Sans, sans-serif',
                      fontSize: '0.8125rem',
                      color: 'var(--text-muted)',
                      lineHeight: 1.6,
                      marginBottom: '0.875rem',
                    }}
                  >
                    {related.tagline}
                  </p>
                  <span
                    style={{
                      fontFamily: 'var(--font-dm-sans), DM Sans, sans-serif',
                      fontSize: '0.875rem',
                      color: 'var(--gold)',
                      fontWeight: 500,
                    }}
                  >
                    View Product →
                  </span>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
