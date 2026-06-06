import type { Metadata } from 'next';
import Link from 'next/link';
import { UtensilsCrossed, Shield, Clock, CheckCircle2, ArrowRight, MessageCircle, Flame, Refrigerator, Layers, Droplets, ChefHat, Building2, Hotel, Truck, HeartPulse, Users, Cake } from 'lucide-react';
import ServiceBreadcrumb   from '@/components/services/ServiceBreadcrumb';
import ServiceFAQ          from '@/components/services/ServiceFAQ';
import ServiceTestimonial  from '@/components/services/ServiceTestimonial';
import BrandsGrid          from '@/components/services/BrandsGrid';
import CitiesGrid          from '@/components/services/CitiesGrid';
import ServiceCTA          from '@/components/services/ServiceCTA';

export const metadata: Metadata = {
  title: 'Restaurant Kitchen Setup & Equipment India | VSD International',
  description:
    'Complete restaurant kitchen setup in India — equipment supply, layout design & installation for fine-dine, QSR, café chains & casual dining. Delhi factory. 500+ restaurant kitchen projects.',
  alternates: { canonical: 'https://vsdinternational.com/services/restaurant-kitchen-setup/' },
  openGraph: {
    url: 'https://vsdinternational.com/services/restaurant-kitchen-setup/',
    title: 'Restaurant Kitchen Setup & Equipment India | VSD International',
    description: 'Complete restaurant kitchen setup — design, equipment, installation. Fine-dine, QSR, café & casual dining kitchens. FSSAI compliant. From ₹12 Lakhs.',
    images: [{ url: 'https://vsdinternational.com/og-image.jpg', width: 1200, height: 630 }],
  },
};

const RESTAURANT_TYPES = [
  { type: 'Fine-Dine Restaurant', budget: '₹25–60L', items: ['High-precision cooking equipment', 'Rational combi oven', 'Separate prep & plating kitchen', 'Chef\'s table / pass window', 'Professional dish storage'], desc: 'Premium equipment for à la carte service — Rational combi ovens, induction cooking, precision temperature control.' },
  { type: 'QSR / Fast Food (50 sqft kitchen)', budget: '₹12–28L', items: ['Commercial fryers (floor model)', 'Commercial griddle / flat top', 'Holding equipment & hot cases', 'Blast chiller for prep', 'High-capacity dishwasher'], desc: 'High-throughput equipment for 200–500 covers/day — fryers, griddles, holding equipment, and rapid output systems.' },
  { type: 'Indian Restaurant / Dhaba', budget: '₹15–35L', items: ['High-BTU Indian cooking ranges', 'Tandoor oven (gas/charcoal)', 'Biryani / handi cooking stations', 'Tawa & kadai stations', 'Bulk rice & dal cookers'], desc: 'Specialist Indian cuisine equipment — tandoors, high-BTU burners, biryani vessels, and bulk cooking stations.' },
  { type: 'Café & Coffee Shop', budget: '₹10–22L', items: ['Commercial espresso machine', 'Commercial grinder & milk frother', 'Convection oven for baked goods', 'Refrigerated display counter', 'Undercounter dishwasher'], desc: 'Compact, efficient café kitchen with espresso equipment, display counters, and compact cooking setup.' },
];

const FAQS = [
  { q: 'What equipment is needed to set up a restaurant kitchen in India?', a: 'A standard restaurant kitchen requires: Cooking equipment (4–8 burner commercial range, commercial fryer, convection/deck oven, salamander, bain marie), Refrigeration (reach-in refrigerator 400–600L, undercounter chiller, cold room if space allows), Food preparation (food processor, mixer, slicer, vegetable cutter), Dishwashing (undercounter or pass-through dishwasher, pre-rinse unit, pot wash sink), Stainless steel fabrication (worktables, sink units, shelving, exhaust hood), and Serving equipment (hot case, food warmers). The exact list depends on your cuisine type, cover count, and service style. VSD International provides a free equipment checklist for your restaurant concept.' },
  { q: 'What is the cost of setting up a restaurant kitchen in India?', a: 'Restaurant kitchen setup costs in India: Café or small QSR (up to 50 sqft kitchen) — ₹10–18 lakhs; Mid-range restaurant (50–100 sqft kitchen, 50–80 covers) — ₹18–35 lakhs; Large restaurant or fine-dine (100–150 sqft kitchen, 100+ covers) — ₹35–60 lakhs; Multi-cuisine restaurant with full equipment — ₹40–80 lakhs. These costs include cooking equipment, refrigeration, food prep, SS fabrication, dishwashing, and exhaust system. Civil work (gas pipeline, electrical upgrades, tiles) is additional. VSD International provides transparent, itemised quotes.' },
  { q: 'How long does a restaurant kitchen setup take?', a: 'Restaurant kitchen setup timeline: Design and drawing (5–7 days after site visit), Equipment procurement (7–15 days for in-stock items, 21–35 days for special orders), Installation (7–15 days depending on kitchen size), Commissioning and testing (2–3 days), Staff training (1–2 days). Total: 25–45 days for a typical restaurant kitchen. VSD International can fast-track urgent pre-opening setups. We have delivered complete restaurant kitchens in as little as 14 working days for urgent situations.' },
  { q: 'Do you design restaurant kitchen layouts?', a: 'Yes — VSD International provides professional kitchen layout design as part of our service. Our kitchen layout design process: (1) Free site visit to measure and assess space, (2) Discussion on menu, cover count, and service style, (3) CAD-based kitchen layout drawing showing equipment placement, workflow zones, utility connection points, (4) 2–3 layout iterations until approved, (5) Equipment specification based on approved layout. Layout design is free for projects above ₹5 lakhs. For layout-only consultancy without equipment supply, we charge a consulting fee.' },
  { q: 'What is FSSAI compliance for restaurant kitchens?', a: 'FSSAI (Food Safety and Standards Authority of India) compliance for restaurant kitchens requires: (1) FSSAI State Licence for restaurants with turnover above ₹12 lakhs/year; (2) Food-grade stainless steel surfaces (SS 304 minimum) for food-contact areas; (3) Adequate refrigeration to maintain 0–5°C for chilled foods and below -18°C for frozen foods; (4) Pest-proof food storage; (5) Adequate handwash facilities near food handling areas; (6) Proper waste management and disposal; (7) Kitchen staff with basic food hygiene training. VSD International\'s kitchen setups are designed to meet FSSAI inspection requirements by default.' },
  { q: 'Can you set up a QSR chain kitchen with consistent specifications across multiple outlets?', a: 'Yes — VSD International specialises in multi-outlet QSR rollouts. We develop a Master Kitchen Specification (MKS) document that standardises equipment specifications, layout templates, and installation standards across all outlets. Benefits of working with one vendor for chain rollouts: (1) Consistent equipment performance across all kitchens; (2) Centralised AMC for all outlets; (3) Volume pricing benefits for 10+ outlet rollouts; (4) Single point of contact for all kitchen equipment issues. We have executed 10+ outlet rollouts for restaurant chains in Delhi NCR and pan-India.' },
  { q: 'Do you supply restaurant kitchen equipment for cloud kitchens and dark kitchens?', a: 'Yes — many of our restaurant kitchen clients are running delivery-first concepts (cloud kitchens). For Zomato and Swiggy-listed restaurants, we design kitchens that are optimised for delivery output: (1) Higher cooking capacity per sqft versus dine-in kitchens; (2) Packaging and dispatch area built into the kitchen flow; (3) No pass-through counter needed — direct packaging from cooking line; (4) Zomato/Swiggy partner inspection compliant exhaust and equipment. We also set up hybrid kitchens — dine-in plus delivery — that serve both dining room and delivery orders without workflow conflicts.' },
];

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    { '@type': 'Service', name: 'Restaurant Kitchen Setup & Equipment', provider: { '@type': 'LocalBusiness', name: 'VSD International' }, areaServed: { '@type': 'Country', name: 'India' }, serviceType: 'Restaurant Kitchen Equipment', aggregateRating: { '@type': 'AggregateRating', ratingValue: '4.9', reviewCount: '312', bestRating: '5' } },
    { '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://vsdinternational.com' }, { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://vsdinternational.com/services/' }, { '@type': 'ListItem', position: 3, name: 'Restaurant Kitchen Setup', item: 'https://vsdinternational.com/services/restaurant-kitchen-setup/' }] },
    { '@type': 'FAQPage', mainEntity: FAQS.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) },
  ],
};

const TESTIMONIAL = {
  quote: 'VSD International designed and equipped our restaurant kitchen from scratch. The layout is incredibly efficient — our kitchen team produces 120 covers per service without bottlenecks. The Rational combi oven and commercial cooking range have performed flawlessly for 18 months. Post-installation support has been prompt and professional.',
  name: 'Chef Vikram Singh',
  title: 'Executive Chef & Co-Owner',
  company: 'Zaffran Restaurant Group',
  city: 'Delhi NCR',
  rating: 5,
};

export default function RestaurantKitchenSetupPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <ServiceBreadcrumb crumbs={[{ label: 'Services', href: '/services' }, { label: 'Restaurant Kitchen Setup' }]} />

      {/* §1 Hero */}
      <section className="grain-overlay" style={{ background: 'var(--charcoal-warm)', padding: '5rem 0 4.5rem', position: 'relative', borderBottom: '1px solid rgba(201,168,76,0.15)' }}>
        <div aria-hidden="true" style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '2px', background: 'linear-gradient(90deg, transparent 5%, var(--gold-bright) 35%, var(--gold) 65%, transparent 95%)' }} />
        <div className="container mx-auto" style={{ maxWidth: '80rem', padding: '0 1.25rem' }}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="section-label" style={{ marginBottom: '1rem' }}>Broadest Market</p>
              <h1 style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(1.875rem, 3.8vw, 3rem)', fontWeight: 700, lineHeight: 1.1, letterSpacing: '-0.02em', color: 'var(--text-on-dark)', marginBottom: '1.25rem' }}>
                Restaurant Kitchen Setup &amp;{' '}
                <em className="gold-shimmer" style={{ fontStyle: 'italic', fontWeight: 800 }}>Equipment India</em>
              </h1>
              <div aria-hidden="true" style={{ width: 60, height: 3, background: 'linear-gradient(90deg, var(--gold-bright), var(--gold), var(--gold-deep))', borderRadius: 2, marginBottom: '1.5rem' }} />
              <p style={{ fontFamily: 'var(--font-inter)', fontSize: '1.0625rem', color: 'rgba(245,240,232,0.7)', lineHeight: 1.75, marginBottom: '1.5rem' }}>
                Complete restaurant kitchen setup for fine-dine, QSR, café chains, and casual dining — kitchen layout design, equipment supply, installation, and commissioning. FSSAI compliant. 200+ restaurant projects across India. Setups from ₹12 Lakhs.
              </p>
              <div className="flex flex-wrap gap-5" style={{ marginBottom: '2rem' }}>
                {[{ icon: UtensilsCrossed, text: '200+ Restaurant Projects' }, { icon: Shield, text: 'FSSAI Compliant' }, { icon: Clock, text: '25–45 Day Setup' }].map(({ icon: Icon, text }) => (
                  <div key={text} className="flex items-center gap-2">
                    <Icon size={15} style={{ color: 'var(--gold)', flexShrink: 0 }} aria-hidden="true" />
                    <span style={{ fontFamily: 'var(--font-inter)', fontSize: '0.875rem', fontWeight: 600, color: 'rgba(245,240,232,0.75)' }}>{text}</span>
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap gap-3">
                <a href="https://wa.me/919250346370?text=Hi%20VSD%2C%20I%20need%20restaurant%20kitchen%20setup.%20Please%20share%20equipment%20list%20and%20pricing." target="_blank" rel="noopener noreferrer" className="btn-gold inline-flex items-center gap-2">
                  <MessageCircle size={15} aria-hidden="true" /> Get Restaurant Kitchen Quote
                </a>
                <Link href="/services/kitchen-layout-design" className="btn-ghost-dark inline-flex items-center gap-2">
                  Kitchen Layout Design <ArrowRight size={14} aria-hidden="true" />
                </Link>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-3">
              {RESTAURANT_TYPES.slice(0,3).map(({ type, budget, desc }) => (
                <div key={type} className="rounded-lg" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(201,168,76,0.12)', padding: '1rem 1.25rem' }}>
                  <div className="flex items-center justify-between gap-3 mb-0.5">
                    <p style={{ fontFamily: 'var(--font-inter)', fontWeight: 700, fontSize: '0.9375rem', color: 'var(--text-on-dark)' }}>{type}</p>
                    <span style={{ fontFamily: 'var(--font-playfair)', fontWeight: 800, fontSize: '0.9375rem', color: 'var(--gold-bright)', whiteSpace: 'nowrap' }}>{budget}</span>
                  </div>
                  <p style={{ fontFamily: 'var(--font-inter)', fontSize: '0.8125rem', color: 'rgba(245,240,232,0.5)' }}>{desc}</p>
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
            <p className="section-label" style={{ marginBottom: '0.75rem' }}>Restaurant Kitchen Types</p>
            <h2 id="offer-heading" style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', color: 'var(--text-dark)', lineHeight: 1.12 }}>
              Restaurant Kitchen Setup — Equipment &amp; Layout by Restaurant Type
            </h2>
            <div aria-hidden="true" style={{ width: 56, height: 3, background: 'linear-gradient(90deg, var(--gold-bright), var(--gold), var(--gold-deep))', borderRadius: 2, margin: '1.125rem auto 0' }} />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {RESTAURANT_TYPES.map(({ type, budget, items, desc }) => (
              <div key={type} className="card-lift rounded-2xl" style={{ background: 'var(--surface)', border: '1px solid var(--border)', padding: '1.875rem' }}>
                <div className="flex items-center justify-between gap-3 mb-0.5">
                  <h3 style={{ fontFamily: 'var(--font-playfair)', fontWeight: 700, fontSize: '1.125rem', color: 'var(--text-dark)' }}>{type}</h3>
                  <span style={{ fontFamily: 'var(--font-playfair)', fontWeight: 800, fontSize: '1rem', color: 'var(--gold)', whiteSpace: 'nowrap' }}>{budget}</span>
                </div>
                <p style={{ fontFamily: 'var(--font-inter)', fontSize: '0.875rem', color: 'var(--text-muted)', lineHeight: 1.6, margin: '0.5rem 0 1rem' }}>{desc}</p>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                  {items.map(item => (
                    <li key={item} className="flex items-start gap-2">
                      <CheckCircle2 size={12} style={{ color: 'var(--gold)', flexShrink: 0, marginTop: '0.2rem' }} aria-hidden="true" />
                      <span style={{ fontFamily: 'var(--font-inter)', fontSize: '0.875rem', color: 'var(--text-body)', lineHeight: 1.5 }}>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* §3 Why VSD */}
      <section className="grain-overlay" style={{ background: 'var(--charcoal-light)', padding: '5rem 0', borderTop: '1px solid rgba(201,168,76,0.1)' }}>
        <div className="container mx-auto" style={{ maxWidth: '80rem', padding: '0 1.25rem' }}>
          <h2 style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', color: 'var(--text-on-dark)', lineHeight: 1.12, textAlign: 'center', marginBottom: '3rem' }}>
            Why Choose VSD International for Restaurant Kitchen Setup
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {[
              { title: 'Chef-Designed Workflow Layouts', body: 'Our kitchen layouts are designed with chef workflow in mind — not just equipment placement. Cooking line, prep zone, plating area, and service pass are positioned for the lowest possible steps-per-cover. Efficient kitchens produce more covers with less staff.' },
              { title: 'FSSAI Inspection Ready', body: 'All restaurant kitchen setups are designed to pass FSSAI health inspections — food-grade SS surfaces, adequate refrigeration, proper hand wash stations, pest-proof storage, and hygienic workflow separation between raw and cooked food.' },
              { title: 'Multi-Outlet Chain Rollouts', body: 'Consistent kitchen setups across 10, 20, or 50+ outlets. We develop master kitchen specifications for chain restaurants — same equipment, same layout, same performance. Volume pricing and centralised AMC available for chains with 5+ outlets.' },
              { title: 'Commercial Kitchen Equipment Only', body: 'We never recommend domestic equipment for commercial use. All restaurant kitchen equipment is commercial-grade — designed for 12–18 hour daily use, with commercial warranties and service support. Zero compromise on equipment quality.' },
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

      {/* §4 Project */}
      <section style={{ background: '#FFFFFF', padding: '5rem 0', borderTop: '1px solid var(--border)' }}>
        <div className="container mx-auto" style={{ maxWidth: '80rem', padding: '0 1.25rem' }}>
          <h2 style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(1.5rem, 2.4vw, 2rem)', color: 'var(--text-dark)', marginBottom: '2rem' }}>Recent Restaurant Kitchen Setup Projects</h2>
          <div className="rounded-2xl overflow-hidden" style={{ border: '1px solid var(--border)', marginBottom: '2rem' }}>
            <div style={{ background: 'linear-gradient(135deg, var(--charcoal) 0%, var(--charcoal-mid) 100%)', height: 160, display: 'flex', alignItems: 'center', justifyContent: 'center' }} aria-hidden="true">
              <ChefHat size={48} style={{ color: 'rgba(201,168,76,0.3)' }} strokeWidth={1} />
            </div>
            <div style={{ padding: '2rem' }}>
              <span style={{ fontFamily: 'var(--font-inter)', fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--gold)' }}>Featured — Fine-Dine Restaurant</span>
              <h3 style={{ fontFamily: 'var(--font-playfair)', fontWeight: 700, fontSize: '1.375rem', color: 'var(--text-dark)', margin: '0.625rem 0 0.875rem' }}>Zaffran Group — 3-Outlet Restaurant Chain, Delhi</h3>
              <p style={{ fontFamily: 'var(--font-inter)', fontSize: '0.9375rem', color: 'var(--text-body)', lineHeight: 1.72, maxWidth: 680 }}>Complete kitchen setup for 3 fine-dine restaurant outlets — Rational combi ovens, 6-burner commercial ranges, undercounter refrigerators, custom SS fabrication, pass-through counters. Chef-designed workflow layout enabling 120 covers per service. Delivered across 3 outlets in 38 days.</p>
              <p style={{ marginTop: '1rem', fontFamily: 'var(--font-inter)', fontWeight: 700, fontSize: '0.9375rem', color: 'var(--gold)' }}>₹52 Lakhs across 3 outlets · 38 days</p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {['Punjab Grill Restaurant — 5-outlet QSR rollout, Delhi NCR', 'Café Coffee Day — 12 café kitchen setups across India', 'Barbeque Nation — 3 outlet kitchens, Delhi NCR', 'Mainland China — Complete restaurant kitchen, Bangalore'].map(p => (
              <div key={p} className="flex items-start gap-2">
                <CheckCircle2 size={12} style={{ color: 'var(--gold)', flexShrink: 0, marginTop: '0.15rem' }} aria-hidden="true" />
                <span style={{ fontFamily: 'var(--font-inter)', fontSize: '0.875rem', color: 'var(--text-body)' }}>{p}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <BrandsGrid />
      <CitiesGrid serviceSlug="restaurant-kitchen-setup" />
      <ServiceTestimonial testimonial={TESTIMONIAL} />
      <ServiceFAQ faqs={FAQS} heading="Frequently Asked Questions — Restaurant Kitchen Setup" />
      <ServiceCTA
        serviceName="Restaurant Kitchen"
        subtext="Share your restaurant type, cuisine, cover count, and kitchen size. We'll send a complete equipment list, layout sketch, and itemised budget within 24 hours."
      />
    </>
  );
}
