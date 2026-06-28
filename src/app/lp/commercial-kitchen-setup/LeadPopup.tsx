'use client';

/* ───────────────────────────────────────────────────────────────────────────
   LeadPopup — modal capture form for the paid-ads landing page.
   • Opens when any CTA fires the `vsd:lead-popup-open` window event
     (use the exported `openLeadPopup()` helper, see LeadCta).
   • Auto-opens once per session, a few seconds after the first visit, so the
     offer surfaces without the visitor having to scroll or click.
   Reuses the shared <LeadForm /> so there is a single source of truth for the
   fields, validation and the /api/enquiries submission.
   ─────────────────────────────────────────────────────────────────────────── */

import { useCallback, useEffect, useState } from 'react';
import { X } from 'lucide-react';
import LeadForm from './LeadForm';

export const LEAD_POPUP_EVENT = 'vsd:lead-popup-open';
const SESSION_KEY = 'vsd_lp_popup_seen';
const AUTO_OPEN_DELAY = 6000; // ms after first paint
const DESKTOP_BREAKPOINT = 960; // matches .lp-hero-inner — desktop already shows the hero form

/** Fire from anywhere on the client to open the lead popup. */
export function openLeadPopup() {
  if (typeof window !== 'undefined') {
    window.dispatchEvent(new CustomEvent(LEAD_POPUP_EVENT));
  }
}

export default function LeadPopup() {
  const [open, setOpen] = useState(false);
  const close = useCallback(() => setOpen(false), []);

  /* Open on CTA event */
  useEffect(() => {
    const onOpen = () => setOpen(true);
    window.addEventListener(LEAD_POPUP_EVENT, onOpen);
    return () => window.removeEventListener(LEAD_POPUP_EVENT, onOpen);
  }, []);

  /* Auto-open once per session — skipped on desktop, where the hero already shows the form */
  useEffect(() => {
    if (sessionStorage.getItem(SESSION_KEY)) return;
    if (window.innerWidth >= DESKTOP_BREAKPOINT) return;
    const t = setTimeout(() => {
      setOpen(true);
      sessionStorage.setItem(SESSION_KEY, '1');
    }, AUTO_OPEN_DELAY);
    return () => clearTimeout(t);
  }, []);

  /* Esc to close + lock body scroll while open */
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
    };
    document.addEventListener('keydown', onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [open, close]);

  if (!open) return null;

  return (
    <div
      className="lp-popup-overlay"
      role="dialog"
      aria-modal="true"
      aria-label="Get your free commercial kitchen quote"
      onClick={close}
    >
      <div className="lp-popup-card" onClick={(e) => e.stopPropagation()}>
        <button type="button" className="lp-popup-close" onClick={close} aria-label="Close">
          <X size={18} />
        </button>
        <LeadForm
          heading="Get Your Free Kitchen Quote"
          subheading="Free CAD layout + itemised quote. Takes 30 seconds."
          ctaLabel="Get My Free Quote"
        />
      </div>
    </div>
  );
}
