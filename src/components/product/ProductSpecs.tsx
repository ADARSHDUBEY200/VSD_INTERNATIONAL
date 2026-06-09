import type { Product } from '@/types/product';

interface ProductSpecsProps {
  specs: Product['specs'];
  fullName: Product['fullName'];
}

export default function ProductSpecs({ specs, fullName }: ProductSpecsProps) {
  return (
    <section
      aria-labelledby="specs-heading"
      style={{ background: 'var(--surface)', padding: '5rem 0' }}
    >
      <div className="container">
        <p className="section-label" style={{ marginBottom: '0.75rem', color: 'var(--gold-deep)' }}>
          Specifications
        </p>
        <h2
          id="specs-heading"
          style={{
            fontFamily: 'var(--font-cormorant), Cormorant Garamond, Georgia, serif',
            fontSize: 'clamp(1.6rem, 3vw, 2rem)',
            fontWeight: 600,
            color: 'var(--text-dark)',
            lineHeight: 1.2,
            marginBottom: '0.5rem',
          }}
        >
          Key Specifications
        </h2>
        <p
          style={{
            fontFamily: 'var(--font-dm-sans), DM Sans, sans-serif',
            fontSize: '0.9375rem',
            color: 'var(--text-muted)',
            marginBottom: '2rem',
          }}
        >
          {fullName} — complete technical specification
        </p>

        <div style={{ overflowX: 'auto', WebkitOverflowScrolling: 'touch' }}>
          <table
            style={{
              width: '100%',
              borderCollapse: 'collapse',
              fontFamily: 'var(--font-dm-sans), DM Sans, sans-serif',
              fontSize: '0.9375rem',
              minWidth: '480px',
            }}
            itemScope
            itemType="https://schema.org/Product"
          >
            <thead>
              <tr>
                <th
                  style={{
                    background: 'var(--gold-pale)',
                    color: 'var(--text-dark)',
                    fontWeight: 500,
                    padding: '0.875rem 1.25rem',
                    textAlign: 'left',
                    borderBottom: '2px solid var(--gold)',
                    width: '42%',
                  }}
                >
                  Specification
                </th>
                <th
                  style={{
                    background: 'var(--gold-pale)',
                    color: 'var(--text-dark)',
                    fontWeight: 500,
                    padding: '0.875rem 1.25rem',
                    textAlign: 'left',
                    borderBottom: '2px solid var(--gold)',
                  }}
                >
                  Value
                </th>
              </tr>
            </thead>
            <tbody>
              {specs.map((spec, i) => (
                <tr
                  key={spec.name}
                  style={{
                    background: i % 2 === 0 ? 'var(--white)' : 'var(--surface-alt)',
                    borderBottom: '1px solid var(--border)',
                  }}
                  itemProp="additionalProperty"
                  itemScope
                  itemType="https://schema.org/PropertyValue"
                >
                  <td
                    style={{
                      padding: '0.75rem 1.25rem',
                      color: 'var(--text-body)',
                      fontWeight: 500,
                      borderRight: '1px solid var(--border)',
                    }}
                    itemProp="name"
                  >
                    {spec.name}
                  </td>
                  <td
                    style={{
                      padding: '0.75rem 1.25rem',
                      color: 'var(--text-dark)',
                    }}
                    itemProp="value"
                  >
                    {spec.value}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p
          style={{
            fontFamily: 'var(--font-dm-sans), DM Sans, sans-serif',
            fontSize: '0.8125rem',
            color: 'var(--text-muted)',
            marginTop: '1rem',
          }}
        >
          * Specifications subject to change without notice. Confirm with VSD International before
          procurement.
        </p>
      </div>
    </section>
  );
}
