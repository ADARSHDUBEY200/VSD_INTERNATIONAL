import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Calendar, ChevronRight, Home, User, ArrowUpRight } from 'lucide-react';
import { getPublishedBlogDoc, buildBlogJsonLd } from '@/lib/blogPresenter';

/** Generic, CMS-driven renderer for any blog post created in /admin/blogs. */
export default async function DynamicBlogPost({ slug }: { slug: string }) {
  const doc = await getPublishedBlogDoc(slug);
  if (!doc) notFound();

  const schemaGraph = buildBlogJsonLd(doc);
  const publishedDate = doc.publishedAt ? new Date(doc.publishedAt) : new Date(doc.createdAt);
  const mainImageAlt = doc.mainImageAlt || doc.title;
  const quickAnswer = doc.quickAnswer?.trim();
  const keyTakeaways = (doc.keyTakeaways ?? []).map((t) => t?.trim()).filter(Boolean);
  const faqs = (doc.faqs ?? []).filter((f) => f.question?.trim() && f.answer?.trim());
  const recommendations = (doc.recommendations ?? []).filter((r) => r.title?.trim() && r.url?.trim());

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
                <Image src={doc.mainImage} alt={mainImageAlt} width={1200} height={630} style={{ width: '100%', height: 'auto', display: 'block' }} priority />
              </figure>
            )}

            {/* Quick Answer — answer-first summary (replaces Key Takeaways) */}
            {quickAnswer && (
              <section
                aria-labelledby="quick-answer-heading"
                style={{
                  background: 'var(--surface)',
                  border: '1px solid var(--border)',
                  borderLeft: '3px solid var(--gold)',
                  borderRadius: '8px',
                  padding: '1.5rem 1.75rem',
                  marginBottom: '2.5rem',
                }}
              >
                <h2
                  id="quick-answer-heading"
                  style={{ fontFamily: 'var(--font-inter)', fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '0.75rem' }}
                >
                  Quick Answer
                </h2>
                {quickAnswer.split(/\n+/).filter(Boolean).map((para, i) => (
                  <p key={i} style={{ fontFamily: 'var(--font-inter)', fontSize: '1rem', color: 'var(--text-body)', lineHeight: 1.7, margin: i === 0 ? 0 : '0.75rem 0 0' }}>
                    {para}
                  </p>
                ))}
              </section>
            )}

            {/* Key Takeaways — dynamic bulleted highlights */}
            {keyTakeaways.length > 0 && (
              <section
                aria-labelledby="key-takeaways-heading"
                style={{
                  background: 'var(--surface-alt)',
                  border: '1px solid var(--border)',
                  borderRadius: '8px',
                  padding: '1.5rem 1.75rem',
                  marginBottom: '2.5rem',
                }}
              >
                <h2
                  id="key-takeaways-heading"
                  style={{ fontFamily: 'var(--font-inter)', fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '1rem' }}
                >
                  Key Takeaways
                </h2>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  {keyTakeaways.map((point, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                      <span
                        aria-hidden="true"
                        style={{ width: '20px', height: '20px', borderRadius: '50%', background: 'rgba(201,168,76,0.15)', border: '1px solid rgba(201,168,76,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '2px', fontSize: '0.65rem', fontWeight: 700, color: 'var(--gold-deep)' }}
                      >
                        {i + 1}
                      </span>
                      <p style={{ fontFamily: 'var(--font-inter)', fontSize: '0.9375rem', color: 'var(--text-body)', lineHeight: 1.65, margin: 0 }}>{point}</p>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {/* Excerpt — lead-in */}
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

            {/* Our Recommendations — product cards immediately after the content */}
            {recommendations.length > 0 && (
              <section aria-labelledby="recommendations-heading" style={{ marginTop: '3rem' }}>
                <h2
                  id="recommendations-heading"
                  style={{ fontFamily: 'var(--font-playfair)', fontSize: '1.5rem', fontWeight: 700, color: 'var(--text-dark)', marginBottom: '0.375rem' }}
                >
                  Our Recommendations
                </h2>
                <p style={{ fontFamily: 'var(--font-inter)', fontSize: '0.875rem', color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
                  Equipment and products we recommend for this setup.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {recommendations.map((rec, i) => (
                    <a
                      key={i}
                      href={rec.url}
                      target="_blank"
                      rel="noopener noreferrer sponsored"
                      className="card-lift group"
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '1rem',
                        padding: '0.75rem',
                        border: '1px solid var(--border)',
                        borderRadius: '12px',
                        background: '#FFFFFF',
                        textDecoration: 'none',
                      }}
                    >
                      <div style={{ position: 'relative', width: '84px', height: '84px', flexShrink: 0, borderRadius: '8px', overflow: 'hidden', background: 'var(--surface)' }}>
                        {rec.image ? (
                          <Image src={rec.image} alt={rec.title} fill style={{ objectFit: 'cover' }} sizes="84px" />
                        ) : (
                          <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-muted)', fontSize: '1.5rem' }} aria-hidden="true">🛒</div>
                        )}
                      </div>
                      <div style={{ flex: 1, minWidth: 0 }}>
                        <p style={{ fontFamily: 'var(--font-inter)', fontSize: '0.9375rem', fontWeight: 700, color: 'var(--text-dark)', lineHeight: 1.35, margin: 0 }}>
                          {rec.title}
                        </p>
                        <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.2rem', marginTop: '0.5rem', color: 'var(--gold-deep)', fontSize: '0.8125rem', fontFamily: 'var(--font-inter)', fontWeight: 600 }}>
                          View product <ArrowUpRight size={13} className="transition-transform duration-200 group-hover:translate-x-0.5" aria-hidden="true" />
                        </span>
                      </div>
                    </a>
                  ))}
                </div>
              </section>
            )}

            {/* FAQs — dynamic, emitted as FAQPage JSON-LD above */}
            {faqs.length > 0 && (
              <section aria-labelledby="faq-heading" style={{ marginTop: '3rem' }}>
                <h2
                  id="faq-heading"
                  style={{ fontFamily: 'var(--font-playfair)', fontSize: '1.5rem', fontWeight: 700, color: 'var(--text-dark)', marginBottom: '1.5rem' }}
                >
                  Frequently Asked Questions
                </h2>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  {faqs.map((faq, i) => (
                    <div key={i} style={{ borderBottom: '1px solid var(--border)', padding: '1.5rem 0' }}>
                      <h3 style={{ fontFamily: 'var(--font-inter)', fontSize: '1rem', fontWeight: 700, color: 'var(--text-dark)', lineHeight: 1.4, marginBottom: '0.75rem' }}>
                        {faq.question}
                      </h3>
                      <p style={{ fontFamily: 'var(--font-inter)', fontSize: '0.9375rem', color: 'var(--text-body)', lineHeight: 1.75, margin: 0, whiteSpace: 'pre-line' }}>
                        {faq.answer}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
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
        .blog-rich-content h1 { font-family: var(--font-playfair); font-size: 1.75rem; font-weight: 800; color: var(--text-dark); margin: 2rem 0 1rem; }
        .blog-rich-content h4, .blog-rich-content h5, .blog-rich-content h6 { font-family: var(--font-playfair); font-weight: 700; color: var(--text-dark); margin: 1.5rem 0 0.75rem; }
        .blog-rich-content u { text-decoration: underline; }
        .blog-rich-content table { border-collapse: collapse; width: 100%; margin: 1.5rem 0; font-size: 0.9375rem; display: block; overflow-x: auto; }
        .blog-rich-content th, .blog-rich-content td { border: 1px solid var(--border); padding: 0.625rem 0.875rem; text-align: left; vertical-align: top; }
        .blog-rich-content th { background: var(--surface); font-weight: 700; }
      `}</style>
    </>
  );
}
