import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ChefHat, Hotel, UtensilsCrossed, Package, Building2, Cake,
  Wrench, Factory, Coffee, PenTool, Wind, Settings,
  GlassWater, Globe,
  ArrowRight, CheckCircle2, Shield, Clock, Award, Star,
  MapPin, MessageCircle,
  Utensils, HeartPulse, ShoppingBag, Truck, Users,
} from 'lucide-react';
import ServiceFAQ from '@/components/services/ServiceFAQ';



/* --- Metadata ------------------------------------------------------------- */
export const metadata: Metadata = {
  title: 'Commercial Kitchen Equipment & Solutions | VSD International India',
  description:
    'VSD International delivers end-to-end commercial kitchen solutions across India — equipment supply, custom fabrication, layout design, installation, and annual maintenance. Trusted by 500+ hospitality & healthcare clients since 2009.',
  alternates: { canonical: '/services' },
  openGraph: {
    url: '/services',
    title: 'Complete Commercial Kitchen Solutions — Supply, Install & Maintain | VSD International',
    description: 'End-to-end commercial kitchen solutions for hotels, hospitals, restaurants & cloud kitchens across India. ISO 9001 certified. 500+ projects. Delhi factories.',
    images: [{ url: 'https://vsdinternational.com/VSD_LOGO.png', width: 1200, height: 630 }],
  },
};

/* --- JSON-LD Schema ------------------------------------------------------- */
const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': 'https://vsdinternational.com/services#webpage',
      url: 'https://vsdinternational.com/services',
      name: 'Complete Commercial Kitchen Solutions — Supply, Install & Maintain',
      description: 'End-to-end commercial kitchen solutions across India — equipment supply, fabrication, layout design, installation, and AMC.',
      breadcrumb: {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home',     item: 'https://vsdinternational.com'          },
          { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://vsdinternational.com/services' },
        ],
      },
    },
    {
      '@type': 'ItemList',
      name: 'VSD International Commercial Kitchen Services',
      description: 'Complete list of commercial kitchen equipment and services by VSD International India',
      // itemListElement: SERVICES_ALL.map((s, i) => ({
      //   '@type': 'ListItem',
      //   position: i + 1,
      //   name: s.title,
      //   url: `https://vsdinternational.com${s.href}`,
      // })),
    },
  ],
};

/* --- All 14 Services Data ------------------------------------------------- */
const SERVICES_P1 = [
  {
    icon: Package,
    title: 'Commercial Kitchen Equipment',
    desc: 'Cooking ranges, refrigeration, food prep, dishwashing, SS fabrication — complete commercial kitchen equipment supply from Delhi factories.',
    href: '/services/commercial-kitchen-equipment',
    tag: 'Most Popular',
  },
  {
    icon: Hotel,
    title: 'Hotel Kitchen Equipment',
    desc: '5-star hotel kitchen setups for banquet, restaurant, bar & staff kitchens. Trusted by Hyatt, Radisson, Crowne Plaza & ITC.',
    href: '/services/hotel-kitchen-equipment',
    tag: 'High B2B Value',
  },
  {
    icon: UtensilsCrossed,
    title: 'Restaurant Kitchen Setup',
    desc: 'Complete restaurant kitchen setup for fine-dine, QSR, café chains & casual dining. Design, supply, install & commission.',
    href: '/services/restaurant-kitchen-setup',
    tag: null,
  },
  {
    icon: Truck,
    title: 'Cloud Kitchen Setup',
    desc: 'Complete cloud kitchen equipment packages for Zomato, Swiggy & Rebel Foods operators. Multi-brand ghost kitchen setups.',
    href: '/services/cloud-kitchen-setup',
    tag: 'Fastest Growing',
  },
  {
    icon: HeartPulse,
    title: 'Hospital Kitchen Equipment',
    desc: 'NABH & FSSAI compliant dietary kitchen equipment for hospitals, healthcare chains & government health institutions.',
    href: '/services/hospital-kitchen-equipment',
    tag: 'Zero Competition',
  },
  {
    icon: Cake,
    title: 'Bakery Equipment',
    desc: 'Commercial bakery equipment — deck ovens, proofers, spiral mixers, sheeting machines & blast freezers for bakery chains.',
    href: '/services/bakery-equipment',
    tag: null,
  },
];

const SERVICES_P2 = [
  {
    icon: Wrench,
    title: 'Stainless Steel Fabrication',
    desc: 'Custom SS fabrication — worktables, sinks, shelving, hoods, trolleys & bespoke kitchen furniture from Delhi factories.',
    href: '/services/stainless-steel-fabrication',
    tag: null,
  },
  {
    icon: Factory,
    title: 'Industrial Kitchen Equipment',
    desc: 'Heavy-duty institutional kitchen equipment for factories, defence canteens, bulk catering & large institutions.',
    href: '/services/industrial-kitchen-equipment',
    tag: null,
  },
  {
    icon: Coffee,
    title: 'Cafeteria Kitchen Equipment',
    desc: 'Cafeteria kitchen solutions for corporate offices, schools & colleges. High-volume counters, serving lines & hot cases.',
    href: '/services/cafeteria-kitchen-equipment',
    tag: null,
  },
  {
    icon: PenTool,
    title: 'Kitchen Layout Design',
    desc: 'Professional CAD-based kitchen layout design — workflow analysis, space planning, AutoCAD drawings & free site visit.',
    href: '/services/kitchen-layout-design',
    tag: 'Differentiator',
  },
  {
    icon: Wind,
    title: 'Kitchen Exhaust & Ventilation',
    desc: 'Kitchen exhaust hoods, fresh air systems, UV filtration & fire suppression — FIRE NOC compliant ventilation solutions.',
    href: '/services/kitchen-exhaust-ventilation',
    tag: null,
  },
  {
    icon: Settings,
    title: 'Kitchen Equipment AMC',
    desc: 'Annual Maintenance Contracts with scheduled servicing, priority breakdown support & genuine spare parts.',
    href: '/services/kitchen-equipment-amc',
    tag: 'Recurring Revenue',
  },
];

const SERVICES_P3 = [
  {
    icon: GlassWater,
    title: 'Bar Equipment',
    desc: 'Commercial bar equipment for hotel bars, nightclubs & event venues — ice machines, blenders, dispensers & bar furniture.',
    href: '/services/bar-equipment',
    tag: null,
  },
  {
    icon: Globe,
    title: 'Imported Kitchen Equipment',
    desc: 'Authorised Indian dealer for Rational, Robot Coupe, Frymaster & more — genuine imported commercial kitchen equipment.',
    href: '/services/imported-kitchen-equipment',
    tag: null,
  },
];

const SERVICES_ALL = [...SERVICES_P1, ...SERVICES_P2, ...SERVICES_P3];

/* --- Industries Data ------------------------------------------------------ */
const INDUSTRIES = [
  { icon: Hotel,           label: 'Hotels & Resorts',          href: '/industries/hotels',        desc: '5-star, boutique & heritage hotels' },
  { icon: HeartPulse,      label: 'Hospitals & Healthcare',    href: '/industries/hospitals',     desc: 'NABH & FSSAI compliant kitchens' },
  { icon: UtensilsCrossed, label: 'Restaurants & QSR',         href: '/industries/restaurants',   desc: 'Fine-dine, café & quick service' },
  { icon: Truck,           label: 'Cloud Kitchens',            href: '/industries/cloud-kitchens',desc: 'Dark kitchen & ghost kitchen setups' },
  { icon: Users,           label: 'Corporate Cafeterias',      href: '/industries/cafeterias',    desc: 'Office & institutional dining' },
  { icon: Cake,            label: 'Bakeries',                  href: '/industries/bakeries',      desc: 'Retail & wholesale bakery chains' },
];

/* --- Featured Projects ---------------------------------------------------- */
const PROJECTS = [
  {
    client:   'Hyatt Regency Delhi',
    category: '5-Star Hotel Kitchen',
    result:   'Complete 5-star hotel kitchen across 8 zones — 45-day turnkey installation.',
    value:    '₹1.8 Cr project',
  },
  {
    client:   'Metro Hospitals, Delhi',
    category: 'NABH Hospital Kitchen',
    result:   'NABH-compliant dietary kitchen for 400-bed hospital — delivered in 32 days.',
    value:    '₹65 Lakh project',
  },
  {
    client:   'Rebel Foods Cloud Hub, Mumbai',
    category: 'Multi-Brand Cloud Kitchen',
    result:   '12-brand cloud kitchen setup with dedicated cooking zones & exhaust systems.',
    value:    '₹42 Lakh project',
  },
];

/* --- Hub FAQs (5 Questions) ----------------------------------------------- */
const HUB_FAQS = [
  {
    q: 'What services does VSD International provide?',
    a: 'VSD International provides end-to-end commercial kitchen solutions — from equipment supply and stainless steel fabrication to kitchen layout design, on-site installation, commissioning, and annual maintenance contracts (AMC). We are an authorised dealer for 15+ international brands including Rational, Robot Coupe, Frymaster, and Hamilton Beach. We serve clients across India from our Delhi NCR manufacturing facilities, with a proven track record of 500+ projects since 2009.',
  },
  {
    q: 'Do you supply equipment only, or also handle installation?',
    a: 'VSD International offers both — pure equipment supply and complete turnkey kitchen delivery. For turnkey projects, we handle the entire process: site visit, kitchen layout design (CAD drawings), equipment selection, supply, logistics, on-site installation, testing, commissioning, staff training, and post-installation AMC. Most of our projects are turnkey because clients find it easier to work with one accountable partner from start to finish. Standalone equipment supply is also available for clients who have their own installation teams.',
  },
  {
    q: 'What industries do you serve?',
    a: 'We serve a broad range of industries requiring commercial kitchen solutions: 5-star hotels and resort chains (Hyatt, Radisson, Crowne Plaza, ITC), hospitals and healthcare institutions (NABH-compliant dietary kitchens), QSR and restaurant chains, cloud kitchens and dark kitchen operators on Zomato/Swiggy, corporate cafeterias, industrial canteens, defence and government institutions (DRDO, ESIC), educational institutions, bakery chains, and event venues. Our factory capabilities allow us to customise solutions for any scale or industry.',
  },
  {
    q: 'Can you handle commercial kitchen projects outside Delhi?',
    a: 'Yes — VSD International delivers commercial kitchen equipment and turnkey projects across India. We have completed projects in Mumbai, Pune, Bangalore, Hyderabad, Chennai, Kolkata, Jaipur, Lucknow, Chandigarh, and 40+ other cities. Our team travels for site visits, installation supervision, and commissioning. For large projects outside Delhi NCR, we coordinate logistics from our Delhi and Ghaziabad factories. WhatsApp us at +91-9250346370 to discuss your city and timeline.',
  },
  {
    q: 'Do you offer maintenance and support after installation?',
    a: 'Yes — we offer comprehensive Annual Maintenance Contracts (AMC) that cover scheduled preventive servicing (2–4 visits per year), priority emergency breakdown support (4-hour response time commitment), genuine spare parts supply, and equipment performance optimisation. AMC clients receive priority service over non-AMC clients. We currently maintain equipment for 80+ active AMC clients across India, including several Hyatt and Radisson properties. Contact us to discuss AMC pricing for your kitchen.',
  },
];

/* ═══════════════════════════════════════════════════════════════════════════
   SERVICES HUB PAGE
   ═══════════════════════════════════════════════════════════════════════════ */
export default function ServicesHubPage() {
  return (
    <>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* -- §01 HERO ------------------------------------------------------ */}
      <section
        className="grain-overlay"
        aria-labelledby="hub-h1"
        style={{
          background: 'var(--charcoal-warm)',
          padding: '5rem 0 4.5rem',
          borderBottom: '1px solid rgba(201,168,76,0.15)',
          position: 'relative',
        }}
      >
        <div
          aria-hidden="true"
          style={{
            position: 'absolute', top: 0, left: 0, right: 0, height: '2px',
            background: 'linear-gradient(90deg, transparent 5%, var(--gold-bright) 35%, var(--gold) 65%, transparent 95%)',
          }}
        />

        <div className="container mx-auto" style={{ maxWidth: '80rem', padding: '0 1.25rem', textAlign: 'center' }}>
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" style={{ marginBottom: '2rem' }}>
            <ol className="flex items-center justify-center gap-2 flex-wrap" style={{ listStyle: 'none' }}>
              <li>
                <Link href="/" style={{ color: 'rgba(245,240,232,0.4)', fontSize: '0.8125rem', fontFamily: 'var(--font-inter)', textDecoration: 'none' }}>
                  Home
                </Link>
              </li>
              <li aria-hidden="true" style={{ color: 'rgba(201,168,76,0.3)', fontSize: '0.8125rem' }}>›</li>
              <li>
                <span style={{ color: 'var(--gold)', fontSize: '0.8125rem', fontFamily: 'var(--font-inter)', fontWeight: 600 }}>
                  Services
                </span>
              </li>
            </ol>
          </nav>

          {/* Label */}
          <p className="section-label" style={{ marginBottom: '1rem' }}>Our Services</p>

          {/* H1 */}
          <h1
            id="hub-h1"
            style={{
              fontFamily: 'var(--font-playfair)',
              fontSize: 'clamp(2rem, 4vw, 3.25rem)',
              fontWeight: 700,
              lineHeight: 1.12,
              letterSpacing: '-0.02em',
              color: 'var(--text-on-dark)',
              marginBottom: '1.25rem',
            }}
          >
            Complete Commercial Kitchen Solutions —{' '}
            <em
              className="gold-shimmer"
              style={{ fontStyle: 'italic', fontWeight: 800 }}
            >
              Supply, Install &amp; Maintain
            </em>
          </h1>

          {/* Gold divider */}
          <div
            aria-hidden="true"
            style={{
              width: 64, height: 3,
              background: 'linear-gradient(90deg, var(--gold-bright), var(--gold), var(--gold-deep))',
              borderRadius: 2, margin: '0 auto 1.5rem',
            }}
          />

          <p
            style={{
              fontFamily: 'var(--font-inter)',
              fontSize: 'clamp(0.9375rem, 1.2vw, 1.0625rem)',
              color: 'rgba(245,240,232,0.62)',
              lineHeight: 1.72,
              maxWidth: 620,
              margin: '0 auto 2.75rem',
            }}
          >
            From a single piece of equipment to a complete 5-star hotel kitchen — VSD International is India&apos;s trusted partner for commercial kitchen solutions across hotels, hospitals, restaurants, cloud kitchens, and institutions.
          </p>

          {/* Trust Anchors — 3 horizontal stats */}
          <div
            className="flex flex-col sm:flex-row items-center justify-center gap-8"
            role="list"
            aria-label="Key statistics"
          >
            {[
              { stat: '500+',       label: 'Projects Completed' },
              { stat: 'ISO 9001',   label: 'Certified Since 2009' },
              { stat: '15+',        label: 'Years Experience' },
            ].map(({ stat, label }) => (
              <div
                key={stat}
                role="listitem"
                className="flex flex-col items-center gap-1"
              >
                <span
                  style={{
                    fontFamily: 'var(--font-playfair)',
                    fontWeight: 800,
                    fontSize: '2rem',
                    color: 'var(--gold-bright)',
                    lineHeight: 1,
                  }}
                >
                  {stat}
                </span>
                <span
                  style={{
                    fontFamily: 'var(--font-inter)',
                    fontSize: '0.8125rem',
                    color: 'rgba(245,240,232,0.45)',
                    letterSpacing: '0.06em',
                  }}
                >
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* -- §02 SERVICES GRID — All 14 pages ------------------------------ */}
      <section
        aria-labelledby="services-grid-heading"
        style={{ background: '#FFFFFF', padding: '5.5rem 0' }}
      >
        <div className="container mx-auto" style={{ maxWidth: '80rem', padding: '0 1.25rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '3.25rem' }}>
            <p className="section-label" style={{ marginBottom: '0.75rem' }}>All Services</p>
            <h2
              id="services-grid-heading"
              style={{
                fontFamily: 'var(--font-playfair)',
                fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
                color: 'var(--text-dark)',
                lineHeight: 1.12,
              }}
            >
              Complete Commercial Kitchen Solutions
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

          {/* P1 — Highest Volume */}
          <div style={{ marginBottom: '1rem' }}>
            <p
              style={{
                fontFamily: 'var(--font-inter)',
                fontSize: '0.6875rem',
                fontWeight: 700,
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: 'var(--gold)',
                marginBottom: '1.25rem',
              }}
            >
              ◆ Priority Services
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {SERVICES_P1.map((s) => <ServiceCard key={s.href} service={s} />)}
            </div>
          </div>

          {/* P2 — Secondary */}
          <div style={{ marginTop: '3rem', marginBottom: '1rem' }}>
            <p
              style={{
                fontFamily: 'var(--font-inter)',
                fontSize: '0.6875rem',
                fontWeight: 700,
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: 'var(--text-muted)',
                marginBottom: '1.25rem',
              }}
            >
              ◆ Specialised Services
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {SERVICES_P2.map((s) => <ServiceCard key={s.href} service={s} />)}
            </div>
          </div>

          {/* P3 — Phase 3 */}
          <div style={{ marginTop: '3rem' }}>
            <p
              style={{
                fontFamily: 'var(--font-inter)',
                fontSize: '0.6875rem',
                fontWeight: 700,
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: 'var(--text-muted)',
                marginBottom: '1.25rem',
              }}
            >
              ◆ Niche Services
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5" style={{ maxWidth: '700px' }}>
              {SERVICES_P3.map((s) => <ServiceCard key={s.href} service={s} />)}
            </div>
          </div>
        </div>
      </section>

      {/* -- §03 WHY VSD INTERNATIONAL ------------------------------------- */}
      <section
        aria-labelledby="why-vsd-heading"
        className="grain-overlay"
        style={{
          background: 'var(--charcoal-light)',
          padding: '5.5rem 0',
          borderTop: '1px solid rgba(201,168,76,0.1)',
        }}
      >
        <div className="container mx-auto" style={{ maxWidth: '80rem', padding: '0 1.25rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '3.25rem' }}>
            <p className="section-label" style={{ marginBottom: '0.75rem' }}>Why VSD International</p>
            <h2
              id="why-vsd-heading"
              style={{
                fontFamily: 'var(--font-playfair)',
                fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
                color: 'var(--text-on-dark)',
                lineHeight: 1.12,
              }}
            >
              The Complete Kitchen Partner — Not Just a Supplier
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
            {[
              {
                icon: Wrench,
                title: 'End-to-End Partner',
                body: 'From kitchen layout design to equipment supply, installation, commissioning, and annual maintenance — one partner accountable for the entire project. No coordination headaches, no finger-pointing between vendors.',
              },
              {
                icon: Factory,
                title: 'In-House Manufacturing',
                body: 'Our Delhi NCR factories manufacture stainless steel kitchen equipment, custom fabrication, and storage solutions in-house — guaranteeing quality control, faster delivery, and 30–40% cost savings over imported alternatives.',
              },
              {
                icon: Globe,
                title: '15+ International Brands',
                body: 'Authorised dealer for Rational, Robot Coupe, Frymaster, Hamilton Beach Commercial, Scotsman, BUNN, and Vitamix across India. We source genuine equipment with valid Indian warranties and after-sales support.',
              },
              {
                icon: Shield,
                title: 'Proven Across Industries',
                body: 'Hotels (Hyatt, Radisson, Crowne Plaza), hospitals (Metro, Yashoda, AIIMS-affiliated), cloud kitchens (Rebel Foods), and government institutions (DRDO, ESIC). 500+ completed projects since 2009. ISO 9001 certified.',
              },
            ].map(({ icon: Icon, title, body }) => (
              <div
                key={title}
                className="card-lift-dark rounded-2xl"
                style={{
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(201,168,76,0.12)',
                  padding: '2rem',
                }}
              >
                <div
                  style={{
                    width: 48, height: 48,
                    borderRadius: 10,
                    background: 'rgba(201,168,76,0.1)',
                    border: '1px solid rgba(201,168,76,0.2)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    marginBottom: '1.125rem',
                  }}
                  aria-hidden="true"
                >
                  <Icon size={22} style={{ color: 'var(--gold)' }} strokeWidth={1.6} />
                </div>
                <h3
                  style={{
                    fontFamily: 'var(--font-playfair)',
                    fontWeight: 700,
                    fontSize: '1.125rem',
                    color: 'var(--text-on-dark)',
                    marginBottom: '0.75rem',
                  }}
                >
                  {title}
                </h3>
                <p
                  style={{
                    fontFamily: 'var(--font-inter)',
                    fontSize: '0.9375rem',
                    color: 'rgba(245,240,232,0.6)',
                    lineHeight: 1.72,
                  }}
                >
                  {body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* -- §04 INDUSTRIES WE SERVE --------------------------------------- */}
      <section
        aria-labelledby="industries-heading"
        style={{ background: '#FFFFFF', padding: '5rem 0', borderTop: '1px solid var(--border)' }}
      >
        <div className="container mx-auto" style={{ maxWidth: '80rem', padding: '0 1.25rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '2.75rem' }}>
            <p className="section-label" style={{ marginBottom: '0.75rem' }}>Industries</p>
            <h2
              id="industries-heading"
              style={{
                fontFamily: 'var(--font-playfair)',
                fontSize: 'clamp(1.625rem, 2.8vw, 2.25rem)',
                color: 'var(--text-dark)',
                lineHeight: 1.15,
              }}
            >
              Industries We Serve
            </h2>
            <div
              aria-hidden="true"
              style={{
                width: 56, height: 3,
                background: 'linear-gradient(90deg, var(--gold-bright), var(--gold), var(--gold-deep))',
                borderRadius: 2, margin: '1rem auto 0',
              }}
            />
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {INDUSTRIES.map(({ icon: Icon, label, href, desc }) => (
              <Link
                key={href}
                href={href}
                className="card-lift flex flex-col items-center gap-3 text-center rounded-xl p-4"
                style={{
                  background: 'var(--surface)',
                  border: '1px solid var(--border)',
                  textDecoration: 'none',
                }}
              >
                <div
                  style={{
                    width: 52, height: 52,
                    borderRadius: '50%',
                    background: 'rgba(201,168,76,0.08)',
                    border: '1px solid rgba(201,168,76,0.2)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}
                  aria-hidden="true"
                >
                  <Icon size={22} style={{ color: 'var(--gold)' }} strokeWidth={1.6} />
                </div>
                <div>
                  <p
                    style={{
                      fontFamily: 'var(--font-inter)',
                      fontWeight: 700,
                      fontSize: '0.875rem',
                      color: 'var(--text-dark)',
                      lineHeight: 1.3,
                      marginBottom: '0.25rem',
                    }}
                  >
                    {label}
                  </p>
                  <p
                    style={{
                      fontFamily: 'var(--font-inter)',
                      fontSize: '0.75rem',
                      color: 'var(--text-muted)',
                      lineHeight: 1.4,
                    }}
                  >
                    {desc}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* -- §05 FEATURED PROJECTS ----------------------------------------- */}
      <section
        aria-labelledby="projects-heading"
        style={{
          background: 'var(--charcoal)',
          padding: '5.5rem 0',
          borderTop: '1px solid rgba(201,168,76,0.1)',
        }}
      >
        <div className="container mx-auto" style={{ maxWidth: '80rem', padding: '0 1.25rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <p className="section-label" style={{ marginBottom: '0.75rem' }}>Proven Work</p>
            <h2
              id="projects-heading"
              style={{
                fontFamily: 'var(--font-playfair)',
                fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
                color: 'var(--text-on-dark)',
                lineHeight: 1.12,
              }}
            >
              Featured Projects
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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {PROJECTS.map((p) => (
              <div
                key={p.client}
                className="card-lift-dark rounded-2xl overflow-hidden"
                style={{ border: '1px solid rgba(201,168,76,0.12)' }}
              >
                {/* Image placeholder */}
                <div
                  style={{
                    height: 160,
                    background: 'linear-gradient(135deg, var(--charcoal-mid) 0%, var(--charcoal-edge) 100%)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    borderBottom: '1px solid rgba(201,168,76,0.1)',
                  }}
                  aria-hidden="true"
                >
                  <ChefHat size={48} style={{ color: 'rgba(201,168,76,0.3)' }} strokeWidth={1} />
                </div>

                <div style={{ padding: '1.5rem' }}>
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
                    {p.category}
                  </span>
                  <h3
                    style={{
                      fontFamily: 'var(--font-playfair)',
                      fontWeight: 700,
                      fontSize: '1.125rem',
                      color: 'var(--text-on-dark)',
                      lineHeight: 1.25,
                      margin: '0.5rem 0 0.75rem',
                    }}
                  >
                    {p.client}
                  </h3>
                  <p
                    style={{
                      fontFamily: 'var(--font-inter)',
                      fontSize: '0.875rem',
                      color: 'rgba(245,240,232,0.55)',
                      lineHeight: 1.65,
                    }}
                  >
                    {p.result}
                  </p>
                  <p
                    style={{
                      marginTop: '0.875rem',
                      fontFamily: 'var(--font-inter)',
                      fontSize: '0.8125rem',
                      fontWeight: 700,
                      color: 'var(--gold)',
                    }}
                  >
                    {p.value}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '2.75rem' }}>
            <Link
              href="/projects"
              className="btn-ghost-dark inline-flex items-center gap-2"
            >
              View All Projects <ArrowRight size={15} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* -- §06 CITIES WE SERVE ------------------------------------------- */}
      <section
        aria-labelledby="cities-hub-heading"
        style={{
          background: '#FFFFFF',
          padding: '4rem 0',
          borderTop: '1px solid var(--border)',
        }}
      >
        <div className="container mx-auto" style={{ maxWidth: '80rem', padding: '0 1.25rem' }}>
          <p className="section-label" style={{ marginBottom: '0.75rem' }}>National Coverage</p>
          <h2
            id="cities-hub-heading"
            style={{
              fontFamily: 'var(--font-playfair)',
              fontSize: 'clamp(1.375rem, 2vw, 1.75rem)',
              color: 'var(--text-dark)',
              marginBottom: '1.25rem',
            }}
          >
            Commercial Kitchen Equipment Across India
          </h2>
          <p
            style={{
              fontFamily: 'var(--font-inter)',
              fontSize: '0.9375rem',
              color: 'var(--text-body)',
              lineHeight: 1.72,
              maxWidth: 700,
              marginBottom: '1.5rem',
            }}
          >
            We supply and install commercial kitchen equipment across India —{' '}
            {[
              ['Delhi NCR', '/commercial-kitchen-equipment-delhi'],
              ['Mumbai', '/commercial-kitchen-equipment-mumbai'],
              ['Pune', '/commercial-kitchen-equipment-pune'],
              ['Bangalore', '/commercial-kitchen-equipment-bangalore'],
              ['Hyderabad', '/commercial-kitchen-equipment-hyderabad'],
              ['Chennai', '/commercial-kitchen-equipment-chennai'],
              ['Kolkata', '/commercial-kitchen-equipment-kolkata'],
              ['Jaipur', '/commercial-kitchen-equipment-jaipur'],
            ].map(([city, href], i, arr) => (
              <span key={href as string}>
                <Link
                  href={href as string}
                  style={{ color: 'var(--gold)', fontWeight: 600, textDecoration: 'none' }}
                >
                  {city}
                </Link>
                {i < arr.length - 1 ? ' · ' : ''}
              </span>
            ))}{' '}
            and 50+ cities. Projects from ₹8 Lakhs to ₹5 Crore+.
          </p>
        </div>
      </section>

      {/* -- §07 HUB FAQ --------------------------------------------------- */}
      <ServiceFAQ
        faqs={HUB_FAQS}
        heading="Frequently Asked Questions"
        dark={false}
      />

      {/* -- §08 FINAL CTA ------------------------------------------------- */}
      <section
        className="grain-overlay"
        style={{
          background: 'var(--charcoal-warm)',
          padding: '6rem 0',
          borderTop: '1px solid rgba(201,168,76,0.15)',
          position: 'relative',
        }}
      >
        <div
          aria-hidden="true"
          style={{
            position: 'absolute', top: 0, left: 0, right: 0, height: '2px',
            background: 'linear-gradient(90deg, transparent 5%, var(--gold-bright) 35%, var(--gold) 65%, transparent 95%)',
          }}
        />
        <div
          className="container mx-auto"
          style={{ maxWidth: '80rem', padding: '0 1.25rem', textAlign: 'center' }}
        >
          <p
            style={{
              fontFamily: 'var(--font-inter)',
              fontSize: '0.8125rem',
              color: 'var(--gold)',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              fontWeight: 700,
              marginBottom: '1.25rem',
            }}
          >
            Trusted by Hyatt · Radisson · Metro Hospitals · DRDO · 500+ Clients
          </p>
          <h2
            style={{
              fontFamily: 'var(--font-playfair)',
              fontSize: 'clamp(1.875rem, 3.5vw, 3rem)',
              fontWeight: 700,
              color: 'var(--text-on-dark)',
              lineHeight: 1.15,
              letterSpacing: '-0.02em',
              marginBottom: '1.25rem',
            }}
          >
            Get a Free Site Assessment &amp; Equipment Plan
          </h2>
          <p
            style={{
              fontFamily: 'var(--font-inter)',
              fontSize: '1.0625rem',
              color: 'rgba(245,240,232,0.6)',
              lineHeight: 1.72,
              maxWidth: 560,
              margin: '0 auto 2.5rem',
            }}
          >
            Tell us your kitchen type, capacity, and timeline. We&apos;ll share a detailed equipment plan, layout sketch, and itemised quote — within one business day.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center" style={{ marginBottom: '2rem' }}>
            <a
              href="https://wa.me/919250346370?text=Hi%20VSD%20International%2C%20I%20need%20a%20kitchen%20equipment%20consultation.%20Please%20share%20details."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold inline-flex items-center gap-2"
              style={{ minHeight: '3.25rem', paddingLeft: '2rem', paddingRight: '2rem', fontSize: '0.9375rem' }}
            >
              <MessageCircle size={16} aria-hidden="true" />
              Request Free Consultation
            </a>
            <Link
              href="/contact#catalogue"
              className="btn-ghost-dark inline-flex items-center gap-2"
              style={{ minHeight: '3.25rem', paddingLeft: '2rem', paddingRight: '2rem', fontSize: '0.9375rem' }}
            >
              Download Equipment Catalogue
            </Link>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            {['Response within 4 business hours', '500+ projects delivered', 'ISO 9001 certified'].map((t) => (
              <span key={t} style={{ fontFamily: 'var(--font-inter)', fontSize: '0.8125rem', color: 'rgba(245,240,232,0.35)' }}>
                ✓ {t}
              </span>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

/* --- Service Card (local) ------------------------------------------------- */
function ServiceCard({ service }: { service: { icon: any; title: string; desc: string; href: string; tag: string | null } }) {
  const Icon = service.icon;
  return (
    <Link
      href={service.href}
      className="card-lift group flex flex-col rounded-2xl border"
      style={{
        background: '#FFFFFF',
        borderColor: 'var(--border)',
        textDecoration: 'none',
        padding: '1.875rem',
        position: 'relative',
      }}
      aria-label={service.title}
    >
      {/* Tag badge */}
      {service.tag && (
        <span
          style={{
            position: 'absolute', top: '1rem', right: '1rem',
            fontFamily: 'var(--font-inter)',
            fontSize: '0.625rem',
            fontWeight: 700,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: 'var(--gold-deep)',
            background: 'rgba(201,168,76,0.12)',
            border: '1px solid rgba(201,168,76,0.25)',
            borderRadius: '20px',
            padding: '0.2rem 0.6rem',
          }}
        >
          {service.tag}
        </span>
      )}

      {/* Icon */}
      <div
        style={{
          width: 48, height: 48,
          borderRadius: 10,
          background: 'rgba(201,168,76,0.08)',
          border: '1px solid rgba(201,168,76,0.18)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          marginBottom: '1.25rem',
          flexShrink: 0,
        }}
        aria-hidden="true"
      >
        <Icon size={22} style={{ color: 'var(--gold)' }} strokeWidth={1.6} />
      </div>

      <h3
        style={{
          fontFamily: 'var(--font-playfair)',
          fontWeight: 700,
          fontSize: '1.0625rem',
          color: 'var(--text-dark)',
          lineHeight: 1.25,
          marginBottom: '0.625rem',
        }}
      >
        {service.title}
      </h3>

      <p
        style={{
          fontFamily: 'var(--font-inter)',
          fontSize: '0.9rem',
          color: 'var(--text-body)',
          lineHeight: 1.68,
          flexGrow: 1,
        }}
      >
        {service.desc}
      </p>

      <div
        className="flex items-center gap-1 mt-4"
        style={{
          color: 'var(--gold)',
          fontSize: '0.875rem',
          fontFamily: 'var(--font-inter)',
          fontWeight: 600,
        }}
      >
        Learn More
        <ArrowRight
          size={13}
          className="transition-transform duration-200 group-hover:translate-x-1"
          aria-hidden="true"
        />
      </div>
    </Link>
  );
}
