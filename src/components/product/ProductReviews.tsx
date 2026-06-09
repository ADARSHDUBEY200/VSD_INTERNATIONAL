import type { Product } from '@/types/product';

interface ProductReviewsProps {
  reviews: Product['reviews'];
  aggregateRating: Product['aggregateRating'];
  reviewCount: Product['reviewCount'];
  fullName: Product['fullName'];
}

function StarRow({ rating, label }: { rating: number; label: string }) {
  return (
    <span
      aria-label={label}
      role="img"
      style={{ color: 'var(--gold-bright)', letterSpacing: '0.06em', fontSize: '1rem' }}
    >
      {Array.from({ length: 5 }, (_, i) => (i < Math.floor(rating) ? '★' : '☆')).join('')}
    </span>
  );
}

export default function ProductReviews({
  reviews,
  aggregateRating,
  reviewCount,
  fullName,
}: ProductReviewsProps) {
  return (
    <section
      aria-labelledby="reviews-heading"
      style={{ background: 'var(--surface-alt)', padding: '5rem 0' }}
    >
      <div className="container">
        <p className="section-label" style={{ marginBottom: '0.75rem', color: 'var(--gold-deep)' }}>
          Reviews
        </p>
        <h2
          id="reviews-heading"
          style={{
            fontFamily: 'var(--font-cormorant), Cormorant Garamond, Georgia, serif',
            fontSize: 'clamp(1.6rem, 3vw, 2rem)',
            fontWeight: 600,
            color: 'var(--text-dark)',
            lineHeight: 1.2,
            marginBottom: '2rem',
          }}
        >
          What Our Clients Say
        </h2>

        {/* Aggregate rating */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1.25rem',
            marginBottom: '2.5rem',
            flexWrap: 'wrap',
          }}
          itemScope
          itemType="https://schema.org/AggregateRating"
        >
          <meta itemProp="itemReviewed" content={fullName} />
          <meta itemProp="bestRating" content="5" />
          <meta itemProp="worstRating" content="1" />
          <span
            style={{
              fontFamily: 'var(--font-cormorant), Cormorant Garamond, Georgia, serif',
              fontSize: '3.5rem',
              fontWeight: 700,
              color: 'var(--text-dark)',
              lineHeight: 1,
            }}
            itemProp="ratingValue"
          >
            {aggregateRating.toFixed(1)}
          </span>
          <div>
            <StarRow
              rating={aggregateRating}
              label={`${aggregateRating} out of 5 stars`}
            />
            <p
              style={{
                fontFamily: 'var(--font-dm-sans), DM Sans, sans-serif',
                fontSize: '0.875rem',
                color: 'var(--text-muted)',
                margin: '0.25rem 0 0',
              }}
            >
              <span itemProp="reviewCount">{reviewCount}</span> verified reviews
            </p>
          </div>
        </div>

        {/* Review cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 340px), 1fr))',
            gap: '1.5rem',
          }}
        >
          {reviews.map((review) => (
            <article
              key={review.name}
              style={{
                background: 'var(--white)',
                border: '1px solid var(--border)',
                borderRadius: '12px',
                padding: '1.5rem',
              }}
              itemScope
              itemType="https://schema.org/Review"
            >
              <div style={{ marginBottom: '0.875rem' }}>
                <StarRow
                  rating={review.rating}
                  label={`${review.rating} out of 5 stars`}
                />
              </div>
              <blockquote
                style={{
                  fontFamily: 'var(--font-cormorant), Cormorant Garamond, Georgia, serif',
                  fontSize: '1.05rem',
                  fontStyle: 'italic',
                  color: 'var(--text-body)',
                  lineHeight: 1.75,
                  margin: '0 0 1.125rem',
                  borderLeft: 'none',
                  padding: 0,
                }}
                itemProp="reviewBody"
              >
                &ldquo;{review.text}&rdquo;
              </blockquote>
              <div
                style={{
                  borderTop: '1px solid var(--border)',
                  paddingTop: '0.75rem',
                }}
                itemProp="author"
                itemScope
                itemType="https://schema.org/Person"
              >
                <strong
                  style={{
                    fontFamily: 'var(--font-dm-sans), DM Sans, sans-serif',
                    fontSize: '0.9rem',
                    fontWeight: 600,
                    color: 'var(--text-dark)',
                    display: 'block',
                  }}
                  itemProp="name"
                >
                  {review.name}
                </strong>
                <span
                  style={{
                    fontFamily: 'var(--font-dm-sans), DM Sans, sans-serif',
                    fontSize: '0.8125rem',
                    color: 'var(--text-muted)',
                  }}
                >
                  {review.company}
                </span>
                <time
                  dateTime={review.date}
                  style={{
                    display: 'block',
                    fontFamily: 'var(--font-dm-sans), DM Sans, sans-serif',
                    fontSize: '0.75rem',
                    color: 'var(--text-muted)',
                    marginTop: '0.25rem',
                  }}
                  itemProp="datePublished"
                >
                  {new Date(review.date).toLocaleDateString('en-IN', {
                    month: 'long',
                    year: 'numeric',
                  })}
                </time>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
