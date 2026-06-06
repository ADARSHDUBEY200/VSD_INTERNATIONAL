import Link from 'next/link';

export interface Brand { name: string; tagline: string; slug: string }

const ALL_BRANDS: Brand[] = [
  { name: 'Rational',        tagline: 'Combi ovens & steamers',             slug: 'rational'        },
  { name: 'Robot Coupe',     tagline: 'Food processors & blixers',          slug: 'robot-coupe'     },
  { name: 'Frymaster',       tagline: 'Commercial fryers & griddles',        slug: 'frymaster'       },
  { name: 'Hamilton Beach',  tagline: 'Blenders, mixers & warmers',          slug: 'hamilton-beach'  },
  { name: 'Scotsman',        tagline: 'Ice machines & dispensers',           slug: 'scotsman'        },
  { name: 'BUNN',            tagline: 'Coffee & beverage equipment',         slug: 'bunn'            },
  { name: 'Vitamix',         tagline: 'High-performance blenders',           slug: 'vitamix'         },
  { name: 'Waring',          tagline: 'Countertop commercial equipment',     slug: 'waring'          },
];

/** §6 — Brands We Supply & Install
 *  Logo-grid with brand name + 1-line tagline.
 *  Each links to /brands/[slug]. */
export default function BrandsGrid({ brands = ALL_BRANDS }: { brands?: Brand[] }) {
  return (
    <section
      aria-labelledby="brands-heading"
      style={{
        background: 'var(--charcoal)',
        padding: '5.5rem 0',
        borderTop: '1px solid rgba(201,168,76,0.1)',
      }}
    >
      <div className="container mx-auto" style={{ maxWidth: '80rem', padding: '0 1.25rem' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <p className="section-label" style={{ marginBottom: '0.75rem' }}>Authorised Dealer</p>
          <h2
            id="brands-heading"
            style={{
              fontFamily: 'var(--font-playfair)',
              fontSize: 'clamp(1.625rem, 2.6vw, 2.25rem)',
              color: 'var(--text-on-dark)',
              lineHeight: 1.15,
            }}
          >
            International Brands We Supply &amp; Install
          </h2>
          <div
            aria-hidden="true"
            style={{
              width: 56, height: 3,
              background: 'linear-gradient(90deg, var(--gold-bright), var(--gold), var(--gold-deep))',
              borderRadius: 2, margin: '1.125rem auto 0',
            }}
          />
          <p
            style={{
              marginTop: '1rem',
              fontFamily: 'var(--font-inter)',
              fontSize: '0.9375rem',
              color: 'rgba(245,240,232,0.55)',
              maxWidth: 520,
              margin: '1rem auto 0',
            }}
          >
            VSD International is the authorised Indian dealer for 15+ global kitchen equipment brands.
          </p>
        </div>

        {/* Brand grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {brands.map((brand) => (
            <Link
              key={brand.slug}
              href={`/brands/${brand.slug}`}
              className="card-lift-dark flex flex-col items-center justify-center text-center rounded-xl"
              style={{
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(201,168,76,0.12)',
                padding: '1.75rem 1.25rem',
                textDecoration: 'none',
              }}
            >
              {/* Brand initial badge */}
              <div
                style={{
                  width: 52, height: 52,
                  borderRadius: '50%',
                  background: 'rgba(201,168,76,0.10)',
                  border: '1px solid rgba(201,168,76,0.22)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  marginBottom: '0.875rem',
                }}
                aria-hidden="true"
              >
                <span
                  style={{
                    fontFamily: 'var(--font-playfair)',
                    fontWeight: 800,
                    fontSize: '1.125rem',
                    color: 'var(--gold)',
                  }}
                >
                  {brand.name.charAt(0)}
                </span>
              </div>

              <p
                style={{
                  fontFamily: 'var(--font-inter)',
                  fontWeight: 700,
                  fontSize: '0.9375rem',
                  color: 'var(--text-on-dark)',
                  marginBottom: '0.25rem',
                }}
              >
                {brand.name}
              </p>
              <p
                style={{
                  fontFamily: 'var(--font-inter)',
                  fontSize: '0.8125rem',
                  color: 'rgba(245,240,232,0.45)',
                  lineHeight: 1.5,
                }}
              >
                {brand.tagline}
              </p>
            </Link>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
          <Link
            href="/brands"
            className="btn-ghost-dark inline-flex items-center gap-2 text-sm"
          >
            View All 15+ Brands →
          </Link>
        </div>
      </div>
    </section>
  );
}
