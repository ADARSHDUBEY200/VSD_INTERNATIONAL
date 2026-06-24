import Link from 'next/link';
import { ArrowRight, MessageCircle, FileDown } from 'lucide-react';

interface ServiceCTAProps {
  heading?: string;
  subtext?: string;
  serviceName?: string; /** e.g. "Hotel Kitchen" — used in specific CTA copy */
}

/** Final CTA Block — §10 of every service pillar page.
 *  Also used on the /services/ hub.
 *  Gold-on-dark section. WhatsApp primary, download secondary. */
export default function ServiceCTA({
  heading,
  subtext,
  serviceName = '',
}: ServiceCTAProps) {
  const h = heading ?? `Get a Free ${serviceName ? serviceName + ' ' : ''}Consultation`;
  const s = subtext  ?? `Tell us about your project and receive a detailed equipment plan, layout sketch, and quote — within one business day.`;

  return (
    <section
      id="get-a-quote"
      aria-labelledby="cta-heading"
      className="grain-overlay"
      style={{
        background: 'var(--charcoal-warm)',
        padding: '6rem 0',
        borderTop: '1px solid rgba(201,168,76,0.15)',
        position: 'relative',
      }}
    >
      {/* Top gold accent */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute', top: 0, left: 0, right: 0, height: '2px',
          background: 'linear-gradient(90deg, transparent 5%, var(--gold-bright) 35%, var(--gold) 65%, transparent 95%)',
        }}
      />

      <div
        className="container mx-auto"
        style={{ maxWidth: '80rem', padding: '0 1.25rem', textAlign: 'center' }}
      >
        {/* Trust line */}
        <p
          style={{
            fontFamily: 'var(--font-inter)',
            fontSize: '0.8125rem',
            color: 'var(--gold)',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            fontWeight: 700,
            marginBottom: '1.25rem',
          }}
        >
          Trusted by Hyatt · Radisson · Metro Hospitals · DRDO · 500+ Clients
        </p>

        <h2
          id="cta-heading"
          style={{
            fontFamily: 'var(--font-playfair)',
            fontSize: 'clamp(1.875rem, 3.5vw, 3rem)',
            fontWeight: 700,
            color: 'var(--text-on-dark)',
            lineHeight: 1.15,
            letterSpacing: '-0.02em',
            marginBottom: '1.25rem',
          }}
        >
          {h}
        </h2>

        <p
          style={{
            fontFamily: 'var(--font-inter)',
            fontSize: '1.0625rem',
            color: 'rgba(245,240,232,0.6)',
            lineHeight: 1.72,
            maxWidth: 580,
            margin: '0 auto 2.5rem',
          }}
        >
          {s}
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center" style={{ marginBottom: '2rem' }}>
          <a
            href="https://wa.me/919250346370?text=Hi%20VSD%20International%2C%20I%20need%20a%20kitchen%20equipment%20consultation.%20Please%20share%20details."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold inline-flex items-center gap-2"
            style={{ minHeight: '3.25rem', paddingLeft: '2rem', paddingRight: '2rem', fontSize: '0.9375rem' }}
          >
            <MessageCircle size={16} aria-hidden="true" />
            Request Free Consultation
          </a>

          <Link
            href="/contact#catalogue"
            className="btn-ghost-dark inline-flex items-center gap-2"
            style={{ minHeight: '3.25rem', paddingLeft: '2rem', paddingRight: '2rem', fontSize: '0.9375rem' }}
          >
            <FileDown size={16} aria-hidden="true" />
            Download Equipment Catalogue
          </Link>
        </div>

        {/* Trust micro-strip */}
        <div
          className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2"
          style={{ marginTop: '1rem' }}
        >
          {[
            'Response within 4 business hours',
            '500+ projects delivered',
            'ISO 9001 certified',
          ].map((item) => (
            <span
              key={item}
              style={{
                fontFamily: 'var(--font-inter)',
                fontSize: '0.8125rem',
                color: 'rgba(245,240,232,0.35)',
              }}
            >
              ✓ {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
