/**
 * HomepageQuickLinks — "On This Page" anchor navigation
 *
 * SEO RULES ENFORCED:
 * 1. Pure server component — NO 'use client'. All links are in initial HTML for Googlebot.
 * 2. <nav aria-label="On this page"> — distinct landmark Google maps to Jump Links
 * 3. "On This Page" label uses <p>, NOT <h2>, so heading outline is unbroken
 * 4. Every label text matches the actual H2 of the target section
 * 5. <ol> because order mirrors document order — semantically correct for a TOC
 * 6. Layout is horizontal scroll — CSS only, HTML structure unchanged → SEO unaffected
 */

const LINKS: { href: string; label: string; sub: string }[] = [
  {
    href: '#commercial-kitchen-services',
    label: 'Our Services',
    sub: 'Supply · Design · Install · AMC',
  },
  {
    href: '#kitchen-equipment',
    label: 'Kitchen Equipment',
    sub: 'Cooking · Refrigeration · Bakery',
  },
  {
    href: '#industries-we-serve',
    label: 'Industries We Serve',
    sub: 'Hotels · Hospitals · Cloud Kitchens',
  },
  {
    href: '#featured-projects',
    label: 'Featured Projects',
    sub: 'Hyatt · Metro Hospital · Rebel Foods',
  },
  {
    href: '#our-process',
    label: 'Our Process',
    sub: 'Visit → Design → Supply → Install',
  },
  {
    href: '#stainless-steel-fabrication',
    label: 'SS Fabrication',
    sub: 'SS 304 · Worktables · Sinks · Hoods',
  },
  {
    href: '#international-brands',
    label: 'International Brands',
    sub: 'Rational · Robot Coupe · Frymaster',
  },
  {
    href: '#client-testimonials',
    label: 'Client Reviews',
    sub: '4.9 ★ · 312 verified reviews',
  },
  {
    href: '#faqs',
    label: 'FAQs',
    sub: '30 answers on pricing & process',
  },
  {
    href: '#cities-we-serve',
    label: 'Cities We Serve',
    sub: 'Delhi · Mumbai · Bangalore & more',
  },
  {
    href: '#blog-guides',
    label: 'Guides & Insights',
    sub: 'Hotel kitchens · Equipment guides',
  },
  {
    href: '#get-a-quote',
    label: 'Get a Free Quote',
    sub: 'Free site visit · 1-hour response',
  },
];

export default function HomepageQuickLinks() {
  return (
    <>
      <style>{`
        .ql-scroll-track {
          display: flex;
          flex-direction: row;
          flex-wrap: nowrap;
          overflow-x: auto;
          gap: 0.5rem;
          padding-bottom: 6px;
          list-style: none;
          margin: 0;
          padding-left: 0;
          padding-right: 0;
          /* smooth momentum scroll on iOS */
          -webkit-overflow-scrolling: touch;
          /* thin scrollbar */
          scrollbar-width: thin;
          scrollbar-color: var(--border) transparent;
        }
        .ql-scroll-track::-webkit-scrollbar {
          height: 4px;
        }
        .ql-scroll-track::-webkit-scrollbar-track {
          background: transparent;
        }
        .ql-scroll-track::-webkit-scrollbar-thumb {
          background: var(--border);
          border-radius: 2px;
        }
        .ql-card {
          flex: 0 0 auto;
          width: 158px;
          display: flex;
          flex-direction: column;
          gap: 0.2rem;
          padding: 0.625rem 0.75rem;
          border-radius: 8px;
          border: 1px solid var(--border);
          background: var(--cream, #fafaf8);
          text-decoration: none;
          transition: border-color 0.15s, background 0.15s;
          font-family: var(--font-inter);
        }
        .ql-card:hover {
          border-color: var(--gold);
          background: #fff;
        }
        .ql-card:focus-visible {
          outline: 2px solid var(--gold);
          outline-offset: 2px;
        }
        .ql-num {
          font-size: 0.5625rem;
          font-weight: 700;
          color: var(--gold);
          line-height: 1;
          letter-spacing: 0.04em;
        }
        .ql-title {
          font-size: 0.75rem;
          font-weight: 700;
          color: var(--text-dark);
          line-height: 1.3;
        }
        .ql-card:hover .ql-title {
          color: var(--gold);
        }
        .ql-desc {
          font-size: 0.625rem;
          color: var(--text-muted);
          line-height: 1.4;
        }
        /* on large screens show as a wrapping flex grid instead of horizontal scroll */
        @media (min-width: 1024px) {
          .ql-scroll-track {
            flex-wrap: wrap;
            overflow-x: visible;
            padding-bottom: 0;
          }
          .ql-card {
            width: 164px;
          }
        }
      `}</style>

      <nav
        aria-label="On this page"
        style={{
          background: 'var(--surface)',
          borderTop: '1px solid var(--border)',
          borderBottom: '1px solid var(--border)',
          padding: '1rem 0',
        }}
      >
        <div
          style={{
            maxWidth: '80rem',
            margin: '0 auto',
            padding: '0 1.25rem',
          }}
        >
          {/* Header row — <p> NOT <h2> so heading outline stays clean */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              marginBottom: '0.75rem',
            }}
          >
            <p
              style={{
                fontFamily: 'var(--font-inter)',
                fontSize: '0.625rem',
                fontWeight: 700,
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: 'var(--gold)',
                lineHeight: 1,
                margin: 0,
                whiteSpace: 'nowrap',
              }}
            >
              On This Page
            </p>
            <span
              aria-hidden="true"
              style={{
                height: '1px',
                flex: 1,
                background: 'var(--border)',
              }}
            />
            <p
              style={{
                fontFamily: 'var(--font-inter)',
                fontSize: '0.6875rem',
                color: 'var(--text-muted)',
                margin: 0,
                whiteSpace: 'nowrap',
              }}
            >
              Jump to any section →
            </p>
          </div>

          {/* Horizontal scroll on mobile/tablet, wrapping grid on desktop */}
          <ol className="ql-scroll-track">
            {LINKS.map(({ href, label, sub }, index) => (
              <li key={href} style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                <a href={href} className="ql-card">
                  <span className="ql-num" aria-hidden="true">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span className="ql-title">{label}</span>
                  <span className="ql-desc">{sub}</span>
                </a>
              </li>
            ))}
          </ol>
        </div>
      </nav>
    </>
  );
}
