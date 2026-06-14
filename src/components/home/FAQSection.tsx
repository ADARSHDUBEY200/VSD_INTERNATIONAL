'use client';

import { useState } from 'react';
import { ChevronDown, Phone, MessageCircle } from 'lucide-react';
import { faqGroups } from '@/data/faqs';

const groupColors: Record<string, string> = {
  'Pricing & Budget': '#C8A96B',
  'Process, Timeline & Installation': '#A0885A',
  'Equipment & Scope': '#B09060',
  'Industry-Specific': '#C8A96B',
  'Compliance & Technical': '#A0885A',
  'Brands & Imports': '#C8A96B',
  'Trust, Manufacturing & Location': '#A0885A',
  'Service & Getting Started': '#C8A96B',
};

export default function FAQSection() {
  const [open, setOpen] = useState<string | null>(null);

  const toggle = (key: string) => setOpen((prev) => (prev === key ? null : key));

  let globalIndex = 0;

  return (
    <section
      id="faqs"
      aria-labelledby="faq-heading"
      style={{
        padding: '6rem 0',
        background: 'var(--surface-alt)',
        borderTop: '1px solid var(--border)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Subtle warm glow */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: 0,
          left: '50%',
          transform: 'translateX(-50%)',
          width: '50rem',
          height: '18rem',
          background: 'radial-gradient(ellipse at top, rgba(200,169,107,0.08) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <div style={{ maxWidth: '64rem', margin: '0 auto', padding: '0 1.5rem', width: '100%', position: 'relative' }}>

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <p className="section-label" style={{ marginBottom: '1rem' }}>FAQ</p>
          <h2
            id="faq-heading"
            style={{
              fontFamily: 'var(--font-playfair)',
              fontSize: 'clamp(2rem, 3.5vw, 2.75rem)',
              color: 'var(--text-dark)',
              fontWeight: 700,
              letterSpacing: '-0.02em',
              lineHeight: 1.15,
              marginBottom: '1.25rem',
            }}
          >
            Frequently <span className="accent-gold">Asked</span> Questions
          </h2>
          <div className="gold-divider" style={{ marginBottom: '1.5rem' }} />
          <p
            style={{
              color: 'var(--text-muted)',
              fontSize: '1.0625rem',
              lineHeight: 1.8,
              maxWidth: '42rem',
              margin: '0 auto',
            }}
          >
            30 questions answered — from pricing and timelines to NABH compliance, stainless steel grades, and how to get started.
          </p>
        </div>

        {/* Groups */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
          {faqGroups.map((group) => (
            <div key={group.group}>
              {/* Group label */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  marginBottom: '1rem',
                }}
              >
                <span
                  style={{
                    display: 'inline-block',
                    width: '28px',
                    height: '2px',
                    background: groupColors[group.group] ?? 'var(--gold)',
                    borderRadius: '2px',
                    flexShrink: 0,
                  }}
                />
                <span
                  style={{
                    fontFamily: 'var(--font-inter)',
                    fontSize: '0.6875rem',
                    fontWeight: 700,
                    letterSpacing: '0.14em',
                    textTransform: 'uppercase',
                    color: groupColors[group.group] ?? 'var(--gold)',
                  }}
                >
                  {group.group}
                </span>
              </div>

              {/* Accordion items */}
              <dl style={{ display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
                {group.faqs.map((faq) => {
                  const key = `${group.group}-${globalIndex}`;
                  const idx = globalIndex;
                  globalIndex++;
                  const isOpen = open === key;
                  const num = String(idx + 1).padStart(2, '0');

                  return (
                    <div
                      key={key}
                      style={{
                        background: '#FFFFFF',
                        borderRadius: '12px',
                        border: '1px solid',
                        borderColor: isOpen ? 'rgba(200,169,107,0.4)' : 'var(--border)',
                        borderLeft: isOpen ? '3px solid var(--gold)' : '3px solid transparent',
                        boxShadow: isOpen
                          ? '0 4px 24px rgba(200,169,107,0.1), 0 2px 8px rgba(0,0,0,0.04)'
                          : '0 1px 4px rgba(0,0,0,0.04)',
                        transition: 'border-color 0.22s ease, box-shadow 0.22s ease',
                        overflow: 'hidden',
                      }}
                    >
                      <dt>
                        <button
                          onClick={() => toggle(key)}
                          className="w-full text-left"
                          style={{
                            display: 'flex',
                            alignItems: 'flex-start',
                            gap: '1rem',
                            padding: '1.125rem 1.375rem',
                            cursor: 'pointer',
                            background: 'transparent',
                            border: 'none',
                            width: '100%',
                          }}
                          aria-expanded={isOpen}
                          aria-controls={`faq-answer-${key}`}
                        >
                          {/* Number */}
                          <span
                            style={{
                              fontFamily: 'var(--font-inter)',
                              fontSize: '0.6875rem',
                              fontWeight: 700,
                              letterSpacing: '0.05em',
                              color: isOpen ? 'var(--gold)' : 'var(--text-muted)',
                              lineHeight: 1,
                              marginTop: '0.25rem',
                              flexShrink: 0,
                              transition: 'color 0.2s',
                              minWidth: '1.5rem',
                            }}
                            aria-hidden="true"
                          >
                            {num}
                          </span>

                          {/* Question */}
                          <span
                            style={{
                              fontFamily: 'var(--font-inter)',
                              fontWeight: 600,
                              fontSize: '0.9375rem',
                              color: isOpen ? 'var(--text-dark)' : 'var(--text-body)',
                              lineHeight: 1.5,
                              flex: 1,
                              transition: 'color 0.2s',
                              textAlign: 'left',
                            }}
                          >
                            {faq.q}
                          </span>

                          {/* Chevron */}
                          <span
                            style={{
                              flexShrink: 0,
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              width: '1.75rem',
                              height: '1.75rem',
                              borderRadius: '50%',
                              background: isOpen ? 'var(--gold)' : 'rgba(200,169,107,0.1)',
                              transition: 'background 0.22s ease, transform 0.3s ease',
                              transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                              marginTop: '0.1rem',
                            }}
                            aria-hidden="true"
                          >
                            <ChevronDown
                              size={13}
                              style={{ color: isOpen ? '#1A1508' : 'var(--gold)' }}
                            />
                          </span>
                        </button>
                      </dt>

                      <dd
                        id={`faq-answer-${key}`}
                        style={{
                          maxHeight: isOpen ? '800px' : 0,
                          overflow: 'hidden',
                          transition: 'max-height 0.38s cubic-bezier(0.4,0,0.2,1)',
                        }}
                        aria-hidden={!isOpen}
                      >
                        <p
                          style={{
                            fontFamily: 'var(--font-inter)',
                            fontSize: '0.9375rem',
                            color: 'var(--text-body)',
                            lineHeight: 1.85,
                            padding: '0 1.375rem 1.25rem 3.375rem',
                          }}
                        >
                          {faq.a}
                        </p>
                      </dd>
                    </div>
                  );
                })}
              </dl>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div
          style={{
            marginTop: '3.5rem',
            padding: '2rem',
            borderRadius: '16px',
            background: '#FFFFFF',
            border: '1px solid var(--border)',
            boxShadow: '0 2px 12px rgba(0,0,0,0.05)',
            textAlign: 'center',
          }}
        >
          <p
            style={{
              fontFamily: 'var(--font-inter)',
              fontSize: '1rem',
              color: 'var(--text-body)',
              fontWeight: 500,
              marginBottom: '1.25rem',
            }}
          >
            Have a specific question?{' '}
            <span style={{ color: 'var(--text-dark)', fontWeight: 600 }}>Our team responds within 1 hour.</span>
          </p>
          <div style={{ display: 'flex', gap: '0.875rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a
              href="https://wa.me/919250346370?text=Hi%20VSD%20International%2C%20I%20have%20a%20question%20about%20commercial%20kitchen%20equipment."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
              aria-label="Ask a question via WhatsApp"
            >
              <MessageCircle size={16} />
              Ask on WhatsApp
            </a>
            <a
              href="tel:+919250346370"
              className="btn-ghost"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
              aria-label="Call VSD International"
            >
              <Phone size={16} />
              +91-9250346370
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
