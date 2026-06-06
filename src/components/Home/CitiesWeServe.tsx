import Link from 'next/link';
import { MapPin, ArrowRight } from 'lucide-react';

/** SOP Section ⑯ — Cities We Serve
 *  H2: "Cities We Serve Across India"
 *  Delhi NCR + Mumbai → Featured large cards
 *  Bangalore, Pune, Hyderabad, Chennai → Standard grid
 *  Kolkata, Jaipur, Lucknow → Text links
 *  Purpose: Local SEO authority distribution
 *  SEO: Homepage links pass authority to city-specific landing pages
 */
const featuredCities = [
  {
    name:    'Delhi NCR',
    href:    '/commercial-kitchen-equipment-delhi',
    tagline: 'Our Factory Location · Highest Authority',
    desc:    "VSD International's headquarters and manufacturing facility. Delhi NCR projects benefit from same-day site visits, fastest delivery timelines, and direct factory support.",
    stats:   [
      { label: 'Projects Completed', value: '150+' },
      { label: 'Response Time',      value: '2 hrs' },
      { label: 'Service Engineers',  value: '12' },
    ],
    isHQ: true,
  },
  {
    name:    'Mumbai',
    href:    '/commercial-kitchen-equipment-mumbai',
    tagline: "India's #1 Hospitality Market",
    desc:    "Serving Mumbai's world-class hotel circuit, fine dining restaurants, cloud kitchen hubs, and institutional clients across South Mumbai, BKC, and Navi Mumbai.",
    stats:   [
      { label: 'Hotels Served',  value: '30+' },
      { label: 'Projects Done',  value: '65+' },
      { label: 'Delivery Time',  value: '3 days' },
    ],
    isHQ: false,
  },
];

const standardCities = [
  { name: 'Bangalore', href: '/commercial-kitchen-equipment-bangalore', desc: 'Cloud kitchen capital of India' },
  { name: 'Pune',      href: '/commercial-kitchen-equipment-pune',       desc: 'Growing hospitality & corporate' },
  { name: 'Hyderabad', href: '/commercial-kitchen-equipment-hyderabad',  desc: 'Premium hospitality & IT cafeterias' },
  { name: 'Chennai',   href: '/commercial-kitchen-equipment-chennai',    desc: 'Hotels, hospitals & institutions' },
  { name: 'Kolkata',   href: '/commercial-kitchen-equipment-kolkata',    desc: 'Heritage hotels & restaurants' },
  { name: 'Jaipur',    href: '/commercial-kitchen-equipment-jaipur',     desc: 'Luxury resort & heritage hotels' },
];

const textCities = [
  { name: 'Lucknow',    href: '/commercial-kitchen-equipment-lucknow' },
  { name: 'Chandigarh', href: '/commercial-kitchen-equipment-chandigarh' },
  { name: 'Ahmedabad',  href: '/commercial-kitchen-equipment-ahmedabad' },
  { name: 'Goa',        href: '/commercial-kitchen-equipment-goa' },
  { name: 'Bhopal',     href: '/commercial-kitchen-equipment-bhopal' },
  { name: 'Indore',     href: '/commercial-kitchen-equipment-indore' },
  { name: 'Surat',      href: '/commercial-kitchen-equipment-surat' },
  { name: 'Coimbatore', href: '/commercial-kitchen-equipment-coimbatore' },
];

export default function CitiesWeServe() {
  return (
    <section
      aria-labelledby="cities-heading"
      style={{ padding: '5rem 0', background: '#FFFFFF', borderTop: '1px solid var(--border)' }}
    >
      <div className="container mx-auto" style={{ maxWidth: '80rem', padding: '0 1.25rem' }}>

        {/* Header */}
        <div className="text-center mb-14">
          <p className="section-label mb-3">Pan India Delivery</p>
          <h2
            id="cities-heading"
            style={{
              fontFamily: 'var(--font-playfair)',
              fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
              color: 'var(--text-primary)',
            }}
          >
            Cities We Serve Across India
          </h2>
          <div className="gold-divider mt-5" aria-hidden="true" />
          <p
            className="mt-6 max-w-xl"
            style={{
              color: 'var(--text-secondary)',
              fontSize: '1rem',
              lineHeight: 1.75,
              marginLeft: 'auto',
              marginRight: 'auto',
              textAlign: 'center',
            }}
          >
            Our Delhi factories enable fast delivery pan-India. Enterprise buyers in every major city
            receive the same premium service and support.
          </p>
        </div>

        {/* Featured cities — large cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {featuredCities.map((city) => (
            <Link
              key={city.name}
              href={city.href}
              className="card-hover block rounded-2xl overflow-hidden border"
              style={{
                borderColor: city.isHQ ? 'rgba(200,169,107,0.4)' : 'var(--border)',
                background: city.isHQ ? 'var(--charcoal)' : 'var(--surface)',
                textDecoration: 'none',
              }}
              aria-label={`Commercial kitchen equipment in ${city.name}`}
            >
              <div className="p-8">
                {/* City + HQ badge */}
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="flex items-center gap-2">
                    <MapPin size={18} style={{ color: 'var(--gold)', flexShrink: 0 }} aria-hidden="true" />
                    <h3
                      style={{
                        fontFamily: 'var(--font-playfair)',
                        fontWeight: 700,
                        fontSize: '1.375rem',
                        color: city.isHQ ? '#F7F7F5' : 'var(--text-primary)',
                      }}
                    >
                      {city.name}
                    </h3>
                  </div>
                  {city.isHQ && (
                    <span
                      className="px-2.5 py-0.5 rounded-full shrink-0"
                      style={{
                        background: 'rgba(200,169,107,0.15)',
                        border: '1px solid rgba(200,169,107,0.3)',
                        fontSize: '0.6rem',
                        fontFamily: 'var(--font-inter)',
                        fontWeight: 700,
                        letterSpacing: '0.1em',
                        color: 'var(--gold)',
                      }}
                    >
                      HEADQUARTERS
                    </span>
                  )}
                </div>

                <p style={{ fontSize: '0.8125rem', color: 'var(--gold)', fontFamily: 'var(--font-inter)', fontWeight: 500, marginBottom: '0.75rem' }}>
                  {city.tagline}
                </p>

                <p
                  style={{
                    fontFamily: 'var(--font-inter)',
                    fontSize: '0.9375rem',
                    color: city.isHQ ? '#8A8A80' : 'var(--text-secondary)',
                    lineHeight: 1.65,
                    marginBottom: '1.5rem',
                  }}
                >
                  {city.desc}
                </p>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  {city.stats.map((stat) => (
                    <div key={stat.label}>
                      <p style={{ fontFamily: 'var(--font-playfair)', fontWeight: 700, fontSize: '1.25rem', color: 'var(--gold)', lineHeight: 1 }}>
                        {stat.value}
                      </p>
                      <p style={{ fontSize: '0.7rem', color: city.isHQ ? '#5A5A54' : 'var(--text-muted)', fontFamily: 'var(--font-inter)', marginTop: '0.25rem' }}>
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>

                <div
                  className="flex items-center gap-1"
                  style={{ color: 'var(--gold)', fontSize: '0.875rem', fontFamily: 'var(--font-inter)', fontWeight: 600 }}
                >
                  Kitchen equipment in {city.name} <ArrowRight size={14} aria-hidden="true" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Standard city grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
          {standardCities.map((city) => (
            <Link
              key={city.name}
              href={city.href}
              className="card-hover flex flex-col items-center text-center p-5 rounded-xl border"
              style={{ borderColor: 'var(--border)', background: 'var(--surface)', textDecoration: 'none' }}
              aria-label={`Commercial kitchen equipment in ${city.name}`}
            >
              <MapPin size={16} style={{ color: 'var(--gold)', marginBottom: '0.5rem' }} aria-hidden="true" />
              <p style={{ fontFamily: 'var(--font-inter)', fontWeight: 700, fontSize: '0.9375rem', color: 'var(--text-primary)', marginBottom: '0.25rem' }}>
                {city.name}
              </p>
              <p style={{ fontSize: '0.7rem', color: 'var(--text-muted)', fontFamily: 'var(--font-inter)', lineHeight: 1.4 }}>
                {city.desc}
              </p>
            </Link>
          ))}
        </div>

        {/* Text links for emerging cities */}
        <div
          className="flex flex-wrap justify-center gap-x-6 gap-y-2 py-5 px-6 rounded-xl"
          style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}
        >
          <span
            style={{
              fontSize: '0.75rem',
              fontFamily: 'var(--font-inter)',
              color: 'var(--text-muted)',
              fontWeight: 600,
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
              whiteSpace: 'nowrap',
              alignSelf: 'center',
            }}
          >
            Also serving:
          </span>
          {textCities.map((city) => (
            <Link
              key={city.name}
              href={city.href}
              className="link-hover-gold"
              style={{ fontSize: '0.875rem', fontFamily: 'var(--font-inter)' }}
              aria-label={`Commercial kitchen equipment in ${city.name}`}
            >
              {city.name}
            </Link>
          ))}
          <span style={{ fontSize: '0.875rem', color: 'var(--text-muted)', fontFamily: 'var(--font-inter)' }}>
            + more cities
          </span>
        </div>
      </div>
    </section>
  );
}
