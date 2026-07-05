'use client';

/* ───────────────────────────────────────────────────────────────────────────
   CertificateGallery — the 3 trust certificates. Cards open a full-size
   preview in an in-page lightbox (same tab, the landing page stays mounted
   underneath — closes on X / Esc / backdrop). On phones the cards become a
   horizontal swipe carousel (see .lp-cert-grid mobile styles).
   ─────────────────────────────────────────────────────────────────────────── */

import Image from 'next/image';
import { useState, useEffect, useCallback, useRef } from 'react';
import { ShieldCheck, Award, CheckCircle2, ArrowRight, X, type LucideIcon } from 'lucide-react';

type Cert = { Icon: LucideIcon; title: string; caption: string; image: string };

const CERTIFICATES: Cert[] = [
  { Icon: ShieldCheck, title: 'ISO 9001:2015 Certified', caption: 'Quality management system certified for consistent manufacturing standards.', image: '/Certificates/ISO.webp' },
  { Icon: Award, title: 'MSME Registered', caption: 'Registered as a Micro, Small & Medium Enterprise under the Government of India.', image: '/Certificates/MSME_CERTIFICATE.webp' },
  { Icon: CheckCircle2, title: 'GST Registered', caption: 'Fully GST-compliant business — transparent, itemised, tax-compliant billing.', image: '/Certificates/VSD_GST_CERTIFICATE.webp' },
];

export default function CertificateGallery() {
  const [active, setActive] = useState<number | null>(null);
  const close = useCallback(() => setActive(null), []);
  const trackRef = useRef<HTMLDivElement>(null);

  /* Lock scroll + Esc-to-close while the lightbox is open */
  useEffect(() => {
    if (active === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
    };
    document.addEventListener('keydown', onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = prev;
    };
  }, [active, close]);

  /* Phone-only auto-advancing infinite loop: one certificate slides in, then
     the next, then the third, then it loops back to the first — continuously. */
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    if (!window.matchMedia('(max-width: 639px)').matches) return;

    const step = () => {
      const card = track.querySelector<HTMLElement>('[data-cert-card]');
      if (!card) return track.clientWidth;
      const gap = parseFloat(getComputedStyle(track).columnGap || '20');
      return card.getBoundingClientRect().width + gap;
    };

    let paused = false;
    const id = setInterval(() => {
      if (paused) return;
      const atEnd = track.scrollLeft + track.clientWidth >= track.scrollWidth - 4;
      if (atEnd) {
        track.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        track.scrollBy({ left: step(), behavior: 'smooth' });
      }
    }, 3000);

    const pause = () => { paused = true; };
    const resume = () => { setTimeout(() => { paused = false; }, 2600); };
    track.addEventListener('touchstart', pause, { passive: true });
    track.addEventListener('touchend', resume, { passive: true });

    return () => {
      clearInterval(id);
      track.removeEventListener('touchstart', pause);
      track.removeEventListener('touchend', resume);
    };
  }, []);

  return (
    <>
      <div className="lp-cert-grid" ref={trackRef}>
        {CERTIFICATES.map(({ Icon, title, caption, image }, i) => (
          <button type="button" data-cert-card key={title} className="lp-cert-card" onClick={() => setActive(i)} aria-label={`View ${title} certificate`}>
            <div className="lp-cert-photo">
              <div className="lp-cert-frame">
                <Image src={image} alt={title} fill sizes="(max-width: 640px) 80vw, 320px" style={{ objectFit: 'contain' }} />
              </div>
              <span className="lp-cert-seal">
                <Icon size={16} style={{ color: '#1A1508' }} />
              </span>
            </div>
            <div className="lp-cert-info">
              <h3>{title}</h3>
              <p>{caption}</p>
              <span>
                View Full Certificate <ArrowRight size={12} />
              </span>
            </div>
          </button>
        ))}
      </div>

      {active !== null && (
        <div
          className="lp-cert-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={CERTIFICATES[active].title}
          onClick={close}
        >
          <button type="button" className="lp-cert-lightbox-close" onClick={close} aria-label="Close preview">
            <X size={20} />
          </button>
          <div className="lp-cert-lightbox-inner" onClick={(e) => e.stopPropagation()}>
            <Image
              src={CERTIFICATES[active].image}
              alt={CERTIFICATES[active].title}
              width={900}
              height={1200}
              style={{ width: 'auto', height: 'auto', maxWidth: '100%', maxHeight: '84vh', objectFit: 'contain', borderRadius: '8px', background: '#fff' }}
            />
            <p className="lp-cert-lightbox-cap">{CERTIFICATES[active].title}</p>
          </div>
        </div>
      )}
    </>
  );
}
