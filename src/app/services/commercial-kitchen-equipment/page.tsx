import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Flame, Refrigerator, ChefHat, Droplets, Layers, Wind,
  Archive, Shield, Clock, Award, MapPin, ArrowRight,
  CheckCircle2, Building2, HeartPulse, Hotel, Truck, Cake,
  MessageCircle, FileDown, Users,
} from 'lucide-react';
import ServiceBreadcrumb from '@/components/services/ServiceBreadcrumb';
import ServiceFAQ        from '@/components/services/ServiceFAQ';
import ServiceTestimonial from '@/components/services/ServiceTestimonial';
import BrandsGrid        from '@/components/services/BrandsGrid';
import CitiesGrid        from '@/components/services/CitiesGrid';
import ServiceCTA        from '@/components/services/ServiceCTA';

/* ─── Metadata ───────────────────────────────────────────────────────────── */
export const metadata: Metadata = {
  title: 'Commercial Kitchen Equipment Manufacturer India | VSD International',
  description:
    'Commercial kitchen equipment manufacturer & supplier Delhi — cooking ranges, refrigeration, dishwashing, SS fabrication. 500+ installations. ISO 9001. Trusted by Hyatt, Radisson, Crowne Plaza.',
  alternates: { canonical: 'https://vsdinternational.com/services/commercial-kitchen-equipment/' },
  openGraph: {
    url: 'https://vsdinternational.com/services/commercial-kitchen-equipment/',
    title: 'Commercial Kitchen Equipment Manufacturer India | VSD International',
    description: 'ISO 9001 certified commercial kitchen equipment manufacturer. Delhi factories. 500+ installations for hotels, hospitals & institutions. Cooking, refrigeration, SS fabrication & more.',
    images: [{ url: 'https://vsdinternational.com/og-image.jpg', width: 1200, height: 630 }],
  },
};

/* ─── JSON-LD ────────────────────────────────────────────────────────────── */
const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      name: 'Commercial Kitchen Equipment Supply & Manufacturing',
      provider: { '@type': 'LocalBusiness', name: 'VSD International', '@id': 'https://vsdinternational.com/#localbusiness' },
      areaServed: { '@type': 'Country', name: 'India' },
      description: 'Commercial kitchen equipment manufacturer and supplier for hotels, hospitals, restaurants, cloud kitchens and institutions across India.',
      serviceType: 'Commercial Kitchen Equipment',
      aggregateRating: { '@type': 'AggregateRating', ratingValue: '4.9', reviewCount: '312', bestRating: '5' },
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home',     item: 'https://vsdinternational.com'                                           },
        { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://vsdinternational.com/services/'                                  },
        { '@type': 'ListItem', position: 3, name: 'Commercial Kitchen Equipment', item: 'https://vsdinternational.com/services/commercial-kitchen-equipment/' },
      ],
    },
    {
      '@type': 'FAQPage',
      // mainEntity: FAQS.map((f) => ({
      //   '@type': 'Question',
      //   name: f.q,
      //   acceptedAnswer: { '@type': 'Answer', text: f.a },
      // })),
    },
  ],
};

/* ─── Equipment Categories ───────────────────────────────────────────────── */
const CATEGORIES = [
  {
    icon: Flame,
    title: 'Commercial Cooking Equipment',
    items: ['Gas cooking ranges (2–8 burner)', 'Commercial griddles & flat tops', 'Combi ovens & convection ovens', 'Commercial fryers (floor & counter)', 'Salamanders & overhead broilers', 'Tandoor ovens & barbeque grills', 'Woks & Chinese cooking ranges', 'Pasta cookers & bain maries'],
  },
  {
    icon: Refrigerator,
    title: 'Refrigeration & Cold Storage',
    items: ['Commercial reach-in refrigerators', 'Walk-in cold rooms & blast chillers', 'Undercounter refrigerators & freezers', 'Display counters & cake display chillers', 'Ice machines & flake ice systems', 'Upright & chest freezers', 'Refrigerated prep tables', 'Wine coolers & bar fridges'],
  },
  {
    icon: ChefHat,
    title: 'Food Preparation Equipment',
    items: ['Planetary mixers (20L–80L)', 'Spiral dough mixers', 'Food processors & Robot Coupe blixers', 'Commercial slicers & dicing machines', 'Vegetable cutters & peelers', 'Grinders & mincers', 'Juice extractors & blenders', 'Dough rollers & sheeters'],
  },
  {
    icon: Droplets,
    title: 'Dishwashing & Warewashing',
    items: ['Undercounter dishwashers', 'Pass-through dishwashing machines', 'Hood-type dishwashers', 'Pot & pan washers', 'Glass washers (undercounter)', 'Pre-rinse spray units', 'Dish drying & storage racks', 'Glass & cutlery dryers'],
  },
  {
    icon: Layers,
    title: 'Stainless Steel Fabrication',
    items: ['Custom SS worktables (with/without sink)', 'Wall shelving & overhead shelves', 'Pass-through & service counters', 'Exhaust hoods & canopies', 'Pot racks & utensil rails', 'Trolleys & mobile platforms', 'Storage cabinets & lockers', 'Custom sink units (1, 2 & 3 bowl)'],
  },
  {
    icon: Archive,
    title: 'Storage & Serving Equipment',
    items: ['Hot cases & bain maries (countertop)', 'Food warmers & soup kettles', 'Chafing dishes & food bars', 'Bread warmers & display cases', 'Banquet trolleys & heated trolleys', 'Plate dispensers & tray slides', 'Dry storage racks & shelving', 'Condiment & sauce dispensers'],
  },
];

/* ─── Equipment Spec Table ───────────────────────────────────────────────── */
const SPEC_TABLE = [
  { category: 'Commercial Cooking Range',       brands: 'Garland, Falcon, Mareno', capacity: '2-burner to 8-burner',  price: '₹45,000 – ₹2,80,000' },
  { category: 'Combi Oven',                     brands: 'Rational, Alto-Shaam',    capacity: '6 GN – 20 GN',          price: '₹2,50,000 – ₹18,00,000' },
  { category: 'Commercial Refrigerator',         brands: 'Blue Star, Foster, True', capacity: '200L – 1200L',          price: '₹28,000 – ₹1,80,000' },
  { category: 'Planetary Mixer',                brands: 'Hobart, Sammic',          capacity: '20L – 80L',             price: '₹75,000 – ₹4,50,000' },
  { category: 'Pass-through Dishwasher',        brands: 'Winterhalter, Hobart',    capacity: '300–600 baskets/hr',    price: '₹1,80,000 – ₹8,00,000' },
  { category: 'Commercial Deep Fryer',          brands: 'Frymaster, Falcon',       capacity: '8L – 22L oil capacity', price: '₹35,000 – ₹2,20,000' },
  { category: 'Food Processor',                 brands: 'Robot Coupe',             capacity: '2.9L – 12L bowl',       price: '₹60,000 – ₹2,80,000' },
  { category: 'Ice Machine',                    brands: 'Scotsman, Manitowoc',     capacity: '20kg – 500kg/day',      price: '₹65,000 – ₹8,50,000' },
  { category: 'SS Worktable (custom)',           brands: 'VSD In-House',            capacity: '3ft – 12ft lengths',    price: '₹12,000 – ₹95,000' },
  { category: 'Walk-in Cold Room',              brands: 'VSD In-House + Danfoss',  capacity: '5 sqm – 200+ sqm',      price: '₹2,20,000 – ₹25,00,000' },
  { category: 'Commercial Hood / Exhaust',      brands: 'VSD In-House',            capacity: 'Custom sizes',          price: '₹18,000 – ₹3,50,000' },
  { category: 'Undercounter Dishwasher',        brands: 'Winterhalter, Miele Pro', capacity: '60 baskets/hr',         price: '₹85,000 – ₹2,50,000' },
];

/* ─── Industries ─────────────────────────────────────────────────────────── */
const INDUSTRIES = [
  { icon: Hotel,    label: 'Hotels',         href: '/industries/hotels',         desc: '5-star to budget hotel kitchens' },
  { icon: HeartPulse, label: 'Hospitals',    href: '/industries/hospitals',      desc: 'NABH & FSSAI compliant dietary kitchens' },
  { icon: Building2,  label: 'Restaurants',  href: '/industries/restaurants',    desc: 'QSR, fine-dine & café chains' },
  { icon: Truck,      label: 'Cloud Kitchens',href: '/industries/cloud-kitchens', desc: 'Dark kitchen & ghost kitchen setups' },
  { icon: Users,      label: 'Cafeterias',   href: '/industries/cafeterias',     desc: 'Corporate & institutional cafeterias' },
  { icon: Cake,       label: 'Bakeries',     href: '/industries/bakeries',       desc: 'Retail & wholesale bakery chains' },
];

/* ─── FAQs ───────────────────────────────────────────────────────────────── */
const FAQS = [
  {
    q: 'What is the cost of commercial kitchen equipment in India?',
    a: 'Commercial kitchen equipment costs in India vary widely based on kitchen type and scale. A basic cloud kitchen setup costs ₹5–12 lakhs. A mid-range restaurant kitchen runs ₹12–35 lakhs. A hospital dietary kitchen costs ₹30–80 lakhs. A full 5-star hotel kitchen can range from ₹80 lakhs to ₹3 crore. These ranges include cooking equipment, refrigeration, food prep, dishwashing, and SS fabrication. VSD International provides itemised quotes based on your specific menu, capacity, and kitchen size — contact us for an accurate estimate.',
  },
  {
    q: 'How long does a commercial kitchen installation take?',
    a: 'Commercial kitchen installation timelines depend on project scope. A cloud kitchen setup takes 10–18 days. A restaurant kitchen setup takes 18–30 days. A hotel kitchen (single outlet) takes 21–35 days. A full hospital dietary kitchen or large hotel project can take 45–90 days. Timelines include equipment delivery, on-site installation, testing, commissioning, and staff training. VSD International has delivered complex hotel kitchen projects in as little as 32 days — we build project-specific timelines at the proposal stage.',
  },
  {
    q: 'Do you manufacture commercial kitchen equipment or only supply it?',
    a: 'Both. VSD International operates in-house manufacturing facilities in Delhi NCR (Mandawali) and Ghaziabad. We manufacture stainless steel kitchen equipment — worktables, sinks, shelving, exhaust hoods, serving counters, custom fabrication — directly. For imported brands (Rational, Robot Coupe, Frymaster, etc.), we are authorised Indian dealers and supply genuine equipment with Indian warranties. This dual capability allows us to offer complete kitchen solutions at competitive prices.',
  },
  {
    q: 'What commercial kitchen equipment is required for a restaurant?',
    a: 'A standard restaurant kitchen requires: cooking equipment (gas range with 4–6 burners, fryer, oven, possibly a salamander), cold storage (reach-in refrigerator, under-counter chiller, cold room), food preparation (mixer, food processor, slicer, vegetable cutter), dishwashing (undercounter or pass-through dishwasher, pre-rinse unit), stainless steel fabrication (worktables, sink units, shelving), ventilation (exhaust hood, fresh air system), and serving equipment (bain marie, hot case). VSD International provides a complete equipment list and layout for your specific menu and cover count — schedule a free consultation.',
  },
  {
    q: 'Is VSD International an authorised dealer for Rational and Robot Coupe?',
    a: 'Yes — VSD International is an authorised Indian dealer for Rational (Germany) combi ovens and steamers, Robot Coupe (France) food processors and blixers, Frymaster (USA) commercial fryers, Hamilton Beach Commercial, Scotsman ice machines, and BUNN beverage equipment. We supply genuine products with valid Indian warranties, manufacturer-backed after-sales support, and access to genuine spare parts. Being an authorised dealer means customers can claim warranty directly with the manufacturer if needed.',
  },
  {
    q: 'What is the difference between commercial kitchen equipment and domestic kitchen equipment?',
    a: 'Commercial kitchen equipment is designed for continuous high-volume use — typically 12–18 hours per day, 7 days a week. Key differences: (1) Durability — commercial equipment uses 16–20 gauge stainless steel versus domestic grade; (2) Capacity — commercial ranges deliver 18,000–36,000 BTU versus 8,000–12,000 BTU for domestic; (3) Safety compliance — commercial equipment must meet FSSAI, BIS, and FIRE NOC standards; (4) Serviceability — commercial equipment has accessible components for easy maintenance; (5) Warranty — commercial warranties cover high-utilisation use cases. Using domestic equipment in a commercial kitchen is a food safety and liability risk.',
  },
  {
    q: 'Does VSD International provide a warranty on commercial kitchen equipment?',
    a: 'Yes. All equipment supplied by VSD International comes with manufacturer warranty — typically 1 year comprehensive and up to 3 years on specific components. For imported brands (Rational, Robot Coupe, etc.), warranty is backed by the Indian subsidiary or authorised service network. For equipment manufactured in our Delhi factories (SS fabrication, custom items), we provide a 1-year structural warranty. We also offer Annual Maintenance Contracts (AMC) that extend coverage beyond the warranty period and include scheduled preventive maintenance and priority breakdown support.',
  },
];

/* ─── Testimonial ────────────────────────────────────────────────────────── */
const TESTIMONIAL = {
  quote: 'VSD International handled our complete kitchen setup for Hyatt Regency Delhi — from layout planning to equipment installation across 8 kitchen zones. They delivered on time, met our 5-star specifications down to the last detail, and the post-installation support has been exceptional. We\'ve since engaged them for two other Hyatt properties.',
  name: 'Rajesh Mehta',
  title: 'Executive F&B Manager',
  company: 'Hyatt Regency Delhi',
  city: 'New Delhi',
  rating: 5,
};

/* ─── Projects ───────────────────────────────────────────────────────────── */
const OTHER_PROJECTS = [
  'Crowne Plaza Rohini, Delhi — 5-star hotel kitchen',
  'Radisson Blu Dwarka, Delhi — Full F&B kitchen setup',
  'Metro Hospitals Group — 6 hospital kitchens across Delhi NCR',
  'Rebel Foods Hub, Mumbai — 12-brand cloud kitchen',
  'DRDO Canteen, Delhi — 2000-pax institutional kitchen',
  'Le Meridien Agra — Heritage hotel kitchen renovation',
];

/* ═══════════════════════════════════════════════════════════════════════════
   PAGE
   ═══════════════════════════════════════════════════════════════════════════ */
export default function CommercialKitchenEquipmentPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <ServiceBreadcrumb
        crumbs={[
          { label: 'Services', href: '/services' },
          { label: 'Commercial Kitchen Equipment' },
        ]}
      />

      {/* §1 — SEO Hero */}
      <section
        className="grain-overlay"
        style={{
          background: 'var(--charcoal-warm)',
          padding: '5rem 0 4.5rem',
          borderBottom: '1px solid rgba(201,168,76,0.15)',
          position: 'relative',
        }}
      >
        <div aria-hidden="true" style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '2px', background: 'linear-gradient(90deg, transparent 5%, var(--gold-bright) 35%, var(--gold) 65%, transparent 95%)' }} />

        <div className="container mx-auto" style={{ maxWidth: '80rem', padding: '0 1.25rem' }}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="section-label" style={{ marginBottom: '1rem' }}>P1 Priority Service</p>
              <h1
                style={{
                  fontFamily: 'var(--font-playfair)',
                  fontSize: 'clamp(1.875rem, 3.8vw, 3rem)',
                  fontWeight: 700,
                  lineHeight: 1.1,
                  letterSpacing: '-0.02em',
                  color: 'var(--text-on-dark)',
                  marginBottom: '1.25rem',
                }}
              >
                Commercial Kitchen Equipment Supplier &amp;{' '}
                <em className="gold-shimmer" style={{ fontStyle: 'italic', fontWeight: 800 }}>
                  Manufacturer India
                </em>
              </h1>

              <div aria-hidden="true" style={{ width: 60, height: 3, background: 'linear-gradient(90deg, var(--gold-bright), var(--gold), var(--gold-deep))', borderRadius: 2, marginBottom: '1.5rem' }} />

              <p
                style={{
                  fontFamily: 'var(--font-inter)',
                  fontSize: '1.0625rem',
                  color: 'rgba(245,240,232,0.7)',
                  lineHeight: 1.75,
                  marginBottom: '2rem',
                }}
              >
                VSD International is India&apos;s trusted commercial kitchen equipment supplier and manufacturer — delivering cooking equipment, refrigeration, food prep, dishwashing systems, and custom SS fabrication to hotels, hospitals, restaurants, and institutions across India. With ISO 9001 certification and in-house Delhi factories, we have completed 500+ installations since 2009.
              </p>

              {/* Trust bar */}
              <div className="flex flex-wrap gap-5" style={{ marginBottom: '2rem' }}>
                {[
                  { icon: Shield, text: 'ISO 9001 Certified' },
                  { icon: Award,  text: '500+ Installations' },
                  { icon: Clock,  text: '15 Years Experience' },
                ].map(({ icon: Icon, text }) => (
                  <div key={text} className="flex items-center gap-2">
                    <Icon size={15} style={{ color: 'var(--gold)', flexShrink: 0 }} aria-hidden="true" />
                    <span style={{ fontFamily: 'var(--font-inter)', fontSize: '0.875rem', fontWeight: 600, color: 'rgba(245,240,232,0.75)' }}>
                      {text}
                    </span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-3">
                <a
                  href="https://wa.me/919250346370?text=Hi%20VSD%2C%20I%20need%20commercial%20kitchen%20equipment.%20Please%20share%20details%20and%20pricing."
                  target="_blank" rel="noopener noreferrer"
                  className="btn-gold inline-flex items-center gap-2"
                >
                  <MessageCircle size={15} aria-hidden="true" />
                  Get Free Equipment Quote
                </a>
                <Link href="/services" className="btn-ghost-dark inline-flex items-center gap-2">
                  View All Services <ArrowRight size={14} aria-hidden="true" />
                </Link>
              </div>
            </div>

            {/* Stats panel */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: 'Projects Completed', value: '500+' },
                { label: 'Cities Served',       value: '50+' },
                { label: 'Brands Available',    value: '15+' },
                { label: 'Years in Business',   value: '15' },
              ].map(({ label, value }) => (
                <div
                  key={label}
                  className="rounded-xl flex flex-col items-center justify-center text-center"
                  style={{
                    background: 'rgba(255,255,255,0.03)',
                    border: '1px solid rgba(201,168,76,0.15)',
                    padding: '1.75rem 1rem',
                  }}
                >
                  <span style={{ fontFamily: 'var(--font-playfair)', fontSize: '2.25rem', fontWeight: 800, color: 'var(--gold-bright)', lineHeight: 1 }}>
                    {value}
                  </span>
                  <span style={{ fontFamily: 'var(--font-inter)', fontSize: '0.8125rem', color: 'rgba(245,240,232,0.45)', marginTop: '0.5rem', lineHeight: 1.3 }}>
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* §2 — What We Offer */}
      <section
        aria-labelledby="offer-heading"
        style={{ background: '#FFFFFF', padding: '5.5rem 0' }}
      >
        <div className="container mx-auto" style={{ maxWidth: '80rem', padding: '0 1.25rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '3.25rem' }}>
            <p className="section-label" style={{ marginBottom: '0.75rem' }}>Equipment Range</p>
            <h2 id="offer-heading" style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', color: 'var(--text-dark)', lineHeight: 1.12 }}>
              Our Commercial Kitchen Equipment Products &amp; Services
            </h2>
            <div aria-hidden="true" style={{ width: 56, height: 3, background: 'linear-gradient(90deg, var(--gold-bright), var(--gold), var(--gold-deep))', borderRadius: 2, margin: '1.125rem auto 0' }} />
            <p style={{ marginTop: '1.25rem', fontFamily: 'var(--font-inter)', fontSize: '0.9375rem', color: 'var(--text-body)', lineHeight: 1.72, maxWidth: 640, margin: '1.25rem auto 0' }}>
              Complete commercial kitchen equipment coverage — from cooking equipment and cold storage to food preparation, dishwashing, stainless steel fabrication, and serving systems.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CATEGORIES.map(({ icon: Icon, title, items }) => (
              <div
                key={title}
                className="card-lift rounded-2xl"
                style={{ background: 'var(--surface)', border: '1px solid var(--border)', padding: '1.75rem' }}
              >
                <div style={{ width: 44, height: 44, borderRadius: 10, background: 'rgba(201,168,76,0.08)', border: '1px solid rgba(201,168,76,0.18)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }} aria-hidden="true">
                  <Icon size={20} style={{ color: 'var(--gold)' }} strokeWidth={1.6} />
                </div>
                <h3 style={{ fontFamily: 'var(--font-playfair)', fontWeight: 700, fontSize: '1.0625rem', color: 'var(--text-dark)', marginBottom: '0.875rem', lineHeight: 1.25 }}>
                  {title}
                </h3>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  {items.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <CheckCircle2 size={13} style={{ color: 'var(--gold)', flexShrink: 0, marginTop: '0.2rem' }} aria-hidden="true" />
                      <span style={{ fontFamily: 'var(--font-inter)', fontSize: '0.875rem', color: 'var(--text-body)', lineHeight: 1.5 }}>
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Equipment Cost Guide — Special SOP requirement */}
          <div
            style={{
              marginTop: '3.5rem',
              background: 'var(--surface)',
              border: '1px solid var(--border)',
              borderLeft: '4px solid var(--gold)',
              borderRadius: '8px',
              padding: '2rem 2.25rem',
            }}
          >
            <h3 style={{ fontFamily: 'var(--font-playfair)', fontWeight: 700, fontSize: '1.375rem', color: 'var(--text-dark)', marginBottom: '1rem' }}>
              Kitchen Equipment Cost Guide India — Budget by Kitchen Type
            </h3>
            <p style={{ fontFamily: 'var(--font-inter)', fontSize: '0.9375rem', color: 'var(--text-body)', lineHeight: 1.72, marginBottom: '1.25rem' }}>
              Kitchen equipment costs vary significantly based on kitchen type, scale, and equipment grade. Here are realistic budget ranges based on our 500+ completed projects:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { type: 'Cloud Kitchen (single brand)', range: '₹5 – ₹12 Lakhs', note: 'Basic setup, compact' },
                { type: 'Restaurant (50–100 covers)',   range: '₹12 – ₹35 Lakhs', note: 'Full service kitchen' },
                { type: 'Hotel Kitchen (3-star)',        range: '₹35 – ₹80 Lakhs', note: 'Multi-outlet setup' },
                { type: '5-Star Hotel Kitchen',          range: '₹80L – ₹3 Crore', note: 'Full turnkey project' },
              ].map(({ type, range, note }) => (
                <div key={type} style={{ background: '#FFFFFF', border: '1px solid var(--border)', borderRadius: 8, padding: '1rem' }}>
                  <p style={{ fontFamily: 'var(--font-inter)', fontWeight: 600, fontSize: '0.875rem', color: 'var(--text-dark)', marginBottom: '0.5rem', lineHeight: 1.3 }}>{type}</p>
                  <p style={{ fontFamily: 'var(--font-playfair)', fontWeight: 800, fontSize: '1.125rem', color: 'var(--gold)', marginBottom: '0.25rem' }}>{range}</p>
                  <p style={{ fontFamily: 'var(--font-inter)', fontSize: '0.8125rem', color: 'var(--text-muted)' }}>{note}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Equipment Specification Table */}
      <section
        aria-labelledby="spec-heading"
        style={{ background: 'var(--surface)', padding: '4.5rem 0', borderTop: '1px solid var(--border)' }}
      >
        <div className="container mx-auto" style={{ maxWidth: '80rem', padding: '0 1.25rem' }}>
          <div style={{ marginBottom: '2rem' }}>
            <p className="section-label" style={{ marginBottom: '0.75rem' }}>Specifications & Pricing</p>
            <h2 id="spec-heading" style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(1.5rem, 2.4vw, 2rem)', color: 'var(--text-dark)', lineHeight: 1.2 }}>
              Commercial Kitchen Equipment — Specification &amp; Price Reference
            </h2>
            <div aria-hidden="true" style={{ width: 56, height: 3, background: 'linear-gradient(90deg, var(--gold-bright), var(--gold), var(--gold-deep))', borderRadius: 2, marginTop: '1rem' }} />
            <p style={{ marginTop: '1rem', fontFamily: 'var(--font-inter)', fontSize: '0.9375rem', color: 'var(--text-body)', maxWidth: 640 }}>
              Indicative price ranges based on current market rates. Final pricing depends on specifications, brand, and project scope. Contact us for an exact quote.
            </p>
          </div>

          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontFamily: 'var(--font-inter)' }}>
              <thead>
                <tr style={{ background: 'var(--charcoal)', color: 'var(--text-on-dark)' }}>
                  {['Equipment Category', 'Typical Brands', 'Capacity Range', 'Price Range (INR)'].map((h) => (
                    <th key={h} style={{ padding: '0.875rem 1rem', fontSize: '0.8125rem', fontWeight: 700, letterSpacing: '0.06em', textAlign: 'left', whiteSpace: 'nowrap' }}>
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {SPEC_TABLE.map((row, i) => (
                  <tr
                    key={row.category}
                    style={{ background: i % 2 === 0 ? '#FFFFFF' : 'var(--surface)', borderBottom: '1px solid var(--border)' }}
                  >
                    <td style={{ padding: '0.875rem 1rem', fontSize: '0.875rem', color: 'var(--text-dark)', fontWeight: 600 }}>{row.category}</td>
                    <td style={{ padding: '0.875rem 1rem', fontSize: '0.875rem', color: 'var(--text-muted)' }}>{row.brands}</td>
                    <td style={{ padding: '0.875rem 1rem', fontSize: '0.875rem', color: 'var(--text-body)' }}>{row.capacity}</td>
                    <td style={{ padding: '0.875rem 1rem', fontSize: '0.875rem', fontWeight: 700, color: 'var(--gold-deep)' }}>{row.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* §3 — Industries Served */}
      <section
        aria-labelledby="industries-heading"
        style={{ background: '#FFFFFF', padding: '5rem 0', borderTop: '1px solid var(--border)' }}
      >
        <div className="container mx-auto" style={{ maxWidth: '80rem', padding: '0 1.25rem' }}>
          <div style={{ marginBottom: '2.5rem' }}>
            <p className="section-label" style={{ marginBottom: '0.75rem' }}>Who We Serve</p>
            <h2 id="industries-heading" style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(1.625rem, 2.8vw, 2.25rem)', color: 'var(--text-dark)', lineHeight: 1.15 }}>
              Industries We Supply Commercial Kitchen Equipment To
            </h2>
            <div aria-hidden="true" style={{ width: 56, height: 3, background: 'linear-gradient(90deg, var(--gold-bright), var(--gold), var(--gold-deep))', borderRadius: 2, marginTop: '1rem' }} />
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {INDUSTRIES.map(({ icon: Icon, label, href, desc }) => (
              <Link
                key={href} href={href}
                className="card-lift flex flex-col items-center gap-3 text-center rounded-xl p-4"
                style={{ background: 'var(--surface)', border: '1px solid var(--border)', textDecoration: 'none' }}
              >
                <div style={{ width: 48, height: 48, borderRadius: '50%', background: 'rgba(201,168,76,0.08)', border: '1px solid rgba(201,168,76,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center' }} aria-hidden="true">
                  <Icon size={20} style={{ color: 'var(--gold)' }} strokeWidth={1.6} />
                </div>
                <div>
                  <p style={{ fontFamily: 'var(--font-inter)', fontWeight: 700, fontSize: '0.875rem', color: 'var(--text-dark)', marginBottom: '0.25rem' }}>{label}</p>
                  <p style={{ fontFamily: 'var(--font-inter)', fontSize: '0.75rem', color: 'var(--text-muted)', lineHeight: 1.4 }}>{desc}</p>
                </div>
              </Link>
            ))}
          </div>

          {/* Cross-links to related services */}
          <div style={{ marginTop: '2.5rem', padding: '1.5rem 2rem', background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 8 }}>
            <p style={{ fontFamily: 'var(--font-inter)', fontWeight: 700, fontSize: '0.875rem', color: 'var(--text-dark)', marginBottom: '0.875rem' }}>Related Services</p>
            <div className="flex flex-wrap gap-3">
              {[
                ['Hotel Kitchen Equipment',   '/services/hotel-kitchen-equipment'],
                ['Cloud Kitchen Setup',        '/services/cloud-kitchen-setup'],
                ['Kitchen Layout Design',      '/services/kitchen-layout-design'],
                ['Stainless Steel Fabrication','/services/stainless-steel-fabrication'],
              ].map(([label, href]) => (
                <Link key={href as string} href={href as string} className="btn-ghost text-sm" style={{ minHeight: 'auto', padding: '0.5rem 1rem' }}>
                  {label} →
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* §4 — Why VSD International */}
      <section
        aria-labelledby="why-vsd-heading"
        className="grain-overlay"
        style={{ background: 'var(--charcoal-light)', padding: '5.5rem 0', borderTop: '1px solid rgba(201,168,76,0.1)' }}
      >
        <div className="container mx-auto" style={{ maxWidth: '80rem', padding: '0 1.25rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <p className="section-label" style={{ marginBottom: '0.75rem' }}>Our Advantage</p>
            <h2 id="why-vsd-heading" style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', color: 'var(--text-on-dark)', lineHeight: 1.12 }}>
              Why Choose VSD International for Commercial Kitchen Equipment
            </h2>
            <div aria-hidden="true" style={{ width: 56, height: 3, background: 'linear-gradient(90deg, var(--gold-bright), var(--gold), var(--gold-deep))', borderRadius: 2, margin: '1.125rem auto 0' }} />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {[
              {
                title: 'Delhi Factory Advantage',
                body: 'Our Delhi NCR and Ghaziabad factories manufacture SS equipment in-house, cutting costs by 30–40% versus imported alternatives. Quality control is 100% in our hands — every worktable, sink, hood, and shelf is manufactured to your exact specifications.',
              },
              {
                title: 'Turnkey Capability — Design to Commissioning',
                body: 'We are not just equipment suppliers. VSD International handles layout design (CAD drawings), equipment selection, procurement, logistics, on-site installation, commissioning, and staff training — one contract, one point of accountability.',
              },
              {
                title: 'FSSAI & HACCP Compliance',
                body: 'All commercial kitchen equipment supplied by VSD International meets FSSAI food safety standards and HACCP hygiene requirements. Our installations pass health inspections and food safety audits for hospitals (NABH), hotels (5-star audit), and cloud kitchens (Zomato/Swiggy compliance).',
              },
              {
                title: 'Post-Installation AMC & Warranty',
                body: 'Every installation includes a 1-year comprehensive warranty on equipment. AMC contracts available for 1–5 years, covering 2–4 scheduled preventive visits, priority emergency support (4-hour response), genuine spare parts, and dedicated service engineer.',
              },
            ].map(({ title, body }) => (
              <div
                key={title}
                className="card-lift-dark rounded-2xl"
                style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(201,168,76,0.12)', padding: '2rem' }}
              >
                <div style={{ width: 10, height: 10, borderRadius: '50%', background: 'var(--gold)', marginBottom: '1rem' }} aria-hidden="true" />
                <h3 style={{ fontFamily: 'var(--font-playfair)', fontWeight: 700, fontSize: '1.0625rem', color: 'var(--text-on-dark)', marginBottom: '0.75rem' }}>{title}</h3>
                <p style={{ fontFamily: 'var(--font-inter)', fontSize: '0.9375rem', color: 'rgba(245,240,232,0.6)', lineHeight: 1.72 }}>{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* §5 — Featured Project */}
      <section
        aria-labelledby="project-heading"
        style={{ background: '#FFFFFF', padding: '5.5rem 0', borderTop: '1px solid var(--border)' }}
      >
        <div className="container mx-auto" style={{ maxWidth: '80rem', padding: '0 1.25rem' }}>
          <div style={{ marginBottom: '2.5rem' }}>
            <p className="section-label" style={{ marginBottom: '0.75rem' }}>Portfolio Evidence</p>
            <h2 id="project-heading" style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(1.625rem, 2.8vw, 2.25rem)', color: 'var(--text-dark)', lineHeight: 1.15 }}>
              Recent Commercial Kitchen Equipment Projects
            </h2>
            <div aria-hidden="true" style={{ width: 56, height: 3, background: 'linear-gradient(90deg, var(--gold-bright), var(--gold), var(--gold-deep))', borderRadius: 2, marginTop: '1rem' }} />
          </div>

          {/* Featured project */}
          <div
            className="rounded-2xl overflow-hidden"
            style={{ border: '1px solid var(--border)', marginBottom: '2rem' }}
          >
            <div
              style={{ background: 'linear-gradient(135deg, var(--charcoal) 0%, var(--charcoal-mid) 100%)', height: 200, display: 'flex', alignItems: 'center', justifyContent: 'center' }}
              aria-hidden="true"
            >
              <ChefHat size={64} style={{ color: 'rgba(201,168,76,0.3)' }} strokeWidth={1} />
            </div>
            <div style={{ padding: '2rem' }}>
              <span style={{ fontFamily: 'var(--font-inter)', fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--gold)' }}>
                Featured Project — 5-Star Hotel Kitchen
              </span>
              <h3 style={{ fontFamily: 'var(--font-playfair)', fontWeight: 700, fontSize: '1.375rem', color: 'var(--text-dark)', margin: '0.625rem 0 0.875rem' }}>
                Hyatt Regency Delhi — Complete Kitchen Setup
              </h3>
              <p style={{ fontFamily: 'var(--font-inter)', fontSize: '0.9375rem', color: 'var(--text-body)', lineHeight: 1.72, maxWidth: 680 }}>
                Complete 5-star hotel kitchen across 8 kitchen zones — main kitchen, banquet kitchen, coffee shop, Indian restaurant, bar, pastry, staff canteen, and receiving area. Equipment included 4 Rational combi ovens, 12 commercial cooking ranges, custom SS fabrication throughout, walk-in cold rooms, and a Winterhalter flight conveyor dishwasher. Delivered in 45 days from order to commissioning.
              </p>
              <p style={{ marginTop: '1rem', fontFamily: 'var(--font-inter)', fontWeight: 700, fontSize: '0.9375rem', color: 'var(--gold)' }}>
                Project Value: ₹1.8 Crore · Timeline: 45 days
              </p>
            </div>
          </div>

          {/* Other projects list */}
          <div>
            <p style={{ fontFamily: 'var(--font-inter)', fontWeight: 700, fontSize: '0.875rem', color: 'var(--text-dark)', marginBottom: '0.875rem' }}>Other Notable Projects</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {OTHER_PROJECTS.map((p) => (
                <div key={p} className="flex items-start gap-2.5">
                  <MapPin size={13} style={{ color: 'var(--gold)', flexShrink: 0, marginTop: '0.15rem' }} aria-hidden="true" />
                  <span style={{ fontFamily: 'var(--font-inter)', fontSize: '0.875rem', color: 'var(--text-body)' }}>{p}</span>
                </div>
              ))}
            </div>
            <Link href="/projects" className="inline-flex items-center gap-1.5 mt-4" style={{ color: 'var(--gold)', fontFamily: 'var(--font-inter)', fontWeight: 700, fontSize: '0.9375rem', textDecoration: 'none' }}>
              View All Projects <ArrowRight size={14} aria-hidden="true" />
            </Link>
          </div>

          {/* Mid-page CTA — CRO §2 */}
          <div
            style={{
              marginTop: '2.5rem',
              background: 'var(--surface)',
              border: '1px solid rgba(201,168,76,0.25)',
              borderRadius: 10,
              padding: '1.75rem 2rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
              alignItems: 'flex-start',
            }}
          >
            <p style={{ fontFamily: 'var(--font-inter)', fontSize: '1.0625rem', fontWeight: 700, color: 'var(--text-dark)' }}>
              Like what you see? Get a free site assessment for your commercial kitchen project.
            </p>
            <a
              href="https://wa.me/919250346370?text=Hi%20VSD%2C%20I%20want%20a%20free%20site%20assessment%20for%20my%20kitchen%20project."
              target="_blank" rel="noopener noreferrer"
              className="btn-gold inline-flex items-center gap-2 text-sm"
            >
              <MessageCircle size={14} aria-hidden="true" />
              Get Free Site Assessment
            </a>
          </div>
        </div>
      </section>

      {/* §6 — Brands */}
      <BrandsGrid />

      {/* §7 — Cities */}
      <CitiesGrid serviceSlug="commercial-kitchen-equipment" />

      {/* §8 — Testimonial */}
      <ServiceTestimonial testimonial={TESTIMONIAL} />

      {/* §9 — FAQ */}
      <ServiceFAQ
        faqs={FAQS}
        heading="Frequently Asked Questions — Commercial Kitchen Equipment"
      />

      {/* §10 — CTA */}
      <ServiceCTA
        serviceName="Commercial Kitchen Equipment"
        subtext="Share your kitchen type, capacity, and timeline. We'll send you a detailed equipment list, layout sketch, and itemised quote within 24 hours."
      />
    </>
  );
}
