import { MapPin, Clock, Truck, Building2 } from 'lucide-react';
import Link from 'next/link';

/**
 * Delhi Local Section — Blueprint §03 Section 10 (ADD)
 * H2: "Commercial Kitchen Equipment Manufacturers in Delhi NCR"
 * Earns "…manufacturers in delhi" + "near me" cluster via entity signals,
 * not phrase repetition. This block + GBP = Delhi ranking.
 */
export default function DelhiLocalSection() {
  return (
    <section
      id="delhi"
      aria-labelledby="delhi-heading"
      style={{
        padding: '5.5rem 0',
        background: '#FDFCF9',
        borderTop: '1px solid var(--border)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Warm gold bloom */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: 0,
          left: '50%',
          transform: 'translateX(-50%)',
          width: '60rem',
          height: '20rem',
          background:
            'radial-gradient(ellipse at top, rgba(200,169,107,0.07) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <div
        className="container mx-auto"
        style={{ maxWidth: '80rem', padding: '0 1.5rem', position: 'relative' }}
      >
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <p className="section-label" style={{ marginBottom: '1rem' }}>
            Delhi NCR · Our Home Base
          </p>
          <h2
            id="delhi-heading"
            style={{
              fontFamily: 'var(--font-playfair)',
              fontSize: 'clamp(1.75rem, 3.2vw, 2.625rem)',
              color: 'var(--text-dark)',
              fontWeight: 700,
              letterSpacing: '-0.02em',
              lineHeight: 1.18,
              marginBottom: '1.25rem',
            }}
          >
            Commercial Kitchen Equipment{' '}
            <span className="accent-gold">Manufacturers in Delhi NCR</span>
          </h2>
          <div className="gold-divider" style={{ marginBottom: '1.75rem' }} />
        </div>

        {/* Two-column layout: text + map */}
        <div
          className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start"
        >
          {/* Left — descriptive copy */}
          <div>
            <p
              style={{
                fontFamily: 'var(--font-inter)',
                fontSize: '1.0625rem',
                color: 'var(--text-body)',
                lineHeight: 1.9,
                marginBottom: '1.5rem',
              }}
            >
              VSD International is headquartered in{' '}
              <strong style={{ color: 'var(--text-dark)' }}>Mandawali, New Delhi</strong>{' '}
              (110092), with two manufacturing facilities in the Delhi region — one at{' '}
              <strong style={{ color: 'var(--text-dark)' }}>Mandawali, East Delhi</strong>{' '}
              and a second at{' '}
              <strong style={{ color: 'var(--text-dark)' }}>Nangli Sakrawati, West Delhi</strong>.
              Being physically based in Delhi NCR means we offer{' '}
              <strong style={{ color: 'var(--text-dark)' }}>same-day site visits</strong>,
              the fastest delivery timelines in the region, and direct factory support for
              every project.
            </p>

            <p
              style={{
                fontFamily: 'var(--font-inter)',
                fontSize: '1.0625rem',
                color: 'var(--text-body)',
                lineHeight: 1.9,
                marginBottom: '1.75rem',
              }}
            >
              Our completed Delhi NCR projects include a{' '}
              <strong style={{ color: 'var(--text-dark)' }}>four-zone kitchen at Hyatt Regency Delhi</strong>{' '}
              (Bhikaji Cama Place), a full hotel kitchen at{' '}
              <strong style={{ color: 'var(--text-dark)' }}>Crowne Plaza Rohini</strong>, and
              an institutional kitchen at{' '}
              <strong style={{ color: 'var(--text-dark)' }}>ITC Welcomhotel Dwarka</strong>.
              We serve clients across South Delhi, West Delhi, East Delhi, Noida, Gurgaon
              and the wider NCR — with the same engineer team and factory support throughout.
            </p>

            {/* Service area chips */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '2rem' }}>
              {[
                'South Delhi',
                'West Delhi',
                'East Delhi',
                'North Delhi',
                'Gurgaon',
                'Noida',
                'Faridabad',
                'Ghaziabad',
              ].map((area) => (
                <span
                  key={area}
                  style={{
                    padding: '0.3rem 0.8rem',
                    borderRadius: '100px',
                    background: 'rgba(200,169,107,0.07)',
                    border: '1px solid rgba(200,169,107,0.22)',
                    fontSize: '0.8125rem',
                    fontFamily: 'var(--font-inter)',
                    fontWeight: 600,
                    color: 'var(--gold-deep)',
                    letterSpacing: '0.01em',
                  }}
                >
                  {area}
                </span>
              ))}
            </div>

            {/* Quick stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                { icon: Building2, label: 'Delhi Factories', value: '2' },
                { icon: Clock,     label: 'Site Visit',      value: 'Same Day' },
                { icon: Truck,     label: 'NCR Delivery',    value: 'Fastest' },
                { icon: MapPin,    label: 'Projects in NCR', value: '150+' },
              ].map(({ icon: Icon, label, value }) => (
                <div
                  key={label}
                  style={{
                    padding: '1rem',
                    borderRadius: '10px',
                    background: '#FFFFFF',
                    border: '1px solid var(--border)',
                    textAlign: 'center',
                  }}
                >
                  <Icon
                    size={18}
                    style={{ color: 'var(--gold)', marginBottom: '0.5rem' }}
                    aria-hidden="true"
                  />
                  <p
                    style={{
                      fontFamily: 'var(--font-playfair)',
                      fontWeight: 700,
                      fontSize: '1.125rem',
                      color: 'var(--text-dark)',
                      lineHeight: 1,
                      marginBottom: '0.25rem',
                    }}
                  >
                    {value}
                  </p>
                  <p
                    style={{
                      fontSize: '0.6875rem',
                      color: 'var(--text-muted)',
                      fontFamily: 'var(--font-inter)',
                      fontWeight: 500,
                    }}
                  >
                    {label}
                  </p>
                </div>
              ))}
            </div>

            <div style={{ marginTop: '2rem' }}>
              <Link
                href="/contact"
                className="btn-gold inline-flex items-center gap-2"
                aria-label="Book a free same-day site visit in Delhi NCR"
              >
                Book a Free Delhi Site Visit
              </Link>
            </div>
          </div>

          {/* Right — Google Maps embed */}
          <div
            style={{
              borderRadius: '16px',
              overflow: 'hidden',
              border: '1px solid rgba(200,169,107,0.25)',
              boxShadow: '0 8px 40px rgba(0,0,0,0.08)',
              minHeight: '400px',
              background: '#F5F0E8',
            }}
          >
            <iframe
              title="VSD International — Mandawali, New Delhi office location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.6!2d77.2857!3d28.6358!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfb3b5c5c5c5b%3A0x1234567890abcdef!2sMandawali%2C%20New%20Delhi%2C%20Delhi%20110092!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="420"
              style={{ border: 0, display: 'block' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        {/* NAP block for schema consistency */}
        <div
          style={{
            marginTop: '3rem',
            padding: '1.5rem 2rem',
            borderRadius: '12px',
            background: '#FFFFFF',
            border: '1px solid var(--border)',
            display: 'flex',
            flexWrap: 'wrap',
            gap: '1.5rem',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
          }}
        >
          {[
            { label: 'Headquarters', value: 'A-347 Saraswati Gali, Mandawali, New Delhi — 110092' },
            { label: 'Phone / WhatsApp', value: '+91-9250346370' },
            { label: 'Hours', value: 'Mon–Sat, 9 AM – 6 PM' },
          ].map(({ label, value }) => (
            <div key={label} style={{ minWidth: '180px' }}>
              <p
                style={{
                  fontSize: '0.6875rem',
                  fontFamily: 'var(--font-inter)',
                  fontWeight: 700,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: 'var(--gold)',
                  marginBottom: '0.3rem',
                }}
              >
                {label}
              </p>
              <p
                style={{
                  fontSize: '0.9375rem',
                  fontFamily: 'var(--font-inter)',
                  color: 'var(--text-body)',
                  lineHeight: 1.5,
                }}
              >
                {value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
