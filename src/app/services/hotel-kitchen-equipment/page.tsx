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
import QuickLinksNav      from '@/components/services/QuickLinksNav';

/* ─── Meta ──────────────────────────────────────────────────────────────── */
export const metadata: Metadata = {
  title: 'Hotel Kitchen Equipment Manufacturer & Supplier | VSD',
  description:
    'ISO 9001:2015 hotel kitchen equipment manufacturer & supplier. Turnkey hotel kitchens — design, supply, install. Trusted by Hyatt, Radisson & ITC.',
  alternates: { canonical: '/services/hotel-kitchen-equipment' },
  openGraph: {
    url: '/services/hotel-kitchen-equipment',
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
    href: '/industries/hotels',
  },
  {
    icon: Building2,
    label: 'Business & 4-Star Hotels',
    desc: 'Efficient multi-cuisine kitchens that balance output against operating cost.',
    href: '/industries/hotels',
  },
  {
    icon: Award,
    label: 'Boutique & Heritage Hotels',
    desc: 'Compact, character-fit kitchens within constrained or heritage-listed spaces.',
    href: '/industries/hotels',
  },
  {
    icon: Users,
    label: 'Resorts',
    desc: 'Multi-outlet kitchens (all-day dining, specialty, banquet) often in remote locations that demand reliable supply and service.',
    href: '/industries/hotels',
  },
  {
    icon: UtensilsCrossed,
    label: 'Banquet & Convention Venues',
    desc: 'High-volume bulk cooking and hot-holding for large covers.',
    href: '/industries/hotels',
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
const PRICE_GUIDE_COLUMNS = [
  'Hotel Type',
  'Typical Scope',
  'Outlets & Covers',
  'Key Equipment Included',
  'Installation Timeline',
  'Indicative Price Range',
];

const PRICE_GUIDE = [
  {
    type: 'Boutique / Small Hotel',
    scope: 'Single main kitchen + limited cold chain',
    outlets: '1 outlet · up to 60 covers',
    equipment: 'Combi oven, 2-burner range, under-counter fridge, prep tables, SS worktables',
    timeline: '15 – 21 days',
    range: '₹12 – 25 lakh',
  },
  {
    type: 'Business / 4-Star',
    scope: 'Main + banquet + cold kitchen + warewash',
    outlets: '2 outlets · up to 150 covers',
    equipment: 'Combi oven, tilting bratt pan, walk-in cold room, rack-conveyor dishwasher',
    timeline: '21 – 30 days',
    range: '₹25 – 60 lakh',
  },
  {
    type: '5-Star / Luxury',
    scope: 'Multi-outlet: main, banquet, bakery, specialty, staff',
    outlets: '4+ outlets · 300+ covers',
    equipment: 'Multiple combi ovens, bulk cookers, blast chiller, bakery line, full SS fabrication',
    timeline: '30 – 45 days',
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

/* ─── Quick Links — "On This Page" jump-link nav ─────────────────────────── */
/* Order mirrors document order; href ids must match the target section's id. */
const QUICK_LINKS = [
  {
    href: '#kitchen-equipment-zones',
    label: 'Kitchen Equipment Range',
    sub: 'Production · Banquet · Bakery · Cold',
  },
  {
    href: '#hotels-we-equip',
    label: 'Hotels We Equip',
    sub: '5-Star · Business · Boutique · Resorts',
  },
  {
    href: '#why-choose-vsd',
    label: 'Why Choose VSD',
    sub: '5-Star Spec · Turnkey · AMC',
  },
  {
    href: '#price-guide',
    label: 'Price Guide',
    sub: '₹12 Lakh – ₹2 Crore+',
  },
  {
    href: '#hotel-projects',
    label: 'Featured Projects',
    sub: 'Hyatt · Radisson · ITC',
  },
  {
    href: '#international-brands',
    label: 'International Brands',
    sub: 'Rational · Robot Coupe · Frymaster',
  },
  {
    href: '#cities-we-serve',
    label: 'Cities We Serve',
    sub: 'Delhi · Mumbai · Bangalore & more',
  },
  {
    href: '#client-testimonials',
    label: 'Client Reviews',
    sub: 'Hyatt Regency Delhi',
  },
  {
    href: '#faqs',
    label: 'FAQs',
    sub: '51 answers on pricing & process',
  },
  {
    href: '#get-a-quote',
    label: 'Get a Free Quote',
    sub: 'Free site visit · 24-hr plan',
  },
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
    q: "How much does it cost to set up a hotel kitchen in India?",
    a: "A complete hotel kitchen in India typically ranges from about ₹12–25 lakh for a boutique property to ₹60 lakh–₹2 crore or more for a full five-star kitchen. The figure depends on the number of outlets, banquet capacity, the share of imported equipment and the amount of custom stainless-steel fabrication. VSD provides an itemised price list after a free site visit — for reference, our four-zone Hyatt Regency Delhi kitchen was delivered for ₹42 lakh.",
  },
  {
    q: "What does a 5-star hotel kitchen cost compared with a 4-star?",
    a: "A five-star hotel kitchen generally costs ₹60 lakh to ₹2 crore-plus, while a 4-star or business hotel kitchen typically falls in the ₹25–60 lakh range. The difference comes from more outlets, larger banquet capacity, a higher share of imported equipment and finer finishing standards. VSD specifies each kitchen to its star-grade brief rather than over- or under-building.",
  },
  {
    q: "How much should a boutique hotel budget for its kitchen?",
    a: "A boutique or small hotel can usually equip a single main kitchen with a limited cold chain for around ₹12–25 lakh. Compact properties save by combining functions into fewer, well-chosen units rather than duplicating large-format equipment. We design boutique kitchens to fit constrained or heritage spaces without paying for capacity they won't use.",
  },
  {
    q: "What share of a hotel kitchen budget goes to imported equipment?",
    a: "Imported equipment usually accounts for roughly 25–45% of a hotel kitchen budget, concentrated in combi ovens, fryers, ice machines and prep machines where engineering matters most. The remainder is custom stainless-steel fabrication and domestic equipment. Because VSD both manufactures and imports, we help balance the two so you pay for imports only where they earn their cost.",
  },
  {
    q: "Does banquet capacity change the kitchen cost significantly?",
    a: "Yes — banquet capacity is one of the biggest cost drivers in a hotel kitchen, because high-volume bulk cooking, hot-holding and warewashing scale with the number of covers. A property with large banquet halls needs bulk cookers, tilting braising pans and bigger dishwashing lines that a rooms-only hotel does not. We size the banquet kitchen to your real event load.",
  },
  {
    q: "Can you reduce hotel kitchen costs without lowering quality?",
    a: "Yes — the main levers are using custom fabrication instead of imported equivalents where performance is identical, right-sizing capacity to actual covers, and standardising on fewer equipment platforms. Because we manufacture in-house, we can substitute factory-built stainless steel for marked-up imported units where it makes no difference to the result, then reserve budget for the equipment that genuinely needs a global brand.",
  },
  {
    q: "Do you provide an itemised hotel kitchen price list?",
    a: "Yes — after a free site visit we provide a fully itemised hotel kitchen price list covering every zone, unit, capacity and brand, so there are no hidden costs. The indicative ranges on this page help with early planning, while the detailed quotation lets your finance and procurement teams evaluate line by line.",
  },
  {
    q: "How long does a hotel kitchen installation take?",
    a: "Most hotel kitchen projects are completed in 21 to 45 days from order to commissioning, scaling with the number of outlets and the amount of custom fabrication. A single-kitchen refit can be faster, while a multi-outlet five-star build runs toward the upper end. VSD commissioned the complete four-zone kitchen at Hyatt Regency Delhi in 21 days and confirms a fixed timeline at the proposal stage.",
  },
  {
    q: "What is the step-by-step process for a hotel kitchen project?",
    a: "A hotel kitchen project follows six stages: free site visit, CAD layout design, equipment selection, supply and delivery, installation and commissioning, and ongoing AMC. You approve the layout and equipment list before any order is placed, so scope, cost and timeline are agreed up front and there are no surprises during the build.",
  },
  {
    q: "Can you deliver a hotel kitchen without shutting down operations?",
    a: "Yes — for live properties we phase the work so sections are replaced while the rest of the kitchen keeps running, and we schedule disruptive activities around service hours. The Hyatt Regency overhaul was completed in 21 days without halting operations. We plan the sequence with your F&B team so banquet and restaurant service continues throughout.",
  },
  {
    q: "Do you provide a CAD layout before we commit?",
    a: "Yes — we provide a CAD-based kitchen layout as part of the proposal, before any order is placed. It maps equipment placement, workflow, utilities and ventilation against your covers and menu, so your team can review and adjust the design before committing budget.",
  },
  {
    q: "Can the installation be phased across renovation stages?",
    a: "Yes — we can phase supply and installation to match a hotel's renovation or pre-opening schedule, delivering zones such as main, banquet, bakery and cold kitchen in sequence. This keeps the kitchen build aligned with civil and MEP progress and spreads cost across project milestones.",
  },
  {
    q: "Do you handle installation and commissioning, or only supply?",
    a: "VSD handles complete installation and commissioning, not just supply — certified engineers position, connect, test and commission every unit, train your team and provide a formal handover. This single-vendor turnkey model is what distinguishes a manufacturer-led partner from a reseller who only ships equipment.",
  },
  {
    q: "What equipment does a 5-star hotel kitchen need?",
    a: "A five-star hotel kitchen needs a main production line (combi ovens, ranges, fryers, salamanders), a banquet kitchen (bulk cookers, bain maries, hot-holding), bakery and pastry equipment, a full cold chain (walk-in cold rooms, blast chillers), banquet-scale warewashing and custom stainless-steel fabrication. The exact mix depends on outlets and covers; VSD plans and equips all of these zones as one integrated kitchen.",
  },
  {
    q: "What goes into a hotel banquet kitchen specifically?",
    a: "A hotel banquet kitchen centres on high-volume bulk cooking and hot-holding: bulk cookers and rice boilers, tilting braising pans, bain maries, hot cases and foodservice trolleys, supported by enough cold storage and warewashing for peak event load. It is engineered to plate large covers quickly without losing temperature or quality.",
  },
  {
    q: "What refrigeration and cold-chain does a hotel need?",
    a: "A hotel typically needs walk-in cold rooms and freezers, blast chillers, under-counter and vertical units and display chillers — sized to storage volume, menu and HACCP requirements. The cold chain keeps raw and prepared food within safe temperatures across multiple outlets. VSD designs the cold chain as an integrated part of the kitchen rather than an add-on.",
  },
  {
    q: "What warewashing setup suits a hotel kitchen?",
    a: "Hotels generally need hood-type or rack-conveyor dishwashers with pre-rinse stations, pot-wash units and grease traps, sized to banquet-scale throughput. The right machine depends on peak covers and turnaround speed. We specify warewashing that clears event and restaurant volumes without becoming a service bottleneck.",
  },
  {
    q: "Do you supply hotel bakery and pastry equipment?",
    a: "Yes — we supply and install deck and rotary rack ovens, planetary and spiral mixers, dough sheeters, proofers and chocolate equipment for in-house hotel bakery and patisserie. Equipment is matched to the property's bakery output and product range.",
  },
  {
    q: "What cooking equipment is essential for all-day dining?",
    a: "An all-day-dining kitchen needs versatile high-output equipment: combi ovens, gas or induction ranges, griddles, salamanders, deep fryers and tilting bratt pans that handle multiple cuisines across long service hours. We specify a line that covers à-la-carte, buffet and room-service demand from one production kitchen.",
  },
  {
    q: "Do you supply pantry and room-service kitchen equipment?",
    a: "Yes — we equip hotel pantries and room-service kitchens with compact cooking, beverage, holding and refrigeration units suited to fast, around-the-clock output. These satellite kitchens are designed to deliver quickly to rooms and lounges without the footprint of the main kitchen.",
  },
  {
    q: "Do you supply bar and beverage equipment for hotels?",
    a: "Yes — we supply back-bar chillers, ice machines, glass washers, beverage dispensers and coffee equipment for hotel bars and lounges, including authorised brands such as Scotsman and BUNN. Bar equipment is specified alongside the main kitchen so utilities and layout are coordinated.",
  },
  {
    q: "What is the difference between à-la-carte and banquet kitchen equipment?",
    a: "À-la-carte kitchens favour flexible, precise equipment for made-to-order dishes, while banquet kitchens favour bulk-capacity equipment for plating hundreds of covers at once. A hotel usually needs both, sized differently. We design each zone for its job rather than forcing one line to do everything.",
  },
  {
    q: "Do you supply commercial tandoors and Indian-cuisine equipment for hotels?",
    a: "Yes — we manufacture commercial tandoors, bulk cookers, dosa plates and other India-specific equipment in-house, alongside global brands. Indian and multi-cuisine hotel kitchens get authentic, high-output equipment built for daily volume, matched to the rest of the production line.",
  },
  {
    q: "How do you size a hotel kitchen for the number of rooms or covers?",
    a: "We size a hotel kitchen from its real demand — number of rooms, restaurant covers, banquet capacity and menu complexity — then translate that into equipment capacity per zone. Over-sizing wastes capital and space; under-sizing throttles service. The CAD layout stage matches each unit's throughput to your peak load.",
  },
  {
    q: "How much space does a hotel kitchen need?",
    a: "Hotel kitchen space depends on outlets and covers, but the priority is workflow, not just area — clear zones for prep, cooking, plating, warewashing and cold storage with safe, hygienic flow. Custom fabrication lets us fit a fully functional kitchen into constrained or irregular spaces, which matters in boutique and heritage properties.",
  },
  {
    q: "How many combi ovens does a hotel kitchen need?",
    a: "The number of combi ovens depends on covers and menu, but a mid-size hotel often runs one to three, with banquet-heavy properties using more or larger units. We calculate combi capacity against peak production rather than applying a fixed rule, so you neither queue food nor pay for idle ovens.",
  },
  {
    q: "Can the kitchen scale as the hotel adds outlets?",
    a: "Yes — we design hotel kitchens with expansion in mind, so utilities, ventilation and layout can support added outlets or higher covers later. Equipment platforms are chosen so capacity can grow without ripping out and replacing the core kitchen.",
  },
  {
    q: "Which stainless steel grade do you use for hotel kitchens?",
    a: "We use food-grade SS 304 as standard for hotel kitchens because it resists corrosion and is hygienic for daily five-star service, with SS 316 available for high-moisture or coastal environments. Grade is matched to each zone — for example tougher specifications for wet and warewashing areas.",
  },
  {
    q: "Why is custom fabrication better than standard-size equipment for hotels?",
    a: "Custom fabrication lets equipment be built to the exact footprint, workflow and utilities of your kitchen rather than forcing the kitchen to fit standard sizes — which matters in hotels with irregular or heritage spaces. Because VSD fabricates in its own Delhi facilities, worktables, hoods, sinks and counters match the CAD layout precisely, with no gaps or compromises.",
  },
  {
    q: "Do you fabricate exhaust hoods for hotel kitchens?",
    a: "Yes — we design and fabricate stainless-steel baffle-filter exhaust hoods sized to your cooking load and fire code, with the ducting and fresh-air balance planned as part of the layout. Correct hood sizing is essential for heat, grease and smoke removal and for passing fire and hygiene inspections.",
  },
  {
    q: "Can you match fabrication to an existing hotel kitchen's layout?",
    a: "Yes — for renovations we measure the existing space and fabricate replacement worktables, hoods, sinks and shelving to fit the current footprint and any retained equipment. This lets a hotel upgrade in stages without rebuilding the whole kitchen at once.",
  },
  {
    q: "Which international brands do you supply for hotel kitchens?",
    a: "We are an authorised dealer for leading global brands hotels specify, including Rational combi ovens, Robot Coupe food processors, Frymaster fryers, Hamilton Beach blenders, Scotsman ice machines, BUNN beverage equipment and Hatco holding equipment. All imports come with manufacturer warranty and our own in-country service support.",
  },
  {
    q: "Are you an authorised Rational dealer for hotel kitchens?",
    a: "Yes — VSD is an authorised Rational dealer in India and regularly specifies Rational combi ovens for hotel production and banquet kitchens. Authorised dealership means genuine equipment, valid warranty, correct installation and trained support — not grey-market imports.",
  },
  {
    q: "Do imported units come with warranty and service in India?",
    a: "Yes — imported hotel equipment carries the manufacturer's warranty and is backed by VSD's local service and spare-parts support, so a property is never left waiting on overseas service. Authorised imports plus in-country AMC are why hotels choose a single accountable partner over direct importing.",
  },
  {
    q: "Can you supply the brands our hotel chain has standardised on?",
    a: "Yes — where a hotel group has standardised on particular equipment brands, we supply and install to that specification across properties, combining the required imports with our custom fabrication. This keeps a chain's kitchens consistent while still fitting each property's space.",
  },
  {
    q: "Do you supply Robot Coupe and Frymaster for hotel kitchens?",
    a: "Yes — we supply Robot Coupe food-preparation machines and Frymaster fryers as an authorised dealer, both common in high-volume hotel kitchens. They are specified alongside the rest of the production line so capacity and workflow stay balanced.",
  },
  {
    q: "Is your hotel kitchen equipment FSSAI and HACCP compliant?",
    a: "Yes — VSD designs and equips hotel kitchens to align with FSSAI hygiene norms and HACCP food-safety principles, using food-safe SS 304 surfaces, correct zoning and a temperature-controlled cold chain. Compliant layout, materials and ventilation are planned from the design stage so the kitchen supports audits rather than working against them.",
  },
  {
    q: "Do you meet star-rating classification requirements for hotel kitchens?",
    a: "Yes — we build hotel kitchens to the specification and hygiene standards expected for star-rated properties, including the equipment quality, finishes and segregation that classification and brand audits look for. We design to the brief your brand standard or classification sets.",
  },
  {
    q: "Do you handle kitchen fire-safety and exhaust compliance?",
    a: "Yes — exhaust hoods, ducting and fresh-air systems are sized to the cooking load and fire code, which is essential for passing fire inspections and controlling heat and air quality. We plan fire-safety-relevant ventilation as an integral part of the kitchen, not a later add-on.",
  },
  {
    q: "Can you build a kitchen that supports our hygiene audits?",
    a: "Yes — we design hotel kitchens around cleanability and segregation: corrosion-resistant SS 304 surfaces, suitable finishes, clear raw-to-cooked flow and a cold chain that holds safe temperatures. The result is a kitchen built to pass routine hygiene and brand audits rather than to scramble before them.",
  },
  {
    q: "Do you provide documentation for hotel licensing and audits?",
    a: "Yes — we provide equipment specifications, layouts and compliance-relevant documentation that support FSSAI licensing, brand audits and procurement records. Proper documentation is part of the handover, which matters for tendered and chain-managed properties.",
  },
  {
    q: "Do you equip resort kitchens in remote locations?",
    a: "Yes — we equip resort kitchens, including multi-outlet operations in remote or hill locations where reliable supply and service matter most. We plan equipment durability, spare-parts availability and AMC coverage around the location so a remote resort is not left without support.",
  },
  {
    q: "Can you equip a heritage or boutique hotel with limited space?",
    a: "Yes — boutique and heritage hotels are a particular strength, because in-house custom fabrication lets us fit a fully functional kitchen into constrained, irregular or listed spaces. We combine functions into fewer well-chosen units so a small footprint still delivers full service.",
  },
  {
    q: "Do you work with hotel chains across multiple properties?",
    a: "Yes — we work with hotel groups across multiple properties, supplying to a consistent specification while adapting each kitchen to its building. Centralised specification with local fabrication keeps a chain's kitchens uniform without forcing identical layouts into different spaces.",
  },
  {
    q: "Which hotels has VSD International worked with?",
    a: "VSD has delivered hotel kitchen projects for leading properties including Hyatt Regency Delhi, Radisson Blu Kaushambi, Crowne Plaza Rohini and ITC Welcomhotel Dwarka. This documented portfolio — spanning main production, banquet, bakery and cold kitchens — is difficult for equipment-only competitors to match and can be reviewed on our projects page.",
  },
  {
    q: "Do you provide warranty and AMC for hotel kitchen equipment?",
    a: "Yes — manufactured equipment carries a workmanship warranty and imported equipment carries the manufacturer's warranty, both backed by VSD's Annual Maintenance Contracts. An AMC covers preventive maintenance, genuine spare parts and priority engineer response — important for hotels, where downtime across multiple outlets is costly.",
  },
  {
    q: "How fast is your service response for a hotel?",
    a: "Our AMC clients receive priority response with dedicated service engineers and a support hotline, because hotel kitchen downtime directly affects service and revenue. Response commitments are set in the AMC, and Delhi NCR properties benefit from our local engineering team.",
  },
  {
    q: "What is the typical lifespan of hotel kitchen equipment?",
    a: "Well-specified hotel kitchen equipment generally lasts 8 to 15 years with regular maintenance, and custom stainless-steel fabrication often outlasts powered units. An AMC — preventive maintenance, genuine parts and engineer visits — is designed to protect that lifespan and avoid premature replacement.",
  },
  {
    q: "Can we visit your factory or a reference hotel project?",
    a: "Yes — prospective clients are welcome to visit our Delhi facilities to see fabrication quality first-hand, and where possible we can arrange reference visits or share project documentation. Seeing the build quality is the best way to verify a partner before a major hotel project.",
  },
  {
    q: "Do you provide GST invoicing and procurement documentation?",
    a: "Yes — VSD provides proper GST invoicing and the specifications, quotations and documentation that hotel procurement and tender processes require. This suits chain-managed and corporately owned properties that need line-item records for approvals.",
  },
  {
    q: "How do we get a quote for our hotel kitchen?",
    a: "Share your property type, number of outlets and approximate covers by phone or WhatsApp at +91-9250346370, or through the enquiry form, and we'll arrange a free site visit. You'll receive a tailored equipment plan, CAD layout and itemised price list, typically within 24 hours of the visit.",
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
        { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://vsdinternational.com/services' },
        { '@type': 'ListItem', position: 3, name: 'Hotel Kitchen Equipment', item: 'https://vsdinternational.com/services/hotel-kitchen-equipment' },
      ],
    },
    {
      '@type': 'ItemList',
      '@id': 'https://vsdinternational.com/services/hotel-kitchen-equipment#page-sections',
      name: 'Hotel Kitchen Equipment Page Sections',
      description: 'Key sections of the hotel kitchen equipment page covering equipment zones, hotel types served, pricing, projects, brands, reviews, FAQs and cities served.',
      numberOfItems: QUICK_LINKS.length,
      itemListElement: QUICK_LINKS.map((link, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        name: link.label,
        url: `https://vsdinternational.com/services/hotel-kitchen-equipment${link.href}`,
        description: link.sub,
      })),
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
        className="grain-overlay hotel-hero"
        style={{
          background: 'var(--charcoal-warm)',
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

      {/* ── Quick Links — "On This Page" jump-link nav (Google Jump Links signal) ── */}
      <QuickLinksNav links={QUICK_LINKS} />

      {/* ── §2 Hotel Kitchen Equipment Range ─────────────────────────────── */}
      <section id="kitchen-equipment-zones" aria-labelledby="range-heading" style={{ background: '#FFFFFF', padding: 'clamp(3rem, 8vw, 5.5rem) 0' }}>
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
        id="hotels-we-equip"
        aria-labelledby="hotels-heading"
        style={{
          background: 'var(--surface)',
          padding: 'clamp(3rem, 8vw, 4.5rem) 0',
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
        id="why-choose-vsd"
        aria-labelledby="why-heading"
        className="grain-overlay"
        style={{
          background: 'var(--charcoal-light)',
          padding: 'clamp(3rem, 8vw, 5.5rem) 0',
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
        id="price-guide"
        aria-labelledby="price-heading"
        style={{ background: '#FFFFFF', padding: 'clamp(3rem, 8vw, 5.5rem) 0', borderTop: '1px solid var(--border)' }}
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
              equipment and how much custom stainless-steel fabrication is involved. The table below breaks down
              typical scope, outlets and covers, key equipment included and installation timeline by hotel tier;
              we provide a fully itemised price list after a free site visit.
            </p>
          </div>

          {/* Price table */}
          <div style={{ border: '1px solid var(--border)', borderRadius: 12, overflow: 'hidden' }}>
            {/* Table header — hidden below lg, rows become labelled cards instead */}
            <div
              className="hidden lg:grid lg:grid-cols-[0.9fr_1.2fr_0.8fr_1.6fr_0.8fr_0.9fr] lg:gap-4"
              style={{
                background: 'var(--charcoal)',
                padding: '1rem 1.5rem',
              }}
            >
              {PRICE_GUIDE_COLUMNS.map(h => (
                <span
                  key={h}
                  style={{
                    fontFamily: 'var(--font-inter)',
                    fontSize: '0.6875rem',
                    fontWeight: 700,
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    color: 'rgba(245,240,232,0.5)',
                    lineHeight: 1.3,
                  }}
                >
                  {h}
                </span>
              ))}
            </div>
            {/* Rows */}
            {PRICE_GUIDE.map(({ type, scope, outlets, equipment, timeline, range }, i) => (
              <div
                key={type}
                className="grid grid-cols-1 gap-2 lg:grid-cols-[0.9fr_1.2fr_0.8fr_1.6fr_0.8fr_0.9fr] lg:gap-4 lg:items-start"
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
                <div>
                  <span className="lg:hidden" style={{ display: 'block', fontFamily: 'var(--font-inter)', fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '0.15rem' }}>
                    Outlets &amp; Covers
                  </span>
                  <span style={{ fontFamily: 'var(--font-inter)', fontSize: '0.875rem', color: 'var(--text-body)', lineHeight: 1.5 }}>
                    {outlets}
                  </span>
                </div>
                <div>
                  <span className="lg:hidden" style={{ display: 'block', fontFamily: 'var(--font-inter)', fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '0.15rem' }}>
                    Key Equipment Included
                  </span>
                  <span style={{ fontFamily: 'var(--font-inter)', fontSize: '0.875rem', color: 'var(--text-body)', lineHeight: 1.5 }}>
                    {equipment}
                  </span>
                </div>
                <div>
                  <span className="lg:hidden" style={{ display: 'block', fontFamily: 'var(--font-inter)', fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '0.15rem' }}>
                    Installation Timeline
                  </span>
                  <span style={{ fontFamily: 'var(--font-inter)', fontSize: '0.875rem', color: 'var(--text-body)', lineHeight: 1.5 }}>
                    {timeline}
                  </span>
                </div>
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
        id="hotel-projects"
        aria-labelledby="project-heading"
        style={{ background: 'var(--surface)', padding: 'clamp(3rem, 8vw, 5rem) 0', borderTop: '1px solid var(--border)' }}
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
                  href="/projects"
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
            href="/projects"
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
