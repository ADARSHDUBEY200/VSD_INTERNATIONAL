import Link from 'next/link';
import { Quote, ArrowRight } from 'lucide-react';

export interface Testimonial {
  quote: string;
  name: string;
  title: string;
  company: string;
  city: string;
  rating?: number;
}

/** Single testimonial — §8 of the 10-section pillar template.
 *  Light background section with post-testimonial text CTA. */
export default function ServiceTestimonial({ testimonial }: { testimonial: Testimonial }) {
  const stars = '★'.repeat(testimonial.rating ?? 5);

  return (
    <section
      aria-label="Client testimonial"
      style={{
        background: 'var(--surface)',
        padding: '5rem 0',
        borderTop: '1px solid var(--border)',
        borderBottom: '1px solid var(--border)',
      }}
    >
      <div
        className="container mx-auto"
        style={{ maxWidth: '80rem', padding: '0 1.25rem' }}
      >
        <div style={{ maxWidth: '820px', margin: '0 auto', textAlign: 'center' }}>
          {/* Label */}
          <p className="section-label" style={{ marginBottom: '1.5rem' }}>What Clients Say</p>

          {/* Stars */}
          <div
            className="stars"
            style={{ fontSize: '1.25rem', marginBottom: '1.5rem' }}
            aria-label={`${testimonial.rating ?? 5} out of 5 stars`}
            role="img"
          >
            {stars}
          </div>

          {/* Quote icon */}
          <Quote
            size={36}
            style={{ color: 'var(--gold)', opacity: 0.5, margin: '0 auto 1.25rem' }}
            aria-hidden="true"
          />

          {/* Blockquote */}
          <blockquote
            style={{
              fontFamily: 'var(--font-playfair)',
              fontSize: 'clamp(1.0625rem, 1.6vw, 1.3125rem)',
              color: 'var(--text-dark)',
              lineHeight: 1.65,
              fontStyle: 'italic',
              letterSpacing: '-0.01em',
              marginBottom: '2rem',
            }}
            itemProp="reviewBody"
          >
            &ldquo;{testimonial.quote}&rdquo;
          </blockquote>

          {/* Gold divider */}
          <div
            aria-hidden="true"
            style={{
              width: 48, height: 2,
              background: 'linear-gradient(90deg, var(--gold-bright), var(--gold-deep))',
              borderRadius: 1, margin: '0 auto 1.5rem',
            }}
          />

          {/* Attribution */}
          <cite
            style={{ fontStyle: 'normal' }}
            itemScope
            itemType="https://schema.org/Review"
          >
            <p
              style={{
                fontFamily: 'var(--font-inter)',
                fontWeight: 700,
                fontSize: '0.9375rem',
                color: 'var(--text-dark)',
              }}
              itemProp="author"
            >
              {testimonial.name}
            </p>
            <p
              style={{
                fontFamily: 'var(--font-inter)',
                fontSize: '0.875rem',
                color: 'var(--text-muted)',
                marginTop: '0.25rem',
              }}
            >
              {testimonial.title} — {testimonial.company}, {testimonial.city}
            </p>
          </cite>

          {/* Text CTA — CRO §8 */}
          <Link
            href="/contact"
            className="inline-flex items-center gap-2"
            style={{
              marginTop: '2.25rem',
              fontFamily: 'var(--font-inter)',
              fontSize: '0.9375rem',
              fontWeight: 700,
              color: 'var(--gold)',
              textDecoration: 'none',
            }}
          >
            Join 500+ businesses that trust VSD International
            <ArrowRight size={15} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
