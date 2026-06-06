'use client';

import { useState, FormEvent } from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

const SERVICES = [
  'Commercial Kitchen Equipment Supply',
  'Kitchen Design & Layout',
  'Turnkey Kitchen Project',
  'Installation & Commissioning',
  'AMC & After-Sales Service',
  'International Brand Equipment (Rational / Robot Coupe)',
  'Bakery Equipment',
  'Refrigeration Systems',
  'Exhaust & Ventilation',
  'Custom SS Fabrication',
  'Other Enquiry',
];

const BUDGETS = [
  'Below ₹5 Lakhs',
  '₹5 – ₹15 Lakhs',
  '₹15 – ₹30 Lakhs',
  '₹30 – ₹60 Lakhs',
  'Above ₹60 Lakhs',
  'Not Sure / Need Guidance',
];

type FormState = {
  name: string;
  email: string;
  phone: string;
  company: string;
  city: string;
  service: string;
  budget: string;
  message: string;
};

const EMPTY: FormState = {
  name: '', email: '', phone: '', company: '', city: '',
  service: '', budget: '', message: '',
};

type Errors = Partial<Record<keyof FormState, string>>;

export default function ContactForm() {
  const [form, setForm]      = useState<FormState>(EMPTY);
  const [submitting, setSub] = useState(false);
  const [submitted, setDone] = useState(false);
  const [errors, setErrors]  = useState<Errors>({});

  function validate(): boolean {
    const e: Errors = {};
    if (!form.name.trim())
      e.name = 'Full name is required';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = 'Valid email address required';
    if (!/^\+?[\d\s\-]{7,15}$/.test(form.phone))
      e.phone = 'Valid phone number required';
    if (!form.service)
      e.service = 'Please select a service';
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  async function handleSubmit(ev: FormEvent) {
    ev.preventDefault();
    if (!validate()) return;
    setSub(true);
    await new Promise((r) => setTimeout(r, 1400));
    setSub(false);
    setDone(true);
  }

  function set(field: keyof FormState, value: string) {
    setForm((f) => ({ ...f, [field]: value }));
    if (errors[field]) setErrors((e) => ({ ...e, [field]: undefined }));
  }

  const inputBase: React.CSSProperties = {
    width: '100%',
    background: 'rgba(255,255,255,0.05)',
    border: '1.5px solid rgba(201,168,76,0.18)',
    borderRadius: 10,
    padding: '0.8125rem 1rem',
    fontFamily: 'var(--font-inter)',
    fontSize: '0.9375rem',
    color: 'var(--text-on-dark)',
    outline: 'none',
    transition: 'border-color 0.15s ease, background 0.15s ease',
  };

  if (submitted) {
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          padding: '3.5rem 1.5rem',
          gap: '1.25rem',
        }}
      >
        <div
          style={{
            width: 80, height: 80, borderRadius: '50%',
            background: 'rgba(201,168,76,0.12)',
            border: '2px solid rgba(201,168,76,0.35)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}
        >
          <CheckCircle2 size={38} style={{ color: 'var(--gold)' }} aria-hidden="true" />
        </div>
        <h3
          style={{
            fontFamily: 'var(--font-playfair)',
            fontSize: '1.75rem',
            fontWeight: 800,
            color: 'var(--text-on-dark)',
            letterSpacing: '-0.02em',
            lineHeight: 1.15,
          }}
        >
          Message Sent Successfully!
        </h3>
        <p
          style={{
            fontFamily: 'var(--font-inter)',
            fontSize: '1rem',
            color: 'rgba(245,240,232,0.60)',
            lineHeight: 1.75,
            maxWidth: 360,
          }}
        >
          Our kitchen expert will call you within <strong style={{ color: 'var(--gold)', fontWeight: 700 }}>24 hours</strong> with a tailored
          equipment plan and free layout consultation.
        </p>
        <p
          style={{
            fontFamily: 'var(--font-inter)',
            fontSize: '0.8125rem',
            color: 'rgba(245,240,232,0.35)',
          }}
        >
          Thank you for choosing VSD International.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      style={{ display: 'flex', flexDirection: 'column', gap: '1.125rem' }}
    >
      {/* Name + Phone */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Field label="Full Name *" htmlFor="ct-name" error={errors.name}>
          <input
            id="ct-name"
            type="text"
            placeholder="e.g. Ramesh Sharma"
            value={form.name}
            onChange={(e) => set('name', e.target.value)}
            autoComplete="name"
            style={inputBase}
            onFocus={(e) => (e.currentTarget.style.borderColor = 'rgba(201,168,76,0.55)')}
            onBlur={(e) => (e.currentTarget.style.borderColor = errors.name ? '#F87171' : 'rgba(201,168,76,0.18)')}
          />
        </Field>
        <Field label="Phone Number *" htmlFor="ct-phone" error={errors.phone}>
          <input
            id="ct-phone"
            type="tel"
            placeholder="+91 98765 43210"
            value={form.phone}
            onChange={(e) => set('phone', e.target.value)}
            autoComplete="tel"
            style={inputBase}
            onFocus={(e) => (e.currentTarget.style.borderColor = 'rgba(201,168,76,0.55)')}
            onBlur={(e) => (e.currentTarget.style.borderColor = errors.phone ? '#F87171' : 'rgba(201,168,76,0.18)')}
          />
        </Field>
      </div>

      {/* Email */}
      <Field label="Email Address *" htmlFor="ct-email" error={errors.email}>
        <input
          id="ct-email"
          type="email"
          placeholder="you@company.com"
          value={form.email}
          onChange={(e) => set('email', e.target.value)}
          autoComplete="email"
          style={inputBase}
          onFocus={(e) => (e.currentTarget.style.borderColor = 'rgba(201,168,76,0.55)')}
          onBlur={(e) => (e.currentTarget.style.borderColor = errors.email ? '#F87171' : 'rgba(201,168,76,0.18)')}
        />
      </Field>

      {/* Company + City */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Field label="Company / Property Name" htmlFor="ct-company" error={errors.company}>
          <input
            id="ct-company"
            type="text"
            placeholder="e.g. Radisson Hotel Delhi"
            value={form.company}
            onChange={(e) => set('company', e.target.value)}
            autoComplete="organization"
            style={inputBase}
            onFocus={(e) => (e.currentTarget.style.borderColor = 'rgba(201,168,76,0.55)')}
            onBlur={(e) => (e.currentTarget.style.borderColor = 'rgba(201,168,76,0.18)')}
          />
        </Field>
        <Field label="City" htmlFor="ct-city" error={errors.city}>
          <input
            id="ct-city"
            type="text"
            placeholder="e.g. New Delhi"
            value={form.city}
            onChange={(e) => set('city', e.target.value)}
            autoComplete="address-level2"
            style={inputBase}
            onFocus={(e) => (e.currentTarget.style.borderColor = 'rgba(201,168,76,0.55)')}
            onBlur={(e) => (e.currentTarget.style.borderColor = 'rgba(201,168,76,0.18)')}
          />
        </Field>
      </div>

      {/* Service + Budget */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Field label="Service Required *" htmlFor="ct-service" error={errors.service}>
          <select
            id="ct-service"
            value={form.service}
            onChange={(e) => set('service', e.target.value)}
            style={{
              ...inputBase,
              appearance: 'none',
              WebkitAppearance: 'none',
              cursor: 'pointer',
              color: form.service ? 'var(--text-on-dark)' : 'rgba(245,240,232,0.35)',
            }}
            onFocus={(e) => (e.currentTarget.style.borderColor = 'rgba(201,168,76,0.55)')}
            onBlur={(e) => (e.currentTarget.style.borderColor = errors.service ? '#F87171' : 'rgba(201,168,76,0.18)')}
          >
            <option value="" disabled style={{ color: '#666' }}>Select service…</option>
            {SERVICES.map((s) => (
              <option key={s} value={s} style={{ color: '#111', background: '#fff' }}>{s}</option>
            ))}
          </select>
        </Field>
        <Field label="Budget Range" htmlFor="ct-budget" error={errors.budget}>
          <select
            id="ct-budget"
            value={form.budget}
            onChange={(e) => set('budget', e.target.value)}
            style={{
              ...inputBase,
              appearance: 'none',
              WebkitAppearance: 'none',
              cursor: 'pointer',
              color: form.budget ? 'var(--text-on-dark)' : 'rgba(245,240,232,0.35)',
            }}
            onFocus={(e) => (e.currentTarget.style.borderColor = 'rgba(201,168,76,0.55)')}
            onBlur={(e) => (e.currentTarget.style.borderColor = 'rgba(201,168,76,0.18)')}
          >
            <option value="" style={{ color: '#666' }}>Approximate budget…</option>
            {BUDGETS.map((b) => (
              <option key={b} value={b} style={{ color: '#111', background: '#fff' }}>{b}</option>
            ))}
          </select>
        </Field>
      </div>

      {/* Message */}
      <Field label="Tell Us About Your Project" htmlFor="ct-message" error={errors.message}>
        <textarea
          id="ct-message"
          rows={4}
          placeholder="Describe your kitchen requirement — type of establishment, equipment needed, timeline, or any specific questions…"
          value={form.message}
          onChange={(e) => set('message', e.target.value)}
          style={{
            ...inputBase,
            resize: 'vertical',
            minHeight: '7rem',
            lineHeight: 1.65,
          }}
          onFocus={(e) => (e.currentTarget.style.borderColor = 'rgba(201,168,76,0.55)')}
          onBlur={(e) => (e.currentTarget.style.borderColor = 'rgba(201,168,76,0.18)')}
        />
      </Field>

      {/* Submit */}
      <button
        type="submit"
        disabled={submitting}
        className="btn-gold inline-flex items-center justify-center gap-2"
        style={{
          width: '100%',
          minHeight: '3.375rem',
          fontSize: '1.0625rem',
          fontWeight: 700,
          borderRadius: 10,
          marginTop: '0.25rem',
          opacity: submitting ? 0.75 : 1,
          cursor: submitting ? 'not-allowed' : 'pointer',
          letterSpacing: '0.01em',
        }}
      >
        {submitting ? (
          <>
            <span
              style={{
                width: 18, height: 18, border: '2.5px solid rgba(26,18,8,0.3)',
                borderTopColor: '#1A1208', borderRadius: '50%',
                animation: 'spin 0.7s linear infinite',
                display: 'inline-block',
              }}
            />
            Sending…
          </>
        ) : (
          <>
            Send My Enquiry
            <ArrowRight size={17} aria-hidden="true" />
          </>
        )}
      </button>

      <p
        style={{
          fontFamily: 'var(--font-inter)',
          fontSize: '0.75rem',
          color: 'rgba(245,240,232,0.28)',
          textAlign: 'center',
          lineHeight: 1.65,
        }}
      >
        By submitting, you agree to be contacted by VSD International.
        We respect your privacy and never share your data.
      </p>

      <style>{`
        @keyframes spin { to { transform: rotate(360deg); } }
      `}</style>
    </form>
  );
}

/* --- Field wrapper -------------------------------------------------------- */
function Field({
  label,
  htmlFor,
  error,
  children,
}: {
  label: string;
  htmlFor: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.375rem' }}>
      <label
        htmlFor={htmlFor}
        style={{
          fontFamily: 'var(--font-inter)',
          fontSize: '0.8125rem',
          fontWeight: 600,
          color: 'rgba(245,240,232,0.65)',
          letterSpacing: '0.02em',
        }}
      >
        {label}
      </label>
      {children}
      {error && (
        <span
          role="alert"
          style={{
            fontFamily: 'var(--font-inter)',
            fontSize: '0.75rem',
            color: '#F87171',
            lineHeight: 1.4,
          }}
        >
          {error}
        </span>
      )}
    </div>
  );
}
