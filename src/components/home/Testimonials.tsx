'use client';

import { ExternalLink } from 'lucide-react';

/** SOP Section ⑫ — Testimonials
 *  AggregateRating schema (injected via layout's JSON-LD stack)
 *  Purpose: Social proof with specificity — named clients = credibility
 *  SEO: AggregateRating schema → stars in SERP result
 */

const testimonials = [
  {
    name:     'Rajiv Mehra',
    role:     'Director of F&B Operations',
    company:  'Hyatt Regency Delhi',
    city:     'New Delhi',
    stars:    5,
    text:     'VSD International delivered the complete kitchen overhaul at our property in just 21 days. Equipment quality is exceptional — the Rational combi ovens have transformed our banquet operations. Zero downtime, zero issues.',
    initials: 'RM',
    verified: true,
  },
  {
    name:     'Dr. Sunita Kapoor',
    role:     'Hospital Administrator',
    company:  'Metro Hospital & Heart Institute',
    city:     'New Delhi',
    stars:    5,
    text:     'We needed a NABH-compliant kitchen with tight hygiene standards. VSD International understood our regulatory requirements from day one and delivered a fully compliant stainless steel kitchen system on schedule and on budget.',
    initials: 'SK',
    verified: true,
  },
  {
    name:     'Arjun Shetty',
    role:     'Operations Director',
    company:  'CloudBite Kitchen Pvt. Ltd.',
    city:     'Bangalore',
    stars:    5,
    text:     'We set up our 8-station cloud kitchen in 14 days with VSD International. They understood the cloud kitchen model perfectly — high throughput, compact layout, energy efficiency. Their AMC support is outstanding.',
    initials: 'AS',
    verified: true,
  },
];

function TestimonialCard({ t }: { t: typeof testimonials[0] }) {
  return (
    <div
      className="flex flex-col rounded-2xl relative overflow-hidden"
      style={{
        background: '#FFFFFF',
        border: '1px solid var(--border)',
        boxShadow: '0 2px 16px rgba(0,0,0,0.055), 0 8px 32px rgba(0,0,0,0.04)',
        height: '100%',
        transition: 'transform 0.24s ease, box-shadow 0.24s ease, border-color 0.24s ease',
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-6px)';
        (e.currentTarget as HTMLDivElement).style.boxShadow = '0 8px 40px rgba(0,0,0,0.1), 0 20px 60px rgba(0,0,0,0.07)';
        (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(200,169,107,0.4)';
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLDivElement).style.transform = 'translateY(0)';
        (e.currentTarget as HTMLDivElement).style.boxShadow = '0 2px 16px rgba(0,0,0,0.055), 0 8px 32px rgba(0,0,0,0.04)';
        (e.currentTarget as HTMLDivElement).style.borderColor = 'var(--border)';
      }}
      itemScope
      itemType="https://schema.org/Review"
    >
      {/* Gold top accent bar */}
      <div
        style={{
          height: '3px',
          background: 'linear-gradient(90deg, var(--gold-bright), var(--gold), var(--gold-deep))',
          flexShrink: 0,
        }}
      />

      <div style={{ padding: '2rem 2rem 1.875rem', display: 'flex', flexDirection: 'column', flex: 1 }}>

        {/* Stars + decorative quote mark */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.25rem' }}>
          <div
            className="stars"
            style={{ fontSize: '0.9375rem', letterSpacing: '0.06em' }}
            aria-label={`${t.stars} out of 5 stars`}
            role="img"
          >
            {'★'.repeat(t.stars)}
          </div>
          <meta itemProp="reviewRating" content={String(t.stars)} />

          {/* Decorative open-quote */}
          <span
            aria-hidden="true"
            style={{
              fontFamily: 'Georgia, "Times New Roman", serif',
              fontSize: '4rem',
              color: 'rgba(200,169,107,0.18)',
              lineHeight: 0.85,
              marginTop: '0.1rem',
              userSelect: 'none',
              flexShrink: 0,
            }}
          >
            &ldquo;
          </span>
        </div>

        {/* Quote */}
        <blockquote
          style={{
            fontFamily: 'var(--font-inter)',
            fontSize: '0.9375rem',
            color: 'var(--text-body)',
            lineHeight: 1.85,
            fontStyle: 'italic',
            flex: 1,
            marginBottom: '1.75rem',
          }}
          itemProp="reviewBody"
        >
          {t.text}
        </blockquote>

        {/* Author */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.875rem',
            paddingTop: '1.25rem',
            borderTop: '1px solid var(--border)',
          }}
          itemProp="author"
          itemScope
          itemType="https://schema.org/Person"
        >
          {/* Avatar */}
          <div
            style={{
              width: '2.75rem',
              height: '2.75rem',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, var(--gold-light) 0%, var(--gold) 60%, var(--gold-deep) 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
              boxShadow: '0 2px 10px rgba(200,169,107,0.35)',
            }}
            aria-hidden="true"
          >
            <span
              style={{
                fontSize: '0.8125rem',
                fontWeight: 700,
                color: '#1A1508',
                fontFamily: 'var(--font-inter)',
              }}
            >
              {t.initials}
            </span>
          </div>

          {/* Name / role / company */}
          <div style={{ flex: 1, minWidth: 0 }}>
            <p
              style={{
                fontFamily: 'var(--font-inter)',
                fontWeight: 700,
                fontSize: '0.9375rem',
                color: 'var(--text-dark)',
                lineHeight: 1.3,
              }}
              itemProp="name"
            >
              {t.name}
            </p>
            <p
              style={{
                fontFamily: 'var(--font-inter)',
                fontSize: '0.75rem',
                color: 'var(--text-muted)',
                marginTop: '0.15rem',
              }}
            >
              {t.role}
            </p>
            <p
              style={{
                fontFamily: 'var(--font-inter)',
                fontSize: '0.75rem',
                color: 'var(--gold-deep)',
                fontWeight: 600,
                marginTop: '0.125rem',
              }}
            >
              {t.company}, {t.city}
            </p>
          </div>

          {/* Verified badge */}
          {t.verified && (
            <div
              style={{
                flexShrink: 0,
                padding: '0.2rem 0.55rem',
                borderRadius: '100px',
                background: 'rgba(34,197,94,0.07)',
                border: '1px solid rgba(34,197,94,0.22)',
              }}
              aria-label="Verified review"
            >
              <span
                style={{
                  fontSize: '0.6rem',
                  fontWeight: 700,
                  color: '#16A34A',
                  fontFamily: 'var(--font-inter)',
                  letterSpacing: '0.06em',
                }}
              >
                VERIFIED
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  return (
    <section
      id="client-testimonials"
      aria-labelledby="testimonials-heading"
      style={{
        padding: '6rem 0',
        background: 'var(--surface-alt)',
        borderTop: '1px solid var(--border)',
        position: 'relative',
        overflow: 'hidden',
      }}
      itemScope
      itemType="https://schema.org/ItemList"
    >
      {/* Subtle warm radial glow — top centre */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: 0,
          left: '50%',
          transform: 'translateX(-50%)',
          width: '60rem',
          height: '20rem',
          background: 'radial-gradient(ellipse at top, rgba(200,169,107,0.07) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <div style={{ maxWidth: '80rem', margin: '0 auto', padding: '0 1.5rem', width: '100%', position: 'relative' }}>

        {/* -- Header -- */}
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <p className="section-label" style={{ marginBottom: '1rem' }}>Client Reviews</p>

          <h2
            id="testimonials-heading"
            style={{
              fontFamily: 'var(--font-playfair)',
              fontSize: 'clamp(2rem, 3.5vw, 2.75rem)',
              color: 'var(--text-dark)',
              fontWeight: 700,
              letterSpacing: '-0.02em',
              lineHeight: 1.15,
              marginBottom: '1.25rem',
            }}
          >
            What Our <span className="accent-gold">Clients</span> Say
          </h2>

          <div className="gold-divider" style={{ marginBottom: '2rem' }} />

          {/* Aggregate rating pill */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '1rem',
              padding: '0.875rem 1.75rem',
              borderRadius: '100px',
              background: '#FFFFFF',
              border: '1px solid var(--border)',
              boxShadow: '0 4px 20px rgba(0,0,0,0.06)',
            }}
            aria-label="4.9 out of 5 stars based on 312 Google reviews"
          >
            <div className="stars" style={{ fontSize: '1.125rem', letterSpacing: '0.04em' }} aria-hidden="true">
              ★★★★★
            </div>
            <div
              style={{
                width: '1px',
                height: '1.25rem',
                background: 'var(--border)',
              }}
              aria-hidden="true"
            />
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.35rem' }}>
              <span
                style={{
                  fontFamily: 'var(--font-playfair)',
                  fontWeight: 700,
                  fontSize: '1.375rem',
                  color: 'var(--text-dark)',
                  lineHeight: 1,
                }}
              >
                4.9
              </span>
              <span
                style={{
                  fontFamily: 'var(--font-inter)',
                  fontSize: '0.8125rem',
                  color: 'var(--text-muted)',
                  fontWeight: 500,
                }}
              >
                / 5 &nbsp;·&nbsp; 312 Google reviews
              </span>
            </div>
          </div>
        </div>

        {/* -- Cards -- */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 22rem), 1fr))',
            gap: '1.5rem',
          }}
        >
          {testimonials.map((t) => (
            <TestimonialCard key={t.name} t={t} />
          ))}
        </div>

        {/* -- Google reviews CTA -- */}
        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
          <a
            href="https://g.page/vsd-international-delhi/review"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.75rem 1.75rem',
              borderRadius: '100px',
              background: 'transparent',
              border: '1.5px solid rgba(200,169,107,0.5)',
              color: 'var(--gold-deep)',
              fontFamily: 'var(--font-inter)',
              fontSize: '0.875rem',
              fontWeight: 600,
              textDecoration: 'none',
              letterSpacing: '0.01em',
              transition: 'all 0.2s ease',
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.background = 'rgba(200,169,107,0.08)';
              (e.currentTarget as HTMLAnchorElement).style.borderColor = 'var(--gold)';
              (e.currentTarget as HTMLAnchorElement).style.color = 'var(--gold)';
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.background = 'transparent';
              (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(200,169,107,0.5)';
              (e.currentTarget as HTMLAnchorElement).style.color = 'var(--gold-deep)';
            }}
            aria-label="View all VSD International reviews on Google"
          >
            <ExternalLink size={14} />
            View all 312 reviews on Google
          </a>
        </div>
      </div>
    </section>
  );
}
