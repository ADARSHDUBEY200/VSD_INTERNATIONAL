'use client';

/* ───────────────────────────────────────────────────────────────────────────
   LeadCta — a CTA button that opens the LeadPopup modal instead of scrolling
   the visitor up to an on-page form. Drop-in replacement for the previous
   `<a href="#lead-form">` anchors; keeps the same className/style props so the
   existing .btn-gold styling is unchanged.
   ─────────────────────────────────────────────────────────────────────────── */

import type { CSSProperties, ReactNode } from 'react';
import { openLeadPopup } from './LeadPopup';

export default function LeadCta({
  children,
  className,
  style,
  ariaLabel,
}: {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  ariaLabel?: string;
}) {
  return (
    <button type="button" onClick={openLeadPopup} className={className} style={style} aria-label={ariaLabel}>
      {children}
    </button>
  );
}
