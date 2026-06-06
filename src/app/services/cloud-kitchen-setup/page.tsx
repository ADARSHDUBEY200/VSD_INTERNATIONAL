import type { Metadata } from 'next';
import Link from 'next/link';
import { Truck, Shield, Clock, CheckCircle2, ArrowRight, MessageCircle, FileDown, Flame, Refrigerator, Wind, Layers, Settings, Package } from 'lucide-react';
import ServiceBreadcrumb   from '@/components/services/ServiceBreadcrumb';
import ServiceFAQ          from '@/components/services/ServiceFAQ';
import ServiceTestimonial  from '@/components/services/ServiceTestimonial';
import BrandsGrid          from '@/components/services/BrandsGrid';
import CitiesGrid          from '@/components/services/CitiesGrid';
import ServiceCTA          from '@/components/services/ServiceCTA';

export const metadata: Metadata = {
  title: 'Cloud Kitchen Setup Equipment & Design India | VSD International',
  description:
    'Complete cloud kitchen setup in India — equipment, design, installation. Ghost kitchen, dark kitchen & multi-brand cloud kitchen setups for Zomato/Swiggy operators. Delhi factory. ₹5L–₹45L budgets.',
  alternates: { canonical: 'https://vsdinternational.com/services/cloud-kitchen-setup/' },
  openGraph: {
    url: 'https://vsdinternational.com/services/cloud-kitchen-setup/',
    title: 'Cloud Kitchen Setup Equipment & Design India | VSD International',
    description: 'Cloud kitchen equipment list, design & installation. Ghost kitchen setups for Zomato & Swiggy operators. Multi-brand dark kitchen equipment. From ₹5 Lakhs.',
    images: [{ url: 'https://vsdinternational.com/og-image.jpg', width: 1200, height: 630 }],
  },
};

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    { '@type': 'Service', name: 'Cloud Kitchen Setup & Equipment', provider: { '@type': 'LocalBusiness', name: 'VSD International' }, areaServed: { '@type': 'Country', name: 'India' }, serviceType: 'Cloud Kitchen Equipment', aggregateRating: { '@type': 'AggregateRating', ratingValue: '4.9', reviewCount: '312', bestRating: '5' } },
    { '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://vsdinternational.com' }, { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://vsdinternational.com/services/' }, { '@type': 'ListItem', position: 3, name: 'Cloud Kitchen Setup', item: 'https://vsdinternational.com/services/cloud-kitchen-setup/' }] },
    { '@type': 'FAQPage', mainEntity: FAQS.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) },
  ],
};

/* Cloud Kitchen Equipment Checklist */
const CHECKLIST = [
  { section: 'Cooking Equipment', items: ['Commercial cooking range (4-burner)', 'Convection oven or deck oven', 'Commercial fryer (8–12L)', 'Salamander / overhead broiler', 'Microwave (commercial grade)', 'Contact grill / plancha'] },
  { section: 'Cold Storage', items: ['Upright refrigerator (400–600L)', 'Undercounter chiller (prep table)', 'Chest freezer or upright freezer', 'Blast chiller (optional for bakery)'] },
  { section: 'Food Preparation', items: ['Food processor (Robot Coupe)', 'Mixer (planetary or hand)', 'Vegetable cutter / mandoline', 'Weighing scales (x2)', 'Dough roller (for pizza / paratha)'] },
  { section: 'SS Fabrication', items: ['Custom SS worktable (with sink)', 'Wall shelving (2–3 tiers)', 'Pickup counter / pass-through', 'Exhaust hood + exhaust fan', 'Utensil racks & pot rails'] },
  { section: 'Packaging & Service', items: ['Hot case / warming display', 'Packaging sealer (heat seal)', 'Label printer (Zomato/Swiggy ready)', 'Insulated delivery bags', 'POS system integration point'] },
];

/* Cost Breakdown Table */
const COST_TABLE = [
  { type: 'Basic Cloud Kitchen (1 brand)',       range: '₹5 – ₹8 Lakhs',   details: '100 sqft · 1 cooking zone · 50 orders/day capacity' },
  { type: 'Mid-Range Cloud Kitchen (2–3 brands)', range: '₹12 – ₹18 Lakhs', details: '200–300 sqft · 2 cooking zones · 150 orders/day' },
  { type: 'Premium Multi-Brand Kitchen (5+ brands)', range: '₹25 – ₹45 Lakhs', details: '400–600 sqft · 5+ cooking zones · 400+ orders/day' },
];

const FAQS = [
  { q: 'What equipment is needed to start a cloud kitchen in India?', a: 'A cloud kitchen requires: (1) Cooking equipment — commercial cooking range (4-burner minimum), convection oven, commercial fryer, salamander; (2) Refrigeration — upright commercial refrigerator (400–600L), undercounter chiller, chest freezer; (3) Food preparation — food processor, mixer, vegetable cutter; (4) Stainless steel fabrication — worktable with sink, shelving, exhaust hood; (5) Packaging area — heat sealer, label printer, dispatch counter; (6) Exhaust & ventilation — kitchen exhaust hood, exhaust fan, and fresh air unit. The exact list depends on your cuisine type and order volume. VSD International provides a free, customised equipment checklist for your cloud kitchen concept.' },
  { q: 'What is the total cost to set up a cloud kitchen in India?', a: 'Cloud kitchen setup costs in India range from: Basic setup (1 brand, 50 orders/day) — ₹5–8 lakhs; Mid-range (2–3 brands, 150 orders/day) — ₹12–18 lakhs; Premium multi-brand (5+ brands, 400+ orders/day) — ₹25–45 lakhs. These costs include equipment, SS fabrication, exhaust system, and installation but exclude civil work (kitchen slab, gas pipeline, electricity upgrade) which is typically ₹2–8 lakhs additionally. VSD International provides transparent, itemised quotes — no hidden costs.' },
  { q: 'How long does it take to set up a cloud kitchen?', a: 'A basic cloud kitchen (1–2 brands) takes 10–18 days from equipment order to commissioning. A mid-range multi-brand cloud kitchen takes 18–28 days. Timeline: equipment order processing (3–5 days), delivery to site (2–3 days), installation (4–10 days), commissioning & testing (1–2 days), Zomato/Swiggy inspection readiness (1–2 days). VSD International can fast-track urgent cloud kitchen setups — we have set up operational cloud kitchens in as little as 9 working days.' },
  { q: 'What is the difference between a cloud kitchen, dark kitchen, and ghost kitchen?', a: 'All three terms refer to the same concept — a delivery-only commercial kitchen with no dine-in facility: Cloud kitchen is the Indian industry term (used by Zomato, Swiggy, and operators). Dark kitchen is the UK/Europe term for the same concept. Ghost kitchen is the US term. Multi-brand cloud kitchen (shared kitchen) is a facility where multiple food brands operate from separate cooking zones within one kitchen. Virtual restaurant is a brand that exists only online (delivery) without a physical restaurant. VSD International sets up all types — single-brand cloud kitchens, multi-brand shared facilities, and central production kitchens.' },
  { q: 'Is a FSSAI licence required for a cloud kitchen?', a: 'Yes — cloud kitchens require a FSSAI State Licence (for turnover above ₹12 lakhs per year) or Basic Registration (below ₹12 lakhs). Additionally, you need: (1) FIRE NOC from the local fire department (required by Zomato and Swiggy for listing approval), (2) GST registration, (3) Trade licence from the local municipal body, (4) Zomato/Swiggy partner onboarding approval — which requires an inspection of your kitchen. VSD International\'s kitchen setups are designed to pass Zomato/Swiggy kitchen inspections on the first visit.' },
  { q: 'Can I use domestic kitchen equipment in a cloud kitchen?', a: 'No — domestic kitchen equipment is not designed for commercial use and creates serious problems: (1) Safety — domestic appliances don\'t meet commercial fire and gas safety standards; (2) Durability — domestic appliances fail within weeks under commercial workloads; (3) Capacity — domestic burners deliver 4,000–8,000 BTU versus commercial burners at 18,000–35,000 BTU; (4) Compliance — Zomato/Swiggy inspectors check for commercial-grade equipment; (5) Insurance — food business insurance typically requires commercial-grade equipment. A commercial cooking range costs ₹35,000–₹75,000 — a worthwhile investment compared to frequent replacement of failed domestic appliances.' },
  { q: 'Does VSD International provide a cloud kitchen equipment checklist?', a: 'Yes — VSD International provides a free, customised cloud kitchen equipment checklist based on your cuisine type, order volume, and kitchen size. The checklist covers cooking equipment, refrigeration, food prep, SS fabrication, exhaust system, packaging area, and optional equipment. We also provide a complete layout drawing for your space showing optimal equipment placement, workflow zones, and utility connection points. WhatsApp us at +91-9250346370 with your cloud kitchen concept details to receive the free checklist.' },
];

const TESTIMONIAL = {
  quote: 'VSD International set up our 6-brand cloud kitchen hub in Mumbai in just 22 days. The layout was perfectly optimised for our Zomato and Swiggy operations — separate cooking zones for each brand, shared cold storage, and a pickup counter designed for delivery riders. Passed the Swiggy kitchen inspection on the first visit.',
  name: 'Ankit Sharma',
  title: 'Co-Founder',
  company: 'Rebel Foods Cloud Hub',
  city: 'Mumbai',
  rating: 5,
};

export default function CloudKitchenSetupPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <ServiceBreadcrumb crumbs={[{ label: 'Services', href: '/services' }, { label: 'Cloud Kitchen Setup' }]} />

      {/* §1 Hero */}
      <section className="grain-overlay" style={{ background: 'var(--charcoal-warm)', padding: '5rem 0 4.5rem', position: 'relative', borderBottom: '1px solid rgba(201,168,76,0.15)' }}>
        <div aria-hidden="true" style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '2px', background: 'linear-gradient(90deg, transparent 5%, var(--gold-bright) 35%, var(--gold) 65%, transparent 95%)' }} />
        <div className="container mx-auto" style={{ maxWidth: '80rem', padding: '0 1.25rem' }}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="section-label" style={{ marginBottom: '1rem' }}>Fastest Growing Vertical</p>
              <h1 style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(1.875rem, 3.8vw, 3rem)', fontWeight: 700, lineHeight: 1.1, letterSpacing: '-0.02em', color: 'var(--text-on-dark)', marginBottom: '1.25rem' }}>
                Cloud Kitchen Setup Equipment &amp;{' '}
                <em className="gold-shimmer" style={{ fontStyle: 'italic', fontWeight: 800 }}>Design India</em>
              </h1>
              <div aria-hidden="true" style={{ width: 60, height: 3, background: 'linear-gradient(90deg, var(--gold-bright), var(--gold), var(--gold-deep))', borderRadius: 2, marginBottom: '1.5rem' }} />
              <p style={{ fontFamily: 'var(--font-inter)', fontSize: '1.0625rem', color: 'rgba(245,240,232,0.7)', lineHeight: 1.75, marginBottom: '1.5rem' }}>
                Complete cloud kitchen setup for Zomato, Swiggy &amp; Rebel Foods operators. Single-brand ghost kitchens to 12-brand shared production hubs — equipment, layout design, installation, and Zomato/Swiggy inspection-ready commissioning. Setups from ₹5 Lakhs.
              </p>
              <div className="flex flex-wrap gap-5" style={{ marginBottom: '2rem' }}>
                {[{ icon: Truck, text: 'Zomato & Swiggy Ready' }, { icon: Clock, text: 'Setup in 10–22 Days' }, { icon: Shield, text: 'Inspection Compliant' }].map(({ icon: Icon, text }) => (
                  <div key={text} className="flex items-center gap-2">
                    <Icon size={15} style={{ color: 'var(--gold)', flexShrink: 0 }} aria-hidden="true" />
                    <span style={{ fontFamily: 'var(--font-inter)', fontSize: '0.875rem', fontWeight: 600, color: 'rgba(245,240,232,0.75)' }}>{text}</span>
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap gap-3">
                <a href="https://wa.me/919250346370?text=Hi%20VSD%2C%20I%20need%20cloud%20kitchen%20setup.%20Please%20share%20equipment%20checklist%20and%20pricing." target="_blank" rel="noopener noreferrer" className="btn-gold inline-flex items-center gap-2">
                  <MessageCircle size={15} aria-hidden="true" /> Get Cloud Kitchen Checklist
                </a>
                <Link href="/services/kitchen-layout-design" className="btn-ghost-dark inline-flex items-center gap-2">
                  Kitchen Layout Design <ArrowRight size={14} aria-hidden="true" />
                </Link>
              </div>
            </div>
            {/* Cost summary */}
            <div>
              <p style={{ fontFamily: 'var(--font-inter)', fontWeight: 700, fontSize: '0.75rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '1rem' }}>Cloud Kitchen Setup Cost — India</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {COST_TABLE.map(({ type, range, details }) => (
                  <div key={type} className="rounded-xl" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(201,168,76,0.15)', padding: '1.25rem 1.5rem' }}>
                    <p style={{ fontFamily: 'var(--font-inter)', fontWeight: 600, fontSize: '0.875rem', color: 'var(--text-on-dark)', marginBottom: '0.375rem' }}>{type}</p>
                    <p style={{ fontFamily: 'var(--font-playfair)', fontWeight: 800, fontSize: '1.25rem', color: 'var(--gold-bright)', marginBottom: '0.25rem' }}>{range}</p>
                    <p style={{ fontFamily: 'var(--font-inter)', fontSize: '0.8125rem', color: 'rgba(245,240,232,0.45)' }}>{details}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* §2 Equipment Checklist */}
      <section aria-labelledby="checklist-heading" style={{ background: '#FFFFFF', padding: '5.5rem 0' }}>
        <div className="container mx-auto" style={{ maxWidth: '80rem', padding: '0 1.25rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '3.25rem' }}>
            <p className="section-label" style={{ marginBottom: '0.75rem' }}>Complete Equipment List</p>
            <h2 id="checklist-heading" style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', color: 'var(--text-dark)', lineHeight: 1.12 }}>
              Cloud Kitchen Equipment Checklist — Everything You Need
            </h2>
            <div aria-hidden="true" style={{ width: 56, height: 3, background: 'linear-gradient(90deg, var(--gold-bright), var(--gold), var(--gold-deep))', borderRadius: 2, margin: '1.125rem auto 0' }} />
            <p style={{ marginTop: '1.25rem', fontFamily: 'var(--font-inter)', fontSize: '0.9375rem', color: 'var(--text-body)', lineHeight: 1.72, maxWidth: 620, margin: '1.25rem auto 0' }}>
              Complete equipment list for a Zomato/Swiggy-compliant cloud kitchen — cooking, cold storage, food prep, SS fabrication, and packaging.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {CHECKLIST.map(({ section, items }) => (
              <div key={section} className="card-lift rounded-2xl" style={{ background: 'var(--surface)', border: '1px solid var(--border)', padding: '1.75rem' }}>
                <h3 style={{ fontFamily: 'var(--font-playfair)', fontWeight: 700, fontSize: '1rem', color: 'var(--text-dark)', marginBottom: '1rem', lineHeight: 1.25 }}>{section}</h3>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  {items.map(item => (
                    <li key={item} className="flex items-start gap-2">
                      <CheckCircle2 size={13} style={{ color: 'var(--gold)', flexShrink: 0, marginTop: '0.2rem' }} aria-hidden="true" />
                      <span style={{ fontFamily: 'var(--font-inter)', fontSize: '0.875rem', color: 'var(--text-body)', lineHeight: 1.5 }}>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div style={{ marginTop: '2.5rem', textAlign: 'center' }}>
            <a
              href="https://wa.me/919250346370?text=Hi%20VSD%2C%20please%20share%20the%20cloud%20kitchen%20equipment%20checklist%20for%20my%20cloud%20kitchen."
              target="_blank" rel="noopener noreferrer"
              className="btn-gold inline-flex items-center gap-2"
            >
              <FileDown size={15} aria-hidden="true" />
              Get Free Cloud Kitchen Equipment Checklist
            </a>
          </div>
        </div>
      </section>

      {/* §3 Why VSD */}
      <section aria-labelledby="why-heading" className="grain-overlay" style={{ background: 'var(--charcoal-light)', padding: '5rem 0', borderTop: '1px solid rgba(201,168,76,0.1)' }}>
        <div className="container mx-auto" style={{ maxWidth: '80rem', padding: '0 1.25rem' }}>
          <h2 id="why-heading" style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', color: 'var(--text-on-dark)', lineHeight: 1.12, textAlign: 'center', marginBottom: '3rem' }}>
            Why Cloud Kitchen Operators Choose VSD International
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {[
              { title: 'Zomato & Swiggy Inspection Ready', body: 'We design cloud kitchen layouts and specify equipment that passes Zomato and Swiggy partner kitchen inspections on the first visit — FIRE NOC compliant exhaust, adequate refrigeration, FSSAI-compliant food handling flow, and proper waste management.' },
              { title: 'Fast Setup — 10 to 22 Days', body: 'Cloud kitchen operators can\'t wait 60 days for a kitchen setup. Our pre-fabricated SS components, stocked equipment inventory, and dedicated installation team deliver most cloud kitchens in 10–22 days from order.' },
              { title: 'Multi-Brand Layout Expertise', body: 'We specialise in multi-brand cloud kitchen layouts — separate cooking zones, shared refrigeration, independent pickup counters, and ventilation planning for 2–12 food brands in a shared kitchen space.' },
              { title: 'Budget-Conscious Packages', body: 'Cloud kitchen operators are cost-sensitive. We offer curated equipment packages at ₹5L, ₹10L, and ₹18L that include everything needed — no over-specifying, no unnecessary equipment, transparent pricing.' },
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

      {/* §4 Featured Project */}
      <section style={{ background: '#FFFFFF', padding: '5rem 0', borderTop: '1px solid var(--border)' }}>
        <div className="container mx-auto" style={{ maxWidth: '80rem', padding: '0 1.25rem' }}>
          <h2 style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(1.5rem, 2.4vw, 2rem)', color: 'var(--text-dark)', marginBottom: '2rem' }}>Recent Cloud Kitchen Setup Projects</h2>
          <div className="rounded-2xl overflow-hidden" style={{ border: '1px solid var(--border)', marginBottom: '2rem' }}>
            <div style={{ background: 'linear-gradient(135deg, var(--charcoal) 0%, var(--charcoal-mid) 100%)', height: 160, display: 'flex', alignItems: 'center', justifyContent: 'center' }} aria-hidden="true">
              <Truck size={48} style={{ color: 'rgba(201,168,76,0.3)' }} strokeWidth={1} />
            </div>
            <div style={{ padding: '2rem' }}>
              <span style={{ fontFamily: 'var(--font-inter)', fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--gold)' }}>Featured — Multi-Brand Cloud Kitchen</span>
              <h3 style={{ fontFamily: 'var(--font-playfair)', fontWeight: 700, fontSize: '1.375rem', color: 'var(--text-dark)', margin: '0.625rem 0 0.875rem' }}>Rebel Foods Cloud Hub — Mumbai, 12 Brands</h3>
              <p style={{ fontFamily: 'var(--font-inter)', fontSize: '0.9375rem', color: 'var(--text-body)', lineHeight: 1.72, maxWidth: 680 }}>12-brand cloud kitchen production hub for Rebel Foods (Faasos, Behrouz Biryani, The Good Bowl). 600 sqft, 12 independent cooking zones, shared walk-in cold room, individual pickup counters for each brand, FIRE NOC compliant exhaust. Completed in 22 days. Processing 800+ orders/day.</p>
              <p style={{ marginTop: '1rem', fontFamily: 'var(--font-inter)', fontWeight: 700, fontSize: '0.9375rem', color: 'var(--gold)' }}>Project Value: ₹42 Lakhs · Setup: 22 days</p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {['EatFit Cloud Kitchen, Bangalore — 4-brand setup · ₹14L', 'FreshMenu Production Hub, Hyderabad — 8-brand · ₹28L', 'Box8 Cloud Kitchen, Pune — 3-brand setup · ₹11L', 'Biryani Blues Hub, Delhi — Single-brand · ₹7.5L'].map(p => (
              <div key={p} className="flex items-start gap-2">
                <CheckCircle2 size={12} style={{ color: 'var(--gold)', flexShrink: 0, marginTop: '0.15rem' }} aria-hidden="true" />
                <span style={{ fontFamily: 'var(--font-inter)', fontSize: '0.875rem', color: 'var(--text-body)' }}>{p}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* §5 Brands */}
      <BrandsGrid />

      {/* §6 Cities */}
      <CitiesGrid serviceSlug="cloud-kitchen-setup" />

      {/* §7 Testimonial */}
      <ServiceTestimonial testimonial={TESTIMONIAL} />

      {/* §8 FAQ */}
      <ServiceFAQ faqs={FAQS} heading="Frequently Asked Questions — Cloud Kitchen Setup" />

      {/* §9 CTA */}
      <ServiceCTA
        serviceName="Cloud Kitchen"
        subtext="Share your cloud kitchen concept — number of brands, cuisine types, location, and daily order target. We'll send a customised equipment list, layout sketch, and itemised cost within 24 hours."
      />
    </>
  );
}
