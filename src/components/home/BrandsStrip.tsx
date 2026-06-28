import Link from 'next/link';
import OpenEnquiryBtn from './OpenEnquiryBtn';

/** SOP Section ⑩ — International Brands We Supply */
const brands = [
  { name: 'Rational',       desc: 'Intelligent cooking systems',  country: 'Germany', flag: '🇩🇪', role: 'Authorised Dealer' },
  { name: 'Robot Coupe',    desc: 'Food processors & prep',       country: 'France',  flag: '🇫🇷', role: 'Authorised Dealer' },
  { name: 'Frymaster',      desc: 'Commercial fryers',            country: 'USA',     flag: '🇺🇸', role: 'Authorised Distributor' },
  { name: 'Hamilton Beach', desc: 'Commercial blenders',          country: 'USA',     flag: '🇺🇸', role: 'Authorised Dealer' },
  { name: 'Scotsman',       desc: 'Ice machines',                 country: 'Italy',   flag: '🇮🇹', role: 'Authorised Dealer' },
  { name: 'BUNN',           desc: 'Beverage equipment',           country: 'USA',     flag: '🇺🇸', role: 'Authorised Distributor' },
  { name: 'Vitamix',        desc: 'High-performance blenders',    country: 'USA',     flag: '🇺🇸', role: 'Authorised Dealer' },
];

/* Triple-duplicated for a seamless loop on wide screens — see .marquee-track--triple */
const track = [...brands, ...brands, ...brands];

function BrandTile({ brand }: { brand: typeof brands[0] }) {
  const initials = brand.name.split(' ').map((w) => w[0]).join('').substring(0, 2).toUpperCase();
  const isDistributor = brand.role === 'Authorised Distributor';
  return (
    <div
      className="card-lift"
      style={{
        border: '1px solid var(--border)',
        borderRadius: '10px',
        padding: '0.875rem 1rem',
        background: 'var(--surface)',
        display: 'flex',
        flexDirection: 'column',
        gap: '0.5rem',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Subtle gold left accent */}
      <div style={{
        position: 'absolute', top: 0, left: 0, bottom: 0, width: '3px',
        background: 'linear-gradient(180deg, var(--gold-bright), var(--gold-deep))',
        borderRadius: '10px 0 0 10px',
      }} aria-hidden="true" />

      {/* Monogram + Name */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem', paddingLeft: '0.25rem' }}>
        <div style={{
          width: '1.875rem', height: '1.875rem', borderRadius: '6px',
          background: 'rgba(201,168,76,0.1)',
          border: '1px solid rgba(201,168,76,0.2)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          flexShrink: 0,
        }} aria-hidden="true">
          <span style={{ fontSize: '0.5625rem', fontWeight: 900, color: 'var(--gold)', letterSpacing: '0.04em' }}>
            {initials}
          </span>
        </div>
        <span style={{
          fontFamily: 'var(--font-inter)',
          fontWeight: 700,
          fontSize: '0.875rem',
          color: 'var(--text-dark)',
          lineHeight: 1.25,
        }}>
          {brand.name}
        </span>
      </div>

      {/* Description */}
      <p style={{
        fontSize: '0.6875rem',
        color: 'var(--text-muted)',
        fontFamily: 'var(--font-inter)',
        lineHeight: 1.4,
        paddingLeft: '0.25rem',
      }}>
        {brand.desc}
      </p>

      {/* Footer: country + role */}
      <div style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        gap: '0.25rem', paddingLeft: '0.25rem',
      }}>
        <span style={{ fontSize: '0.625rem', color: 'var(--text-muted)', fontFamily: 'var(--font-inter)' }}>
          {brand.flag} {brand.country}
        </span>
        <span style={{
          fontSize: '0.5rem', fontWeight: 700,
          letterSpacing: '0.07em', textTransform: 'uppercase',
          color: isDistributor ? 'var(--gold-deep)' : 'var(--gold)',
          border: `1px solid ${isDistributor ? 'rgba(166,124,50,0.4)' : 'rgba(201,168,76,0.3)'}`,
          borderRadius: '3px',
          padding: '0.15rem 0.35rem',
          background: isDistributor ? 'rgba(166,124,50,0.07)' : 'rgba(201,168,76,0.06)',
          whiteSpace: 'nowrap',
        }}>
          {isDistributor ? 'Distributor' : 'Dealer'}
        </span>
      </div>
    </div>
  );
}

function BrandChip({ brand, separator }: { brand: typeof brands[0]; separator?: boolean }) {
  return (
    <div className="shrink-0 flex items-center text-hover-gold" aria-label={`${brand.name} — ${brand.role}`}>
      {separator && (
        <div style={{ width: '1px', height: '1.5rem', background: 'var(--border)', flexShrink: 0 }} aria-hidden="true" />
      )}
      <div style={{ padding: '0.75rem 1.25rem', display: 'flex', flexDirection: 'column', gap: '2px' }}>
        <span style={{
          fontFamily: 'var(--font-inter)', fontWeight: 700,
          fontSize: '0.75rem', letterSpacing: '0.06em',
          textTransform: 'uppercase', whiteSpace: 'nowrap',
          color: 'var(--text-dark)',
        }}>
          {brand.name}
        </span>
        <span style={{ fontSize: '0.5625rem', color: 'var(--gold)', letterSpacing: '0.05em' }}>
          {brand.flag} {brand.country}
        </span>
      </div>
    </div>
  );
}

export default function BrandsStrip() {
  return (
    <section
      id="international-brands"
      aria-labelledby="brands-heading"
      style={{ padding: '3rem 0', background: '#FFFFFF', borderTop: '1px solid var(--border)' }}
    >
      <div className="container mx-auto">

        {/* Side-by-side header */}
        <div style={{
          display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between',
          gap: '2rem', marginBottom: '1.75rem', flexWrap: 'wrap',
        }}>
          <div>
            <p className="section-label mb-2">Brand Partners</p>
            <h2
              id="brands-heading"
              style={{
                fontFamily: 'var(--font-playfair)',
                fontSize: 'clamp(1.375rem, 2.5vw, 1.875rem)',
                color: 'var(--text-dark)',
                lineHeight: 1.2,
              }}
            >
              International Brands We Supply
            </h2>
            <div className="gold-rule mt-3" />
          </div>
          <p style={{
            maxWidth: '28rem', color: 'var(--text-muted)',
            fontSize: '0.9375rem', lineHeight: 1.7,
            alignSelf: 'center',
          }}>
            Authorised dealers for the world&apos;s leading commercial kitchen brands —
            full warranty &amp; local service support across India.
          </p>
        </div>

        {/* Compact brand tile grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 185px), 1fr))',
          gap: '0.625rem',
          marginBottom: '1.5rem',
        }}>
          {brands.map((brand) => (
            <BrandTile key={brand.name} brand={brand} />
          ))}
        </div>

        {/* Thin marquee strip */}
        <div
          className="relative rounded-lg overflow-hidden"
          style={{
            background: 'var(--surface)',
            border: '1px solid var(--border)',
            maskImage: 'linear-gradient(90deg, transparent, black 6%, black 94%, transparent)',
            WebkitMaskImage: 'linear-gradient(90deg, transparent, black 6%, black 94%, transparent)',
          }}
        >
          <div className="marquee-track marquee-track--triple" style={{ animationDuration: '38s' }} aria-hidden="true">
            {track.map((brand, i) => (
              <BrandChip key={`${brand.name}-${i}`} brand={brand} separator={i > 0} />
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-5" style={{ display: 'flex', justifyContent: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
          <Link
            href="/brands"
            className="btn-ghost inline-flex items-center gap-2 text-sm"
            style={{ padding: '0.625rem 1.5rem', minHeight: '2.5rem', fontSize: '0.875rem' }}
            aria-label="View all international brands supplied by VSD International"
          >
            View All Brand Partners →
          </Link>
          <OpenEnquiryBtn
            label="Get Free Quote"
            style={{ padding: '0.625rem 1.5rem', minHeight: '2.5rem', fontSize: '0.875rem' }}
            ariaLabel="Get a free quote for branded kitchen equipment"
          />
        </div>
      </div>
    </section>
  );
}
