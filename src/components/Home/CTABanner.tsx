'use client';

import { useState } from 'react';
import { PhoneCall, MessageCircle, Send, CheckCircle2 } from 'lucide-react';

/** SOP Section ⑰ — Final CTA Block
 *  "Start Your Kitchen Project"
 *  Phone + WhatsApp + Quote Form (max 5 fields)
 *  Purpose: Last-chance conversion before footer
 *  SEO: Keyword-rich CTA text (semantic)
 *  CRO: Three options — form, phone, WhatsApp (reduces friction)
 */

type FormData = {
  name:    string;
  company: string;
  city:    string;
  type:    string;
  phone:   string;
};

const initialForm: FormData = { name: '', company: '', city: '', type: '', phone: '' };

export default function CTABanner() {
  const [form,    setForm]    = useState<FormData>(initialForm);
  const [sent,    setSent]    = useState(false);
  const [sending, setSending] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    /* TODO: Wire to form handler / API route / EmailJS / Formspree */
    await new Promise((r) => setTimeout(r, 1200));
    setSent(true);
    setSending(false);
  };

  const inputStyle: React.CSSProperties = {
    width: '100%',
    padding: '0.75rem 1rem',
    borderRadius: '6px',
    border: '1px solid rgba(200,169,107,0.25)',
    background: 'rgba(255,255,255,0.05)',
    color: '#F7F7F5',
    fontFamily: 'var(--font-inter)',
    fontSize: '0.9375rem',
    outline: 'none',
    transition: 'border-color 0.15s',
  };

  return (
    <section
      aria-labelledby="cta-heading"
      style={{ padding: '5rem 0', background: 'var(--charcoal-light)', borderTop: '1px solid rgba(200,169,107,0.15)' }}
    >
      <div className="container mx-auto" style={{ maxWidth: '80rem', padding: '0 1.25rem' }}>

        {/* Header */}
        <div className="text-center mb-14">
          <p className="section-label mb-3">Get Started Today</p>
          <h2
            id="cta-heading"
            style={{
              fontFamily: 'var(--font-playfair)',
              fontSize: 'clamp(1.75rem, 3vw, 2.75rem)',
              color: '#F7F7F5',
              lineHeight: 1.15,
            }}
          >
            Start Your Kitchen Project
          </h2>
          <div className="gold-divider mt-5" aria-hidden="true" />
          <p
            className="mt-6 max-w-xl"
            style={{
              color: '#8A8A80',
              fontSize: '1rem',
              lineHeight: 1.75,
              fontFamily: 'var(--font-inter)',
              marginLeft: 'auto',
              marginRight: 'auto',
              textAlign: 'center',
            }}
          >
            Free site visit · Free kitchen layout · No commitment.
            Our team responds within <strong style={{ color: 'var(--gold)' }}>1 hour</strong>.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">

          {/* Left: Contact options */}
          <div className="flex flex-col gap-5">

            {/* WhatsApp — Primary */}
            <a
              href="https://wa.me/919250346370?text=Hi%20VSD%20International%2C%20I%20need%20commercial%20kitchen%20equipment.%20Please%20share%20details."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-5 rounded-xl transition-all duration-200 hover:-translate-y-1"
              style={{
                background: '#25D366',
                boxShadow: '0 8px 24px rgba(37,211,102,0.3)',
                textDecoration: 'none',
              }}
              aria-label="WhatsApp VSD International now for commercial kitchen equipment"
            >
              <div
                className="flex items-center justify-center w-12 h-12 rounded-full shrink-0"
                style={{ background: 'rgba(255,255,255,0.2)' }}
                aria-hidden="true"
              >
                <MessageCircle size={22} style={{ color: '#fff' }} />
              </div>
              <div>
                <p style={{ fontFamily: 'var(--font-inter)', fontWeight: 700, fontSize: '1rem', color: '#fff' }}>
                  WhatsApp Now — Instant Response
                </p>
                <p style={{ fontFamily: 'var(--font-inter)', fontSize: '0.875rem', color: 'rgba(255,255,255,0.8)' }}>
                  +91-9250346370 · Response within 15 minutes
                </p>
              </div>
            </a>

            {/* Phone */}
            <a
              href="tel:+919250346370"
              className="flex items-center gap-4 p-5 rounded-xl transition-all duration-200 hover:-translate-y-1"
              style={{
                background: 'var(--charcoal-mid)',
                border: '1px solid rgba(200,169,107,0.2)',
                textDecoration: 'none',
              }}
              aria-label="Call VSD International at +91-9250346370"
            >
              <div
                className="flex items-center justify-center w-12 h-12 rounded-full shrink-0"
                style={{ background: 'rgba(200,169,107,0.15)' }}
                aria-hidden="true"
              >
                <PhoneCall size={22} style={{ color: 'var(--gold)' }} />
              </div>
              <div>
                <p style={{ fontFamily: 'var(--font-inter)', fontWeight: 700, fontSize: '1rem', color: '#F7F7F5' }}>
                  Call Us Directly
                </p>
                <p style={{ fontFamily: 'var(--font-inter)', fontSize: '0.875rem', color: '#8A8A80' }}>
                  +91-9250346370 · Mon–Sat, 9 AM – 6 PM
                </p>
              </div>
            </a>

            {/* Industry-specific WhatsApp CTAs */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-2">
              {[
                { label: 'Hotel Project',    msg: 'Hi%2C%20I%20need%20kitchen%20equipment%20for%20a%20hotel%20project.' },
                { label: 'Hospital Kitchen', msg: 'Hi%2C%20I%20need%20kitchen%20equipment%20for%20a%20hospital%20or%20healthcare%20facility.' },
                { label: 'Cloud Kitchen',    msg: 'Hi%2C%20I%20am%20setting%20up%20a%20cloud%20kitchen%20and%20need%20equipment%20guidance.' },
              ].map(({ label, msg }) => (
                <a
                  key={label}
                  href={`https://wa.me/919250346370?text=${msg}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-center py-2.5 px-3 rounded-lg border transition-all duration-150 hover:-translate-y-0.5"
                  style={{
                    borderColor: 'rgba(200,169,107,0.2)',
                    background: 'transparent',
                    color: '#8A8A80',
                    fontSize: '0.8125rem',
                    fontFamily: 'var(--font-inter)',
                    fontWeight: 500,
                    textDecoration: 'none',
                  }}
                  aria-label={`WhatsApp VSD International for ${label}`}
                >
                  💬 {label}
                </a>
              ))}
            </div>

            {/* Trust badges */}
            <div
              className="flex flex-wrap gap-3 pt-2"
              style={{ borderTop: '1px solid rgba(200,169,107,0.1)' }}
            >
              {['ISO 9001 Certified', '15+ Years Experience', 'Free Site Visit', 'Pan India Service'].map((badge) => (
                <span
                  key={badge}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-full"
                  style={{
                    background: 'rgba(200,169,107,0.08)',
                    border: '1px solid rgba(200,169,107,0.15)',
                    fontSize: '0.75rem',
                    color: '#8A8A80',
                    fontFamily: 'var(--font-inter)',
                  }}
                >
                  <CheckCircle2 size={11} style={{ color: 'var(--gold)' }} aria-hidden="true" />
                  {badge}
                </span>
              ))}
            </div>
          </div>

          {/* Right: Quote form */}
          <div
            className="rounded-2xl p-8"
            style={{
              background: 'var(--charcoal)',
              border: '1px solid rgba(200,169,107,0.15)',
              boxShadow: '0 32px 80px rgba(0,0,0,0.4)',
            }}
          >
            {sent ? (
              /* Success state */
              <div className="flex flex-col items-center justify-center text-center py-8 gap-4">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center"
                  style={{ background: 'rgba(72,187,120,0.15)' }}
                  aria-hidden="true"
                >
                  <CheckCircle2 size={32} style={{ color: '#48BB78' }} />
                </div>
                <h3 style={{ fontFamily: 'var(--font-playfair)', fontSize: '1.375rem', color: '#F7F7F5' }}>
                  Enquiry Received!
                </h3>
                <p style={{ fontFamily: 'var(--font-inter)', fontSize: '0.9375rem', color: '#8A8A80', lineHeight: 1.65 }}>
                  Thank you for contacting VSD International. Our team will respond within 1 hour.
                  You can also WhatsApp us for an instant response.
                </p>
                <a
                  href="https://wa.me/919250346370?text=Hi%20VSD%20International%2C%20I%20just%20submitted%20an%20enquiry%20form.%20Please%20confirm%20receipt."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-gold mt-2 inline-flex items-center gap-2"
                >
                  <MessageCircle size={15} /> Follow Up on WhatsApp
                </a>
              </div>
            ) : (
              <>
                <h3
                  style={{
                    fontFamily: 'var(--font-playfair)',
                    fontWeight: 700,
                    fontSize: '1.25rem',
                    color: '#F7F7F5',
                    marginBottom: '0.5rem',
                  }}
                >
                  Request a Free Quote
                </h3>
                <p style={{ fontSize: '0.875rem', color: '#5A5A54', fontFamily: 'var(--font-inter)', marginBottom: '1.5rem' }}>
                  Get a detailed proposal within 24 hours.
                </p>

                <form onSubmit={handleSubmit} className="flex flex-col gap-4" noValidate>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name *"
                    required
                    value={form.name}
                    onChange={handleChange}
                    style={inputStyle}
                    onFocus={(e) => { e.target.style.borderColor = 'rgba(200,169,107,0.6)'; }}
                    onBlur={(e)  => { e.target.style.borderColor = 'rgba(200,169,107,0.25)'; }}
                    aria-label="Your name"
                  />
                  <input
                    type="text"
                    name="company"
                    placeholder="Company / Property Name *"
                    required
                    value={form.company}
                    onChange={handleChange}
                    style={inputStyle}
                    onFocus={(e) => { e.target.style.borderColor = 'rgba(200,169,107,0.6)'; }}
                    onBlur={(e)  => { e.target.style.borderColor = 'rgba(200,169,107,0.25)'; }}
                    aria-label="Company or property name"
                  />
                  <div className="grid grid-cols-2 gap-4">
                    <input
                      type="text"
                      name="city"
                      placeholder="City *"
                      required
                      value={form.city}
                      onChange={handleChange}
                      style={inputStyle}
                      onFocus={(e) => { e.target.style.borderColor = 'rgba(200,169,107,0.6)'; }}
                      onBlur={(e)  => { e.target.style.borderColor = 'rgba(200,169,107,0.25)'; }}
                      aria-label="City"
                    />
                    <select
                      name="type"
                      required
                      value={form.type}
                      onChange={handleChange}
                      style={{ ...inputStyle, cursor: 'pointer' }}
                      onFocus={(e) => { e.target.style.borderColor = 'rgba(200,169,107,0.6)'; }}
                      onBlur={(e)  => { e.target.style.borderColor = 'rgba(200,169,107,0.25)'; }}
                      aria-label="Project type"
                    >
                      <option value="" style={{ background: '#1a1a18' }}>Project Type *</option>
                      <option value="hotel" style={{ background: '#1a1a18' }}>Hotel / Resort</option>
                      <option value="hospital" style={{ background: '#1a1a18' }}>Hospital / Healthcare</option>
                      <option value="restaurant" style={{ background: '#1a1a18' }}>Restaurant / QSR</option>
                      <option value="cloud-kitchen" style={{ background: '#1a1a18' }}>Cloud Kitchen</option>
                      <option value="bakery" style={{ background: '#1a1a18' }}>Bakery / Café</option>
                      <option value="institution" style={{ background: '#1a1a18' }}>Institution / Government</option>
                      <option value="other" style={{ background: '#1a1a18' }}>Other</option>
                    </select>
                  </div>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number (WhatsApp preferred) *"
                    required
                    value={form.phone}
                    onChange={handleChange}
                    style={inputStyle}
                    onFocus={(e) => { e.target.style.borderColor = 'rgba(200,169,107,0.6)'; }}
                    onBlur={(e)  => { e.target.style.borderColor = 'rgba(200,169,107,0.25)'; }}
                    aria-label="Phone number"
                  />
                  <button
                    type="submit"
                    disabled={sending}
                    className="btn-gold flex items-center justify-center gap-2 w-full mt-2"
                    style={{ opacity: sending ? 0.7 : 1, cursor: sending ? 'not-allowed' : 'pointer' }}
                    aria-label="Submit quote request"
                  >
                    {sending ? (
                      <>Processing…</>
                    ) : (
                      <>
                        <Send size={15} aria-hidden="true" /> Get Free Quote
                      </>
                    )}
                  </button>
                </form>

                <p
                  style={{
                    fontSize: '0.75rem',
                    color: '#5A5A54',
                    fontFamily: 'var(--font-inter)',
                    marginTop: '0.75rem',
                    textAlign: 'center',
                  }}
                >
                  No spam. No obligation. We reply within 1 hour (Mon–Sat).
                </p>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
