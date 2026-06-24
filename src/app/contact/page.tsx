import type { Metadata } from 'next';
import Link from 'next/link';
import {
  PhoneCall, Mail, MapPin, Clock, MessageCircle,
  ArrowRight, CheckCircle2, Shield, Star, Zap,
  Building2, CalendarCheck, HeadphonesIcon,
} from 'lucide-react';
import AnnouncementBar from '@/components/home/AnnouncementBar';
import Navbar          from '@/components/home/Navbar';
import Footer          from '@/components/home/Footer';
import WhatsAppFloat   from '@/components/home/WhatsAppFloat';
import ContactForm     from '@/components/contact/ContactForm';

/* --- Metadata ------------------------------------------------------------- */
export const metadata: Metadata = {
  title: 'Contact VSD International | Free Kitchen Consultation — Delhi NCR',
  description:
    'Get in touch with VSD International for commercial kitchen equipment. Free consultation, 24-hour response. ISO 9001 certified. Call +91-9250346370 or WhatsApp us.',
  alternates: { canonical: 'https://vsdinternational.com/contact' },
};

/* --- Contact channel data ------------------------------------------------- */
const CHANNELS = [
  {
    Icon: PhoneCall,
    label: 'Call Us',
    value: '+91-9250346370',
    note: 'Mon – Sat · 9 AM – 7 PM IST',
    href: 'tel:+919250346370',
    cta: 'Call Now',
  },
  {
    Icon: MessageCircle,
    label: 'WhatsApp',
    value: '+91-9250346370',
    note: 'Send photos · Quick replies',
    href: 'https://wa.me/919250346370?text=Hi%2C%20I%20am%20interested%20in%20commercial%20kitchen%20equipment.',
    cta: 'Open WhatsApp',
  },
  {
    Icon: Mail,
    label: 'Email Us',
    value: 'info.vsdinternational@gmail.com',
    note: 'Response within 24 hours',
    href: 'mailto:info.vsdinternational@gmail.com',
    cta: 'Send Email',
  },
  {
    Icon: MapPin,
    label: 'Visit Us',
    value: 'Mandawali, Delhi NCR',
    note: 'By appointment only',
    href: 'https://maps.google.com/?q=Mandawali+New+Delhi',
    cta: 'Get Directions',
  },
];

/* --- Trust promises ------------------------------------------------------- */
const PROMISES = [
  {
    Icon: Zap,
    title: '24-Hour Response',
    body: 'Every enquiry receives a personal response within one business day — guaranteed.',
  },
  {
    Icon: CalendarCheck,
    title: 'Free Site Consultation',
    body: 'On projects above ₹5 Lakhs, our expert visits your site and prepares a free layout plan.',
  },
  {
    Icon: HeadphonesIcon,
    title: 'Dedicated Account Manager',
    body: 'One point of contact from enquiry through delivery, installation, and after-sales support.',
  },
];

/* --- FAQs ----------------------------------------------------------------- */
const FAQS = [
  {
    q: 'How quickly do you respond to enquiries?',
    a: 'All enquiries receive a response within 24 hours on business days. For urgent requirements, call or WhatsApp us directly at +91-9250346370 for the fastest turnaround.',
  },
  {
    q: 'Do you offer free kitchen consultation and site visits?',
    a: 'Yes. For projects above ₹5 Lakhs we offer a complimentary site visit and kitchen layout consultation. Our experienced team will assess your space and recommend the optimal equipment configuration.',
  },
  {
    q: 'What is the minimum order or project size?',
    a: 'There is no strict minimum. We handle single-equipment supplies as well as complete turnkey kitchen projects. Custom SS fabrication typically starts from ₹1.5 Lakhs.',
  },
  {
    q: 'Do you serve cities outside Delhi NCR?',
    a: 'Yes, we operate across 50+ cities in India including Mumbai, Bengaluru, Hyderabad, Jaipur, and Lucknow. We have dedicated installation teams and can coordinate logistics anywhere in India.',
  },
  {
    q: 'How long does delivery and installation take?',
    a: 'Standard equipment supply takes 7–14 days. Custom SS fabrication takes 14–21 days. Complete turnkey kitchen projects are planned in detail with you — typically 30–90 days depending on scope.',
  },
  {
    q: 'Do you provide AMC (Annual Maintenance Contracts)?',
    a: 'Absolutely. We offer AMC for all equipment we supply — including international brands like Rational, Robot Coupe, and Scotsman, as well as our own fabrication. AMC includes priority response, genuine spare parts, and scheduled maintenance visits.',
  },
];

/* --- Contact Page --------------------------------------------------------- */
export default function ContactPage() {
  return (
    <>
      <AnnouncementBar />
      <Navbar />

      <main id="main-content">

        {/* ══════════════════════════════════════════════════════════════════
            HERO — dark charcoal with gold geometry
           ══════════════════════════════════════════════════════════════════ */}
        <section
          aria-label="Contact VSD International"
          style={{
            position: 'relative',
            overflow: 'hidden',
            background: 'var(--charcoal-warm)',
            padding: 'clamp(4.5rem, 9vw, 7.5rem) 0 clamp(3.5rem, 7vw, 6rem)',
          }}
        >
          {/* Gold top stripe */}
          <div
            aria-hidden="true"
            style={{
              position: 'absolute', top: 0, left: 0, right: 0,
              height: 3,
              background: 'linear-gradient(90deg, transparent 5%, var(--gold-bright) 35%, var(--gold) 65%, transparent 95%)',
            }}
          />

          {/* Decorative rings — top right */}
          <svg
            aria-hidden="true"
            viewBox="0 0 600 600"
            fill="none"
            style={{ position: 'absolute', top: '-130px', right: '-130px', width: '600px', height: '600px', pointerEvents: 'none' }}
          >
            <circle cx="300" cy="300" r="288" stroke="rgba(201,168,76,0.10)" strokeWidth="1.5" />
            <circle cx="300" cy="300" r="220" stroke="rgba(201,168,76,0.08)" strokeWidth="1" />
            <circle cx="300" cy="300" r="155" stroke="rgba(201,168,76,0.13)" strokeWidth="1.5" />
            <circle cx="300" cy="300" r="90"  stroke="rgba(201,168,76,0.09)" strokeWidth="1" />
          </svg>

          {/* Decorative rings — bottom left */}
          <svg
            aria-hidden="true"
            viewBox="0 0 440 440"
            fill="none"
            style={{ position: 'absolute', bottom: '-110px', left: '-90px', width: '440px', height: '440px', pointerEvents: 'none' }}
          >
            <circle cx="220" cy="220" r="210" stroke="rgba(201,168,76,0.08)" strokeWidth="1.5" />
            <circle cx="220" cy="220" r="148" stroke="rgba(201,168,76,0.06)" strokeWidth="1" />
            <circle cx="220" cy="220" r="86"  stroke="rgba(201,168,76,0.09)" strokeWidth="1.5" />
          </svg>

          {/* Subtle grid pattern */}
          <div
            aria-hidden="true"
            style={{
              position: 'absolute', inset: 0, pointerEvents: 'none', opacity: 0.03,
              backgroundImage: `
                linear-gradient(rgba(201,168,76,0.8) 1px, transparent 1px),
                linear-gradient(90deg, rgba(201,168,76,0.8) 1px, transparent 1px)
              `,
              backgroundSize: '72px 72px',
              maskImage: 'radial-gradient(ellipse 90% 80% at 50% 50%, black 30%, transparent 100%)',
              WebkitMaskImage: 'radial-gradient(ellipse 90% 80% at 50% 50%, black 30%, transparent 100%)',
            }}
          />

          {/* Corner glow blobs */}
          <div
            aria-hidden="true"
            style={{
              position: 'absolute', top: '-60px', right: '-60px',
              width: 480, height: 480,
              background: 'radial-gradient(ellipse, rgba(201,168,76,0.08) 0%, transparent 65%)',
              filter: 'blur(56px)', pointerEvents: 'none',
            }}
          />

          <div
            className="container mx-auto"
            style={{ position: 'relative', zIndex: 1, textAlign: 'center', maxWidth: '80rem', padding: '0 1.25rem' }}
          >
            {/* Breadcrumb */}
            <nav aria-label="Breadcrumb" style={{ marginBottom: '2rem' }}>
              <ol
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                  listStyle: 'none',
                  fontFamily: 'var(--font-inter)', fontSize: '0.8125rem',
                  color: 'rgba(245,240,232,0.40)',
                }}
              >
                <li>
                  <Link href="/" style={{ color: 'rgba(245,240,232,0.40)', textDecoration: 'none' }}>
                    Home
                  </Link>
                </li>
                <li aria-hidden="true" style={{ color: 'var(--gold)' }}>›</li>
                <li style={{ color: 'var(--gold)', fontWeight: 600 }}>Contact Us</li>
              </ol>
            </nav>

            {/* Eyebrow badges */}
            <div style={{ display: 'flex', justifyContent: 'center', gap: '0.75rem', flexWrap: 'wrap', marginBottom: '1.625rem' }}>
              <span
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
                  padding: '0.3rem 0.875rem', borderRadius: '999px',
                  background: 'rgba(201,168,76,0.10)', border: '1px solid rgba(201,168,76,0.28)',
                  fontFamily: 'var(--font-inter)', fontSize: '0.6875rem', fontWeight: 700,
                  letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--gold)',
                }}
              >
                <Shield size={11} aria-hidden="true" /> ISO 9001:2015 Certified
              </span>
              <span
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
                  padding: '0.3rem 0.875rem', borderRadius: '999px',
                  background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.10)',
                  fontFamily: 'var(--font-inter)', fontSize: '0.6875rem', fontWeight: 600,
                  letterSpacing: '0.12em', textTransform: 'uppercase',
                  color: 'rgba(245,240,232,0.55)',
                }}
              >
                24-Hour Response Guarantee
              </span>
            </div>

            {/* H1 */}
            <h1
              style={{
                fontFamily: 'var(--font-playfair)',
                fontWeight: 800,
                fontSize: 'clamp(2.25rem, 5vw, 4.25rem)',
                lineHeight: 1.07,
                letterSpacing: '-0.025em',
                color: 'var(--text-on-dark)',
                maxWidth: '760px',
                margin: '0 auto 1.25rem',
              }}
            >
              Talk to Our{' '}
              <span
                style={{
                  background: 'linear-gradient(135deg, var(--gold-light) 0%, var(--gold-bright) 50%, var(--gold) 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  fontStyle: 'italic',
                }}
              >
                Kitchen Experts
              </span>
            </h1>

            {/* Gold rule */}
            <div
              aria-hidden="true"
              style={{
                width: 72, height: 3,
                background: 'linear-gradient(90deg, var(--gold-bright), var(--gold), var(--gold-deep))',
                borderRadius: 2, margin: '0 auto 1.625rem',
              }}
            />

            {/* Subtitle */}
            <p
              style={{
                fontFamily: 'var(--font-inter)',
                fontSize: 'clamp(1rem, 1.6vw, 1.175rem)',
                color: 'rgba(245,240,232,0.62)',
                lineHeight: 1.78,
                maxWidth: '560px',
                margin: '0 auto 2.75rem',
              }}
            >
              From a free kitchen layout plan to a complete turnkey project — our expert team is
              ready to help. No obligation. No pressure.
            </p>

            {/* Trust strip */}
            <div
              style={{
                display: 'inline-grid',
                gridTemplateColumns: 'repeat(3, auto)',
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(201,168,76,0.18)',
                borderRadius: 14,
                overflow: 'hidden',
                backdropFilter: 'blur(8px)',
              }}
            >
              {[
                { icon: CheckCircle2, text: 'Free Consultation' },
                { icon: Star,         text: '5★ Google Rating'    },
                { icon: Building2,    text: '200+ Clients Served' },
              ].map(({ icon: Icon, text }, idx) => (
                <div
                  key={text}
                  style={{
                    padding: '0.875rem 1.5rem',
                    display: 'flex', alignItems: 'center', gap: '0.5rem',
                    borderRight: idx < 2 ? '1px solid rgba(201,168,76,0.14)' : 'none',
                    fontFamily: 'var(--font-inter)',
                    fontSize: '0.8125rem', fontWeight: 600,
                    color: 'rgba(245,240,232,0.70)',
                  }}
                >
                  <Icon size={14} style={{ color: 'var(--gold)', flexShrink: 0 }} aria-hidden="true" />
                  {text}
                </div>
              ))}
            </div>
          </div>

          {/* Bottom gold fade */}
          <div
            aria-hidden="true"
            style={{
              position: 'absolute', bottom: 0, left: 0, right: 0, height: '1px',
              background: 'linear-gradient(90deg, transparent 5%, rgba(201,168,76,0.30) 50%, transparent 95%)',
            }}
          />
        </section>

        {/* ══════════════════════════════════════════════════════════════════
            CONTACT CHANNELS — white, 4-col cards
           ══════════════════════════════════════════════════════════════════ */}
        <section
          aria-labelledby="channels-heading"
          style={{
            background: '#FFFFFF',
            padding: 'clamp(3.5rem, 6vw, 5rem) 0',
            borderBottom: '1px solid var(--border)',
          }}
        >
          <div
            className="container mx-auto"
            style={{ maxWidth: '80rem', padding: '0 1.25rem' }}
          >
            <div style={{ textAlign: 'center', marginBottom: '2.75rem' }}>
              <p className="section-label" style={{ marginBottom: '0.75rem' }}>
                How to Reach Us
              </p>
              <h2
                id="channels-heading"
                style={{
                  fontFamily: 'var(--font-playfair)',
                  fontWeight: 800,
                  fontSize: 'clamp(1.625rem, 2.8vw, 2.375rem)',
                  color: 'var(--text-dark)',
                  letterSpacing: '-0.02em',
                }}
              >
                Choose the Way That Works{' '}
                <span style={{ color: 'var(--gold-deep)', fontStyle: 'italic' }}>Best for You</span>
              </h2>
              <div
                aria-hidden="true"
                style={{
                  width: 56, height: 3,
                  background: 'linear-gradient(90deg, var(--gold-bright), var(--gold))',
                  borderRadius: 2, margin: '1.125rem auto 0',
                }}
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {CHANNELS.map(({ Icon, label, value, note, href, cta }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="card-lift group"
                  style={{
                    display: 'flex', flexDirection: 'column',
                    background: '#FFFFFF',
                    border: '1.5px solid var(--border)',
                    borderRadius: 16,
                    padding: '1.75rem 1.5rem',
                    textDecoration: 'none',
                    position: 'relative', overflow: 'hidden',
                    transition: 'border-color 0.2s ease, box-shadow 0.2s ease',
                  }}
                >
                  {/* Gold top accent */}
                  <div
                    aria-hidden="true"
                    style={{
                      position: 'absolute', top: 0, left: 0, right: 0, height: 3,
                      background: 'linear-gradient(90deg, var(--gold-bright), var(--gold), var(--gold-deep))',
                    }}
                  />

                  {/* Icon */}
                  <div
                    aria-hidden="true"
                    style={{
                      width: 52, height: 52, borderRadius: 13,
                      background: 'linear-gradient(135deg, rgba(201,168,76,0.12) 0%, rgba(201,168,76,0.06) 100%)',
                      border: '1.5px solid rgba(201,168,76,0.25)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      marginBottom: '1.375rem',
                    }}
                  >
                    <Icon size={22} strokeWidth={1.6} style={{ color: 'var(--gold-deep)' }} />
                  </div>

                  <p
                    style={{
                      fontFamily: 'var(--font-inter)',
                      fontSize: '0.6875rem', fontWeight: 700,
                      letterSpacing: '0.14em', textTransform: 'uppercase',
                      color: 'var(--text-muted)', marginBottom: '0.375rem',
                    }}
                  >
                    {label}
                  </p>
                  <p
                    style={{
                      fontFamily: 'var(--font-inter)',
                      fontSize: '1rem', fontWeight: 700,
                      color: 'var(--text-dark)',
                      lineHeight: 1.35, marginBottom: '0.5rem',
                      wordBreak: 'break-all',
                    }}
                  >
                    {value}
                  </p>
                  <p
                    style={{
                      fontFamily: 'var(--font-inter)',
                      fontSize: '0.8125rem',
                      color: 'var(--text-muted)',
                      lineHeight: 1.5, flex: 1, marginBottom: '1.25rem',
                    }}
                  >
                    {note}
                  </p>
                  <span
                    style={{
                      display: 'inline-flex', alignItems: 'center', gap: '0.375rem',
                      fontFamily: 'var(--font-inter)',
                      fontSize: '0.875rem', fontWeight: 700,
                      color: 'var(--gold-deep)',
                    }}
                  >
                    {cta} <ArrowRight size={13} aria-hidden="true" />
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════════
            FORM + SIDEBAR — dark charcoal
           ══════════════════════════════════════════════════════════════════ */}
        <section
          aria-labelledby="form-heading"
          style={{
            position: 'relative', overflow: 'hidden',
            background: 'var(--charcoal-warm)',
            padding: 'clamp(4rem, 7vw, 6rem) 0',
          }}
        >
          {/* Gold top stripe */}
          <div
            aria-hidden="true"
            style={{
              position: 'absolute', top: 0, left: 0, right: 0, height: 2,
              background: 'linear-gradient(90deg, transparent 5%, var(--gold-bright) 35%, var(--gold) 65%, transparent 95%)',
            }}
          />

          {/* Background grid */}
          <div
            aria-hidden="true"
            style={{
              position: 'absolute', inset: 0, pointerEvents: 'none', opacity: 0.025,
              backgroundImage: `
                linear-gradient(rgba(201,168,76,0.8) 1px, transparent 1px),
                linear-gradient(90deg, rgba(201,168,76,0.8) 1px, transparent 1px)
              `,
              backgroundSize: '72px 72px',
              maskImage: 'radial-gradient(ellipse 80% 90% at 50% 50%, black 40%, transparent 100%)',
              WebkitMaskImage: 'radial-gradient(ellipse 80% 90% at 50% 50%, black 40%, transparent 100%)',
            }}
          />

          {/* Corner glows */}
          <div
            aria-hidden="true"
            style={{
              position: 'absolute', top: '-80px', right: '-80px',
              width: 500, height: 500,
              background: 'radial-gradient(ellipse, rgba(201,168,76,0.08) 0%, transparent 65%)',
              filter: 'blur(60px)', pointerEvents: 'none',
            }}
          />

          <div
            className="container mx-auto"
            style={{ position: 'relative', zIndex: 1, maxWidth: '80rem', padding: '0 1.25rem' }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12" style={{ alignItems: 'start' }}>

              {/* -- Form card (3 cols on LG) ------------------------------ */}
              <div
                className="lg:col-span-3"
                style={{
                  background: 'var(--charcoal-mid)',
                  border: '1px solid var(--charcoal-edge)',
                  borderRadius: 20,
                  padding: 'clamp(1.75rem, 4vw, 2.75rem)',
                  position: 'relative', overflow: 'hidden',
                }}
              >
                {/* Card gold top */}
                <div
                  aria-hidden="true"
                  style={{
                    position: 'absolute', top: 0, left: 0, right: 0, height: 3,
                    background: 'linear-gradient(90deg, var(--gold-bright), var(--gold), var(--gold-deep))',
                  }}
                />

                <div style={{ marginBottom: '1.875rem' }}>
                  <p className="section-label" style={{ marginBottom: '0.625rem' }}>
                    Send an Enquiry
                  </p>
                  <h2
                    id="form-heading"
                    style={{
                      fontFamily: 'var(--font-playfair)',
                      fontWeight: 800,
                      fontSize: 'clamp(1.5rem, 2.5vw, 2rem)',
                      color: 'var(--text-on-dark)',
                      lineHeight: 1.15,
                      letterSpacing: '-0.02em',
                    }}
                  >
                    Get Your{' '}
                    <em
                      style={{
                        background: 'linear-gradient(135deg, var(--gold-light), var(--gold-bright))',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                        fontStyle: 'italic',
                      }}
                    >
                      Free Quote
                    </em>{' '}
                    &amp; Layout
                  </h2>
                  <p
                    style={{
                      fontFamily: 'var(--font-inter)',
                      fontSize: '0.9rem',
                      color: 'rgba(245,240,232,0.42)',
                      marginTop: '0.5rem',
                      lineHeight: 1.6,
                    }}
                  >
                    Fill in the form — our expert will call within 24 hours with a tailored plan.
                  </p>
                </div>

                <ContactForm />
              </div>

              {/* -- Info sidebar (2 cols on LG) --------------------------- */}
              <div className="lg:col-span-2" style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>

                {/* Response promise card */}
                <div
                  style={{
                    background: 'linear-gradient(135deg, rgba(201,168,76,0.12) 0%, rgba(201,168,76,0.05) 100%)',
                    border: '1px solid rgba(201,168,76,0.25)',
                    borderRadius: 16,
                    padding: '1.5rem',
                    position: 'relative', overflow: 'hidden',
                  }}
                >
                  <div
                    aria-hidden="true"
                    style={{
                      position: 'absolute', top: 0, left: 0, right: 0, height: 3,
                      background: 'linear-gradient(90deg, var(--gold-bright), var(--gold), var(--gold-deep))',
                    }}
                  />
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.875rem', marginBottom: '1rem' }}>
                    <div
                      aria-hidden="true"
                      style={{
                        width: 44, height: 44, borderRadius: 11, flexShrink: 0,
                        background: 'rgba(201,168,76,0.14)',
                        border: '1.5px solid rgba(201,168,76,0.30)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                      }}
                    >
                      <Clock size={20} strokeWidth={1.6} style={{ color: 'var(--gold)' }} />
                    </div>
                    <div>
                      <p
                        style={{
                          fontFamily: 'var(--font-playfair)',
                          fontWeight: 700,
                          fontSize: '1.0625rem',
                          color: 'var(--text-on-dark)',
                          lineHeight: 1.2,
                        }}
                      >
                        24-Hour Response
                      </p>
                      <p
                        style={{
                          fontFamily: 'var(--font-inter)',
                          fontSize: '0.8125rem',
                          color: 'rgba(245,240,232,0.45)',
                          marginTop: '0.175rem',
                        }}
                      >
                        Our promise on every enquiry
                      </p>
                    </div>
                  </div>
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
                    {[
                      'Tailored equipment recommendation',
                      'Free kitchen layout plan',
                      'Best price guarantee',
                      'No obligation, no pressure',
                    ].map((item) => (
                      <li
                        key={item}
                        style={{
                          display: 'flex', alignItems: 'center', gap: '0.5rem',
                          fontFamily: 'var(--font-inter)',
                          fontSize: '0.875rem',
                          color: 'rgba(245,240,232,0.60)',
                          lineHeight: 1.5,
                        }}
                      >
                        <CheckCircle2 size={14} style={{ color: 'var(--gold)', flexShrink: 0 }} aria-hidden="true" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Office address card */}
                <div
                  itemScope
                  itemType="https://schema.org/LocalBusiness"
                  style={{
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid rgba(255,255,255,0.08)',
                    borderRadius: 16,
                    padding: '1.5rem',
                  }}
                >
                  <p
                    style={{
                      fontFamily: 'var(--font-inter)',
                      fontSize: '0.6875rem', fontWeight: 700,
                      letterSpacing: '0.14em', textTransform: 'uppercase',
                      color: 'var(--gold)', marginBottom: '1rem',
                    }}
                  >
                    Our Office
                  </p>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                      <MapPin size={16} strokeWidth={1.6} style={{ color: 'var(--gold)', flexShrink: 0, marginTop: '0.15rem' }} aria-hidden="true" />
                      <div>
                        <p
                          style={{
                            fontFamily: 'var(--font-inter)',
                            fontSize: '0.9rem', fontWeight: 600,
                            color: 'var(--text-on-dark)',
                            lineHeight: 1.5,
                          }}
                          itemProp="address"
                          itemScope
                          itemType="https://schema.org/PostalAddress"
                        >
                          <span itemProp="streetAddress">Mandawali</span>,{' '}
                          <span itemProp="addressLocality">New Delhi</span>,{' '}
                          <span itemProp="addressRegion">Delhi NCR</span>,{' '}
                          <span itemProp="addressCountry">India</span>
                        </p>
                        <a
                          href="https://maps.google.com/?q=Mandawali+New+Delhi"
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{
                            fontFamily: 'var(--font-inter)',
                            fontSize: '0.8rem', fontWeight: 600,
                            color: 'var(--gold-deep)',
                            textDecoration: 'none',
                            display: 'inline-flex', alignItems: 'center', gap: '0.3rem',
                            marginTop: '0.35rem',
                          }}
                        >
                          Open in Google Maps <ArrowRight size={11} aria-hidden="true" />
                        </a>
                      </div>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                      <Clock size={16} strokeWidth={1.6} style={{ color: 'var(--gold)', flexShrink: 0 }} aria-hidden="true" />
                      <div>
                        <p style={{ fontFamily: 'var(--font-inter)', fontSize: '0.875rem', fontWeight: 600, color: 'var(--text-on-dark)', lineHeight: 1.4 }}>
                          Mon – Sat · 9:00 AM – 7:00 PM
                        </p>
                        <p style={{ fontFamily: 'var(--font-inter)', fontSize: '0.8rem', color: 'rgba(245,240,232,0.40)', marginTop: '0.175rem' }}>
                          Closed on national holidays
                        </p>
                      </div>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                      <PhoneCall size={16} strokeWidth={1.6} style={{ color: 'var(--gold)', flexShrink: 0 }} aria-hidden="true" />
                      <a
                        href="tel:+919250346370"
                        itemProp="telephone"
                        style={{
                          fontFamily: 'var(--font-inter)',
                          fontSize: '0.9375rem', fontWeight: 700,
                          color: 'var(--text-on-dark)',
                          textDecoration: 'none',
                          letterSpacing: '0.01em',
                        }}
                      >
                        +91-9250346370
                      </a>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                      <Mail size={16} strokeWidth={1.6} style={{ color: 'var(--gold)', flexShrink: 0 }} aria-hidden="true" />
                      <a
                        href="mailto:info.vsdinternational@gmail.com"
                        itemProp="email"
                        style={{
                          fontFamily: 'var(--font-inter)',
                          fontSize: '0.875rem', fontWeight: 600,
                          color: 'rgba(245,240,232,0.70)',
                          textDecoration: 'none',
                          wordBreak: 'break-all',
                        }}
                      >
                        info.vsdinternational@gmail.com
                      </a>
                    </div>
                  </div>
                </div>

                {/* WhatsApp quick CTA */}
                <a
                  href="https://wa.me/919250346370?text=Hi%2C%20I%20am%20interested%20in%20commercial%20kitchen%20equipment."
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem',
                    background: 'rgba(37,211,102,0.10)',
                    border: '1.5px solid rgba(37,211,102,0.25)',
                    borderRadius: 14,
                    padding: '1rem 1.5rem',
                    textDecoration: 'none',
                    transition: 'background 0.2s ease, border-color 0.2s ease',
                  }}
                >
                  <MessageCircle size={20} strokeWidth={1.6} style={{ color: '#25D366', flexShrink: 0 }} aria-hidden="true" />
                  <div>
                    <p style={{ fontFamily: 'var(--font-inter)', fontSize: '0.9375rem', fontWeight: 700, color: '#25D366', lineHeight: 1.2 }}>
                      Chat on WhatsApp
                    </p>
                    <p style={{ fontFamily: 'var(--font-inter)', fontSize: '0.8rem', color: 'rgba(37,211,102,0.60)', marginTop: '0.15rem' }}>
                      Fastest way to get a quote
                    </p>
                  </div>
                  <ArrowRight size={14} style={{ color: '#25D366', marginLeft: 'auto', flexShrink: 0 }} aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════════
            TRUST PROMISES — gold gradient
           ══════════════════════════════════════════════════════════════════ */}
        <section
          aria-labelledby="promises-heading"
          style={{
            position: 'relative', overflow: 'hidden',
            background: 'linear-gradient(135deg, #D4A843 0%, #F0C442 40%, #C9A84C 70%, #A67C32 100%)',
            padding: 'clamp(3.5rem, 6vw, 5rem) 0',
          }}
        >
          {/* Dot pattern */}
          <div
            aria-hidden="true"
            style={{
              position: 'absolute', inset: 0, pointerEvents: 'none',
              backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.20) 1px, transparent 1px)',
              backgroundSize: '24px 24px',
            }}
          />
          {/* Decorative ring */}
          <svg
            aria-hidden="true"
            viewBox="0 0 360 360"
            fill="none"
            style={{ position: 'absolute', top: '-80px', right: '-80px', width: 360, height: 360, pointerEvents: 'none', opacity: 0.18 }}
          >
            <circle cx="180" cy="180" r="170" stroke="rgba(255,255,255,0.8)" strokeWidth="1.5" />
            <circle cx="180" cy="180" r="110" stroke="rgba(255,255,255,0.5)" strokeWidth="1" />
          </svg>

          <div
            className="container mx-auto"
            style={{ position: 'relative', zIndex: 1, maxWidth: '80rem', padding: '0 1.25rem' }}
          >
            <div style={{ textAlign: 'center', marginBottom: '2.75rem' }}>
              <span
                style={{
                  display: 'inline-block',
                  padding: '0.3rem 0.875rem', borderRadius: '999px',
                  background: 'rgba(26,18,8,0.14)', border: '1px solid rgba(26,18,8,0.18)',
                  fontFamily: 'var(--font-inter)', fontSize: '0.6875rem', fontWeight: 700,
                  letterSpacing: '0.2em', textTransform: 'uppercase', color: '#1A1208',
                  marginBottom: '1.25rem',
                }}
              >
                Our Commitment to You
              </span>
              <h2
                id="promises-heading"
                style={{
                  fontFamily: 'var(--font-playfair)',
                  fontWeight: 800,
                  fontSize: 'clamp(1.75rem, 3vw, 2.75rem)',
                  color: '#1A1208',
                  lineHeight: 1.1,
                  letterSpacing: '-0.025em',
                }}
              >
                What You Can Expect When You Contact Us
              </h2>
              <div aria-hidden="true" style={{ width: 56, height: 3, background: 'rgba(26,18,8,0.28)', borderRadius: 2, margin: '1.25rem auto 0' }} />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {PROMISES.map(({ Icon, title, body }) => (
                <div
                  key={title}
                  style={{
                    background: 'rgba(255,255,255,0.92)',
                    borderRadius: 16,
                    padding: '1.875rem 1.625rem',
                    boxShadow: '0 8px 32px rgba(26,18,8,0.15)',
                    backdropFilter: 'blur(8px)',
                  }}
                >
                  <div
                    aria-hidden="true"
                    style={{
                      width: 50, height: 50, borderRadius: 12,
                      background: 'linear-gradient(135deg, rgba(201,168,76,0.18), rgba(201,168,76,0.08))',
                      border: '1.5px solid rgba(201,168,76,0.35)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      marginBottom: '1.25rem',
                    }}
                  >
                    <Icon size={22} strokeWidth={1.6} style={{ color: 'var(--gold-deep)' }} />
                  </div>
                  <h3
                    style={{
                      fontFamily: 'var(--font-playfair)',
                      fontWeight: 700,
                      fontSize: '1.125rem',
                      color: 'var(--text-dark)',
                      marginBottom: '0.625rem',
                      lineHeight: 1.25,
                    }}
                  >
                    {title}
                  </h3>
                  <p
                    style={{
                      fontFamily: 'var(--font-inter)',
                      fontSize: '0.9rem',
                      color: 'var(--text-body)',
                      lineHeight: 1.7,
                    }}
                  >
                    {body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════════
            FAQ — warm surface-alt
           ══════════════════════════════════════════════════════════════════ */}
        <section
          aria-labelledby="faq-heading"
          style={{
            background: 'var(--surface-alt)',
            padding: 'clamp(4rem, 7vw, 6rem) 0',
            borderTop: '1px solid var(--border)',
            borderBottom: '1px solid var(--border)',
          }}
        >
          <div
            className="container mx-auto"
            style={{ maxWidth: '80rem', padding: '0 1.25rem' }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', marginBottom: '3rem' }}>
              <p className="section-label" style={{ marginBottom: '0.75rem' }}>
                Common Questions
              </p>
              <h2
                id="faq-heading"
                style={{
                  fontFamily: 'var(--font-playfair)',
                  fontWeight: 800,
                  fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
                  color: 'var(--text-dark)',
                  letterSpacing: '-0.02em',
                }}
              >
                Frequently Asked{' '}
                <span style={{ color: 'var(--gold-deep)', fontStyle: 'italic' }}>Questions</span>
              </h2>
              <div aria-hidden="true" style={{ width: 56, height: 3, background: 'linear-gradient(90deg, var(--gold-bright), var(--gold))', borderRadius: 2, marginTop: '1.25rem' }} />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
              {FAQS.map(({ q, a }) => (
                <div
                  key={q}
                  style={{
                    background: '#FFFFFF',
                    border: '1.5px solid var(--border)',
                    borderRadius: 14,
                    padding: '1.5rem 1.75rem',
                    position: 'relative', overflow: 'hidden',
                    boxShadow: '0 2px 12px rgba(0,0,0,0.04)',
                  }}
                >
                  {/* Subtle left gold rule */}
                  <div
                    aria-hidden="true"
                    style={{
                      position: 'absolute', top: 0, left: 0, bottom: 0, width: 3,
                      background: 'linear-gradient(180deg, var(--gold-bright), var(--gold), transparent)',
                    }}
                  />
                  <h3
                    style={{
                      fontFamily: 'var(--font-inter)',
                      fontWeight: 700,
                      fontSize: '0.9875rem',
                      color: 'var(--text-dark)',
                      lineHeight: 1.45,
                      marginBottom: '0.75rem',
                    }}
                  >
                    {q}
                  </h3>
                  <p
                    style={{
                      fontFamily: 'var(--font-inter)',
                      fontSize: '0.9rem',
                      color: 'var(--text-muted)',
                      lineHeight: 1.72,
                    }}
                  >
                    {a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════════
            FINAL CTA — warm cream gradient
           ══════════════════════════════════════════════════════════════════ */}
        <section
          aria-label="Get in touch with VSD International"
          style={{
            background: 'linear-gradient(150deg, #FBF5E6 0%, #F5EAC8 50%, #FAFAF8 100%)',
            padding: 'clamp(4rem, 7vw, 6rem) 0',
            borderTop: '1px solid rgba(201,168,76,0.22)',
            position: 'relative', overflow: 'hidden',
          }}
        >
          <div
            aria-hidden="true"
            style={{
              position: 'absolute', top: '-60px', right: '-60px',
              width: 360, height: 360, borderRadius: '50%',
              background: 'radial-gradient(ellipse, rgba(201,168,76,0.18) 0%, transparent 65%)',
              filter: 'blur(44px)',
            }}
          />
          <div
            aria-hidden="true"
            style={{
              position: 'absolute', bottom: '-40px', left: '-40px',
              width: 280, height: 280, borderRadius: '50%',
              background: 'radial-gradient(ellipse, rgba(201,168,76,0.12) 0%, transparent 65%)',
              filter: 'blur(36px)',
            }}
          />

          <div
            className="container mx-auto"
            style={{
              position: 'relative', zIndex: 1,
              textAlign: 'center', maxWidth: '80rem', padding: '0 1.25rem',
            }}
          >
            <p className="section-label" style={{ marginBottom: '0.875rem' }}>
              Still Have Questions?
            </p>
            <h2
              style={{
                fontFamily: 'var(--font-playfair)',
                fontWeight: 800,
                fontSize: 'clamp(1.875rem, 3.5vw, 3rem)',
                color: 'var(--text-dark)',
                lineHeight: 1.1,
                letterSpacing: '-0.025em',
                marginBottom: '1.25rem',
              }}
            >
              Our Team Is One Call{' '}
              <span
                style={{
                  background: 'linear-gradient(135deg, var(--gold-deep) 0%, var(--gold) 50%, var(--gold-bright) 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  fontStyle: 'italic',
                }}
              >
                Away
              </span>
            </h2>

            <div aria-hidden="true" style={{ width: 60, height: 3, background: 'linear-gradient(90deg, var(--gold-bright), var(--gold), var(--gold-deep))', borderRadius: 2, margin: '0 auto 1.5rem' }} />

            <p
              style={{
                fontFamily: 'var(--font-inter)',
                fontSize: '1.0625rem', color: 'var(--text-body)',
                maxWidth: '520px', margin: '0 auto 2.5rem',
                lineHeight: 1.75,
              }}
            >
              Whether you need a single piece of equipment or a complete kitchen setup — get your
              free quote and layout plan in 24 hours.
            </p>

            <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap', marginBottom: '2rem' }}>
              <a
                href="tel:+919250346370"
                className="btn-gold inline-flex items-center gap-2"
                style={{ fontSize: '1rem', padding: '0.875rem 2.25rem', borderRadius: 8 }}
              >
                <PhoneCall size={16} aria-hidden="true" />
                Call +91-9250346370
              </a>
              <a
                href="https://wa.me/919250346370?text=Hi%2C%20I%20am%20interested%20in%20commercial%20kitchen%20equipment."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost inline-flex items-center gap-2"
                style={{ fontSize: '1rem', padding: '0.875rem 2.25rem', borderRadius: 8 }}
              >
                <MessageCircle size={16} aria-hidden="true" />
                WhatsApp Us
              </a>
            </div>

            <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap' }}>
              {[
                { icon: Shield,       text: 'ISO 9001 Certified'    },
                { icon: CheckCircle2, text: 'Free Site Visit'       },
                { icon: Star,         text: '5★ Google Rating'       },
              ].map(({ icon: Icon, text }) => (
                <div
                  key={text}
                  style={{
                    display: 'flex', alignItems: 'center', gap: '0.5rem',
                    fontFamily: 'var(--font-inter)', fontSize: '0.9375rem',
                    color: 'var(--text-muted)',
                  }}
                >
                  <Icon size={16} style={{ color: 'var(--gold-deep)', flexShrink: 0 }} aria-hidden="true" />
                  {text}
                </div>
              ))}
            </div>
          </div>
        </section>

      </main>

      <Footer />
      <WhatsAppFloat />
    </>
  );
}
