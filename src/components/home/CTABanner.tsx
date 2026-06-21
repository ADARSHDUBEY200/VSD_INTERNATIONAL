'use client';

import { useState } from 'react';
import { PhoneCall, Send, CheckCircle2, Clock, Star, Shield } from 'lucide-react';

const WaIcon = ({ size = 20, fill = 'white' }: { size?: number; fill?: string }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill={fill} xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
  </svg>
);

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.phone.trim()) return;
    setSending(true);
    try {
      const res = await fetch('/api/enquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name:    form.name,
          company: form.company,
          city:    form.city,
          service: form.type,
          phone:   form.phone,
          source:  'cta_banner',
        }),
      });
      if (!res.ok) throw new Error('failed');
      setSent(true);
    } catch {
      /* fail silently — user can use WhatsApp */
    } finally {
      setSending(false);
    }
  };

  return (
    <section
      id="get-a-quote"
      aria-labelledby="cta-heading"
      style={{
        padding: 'clamp(1.75rem, 6vw, 2.5rem) 0',
        background: 'var(--charcoal-light)',
        borderTop: '1px solid rgba(200,169,107,0.15)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background decorations */}
      <div aria-hidden="true" style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        opacity: 0.025,
        backgroundImage: `linear-gradient(rgba(200,169,107,0.9) 1px, transparent 1px), linear-gradient(90deg, rgba(200,169,107,0.9) 1px, transparent 1px)`,
        backgroundSize: '64px 64px',
        maskImage: 'radial-gradient(ellipse 85% 75% at 50% 50%, black 20%, transparent 100%)',
        WebkitMaskImage: 'radial-gradient(ellipse 85% 75% at 50% 50%, black 20%, transparent 100%)',
      }} />
      <div aria-hidden="true" style={{
        position: 'absolute', top: -120, right: -120,
        width: 500, height: 500,
        background: 'radial-gradient(ellipse, rgba(200,169,107,0.07) 0%, transparent 65%)',
        filter: 'blur(60px)', pointerEvents: 'none',
      }} />
      <div aria-hidden="true" style={{
        position: 'absolute', bottom: -80, left: -80,
        width: 400, height: 400,
        background: 'radial-gradient(ellipse, rgba(37,211,102,0.04) 0%, transparent 65%)',
        filter: 'blur(50px)', pointerEvents: 'none',
      }} />

      {/* Gold top line */}
      <div aria-hidden="true" style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: 2,
        background: 'linear-gradient(90deg, transparent 5%, var(--gold-bright) 35%, var(--gold) 65%, transparent 95%)',
      }} />

      <div className="container mx-auto" style={{ maxWidth: '80rem', padding: '0 1.25rem', position: 'relative', zIndex: 1 }}>

        {/* Section header */}
        <div className="text-center mb-8 sm:mb-12">
          <p className="section-label mb-4 sm:mb-5">Get Started Today</p>
          <h2
            id="cta-heading"
            style={{
              fontFamily: 'var(--font-playfair)',
              fontSize: 'clamp(1.625rem, 3.2vw, 2.875rem)',
              color: '#F7F5F0',
              lineHeight: 1.18, letterSpacing: '-0.02em',
            }}
          >
            Get a Free Quote for Your Kitchen Project
          </h2>
          <div className="gold-divider mt-4 mb-4 sm:mt-5 sm:mb-5" aria-hidden="true" />
          <p className="mt-4 sm:mt-5 max-w-lg" style={{
            color: 'rgba(245,240,232,0.5)', fontSize: 'clamp(0.875rem, 3.6vw, 1rem)', lineHeight: 1.7,
            fontFamily: 'var(--font-inter)', marginLeft: 'auto', marginRight: 'auto', textAlign: 'center',
          }}>
            Free site visit · Free kitchen layout · No commitment.{' '}
            Our team responds within <strong style={{ color: 'var(--gold)' }}>1 hour</strong>.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 items-start">

          {/* ── Left: Contact options ── */}
          <div className="flex flex-col gap-4 sm:gap-5">

            {/* WhatsApp — Primary */}
            <a
              href="https://wa.me/919250346370?text=Hi%20VSD%20International%2C%20I%20need%20commercial%20kitchen%20equipment.%20Please%20share%20details."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 sm:gap-4 rounded-2xl group"
              style={{
                background: 'linear-gradient(135deg, #20C05A 0%, #25D366 50%, #1ebe5d 100%)',
                boxShadow: '0 8px 32px rgba(37,211,102,0.35), 0 2px 8px rgba(0,0,0,0.15)',
                textDecoration: 'none',
                padding: 'clamp(0.875rem, 4vw, 1.125rem) clamp(0.9rem, 4.5vw, 1.375rem)',
                transition: 'transform 0.2s, box-shadow 0.2s',
                position: 'relative',
                overflow: 'hidden',
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(-2px)';
                (e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 14px 40px rgba(37,211,102,0.45), 0 4px 12px rgba(0,0,0,0.2)';
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(0)';
                (e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 8px 32px rgba(37,211,102,0.35), 0 2px 8px rgba(0,0,0,0.15)';
              }}
              aria-label="WhatsApp VSD International for instant response"
            >
              {/* Shimmer overlay */}
              <div aria-hidden="true" style={{
                position: 'absolute', inset: 0,
                background: 'linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.15) 50%, transparent 60%)',
                transform: 'translateX(-100%)',
                transition: 'transform 0.6s ease',
              }} className="group-hover:translate-x-full" />

              <div style={{
                width: 'clamp(42px, 13vw, 52px)', height: 'clamp(42px, 13vw, 52px)', borderRadius: '50%',
                background: 'rgba(255,255,255,0.2)',
                border: '1.5px solid rgba(255,255,255,0.3)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                flexShrink: 0,
              }}>
                <WaIcon size={22} fill="white" />
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <p style={{ fontFamily: 'var(--font-inter)', fontWeight: 800, fontSize: 'clamp(0.88rem, 4vw, 1.0625rem)', color: '#fff', lineHeight: 1.28 }}>
                  WhatsApp Now — Instant Response
                </p>
                <p style={{ fontFamily: 'var(--font-inter)', fontSize: 'clamp(0.76rem, 3.2vw, 0.875rem)', color: 'rgba(255,255,255,0.82)', marginTop: 3, lineHeight: 1.5 }}>
                  +91-9250346370<span className="hidden sm:inline"> · </span><br className="sm:hidden" />Response within 15 minutes
                </p>
              </div>
              <div style={{
                width: 'clamp(26px, 8vw, 32px)', height: 'clamp(26px, 8vw, 32px)', borderRadius: '50%',
                background: 'rgba(255,255,255,0.18)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                flexShrink: 0,
              }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </div>
            </a>

            {/* Phone */}
            <a
              href="tel:+919250346370"
              className="flex items-center gap-3 sm:gap-4 rounded-2xl group"
              style={{
                background: 'var(--charcoal-mid)',
                border: '1px solid rgba(200,169,107,0.22)',
                boxShadow: '0 4px 16px rgba(0,0,0,0.2)',
                textDecoration: 'none',
                padding: 'clamp(0.875rem, 4vw, 1.125rem) clamp(0.9rem, 4.5vw, 1.375rem)',
                transition: 'transform 0.2s, box-shadow 0.2s, border-color 0.2s',
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(-2px)';
                (e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 10px 32px rgba(0,0,0,0.3)';
                (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(200,169,107,0.45)';
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(0)';
                (e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 4px 16px rgba(0,0,0,0.2)';
                (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(200,169,107,0.22)';
              }}
              aria-label="Call VSD International"
            >
              <div style={{
                width: 'clamp(42px, 13vw, 52px)', height: 'clamp(42px, 13vw, 52px)', borderRadius: '50%',
                background: 'rgba(200,169,107,0.12)',
                border: '1.5px solid rgba(200,169,107,0.22)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                flexShrink: 0,
              }}>
                <PhoneCall size={20} style={{ color: 'var(--gold)' }} />
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <p style={{ fontFamily: 'var(--font-inter)', fontWeight: 700, fontSize: 'clamp(0.88rem, 4vw, 1.0625rem)', color: '#F7F5F0', lineHeight: 1.28 }}>
                  Call Us Directly
                </p>
                <p style={{ fontFamily: 'var(--font-inter)', fontSize: 'clamp(0.76rem, 3.2vw, 0.875rem)', color: 'rgba(245,240,232,0.45)', marginTop: 3, lineHeight: 1.5 }}>
                  +91-9250346370<span className="hidden sm:inline"> · </span><br className="sm:hidden" />Mon–Sat, 9 AM – 6 PM
                </p>
              </div>
              <div style={{
                padding: '4px 9px', borderRadius: 100,
                background: 'rgba(200,169,107,0.1)',
                border: '1px solid rgba(200,169,107,0.2)',
                fontSize: '0.65rem', fontWeight: 700,
                color: 'var(--gold)', fontFamily: 'var(--font-inter)',
                letterSpacing: '0.06em', flexShrink: 0,
              }}>
                LIVE
              </div>
            </a>

            {/* Industry-specific WhatsApp CTAs */}
            <div className="grid grid-cols-3 gap-2 sm:gap-3">
              {[
                { label: '🏨 Hotel',    msg: 'Hi%2C%20I%20need%20kitchen%20equipment%20for%20a%20hotel%20project.' },
                { label: '🏥 Hospital', msg: 'Hi%2C%20I%20need%20kitchen%20equipment%20for%20a%20hospital%20or%20healthcare%20facility.' },
                { label: '🍔 Cloud',    msg: 'Hi%2C%20I%20am%20setting%20up%20a%20cloud%20kitchen%20and%20need%20equipment%20guidance.' },
              ].map(({ label, msg }) => (
                <a
                  key={label}
                  href={`https://wa.me/919250346370?text=${msg}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    gap: 4, padding: 'clamp(0.5rem, 2.5vw, 0.625rem) clamp(0.3rem, 1.5vw, 0.5rem)',
                    borderRadius: 12,
                    border: '1px solid rgba(200,169,107,0.18)',
                    background: 'rgba(200,169,107,0.05)',
                    color: 'rgba(245,240,232,0.65)',
                    fontSize: 'clamp(0.68rem, 3vw, 0.8rem)', fontFamily: 'var(--font-inter)', fontWeight: 600,
                    textDecoration: 'none',
                    whiteSpace: 'nowrap',
                    transition: 'background 0.15s, border-color 0.15s, color 0.15s',
                  }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLAnchorElement).style.background = 'rgba(200,169,107,0.12)';
                    (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(200,169,107,0.35)';
                    (e.currentTarget as HTMLAnchorElement).style.color = 'rgba(245,240,232,0.9)';
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLAnchorElement).style.background = 'rgba(200,169,107,0.05)';
                    (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(200,169,107,0.18)';
                    (e.currentTarget as HTMLAnchorElement).style.color = 'rgba(245,240,232,0.65)';
                  }}
                >
                  {label}
                </a>
              ))}
            </div>

            {/* Trust indicators */}
            <div style={{
              display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 10,
              paddingTop: '0.75rem',
              borderTop: '1px solid rgba(200,169,107,0.1)',
            }}>
              {[
                { icon: Shield,  label: 'ISO 9001 Certified',    sub: 'Quality assured' },
                { icon: Star,    label: '7+ Years Experience',    sub: 'Industry veterans' },
                { icon: Clock,   label: 'Free Site Visit',        sub: 'Zero obligation' },
                { icon: CheckCircle2, label: 'Pan India Service', sub: 'All major cities' },
              ].map(({ icon: Icon, label, sub }) => (
                <div key={label} style={{
                  display: 'flex', alignItems: 'center', gap: 8,
                  padding: 'clamp(0.5rem, 2.2vw, 0.625rem) clamp(0.5rem, 2.2vw, 0.75rem)',
                  borderRadius: 12,
                  background: 'rgba(200,169,107,0.05)',
                  border: '1px solid rgba(200,169,107,0.1)',
                }}>
                  <div style={{
                    width: 'clamp(26px, 8vw, 32px)', height: 'clamp(26px, 8vw, 32px)', borderRadius: '50%',
                    background: 'rgba(200,169,107,0.1)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    flexShrink: 0,
                  }}>
                    <Icon size={14} style={{ color: 'var(--gold)' }} />
                  </div>
                  <div style={{ minWidth: 0 }}>
                    <p style={{ fontFamily: 'var(--font-inter)', fontSize: 'clamp(0.7rem, 3vw, 0.8rem)', fontWeight: 700, color: 'rgba(245,240,232,0.75)', lineHeight: 1.25 }}>
                      {label}
                    </p>
                    <p style={{ fontFamily: 'var(--font-inter)', fontSize: 'clamp(0.6rem, 2.6vw, 0.675rem)', color: 'rgba(245,240,232,0.35)', marginTop: 1 }}>
                      {sub}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right: Quote form ── */}
          <div style={{
            background: 'var(--charcoal)',
            border: '1px solid rgba(200,169,107,0.18)',
            borderRadius: 20,
            overflow: 'hidden',
            boxShadow: '0 32px 80px rgba(0,0,0,0.45), 0 8px 24px rgba(0,0,0,0.25)',
            position: 'relative',
          }}>
            {/* Gold accent line */}
            <div style={{
              height: 3,
              background: 'linear-gradient(90deg, var(--gold-bright), var(--gold), var(--gold-deep))',
            }} />

            {/* Inner glow */}
            <div aria-hidden="true" style={{
              position: 'absolute', top: 0, left: 0, right: 0, height: 120,
              background: 'linear-gradient(180deg, rgba(200,169,107,0.06) 0%, transparent 100%)',
              pointerEvents: 'none',
            }} />

            <div style={{ padding: 'clamp(1.25rem, 2.5vw, 2rem)', position: 'relative', zIndex: 1 }}>
              {sent ? (
                <div style={{
                  display: 'flex', flexDirection: 'column',
                  alignItems: 'center', textAlign: 'center', padding: '2.5rem 1rem',
                }}>
                  <div style={{
                    width: 68, height: 68, borderRadius: '50%',
                    background: 'rgba(72,187,120,0.12)',
                    border: '1.5px solid rgba(72,187,120,0.3)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    marginBottom: '1.25rem',
                  }}>
                    <CheckCircle2 size={34} style={{ color: '#48BB78' }} />
                  </div>
                  <h3 style={{ fontFamily: 'var(--font-playfair)', fontSize: '1.5rem', color: '#F7F5F0', marginBottom: '0.625rem' }}>
                    Enquiry Received!
                  </h3>
                  <p style={{ fontFamily: 'var(--font-inter)', fontSize: '0.9rem', color: 'rgba(245,240,232,0.5)', lineHeight: 1.7, maxWidth: 280, marginBottom: '1.5rem' }}>
                    Our team will call you within 1 hour with a customised equipment plan.
                  </p>
                  <a
                    href="https://wa.me/919250346370?text=Hi%20VSD%20International%2C%20I%20just%20submitted%20an%20enquiry%20form.%20Please%20confirm%20receipt."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-gold flex items-center gap-2"
                  >
                    <WaIcon size={16} fill="#1A1508" /> Follow Up on WhatsApp
                  </a>
                </div>
              ) : (
                <>
                  <div style={{ marginBottom: '1.375rem' }}>
                    <h3 style={{ fontFamily: 'var(--font-playfair)', fontSize: '1.375rem', color: '#F7F5F0', lineHeight: 1.2, marginBottom: '0.3rem' }}>
                      Request a Free Quote
                    </h3>
                    <p style={{ fontFamily: 'var(--font-inter)', fontSize: '0.8rem', color: 'rgba(245,240,232,0.35)' }}>
                      Get a detailed proposal within 24 hours.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem' }} noValidate>
                    <FormField label="Your Name" id="cta-name">
                      <input
                        type="text" name="name" placeholder="e.g. Ramesh Sharma" required
                        value={form.name} onChange={handleChange}
                        style={inputSx}
                        onFocus={e => { e.target.style.borderColor = 'rgba(200,169,107,0.55)'; e.target.style.boxShadow = '0 0 0 3px rgba(200,169,107,0.08)'; }}
                        onBlur={e =>  { e.target.style.borderColor = 'rgba(200,169,107,0.2)';  e.target.style.boxShadow = 'none'; }}
                        aria-label="Your name"
                      />
                    </FormField>

                    <FormField label="Company / Property Name" id="cta-company">
                      <input
                        type="text" name="company" placeholder="e.g. The Oberoi Hotel" required
                        value={form.company} onChange={handleChange}
                        style={inputSx}
                        onFocus={e => { e.target.style.borderColor = 'rgba(200,169,107,0.55)'; e.target.style.boxShadow = '0 0 0 3px rgba(200,169,107,0.08)'; }}
                        onBlur={e =>  { e.target.style.borderColor = 'rgba(200,169,107,0.2)';  e.target.style.boxShadow = 'none'; }}
                        aria-label="Company name"
                      />
                    </FormField>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.875rem' }}>
                      <FormField label="City" id="cta-city">
                        <input
                          type="text" name="city" placeholder="Mumbai" required
                          value={form.city} onChange={handleChange}
                          style={inputSx}
                          onFocus={e => { e.target.style.borderColor = 'rgba(200,169,107,0.55)'; e.target.style.boxShadow = '0 0 0 3px rgba(200,169,107,0.08)'; }}
                          onBlur={e =>  { e.target.style.borderColor = 'rgba(200,169,107,0.2)';  e.target.style.boxShadow = 'none'; }}
                          aria-label="City"
                        />
                      </FormField>
                      <FormField label="Project Type" id="cta-type">
                        <select
                          name="type" required value={form.type} onChange={handleChange}
                          style={{ ...inputSx, cursor: 'pointer' }}
                          onFocus={e => { e.target.style.borderColor = 'rgba(200,169,107,0.55)'; e.target.style.boxShadow = '0 0 0 3px rgba(200,169,107,0.08)'; }}
                          onBlur={e =>  { e.target.style.borderColor = 'rgba(200,169,107,0.2)';  e.target.style.boxShadow = 'none'; }}
                          aria-label="Project type"
                        >
                          <option value="" style={{ background: '#0D0B08' }}>Select type…</option>
                          <option value="hotel"        style={{ background: '#0D0B08' }}>Hotel / Resort</option>
                          <option value="hospital"     style={{ background: '#0D0B08' }}>Hospital / Healthcare</option>
                          <option value="restaurant"   style={{ background: '#0D0B08' }}>Restaurant / QSR</option>
                          <option value="cloud-kitchen"style={{ background: '#0D0B08' }}>Cloud Kitchen</option>
                          <option value="bakery"       style={{ background: '#0D0B08' }}>Bakery / Café</option>
                          <option value="institution"  style={{ background: '#0D0B08' }}>Institution / Govt</option>
                          <option value="other"        style={{ background: '#0D0B08' }}>Other</option>
                        </select>
                      </FormField>
                    </div>

                    <FormField label="Phone Number (WhatsApp preferred)" id="cta-phone">
                      <input
                        type="tel" name="phone" placeholder="+91 98765 43210" required
                        value={form.phone} onChange={handleChange}
                        style={inputSx}
                        onFocus={e => { e.target.style.borderColor = 'rgba(200,169,107,0.55)'; e.target.style.boxShadow = '0 0 0 3px rgba(200,169,107,0.08)'; }}
                        onBlur={e =>  { e.target.style.borderColor = 'rgba(200,169,107,0.2)';  e.target.style.boxShadow = 'none'; }}
                        aria-label="Phone number"
                      />
                    </FormField>

                    <button
                      type="submit"
                      disabled={sending}
                      className="btn-gold flex items-center justify-center gap-2 w-full"
                      style={{
                        marginTop: '0.25rem',
                        minHeight: '3rem',
                        fontSize: '0.9375rem',
                        opacity: sending ? 0.75 : 1,
                        cursor: sending ? 'not-allowed' : 'pointer',
                      }}
                      aria-label="Submit quote request"
                    >
                      {sending ? 'Processing…' : <><Send size={15} aria-hidden="true" /> Get Free Quote</>}
                    </button>
                  </form>

                  <p style={{
                    fontFamily: 'var(--font-inter)', fontSize: '0.7rem',
                    color: 'rgba(245,240,232,0.22)', textAlign: 'center',
                    marginTop: '0.75rem', lineHeight: 1.6,
                  }}>
                    No spam. No obligation. We reply within 1 hour (Mon–Sat).
                  </p>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── Shared input style ─────────────────────────────────────────────────────── */
const inputSx: React.CSSProperties = {
  width: '100%',
  padding: '0.6875rem 0.875rem',
  borderRadius: 10,
  border: '1px solid rgba(200,169,107,0.2)',
  background: 'rgba(255,255,255,0.04)',
  color: '#F7F5F0',
  fontFamily: 'var(--font-inter)',
  fontSize: '0.9rem',
  outline: 'none',
  transition: 'border-color 0.15s, box-shadow 0.15s',
};

/* ── Field wrapper ─────────────────────────────────────────────────────────── */
function FormField({ label, id, children }: { label: string; id: string; children: React.ReactNode }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
      <label htmlFor={id} style={{
        fontFamily: 'var(--font-inter)', fontSize: '0.75rem', fontWeight: 600,
        color: 'rgba(245,240,232,0.5)', letterSpacing: '0.02em',
      }}>
        {label}
      </label>
      {children}
    </div>
  );
}
