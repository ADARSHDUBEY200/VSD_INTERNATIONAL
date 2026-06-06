import type { Metadata } from 'next';
import Link from 'next/link';
import { Hotel, Shield, Clock, Award, CheckCircle2, ArrowRight, MessageCircle, HeartPulse, UtensilsCrossed, Truck, Users, Cake, Flame, Refrigerator, Wind, Layers } from 'lucide-react';
import ServiceBreadcrumb   from '@/components/services/ServiceBreadcrumb';
import ServiceFAQ          from '@/components/services/ServiceFAQ';
import ServiceTestimonial  from '@/components/services/ServiceTestimonial';
import BrandsGrid          from '@/components/services/BrandsGrid';
import CitiesGrid          from '@/components/services/CitiesGrid';
import ServiceCTA          from '@/components/services/ServiceCTA';

export const metadata: Metadata = {
  title: 'Hotel Kitchen Equipment Manufacturer India | VSD International',
  description:
    '5-star hotel kitchen equipment supplier India. Hyatt, Radisson, Crowne Plaza & ITC standard layouts. Turnkey delivery from design to commissioning. ISO 9001 certified. Delhi factories.',
  alternates: { canonical: 'https://vsdinternational.com/services/hotel-kitchen-equipment/' },
  openGraph: {
    url: 'https://vsdinternational.com/services/hotel-kitchen-equipment/',
    title: 'Hotel Kitchen Equipment Supplier & Manufacturer India | VSD International',
    description: 'Hotel-grade commercial kitchen equipment for 5-star, boutique & heritage hotels. Trusted by Hyatt, Radisson, Crowne Plaza. Turnkey from design to AMC. ISO 9001 certified.',
    images: [{ url: 'https://vsdinternational.com/og-image.jpg', width: 1200, height: 630 }],
  },
};

const KITCHEN_ZONES = [
  { icon: Flame,        title: 'Main Production Kitchen',   desc: 'Heavy-duty cooking equipment — Rational combi ovens, commercial cooking ranges (6–8 burner), griddles, fryers, and bain maries for à la carte and buffet service.', items: ['Rational combi steamers (10–20 GN)', 'Commercial ranges (6–8 burner)', 'Griddles & flat tops', 'Commercial fryers (24L)', 'Salamanders & broilers', 'Hot plates & pass-through warmers'] },
  { icon: Hotel,        title: 'Banquet Kitchen',           desc: 'High-capacity equipment for 200–2000 pax banquet service — large combi ovens, regeneration ovens, bulk cooking kettles, and blast chillers.', items: ['20-GN combi ovens (x2–4)', 'Regeneration combi carts', 'Tilting braising pans', '150L & 200L boiling pans', 'Blast chillers (40kg–80kg)', 'Banquet trolleys & retherm carts'] },
  { icon: UtensilsCrossed, title: 'Indian & Specialty Restaurant', desc: 'Specialist equipment for Indian cuisine — tandoor ovens, tawa, kadai, biryani vessels, and high-BTU Indian cooking ranges built for 24-hour service.', items: ['Tandoor ovens (gas & charcoal)', 'High-BTU Indian cooking ranges', 'Biryani handi stations', 'Roti / naan stations', 'Chaat & live cooking counters', 'Curry bulk cooking systems'] },
  { icon: Refrigerator, title: 'Cold Rooms & Refrigeration', desc: 'Walk-in cold rooms, reach-in refrigerators, undercounter chillers, and blast freezers to hotel-grade specifications with Danfoss refrigeration components.', items: ['Walk-in cold rooms (custom size)', 'Walk-in freezer rooms', 'Blast chillers & shock freezers', 'Undercounter refrigerators', 'Vertical display chillers', 'Refrigerated prep tables'] },
  { icon: Layers,       title: 'Stainless Steel Fabrication', desc: 'Custom SS worktables, sinks, shelving, pass-through counters, overhead equipment rails, and bespoke kitchen furniture to your kitchen layout specifications.', items: ['Custom SS worktables (with sinks)', 'Wall shelving & overhead shelves', 'Pass-through counters', 'Exhaust hoods & canopies', 'Pot racks & wall-mounted rails', 'Custom sink units (1–3 bowl)'] },
  { icon: Wind,         title: 'Exhaust & Ventilation',     desc: 'FIRE NOC compliant kitchen exhaust systems — extraction hoods, fresh air units, UV filtration, and fire suppression systems for hotel kitchen compliance.', items: ['Kitchen exhaust hoods (custom)', 'Fresh air supply units', 'UV ozone filtration systems', 'Kitchen fire suppression (Ansul)', 'Grease filters & access panels', 'Duct work & balancing'] },
];

const FAQS = [
  { q: 'What is the cost of hotel kitchen equipment in India?', a: 'Hotel kitchen equipment costs vary by hotel category: a 3-star hotel kitchen typically costs ₹25–60 lakhs, a 4-star hotel ₹60–1.5 crore, and a 5-star hotel kitchen ₹1.5–5 crore depending on number of outlets, covers, and equipment specifications. A standalone hotel restaurant kitchen (50 covers) costs ₹18–45 lakhs. VSD International has delivered hotel kitchen projects from ₹22 lakhs to ₹3.2 crore — contact us for a detailed estimate based on your hotel category and outlet structure.' },
  { q: 'How long does a 5-star hotel kitchen installation take?', a: 'A complete 5-star hotel kitchen typically takes 45–90 days from equipment order to commissioning. Timeline breakdown: layout design & drawings (5–7 days), procurement & factory work (15–20 days), delivery & site preparation (3–5 days), installation (15–30 days), commissioning & testing (5–7 days), staff training (2–3 days). Complex projects with 8+ kitchen zones may extend to 90–120 days. VSD International has delivered complete 5-star hotel kitchens in as little as 32 days for urgent pre-opening timelines.' },
  { q: 'Do you supply hotel kitchen equipment that meets 5-star audit standards?', a: 'Yes. VSD International has supplied and installed kitchens for Hyatt Regency, Radisson Blu, Crowne Plaza, and ITC — all of which are subject to international brand audits. Our equipment meets: FSSAI food safety standards, HACCP hygiene principles, fire NOC compliance (FIRE NOC-compliant exhaust systems), and brand-specific standards. Rational combi ovens, Winterhalter dishwashers, and custom 304-grade SS fabrication are standard specifications for 5-star properties we equip.' },
  { q: 'Do you provide turnkey hotel kitchen projects?', a: 'Yes — VSD International specialises in turnkey hotel kitchen delivery. Our turnkey scope includes: (1) Site visit and requirement assessment, (2) Kitchen layout design with CAD drawings, (3) Equipment specification and selection, (4) Supply and logistics, (5) On-site installation and fitting, (6) Commissioning and equipment testing, (7) Kitchen staff training, (8) Handover documentation, (9) Post-installation warranty and AMC. Single-point accountability from design to delivery — no coordination headaches.' },
  { q: 'Which hotels has VSD International supplied kitchen equipment to?', a: 'VSD International has supplied kitchen equipment to Hyatt Regency Delhi, Radisson Blu (multiple properties), Crowne Plaza Rohini, Le Meridien Agra, Lemon Tree Hotels (multiple properties), Sarovar Hotels, Bloom Hotels, Keys Hotels, and several independent boutique hotels. We also serve hotel chains under development — pre-opening kitchen setups are a specialty. Reference visits to completed hotel kitchen installations can be arranged subject to hotel management approval.' },
  { q: 'What type of exhaust and ventilation system does a hotel kitchen need?', a: 'Hotel kitchens require a comprehensive ventilation system: (1) Kitchen exhaust hoods sized to equipment footprint (typically 1m overhang on all sides), (2) Fresh air supply system (minimum 50–60 air changes per hour in cooking zones), (3) UV ozone filtration or electrostatic precipitator for grease elimination (required for FIRE NOC compliance in commercial buildings), (4) Kitchen fire suppression system (Ansul or equivalent — mandatory for insurance and fire audit), (5) Balancing to ensure negative pressure in the kitchen versus adjacent dining areas. VSD International designs, supplies, and installs complete ventilation systems.' },
  { q: 'Do you supply Rational combi ovens for hotel kitchens?', a: 'Yes — VSD International is an authorised Indian dealer for Rational combi ovens and iCombi Pro series. For hotel kitchens, we typically specify: 10-GN Rational iCombi Pro for restaurant kitchens, 20-GN Rational iCombi Pro or iVario Pro for banquet and large-volume cooking, and Rational iVario (40L & 80L) as braising/boiling pans. Rational equipment comes with Indian warranty, ChefLine support, and quarterly service under Rational-certified engineers. We have installed Rational equipment in 25+ hotel kitchens across India.' },
];

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    { '@type': 'Service', name: 'Hotel Kitchen Equipment Supply & Installation', provider: { '@type': 'LocalBusiness', name: 'VSD International' }, areaServed: { '@type': 'Country', name: 'India' }, serviceType: 'Hotel Kitchen Equipment', aggregateRating: { '@type': 'AggregateRating', ratingValue: '4.9', reviewCount: '312', bestRating: '5' } },
    { '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://vsdinternational.com' }, { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://vsdinternational.com/services/' }, { '@type': 'ListItem', position: 3, name: 'Hotel Kitchen Equipment', item: 'https://vsdinternational.com/services/hotel-kitchen-equipment/' }] },
    { '@type': 'FAQPage', mainEntity: FAQS.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) },
  ],
};

const TESTIMONIAL = {
  quote: 'VSD International delivered our Radisson Blu kitchen on time and exactly to our brand specifications. The Rational combi ovens, custom SS fabrication, and Winterhalter dishwashers are performing flawlessly. Their team understood hotel kitchen standards without us having to over-specify — a rare quality in the Indian market.',
  name: 'Priya Nair',
  title: 'Director of Operations',
  company: 'Radisson Blu, Dwarka',
  city: 'New Delhi',
  rating: 5,
};

export default function HotelKitchenEquipmentPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <ServiceBreadcrumb crumbs={[{ label: 'Services', href: '/services' }, { label: 'Hotel Kitchen Equipment' }]} />

      {/* §1 Hero */}
      <section className="grain-overlay" style={{ background: 'var(--charcoal-warm)', padding: '5rem 0 4.5rem', position: 'relative', borderBottom: '1px solid rgba(201,168,76,0.15)' }}>
        <div aria-hidden="true" style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '2px', background: 'linear-gradient(90deg, transparent 5%, var(--gold-bright) 35%, var(--gold) 65%, transparent 95%)' }} />
        <div className="container mx-auto" style={{ maxWidth: '80rem', padding: '0 1.25rem' }}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="section-label" style={{ marginBottom: '1rem' }}>Hotels & Hospitality</p>
              <h1 style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(1.875rem, 3.8vw, 3rem)', fontWeight: 700, lineHeight: 1.1, letterSpacing: '-0.02em', color: 'var(--text-on-dark)', marginBottom: '1.25rem' }}>
                Hotel Kitchen Equipment Supplier &amp;{' '}
                <em className="gold-shimmer" style={{ fontStyle: 'italic', fontWeight: 800 }}>Manufacturer India</em>
              </h1>
              <div aria-hidden="true" style={{ width: 60, height: 3, background: 'linear-gradient(90deg, var(--gold-bright), var(--gold), var(--gold-deep))', borderRadius: 2, marginBottom: '1.5rem' }} />
              <p style={{ fontFamily: 'var(--font-inter)', fontSize: '1.0625rem', color: 'rgba(245,240,232,0.7)', lineHeight: 1.75, marginBottom: '1.5rem' }}>
                5-star hotel kitchen equipment supplier trusted by Hyatt, Radisson Blu, Crowne Plaza, and ITC. We deliver complete hotel kitchen setups — from banquet kitchens and specialty restaurants to staff canteens — with ISO 9001 certified quality and hotel-brand audit compliance.
              </p>
              <div className="flex flex-wrap gap-5" style={{ marginBottom: '2rem' }}>
                {[{ icon: Hotel, text: 'Hyatt, Radisson, ITC' }, { icon: Shield, text: 'ISO 9001 Certified' }, { icon: Award, text: '5-Star Audit Ready' }].map(({ icon: Icon, text }) => (
                  <div key={text} className="flex items-center gap-2">
                    <Icon size={15} style={{ color: 'var(--gold)', flexShrink: 0 }} aria-hidden="true" />
                    <span style={{ fontFamily: 'var(--font-inter)', fontSize: '0.875rem', fontWeight: 600, color: 'rgba(245,240,232,0.75)' }}>{text}</span>
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap gap-3">
                <a href="https://wa.me/919250346370?text=Hi%20VSD%2C%20I%20need%20hotel%20kitchen%20equipment.%20Please%20share%20details." target="_blank" rel="noopener noreferrer" className="btn-gold inline-flex items-center gap-2">
                  <MessageCircle size={15} aria-hidden="true" /> Get Hotel Kitchen Quote
                </a>
                <Link href="/services/commercial-kitchen-equipment" className="btn-ghost-dark inline-flex items-center gap-2">
                  All Equipment <ArrowRight size={14} aria-hidden="true" />
                </Link>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[{ label: 'Hotel Projects', value: '80+' }, { label: 'Star Properties', value: '3–5★' }, { label: 'Brands Trusted', value: '15+' }, { label: 'Years Exp.', value: '15' }].map(({ label, value }) => (
                <div key={label} className="rounded-xl flex flex-col items-center justify-center text-center" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(201,168,76,0.15)', padding: '1.75rem 1rem' }}>
                  <span style={{ fontFamily: 'var(--font-playfair)', fontSize: '2.25rem', fontWeight: 800, color: 'var(--gold-bright)', lineHeight: 1 }}>{value}</span>
                  <span style={{ fontFamily: 'var(--font-inter)', fontSize: '0.8125rem', color: 'rgba(245,240,232,0.45)', marginTop: '0.5rem', lineHeight: 1.3 }}>{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* §2 What We Offer */}
      <section aria-labelledby="offer-heading" style={{ background: '#FFFFFF', padding: '5.5rem 0' }}>
        <div className="container mx-auto" style={{ maxWidth: '80rem', padding: '0 1.25rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '3.25rem' }}>
            <p className="section-label" style={{ marginBottom: '0.75rem' }}>Hotel Kitchen Zones</p>
            <h2 id="offer-heading" style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', color: 'var(--text-dark)', lineHeight: 1.12 }}>
              Our Hotel Kitchen Equipment Range
            </h2>
            <div aria-hidden="true" style={{ width: 56, height: 3, background: 'linear-gradient(90deg, var(--gold-bright), var(--gold), var(--gold-deep))', borderRadius: 2, margin: '1.125rem auto 0' }} />
            <p style={{ marginTop: '1.25rem', fontFamily: 'var(--font-inter)', fontSize: '0.9375rem', color: 'var(--text-body)', lineHeight: 1.72, maxWidth: 640, margin: '1.25rem auto 0' }}>
              Complete hotel kitchen equipment for every zone — main kitchen, banquet, specialty restaurants, cold rooms, SS fabrication, and ventilation systems.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {KITCHEN_ZONES.map(({ icon: Icon, title, desc, items }) => (
              <div key={title} className="card-lift rounded-2xl" style={{ background: 'var(--surface)', border: '1px solid var(--border)', padding: '1.75rem' }}>
                <div style={{ width: 44, height: 44, borderRadius: 10, background: 'rgba(201,168,76,0.08)', border: '1px solid rgba(201,168,76,0.18)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }} aria-hidden="true">
                  <Icon size={20} style={{ color: 'var(--gold)' }} strokeWidth={1.6} />
                </div>
                <h3 style={{ fontFamily: 'var(--font-playfair)', fontWeight: 700, fontSize: '1.0625rem', color: 'var(--text-dark)', marginBottom: '0.625rem', lineHeight: 1.25 }}>{title}</h3>
                <p style={{ fontFamily: 'var(--font-inter)', fontSize: '0.875rem', color: 'var(--text-body)', lineHeight: 1.65, marginBottom: '1rem' }}>{desc}</p>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                  {items.map(item => (
                    <li key={item} className="flex items-start gap-2">
                      <CheckCircle2 size={12} style={{ color: 'var(--gold)', flexShrink: 0, marginTop: '0.2rem' }} aria-hidden="true" />
                      <span style={{ fontFamily: 'var(--font-inter)', fontSize: '0.8125rem', color: 'var(--text-muted)', lineHeight: 1.4 }}>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* §3 Industries */}
      <section aria-labelledby="industries-heading" style={{ background: 'var(--surface)', padding: '4.5rem 0', borderTop: '1px solid var(--border)' }}>
        <div className="container mx-auto" style={{ maxWidth: '80rem', padding: '0 1.25rem' }}>
          <h2 id="industries-heading" style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(1.5rem, 2.4vw, 2rem)', color: 'var(--text-dark)', marginBottom: '2rem' }}>
            Industries We Supply Hotel Kitchen Equipment To
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {[
              { icon: Hotel,    label: 'Luxury Hotels',   href: '/industries/hotels',         desc: '5-star & boutique properties' },
              { icon: Users,    label: 'Hotel Chains',    href: '/industries/hotels',         desc: 'Multi-property rollouts' },
              { icon: UtensilsCrossed, label: 'Hotel Restaurants', href: '/industries/restaurants', desc: 'In-hotel F&B outlets' },
              { icon: HeartPulse,  label: 'Resorts & Spas', href: '/industries/hotels',      desc: 'Resort kitchen setups' },
              { icon: Award,    label: 'Heritage Hotels', href: '/industries/hotels',         desc: 'Heritage & boutique properties' },
            ].map(({ icon: Icon, label, href, desc }) => (
              <Link key={label} href={href} className="card-lift flex flex-col items-center gap-3 text-center rounded-xl p-4" style={{ background: '#FFFFFF', border: '1px solid var(--border)', textDecoration: 'none' }}>
                <div style={{ width: 44, height: 44, borderRadius: '50%', background: 'rgba(201,168,76,0.08)', border: '1px solid rgba(201,168,76,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center' }} aria-hidden="true">
                  <Icon size={18} style={{ color: 'var(--gold)' }} strokeWidth={1.6} />
                </div>
                <div>
                  <p style={{ fontFamily: 'var(--font-inter)', fontWeight: 700, fontSize: '0.875rem', color: 'var(--text-dark)', marginBottom: '0.2rem' }}>{label}</p>
                  <p style={{ fontFamily: 'var(--font-inter)', fontSize: '0.75rem', color: 'var(--text-muted)' }}>{desc}</p>
                </div>
              </Link>
            ))}
          </div>
          <div style={{ marginTop: '2rem', padding: '1.25rem 1.5rem', background: '#FFFFFF', border: '1px solid var(--border)', borderRadius: 8 }}>
            <p style={{ fontFamily: 'var(--font-inter)', fontWeight: 600, fontSize: '0.875rem', color: 'var(--text-dark)', marginBottom: '0.75rem' }}>Related Services</p>
            <div className="flex flex-wrap gap-3">
              {[['Commercial Kitchen Equipment', '/services/commercial-kitchen-equipment'], ['Kitchen Layout Design', '/services/kitchen-layout-design'], ['Kitchen Exhaust & Ventilation', '/services/kitchen-exhaust-ventilation']].map(([label, href]) => (
                <Link key={href as string} href={href as string} className="btn-ghost text-sm" style={{ minHeight: 'auto', padding: '0.5rem 1rem' }}>{label} →</Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* §4 Why VSD */}
      <section aria-labelledby="why-heading" className="grain-overlay" style={{ background: 'var(--charcoal-light)', padding: '5.5rem 0', borderTop: '1px solid rgba(201,168,76,0.1)' }}>
        <div className="container mx-auto" style={{ maxWidth: '80rem', padding: '0 1.25rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 id="why-heading" style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', color: 'var(--text-on-dark)', lineHeight: 1.12 }}>
              Why Choose VSD International for Hotel Kitchen Equipment
            </h2>
            <div aria-hidden="true" style={{ width: 56, height: 3, background: 'linear-gradient(90deg, var(--gold-bright), var(--gold), var(--gold-deep))', borderRadius: 2, margin: '1.125rem auto 0' }} />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {[
              { title: 'Hotel-Grade Specifications', body: 'Hyatt, Radisson, and Crowne Plaza standard layouts. We understand brand audit requirements, kitchen workflow for F&B service, and equipment specifications for high-utilisation hotel kitchens. 80+ hotel projects since 2009.' },
              { title: 'Turnkey Delivery', body: 'Design, supply, install, and commission in one contract. We handle pre-opening timelines — coordinating with your MEP contractor, fire NOC team, and kitchen consultant to ensure zero-delay installation.' },
              { title: 'FSSAI & HACCP Compliance', body: 'All equipment meets FSSAI food safety standards and HACCP hygiene principles. Kitchen layouts are designed for hygienic workflow separation — raw material, prep, cooking, plating, and service zones clearly divided.' },
              { title: 'Post-Installation AMC', body: '1-year comprehensive warranty + AMC options for 1–5 years. Active AMC relationship with 25+ hotel kitchens across India — scheduled quarterly preventive maintenance, priority breakdown support, genuine spare parts.' },
            ].map(({ title, body }) => (
              <div key={title} className="card-lift-dark rounded-2xl" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(201,168,76,0.12)', padding: '2rem' }}>
                <div style={{ width: 10, height: 10, borderRadius: '50%', background: 'var(--gold)', marginBottom: '1rem' }} aria-hidden="true" />
                <h3 style={{ fontFamily: 'var(--font-playfair)', fontWeight: 700, fontSize: '1.0625rem', color: 'var(--text-on-dark)', marginBottom: '0.75rem' }}>{title}</h3>
                <p style={{ fontFamily: 'var(--font-inter)', fontSize: '0.9375rem', color: 'rgba(245,240,232,0.6)', lineHeight: 1.72 }}>{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* §5 Featured Project */}
      <section aria-labelledby="project-heading" style={{ background: '#FFFFFF', padding: '5rem 0', borderTop: '1px solid var(--border)' }}>
        <div className="container mx-auto" style={{ maxWidth: '80rem', padding: '0 1.25rem' }}>
          <p className="section-label" style={{ marginBottom: '0.75rem' }}>Portfolio</p>
          <h2 id="project-heading" style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(1.5rem, 2.4vw, 2rem)', color: 'var(--text-dark)', marginBottom: '2rem' }}>
            Recent Hotel Kitchen Equipment Projects
          </h2>
          <div className="rounded-2xl overflow-hidden" style={{ border: '1px solid var(--border)', marginBottom: '2rem' }}>
            <div style={{ background: 'linear-gradient(135deg, var(--charcoal) 0%, var(--charcoal-mid) 100%)', height: 180, display: 'flex', alignItems: 'center', justifyContent: 'center' }} aria-hidden="true">
              <Hotel size={56} style={{ color: 'rgba(201,168,76,0.3)' }} strokeWidth={1} />
            </div>
            <div style={{ padding: '2rem' }}>
              <span style={{ fontFamily: 'var(--font-inter)', fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--gold)' }}>Featured Project — 5-Star Hotel</span>
              <h3 style={{ fontFamily: 'var(--font-playfair)', fontWeight: 700, fontSize: '1.375rem', color: 'var(--text-dark)', margin: '0.625rem 0 0.875rem' }}>Hyatt Regency Delhi — 8-Zone Kitchen Setup</h3>
              <p style={{ fontFamily: 'var(--font-inter)', fontSize: '0.9375rem', color: 'var(--text-body)', lineHeight: 1.72, maxWidth: 680 }}>
                Complete 5-star hotel kitchen covering 8 zones. Equipment: 4 Rational combi ovens, 12 commercial cooking ranges, Winterhalter conveyor dishwasher, 3 walk-in cold rooms, full SS fabrication, FIRE NOC compliant exhaust system. 45-day turnkey delivery before hotel opening.
              </p>
              <p style={{ marginTop: '1rem', fontFamily: 'var(--font-inter)', fontWeight: 700, fontSize: '0.9375rem', color: 'var(--gold)' }}>Project Value: ₹1.8 Crore · Delivered: 45 days</p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {['Radisson Blu Dwarka, Delhi — Full F&B kitchen setup', 'Crowne Plaza Rohini, Delhi — 5-star pre-opening kitchen', 'Le Meridien Agra — Heritage hotel kitchen renovation', 'Lemon Tree Premier, Gurgaon — Full hotel kitchen', 'Bloom Hotel Aerocity, Delhi — Boutique hotel kitchen', 'Sarovar Premiere Ahmedabad — Complete kitchen setup'].map(p => (
              <div key={p} className="flex items-start gap-2.5">
                <Award size={12} style={{ color: 'var(--gold)', flexShrink: 0, marginTop: '0.15rem' }} aria-hidden="true" />
                <span style={{ fontFamily: 'var(--font-inter)', fontSize: '0.875rem', color: 'var(--text-body)' }}>{p}</span>
              </div>
            ))}
          </div>
          <Link href="/projects" className="inline-flex items-center gap-1.5 mt-4" style={{ color: 'var(--gold)', fontFamily: 'var(--font-inter)', fontWeight: 700, fontSize: '0.9375rem', textDecoration: 'none' }}>
            View All Hotel Kitchen Projects <ArrowRight size={14} aria-hidden="true" />
          </Link>
        </div>
      </section>

      {/* §6 Brands */}
      <BrandsGrid />

      {/* §7 Cities */}
      <CitiesGrid serviceSlug="hotel-kitchen-equipment" />

      {/* §8 Testimonial */}
      <ServiceTestimonial testimonial={TESTIMONIAL} />

      {/* §9 FAQ */}
      <ServiceFAQ faqs={FAQS} heading="Frequently Asked Questions — Hotel Kitchen Equipment" />

      {/* §10 CTA */}
      <ServiceCTA
        serviceName="Hotel Kitchen"
        subtext="Share your hotel category, number of outlets, and cover count. We'll deliver a detailed equipment specification, layout recommendation, and project timeline within 24 hours."
      />
    </>
  );
}
