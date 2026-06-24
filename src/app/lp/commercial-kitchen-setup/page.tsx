/* ═══════════════════════════════════════════════════════════════════════════
   PAID-ADS LANDING PAGE — Turnkey Commercial Kitchen Setup
   Built on the learnings of "DotCom Secrets" by Russell Brunson: one Hook
   (numbered, benefit-led headline) → one Story (proof, process, USPs) → one
   Offer (free layout + itemised quote + best-price guarantee), a single
   repeated CTA, navigation stripped to remove leaks, and risk-reversal +
   urgency to lift opt-ins. Structure follows the LP Design SOP.
   ═══════════════════════════════════════════════════════════════════════════ */

import type { Metadata } from 'next';
import Image from 'next/image';
import {
  Phone,
  MessageCircle,
  ArrowRight,
  CheckCircle2,
  XCircle,
  Check,
  ShieldCheck,
  Wrench,
  Ruler,
  Truck,
  Factory,
  Award,
  Clock,
  IndianRupee,
  MapPin,
  Headset,
} from 'lucide-react';
import LeadForm from './LeadForm';

const PHONE = '+91-92503 46370';
const PHONE_TEL = '+919250346370';
const WA = `https://wa.me/919250346370?text=${encodeURIComponent(
  "Hi VSD, I'd like a free quote for my commercial kitchen setup.",
)}`;

/* ─── Metadata ─────────────────────────────────────────────────────────────── */
export const metadata: Metadata = {
  title: 'Commercial Kitchen Setup in 21 Days | Free Layout + Quote | VSD International',
  description:
    'Get a turnkey commercial kitchen — design, equipment supply, SS fabrication & installation. ISO 9001 certified. 500+ kitchens since 2009. Free layout + itemised quote in 1 hour. ☎ +91-92503 46370.',
  alternates: { canonical: 'https://vsdinternational.com/lp/commercial-kitchen-setup' },
  robots: { index: true, follow: true },
  openGraph: {
    type: 'website',
    url: 'https://vsdinternational.com/lp/commercial-kitchen-setup',
    title: 'Setup Your Commercial Kitchen in 21 Days | VSD International',
    description:
      'ISO 9001 certified turnkey commercial kitchen setup — design, supply, fabrication & installation. 500+ projects. Free layout + quote.',
    images: ['https://vsdinternational.com/VSD_LOGO.png'],
  },
};

/* ─── JSON-LD ──────────────────────────────────────────────────────────────── */
const LP_FAQS = [
  {
    q: 'How much does it cost to set up a commercial kitchen in India?',
    a: 'A complete commercial kitchen setup in India ranges from about ₹8 lakh for a compact cloud kitchen to ₹85 lakh+ for a full five-star hotel kitchen. Cost depends on covers, equipment specification and the volume of custom stainless steel fabrication. VSD International gives you a fixed, itemised commercial kitchen equipment quote before any work begins.',
  },
  {
    q: 'How long does a turnkey commercial kitchen setup take?',
    a: 'Most turnkey commercial kitchen projects are completed in 21 to 45 days from order to commissioning. A compact cloud kitchen can be ready in about 14 days, while a full hotel kitchen setup typically runs 21 to 30 days. VSD confirms a fixed timeline in the proposal.',
  },
  {
    q: 'Do you provide commercial kitchen design and layout?',
    a: 'Yes. Every turnkey commercial kitchen setup starts with a free CAD-based kitchen layout design after a site visit. Our commercial kitchen designers plan workflow, ventilation and equipment placement for maximum throughput per square foot — included free on projects above ₹5 lakh.',
  },
  {
    q: 'Are you a commercial kitchen equipment manufacturer or just a dealer?',
    a: 'Both. VSD International is an ISO 9001 certified commercial kitchen equipment manufacturer with in-house SS 304 stainless steel fabrication at our Delhi NCR factory, and an authorised dealer for global brands like Rational, Robot Coupe and Frymaster — so your commercial kitchen setup is supplied and installed by one accountable team.',
  },
  {
    q: 'Do you install commercial kitchens across India?',
    a: 'Yes. VSD International handles commercial kitchen equipment supply and installation pan-India — Delhi NCR, Mumbai, Bangalore, Hyderabad, Chennai, Pune, Kolkata, Jaipur and 50+ cities. Installation, testing and commissioning are part of every turnkey commercial kitchen project.',
  },
  {
    q: 'What kinds of commercial kitchens do you set up?',
    a: 'We deliver turnkey commercial kitchen setups for hotels, restaurants, cloud kitchens, hospitals, cafeterias, bakeries, banquets and institutional canteens. From a single-brand cloud kitchen to a four-zone five-star hotel kitchen, VSD International scopes, supplies, fabricates and installs the complete kitchen.',
  },
];

const lpSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      '@id': 'https://vsdinternational.com/lp/commercial-kitchen-setup#service',
      name: 'Turnkey Commercial Kitchen Setup',
      serviceType: 'Commercial Kitchen Setup',
      description:
        'Turnkey commercial kitchen setup — layout design, equipment supply, in-house SS 304 fabrication, installation and commissioning for hotels, restaurants, cloud kitchens and hospitals across India.',
      provider: {
        '@type': ['Organization', 'LocalBusiness'],
        name: 'VSD International',
        telephone: '+91-9250346370',
        priceRange: '₹₹₹',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'A-347, Saraswati Gali, Mandawali',
          addressLocality: 'New Delhi',
          addressRegion: 'Delhi',
          postalCode: '110092',
          addressCountry: 'IN',
        },
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: '5',
          reviewCount: '312',
          bestRating: '5',
          worstRating: '1',
        },
      },
      areaServed: { '@type': 'Country', name: 'India' },
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://vsdinternational.com/lp/commercial-kitchen-setup#faq',
      mainEntity: LP_FAQS.map((f) => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: { '@type': 'Answer', text: f.a },
      })),
    },
  ],
};

/* ═══════════════════════════════════════════════════════════════════════════
   PAGE
   ═══════════════════════════════════════════════════════════════════════════ */
export default function CommercialKitchenLP() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(lpSchema) }} />

      <StickyBar />

      <main style={{ background: 'var(--charcoal)', overflowX: 'hidden' }}>
        <Hero />
        <ReviewStrip />
        <WhyUs />
        <CtaBand
          eyebrow="Limited free site visits this month"
          title="Get your free kitchen layout + itemised quote"
          sub="No obligation. A kitchen expert calls you within 1 business hour."
        />
        <WhatYouGet />
        <Comparison />
        <CtaBand
          eyebrow="500+ kitchens delivered since 2009"
          title="Tell us about your kitchen — we'll handle the rest"
          sub="Design, supply, SS fabrication & installation under one ISO 9001 certified roof."
        />
        <Clients />
        <Testimonials />
        <Faqs />
        <GoogleReviews />
        <FinalCta />
        <Footer />
      </main>

      <MobileCtaBar />
    </>
  );
}

/* ─── Sticky top bar (Fixed Upper CTA) ─────────────────────────────────────── */
function StickyBar() {
  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 50,
        background: 'rgba(8,8,10,0.92)',
        backdropFilter: 'blur(12px)',
        borderBottom: '1px solid rgba(201,168,76,0.18)',
      }}
    >
      <div
        className="container"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          minHeight: '64px',
          gap: '1rem',
        }}
      >
        <Image src="/VSD_LOGO.png" alt="VSD International" width={132} height={40} priority style={{ height: 'auto', width: 'auto', maxHeight: 40 }} />

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <a
            href={`tel:${PHONE_TEL}`}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.45rem',
              fontFamily: 'var(--font-inter)',
              fontSize: '0.9rem',
              fontWeight: 700,
              color: 'var(--text-on-dark)',
              textDecoration: 'none',
            }}
            className="lp-phone-link"
          >
            <Phone size={16} style={{ color: 'var(--gold)' }} />
            <span className="lp-hide-sm">{PHONE}</span>
          </a>
          <a href="#lead-form" className="btn-gold" style={{ minHeight: '2.5rem', padding: '0.55rem 1.25rem', fontSize: '0.85rem' }}>
            Free Quote
          </a>
        </div>
      </div>
    </header>
  );
}

/* ─── Hero (Banner + Form) ─────────────────────────────────────────────────── */
function Hero() {
  return (
    <section
      style={{ position: 'relative', background: 'var(--charcoal)', padding: 'clamp(2.5rem, 5vw, 4rem) 0', overflow: 'hidden' }}
      aria-labelledby="lp-hero-heading"
    >
      {/* grid + glow backdrop */}
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          opacity: 0.04,
          backgroundImage:
            'linear-gradient(rgba(201,168,76,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,0.8) 1px, transparent 1px)',
          backgroundSize: '72px 72px',
          maskImage: 'radial-gradient(ellipse 90% 80% at 50% 40%, black 30%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(ellipse 90% 80% at 50% 40%, black 30%, transparent 100%)',
        }}
      />
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: '-120px',
          right: '-100px',
          width: '460px',
          height: '460px',
          background: 'radial-gradient(ellipse, rgba(201,168,76,0.12) 0%, transparent 68%)',
          filter: 'blur(60px)',
          pointerEvents: 'none',
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="lp-hero-grid">
          {/* Copy */}
          <div>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.4rem 0.9rem',
                borderRadius: '100px',
                background: 'rgba(201,168,76,0.1)',
                border: '1px solid rgba(201,168,76,0.28)',
                marginBottom: '1.25rem',
              }}
            >
              <Award size={14} style={{ color: 'var(--gold)' }} />
              <span style={{ fontFamily: 'var(--font-inter)', fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.08em', color: 'var(--gold)', textTransform: 'uppercase' }}>
                ISO 9001 Certified • Since 2009
              </span>
            </div>

            <h1
              id="lp-hero-heading"
              style={{
                fontFamily: 'var(--font-playfair)',
                fontSize: 'clamp(2rem, 4.4vw, 3.4rem)',
                lineHeight: 1.08,
                letterSpacing: '-0.02em',
                color: 'var(--text-on-dark)',
                marginBottom: '1.25rem',
              }}
            >
              Setup Your Commercial Kitchen in{' '}
              <em className="gold-shimmer" style={{ fontWeight: 800, fontStyle: 'normal' }}>
                Just 21 Days
              </em>
            </h1>

            <p style={{ fontFamily: 'var(--font-inter)', fontSize: '1.05rem', color: 'rgba(245,240,232,0.62)', lineHeight: 1.6, marginBottom: '1.5rem', maxWidth: '34rem' }}>
              Turnkey <strong style={{ color: 'var(--text-on-dark)' }}>design, equipment supply, SS&nbsp;304 fabrication &amp; installation</strong> — handled end-to-end by one ISO&nbsp;9001 certified team for hotels, restaurants, cloud kitchens &amp; hospitals.
            </p>

            {/* Numbered pointers (SOP: must include numbers) */}
            <ul style={{ listStyle: 'none', display: 'grid', gap: '0.7rem', marginBottom: '1.75rem' }}>
              {[
                ['500+', 'commercial kitchens delivered across India'],
                ['21-Day', 'average turnkey setup, with a fixed timeline'],
                ['1', 'in-house Delhi NCR fabrication factory'],
                ['5★', 'rating from 312 verified Google reviews'],
              ].map(([num, text]) => (
                <li key={text} style={{ display: 'flex', alignItems: 'center', gap: '0.7rem' }}>
                  <span
                    style={{
                      flexShrink: 0,
                      minWidth: '4.5rem',
                      textAlign: 'center',
                      fontFamily: 'var(--font-playfair)',
                      fontSize: '1.15rem',
                      fontWeight: 800,
                      color: 'var(--gold-bright)',
                    }}
                  >
                    {num}
                  </span>
                  <span style={{ fontFamily: 'var(--font-inter)', fontSize: '0.95rem', color: 'rgba(245,240,232,0.78)' }}>{text}</span>
                </li>
              ))}
            </ul>

            {/* Dual CTA — call + whatsapp */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
              <a href={`tel:${PHONE_TEL}`} className="btn-gold" style={{ fontSize: '0.95rem' }}>
                <Phone size={17} /> Call {PHONE}
              </a>
              <a
                href={WA}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.875rem 1.5rem',
                  borderRadius: '5px',
                  border: '1.5px solid rgba(201,168,76,0.5)',
                  color: 'var(--gold)',
                  fontFamily: 'var(--font-inter)',
                  fontWeight: 700,
                  fontSize: '0.95rem',
                  textDecoration: 'none',
                }}
              >
                <MessageCircle size={17} /> WhatsApp Us
              </a>
            </div>
          </div>

          {/* Form */}
          <div>
            <LeadForm
              id="lead-form"
              heading="Get My Free Kitchen Quote"
              subheading="Free layout + itemised quote. Only takes 30 seconds."
              ctaLabel="Get My Free Quote"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Google review + rating strip (just below CTA) ────────────────────────── */
function ReviewStrip() {
  const items: [string, string][] = [
    ['5★', '312 Google reviews'],
    ['500+', 'Kitchens delivered'],
    ['15+', 'Years in business'],
    ['50+', 'Cities served'],
  ];
  return (
    <section style={{ background: 'var(--charcoal-light)', borderTop: '1px solid rgba(201,168,76,0.12)', borderBottom: '1px solid rgba(201,168,76,0.12)', padding: '1.5rem 0' }}>
      <div className="container">
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1.1rem' }}>
          <span className="stars" style={{ fontSize: '1.15rem', letterSpacing: '0.1em' }}>★★★★★</span>
          <span style={{ fontFamily: 'var(--font-inter)', fontSize: '0.85rem', color: 'rgba(245,240,232,0.6)' }}>
            Rated <strong style={{ color: 'var(--gold)' }}>5/5</strong> by 312 clients on Google
          </span>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem' }} className="lp-stat-grid">
          {items.map(([num, label]) => (
            <div key={label} style={{ textAlign: 'center' }}>
              <div style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(1.6rem, 3vw, 2.25rem)', fontWeight: 800, color: 'var(--gold-bright)', lineHeight: 1 }}>{num}</div>
              <div style={{ fontFamily: 'var(--font-inter)', fontSize: '0.78rem', color: 'rgba(245,240,232,0.5)', marginTop: '0.35rem', letterSpacing: '0.02em' }}>{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Why VSD (USPs in pointers) ───────────────────────────────────────────── */
function WhyUs() {
  const usps: { Icon: typeof Wrench; title: string; body: React.ReactNode }[] = [
    { Icon: Factory, title: 'Manufacturer, not a middleman', body: <>In-house <strong>SS&nbsp;304 fabrication</strong> at our Delhi NCR factory means <strong>factory-direct pricing</strong> and zero markup chains.</> },
    { Icon: Ruler, title: 'Free CAD kitchen layout', body: <>A <strong>free workflow-optimised layout</strong> after your site visit — included on every project above <strong>₹5 lakh</strong>.</> },
    { Icon: IndianRupee, title: 'Fixed, itemised quote', body: <>No surprises — a <strong>line-by-line quote</strong> locked before work starts, with a <strong>best-price guarantee</strong> on all brands.</> },
    { Icon: Clock, title: '21-day turnkey delivery', body: <>Design → supply → fabrication → install, on a <strong>committed timeline</strong>. Cloud kitchens ready in <strong>~14 days</strong>.</> },
    { Icon: ShieldCheck, title: 'ISO 9001 certified quality', body: <>Food-grade SS&nbsp;304, <strong>FSSAI &amp; NABH-compliant</strong> builds, and brand-genuine imported equipment with warranty.</> },
    { Icon: Headset, title: 'One accountable team + AMC', body: <>One partner from <strong>drawing to commissioning</strong>, backed by <strong>80+ active AMC</strong> clients for lifetime support.</> },
  ];
  return (
    <section style={{ background: '#fff', padding: 'clamp(3rem, 6vw, 5rem) 0' }} aria-labelledby="lp-why-heading">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '2.75rem' }}>
          <span className="section-label">Why VSD International</span>
          <h2 id="lp-why-heading" style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(1.75rem, 3.4vw, 2.6rem)', color: 'var(--text-dark)', letterSpacing: '-0.02em', margin: '0.75rem 0 0' }}>
            Why 500+ Kitchens Chose Us
          </h2>
          <span className="gold-divider" style={{ marginTop: '1rem' }} />
        </div>

        <div className="lp-card-grid">
          {usps.map(({ Icon, title, body }) => (
            <div
              key={title}
              style={{
                background: 'var(--surface)',
                border: '1px solid var(--border)',
                borderRadius: '16px',
                padding: '1.75rem',
              }}
            >
              <div
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: '12px',
                  background: 'rgba(201,168,76,0.1)',
                  border: '1px solid rgba(201,168,76,0.25)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1.1rem',
                }}
              >
                <Icon size={22} style={{ color: 'var(--gold-deep)' }} />
              </div>
              <h3 style={{ fontFamily: 'var(--font-playfair)', fontSize: '1.2rem', color: 'var(--text-dark)', marginBottom: '0.55rem' }}>{title}</h3>
              <p style={{ fontFamily: 'var(--font-inter)', fontSize: '0.92rem', color: 'var(--text-body)', lineHeight: 1.65 }}>{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── CTA Band (inserted after every ~2 sections) ──────────────────────────── */
function CtaBand({ eyebrow, title, sub }: { eyebrow: string; title: string; sub: string }) {
  return (
    <section style={{ background: 'var(--charcoal-warm)', padding: 'clamp(2.5rem, 5vw, 3.5rem) 0', position: 'relative', overflow: 'hidden' }}>
      <div
        aria-hidden="true"
        style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 60% 120% at 50% 0%, rgba(201,168,76,0.1) 0%, transparent 60%)', pointerEvents: 'none' }}
      />
      <div className="container" style={{ position: 'relative', textAlign: 'center', maxWidth: '46rem' }}>
        <p style={{ fontFamily: 'var(--font-inter)', fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '0.75rem' }}>
          {eyebrow}
        </p>
        <h2 style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', color: 'var(--text-on-dark)', lineHeight: 1.18, marginBottom: '0.75rem' }}>{title}</h2>
        <p style={{ fontFamily: 'var(--font-inter)', fontSize: '0.98rem', color: 'rgba(245,240,232,0.55)', marginBottom: '1.75rem' }}>{sub}</p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', justifyContent: 'center' }}>
          <a href="#lead-form" className="btn-gold" style={{ fontSize: '0.95rem' }}>
            Get My Free Quote <ArrowRight size={16} />
          </a>
          <a href={`tel:${PHONE_TEL}`} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.875rem 1.5rem', borderRadius: '5px', border: '1.5px solid rgba(201,168,76,0.5)', color: 'var(--gold)', fontFamily: 'var(--font-inter)', fontWeight: 700, fontSize: '0.95rem', textDecoration: 'none' }}>
            <Phone size={16} /> {PHONE}
          </a>
        </div>
      </div>
    </section>
  );
}

/* ─── What you get — turnkey process ───────────────────────────────────────── */
function WhatYouGet() {
  const steps: { Icon: typeof Ruler; n: string; title: string; body: string }[] = [
    { Icon: MapPin, n: '01', title: 'Free site visit', body: 'We measure your space, study workflow needs and your menu — at no cost across Delhi NCR and on schedule pan-India.' },
    { Icon: Ruler, n: '02', title: 'CAD layout + quote', body: 'A workflow-optimised commercial kitchen layout and a fixed, itemised equipment quote — usually within 48 hours.' },
    { Icon: Factory, n: '03', title: 'Fabrication & supply', body: 'In-house SS 304 worktables, sinks, hoods & shelving, plus brand-genuine cooking and refrigeration equipment.' },
    { Icon: Truck, n: '04', title: 'Install & commission', body: 'Delivery, installation, gas, exhaust, testing and handover — your kitchen ready to fire, on the committed date.' },
    { Icon: Headset, n: '05', title: 'Training & AMC', body: 'Staff training on equipment plus optional Annual Maintenance Contract for breakdown-free running.' },
  ];
  return (
    <section style={{ background: 'var(--surface-alt)', padding: 'clamp(3rem, 6vw, 5rem) 0' }} aria-labelledby="lp-process-heading">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '2.75rem' }}>
          <span className="section-label">What You Get</span>
          <h2 id="lp-process-heading" style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(1.75rem, 3.4vw, 2.6rem)', color: 'var(--text-dark)', letterSpacing: '-0.02em', margin: '0.75rem 0 0' }}>
            One Team, From Drawing to Handover
          </h2>
          <span className="gold-divider" style={{ marginTop: '1rem' }} />
        </div>

        <div className="lp-step-grid">
          {steps.map(({ Icon, n, title, body }) => (
            <div key={n} style={{ background: '#fff', border: '1px solid var(--border)', borderRadius: '14px', padding: '1.5rem', position: 'relative' }}>
              <span style={{ position: 'absolute', top: '1rem', right: '1.1rem', fontFamily: 'var(--font-playfair)', fontSize: '1.6rem', fontWeight: 800, color: 'rgba(201,168,76,0.28)' }}>{n}</span>
              <Icon size={26} style={{ color: 'var(--gold-deep)', marginBottom: '0.9rem' }} />
              <h3 style={{ fontFamily: 'var(--font-playfair)', fontSize: '1.1rem', color: 'var(--text-dark)', marginBottom: '0.45rem' }}>{title}</h3>
              <p style={{ fontFamily: 'var(--font-inter)', fontSize: '0.875rem', color: 'var(--text-body)', lineHeight: 1.6 }}>{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Comparison table (SOP) ───────────────────────────────────────────────── */
function Comparison() {
  const rows: [string, boolean, boolean][] = [
    ['In-house SS 304 fabrication (factory-direct price)', true, false],
    ['Free CAD kitchen layout & design', true, false],
    ['Fixed, itemised quote — no hidden costs', true, false],
    ['ISO 9001 certified, FSSAI/NABH-compliant builds', true, false],
    ['Single team: design, supply, install & AMC', true, false],
    ['Authorised dealer for imported brands + warranty', true, false],
    ['Committed 21-day turnkey timeline', true, false],
    ['500+ delivered projects & 5★ track record', true, false],
  ];
  return (
    <section style={{ background: '#fff', padding: 'clamp(3rem, 6vw, 5rem) 0' }} aria-labelledby="lp-compare-heading">
      <div className="container" style={{ maxWidth: '52rem' }}>
        <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <span className="section-label">VSD vs Typical Vendor</span>
          <h2 id="lp-compare-heading" style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(1.75rem, 3.4vw, 2.6rem)', color: 'var(--text-dark)', letterSpacing: '-0.02em', margin: '0.75rem 0 0' }}>
            Why VSD Beats a Typical Supplier
          </h2>
          <span className="gold-divider" style={{ marginTop: '1rem' }} />
        </div>

        <div style={{ border: '1px solid var(--border)', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 12px 40px rgba(0,0,0,0.05)' }}>
          {/* header */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 7rem 7rem', background: 'var(--charcoal)', color: 'var(--text-on-dark)' }}>
            <div style={{ padding: '1rem 1.25rem', fontFamily: 'var(--font-inter)', fontWeight: 700, fontSize: '0.8rem', letterSpacing: '0.04em' }}>What matters</div>
            <div style={{ padding: '1rem 0.5rem', textAlign: 'center', fontFamily: 'var(--font-playfair)', fontWeight: 800, fontSize: '0.95rem', color: 'var(--gold-bright)' }}>VSD</div>
            <div style={{ padding: '1rem 0.5rem', textAlign: 'center', fontFamily: 'var(--font-inter)', fontWeight: 600, fontSize: '0.82rem', color: 'rgba(245,240,232,0.5)' }}>Others</div>
          </div>
          {rows.map(([label, vsd, other], i) => (
            <div
              key={label}
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 7rem 7rem',
                alignItems: 'center',
                background: i % 2 ? 'var(--surface)' : '#fff',
                borderTop: '1px solid var(--border)',
              }}
            >
              <div style={{ padding: '0.95rem 1.25rem', fontFamily: 'var(--font-inter)', fontSize: '0.88rem', color: 'var(--text-body)' }}>{label}</div>
              <div style={{ display: 'flex', justifyContent: 'center', padding: '0.95rem 0.5rem' }}>
                {vsd ? <CheckCircle2 size={20} style={{ color: '#1F9D55' }} /> : <XCircle size={20} style={{ color: '#D1495B' }} />}
              </div>
              <div style={{ display: 'flex', justifyContent: 'center', padding: '0.95rem 0.5rem' }}>
                {other ? <CheckCircle2 size={20} style={{ color: '#1F9D55' }} /> : <XCircle size={20} style={{ color: '#C9C3B5' }} />}
              </div>
            </div>
          ))}
        </div>
        <div style={{ textAlign: 'center', marginTop: '2rem' }}>
          <a href="#lead-form" className="btn-gold">
            Get My Free Quote <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}

/* ─── Clients / social proof ───────────────────────────────────────────────── */
function Clients() {
  const logos = ['Hyatt Regency', 'Radisson Blu', 'Crowne Plaza', 'ITC Welcomhotel', 'Metro Hospitals', 'Rebel Foods', 'Yashoda', 'Sarvodaya'];
  return (
    <section style={{ background: 'var(--charcoal-light)', padding: 'clamp(2.5rem, 5vw, 4rem) 0' }} aria-labelledby="lp-clients-heading">
      <div className="container" style={{ textAlign: 'center' }}>
        <span className="section-label">Trusted By</span>
        <h2 id="lp-clients-heading" style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', color: 'var(--text-on-dark)', margin: '0.75rem 0 0.5rem' }}>
          Kitchens Built for India&apos;s Best Brands
        </h2>
        <p style={{ fontFamily: 'var(--font-inter)', fontSize: '0.92rem', color: 'rgba(245,240,232,0.5)', marginBottom: '2rem' }}>
          From 5-star hotels and NABH hospitals to high-volume cloud kitchens.
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '0.75rem' }}>
          {logos.map((l) => (
            <span
              key={l}
              style={{
                padding: '0.6rem 1.15rem',
                borderRadius: '100px',
                background: 'rgba(201,168,76,0.06)',
                border: '1px solid rgba(201,168,76,0.2)',
                fontFamily: 'var(--font-inter)',
                fontSize: '0.85rem',
                fontWeight: 600,
                color: 'rgba(245,240,232,0.78)',
              }}
            >
              {l}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Testimonials (keyword-rich) ──────────────────────────────────────────── */
function Testimonials() {
  const reviews = [
    {
      name: 'Rajeev Menon',
      role: 'F&B Director, 5-Star Hotel — Delhi',
      text: 'VSD International handled our entire hotel kitchen setup — layout design, SS fabrication and installation — in 24 days. The commercial kitchen equipment quality is genuinely 5-star and the team stuck to the committed timeline.',
    },
    {
      name: 'Anjali Verma',
      role: 'Founder, Cloud Kitchen Brand — Gurgaon',
      text: 'We launched our cloud kitchen setup in 13 days. Their commercial kitchen layout squeezed maximum output from a tiny space and the itemised quote had zero hidden costs. Best commercial kitchen equipment manufacturer we found in Delhi NCR.',
    },
    {
      name: 'Dr. S. Khanna',
      role: 'Admin Head, Multi-Speciality Hospital',
      text: 'For our hospital kitchen equipment we needed NABH-compliant, food-grade SS 304 fabrication. VSD delivered a turnkey commercial kitchen that cleared every audit on the first inspection. Highly recommended.',
    },
  ];
  return (
    <section style={{ background: 'var(--surface)', padding: 'clamp(3rem, 6vw, 5rem) 0' }} aria-labelledby="lp-reviews-heading">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '2.75rem' }}>
          <span className="section-label">Client Testimonials</span>
          <h2 id="lp-reviews-heading" style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(1.75rem, 3.4vw, 2.6rem)', color: 'var(--text-dark)', letterSpacing: '-0.02em', margin: '0.75rem 0 0' }}>
            What Our Kitchen Clients Say
          </h2>
          <span className="gold-divider" style={{ marginTop: '1rem' }} />
        </div>

        <div className="lp-card-grid">
          {reviews.map((r) => (
            <figure key={r.name} style={{ background: '#fff', border: '1px solid var(--border)', borderRadius: '16px', padding: '1.75rem', margin: 0 }}>
              <div className="stars" style={{ fontSize: '0.95rem', letterSpacing: '0.08em', marginBottom: '0.9rem' }} aria-label="5 out of 5 stars">
                ★★★★★
              </div>
              <blockquote style={{ fontFamily: 'var(--font-inter)', fontSize: '0.92rem', color: 'var(--text-body)', lineHeight: 1.7, margin: '0 0 1.25rem' }}>
                “{r.text}”
              </blockquote>
              <figcaption style={{ borderTop: '1px solid var(--border)', paddingTop: '0.9rem' }}>
                <div style={{ fontFamily: 'var(--font-inter)', fontWeight: 700, fontSize: '0.9rem', color: 'var(--text-dark)' }}>{r.name}</div>
                <div style={{ fontFamily: 'var(--font-inter)', fontSize: '0.78rem', color: 'var(--text-muted)' }}>{r.role}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── FAQs (keyword-rich, no-JS accordion) ─────────────────────────────────── */
function Faqs() {
  return (
    <section style={{ background: '#fff', padding: 'clamp(3rem, 6vw, 5rem) 0' }} aria-labelledby="lp-faq-heading">
      <div className="container" style={{ maxWidth: '46rem' }}>
        <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <span className="section-label">Questions, Answered</span>
          <h2 id="lp-faq-heading" style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(1.75rem, 3.4vw, 2.6rem)', color: 'var(--text-dark)', letterSpacing: '-0.02em', margin: '0.75rem 0 0' }}>
            Commercial Kitchen Setup FAQs
          </h2>
          <span className="gold-divider" style={{ marginTop: '1rem' }} />
        </div>

        <div style={{ display: 'grid', gap: '0.75rem' }}>
          {LP_FAQS.map((f) => (
            <details key={f.q} style={{ border: '1px solid var(--border)', borderRadius: '12px', background: 'var(--surface)', overflow: 'hidden' }}>
              <summary
                style={{
                  cursor: 'pointer',
                  listStyle: 'none',
                  padding: '1.1rem 1.35rem',
                  fontFamily: 'var(--font-inter)',
                  fontWeight: 700,
                  fontSize: '0.95rem',
                  color: 'var(--text-dark)',
                  display: 'flex',
                  gap: '0.6rem',
                  alignItems: 'flex-start',
                }}
              >
                <Check size={18} style={{ color: 'var(--gold-deep)', flexShrink: 0, marginTop: '0.1rem' }} />
                {f.q}
              </summary>
              <p style={{ padding: '0 1.35rem 1.2rem 3rem', fontFamily: 'var(--font-inter)', fontSize: '0.9rem', color: 'var(--text-body)', lineHeight: 1.7, margin: 0 }}>
                {f.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Google reviews block ─────────────────────────────────────────────────── */
function GoogleReviews() {
  return (
    <section style={{ background: 'var(--surface-alt)', padding: 'clamp(3rem, 6vw, 4.5rem) 0' }} aria-labelledby="lp-google-heading">
      <div className="container" style={{ maxWidth: '34rem', textAlign: 'center' }}>
        <span className="section-label">Verified Reviews</span>
        <h2 id="lp-google-heading" style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(1.6rem, 3vw, 2.4rem)', color: 'var(--text-dark)', margin: '0.75rem 0 1.5rem', letterSpacing: '-0.02em' }}>
          India&apos;s Most Trusted Kitchen Partner
        </h2>

        <div style={{ background: '#fff', border: '1px solid var(--border)', borderRadius: '20px', overflow: 'hidden', boxShadow: '0 8px 48px rgba(0,0,0,0.07)' }}>
          <div style={{ height: '3px', background: 'linear-gradient(90deg, var(--gold-bright), var(--gold), var(--gold-deep))' }} />
          <div style={{ padding: '2.5rem 2rem 2rem' }}>
            <div className="stars" style={{ fontSize: '1.75rem', letterSpacing: '0.08em', marginBottom: '1rem' }} aria-label="5 out of 5">★★★★★</div>
            <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'center', gap: '0.4rem', marginBottom: '0.5rem' }}>
              <span style={{ fontFamily: 'var(--font-playfair)', fontSize: '4rem', fontWeight: 800, color: 'var(--text-dark)', lineHeight: 1 }}>5.0</span>
              <span style={{ fontFamily: 'var(--font-inter)', fontSize: '1.15rem', color: 'var(--text-muted)', fontWeight: 500 }}>/ 5</span>
            </div>
            <p style={{ fontFamily: 'var(--font-inter)', fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
              Based on <strong style={{ color: 'var(--text-dark)' }}>312</strong> Google reviews
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1.75rem' }}>
              {['ISO 9001 Certified', '15+ Years Active', 'Pan-India Delivery'].map((l) => (
                <span key={l} style={{ padding: '0.3rem 0.75rem', borderRadius: '100px', background: 'rgba(201,168,76,0.08)', border: '1px solid rgba(201,168,76,0.22)', fontSize: '0.72rem', fontFamily: 'var(--font-inter)', fontWeight: 600, color: 'var(--gold-deep)' }}>
                  {l}
                </span>
              ))}
            </div>
            <a href="https://maps.app.goo.gl/kzyGxozpqqGEK13i6" target="_blank" rel="noopener noreferrer" className="btn-gold" style={{ width: '100%' }}>
              View on Google Maps →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Final CTA with form ──────────────────────────────────────────────────── */
function FinalCta() {
  return (
    <section style={{ background: 'var(--charcoal)', padding: 'clamp(3rem, 6vw, 5rem) 0', position: 'relative', overflow: 'hidden' }} aria-labelledby="lp-final-heading">
      <div aria-hidden="true" style={{ position: 'absolute', top: '-100px', left: '50%', transform: 'translateX(-50%)', width: '600px', height: '400px', background: 'radial-gradient(ellipse, rgba(201,168,76,0.12) 0%, transparent 65%)', filter: 'blur(60px)', pointerEvents: 'none' }} />
      <div className="container" style={{ position: 'relative' }}>
        <div className="lp-hero-grid">
          <div>
            <h2 id="lp-final-heading" style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(1.9rem, 3.6vw, 2.9rem)', color: 'var(--text-on-dark)', lineHeight: 1.1, letterSpacing: '-0.02em', marginBottom: '1.1rem' }}>
              Ready to Build Your{' '}
              <em className="gold-shimmer" style={{ fontWeight: 800, fontStyle: 'normal' }}>
                Dream Kitchen?
              </em>
            </h2>
            <p style={{ fontFamily: 'var(--font-inter)', fontSize: '1rem', color: 'rgba(245,240,232,0.6)', lineHeight: 1.65, marginBottom: '1.5rem', maxWidth: '32rem' }}>
              Get a <strong style={{ color: 'var(--text-on-dark)' }}>free CAD layout and an itemised quote</strong> from India&apos;s ISO 9001 certified commercial kitchen experts. A specialist will call you within <strong style={{ color: 'var(--gold)' }}>1 business hour</strong>.
            </p>
            <ul style={{ listStyle: 'none', display: 'grid', gap: '0.6rem', marginBottom: '1.75rem' }}>
              {['Free kitchen layout & site visit', 'Best-price guarantee on all brands', 'Fixed 21-day turnkey timeline', 'Pan-India supply & installation'].map((t) => (
                <li key={t} style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontFamily: 'var(--font-inter)', fontSize: '0.95rem', color: 'rgba(245,240,232,0.78)' }}>
                  <CheckCircle2 size={17} style={{ color: 'var(--gold)', flexShrink: 0 }} />
                  {t}
                </li>
              ))}
            </ul>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
              <a href={`tel:${PHONE_TEL}`} className="btn-gold"><Phone size={17} /> Call {PHONE}</a>
              <a href={WA} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.875rem 1.5rem', borderRadius: '5px', border: '1.5px solid rgba(201,168,76,0.5)', color: 'var(--gold)', fontFamily: 'var(--font-inter)', fontWeight: 700, fontSize: '0.95rem', textDecoration: 'none' }}>
                <MessageCircle size={17} /> WhatsApp
              </a>
            </div>
          </div>
          <div>
            <LeadForm heading="Claim My Free Layout + Quote" subheading="30 seconds. No obligation. Reply within 1 business hour." ctaLabel="Claim My Free Quote" />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Footer (address + CTA, no nav links) ─────────────────────────────────── */
function Footer() {
  return (
    <footer style={{ background: 'var(--charcoal-warm)', borderTop: '1px solid rgba(201,168,76,0.15)', padding: '2.5rem 0 6rem' }}>
      <div className="container" style={{ display: 'grid', gap: '1.5rem', textAlign: 'center' }}>
        <Image src="/VSD_LOGO.png" alt="VSD International" width={150} height={46} style={{ height: 'auto', width: 'auto', maxHeight: 46, margin: '0 auto' }} />
        <p style={{ fontFamily: 'var(--font-inter)', fontSize: '0.85rem', color: 'rgba(245,240,232,0.55)', lineHeight: 1.7, maxWidth: '34rem', margin: '0 auto' }}>
          <strong style={{ color: 'var(--text-on-dark)' }}>VSD International</strong> — ISO 9001 certified commercial kitchen equipment manufacturer &amp; turnkey setup partner. Serving hotels, restaurants, cloud kitchens &amp; hospitals across India since 2009.
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '0.5rem 1.5rem', fontFamily: 'var(--font-inter)', fontSize: '0.85rem', color: 'rgba(245,240,232,0.6)' }}>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}><MapPin size={14} style={{ color: 'var(--gold)' }} /> A-347, Saraswati Gali, Mandawali, New Delhi 110092</span>
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '0.75rem' }}>
          <a href={`tel:${PHONE_TEL}`} className="btn-gold"><Phone size={16} /> Call {PHONE}</a>
          <a href="#lead-form" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.875rem 1.5rem', borderRadius: '5px', border: '1.5px solid rgba(201,168,76,0.5)', color: 'var(--gold)', fontFamily: 'var(--font-inter)', fontWeight: 700, fontSize: '0.95rem', textDecoration: 'none' }}>
            Get Free Quote <ArrowRight size={15} />
          </a>
        </div>
        <p style={{ fontFamily: 'var(--font-inter)', fontSize: '0.72rem', color: 'rgba(245,240,232,0.3)', marginTop: '0.5rem' }}>
          © {new Date().getFullYear()} VSD International. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

/* ─── Mobile sticky call/WhatsApp bar ──────────────────────────────────────── */
function MobileCtaBar() {
  return (
    <div className="lp-mobile-cta" aria-hidden="false">
      <a href={`tel:${PHONE_TEL}`} style={{ flex: 1, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '0.45rem', padding: '0.95rem', background: 'linear-gradient(135deg, var(--gold-light), var(--gold), var(--gold-deep))', color: '#1A1508', fontFamily: 'var(--font-inter)', fontWeight: 700, fontSize: '0.9rem', textDecoration: 'none' }}>
        <Phone size={17} /> Call Now
      </a>
      <a href={WA} target="_blank" rel="noopener noreferrer" style={{ flex: 1, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '0.45rem', padding: '0.95rem', background: '#1F2A23', color: '#fff', fontFamily: 'var(--font-inter)', fontWeight: 700, fontSize: '0.9rem', textDecoration: 'none', borderLeft: '1px solid rgba(255,255,255,0.08)' }}>
        <MessageCircle size={17} style={{ color: '#5CE07A' }} /> WhatsApp
      </a>
    </div>
  );
}
