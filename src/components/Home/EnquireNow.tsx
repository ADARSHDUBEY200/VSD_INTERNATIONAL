'use client';

import { useState, FormEvent } from 'react';
import { ArrowRight, PhoneCall, Mail, MapPin, CheckCircle2 } from 'lucide-react';

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
  'Other Enquiry',
];

type FormState = {
  name: string;
  email: string;
  phone: string;
  service: string;
};

const EMPTY: FormState = { name: '', email: '', phone: '', service: '' };

export default function EnquireNow() {
  const [form, setForm]       = useState<FormState>(EMPTY);
  const [submitting, setSub]  = useState(false);
  const [submitted, setDone]  = useState(false);
  const [errors, setErrors]   = useState<Partial<FormState>>({});

  function validate(): boolean {
    const e: Partial<FormState> = {};
    if (!form.name.trim())                     e.name    = 'Name is required';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email   = 'Valid email required';
    if (!/^\+?[\d\s\-]{7,15}$/.test(form.phone))        e.phone   = 'Valid phone required';
    if (!form.service)                         e.service = 'Please select a service';
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  async function handleSubmit(ev: FormEvent) {
    ev.preventDefault();
    if (!validate()) return;
    setSub(true);
    /* Simulate network delay — replace with real API call */
    await new Promise((r) => setTimeout(r, 1200));
    setSub(false);
    setDone(true);
  }

  function handleChange(field: keyof FormState, value: string) {
    setForm((f) => ({ ...f, [field]: value }));
    if (errors[field]) setErrors((e) => ({ ...e, [field]: undefined }));
  }

  return (
    <section
      aria-labelledby="enquire-heading"
      className="relative overflow-hidden"
      style={{ background: 'var(--charcoal-warm)', padding: '2rem, 0' }}
    >
      {/* -- Gold top border ------------------------------------------------ */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: 0, left: 0, right: 0,
          height: '2px',
          background: 'linear-gradient(90deg, transparent 5%, var(--gold-bright) 35%, var(--gold) 65%, transparent 95%)',
        }}
      />

      {/* -- Background grid ------------------------------------------------ */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          opacity: 0.03,
          backgroundImage: `
            linear-gradient(rgba(201,168,76,0.8) 1px, transparent 1px),
            linear-gradient(90deg, rgba(201,168,76,0.8) 1px, transparent 1px)
          `,
          backgroundSize: '72px 72px',
          maskImage: 'radial-gradient(ellipse 90% 80% at 50% 50%, black 30%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(ellipse 90% 80% at 50% 50%, black 30%, transparent 100%)',
        }}
      />

      {/* -- Corner glows --------------------------------------------------- */}
      <div
        aria-hidden="true"
        className="absolute pointer-events-none"
        style={{
          top: '-80px', right: '-80px',
          width: '450px', height: '450px',
          background: 'radial-gradient(ellipse, rgba(201,168,76,0.09) 0%, transparent 68%)',
          filter: 'blur(50px)',
        }}
      />
      <div
        aria-hidden="true"
        className="absolute pointer-events-none"
        style={{
          bottom: '-60px', left: '-60px',
          width: '350px', height: '350px',
          background: 'radial-gradient(ellipse, rgba(201,168,76,0.07) 0%, transparent 68%)',
          filter: 'blur(40px)',
        }}
      />

      <div className="container mx-auto" style={{ position: 'relative', zIndex: 1 }}>
        <div
          className="grid grid-cols-1 lg:grid-cols-3 gap-5"
          style={{ alignItems: 'center' }}
        >

          {/* -- Left — copy ----------------------------------------------- */}
          <div className='md:col-span-2'>
            <p className="section-label" style={{ marginBottom: '0.875rem' }}>
              Get In Touch
            </p>
            <h2
              id="enquire-heading"
              style={{
                fontFamily: 'var(--font-playfair)',
                fontSize: 'clamp(2rem, 3.2vw, 3rem)',
                color: 'var(--text-on-dark)',
                lineHeight: 1.1,
                letterSpacing: '-0.025em',
                marginBottom: '1.25rem',
              }}
            >
              Let&apos;s Build Your{' '}
              <em className="gold-shimmer" style={{ fontStyle: 'italic', fontWeight: 800 }}>
                Dream Kitchen
              </em>
            </h2>

            <div
              aria-hidden="true"
              style={{
                width: '56px', height: '3px',
                background: 'linear-gradient(90deg, var(--gold-bright), var(--gold))',
                borderRadius: '2px',
                marginBottom: '1.75rem',
              }}
            />

            <p
              style={{
                fontFamily: 'var(--font-inter)',
                fontSize: '1rem',
                color: 'rgba(245,240,232,0.60)',
                lineHeight: 1.8,
                marginBottom: '2.5rem',
                maxWidth: '460px',
              }}
            >
              Fill in the form and our team will contact you within 24 hours with
              a tailored equipment list and free layout plan. No obligation.
            </p>

            {/* Benefit list */}
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2.5rem' }}>
              {[
                'Free kitchen layout & equipment consultation',
                'Best price guarantee on all brands',
                'ISO 9001 certified manufacturing & supply',
                'Pan-India delivery & installation support',
              ].map((item) => (
                <li
                  key={item}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '0.75rem',
                    fontFamily: 'var(--font-inter)',
                    fontSize: '0.9375rem',
                    color: 'rgba(245,240,232,0.70)',
                    lineHeight: 1.55,
                  }}
                >
                  <CheckCircle2
                    size={17}
                    style={{ color: 'var(--gold)', flexShrink: 0, marginTop: '0.1rem' }}
                    aria-hidden="true"
                  />
                  {item}
                </li>
              ))}
            </ul>

            {/* Contact snippets */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
              {[
                { Icon: PhoneCall, label: '+91-9250346370', href: 'tel:+919250346370' },
                { Icon: Mail,      label: 'info@vsdinternational.com', href: 'mailto:info@vsdinternational.com' },
                { Icon: MapPin,    label: 'Delhi NCR, India', href: '#' },
              ].map(({ Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.625rem',
                    fontFamily: 'var(--font-inter)',
                    fontSize: '0.9375rem',
                    color: 'rgba(245,240,232,0.55)',
                    textDecoration: 'none',
                    transition: 'color 0.15s ease',
                  }}
                  className="enquire-contact-link"
                >
                  <Icon
                    size={15}
                    style={{ color: 'var(--gold)', flexShrink: 0 }}
                    aria-hidden="true"
                  />
                  {label}
                </a>
              ))}
            </div>
          </div>

          {/* -- Right — form card ------------------------------------------ */}
          <div
            style={{
              background: 'var(--charcoal-mid)',
              border: '1px solid var(--charcoal-edge)',
              borderRadius: '1.5rem',
              padding: 'clamp(1.75rem, 4vw, 2.75rem)',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            Card gold top accent
            <div
              aria-hidden="true"
              style={{
                position: 'absolute', top: 0, left: 0, right: 0,
                height: '2px',
                background: 'linear-gradient(90deg, var(--gold-bright), var(--gold), var(--gold-deep))',
              }}
            />

            {submitted ? (
              /* -- Success state -- */
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  padding: '2rem 0',
                }}
              >
                <div
                  style={{
                    width: 72,
                    height: 72,
                    borderRadius: '50%',
                    background: 'rgba(201,168,76,0.14)',
                    border: '1.5px solid rgba(201,168,76,0.35)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '1.5rem',
                  }}
                >
                  <CheckCircle2 size={36} style={{ color: 'var(--gold)' }} />
                </div>
                <h3
                  style={{
                    fontFamily: 'var(--font-playfair)',
                    fontSize: '1.625rem',
                    color: 'var(--text-on-dark)',
                    marginBottom: '0.75rem',
                    lineHeight: 1.2,
                  }}
                >
                  Enquiry Received!
                </h3>
                <p
                  style={{
                    fontFamily: 'var(--font-inter)',
                    fontSize: '0.9375rem',
                    color: 'rgba(245,240,232,0.55)',
                    lineHeight: 1.7,
                    maxWidth: '320px',
                  }}
                >
                  Our team will call you within 24 hours with a customised
                  equipment plan. Thank you for choosing VSD International.
                </p>
              </div>
            ) : (
              /* -- Form -- */
              <form
                onSubmit={handleSubmit}
                noValidate
                style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}
              >
                <div>
                  <h3
                    style={{
                      fontFamily: 'var(--font-playfair)',
                      fontSize: '1.375rem',
                      color: 'var(--text-on-dark)',
                      marginBottom: '0.25rem',
                    }}
                  >
                    Send Us an Enquiry
                  </h3>
                  <p
                    style={{
                      fontFamily: 'var(--font-inter)',
                      fontSize: '0.875rem',
                      color: 'rgba(245,240,232,0.40)',
                      marginBottom: '0.5rem',
                    }}
                  >
                    All fields are required. Response within 24 hrs.
                  </p>
                </div>

                {/* Name */}
                <Field
                  label="Full Name"
                  htmlFor="eq-name"
                  error={errors.name}
                >
                  <input
                    id="eq-name"
                    type="text"
                    placeholder="e.g. Ramesh Sharma"
                    value={form.name}
                    onChange={(e) => handleChange('name', e.target.value)}
                    autoComplete="name"
                    className="enquire-input"
                  />
                </Field>

                {/* Email + Phone side by side */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Field
                    label="Email Address"
                    htmlFor="eq-email"
                    error={errors.email}
                  >
                    <input
                      id="eq-email"
                      type="email"
                      placeholder="you@example.com"
                      value={form.email}
                      onChange={(e) => handleChange('email', e.target.value)}
                      autoComplete="email"
                      className="enquire-input"
                    />
                  </Field>

                  <Field
                    label="Phone Number"
                    htmlFor="eq-phone"
                    error={errors.phone}
                  >
                    <input
                      id="eq-phone"
                      type="tel"
                      placeholder="+91 98765 43210"
                      value={form.phone}
                      onChange={(e) => handleChange('phone', e.target.value)}
                      autoComplete="tel"
                      className="enquire-input"
                    />
                  </Field>
                </div>

                {/* Service */}
                <Field
                  label="Service Required"
                  htmlFor="eq-service"
                  error={errors.service}
                >
                  <select
                    id="eq-service"
                    value={form.service}
                    onChange={(e) => handleChange('service', e.target.value)}
                    className="enquire-input enquire-select"
                  >
                    <option value="" disabled>Select a service…</option>
                    {SERVICES.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </Field>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={submitting}
                  className="btn-gold"
                  style={{
                    width: '100%',
                    justifyContent: 'center',
                    marginTop: '0.25rem',
                    minHeight: '3.25rem',
                    fontSize: '1rem',
                    opacity: submitting ? 0.75 : 1,
                    cursor: submitting ? 'not-allowed' : 'pointer',
                  }}
                >
                  {submitting ? (
                    'Sending Enquiry…'
                  ) : (
                    <>
                      Send Enquiry
                      <ArrowRight size={16} aria-hidden="true" />
                    </>
                  )}
                </button>

                <p
                  style={{
                    fontFamily: 'var(--font-inter)',
                    fontSize: '0.75rem',
                    color: 'rgba(245,240,232,0.30)',
                    textAlign: 'center',
                    lineHeight: 1.6,
                  }}
                >
                  By submitting, you agree to be contacted by VSD International.
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
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
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
          }}
        >
          {error}
        </span>
      )}
    </div>
  );
}
