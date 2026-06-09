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
    <section
      aria-labelledby="comparison-heading"
      style={{ background: 'var(--surface)', padding: '5rem 0' }}
    >
      <div className="container">
        <p className="section-label" style={{ marginBottom: '0.75rem', color: 'var(--gold-deep)' }}>
          Compare
        </p>
        <h2
          id="comparison-heading"
          style={{
            fontFamily: 'var(--font-cormorant), Cormorant Garamond, Georgia, serif',
            fontSize: 'clamp(1.6rem, 3vw, 2rem)',
            fontWeight: 600,
            color: 'var(--text-dark)',
            lineHeight: 1.2,
            marginBottom: '2rem',
          }}
        >
          Compare Models
        </h2>

        <div style={{ overflowX: 'auto', WebkitOverflowScrolling: 'touch' }}>
          <table
            style={{
              width: '100%',
              borderCollapse: 'collapse',
              fontFamily: 'var(--font-dm-sans), DM Sans, sans-serif',
              fontSize: '0.9rem',
              minWidth: '560px',
            }}
          >
            <thead>
              <tr>
                <th
                  style={{
                    padding: '0.875rem 1.25rem',
                    textAlign: 'left',
                    background: 'var(--surface-alt)',
                    borderBottom: '2px solid var(--border)',
                    color: 'var(--text-muted)',
                    fontWeight: 500,
                    width: '28%',
                  }}
                >
                  Attribute
                </th>
                <th
                  style={{
                    padding: '0.875rem 1.25rem',
                    textAlign: 'left',
                    background: 'var(--gold)',
                    borderBottom: '2px solid var(--gold-deep)',
                    color: '#fff',
                    fontWeight: 600,
                    borderRadius: '4px 4px 0 0',
                  }}
                >
                  {fullName} ★
                </th>
                {comparisonModels.map((m) => (
                  <th
                    key={m.slug}
                    style={{
                      padding: '0.875rem 1.25rem',
                      textAlign: 'left',
                      background: 'var(--surface-alt)',
                      borderBottom: '2px solid var(--border)',
                      color: 'var(--text-body)',
                      fontWeight: 500,
                    }}
                  >
                    {m.name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {comparison.map((row, i) => (
                <tr
                  key={row.attribute}
                  style={{
                    background: i % 2 === 0 ? 'var(--white)' : 'var(--surface)',
                    borderBottom: '1px solid var(--border)',
                  }}
                >
                  <td
                    style={{
                      padding: '0.7rem 1.25rem',
                      color: 'var(--text-muted)',
                      fontWeight: 400,
                    }}
                  >
                    {row.attribute}
                  </td>
                  <td
                    style={{
                      padding: '0.7rem 1.25rem',
                      color: 'var(--text-dark)',
                      fontWeight: 500,
                      background: i % 2 === 0 ? 'rgba(245, 228, 176, 0.3)' : 'rgba(245, 228, 176, 0.18)',
                    }}
                  >
                    {row.thisModel}
                  </td>
                  <td
                    style={{ padding: '0.7rem 1.25rem', color: 'var(--text-body)' }}
                  >
                    {row.alternative1}
                  </td>
                  <td
                    style={{ padding: '0.7rem 1.25rem', color: 'var(--text-body)' }}
                  >
                    {row.alternative2}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div style={{ marginTop: '1.5rem', display: 'flex', gap: '1.25rem', flexWrap: 'wrap' }}>
          {comparisonModels.map((m) => (
            <Link
              key={m.slug}
              href={`/products/${category}/${m.slug}/`}
              style={{
                fontFamily: 'var(--font-dm-sans), DM Sans, sans-serif',
                fontSize: '0.875rem',
                color: 'var(--gold-deep)',
                textDecoration: 'none',
              }}
              className="link-hover-gold"
            >
              View {m.name} →
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
