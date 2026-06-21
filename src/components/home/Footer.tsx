import Link from 'next/link';
import { Phone, Mail, MapPin } from 'lucide-react';

/** SOP — Footer
 *  4 columns: Company Info | Services | Cities | Company links
 *  GST · ISO · Addresses
 *  Purpose: Internal linking + trust + NAP consistency for Local SEO
 *  SEO: NAP must match Google Business Profile exactly
 */
export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      style={{ background: 'var(--charcoal)', borderTop: '1px solid rgba(200,169,107,0.1)' }}
      role="contentinfo"
      aria-label="VSD International footer"
    >
      {/* -- Main footer columns ---------------------------------------- */}
      <div
        className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10"
        style={{ maxWidth: '80rem', padding: '4rem 1.25rem' }}
      >

        {/* Column 1 — Company Info */}
        <div>
          {/* Logo */}
          <div className="flex items-center gap-2 mb-5">
            <div
              className="flex items-center justify-center rounded"
              style={{ width: 36, height: 36, background: 'var(--gold)', flexShrink: 0 }}
            >
              <span style={{ fontFamily: 'var(--font-playfair)', fontWeight: 800, fontSize: '0.875rem', color: 'var(--charcoal)' }}>
                VSD
              </span>
            </div>
            <div>
              <p style={{ fontFamily: 'var(--font-playfair)', fontWeight: 700, fontSize: '0.9375rem', color: '#F7F7F5', lineHeight: 1.1 }}>
                VSD International
              </p>
              <p style={{ fontSize: '0.65rem', color: 'var(--gold)', letterSpacing: '0.1em', fontFamily: 'var(--font-inter)' }}>
                ISO 9001 Certified
              </p>
            </div>
          </div>

          <p
            style={{
              fontFamily: 'var(--font-inter)',
              fontSize: '0.875rem',
              color: '#5A5A54',
              lineHeight: 1.7,
              marginBottom: '1.25rem',
            }}
          >
            ISO 9001 certified manufacturer and supplier of commercial kitchen equipment for hotels,
            hospitals, restaurants, cloud kitchens, and institutions across India since 2019.
          </p>

          {/* NAP — must match GBP exactly */}
          <address style={{ fontStyle: 'normal' }} itemScope itemType="https://schema.org/Organization">
            <meta itemProp="name" content="VSD International" />
            <div className="flex flex-col gap-3">
              <a
                href="tel:+919250346370"
                className="link-hover-gold-dark flex items-start gap-2.5"
                style={{ fontSize: '0.875rem', fontFamily: 'var(--font-inter)' }}
                itemProp="telephone"
                aria-label="Call VSD International"
              >
                <Phone size={14} style={{ color: 'var(--gold)', marginTop: '0.2rem', flexShrink: 0 }} aria-hidden="true" />
                +91-9250346370
              </a>
              <a
                href="mailto:sales@vsdinternational.com"
                className="link-hover-gold-dark flex items-start gap-2.5"
                style={{ fontSize: '0.875rem', fontFamily: 'var(--font-inter)' }}
                itemProp="email"
                aria-label="Email VSD International"
              >
                <Mail size={14} style={{ color: 'var(--gold)', marginTop: '0.2rem', flexShrink: 0 }} aria-hidden="true" />
                sales@vsdinternational.com
              </a>
              <div
                className="flex items-start gap-2.5"
                style={{ color: '#5A5A54', fontSize: '0.875rem', fontFamily: 'var(--font-inter)' }}
                itemProp="address"
                itemScope
                itemType="https://schema.org/PostalAddress"
              >
                <MapPin size={14} style={{ color: 'var(--gold)', marginTop: '0.2rem', flexShrink: 0 }} aria-hidden="true" />
                <span>
                  <span itemProp="streetAddress">A-347 Saraswati Gali Mandawali</span>,{' '}
                  <span itemProp="addressLocality">New Delhi</span> —{' '}
                  <span itemProp="postalCode">110092</span>
                </span>
              </div>
            </div>
          </address>

          {/* Certifications */}
          <div className="flex flex-wrap gap-2 mt-5">
            {['ISO 9001', 'GST Registered', 'MSME Registered'].map((cert) => (
              <span
                key={cert}
                className="px-2.5 py-1 rounded-full"
                style={{
                  background: 'rgba(200,169,107,0.08)',
                  border: '1px solid rgba(200,169,107,0.18)',
                  fontSize: '0.6875rem',
                  color: 'var(--gold)',
                  fontFamily: 'var(--font-inter)',
                  fontWeight: 600,
                }}
              >
                {cert}
              </span>
            ))}
          </div>
        </div>

        {/* Column 2 — Services */}
        <div>
          <h3
            style={{
              fontFamily: 'var(--font-inter)',
              fontWeight: 700,
              fontSize: '0.875rem',
              color: '#F7F7F5',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              marginBottom: '1.25rem',
            }}
          >
            Our Services
          </h3>
          <ul className="flex flex-col gap-2.5" role="list">
            {[
              ['Equipment Supply',     '/services/equipment-supply'],
              ['Kitchen Design',       '/services/kitchen-design'],
              ['Installation',         '/services/installation'],
              ['AMC & After-Sales',    '/services/amc'],
              ['Custom Fabrication',   '/services/custom-fabrication'],
              ['Turnkey Projects',     '/services/turnkey'],
              ['International Brands', '/brands'],
              ['Projects Portfolio',   '/projects'],
            ].map(([label, href]) => (
              <li key={label}>
                <Link
                  href={href}
                  className="link-hover-gold-dark"
                  style={{ fontFamily: 'var(--font-inter)', fontSize: '0.875rem' }}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3 — Cities */}
        <div>
          <h3
            style={{
              fontFamily: 'var(--font-inter)',
              fontWeight: 700,
              fontSize: '0.875rem',
              color: '#F7F7F5',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              marginBottom: '1.25rem',
            }}
          >
            Cities We Serve
          </h3>
          <ul className="flex flex-col gap-2.5" role="list">
            {[
              ['Delhi NCR',   '/commercial-kitchen-equipment-delhi'],
              ['Mumbai',      '/commercial-kitchen-equipment-mumbai'],
              ['Bangalore',   '/commercial-kitchen-equipment-bangalore'],
              ['Hyderabad',   '/commercial-kitchen-equipment-hyderabad'],
              ['Chennai',     '/commercial-kitchen-equipment-chennai'],
              ['Pune',        '/commercial-kitchen-equipment-pune'],
              ['Kolkata',     '/commercial-kitchen-equipment-kolkata'],
              ['Jaipur',      '/commercial-kitchen-equipment-jaipur'],
              ['Lucknow',     '/commercial-kitchen-equipment-lucknow'],
              ['Ahmedabad',   '/commercial-kitchen-equipment-ahmedabad'],
            ].map(([label, href]) => (
              <li key={label}>
                <Link
                  href={href}
                  className="link-hover-gold-dark"
                  style={{ fontFamily: 'var(--font-inter)', fontSize: '0.875rem' }}
                >
                  Kitchen Equipment — {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 4 — Company */}
        <div>
          <h3
            style={{
              fontFamily: 'var(--font-inter)',
              fontWeight: 700,
              fontSize: '0.875rem',
              color: '#F7F7F5',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              marginBottom: '1.25rem',
            }}
          >
            Company
          </h3>
          <ul className="flex flex-col gap-2.5 mb-8" role="list">
            {[
              ['About VSD International', '/about'],
              ['Our Projects',            '/projects'],
              ['Industries We Serve',     '/industries'],
              ['International Brands',    '/brands'],
              ['Blog & Guides',           '/blog'],
              ['Contact Us',              '/contact'],
              ['Get Free Quote',          '/contact#quote'],
              ['Careers',                 '/careers'],
            ].map(([label, href]) => (
              <li key={label}>
                <Link
                  href={href}
                  className="link-hover-gold-dark"
                  style={{ fontFamily: 'var(--font-inter)', fontSize: '0.875rem' }}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Social links */}
          <h4 style={{ fontFamily: 'var(--font-inter)', fontWeight: 700, fontSize: '0.875rem', color: '#F7F7F5', marginBottom: '0.75rem' }}>
            Connect
          </h4>
          <div className="flex gap-3">
            {[
              { label: 'LinkedIn',  href: 'https://www.linkedin.com/company/vsd-international' },
              { label: 'IndiaMart', href: 'https://www.indiamart.com/vsd-international' },
              { label: 'Google',    href: 'https://maps.app.goo.gl/kzyGxozpqqGEK13i6' },
            ].map(({ label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-9 h-9 rounded-lg"
                style={{
                  background: 'rgba(200,169,107,0.08)',
                  border: '1px solid rgba(200,169,107,0.18)',
                  fontSize: '0.625rem',
                  fontFamily: 'var(--font-inter)',
                  fontWeight: 700,
                  color: 'var(--gold)',
                  textDecoration: 'none',
                  transition: 'transform 0.15s, background 0.15s',
                }}
                aria-label={`VSD International on ${label}`}
              >
                {label.substring(0, 2)}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* -- GSTIN / ISO strip ------------------------------------------ */}
      <div
        style={{
          borderTop: '1px solid rgba(200,169,107,0.08)',
          background: 'rgba(0,0,0,0.3)',
          padding: '1rem 1.25rem',
        }}
      >
        <div
          className="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left"
          style={{ maxWidth: '80rem' }}
        >
          <p style={{ fontFamily: 'var(--font-inter)', fontSize: '0.75rem', color: '#3A3A36', lineHeight: 1.5 }}>
            <strong style={{ color: '#5A5A54' }}>VSD International</strong>
            {' '}· GSTIN: 07AABFV5120K1ZZ · ISO 9001:2015 Certified
            {' '}· Factory: A-347 Saraswati Gali Mandawali, New Delhi — 110092
            {' '}· Factory II: Ghaziabad, UP
          </p>
          <p style={{ fontFamily: 'var(--font-inter)', fontSize: '0.75rem', color: '#3A3A36', whiteSpace: 'nowrap' }}>
            © {year} VSD International. All rights reserved.
          </p>
        </div>
      </div>

      {/* -- Legal links ------------------------------------------------ */}
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.03)', padding: '0.75rem 1.25rem' }}>
        <div
          className="container mx-auto flex flex-wrap items-center justify-center gap-x-5 gap-y-1"
          style={{ maxWidth: '80rem' }}
        >
          {[['Privacy Policy', '/privacy'], ['Terms of Service', '/terms'], ['Sitemap', '/sitemap.xml'], ['Refund Policy', '/refund']].map(
            ([label, href]) => (
              <Link
                key={label}
                href={href}
                className="link-hover-gold-light"
                style={{ fontFamily: 'var(--font-inter)', fontSize: '0.6875rem' }}
              >
                {label}
              </Link>
            ),
          )}
        </div>
      </div>
    </footer>
  );
}
