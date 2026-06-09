'use client';

import { useState } from 'react';
import { ArrowRight, PhoneCall, Mail, MapPin, CheckCircle2 } from 'lucide-react';

type FormState = { name: string; email: string; phone: string };
const EMPTY: FormState = { name: '', email: '', phone: '' };

export default function EnquireNow() {
  const [form, setForm]      = useState<FormState>(EMPTY);
  const [submitting, setSub] = useState(false);
  const [submitted, setDone] = useState(false);
  const [errors, setErrors]  = useState<Partial<FormState>>({});

  function validate(): boolean {
    const e: Partial<FormState> = {};
    if (!form.name.trim())                                e.name  = 'Name is required';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Valid email required';
    if (!/^\+?[\d\s\-]{7,15}$/.test(form.phone))        e.phone = 'Valid phone required';
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  async function handleSubmit() {
    if (!validate()) return;
    setSub(true);
    try {
      const res = await fetch('/api/enquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, source: 'home_form' }),
      });
      if (!res.ok) {
        const data = await res.json();
        setErrors({ name: data.error ?? 'Submission failed. Please try again.' });
        return;
      }
      setDone(true);
    } catch {
      setErrors({ name: 'Network error. Please try again.' });
    } finally {
      setSub(false);
    }
  }

  function handleChange(field: keyof FormState, value: string) {
    setForm((f) => ({ ...f, [field]: value }));
    if (errors[field]) setErrors((e) => ({ ...e, [field]: undefined }));
  }

  return (
    <section
      aria-labelledby="enquire-heading"
      className="relative overflow-hidden"
      style={{ background: 'var(--charcoal-warm)', padding: '2rem 0' }}
    >
      {/* Gold top border */}
      <div aria-hidden="true" style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: '2px',
        background: 'linear-gradient(90deg, transparent 5%, var(--gold-bright) 35%, var(--gold) 65%, transparent 95%)',
      }} />

      {/* Background grid */}
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none" style={{
        opacity: 0.03,
        backgroundImage: `linear-gradient(rgba(201,168,76,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,0.8) 1px, transparent 1px)`,
        backgroundSize: '72px 72px',
        maskImage: 'radial-gradient(ellipse 90% 80% at 50% 50%, black 30%, transparent 100%)',
        WebkitMaskImage: 'radial-gradient(ellipse 90% 80% at 50% 50%, black 30%, transparent 100%)',
      }} />

      {/* Corner glows */}
      <div aria-hidden="true" className="absolute pointer-events-none" style={{
        top: '-80px', right: '-80px', width: '400px', height: '400px',
        background: 'radial-gradient(ellipse, rgba(201,168,76,0.09) 0%, transparent 68%)',
        filter: 'blur(50px)',
      }} />
      <div aria-hidden="true" className="absolute pointer-events-none" style={{
        bottom: '-60px', left: '-60px', width: '320px', height: '320px',
        background: 'radial-gradient(ellipse, rgba(201,168,76,0.07) 0%, transparent 68%)',
        filter: 'blur(40px)',
      }} />

      <div className="container mx-auto" style={{ position: 'relative', zIndex: 1 }}>
        <div
          className="grid grid-cols-1 lg:grid-cols-2"
          style={{ gap: 'clamp(2rem, 5vw, 4rem)', alignItems: 'center' }}
        >

          {/* ── Left — copy ─────────────────────────────────────────────── */}
          <div>
            <p className="section-label" style={{ marginBottom: '0.5rem' }}>
              Get In Touch
            </p>

            <h2
              id="enquire-heading"
              style={{
                fontFamily: 'var(--font-playfair)',
                fontSize: 'clamp(1.625rem, 2.6vw, 2.375rem)',
                color: 'var(--text-on-dark)',
                lineHeight: 1.15,
                letterSpacing: '-0.02em',
                marginBottom: '0.875rem',
              }}
            >
              Let&apos;s Build Your{' '}
              <em className="gold-shimmer" style={{fontWeight: 800 }}>
                Dream Kitchen
              </em>
            </h2>

            <div aria-hidden="true" style={{
              width: '44px', height: '2.5px',
              background: 'linear-gradient(90deg, var(--gold-bright), var(--gold))',
              borderRadius: '2px', marginBottom: '1rem',
            }} />

            <p style={{
              fontFamily: 'var(--font-inter)',
              fontSize: '0.875rem',
              color: 'rgba(245,240,232,0.55)',
              lineHeight: 1.7,
              marginBottom: '1.25rem',
            }}>
              Our team will contact you within 24 hours with a tailored equipment
              list and free layout plan.
            </p>

            {/* Benefits — 2-column grid saves ~half the vertical space */}
            <ul
              className="grid grid-cols-1 sm:grid-cols-2"
              style={{ listStyle: 'none', gap: '0.55rem 1rem', marginBottom: '1.5rem' }}
            >
              {[
                'Free kitchen layout consultation',
                'Best price guarantee on all brands',
                'ISO 9001 certified supply',
                'Pan-India delivery & installation',
              ].map((item) => (
                <li key={item} style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '0.55rem',
                  fontFamily: 'var(--font-inter)',
                  fontSize: '0.8375rem',
                  color: 'rgba(245,240,232,0.65)',
                  lineHeight: 1.45,
                }}>
                  <CheckCircle2
                    size={14}
                    style={{ color: 'var(--gold)', flexShrink: 0, marginTop: '0.15rem' }}
                    aria-hidden="true"
                  />
                  {item}
                </li>
              ))}
            </ul>

            {/* Contact info — horizontal wrap row */}
            <div style={{
              paddingTop: '1.125rem',
              borderTop: '1px solid rgba(201,168,76,0.13)',
              display: 'flex',
              flexWrap: 'wrap',
              gap: '0.625rem 1.75rem',
            }}>
              {[
                { Icon: PhoneCall, label: '+91-9250346370',           href: 'tel:+919250346370' },
                { Icon: Mail,      label: 'info@vsdinternational.com', href: 'mailto:info@vsdinternational.com' },
                { Icon: MapPin,    label: 'Delhi NCR, India',           href: '#' },
              ].map(({ Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  className="enquire-contact-link"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.45rem',
                    fontFamily: 'var(--font-inter)',
                    fontSize: '0.8125rem',
                    color: 'rgba(245,240,232,0.48)',
                    textDecoration: 'none',
                    transition: 'color 0.15s ease',
                  }}
                >
                  <Icon size={13} style={{ color: 'var(--gold)', flexShrink: 0 }} aria-hidden="true" />
                  {label}
                </a>
              ))}
            </div>
          </div>

          {/* ── Right — form card ────────────────────────────────────────── */}
          <div style={{
            background: 'var(--charcoal-mid)',
            border: '1px solid rgba(201,168,76,0.18)',
            borderRadius: '1.25rem',
            padding: 'clamp(1rem, 2vw, 2rem)',
            position: 'relative',
            overflow: 'hidden',
            boxShadow: '0 20px 56px rgba(0,0,0,0.35)',
          }}>
            {/* Gold top accent */}
            <div aria-hidden="true" style={{
              position: 'absolute', top: 0, left: 0, right: 0, height: '2px',
              background: 'linear-gradient(90deg, var(--gold-bright), var(--gold), var(--gold-deep))',
            }} />
            {/* Subtle inner top glow */}
            <div aria-hidden="true" style={{
              position: 'absolute', top: 0, left: 0, right: 0, height: '80px',
              background: 'linear-gradient(180deg, rgba(201,168,76,0.05) 0%, transparent 100%)',
              pointerEvents: 'none',
            }} />

            {submitted ? (
              /* ── Success state ── */
              <div style={{
                display: 'flex', flexDirection: 'column',
                alignItems: 'center', textAlign: 'center', padding: '2rem 0',
              }}>
                <div style={{
                  width: 60, height: 60, borderRadius: '50%',
                  background: 'rgba(201,168,76,0.14)',
                  border: '1.5px solid rgba(201,168,76,0.35)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  marginBottom: '1.125rem',
                }}>
                  <CheckCircle2 size={30} style={{ color: 'var(--gold)' }} />
                </div>
                <h3 style={{
                  fontFamily: 'var(--font-playfair)', fontSize: '1.5rem',
                  color: 'var(--text-on-dark)', marginBottom: '0.625rem', lineHeight: 1.2,
                }}>
                  Enquiry Received!
                </h3>
                <p style={{
                  fontFamily: 'var(--font-inter)', fontSize: '0.9rem',
                  color: 'rgba(245,240,232,0.52)', lineHeight: 1.65, maxWidth: '280px',
                }}>
                  Our team will call you within 24 hours with a customised equipment plan.
                  Thank you for choosing VSD International.
                </p>
              </div>
            ) : (
              /* ── Form ── */
              <form
                onSubmit={(e) => { e.preventDefault(); void handleSubmit(); }}
                noValidate
                style={{ display: 'flex', flexDirection: 'column', gap: '1.0625rem', position: 'relative', zIndex: 1 }}
              >
                {/* Form title */}
                <div style={{ marginBottom: '0.125rem' }}>
                  <h3 style={{
                    fontFamily: 'var(--font-playfair)', fontSize: '1.25rem',
                    color: 'var(--text-on-dark)', marginBottom: '0.2rem', lineHeight: 1.2,
                  }}>
                    Send Us an Enquiry
                  </h3>
                  <p style={{
                    fontFamily: 'var(--font-inter)', fontSize: '0.775rem',
                    color: 'rgba(245,240,232,0.34)',
                  }}>
                    We respond within 24 hours.
                  </p>
                </div>

                {/* Full Name */}
                <Field label="Full Name" htmlFor="eq-name" error={errors.name}>
                  <input
                    id="eq-name"
                    type="text"
                    placeholder="e.g. Ramesh Sharma"
                    value={form.name}
                    onChange={(e) => handleChange('name', e.target.value)}
                    autoComplete="name"
                    className="enquire-input"
                    style={{ padding: '0.625rem 0.875rem' }}
                  />
                </Field>

                {/* Email Address */}
                <Field label="Email Address" htmlFor="eq-email" error={errors.email}>
                  <input
                    id="eq-email"
                    type="email"
                    placeholder="you@example.com"
                    value={form.email}
                    onChange={(e) => handleChange('email', e.target.value)}
                    autoComplete="email"
                    className="enquire-input"
                    style={{ padding: '0.625rem 0.875rem' }}
                  />
                </Field>

                {/* Phone Number */}
                <Field label="Phone Number" htmlFor="eq-phone" error={errors.phone}>
                  <input
                    id="eq-phone"
                    type="tel"
                    placeholder="+91 98765 43210"
                    value={form.phone}
                    onChange={(e) => handleChange('phone', e.target.value)}
                    autoComplete="tel"
                    className="enquire-input"
                    style={{ padding: '0.625rem 0.875rem' }}
                  />
                </Field>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={submitting}
                  className="btn-gold"
                  style={{
                    width: '100%',
                    justifyContent: 'center',
                    minHeight: '2.875rem',
                    fontSize: '0.9375rem',
                    letterSpacing: '0.01em',
                    marginTop: '0.25rem',
                    opacity: submitting ? 0.75 : 1,
                    cursor: submitting ? 'not-allowed' : 'pointer',
                  }}
                >
                  {submitting ? (
                    'Sending…'
                  ) : (
                    <>Send Enquiry <ArrowRight size={15} aria-hidden="true" /></>
                  )}
                </button>

                <p style={{
                  fontFamily: 'var(--font-inter)', fontSize: '0.7rem',
                  color: 'rgba(245,240,232,0.24)', textAlign: 'center', lineHeight: 1.6,
                }}>
                  We respect your privacy and do not share your data.
                </p>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}

/* ── Field wrapper ─────────────────────────────────────────────────────────── */
function Field({
  label, htmlFor, error, children,
}: {
  label: string; htmlFor: string; error?: string; children: React.ReactNode;
}) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
      <label
        htmlFor={htmlFor}
        style={{
          fontFamily: 'var(--font-inter)', fontSize: '0.775rem', fontWeight: 600,
          color: 'rgba(245,240,232,0.60)', letterSpacing: '0.02em',
        }}
      >
        {label}
      </label>
      {children}
      {error && (
        <span role="alert" style={{ fontFamily: 'var(--font-inter)', fontSize: '0.725rem', color: '#F87171' }}>
          {error}
        </span>
      )}
    </div>
  );
}
