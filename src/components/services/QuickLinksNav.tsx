/**
 * QuickLinksNav — "On This Page" anchor navigation for service pillar pages
 *
 * Same pattern as HomepageQuickLinks, generalised for /services/* pages so
 * each one can register its own jump-link targets.
 *
 * SEO RULES ENFORCED:
 * 1. Pure server component — NO 'use client'. All links are in initial HTML for Googlebot.
 * 2. <nav aria-label="On this page"> — distinct landmark Google maps to Jump Links
 * 3. "On This Page" label uses <p>, NOT <h2>, so heading outline is unbroken
 * 4. Every label text matches the actual H2/section heading of the target section
 * 5. <ol> because order mirrors document order — semantically correct for a TOC
 * 6. Layout is horizontal scroll — CSS only, HTML structure unchanged → SEO unaffected
 * 7. Placed right after the hero, before any other content — same position Google
 *    has already been seen to recognise on the homepage equivalent.
 */

export interface QuickLink {
  href: string;
  label: string;
  sub: string;
}

export default function QuickLinksNav({ links }: { links: QuickLink[] }) {
  return (
    <>
      <style>{`
        .ql-scroll-track {
          display: flex;
          flex-direction: row;
          flex-wrap: nowrap;
          align-items: stretch;
          overflow-x: auto;
          gap: 0.5rem;
          padding-bottom: 6px;
          list-style: none;
          margin: 0;
          padding-left: 0;
          padding-right: 0;
          -webkit-overflow-scrolling: touch;
          scrollbar-width: none;
          -ms-overflow-style: none;
        }
        .ql-scroll-track::-webkit-scrollbar {
          display: none;
        }
        .ql-scroll-track > li {
          flex: 0 0 auto;
          display: flex;
        }
        .ql-card {
          flex: 0 0 auto;
          width: 168px;
          min-width: 168px;
          max-width: 168px;
          height: 100%;
          box-sizing: border-box;
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

          {/* Horizontal scroll at every breakpoint, including laptop/desktop */}
          <ol className="ql-scroll-track">
            {links.map(({ href, label, sub }, index) => (
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
