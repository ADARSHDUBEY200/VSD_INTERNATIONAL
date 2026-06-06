'use client';

import { useState } from 'react';
import { ChevronDown, Phone, MessageCircle } from 'lucide-react';

const faqs = [
  {
    q: 'What types of commercial kitchen equipment does VSD International supply?',
    a: 'VSD International supplies cooking equipment (combi ovens, fryers, grills, ranges), refrigeration units (walk-in cold rooms, display refrigerators, blast chillers), bakery equipment (deck ovens, proofers, spiral mixers), dishwashing machines, food service equipment, bar equipment, pantry systems, and food preparation equipment. We are authorised dealers for Rational, Robot Coupe, Frymaster, Hamilton Beach, Scotsman, BUNN, and Vitamix.',
  },
  {
    q: 'Which industries does VSD International serve?',
    a: 'We serve hotels and resorts (Hyatt, Radisson, Crowne Plaza, ITC), hospitals and healthcare (Metro Hospital, Fortis), restaurants and QSRs, cloud kitchens and dark kitchens, bakeries and confectionery, and government and institutional clients (Election Commission of India, defence canteens, universities, corporate cafeterias).',
  },
  {
    q: 'How long does a commercial kitchen setup take?',
    a: 'Typically 21–45 days from order to commissioning, depending on project size. A single cloud kitchen station can be commissioned in 14 days, while a complete hotel kitchen overhaul typically takes 21–30 days. We provide a detailed project timeline at the proposal stage.',
  },
  {
    q: 'Does VSD International provide kitchen layout design?',
    a: 'Yes. We offer a free site visit and professional CAD-based kitchen layout design for projects above ₹5 Lakhs. Our engineers assess your space, workflow, utility connections, and menu requirements to design an optimised kitchen layout — at no charge as part of our project proposal.',
  },
  {
    q: 'Which cities does VSD International deliver to?',
    a: 'VSD International serves all major Indian cities including Delhi NCR, Mumbai, Pune, Bangalore, Hyderabad, Chennai, Kolkata, Jaipur, and Lucknow. Our Delhi factory enables fast delivery across North India. We ship pan-India for all project sizes.',
  },
  {
    q: 'Is VSD International ISO certified?',
    a: 'Yes. VSD International is ISO 9001:2008 certified. Our GSTIN is 07AABFV5120K1ZZ. We have two manufacturing facilities in Delhi (Mandawali, East Delhi). Our ISO certification covers our complete process: sourcing, fabrication, quality control, installation, and after-sales service.',
  },
  {
    q: 'What international brands does VSD International supply?',
    a: 'We are authorised dealers for: Rational (Germany — intelligent cooking systems), Robot Coupe (France — food processors), Frymaster (USA — commercial fryers), Hamilton Beach (USA — commercial blenders), Scotsman (Italy — ice machines), BUNN (USA — beverage equipment), and Vitamix (USA — high-performance blenders). All products come with full manufacturer warranty and local service support.',
  },
  {
    q: 'Does VSD International offer after-sales service and AMC?',
    a: 'Yes. We offer Annual Maintenance Contracts (AMC) covering preventive maintenance visits, emergency repairs, genuine spare parts supply, and priority response. We have dedicated service engineers based in Delhi NCR with rapid response for project clients across India. Our AMC response time is within 4 hours for critical equipment.',
  },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.q,
    acceptedAnswer: { '@type': 'Answer', text: faq.a },
  })),
};

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(null);
  const toggle = (i: number) => setOpen((prev) => (prev === i ? null : i));

  return (
    <section
      aria-labelledby="faq-heading"
      style={{
        padding: '6rem 0',
        background: 'var(--surface-alt)',
        borderTop: '1px solid var(--border)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Subtle warm glow top-center */}
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

      <div style={{ maxWidth: '60rem', margin: '0 auto', padding: '0 1.5rem', width: '100%', position: 'relative' }}>

        {/* ── Header ── */}
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
              maxWidth: '38rem',
              margin: '0 auto',
            }}
          >
            Everything hotel procurement managers, hospital administrators, and cloud
            kitchen operators ask before their first enquiry.
          </p>
        </div>

        {/* ── Accordion ── */}
        <dl style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          {faqs.map((faq, i) => {
            const isOpen = open === i;
            const num = String(i + 1).padStart(2, '0');

            return (
              <div
                key={i}
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
                    onClick={() => toggle(i)}
                    className="w-full text-left"
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '1rem',
                      padding: '1.25rem 1.5rem',
                      cursor: 'pointer',
                      background: 'transparent',
                      border: 'none',
                      width: '100%',
                    }}
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${i}`}
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
                  id={`faq-answer-${i}`}
                  style={{
                    maxHeight: isOpen ? '600px' : 0,
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
                      padding: '0 1.5rem 1.375rem 3.5rem',
                    }}
                  >
                    {faq.a}
                  </p>
                </dd>
              </div>
            );
          })}
        </dl>

        {/* ── CTA ── */}
        <div
          style={{
            marginTop: '3rem',
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
