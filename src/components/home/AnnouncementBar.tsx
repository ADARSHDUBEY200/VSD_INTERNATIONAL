import Link from 'next/link';
import { PhoneCall, MessageCircle } from 'lucide-react';

/**
 * Announcement Bar — Section ①
 * Golden shine sweep matches the reference design: bright diagonal beam
 * that sweeps left-to-right on a dark gold-tinted banner.
 */
export default function AnnouncementBar() {
  return (
    <div
      className="hidden sm:block w-full text-sm font-medium text-center relative overflow-hidden"
      style={{
        background: 'linear-gradient(90deg, #1A1405 0%, #201908 30%, #1E1706 60%, #1A1405 100%)',
        borderBottom: '1px solid rgba(201,168,76,0.28)',
        borderTop: '2px solid rgba(201,168,76,0.55)',
        padding: '0.25rem 1rem',
      }}
      role="banner"
      aria-label="Special offer announcement"
    >
      {/* ── Primary shine beam — wide, bright, skewed ── */}
      <span
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: '-60%',
          left: 0,
          width: '38%',
          height: '220%',
          background:
            'linear-gradient(90deg, transparent 0%, rgba(255,236,120,0.08) 20%, rgba(255,228,80,0.38) 40%, rgba(255,249,200,0.55) 50%, rgba(255,228,80,0.38) 60%, rgba(255,236,120,0.08) 80%, transparent 100%)',
          transform: 'skewX(-18deg)',
          animation: 'bar-shine-bold 4.5s ease-in-out 0.5s infinite',
          pointerEvents: 'none',
          zIndex: 1,
        }}
      />

      {/* ── Secondary narrower trailing beam ── */}
      <span
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: '-60%',
          left: 0,
          width: '14%',
          height: '220%',
          background:
            'linear-gradient(90deg, transparent, rgba(255,249,200,0.22), transparent)',
          transform: 'skewX(-18deg)',
          animation: 'bar-shine-bold 4.5s ease-in-out 0.72s infinite',
          pointerEvents: 'none',
          zIndex: 1,
          opacity: 0.7,
        }}
      />

      <div
        className="container mx-auto flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 text-center"
        style={{ position: 'relative', zIndex: 2 }}
      >
        {/* Offer text */}
        <span
          style={{
            color: 'var(--gold-bright)',
            fontFamily: 'var(--font-inter)',
            fontWeight: 700,
            letterSpacing: '0.04em',
            textShadow: '0 0 18px rgba(240,196,66,0.55)',
          }}
        >
          ✦ FREE KITCHEN LAYOUT CONSULTATION AVAILABLE
        </span>

        {/* Divider */}
        <span
          className="hidden sm:inline"
          style={{ color: 'rgba(201,168,76,0.35)', fontWeight: 300 }}
        >
          —
        </span>

        {/* Call CTA */}
        <Link
          href="tel:+919250346370"
          className="announcement-link flex items-center gap-1.5 transition-opacity hover:opacity-80"
          style={{ color: '#F7F7F5', fontWeight: 600, letterSpacing: '0.03em' }}
          aria-label="Call VSD International at +91-9250346370"
        >
          <PhoneCall size={13} aria-hidden="true" />
          <span>CALL +91-9250346370</span>
        </Link>

        {/* Pipe */}
        <span style={{ color: 'rgba(201,168,76,0.45)' }}>|</span>

        {/* WhatsApp CTA */}
        <Link
          href="https://wa.me/919250346370?text=Hi%20VSD%20International%2C%20I%20need%20commercial%20kitchen%20equipment.%20Please%20share%20details."
          target="_blank"
          rel="noopener noreferrer"
          className="announcement-link flex items-center gap-1.5 transition-opacity hover:opacity-80"
          style={{ color: '#25D366', fontWeight: 600, letterSpacing: '0.03em' }}
          aria-label="WhatsApp VSD International now"
        >
          <MessageCircle size={13} aria-hidden="true" />
          <span>WHATSAPP NOW</span>
        </Link>
      </div>
    </div>
  );
}
