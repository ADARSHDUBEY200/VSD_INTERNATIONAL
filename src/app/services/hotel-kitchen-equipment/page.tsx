import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Hotel, Shield, Award, CheckCircle2, ArrowRight, MessageCircle,
  UtensilsCrossed, Cake, Flame, Refrigerator, Layers, Droplets,
  Building2, Users,
} from 'lucide-react';
import ServiceBreadcrumb  from '@/components/services/ServiceBreadcrumb';
import ServiceFAQ         from '@/components/services/ServiceFAQ';
import ServiceTestimonial from '@/components/services/ServiceTestimonial';
import BrandsGrid         from '@/components/services/BrandsGrid';
import type { Brand }     from '@/components/services/BrandsGrid';
import CitiesGrid         from '@/components/services/CitiesGrid';
import ServiceCTA         from '@/components/services/ServiceCTA';

/* ─── Meta ──────────────────────────────────────────────────────────────── */
export const metadata: Metadata = {
  title: 'Hotel Kitchen Equipment Manufacturer & Supplier | VSD',
  description:
    'ISO 9001:2015 hotel kitchen equipment manufacturer & supplier. Turnkey hotel kitchens — design, supply, install. Trusted by Hyatt, Radisson & ITC.',
  alternates: { canonical: 'https://vsdinternational.com/services/hotel-kitchen-equipment/' },
  openGraph: {
    url: 'https://vsdinternational.com/services/hotel-kitchen-equipment/',
    title: 'Hotel Kitchen Equipment Manufacturer & Supplier | VSD International',
    description:
      'ISO 9001:2015 hotel kitchen equipment manufacturer & supplier. Turnkey 5-star, business & boutique hotel kitchens — design, supply, install. Trusted by Hyatt & Radisson.',
    images: [{ url: 'https://vsdinternational.com/og-image.jpg', width: 1200, height: 630 }],
  },
};

/* ─── §2 Equipment Zones ─────────────────────────────────────────────────── */
const KITCHEN_ZONES = [
  {
    icon: Flame,
    title: 'Main Production Kitchen',
    desc: 'Combi ovens, gas and induction ranges, tandoors, griddles, salamanders, deep fryers and tilting bratt pans — the high-output line behind à-la-carte and all-day dining.',
  },
  {
    icon: UtensilsCrossed,
    title: 'Banquet & Bulk Kitchen',
    desc: 'Bulk cookers and rice boilers, tilting braising pans, bain maries, hot cases and foodservice trolleys built to plate large covers without losing temperature or quality.',
  },
  {
    icon: Cake,
    title: 'Bakery & Pastry',
    desc: 'Deck and rotary rack ovens, planetary and spiral mixers, dough sheeters, proofers and chocolate equipment for in-house bakery and patisserie.',
  },
  {
    icon: Refrigerator,
    title: 'Cold Kitchen & Refrigeration',
    desc: 'Walk-in cold rooms and freezers, blast chillers, under-counter and vertical units and display chillers — the cold chain that keeps a hotel HACCP-ready.',
  },
  {
    icon: Droplets,
    title: 'Warewashing & Hygiene',
    desc: 'Hood-type and rack-conveyor dishwashers, pre-rinse stations, pot-wash units and grease traps engineered for banquet-scale throughput.',
  },
  {
    icon: Layers,
    title: 'Custom Stainless-Steel Fabrication',
    desc: 'Work tables, exhaust hoods, sinks, shelving and dish-landing tables fabricated in SS 304 to your exact layout — built in our Delhi facilities, not bought off a shelf.',
  },
];

/* ─── §3 Hotels We Equip ─────────────────────────────────────────────────── */
const HOTEL_TYPES = [
  {
    icon: Hotel,
    label: 'Luxury & 5-Star Hotels',
    desc: 'Banquet-scale production, fine-dining, bar and staff kitchens built to brand-standard specifications.',
    href: '/industries/hotels/',
  },
  {
    icon: Building2,
    label: 'Business & 4-Star Hotels',
    desc: 'Efficient multi-cuisine kitchens that balance output against operating cost.',
    href: '/industries/hotels/',
  },
  {
    icon: Award,
    label: 'Boutique & Heritage Hotels',
    desc: 'Compact, character-fit kitchens within constrained or heritage-listed spaces.',
    href: '/industries/hotels/',
  },
  {
    icon: Users,
    label: 'Resorts',
    desc: 'Multi-outlet kitchens (all-day dining, specialty, banquet) often in remote locations that demand reliable supply and service.',
    href: '/industries/hotels/',
  },
  {
    icon: UtensilsCrossed,
    label: 'Banquet & Convention Venues',
    desc: 'High-volume bulk cooking and hot-holding for large covers.',
    href: '/industries/hotels/',
  },
];

/* ─── §4 Why Hotels Choose VSD ──────────────────────────────────────────── */
const WHY_VSD = [
  {
    title: 'Five-Star-Grade Specification',
    body: 'We build to the standards a Hyatt, Radisson or Crowne Plaza kitchen demands — heavy-gauge SS 304, banquet-rated capacities and finishes that survive daily five-star service.',
  },
  {
    title: 'Manufacturer + Authorised Dealer, One Source',
    body: 'Custom fabrication from our Delhi factories plus genuine Rational, Robot Coupe and Frymaster equipment — so you get factory pricing on the custom steel and manufacturer warranty on the imports, from one accountable partner.',
  },
  {
    title: 'Turnkey Delivery',
    body: 'Design, supply, installation, commissioning and team training under a single contract. Our four-zone Hyatt Regency kitchen went from order to commissioning in 21 days.',
  },
  {
    title: 'Hospitality Compliance & AMC',
    body: 'Layouts and equipment aligned to FSSAI and HACCP hygiene requirements, backed by post-installation Annual Maintenance Contracts that protect uptime across every outlet.',
  },
];

/* ─── §5 Price Guide ─────────────────────────────────────────────────────── */
const PRICE_GUIDE = [
  {
    type: 'Boutique / Small Hotel',
    scope: 'Single main kitchen + limited cold chain',
    range: '₹12 – 25 lakh',
  },
  {
    type: 'Business / 4-Star',
    scope: 'Main + banquet + cold kitchen + warewash',
    range: '₹25 – 60 lakh',
  },
  {
    type: '5-Star / Luxury',
    scope: 'Multi-outlet: main, banquet, bakery, specialty, staff',
    range: '₹60 lakh – ₹2 crore+',
  },
];

/* ─── §7 Hotel-Specific Brands ───────────────────────────────────────────── */
const HOTEL_BRANDS: Brand[] = [
  { name: 'Rational',       tagline: 'Intelligent combi ovens',       slug: 'rational'       },
  { name: 'Robot Coupe',    tagline: 'Food processors & prep',         slug: 'robot-coupe'    },
  { name: 'Frymaster',      tagline: 'Commercial fryers',              slug: 'frymaster'      },
  { name: 'Hamilton Beach', tagline: 'Blenders & drink mixers',        slug: 'hamilton-beach' },
  { name: 'Scotsman',       tagline: 'Ice machines',                   slug: 'scotsman'       },
  { name: 'BUNN',           tagline: 'Beverage equipment',             slug: 'bunn'           },
  { name: 'Hatco',          tagline: 'Holding & warming',              slug: 'hatco'          },
];

/* ─── §9 Testimonial ─────────────────────────────────────────────────────── */
const TESTIMONIAL = {
  quote:
    'VSD handled our complete kitchen overhaul — layout, custom fabrication and equipment — and delivered it in 21 days without disrupting operations. The build quality matches our five-star standard, and their AMC support is genuinely responsive.',
  name: 'Director of F&B Operations',
  title: 'F&B Operations',
  company: 'Hyatt Regency Delhi',
  city: 'New Delhi',
  rating: 5,
};

/* ─── §10 FAQs (AEO — answer-first, unique to this page) ────────────────── */
const FAQS = [
  {
    q: 'How much does it cost to set up a hotel kitchen in India?',
    a: 'A complete hotel kitchen in India typically ranges from about ₹12–25 lakh for a boutique property to ₹60 lakh–₹2 crore or more for a full five-star kitchen. The figure depends on the number of outlets, banquet capacity, the share of imported equipment and how much custom stainless-steel fabrication is involved. VSD provides an itemised price list after a free site visit — for reference, our four-zone Hyatt Regency Delhi kitchen was delivered for ₹42 lakh.',
  },
  {
    q: 'How long does a hotel kitchen installation take?',
    a: 'Most hotel kitchen projects are completed in 21 to 45 days from order to commissioning, scaling with the number of outlets and the amount of custom fabrication. A single-kitchen refit can be faster, while a multi-outlet five-star build runs toward the upper end. VSD commissioned the complete four-zone kitchen at Hyatt Regency Delhi in 21 days, and confirms a fixed timeline at the proposal stage.',
  },
  {
    q: 'What is included in a turnkey hotel kitchen project?',
    a: 'A turnkey hotel kitchen covers everything from design to handover under one contract: site assessment, CAD layout, equipment manufacturing and supply, custom SS fabrication, installation, commissioning, staff training and post-installation AMC. This single-vendor model means one team is accountable for the whole kitchen, rather than coordinating separate designers, fabricators and equipment suppliers.',
  },
  {
    q: 'What equipment does a 5-star hotel kitchen need?',
    a: 'A five-star hotel kitchen needs a main production line (combi ovens, ranges, fryers, salamanders), a banquet kitchen (bulk cookers, bain maries, hot-holding), bakery and pastry equipment, a full cold chain (walk-in cold rooms, blast chillers), banquet-scale warewashing, and custom SS fabrication. The exact mix depends on the number of outlets and covers. VSD plans and equips all of these zones as one integrated kitchen.',
  },
  {
    q: 'Is your hotel kitchen equipment FSSAI and HACCP compliant?',
    a: 'Yes — VSD designs and equips hotel kitchens to align with FSSAI hygiene norms and HACCP food-safety principles, using food-safe SS 304 surfaces, correct zoning and a cold chain that supports temperature control. Compliant layout, materials and ventilation are planned from the design stage so the kitchen supports audits rather than working against them.',
  },
  {
    q: 'Why choose a manufacturer over a dealer for a hotel kitchen?',
    a: 'A manufacturer can build equipment to your exact kitchen rather than forcing standard sizes, offer factory pricing on fabrication, and stand behind the whole kitchen — while a pure dealer only forwards equipment from others. VSD is both: we manufacture custom SS work in our Delhi facilities and supply authorised imported brands, so you get bespoke fit, fair pricing and one accountable partner for design, supply, install and service.',
  },
  {
    q: 'Do you provide warranty and AMC for hotel kitchen equipment?',
    a: "Yes — manufactured equipment carries a workmanship warranty and imported equipment carries the manufacturer's warranty, both backed by VSD's Annual Maintenance Contracts. An AMC covers preventive maintenance, genuine spare parts and priority engineer response — essential for hotels, where kitchen downtime across multiple outlets is costly. Exact terms are confirmed in your proposal.",
  },
  {
    q: 'Which hotels has VSD International worked with?',
    a: 'VSD has delivered hotel kitchen projects for leading properties including Hyatt Regency Delhi, Radisson Blu Kaushambi, Crowne Plaza Rohini and ITC Welcomhotel Dwarka. This documented five-star portfolio — spanning main production, banquet, bakery and cold kitchens — is difficult for equipment-only competitors to match and is available to review on our projects page.',
  },
];

/* ─── JSON-LD Schema ─────────────────────────────────────────────────────── */
const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home',  item: 'https://vsdinternational.com' },
        { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://vsdinternational.com/services/' },
        { '@type': 'ListItem', position: 3, name: 'Hotel Kitchen Equipment', item: 'https://vsdinternational.com/services/hotel-kitchen-equipment/' },
      ],
    },
    {
      '@type': 'Service',
      name: 'Hotel Kitchen Equipment Manufacturer & Supplier',
      serviceType: 'Hotel Kitchen Equipment',
      provider: {
        '@type': 'LocalBusiness',
        name: 'VSD International',
        telephone: '+91-9250346370',
        address: { '@type': 'PostalAddress', addressLocality: 'Delhi', addressCountry: 'IN' },
        geo: { '@type': 'GeoCoordinates', latitude: 28.6139, longitude: 77.2090 },
      },
      areaServed: { '@type': 'Country', name: 'India' },
      description:
        'ISO 9001:2015 certified hotel kitchen equipment manufacturer & supplier. Turnkey 5-star, business & boutique hotel kitchens — design, supply, install.',
    },
    {
      '@type': 'FAQPage',
      mainEntity: FAQS.map(f => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: { '@type': 'Answer', text: f.a },
      })),
    },
    {
      '@type': 'LocalBusiness',
      name: 'VSD International',
      telephone: '+91-9250346370',
      url: 'https://vsdinternational.com',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Okhla Industrial Area',
        addressLocality: 'New Delhi',
        addressRegion: 'Delhi',
        addressCountry: 'IN',
      },
      geo: { '@type': 'GeoCoordinates', latitude: 28.6139, longitude: 77.2090 },
      openingHoursSpecification: {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        opens: '09:00',
        closes: '18:00',
      },
    },
  ],
};

/* ─── Page ───────────────────────────────────────────────────────────────── */
export default function HotelKitchenEquipmentPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <ServiceBreadcrumb
        crumbs={[{ label: 'Services', href: '/services' }, { label: 'Hotel Kitchen Equipment' }]}
      />

      {/* ── §1 Hero ───────────────────────────────────────────────────────── */}
      <section
        className="grain-overlay"
        style={{
          background: 'var(--charcoal-warm)',
          height: '90vh',
          maxHeight: '900px',
          minHeight: '560px',
          position: 'relative',
          borderBottom: '1px solid rgba(201,168,76,0.15)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          overflow: 'hidden',
        }}
      >
        {/* Top gold accent line */}
        <div
          aria-hidden="true"
          style={{
            position: 'absolute', top: 0, left: 0, right: 0, height: '2px',
            background: 'linear-gradient(90deg, transparent 5%, var(--gold-bright) 35%, var(--gold) 65%, transparent 95%)',
          }}
        />

        <div
          className="container mx-auto"
          style={{ maxWidth: '80rem', padding: '0 1.25rem', width: '100%' }}
        >
          {/* ── Eyebrow label ── */}
          <p
            className="section-label"
            style={{ textAlign: 'center', marginBottom: '0.875rem' }}
          >
            Hotels &amp; Hospitality
          </p>

          {/* ── H1 ── */}
          <h1
            style={{
              fontFamily: 'var(--font-playfair)',
              fontSize: 'clamp(1.75rem, 4vw, 3.25rem)',
              fontWeight: 700,
              lineHeight: 1.1,
              letterSpacing: '-0.025em',
              color: 'var(--text-on-dark)',
              textAlign: 'center',
              marginBottom: '1rem',
            }}
          >
            Hotel Kitchen Equipment Manufacturer &amp; Supplier —{' '}
            <span className="gold-shimmer" style={{ fontWeight: 800, fontStyle: 'normal' }}>
              Delhi &amp; Pan India
            </span>
          </h1>

          {/* ── Gold divider ── */}
          <div
            aria-hidden="true"
            style={{
              width: 56, height: 3,
              background: 'linear-gradient(90deg, var(--gold-bright), var(--gold), var(--gold-deep))',
              borderRadius: 2,
              margin: '0 auto 1.25rem',
            }}
          />

          {/* ── Opening paragraph ── */}
          <p
            style={{
              fontFamily: 'var(--font-inter)',
              fontSize: '0.875rem',
              color: 'rgba(245,240,232,0.65)',
              lineHeight: 1.65,
              maxWidth: '700px',
              margin: '0 auto 1.125rem',
              textAlign: 'center',
            }}
          >
            VSD International is a hotel kitchen equipment manufacturer and authorised brand dealer that designs,
            builds and installs complete hotel kitchens for five-star, business and boutique properties across India.
            From the main production kitchen to banquet, bakery and staff cafeteria, we manufacture custom
            stainless-steel equipment in our own Delhi facilities and supply global brands like Rational and
            Robot Coupe — then design the layout, install, commission and maintain the whole kitchen under one
            contract. Hotels including Hyatt Regency Delhi, Radisson Blu, Crowne Plaza and ITC Welcomhotel run on
            kitchens we delivered — among them a four-zone, ₹42-lakh kitchen commissioned at Hyatt Regency in
            21 days. ISO 9001:2015 certified and operating since 2009.
          </p>

          {/* ── Trust badges ── */}
          <div
            className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2"
            style={{ marginBottom: '1.25rem' }}
          >
            {[
              { icon: Hotel,  text: 'Equipped Hyatt · Radisson · ITC' },
              { icon: Shield, text: 'ISO 9001:2015' },
              { icon: Award,  text: '15+ Years · Delhi-Made' },
            ].map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center gap-2">
                <Icon size={13} style={{ color: 'var(--gold)', flexShrink: 0 }} aria-hidden="true" />
                <span
                  style={{
                    fontFamily: 'var(--font-inter)',
                    fontSize: '0.8125rem',
                    fontWeight: 600,
                    color: 'rgba(245,240,232,0.6)',
                  }}
                >
                  {text}
                </span>
              </div>
            ))}
          </div>

          {/* ── CTAs ── */}
          <div
            className="flex flex-col sm:flex-row gap-3 justify-center items-center"
            style={{ marginBottom: '2.5rem' }}
          >
            <a
              href="https://wa.me/919250346370?text=Hi%20VSD%2C%20I%20need%20hotel%20kitchen%20equipment.%20Please%20share%20details."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold inline-flex items-center gap-2"
              style={{ minHeight: '3rem', paddingLeft: '1.75rem', paddingRight: '1.75rem' }}
            >
              <MessageCircle size={15} aria-hidden="true" /> Get Hotel Kitchen Quote
            </a>
            <Link
              href="/services/commercial-kitchen-equipment"
              className="btn-ghost-dark inline-flex items-center gap-2"
              style={{ minHeight: '3rem' }}
            >
              All Equipment <ArrowRight size={14} aria-hidden="true" />
            </Link>
          </div>

          {/* ── Stats strip — below all text ── */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {[
              { label: 'Hotel Projects',  value: '80+' },
              { label: 'Star Properties', value: '3–5★' },
              { label: 'Operating Since', value: '2009' },
              { label: 'Certification',   value: 'ISO 9001' },
            ].map(({ label, value }) => (
              <div
                key={label}
                className="rounded-xl flex flex-col items-center justify-center text-center"
                style={{
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(201,168,76,0.15)',
                  padding: '1.125rem 0.75rem',
                }}
              >
                <span
                  style={{
                    fontFamily: 'var(--font-playfair)',
                    fontSize: 'clamp(1.375rem, 2.2vw, 1.875rem)',
                    fontWeight: 800,
                    color: 'var(--gold-bright)',
                    lineHeight: 1,
                  }}
                >
                  {value}
                </span>
                <span
                  style={{
                    fontFamily: 'var(--font-inter)',
                    fontSize: '0.75rem',
                    color: 'rgba(245,240,232,0.38)',
                    marginTop: '0.375rem',
                    lineHeight: 1.3,
                  }}
                >
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* ── Bottom wave ornament ── */}
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            lineHeight: 0,
            pointerEvents: 'none',
          }}
        >
          <svg
            viewBox="0 0 1440 90"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ display: 'block', width: '100%', height: '90px' }}
          >
            {/* deepest shadow fill */}
            <path
              d="M0,55 C180,90 360,20 540,55 C720,90 900,20 1080,55 C1260,90 1380,40 1440,55 L1440,90 L0,90 Z"
              fill="rgba(201,168,76,0.04)"
            />
            {/* mid fill */}
            <path
              d="M0,62 C200,30 400,85 600,62 C800,38 1000,80 1200,62 C1320,50 1390,68 1440,62 L1440,90 L0,90 Z"
              fill="rgba(201,168,76,0.06)"
            />
            {/* wave line 1 — bright */}
            <path
              d="M0,55 C180,90 360,20 540,55 C720,90 900,20 1080,55 C1260,90 1380,40 1440,55"
              fill="none"
              stroke="url(#waveGold1)"
              strokeWidth="1.5"
              opacity="0.55"
            />
            {/* wave line 2 — offset */}
            <path
              d="M0,68 C160,42 340,82 520,68 C700,54 880,82 1060,68 C1240,54 1370,74 1440,68"
              fill="none"
              stroke="url(#waveGold2)"
              strokeWidth="1"
              opacity="0.35"
            />
            {/* wave line 3 — subtle */}
            <path
              d="M0,78 C200,62 400,88 600,78 C800,68 1000,86 1200,78 C1340,72 1400,80 1440,78"
              fill="none"
              stroke="rgba(201,168,76,0.2)"
              strokeWidth="0.75"
            />
            {/* shimmer dots along top wave */}
            {[0, 180, 360, 540, 720, 900, 1080, 1260, 1440].map((x, i) => (
              <circle
                key={x}
                cx={x}
                cy={i % 2 === 0 ? 55 : 20}
                r="2.5"
                fill="rgba(201,168,76,0.45)"
              />
            ))}
            <defs>
              <linearGradient id="waveGold1" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%"   stopColor="#C9A84C" stopOpacity="0.2" />
                <stop offset="30%"  stopColor="#F0C442" stopOpacity="0.9" />
                <stop offset="60%"  stopColor="#C9A84C" stopOpacity="0.7" />
                <stop offset="100%" stopColor="#A67C32" stopOpacity="0.3" />
              </linearGradient>
              <linearGradient id="waveGold2" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%"   stopColor="#A67C32" stopOpacity="0.1" />
                <stop offset="50%"  stopColor="#F0C442" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#C9A84C" stopOpacity="0.2" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </section>

      {/* ── §2 Hotel Kitchen Equipment Range ─────────────────────────────── */}
      <section aria-labelledby="range-heading" style={{ background: '#FFFFFF', padding: '5.5rem 0' }}>
        <div className="container mx-auto" style={{ maxWidth: '80rem', padding: '0 1.25rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '3.25rem' }}>
            <p className="section-label" style={{ marginBottom: '0.75rem' }}>Hotel Kitchen Zones</p>
            <h2
              id="range-heading"
              style={{
                fontFamily: 'var(--font-playfair)',
                fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
                color: 'var(--text-dark)',
                lineHeight: 1.12,
              }}
            >
              Our Hotel Kitchen Equipment Range
            </h2>
            <div
              aria-hidden="true"
              style={{
                width: 56, height: 3,
                background: 'linear-gradient(90deg, var(--gold-bright), var(--gold), var(--gold-deep))',
                borderRadius: 2, margin: '1.125rem auto 0',
              }}
            />
            <p
              style={{
                marginTop: '1.25rem',
                fontFamily: 'var(--font-inter)',
                fontSize: '0.9375rem',
                color: 'var(--text-body)',
                lineHeight: 1.72,
                maxWidth: 640,
                margin: '1.25rem auto 0',
              }}
            >
              A hotel runs several kitchens at once. We manufacture and supply the equipment for every zone, sized to
              your covers, menu and brand standard.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {KITCHEN_ZONES.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="card-lift rounded-2xl"
                style={{ background: 'var(--surface)', border: '1px solid var(--border)', padding: '1.875rem' }}
              >
                <div
                  style={{
                    width: 44, height: 44,
                    borderRadius: 10,
                    background: 'rgba(201,168,76,0.08)',
                    border: '1px solid rgba(201,168,76,0.18)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    marginBottom: '1rem',
                  }}
                  aria-hidden="true"
                >
                  <Icon size={20} style={{ color: 'var(--gold)' }} strokeWidth={1.6} />
                </div>
                <h3
                  style={{
                    fontFamily: 'var(--font-playfair)',
                    fontWeight: 700,
                    fontSize: '1.0625rem',
                    color: 'var(--text-dark)',
                    marginBottom: '0.75rem',
                    lineHeight: 1.25,
                  }}
                >
                  {title}
                </h3>
                <p
                  style={{
                    fontFamily: 'var(--font-inter)',
                    fontSize: '0.9375rem',
                    color: 'var(--text-body)',
                    lineHeight: 1.7,
                  }}
                >
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── §3 Hotels We Equip ───────────────────────────────────────────── */}
      <section
        aria-labelledby="hotels-heading"
        style={{
          background: 'var(--surface)',
          padding: '4.5rem 0',
          borderTop: '1px solid var(--border)',
        }}
      >
        <div className="container mx-auto" style={{ maxWidth: '80rem', padding: '0 1.25rem' }}>
          <div style={{ marginBottom: '2.5rem' }}>
            <p className="section-label" style={{ marginBottom: '0.75rem' }}>Property Types</p>
            <h2
              id="hotels-heading"
              style={{
                fontFamily: 'var(--font-playfair)',
                fontSize: 'clamp(1.5rem, 2.4vw, 2rem)',
                color: 'var(--text-dark)',
                lineHeight: 1.2,
              }}
            >
              Hotels We Equip Across India
            </h2>
            <div
              aria-hidden="true"
              style={{
                width: 56, height: 3,
                background: 'linear-gradient(90deg, var(--gold-bright), var(--gold), var(--gold-deep))',
                borderRadius: 2, marginTop: '1rem',
              }}
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {HOTEL_TYPES.map(({ icon: Icon, label, desc, href }) => (
              <Link
                key={label}
                href={href}
                className="card-lift flex gap-4 rounded-xl"
                style={{ background: '#FFFFFF', border: '1px solid var(--border)', padding: '1.5rem', textDecoration: 'none' }}
              >
                <div
                  style={{
                    width: 44, height: 44, flexShrink: 0,
                    borderRadius: '50%',
                    background: 'rgba(201,168,76,0.08)',
                    border: '1px solid rgba(201,168,76,0.2)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}
                  aria-hidden="true"
                >
                  <Icon size={18} style={{ color: 'var(--gold)' }} strokeWidth={1.6} />
                </div>
                <div>
                  <p style={{ fontFamily: 'var(--font-inter)', fontWeight: 700, fontSize: '0.9375rem', color: 'var(--text-dark)', marginBottom: '0.35rem' }}>
                    {label}
                  </p>
                  <p style={{ fontFamily: 'var(--font-inter)', fontSize: '0.8125rem', color: 'var(--text-body)', lineHeight: 1.55 }}>
                    {desc}
                  </p>
                </div>
              </Link>
            ))}
          </div>

          {/* Sibling links */}
          <div style={{ marginTop: '2rem', padding: '1.25rem 1.5rem', background: '#FFFFFF', border: '1px solid var(--border)', borderRadius: 8 }}>
            <p style={{ fontFamily: 'var(--font-inter)', fontWeight: 600, fontSize: '0.875rem', color: 'var(--text-dark)', marginBottom: '0.75rem' }}>
              Related Services
            </p>
            <div className="flex flex-wrap gap-3">
              {[
                ['Cloud Kitchen Setup', '/services/cloud-kitchen-setup'],
                ['Restaurant Kitchen Setup', '/services/restaurant-kitchen-setup'],
                ['Commercial Kitchen Equipment', '/services/commercial-kitchen-equipment'],
              ].map(([label, href]) => (
                <Link
                  key={href}
                  href={href}
                  className="btn-ghost text-sm"
                  style={{ minHeight: 'auto', padding: '0.5rem 1rem' }}
                >
                  {label} →
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── §4 Why Hotels Choose VSD ─────────────────────────────────────── */}
      <section
        aria-labelledby="why-heading"
        className="grain-overlay"
        style={{
          background: 'var(--charcoal-light)',
          padding: '5.5rem 0',
          borderTop: '1px solid rgba(201,168,76,0.1)',
        }}
      >
        <div className="container mx-auto" style={{ maxWidth: '80rem', padding: '0 1.25rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <p className="section-label" style={{ marginBottom: '0.75rem' }}>Why Choose Us</p>
            <h2
              id="why-heading"
              style={{
                fontFamily: 'var(--font-playfair)',
                fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
                color: 'var(--text-on-dark)',
                lineHeight: 1.12,
              }}
            >
              Why Hotels Choose VSD International
            </h2>
            <div
              aria-hidden="true"
              style={{
                width: 56, height: 3,
                background: 'linear-gradient(90deg, var(--gold-bright), var(--gold), var(--gold-deep))',
                borderRadius: 2, margin: '1.125rem auto 0',
              }}
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {WHY_VSD.map(({ title, body }) => (
              <div
                key={title}
                className="card-lift-dark rounded-2xl"
                style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(201,168,76,0.12)', padding: '2rem' }}
              >
                <div style={{ width: 10, height: 10, borderRadius: '50%', background: 'var(--gold)', marginBottom: '1rem' }} aria-hidden="true" />
                <h3 style={{ fontFamily: 'var(--font-playfair)', fontWeight: 700, fontSize: '1.0625rem', color: 'var(--text-on-dark)', marginBottom: '0.75rem' }}>
                  {title}
                </h3>
                <p style={{ fontFamily: 'var(--font-inter)', fontSize: '0.9375rem', color: 'rgba(245,240,232,0.65)', lineHeight: 1.75 }}>
                  {body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── §5 Price Guide ────────────────────────────────────────────────── */}
      <section
        aria-labelledby="price-heading"
        style={{ background: '#FFFFFF', padding: '5.5rem 0', borderTop: '1px solid var(--border)' }}
      >
        <div className="container mx-auto" style={{ maxWidth: '80rem', padding: '0 1.25rem' }}>
          <div style={{ maxWidth: '820px' }}>
            <p className="section-label" style={{ marginBottom: '0.75rem' }}>Indicative Budgets</p>
            <h2
              id="price-heading"
              style={{
                fontFamily: 'var(--font-playfair)',
                fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
                color: 'var(--text-dark)',
                lineHeight: 1.12,
                marginBottom: '1rem',
              }}
            >
              Hotel Kitchen Equipment Price Guide (India)
            </h2>
            <div
              aria-hidden="true"
              style={{
                width: 56, height: 3,
                background: 'linear-gradient(90deg, var(--gold-bright), var(--gold), var(--gold-deep))',
                borderRadius: 2, marginBottom: '1.5rem',
              }}
            />
            <p
              style={{
                fontFamily: 'var(--font-inter)',
                fontSize: '0.9375rem',
                color: 'var(--text-body)',
                lineHeight: 1.72,
                marginBottom: '2rem',
              }}
            >
              Hotel kitchen budgets are driven by the number of outlets, banquet capacity, the share of imported
              equipment and how much custom stainless-steel fabrication is involved. The indicative ranges below
              help you plan; we provide an itemised price list after a free site visit.
            </p>
          </div>

          {/* Price table */}
          <div style={{ maxWidth: '820px', border: '1px solid var(--border)', borderRadius: 12, overflow: 'hidden' }}>
            {/* Table header */}
            <div
              className="grid grid-cols-3"
              style={{
                background: 'var(--charcoal)',
                padding: '1rem 1.5rem',
              }}
            >
              {['Hotel Type', 'Typical Scope', 'Indicative Range'].map(h => (
                <span
                  key={h}
                  style={{
                    fontFamily: 'var(--font-inter)',
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    color: 'rgba(245,240,232,0.5)',
                  }}
                >
                  {h}
                </span>
              ))}
            </div>
            {/* Rows */}
            {PRICE_GUIDE.map(({ type, scope, range }, i) => (
              <div
                key={type}
                className="grid grid-cols-3 items-center"
                style={{
                  padding: '1.25rem 1.5rem',
                  background: i % 2 === 0 ? '#FFFFFF' : 'var(--surface)',
                  borderTop: '1px solid var(--border)',
                }}
              >
                <span style={{ fontFamily: 'var(--font-inter)', fontWeight: 700, fontSize: '0.9375rem', color: 'var(--text-dark)' }}>
                  {type}
                </span>
                <span style={{ fontFamily: 'var(--font-inter)', fontSize: '0.875rem', color: 'var(--text-body)', lineHeight: 1.5 }}>
                  {scope}
                </span>
                <span style={{ fontFamily: 'var(--font-playfair)', fontWeight: 800, fontSize: '1rem', color: 'var(--gold)' }}>
                  {range}
                </span>
              </div>
            ))}
          </div>

          {/* Price CTA line */}
          <p style={{ marginTop: '1.5rem', fontFamily: 'var(--font-inter)', fontSize: '0.9375rem', color: 'var(--text-body)' }}>
            Want an itemised hotel kitchen equipment price list for your property?{' '}
            <a
              href="https://wa.me/919250346370?text=Hi%20VSD%2C%20I%27d%20like%20a%20hotel%20kitchen%20equipment%20price%20list%20for%20my%20property."
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: 'var(--gold)', fontWeight: 700, textDecoration: 'none' }}
            >
              Request a free quote →
            </a>
          </p>
          <p style={{ marginTop: '0.5rem', fontFamily: 'var(--font-inter)', fontSize: '0.8125rem', color: 'var(--text-muted)' }}>
            All ranges are indicative. Final pricing is confirmed after a free site visit and equipment specification.
          </p>
        </div>
      </section>

      {/* ── §6 Featured Project & Clients ────────────────────────────────── */}
      <section
        aria-labelledby="project-heading"
        style={{ background: 'var(--surface)', padding: '5rem 0', borderTop: '1px solid var(--border)' }}
      >
        <div className="container mx-auto" style={{ maxWidth: '80rem', padding: '0 1.25rem' }}>
          <p className="section-label" style={{ marginBottom: '0.75rem' }}>Portfolio</p>
          <h2
            id="project-heading"
            style={{
              fontFamily: 'var(--font-playfair)',
              fontSize: 'clamp(1.5rem, 2.4vw, 2rem)',
              color: 'var(--text-dark)',
              marginBottom: '2rem',
              lineHeight: 1.2,
            }}
          >
            Recent Hotel Kitchen Projects
          </h2>

          {/* Featured project card */}
          <div
            className="rounded-2xl overflow-hidden"
            style={{ background: '#FFFFFF', border: '1px solid var(--border)', marginBottom: '2rem' }}
          >
            <div
              style={{
                background: 'linear-gradient(135deg, var(--charcoal) 0%, var(--charcoal-mid) 100%)',
                height: 160,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}
              aria-hidden="true"
            >
              <Hotel size={52} style={{ color: 'rgba(201,168,76,0.3)' }} strokeWidth={1} />
            </div>
            <div style={{ padding: '2rem' }}>
              <span
                style={{
                  fontFamily: 'var(--font-inter)',
                  fontSize: '0.6875rem',
                  fontWeight: 700,
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  color: 'var(--gold)',
                }}
              >
                Featured Project — 5-Star Hotel
              </span>
              <h3
                style={{
                  fontFamily: 'var(--font-playfair)',
                  fontWeight: 700,
                  fontSize: '1.375rem',
                  color: 'var(--text-dark)',
                  margin: '0.625rem 0 0.875rem',
                }}
              >
                <Link
                  href="/projects/"
                  style={{ color: 'var(--text-dark)', textDecoration: 'none' }}
                >
                  Hyatt Regency Delhi — Bhikaji Cama Place
                </Link>
              </h3>
              <p
                style={{
                  fontFamily: 'var(--font-inter)',
                  fontSize: '0.9375rem',
                  color: 'var(--text-body)',
                  lineHeight: 1.75,
                  maxWidth: 680,
                }}
              >
                A complete four-zone kitchen overhaul — main production, banquet, bakery and cafeteria — delivered
                for ₹42 lakh and commissioned in 21 days. Scope included custom SS 304 fabrication, a walk-in cold
                room, Rational combi ovens and full installation, testing and handover.
              </p>
              <p style={{ marginTop: '1rem', fontFamily: 'var(--font-inter)', fontWeight: 700, fontSize: '0.9375rem', color: 'var(--gold)' }}>
                ₹42 Lakh · Commissioned in 21 Days
              </p>
            </div>
          </div>

          {/* More projects */}
          <div style={{ marginBottom: '1.5rem' }}>
            <p style={{ fontFamily: 'var(--font-inter)', fontWeight: 700, fontSize: '0.9375rem', color: 'var(--text-dark)', marginBottom: '0.875rem' }}>
              More hotel kitchens we&apos;ve delivered:
            </p>
            <div className="flex flex-col gap-3">
              {[
                'Radisson Blu, Kaushambi — full hotel kitchen',
                'Crowne Plaza, Rohini — banquet & production kitchen',
                'ITC Welcomhotel, Dwarka — institutional kitchen',
              ].map(p => (
                <div key={p} className="flex items-start gap-2.5">
                  <CheckCircle2
                    size={14}
                    style={{ color: 'var(--gold)', flexShrink: 0, marginTop: '0.15rem' }}
                    aria-hidden="true"
                  />
                  <span style={{ fontFamily: 'var(--font-inter)', fontSize: '0.9375rem', color: 'var(--text-body)' }}>
                    {p}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <Link
            href="/projects/"
            className="inline-flex items-center gap-1.5"
            style={{ color: 'var(--gold)', fontFamily: 'var(--font-inter)', fontWeight: 700, fontSize: '0.9375rem', textDecoration: 'none' }}
          >
            View All Hotel Kitchen Projects <ArrowRight size={14} aria-hidden="true" />
          </Link>
        </div>
      </section>

      {/* ── §7 International Brands ──────────────────────────────────────── */}
      <BrandsGrid brands={HOTEL_BRANDS} />

      {/* ── §8 Cities We Serve ───────────────────────────────────────────── */}
      <CitiesGrid serviceSlug="hotel-kitchen-equipment" />

      {/* ── §9 Testimonial ───────────────────────────────────────────────── */}
      <ServiceTestimonial testimonial={TESTIMONIAL} />

      {/* ── §10 FAQ ──────────────────────────────────────────────────────── */}
      <ServiceFAQ
        faqs={FAQS}
        heading="Frequently Asked Questions — Hotel Kitchen Equipment"
      />

      {/* ── §11 CTA ──────────────────────────────────────────────────────── */}
      <ServiceCTA
        heading="Get a Free Hotel Kitchen Consultation"
        subtext="Tell us your property type and number of outlets — we'll send a tailored equipment plan, layout and itemised price list within 24 hours. Free site visit, no obligation."
        serviceName="Hotel Kitchen"
      />
    </>
  );
}
