'use client';

import { ArrowRight } from 'lucide-react';

interface Props {
  label?:     string;
  className?: string;
  style?:     React.CSSProperties;
  ariaLabel?: string;
  showIcon?:  boolean;
}

export default function OpenEnquiryBtn({
  label     = 'Get Free Quote',
  className = 'btn-gold',
  style,
  ariaLabel,
  showIcon  = true,
}: Props) {
  const open = () => window.dispatchEvent(new Event('vsd:open-enquiry'));
  return (
    <button
      type="button"
      onClick={open}
      className={`${className} inline-flex items-center gap-2`}
      style={style}
      aria-label={ariaLabel ?? label}
    >
      {label}
      {showIcon && <ArrowRight size={15} aria-hidden="true" />}
    </button>
  );
}
