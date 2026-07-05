import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Calendar, ChevronRight, Home, User } from 'lucide-react';
import { getPublishedBlogDoc, buildBlogJsonLd } from '@/lib/blogPresenter';

/** Generic, CMS-driven renderer for any blog post created in /admin/blogs. */
export default async function DynamicBlogPost({ slug }: { slug: string }) {
  const doc = await getPublishedBlogDoc(slug);
  if (!doc) notFound();

  const schemaGraph = buildBlogJsonLd(doc);
  const publishedDate = doc.publishedAt ? new Date(doc.publishedAt) : new Date(doc.createdAt);
  const childImages = doc.childImages.filter(Boolean);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaGraph) }}
      />

      {/* Breadcrumb */}
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
          <Link href="/blog" style={{ color: 'rgba(245,240,232,0.45)', fontSize: '0.8125rem', fontFamily: 'var(--font-inter)' }}>Blog</Link>
          <ChevronRight size={11} style={{ color: 'rgba(201,168,76,0.35)' }} aria-hidden="true" />
          <span
            style={{ color: 'var(--gold)', fontSize: '0.8125rem', fontFamily: 'var(--font-inter)', fontWeight: 600, maxWidth: '280px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}
            aria-current="page"
            title={doc.title}
          >
            {doc.title}
          </span>
        </div>
      </nav>

      <div style={{ background: '#FFFFFF' }}>
        <div className="container mx-auto" style={{ maxWidth: '80rem', padding: '0 1.25rem' }}>
          <article itemScope itemType="https://schema.org/BlogPosting" style={{ maxWidth: '780px', margin: '0 auto', width: '100%', padding: '3.5rem 0 4rem' }}>

            <header style={{ marginBottom: '2.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem', flexWrap: 'wrap' }}>
                <span style={{ padding: '0.25rem 0.875rem', borderRadius: '100px', background: 'rgba(201,168,76,0.1)', border: '1px solid rgba(201,168,76,0.25)', fontSize: '0.6875rem', fontFamily: 'var(--font-inter)', fontWeight: 700, color: 'var(--gold-deep)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                  {doc.category}
                </span>
              </div>

              <h1
                itemProp="headline"
                style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(1.75rem, 4vw, 2.625rem)', fontWeight: 800, color: 'var(--text-dark)', lineHeight: 1.15, letterSpacing: '-0.02em', marginBottom: '1.5rem' }}
              >
                {doc.title}
              </h1>

              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap', paddingBottom: '1.5rem', borderBottom: '1px solid var(--border)' }}>
                <div style={{ width: '44px', height: '44px', borderRadius: '50%', background: 'linear-gradient(135deg, var(--gold-light), var(--gold-deep))', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }} aria-hidden="true">
                  <User size={20} style={{ color: '#1A1508' }} />
                </div>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
                    <span itemProp="author" itemScope itemType="https://schema.org/Person" style={{ fontFamily: 'var(--font-inter)', fontWeight: 700, fontSize: '0.9375rem', color: 'var(--text-dark)' }}>
                      <span itemProp="name">{doc.author}</span>
                    </span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginTop: '0.3rem', flexWrap: 'wrap' }}>
                    <time
                      dateTime={publishedDate.toISOString()}
                      itemProp="datePublished"
                      style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', fontSize: '0.8125rem', fontFamily: 'var(--font-inter)', color: 'var(--text-muted)' }}
                    >
                      <Calendar size={12} aria-hidden="true" />
                      {publishedDate.toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })}
                    </time>
                  </div>
                </div>
              </div>
            </header>

            {doc.mainImage && (
              <figure itemProp="image" itemScope itemType="https://schema.org/ImageObject" style={{ marginBottom: '2.5rem', borderRadius: '12px', overflow: 'hidden', position: 'relative', minHeight: 360 }}>
                <Image src={doc.mainImage} alt={doc.title} width={1200} height={630} style={{ width: '100%', height: 'auto', display: 'block' }} priority />
              </figure>
            )}

            {/* Excerpt — answer-first summary */}
            <p style={{ fontFamily: 'var(--font-inter)', fontSize: '1.0625rem', lineHeight: 1.65, color: 'var(--text-dark)', fontWeight: 500, marginBottom: '2rem' }}>
              {doc.excerpt}
            </p>

            {/* Rich content body — authored via the admin editor */}
            <div
              itemProp="articleBody"
              className="blog-rich-content"
              style={{ fontFamily: 'var(--font-inter)', fontSize: '1rem', lineHeight: 1.75, color: 'var(--text-dark)' }}
              dangerouslySetInnerHTML={{ __html: doc.content }}
            />

            {childImages.length > 0 && (
              <div style={{ display: 'grid', gridTemplateColumns: childImages.length > 1 ? 'repeat(2, 1fr)' : '1fr', gap: '1rem', marginTop: '2.5rem' }}>
                {childImages.map((img, i) => (
                  <div key={i} style={{ position: 'relative', borderRadius: 10, overflow: 'hidden', aspectRatio: '4 / 3' }}>
                    <Image src={img} alt={`${doc.title} — image ${i + 1}`} fill style={{ objectFit: 'cover' }} />
                  </div>
                ))}
              </div>
            )}
          </article>
        </div>
      </div>

      <style>{`
        .blog-rich-content h2 { font-family: var(--font-playfair); font-size: 1.5rem; font-weight: 700; color: var(--text-dark); margin: 2rem 0 1rem; }
        .blog-rich-content h3 { font-family: var(--font-playfair); font-size: 1.25rem; font-weight: 700; color: var(--text-dark); margin: 1.75rem 0 0.875rem; }
        .blog-rich-content p { margin: 0 0 1.25rem; }
        .blog-rich-content ul, .blog-rich-content ol { margin: 0 0 1.25rem; padding-left: 1.5rem; }
        .blog-rich-content li { margin-bottom: 0.5rem; }
        .blog-rich-content a { color: var(--gold-deep); text-decoration: underline; }
        .blog-rich-content blockquote { border-left: 3px solid var(--gold); padding-left: 1rem; margin: 1.5rem 0; color: var(--text-muted); font-style: italic; }
        .blog-rich-content img { max-width: 100%; border-radius: 8px; margin: 1.5rem 0; }
      `}</style>
    </>
  );
}
