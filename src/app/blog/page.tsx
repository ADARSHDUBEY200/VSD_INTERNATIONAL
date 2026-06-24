import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Clock, ChevronRight, Home } from 'lucide-react';
import { BLOG_POSTS, CATEGORIES } from '@/lib/blog';

export const metadata: Metadata = {
  title: 'Commercial Kitchen Blog — Insights & Guides | VSD International',
  description:
    'Expert guides on cloud kitchen costs, hotel kitchen equipment, hospital kitchen compliance, and commercial kitchen buying guides. Real project figures from VSD International.',
  alternates: { canonical: 'https://vsdinternational.com/blog/' },
  openGraph: {
    url: 'https://vsdinternational.com/blog/',
    title: 'Commercial Kitchen Blog — Insights & Guides | VSD International',
    description:
      'Expert guides on cloud kitchen setup, hotel kitchen equipment, NABH hospital kitchens, and more. Written by VSD International — 400+ projects delivered across India.',
    images: [{ url: 'https://vsdinternational.com/og-image.jpg', width: 1200, height: 630 }],
  },
};

const schemaGraph = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Blog',
      '@id': 'https://vsdinternational.com/blog/#blog',
      name: 'VSD International — Commercial Kitchen Insights',
      description:
        'Expert guides on cloud kitchen costs, hotel kitchen equipment, hospital kitchen compliance, and commercial kitchen buying decisions — written by the team behind 400+ kitchen installations across India.',
      url: 'https://vsdinternational.com/blog/',
      publisher: { '@id': 'https://vsdinternational.com/#organization' },
      inLanguage: 'en-IN',
    },
    {
      '@type': 'CollectionPage',
      '@id': 'https://vsdinternational.com/blog/#collectionpage',
      name: 'VSD International Blog',
      url: 'https://vsdinternational.com/blog/',
      description: 'All commercial kitchen guides and insights from VSD International.',
      mainEntity: {
        '@type': 'ItemList',
        itemListElement: BLOG_POSTS.map((post, i) => ({
          '@type': 'ListItem',
          position: i + 1,
          url: `https://vsdinternational.com/blog/${post.slug}/`,
          name: post.title,
        })),
      },
      breadcrumb: {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://vsdinternational.com' },
          { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://vsdinternational.com/blog/' },
        ],
      },
    },
  ],
};

const CATEGORY_ICONS: Record<string, string> = {
  'cloud-kitchen': '☁',
  'hotel-kitchen': '🏨',
  'hospital-kitchen': '🏥',
};

const FEATURED_POST = BLOG_POSTS[0];
const RECENT_POSTS = BLOG_POSTS.slice(1, 5);

export default function BlogIndexPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaGraph) }}
      />

      {/* ── Breadcrumb ─────────────────────────────────────────────────────── */}
      <nav
        aria-label="Breadcrumb"
        style={{
          background: 'var(--charcoal)',
          borderBottom: '1px solid rgba(201,168,76,0.12)',
          padding: '0.875rem 0',
        }}
      >
        <div className="container mx-auto flex items-center gap-1.5 flex-wrap" style={{ maxWidth: '80rem', padding: '0 1.25rem' }}>
          <Link href="/" className="flex items-center gap-1" style={{ color: 'rgba(245,240,232,0.45)', fontSize: '0.8125rem', fontFamily: 'var(--font-inter)' }} aria-label="Home">
            <Home size={12} aria-hidden="true" />
            <span>Home</span>
          </Link>
          <ChevronRight size={11} style={{ color: 'rgba(201,168,76,0.35)' }} aria-hidden="true" />
          <span style={{ color: 'var(--gold)', fontSize: '0.8125rem', fontFamily: 'var(--font-inter)', fontWeight: 600 }} aria-current="page">Blog</span>
        </div>
      </nav>

      {/* ── Page Header ────────────────────────────────────────────────────── */}
      <header style={{ background: 'var(--charcoal-warm)', padding: '4rem 0 3.5rem', borderBottom: '1px solid rgba(201,168,76,0.12)', position: 'relative' }}>
        <div aria-hidden="true" style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '2px', background: 'linear-gradient(90deg, transparent 5%, var(--gold-bright) 35%, var(--gold) 65%, transparent 95%)' }} />
        <div className="container mx-auto" style={{ maxWidth: '80rem', padding: '0 1.25rem' }}>
          <p className="section-label" style={{ marginBottom: '1rem' }}>Knowledge Hub</p>
          <h1
            style={{
              fontFamily: 'var(--font-playfair)',
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              color: 'var(--text-on-dark)',
              fontWeight: 800,
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
              marginBottom: '1.25rem',
            }}
          >
            Commercial Kitchen{' '}
            <span className="accent-gold-dark">Insights &amp; Guides</span>
          </h1>
          <div className="gold-rule" style={{ marginBottom: '1.5rem' }} />
          <p
            style={{
              fontFamily: 'var(--font-inter)',
              fontSize: '1.0625rem',
              color: 'var(--text-dim)',
              lineHeight: 1.75,
              maxWidth: '48rem',
            }}
          >
            Every article on this blog is written by the team behind 400+ commercial kitchen installations across India — covering hotel kitchens for Hyatt and Radisson, cloud kitchen setups for Zomato and Swiggy operators, and NABH-compliant hospital kitchen fit-outs. You&apos;ll find real project figures, equipment recommendations based on actual deployments, and compliance guidance that comes from FSSAI and NABH experience — not from paraphrasing other blogs. Our six topic clusters cover Hotel Kitchen, Cloud Kitchen, Hospital Kitchen, Restaurant Setup, Bakery Equipment, and Buying Guides.
          </p>
        </div>
      </header>

      {/* ── Category Navigation ────────────────────────────────────────────── */}
      <section
        aria-label="Blog categories"
        style={{ background: 'var(--surface)', borderBottom: '1px solid var(--border)', padding: '2.5rem 0' }}
      >
        <div className="container mx-auto" style={{ maxWidth: '80rem', padding: '0 1.25rem' }}>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {Object.entries(CATEGORIES).map(([key, cat]) => (
              <div
                key={key}
                className="rounded-xl p-5 border"
                style={{ borderColor: 'var(--border)', background: '#FFFFFF' }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
                  <span style={{ fontSize: '1.5rem' }} aria-hidden="true">{CATEGORY_ICONS[key] ?? '📖'}</span>
                  <h2
                    style={{
                      fontFamily: 'var(--font-playfair)',
                      fontSize: '1.0625rem',
                      color: 'var(--text-dark)',
                      fontWeight: 700,
                    }}
                  >
                    {cat.label}
                  </h2>
                </div>
                <p style={{ fontFamily: 'var(--font-inter)', fontSize: '0.875rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
                  {cat.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Featured Post ──────────────────────────────────────────────────── */}
      <section aria-labelledby="featured-post-heading" style={{ padding: '4.5rem 0', background: '#FFFFFF', borderBottom: '1px solid var(--border)' }}>
        <div className="container mx-auto" style={{ maxWidth: '80rem', padding: '0 1.25rem' }}>
          <p className="section-label" style={{ marginBottom: '1rem' }}>Featured Guide</p>
          <h2
            id="featured-post-heading"
            style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(1.5rem, 2.5vw, 2rem)', color: 'var(--text-dark)', marginBottom: '2.5rem' }}
          >
            Editor&apos;s Pick
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            {/* Thumbnail */}
            <div style={{ borderRadius: '12px', overflow: 'hidden', background: 'var(--charcoal-light)', position: 'relative', minHeight: '280px' }}>
              <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'linear-gradient(135deg, #0F0D0A 0%, rgba(42,34,21,0.9) 50%, #0F0D0A 100%)' }}>
                <div style={{ textAlign: 'center' }}>
                  <span style={{ display: 'block', fontSize: '3rem', marginBottom: '0.5rem' }}>☁️</span>
                  <span style={{ fontFamily: 'var(--font-inter)', fontSize: '0.75rem', color: 'rgba(201,168,76,0.5)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                    {FEATURED_POST.categoryLabel}
                  </span>
                </div>
              </div>
              <div aria-hidden="true" style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '3px', background: 'linear-gradient(90deg, var(--gold-bright), var(--gold), var(--gold-deep))' }} />
            </div>

            {/* Content */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                <span style={{ padding: '0.25rem 0.75rem', borderRadius: '100px', background: 'rgba(201,168,76,0.1)', border: '1px solid rgba(201,168,76,0.25)', fontSize: '0.6875rem', fontFamily: 'var(--font-inter)', fontWeight: 600, color: 'var(--gold-deep)', letterSpacing: '0.06em' }}>
                  {FEATURED_POST.categoryLabel}
                </span>
                <span style={{ fontSize: '0.75rem', fontFamily: 'var(--font-inter)', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                  <Clock size={11} aria-hidden="true" /> {FEATURED_POST.readTime}
                </span>
              </div>

              <h3
                style={{
                  fontFamily: 'var(--font-playfair)',
                  fontSize: 'clamp(1.375rem, 2.5vw, 1.75rem)',
                  fontWeight: 700,
                  color: 'var(--text-dark)',
                  lineHeight: 1.25,
                  marginBottom: '1rem',
                  letterSpacing: '-0.01em',
                }}
              >
                {FEATURED_POST.title}
              </h3>

              <p style={{ fontFamily: 'var(--font-inter)', fontSize: '0.9375rem', color: 'var(--text-muted)', lineHeight: 1.75, marginBottom: '1.5rem' }}>
                {FEATURED_POST.excerpt}
              </p>

              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem', flexWrap: 'wrap' }}>
                <span style={{ fontSize: '0.8125rem', fontFamily: 'var(--font-inter)', color: 'var(--text-muted)' }}>
                  By <strong style={{ color: 'var(--text-dark)' }}>{FEATURED_POST.author.name}</strong>
                </span>
                <span style={{ color: 'var(--border)' }}>·</span>
                <time dateTime={FEATURED_POST.datePublished} style={{ fontSize: '0.8125rem', fontFamily: 'var(--font-inter)', color: 'var(--text-muted)' }}>
                  {new Date(FEATURED_POST.datePublished).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })}
                </time>
              </div>

              <Link
                href={`/blog/${FEATURED_POST.slug}/`}
                className="btn-gold"
              >
                Read the full guide <ArrowRight size={15} aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Recent Articles ────────────────────────────────────────────────── */}
      <section aria-labelledby="recent-posts-heading" style={{ padding: '4.5rem 0', background: 'var(--surface)' }}>
        <div className="container mx-auto" style={{ maxWidth: '80rem', padding: '0 1.25rem' }}>
          <p className="section-label" style={{ marginBottom: '1rem' }}>Latest Articles</p>
          <h2
            id="recent-posts-heading"
            style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(1.5rem, 2.5vw, 2rem)', color: 'var(--text-dark)', marginBottom: '2.5rem' }}
          >
            Recent Guides
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
            {RECENT_POSTS.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}/`}
                className="card-lift group block rounded-xl overflow-hidden border"
                style={{ borderColor: 'var(--border)', background: '#FFFFFF', textDecoration: 'none' }}
              >
                {/* Thumbnail */}
                <div style={{ background: 'var(--charcoal-light)', position: 'relative', height: '160px' }}>
                  <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'linear-gradient(135deg, #0F0D0A 0%, rgba(42,34,21,0.85) 100%)' }}>
                    <span style={{ fontSize: '2rem' }} aria-hidden="true">{CATEGORY_ICONS[post.category] ?? '📖'}</span>
                  </div>
                  <div aria-hidden="true" style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '2px', background: 'linear-gradient(90deg, transparent, var(--gold), transparent)' }} />
                  <span style={{ position: 'absolute', top: '0.75rem', left: '0.75rem', padding: '0.2rem 0.6rem', borderRadius: '100px', background: 'rgba(201,168,76,0.15)', border: '1px solid rgba(201,168,76,0.3)', fontSize: '0.65rem', fontFamily: 'var(--font-inter)', fontWeight: 600, color: 'var(--gold-bright)', letterSpacing: '0.05em' }}>
                    {post.categoryLabel}
                  </span>
                </div>

                <div style={{ padding: '1.25rem 1.5rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.625rem', fontSize: '0.75rem', fontFamily: 'var(--font-inter)', color: 'var(--text-muted)' }}>
                    <time dateTime={post.datePublished}>{new Date(post.datePublished).toLocaleDateString('en-IN', { month: 'short', year: 'numeric' })}</time>
                    <span>·</span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.2rem' }}><Clock size={10} aria-hidden="true" /> {post.readTime}</span>
                  </div>

                  <h3 style={{ fontFamily: 'var(--font-playfair)', fontSize: '1rem', fontWeight: 700, color: 'var(--text-dark)', lineHeight: 1.3, marginBottom: '0.625rem' }}>
                    {post.title}
                  </h3>

                  <p style={{ fontFamily: 'var(--font-inter)', fontSize: '0.8125rem', color: 'var(--text-muted)', lineHeight: 1.65, WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', display: '-webkit-box', overflow: 'hidden' } as React.CSSProperties}>
                    {post.excerpt}
                  </p>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', marginTop: '0.875rem', color: 'var(--gold)', fontSize: '0.8125rem', fontFamily: 'var(--font-inter)', fontWeight: 600 }}>
                    Read guide <ArrowRight size={12} className="transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
