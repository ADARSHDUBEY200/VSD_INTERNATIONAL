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
  Star,
  Hotel,
  Quote,
} from 'lucide-react';
import LeadForm from './LeadForm';
import LeadCta from './LeadCta';
import LeadPopup from './LeadPopup';
import Reveal from './Reveal';
import RevealTitle from './RevealTitle';
import CountUp from './CountUp';
import HeroGlow from './HeroGlow';
import LoaderIntro from './LoaderIntro';
import TiltCard from './TiltCard';
import IconBadge from './IconBadge';
import AnimatedStars from './AnimatedStars';

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

      <LoaderIntro />

      <StickyBar />

      <main style={{ background: 'var(--charcoal)', overflowX: 'hidden' }}>
        <Hero />
        <Stats />
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
      <LeadPopup />
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
        <Image src="/VSD_LOGO_DARK.webp" alt="VSD International" width={152} height={90} priority className="lp-sticky-logo" />

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
          <LeadCta className="btn-gold" style={{ minHeight: '2.5rem', padding: '0.55rem 1.25rem', fontSize: '0.85rem' }}>
            Free Quote
          </LeadCta>
        </div>
      </div>
    </header>
  );
}

/* ─── Hero (Premium golden-gradient banner, form on the right at laptop+) ──── */
function Hero() {
  return (
    <section className="lp-premium-hero" aria-labelledby="lp-hero-heading">
      <HeroGlow />
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="lp-hero-inner">
          {/* Copy column */}
          <div>
            {/* Eyebrow */}
            <Reveal immediate delay={0}>
              <div className="lp-eyebrow" style={{ marginBottom: '1.5rem' }}>
                <Award size={14} /> ISO 9001 Certified • Trusted Since 2009
              </div>
            </Reveal>

            {/* Headline */}
            <Reveal immediate delay={0.1} y={28}>
              <h1 id="lp-hero-heading" className="lp-hero-title" style={{ marginBottom: '1.35rem' }}>
                Setup Your Commercial Kitchen in{' '}
                <span className="lp-gold-text">Just 21 Days</span>
              </h1>
            </Reveal>

            {/* Sub-copy */}
            <Reveal immediate delay={0.2}>
              <p className="lp-hero-sub" style={{ maxWidth: '40rem', margin: '0 0 1.4rem' }}>
                Turnkey <strong style={{ color: 'var(--text-on-dark)', fontWeight: 600 }}>design, equipment supply, SS&nbsp;304 fabrication &amp; installation</strong> — handled end-to-end by one ISO&nbsp;9001 certified team for hotels, restaurants, cloud kitchens &amp; hospitals.
              </p>
            </Reveal>

            {/* Rating trust line */}
            <Reveal immediate delay={0.3}>
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.6rem',
                  flexWrap: 'wrap',
                  justifyContent: 'center',
                  marginBottom: '2rem',
                }}
              >
                <span className="stars" style={{ fontSize: '1.1rem', letterSpacing: '0.08em' }}>★★★★★</span>
                <span style={{ fontFamily: 'var(--font-poppins)', fontSize: '0.9rem', color: 'rgba(245,240,232,0.7)' }}>
                  Rated <strong style={{ color: 'var(--gold-bright)' }}>4.9/5</strong> by 312 happy clients on Google
                </span>
              </div>
            </Reveal>

            {/* CTAs */}
            <Reveal immediate delay={0.4}>
              <div className="lp-hero-ctas">
                <LeadCta className="btn-gold" style={{ fontSize: '1rem', padding: '0.95rem 2.1rem', fontFamily: 'var(--font-poppins)' }}>
                  Get My Free Quote <ArrowRight size={17} />
                </LeadCta>
                <a href={`tel:${PHONE_TEL}`} className="lp-btn-outline" style={{ justifyContent: 'center' }}>
                  <Phone size={17} /> Call {PHONE}
                </a>
                <a href={WA} target="_blank" rel="noopener noreferrer" className="lp-btn-whatsapp" style={{ justifyContent: 'center' }}>
                  <MessageCircle size={17} /> WhatsApp Us
                </a>
              </div>
            </Reveal>
          </div>

          {/* Form column — laptop and up only; mobile relies on the popup + sticky CTA bar */}
          <div className="lp-hero-form-col">
            <Reveal immediate delay={0.25} x={28} y={0}>
              <LeadForm
                id="lead-form"
                heading="Get My Free Kitchen Quote"
                subheading="Free CAD layout + itemised quote. Only takes 30 seconds."
                ctaLabel="Get My Free Quote"
              />
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Premium stats band (authentic proof, just below hero) ────────────────── */
function Stats() {
  const stats: { Icon: typeof Award; value: number; decimals?: number; suffix: string; label: string; rating?: boolean }[] = [
    { Icon: Award, value: 15, suffix: '+', label: 'Years of Experience' },
    { Icon: Star, value: 4.9, decimals: 1, suffix: '', label: 'Google Rating', rating: true },
    { Icon: Hotel, value: 200, suffix: '+', label: 'Hotels Served' },
    { Icon: Factory, value: 1, suffix: '', label: 'Delhi Factory' },
  ];
  return (
    <section className="lp-stats-band" aria-label="VSD International by the numbers">
      <div className="container">
        <div className="lp-stats">
          {stats.map(({ Icon, value, decimals, suffix, label, rating }, i) => (
            <Reveal key={label} delay={i * 0.08}>
              <div className="lp-stat">
                <span className="lp-stat-icon">
                  <Icon size={22} />
                </span>
                <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'center', gap: '0.2rem' }}>
                  <span className="lp-stat-num">
                    <CountUp value={value} decimals={decimals} />{suffix}
                  </span>
                  {rating && (
                    <span style={{ fontFamily: 'var(--font-poppins)', fontSize: '0.95rem', fontWeight: 600, color: 'rgba(245,240,232,0.45)' }}>/5</span>
                  )}
                </div>
                {rating && (
                  <span className="stars" style={{ display: 'block', fontSize: '0.78rem', letterSpacing: '0.12em', marginTop: '0.35rem' }}>★★★★★</span>
                )}
                <div className="lp-stat-label">{label}</div>
              </div>
            </Reveal>
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
          <RevealTitle id="lp-why-heading" style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(1.75rem, 3.4vw, 2.6rem)', color: 'var(--text-dark)', letterSpacing: '-0.02em', margin: '0.75rem 0 0' }} text="Why 500+ Kitchens Chose Us" />
          <span className="gold-divider lp-divider-glow" style={{ marginTop: '1rem' }} />
        </div>

        <div className="lp-card-grid">
          {usps.map(({ Icon, title, body }, i) => (
            <Reveal key={title} delay={i * 0.08}>
              <TiltCard
                style={{
                  background: 'var(--surface)',
                  border: '1px solid var(--border)',
                  padding: '1.75rem',
                  height: '100%',
                }}
              >
                <IconBadge>
                  <Icon size={22} style={{ color: 'var(--gold-deep)' }} />
                </IconBadge>
                <h3 style={{ fontFamily: 'var(--font-playfair)', fontSize: '1.2rem', color: 'var(--text-dark)', marginBottom: '0.55rem' }}>{title}</h3>
                <p style={{ fontFamily: 'var(--font-inter)', fontSize: '0.92rem', color: 'var(--text-body)', lineHeight: 1.65 }}>{body}</p>
              </TiltCard>
            </Reveal>
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
        style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 65% 130% at 50% 0%, rgba(201,168,76,0.18) 0%, transparent 65%), radial-gradient(ellipse 40% 90% at 85% 100%, rgba(240,196,66,0.12) 0%, transparent 70%)', pointerEvents: 'none' }}
      />
      <div className="container" style={{ position: 'relative', textAlign: 'center', maxWidth: '46rem' }}>
        <Reveal>
          <p style={{ fontFamily: 'var(--font-inter)', fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '0.75rem' }}>
            {eyebrow}
          </p>
          <h2 style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', color: 'var(--text-on-dark)', lineHeight: 1.18, marginBottom: '0.75rem' }}>{title}</h2>
          <p style={{ fontFamily: 'var(--font-inter)', fontSize: '0.98rem', color: 'rgba(245,240,232,0.55)', marginBottom: '1.75rem' }}>{sub}</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', justifyContent: 'center' }}>
            <LeadCta className="btn-gold" style={{ fontSize: '0.95rem' }}>
              Get My Free Quote <ArrowRight size={16} />
            </LeadCta>
            <a href={`tel:${PHONE_TEL}`} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.875rem 1.5rem', borderRadius: '5px', border: '1.5px solid rgba(201,168,76,0.5)', color: 'var(--gold)', fontFamily: 'var(--font-inter)', fontWeight: 700, fontSize: '0.95rem', textDecoration: 'none' }}>
              <Phone size={16} /> {PHONE}
            </a>
          </div>
        </Reveal>
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
          <RevealTitle id="lp-process-heading" style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(1.75rem, 3.4vw, 2.6rem)', color: 'var(--text-dark)', letterSpacing: '-0.02em', margin: '0.75rem 0 0' }} text="One Team, From Drawing to Handover" />
          <span className="gold-divider lp-divider-glow" style={{ marginTop: '1rem' }} />
        </div>

        <div className="lp-step-grid">
          {steps.map(({ Icon, n, title, body }, i) => (
            <Reveal key={n} delay={i * 0.07}>
              <TiltCard style={{ background: '#fff', border: '1px solid var(--border)', padding: '1.5rem', height: '100%' }}>
                <span style={{ position: 'absolute', top: '1rem', right: '1.1rem', fontFamily: 'var(--font-playfair)', fontSize: '1.6rem', fontWeight: 800, color: 'rgba(201,168,76,0.28)' }}>{n}</span>
                <IconBadge size={44}>
                  <Icon size={22} style={{ color: 'var(--gold-deep)' }} />
                </IconBadge>
                <h3 style={{ fontFamily: 'var(--font-playfair)', fontSize: '1.1rem', color: 'var(--text-dark)', marginBottom: '0.45rem' }}>{title}</h3>
                <p style={{ fontFamily: 'var(--font-inter)', fontSize: '0.875rem', color: 'var(--text-body)', lineHeight: 1.6 }}>{body}</p>
              </TiltCard>
            </Reveal>
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
          <RevealTitle id="lp-compare-heading" style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(1.75rem, 3.4vw, 2.6rem)', color: 'var(--text-dark)', letterSpacing: '-0.02em', margin: '0.75rem 0 0' }} text="Why VSD Beats a Typical Supplier" />
          <span className="gold-divider lp-divider-glow" style={{ marginTop: '1rem' }} />
        </div>

        <Reveal>
          <div style={{ border: '1px solid var(--border)', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 12px 40px rgba(0,0,0,0.05)' }}>
            {/* header */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr clamp(3.25rem, 15vw, 7rem) clamp(3.25rem, 15vw, 7rem)', background: 'var(--charcoal)', color: 'var(--text-on-dark)' }}>
              <div style={{ padding: 'clamp(0.75rem, 2.5vw, 1rem) clamp(0.75rem, 4vw, 1.25rem)', fontFamily: 'var(--font-inter)', fontWeight: 700, fontSize: 'clamp(0.72rem, 2.6vw, 0.8rem)', letterSpacing: '0.04em' }}>What matters</div>
              <div style={{ padding: 'clamp(0.75rem, 2.5vw, 1rem) 0.4rem', textAlign: 'center', fontFamily: 'var(--font-playfair)', fontWeight: 800, fontSize: 'clamp(0.85rem, 3vw, 0.95rem)', color: 'var(--gold-bright)' }}>VSD</div>
              <div style={{ padding: 'clamp(0.75rem, 2.5vw, 1rem) 0.4rem', textAlign: 'center', fontFamily: 'var(--font-inter)', fontWeight: 600, fontSize: 'clamp(0.72rem, 2.6vw, 0.82rem)', color: 'rgba(245,240,232,0.5)' }}>Others</div>
            </div>
            {rows.map(([label, vsd, other], i) => (
              <div
                key={label}
                className="lp-compare-row"
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr clamp(3.25rem, 15vw, 7rem) clamp(3.25rem, 15vw, 7rem)',
                  alignItems: 'center',
                  background: i % 2 ? 'var(--surface)' : '#fff',
                  borderTop: '1px solid var(--border)',
                }}
              >
                <div style={{ padding: 'clamp(0.7rem, 2.5vw, 0.95rem) clamp(0.75rem, 4vw, 1.25rem)', fontFamily: 'var(--font-inter)', fontSize: 'clamp(0.78rem, 2.8vw, 0.88rem)', lineHeight: 1.4, color: 'var(--text-body)' }}>{label}</div>
                <div style={{ display: 'flex', justifyContent: 'center', padding: 'clamp(0.7rem, 2.5vw, 0.95rem) 0.3rem' }}>
                  {vsd ? <CheckCircle2 size={18} style={{ color: '#1F9D55' }} /> : <XCircle size={18} style={{ color: '#D1495B' }} />}
                </div>
                <div style={{ display: 'flex', justifyContent: 'center', padding: 'clamp(0.7rem, 2.5vw, 0.95rem) 0.3rem' }}>
                  {other ? <CheckCircle2 size={18} style={{ color: '#1F9D55' }} /> : <XCircle size={18} style={{ color: '#C9C3B5' }} />}
                </div>
              </div>
            ))}
          </div>
        </Reveal>
        <div style={{ textAlign: 'center', marginTop: '2rem' }}>
          <LeadCta className="btn-gold">
            Get My Free Quote <ArrowRight size={16} />
          </LeadCta>
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
        <RevealTitle id="lp-clients-heading" style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', color: 'var(--text-on-dark)', margin: '0.75rem 0 0.5rem' }} text="Kitchens Built for India's Best Brands" />
        <p style={{ fontFamily: 'var(--font-inter)', fontSize: '0.92rem', color: 'rgba(245,240,232,0.5)', marginBottom: '2rem' }}>
          From 5-star hotels and NABH hospitals to high-volume cloud kitchens.
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '0.75rem' }}>
          {logos.map((l, i) => (
            <Reveal key={l} delay={i * 0.04} y={10}>
              <span
                className="lp-client-pill"
                style={{
                  display: 'inline-block',
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
            </Reveal>
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
          <RevealTitle id="lp-reviews-heading" style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(1.75rem, 3.4vw, 2.6rem)', color: 'var(--text-dark)', letterSpacing: '-0.02em', margin: '0.75rem 0 0' }} text="What Our Kitchen Clients Say" />
          <span className="gold-divider lp-divider-glow" style={{ marginTop: '1rem' }} />
        </div>

        <div className="lp-card-grid">
          {reviews.map((r, i) => (
            <Reveal key={r.name} delay={i * 0.1}>
              <TiltCard style={{ background: '#fff', border: '1px solid var(--border)', padding: '1.75rem', height: '100%' }}>
                <Quote className="lp-quote-mark" strokeWidth={1.5} aria-hidden="true" />
                <AnimatedStars size={18} className="lp-review-stars" />
                <blockquote style={{ fontFamily: 'var(--font-inter)', fontSize: '0.92rem', color: 'var(--text-body)', lineHeight: 1.7, margin: '0.9rem 0 1.25rem' }}>
                  “{r.text}”
                </blockquote>
                <figcaption style={{ borderTop: '1px solid var(--border)', paddingTop: '0.9rem' }}>
                  <div style={{ fontFamily: 'var(--font-inter)', fontWeight: 700, fontSize: '0.9rem', color: 'var(--text-dark)' }}>{r.name}</div>
                  <div style={{ fontFamily: 'var(--font-inter)', fontSize: '0.78rem', color: 'var(--text-muted)' }}>{r.role}</div>
                </figcaption>
              </TiltCard>
            </Reveal>
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
          <RevealTitle id="lp-faq-heading" style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(1.75rem, 3.4vw, 2.6rem)', color: 'var(--text-dark)', letterSpacing: '-0.02em', margin: '0.75rem 0 0' }} text="Commercial Kitchen Setup FAQs" />
          <span className="gold-divider lp-divider-glow" style={{ marginTop: '1rem' }} />
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
              <p style={{ padding: '0 1.1rem 1.2rem clamp(1.85rem, 9vw, 3rem)', fontFamily: 'var(--font-inter)', fontSize: '0.9rem', color: 'var(--text-body)', lineHeight: 1.7, margin: 0 }}>
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
    <section style={{ background: 'var(--surface-alt)', padding: 'clamp(3rem, 6vw, 4.5rem) 0' }} aria-label="Verified Google reviews">
      <div className="container" style={{ maxWidth: '34rem', textAlign: 'center' }}>
        <span className="section-label" style={{ marginBottom: '1.5rem', display: 'inline-block' }}>Verified Reviews</span>

        <Reveal y={30}>
          <div style={{ background: '#fff', border: '1px solid var(--border)', borderRadius: '20px', overflow: 'hidden', boxShadow: '0 8px 48px rgba(0,0,0,0.07)' }}>
            <div style={{ height: '3px', background: 'linear-gradient(90deg, var(--gold-bright), var(--gold), var(--gold-deep))' }} />
            <div style={{ padding: 'clamp(1.75rem, 6vw, 2.5rem) clamp(1.25rem, 5vw, 2rem) clamp(1.5rem, 5vw, 2rem)' }}>
              <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1rem' }}>
                <AnimatedStars size={28} gap={4} />
              </div>
              <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'center', gap: '0.4rem', marginBottom: '0.5rem' }}>
                <span style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(2.75rem, 13vw, 4rem)', fontWeight: 800, color: 'var(--text-dark)', lineHeight: 1 }}>5.0</span>
                <span style={{ fontFamily: 'var(--font-inter)', fontSize: 'clamp(0.95rem, 3.5vw, 1.15rem)', color: 'var(--text-muted)', fontWeight: 500 }}>/ 5</span>
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
        </Reveal>
      </div>
    </section>
  );
}

/* ─── Final CTA with form ──────────────────────────────────────────────────── */
function FinalCta() {
  return (
    <section style={{ background: 'var(--charcoal)', padding: 'clamp(3rem, 6vw, 5rem) 0', position: 'relative', overflow: 'hidden' }} aria-labelledby="lp-final-heading">
      <div aria-hidden="true" className="lp-final-glow" style={{ position: 'absolute', top: '-120px', left: '50%', transform: 'translateX(-50%)', width: '720px', height: '460px', background: 'radial-gradient(ellipse, rgba(240,196,66,0.20) 0%, rgba(201,168,76,0.1) 45%, transparent 70%)', filter: 'blur(64px)', pointerEvents: 'none' }} />
      <div className="container" style={{ position: 'relative' }}>
        <div className="lp-hero-grid">
          <Reveal x={-24} y={0}>
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
                <a href={WA} target="_blank" rel="noopener noreferrer" className="lp-btn-whatsapp">
                  <MessageCircle size={17} /> WhatsApp
                </a>
              </div>
            </div>
          </Reveal>
          <Reveal x={24} y={0} delay={0.1}>
            <LeadForm heading="Claim My Free Layout + Quote" subheading="30 seconds. No obligation. Reply within 1 business hour." ctaLabel="Claim My Free Quote" />
          </Reveal>
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
          <LeadCta style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.875rem 1.5rem', borderRadius: '5px', border: '1.5px solid rgba(201,168,76,0.5)', background: 'transparent', color: 'var(--gold)', fontFamily: 'var(--font-inter)', fontWeight: 700, fontSize: '0.95rem', cursor: 'pointer' }}>
            Get Free Quote <ArrowRight size={15} />
          </LeadCta>
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
      <a href={`tel:${PHONE_TEL}`} className="mob-cta-solid" style={{ flex: 1, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '0.45rem', padding: '0.95rem', background: 'linear-gradient(135deg, var(--gold-light), var(--gold), var(--gold-deep))', color: '#1A1508', fontFamily: 'var(--font-inter)', fontWeight: 700, fontSize: '0.9rem', textDecoration: 'none' }}>
        <Phone size={17} /> Call Now
      </a>
      <a href={WA} target="_blank" rel="noopener noreferrer" className="mob-cta-solid" style={{ flex: 1, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '0.45rem', padding: '0.95rem', background: 'linear-gradient(135deg, #34E07B 0%, #25D366 55%, #128C7E 100%)', color: '#fff', fontFamily: 'var(--font-inter)', fontWeight: 700, fontSize: '0.9rem', textDecoration: 'none', borderLeft: '1px solid rgba(255,255,255,0.12)' }}>
        <MessageCircle size={17} /> WhatsApp
      </a>
    </div>
  );
}
