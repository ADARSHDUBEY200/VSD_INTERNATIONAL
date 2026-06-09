'use client';

import { useEffect, useRef, useState } from 'react';
import {
  X, ArrowRight, Shield, Star, CheckCircle2,
  Phone, Mail, User, Award,
} from 'lucide-react';

/* ─── types ─────────────────────────────────────────────────────────────── */
type Fields  = { name: string; email: string; phone: string };
type FErrors = Partial<Fields>;
const EMPTY: Fields = { name: '', email: '', phone: '' };

function validate(f: Fields): FErrors {
  const e: FErrors = {};
  if (!f.name.trim() || f.name.trim().length < 2)
    e.name  = 'Please enter your full name';
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.email))
    e.email = 'Enter a valid email address';
  if (!/^\+?[\d\s\-()+]{7,15}$/.test(f.phone.replace(/\s/g, '')))
    e.phone = 'Enter a valid phone number';
  return e;
}

/* ─── component ─────────────────────────────────────────────────────────── */
export default function EnquiryModal() {
  const [open,       setOpen]       = useState(false);
  const [form,       setForm]       = useState<Fields>(EMPTY);
  const [errors,     setErrors]     = useState<FErrors>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted,  setSubmitted]  = useState(false);
  const nameRef = useRef<HTMLInputElement>(null);

  /* listen for global open trigger */
  useEffect(() => {
    const handler = () => {
      setOpen(true);
      setForm(EMPTY);
      setErrors({});
      setSubmitted(false);
    };
    window.addEventListener('vsd:open-enquiry', handler);
    return () => window.removeEventListener('vsd:open-enquiry', handler);
  }, []);

  /* body scroll lock + focus first field */
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
      setTimeout(() => nameRef.current?.focus(), 340);
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  /* Escape to close */
  useEffect(() => {
    if (!open) return;
    const h = (e: KeyboardEvent) => { if (e.key === 'Escape') setOpen(false); };
    window.addEventListener('keydown', h);
    return () => window.removeEventListener('keydown', h);
  }, [open]);

  const update = (k: keyof Fields, v: string) => {
    setForm(f => ({ ...f, [k]: v }));
    if (errors[k]) setErrors(e => ({ ...e, [k]: undefined }));
  };

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate(form);
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setSubmitting(true);
    try {
      const res = await fetch('/api/enquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, source: 'enquiry_modal' }),
      });
      if (!res.ok) throw new Error('failed');
      setSubmitted(true);
    } catch {
      setErrors({ name: 'Submission failed. Please try WhatsApp instead.' });
    } finally {
      setSubmitting(false);
    }
  };

  if (!open) return null;

  return (
    <>
      <style>{`
        @keyframes em-bg {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @keyframes em-card {
          from { opacity: 0; transform: translate(-50%, -46%) scale(0.93); }
          to   { opacity: 1; transform: translate(-50%, -50%) scale(1); }
        }
        @keyframes em-success {
          from { transform: scale(0) rotate(-12deg); opacity: 0; }
          to   { transform: scale(1) rotate(0deg);  opacity: 1; }
        }
      `}</style>

      {/* ── Backdrop ── */}
      <div
        onClick={() => setOpen(false)}
        aria-hidden="true"
        style={{
          position: 'fixed', inset: 0, zIndex: 1000,
          background: 'rgba(4,3,1,0.80)',
          backdropFilter: 'blur(8px)',
          WebkitBackdropFilter: 'blur(8px)',
          animation: 'em-bg 0.22s ease both',
        }}
      />

      {/* ── Card ── */}
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="em-heading"
        style={{
          position: 'fixed',
          top: '50%', left: '50%',
          zIndex: 1001,
          width: 'min(456px, calc(100vw - 1.25rem))',
          maxHeight: 'calc(100dvh - 1.25rem)',
          overflowY: 'auto',
          borderRadius: 22,
          background: 'linear-gradient(150deg, #100E0B 0%, #0C0A07 100%)',
          border: '1px solid rgba(200,169,107,0.22)',
          boxShadow: '0 40px 120px rgba(0,0,0,0.78), 0 0 0 1px rgba(200,169,107,0.07)',
          animation: 'em-card 0.34s cubic-bezier(0.34,1.25,0.64,1) both',
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

        <div style={{ padding: '1.5rem 1.75rem 1.875rem' }}>

          {/* ── Header row ── */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.125rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 11 }}>
              {/* Brand avatar */}
              <div style={{
                width: 42, height: 42, borderRadius: '50%',
                background: 'rgba(200,169,107,0.1)',
                border: '1.5px solid rgba(200,169,107,0.28)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                flexShrink: 0,
              }}>
                <Shield size={18} style={{ color: 'var(--gold)' }} />
              </div>
              <div>
                <p style={{ fontFamily: 'var(--font-inter)', fontWeight: 800, fontSize: 13.5, color: '#F7F5F0', lineHeight: 1.2 }}>
                  VSD International
                </p>
                <p style={{ fontFamily: 'var(--font-inter)', fontSize: 11, color: 'rgba(245,240,232,0.38)', marginTop: 2 }}>
                  ISO 9001 Certified · Delhi NCR · Est. 2009
                </p>
              </div>
            </div>

            {/* Close */}
            <button
              onClick={() => setOpen(false)}
              aria-label="Close enquiry form"
              style={{
                width: 30, height: 30, borderRadius: '50%',
                background: 'rgba(255,255,255,0.07)',
                border: '1px solid rgba(255,255,255,0.1)',
                cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: 'rgba(245,240,232,0.5)', transition: 'background 0.15s',
                flexShrink: 0,
              }}
              onMouseEnter={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.14)')}
              onMouseLeave={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.07)')}
            >
              <X size={14} />
            </button>
          </div>

          {/* Gradient divider */}
          <div style={{
            height: 1,
            background: 'linear-gradient(90deg, transparent, rgba(200,169,107,0.2), transparent)',
            marginBottom: '1.25rem',
          }} />

          {/* ── Authenticty row ── */}
          <div style={{
            display: 'flex', alignItems: 'center', gap: 10,
            padding: '0.6rem 0.875rem',
            borderRadius: 10,
            background: 'rgba(200,169,107,0.05)',
            border: '1px solid rgba(200,169,107,0.1)',
            marginBottom: '1.25rem',
          }}>
            <Award size={14} style={{ color: 'var(--gold)', flexShrink: 0 }} />
            <p style={{ fontFamily: 'var(--font-inter)', fontSize: '0.75rem', color: 'rgba(245,240,232,0.5)', lineHeight: 1.45 }}>
              Trusted by <strong style={{ color: 'rgba(245,240,232,0.75)', fontWeight: 600 }}>Hyatt, Radisson Blu, ITC & Crowne Plaza</strong> — 200+ projects delivered.
            </p>
          </div>

          {/* ── Success state ── */}
          {submitted ? (
            <div style={{ textAlign: 'center', padding: '0.75rem 0 0.5rem' }}>
              <div style={{
                width: 68, height: 68, borderRadius: '50%',
                background: 'rgba(74,222,128,0.1)', border: '2px solid rgba(74,222,128,0.28)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                margin: '0 auto 1.25rem',
                animation: 'em-success 0.45s cubic-bezier(0.34,1.4,0.64,1)',
              }}>
                <CheckCircle2 size={34} style={{ color: '#4ADE80' }} />
              </div>
              <h3 style={{ fontFamily: 'var(--font-playfair)', fontSize: '1.5rem', color: '#F7F5F0', marginBottom: '0.5rem' }}>
                Enquiry Received!
              </h3>
              <p style={{ fontFamily: 'var(--font-inter)', fontSize: '0.875rem', color: 'rgba(245,240,232,0.48)', lineHeight: 1.7, marginBottom: '1.625rem' }}>
                Our team will call you within{' '}
                <strong style={{ color: 'var(--gold)' }}>1 hour</strong>{' '}
                with a customised equipment plan and free kitchen layout.
              </p>
              <a
                href="https://wa.me/919250346370?text=Hi%20VSD%2C%20I%20just%20submitted%20an%20enquiry.%20Please%20confirm."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold"
                style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: '0.875rem' }}
              >
                Follow Up on WhatsApp
              </a>
              <div style={{ marginTop: '1rem' }}>
                <button
                  onClick={() => setOpen(false)}
                  style={{
                    background: 'none', border: 'none', cursor: 'pointer',
                    fontFamily: 'var(--font-inter)', fontSize: '0.75rem',
                    color: 'rgba(245,240,232,0.22)', textDecoration: 'underline',
                  }}
                >
                  Close this window
                </button>
              </div>
            </div>
          ) : (
            /* ── Form ── */
            <>
              <div style={{ marginBottom: '1.375rem' }}>
                <h2
                  id="em-heading"
                  style={{
                    fontFamily: 'var(--font-playfair)', fontWeight: 700,
                    fontSize: 'clamp(1.25rem, 4vw, 1.5625rem)',
                    color: '#F7F5F0', lineHeight: 1.18,
                    letterSpacing: '-0.02em', marginBottom: '0.4rem',
                  }}
                >
                  Get Your Free Kitchen{' '}
                  <span style={{ color: 'var(--gold)' }}>Quote</span>
                </h2>
                <p style={{ fontFamily: 'var(--font-inter)', fontSize: '0.8125rem', color: 'rgba(245,240,232,0.42)', lineHeight: 1.55 }}>
                  Free site visit · Free layout plan · Response within{' '}
                  <strong style={{ color: 'var(--gold-light)', fontWeight: 600 }}>1 hour</strong>
                </p>
              </div>

              <form onSubmit={submit} noValidate style={{ display: 'flex', flexDirection: 'column', gap: '0.9rem' }}>

                <EMField label="Full Name" icon={<User size={14} />} error={errors.name}>
                  <input
                    ref={nameRef}
                    type="text"
                    placeholder="e.g. Ramesh Sharma"
                    value={form.name}
                    onChange={e => update('name', e.target.value)}
                    autoComplete="name"
                    style={iSx(!!errors.name)}
                    onFocus={e => applyFocus(e.target, true, !!errors.name)}
                    onBlur={e  => applyFocus(e.target, false, !!errors.name)}
                  />
                </EMField>

                <EMField label="Email Address" icon={<Mail size={14} />} error={errors.email}>
                  <input
                    type="email"
                    placeholder="you@company.com"
                    value={form.email}
                    onChange={e => update('email', e.target.value)}
                    autoComplete="email"
                    style={iSx(!!errors.email)}
                    onFocus={e => applyFocus(e.target, true, !!errors.email)}
                    onBlur={e  => applyFocus(e.target, false, !!errors.email)}
                  />
                </EMField>

                <EMField label="Phone Number (WhatsApp preferred)" icon={<Phone size={14} />} error={errors.phone}>
                  <input
                    type="tel"
                    placeholder="+91 98765 43210"
                    value={form.phone}
                    onChange={e => update('phone', e.target.value)}
                    autoComplete="tel"
                    style={iSx(!!errors.phone)}
                    onFocus={e => applyFocus(e.target, true, !!errors.phone)}
                    onBlur={e  => applyFocus(e.target, false, !!errors.phone)}
                  />
                </EMField>

                <button
                  type="submit"
                  disabled={submitting}
                  className="btn-gold"
                  style={{
                    width: '100%', justifyContent: 'center',
                    minHeight: '3rem', fontSize: '0.9375rem',
                    marginTop: '0.25rem',
                    opacity: submitting ? 0.72 : 1,
                    cursor: submitting ? 'not-allowed' : 'pointer',
                  }}
                >
                  {submitting
                    ? 'Submitting…'
                    : <><span>Get Free Quote — No Obligation</span><ArrowRight size={15} /></>}
                </button>
              </form>

              {/* ── Trust strip ── */}
              <div style={{
                display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)',
                gap: 0, marginTop: '1.25rem',
                paddingTop: '1rem',
                borderTop: '1px solid rgba(200,169,107,0.1)',
              }}>
                {[
                  { icon: <Shield size={13} />,       label: 'ISO 9001' },
                  { icon: <Star size={13} />,          label: '4.9 ★ · 312' },
                  { icon: <CheckCircle2 size={13} />,  label: 'Free Visit' },
                ].map(({ icon, label }, i) => (
                  <div key={label} style={{
                    textAlign: 'center',
                    borderRight: i < 2 ? '1px solid rgba(200,169,107,0.1)' : 'none',
                    padding: '0 0.5rem',
                  }}>
                    <span style={{ color: 'var(--gold)', display: 'block', marginBottom: 4 }}>{icon}</span>
                    <span style={{ fontFamily: 'var(--font-inter)', fontSize: '0.675rem', fontWeight: 600, color: 'rgba(245,240,232,0.4)' }}>
                      {label}
                    </span>
                  </div>
                ))}
              </div>

              <p style={{
                fontFamily: 'var(--font-inter)', fontSize: '0.675rem',
                color: 'rgba(245,240,232,0.18)',
                textAlign: 'center', marginTop: '0.875rem', lineHeight: 1.5,
              }}>
                🔒 Secure & confidential. No spam. No third-party sharing.
              </p>
            </>
          )}
        </div>
      </div>
    </>
  );
}

/* ─── input style ────────────────────────────────────────────────────────── */
const iSx = (err: boolean): React.CSSProperties => ({
  width: '100%',
  padding: '0.6875rem 0.875rem 0.6875rem 2.5rem',
  borderRadius: 10,
  border: `1.5px solid ${err ? 'rgba(248,113,113,0.55)' : 'rgba(200,169,107,0.18)'}`,
  background: 'rgba(255,255,255,0.035)',
  color: '#F7F5F0',
  fontFamily: 'var(--font-inter)',
  fontSize: '0.9rem',
  outline: 'none',
  transition: 'border-color 0.15s, box-shadow 0.15s',
});

const applyFocus = (el: HTMLInputElement, on: boolean, err = false) => {
  if (on) {
    el.style.borderColor = err ? 'rgba(248,113,113,0.75)' : 'rgba(200,169,107,0.52)';
    el.style.boxShadow   = err ? '0 0 0 3px rgba(248,113,113,0.1)' : '0 0 0 3px rgba(200,169,107,0.09)';
  } else {
    el.style.borderColor = err ? 'rgba(248,113,113,0.55)' : 'rgba(200,169,107,0.18)';
    el.style.boxShadow   = 'none';
  }
};

/* ─── field wrapper ──────────────────────────────────────────────────────── */
function EMField({
  label, icon, error, children,
}: {
  label: string;
  icon: React.ReactNode;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.275rem' }}>
      <label style={{
        fontFamily: 'var(--font-inter)', fontSize: '0.72rem', fontWeight: 600,
        color: 'rgba(245,240,232,0.48)', letterSpacing: '0.03em',
      }}>
        {label}
      </label>
      <div style={{ position: 'relative' }}>
        <span style={{
          position: 'absolute', left: '0.75rem', top: '50%',
          transform: 'translateY(-50%)',
          color: 'rgba(200,169,107,0.4)',
          display: 'flex', pointerEvents: 'none',
        }}>
          {icon}
        </span>
        {children}
      </div>
      {error && (
        <span role="alert" style={{ fontFamily: 'var(--font-inter)', fontSize: '0.7rem', color: '#F87171' }}>
          {error}
        </span>
      )}
    </div>
  );
}
