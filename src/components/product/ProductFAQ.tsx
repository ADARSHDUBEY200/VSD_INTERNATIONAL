'use client';

import { useState } from 'react';
import type { Product } from '@/types/product';

interface ProductFAQProps {
  faq: Product['faq'];
  fullName: Product['fullName'];
}

/* ── Accordion item ── */
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
    <div className={`pfaq-item${open ? ' pfaq-item-open' : ''}`}>
      <div className="pfaq-item-bar" aria-hidden="true" />

      <h3 className="pfaq-item-h3">
        <button
          id={triggerId}
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          aria-expanded={open}
          aria-controls={panelId}
          className="pfaq-trigger"
        >
          <span className="pfaq-num" aria-hidden="true">
            {String(index + 1).padStart(2, '0')}
          </span>
          <span className="pfaq-question">{question}</span>
          <span className="pfaq-icon" aria-hidden="true">
            <svg
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </span>
        </button>
      </h3>

      <div
        id={panelId}
        role="region"
        aria-labelledby={triggerId}
        className="pfaq-panel"
      >
        <p className="pfaq-answer">{answer}</p>
      </div>
    </div>
  );
}

/* ── Callback form (inside the dark card) ── */
function CallbackForm() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) return;
    setLoading(true);
    /* TODO: wire to real API — POST /api/enquiries */
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 900);
  }

  if (submitted) {
    return (
      <div className="pfaq-form-success">
        <div className="pfaq-success-icon" aria-hidden="true">
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
        <p className="pfaq-success-title">Request received!</p>
        <p className="pfaq-success-text">
          Our team will call you within 48 hours.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="pfaq-form"
      noValidate
      aria-label="Request a callback"
    >
      {/* Full Name */}
      <div className="pfaq-field">
        <label htmlFor="cb-name" className="pfaq-label">
          Full Name
        </label>
        <input
          id="cb-name"
          type="text"
          required
          autoComplete="name"
          placeholder="e.g. Rajesh Sharma"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="pfaq-input"
        />
      </div>

      {/* Phone Number */}
      <div className="pfaq-field">
        <label htmlFor="cb-phone" className="pfaq-label">
          Phone Number
        </label>
        <div className="pfaq-phone-wrap">
          <span className="pfaq-phone-prefix" aria-hidden="true">+91</span>
          <input
            id="cb-phone"
            type="tel"
            required
            autoComplete="tel"
            placeholder="98765 43210"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="pfaq-input pfaq-input-phone"
          />
        </div>
      </div>

      <button
        type="submit"
        disabled={loading}
        className="pfaq-submit"
        aria-busy={loading}
      >
        {loading ? (
          <>
            <span className="pfaq-submit-spinner" aria-hidden="true" />
            Sending…
          </>
        ) : (
          <>
            Request a Callback
            <svg
              width="13"
              height="13"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </>
        )}
      </button>

      <p className="pfaq-form-note">
        We&rsquo;ll call within 48 hours &middot; No spam, ever.
      </p>
    </form>
  );
}

/* ── Main component ── */
export default function ProductFAQ({ faq, fullName }: ProductFAQProps) {
  return (
    <section aria-labelledby="faq-heading" className="pfaq-section">
      <div className="container">

        {/* ── Header ── */}
        <div className="pfaq-header">
          <div className="pfaq-eyebrow-row">
            <span className="pfaq-dot" aria-hidden="true" />
            <span className="pfaq-eyebrow">FAQ</span>
            <div className="pfaq-eyebrow-line" aria-hidden="true" />
          </div>
          <h2 id="faq-heading" className="pfaq-heading">
            Frequently asked questions
          </h2>
          <p className="pfaq-sub">Common questions about the {fullName}</p>
          <div className="pfaq-rule" aria-hidden="true" />
        </div>

        {/* ── Two-column: accordion + form card ── */}
        <div className="pfaq-layout">

          {/* Accordion */}
          <div className="pfaq-list">
            {faq.map((item, i) => (
              <FAQItem
                key={i}
                question={item.question}
                answer={item.answer}
                index={i}
              />
            ))}
          </div>

          {/* Right: sticky callback form card */}
          <aside className="pfaq-aside" aria-label="Request a callback from our team">
            <div className="pfaq-card">
              <div className="pfaq-card-topline" aria-hidden="true" />
              <div className="pfaq-card-inner">

                <div className="pfaq-card-icon" aria-hidden="true">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.75"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.4 2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6.18 6.18l1.17-.9a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </div>

                <h3 className="pfaq-card-title">Get a callback</h3>
                <p className="pfaq-card-text">
                  Leave your details and our kitchen equipment specialist will call you back.
                </p>

                <CallbackForm />

              </div>
            </div>
          </aside>

        </div>

      </div>

      <style>{`
        /* ── Section ── */
        .pfaq-section {
          background: var(--white);
          padding: 2.75rem 0 3rem;
          border-top: 1px solid var(--border);
        }

        /* ── Header ── */
        .pfaq-header { margin-bottom: 2rem; }
        .pfaq-eyebrow-row {
          display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.875rem;
        }
        .pfaq-dot {
          width: 6px; height: 6px; border-radius: 50%;
          background: var(--gold); flex-shrink: 0;
        }
        .pfaq-eyebrow {
          font-family: var(--font-inter), Inter, ui-sans-serif, sans-serif;
          font-size: 0.625rem; font-weight: 700; letter-spacing: 0.2em;
          text-transform: uppercase; color: var(--gold-deep); white-space: nowrap;
        }
        .pfaq-eyebrow-line {
          flex: 1; height: 1px;
          background: linear-gradient(90deg, var(--border), transparent);
        }
        .pfaq-heading {
          font-family: var(--font-playfair), 'Playfair Display', Georgia, serif;
          font-size: clamp(1.75rem, 3vw, 2.5rem);
          font-weight: 700; color: var(--text-dark); line-height: 1.1;
          letter-spacing: -0.02em; margin: 0 0 0.625rem;
        }
        .pfaq-sub {
          font-family: var(--font-inter), Inter, ui-sans-serif, sans-serif;
          font-size: 0.9375rem; color: var(--text-muted);
          margin: 0 0 1rem; line-height: 1.6;
        }
        .pfaq-rule {
          width: 48px; height: 3px; border-radius: 2px;
          background: linear-gradient(90deg, var(--gold), #e8b86d 50%, transparent);
        }

        /* ── Two-column layout ── */
        .pfaq-layout {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2.5rem;
          align-items: start;
        }
        @media (min-width: 900px) {
          .pfaq-layout {
            grid-template-columns: 1fr 320px;
            gap: 3.5rem;
          }
        }

        /* ── Accordion ── */
        .pfaq-list { border-top: 1px solid var(--border); }

        .pfaq-item {
          position: relative;
          border-bottom: 1px solid var(--border);
          overflow: hidden;
          transition: background 0.18s ease;
        }
        .pfaq-item-open { background: #faf9f6; }

        .pfaq-item-bar {
          position: absolute;
          left: 0; top: 0; bottom: 0;
          width: 3px;
          background: linear-gradient(to bottom, var(--gold), #c8922a);
          transform: scaleY(0);
          transform-origin: top;
          transition: transform 0.26s ease;
          border-radius: 0 2px 2px 0;
          z-index: 1;
        }
        .pfaq-item-open .pfaq-item-bar { transform: scaleY(1); }

        .pfaq-item-h3 { margin: 0; }
        .pfaq-trigger {
          display: grid;
          grid-template-columns: 48px 1fr 36px;
          align-items: center;
          gap: 1.25rem;
          width: 100%;
          padding: 1.375rem 0;
          background: none;
          border: none;
          cursor: pointer;
          text-align: left;
        }

        .pfaq-num {
          font-family: var(--font-playfair), 'Playfair Display', Georgia, serif;
          font-size: 1.5rem; font-weight: 800;
          color: #e2ddd4; line-height: 1;
          letter-spacing: -0.04em; text-align: right;
          transition: color 0.18s ease;
        }
        .pfaq-item-open .pfaq-num { color: var(--gold); }

        .pfaq-question {
          font-family: var(--font-inter), Inter, ui-sans-serif, sans-serif;
          font-size: 1rem; font-weight: 500;
          color: var(--text-dark); line-height: 1.5;
          transition: font-weight 0.15s ease;
        }
        .pfaq-item-open .pfaq-question { font-weight: 600; }

        .pfaq-icon {
          width: 32px; height: 32px;
          border-radius: 8px;
          border: 1px solid var(--border);
          background: #faf9f6;
          display: flex; align-items: center; justify-content: center;
          color: var(--text-muted);
          flex-shrink: 0;
          transition: border-color 0.22s ease, background 0.22s ease,
                      color 0.22s ease, transform 0.28s ease;
        }
        .pfaq-item-open .pfaq-icon {
          border-color: var(--gold);
          background: rgba(200,146,42,0.08);
          color: var(--gold-deep);
          transform: rotate(180deg);
        }

        .pfaq-panel {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.38s ease;
        }
        .pfaq-item-open .pfaq-panel { max-height: 1000px; }

        .pfaq-answer {
          font-family: var(--font-inter), Inter, ui-sans-serif, sans-serif;
          font-size: 0.9375rem; color: var(--text-body);
          line-height: 1.82; margin: 0;
          padding: 0 0 1.5rem calc(48px + 1.25rem);
        }

        @media (max-width: 767px) {
          .pfaq-trigger {
            grid-template-columns: 36px 1fr 32px;
            gap: 0.875rem; padding: 1.125rem 0;
          }
          .pfaq-num { font-size: 1.25rem; }
          .pfaq-question { font-size: 0.9375rem; }
          .pfaq-answer { padding: 0 0 1.25rem calc(36px + 0.875rem); }
        }

        /* ── Aside card ── */
        @media (min-width: 900px) {
          .pfaq-aside { position: sticky; top: 5rem; }
        }
        .pfaq-card {
          background: #1a1a16;
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 6px 28px rgba(0,0,0,0.14);
        }
        .pfaq-card-topline {
          height: 3px;
          background: linear-gradient(90deg, var(--gold), #c8922a 60%, transparent);
        }
        .pfaq-card-inner {
          padding: 1.5rem 1.625rem 1.75rem;
          display: flex; flex-direction: column;
        }
        .pfaq-card-icon {
          width: 38px; height: 38px; border-radius: 9px;
          background: rgba(200,146,42,0.12);
          border: 1px solid rgba(200,146,42,0.28);
          display: flex; align-items: center; justify-content: center;
          color: var(--gold); flex-shrink: 0; margin-bottom: 0.875rem;
        }
        .pfaq-card-title {
          font-family: var(--font-playfair), 'Playfair Display', Georgia, serif;
          font-size: 1.125rem; font-weight: 700;
          color: #e8e4d8; margin: 0 0 0.5rem; line-height: 1.3;
        }
        .pfaq-card-text {
          font-family: var(--font-inter), Inter, ui-sans-serif, sans-serif;
          font-size: 0.8rem; color: rgba(232,228,216,0.55);
          line-height: 1.68; margin: 0 0 1.25rem;
        }

        /* ── Form ── */
        .pfaq-form {
          display: flex; flex-direction: column; gap: 0.875rem;
        }
        .pfaq-field { display: flex; flex-direction: column; gap: 0.375rem; }
        .pfaq-label {
          font-family: var(--font-inter), Inter, ui-sans-serif, sans-serif;
          font-size: 0.5625rem; font-weight: 700;
          letter-spacing: 0.14em; text-transform: uppercase;
          color: rgba(255,255,255,0.65);
        }
        .pfaq-input {
          width: 100%;
          background: rgba(255,255,255,0.09);
          border: 1px solid rgba(255,255,255,0.18);
          border-radius: 8px;
          padding: 0.7rem 0.9rem;
          font-family: var(--font-inter), Inter, ui-sans-serif, sans-serif;
          font-size: 0.9375rem; color: #ffffff;
          outline: none;
          transition: border-color 0.18s ease, background 0.18s ease;
          box-sizing: border-box;
        }
        .pfaq-input::placeholder { color: rgba(255,255,255,0.35); }
        .pfaq-input:focus {
          border-color: rgba(200,146,42,0.65);
          background: rgba(255,255,255,0.13);
        }

        /* Phone row with +91 prefix */
        .pfaq-phone-wrap {
          display: flex; align-items: stretch;
          background: rgba(255,255,255,0.06);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 8px;
          overflow: hidden;
          transition: border-color 0.18s ease;
        }
        .pfaq-phone-wrap:focus-within {
          border-color: rgba(200,146,42,0.55);
        }
        .pfaq-phone-prefix {
          padding: 0 0.75rem;
          display: flex; align-items: center;
          font-family: var(--font-inter), Inter, ui-sans-serif, sans-serif;
          font-size: 0.875rem; font-weight: 600;
          color: var(--gold);
          border-right: 1px solid rgba(255,255,255,0.1);
          background: rgba(200,146,42,0.08);
          flex-shrink: 0;
          user-select: none;
        }
        .pfaq-input-phone {
          background: transparent !important;
          border: none !important;
          border-radius: 0 !important;
          flex: 1;
          padding-left: 0.75rem !important;
        }
        .pfaq-input-phone:focus { background: transparent !important; }

        /* Submit button */
        .pfaq-submit {
          display: flex; align-items: center; justify-content: center; gap: 0.5rem;
          padding: 0.7rem 1.25rem;
          border-radius: 8px;
          background: var(--gold); color: #1a1a14;
          font-family: var(--font-inter), Inter, ui-sans-serif, sans-serif;
          font-size: 0.8125rem; font-weight: 700;
          border: none; cursor: pointer; width: 100%;
          transition: opacity 0.15s ease, transform 0.15s ease;
          margin-top: 0.25rem;
        }
        .pfaq-submit:hover:not(:disabled) { opacity: 0.88; transform: translateY(-1px); }
        .pfaq-submit:disabled { opacity: 0.6; cursor: not-allowed; transform: none; }
        .pfaq-submit svg { flex-shrink: 0; }

        /* Spinner */
        .pfaq-submit-spinner {
          width: 13px; height: 13px;
          border: 2px solid rgba(26,26,20,0.3);
          border-top-color: #1a1a14;
          border-radius: 50%;
          animation: pfaq-spin 0.7s linear infinite;
          flex-shrink: 0;
        }
        @keyframes pfaq-spin { to { transform: rotate(360deg); } }

        .pfaq-form-note {
          font-family: var(--font-inter), Inter, ui-sans-serif, sans-serif;
          font-size: 0.5625rem; font-weight: 500;
          color: rgba(232,228,216,0.3);
          text-align: center; margin: 0;
          letter-spacing: 0.04em;
        }

        /* ── Success state ── */
        .pfaq-form-success {
          display: flex; flex-direction: column; align-items: center;
          gap: 0.625rem; padding: 1rem 0 0.25rem; text-align: center;
        }
        .pfaq-success-icon {
          width: 44px; height: 44px; border-radius: 50%;
          background: rgba(200,146,42,0.15);
          border: 1px solid rgba(200,146,42,0.3);
          display: flex; align-items: center; justify-content: center;
          color: var(--gold);
        }
        .pfaq-success-title {
          font-family: var(--font-playfair), 'Playfair Display', Georgia, serif;
          font-size: 1.0625rem; font-weight: 700;
          color: #e8e4d8; margin: 0;
        }
        .pfaq-success-text {
          font-family: var(--font-inter), Inter, ui-sans-serif, sans-serif;
          font-size: 0.8125rem; color: rgba(232,228,216,0.55);
          margin: 0; line-height: 1.6;
        }
      `}</style>
    </section>
  );
}
