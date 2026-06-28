'use client';

/* ───────────────────────────────────────────────────────────────────────────
   LeadForm — phone-first conversion form for the paid-ads landing page.
   DotCom Secrets: minimal friction (only Name + Phone required) maximises
   opt-ins; the extra City / Project-Type fields qualify the lead without
   killing conversion. Posts to the shared /api/enquiries endpoint.
   ─────────────────────────────────────────────────────────────────────────── */

import { useState } from 'react';
import { ArrowRight, CheckCircle2, ShieldCheck, Clock } from 'lucide-react';

type FormState = { name: string; phone: string; city: string; service: string; email: string };
const EMPTY: FormState = { name: '', phone: '', city: '', service: '', email: '' };

const PROJECT_TYPES = [
  'Hotel Kitchen',
  'Restaurant Kitchen',
  'Cloud Kitchen',
  'Hospital / Institutional',
  'Cafe / Bakery',
  'Bar / Banquet',
  'Other',
];

export default function LeadForm({
  id,
  heading = 'Get My Free Kitchen Quote',
  subheading = 'Free layout + itemised quote. Reply within 1 business hour.',
  ctaLabel = 'Get My Free Quote',
}: {
  id?: string;
  heading?: string;
  subheading?: string;
  ctaLabel?: string;
}) {
  const [form, setForm] = useState<FormState>(EMPTY);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Partial<FormState>>({});

  function validate(): boolean {
    const e: Partial<FormState> = {};
    if (!form.name.trim()) e.name = 'Please enter your name';
    if (!/^\d{10}$/.test(form.phone)) e.phone = 'Enter a valid 10-digit phone number';
    if (form.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = 'Enter a valid email';
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  async function handleSubmit() {
    if (!validate()) return;
    setSubmitting(true);
    try {
      const res = await fetch('/api/enquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name,
          phone: form.phone,
          email: form.email || undefined,
          city: form.city || undefined,
          service: form.service || undefined,
          source: 'lp_commercial_kitchen',
        }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        setErrors({ name: data.error ?? 'Submission failed. Please call us instead.' });
        return;
      }
      setSubmitted(true);
    } catch {
      setErrors({ name: 'Network error. Please call 09250346370.' });
    } finally {
      setSubmitting(false);
    }
  }

  function update(field: keyof FormState, value: string) {
    setForm((f) => ({ ...f, [field]: value }));
    if (errors[field]) setErrors((e) => ({ ...e, [field]: undefined }));
  }

  return (
    <div
      id={id}
      style={{
        background: 'var(--charcoal-mid)',
        border: '1px solid rgba(201,168,76,0.22)',
        borderRadius: '1.25rem',
        padding: 'clamp(1.25rem, 2.5vw, 2rem)',
        position: 'relative',
        overflow: 'hidden',
        boxShadow: '0 24px 64px rgba(0,0,0,0.4)',
        scrollMarginTop: '90px',
      }}
    >
      {/* Gold top accent */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '3px',
          background: 'linear-gradient(90deg, var(--gold-bright), var(--gold), var(--gold-deep))',
        }}
      />

      {submitted ? (
        <div style={{ textAlign: 'center', padding: '1.5rem 0' }}>
          <div
            style={{
              width: 64,
              height: 64,
              borderRadius: '50%',
              background: 'rgba(201,168,76,0.14)',
              border: '1.5px solid rgba(201,168,76,0.4)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 1.25rem',
            }}
          >
            <CheckCircle2 size={32} style={{ color: 'var(--gold)' }} />
          </div>
          <h3
            style={{
              fontFamily: 'var(--font-playfair)',
              fontSize: '1.5rem',
              color: 'var(--text-on-dark)',
              marginBottom: '0.625rem',
            }}
          >
            Request Received!
          </h3>
          <p
            style={{
              fontFamily: 'var(--font-inter)',
              fontSize: '0.9rem',
              color: 'rgba(245,240,232,0.55)',
              lineHeight: 1.65,
              maxWidth: '300px',
              margin: '0 auto',
            }}
          >
            A kitchen expert will call you within <strong style={{ color: 'var(--gold)' }}>1 business hour</strong> with
            your free layout and quote. Prefer to talk now? Call{' '}
            <a href="tel:+919250346370" style={{ color: 'var(--gold)', fontWeight: 600 }}>
              09250346370
            </a>
            .
          </p>
        </div>
      ) : (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            void handleSubmit();
          }}
          noValidate
          style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem', position: 'relative', zIndex: 1 }}
        >
          <div>
            <h3
              style={{
                fontFamily: 'var(--font-playfair)',
                fontSize: '1.375rem',
                color: 'var(--text-on-dark)',
                lineHeight: 1.2,
                marginBottom: '0.3rem',
              }}
            >
              {heading}
            </h3>
            <p style={{ fontFamily: 'var(--font-inter)', fontSize: '0.8rem', color: 'rgba(245,240,232,0.45)' }}>
              {subheading}
            </p>
          </div>

          <input
            type="text"
            placeholder="Your name*"
            value={form.name}
            onChange={(e) => update('name', e.target.value)}
            autoComplete="name"
            className="enquire-input"
            aria-label="Your name"
          />
          {errors.name && <Err msg={errors.name} />}

          <input
            type="tel"
            placeholder="10-digit phone number*"
            value={form.phone}
            onChange={(e) => update('phone', e.target.value.replace(/\D/g, '').slice(0, 10))}
            autoComplete="tel"
            inputMode="numeric"
            pattern="[0-9]*"
            maxLength={10}
            className="enquire-input"
            aria-label="10-digit phone number"
          />
          {errors.phone && <Err msg={errors.phone} />}

          <div className="lp-form-row-2col">
            <input
              type="text"
              placeholder="City"
              value={form.city}
              onChange={(e) => update('city', e.target.value)}
              autoComplete="address-level2"
              className="enquire-input"
              aria-label="City"
            />
            <select
              value={form.service}
              onChange={(e) => update('service', e.target.value)}
              className="enquire-input"
              aria-label="Project type"
              style={{ color: form.service ? 'var(--text-on-dark)' : 'rgba(245,240,232,0.28)', cursor: 'pointer' }}
            >
              <option value="" disabled>
                Project type
              </option>
              {PROJECT_TYPES.map((t) => (
                <option key={t} value={t} style={{ color: '#111' }}>
                  {t}
                </option>
              ))}
            </select>
          </div>

          <input
            type="email"
            placeholder="Email (optional)"
            value={form.email}
            onChange={(e) => update('email', e.target.value)}
            autoComplete="email"
            className="enquire-input"
            aria-label="Email (optional)"
          />
          {errors.email && <Err msg={errors.email} />}

          <button
            type="submit"
            disabled={submitting}
            className="btn-gold"
            style={{
              width: '100%',
              minHeight: '3rem',
              fontSize: '1rem',
              marginTop: '0.25rem',
              opacity: submitting ? 0.75 : 1,
              cursor: submitting ? 'not-allowed' : 'pointer',
            }}
          >
            {submitting ? 'Sending…' : (
              <>
                {ctaLabel} <ArrowRight size={16} aria-hidden="true" />
              </>
            )}
          </button>

          {/* Risk-reversal / trust line */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: '0.4rem 1rem',
              marginTop: '0.15rem',
            }}
          >
            <Trust Icon={ShieldCheck} label="100% free, no obligation" />
            <Trust Icon={Clock} label="Reply in 1 business hour" />
          </div>
        </form>
      )}
    </div>
  );
}

function Err({ msg }: { msg: string }) {
  return (
    <span role="alert" style={{ fontFamily: 'var(--font-inter)', fontSize: '0.72rem', color: '#F87171', marginTop: '-0.4rem' }}>
      {msg}
    </span>
  );
}

function Trust({ Icon, label }: { Icon: typeof ShieldCheck; label: string }) {
  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '0.3rem',
        fontFamily: 'var(--font-inter)',
        fontSize: '0.7rem',
        color: 'rgba(245,240,232,0.4)',
      }}
    >
      <Icon size={12} style={{ color: 'var(--gold)' }} aria-hidden="true" />
      {label}
    </span>
  );
}
