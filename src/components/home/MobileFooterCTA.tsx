import Link from 'next/link';
import { PhoneCall, Eye } from 'lucide-react';

/** Fixed bottom CTA bar — mobile only (sm:hidden)
 *  Replaces the hero's View Projects + Call buttons on small screens.
 *  WhatsApp float sits above this at bottom-24.
 */
export default function MobileFooterCTA() {
  return (
    <nav
      className="fixed bottom-0 left-0 right-0 sm:hidden"
      style={{ zIndex: 45 }}
      aria-label="Quick contact actions"
    >
      {/* Gold accent line at top */}
      <div
        aria-hidden="true"
        style={{
          height: '1px',
          background:
            'linear-gradient(90deg, transparent 5%, rgba(201,168,76,0.55) 35%, rgba(240,196,66,0.65) 65%, transparent 95%)',
        }}
      />

      {/* Bar body */}
      <div
        style={{
          background: 'rgba(10, 8, 6, 0.97)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          padding: '0.625rem 1rem',
          paddingBottom: 'max(0.625rem, env(safe-area-inset-bottom))',
        }}
      >
        <div style={{ display: 'flex', gap: '0.75rem' }}>

          {/* View Projects — ghost gold */}
          <Link
            href="/projects"
            className="mob-cta-ghost"
            style={{
              flex: 1,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.4rem',
              height: '2.875rem',
              borderRadius: '8px',
              background: 'rgba(201,168,76,0.10)',
              border: '1.5px solid rgba(201,168,76,0.32)',
              color: 'var(--gold-light)',
              fontFamily: 'var(--font-inter)',
              fontWeight: 700,
              fontSize: '0.875rem',
              textDecoration: 'none',
              letterSpacing: '0.01em',
            }}
            aria-label="View our completed projects"
          >
            <Eye size={15} aria-hidden="true" />
            View Projects
          </Link>

          {/* Call Now — solid gold */}
          <a
            href="tel:+919250346370"
            className="mob-cta-solid"
            style={{
              flex: 1,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.45rem',
              height: '2.875rem',
              borderRadius: '8px',
              background: 'linear-gradient(135deg, var(--gold-light) 0%, var(--gold) 50%, var(--gold-deep) 100%)',
              color: '#1A1508',
              fontFamily: 'var(--font-inter)',
              fontWeight: 700,
              fontSize: '0.875rem',
              textDecoration: 'none',
              letterSpacing: '0.01em',
              boxShadow: '0 4px 18px rgba(201,168,76,0.38)',
            }}
            aria-label="Call VSD International at +91-9250346370"
          >
            <PhoneCall size={15} aria-hidden="true" />
            Call Now
          </a>

        </div>
      </div>
    </nav>
  );
}
