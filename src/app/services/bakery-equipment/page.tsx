import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Cake, Shield, Award, CheckCircle2, ArrowRight, MessageCircle,
  Flame, Refrigerator, Settings, Coffee, Building2, Store, Factory,
} from 'lucide-react';
import ServiceBreadcrumb   from '@/components/services/ServiceBreadcrumb';
import ServiceFAQ          from '@/components/services/ServiceFAQ';
import BrandsGrid          from '@/components/services/BrandsGrid';
import type { Brand }      from '@/components/services/BrandsGrid';
import CitiesGrid          from '@/components/services/CitiesGrid';
import ServiceCTA          from '@/components/services/ServiceCTA';
import QuickLinksNav       from '@/components/services/QuickLinksNav';

/* ─── Meta ──────────────────────────────────────────────────────────────── */
export const metadata: Metadata = {
  title: 'Commercial Bakery Equipment Supplier in India | VSD',
  description:
    'Commercial bakery equipment supplier & fabricator in Delhi — deck ovens, mixers, proofers & display counters for bakeries & cloud bakeries, pan India.',
  alternates: { canonical: 'https://vsdinternational.com/services/bakery-equipment/' },
  openGraph: {
    url: 'https://vsdinternational.com/services/bakery-equipment/',
    title: 'Commercial Bakery Equipment Supplier & Manufacturer | VSD International',
    description:
      'Commercial bakery equipment supplier & stainless-steel fabricator in Delhi. Deck ovens, mixers, proofers & custom display counters for bakeries, cafés & cloud bakeries across India.',
    images: [{ url: 'https://vsdinternational.com/og-image.jpg', width: 1200, height: 630 }],
  },
};

/* ─── §2 What We Supply vs What We Build ─────────────────────────────────── */
const WE_SUPPLY = [
  'Deck ovens — gas & electric, single to triple deck',
  'Rotary rack ovens — high-volume bread & bun production',
  'Planetary mixers — cakes, cream, batters',
  'Spiral mixers — bread & high-hydration dough',
  'Dough sheeters & dividers — pastry & viennoiserie',
  'Proofers / proofing chambers — controlled fermentation',
  'Bread slicers & planetary attachments',
];

const WE_MANUFACTURE = [
  'Bakery & sweet display counters — refrigerated & ambient',
  'Stainless-steel work & landing tables',
  'Cooling & storage racks, trolleys',
  'Exhaust hoods & ventilation',
  'Sinks & wash units',
  'Custom SS 304 fabrication to your layout',
];

/* ─── §3 Bakeries We Equip ────────────────────────────────────────────────── */
const BAKERIES_WE_EQUIP = [
  {
    icon: Store,
    label: 'Retail & Artisan Bakeries',
    desc: 'Café and standalone bakeries needing the right oven, mixer and display in a compact footprint.',
    href: undefined,
  },
  {
    icon: Coffee,
    label: 'Cloud & Home Bakeries',
    desc: 'Delivery-first operations that need efficient, space-saving equipment to launch lean.',
    href: '/services/cloud-kitchen-setup',
  },
  {
    icon: Building2,
    label: 'Hotel & Restaurant Patisseries',
    desc: 'In-house bakery and pastry sections within a larger kitchen, built to brand standard.',
    href: '/services/hotel-kitchen-equipment',
  },
  {
    icon: Cake,
    label: 'Confectioneries & Sweet Shops',
    desc: 'Where refrigerated display and sweet counters (which we fabricate) are central.',
    href: undefined,
  },
  {
    icon: Factory,
    label: 'Industrial & Wholesale Bakeries',
    desc: 'High-volume bread and bun production lines with rack ovens and bulk mixing.',
    href: undefined,
  },
];

/* ─── §4 Why Bakeries Choose VSD ──────────────────────────────────────────── */
const WHY_VSD = [
  {
    title: 'Supplier and Manufacturer, One Source',
    body: 'You get authorised global machines and our own custom fabrication from a single partner — so the ovens, mixers, counters and tables all arrive specified to work together, with one team accountable.',
  },
  {
    title: 'Honest Make-or-Buy Advice',
    body: "Because we both supply and fabricate, we'll tell you where an imported machine is worth it and where custom-built stainless steel does the same job for less — instead of selling you whatever carries the highest margin.",
  },
  {
    title: 'Turnkey Design, Install & AMC',
    body: 'We plan the bakery layout, supply and install the equipment, and back it with an Annual Maintenance Contract — not just a one-off sale and a delivery note.',
  },
  {
    title: 'Hotel-Grade Standards',
    body: 'The same fabrication quality and food-safe SS 304 we build for five-star hotel kitchens goes into every bakery counter and table we make.',
  },
];

/* ─── §5 Price Guide ──────────────────────────────────────────────────────── */
const PRICE_GUIDE = [
  { type: 'Cloud / Home Bakery',     kit: '1 deck oven + planetary mixer + display/storage',          range: '₹3 – 8 lakh' },
  { type: 'Retail / Café Bakery',    kit: 'Deck oven + mixers + proofer + display counters',           range: '₹8 – 20 lakh' },
  { type: 'Industrial / Wholesale',  kit: 'Rack ovens + spiral mixers + sheeters + fabrication',        range: '₹20 lakh – ₹1 crore+' },
];

/* ─── §7 Bakery Brands We Supply ──────────────────────────────────────────── */
const BAKERY_BRANDS: Brand[] = [
  { name: 'Chanmag', tagline: 'Bakery ovens & mixers',  slug: 'chanmag' },
  { name: 'Berjaya',  tagline: 'Bakery ovens & mixers',  slug: 'berjaya' },
];

/* ─── Quick Links — "On This Page" jump-link nav ─────────────────────────── */
const QUICK_LINKS = [
  { href: '#what-we-supply',      label: 'Supply vs. Fabricate', sub: 'Ovens · Mixers · Counters' },
  { href: '#bakeries-we-equip',   label: 'Bakeries We Equip',    sub: 'Retail · Cloud · Hotel · Industrial' },
  { href: '#why-choose-vsd',      label: 'Why Choose VSD',       sub: 'One Source · Honest Advice · AMC' },
  { href: '#price-guide',         label: 'Price Guide',          sub: '₹3 Lakh – ₹1 Crore+' },
  { href: '#bakery-projects',     label: 'Featured Proof',       sub: 'Hyatt Patisserie · Display Counters' },
  { href: '#international-brands',label: 'Brands We Supply',     sub: 'Chanmag · Berjaya' },
  { href: '#cloud-bakery-setup',  label: 'Cloud Bakery Setup',   sub: 'Lean, Delivery-First Kit' },
  { href: '#cities-we-serve',     label: 'Cities We Serve',      sub: 'Delhi · Mumbai & More' },
  { href: '#faqs',                label: 'FAQs',                 sub: '57 Answers — Make vs Buy & More' },
  { href: '#get-a-quote',         label: 'Get a Free Quote',     sub: 'Itemised Price List · 4-hr Response' },
];

/* ─── §10 FAQs (AEO — answer-first, unique to this page, 57 Qs in 12 groups) ─── */
const FAQS = [
  /* Supplier vs Manufacturer */
  {
    category: 'Supplier vs Manufacturer',
    q: 'Does VSD manufacture bakery equipment or supply it?',
    a: 'VSD does both, honestly split: we supply the baking machines — deck ovens, rack ovens, planetary and spiral mixers, sheeters and proofers — as an authorised dealer of specialist global brands, and we manufacture the stainless-steel display counters, work tables, racks and fabrication in our own Delhi facilities. You get genuine, warrantied machines plus custom fabrication built to your bakery, from one accountable partner.',
  },
  {
    category: 'Supplier vs Manufacturer',
    q: 'Are you a bakery equipment manufacturer or a dealer?',
    a: 'We are both, in different parts of the bakery. For precision baking machines we are an authorised dealer, because those are best built by specialist global manufacturers. For the stainless-steel counters, tables, racks and hoods, we are the manufacturer, fabricating them in-house to your layout. This honest split is why our equipment fits and works together.',
  },
  {
    category: 'Supplier vs Manufacturer',
    q: 'Which bakery items do you build in-house?',
    a: 'We fabricate the stainless-steel elements of a bakery in-house: display and sweet counters, work and landing tables, cooling and storage racks, exhaust hoods, sinks and custom SS 304 work to your layout. The powered machines — ovens, mixers, sheeters, proofers — we supply from established brands rather than claiming to make them.',
  },
  {
    category: 'Supplier vs Manufacturer',
    q: 'Why buy ovens and mixers from a supplier rather than a self-proclaimed manufacturer?',
    a: "Specialist baking machines need engineering, R&D and quality control that genuine global manufacturers invest in, so an authorised supplier gives you proven equipment with valid warranty and support. Many local sellers label themselves 'manufacturer' for machines they actually rebrand. We're straight about it — we supply the machines and build the steelwork — which protects your warranty and service.",
  },
  {
    category: 'Supplier vs Manufacturer',
    q: 'Can one company handle both the machines and the steelwork for my bakery?',
    a: 'Yes — VSD supplies the imported machines and fabricates the stainless-steel counters and tables, so a single team designs, supplies, installs and maintains the whole bakery. This avoids the common problem of coordinating a machine dealer and a separate fabricator, and ensures everything is sized to fit and work together.',
  },

  /* Cost & Budget */
  {
    category: 'Cost & Budget',
    q: 'How much does it cost to set up a commercial bakery in India?',
    a: 'A commercial bakery in India typically costs from about ₹3–8 lakh for a compact cloud or home bakery to ₹20 lakh–₹1 crore or more for an industrial operation, with retail and café bakeries usually in the ₹8–20 lakh range. The figure depends on output volume, product mix and how much custom fabrication you need. We provide an itemised price list after understanding your menu and space.',
  },
  {
    category: 'Cost & Budget',
    q: 'What does a small café bakery setup cost?',
    a: "A small café or retail bakery usually costs around ₹8–20 lakh, covering a deck oven, planetary and spiral mixers, a proofer, refrigeration, work tables and a display counter. The exact figure depends on whether you bake bread, cake or pastry and your daily output. We help right-size the kit so you don't overspend before sales build.",
  },
  {
    category: 'Cost & Budget',
    q: 'How much does a cloud or home bakery cost to set up?',
    a: 'A cloud or home bakery can usually start at around ₹3–8 lakh with one quality deck oven, a planetary mixer, a proofer and compact refrigeration and storage. Keeping the footprint and equipment lean lets delivery-first bakers launch faster and scale as orders grow, rather than over-investing on day one.',
  },
  {
    category: 'Cost & Budget',
    q: 'What does a wholesale or industrial bakery line cost?',
    a: 'A wholesale or industrial bakery typically runs from ₹20 lakh to ₹1 crore or more, driven by rotary rack ovens, large spiral mixers, dough sheeters and dividers, bulk refrigeration and the fabrication around them. Cost scales with bread or bun output per hour. We design the line to your production target so capacity matches demand.',
  },
  {
    category: 'Cost & Budget',
    q: 'What are the main cost drivers in a bakery setup?',
    a: 'The biggest cost drivers are output volume, your product mix (bread, cake or pastry each need different machines), the choice between imported and domestic equipment, and the amount of custom stainless-steel fabrication. Because we both supply and fabricate, we balance these to fit your budget rather than defaulting to the most expensive option.',
  },
  {
    category: 'Cost & Budget',
    q: 'Can I set up a bakery on a tight budget?',
    a: "Yes — a lean bakery can start with the essential core: one oven, one mixer, a proofer, basic refrigeration and a display counter, then expand. We advise where a custom-fabricated table or counter saves money over an imported equivalent, and where it's worth investing in a quality machine, so a tight budget still buys reliable equipment.",
  },
  {
    category: 'Cost & Budget',
    q: 'Do you provide an itemised bakery equipment price list?',
    a: 'Yes — after understanding your products, output and space we provide a fully itemised price list covering each machine, capacity, brand and fabrication item. The indicative ranges on this page help with early planning, while the detailed quotation lets you evaluate line by line and arrange financing or approvals.',
  },

  /* Getting Started */
  {
    category: 'Getting Started',
    q: 'What equipment do I need to start a bakery?',
    a: "A basic bakery needs an oven (deck or rack), a mixer (planetary for cakes, spiral for bread), a proofer, refrigeration and storage, plus work tables and a display counter. The exact mix depends on whether you bake bread, cake or pastry and at what volume. We plan the right core kit for your product and space so you don't over-invest at the start.",
  },
  {
    category: 'Getting Started',
    q: 'What is the minimum equipment to start a home bakery?',
    a: 'A home bakery can start with one compact deck or convection oven, a planetary mixer, basic refrigeration and storage, and a work table. As orders grow you add a proofer, more oven capacity and a display unit. We help home bakers pick equipment that fits domestic power and space while leaving room to scale.',
  },
  {
    category: 'Getting Started',
    q: 'What equipment does a bread bakery need versus a cake bakery?',
    a: 'A bread bakery centres on a deck or rack oven, a spiral mixer, a proofer and a divider/sheeter for shaping, while a cake bakery centres on a planetary mixer, a deck or convection oven and refrigerated display. Many bakeries do both and need one of each mixer type. We specify to your actual product range, not a generic list.',
  },
  {
    category: 'Getting Started',
    q: 'Do I need a proofer for my bakery?',
    a: "If you bake yeast products like bread, buns or croissants, a proofer is strongly recommended because controlled temperature and humidity give consistent rise and quality that ambient proving can't match. A cake-only bakery may not need one. We advise based on your products so you buy a proofer only where it earns its place.",
  },
  {
    category: 'Getting Started',
    q: 'What equipment does a patisserie or pastry shop need?',
    a: 'A patisserie typically needs a deck or convection oven, a planetary mixer, a dough sheeter for laminated pastry, blast chilling or refrigeration, and refrigerated display counters for finished products. We supply the machines and fabricate the display and work surfaces, so the front and back of house are built to match.',
  },

  /* Ovens */
  {
    category: 'Ovens',
    q: 'What is the difference between a deck oven and a rotary rack oven?',
    a: 'A deck oven bakes on fixed stone or steel shelves and gives the artisan crust and control ideal for bread, pizza and pastry, while a rotary rack oven rotates whole trolleys of trays for high, even output suited to large bread and bun production. Many bakeries use both. We help you choose based on your product range and daily volume.',
  },
  {
    category: 'Ovens',
    q: 'Should I choose a gas or electric bakery oven?',
    a: "Gas ovens usually cost less to run where gas is available and suit high-volume baking, while electric ovens offer finer temperature control and are easier to install where gas lines aren't practical. The right choice depends on your location, utilities and products. We help weigh running cost against control for your specific setup.",
  },
  {
    category: 'Ovens',
    q: 'What is a convection oven and do I need one?',
    a: 'A convection oven uses a fan to circulate hot air for fast, even baking, which suits cookies, small cakes and viennoiserie and fits compact or café bakeries well. Deck ovens remain better for crusty breads. Many small bakeries start with a convection oven for versatility; we advise based on your menu.',
  },
  {
    category: 'Ovens',
    q: 'How many decks or trays does my bakery oven need?',
    a: 'Oven capacity is set by your peak daily output — a small café may need a single or double deck, while a busy retail or wholesale bakery needs three decks or a rack oven holding many trays. We size the oven against your real production target so you neither queue product nor pay for idle capacity.',
  },
  {
    category: 'Ovens',
    q: 'Can one deck oven bake bread, cake and pizza?',
    a: 'Yes — a good deck oven with independent top and bottom heat can handle bread, cake, pizza and pastry, which makes it a versatile choice for café and multi-product bakeries. For very high volume or specialised output you may add a rack or convection oven. We match the oven to your product spread.',
  },
  {
    category: 'Ovens',
    q: 'How much power or gas connection does a bakery oven need?',
    a: 'Bakery ovens vary widely — a small electric deck oven may need a single- or three-phase connection of a few kilowatts, while large rack ovens and industrial lines need substantial three-phase power or a gas line. We confirm the exact electrical and gas requirements at the layout stage so your site is ready before installation.',
  },

  /* Mixers */
  {
    category: 'Mixers',
    q: 'Planetary mixer or spiral mixer — which does my bakery need?',
    a: 'Use a planetary mixer for cakes, cream, batters and general mixing, and a spiral mixer for bread and high-hydration dough where gentle, thorough kneading matters. A bakery doing both bread and cake usually needs one of each. We size the bowl capacity to your batch sizes so the mixer matches real production.',
  },
  {
    category: 'Mixers',
    q: 'What size planetary mixer should I buy?',
    a: 'Planetary mixers range from about 5 to 80 litres; a home or café bakery often suits a 10–20 litre unit, while a busy retail bakery needs 20–40 litres and wholesale operations go larger. The right size depends on your batch volume. We recommend a capacity that handles your peak batch without straining a small motor.',
  },
  {
    category: 'Mixers',
    q: 'What can a planetary mixer do besides cake batter?',
    a: "A planetary mixer whips cream and egg, mixes batters and icings, kneads soft dough, and with attachments can mince or shred, making it the most versatile mixer in a cake or café bakery. For heavy bread dough a spiral mixer is better. We advise the right tool so you don't overload a planetary unit.",
  },
  {
    category: 'Mixers',
    q: 'Do I need both a planetary and a spiral mixer?',
    a: 'If you bake both bread and cake at volume, yes — a spiral mixer kneads bread dough properly while a planetary mixer handles cakes, cream and batters, and using one for the other shortens its life or gives poorer results. A single-focus bakery may need only one. We match the mixers to your product mix.',
  },

  /* Bakery Machines */
  {
    category: 'Bakery Machines',
    q: 'What does a dough sheeter do and do I need one?',
    a: 'A dough sheeter rolls dough to an even thickness quickly and consistently, which is essential for laminated pastries like croissants and puff, and a big time-saver for any bakery making pastry or pizza bases. A bread-and-cake bakery may not need one. We recommend it only where your product range justifies it.',
  },
  {
    category: 'Bakery Machines',
    q: 'What is a dough divider and rounder used for?',
    a: 'A dough divider cuts a mass of dough into equal portions and a rounder shapes them into balls, ensuring uniform bread, buns and rolls at speed — valuable for high-volume or wholesale bakeries. Small bakeries often divide by hand at first. We advise when output makes a divider worth the investment.',
  },
  {
    category: 'Bakery Machines',
    q: 'What refrigeration does a bakery need?',
    a: 'A bakery typically needs under-counter and upright refrigeration for ingredients and doughs, a blast chiller or freezer for pastry and frozen dough, and refrigerated display counters for finished products. We size the cold chain to your storage volume and products, and fabricate the display side in-house to match your shopfront.',
  },
  {
    category: 'Bakery Machines',
    q: 'Do you supply bread slicers?',
    a: 'Yes — we supply table and floor-model bread slicers that cut loaves into even slices at speed, suited to retail and wholesale bread bakeries. Slicers are specified alongside your oven and packing area so the workflow from baking to packing is smooth.',
  },
  {
    category: 'Bakery Machines',
    q: 'What is a proofing chamber and how does it help?',
    a: 'A proofing chamber holds dough at controlled temperature and humidity so yeast products rise consistently regardless of the weather, giving better volume, texture and repeatable quality. It removes the guesswork of ambient proving, which matters most for bread, buns and laminated pastry. We size the proofer to your batch and oven capacity.',
  },

  /* Display & Fabrication */
  {
    category: 'Display & Fabrication',
    q: 'Do you make bakery display counters and sweet counters?',
    a: 'Yes — bakery and sweet display counters are something we manufacture in-house, in refrigerated and ambient versions, built in SS 304 to your size and layout. Because we fabricate them ourselves, the counters fit your shopfront exactly and match the work tables and racks we build for the back of house.',
  },
  {
    category: 'Display & Fabrication',
    q: 'What is the difference between a refrigerated and an ambient display counter?',
    a: "A refrigerated display counter keeps cream cakes, pastries and chilled products at safe temperature, while an ambient counter suits breads, cookies and shelf-stable items that don't need cooling. Most bakeries use both. We build each to your product mix and shopfront dimensions so display space is used efficiently.",
  },
  {
    category: 'Display & Fabrication',
    q: 'Can you build a display counter to fit my exact shopfront?',
    a: "Yes — because we fabricate display counters in-house, we build them to your exact length, height, curve and finish rather than forcing a standard size into your space. This is a real advantage for boutique shopfronts and corner units where off-the-shelf counters don't fit.",
  },
  {
    category: 'Display & Fabrication',
    q: 'What stainless steel grade do you use for bakery fabrication?',
    a: 'We use food-grade SS 304 as standard for bakery counters, tables and fabrication because it is hygienic, corrosion-resistant and durable for daily use, with heavier or specialised grades where the environment demands. Food-safe stainless steel is essential for hygiene compliance and easy cleaning in a bakery.',
  },

  /* Cloud & Home Bakery */
  {
    category: 'Cloud & Home Bakery',
    q: 'Do you supply equipment for cloud and home bakeries?',
    a: 'Yes — we equip cloud and home bakeries with lean, space-efficient setups, typically a quality deck or convection oven, a planetary mixer, a proofer and compact refrigeration, sized to deliver volume from a small footprint. We help delivery-first bakers buy only what they need to launch, then scale as orders grow.',
  },
  {
    category: 'Cloud & Home Bakery',
    q: 'Can I run a bakery from a small or home kitchen?',
    a: 'Yes — a home or small bakery can operate with a compact oven, a planetary mixer and basic refrigeration, provided the space allows safe workflow and you meet local hygiene and licensing rules. We specify equipment that fits domestic or small-commercial power and space while leaving room to expand.',
  },
  {
    category: 'Cloud & Home Bakery',
    q: 'What is the most space-efficient bakery setup?',
    a: 'The most space-efficient setup combines multi-function equipment — a convection oven, a single versatile mixer, a proofer and compact refrigeration — arranged in a tight, logical workflow. We design small-footprint bakeries so each piece earns its space, which is exactly what cloud and home bakers need to keep rent and capital low.',
  },
  {
    category: 'Cloud & Home Bakery',
    q: 'Can I start small and scale up later?',
    a: 'Yes — we design starter bakery setups so you can add oven capacity, a second mixer, a sheeter or more refrigeration as demand grows, without replacing the core equipment. Choosing the right platforms at the start makes scaling cheaper and faster than buying twice.',
  },

  /* Capacity & Sizing */
  {
    category: 'Capacity & Sizing',
    q: 'What size oven and mixer does my bakery need?',
    a: 'Oven and mixer size is set by your daily output and batch sizes — a café bakery may need a 1–2 deck oven and a 20-litre mixer, while a wholesale operation needs rack ovens and 40–80 litre spiral mixers. We calculate capacity from your real production targets so you neither bottleneck at peak nor pay for idle capacity.',
  },
  {
    category: 'Capacity & Sizing',
    q: 'How do you calculate bakery equipment capacity?',
    a: "We work backwards from your target output — units per day, peak-hour demand and product type — to size oven trays, mixer bowls and refrigeration. This ensures the slowest step doesn't bottleneck the line and that no machine sits idle. Sizing to real demand is what keeps both capital and running costs efficient.",
  },
  {
    category: 'Capacity & Sizing',
    q: 'How much electricity or gas does a bakery use?',
    a: 'Running cost depends on oven type and volume — gas is usually cheaper for high-volume baking where available, while electric offers control at a higher unit cost. Mixers, proofers and refrigeration add steady load. We factor running cost into equipment choice so the setup is affordable to operate, not just to buy.',
  },

  /* Brands & Imports */
  {
    category: 'Brands & Imports',
    q: 'Which brands of bakery ovens and mixers do you supply?',
    a: "VSD is an authorised dealer for specialist bakery brands including Chanmag and Berjaya for ovens and mixers, alongside the broader global brands in our range. All imported equipment is supplied with manufacturer warranty and backed by our own service and spare-parts support in India, so you're not left waiting on overseas service.",
  },
  {
    category: 'Brands & Imports',
    q: 'Are imported bakery machines better than Indian-made?',
    a: 'Imported machines often lead on precision, controls and consistency, which matters for laminated pastry and high-volume bread, while good Indian-made equipment can offer strong value for simpler needs. The right choice depends on your products and budget. Because we supply both, we recommend based on what your bakery actually requires, not on margin.',
  },
  {
    category: 'Brands & Imports',
    q: 'Do imported bakery machines come with warranty in India?',
    a: "Yes — imported bakery equipment we supply carries the manufacturer's warranty and is backed by our local service and spare-parts support, so a fault is handled in-country rather than shipped abroad. Authorised supply plus in-country service is the main reason to buy through a dealer rather than importing directly.",
  },
  {
    category: 'Brands & Imports',
    q: 'Can you supply spare parts for imported bakery equipment?',
    a: 'Yes — as an authorised dealer we supply genuine spare parts and service for the imported brands we carry, and our Annual Maintenance Contracts include parts and engineer visits. Reliable parts and service support is what keeps a bakery running and is often overlooked when buying on price alone.',
  },

  /* Compliance & Hygiene */
  {
    category: 'Compliance & Hygiene',
    q: 'Is your bakery equipment FSSAI compliant?',
    a: 'Yes — we supply and fabricate bakery equipment with food-safe SS 304 surfaces, cleanable design and correct refrigeration that support FSSAI hygiene requirements. Compliant materials and layout make passing inspections straightforward. We plan hygiene into the design rather than leaving it as an afterthought.',
  },
  {
    category: 'Compliance & Hygiene',
    q: 'Do I need an FSSAI licence to run a bakery?',
    a: 'Yes — any bakery selling food in India must hold a valid FSSAI registration or licence, with the category depending on turnover and scale. While licensing is your responsibility, we design the kitchen with compliant surfaces, refrigeration and zoning so the premises supports your application.',
  },
  {
    category: 'Compliance & Hygiene',
    q: 'How do you keep a bakery hygienic and food-safe?',
    a: 'Hygiene comes from food-safe SS 304 surfaces, cleanable joints, correct refrigeration and a layout that separates raw, baking and packing areas. We fabricate the steelwork and plan the workflow with cleanability and food safety in mind, so the bakery is built to stay compliant rather than scramble before an audit.',
  },
  {
    category: 'Compliance & Hygiene',
    q: 'Why is stainless steel important in a bakery?',
    a: "Food-grade stainless steel is hygienic, corrosion-resistant and easy to clean, which is why it's the standard for bakery work surfaces, counters and racks that contact food and flour daily. We fabricate these in SS 304, giving durable, audit-ready surfaces that don't rust, stain or harbour contamination.",
  },

  /* Service & Support */
  {
    category: 'Service & Support',
    q: 'Do you provide installation, layout and maintenance for bakery equipment?',
    a: 'Yes — VSD provides bakery layout design, installation, commissioning and Annual Maintenance Contracts, not just supply. We plan equipment placement, ventilation and workflow, install and test the machines, and back them with preventive maintenance, genuine parts and priority service.',
  },
  {
    category: 'Service & Support',
    q: 'Do you offer AMC and after-sales service for bakeries?',
    a: 'Yes — our Annual Maintenance Contracts cover preventive maintenance, repairs, genuine spare parts and priority engineer response for the equipment we supply. Bakery downtime directly costs sales, so an AMC protects uptime and extends equipment life. Terms are set out clearly in your contract.',
  },
  {
    category: 'Service & Support',
    q: 'Do you supply bakery equipment outside Delhi?',
    a: 'Yes — based in Delhi NCR, we supply and install bakery equipment across India, including Mumbai, Bangalore, Hyderabad, Chennai, Pune and Jaipur, with our own engineers travelling for commissioning. Our Delhi facilities support pan-India dispatch of both supplied machines and custom fabrication.',
  },
  {
    category: 'Service & Support',
    q: 'Can I visit to see the equipment before buying?',
    a: "Yes — you're welcome to visit our Delhi facilities to see fabrication quality and discuss equipment in person, and we can advise on reference setups where possible. Seeing the build quality first-hand is the best way to choose a partner before committing to a bakery investment.",
  },
  {
    category: 'Service & Support',
    q: 'Do you provide GST invoicing for bakery purchases?',
    a: 'Yes — we provide proper GST invoicing and the quotations and documentation a business needs for procurement, financing or claiming input credit. This suits café chains, cloud-kitchen operators and established bakeries that need formal records for their accounts.',
  },
  {
    category: 'Service & Support',
    q: 'How do I get a quote for bakery equipment?',
    a: "Share your bakery type, products and approximate output by phone or WhatsApp at +91-9250346370, or through the enquiry form, and we'll recommend the right equipment and provide an itemised price list. For larger setups we offer a free layout and site visit, and proper GST invoicing for business purchases.",
  },
];

/* ─── JSON-LD Schema ──────────────────────────────────────────────────────── */
const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home',  item: 'https://vsdinternational.com' },
        { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://vsdinternational.com/services/' },
        { '@type': 'ListItem', position: 3, name: 'Bakery Equipment', item: 'https://vsdinternational.com/services/bakery-equipment/' },
      ],
    },
    {
      '@type': 'ItemList',
      '@id': 'https://vsdinternational.com/services/bakery-equipment/#page-sections',
      name: 'Bakery Equipment Page Sections',
      description: 'Key sections of the bakery equipment page covering supply-vs-fabricate scope, bakeries equipped, pricing, proof, brands, cloud bakery setup, FAQs and cities served.',
      numberOfItems: QUICK_LINKS.length,
      itemListElement: QUICK_LINKS.map((link, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        name: link.label,
        url: `https://vsdinternational.com/services/bakery-equipment/${link.href}`,
        description: link.sub,
      })),
    },
    {
      '@type': 'Service',
      name: 'Commercial Bakery Equipment Supplier & Manufacturer',
      serviceType: 'Bakery Equipment',
      provider: {
        '@type': 'LocalBusiness',
        name: 'VSD International',
        telephone: '+91-9250346370',
        address: { '@type': 'PostalAddress', addressLocality: 'Delhi', addressCountry: 'IN' },
        geo: { '@type': 'GeoCoordinates', latitude: 28.6139, longitude: 77.2090 },
      },
      areaServed: { '@type': 'Country', name: 'India' },
      description:
        'Commercial bakery equipment supplier & stainless-steel fabricator in Delhi. Deck ovens, mixers, proofers and custom display counters for bakeries, cafés and cloud bakeries across India.',
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
export default function BakeryEquipmentPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <ServiceBreadcrumb crumbs={[{ label: 'Services', href: '/services' }, { label: 'Bakery Equipment' }]} />

      {/* ── §1 Hero ───────────────────────────────────────────────────────── */}
      <section
        className="grain-overlay bakery-hero"
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
        <div
          aria-hidden="true"
          style={{
            position: 'absolute', top: 0, left: 0, right: 0, height: '2px',
            background: 'linear-gradient(90deg, transparent 5%, var(--gold-bright) 35%, var(--gold) 65%, transparent 95%)',
          }}
        />

        <div className="container mx-auto" style={{ maxWidth: '80rem', padding: '0 1.25rem', width: '100%' }}>
          <p className="section-label" style={{ textAlign: 'center', marginBottom: '0.875rem' }}>
            Bakery &amp; Patisserie
          </p>

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
            Commercial Bakery Equipment Supplier &amp; Manufacturer —{' '}
            <span className="gold-shimmer" style={{ fontWeight: 800, fontStyle: 'normal' }}>
              Delhi &amp; Pan India
            </span>
          </h1>

          <div
            aria-hidden="true"
            style={{
              width: 56, height: 3,
              background: 'linear-gradient(90deg, var(--gold-bright), var(--gold), var(--gold-deep))',
              borderRadius: 2,
              margin: '0 auto 1.25rem',
            }}
          />

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
            VSD International is a commercial bakery equipment supplier and stainless-steel fabricator that helps
            bakeries, cafés, confectioneries, hotels and cloud bakeries across India set up and run efficient baking
            operations. We supply the machines that define a bakery — deck and rotary rack ovens, planetary and
            spiral mixers, dough sheeters and proofers from leading global brands — and we manufacture the custom
            display counters, work tables and stainless-steel fabrication in our own Delhi facilities. From a single
            café oven to a full hotel patisserie, we design the layout, supply the equipment, install it and support
            it under one contract. ISO 9001:2015 certified and operating since 2009.
          </p>

          <div
            className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2"
            style={{ marginBottom: '1.25rem' }}
          >
            {[
              { icon: Shield, text: 'Authorised Dealer' },
              { icon: Award,  text: '15+ Years · ISO 9001:2015' },
              { icon: Cake,   text: 'Delhi-Made Fabrication' },
            ].map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center gap-2">
                <Icon size={13} style={{ color: 'var(--gold)', flexShrink: 0 }} aria-hidden="true" />
                <span style={{ fontFamily: 'var(--font-inter)', fontSize: '0.8125rem', fontWeight: 600, color: 'rgba(245,240,232,0.6)' }}>
                  {text}
                </span>
              </div>
            ))}
          </div>

          <div
            className="flex flex-col sm:flex-row gap-3 justify-center items-center"
            style={{ marginBottom: '2.5rem' }}
          >
            <a
              href="https://wa.me/919250346370?text=Hi%20VSD%2C%20I%20need%20commercial%20bakery%20equipment.%20Please%20share%20equipment%20list%20and%20pricing."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold inline-flex items-center gap-2"
              style={{ minHeight: '3rem', paddingLeft: '1.75rem', paddingRight: '1.75rem' }}
            >
              <MessageCircle size={15} aria-hidden="true" /> Get Bakery Equipment Quote
            </a>
            <Link
              href="/services/commercial-kitchen-equipment"
              className="btn-ghost-dark inline-flex items-center gap-2"
              style={{ minHeight: '3rem' }}
            >
              All Kitchen Equipment <ArrowRight size={14} aria-hidden="true" />
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {[
              { label: 'Operating Since', value: '2009' },
              { label: 'Certification',   value: 'ISO 9001' },
              { label: 'Experience',      value: '15+ Yrs' },
              { label: 'Delivery',        value: 'Pan-India' },
            ].map(({ label, value }) => (
              <div
                key={label}
                className="rounded-xl flex flex-col items-center justify-center text-center"
                style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(201,168,76,0.15)', padding: '1.125rem 0.75rem' }}
              >
                <span style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(1.375rem, 2.2vw, 1.875rem)', fontWeight: 800, color: 'var(--gold-bright)', lineHeight: 1 }}>
                  {value}
                </span>
                <span style={{ fontFamily: 'var(--font-inter)', fontSize: '0.75rem', color: 'rgba(245,240,232,0.38)', marginTop: '0.375rem', lineHeight: 1.3 }}>
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom wave ornament */}
        <div aria-hidden="true" style={{ position: 'absolute', bottom: 0, left: 0, right: 0, lineHeight: 0, pointerEvents: 'none' }}>
          <svg viewBox="0 0 1440 90" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" style={{ display: 'block', width: '100%', height: '90px' }}>
            <path d="M0,55 C180,90 360,20 540,55 C720,90 900,20 1080,55 C1260,90 1380,40 1440,55 L1440,90 L0,90 Z" fill="rgba(201,168,76,0.04)" />
            <path d="M0,62 C200,30 400,85 600,62 C800,38 1000,80 1200,62 C1320,50 1390,68 1440,62 L1440,90 L0,90 Z" fill="rgba(201,168,76,0.06)" />
            <path d="M0,55 C180,90 360,20 540,55 C720,90 900,20 1080,55 C1260,90 1380,40 1440,55" fill="none" stroke="url(#bakeryWaveGold1)" strokeWidth="1.5" opacity="0.55" />
            <path d="M0,68 C160,42 340,82 520,68 C700,54 880,82 1060,68 C1240,54 1370,74 1440,68" fill="none" stroke="url(#bakeryWaveGold2)" strokeWidth="1" opacity="0.35" />
            <path d="M0,78 C200,62 400,88 600,78 C800,68 1000,86 1200,78 C1340,72 1400,80 1440,78" fill="none" stroke="rgba(201,168,76,0.2)" strokeWidth="0.75" />
            {[0, 180, 360, 540, 720, 900, 1080, 1260, 1440].map((x, i) => (
              <circle key={x} cx={x} cy={i % 2 === 0 ? 55 : 20} r="2.5" fill="rgba(201,168,76,0.45)" />
            ))}
            <defs>
              <linearGradient id="bakeryWaveGold1" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#C9A84C" stopOpacity="0.2" />
                <stop offset="30%" stopColor="#F0C442" stopOpacity="0.9" />
                <stop offset="60%" stopColor="#C9A84C" stopOpacity="0.7" />
                <stop offset="100%" stopColor="#A67C32" stopOpacity="0.3" />
              </linearGradient>
              <linearGradient id="bakeryWaveGold2" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#A67C32" stopOpacity="0.1" />
                <stop offset="50%" stopColor="#F0C442" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#C9A84C" stopOpacity="0.2" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </section>

      {/* ── Quick Links — "On This Page" jump-link nav ─────────────────────── */}
      <QuickLinksNav links={QUICK_LINKS} />

      {/* ── §2 What We Supply vs What We Build ──────────────────────────────── */}
      <section id="what-we-supply" aria-labelledby="supply-heading" style={{ background: '#FFFFFF', padding: 'clamp(3rem, 8vw, 5.5rem) 0' }}>
        <div className="container mx-auto" style={{ maxWidth: '80rem', padding: '0 1.25rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <p className="section-label" style={{ marginBottom: '0.75rem' }}>The Honest Split</p>
            <h2 id="supply-heading" style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', color: 'var(--text-dark)', lineHeight: 1.12 }}>
              Bakery Equipment We Supply &amp; Fabricate
            </h2>
            <div aria-hidden="true" style={{ width: 56, height: 3, background: 'linear-gradient(90deg, var(--gold-bright), var(--gold), var(--gold-deep))', borderRadius: 2, margin: '1.125rem auto 0' }} />
            <p style={{ marginTop: '1.25rem', fontFamily: 'var(--font-inter)', fontSize: '0.9375rem', color: 'var(--text-body)', lineHeight: 1.72, maxWidth: 700, margin: '1.25rem auto 0' }}>
              We&apos;re straight about how a bakery is best equipped: the precision baking machines come from
              specialist global manufacturers, so we supply them as an authorised dealer with genuine warranty and
              service. The stainless-steel counters, tables and fabrication, we build ourselves in Delhi — sized to
              your bakery.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card-lift rounded-2xl" style={{ background: 'var(--surface)', border: '1px solid var(--border)', padding: '2rem' }}>
              <div className="flex items-center gap-3" style={{ marginBottom: '1.25rem' }}>
                <div style={{ width: 44, height: 44, borderRadius: 10, background: 'rgba(201,168,76,0.08)', border: '1px solid rgba(201,168,76,0.18)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }} aria-hidden="true">
                  <Flame size={20} style={{ color: 'var(--gold)' }} strokeWidth={1.6} />
                </div>
                <h3 style={{ fontFamily: 'var(--font-playfair)', fontWeight: 700, fontSize: '1.0625rem', color: 'var(--text-dark)' }}>
                  We Supply <span style={{ color: 'var(--text-muted)', fontWeight: 400, fontSize: '0.8125rem' }}>(Authorised Brands)</span>
                </h3>
              </div>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
                {WE_SUPPLY.map(item => (
                  <li key={item} className="flex items-start gap-2.5">
                    <CheckCircle2 size={13} style={{ color: 'var(--gold)', flexShrink: 0, marginTop: '0.2rem' }} aria-hidden="true" />
                    <span style={{ fontFamily: 'var(--font-inter)', fontSize: '0.9375rem', color: 'var(--text-body)', lineHeight: 1.55 }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="card-lift rounded-2xl" style={{ background: 'var(--surface)', border: '1px solid var(--border)', padding: '2rem' }}>
              <div className="flex items-center gap-3" style={{ marginBottom: '1.25rem' }}>
                <div style={{ width: 44, height: 44, borderRadius: 10, background: 'rgba(201,168,76,0.08)', border: '1px solid rgba(201,168,76,0.18)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }} aria-hidden="true">
                  <Settings size={20} style={{ color: 'var(--gold)' }} strokeWidth={1.6} />
                </div>
                <h3 style={{ fontFamily: 'var(--font-playfair)', fontWeight: 700, fontSize: '1.0625rem', color: 'var(--text-dark)' }}>
                  We Manufacture <span style={{ color: 'var(--text-muted)', fontWeight: 400, fontSize: '0.8125rem' }}>(In-House, Delhi)</span>
                </h3>
              </div>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
                {WE_MANUFACTURE.map(item => (
                  <li key={item} className="flex items-start gap-2.5">
                    <CheckCircle2 size={13} style={{ color: 'var(--gold)', flexShrink: 0, marginTop: '0.2rem' }} aria-hidden="true" />
                    <span style={{ fontFamily: 'var(--font-inter)', fontSize: '0.9375rem', color: 'var(--text-body)', lineHeight: 1.55 }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div style={{ textAlign: 'center', marginTop: '2.25rem' }}>
            <Link href="/products/bakery" className="btn-ghost inline-flex items-center gap-2 text-sm">
              Browse Bakery Equipment Catalogue <ArrowRight size={14} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── §3 Bakeries We Equip ─────────────────────────────────────────────── */}
      <section id="bakeries-we-equip" aria-labelledby="bakeries-heading" style={{ background: 'var(--surface)', padding: 'clamp(3rem, 8vw, 4.5rem) 0', borderTop: '1px solid var(--border)' }}>
        <div className="container mx-auto" style={{ maxWidth: '80rem', padding: '0 1.25rem' }}>
          <div style={{ marginBottom: '2.5rem' }}>
            <p className="section-label" style={{ marginBottom: '0.75rem' }}>Who We Equip</p>
            <h2 id="bakeries-heading" style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(1.5rem, 2.4vw, 2rem)', color: 'var(--text-dark)', lineHeight: 1.2 }}>
              Bakeries We Equip Across India
            </h2>
            <div aria-hidden="true" style={{ width: 56, height: 3, background: 'linear-gradient(90deg, var(--gold-bright), var(--gold), var(--gold-deep))', borderRadius: 2, marginTop: '1rem' }} />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {BAKERIES_WE_EQUIP.map(({ icon: Icon, label, desc, href }) => {
              const cardStyle = { background: '#FFFFFF', border: '1px solid var(--border)', padding: '1.5rem', textDecoration: 'none' } as const;
              const inner = (
                <>
                  <div style={{ width: 44, height: 44, flexShrink: 0, borderRadius: '50%', background: 'rgba(201,168,76,0.08)', border: '1px solid rgba(201,168,76,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center' }} aria-hidden="true">
                    <Icon size={18} style={{ color: 'var(--gold)' }} strokeWidth={1.6} />
                  </div>
                  <div>
                    <p style={{ fontFamily: 'var(--font-inter)', fontWeight: 700, fontSize: '0.9375rem', color: 'var(--text-dark)', marginBottom: '0.35rem' }}>{label}</p>
                    <p style={{ fontFamily: 'var(--font-inter)', fontSize: '0.8125rem', color: 'var(--text-body)', lineHeight: 1.55 }}>{desc}</p>
                  </div>
                </>
              );
              return href ? (
                <Link key={label} href={href} className="card-lift flex gap-4 rounded-xl" style={cardStyle}>
                  {inner}
                </Link>
              ) : (
                <div key={label} className="flex gap-4 rounded-xl" style={cardStyle}>
                  {inner}
                </div>
              );
            })}
          </div>

          {/* Sibling / pillar links */}
          <div style={{ marginTop: '2rem', padding: '1.25rem 1.5rem', background: '#FFFFFF', border: '1px solid var(--border)', borderRadius: 8 }}>
            <p style={{ fontFamily: 'var(--font-inter)', fontWeight: 600, fontSize: '0.875rem', color: 'var(--text-dark)', marginBottom: '0.75rem' }}>
              Related Services
            </p>
            <div className="flex flex-wrap gap-3">
              {[
                ['Commercial Kitchen Equipment', '/services/commercial-kitchen-equipment'],
                ['Hotel Kitchen Equipment', '/services/hotel-kitchen-equipment'],
                ['Cloud Kitchen Setup', '/services/cloud-kitchen-setup'],
                ['Stainless Steel Fabrication', '/services/stainless-steel-fabrication'],
              ].map(([label, href]) => (
                <Link key={href} href={href} className="btn-ghost text-sm" style={{ minHeight: 'auto', padding: '0.5rem 1rem' }}>
                  {label} →
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── §4 Why Bakeries Choose VSD ───────────────────────────────────────── */}
      <section id="why-choose-vsd" aria-labelledby="why-heading" className="grain-overlay" style={{ background: 'var(--charcoal-light)', padding: 'clamp(3rem, 8vw, 5.5rem) 0', borderTop: '1px solid rgba(201,168,76,0.1)' }}>
        <div className="container mx-auto" style={{ maxWidth: '80rem', padding: '0 1.25rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <p className="section-label" style={{ marginBottom: '0.75rem' }}>Why Choose Us</p>
            <h2 id="why-heading" style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', color: 'var(--text-on-dark)', lineHeight: 1.12 }}>
              Why Bakeries Choose VSD International
            </h2>
            <div aria-hidden="true" style={{ width: 56, height: 3, background: 'linear-gradient(90deg, var(--gold-bright), var(--gold), var(--gold-deep))', borderRadius: 2, margin: '1.125rem auto 0' }} />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {WHY_VSD.map(({ title, body }) => (
              <div key={title} className="card-lift-dark rounded-2xl" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(201,168,76,0.12)', padding: '2rem' }}>
                <div style={{ width: 10, height: 10, borderRadius: '50%', background: 'var(--gold)', marginBottom: '1rem' }} aria-hidden="true" />
                <h3 style={{ fontFamily: 'var(--font-playfair)', fontWeight: 700, fontSize: '1.0625rem', color: 'var(--text-on-dark)', marginBottom: '0.75rem' }}>{title}</h3>
                <p style={{ fontFamily: 'var(--font-inter)', fontSize: '0.9375rem', color: 'rgba(245,240,232,0.65)', lineHeight: 1.75 }}>{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── §5 Price Guide ───────────────────────────────────────────────────── */}
      <section id="price-guide" aria-labelledby="price-heading" style={{ background: '#FFFFFF', padding: 'clamp(3rem, 8vw, 5.5rem) 0', borderTop: '1px solid var(--border)' }}>
        <div className="container mx-auto" style={{ maxWidth: '80rem', padding: '0 1.25rem' }}>
          <div style={{ maxWidth: '820px' }}>
            <p className="section-label" style={{ marginBottom: '0.75rem' }}>Indicative Budgets</p>
            <h2 id="price-heading" style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', color: 'var(--text-dark)', lineHeight: 1.12, marginBottom: '1rem' }}>
              Bakery Equipment Price Guide (India)
            </h2>
            <div aria-hidden="true" style={{ width: 56, height: 3, background: 'linear-gradient(90deg, var(--gold-bright), var(--gold), var(--gold-deep))', borderRadius: 2, marginBottom: '1.5rem' }} />
            <p style={{ fontFamily: 'var(--font-inter)', fontSize: '0.9375rem', color: 'var(--text-body)', lineHeight: 1.72, marginBottom: '2rem' }}>
              Bakery setup cost depends on output volume, whether you bake bread, cake or pastry, and how much
              custom fabrication you need. Indicative ranges below; we provide an itemised price list after
              understanding your menu and space.
            </p>
          </div>

          <div style={{ border: '1px solid var(--border)', borderRadius: 12, overflow: 'hidden' }}>
            <div className="hidden lg:grid lg:grid-cols-[1fr_1.8fr_0.9fr] lg:gap-4" style={{ background: 'var(--charcoal)', padding: '1rem 1.5rem' }}>
              {['Bakery Type', 'Typical Core Kit', 'Indicative Range'].map(h => (
                <span key={h} style={{ fontFamily: 'var(--font-inter)', fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'rgba(245,240,232,0.5)', lineHeight: 1.3 }}>
                  {h}
                </span>
              ))}
            </div>
            {PRICE_GUIDE.map(({ type, kit, range }, i) => (
              <div
                key={type}
                className="grid grid-cols-1 gap-2 lg:grid-cols-[1fr_1.8fr_0.9fr] lg:gap-4 lg:items-start"
                style={{ padding: '1.25rem 1.5rem', background: i % 2 === 0 ? '#FFFFFF' : 'var(--surface)', borderTop: '1px solid var(--border)' }}
              >
                <span style={{ fontFamily: 'var(--font-inter)', fontWeight: 700, fontSize: '0.9375rem', color: 'var(--text-dark)' }}>{type}</span>
                <span style={{ fontFamily: 'var(--font-inter)', fontSize: '0.875rem', color: 'var(--text-body)', lineHeight: 1.5 }}>{kit}</span>
                <span style={{ fontFamily: 'var(--font-playfair)', fontWeight: 800, fontSize: '1rem', color: 'var(--gold)' }}>{range}</span>
              </div>
            ))}
          </div>

          <p style={{ marginTop: '1.5rem', fontFamily: 'var(--font-inter)', fontSize: '0.9375rem', color: 'var(--text-body)' }}>
            Want an itemised bakery equipment price list for your setup?{' '}
            <a
              href="https://wa.me/919250346370?text=Hi%20VSD%2C%20I%27d%20like%20a%20bakery%20equipment%20price%20list%20for%20my%20setup."
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: 'var(--gold)', fontWeight: 700, textDecoration: 'none' }}
            >
              Request a free quote →
            </a>
          </p>
          <p style={{ marginTop: '0.5rem', fontFamily: 'var(--font-inter)', fontSize: '0.8125rem', color: 'var(--text-muted)' }}>
            All ranges are indicative. Final pricing is confirmed after understanding your menu, output and space.
          </p>
        </div>
      </section>

      {/* ── §6 Featured Proof & Clients ──────────────────────────────────────── */}
      <section id="bakery-projects" aria-labelledby="proof-heading" style={{ background: 'var(--surface)', padding: 'clamp(3rem, 8vw, 5rem) 0', borderTop: '1px solid var(--border)' }}>
        <div className="container mx-auto" style={{ maxWidth: '80rem', padding: '0 1.25rem' }}>
          <p className="section-label" style={{ marginBottom: '0.75rem' }}>Proof</p>
          <h2 id="proof-heading" style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(1.5rem, 2.4vw, 2rem)', color: 'var(--text-dark)', marginBottom: '2rem', lineHeight: 1.2 }}>
            Bakery &amp; Patisserie Work
          </h2>

          <div className="rounded-2xl overflow-hidden" style={{ background: '#FFFFFF', border: '1px solid var(--border)' }}>
            <div style={{ background: 'linear-gradient(135deg, var(--charcoal) 0%, var(--charcoal-mid) 100%)', height: 160, display: 'flex', alignItems: 'center', justifyContent: 'center' }} aria-hidden="true">
              <Cake size={52} style={{ color: 'rgba(201,168,76,0.3)' }} strokeWidth={1} />
            </div>
            <div style={{ padding: '2rem' }}>
              <span style={{ fontFamily: 'var(--font-inter)', fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--gold)' }}>
                Hotel Patisserie &amp; Fabrication
              </span>
              <p style={{ fontFamily: 'var(--font-inter)', fontSize: '0.9375rem', color: 'var(--text-body)', lineHeight: 1.75, maxWidth: 680, margin: '0.875rem 0 0' }}>
                Our bakery and patisserie sections form part of the larger hotel and institutional kitchens we
                deliver — including the in-house bakery zone of the four-zone kitchen at{' '}
                <Link href="/services/hotel-kitchen-equipment" style={{ color: 'var(--gold)', fontWeight: 600, textDecoration: 'none' }}>
                  Hyatt Regency Delhi
                </Link>
                , and refrigerated sweet and display counters fabricated for confectionery clients.
              </p>
            </div>
          </div>

          <Link href="/projects/" className="inline-flex items-center gap-1.5" style={{ marginTop: '1.75rem', color: 'var(--gold)', fontFamily: 'var(--font-inter)', fontWeight: 700, fontSize: '0.9375rem', textDecoration: 'none' }}>
            View All Projects <ArrowRight size={14} aria-hidden="true" />
          </Link>
        </div>
      </section>

      {/* ── §7 Bakery Brands We Supply ───────────────────────────────────────── */}
      <BrandsGrid
        brands={BAKERY_BRANDS}
        label="Authorised Dealer"
        heading={<>Bakery Brands We Supply &amp; Install</>}
        description="As an authorised dealer we supply specialist bakery brands — including Chanmag and Berjaya for ovens and mixers — alongside the broader global brands in our range, all with manufacturer warranty and our own service support in India."
        viewAllHref="/brands"
        viewAllText="View All Brands We Supply →"
      />

      {/* ── §8 Cloud Bakery Setup ────────────────────────────────────────────── */}
      <section id="cloud-bakery-setup" aria-labelledby="cloud-heading" style={{ background: '#FFFFFF', padding: 'clamp(3rem, 8vw, 5rem) 0', borderTop: '1px solid var(--border)' }}>
        <div className="container mx-auto" style={{ maxWidth: '80rem', padding: '0 1.25rem' }}>
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-8 items-center">
            <div>
              <p className="section-label" style={{ marginBottom: '0.75rem' }}>Growth Segment</p>
              <h2 id="cloud-heading" style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(1.5rem, 2.4vw, 2rem)', color: 'var(--text-dark)', lineHeight: 1.2, marginBottom: '1.25rem' }}>
                Setting Up a Cloud or Home Bakery
              </h2>
              <p style={{ fontFamily: 'var(--font-inter)', fontSize: '0.9375rem', color: 'var(--text-body)', lineHeight: 1.75, marginBottom: '1.5rem' }}>
                Cloud and home bakeries need a lean, high-efficiency setup — typically one quality deck oven, a
                planetary mixer, a proofer and compact refrigeration and storage — sized to deliver volume from a
                small footprint. We help delivery-first bakers choose the right core equipment without over-buying,
                and can scale the setup as orders grow.
              </p>
              <Link href="/services/cloud-kitchen-setup" className="btn-ghost inline-flex items-center gap-2 text-sm">
                Explore Cloud Kitchen Setup <ArrowRight size={14} aria-hidden="true" />
              </Link>
            </div>
            <div className="rounded-2xl" style={{ background: 'var(--surface)', border: '1px solid var(--border)', padding: '2rem' }}>
              <p style={{ fontFamily: 'var(--font-inter)', fontWeight: 700, fontSize: '0.875rem', color: 'var(--text-dark)', marginBottom: '1rem' }}>
                Lean Cloud Bakery Core Kit
              </p>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {[
                  '1 deck oven — sized to your daily bake count',
                  '1 planetary mixer — batters, cream & cake mix',
                  '1 proofer — controlled fermentation in a small footprint',
                  'Compact refrigeration & storage for delivery turnaround',
                ].map(item => (
                  <li key={item} className="flex items-start gap-2.5">
                    <Refrigerator size={14} style={{ color: 'var(--gold)', flexShrink: 0, marginTop: '0.15rem' }} aria-hidden="true" />
                    <span style={{ fontFamily: 'var(--font-inter)', fontSize: '0.875rem', color: 'var(--text-body)', lineHeight: 1.55 }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── §9 Cities We Serve ───────────────────────────────────────────────── */}
      <CitiesGrid serviceSlug="bakery-equipment" />

      {/* ── §10 FAQ ──────────────────────────────────────────────────────────── */}
      <ServiceFAQ faqs={FAQS} heading="Frequently Asked Questions — Bakery Equipment" />

      {/* ── §11 CTA ──────────────────────────────────────────────────────────── */}
      <ServiceCTA
        heading="Get a Free Bakery Equipment Consultation"
        subtext="Tell us what you bake and your target output — we'll recommend the right ovens, mixers and fabrication, with an itemised price list and, for larger setups, a free layout. No obligation."
        serviceName="Bakery Equipment"
      />
    </>
  );
}
