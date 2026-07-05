import type { Product } from '@/types/product';
import { WHATSAPP_NUMBER } from '@/lib/config';

interface ProductCTAProps {
  fullName: Product['fullName'];
  whatsappMessage: Product['whatsappMessage'];
}

export default function ProductCTA({ fullName, whatsappMessage }: ProductCTAProps) {
  const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <section aria-labelledby="final-cta-heading" className="pcta-section">

      {/* Gold top accent bar */}
      <div className="pcta-topbar" aria-hidden="true" />

      <div className="container">
        <div className="pcta-layout">

          {/* ── Left: text ── */}
          <div className="pcta-text">
            <div className="pcta-eyebrow-row">
              <span className="pcta-dot" aria-hidden="true" />
              <span className="pcta-eyebrow">Get a Quote</span>
            </div>
            <h2 id="final-cta-heading" className="pcta-heading">
              Get Price &amp; Lead Time<br className="pcta-br" /> for the {fullName}
            </h2>
            <p className="pcta-sub">
              Our team responds within 4 business hours with pricing,
              availability, and installation details for your project.
            </p>
          </div>

          {/* ── Right: buttons ── */}
          <div className="pcta-actions">
            <a href="/contact" className="pcta-btn-primary">
              Request a Quote
              <svg
                width="14" height="14"
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
            </a>

            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="pcta-btn-wa"
              aria-label={`Chat on WhatsApp about the ${fullName}`}
            >
              <svg
                width="16" height="16"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Chat on WhatsApp
            </a>

            <p className="pcta-trust">
              <svg
                width="11" height="11"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
              Authorised dealer &middot; pan-India commissioning &middot; 2-year warranty
            </p>
          </div>

        </div>
      </div>

      {/* Bottom separator so it doesn't bleed into the footer */}
      <div className="pcta-bottombar" aria-hidden="true" />

      <style>{`
        /* ── Section ── */
        .pcta-section {
          background: #0e0e0b;
          padding-bottom: 2.5rem;
          margin-bottom: 0;
        }

        /* Gold top accent line */
        .pcta-topbar {
          height: 3px;
          background: linear-gradient(
            90deg,
            transparent 0%,
            var(--gold) 25%,
            #c8922a 65%,
            transparent 100%
          );
          margin-bottom: 2.25rem;
        }

        /* Subtle bottom separator */
        .pcta-bottombar {
          height: 1px;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(200,146,42,0.18) 30%,
            rgba(200,146,42,0.18) 70%,
            transparent
          );
          margin-top: 2.5rem;
        }

        /* ── Two-column layout ── */
        .pcta-layout {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2rem;
          align-items: center;
        }
        @media (min-width: 900px) {
          .pcta-layout {
            grid-template-columns: 1fr auto;
            gap: 5rem;
          }
        }

        /* ── Left: text ── */
        .pcta-eyebrow-row {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin-bottom: 0.875rem;
        }
        .pcta-dot {
          width: 6px; height: 6px;
          border-radius: 50%;
          background: var(--gold);
          flex-shrink: 0;
        }
        .pcta-eyebrow {
          font-family: var(--font-inter), Inter, ui-sans-serif, sans-serif;
          font-size: 0.625rem;
          font-weight: 700;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--gold);
        }

        .pcta-heading {
          font-family: var(--font-playfair), 'Playfair Display', Georgia, serif;
          font-size: clamp(1.5rem, 2.5vw, 2.125rem);
          font-weight: 700;
          color: #e8e4d8;
          line-height: 1.2;
          letter-spacing: -0.02em;
          margin: 0 0 0.875rem;
        }
        .pcta-br { display: none; }
        @media (min-width: 900px) { .pcta-br { display: inline; } }

        .pcta-sub {
          font-family: var(--font-inter), Inter, ui-sans-serif, sans-serif;
          font-size: 0.9rem;
          color: rgba(232,228,216,0.48);
          line-height: 1.72;
          margin: 0;
          max-width: 54ch;
        }

        /* ── Right: action buttons ── */
        .pcta-actions {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          align-items: stretch;
          min-width: 220px;
        }

        /* Primary — solid gold */
        .pcta-btn-primary {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          padding: 0.8rem 1.5rem;
          border-radius: 9px;
          background: var(--gold);
          color: #1a1a14;
          font-family: var(--font-inter), Inter, ui-sans-serif, sans-serif;
          font-size: 0.9rem;
          font-weight: 700;
          text-decoration: none;
          transition: opacity 0.15s ease, transform 0.15s ease;
        }
        .pcta-btn-primary:hover {
          opacity: 0.88;
          transform: translateY(-1px);
        }
        .pcta-btn-primary svg { flex-shrink: 0; }

        /* WhatsApp — ghost gold */
        .pcta-btn-wa {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          padding: 0.8rem 1.5rem;
          border-radius: 9px;
          background: rgba(200,146,42,0.07);
          border: 1px solid rgba(200,146,42,0.28);
          color: var(--gold);
          font-family: var(--font-inter), Inter, ui-sans-serif, sans-serif;
          font-size: 0.9rem;
          font-weight: 600;
          text-decoration: none;
          transition: border-color 0.18s ease, background 0.18s ease;
        }
        .pcta-btn-wa:hover {
          border-color: rgba(200,146,42,0.55);
          background: rgba(200,146,42,0.13);
        }
        .pcta-btn-wa svg { flex-shrink: 0; }

        /* Trust line */
        .pcta-trust {
          display: flex;
          align-items: center;
          gap: 0.375rem;
          font-family: var(--font-inter), Inter, ui-sans-serif, sans-serif;
          font-size: 0.5625rem;
          font-weight: 500;
          color: rgba(232,228,216,0.28);
          margin: 0.125rem 0 0;
          text-align: center;
          justify-content: center;
          letter-spacing: 0.04em;
        }
        .pcta-trust svg {
          flex-shrink: 0;
          color: var(--gold);
          opacity: 0.55;
        }
      `}</style>
    </section>
  );
}
