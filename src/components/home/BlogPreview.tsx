import Link from 'next/link';
import { ArrowRight, Clock } from 'lucide-react';

/** SOP Section ⑮ — Blog Preview
 *  H2: "Industry Insights & Guides"
 *  3 latest articles with thumbnail, title, read time → /blog/
 *  Purpose: Fresh content signal + internal linking + topical authority
 *  SEO: Positions VSD International as an industry thought leader
 */
const posts = [
  {
    slug:      'hotel-kitchen-equipment-guide-india',
    category:  'Hotel Kitchens',
    title:     'The Complete Guide to Hotel Commercial Kitchen Equipment in India (2026)',
    excerpt:   'Everything a hotel procurement manager needs to know: equipment categories, brand selection, installation timeline, and budgeting for 5-star to boutique properties.',
    readTime:  '12 min read',
    date:      'May 2026',
    thumbnail: '/images/blog/hotel-kitchen-guide.webp',
  },
  {
    slug:      'cloud-kitchen-equipment-checklist',
    category:  'Cloud Kitchens',
    title:     'Cloud Kitchen Equipment Checklist: What You Actually Need in 2026',
    excerpt:   'Starting a cloud kitchen? This checklist covers every piece of equipment you need, cost estimates, space requirements, and which international brands perform best for delivery-first operations.',
    readTime:  '8 min read',
    date:      'April 2026',
    thumbnail: '/images/blog/cloud-kitchen-checklist.webp',
  },
  {
    slug:      'rational-combi-oven-india-review',
    category:  'Equipment Reviews',
    title:     'Rational iCombi Pro vs Competitors: An Indian Hotel Chef\'s Honest Review',
    excerpt:   'After installing 47 Rational units across hotels in Delhi NCR, here\'s our comprehensive review: energy savings, menu consistency, ROI calculation, and why most 5-star kitchens swear by it.',
    readTime:  '10 min read',
    date:      'March 2026',
    thumbnail: '/images/blog/rational-review.webp',
  },
];

function BlogCard({ post }: { post: typeof posts[0] }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="card-hover group block rounded-xl overflow-hidden border"
      style={{ borderColor: 'var(--border)', background: '#FFFFFF', textDecoration: 'none' }}
      aria-label={post.title}
    >
      {/* Thumbnail placeholder */}
      <div
        className="relative w-full"
        style={{ height: 200, background: 'var(--charcoal-light)' }}
        aria-label={post.title}
      >
        <div
          className="absolute inset-0 flex items-center justify-center"
          style={{
            background: 'linear-gradient(135deg, #0F0D0A 0%, rgba(42,34,21,0.85) 50%, #0F0D0A 100%)',
          }}
        >
          <span
            style={{
              fontFamily: 'var(--font-inter)',
              fontSize: '0.75rem',
              color: 'rgba(201,168,76,0.35)',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
            }}
          >
            [Blog Thumbnail]
          </span>
        </div>

        {/* Gold top accent line */}
        <div
          className="absolute top-0 left-0 right-0"
          style={{ height: '2px', background: 'linear-gradient(90deg, transparent, var(--gold), var(--gold-deep), transparent)' }}
          aria-hidden="true"
        />

        {/* Category badge — consistent gold */}
        <div
          className="absolute top-4 left-4 px-2.5 py-1 rounded-full"
          style={{
            background: 'rgba(201,168,76,0.15)',
            border: '1px solid rgba(201,168,76,0.35)',
            backdropFilter: 'blur(8px)',
          }}
        >
          <span
            style={{
              fontSize: '0.6875rem',
              fontFamily: 'var(--font-inter)',
              fontWeight: 600,
              color: 'var(--gold-bright)',
              letterSpacing: '0.06em',
            }}
          >
            {post.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Meta */}
        <div
          className="flex items-center gap-3 mb-3"
          style={{ fontSize: '0.75rem', fontFamily: 'var(--font-inter)', color: 'var(--text-muted)' }}
        >
          <span>{post.date}</span>
          <span>·</span>
          <span className="flex items-center gap-1">
            <Clock size={11} aria-hidden="true" />
            {post.readTime}
          </span>
        </div>

        {/* Title */}
        <h3
          className="mb-3"
          style={{
            fontFamily: 'var(--font-playfair)',
            fontWeight: 700,
            fontSize: '1.0625rem',
            color: 'var(--text-primary)',
            lineHeight: 1.3,
          }}
        >
          {post.title}
        </h3>

        {/* Excerpt */}
        <p
          style={{
            fontFamily: 'var(--font-inter)',
            fontSize: '0.875rem',
            color: 'var(--text-secondary)',
            lineHeight: 1.65,
            display: '-webkit-box',
            WebkitLineClamp: 3,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
          } as React.CSSProperties}
        >
          {post.excerpt}
        </p>

        {/* Read more */}
        <div
          className="flex items-center gap-1 mt-4"
          style={{
            color: 'var(--gold)',
            fontSize: '0.8125rem',
            fontFamily: 'var(--font-inter)',
            fontWeight: 600,
          }}
        >
          Read article
          <ArrowRight
            size={13}
            className="transition-transform duration-200 group-hover:translate-x-1"
            aria-hidden="true"
          />
        </div>
      </div>
    </Link>
  );
}

export default function BlogPreview() {
  return (
    <section
      id="blog-guides"
      aria-labelledby="blog-heading"
      style={{ padding: '5rem 0', background: 'var(--surface)', borderTop: '1px solid var(--border)' }}
    >
      <div className="container mx-auto" style={{ maxWidth: '80rem', padding: '0 1.25rem' }}>

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div>
            <p className="section-label mb-3">Knowledge Hub</p>
            <h2
              id="blog-heading"
              style={{
                fontFamily: 'var(--font-playfair)',
                fontSize: 'clamp(1.75rem, 3vw, 2.25rem)',
                color: 'var(--text-primary)',
              }}
            >
              Industry Insights &amp; Guides
            </h2>
            <div className="gold-divider-left mt-4" aria-hidden="true" />
          </div>
          <Link
            href="/blog"
            className="shrink-0 btn-ghost text-sm inline-flex items-center gap-2"
            aria-label="View all blog articles"
          >
            All Articles <ArrowRight size={13} aria-hidden="true" />
          </Link>
        </div>

        {/* Blog cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
}
