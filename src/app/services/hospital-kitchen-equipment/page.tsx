import type { Metadata } from 'next';
import Link from 'next/link';
import { HeartPulse, Shield, Award, Clock, CheckCircle2, ArrowRight, MessageCircle, Flame, Refrigerator, Layers, Droplets, Users, Building2 } from 'lucide-react';
import ServiceBreadcrumb   from '@/components/services/ServiceBreadcrumb';
import ServiceFAQ          from '@/components/services/ServiceFAQ';
import ServiceTestimonial  from '@/components/services/ServiceTestimonial';
import BrandsGrid          from '@/components/services/BrandsGrid';
import CitiesGrid          from '@/components/services/CitiesGrid';
import ServiceCTA          from '@/components/services/ServiceCTA';

export const metadata: Metadata = {
  title: 'Hospital Kitchen Equipment Supplier India — NABH Compliant | VSD International',
  description:
    'NABH & FSSAI compliant hospital kitchen equipment for dietary kitchens, patient floor kitchens & healthcare institutions across India. DRDO, ESIC, Metro Hospitals. ISO 9001 certified. Zero competition vertical.',
  alternates: { canonical: 'https://vsdinternational.com/services/hospital-kitchen-equipment/' },
  openGraph: {
    url: 'https://vsdinternational.com/services/hospital-kitchen-equipment/',
    title: 'Hospital Kitchen Equipment — NABH Compliant | VSD International India',
    description: 'Hospital dietary kitchen equipment meeting NABH standards. Government hospitals, private healthcare chains & institutional kitchens. Trusted by Metro Hospitals, DRDO, ESIC.',
    images: [{ url: 'https://vsdinternational.com/og-image.jpg', width: 1200, height: 630 }],
  },
};

const NABH_REQUIREMENTS = [
  { code: 'NABH NF.1', req: 'Separate dietary and general kitchen', detail: 'Dietary kitchen must be physically separated from staff/visitor kitchen with dedicated access.' },
  { code: 'NABH NF.2', req: 'Menu-based diet planning', detail: 'Kitchen equipment must support therapeutic diet preparation — diabetic, renal, cardiac, and post-surgery diets.' },
  { code: 'NABH NF.3', req: 'Food safety management', detail: 'HACCP-compliant workflow separation, temperature monitoring, and documented food safety practices.' },
  { code: 'NABH NF.4', req: 'Patient tray assembly', detail: 'Dedicated patient tray assembly line — heated trolleys, tray service, and dietary staff training.' },
  { code: 'NABH NF.5', req: 'Infection control compliance', detail: 'Stainless steel surfaces, dedicated hand wash stations, disposables storage, and pest control protocol.' },
];

const EQUIPMENT_TYPES = [
  { icon: Flame, title: 'Dietary Kitchen Cooking Equipment', items: ['Tilting braising pans (60L–150L)', 'Boiling pans & steam cookers', 'High-capacity convection ovens', 'Steamers (gastronorm & standalone)', 'Soup kettles & broth stations', 'Commercial rice cookers (bulk)', 'Pressure cookers (commercial grade)', 'Induction cooking ranges (safe)'] },
  { icon: Refrigerator, title: 'Refrigeration & Cold Storage', items: ['Walk-in cold rooms (HACCP compliant)', 'Reach-in refrigerators (stainless interior)', 'Blast chillers for hospital meals', 'Refrigerated patient meal trolleys', 'Specimen storage refrigerators', 'Medication refrigerators (pharmacy)', 'Dairy & diet supplement chillers'] },
  { icon: Layers, title: 'Stainless Steel Fabrication', items: ['NABH-standard SS worktables', 'Dedicated hand wash sinks (NABH)', 'Patient tray assembly counters', 'Separate diet prep workstations', 'SS storage shelving (wall & floor)', 'Waste management stations', 'Floor sinks & drain systems'] },
  { icon: Droplets, title: 'Dishwashing & Sterilisation', items: ['Hospital-grade pass-through dishwashers', 'High-temperature sanitising (82°C)', 'Dedicated utensil sterilisers', 'Pre-rinse spray units (dedicated zones)', 'Tray dishwashers (patient trays)', 'Pot & pan washers (large vessels)', 'Waste food disposers'] },
];

const FAQS = [
  { q: 'What is NABH hospital kitchen compliance?', a: 'NABH (National Accreditation Board for Hospitals) sets mandatory standards for hospital dietary kitchens under its Nutritional Services (NF) standards. Key requirements include: (1) Physical separation of dietary kitchen from non-patient kitchens, (2) HACCP-compliant food safety workflow, (3) Therapeutic diet capability (diabetic, cardiac, renal, post-surgical diets), (4) Temperature-controlled meal delivery to patient floors, (5) Documented food safety monitoring records, (6) Qualified clinical dietitian oversight. VSD International has equipped 30+ NABH-accredited hospital kitchens across India and understands NABH assessor requirements in detail.' },
  { q: 'What is the difference between a dietary kitchen and a patient floor kitchen?', a: 'Dietary kitchen (main hospital kitchen): The central production kitchen where all hospital meals are prepared — cooking, portioning, and packing for all patients. Requires heavy-duty cooking equipment (boiling pans, steamers, tilting brains pans), bulk refrigeration, and a HACCP-compliant workflow. Patient floor kitchen (ward pantry): A small satellite kitchen on each patient floor — typically 80–200 sqft with reheating equipment (convection oven or microwave), a refrigerator, coffee machine, tea equipment, patient tray assembly counter, and handwash sink. VSD International designs and equips both. Most 100+ bed hospitals require a main dietary kitchen plus 2–5 ward pantries.' },
  { q: 'What hospital kitchen equipment does VSD International supply?', a: 'VSD International supplies a complete range of hospital-grade kitchen equipment: Large-scale cooking (tilting braising pans 60L–200L, boiling pans, steamers, convection ovens), refrigeration (walk-in cold rooms, blast chillers, refrigerated meal trolleys), stainless steel fabrication (NABH-standard worktables, patient tray assembly counters, hand wash stations), dishwashing (hospital-grade pass-through dishwashers with 82°C sanitise cycle), and patient distribution equipment (insulated meal trolleys, dish dispensers, patient tray service lines). All equipment meets NABH, FSSAI, and HACCP requirements.' },
  { q: 'What is the cost of a hospital dietary kitchen setup?', a: 'Hospital dietary kitchen costs depend on hospital bed count: Small hospital (50–100 beds) — ₹18–35 lakhs; Medium hospital (100–300 beds) — ₹35–80 lakhs; Large hospital (300–500 beds) — ₹80–1.5 crore; Tertiary care hospital (500+ beds) — ₹1.5–4 crore. Costs include main dietary kitchen equipment, patient meal trolleys, ward pantry equipment, and NABH-compliant SS fabrication. Government hospital projects (ESIC, DRDO, AIIMS-affiliated) are handled under GeM portal or direct tendering.' },
  { q: 'Do you supply hospital kitchen equipment for government hospitals?', a: 'Yes — VSD International has supplied hospital kitchen equipment to government and quasi-government healthcare institutions including DRDO canteens, ESIC hospitals, Railway hospitals, and State government hospitals. Government procurement is typically through GeM (Government e-Marketplace) portal, directorate procurement, or open tender. VSD International is registered on GeM portal. For large government hospital projects, we participate in technical specifications review and submit compliant bids. Contact us with the tender details for assessment.' },
  { q: 'What standard stainless steel grade is used for hospital kitchen equipment?', a: 'Hospital kitchen equipment must use SS 304 (18/8) grade stainless steel as a minimum. SS 304 is food-grade, corrosion-resistant, and withstands hospital-grade cleaning chemicals including bleach (sodium hypochlorite) and quaternary ammonium compounds. For specific high-sanitation areas (ICU pantry, operation theatre kitchen support), SS 316 (18/10 with molybdenum) is recommended for higher chloride resistance. VSD International uses SS 304 as standard for all hospital fabrication, with SS 316 available for premium requirements. Weld joints are continuously welded and polished to eliminate bacterial harborage points.' },
  { q: 'Do you provide NABH documentation support for hospital kitchen audits?', a: 'Yes — VSD International provides documentation support for hospital NABH kitchen audits: (1) Equipment specifications documents (make, model, capacity, food-grade certifications), (2) Stainless steel grade certificates (mill certificates for SS 304/316), (3) Dishwasher calibration reports (temperature logs, 82°C sanitise confirmation), (4) Kitchen layout drawings (as-built, with zone demarcation), (5) Refrigerator temperature calibration records, (6) Maintenance schedules and AMC agreements. This documentation package is typically required by NABH assessors. We\'ve supported 30+ hospitals through NABH accreditation or re-accreditation with our equipment.' },
];

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    { '@type': 'Service', name: 'Hospital Kitchen Equipment Supply & Installation', provider: { '@type': 'LocalBusiness', name: 'VSD International' }, areaServed: { '@type': 'Country', name: 'India' }, serviceType: 'Hospital Kitchen Equipment', aggregateRating: { '@type': 'AggregateRating', ratingValue: '5', reviewCount: '312', bestRating: '5' } },
    { '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://vsdinternational.com' }, { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://vsdinternational.com/services/' }, { '@type': 'ListItem', position: 3, name: 'Hospital Kitchen Equipment', item: 'https://vsdinternational.com/services/hospital-kitchen-equipment/' }] },
    { '@type': 'FAQPage', mainEntity: FAQS.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) },
  ],
};

const TESTIMONIAL = {
  quote: 'VSD International equipped our 400-bed hospital dietary kitchen to full NABH compliance standards. Their understanding of NABH NF criteria, HACCP workflow requirements, and hospital-grade SS fabrication standards was exceptional. The NABH assessors specifically commended our kitchen setup during the accreditation visit.',
  name: 'Dr. Sandeep Mathur',
  title: 'Medical Superintendent',
  company: 'Metro Hospitals Group',
  city: 'Delhi NCR',
  rating: 5,
};

export default function HospitalKitchenEquipmentPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <ServiceBreadcrumb crumbs={[{ label: 'Services', href: '/services' }, { label: 'Hospital Kitchen Equipment' }]} />

      {/* §1 Hero */}
      <section className="grain-overlay" style={{ background: 'var(--charcoal-warm)', padding: '5rem 0 4.5rem', position: 'relative', borderBottom: '1px solid rgba(201,168,76,0.15)' }}>
        <div aria-hidden="true" style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '2px', background: 'linear-gradient(90deg, transparent 5%, var(--gold-bright) 35%, var(--gold) 65%, transparent 95%)' }} />
        <div className="container mx-auto" style={{ maxWidth: '80rem', padding: '0 1.25rem' }}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="section-label" style={{ marginBottom: '1rem' }}>Zero Competition Vertical</p>
              <h1 style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(1.875rem, 3.8vw, 3rem)', fontWeight: 700, lineHeight: 1.1, letterSpacing: '-0.02em', color: 'var(--text-on-dark)', marginBottom: '1.25rem' }}>
                Hospital Kitchen Equipment Supplier India —{' '}
                <em className="gold-shimmer" style={{ fontStyle: 'italic', fontWeight: 800 }}>NABH Compliant</em>
              </h1>
              <div aria-hidden="true" style={{ width: 60, height: 3, background: 'linear-gradient(90deg, var(--gold-bright), var(--gold), var(--gold-deep))', borderRadius: 2, marginBottom: '1.5rem' }} />
              <p style={{ fontFamily: 'var(--font-inter)', fontSize: '1.0625rem', color: 'rgba(245,240,232,0.7)', lineHeight: 1.75, marginBottom: '1.5rem' }}>
                India&apos;s specialist hospital kitchen equipment supplier — NABH &amp; FSSAI compliant dietary kitchen equipment for hospitals, healthcare chains, and government health institutions. Trusted by Metro Hospitals, DRDO, and ESIC. Average order value ₹25L–2Cr.
              </p>
              <div className="flex flex-wrap gap-5" style={{ marginBottom: '2rem' }}>
                {[{ icon: Shield, text: 'NABH Compliant' }, { icon: Award, text: 'FSSAI & HACCP' }, { icon: HeartPulse, text: '30+ Hospital Projects' }].map(({ icon: Icon, text }) => (
                  <div key={text} className="flex items-center gap-2">
                    <Icon size={15} style={{ color: 'var(--gold)', flexShrink: 0 }} aria-hidden="true" />
                    <span style={{ fontFamily: 'var(--font-inter)', fontSize: '0.875rem', fontWeight: 600, color: 'rgba(245,240,232,0.75)' }}>{text}</span>
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap gap-3">
                <a href="https://wa.me/919250346370?text=Hi%20VSD%2C%20I%20need%20NABH%20compliant%20hospital%20kitchen%20equipment.%20Please%20share%20details." target="_blank" rel="noopener noreferrer" className="btn-gold inline-flex items-center gap-2">
                  <MessageCircle size={15} aria-hidden="true" /> Get Hospital Kitchen Quote
                </a>
                <Link href="/services/stainless-steel-fabrication" className="btn-ghost-dark inline-flex items-center gap-2">
                  SS Fabrication <ArrowRight size={14} aria-hidden="true" />
                </Link>
              </div>
            </div>
            <div>
              {/* NABH Standards highlight */}
              <p style={{ fontFamily: 'var(--font-inter)', fontWeight: 700, fontSize: '0.75rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '1rem' }}>NABH Nutritional Services Standards — We Meet All</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
                {NABH_REQUIREMENTS.map(({ code, req }) => (
                  <div key={code} className="flex items-start gap-3 rounded-lg" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(201,168,76,0.12)', padding: '0.875rem 1rem' }}>
                    <span style={{ fontFamily: 'var(--font-inter)', fontSize: '0.7rem', fontWeight: 800, color: 'var(--gold)', letterSpacing: '0.1em', flexShrink: 0, paddingTop: '0.1rem' }}>{code}</span>
                    <span style={{ fontFamily: 'var(--font-inter)', fontSize: '0.875rem', color: 'rgba(245,240,232,0.7)', lineHeight: 1.4 }}>{req}</span>
                    <CheckCircle2 size={14} style={{ color: 'var(--gold)', flexShrink: 0, marginTop: '0.1rem' }} aria-hidden="true" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* §2 Equipment Types */}
      <section aria-labelledby="offer-heading" style={{ background: '#FFFFFF', padding: '5.5rem 0' }}>
        <div className="container mx-auto" style={{ maxWidth: '80rem', padding: '0 1.25rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '3.25rem' }}>
            <p className="section-label" style={{ marginBottom: '0.75rem' }}>Hospital Equipment Range</p>
            <h2 id="offer-heading" style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', color: 'var(--text-dark)', lineHeight: 1.12 }}>
              Our Hospital Kitchen Equipment Products &amp; Services
            </h2>
            <div aria-hidden="true" style={{ width: 56, height: 3, background: 'linear-gradient(90deg, var(--gold-bright), var(--gold), var(--gold-deep))', borderRadius: 2, margin: '1.125rem auto 0' }} />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {EQUIPMENT_TYPES.map(({ icon: Icon, title, items }) => (
              <div key={title} className="card-lift rounded-2xl" style={{ background: 'var(--surface)', border: '1px solid var(--border)', padding: '1.75rem' }}>
                <div style={{ width: 44, height: 44, borderRadius: 10, background: 'rgba(201,168,76,0.08)', border: '1px solid rgba(201,168,76,0.18)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }} aria-hidden="true">
                  <Icon size={20} style={{ color: 'var(--gold)' }} strokeWidth={1.6} />
                </div>
                <h3 style={{ fontFamily: 'var(--font-playfair)', fontWeight: 700, fontSize: '1.0625rem', color: 'var(--text-dark)', marginBottom: '0.875rem' }}>{title}</h3>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.45rem' }}>
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

          {/* Government Projects special section */}
          <div style={{ marginTop: '2.5rem', background: 'var(--surface)', border: '1px solid rgba(201,168,76,0.25)', borderLeft: '4px solid var(--gold)', borderRadius: 8, padding: '1.75rem 2rem' }}>
            <h3 style={{ fontFamily: 'var(--font-playfair)', fontWeight: 700, fontSize: '1.25rem', color: 'var(--text-dark)', marginBottom: '0.75rem' }}>Government Hospital Procurement</h3>
            <p style={{ fontFamily: 'var(--font-inter)', fontSize: '0.9375rem', color: 'var(--text-body)', lineHeight: 1.72, marginBottom: '1rem' }}>
              VSD International is registered on GeM (Government e-Marketplace) portal and has completed kitchen equipment projects for government institutions including DRDO canteens, ESIC hospitals, Railway Board hospitals, and State government medical colleges. We participate in open tenders, directorate procurement, and GeM-based procurement processes.
            </p>
            <div className="flex flex-wrap gap-3">
              {['DRDO Canteen, Delhi', 'ESIC Hospital, Noida', 'Railway Hospital Kitchen', 'State Medical College, Haryana'].map(p => (
                <span key={p} style={{ background: 'rgba(201,168,76,0.08)', border: '1px solid rgba(201,168,76,0.2)', borderRadius: 20, padding: '0.3rem 0.875rem', fontFamily: 'var(--font-inter)', fontSize: '0.8125rem', color: 'var(--gold-deep)', fontWeight: 600 }}>{p}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* §3 Why VSD */}
      <section className="grain-overlay" style={{ background: 'var(--charcoal-light)', padding: '5rem 0', borderTop: '1px solid rgba(201,168,76,0.1)' }}>
        <div className="container mx-auto" style={{ maxWidth: '80rem', padding: '0 1.25rem' }}>
          <h2 style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', color: 'var(--text-on-dark)', lineHeight: 1.12, textAlign: 'center', marginBottom: '3rem' }}>
            Why Choose VSD International for Hospital Kitchen Equipment
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {[
              { title: 'NABH Accreditation Support', body: 'We provide equipment documentation for NABH assessors — SS grade certificates, dishwasher temperature logs, layout drawings with zone demarcation. Our hospital kitchen setups have passed NABH assessments at 30+ facilities.' },
              { title: 'FSSAI & HACCP Compliant Design', body: 'Kitchen layouts designed with strict separation of raw, processed, cooked, and served food flow. Dedicated hand wash stations at regulatory intervals, pest-proof storage, and temperature-controlled food transport.' },
              { title: 'Therapeutic Diet Capability', body: 'Equipment selection supports all therapeutic diets — diabetic, renal, cardiac, high-protein, post-surgical, and liquid diets. Tilting braising pans, steamers, and batch cooking equipment optimised for diet-specific meal production.' },
              { title: 'GeM & Tender Procurement', body: 'Registered on GeM portal for government hospital procurement. We participate in ESIC, DRDO, Railway, and State government hospital kitchen tenders. Direct procurement consultation available for hospital administrators.' },
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
          <h2 style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(1.5rem, 2.4vw, 2rem)', color: 'var(--text-dark)', marginBottom: '2rem' }}>Recent Hospital Kitchen Equipment Projects</h2>
          <div className="rounded-2xl overflow-hidden" style={{ border: '1px solid var(--border)', marginBottom: '2rem' }}>
            <div style={{ background: 'linear-gradient(135deg, var(--charcoal) 0%, var(--charcoal-mid) 100%)', height: 160, display: 'flex', alignItems: 'center', justifyContent: 'center' }} aria-hidden="true">
              <HeartPulse size={48} style={{ color: 'rgba(201,168,76,0.3)' }} strokeWidth={1} />
            </div>
            <div style={{ padding: '2rem' }}>
              <span style={{ fontFamily: 'var(--font-inter)', fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--gold)' }}>Featured — NABH Hospital Kitchen</span>
              <h3 style={{ fontFamily: 'var(--font-playfair)', fontWeight: 700, fontSize: '1.375rem', color: 'var(--text-dark)', margin: '0.625rem 0 0.875rem' }}>Metro Hospitals Group — 400-Bed NABH Dietary Kitchen</h3>
              <p style={{ fontFamily: 'var(--font-inter)', fontSize: '0.9375rem', color: 'var(--text-body)', lineHeight: 1.72, maxWidth: 680 }}>NABH-compliant dietary kitchen for 400-bed tertiary care hospital. Main kitchen: 3 tilting braising pans (150L), 4 boiling pans, 2 convection steamers, walk-in cold room, blast chiller. Ward pantries: 6 nos. (reheating oven, refrigerator, hand wash station each). Full HACCP-compliant SS fabrication throughout.</p>
              <p style={{ marginTop: '1rem', fontFamily: 'var(--font-inter)', fontWeight: 700, fontSize: '0.9375rem', color: 'var(--gold)' }}>Project Value: ₹65 Lakhs · Delivered: 32 days</p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {['Yashoda Hospitals, Hyderabad — NABH compliant dietary kitchen', 'DRDO Canteen Complex, Delhi — 2000-pax institutional kitchen', 'ESIC Hospital, Noida — 300-bed hospital dietary kitchen', 'Fortis Memorial, Gurugram — Multi-zone hospital kitchen'].map(p => (
              <div key={p} className="flex items-start gap-2">
                <CheckCircle2 size={12} style={{ color: 'var(--gold)', flexShrink: 0, marginTop: '0.15rem' }} aria-hidden="true" />
                <span style={{ fontFamily: 'var(--font-inter)', fontSize: '0.875rem', color: 'var(--text-body)' }}>{p}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <BrandsGrid />
      <CitiesGrid serviceSlug="hospital-kitchen-equipment" />
      <ServiceTestimonial testimonial={TESTIMONIAL} />
      <ServiceFAQ faqs={FAQS} heading="Frequently Asked Questions — Hospital Kitchen Equipment" />
      <ServiceCTA
        serviceName="Hospital Kitchen"
        subtext="Share your hospital bed count, NABH accreditation status, and kitchen scope. We'll provide NABH-compliant equipment specifications and project cost within 24 hours."
      />
    </>
  );
}
