import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowRight, Clock, ChevronRight, Home } from 'lucide-react';
import { BLOG_POSTS, CATEGORIES } from '@/lib/blog';

interface Props {
  params: Promise<{ category: string }>;
}

export async function generateStaticParams() {
  return Object.keys(CATEGORIES).map((category) => ({ category }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category } = await params;
  const cat = CATEGORIES[category];
  if (!cat) return {};

  const canonicalUrl = `https://vsdinternational.com/blog/${category}/`;
  return {
    title: `${cat.label} | VSD International`,
    description: `${cat.description} Real project figures and expert guidance from VSD International — 400+ kitchens installed across India.`,
    alternates: { canonical: canonicalUrl },
    openGraph: {
      url: canonicalUrl,
      title: `${cat.label} | VSD International`,
      description: cat.description,
      images: [{ url: 'https://vsdinternational.com/og-image.jpg', width: 1200, height: 630 }],
    },
    robots: { index: true, follow: true },
  };
}

const CATEGORY_ICONS: Record<string, string> = {
  'cloud-kitchen': '☁',
  'hotel-kitchen': '🏨',
  'hospital-kitchen': '🏥',
};

export default async function BlogCategoryPage({ params }: Props) {
  const { category } = await params;
  const cat = CATEGORIES[category];
  if (!cat) notFound();

  const posts = BLOG_POSTS.filter((p) => p.category === category);
  const canonicalUrl = `https://vsdinternational.com/blog/${category}/`;

  const schemaGraph = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'CollectionPage',
        '@id': `${canonicalUrl}#collectionpage`,
        name: cat.label,
        url: canonicalUrl,
        description: cat.description,
        publisher: { '@id': 'https://vsdinternational.com/#organization' },
        mainEntity: {
          '@type': 'ItemList',
          itemListElement: posts.map((post, i) => ({
            '@type': 'ListItem',
            position: i + 1,
            url: `https://vsdinternational.com/blog/${category}/${post.slug}/`,
            name: post.title,
          })),
        },
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://vsdinternational.com' },
          { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://vsdinternational.com/blog/' },
          { '@type': 'ListItem', position: 3, name: cat.label, item: canonicalUrl },
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaGraph) }}
      />

      {/* ── Breadcrumb ─────────────────────────────────────────────────────── */}
      <nav
        aria-label="Breadcrumb"
        style={{ background: 'var(--charcoal)', borderBottom: '1px solid rgba(201,168,76,0.12)', padding: '0.875rem 0' }}
      >
        <div className="container mx-auto flex items-center gap-1.5 flex-wrap" style={{ maxWidth: '80rem', padding: '0 1.25rem' }}>
          <Link href="/" className="flex items-center gap-1" style={{ color: 'rgba(245,240,232,0.45)', fontSize: '0.8125rem', fontFamily: 'var(--font-inter)' }} aria-label="Home">
            <Home size={12} aria-hidden="true" />
            <span>Home</span>
          </Link>
          <ChevronRight size={11} style={{ color: 'rgba(201,168,76,0.35)' }} aria-hidden="true" />
          <Link href="/blog/" style={{ color: 'rgba(245,240,232,0.45)', fontSize: '0.8125rem', fontFamily: 'var(--font-inter)' }}>Blog</Link>
          <ChevronRight size={11} style={{ color: 'rgba(201,168,76,0.35)' }} aria-hidden="true" />
          <span style={{ color: 'var(--gold)', fontSize: '0.8125rem', fontFamily: 'var(--font-inter)', fontWeight: 600 }} aria-current="page">{cat.label}</span>
        </div>
      </nav>

      {/* ── Category Header ────────────────────────────────────────────────── */}
      <header style={{ background: 'var(--charcoal-warm)', padding: '4rem 0 3.5rem', borderBottom: '1px solid rgba(201,168,76,0.12)', position: 'relative' }}>
        <div aria-hidden="true" style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '2px', background: 'linear-gradient(90deg, transparent 5%, var(--gold-bright) 35%, var(--gold) 65%, transparent 95%)' }} />
        <div className="container mx-auto" style={{ maxWidth: '80rem', padding: '0 1.25rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.25rem' }}>
            <span style={{ fontSize: '2.5rem' }} aria-hidden="true">{CATEGORY_ICONS[category] ?? '📖'}</span>
            <p className="section-label">Topic Cluster</p>
          </div>
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
            {cat.label}
          </h1>
          <div className="gold-rule" style={{ marginBottom: '1.5rem' }} />

          {/* 200-300 word unique intro that can rank for the category term */}
          <div
            style={{
              fontFamily: 'var(--font-inter)',
              fontSize: '1rem',
              color: 'var(--text-dim)',
              lineHeight: 1.8,
              maxWidth: '52rem',
            }}
          >
            <p>{cat.intro}</p>
          </div>

          {/* Prominent link to money/pillar page — as required by SOP */}
          <div style={{ marginTop: '2rem' }}>
            <Link
              href={cat.pillarPage}
              className="btn-gold"
              aria-label={`Go to ${cat.pillarLabel}`}
            >
              {cat.pillarLabel} <ArrowRight size={15} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </header>

      {/* ── Post List ──────────────────────────────────────────────────────── */}
      <section
        aria-label={`Articles in ${cat.label}`}
        style={{ padding: '4rem 0', background: 'var(--surface)' }}
      >
        <div className="container mx-auto" style={{ maxWidth: '80rem', padding: '0 1.25rem' }}>
          <p style={{ fontFamily: 'var(--font-inter)', fontSize: '0.8125rem', color: 'var(--text-muted)', marginBottom: '2rem' }}>
            {posts.length} guide{posts.length !== 1 ? 's' : ''} in this cluster
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${category}/${post.slug}/`}
                className="card-lift group flex flex-col rounded-xl overflow-hidden border"
                style={{ borderColor: 'var(--border)', background: '#FFFFFF', textDecoration: 'none' }}
              >
                {/* Thumbnail */}
                <div style={{ background: 'var(--charcoal-light)', position: 'relative', height: '160px', flexShrink: 0 }}>
                  <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'linear-gradient(135deg, #0F0D0A 0%, rgba(42,34,21,0.85) 100%)' }}>
                    <span style={{ fontSize: '2.5rem' }} aria-hidden="true">{CATEGORY_ICONS[category] ?? '📖'}</span>
                  </div>
                  <div aria-hidden="true" style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '2px', background: 'linear-gradient(90deg, transparent, var(--gold), transparent)' }} />
                </div>

                <div style={{ padding: '1.25rem 1.5rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
                  {/* Meta */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.625rem', fontSize: '0.75rem', fontFamily: 'var(--font-inter)', color: 'var(--text-muted)' }}>
                    <time dateTime={post.datePublished}>
                      {new Date(post.datePublished).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}
                    </time>
                    <span>·</span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                      <Clock size={10} aria-hidden="true" /> {post.readTime}
                    </span>
                  </div>

                  {/* Title */}
                  <h2
                    style={{
                      fontFamily: 'var(--font-playfair)',
                      fontSize: '1.0625rem',
                      fontWeight: 700,
                      color: 'var(--text-dark)',
                      lineHeight: 1.3,
                      marginBottom: '0.625rem',
                      flex: 1,
                    }}
                  >
                    {post.title}
                  </h2>

                  {/* Excerpt */}
                  <p
                    style={{
                      fontFamily: 'var(--font-inter)',
                      fontSize: '0.875rem',
                      color: 'var(--text-muted)',
                      lineHeight: 1.65,
                      WebkitLineClamp: 3,
                      WebkitBoxOrient: 'vertical',
                      display: '-webkit-box',
                      overflow: 'hidden',
                      marginBottom: '1rem',
                    } as React.CSSProperties}
                  >
                    {post.excerpt}
                  </p>

                  {/* Author + read more */}
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 'auto' }}>
                    <span style={{ fontSize: '0.75rem', fontFamily: 'var(--font-inter)', color: 'var(--text-muted)' }}>
                      {post.author.name}
                    </span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', color: 'var(--gold)', fontSize: '0.8125rem', fontFamily: 'var(--font-inter)', fontWeight: 600 }}>
                      Read <ArrowRight size={12} className="transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Pillar CTA ─────────────────────────────────────────────────────── */}
      <section
        aria-label="Service page"
        style={{ background: 'var(--charcoal-warm)', borderTop: '1px solid rgba(201,168,76,0.12)', padding: '3.5rem 0' }}
      >
        <div className="container mx-auto text-center" style={{ maxWidth: '48rem', padding: '0 1.25rem' }}>
          <p className="section-label" style={{ marginBottom: '0.875rem' }}>Ready to Install?</p>
          <h2 style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', color: 'var(--text-on-dark)', marginBottom: '1rem' }}>
            From Guide to Installed Kitchen
          </h2>
          <p style={{ fontFamily: 'var(--font-inter)', fontSize: '1rem', color: 'var(--text-dim)', lineHeight: 1.75, marginBottom: '2rem' }}>
            These guides answer your questions. VSD International delivers the kitchen. 400+ projects across India — supply, design, install, and AMC.
          </p>
          <Link href={cat.pillarPage} className="btn-gold">
            {cat.pillarLabel} <ArrowRight size={15} aria-hidden="true" />
          </Link>
        </div>
      </section>
    </>
  );
}
