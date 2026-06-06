import Link from 'next/link';
import { PhoneCall, MessageCircle } from 'lucide-react';

/**
 * Announcement Bar — Section ①
 * Purpose: Urgency + direct contact pathway
 * SEO: Creates crawlable phone/WhatsApp text
 * CRO: Immediate contact option without scrolling
 */
export default function AnnouncementBar() {
  return (
    <div
      className="w-full text-sm font-medium text-center"
      style={{
        background: 'var(--charcoal)',
        borderBottom: '1px solid var(--charcoal-mid)',
        padding: '0.6rem 1rem',
      }}
      role="banner"
      aria-label="Special offer announcement"
    >
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 text-center">
        {/* Offer text */}
        <span style={{ color: 'var(--gold)', fontFamily: 'var(--font-inter)' }}>
          🎯 FREE KITCHEN LAYOUT CONSULTATION AVAILABLE
        </span>

        {/* Divider */}
        <span
          className="hidden sm:inline"
          style={{ color: 'var(--charcoal-mid)', fontWeight: 300 }}
        >
          —
        </span>

        {/* Call CTA */}
        <Link
          href="tel:+919250346370"
          className="announcement-link flex items-center gap-1.5 transition-opacity hover:opacity-80"
          style={{ color: '#F7F7F5' }}
          aria-label="Call VSD International at +91-9250346370"
        >
          <PhoneCall size={13} aria-hidden="true" />
          <span>CALL +91-9250346370</span>
        </Link>

        {/* Pipe */}
        <span style={{ color: 'var(--gold)', opacity: 0.5 }}>|</span>

        {/* WhatsApp CTA */}
        <Link
          href="https://wa.me/919250346370?text=Hi%20VSD%20International%2C%20I%20need%20commercial%20kitchen%20equipment.%20Please%20share%20details."
          target="_blank"
          rel="noopener noreferrer"
          className="announcement-link flex items-center gap-1.5 transition-opacity hover:opacity-80"
          style={{ color: '#25D366' }}
          aria-label="WhatsApp VSD International now"
        >
          <MessageCircle size={13} aria-hidden="true" />
          <span>WHATSAPP NOW</span>
        </Link>
      </div>
    </div>
  );
}
