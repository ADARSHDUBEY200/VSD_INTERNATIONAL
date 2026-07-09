/* ═══════════════════════════════════════════════════════════════════════════
   PAID-ADS LANDING PAGE — Commercial Pizza Oven
   Same DotCom-Secrets structure and premium charcoal-gold theme as the
   turnkey-kitchen LP, re-scoped to one product CATEGORY: commercial pizza ovens
   of every type — deck & stone-deck, conveyor, countertop gas & electric, and
   wood-fired / dual-fuel. One Hook → Story (types, fit finder, process, range,
   USPs, proof) → Offer (free design consultation + itemised quote), a single
   repeated CTA, no nav leaks, risk-reversal + urgency. Reuses the shared LP
   components so the look stays identical to /lp/commercial-kitchen-setup.
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
  Factory,
  Ruler,
  IndianRupee,
  Clock,
  Headset,
  Flame,
  Zap,
  Layers,
  ArrowRightLeft,
  Award,
  Hotel,
} from 'lucide-react';
import LeadForm from '../commercial-kitchen-setup/LeadForm';
import LeadCta from '../commercial-kitchen-setup/LeadCta';
import Reveal from '../commercial-kitchen-setup/Reveal';
import RevealTitle from '../commercial-kitchen-setup/RevealTitle';
import CountUp from '../commercial-kitchen-setup/CountUp';
import HeroGlow from '../commercial-kitchen-setup/HeroGlow';
import TiltCard from '../commercial-kitchen-setup/TiltCard';
import IconBadge from '../commercial-kitchen-setup/IconBadge';
import AnimatedStars from '../commercial-kitchen-setup/AnimatedStars';
import GoogleIcon from '../commercial-kitchen-setup/GoogleIcon';
import type { Review } from '../commercial-kitchen-setup/TestimonialSlider';
import type { OvenItem } from '../commercial-kitchen-setup/WoodFireCarousel';
import CertificateGallery from '../commercial-kitchen-setup/CertificateGallery';
import WhatsAppIcon from '../commercial-kitchen-setup/WhatsAppIcon';
import LeadPopupPizza from './LeadPopupPizza';

/* ─── Dynamically loaded heavy below-fold components ────────────────────────── */
const TestimonialSlider = dynamic(() => import('../commercial-kitchen-setup/TestimonialSlider'), {
  loading: () => <div style={{ height: '340px', borderRadius: '16px', background: 'var(--surface)', opacity: 0.5 }} />,
});
const WoodFireCarousel = dynamic(() => import('../commercial-kitchen-setup/WoodFireCarousel'), {
  loading: () => <div style={{ height: '460px', borderRadius: '16px', background: 'var(--charcoal-mid)', opacity: 0.5 }} />,
});

const PHONE = '09250346370';
const PHONE_TEL = '+919250346370';
const WA = `https://wa.me/919250346370?text=${encodeURIComponent(
  "Hi VSD International! I'd like a free quote for a commercial pizza oven. Please share your best price.",
)}`;
const LEAD_SOURCE = 'lp_commercial_pizza_oven';

/* Generic pizza-oven photo (Cloudinary) for the flagship section */
const PIZZA_OVEN_IMG =
  'https://res.cloudinary.com/dvft1rn6j/image/upload/v1783230473/ChatGPT_Image_Jul_5_2026_11_16_24_AM_rsz66q.webp';

/* ─── Shared section CTA — a persuasive hook + a single channel button. ─────── */
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
  title: 'Commercial Pizza Oven Manufacturer | Deck, Conveyor, Gas & Wood-Fired | VSD International',
  description:
    'ISO 9001 certified commercial pizza oven manufacturer. Deck, conveyor, countertop gas & electric and wood-fired ovens. 15+ years, 200+ hotels, 2 Delhi factories. Free design consultation + itemised quote in 1 hour. ☎ +91-92503 46370.',
  keywords: [
    'commercial pizza oven',
    'commercial pizza oven manufacturer',
    'deck pizza oven',
    'conveyor pizza oven',
    'gas pizza oven commercial',
    'electric pizza oven',
    'wood fire pizza oven',
    'pizza oven for restaurant',
    'pizza oven price in india',
    'pizza oven manufacturer delhi',
  ],
  alternates: { canonical: 'https://vsdinternational.com/lp/commercial-pizza-oven' },
  robots: { index: true, follow: true },
  openGraph: {
    type: 'website',
    url: 'https://vsdinternational.com/lp/commercial-pizza-oven',
    title: 'Commercial Pizza Oven Manufacturer | VSD International',
    description:
      'ISO 9001 certified commercial pizza ovens — deck, conveyor, gas, electric & wood-fired, custom-built to your kitchen and installed pan-India. 200+ hotels. Free design consultation + quote.',
    images: ['https://vsdinternational.com/VSD_LOGO.png'],
  },
};

/* ─── JSON-LD ──────────────────────────────────────────────────────────────── */
const LP_FAQS = [
  {
    q: 'How much does a commercial pizza oven cost in India?',
    a: 'Commercial pizza ovens in India typically range from about ₹80,000 for a compact single-deck countertop electric oven to ₹6 lakh+ for a large conveyor, multi-deck or wood-fired oven built for banquet volumes. Cost depends on the type (deck, conveyor, countertop or wood-fired), capacity, fuel (gas, electric or wood) and finish. VSD International gives you a fixed, itemised quote after a free design consultation.',
  },
  {
    q: 'Which type of commercial pizza oven should I choose — deck, conveyor, countertop or wood-fired?',
    a: 'Deck ovens give artisan stone-baked crust and are the workhorse of most pizzerias; conveyor ovens give hands-off, uniform output for high-volume QSR and cloud kitchens; countertop gas & electric ovens suit cafés and small kitchens where space is tight; and wood-fired / dual-fuel ovens deliver authentic charred Neapolitan crust and live-fire theatre. Our free consultation matches the right type to your menu, covers and kitchen layout.',
  },
  {
    q: 'How many pizzas can a commercial pizza oven handle per hour?',
    a: 'It depends on the type and size. A single-deck oven bakes roughly 20–40 pizzas an hour, a double or triple deck far more, and a conveyor oven can push 100+ pizzas an hour at a steady belt speed. A true wood-fired oven at 750–800°C turns out a Neapolitan pizza in about 90 seconds. We size the oven so it clears your peak-hour rush without becoming a bottleneck.',
  },
  {
    q: 'Gas or electric pizza oven — which is better?',
    a: 'Electric ovens give precise, even top-and-bottom heat and are easy to install where gas is unavailable; gas ovens heat faster, cost less to run at volume and suit high-output kitchens. Deck ovens come in both, and dual-fuel wood ovens add live-fire flavour on top. We recommend the right option based on your utility connections, output and running-cost priorities.',
  },
  {
    q: 'Can you build a pizza oven in a custom size or finish?',
    a: 'Yes. Every VSD pizza oven is built to order at our Delhi factories — you choose the type, number of decks or belt width, capacity, fuel and finish (polished SS, matte, tile or stone). We build compact countertop units, built-in ovens that integrate into hotel kitchens, high-volume conveyor lines and flagship showpiece wood-fired ovens.',
  },
  {
    q: 'Are you a manufacturer or just a dealer of pizza ovens?',
    a: 'VSD International is an ISO 9001 certified manufacturer with in-house fabrication across our 2 Delhi NCR factories, alongside genuine imported components — so your pizza oven is designed, built, installed and supported by one accountable team, not passed between resellers. Optional Annual Maintenance Contracts are backed by 80+ active AMC clients across India.',
  },
];

const lpSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Product',
      '@id': 'https://vsdinternational.com/lp/commercial-pizza-oven#product',
      name: 'Commercial Pizza Oven',
      category: 'Commercial Cooking Equipment',
      description:
        'ISO 9001 certified commercial pizza ovens — deck, conveyor, countertop gas & electric and wood-fired / dual-fuel, food-grade SS 304 body, custom-built and installed pan-India.',
      brand: { '@type': 'Brand', name: 'VSD International' },
      manufacturer: {
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
      },
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '5',
        reviewCount: '312',
        bestRating: '5',
        worstRating: '1',
      },
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://vsdinternational.com/lp/commercial-pizza-oven#faq',
      mainEntity: LP_FAQS.map((f) => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: { '@type': 'Answer', text: f.a },
      })),
    },
  ],
};

/* ─── Wood-fired & dual-fuel range — real photos from /public/woodfirepizzaoven ─ */
const WOOD_FIRE_OVENS: OvenItem[] = [
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

/* ═══════════════════════════════════════════════════════════════════════════
   PAGE
   ═══════════════════════════════════════════════════════════════════════════ */
export default function CommercialPizzaOvenLP() {
  return (
    <>
      <link rel="preconnect" href="https://res.cloudinary.com" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(lpSchema) }} />

      <StickyBar />

      <main style={{ background: 'var(--charcoal)', overflowX: 'hidden' }}>
        <Hero />
        <Clients />
        <OvenTypes />
        <FitFinder />
        <Process />
        <WoodFireRange />
        <Featured />
        <Certificates />
        <WhyUs />
        <CtaBand
          eyebrow="Only a few free design consultations left this month"
          title="Get your free design consultation + itemised quote"
          sub="No obligation. A pizza oven expert calls you within 1 business hour."
          channel="phone"
          label="Reserve a Free Consultation"
        />
        <Comparison />
        <CtaBand
          eyebrow="200+ kitchens served since 2009"
          title="Tell us your menu & covers — we'll recommend the right oven"
          sub="Design, manufacturing, installation & AMC under one ISO 9001 certified roof."
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
      <LeadPopupPizza />
    </>
  );
}

/* ─── Sticky top bar ───────────────────────────────────────────────────────── */
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
        style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', minHeight: '64px', gap: '1rem' }}
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

/* ─── Hero ─────────────────────────────────────────────────────────────────── */
function Hero() {
  return (
    <section className="lp-premium-hero" aria-labelledby="lp-hero-heading">
      <HeroGlow />
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="lp-hero-inner">
          <div>
            <Reveal immediate delay={0}>
              <div className="lp-eyebrow" style={{ marginBottom: '1.5rem' }}>
                <Award size={14} /> ISO 9001 Certified Manufacturer • 200+ Hotels Since 2009
              </div>
            </Reveal>

            <Reveal immediate delay={0.1} y={28}>
              <h1 id="lp-hero-heading" className="lp-hero-title" style={{ marginBottom: '1.35rem' }}>
                The Right Commercial Pizza Oven — <span className="lp-gold-text">Built for Your Kitchen.</span>
              </h1>
            </Reveal>

            <Reveal immediate delay={0.2}>
              <p className="lp-hero-sub" style={{ maxWidth: '40rem', margin: '0 0 1.4rem' }}>
                <strong style={{ color: 'var(--text-on-dark)', fontWeight: 600 }}>Deck, conveyor, countertop gas &amp; electric, and wood-fired</strong> pizza ovens — designed and built in our own Delhi factories, installed pan-India, and backed by an{' '}
                <strong style={{ color: 'var(--text-on-dark)', fontWeight: 600 }}>ISO 9001 certified manufacturer</strong> trusted by 200+ hotels.
              </p>
            </Reveal>

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

            <div className="lp-hero-form-mobile">
              <Reveal immediate delay={0.4} y={18}>
                <LeadForm
                  compact
                  heading="Get Your Free Pizza Oven Quote"
                  subheading="Enter your details — an expert calls you within 1 business hour."
                  ctaLabel="Grab Your Free Quote"
                  source={LEAD_SOURCE}
                />
              </Reveal>
            </div>
          </div>

          <div className="lp-hero-form-col">
            <Reveal immediate delay={0.25} x={28} y={0}>
              <LeadForm
                id="lead-form"
                heading="Get Your Free Pizza Oven Quote"
                subheading="Free design consultation + itemised quote. Only takes 30 seconds."
                ctaLabel="Get an Instant Free Quote"
                source={LEAD_SOURCE}
              />
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Clients — infinite logo marquee ──────────────────────────────────────── */
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
        Trusted by <strong>200+ kitchens</strong> — from 5-star hotels to banquet halls, restaurants &amp; cloud kitchens
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

/* ─── Oven types — the whole category, at a glance ─────────────────────────── */
function OvenTypes() {
  const types: { Icon: typeof Layers; tag: string; title: string; body: string; bestFor: string }[] = [
    { Icon: Layers, tag: 'Stone-Baked', title: 'Deck & Stone-Deck Ovens', body: 'Single, double or triple decks with a stone sole plate for artisan bread-and-pizza crust and even, radiant heat. Available gas or electric.', bestFor: 'Pizzerias, bakeries, hotels' },
    { Icon: ArrowRightLeft, tag: 'High Volume', title: 'Conveyor Pizza Ovens', body: 'Hands-off, uniform bakes at a set belt speed — load at one end, collect a finished pizza at the other. Built for continuous rush output.', bestFor: 'QSR, cloud kitchens, chains' },
    { Icon: Zap, tag: 'Compact', title: 'Countertop Gas & Electric Ovens', body: 'Space-saving single or twin-chamber ovens with precise thermostatic control — full commercial output where floor space is tight.', bestFor: 'Cafés, small kitchens, counters' },
    { Icon: Flame, tag: 'Authentic', title: 'Wood-Fired & Dual-Fuel Ovens', body: 'Live-fire 800°C ovens for authentic charred Neapolitan crust and open-kitchen theatre — wood, coal or dual-fuel with gas.', bestFor: 'Restaurants, banquets, events' },
  ];
  return (
    <section style={{ background: 'var(--charcoal-light)', padding: 'clamp(2.25rem, 4.5vw, 3.5rem) 0', position: 'relative', overflow: 'hidden' }} aria-labelledby="lp-types-heading">
      <div aria-hidden="true" style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 70% 100% at 50% 0%, rgba(201,168,76,0.10) 0%, transparent 60%)', pointerEvents: 'none' }} />
      <div className="container" style={{ position: 'relative' }}>
        <div style={{ textAlign: 'center', marginBottom: '2.75rem', maxWidth: '44rem', marginLeft: 'auto', marginRight: 'auto' }}>
          <span className="section-label">Our Range</span>
          <RevealTitle id="lp-types-heading" style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(1.75rem, 3.4vw, 2.6rem)', color: 'var(--text-on-dark)', letterSpacing: '-0.02em', margin: '0.75rem 0 0' }} text="Every Type of Commercial Pizza Oven" />
          <span className="gold-divider lp-divider-glow" style={{ marginTop: '1rem' }} />
          <p style={{ fontFamily: 'var(--font-inter)', fontSize: '0.95rem', color: 'rgba(245,240,232,0.55)', margin: '1rem auto 0' }}>
            One manufacturer, every pizza oven — we design, build and install the type that fits how you actually cook and serve.
          </p>
        </div>

        <div className="lp-service-grid">
          {types.map(({ Icon, tag, title, body, bestFor }, i) => (
            <Reveal key={title} delay={i * 0.06}>
              <TiltCard style={{ background: 'var(--charcoal-mid)', border: '1px solid var(--charcoal-edge)', padding: '1.6rem 1.4rem', height: '100%' }}>
                <IconBadge>
                  <Icon size={22} style={{ color: 'var(--gold-bright)' }} />
                </IconBadge>
                <span style={{ display: 'block', fontFamily: 'var(--font-inter)', fontSize: '0.64rem', color: 'var(--gold-deep)', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 700, margin: '0.25rem 0 0.4rem' }}>{tag}</span>
                <h3 style={{ fontFamily: 'var(--font-playfair)', fontSize: '1.1rem', color: 'var(--text-on-dark)', marginBottom: '0.5rem' }}>{title}</h3>
                <p style={{ fontFamily: 'var(--font-inter)', fontSize: '0.85rem', color: 'rgba(245,240,232,0.6)', lineHeight: 1.6 }}>{body}</p>
                <div style={{ marginTop: '0.9rem', paddingTop: '0.75rem', borderTop: '1px dashed var(--charcoal-edge)', fontFamily: 'var(--font-inter)', fontSize: '0.76rem', color: 'var(--gold-bright)', fontWeight: 700 }}>
                  Best for: {bestFor}
                </div>
              </TiltCard>
            </Reveal>
          ))}
        </div>

        <div style={{ marginTop: '2.5rem' }}>
          <SectionCta tone="dark" channel="whatsapp" hook="Not sure which type of pizza oven suits your kitchen?" label="Ask a Pizza Oven Expert Free" />
        </div>
      </div>
    </section>
  );
}

/* ─── Fit finder ───────────────────────────────────────────────────────────── */
function FitFinder() {
  const tiers: { num: string; unit: string; title: string; body: string; bestFor: string }[] = [
    { num: '20–40', unit: 'PIZZAS / HOUR', title: 'Compact Single-Deck / Countertop', body: 'A single-chamber gas or electric oven for a tight footprint — full commercial crust where space, not volume, is the constraint.', bestFor: 'Cafés, cloud kitchens' },
    { num: '40–80', unit: 'PIZZAS / HOUR', title: 'Double / Triple Deck', body: 'Stacked independent decks that bake multiple orders at once — the workhorse capacity for a busy full-service pizzeria.', bestFor: 'Restaurants, pizzerias' },
    { num: '100+', unit: 'PIZZAS / HOUR', title: 'Conveyor Line', body: 'A moving belt for continuous, uniform, hands-off output — the fastest way to clear a high-volume rush without skilled oven staff.', bestFor: 'QSR chains, banquets' },
    { num: '90-sec', unit: 'PER PIZZA', title: 'Wood-Fired / Dual-Fuel', body: 'Live-fire 750–800°C heat for authentic charred Neapolitan crust in about 90 seconds — plus the theatre of an open flame.', bestFor: 'Fine dining, events' },
  ];
  return (
    <section style={{ background: 'var(--surface)', padding: 'clamp(2.25rem, 4.5vw, 3.5rem) 0', position: 'relative', overflow: 'hidden' }} aria-labelledby="lp-fit-heading">
      <div aria-hidden="true" style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 70% 90% at 50% 0%, rgba(201,168,76,0.08) 0%, transparent 62%)', pointerEvents: 'none' }} />
      <div className="container" style={{ position: 'relative' }}>
        <div style={{ textAlign: 'center', marginBottom: '2.75rem', maxWidth: '44rem', marginLeft: 'auto', marginRight: 'auto' }}>
          <span className="section-label">Find Your Fit</span>
          <RevealTitle id="lp-fit-heading" style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(1.75rem, 3.4vw, 2.6rem)', color: 'var(--text-dark)', letterSpacing: '-0.02em', margin: '0.75rem 0 0' }} text="What Output Does Your Kitchen Actually Need?" />
          <span className="gold-divider lp-divider-glow" style={{ marginTop: '1rem' }} />
          <p style={{ fontFamily: 'var(--font-inter)', fontSize: '0.95rem', color: 'var(--text-muted)', margin: '1rem auto 0' }}>
            Too small means a bottleneck at peak service. Too big wastes fuel and floor space. Here&apos;s a quick reference — our free consultation matches the exact oven to your covers.
          </p>
        </div>

        <div className="lp-service-grid">
          {tiers.map((t, i) => (
            <Reveal key={t.title} delay={i * 0.06}>
              <TiltCard style={{ background: '#fff', border: '1px solid var(--border)', padding: '1.6rem 1.4rem', height: '100%' }}>
                <span style={{ fontFamily: 'var(--font-playfair)', fontWeight: 800, fontSize: '1.85rem', color: 'var(--text-dark)', lineHeight: 1 }}>{t.num}</span>
                <span style={{ display: 'block', fontFamily: 'var(--font-inter)', fontSize: '0.72rem', color: 'var(--gold-deep)', fontWeight: 700, letterSpacing: '0.06em', margin: '0.35rem 0 0.75rem' }}>{t.unit}</span>
                <h3 style={{ fontFamily: 'var(--font-playfair)', fontSize: '1.1rem', color: 'var(--text-dark)', marginBottom: '0.5rem' }}>{t.title}</h3>
                <p style={{ fontFamily: 'var(--font-inter)', fontSize: '0.85rem', color: 'var(--text-body)', lineHeight: 1.6 }}>{t.body}</p>
                <div style={{ marginTop: '0.9rem', paddingTop: '0.75rem', borderTop: '1px dashed var(--border)', fontFamily: 'var(--font-inter)', fontSize: '0.76rem', color: 'var(--gold-deep)', fontWeight: 700 }}>
                  Best for: {t.bestFor}
                </div>
              </TiltCard>
            </Reveal>
          ))}
        </div>

        <div style={{ marginTop: '2.5rem' }}>
          <SectionCta tone="light" channel="whatsapp" hook="Not sure which oven fits your menu and covers?" label="Get a Free Design Consultation" />
        </div>
      </div>
    </section>
  );
}

/* ─── Process — 4 steps ────────────────────────────────────────────────────── */
function Process() {
  const steps: { n: string; title: string; body: string }[] = [
    { n: '01', title: 'Free Design Consultation', body: 'We study your menu, covers and kitchen layout to recommend the right oven type, capacity, fuel and finish — no over-selling.' },
    { n: '02', title: 'Fixed, Itemised Quote', body: 'A transparent quote with model, type, capacity, fuel and total cost — locked before you commit, usually within 48 hours.' },
    { n: '03', title: 'Custom Build & Installation', body: 'Fabricated at our Delhi factory, then delivered with exhaust, gas or power and deck fitted and fired on-site by our technicians.' },
    { n: '04', title: 'AMC & Breakdown Support', body: 'Optional Annual Maintenance Contracts keep burners, elements, decks and finishes in top shape — backed by 80+ active AMC clients.' },
  ];
  return (
    <section style={{ background: 'var(--charcoal)', padding: 'clamp(2.25rem, 4.5vw, 3.5rem) 0', position: 'relative', overflow: 'hidden' }} aria-labelledby="lp-process-heading">
      <div aria-hidden="true" style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 70% 100% at 50% 0%, rgba(201,168,76,0.10) 0%, transparent 60%)', pointerEvents: 'none' }} />
      <div className="container" style={{ position: 'relative' }}>
        <div style={{ textAlign: 'center', marginBottom: '2.75rem', maxWidth: '44rem', marginLeft: 'auto', marginRight: 'auto' }}>
          <span className="section-label">How It Works</span>
          <RevealTitle id="lp-process-heading" style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(1.75rem, 3.4vw, 2.6rem)', color: 'var(--text-on-dark)', letterSpacing: '-0.02em', margin: '0.75rem 0 0' }} text="From Enquiry to First Pizza, in 4 Simple Steps" />
          <span className="gold-divider lp-divider-glow" style={{ marginTop: '1rem' }} />
          <p style={{ fontFamily: 'var(--font-inter)', fontSize: '0.95rem', color: 'rgba(245,240,232,0.55)', margin: '1rem auto 0' }}>
            One accountable team handles design, manufacturing, installation and after-sales support.
          </p>
        </div>

        <div className="lp-service-grid">
          {steps.map(({ n, title, body }, i) => (
            <Reveal key={n} delay={i * 0.06}>
              <TiltCard style={{ background: 'var(--charcoal-mid)', border: '1px solid var(--charcoal-edge)', padding: '1.6rem 1.4rem', height: '100%' }}>
                <span style={{ fontFamily: 'var(--font-inter)', color: 'var(--gold-bright)', fontWeight: 800, fontSize: '0.8rem', letterSpacing: '0.08em', display: 'block', marginBottom: '0.9rem' }}>{n}</span>
                <h3 style={{ fontFamily: 'var(--font-playfair)', fontSize: '1.1rem', color: 'var(--text-on-dark)', marginBottom: '0.5rem' }}>{title}</h3>
                <p style={{ fontFamily: 'var(--font-inter)', fontSize: '0.85rem', color: 'rgba(245,240,232,0.6)', lineHeight: 1.6 }}>{body}</p>
              </TiltCard>
            </Reveal>
          ))}
        </div>

        <div style={{ marginTop: '2.5rem' }}>
          <SectionCta tone="dark" channel="whatsapp" hook="Ready to add the right pizza oven to your kitchen?" label="Ask a Pizza Oven Expert Free" />
        </div>
      </div>
    </section>
  );
}

/* ─── Wood-fired & dual-fuel range — real-photo showcase carousel ──────────── */
function WoodFireRange() {
  return (
    <section style={{ background: 'var(--charcoal-light)', padding: 'clamp(2.25rem, 4.5vw, 3.5rem) 0', position: 'relative', overflow: 'hidden' }} aria-labelledby="lp-wood-heading">
      <div aria-hidden="true" style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 70% 100% at 50% 0%, rgba(201,168,76,0.08) 0%, transparent 60%)', pointerEvents: 'none' }} />
      <div className="container" style={{ position: 'relative' }}>
        <div style={{ textAlign: 'center', marginBottom: '2.75rem', maxWidth: '44rem', marginLeft: 'auto', marginRight: 'auto' }}>
          <span className="section-label">In-House Showcase</span>
          <RevealTitle id="lp-wood-heading" style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(1.75rem, 3.4vw, 2.6rem)', color: 'var(--text-on-dark)', letterSpacing: '-0.02em', margin: '0.75rem 0 0' }} text="Our Wood-Fired & Dual-Fuel Range" />
          <span className="gold-divider lp-divider-glow" style={{ marginTop: '1rem' }} />
          <p style={{ fontFamily: 'var(--font-inter)', fontSize: '0.95rem', color: 'rgba(245,240,232,0.55)', margin: '1rem auto 0' }}>
            One of the pizza oven types we build in-house — real ovens from our Delhi factories, for restaurants that want authentic live-fire flavour. Deck, conveyor &amp; countertop models are made to order too.
          </p>
        </div>

        <Reveal>
          <WoodFireCarousel items={WOOD_FIRE_OVENS} />
        </Reveal>

        <div style={{ marginTop: '2.5rem' }}>
          <SectionCta tone="dark" channel="phone" hook="Want the best factory-direct price on any oven type?" label="Call for Today's Price" />
        </div>
      </div>
    </section>
  );
}

/* ─── Featured flagship — gas deck pizza oven ──────────────────────────────── */
function Featured() {
  const feats = [
    'Food-grade SS 304 body',
    'Stone / refractory deck',
    'Gas or electric build',
    'Independent deck control',
    'Even top & bottom heat',
    'Pan-India delivery & install',
  ];
  return (
    <section style={{ background: 'var(--surface)', padding: 'clamp(2.25rem, 4.5vw, 3.5rem) 0' }} aria-labelledby="lp-featured-heading">
      <div className="container">
        <div className="lp-hero-grid">
          <Reveal x={-24} y={0}>
            <div style={{ position: 'relative', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 24px 60px -24px rgba(0,0,0,0.45)', aspectRatio: '4 / 3', border: '1px solid var(--border)' }}>
              <Image src={PIZZA_OVEN_IMG} alt="Commercial Gas Deck Pizza Oven by VSD International" fill sizes="(max-width: 900px) 100vw, 45vw" style={{ objectFit: 'cover' }} />
              <div style={{ position: 'absolute', bottom: 16, left: 16, background: 'rgba(8,8,10,0.88)', color: '#fff', padding: '0.6rem 1rem', borderRadius: '9px', fontFamily: 'var(--font-inter)', fontSize: '0.82rem', fontWeight: 600 }}>
                <strong style={{ color: 'var(--gold-bright)' }}>Stone-baked</strong> crust
              </div>
            </div>
          </Reveal>
          <Reveal x={24} y={0} delay={0.1}>
            <div>
              <span className="section-label">Most Popular Model</span>
              <h2 id="lp-featured-heading" style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(1.6rem, 3vw, 2.3rem)', color: 'var(--text-dark)', letterSpacing: '-0.02em', margin: '0.75rem 0 0.85rem', lineHeight: 1.12 }}>
                Commercial Gas Deck Pizza Oven
              </h2>
              <p style={{ fontFamily: 'var(--font-inter)', fontSize: '0.98rem', color: 'var(--text-body)', lineHeight: 1.65, marginBottom: '1.5rem' }}>
                Our best-selling workhorse for full-service pizzerias, restaurants and hotels — a stone-deck oven that delivers even, radiant, artisan-quality bakes order after order. Available as a single, double or triple deck, gas or electric, and built to your dimensions at our 2 Delhi factories.
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.7rem 1.25rem', marginBottom: '1.75rem' }}>
                {feats.map((f) => (
                  <div key={f} style={{ display: 'flex', alignItems: 'center', gap: '0.55rem', fontFamily: 'var(--font-inter)', fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-dark)' }}>
                    <CheckCircle2 size={18} style={{ color: 'var(--gold)', flexShrink: 0 }} /> {f}
                  </div>
                ))}
              </div>
              <div className="lp-cta-row" style={{ justifyContent: 'flex-start' }}>
                <a href={`tel:${PHONE_TEL}`} className="btn-gold lp-cta-single"><Phone size={16} /> Call for Price</a>
                <a href={WA} target="_blank" rel="noopener noreferrer" className="lp-btn-whatsapp"><WhatsAppIcon size={17} /> WhatsApp for Details</a>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ─── Certificates ─────────────────────────────────────────────────────────── */
function Certificates() {
  return (
    <section style={{ background: 'var(--surface-alt)', padding: 'clamp(2.25rem, 4.5vw, 3.5rem) 0' }} aria-labelledby="lp-cert-heading">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '2.75rem' }}>
          <span className="section-label">Certified for Trust</span>
          <RevealTitle id="lp-cert-heading" style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(1.75rem, 3.4vw, 2.6rem)', color: 'var(--text-dark)', letterSpacing: '-0.02em', margin: '0.75rem 0 0' }} text="Recognised, Registered & Verified" />
          <span className="gold-divider lp-divider-glow" style={{ marginTop: '1rem' }} />
          <p style={{ fontFamily: 'var(--font-inter)', fontSize: '0.95rem', color: 'var(--text-muted)', maxWidth: '34rem', margin: '1rem auto 0' }}>
            Every pizza oven we build is backed by the same certifications you can verify below — tap any certificate to view it full-size.
          </p>
        </div>

        <CertificateGallery />

        <div style={{ marginTop: '2.5rem' }}>
          <SectionCta tone="light" channel="whatsapp" hook="Want our certificates & client references for your project?" label="Request Them on WhatsApp" />
        </div>
      </div>
    </section>
  );
}

/* ─── Why VSD ──────────────────────────────────────────────────────────────── */
function WhyUs() {
  const usps: { Icon: typeof Factory; title: string; body: React.ReactNode }[] = [
    { Icon: Factory, title: 'Manufacturer, not a middleman', body: <>Designed and fabricated across our <strong>2 Delhi NCR factories</strong> — factory-direct pricing with zero markup chains.</> },
    { Icon: Ruler, title: 'Free design consultation', body: <>We match the <strong>oven type, size and fuel</strong> to your menu, covers and kitchen — not the biggest model we can sell you.</> },
    { Icon: IndianRupee, title: 'Fixed, itemised quote', body: <>No surprises — a <strong>line-by-line quote</strong> locked before work starts, with a <strong>best-price guarantee</strong>.</> },
    { Icon: Flame, title: 'Every oven type, one supplier', body: <>Deck, conveyor, countertop <strong>gas &amp; electric</strong>, and <strong>wood-fired / dual-fuel</strong> — all built and supported under one roof.</> },
    { Icon: ShieldCheck, title: 'ISO 9001 certified quality', body: <>Heavy-gauge food-grade <strong>SS&nbsp;304</strong> body, stone / refractory decks and durable finishes built for years of peak service.</> },
    { Icon: Headset, title: 'AMC & breakdown support', body: <>Burner, element, deck and finish servicing — backed by <strong>80+ active AMC</strong> clients across India.</> },
  ];
  return (
    <section style={{ background: '#fff', padding: 'clamp(2.25rem, 4.5vw, 3.5rem) 0' }} aria-labelledby="lp-why-heading">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '2.75rem' }}>
          <span className="section-label">Why VSD International</span>
          <RevealTitle id="lp-why-heading" style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(1.75rem, 3.4vw, 2.6rem)', color: 'var(--text-dark)', letterSpacing: '-0.02em', margin: '0.75rem 0 0' }} text="Why 200+ Kitchens Trust Us for Pizza Ovens" />
          <span className="gold-divider lp-divider-glow" style={{ marginTop: '1rem' }} />
        </div>

        <div className="lp-card-grid">
          {usps.map(({ Icon, title, body }, i) => (
            <Reveal key={title} delay={i * 0.08}>
              <TiltCard style={{ background: 'var(--surface)', border: '1px solid var(--border)', padding: '1.75rem', height: '100%' }}>
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
          <SectionCta tone="light" channel="whatsapp" hook="See why 200+ kitchens picked VSD for their pizza ovens." label="Talk to a Pizza Oven Expert" />
        </div>
      </div>
    </section>
  );
}

/* ─── CTA Band ─────────────────────────────────────────────────────────────── */
function CtaBand({ eyebrow, title, sub, channel, label }: { eyebrow: string; title: string; sub: string; channel: 'whatsapp' | 'phone'; label: string }) {
  return (
    <section style={{ background: 'var(--charcoal-warm)', padding: 'clamp(1.75rem, 3.5vw, 2.5rem) 0', position: 'relative', overflow: 'hidden' }}>
      <div aria-hidden="true" style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 65% 130% at 50% 0%, rgba(201,168,76,0.18) 0%, transparent 65%), radial-gradient(ellipse 40% 90% at 85% 100%, rgba(240,196,66,0.12) 0%, transparent 70%)', pointerEvents: 'none' }} />
      <div className="container" style={{ position: 'relative', textAlign: 'center', maxWidth: '46rem' }}>
        <Reveal>
          <p style={{ fontFamily: 'var(--font-inter)', fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '0.75rem' }}>{eyebrow}</p>
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

/* ─── Comparison ───────────────────────────────────────────────────────────── */
function Comparison() {
  const rows: [string, boolean, boolean][] = [
    ['Factory-direct manufacturing (no reseller markup)', true, false],
    ['Free design consultation before you buy', true, false],
    ['Fixed, itemised quote — no hidden costs', true, false],
    ['Every oven type — deck, conveyor, gas, electric & wood', true, false],
    ['Custom size, fuel type & finish built to order', true, false],
    ['Own installation team, not a courier drop-off', true, false],
    ['Heavy-gauge SS 304 body & stone / refractory deck', true, false],
    ['200+ delivered projects & 5★ track record', true, false],
  ];
  return (
    <section style={{ background: '#fff', padding: 'clamp(2.25rem, 4.5vw, 3.5rem) 0' }} aria-labelledby="lp-compare-heading">
      <div className="container" style={{ maxWidth: '52rem' }}>
        <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <span className="section-label">VSD vs Typical Vendor</span>
          <RevealTitle id="lp-compare-heading" style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(1.75rem, 3.4vw, 2.6rem)', color: 'var(--text-dark)', letterSpacing: '-0.02em', margin: '0.75rem 0 0' }} text="Why VSD Beats a Typical Pizza Oven Dealer" />
          <span className="gold-divider lp-divider-glow" style={{ marginTop: '1rem' }} />
        </div>

        <Reveal>
          <div style={{ border: '1px solid var(--border)', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 12px 40px rgba(0,0,0,0.05)' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr clamp(3.25rem, 15vw, 7rem) clamp(3.25rem, 15vw, 7rem)', background: 'var(--charcoal)', color: 'var(--text-on-dark)' }}>
              <div style={{ padding: 'clamp(0.75rem, 2.5vw, 1rem) clamp(0.75rem, 4vw, 1.25rem)', fontFamily: 'var(--font-inter)', fontWeight: 700, fontSize: 'clamp(0.72rem, 2.6vw, 0.8rem)', letterSpacing: '0.04em' }}>What matters</div>
              <div style={{ padding: 'clamp(0.75rem, 2.5vw, 1rem) 0.4rem', textAlign: 'center', fontFamily: 'var(--font-playfair)', fontWeight: 800, fontSize: 'clamp(0.85rem, 3vw, 0.95rem)', color: 'var(--gold-bright)' }}>VSD</div>
              <div style={{ padding: 'clamp(0.75rem, 2.5vw, 1rem) 0.4rem', textAlign: 'center', fontFamily: 'var(--font-inter)', fontWeight: 600, fontSize: 'clamp(0.72rem, 2.6vw, 0.82rem)', color: 'rgba(245,240,232,0.5)' }}>Others</div>
            </div>
            {rows.map(([label, vsd, other], i) => (
              <div key={label} className="lp-compare-row" style={{ display: 'grid', gridTemplateColumns: '1fr clamp(3.25rem, 15vw, 7rem) clamp(3.25rem, 15vw, 7rem)', alignItems: 'center', background: i % 2 ? 'var(--surface)' : '#fff', borderTop: '1px solid var(--border)' }}>
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
          <SectionCta tone="light" channel="whatsapp" hook="Ready to put the VSD advantage to work in your kitchen?" label="Send Your Enquiry Now" />
        </div>
      </div>
    </section>
  );
}

/* ─── Testimonials ─────────────────────────────────────────────────────────── */
const TESTIMONIALS: Review[] = [
  { name: 'Rahul Kapoor', role: 'Owner, Pizzeria — Delhi', text: 'VSD built us a twin-deck stone oven that bakes a perfectly even crust order after order. Our covers doubled and the oven has kept pace through every Friday-night rush.' },
  { name: 'Anjali Verma', role: 'Founder, Cloud Kitchen Brand — Gurgaon', text: 'We needed a conveyor oven for hands-off, uniform output across peak hours — no skilled oven staff required. VSD sized it right and it clears our rush without a single hold-up.' },
  { name: 'Chef Marco D’Souza', role: 'Executive Chef, 5-Star Hotel — Mumbai', text: 'For our restaurant we wanted an authentic wood-fired oven with live flame at the pass. VSD delivered exactly that — the theatre alone has become a talking point for guests.' },
  { name: 'Vikram Singh', role: 'Owner, Café — Karol Bagh, Delhi', text: 'Our countertop electric deck oven gives full commercial output in a tiny footprint. Heavy SS 304 build, precise heat — not the flimsy imported units local suppliers push.' },
  { name: 'Priya Nair', role: 'Operations Head, QSR Chain — Noida', text: 'We standardised identical conveyor pizza ovens across five outlets. VSD’s units held up perfectly under daily peak volume and the build quality is consistent across every kitchen.' },
  { name: 'Arjun Malhotra', role: 'Caterer, Weddings & Events — Chandigarh', text: 'Our portable wood-fired catering oven is built like a tank and moves easily on its frame. Live-fire pizza at weddings has become our signature — VSD nailed the design.' },
];

function Testimonials() {
  return (
    <section style={{ background: 'var(--surface)', padding: 'clamp(2.25rem, 4.5vw, 3.5rem) 0' }} aria-labelledby="lp-reviews-heading">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '2.75rem' }}>
          <span className="section-label">Client Testimonials</span>
          <RevealTitle id="lp-reviews-heading" style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(1.75rem, 3.4vw, 2.6rem)', color: 'var(--text-dark)', letterSpacing: '-0.02em', margin: '0.75rem 0 0' }} text="What Our Pizza Oven Clients Say" />
          <span className="gold-divider lp-divider-glow" style={{ marginTop: '1rem' }} />
        </div>

        <Reveal>
          <TestimonialSlider reviews={TESTIMONIALS} />
        </Reveal>

        <div style={{ marginTop: '1.5rem' }}>
          <SectionCta tone="light" channel="whatsapp" hook="Want to be our next 5-star success story?" label="Start Your Pizza Oven Build Today" />
        </div>
      </div>
    </section>
  );
}

/* ─── FAQs ─────────────────────────────────────────────────────────────────── */
function Faqs() {
  return (
    <section style={{ background: '#fff', padding: 'clamp(2.25rem, 4.5vw, 3.5rem) 0' }} aria-labelledby="lp-faq-heading">
      <div className="container" style={{ maxWidth: '46rem' }}>
        <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <span className="section-label">Questions, Answered</span>
          <RevealTitle id="lp-faq-heading" style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(1.75rem, 3.4vw, 2.6rem)', color: 'var(--text-dark)', letterSpacing: '-0.02em', margin: '0.75rem 0 0' }} text="Commercial Pizza Oven FAQs" />
          <span className="gold-divider lp-divider-glow" style={{ marginTop: '1rem' }} />
        </div>

        <div style={{ display: 'grid', gap: '0.75rem' }}>
          {LP_FAQS.map((f) => (
            <details key={f.q} style={{ border: '1px solid var(--border)', borderRadius: '12px', background: 'var(--surface)', overflow: 'hidden' }}>
              <summary style={{ cursor: 'pointer', listStyle: 'none', padding: '1.1rem 1.35rem', fontFamily: 'var(--font-inter)', fontWeight: 700, fontSize: '0.95rem', color: 'var(--text-dark)', display: 'flex', gap: '0.6rem', alignItems: 'flex-start' }}>
                <Check size={18} style={{ color: 'var(--gold-deep)', flexShrink: 0, marginTop: '0.1rem' }} />
                {f.q}
              </summary>
              <p style={{ padding: '0 1.1rem 1.2rem clamp(1.85rem, 9vw, 3rem)', fontFamily: 'var(--font-inter)', fontSize: '0.9rem', color: 'var(--text-body)', lineHeight: 1.7, margin: 0 }}>{f.a}</p>
            </details>
          ))}
        </div>

        <div style={{ marginTop: '2rem' }}>
          <SectionCta tone="light" channel="phone" hook="Still have a question we didn't cover above?" label="Call Us — We'll Answer It" />
        </div>
      </div>
    </section>
  );
}

/* ─── Google reviews ───────────────────────────────────────────────────────── */
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
                  <span key={l} style={{ padding: '0.3rem 0.75rem', borderRadius: '100px', background: 'rgba(201,168,76,0.08)', border: '1px solid rgba(201,168,76,0.22)', fontSize: '0.72rem', fontFamily: 'var(--font-inter)', fontWeight: 600, color: 'var(--gold-deep)' }}>{l}</span>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ─── Final CTA ────────────────────────────────────────────────────────────── */
function FinalCta() {
  return (
    <section style={{ background: 'var(--charcoal)', padding: 'clamp(2.25rem, 4.5vw, 3.5rem) 0', position: 'relative', overflow: 'hidden' }} aria-labelledby="lp-final-heading">
      <div aria-hidden="true" className="lp-final-glow" style={{ position: 'absolute', top: '-120px', left: '50%', transform: 'translateX(-50%)', width: '720px', height: '460px', background: 'radial-gradient(ellipse, rgba(240,196,66,0.20) 0%, rgba(201,168,76,0.1) 45%, transparent 70%)', filter: 'blur(64px)', pointerEvents: 'none' }} />
      <div className="container" style={{ position: 'relative' }}>
        <div className="lp-hero-grid">
          <Reveal x={-24} y={0}>
            <div>
              <div className="lp-eyebrow" style={{ marginBottom: '1.25rem' }}>
                <Flame size={14} /> 200+ Kitchens Served Since 2009
              </div>
              <h2 id="lp-final-heading" style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(1.9rem, 3.6vw, 2.9rem)', color: 'var(--text-on-dark)', lineHeight: 1.1, letterSpacing: '-0.02em', marginBottom: '1.1rem' }}>
                Ready to Find the <em className="gold-shimmer" style={{ fontWeight: 800, fontStyle: 'normal' }}>Right Pizza Oven</em>?
              </h2>
              <p style={{ fontFamily: 'var(--font-inter)', fontSize: '1rem', color: 'rgba(245,240,232,0.6)', lineHeight: 1.65, marginBottom: '1.5rem', maxWidth: '32rem' }}>
                Get a <strong style={{ color: 'var(--text-on-dark)' }}>free design consultation and an itemised quote</strong> from India&apos;s ISO 9001 certified pizza oven experts. A specialist will call you within <strong style={{ color: 'var(--gold)' }}>1 business hour</strong>.
              </p>
              <ul style={{ listStyle: 'none', display: 'grid', gap: '0.6rem', marginBottom: '1.75rem' }}>
                {['Free design consultation', 'Best-price guarantee', 'Every oven type & fuel', 'Pan-India supply & AMC support'].map((t) => (
                  <li key={t} style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontFamily: 'var(--font-inter)', fontSize: '0.95rem', color: 'rgba(245,240,232,0.78)' }}>
                    <CheckCircle2 size={17} style={{ color: 'var(--gold)', flexShrink: 0 }} /> {t}
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
            <LeadForm heading="Claim Your Free Consultation + Quote" subheading="30 seconds. No obligation. Reply within 1 business hour." ctaLabel="Claim Your Free Quote" source={LEAD_SOURCE} />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ─── Footer ───────────────────────────────────────────────────────────────── */
function Footer() {
  return (
    <footer style={{ background: 'var(--charcoal-warm)', borderTop: '1px solid rgba(201,168,76,0.15)', padding: '2.5rem 0 6rem' }}>
      <div className="container" style={{ display: 'grid', gap: '1.5rem', textAlign: 'center' }}>
        <Image src="/VSD_LOGO_DARK.webp" alt="VSD International" width={150} height={46} style={{ height: 'auto', width: 'auto', maxHeight: 46, margin: '0 auto' }} />
        <p style={{ fontFamily: 'var(--font-inter)', fontSize: '0.85rem', color: 'rgba(245,240,232,0.55)', lineHeight: 1.7, maxWidth: '34rem', margin: '0 auto' }}>
          <strong style={{ color: 'var(--text-on-dark)' }}>VSD International</strong> — ISO 9001 certified commercial kitchen equipment manufacturer &amp; pizza oven builder. Serving hotels, restaurants, cloud kitchens &amp; caterers across India since 2009.
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '0.5rem 1.5rem', fontFamily: 'var(--font-inter)', fontSize: '0.85rem', color: 'rgba(245,240,232,0.6)' }}>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}>A-347, Saraswati Gali, Mandawali, New Delhi 110092</span>
        </div>
        <div className="lp-cta-row">
          <a href={`tel:${PHONE_TEL}`} className="btn-gold lp-cta-single"><Phone size={16} /> Call {PHONE}</a>
        </div>
      </div>
    </footer>
  );
}

/* ─── Disclaimer ───────────────────────────────────────────────────────────── */
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

        <div style={{ borderTop: '1px solid rgba(201,168,76,0.12)', marginTop: '1.5rem', paddingTop: '1.25rem', textAlign: 'center' }}>
          <p style={{ fontFamily: 'var(--font-inter)', fontSize: '0.75rem', color: 'rgba(245,240,232,0.4)' }}>
            © {new Date().getFullYear()} VSD International. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ─── Mobile sticky bar ────────────────────────────────────────────────────── */
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
