/* ═══════════════════════════════════════════════════════════════════════════
   PAID-ADS LANDING PAGE — Turnkey Commercial Kitchen Setup
   Built on the learnings of "DotCom Secrets" by Russell Brunson: one Hook
   (numbered, benefit-led headline) → one Story (proof, process, USPs) → one
   Offer (free layout + itemised quote + best-price guarantee), a single
   repeated CTA, navigation stripped to remove leaks, and risk-reversal +
   urgency to lift opt-ins. Structure follows the LP Design SOP.
   ═══════════════════════════════════════════════════════════════════════════ */

import type { Metadata } from 'next';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import {
  Phone,
  Sparkles,
  CheckCircle2,
  XCircle,
  Check,
  ShieldCheck,
  Wrench,
  Ruler,
  Factory,
  Award,
  Clock,
  IndianRupee,
  MapPin,
  Headset,
  Hotel,
} from 'lucide-react';
import LeadForm from './LeadForm';
import LeadCta from './LeadCta';
import LeadPopup from './LeadPopup';
import Reveal from './Reveal';
import RevealTitle from './RevealTitle';
import CountUp from './CountUp';
import HeroGlow from './HeroGlow';
import TiltCard from './TiltCard';
import IconBadge from './IconBadge';
import AnimatedStars from './AnimatedStars';
import GoogleIcon from './GoogleIcon';
import type { Review } from './TestimonialSlider';
import CertificateGallery from './CertificateGallery';
import WhatsAppIcon from './WhatsAppIcon';

/* ─── Dynamically loaded heavy below-fold components ───────────────────────── */
const TestimonialSlider = dynamic(() => import('./TestimonialSlider'), {
  loading: () => <div style={{ height: '340px', borderRadius: '16px', background: 'var(--surface)', opacity: 0.5 }} />,
});
const ProductsCarousel = dynamic(() => import('./ProductsCarousel'), {
  loading: () => <div style={{ height: '420px', borderRadius: '16px', background: 'var(--surface)', opacity: 0.5 }} />,
});
const WoodFireCarousel = dynamic(() => import('./WoodFireCarousel'), {
  loading: () => <div style={{ height: '440px', borderRadius: '20px', background: 'rgba(255,110,25,0.05)', border: '1px solid rgba(255,110,25,0.12)' }} />,
});

const PHONE = '09250346370';
const PHONE_TEL = '+919250346370';
const WA = `https://wa.me/919250346370?text=${encodeURIComponent(
  "Hi VSD International! I'm looking for commercial kitchen equipment. Please share your best quote.",
)}`;

/* ─── Shared section CTA — a persuasive hook + a single channel button.
   Each section alternates channel (whatsapp / phone) and uses its own catchy
   hook + label; `tone` picks a hook colour that reads on light vs dark bg. ─── */
function SectionCta({
  hook,
  label,
  channel,
  tone = 'light',
}: {
  hook: string;
  label: string;
  channel: 'whatsapp' | 'phone';
  tone?: 'light' | 'dark';
}) {
  return (
    <div className={`lp-section-cta lp-section-cta--${tone}`}>
      <span className="lp-section-cta-ornament" aria-hidden="true">
        <span className="lp-section-cta-line" />
        <Sparkles size={15} />
        <span className="lp-section-cta-line" />
      </span>
      <p className="lp-section-cta-hook">{hook}</p>
      {channel === 'whatsapp' ? (
        <a href={WA} target="_blank" rel="noopener noreferrer" className="lp-btn-whatsapp lp-cta-single">
          <WhatsAppIcon size={18} /> {label}
        </a>
      ) : (
        <a href={`tel:${PHONE_TEL}`} className="btn-gold lp-cta-single">
          <Phone size={17} /> {label}
        </a>
      )}
    </div>
  );
}

/* ─── Metadata ─────────────────────────────────────────────────────────────── */
export const metadata: Metadata = {
  title: 'Commercial Kitchen Setup in 21 Days | Free Layout + Quote | VSD International',
  description:
    'Get a turnkey commercial kitchen — design, equipment supply, SS fabrication & installation. ISO 9001 certified. 200+ kitchens since 2009. Free layout + itemised quote in 1 hour. ☎ +91-92503 46370.',
  keywords: [
    'commercial kitchen equipment',
    'commercial kitchen equipment near me',
    'commercial kitchen equipment manufacturer in delhi',
    'commercial kitchen cooking equipment',
    'commercial cooking equipment',
    'manufacturer of commercial kitchen equipment',
    'suppliers of commercial kitchen equipment',
    'industrial kitchen equipment manufacturers',
    'restaurant kitchen equipment',
    'restaurant cooking equipment',
    'restaurant and kitchen equipment',
  ],
  alternates: { canonical: 'https://vsdinternational.com/lp/commercial-kitchen-setup' },
  robots: { index: true, follow: true },
  openGraph: {
    type: 'website',
    url: 'https://vsdinternational.com/lp/commercial-kitchen-setup',
    title: 'Setup Your Commercial Kitchen in 21 Days | VSD International',
    description:
      'ISO 9001 certified turnkey commercial kitchen setup — design, supply, fabrication & installation. 200+ projects. Free layout + quote.',
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
    a: 'Both. VSD International is an ISO 9001 certified commercial kitchen equipment manufacturer with in-house SS 304 stainless steel fabrication across our 2 Delhi NCR factories, and an authorised dealer for global brands like Rational, Robot Coupe and Frymaster — so your commercial kitchen setup is supplied and installed by one accountable team.',
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
      {/* Preconnect for Cloudinary product images — improves product carousel LCP */}
      <link rel="preconnect" href="https://res.cloudinary.com" />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(lpSchema) }} />

      <StickyBar />

      <main style={{ background: 'var(--charcoal)', overflowX: 'hidden' }}>
        <Hero />
        <Clients />
        <OurProducts />
        <OurServices />
        <Certificates />
        <WoodFireOvens />
        <WhyUs />
        <CtaBand
          eyebrow="Only a few free site visits left this month"
          title="Get your free kitchen layout + itemised quote"
          sub="No obligation. A kitchen expert calls you within 1 business hour."
          channel="phone"
          label="Reserve a Free Site Visit"
        />
        <Comparison />
        <CtaBand
          eyebrow="200+ kitchens delivered since 2009"
          title="Tell us about your kitchen — we'll handle the rest"
          sub="Design, supply, SS fabrication & installation under one ISO 9001 certified roof."
          channel="phone"
          label="Call Now — Speak to an Expert"
        />
        <Testimonials />
        <Faqs />
        <GoogleReviews />
        <FinalCta />
        <Footer />
        <DisclaimerSection />
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
                <Award size={14} /> ISO 9001 Certified Manufacturer • 200+ Kitchens Since 2009
              </div>
            </Reveal>

            {/* Headline */}
            <Reveal immediate delay={0.1} y={28}>
              <h1 id="lp-hero-heading" className="lp-hero-title" style={{ marginBottom: '1.35rem' }}>
                Your Trusted Commercial Kitchen {' '}
                <span className="lp-gold-text">Equipment Partner.</span>
              </h1>
            </Reveal>

            {/* Sub-copy */}
            <Reveal immediate delay={0.2}>
              <p className="lp-hero-sub" style={{ maxWidth: '40rem', margin: '0 0 1.4rem' }}>
                From <strong style={{ color: 'var(--text-on-dark)', fontWeight: 600 }}>design and manufacturing</strong> to <strong style={{ color: 'var(--text-on-dark)', fontWeight: 600 }}>installation</strong>, we deliver complete kitchen solutions engineered for <strong style={{ color: 'var(--text-on-dark)', fontWeight: 600 }}>performance and reliability</strong>.
              </p>
            </Reveal>

            {/* Trust stats — 2×2 pointer cards */}
            <Reveal immediate delay={0.3}>
              <div className="lp-hero-stats">
                <div className="lp-hero-stat">
                  <span className="lp-hero-stat-badge"><Award size={19} /></span>
                  <div className="lp-hero-stat-text">
                    <span className="lp-hero-stat-num"><CountUp value={15} />+</span>
                    <span className="lp-hero-stat-label">Years Experience</span>
                  </div>
                </div>
                <div className="lp-hero-stat">
                  <span className="lp-hero-stat-badge"><GoogleIcon size={19} /></span>
                  <div className="lp-hero-stat-text">
                    <span className="lp-hero-stat-num"><CountUp value={5} />/5</span>
                    <span className="lp-hero-stat-label">Google Rating</span>
                  </div>
                </div>
                <div className="lp-hero-stat">
                  <span className="lp-hero-stat-badge"><Hotel size={19} /></span>
                  <div className="lp-hero-stat-text">
                    <span className="lp-hero-stat-num"><CountUp value={200} />+</span>
                    <span className="lp-hero-stat-label">Hotels Served</span>
                  </div>
                </div>
                <div className="lp-hero-stat">
                  <span className="lp-hero-stat-badge"><Factory size={19} /></span>
                  <div className="lp-hero-stat-text">
                    <span className="lp-hero-stat-num"><CountUp value={2} /></span>
                    <span className="lp-hero-stat-label">Delhi Factories</span>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* CTAs — desktop/laptop only (mobile shows the compact form below instead) */}
            <Reveal immediate delay={0.4}>
              <div className="lp-hero-ctas">
                <a href={`tel:${PHONE_TEL}`} className="lp-btn-outline" style={{ justifyContent: 'center' }}>
                  <Phone size={17} /> Call {PHONE}
                </a>
                <a href={WA} target="_blank" rel="noopener noreferrer" className="lp-btn-whatsapp" style={{ justifyContent: 'center' }}>
                  <WhatsAppIcon size={17} /> WhatsApp Us
                </a>
              </div>
            </Reveal>

            {/* Compact lead form — phones only (replaces the Call/WhatsApp CTAs) */}
            <div className="lp-hero-form-mobile">
              <Reveal immediate delay={0.4} y={18}>
                <LeadForm
                  compact
                  heading="Get Your Free Kitchen Quote"
                  subheading="Enter your details — an expert calls you within 1 business hour."
                  ctaLabel="Grab Your Free Quote"
                />
              </Reveal>
            </div>
          </div>

          {/* Form column — laptop and up only; mobile relies on the compact form above */}
          <div className="lp-hero-form-col">
            <Reveal immediate delay={0.25} x={28} y={0}>
              <LeadForm
                id="lead-form"
                heading="Get Your Free Kitchen Quote"
                subheading="Free CAD layout + itemised quote. Only takes 30 seconds."
                ctaLabel="Get an Instant Free Quote"
              />
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Why VSD (USPs in pointers) ───────────────────────────────────────────── */
function WhyUs() {
  const usps: { Icon: typeof Wrench; title: string; body: React.ReactNode }[] = [
    { Icon: Factory, title: 'Manufacturer, not a middleman', body: <>In-house <strong>SS&nbsp;304 fabrication</strong> across our <strong>2 Delhi NCR factories</strong> means factory-direct pricing and zero markup chains.</> },
    { Icon: Ruler, title: 'Free CAD kitchen layout', body: <>A <strong>free workflow-optimised layout</strong> after your site visit — included on every project above <strong>₹5 lakh</strong>.</> },
    { Icon: IndianRupee, title: 'Fixed, itemised quote', body: <>No surprises — a <strong>line-by-line quote</strong> locked before work starts, with a <strong>best-price guarantee</strong> on all brands.</> },
    { Icon: Clock, title: '21-day turnkey delivery', body: <>Design → supply → fabrication → install, on a <strong>committed timeline</strong>. Cloud kitchens ready in <strong>~14 days</strong>.</> },
    { Icon: ShieldCheck, title: 'ISO 9001 certified quality', body: <>Food-grade SS&nbsp;304, <strong>FSSAI &amp; NABH-compliant</strong> builds, and brand-genuine imported equipment with warranty.</> },
    { Icon: Headset, title: 'One accountable team + AMC', body: <>One partner from <strong>drawing to commissioning</strong>, backed by <strong>80+ active AMC</strong> clients for lifetime support.</> },
  ];
  return (
    <section style={{ background: '#fff', padding: 'clamp(2.25rem, 4.5vw, 3.5rem) 0' }} aria-labelledby="lp-why-heading">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '2.75rem' }}>
          <span className="section-label">Why VSD International</span>
          <RevealTitle id="lp-why-heading" style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(1.75rem, 3.4vw, 2.6rem)', color: 'var(--text-dark)', letterSpacing: '-0.02em', margin: '0.75rem 0 0' }} text="Why 200+ Kitchens Chose Us" />
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

        <div style={{ marginTop: '2.5rem' }}>
          <SectionCta
            tone="light"
            channel="whatsapp"
            hook="See why 200+ kitchens picked VSD over every other vendor?"
            label="Talk to a Kitchen Expert"
          />
        </div>
      </div>
    </section>
  );
}

/* ─── CTA Band (inserted after every ~2 sections) — single channel button ──── */
function CtaBand({ eyebrow, title, sub, channel, label }: { eyebrow: string; title: string; sub: string; channel: 'whatsapp' | 'phone'; label: string }) {
  return (
    <section style={{ background: 'var(--charcoal-warm)', padding: 'clamp(1.75rem, 3.5vw, 2.5rem) 0', position: 'relative', overflow: 'hidden' }}>
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
          <div className="lp-cta-row">
            {channel === 'whatsapp' ? (
              <a href={WA} target="_blank" rel="noopener noreferrer" className="lp-btn-whatsapp lp-cta-single" style={{ fontSize: '0.95rem' }}>
                <WhatsAppIcon size={17} /> {label}
              </a>
            ) : (
              <a href={`tel:${PHONE_TEL}`} className="btn-gold lp-cta-single" style={{ fontSize: '0.95rem' }}>
                <Phone size={16} /> {label}
              </a>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ─── Our Services — full service menu, real photo cards ─────────────────── */
function OurServices() {
  const services: { img: string; n: string; title: string; body: string }[] = [
    { img: '/landingPageServices/Free_Site_Visit_And_Consultation.webp', n: '01', title: 'Free Site Visit & Consultation', body: 'We measure your space, study workflow needs and your menu — at no cost across Delhi NCR and on schedule pan-India.' },
    { img: '/landingPageServices/Cad_Kitchen_Layout_Design.webp', n: '02', title: 'CAD Kitchen Layout & Design', body: 'A workflow-optimised commercial kitchen layout and a fixed, itemised equipment quote — usually within 48 hours.' },
    { img: '/landingPageServices/In_House_SS_304_Fabrication.webp', n: '03', title: 'In-House SS 304 Fabrication', body: 'Worktables, sinks, hoods & shelving fabricated in-house across our 2 Delhi NCR factories to food-grade SS 304 standards.' },
    { img: '/landingPageServices/Equipment_Supply_And_Branded_Imports.webp', n: '04', title: 'Equipment Supply & Branded Imports', body: 'Brand-genuine cooking, refrigeration & prep equipment — authorised dealer for Rational, Robot Coupe, Frymaster and more.' },
    { img: '/landingPageServices/Installation_And_Commissioning.webp', n: '05', title: 'Installation & Commissioning', body: 'Delivery, installation, gas, exhaust, testing and handover — your kitchen ready to fire, on the committed date.' },
    { img: '/landingPageServices/Kitchen_Exhaust_And_Ventilation.webp', n: '06', title: 'Kitchen Exhaust & Ventilation', body: 'Hood, ducting & make-up air design engineered for heat load, grease capture and fire-code compliance.' },
    { img: '/landingPageServices/Staff_Training_And_Handover.webp', n: '07', title: 'Staff Training & Handover', body: 'Hands-on equipment training for your kitchen team so day one runs as smoothly as day one hundred.' },
    { img: '/landingPageServices/Annual_Maintenance_Contract.webp', n: '08', title: 'Annual Maintenance Contract', body: 'Optional AMC plans for breakdown-free running, backed by 80+ active AMC clients across India.' },
  ];
  return (
    <section style={{ background: 'var(--charcoal-light)', padding: 'clamp(2.25rem, 4.5vw, 3.5rem) 0', position: 'relative', overflow: 'hidden' }} aria-labelledby="lp-services-heading">
      {/* Subtle gold bloom for depth on the dark backdrop */}
      <div aria-hidden="true" style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 70% 100% at 50% 0%, rgba(201,168,76,0.10) 0%, transparent 60%)', pointerEvents: 'none' }} />
      <div className="container" style={{ position: 'relative' }}>
        <div style={{ textAlign: 'center', marginBottom: '2.75rem' }}>
          <span className="section-label">Our Services</span>
          <RevealTitle id="lp-services-heading" style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(1.75rem, 3.4vw, 2.6rem)', color: 'var(--text-on-dark)', letterSpacing: '-0.02em', margin: '0.75rem 0 0' }} text="Everything Your Kitchen Needs, One Team" />
          <span className="gold-divider lp-divider-glow" style={{ marginTop: '1rem' }} />
        </div>

        <div className="lp-service-grid">
          {services.map(({ img, n, title, body }, i) => (
            <Reveal key={n} delay={i * 0.06}>
              <TiltCard className="lp-service-card" style={{ background: '#fff', border: '1px solid var(--border)', padding: 0, height: '100%' }}>
                <div className="lp-service-photo">
                  <Image src={img} alt={title} fill sizes="(max-width: 560px) 100vw, (max-width: 900px) 50vw, 25vw" style={{ objectFit: 'cover' }} />
                  <span className="lp-service-photo-overlay" aria-hidden="true" />
                  <span className="lp-service-num">{n}</span>
                </div>
                <div style={{ padding: '1.15rem 1.4rem 1.4rem' }}>
                  <h3 style={{ fontFamily: 'var(--font-playfair)', fontSize: '1.05rem', color: 'var(--text-dark)', margin: '0 0 0.5rem' }}>{title}</h3>
                  <p style={{ fontFamily: 'var(--font-inter)', fontSize: '0.85rem', color: 'var(--text-body)', lineHeight: 1.6 }}>{body}</p>
                </div>
              </TiltCard>
            </Reveal>
          ))}
        </div>

        <div style={{ marginTop: '2.5rem' }}>
          <SectionCta
            tone="dark"
            channel="whatsapp"
            hook="Not sure which of these your kitchen actually needs?"
            label="Ask a Kitchen Expert Free"
          />
        </div>
      </div>
    </section>
  );
}

/* ─── Wood Fire Pizza Ovens — premium carousel ─────────────────────────────── */
const WOOD_FIRE_OVENS = [
  {
    src: '/woodfirepizzaoven/WoodFirePizzaOven_1.webp',
    name: 'Classic Barrel Wood Fire Pizza Oven',
    spec: 'Gas / Wood Dual Fuel · 4–6 Pizza Capacity · Custom Size Available',
    tag: 'Most Popular',
    features: ['800°C peak temperature', 'Dual fuel — wood & LPG', 'Food-grade SS 304 body', 'Custom dimensions available'],
  },
  {
    src: '/woodfirepizzaoven/WoodFirePizzaOven_2.webp',
    name: 'Traditional Dome Wood Fire Oven',
    spec: 'Authentic Wood Fired · Neapolitan Style · 6–8 Pizza Capacity',
    tag: 'Authentic',
    features: ['True brick-dome thermal mass', '90-second Neapolitan pizza', '750°C sustained temperature', 'Indoor & outdoor builds'],
  },
  {
    src: '/woodfirepizzaoven/WoodFirePizzaOven_3.webp',
    name: 'Open-Flame Commercial Pizza Oven',
    spec: 'Visible Live Fire · Restaurant Grade · High Output',
    tag: 'Restaurant Grade',
    features: ['Live flame visible to guests', 'Adds theatre to open kitchens', 'High-volume peak output', 'SS & refractory stone deck'],
  },
  {
    src: '/woodfirepizzaoven/WoodFirePizzaOven_4.webp',
    name: 'High-Capacity Wood Fire Oven',
    spec: 'Gas / Wood · 8–12 Pizza Capacity · Banquet & Buffet Grade',
    tag: 'High Volume',
    features: ['8–12 simultaneous pizzas', 'Engineered for peak service', 'Thick refractory stone deck', 'Ideal for banquets & buffets'],
  },
  {
    src: '/woodfirepizzaoven/WoodFirePizzaOven_5.webp',
    name: 'Premium Heavy-Gauge Pizza Oven',
    spec: 'Wood / Coal Fired · Heavy SS 304 Build · Long Service Life',
    tag: 'Premium',
    features: ['Heavy-gauge SS 304 construction', 'Excellent heat retention', 'Authentic charred crust', '10+ year service life'],
  },
  {
    src: '/woodfirepizzaoven/WoodFirePizzaOven_6.webp',
    name: 'Built-In Kitchen Wood Fire Oven',
    spec: 'In-Kitchen Integration · Tile or Stone Finish · Custom Design',
    tag: 'Custom Build',
    features: ['Integrates into kitchen design', 'Tile, stone or SS finish', 'Concealed exhaust ducting', 'Perfect for hotel kitchens'],
  },
  {
    src: '/woodfirepizzaoven/WoodFirePizzaOven_7.webp',
    name: 'Compact Cloud Kitchen Pizza Oven',
    spec: 'Space-Saving Design · Gas Fired · 90 × 90 cm Footprint',
    tag: 'Cloud Kitchen',
    features: ['Minimal kitchen footprint', 'Gas-fired for consistency', '4–5 pizza capacity', 'Easy ventilation setup'],
  },
  {
    src: '/woodfirepizzaoven/WoodFirePizzaOven_8.webp',
    name: 'Flagship Showpiece Pizza Oven',
    spec: 'Statement Design · Open Mouth · Polished SS Finish',
    tag: 'Showpiece',
    features: ['Restaurant centrepiece design', 'Polished SS or matte finish', 'Open mouth for chef access', 'Engineered for 100+ covers'],
  },
  {
    src: '/woodfirepizzaoven/WoodFirePizzaOven_9.webp',
    name: 'Outdoor Catering Wood Fire Oven',
    spec: 'Portable Frame · Wood / Coal · Heavy-Gauge Build',
    tag: 'Outdoor & Events',
    features: ['Heavy-duty outdoor build', 'Wood & coal dual fire', 'Robust transport frame', 'Ideal for wedding catering'],
  },
];

const FEAT_CHIPS = [
  '800°C Peak Temperature',
  'Gas + Wood Dual Fuel',
  'Custom Sizes Available',
  'Made at Our Delhi Factory',
  'Pan-India Delivery & Install',
];

function WoodFireOvens() {
  return (
    <section className="wfp-section" aria-labelledby="lp-wfp-heading">
      {/* Ambient gold glows */}
      <div className="wfp-glow" aria-hidden="true" />

      {/* Floating gold particles */}
      <div className="wfp-embers" aria-hidden="true">
        {[1, 2, 3, 4, 5, 6].map((n) => (
          <span key={n} className="wfp-ember" />
        ))}
      </div>

      <div className="container" style={{ position: 'relative' }}>
        {/* Section header */}
        <div className="wfp-header">
          <span className="section-label">
            Featured Product
          </span>

          <h2
            id="lp-wfp-heading"
            style={{
              fontFamily: 'var(--font-playfair)',
              fontSize: 'clamp(1.75rem, 3.6vw, 2.7rem)',
              color: 'var(--text-on-dark)',
              letterSpacing: '-0.02em',
              lineHeight: 1.12,
              margin: '0.75rem 0 0',
            }}
          >
            <em className="lp-gold-text" style={{ fontStyle: 'normal', fontWeight: 800 }}>
              Wood Fire Pizza Ovens
            </em>{' '}
            for Commercial Kitchens
          </h2>

          <span className="gold-divider lp-divider-glow" style={{ marginTop: '1rem' }} />

          <p
            style={{
              fontFamily: 'var(--font-inter)',
              fontSize: '0.9rem',
              color: 'rgba(245,240,232,0.5)',
              maxWidth: '34rem',
              margin: '0.75rem auto 0',
              lineHeight: 1.65,
            }}
          >
            Custom-built for restaurants, hotels &amp; outdoor caterers — gas, wood or dual-fuel. Designed &amp; manufactured at our 2 Delhi factories.
          </p>

          {/* Feature chips */}
          <div className="wfp-feat-strip">
            {FEAT_CHIPS.map((c) => (
              <span key={c} className="wfp-feat-chip">
                <span className="wfp-feat-chip-dot" aria-hidden="true" />
                {c}
              </span>
            ))}
          </div>
        </div>

        {/* Carousel */}
        <Reveal>
          <WoodFireCarousel items={WOOD_FIRE_OVENS} />
        </Reveal>
      </div>
    </section>
  );
}



/* ─── Our Products — equipment carousel ────────────────────────────────────── */
const OUR_PRODUCTS: { name: string; spec: string; image: string; category: string }[] = [
  { category: 'Refrigeration', name: 'Commercial Ice Cube Machine', spec: 'Gas · Size Customised', image: 'https://res.cloudinary.com/dvft1rn6j/image/upload/v1783448495/Commercial_ice_cube_d7evwq.webp' },
  { category: 'Cooking', name: 'Commercial Hood Type Dishwasher', spec: 'Gas · Size Customised', image: 'https://res.cloudinary.com/dvft1rn6j/image/upload/v1783448482/Hood_Type_Dishwasher_ttju81.webp'},
  { category: 'Cooking', name: 'Combi Oven', spec: 'Gas · Size Customised', image: 'https://res.cloudinary.com/dvft1rn6j/image/upload/v1783229972/combi_oven_hftsyx.webp' },
  { category: 'Cooking', name: 'Pizza Oven', spec: 'Gas · Size Customised', image: 'https://res.cloudinary.com/dvft1rn6j/image/upload/v1783230473/ChatGPT_Image_Jul_5_2026_11_16_24_AM_rsz66q.webp' },
  { category: 'Cooking', name: 'Single Burner Range', spec: 'Gas · Size Customised', image: 'https://res.cloudinary.com/dvft1rn6j/image/upload/v1783225769/sgf99gvyydqhs9iwmqdr_mygsws.webp' },
  { category: 'Cooking', name: 'Three Burner Chinese Range', spec: 'Gas · Size Customised', image: 'https://res.cloudinary.com/dvft1rn6j/image/upload/v1783225770/lvittmcoflkyqmuwpj2t_klklvn.webp' },
  { category: 'Cooking', name: '4 Burner Range With Oven', spec: 'Gas · Size Customised', image: 'https://res.cloudinary.com/dvft1rn6j/image/upload/v1783227884/four_Burner_Rnage_ymprtp.png' },
  { category: 'Cooking', name: 'Gravy Grid (Griddle Plate)', spec: 'Gas / Electric · Customised', image: 'https://res.cloudinary.com/dvft1rn6j/image/upload/v1783225770/jpbc0ixgdrib4die4980_vykqiq.webp' },
  { category: 'Cooking', name: 'Dosa Plate', spec: 'Gas · Size Customised', image: 'https://res.cloudinary.com/dvft1rn6j/image/upload/v1783225769/yuu3omnohzm6lysznnai_xtdec1.webp' },
  { category: 'Cooking', name: 'Bulk Cooker (Rice Boiler)', spec: 'Gas / Electric · 10–200 Ltr', image: 'https://res.cloudinary.com/dvft1rn6j/image/upload/v1783225770/jcmusjmx6d1f97ikgrn5_nrjq91.webp' },
  { category: 'Refrigeration', name: '3 Door Under Counter Refrigerator / Freezer', spec: 'Electric · Size Customised', image: 'https://res.cloudinary.com/dvft1rn6j/image/upload/v1783225770/cliyzkfmkczxx5khrnfl_nfgnag.webp' },
  { category: 'Refrigeration', name: 'Under Counter Pizza Makeline Refrigerator / Freezer', spec: 'Electric · Size Customised', image: 'https://res.cloudinary.com/dvft1rn6j/image/upload/v1783225770/nm1wjv7rcjw6nwvojqdd_c16eyj.webp' },
  { category: 'Refrigeration', name: 'Glass Door Under Counter (Back Bar Chiller)', spec: 'Electric · Size Customised', image: 'https://res.cloudinary.com/dvft1rn6j/image/upload/v1783225770/hyxxnepy5dbat6quyn19_yn2zvb.webp' },
  { category: 'Refrigeration', name: 'Chest Freezer (Deep Freezer)', spec: 'Electric · 100 to 1000 Ltr.', image: 'https://res.cloudinary.com/dvft1rn6j/image/upload/v1783225771/px5nvr5temy0f4hxb3um_tjjq4a.webp' },
  { category: 'Refrigeration', name: 'Visi Cooler', spec: 'Electric · 300 to 500 Ltr.', image: 'https://res.cloudinary.com/dvft1rn6j/image/upload/v1783225770/ikatpkjfjdwkaki3xghl_wj5xte.webp' },
  { category: 'Refrigeration', name: 'Walk in Chiller / Walk in Freezer', spec: 'Electric · Size Customised', image: 'https://res.cloudinary.com/dvft1rn6j/image/upload/v1783228105/Walk_In_Chiller_mrfsof.webp' },
  { category: 'Preparation', name: 'Wet Masala Grinder', spec: 'Electric · 5 to 25 Ltr.', image: 'https://res.cloudinary.com/dvft1rn6j/image/upload/v1783228229/Wet_Masala_Grinder_iimxcr.webp' },
  { category: 'Preparation', name: 'Tilting Wet Grinder', spec: 'Electric · 5 to 30 Ltr.', image: 'https://res.cloudinary.com/dvft1rn6j/image/upload/v1783225771/ybdjbqg84fdcxduowshr_mb6b9h.webp' },
  { category: 'Preparation', name: 'Dough Kneader', spec: 'Electric · 5 to 100 Ltr.', image: 'https://res.cloudinary.com/dvft1rn6j/image/upload/v1783225771/sj7qtl9jrsgihwcxifxq_suv1ay.webp' },
];

function OurProducts() {
  return (
    <section style={{ background: 'var(--surface)', padding: 'clamp(2.25rem, 4.5vw, 3.5rem) 0', position: 'relative', overflow: 'hidden' }} aria-labelledby="lp-products-heading">
      {/* Warm gold bloom — keeps the light backdrop premium under the dark cards */}
      <div aria-hidden="true" style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 70% 90% at 50% 0%, rgba(201,168,76,0.08) 0%, transparent 62%)', pointerEvents: 'none' }} />
      <div className="container" style={{ position: 'relative' }}>
        <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <span className="section-label">Our Products</span>
          <RevealTitle id="lp-products-heading" style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(1.75rem, 3.4vw, 2.6rem)', color: 'var(--text-dark)', letterSpacing: '-0.02em', margin: '0.75rem 0 0' }} text="Commercial Kitchen Equipment We Supply" />
          <span className="gold-divider lp-divider-glow" style={{ marginTop: '1rem' }} />
        </div>
      </div>

      {/* Wide shell — breaks out of the 80rem container so more cards fit per view */}
      <div className="lp-prod-wide">
        <Reveal>
          <ProductsCarousel items={OUR_PRODUCTS} />
        </Reveal>
      </div>

      <div className="container" style={{ position: 'relative' }}>
        <div style={{ marginTop: '1.5rem' }}>
          <SectionCta
            tone="light"
            channel="phone"
            hook="Want the best factory-direct price on any equipment above?"
            label="Call for Today's Price"
          />
        </div>
      </div>
    </section>
  );
}

/* ─── Certificates — trust badges (ISO 9001, MSME, GST) ────────────────────── */
function Certificates() {
  return (
    <section style={{ background: 'var(--surface-alt)', padding: 'clamp(2.25rem, 4.5vw, 3.5rem) 0' }} aria-labelledby="lp-cert-heading">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '2.75rem' }}>
          <span className="section-label">Certified for Trust</span>
          <RevealTitle id="lp-cert-heading" style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(1.75rem, 3.4vw, 2.6rem)', color: 'var(--text-dark)', letterSpacing: '-0.02em', margin: '0.75rem 0 0' }} text="Recognised, Registered & Verified" />
          <span className="gold-divider lp-divider-glow" style={{ marginTop: '1rem' }} />
          <p style={{ fontFamily: 'var(--font-inter)', fontSize: '0.95rem', color: 'var(--text-muted)', maxWidth: '34rem', margin: '1rem auto 0' }}>
            Every kitchen we deliver is backed by the same certifications you can verify below — tap any certificate to view it full-size.
          </p>
        </div>

        <CertificateGallery />

        <div style={{ marginTop: '2.5rem' }}>
          <SectionCta
            tone="light"
            channel="whatsapp"
            hook="Want our certificates & client references for your project?"
            label="Request Them on WhatsApp"
          />
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
    ['200+ delivered projects & 5★ track record', true, false],
  ];
  return (
    <section style={{ background: '#fff', padding: 'clamp(2.25rem, 4.5vw, 3.5rem) 0' }} aria-labelledby="lp-compare-heading">
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
        <div style={{ marginTop: '2rem' }}>
          <SectionCta
            tone="light"
            channel="whatsapp"
            hook="Ready to put the VSD advantage to work in your kitchen?"
            label="Send Your Enquiry Now"
          />
        </div>
      </div>
    </section>
  );
}

/* ─── Clients / social proof — infinite smooth logo carousel ──────────────── */
function Clients() {
  const logos: { name: string; src: string }[] = [
    { name: 'Hyatt Regency', src: '/Client_Logo/Hyatt_Regency_Logo.png' },
    { name: 'Radisson Blu', src: '/Client_Logo/Radisson_Blu.png' },
    { name: 'Crowne Plaza', src: '/Client_Logo/Crowne_Plaza_Logo.png' },
    { name: 'ITC Welcomhotel', src: '/Client_Logo/ITC_Welcomhotel_Logo.png' },
    { name: 'Metro Hospital', src: '/Client_Logo/Metro_Hospital.png' },
    { name: 'Sarvodaya Healthcare', src: '/Client_Logo/Sarvodya_HealthCare.jpg' },
    { name: 'Yashoda Hospital', src: '/Client_Logo/Yasodha_Hospital.png' },
  ];
  const logoCard = (l: { name: string; src: string }, key: string) => (
    <span key={key} className="lp-client-logo-card" title={l.name}>
      <Image src={l.src} alt={l.name} fill sizes="150px" style={{ objectFit: 'contain' }} />
    </span>
  );
  return (
    <section className="lp-clients-band" aria-label="Brands that trust VSD International">
      <p className="lp-clients-eyebrow">
        Trusted by <strong>200+ kitchens</strong> — from 5-star hotels to NABH hospitals &amp; cloud kitchens
      </p>
      <Reveal>
        <div className="lp-clients-marquee">
          <div className="marquee-track marquee-track--triple" style={{ gap: '1rem', animationDuration: '32s' }} aria-hidden="true">
            {logos.map((l) => logoCard(l, `a-${l.name}`))}
            {logos.map((l) => logoCard(l, `b-${l.name}`))}
            {logos.map((l) => logoCard(l, `c-${l.name}`))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}

/* ─── Testimonials (keyword-rich, slider) ──────────────────────────────────── */
const TESTIMONIALS: Review[] = [
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
  {
    name: 'Vikram Singh',
    role: 'Owner, North Indian Restaurant — Karol Bagh, Delhi',
    text: 'We searched commercial kitchen equipment near me for weeks and found VSD just down the road. Their restaurant kitchen equipment is solid, heavy-gauge steel — not the flimsy stuff most local suppliers push.',
  },
  {
    name: 'Priya Nair',
    role: 'Operations Head, QSR Chain — Noida',
    text: 'As a multi-outlet QSR we needed a reliable manufacturer of commercial kitchen equipment who could standardise five kitchens at once. Their restaurant cooking equipment held up perfectly under daily peak-hour volume.',
  },
  {
    name: 'Arjun Malhotra',
    role: 'Executive Chef, Banquet Hall — Chandigarh',
    text: 'VSD is hands-down the best commercial kitchen equipment manufacturer in Delhi we have worked with. Their commercial cooking equipment handles 500-cover banquets without a single hiccup.',
  },
  {
    name: 'Sunita Rao',
    role: 'Director, Catering Company — Gurgaon',
    text: 'We needed suppliers of commercial kitchen equipment who actually understood high-volume catering. VSD’s fabrication is industrial kitchen equipment manufacturers-grade — it survives daily abuse on-site.',
  },
  {
    name: 'Mohammed Iqbal',
    role: 'Owner, Biryani Restaurant Chain — Lucknow',
    text: 'Searched commercial kitchen equipment near me for weeks before finding VSD. Pan-India delivery, and the restaurant and kitchen equipment quality matched what 5-star hotels use.',
  },
  {
    name: 'Neha Kapoor',
    role: 'Founder, Patisserie & Bakery — Mumbai',
    text: 'Their commercial cooking equipment — ovens, proofers, worktables — is genuinely commercial-grade. I recommend VSD to every bakery owner who asks me about commercial kitchen cooking equipment.',
  },
  {
    name: 'Ramesh Pillai',
    role: 'General Manager, Beach Resort — Goa',
    text: 'We compared several industrial kitchen equipment manufacturers before choosing VSD. Their fabrication quality and on-time installation made the decision easy.',
  },
  {
    name: 'Kavita Joshi',
    role: 'Admin Manager, Corporate Cafeteria — Pune',
    text: 'VSD supplied our entire cafeteria’s commercial kitchen equipment — from tandoors to dish-wash lines — on a fixed budget with zero surprises.',
  },
  {
    name: 'Sandeep Yadav',
    role: 'Owner, Multi-Cuisine Restaurant — Jaipur',
    text: 'Best restaurant kitchen equipment supplier we have used in 12 years of running restaurants. The SS 304 build quality is noticeably heavier-gauge than competitors.',
  },
  {
    name: 'Farah Sheikh',
    role: 'Founder, Cloud Kitchen Network — Hyderabad',
    text: 'Needed a commercial kitchen equipment manufacturer in Delhi who could ship pan-India fast. VSD’s team handled the logistics to our Hyderabad kitchen without any delay.',
  },
  {
    name: 'Deepak Chawla',
    role: 'Director, Wedding Caterers — Amritsar',
    text: 'Our outdoor catering rigs needed rugged commercial cooking equipment. VSD’s burners and bhatti units have survived three wedding seasons without a single breakdown.',
  },
  {
    name: 'Anita Desai',
    role: 'Owner, Café Chain — Ahmedabad',
    text: 'We needed restaurant cooking equipment that could be serviced easily across multiple cities. VSD’s AMC support has been faster than any local supplier we tried before.',
  },
  {
    name: 'Harpreet Singh',
    role: 'Plant Manager, Industrial Canteen — Manesar',
    text: 'Among the industrial kitchen equipment manufacturers we evaluated, VSD handled our 2,000-meal canteen setup with genuine engineering rigor, not just sales talk.',
  },
  {
    name: 'Rohit Bansal',
    role: 'Owner, Family Restaurant — Dehradun',
    text: 'Looked up commercial kitchen equipment near me and VSD’s site-visit team reached us within days despite us being a smaller hill-town restaurant. True pan-India suppliers of commercial kitchen equipment.',
  },
];

function Testimonials() {
  return (
    <section style={{ background: 'var(--surface)', padding: 'clamp(2.25rem, 4.5vw, 3.5rem) 0' }} aria-labelledby="lp-reviews-heading">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '2.75rem' }}>
          <span className="section-label">Client Testimonials</span>
          <RevealTitle id="lp-reviews-heading" style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(1.75rem, 3.4vw, 2.6rem)', color: 'var(--text-dark)', letterSpacing: '-0.02em', margin: '0.75rem 0 0' }} text="What Our Kitchen Clients Say" />
          <span className="gold-divider lp-divider-glow" style={{ marginTop: '1rem' }} />
        </div>

        <Reveal>
          <TestimonialSlider reviews={TESTIMONIALS} />
        </Reveal>

        <div style={{ marginTop: '1.5rem' }}>
          <SectionCta
            tone="light"
            channel="whatsapp"
            hook="Want to be our next 5-star kitchen success story?"
            label="Start Your Kitchen Today"
          />
        </div>
      </div>
    </section>
  );
}

/* ─── FAQs (keyword-rich, no-JS accordion) ─────────────────────────────────── */
function Faqs() {
  return (
    <section style={{ background: '#fff', padding: 'clamp(2.25rem, 4.5vw, 3.5rem) 0' }} aria-labelledby="lp-faq-heading">
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

        <div style={{ marginTop: '2rem' }}>
          <SectionCta
            tone="light"
            channel="phone"
            hook="Still have a question we didn't cover above?"
            label="Call Us — We'll Answer It"
          />
        </div>
      </div>
    </section>
  );
}

/* ─── Google reviews block ─────────────────────────────────────────────────── */
function GoogleReviews() {
  return (
    <section style={{ background: 'var(--surface-alt)', padding: 'clamp(2.25rem, 4.5vw, 3.25rem) 0' }} aria-label="Verified Google reviews">
      <div className="container" style={{ maxWidth: '34rem', textAlign: 'center' }}>
        <span className="section-label" style={{ marginBottom: '1.5rem', display: 'inline-block' }}>Verified Reviews</span>

        <Reveal y={30}>
          <div style={{ background: '#fff', border: '1px solid var(--border)', borderRadius: '20px', overflow: 'hidden', boxShadow: '0 8px 48px rgba(0,0,0,0.07)' }}>
            <div style={{ height: '3px', background: 'linear-gradient(90deg, var(--gold-bright), var(--gold), var(--gold-deep))' }} />
            <div style={{ padding: 'clamp(1.75rem, 6vw, 2.5rem) clamp(1.25rem, 5vw, 2rem) clamp(1.5rem, 5vw, 2rem)' }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.1rem' }}>
                <GoogleIcon size={26} />
                <span style={{ fontFamily: 'var(--font-inter)', fontSize: '1rem', fontWeight: 600, color: 'var(--text-dark)', letterSpacing: '-0.01em' }}>Google Reviews</span>
              </div>
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
              <div style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
                {['ISO 9001 Certified', '15+ Years Active', 'Pan-India Delivery'].map((l) => (
                  <span key={l} style={{ padding: '0.3rem 0.75rem', borderRadius: '100px', background: 'rgba(201,168,76,0.08)', border: '1px solid rgba(201,168,76,0.22)', fontSize: '0.72rem', fontFamily: 'var(--font-inter)', fontWeight: 600, color: 'var(--gold-deep)' }}>
                    {l}
                  </span>
                ))}
              </div>
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
    <section style={{ background: 'var(--charcoal)', padding: 'clamp(2.25rem, 4.5vw, 3.5rem) 0', position: 'relative', overflow: 'hidden' }} aria-labelledby="lp-final-heading">
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
              <div className="lp-cta-row" style={{ justifyContent: 'flex-start' }}>
                <a href={WA} target="_blank" rel="noopener noreferrer" className="lp-btn-whatsapp">
                  <WhatsAppIcon size={17} /> Prefer to Chat? WhatsApp Us
                </a>
              </div>
            </div>
          </Reveal>
          <Reveal x={24} y={0} delay={0.1}>
            <LeadForm heading="Claim Your Free Layout + Quote" subheading="30 seconds. No obligation. Reply within 1 business hour." ctaLabel="Claim Your Free Quote" />
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
        <Image src="/VSD_LOGO_DARK.webp" alt="VSD International" width={150} height={46} style={{ height: 'auto', width: 'auto', maxHeight: 46, margin: '0 auto' }} />
        <p style={{ fontFamily: 'var(--font-inter)', fontSize: '0.85rem', color: 'rgba(245,240,232,0.55)', lineHeight: 1.7, maxWidth: '34rem', margin: '0 auto' }}>
          <strong style={{ color: 'var(--text-on-dark)' }}>VSD International</strong> — ISO 9001 certified commercial kitchen equipment manufacturer &amp; turnkey setup partner. Serving hotels, restaurants, cloud kitchens &amp; hospitals across India since 2009.
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '0.5rem 1.5rem', fontFamily: 'var(--font-inter)', fontSize: '0.85rem', color: 'rgba(245,240,232,0.6)' }}>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}><MapPin size={14} style={{ color: 'var(--gold)' }} /> A-347, Saraswati Gali, Mandawali, New Delhi 110092</span>
        </div>
        <div className="lp-cta-row">
          <a href={`tel:${PHONE_TEL}`} className="btn-gold lp-cta-single"><Phone size={16} /> Call {PHONE}</a>
        </div>
      </div>
    </footer>
  );
}

/* ─── Disclaimer & Privacy Policy — always visible, final section ──────────── */
function DisclaimerSection() {
  return (
    <section style={{ background: 'var(--charcoal)', borderTop: '1px solid rgba(201,168,76,0.15)', padding: 'clamp(1.75rem, 3.5vw, 2.5rem) 0' }} aria-labelledby="lp-disclaimer-heading">
      <div className="container" style={{ maxWidth: '78rem' }}>
        <Reveal>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
            <span style={{ width: 34, height: 34, borderRadius: '9px', background: 'rgba(201,168,76,0.12)', border: '1px solid rgba(201,168,76,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <ShieldCheck size={17} style={{ color: 'var(--gold)' }} />
            </span>
            <h2 id="lp-disclaimer-heading" style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(1rem, 2vw, 1.25rem)', color: 'var(--text-on-dark)', letterSpacing: '-0.01em' }}>
              Disclaimer &amp; Privacy Policy
            </h2>
          </div>
          <p style={{ fontFamily: 'var(--font-inter)', fontSize: '0.72rem', color: 'rgba(245,240,232,0.42)', lineHeight: 1.65 }}>
            The information provided on this website is intended for general informational purposes only and may be updated or modified without prior notice. Product images, specifications, and other visuals are for illustrative purposes and may vary from the actual products.
          </p>
          <p style={{ fontFamily: 'var(--font-inter)', fontSize: '0.72rem', color: 'rgba(245,240,232,0.42)', lineHeight: 1.65, marginTop: '0.6rem' }}>
            By submitting your contact details through this website, you authorize VSD International to contact you via phone, email, SMS, or WhatsApp regarding product inquiries, quotations, order updates, and other business-related communications.
          </p>
          <p style={{ fontFamily: 'var(--font-inter)', fontSize: '0.72rem', color: 'rgba(245,240,232,0.42)', lineHeight: 1.65, marginTop: '0.6rem' }}>
            VSD International respects your privacy and is committed to safeguarding your personal information. We do not sell, rent, or disclose your personal data to third parties without your consent, except where required by law. Users are advised to independently verify product specifications and other information before making any purchase or business decision.
          </p>
        </Reveal>

        {/* Copyright — final line of the page */}
        <div style={{ borderTop: '1px solid rgba(201,168,76,0.12)', marginTop: '1.5rem', paddingTop: '1.25rem', textAlign: 'center' }}>
          <p style={{ fontFamily: 'var(--font-inter)', fontSize: '0.75rem', color: 'rgba(245,240,232,0.4)' }}>
            © {new Date().getFullYear()} VSD International. All rights reserved.
          </p>
        </div>
      </div>
    </section>
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
        <WhatsAppIcon size={17} /> WhatsApp
      </a>
    </div>
  );
}
