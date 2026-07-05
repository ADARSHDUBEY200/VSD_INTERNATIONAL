'use client';

import { useState, useEffect, useRef } from 'react';
import type { Product } from '@/types/product';
import { WHATSAPP_NUMBER } from '@/lib/config';

interface StickyEnquiryBarProps {
  product: Pick<Product, 'fullName' | 'whatsappMessage'>;
  heroCTASelector?: string;
}

export default function StickyEnquiryBar({
  product,
  heroCTASelector = '#hero-cta',
}: StickyEnquiryBarProps) {
  const [visible, setVisible] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);

  const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(product.whatsappMessage)}`;

  useEffect(() => {
    const target = document.querySelector(heroCTASelector);
    if (!target) {
      setVisible(true);
      return;
    }

    observerRef.current = new IntersectionObserver(
      ([entry]) => {
        // Show sticky bar when the hero CTA is NOT intersecting (scrolled past)
        setVisible(!entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    observerRef.current.observe(target);

    return () => {
      observerRef.current?.disconnect();
    };
  }, [heroCTASelector]);

  // Truncate product name for mobile display
  const shortName =
    product.fullName.length > 28 ? `${product.fullName.slice(0, 28)}…` : product.fullName;

  return (
    <div
      aria-label="Quick enquiry"
      role="complementary"
      style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        background: 'var(--charcoal-mid)',
        borderTop: '1px solid rgba(201,168,76,0.2)',
        transform: visible ? 'translateY(0)' : 'translateY(100%)',
        transition: 'transform 0.3s ease',
        willChange: 'transform',
      }}
    >
      <div
        className="container"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '1rem',
          height: '60px',
        }}
      >
        {/* Product name — hidden on very small screens, visible on sm+ */}
        <span
          style={{
            fontFamily: 'var(--font-dm-sans), DM Sans, sans-serif',
            fontSize: '0.9rem',
            fontWeight: 500,
            color: 'rgba(245,240,232,0.85)',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
            flexShrink: 1,
            minWidth: 0,
          }}
          className="sticky-bar-name"
        >
          {shortName}
        </span>

        <div
          style={{
            display: 'flex',
            gap: '0.625rem',
            alignItems: 'center',
            flexShrink: 0,
          }}
        >
          {/* WhatsApp compact */}
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              background: '#25D366',
              color: '#fff',
              flexShrink: 0,
            }}
            aria-label="Chat on WhatsApp"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
          </a>

          {/* Primary CTA button */}
          <a
            href="/contact"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              height: '40px',
              padding: '0 1.25rem',
              background: 'linear-gradient(135deg, var(--gold-light) 0%, var(--gold) 50%, var(--gold-deep) 100%)',
              color: '#1A1508',
              fontFamily: 'var(--font-dm-sans), DM Sans, sans-serif',
              fontSize: '0.875rem',
              fontWeight: 600,
              borderRadius: '4px',
              textDecoration: 'none',
              whiteSpace: 'nowrap',
              transition: 'opacity 0.15s ease',
            }}
            aria-label={`Get price and lead time for the ${product.fullName}`}
          >
            Get Price &amp; Lead Time
          </a>
        </div>
      </div>

      <style>{`
        @media (max-width: 479px) {
          .sticky-bar-name { display: none; }
        }
        @media (max-width: 479px) .sticky-bar-cta {
          width: 100%;
        }
      `}</style>
    </div>
  );
}
