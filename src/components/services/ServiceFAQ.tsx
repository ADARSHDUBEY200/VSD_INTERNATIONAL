'use client';

import { Fragment, useState } from 'react';
import { Plus, Minus } from 'lucide-react';

export interface FAQ { q: string; a: string; category?: string }

/** FAQ Accordion — used on all service pages.
 *  Client component for open/close interactivity.
 *  Schema markup is added in the parent page's JSON-LD. */
export default function ServiceFAQ({
  faqs,
  heading = 'Frequently Asked Questions',
  dark = false,
}: {
  faqs: FAQ[];
  heading?: string;
  dark?: boolean;
}) {
  const [open, setOpen] = useState<number | null>(0);

  const bg   = dark ? 'var(--charcoal-light)'  : '#FFFFFF';
  const hTxt = dark ? 'var(--text-on-dark)'     : 'var(--text-dark)';
  const bTxt = dark ? 'rgba(245,240,232,0.65)'  : 'var(--text-body)';
  const bdr  = dark ? 'rgba(201,168,76,0.15)'   : 'var(--border)';

  return (
    <section
      id="faqs"
      aria-labelledby="faq-heading"
      style={{ background: bg, padding: '5.5rem 0', borderTop: `1px solid ${bdr}` }}
    >
      <div className="container mx-auto" style={{ maxWidth: '80rem', padding: '0 1.25rem' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <p className="section-label" style={{ marginBottom: '0.75rem' }}>Got Questions?</p>
          <h2
            id="faq-heading"
            style={{
              fontFamily: 'var(--font-playfair)',
              fontSize: 'clamp(1.625rem, 2.8vw, 2.25rem)',
              color: hTxt,
              lineHeight: 1.15,
            }}
          >
            {heading}
          </h2>
          <div
            aria-hidden="true"
            style={{
              width: 56, height: 3,
              background: 'linear-gradient(90deg, var(--gold-bright), var(--gold), var(--gold-deep))',
              borderRadius: 2, margin: '1.125rem auto 0',
            }}
          />
        </div>

        {/* Accordion */}
        <div
          style={{ maxWidth: '860px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}
        >
          {faqs.map((faq, i) => {
            const isOpen = open === i;
            const showCategory = !!faq.category && faq.category !== faqs[i - 1]?.category;
            return (
              <Fragment key={i}>
              {showCategory && (
                <p
                  style={{
                    fontFamily: 'var(--font-inter)',
                    fontSize: '0.6875rem',
                    fontWeight: 700,
                    letterSpacing: '0.14em',
                    textTransform: 'uppercase',
                    color: 'var(--gold)',
                    margin: i === 0 ? '0 0 0.25rem' : '1.5rem 0 0.25rem',
                  }}
                >
                  {faq.category}
                </p>
              )}
              <div
                style={{
                  border: `1px solid ${isOpen ? 'rgba(201,168,76,0.4)' : bdr}`,
                  borderRadius: '8px',
                  overflow: 'hidden',
                  background: dark
                    ? (isOpen ? 'rgba(201,168,76,0.06)' : 'rgba(255,255,255,0.025)')
                    : (isOpen ? 'rgba(201,168,76,0.04)' : 'var(--surface)'),
                  transition: 'border-color 0.2s, background 0.2s',
                }}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 text-left"
                  style={{ padding: '1.25rem 1.5rem', background: 'transparent', border: 'none', cursor: 'pointer' }}
                  aria-expanded={isOpen}
                >
                  <span
                    style={{
                      fontFamily: 'var(--font-inter)',
                      fontWeight: 600,
                      fontSize: '0.9375rem',
                      color: isOpen ? 'var(--gold)' : hTxt,
                      lineHeight: 1.4,
                      transition: 'color 0.2s',
                    }}
                  >
                    {faq.q}
                  </span>
                  <span
                    style={{
                      flexShrink: 0,
                      width: 28, height: 28,
                      borderRadius: '50%',
                      border: `1px solid ${isOpen ? 'var(--gold)' : bdr}`,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      color: isOpen ? 'var(--gold)' : bTxt,
                      transition: 'all 0.2s',
                    }}
                    aria-hidden="true"
                  >
                    {isOpen ? <Minus size={13} /> : <Plus size={13} />}
                  </span>
                </button>

                {isOpen && (
                  <div style={{ padding: '0 1.5rem 1.375rem' }}>
                    <p
                      style={{
                        fontFamily: 'var(--font-inter)',
                        fontSize: '0.9375rem',
                        color: bTxt,
                        lineHeight: 1.78,
                      }}
                    >
                      {faq.a}
                    </p>
                  </div>
                )}
              </div>
              </Fragment>
            );
          })}
        </div>

        {/* Post-FAQ WhatsApp CTA */}
        <p
          style={{
            textAlign: 'center',
            marginTop: '2.5rem',
            fontFamily: 'var(--font-inter)',
            fontSize: '0.9375rem',
            color: bTxt,
          }}
        >
          Still have questions? Our kitchen specialists respond within 4 hours.{' '}
          <a
            href="https://wa.me/919250346370?text=Hi%20VSD%20International%2C%20I%20have%20a%20question%20about%20your%20services."
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: 'var(--gold)', fontWeight: 700, textDecoration: 'none' }}
          >
            WhatsApp Us Now →
          </a>
        </p>
      </div>
    </section>
  );
}
