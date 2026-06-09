'use client';

import { useEffect, useRef, useState } from 'react';

/** SOP § Section ④ — Stats Counter Strip
 *  Purpose: Quantified credibility — specificity removes doubt
 *  SEO: Semantic numbers for NLP / entity recognition
 *  CRO: Social proof cascade — numbers build trust before scrolling
 */
const stats = [
  { value: 20,  suffix: '+', label: 'Hotels Served',   desc: 'Hyatt, Radisson, Crowne Plaza & more' },
  { value: 5,   suffix: '',  label: 'Hospital Groups',  desc: 'Metro, Fortis & institutional kitchens' },
  { value: 15,  suffix: '+', label: 'Years Active',     desc: 'Founded 2009, Delhi NCR' },
  { value: 312, suffix: '',  label: 'Google Reviews',   desc: '4.9★ Average rating' },
  { value: 2,   suffix: '',  label: 'Factories Delhi',  desc: 'Own manufacturing, fast delivery' },
];

function useCountUp(target: number, duration = 1800, startCounting: boolean) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!startCounting) return;
    let start: number | null = null;
    const step = (timestamp: number) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration, startCounting]);
  return count;
}

function StatCard({
  value,
  suffix,
  label,
  desc,
  startCounting,
}: (typeof stats)[0] & { startCounting: boolean }) {
  const count = useCountUp(value, 1800, startCounting);
  return (
    <div className="stat-card">
      {/* Animated number */}
      <div
        style={{
          fontFamily: 'var(--font-playfair)',
          fontWeight: 800,
          fontSize: 'clamp(2.25rem, 4vw, 3.25rem)',
          color: 'var(--gold)',
          lineHeight: 1,
          letterSpacing: '-0.02em',
        }}
        aria-label={`${value}${suffix} ${label}`}
      >
        {count}
        <span style={{ color: 'var(--gold-deep)' }}>{suffix}</span>
      </div>

      {/* Label */}
      <div
        style={{
          fontFamily: 'var(--font-inter)',
          fontWeight: 700,
          fontSize: '0.875rem',
          color: '#F0EDE6',
          letterSpacing: '0.01em',
          marginTop: '0.75rem',
        }}
      >
        {label}
      </div>

      {/* Description */}
      <div
        style={{
          fontFamily: 'var(--font-inter)',
          fontSize: '0.75rem',
          color: 'rgba(201,168,76,0.45)',
          lineHeight: 1.45,
          marginTop: '0.4rem',
          maxWidth: '140px',
        }}
      >
        {desc}
      </div>
    </div>
  );
}

export default function TrustMetrics() {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.2 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      aria-label="VSD International key statistics"
      style={{
        background: 'var(--charcoal-light)',
        borderTop: '1px solid rgba(201,168,76,0.15)',
        borderBottom: '1px solid rgba(201,168,76,0.10)',
      }}
    >
      {/* -- ISO credentials strip ------------------------------------------- */}
      <div
        className="text-center"
        style={{
          padding: '0.75rem 1rem',
          background: 'rgba(201,168,76,0.07)',
          borderBottom: '1px solid rgba(201,168,76,0.10)',
          fontSize: '0.6875rem',
          letterSpacing: '0.18em',
          color: 'var(--gold)',
          fontFamily: 'var(--font-inter)',
          fontWeight: 600,
          textTransform: 'uppercase',
        }}
      >
        ★ ISO 9001:2015 Certified · GSTIN: 07AABFV5120K1ZZ · Two Delhi Factories · Rational &amp; Robot Coupe Authorised Dealer ★
      </div>

      {/* -- Stats — horizontal scroll on mobile, grid on md+ --------------- */}
      <div className="stats-scroll-outer">
        <div className="stats-grid">
          {stats.map((stat) => (
            <StatCard
              key={stat.label}
              {...stat}
              startCounting={visible}
            />
          ))}
        </div>
      </div>

      {/* -- Bottom trust tagline -------------------------------------------- */}
      <div
        className="text-center"
        style={{
          padding: '0.875rem 1rem',
          borderTop: '1px solid rgba(201,168,76,0.08)',
          fontSize: '0.6875rem',
          letterSpacing: '0.14em',
          color: 'rgba(201,168,76,0.40)',
          fontFamily: 'var(--font-inter)',
          fontWeight: 600,
          textTransform: 'uppercase',
        }}
      >
        Trusted by India&apos;s Leading Establishments
      </div>
    </section>
  );
}
