'use client';

import { useState } from 'react';
import type { Product } from '@/types/product';

interface ProductFAQProps {
  faq: Product['faq'];
  fullName: Product['fullName'];
}

export default function ProductFAQ({ faq, fullName }: ProductFAQProps) {
  return (
    <section
      aria-labelledby="faq-heading"
      style={{ background: 'var(--white)', padding: '5rem 0' }}
    >
      <div className="container">
        <p className="section-label" style={{ marginBottom: '0.75rem', color: 'var(--gold-deep)' }}>
          FAQ
        </p>
        <h2
          id="faq-heading"
          style={{
            fontFamily: 'var(--font-cormorant), Cormorant Garamond, Georgia, serif',
            fontSize: 'clamp(1.6rem, 3vw, 2rem)',
            fontWeight: 600,
            color: 'var(--text-dark)',
            lineHeight: 1.2,
            marginBottom: '0.5rem',
          }}
        >
          Frequently Asked Questions
        </h2>
        <p
          style={{
            fontFamily: 'var(--font-dm-sans), DM Sans, sans-serif',
            fontSize: '0.9375rem',
            color: 'var(--text-muted)',
            marginBottom: '2.5rem',
          }}
        >
          Common questions about the {fullName}
        </p>

        <div style={{ maxWidth: '820px' }}>
          {faq.map((item, i) => (
            <FAQItem key={i} question={item.question} answer={item.answer} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQItem({
  question,
  answer,
  index,
}: {
  question: string;
  answer: string;
  index: number;
}) {
  const [open, setOpen] = useState(false);
  const panelId = `faq-panel-${index}`;
  const triggerId = `faq-trigger-${index}`;

  return (
    <div
      style={{
        borderBottom: '1px solid var(--border)',
        borderLeft: open ? '3px solid var(--gold)' : '3px solid transparent',
        transition: 'border-left-color 0.22s ease',
        paddingLeft: open ? '1rem' : '0',
      }}
    >
      <h3 style={{ margin: 0 }}>
        <button
          id={triggerId}
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          aria-expanded={open}
          aria-controls={panelId}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '100%',
            padding: '1.25rem 0',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            textAlign: 'left',
            gap: '1rem',
          }}
        >
          <span
            style={{
              fontFamily: 'var(--font-dm-sans), DM Sans, sans-serif',
              fontSize: '1rem',
              fontWeight: 500,
              color: 'var(--text-dark)',
              lineHeight: 1.45,
            }}
          >
            {question}
          </span>
          <span
            aria-hidden="true"
            style={{
              flexShrink: 0,
              width: '24px',
              height: '24px',
              borderRadius: '50%',
              border: '1.5px solid var(--border)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--gold)',
              transition: 'transform 0.22s ease, border-color 0.22s ease',
              transform: open ? 'rotate(45deg)' : 'rotate(0)',
              borderColor: open ? 'var(--gold)' : 'var(--border)',
              fontSize: '1.1rem',
              lineHeight: 1,
            }}
          >
            +
          </span>
        </button>
      </h3>

      <div
        id={panelId}
        role="region"
        aria-labelledby={triggerId}
        style={{
          maxHeight: open ? '800px' : '0',
          overflow: 'hidden',
          transition: 'max-height 0.35s ease',
        }}
      >
        <p
          style={{
            fontFamily: 'var(--font-dm-sans), DM Sans, sans-serif',
            fontSize: '0.9375rem',
            color: 'var(--text-body)',
            lineHeight: 1.8,
            margin: '0 0 1.25rem',
            paddingBottom: '0.25rem',
          }}
        >
          {answer}
        </p>
      </div>
    </div>
  );
}
