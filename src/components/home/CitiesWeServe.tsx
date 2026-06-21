'use client';

import Link from 'next/link';
import { MapPin, ArrowRight, Factory, Building2 } from 'lucide-react';

const featuredCities = [
  {
    name:    'Delhi NCR',
    href:    '/#delhi',
    tagline: 'Our Factory Location · Highest Authority',
    desc:    "VSD International's headquarters and manufacturing facility. Delhi NCR projects benefit from same-day site visits, fastest delivery timelines, and direct factory support.",
    stats:   [
      { label: 'Projects Completed', value: '150+' },
      { label: 'Response Time',      value: 'Same Day' },
      { label: 'Delhi Factory',      value: '1' },
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
  { name: 'Bangalore', href: '/commercial-kitchen-equipment-bangalore', desc: 'Cloud kitchen capital of India',     color: '#FF6B35' },
  { name: 'Pune',      href: '/commercial-kitchen-equipment-pune',       desc: 'Growing hospitality & corporate',   color: '#6C63FF' },
  { name: 'Hyderabad', href: '/commercial-kitchen-equipment-hyderabad',  desc: 'Premium hospitality & IT cafeterias', color: '#00B4D8' },
  { name: 'Chennai',   href: '/commercial-kitchen-equipment-chennai',    desc: 'Hotels, hospitals & institutions',  color: '#2EC4B6' },
  { name: 'Kolkata',   href: '/commercial-kitchen-equipment-kolkata',    desc: 'Heritage hotels & restaurants',     color: '#E76F51' },
  { name: 'Jaipur',    href: '/commercial-kitchen-equipment-jaipur',     desc: 'Luxury resort & heritage hotels',   color: '#F4A261' },
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
      id="cities-we-serve"
      aria-labelledby="cities-heading"
      style={{
        padding: 'clamp(3rem, 10vw, 6rem) 0 clamp(2.5rem, 8vw, 5rem)',
        background: '#FAFAF8',
        borderTop: '1px solid var(--border)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background decoration — abstract India map dots */}
      <div aria-hidden="true" style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        backgroundImage: 'radial-gradient(circle, rgba(200,169,107,0.12) 1px, transparent 1px)',
        backgroundSize: '32px 32px',
        maskImage: 'radial-gradient(ellipse 80% 70% at 50% 50%, black 30%, transparent 100%)',
        WebkitMaskImage: 'radial-gradient(ellipse 80% 70% at 50% 50%, black 30%, transparent 100%)',
      }} />

      {/* Top ambient glow */}
      <div aria-hidden="true" style={{
        position: 'absolute', top: -100, left: '50%', transform: 'translateX(-50%)',
        width: 800, height: 400,
        background: 'radial-gradient(ellipse, rgba(200,169,107,0.08) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div className="container mx-auto" style={{ maxWidth: '80rem', padding: '0 1.25rem', position: 'relative' }}>

        {/* Header */}
        <div className="text-center mb-8 sm:mb-14">
          <p className="section-label mb-2 sm:mb-3">Pan India Delivery</p>
          <h2
            id="cities-heading"
            style={{
              fontFamily: 'var(--font-playfair)',
              fontSize: 'clamp(1.625rem, 3.2vw, 2.75rem)',
              color: 'var(--text-primary)',
              lineHeight: 1.2,
            }}
          >
            Cities We Serve Across India
          </h2>
          <div className="gold-divider mt-4 sm:mt-5" aria-hidden="true" />
          <p className="mt-4 sm:mt-6 max-w-xl" style={{
            color: 'var(--text-secondary)',
            fontSize: 'clamp(0.875rem, 3.6vw, 1rem)', lineHeight: 1.7,
            marginLeft: 'auto', marginRight: 'auto', textAlign: 'center',
          }}>
            Our Delhi factories enable fast delivery pan-India. Enterprise buyers in every major city
            receive the same premium service and support.
          </p>
        </div>

        {/* Featured cities — horizontal scroll on phone, 2-col grid from md */}
        <div className="cities-scroll-outer mb-6 sm:mb-8">
        <div className="cities-featured-grid">

          {/* Delhi NCR — HQ dark card */}
          <Link
            href={featuredCities[0].href}
            className="block rounded-2xl overflow-hidden group"
            style={{
              background: 'linear-gradient(145deg, #0D0B08 0%, #1A1510 60%, #0F0D0A 100%)',
              border: '1px solid rgba(200,169,107,0.3)',
              boxShadow: '0 8px 40px rgba(0,0,0,0.25), inset 0 1px 0 rgba(200,169,107,0.1)',
              textDecoration: 'none',
              position: 'relative',
              transition: 'transform 0.25s, box-shadow 0.25s',
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(-3px)';
              (e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 16px 56px rgba(0,0,0,0.35), inset 0 1px 0 rgba(200,169,107,0.15)';
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(0)';
              (e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 8px 40px rgba(0,0,0,0.25), inset 0 1px 0 rgba(200,169,107,0.1)';
            }}
            aria-label="Commercial kitchen equipment in Delhi NCR"
          >
            {/* Gold top border */}
            <div style={{
              height: 3,
              background: 'linear-gradient(90deg, transparent, var(--gold-bright), var(--gold), transparent)',
            }} />

            {/* Watermark icon */}
            <div aria-hidden="true" style={{
              position: 'absolute', right: 24, top: 24,
              opacity: 0.04,
            }}>
              <Factory size={120} color="#C9A84C" />
            </div>

            <div style={{ padding: '1.75rem 2rem 1.75rem' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 12, marginBottom: 12 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <div style={{
                    width: 36, height: 36, borderRadius: '50%',
                    background: 'rgba(200,169,107,0.12)',
                    border: '1px solid rgba(200,169,107,0.25)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    flexShrink: 0,
                  }}>
                    <MapPin size={16} color="var(--gold)" />
                  </div>
                  <h3 style={{
                    fontFamily: 'var(--font-playfair)', fontWeight: 700,
                    fontSize: '1.5rem', color: '#F7F5F0',
                  }}>
                    Delhi NCR
                  </h3>
                </div>
                <span style={{
                  padding: '4px 10px', borderRadius: 100,
                  background: 'rgba(200,169,107,0.12)',
                  border: '1px solid rgba(200,169,107,0.3)',
                  fontSize: '0.6rem', fontFamily: 'var(--font-inter)',
                  fontWeight: 700, letterSpacing: '0.12em',
                  color: 'var(--gold)', whiteSpace: 'nowrap', flexShrink: 0,
                }}>
                  HEADQUARTERS
                </span>
              </div>

              <p style={{ fontSize: '0.8rem', color: 'var(--gold)', fontFamily: 'var(--font-inter)', fontWeight: 500, marginBottom: '0.75rem' }}>
                {featuredCities[0].tagline}
              </p>

              <p style={{
                fontFamily: 'var(--font-inter)', fontSize: '0.9375rem',
                color: 'rgba(245,240,232,0.45)', lineHeight: 1.7, marginBottom: '1.5rem',
              }}>
                {featuredCities[0].desc}
              </p>

              {/* Stats with dividers */}
              <div style={{
                display: 'grid', gridTemplateColumns: 'repeat(3,1fr)',
                gap: 0,
                padding: '1rem 0',
                borderTop: '1px solid rgba(200,169,107,0.12)',
                borderBottom: '1px solid rgba(200,169,107,0.12)',
                marginBottom: '1.25rem',
              }}>
                {featuredCities[0].stats.map((stat, i) => (
                  <div key={stat.label} style={{
                    textAlign: 'center',
                    borderRight: i < 2 ? '1px solid rgba(200,169,107,0.12)' : 'none',
                    padding: '0 0.4rem',
                    minWidth: 0,
                  }}>
                    <p style={{ fontFamily: 'var(--font-playfair)', fontWeight: 700, fontSize: 'clamp(1.05rem, 4.5vw, 1.375rem)', color: 'var(--gold)', lineHeight: 1, whiteSpace: 'nowrap' }}>
                      {stat.value}
                    </p>
                    <p style={{ fontSize: '0.675rem', color: '#4A4535', fontFamily: 'var(--font-inter)', marginTop: '0.3rem', lineHeight: 1.3 }}>
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: 6, color: 'var(--gold)', fontSize: '0.875rem', fontFamily: 'var(--font-inter)', fontWeight: 600 }}>
                Kitchen equipment in Delhi NCR
                <ArrowRight size={14} style={{ transition: 'transform 0.2s' }} className="group-hover:translate-x-1" />
              </div>
            </div>
          </Link>

          {/* Mumbai — light premium card */}
          <Link
            href={featuredCities[1].href}
            className="block rounded-2xl overflow-hidden group"
            style={{
              background: '#FFFFFF',
              border: '1px solid var(--border)',
              boxShadow: '0 4px 24px rgba(0,0,0,0.06)',
              textDecoration: 'none',
              position: 'relative',
              transition: 'transform 0.25s, box-shadow 0.25s',
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(-3px)';
              (e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 16px 48px rgba(0,0,0,0.12), 0 0 0 1px rgba(200,169,107,0.2)';
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(0)';
              (e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 4px 24px rgba(0,0,0,0.06)';
            }}
            aria-label="Commercial kitchen equipment in Mumbai"
          >
            {/* Gold-amber gradient top strip */}
            <div style={{
              height: 3,
              background: 'linear-gradient(90deg, transparent, var(--gold-light), var(--gold), transparent)',
            }} />

            {/* Watermark */}
            <div aria-hidden="true" style={{
              position: 'absolute', right: 24, top: 24, opacity: 0.04,
            }}>
              <Building2 size={120} color="#C9A84C" />
            </div>

            <div style={{ padding: '1.75rem 2rem 1.75rem' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 12, marginBottom: 12 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <div style={{
                    width: 36, height: 36, borderRadius: '50%',
                    background: 'rgba(200,169,107,0.08)',
                    border: '1px solid rgba(200,169,107,0.2)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    flexShrink: 0,
                  }}>
                    <MapPin size={16} color="var(--gold)" />
                  </div>
                  <h3 style={{
                    fontFamily: 'var(--font-playfair)', fontWeight: 700,
                    fontSize: '1.5rem', color: 'var(--text-dark)',
                  }}>
                    Mumbai
                  </h3>
                </div>
                <span style={{
                  padding: '4px 10px', borderRadius: 100,
                  background: 'rgba(200,169,107,0.1)',
                  border: '1px solid rgba(200,169,107,0.22)',
                  fontSize: '0.65rem', fontFamily: 'var(--font-inter)',
                  fontWeight: 700, letterSpacing: '0.08em',
                  color: 'var(--gold-deep)', whiteSpace: 'nowrap', flexShrink: 0,
                }}>
                  #1 MARKET
                </span>
              </div>

              <p style={{ fontSize: '0.8rem', color: 'var(--gold)', fontFamily: 'var(--font-inter)', fontWeight: 500, marginBottom: '0.75rem' }}>
                {featuredCities[1].tagline}
              </p>

              <p style={{
                fontFamily: 'var(--font-inter)', fontSize: '0.9375rem',
                color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '1.5rem',
              }}>
                {featuredCities[1].desc}
              </p>

              <div style={{
                display: 'grid', gridTemplateColumns: 'repeat(3,1fr)',
                padding: '1rem 0',
                borderTop: '1px solid var(--border)',
                borderBottom: '1px solid var(--border)',
                marginBottom: '1.25rem',
              }}>
                {featuredCities[1].stats.map((stat, i) => (
                  <div key={stat.label} style={{
                    textAlign: 'center',
                    borderRight: i < 2 ? '1px solid var(--border)' : 'none',
                    padding: '0 0.4rem',
                    minWidth: 0,
                  }}>
                    <p style={{ fontFamily: 'var(--font-playfair)', fontWeight: 700, fontSize: 'clamp(1.05rem, 4.5vw, 1.375rem)', color: 'var(--gold)', lineHeight: 1, whiteSpace: 'nowrap' }}>
                      {stat.value}
                    </p>
                    <p style={{ fontSize: '0.675rem', color: 'var(--text-muted)', fontFamily: 'var(--font-inter)', marginTop: '0.3rem', lineHeight: 1.3 }}>
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: 6, color: 'var(--gold)', fontSize: '0.875rem', fontFamily: 'var(--font-inter)', fontWeight: 600 }}>
                Kitchen equipment in Mumbai
                <ArrowRight size={14} style={{ transition: 'transform 0.2s' }} className="group-hover:translate-x-1" />
              </div>
            </div>
          </Link>
        </div>
        </div>

        {/* Standard city grid — horizontal scroll on phone, grid from sm */}
        <div className="cities-scroll-outer mb-6">
        <div className="cities-standard-grid">
          {standardCities.map((city, i) => (
            <Link
              key={city.name}
              href={city.href}
              className="flex flex-col items-center text-center rounded-xl border group"
              style={{
                borderColor: 'var(--border)',
                background: '#FFFFFF',
                textDecoration: 'none',
                padding: '1.25rem 0.875rem',
                position: 'relative',
                overflow: 'hidden',
                transition: 'transform 0.2s, box-shadow 0.2s, border-color 0.2s',
                boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(-3px)';
                (e.currentTarget as HTMLAnchorElement).style.boxShadow = `0 8px 24px ${city.color}22`;
                (e.currentTarget as HTMLAnchorElement).style.borderColor = `${city.color}55`;
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(0)';
                (e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 2px 8px rgba(0,0,0,0.04)';
                (e.currentTarget as HTMLAnchorElement).style.borderColor = 'var(--border)';
              }}
              aria-label={`Commercial kitchen equipment in ${city.name}`}
            >
              {/* Colored top strip */}
              <div style={{
                position: 'absolute', top: 0, left: 0, right: 0, height: 3,
                background: city.color,
                transform: 'scaleX(0)',
                transition: 'transform 0.25s ease',
              }} className="group-hover:scale-x-100" />

              {/* Rank badge */}
              <span style={{
                position: 'absolute', top: 8, right: 8,
                fontSize: '0.6rem', fontWeight: 700,
                color: '#D1C9BC', fontFamily: 'var(--font-inter)',
              }}>
                #{i + 3}
              </span>

              <div style={{
                width: 36, height: 36, borderRadius: '50%',
                background: `${city.color}18`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                marginBottom: '0.625rem',
                transition: 'background 0.2s',
              }}>
                <MapPin size={16} style={{ color: city.color }} />
              </div>
              <p style={{ fontFamily: 'var(--font-inter)', fontWeight: 700, fontSize: '0.9375rem', color: 'var(--text-dark)', marginBottom: '0.3rem' }}>
                {city.name}
              </p>
              <p style={{ fontSize: '0.675rem', color: 'var(--text-muted)', fontFamily: 'var(--font-inter)', lineHeight: 1.45 }}>
                {city.desc}
              </p>
            </Link>
          ))}
        </div>
        </div>

        {/* Also serving strip */}
        <div style={{
          background: '#FFFFFF',
          border: '1px solid var(--border)',
          borderRadius: 16,
          padding: 'clamp(0.75rem, 3vw, 1rem) clamp(0.875rem, 3.5vw, 1.5rem)',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          gap: '0.5rem 0.75rem',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginRight: 4 }}>
            <div style={{
              width: 6, height: 6, borderRadius: '50%',
              background: 'var(--gold)', flexShrink: 0,
            }} />
            <span style={{
              fontSize: '0.7rem', fontFamily: 'var(--font-inter)',
              color: 'var(--text-muted)', fontWeight: 700,
              letterSpacing: '0.08em', textTransform: 'uppercase',
              whiteSpace: 'nowrap',
            }}>
              Also Serving
            </span>
          </div>
          <div style={{ width: '1px', height: 18, background: 'var(--border)', flexShrink: 0 }} />
          {textCities.map((city) => (
            <Link
              key={city.name}
              href={city.href}
              style={{
                fontSize: '0.8125rem',
                fontFamily: 'var(--font-inter)',
                fontWeight: 500,
                color: 'var(--text-body)',
                textDecoration: 'none',
                padding: '0.25rem 0.625rem',
                borderRadius: 100,
                border: '1px solid var(--border)',
                background: 'var(--surface)',
                transition: 'color 0.15s, border-color 0.15s, background 0.15s',
                whiteSpace: 'nowrap',
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLAnchorElement).style.color = 'var(--gold-deep)';
                (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(200,169,107,0.4)';
                (e.currentTarget as HTMLAnchorElement).style.background = 'rgba(200,169,107,0.06)';
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLAnchorElement).style.color = 'var(--text-body)';
                (e.currentTarget as HTMLAnchorElement).style.borderColor = 'var(--border)';
                (e.currentTarget as HTMLAnchorElement).style.background = 'var(--surface)';
              }}
              aria-label={`Commercial kitchen equipment in ${city.name}`}
            >
              {city.name}
            </Link>
          ))}
          <span style={{ fontSize: '0.8125rem', color: 'var(--text-muted)', fontFamily: 'var(--font-inter)', fontStyle: 'italic' }}>
            + more cities
          </span>
        </div>

        <div style={{ textAlign: 'center', marginTop: 'clamp(1.75rem, 6vw, 2.5rem)' }}>
          <button
            type="button"
            onClick={() => window.dispatchEvent(new Event('vsd:open-enquiry'))}
            className="btn-gold inline-flex items-center gap-2"
            aria-label="Get a free kitchen quote for your city"
          >
            Get Free Quote for Your City
          </button>
        </div>

      </div>
    </section>
  );
}
