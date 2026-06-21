'use client';

import { useRef, useEffect, useState } from 'react';

function useCounter(target: number, started: boolean, duration = 1800) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!started) return;
    let raf = 0;
    let t0: number | null = null;
    const tick = (ts: number) => {
      if (!t0) t0 = ts;
      const p = Math.min((ts - t0) / duration, 1);
      setCount(Math.floor((1 - Math.pow(2, -10 * p)) * target));
      if (p < 1) raf = requestAnimationFrame(tick);
      else setCount(target);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [started, target, duration]);
  return count;
}

const STATS = [
  { value: 7,   suffix: '+',  label: 'Years of Excellence',  sub: 'Est. 2019, Delhi'        },
  { value: 200, suffix: '+',  label: 'Satisfied Clients',     sub: 'Hotels, Hospitals & more' },
  { value: 312, suffix: '',   label: 'Google Reviews',        sub: '5★ Average rating'       },
  { value: 50,  suffix: '+',  label: 'Cities Served',         sub: 'Pan-India network'       },
];

export default function StatsCounter() {
  const ref     = useRef<HTMLDivElement>(null);
  const [on, setOn] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setOn(true); obs.disconnect(); } },
      { threshold: 0.25 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const v7   = useCounter(7,   on, 1400);
  const v200 = useCounter(200, on, 1700);
  const v312 = useCounter(312, on, 2000);
  const v50  = useCounter(50,  on, 1500);
  const vals  = [v7, v200, v312, v50];

  return (
    <div
      ref={ref}
      style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '1.25rem',
      }}
    >
      {STATS.map(({ suffix, label, sub }, i) => (
        <div
          key={label}
          style={{
            padding: '1.5rem 1.25rem',
            borderRadius: 16,
            background: '#FFFFFF',
            border: '1.5px solid var(--border)',
            boxShadow: '0 4px 24px rgba(201,168,76,0.08)',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* Gold top accent */}
          <div
            aria-hidden="true"
            style={{
              position: 'absolute',
              top: 0, left: 0, right: 0,
              height: '3px',
              background: 'linear-gradient(90deg, var(--gold-bright), var(--gold), var(--gold-deep))',
              borderRadius: '2px 2px 0 0',
            }}
          />
          <div
            style={{
              fontFamily: 'var(--font-playfair)',
              fontWeight: 800,
              fontSize: 'clamp(2.25rem, 4vw, 3rem)',
              color: 'var(--gold-deep)',
              lineHeight: 1,
              letterSpacing: '-0.02em',
            }}
          >
            {vals[i]}{suffix}
          </div>
          <div
            style={{
              fontFamily: 'var(--font-inter)',
              fontSize: '0.875rem',
              fontWeight: 700,
              color: 'var(--text-dark)',
              marginTop: '0.5rem',
            }}
          >
            {label}
          </div>
          <div
            style={{
              fontFamily: 'var(--font-inter)',
              fontSize: '0.75rem',
              color: 'var(--text-muted)',
              marginTop: '0.25rem',
            }}
          >
            {sub}
          </div>
        </div>
      ))}
    </div>
  );
}
