// Pure Server Component — no 'use client', no JS.
// Native <details>/<summary> → all text indexed by Googlebot at full weight.

import { ChevronDown } from 'lucide-react';
import OpenEnquiryBtn from './OpenEnquiryBtn';

const subsections = [
  {
    num: '01',
    title: 'What we manufacture in our own Delhi facilities',
    body: 'Anything that should be built around your kitchen — rather than forced to fit it — we fabricate ourselves in SS 304 stainless steel: cooking ranges, work tables, sinks, exhaust hoods, bain maries, storage racks, and India-specific equipment like tandoors, bulk rice cookers, dosa plates and chapati machines. Making these in-house means they match your available space and workflow precisely, ship faster, and cost less than imported equivalents — the same custom fabrication behind our four-zone kitchen at Hyatt Regency Delhi.',
  },
  {
    num: '02',
    title: 'What we import as authorised dealers',
    body: "For equipment where precision engineering genuinely changes the result, we supply the best brands in the world as an authorised dealer — Rational combi ovens, Robot Coupe food processors, Frymaster fryers, Scotsman ice machines and more. You get genuine units with full manufacturer warranty, plus what most importers can't offer: installation, spare parts and service from our own engineers based in Delhi NCR.",
  },
  {
    num: '03',
    title: 'Why one partner for both matters',
    body: "When the same team designs your layout, fabricates the custom steel, and supplies the imported machines, nothing falls between two vendors. We can tell you honestly where custom-made saves money and where an imported brand is worth the investment — then deliver, install and maintain the whole kitchen end to end. That's the difference between a supplier who ships boxes and a manufacturer who builds kitchens.",
  },
];

export default function MadeInHouseSection() {
  return (
    <section
      aria-labelledby="made-in-house-heading"
      style={{
        padding: '2.75rem 0',
        background: '#FFFFFF',
        borderTop: '1px solid var(--border)',
      }}
    >
      <style>{`
        .mih-summary {
          list-style: none;
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          cursor: pointer;
          border: 1px solid rgba(201,168,76,0.35);
          border-radius: 100px;
          padding: 0.45rem 1.1rem 0.45rem 1.25rem;
          transition: background 0.2s, border-color 0.2s;
        }
        .mih-summary:hover {
          background: rgba(201,168,76,0.06);
          border-color: rgba(201,168,76,0.65);
        }
        .mih-summary::-webkit-details-marker { display: none; }
        .mih-summary::marker { display: none; }

        .mih-label::before { content: 'Read More'; }
        details[open] .mih-label::before { content: 'Read Less'; }

        .mih-chevron { transition: transform 0.35s ease; }
        details[open] .mih-chevron { transform: rotate(180deg); }

        @keyframes mih-reveal {
          from { opacity: 0; transform: translateY(-6px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        details[open] .mih-body {
          animation: mih-reveal 0.38s ease forwards;
        }
      `}</style>

      <div className="container mx-auto">

        {/* ── Header ── */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            marginBottom: '1.375rem',
          }}
        >
          <p className="section-label" style={{ marginBottom: '0.625rem' }}>
            Manufactured &amp; Imported
          </p>

          <h2
            id="made-in-house-heading"
            style={{
              fontFamily: 'var(--font-playfair)',
              fontSize: 'clamp(1.5rem, 2.6vw, 2.375rem)',
              color: 'var(--text-primary)',
              lineHeight: 1.2,
              letterSpacing: '-0.02em',
              maxWidth: '680px',
            }}
          >
            Made In-House or Imported?{' '}
            <span style={{ color: 'var(--gold-deep)' }}>
              We Help You Choose the Right Mix
            </span>
          </h2>

          <div
            aria-hidden="true"
            style={{
              width: '52px',
              height: '3px',
              background: 'linear-gradient(90deg, var(--gold-bright), var(--gold), var(--gold-deep))',
              borderRadius: '2px',
              marginTop: '1rem',
            }}
          />
        </div>

        {/* ── Intro + toggle ── */}
        <div style={{ maxWidth: '680px', margin: '0 auto', textAlign: 'center' }}>
          <p
            style={{
              color: 'var(--text-secondary)',
              fontSize: '1rem',
              lineHeight: 1.85,
              marginBottom: '1.5rem',
            }}
          >
            Every commercial kitchen runs on two kinds of equipment: machines built to fit your exact
            space, and specialist units best sourced from the world&apos;s leading brands. Because VSD
            International both manufactures and imports, we help you choose the right balance for your
            kitchen and your budget — not just sell you whatever happens to be in stock.
          </p>

          {/* Native <details> — Googlebot sees all content at full weight */}
          <details>
            <summary className="mih-summary">
              <span
                className="mih-label"
                style={{
                  fontFamily: 'var(--font-inter)',
                  fontSize: '0.875rem',
                  fontWeight: 700,
                  color: 'var(--gold-deep)',
                  letterSpacing: '0.02em',
                }}
              />
              <ChevronDown
                size={14}
                className="mih-chevron"
                aria-hidden="true"
                style={{ color: 'var(--gold)', flexShrink: 0 }}
              />
            </summary>

            {/* ── Editorial text layout ── */}
            <div className="mih-body" style={{ paddingTop: '2rem', textAlign: 'left' }}>
              {subsections.map((s, i) => (
                <div key={s.num}>
                  {/* Divider between items */}
                  {i > 0 && (
                    <div
                      aria-hidden="true"
                      style={{
                        height: '1px',
                        background: 'var(--border)',
                        margin: '1.5rem 0',
                      }}
                    />
                  )}

                  {/* Number tag */}
                  <span
                    style={{
                      display: 'inline-block',
                      fontFamily: 'var(--font-inter)',
                      fontSize: '0.6875rem',
                      fontWeight: 700,
                      color: 'var(--gold)',
                      letterSpacing: '0.15em',
                      marginBottom: '0.375rem',
                    }}
                  >
                    {s.num}
                  </span>

                  {/* Heading */}
                  <h3
                    style={{
                      fontFamily: 'var(--font-playfair)',
                      fontSize: 'clamp(1rem, 1.6vw, 1.125rem)',
                      fontWeight: 700,
                      color: 'var(--text-primary)',
                      lineHeight: 1.35,
                      marginBottom: '0.5rem',
                    }}
                  >
                    {s.title}
                  </h3>

                  {/* Body */}
                  <p
                    style={{
                      fontFamily: 'var(--font-inter)',
                      fontSize: '0.9375rem',
                      color: 'var(--text-secondary)',
                      lineHeight: 1.8,
                      margin: 0,
                    }}
                  >
                    {s.body}
                  </p>
                </div>
              ))}
            </div>
          </details>
        </div>

        <div style={{ textAlign: 'center', marginTop: '2rem' }}>
          <OpenEnquiryBtn
            label="Get a Free Kitchen Quote"
            ariaLabel="Get a free commercial kitchen equipment quote"
          />
        </div>

      </div>
    </section>
  );
}
