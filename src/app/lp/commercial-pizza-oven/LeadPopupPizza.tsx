'use client';

/* ───────────────────────────────────────────────────────────────────────────
   LeadPopupPizza — pizza-oven variant of the paid-ads lead popup.
   Same behaviour as the shared LeadPopup (auto-open once per session on mobile,
   opens on the shared `vsd:lead-popup-open` event fired by <LeadCta />) but with
   pizza-oven copy and the `lp_commercial_pizza_oven` enquiry source.
   ─────────────────────────────────────────────────────────────────────────── */

import { useCallback, useEffect, useState } from 'react';
import { X } from 'lucide-react';
import LeadForm from '../commercial-kitchen-setup/LeadForm';
import { LEAD_POPUP_EVENT } from '../commercial-kitchen-setup/LeadPopup';

const SESSION_KEY = 'vsd_lp_pizza_popup_seen';
const AUTO_OPEN_DELAY = 6000; // ms after first paint
const DESKTOP_BREAKPOINT = 960; // matches .lp-hero-inner — desktop already shows the hero form

export default function LeadPopupPizza() {
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
      aria-label="Get your free commercial pizza oven quote"
      onClick={close}
    >
      <div className="lp-popup-card" onClick={(e) => e.stopPropagation()}>
        <button type="button" className="lp-popup-close" onClick={close} aria-label="Close">
          <X size={18} />
        </button>
        <LeadForm
          heading="Get Your Free Pizza Oven Quote"
          subheading="Free design consultation + itemised quote. Takes 30 seconds."
          ctaLabel="Send the Free Quote"
          source="lp_commercial_pizza_oven"
        />
      </div>
    </div>
  );
}
