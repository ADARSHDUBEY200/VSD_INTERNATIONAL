import type { Product } from '@/types/product';

interface ProductReviewsProps {
  reviews: Product['reviews'];
  aggregateRating: Product['aggregateRating'];
  reviewCount: Product['reviewCount'];
  fullName: Product['fullName'];
}

function Stars({ rating, size = 14 }: { rating: number; size?: number }) {
  return (
    <span className="prev-stars" role="img" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }, (_, i) => (
        <svg
          key={i}
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill={i < Math.floor(rating) ? 'currentColor' : 'none'}
          stroke="currentColor"
          strokeWidth={i < Math.floor(rating) ? '0' : '1.5'}
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      ))}
    </span>
  );
}

function getInitials(name: string): string {
  return name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();
}

export default function ProductReviews({
  reviews,
  aggregateRating,
  reviewCount,
  fullName,
}: ProductReviewsProps) {
  return (
    <section aria-labelledby="reviews-heading" className="prev-section">
      <div className="container">

        {/* ── Header ── */}
        <div className="prev-header">
          <div className="prev-eyebrow-row">
            <span className="prev-dot" aria-hidden="true" />
            <span className="prev-eyebrow">Reviews</span>
            <div className="prev-eyebrow-line" aria-hidden="true" />
          </div>
          <h2 id="reviews-heading" className="prev-heading">
            What our clients say
          </h2>
          <div className="prev-rule" aria-hidden="true" />
        </div>

        {/* ── Aggregate rating banner ── */}
        <div
          className="prev-agg"
          itemScope
          itemType="https://schema.org/AggregateRating"
        >
          <meta itemProp="itemReviewed" content={fullName} />
          <meta itemProp="bestRating" content="5" />
          <meta itemProp="worstRating" content="1" />

          <div className="prev-agg-score">
            <span className="prev-agg-num" itemProp="ratingValue">
              {aggregateRating.toFixed(1)}
            </span>
            <span className="prev-agg-denom">/ 5.0</span>
          </div>

          <div className="prev-agg-sep" aria-hidden="true" />

          <div className="prev-agg-meta">
            <Stars rating={aggregateRating} size={17} />
            <p className="prev-agg-count">
              Based on{' '}
              <span itemProp="reviewCount">{reviewCount}</span> verified
              reviews
            </p>
            <div className="prev-agg-badges">
              <span className="prev-agg-badge">
                <svg
                  width="8"
                  height="8"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                Verified Buyers
              </span>
              <span className="prev-agg-badge">
                <svg
                  width="8"
                  height="8"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                Authorised Dealer Supply
              </span>
            </div>
          </div>
        </div>

        {/* ── Review cards ── */}
        <div className="prev-grid">
          {reviews.map((review) => (
            <article
              key={review.name}
              className="prev-card"
              itemScope
              itemType="https://schema.org/Review"
            >
              {/* Stars */}
              <div className="prev-card-stars">
                <Stars rating={review.rating} size={13} />
              </div>

              {/* Quote body */}
              <blockquote className="prev-card-quote" itemProp="reviewBody">
                <span className="prev-card-qmark" aria-hidden="true">
                  &ldquo;
                </span>
                {review.text}
              </blockquote>

              {/* Author */}
              <div className="prev-card-footer">
                <div className="prev-card-avatar" aria-hidden="true">
                  {getInitials(review.name)}
                </div>
                <div
                  className="prev-card-author"
                  itemProp="author"
                  itemScope
                  itemType="https://schema.org/Person"
                >
                  <strong className="prev-card-name" itemProp="name">
                    {review.name}
                  </strong>
                  <span className="prev-card-company">{review.company}</span>
                </div>
                <time
                  className="prev-card-date"
                  dateTime={review.date}
                  itemProp="datePublished"
                >
                  {new Date(review.date).toLocaleDateString('en-IN', {
                    month: 'short',
                    year: 'numeric',
                  })}
                </time>
              </div>

              {/* Gold bottom bar — scaleX on hover */}
              <div className="prev-card-bar" aria-hidden="true" />
            </article>
          ))}
        </div>

      </div>

      <style>{`
        /* ── Section ── */
        .prev-section {
          background: #faf9f6;
          padding: 2.75rem 0 3rem;
          border-top: 1px solid var(--border);
        }

        /* ── Header ── */
        .prev-header { margin-bottom: 2rem; }
        .prev-eyebrow-row {
          display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.875rem;
        }
        .prev-dot {
          width: 6px; height: 6px; border-radius: 50%;
          background: var(--gold); flex-shrink: 0;
        }
        .prev-eyebrow {
          font-family: var(--font-inter), Inter, ui-sans-serif, sans-serif;
          font-size: 0.625rem; font-weight: 700; letter-spacing: 0.2em;
          text-transform: uppercase; color: var(--gold-deep); white-space: nowrap;
        }
        .prev-eyebrow-line {
          flex: 1; height: 1px;
          background: linear-gradient(90deg, var(--border), transparent);
        }
        .prev-heading {
          font-family: var(--font-playfair), 'Playfair Display', Georgia, serif;
          font-size: clamp(1.75rem, 3vw, 2.5rem);
          font-weight: 700; color: var(--text-dark); line-height: 1.1;
          letter-spacing: -0.02em; margin: 0 0 1rem;
        }
        .prev-rule {
          width: 48px; height: 3px; border-radius: 2px;
          background: linear-gradient(90deg, var(--gold), #e8b86d 50%, transparent);
        }

        /* ── Aggregate rating ── */
        .prev-agg {
          display: flex;
          align-items: center;
          gap: 1.5rem;
          flex-wrap: wrap;
          background: var(--white);
          border: 1px solid #e8e2d4;
          border-radius: 14px;
          padding: 1.375rem 1.875rem;
          margin-bottom: 2.5rem;
          box-shadow: 0 2px 12px rgba(0,0,0,0.04);
        }
        .prev-agg-score {
          display: flex;
          align-items: baseline;
          gap: 0.25rem;
          flex-shrink: 0;
        }
        .prev-agg-num {
          font-family: var(--font-playfair), 'Playfair Display', Georgia, serif;
          font-size: 3.75rem; font-weight: 700;
          color: var(--gold); line-height: 1; letter-spacing: -0.04em;
        }
        .prev-agg-denom {
          font-family: var(--font-inter), Inter, ui-sans-serif, sans-serif;
          font-size: 0.875rem; font-weight: 500; color: var(--text-muted);
          padding-bottom: 0.375rem;
        }
        .prev-agg-sep {
          width: 1px; align-self: stretch; min-height: 48px;
          background: #e8e2d4; flex-shrink: 0;
        }
        @media (max-width: 540px) { .prev-agg-sep { display: none; } }
        .prev-agg-meta {
          display: flex; flex-direction: column; gap: 0.5rem;
        }
        .prev-stars {
          display: inline-flex; gap: 0.2rem; color: var(--gold);
        }
        .prev-agg-count {
          font-family: var(--font-inter), Inter, ui-sans-serif, sans-serif;
          font-size: 0.8125rem; color: var(--text-muted); margin: 0;
        }
        .prev-agg-badges { display: flex; gap: 0.5rem; flex-wrap: wrap; }
        .prev-agg-badge {
          display: inline-flex; align-items: center; gap: 0.3rem;
          padding: 0.2rem 0.625rem; border-radius: 999px;
          background: rgba(200,146,42,0.07);
          border: 1px solid rgba(200,146,42,0.18);
          font-family: var(--font-inter), Inter, ui-sans-serif, sans-serif;
          font-size: 0.5625rem; font-weight: 700; letter-spacing: 0.1em;
          text-transform: uppercase; color: var(--gold-deep);
        }
        .prev-agg-badge svg { flex-shrink: 0; }

        /* ── Card grid ── */
        .prev-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(min(100%, 320px), 1fr));
          gap: 1.25rem;
        }

        /* ── Individual card ── */
        .prev-card {
          position: relative;
          background: var(--white);
          border: 1px solid #e8e2d4;
          border-radius: 14px;
          padding: 1.5rem 1.625rem 1.625rem;
          display: flex;
          flex-direction: column;
          overflow: hidden;
          transition: border-color 0.22s ease, box-shadow 0.22s ease, transform 0.22s ease;
        }
        .prev-card:hover {
          border-color: rgba(200,146,42,0.4);
          box-shadow: 0 10px 32px rgba(0,0,0,0.09);
          transform: translateY(-3px);
        }

        .prev-card-stars { margin-bottom: 0.875rem; }

        /* Quote */
        .prev-card-quote {
          font-family: var(--font-inter), Inter, ui-sans-serif, sans-serif;
          font-size: 0.9375rem;
          color: var(--text-body);
          line-height: 1.78;
          margin: 0 0 1.375rem;
          padding: 0;
          border: none;
          flex: 1;
        }
        .prev-card-qmark {
          font-family: var(--font-playfair), 'Playfair Display', Georgia, serif;
          font-size: 2.75rem;
          line-height: 0;
          vertical-align: -0.45rem;
          color: var(--gold);
          opacity: 0.2;
          margin-right: 0.04em;
          user-select: none;
        }

        /* Author row */
        .prev-card-footer {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding-top: 1rem;
          border-top: 1px solid #f0ede5;
          margin-top: auto;
        }
        .prev-card-avatar {
          width: 36px; height: 36px;
          border-radius: 50%;
          background: #1a1a16;
          color: var(--gold);
          font-family: var(--font-inter), Inter, ui-sans-serif, sans-serif;
          font-size: 0.625rem; font-weight: 800; letter-spacing: 0.06em;
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
        }
        .prev-card-author {
          display: flex; flex-direction: column; gap: 0.1rem;
          flex: 1; min-width: 0;
        }
        .prev-card-name {
          font-family: var(--font-inter), Inter, ui-sans-serif, sans-serif;
          font-size: 0.875rem; font-weight: 700; color: var(--text-dark);
          display: block; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
        }
        .prev-card-company {
          font-family: var(--font-inter), Inter, ui-sans-serif, sans-serif;
          font-size: 0.75rem; color: var(--text-muted);
          white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
        }
        .prev-card-date {
          font-family: var(--font-inter), Inter, ui-sans-serif, sans-serif;
          font-size: 0.5625rem; font-weight: 600; letter-spacing: 0.09em;
          text-transform: uppercase; color: var(--text-muted);
          flex-shrink: 0; align-self: flex-start; padding-top: 2px;
        }

        /* Gold bottom bar reveals on hover */
        .prev-card-bar {
          position: absolute;
          bottom: 0; left: 0; right: 0;
          height: 2px;
          background: linear-gradient(90deg, var(--gold), #c8922a 60%, transparent);
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.28s ease;
        }
        .prev-card:hover .prev-card-bar { transform: scaleX(1); }
      `}</style>
    </section>
  );
}
