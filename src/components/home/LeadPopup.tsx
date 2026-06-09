'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { X, ArrowRight, Star, CheckCircle2, Phone, Mail, User, Zap, Shield } from 'lucide-react';

const SESSION_KEY = 'vsd:lead-dismissed';

type Fields = { name: string; email: string; phone: string };
const EMPTY: Fields = { name: '', email: '', phone: '' };

export default function LeadPopup() {
  const pathname     = usePathname();
  const [visible,    setVisible]    = useState(false);
  const [form,       setForm]       = useState<Fields>(EMPTY);
  const [submitting, setSubmitting] = useState(false);
  const [submitted,  setSubmitted]  = useState(false);

  /* Re-arm on every pathname change — 5 s delay */
  useEffect(() => {
    setVisible(false);
    setForm(EMPTY);
    setSubmitted(false);

    if (sessionStorage.getItem(SESSION_KEY)) return;

    const t = setTimeout(() => setVisible(true), 5000);
    return () => clearTimeout(t);
  }, [pathname]);

  /* Lock scroll while visible */
  useEffect(() => {
    if (visible) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = '';
    return () => { document.body.style.overflow = ''; };
  }, [visible]);

  /* Escape to dismiss */
  useEffect(() => {
    if (!visible) return;
    const h = (e: KeyboardEvent) => { if (e.key === 'Escape') dismiss(); };
    window.addEventListener('keydown', h);
    return () => window.removeEventListener('keydown', h);
  }, [visible]);

  const dismiss = () => {
    setVisible(false);
    sessionStorage.setItem(SESSION_KEY, '1');
  };

  const update = (k: keyof Fields, v: string) =>
    setForm(f => ({ ...f, [k]: v }));

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.phone.trim()) return;
    setSubmitting(true);
    try {
      await fetch('/api/enquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, source: 'lead_popup' }),
      });
      setSubmitted(true);
      sessionStorage.setItem(SESSION_KEY, '1');
      setTimeout(() => setVisible(false), 3200);
    } catch {
      /* fail silently */
    } finally {
      setSubmitting(false);
    }
  };

  if (!visible) return null;

  return (
    <>
      <style>{`
        @keyframes lp-bg   { from{opacity:0} to{opacity:1} }
        @keyframes lp-card {
          from { opacity:0; transform:translate(-50%,-46%) scale(0.92); }
          to   { opacity:1; transform:translate(-50%,-50%) scale(1); }
        }
        @keyframes lp-badge {
          0%,100% { transform:scale(1); }
          50%     { transform:scale(1.07); }
        }
        @keyframes lp-star {
          0%,100% { opacity:1; }
          50%     { opacity:0.5; }
        }
        @keyframes lp-ok {
          from { transform:scale(0) rotate(-10deg); opacity:0; }
          to   { transform:scale(1) rotate(0deg);   opacity:1; }
        }
      `}</style>

      {/* ── Backdrop ── */}
      <div
        onClick={dismiss}
        aria-hidden="true"
        style={{
          position: 'fixed', inset: 0, zIndex: 980,
          background: 'rgba(4,3,1,0.72)',
          backdropFilter: 'blur(6px)',
          WebkitBackdropFilter: 'blur(6px)',
          animation: 'lp-bg 0.22s ease both',
        }}
      />

      {/* ── Centered card ── */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Free kitchen quote offer"
        style={{
          position: 'fixed',
          top: '50%', left: '50%',
          zIndex: 981,
          width: 'min(400px, calc(100vw - 1.25rem))',
          maxHeight: 'calc(100dvh - 1.25rem)',
          overflowY: 'auto',
          borderRadius: 22,
          background: 'linear-gradient(150deg, #100E0B 0%, #0C0A07 100%)',
          border: '1px solid rgba(200,169,107,0.24)',
          boxShadow: '0 40px 120px rgba(0,0,0,0.72), 0 0 0 1px rgba(200,169,107,0.07)',
          animation: 'lp-card 0.36s cubic-bezier(0.34,1.25,0.64,1) both',
          scrollbarWidth: 'none',
        }}
      >
        {/* Gold top bar */}
        <div style={{
          height: 3,
          background: 'linear-gradient(90deg, var(--gold-bright), var(--gold), var(--gold-deep))',
          borderRadius: '22px 22px 0 0',
          flexShrink: 0,
        }} />

        <div style={{ padding: '1.375rem 1.625rem 1.625rem' }}>

          {/* ── Top row: badge + close ── */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.125rem' }}>
            {/* Pulsing offer badge */}
            <span style={{
              display: 'inline-flex', alignItems: 'center', gap: 5,
              padding: '4px 12px', borderRadius: 100,
              background: 'linear-gradient(135deg, rgba(200,169,107,0.2), rgba(200,169,107,0.08))',
              border: '1px solid rgba(200,169,107,0.35)',
              fontSize: '0.625rem', fontWeight: 800,
              color: 'var(--gold)', fontFamily: 'var(--font-inter)',
              letterSpacing: '0.12em', textTransform: 'uppercase',
              animation: 'lp-badge 2.8s ease-in-out infinite',
            }}>
              <Zap size={9} fill="currentColor" />
              Free Offer
            </span>

            <button
              onClick={dismiss}
              aria-label="Close offer"
              style={{
                width: 30, height: 30, borderRadius: '50%',
                background: 'rgba(255,255,255,0.07)',
                border: '1px solid rgba(255,255,255,0.1)',
                cursor: 'pointer', display: 'flex',
                alignItems: 'center', justifyContent: 'center',
                color: 'rgba(245,240,232,0.45)',
                transition: 'background 0.15s',
              }}
              onMouseEnter={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.14)')}
              onMouseLeave={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.07)')}
            >
              <X size={14} />
            </button>
          </div>

          {/* ── Success state ── */}
          {submitted ? (
            <div style={{ textAlign: 'center', padding: '0.75rem 0 0.5rem' }}>
              <div style={{
                width: 64, height: 64, borderRadius: '50%',
                background: 'rgba(74,222,128,0.1)', border: '2px solid rgba(74,222,128,0.28)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                margin: '0 auto 1.125rem',
                animation: 'lp-ok 0.42s cubic-bezier(0.34,1.4,0.64,1)',
              }}>
                <CheckCircle2 size={32} style={{ color: '#4ADE80' }} />
              </div>
              <p style={{ fontFamily: 'var(--font-playfair)', fontSize: '1.25rem', color: '#F7F5F0', marginBottom: '0.375rem' }}>
                You&apos;re on the list!
              </p>
              <p style={{ fontFamily: 'var(--font-inter)', fontSize: '0.8125rem', color: 'rgba(245,240,232,0.45)', lineHeight: 1.6 }}>
                We&apos;ll call you within{' '}
                <strong style={{ color: 'var(--gold)' }}>1 hour</strong>{' '}
                with your free kitchen layout.
              </p>
            </div>
          ) : (
            <>
              {/* ── Headline + social proof ── */}
              <div style={{ marginBottom: '1.125rem' }}>
                <h3 style={{
                  fontFamily: 'var(--font-playfair)', fontWeight: 700,
                  fontSize: 'clamp(1.25rem, 4vw, 1.4375rem)',
                  color: '#F7F5F0', lineHeight: 1.2,
                  letterSpacing: '-0.02em', marginBottom: '0.3rem',
                }}>
                  Get a <span style={{ color: 'var(--gold)' }}>Free</span> Kitchen Layout
                </h3>
                <p style={{ fontFamily: 'var(--font-inter)', fontSize: '0.8rem', color: 'rgba(245,240,232,0.42)', lineHeight: 1.5 }}>
                  Trusted by <strong style={{ color: 'rgba(245,240,232,0.65)', fontWeight: 600 }}>Hyatt · Radisson · Crowne Plaza</strong>
                </p>
              </div>

              {/* Authenticity row */}
              <div style={{
                display: 'flex', alignItems: 'center', gap: 8,
                padding: '0.55rem 0.875rem',
                borderRadius: 10,
                background: 'rgba(200,169,107,0.05)',
                border: '1px solid rgba(200,169,107,0.1)',
                marginBottom: '1.125rem',
              }}>
                <Shield size={13} style={{ color: 'var(--gold)', flexShrink: 0 }} />
                <p style={{ fontFamily: 'var(--font-inter)', fontSize: '0.72rem', color: 'rgba(245,240,232,0.45)', lineHeight: 1.4 }}>
                  ISO 9001 Certified · Free site visit · No commitment required
                </p>
              </div>

              {/* Gradient divider */}
              <div style={{ height: 1, background: 'linear-gradient(90deg, transparent, rgba(200,169,107,0.16), transparent)', marginBottom: '1rem' }} />

              {/* ── Form ── */}
              <form onSubmit={submit} noValidate style={{ display: 'flex', flexDirection: 'column', gap: '0.7rem' }}>

                <LPField icon={<User size={13} />}>
                  <input
                    type="text"
                    placeholder="Full Name *"
                    value={form.name}
                    onChange={e => update('name', e.target.value)}
                    required
                    autoComplete="name"
                    style={lpSx}
                    onFocus={e => { e.target.style.borderColor = 'rgba(200,169,107,0.52)'; e.target.style.boxShadow = '0 0 0 3px rgba(200,169,107,0.09)'; }}
                    onBlur={e  => { e.target.style.borderColor = 'rgba(200,169,107,0.18)'; e.target.style.boxShadow = 'none'; }}
                  />
                </LPField>

                <LPField icon={<Mail size={13} />}>
                  <input
                    type="email"
                    placeholder="Email Address"
                    value={form.email}
                    onChange={e => update('email', e.target.value)}
                    autoComplete="email"
                    style={lpSx}
                    onFocus={e => { e.target.style.borderColor = 'rgba(200,169,107,0.52)'; e.target.style.boxShadow = '0 0 0 3px rgba(200,169,107,0.09)'; }}
                    onBlur={e  => { e.target.style.borderColor = 'rgba(200,169,107,0.18)'; e.target.style.boxShadow = 'none'; }}
                  />
                </LPField>

                <LPField icon={<Phone size={13} />}>
                  <input
                    type="tel"
                    placeholder="WhatsApp Number *"
                    value={form.phone}
                    onChange={e => update('phone', e.target.value)}
                    required
                    autoComplete="tel"
                    style={lpSx}
                    onFocus={e => { e.target.style.borderColor = 'rgba(200,169,107,0.52)'; e.target.style.boxShadow = '0 0 0 3px rgba(200,169,107,0.09)'; }}
                    onBlur={e  => { e.target.style.borderColor = 'rgba(200,169,107,0.18)'; e.target.style.boxShadow = 'none'; }}
                  />
                </LPField>

                <button
                  type="submit"
                  disabled={submitting}
                  className="btn-gold"
                  style={{
                    width: '100%', justifyContent: 'center',
                    minHeight: '2.875rem', fontSize: '0.9375rem',
                    marginTop: '0.125rem',
                    opacity: submitting ? 0.7 : 1,
                    cursor: submitting ? 'not-allowed' : 'pointer',
                  }}
                >
                  {submitting
                    ? 'Sending…'
                    : <><span>Claim Free Layout</span><ArrowRight size={14} /></>}
                </button>
              </form>

              {/* ── Social proof strip ── */}
              <div style={{
                marginTop: '1rem', paddingTop: '0.875rem',
                borderTop: '1px solid rgba(200,169,107,0.08)',
                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                  <div style={{ display: 'flex', gap: 2 }}>
                    {[1, 2, 3, 4, 5].map(s => (
                      <Star
                        key={s} size={11}
                        fill="var(--gold)" stroke="none"
                        style={{ animation: `lp-star 2s ease-in-out ${s * 0.12}s infinite` }}
                      />
                    ))}
                  </div>
                  <span style={{ fontFamily: 'var(--font-inter)', fontSize: '0.7rem', color: 'rgba(245,240,232,0.38)', fontWeight: 600 }}>
                    4.9 · 312 Google Reviews
                  </span>
                </div>
                <button
                  type="button"
                  onClick={dismiss}
                  style={{
                    background: 'none', border: 'none', cursor: 'pointer',
                    fontFamily: 'var(--font-inter)', fontSize: '0.675rem',
                    color: 'rgba(245,240,232,0.22)', textDecoration: 'underline',
                  }}
                >
                  Not now
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}

/* ─── styles ─────────────────────────────────────────────────────────────── */
const lpSx: React.CSSProperties = {
  width: '100%',
  padding: '0.6875rem 0.875rem 0.6875rem 2.375rem',
  borderRadius: 10,
  border: '1.5px solid rgba(200,169,107,0.18)',
  background: 'rgba(255,255,255,0.035)',
  color: '#F7F5F0',
  fontFamily: 'var(--font-inter)',
  fontSize: '0.9rem',
  outline: 'none',
  transition: 'border-color 0.15s, box-shadow 0.15s',
};

function LPField({ icon, children }: { icon: React.ReactNode; children: React.ReactNode }) {
  return (
    <div style={{ position: 'relative' }}>
      <span style={{
        position: 'absolute', left: '0.7rem', top: '50%',
        transform: 'translateY(-50%)',
        color: 'rgba(200,169,107,0.4)',
        display: 'flex', pointerEvents: 'none',
      }}>
        {icon}
      </span>
      {children}
    </div>
  );
}
