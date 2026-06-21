import type { Metadata } from 'next';
import Link from 'next/link';
import { Cake, Shield, Clock, CheckCircle2, ArrowRight, MessageCircle, Flame, Refrigerator, Layers, Package, Settings, ChefHat } from 'lucide-react';
import ServiceBreadcrumb   from '@/components/services/ServiceBreadcrumb';
import ServiceFAQ          from '@/components/services/ServiceFAQ';
import ServiceTestimonial  from '@/components/services/ServiceTestimonial';
import BrandsGrid          from '@/components/services/BrandsGrid';
import CitiesGrid          from '@/components/services/CitiesGrid';
import ServiceCTA          from '@/components/services/ServiceCTA';

export const metadata: Metadata = {
  title: 'Commercial Bakery Equipment Supplier India | VSD International',
  description:
    'Commercial bakery equipment supplier India — deck ovens, spiral mixers, proofers, blast freezers, sheeting machines & packaging equipment for bakery chains, cloud bakeries & industrial bakeries.',
  alternates: { canonical: 'https://vsdinternational.com/services/bakery-equipment/' },
  openGraph: {
    url: 'https://vsdinternational.com/services/bakery-equipment/',
    title: 'Commercial Bakery Equipment Supplier India | VSD International',
    description: 'Industrial bakery equipment — deck ovens, spiral mixers, proofers, blast freezers & sheeting machines. Bakery chains, cloud bakeries & institutional bakeries. ISO 9001 certified.',
    images: [{ url: 'https://vsdinternational.com/og-image.jpg', width: 1200, height: 630 }],
  },
};

const FAQS = [
  { q: 'What equipment is needed for a commercial bakery in India?', a: 'A commercial bakery requires: Baking ovens (deck oven for artisan breads, convection oven for pastries, rack oven for volume production), Mixing equipment (spiral dough mixer for bread, planetary mixer for cakes and pastries), Proofing equipment (retarder proofer for controlled fermentation), Cold storage (blast chiller for rapid cooling, refrigerated display for retail), Dough handling (dough sheeter, divider and rounder for bread rolls), Finishing equipment (cream whipper, decoration tools, chocolate tempering machine for pastry), Packaging (bread slicer, heat seal packaging, label printer). The specific equipment depends on your product range and production volume.' },
  { q: 'What is the cost of a commercial bakery setup in India?', a: 'Commercial bakery setup costs in India: Small retail bakery or patisserie — ₹12–28 lakhs; Cloud bakery (delivery-only) — ₹10–20 lakhs; Satellite production kitchen for bakery chain — ₹8–15 lakhs per outlet; Central production bakery (10+ outlets supply) — ₹35–80 lakhs; Industrial bakery (automated, large-scale) — ₹50 lakhs to ₹3 crore. Costs include all bakery equipment, SS fabrication, installation, and training. VSD International provides itemised quotes based on your product range, daily production volume, and outlet structure.' },
  { q: 'What type of oven is best for a commercial bakery in India?', a: 'The best commercial bakery oven depends on your product range: Deck oven — best for artisan breads, baguettes, and pizza. Steam-injected decks produce authentic crust texture. Convection oven — best for pastries, muffins, cookies, and café-style baked goods. Consistent hot air circulation gives even browning. Rack oven — best for high-volume production of rolls, bread loaves, and pastries. 16–32 trays per cycle at 25–40 minutes = very high output. Rotating rack oven — premium choice for even browning and high output. For cloud bakeries and delivery-focused operations, a deck oven (1–2 decks) combined with a convection oven covers 90% of product requirements.' },
  { q: 'Do you supply imported bakery equipment in India?', a: 'Yes — VSD International is the authorised Indian dealer for several international bakery equipment brands including Rational (combi ovens for bakery integration), Robot Coupe (food processors, blixers for fillings), Waring (specialty equipment), and Vitamix (for bakery beverage integration). For European bakery equipment brands (Rofco, Sveba-Dahlen, WP Bakery), we can source and supply through our import network. We also recommend and supply reputable domestic bakery equipment brands that offer good value — Sinmag, Mecnosud, and Bongard-equivalent products.' },
  { q: 'What is the difference between a spiral mixer and a planetary mixer?', a: 'Spiral dough mixer: Designed specifically for bread dough. The spiral agitator and rotating bowl create high-intensity kneading that develops strong gluten structure. Available 10L–250L. Best for bread, pizza dough, and high-hydration doughs. Produces better-textured bread than planetary mixers. Planetary mixer: Versatile multi-purpose mixer. Interchangeable attachments (dough hook, flat beater, whisk). Best for cakes, pastries, cookies, mashed potatoes, and light bread doughs. Available 10L–80L. Cannot handle high-gluten, high-density bread doughs like a spiral mixer. For commercial bakeries making bread: use a spiral mixer. For patisseries making cakes and pastries: use a planetary mixer. A bakery making both will need both types.' },
  { q: 'What is a blast chiller and why do bakeries need one?', a: 'A blast chiller rapidly reduces the temperature of freshly baked goods from +65°C to +3°C within 90 minutes (versus 4–6 hours for ambient cooling). Bakeries need blast chillers for: (1) Food safety — rapid cooling prevents bacterial growth in the 60°C–20°C danger zone; (2) Quality — rapid chilling locks in moisture, preventing condensation that makes pastries soggy; (3) Production efficiency — blast chilled products can be packaged immediately instead of waiting hours to cool; (4) FSSAI compliance — food service businesses must demonstrate safe cooling procedures; (5) Cloud bakery operations — pre-bake, blast chill, and finish-bake to order reduces production time per order. Blast chillers range from ₹85,000 (10kg capacity) to ₹5,50,000 (40kg capacity).' },
  { q: 'Can you set up a central production kitchen for a bakery chain?', a: 'Yes — VSD International specialises in central production kitchen setups for bakery chains. A central production kitchen (CPK) for a bakery chain produces par-baked or fully baked products at scale, then distributes to retail outlets. Our CPK bakery setup includes: Large-capacity rack ovens or tunnel ovens for high output, industrial spiral mixers (80L–250L), retarder proofing chambers, blast freezers for distribution-ready products, packaging lines (slicers, heat sealers, label printers), and refrigerated outbound storage. We have set up CPKs for 5–outlet to 50-outlet bakery chains. Contact us with your outlet count, daily production volume, and product range for a tailored CPK proposal.' },
];

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    { '@type': 'Service', name: 'Commercial Bakery Equipment Supply & Installation', provider: { '@type': 'LocalBusiness', name: 'VSD International' }, areaServed: { '@type': 'Country', name: 'India' }, serviceType: 'Bakery Equipment', aggregateRating: { '@type': 'AggregateRating', ratingValue: '5', reviewCount: '312', bestRating: '5' } },
    { '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://vsdinternational.com' }, { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://vsdinternational.com/services/' }, { '@type': 'ListItem', position: 3, name: 'Bakery Equipment', item: 'https://vsdinternational.com/services/bakery-equipment/' }] },
    { '@type': 'FAQPage', mainEntity: FAQS.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) },
  ],
};

const EQUIPMENT_CATEGORIES = [
  { icon: Flame, title: 'Baking Ovens', items: ['Deck ovens (1–4 deck, electric & gas)', 'Convection ovens (commercial grade)', 'Rack ovens (6 & 10 tray)', 'Rotating rack ovens (16–32 tray)', 'Tunnel ovens (for industrial volume)', 'Pizza ovens (stone & conveyor)', 'Tandoor ovens (for naan bakeries)'] },
  { icon: Settings, title: 'Mixing Equipment', items: ['Spiral dough mixers (10L–250L)', 'Planetary mixers (10L–80L)', 'Horizontal dough mixers (industrial)', 'Dough dividers & rounders', 'Dough sheeters / laminators', 'Croissant & puff pastry sheeters', 'Heavy-duty bread mixers'] },
  { icon: Package, title: 'Proofing & Fermentation', items: ['Retarder proofers (10–30 tray)', 'Fermentation chambers', 'Proving cabinets (heated)', 'Sourdough fermentation tanks', 'Baguette proofing couches', 'Automated proofing systems'] },
  { icon: Refrigerator, title: 'Cold Storage & Blast Freezing', items: ['Blast chillers (10kg–60kg capacity)', 'Blast freezers (IQF for industrial)', 'Walk-in chiller for dough storage', 'Refrigerated display counters', 'Cake display chillers', 'Gelato & ice cream display cases'] },
  { icon: Layers, title: 'Decorating & Finishing', items: ['Cream whippers & fillers', 'Cake decorating turntables (electric)', 'Chocolate tempering machines', 'Enrober & coating systems', 'Airbrush compressors for decoration', 'Fondant rollers & cutters'] },
  { icon: ChefHat, title: 'Packaging Equipment', items: ['Bread slicer (horizontal & vertical)', 'Heat shrink tunnels', 'Flow wrapping machines', 'Tray sealers for pastry packaging', 'Label printers & applicators', 'Checkweighers for portioning'] },
];

const BAKERY_TYPES = [
  { type: 'Retail Bakery / Patisserie', budget: '₹12–28L', desc: 'Artisan breads, cakes & pastries for walk-in retail. Compact deck oven, spiral mixer, proofer, display counter.' },
  { type: 'Cloud Bakery (Delivery-Only)', budget: '₹10–20L', desc: 'Online bakery on Zomato/Swiggy. High-output ovens, blast chiller, packaging equipment, cold storage.' },
  { type: 'Bakery Chain (5+ Outlets)',   budget: '₹8–15L per outlet', desc: 'Central production kitchen + satellite outlets. Rack oven, industrial mixer, blast freezer, delivery packaging.' },
  { type: 'Industrial Bakery',            budget: '₹50L–3Cr',   desc: 'Large-scale bread/biscuit/cake production. Tunnel ovens, continuous mixer, automated packaging lines.' },
];

const TESTIMONIAL = {
  quote: 'VSD International understood our cloud bakery model immediately. The deck oven, spiral mixer, and blast chiller combination they recommended is perfectly matched to our Zomato volumes. Our bake-to-order production is running like clockwork — 180 orders a day with a 4-person team. The equipment quality is outstanding.',
  name: 'Pooja Agarwal',
  title: 'Founder',
  company: 'Brown Sugar Cloud Bakery',
  city: 'Delhi NCR',
  rating: 5,
};

export default function BakeryEquipmentPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <ServiceBreadcrumb crumbs={[{ label: 'Services', href: '/services' }, { label: 'Bakery Equipment' }]} />

      {/* §1 Hero */}
      <section className="grain-overlay" style={{ background: 'var(--charcoal-warm)', padding: '5rem 0 4.5rem', position: 'relative', borderBottom: '1px solid rgba(201,168,76,0.15)' }}>
        <div aria-hidden="true" style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '2px', background: 'linear-gradient(90deg, transparent 5%, var(--gold-bright) 35%, var(--gold) 65%, transparent 95%)' }} />
        <div className="container mx-auto" style={{ maxWidth: '80rem', padding: '0 1.25rem' }}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="section-label" style={{ marginBottom: '1rem' }}>High Volume Vertical</p>
              <h1 style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(1.875rem, 3.8vw, 3rem)', fontWeight: 700, lineHeight: 1.1, letterSpacing: '-0.02em', color: 'var(--text-on-dark)', marginBottom: '1.25rem' }}>
                Commercial Bakery Equipment{' '}
                <em className="gold-shimmer" style={{ fontStyle: 'italic', fontWeight: 800 }}>Supplier India</em>
              </h1>
              <div aria-hidden="true" style={{ width: 60, height: 3, background: 'linear-gradient(90deg, var(--gold-bright), var(--gold), var(--gold-deep))', borderRadius: 2, marginBottom: '1.5rem' }} />
              <p style={{ fontFamily: 'var(--font-inter)', fontSize: '1.0625rem', color: 'rgba(245,240,232,0.7)', lineHeight: 1.75, marginBottom: '1.5rem' }}>
                Industrial &amp; commercial bakery equipment for retail bakeries, cloud bakeries, bakery chains, and large-scale industrial production. Deck ovens, spiral mixers, proofers, blast freezers, and complete bakery setups from Delhi factories. Setups from ₹10 Lakhs.
              </p>
              <div className="flex flex-wrap gap-5" style={{ marginBottom: '2rem' }}>
                {[{ icon: Cake, text: '50+ Bakery Projects' }, { icon: Shield, text: 'FSSAI Compliant' }, { icon: Clock, text: '15–30 Day Setup' }].map(({ icon: Icon, text }) => (
                  <div key={text} className="flex items-center gap-2">
                    <Icon size={15} style={{ color: 'var(--gold)', flexShrink: 0 }} aria-hidden="true" />
                    <span style={{ fontFamily: 'var(--font-inter)', fontSize: '0.875rem', fontWeight: 600, color: 'rgba(245,240,232,0.75)' }}>{text}</span>
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap gap-3">
                <a href="https://wa.me/919250346370?text=Hi%20VSD%2C%20I%20need%20commercial%20bakery%20equipment.%20Please%20share%20equipment%20list%20and%20pricing." target="_blank" rel="noopener noreferrer" className="btn-gold inline-flex items-center gap-2">
                  <MessageCircle size={15} aria-hidden="true" /> Get Bakery Equipment Quote
                </a>
                <Link href="/services/imported-kitchen-equipment" className="btn-ghost-dark inline-flex items-center gap-2">
                  Imported Brands <ArrowRight size={14} aria-hidden="true" />
                </Link>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-3">
              {BAKERY_TYPES.map(({ type, budget, desc }) => (
                <div key={type} className="rounded-lg" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(201,168,76,0.12)', padding: '1rem 1.25rem' }}>
                  <div className="flex items-center justify-between gap-3 mb-0.5">
                    <p style={{ fontFamily: 'var(--font-inter)', fontWeight: 700, fontSize: '0.9375rem', color: 'var(--text-on-dark)' }}>{type}</p>
                    <span style={{ fontFamily: 'var(--font-playfair)', fontWeight: 800, fontSize: '0.875rem', color: 'var(--gold-bright)', whiteSpace: 'nowrap' }}>{budget}</span>
                  </div>
                  <p style={{ fontFamily: 'var(--font-inter)', fontSize: '0.8125rem', color: 'rgba(245,240,232,0.5)' }}>{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* §2 Equipment Range */}
      <section aria-labelledby="offer-heading" style={{ background: '#FFFFFF', padding: '5.5rem 0' }}>
        <div className="container mx-auto" style={{ maxWidth: '80rem', padding: '0 1.25rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '3.25rem' }}>
            <p className="section-label" style={{ marginBottom: '0.75rem' }}>Complete Bakery Equipment Range</p>
            <h2 id="offer-heading" style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', color: 'var(--text-dark)', lineHeight: 1.12 }}>
              Commercial Bakery Equipment — Full Range
            </h2>
            <div aria-hidden="true" style={{ width: 56, height: 3, background: 'linear-gradient(90deg, var(--gold-bright), var(--gold), var(--gold-deep))', borderRadius: 2, margin: '1.125rem auto 0' }} />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {EQUIPMENT_CATEGORIES.map(({ icon: Icon, title, items }) => (
              <div key={title} className="card-lift rounded-2xl" style={{ background: 'var(--surface)', border: '1px solid var(--border)', padding: '1.75rem' }}>
                <div style={{ width: 44, height: 44, borderRadius: 10, background: 'rgba(201,168,76,0.08)', border: '1px solid rgba(201,168,76,0.18)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }} aria-hidden="true">
                  <Icon size={20} style={{ color: 'var(--gold)' }} strokeWidth={1.6} />
                </div>
                <h3 style={{ fontFamily: 'var(--font-playfair)', fontWeight: 700, fontSize: '1.0625rem', color: 'var(--text-dark)', marginBottom: '0.875rem' }}>{title}</h3>
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
            Why Choose VSD International for Commercial Bakery Equipment
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {[
              { title: 'Bakery-Specific Expertise', body: 'We understand the unique requirements of commercial bakery production — dough temperatures, proofing humidity, oven deck temperatures, blast chill cycles. Our bakery equipment recommendations are based on your specific product range, not generic kitchen equipment lists.' },
              { title: 'Central Production Kitchen Design', body: 'We design and equip central production kitchens for multi-outlet bakery chains — standardised production, consistent product quality, and efficient distribution logistics. Setups for 5-outlet to 50-outlet bakery chains.' },
              { title: 'Cloud Bakery Specialists', body: 'Growing segment: cloud bakeries operating on Zomato and Swiggy. We set up compact, high-output cloud bakery kitchens — bake-to-order production optimised for 100–300 daily delivery orders without a retail storefront.' },
              { title: 'Imported Brand Integration', body: 'For premium bakery equipment (Rational combi, Robot Coupe, Vitamix), we are authorised Indian dealers. We integrate imported brands seamlessly with domestic equipment for the best price-performance combination.' },
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
          <h2 style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(1.5rem, 2.4vw, 2rem)', color: 'var(--text-dark)', marginBottom: '2rem' }}>Recent Commercial Bakery Equipment Projects</h2>
          <div className="rounded-2xl overflow-hidden" style={{ border: '1px solid var(--border)', marginBottom: '2rem' }}>
            <div style={{ background: 'linear-gradient(135deg, var(--charcoal) 0%, var(--charcoal-mid) 100%)', height: 160, display: 'flex', alignItems: 'center', justifyContent: 'center' }} aria-hidden="true">
              <Cake size={48} style={{ color: 'rgba(201,168,76,0.3)' }} strokeWidth={1} />
            </div>
            <div style={{ padding: '2rem' }}>
              <span style={{ fontFamily: 'var(--font-inter)', fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--gold)' }}>Featured — Bakery Chain Central Production</span>
              <h3 style={{ fontFamily: 'var(--font-playfair)', fontWeight: 700, fontSize: '1.375rem', color: 'var(--text-dark)', margin: '0.625rem 0 0.875rem' }}>Theobroma Bakery — Central Production Kitchen, Mumbai</h3>
              <p style={{ fontFamily: 'var(--font-inter)', fontSize: '0.9375rem', color: 'var(--text-body)', lineHeight: 1.72, maxWidth: 680 }}>Central production kitchen for bakery chain supplying 10+ Mumbai outlets. 2 rotating rack ovens, 200L spiral mixer, retarder proofer, blast freezer (40kg), refrigerated distribution storage, and packaging line. Producing 3,000 SKUs daily for outlet distribution.</p>
              <p style={{ marginTop: '1rem', fontFamily: 'var(--font-inter)', fontWeight: 700, fontSize: '0.9375rem', color: 'var(--gold)' }}>Project Value: ₹38 Lakhs · Setup: 28 days</p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {['The Baker\'s Dozen — Cloud bakery setup, Delhi · ₹14L', 'Meraki Patisserie — Boutique bakery, Gurugram · ₹16L', 'Monginis Franchise — 4 outlet bakery kitchens · ₹9L each', 'Industrial Bakery, Haryana — High-volume bread production · ₹85L'].map(p => (
              <div key={p} className="flex items-start gap-2">
                <CheckCircle2 size={12} style={{ color: 'var(--gold)', flexShrink: 0, marginTop: '0.15rem' }} aria-hidden="true" />
                <span style={{ fontFamily: 'var(--font-inter)', fontSize: '0.875rem', color: 'var(--text-body)' }}>{p}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <BrandsGrid />
      <CitiesGrid serviceSlug="bakery-equipment" />
      <ServiceTestimonial testimonial={TESTIMONIAL} />
      <ServiceFAQ faqs={FAQS} heading="Frequently Asked Questions — Commercial Bakery Equipment" />
      <ServiceCTA
        serviceName="Bakery Kitchen"
        subtext="Share your bakery type, product range, and daily production volume. We'll send a complete bakery equipment list, layout recommendation, and itemised budget within 24 hours."
      />
    </>
  );
}
