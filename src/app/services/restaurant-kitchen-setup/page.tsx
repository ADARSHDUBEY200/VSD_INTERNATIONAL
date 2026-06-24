import type { Metadata } from 'next';
import Link from 'next/link';
import {
  UtensilsCrossed, Shield, Award, CheckCircle2, ArrowRight, MessageCircle,
  Flame, Snowflake, Droplets, Wind, Soup, Coffee, Building2, Beer, Network, ChefHat,
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
  title: 'Restaurant Kitchen Setup & Equipment Supplier | VSD',
  description:
    'Restaurant kitchen setup in India — design, fabrication, equipment supply & installation for restaurants, QSR & cafés. ISO 9001:2015 certified.',
  alternates: { canonical: 'https://vsdinternational.com/services/restaurant-kitchen-setup/' },
  openGraph: {
    url: 'https://vsdinternational.com/services/restaurant-kitchen-setup/',
    title: 'Restaurant Kitchen Setup & Equipment — Design, Supply & Install | VSD International',
    description:
      'Turnkey restaurant kitchen setup in India — design, custom fabrication, equipment supply and installation for restaurants, QSR chains and cafés. ISO 9001:2015 certified.',
    images: [{ url: 'https://vsdinternational.com/og-image.jpg', width: 1200, height: 630 }],
  },
};

/* ─── §2 What a Setup Includes ────────────────────────────────────────────── */
const SETUP_STATIONS = [
  {
    icon: Flame,
    title: 'Cooking Line / Hot Kitchen',
    desc: 'Gas and induction ranges, Chinese ranges, tandoors, griddles, deep fryers, salamanders and combi ovens — the production line sized to your covers and cuisine.',
  },
  {
    icon: Soup,
    title: 'Preparation & Cold Kitchen',
    desc: 'Work tables, food-prep machines, cold counters and salad stations for mise en place and assembly.',
  },
  {
    icon: Snowflake,
    title: 'Refrigeration & Cold Storage',
    desc: 'Under-counter and vertical units, walk-in cold rooms and blast chillers, sized to your storage and HACCP needs.',
  },
  {
    icon: Droplets,
    title: 'Warewashing & Hygiene',
    desc: 'Dishwashers, three-sink units, pre-rinse stations and grease traps engineered for service-hour throughput.',
  },
  {
    icon: Wind,
    title: 'Exhaust & Ventilation',
    desc: 'Stainless-steel hoods, ducting and fresh-air systems sized to the cooking load and fire code.',
  },
  {
    icon: ChefHat,
    title: 'Service & Pass + Custom SS Fabrication',
    desc: 'Pickup counters, bain maries and hot/cold pass, plus the work tables, sinks, shelving and hoods we fabricate in-house in SS 304 to your exact layout.',
  },
];

/* ─── §3 Our Setup Process ────────────────────────────────────────────────── */
const SETUP_PROCESS = [
  { title: 'Free site visit & brief', desc: 'We assess your space, utilities and menu, and understand your covers and service style.' },
  { title: 'CAD layout & workflow design', desc: 'We plan stations and flow for speed, hygiene and ergonomics, and share the layout for your approval.' },
  { title: 'Equipment & fabrication plan', desc: 'An itemised plan of supplied equipment and custom stainless-steel stations, costed line by line.' },
  { title: 'Manufacturing & supply', desc: 'We fabricate the SS stations in Delhi and procure the authorised-brand equipment.' },
  { title: 'Installation & commissioning', desc: 'We install, connect, test and hand over a kitchen ready to run, and train your team.' },
  { title: 'After-sales & AMC', desc: 'Ongoing maintenance, spares and priority service keep the kitchen running.' },
];

/* ─── §4 Restaurants We Set Up ────────────────────────────────────────────── */
const RESTAURANTS_WE_SET_UP = [
  {
    icon: UtensilsCrossed,
    label: 'Fine-Dining & Casual Restaurants',
    desc: 'Full production, cold and warewashing kitchens built around the menu and covers.',
    href: undefined,
  },
  {
    icon: Network,
    label: 'QSR & Fast Food',
    desc: 'Compact, high-throughput lines designed for speed and consistency across outlets.',
    href: undefined,
  },
  {
    icon: Coffee,
    label: 'Cafés & Coffee Shops',
    desc: 'Efficient small-footprint kitchens combining cooking, beverage and display.',
    href: undefined,
  },
  {
    icon: ChefHat,
    label: 'Multi-Cuisine & Indian Restaurants',
    desc: 'Tandoor, Chinese range and bulk cooking equipment we manufacture in-house.',
    href: undefined,
  },
  {
    icon: Beer,
    label: 'Bars & Pub Kitchens',
    desc: 'Kitchen plus bar and beverage equipment, coordinated together.',
    href: '/services/bar-equipment',
  },
  {
    icon: Building2,
    label: 'Restaurant Chains & Multi-Outlet',
    desc: 'Repeatable kitchen specifications rolled out consistently across locations.',
    href: undefined,
  },
];

/* ─── §7 Why Restaurants Choose VSD ───────────────────────────────────────── */
const WHY_VSD = [
  {
    title: 'Design-First, Not Box-Selling',
    body: 'We plan the kitchen layout and workflow before quoting equipment, so you get a kitchen that runs well — not just a pile of machines that happen to fit.',
  },
  {
    title: 'Manufacturer + Authorised Dealer',
    body: 'We fabricate the custom stainless-steel stations in Delhi and supply global brands as an authorised dealer — one source for both, with factory pricing on the steel and genuine warranty on the equipment.',
  },
  {
    title: 'Indian & Multi-Cuisine Capability',
    body: "Tandoors, Chinese ranges and bulk cooking equipment we manufacture ourselves, so Indian and multi-cuisine restaurants get authentic, high-output kit that importers can't match.",
  },
  {
    title: 'One Contract, Start to Finish',
    body: 'Design, supply, installation and AMC under a single accountable contract — and a repeatable spec for chains rolling out multiple outlets.',
  },
];

/* ─── §8 Setup Cost Guide ─────────────────────────────────────────────────── */
const COST_GUIDE = [
  { type: 'Café / Small QSR',                    scope: 'Compact cooking line + refrigeration + warewash',         range: '₹8 – 20 lakh' },
  { type: 'Casual Dining Restaurant',             scope: 'Full hot & cold kitchen + storage + service',             range: '₹20 – 50 lakh' },
  { type: 'Fine-Dining / Large Multi-Cuisine',    scope: 'Multi-station production, cold chain & fabrication',      range: '₹50 lakh – ₹1.5 crore+' },
];

/* ─── §10 Brands We Supply ────────────────────────────────────────────────── */
const RESTAURANT_BRANDS: Brand[] = [
  { name: 'Rational',    tagline: 'Combi ovens',                  slug: 'rational'     },
  { name: 'Robot Coupe', tagline: 'Food processors',               slug: 'robot-coupe'  },
  { name: 'Frymaster',   tagline: 'Commercial fryers',              slug: 'frymaster'    },
  { name: 'Scotsman',    tagline: 'Ice machines',                   slug: 'scotsman'     },
];

const CUISINE_EQUIPMENT = [
  'Tandoors — gas & charcoal, manufactured in-house',
  'Chinese ranges (Chinese bhattis) — high-pressure wok burners',
  'Bulk cookers & rice/dal cookers — high-volume Indian cuisine',
  'Dosa plates — South Indian griddle stations',
];

/* ─── Quick Links — "On This Page" jump-link nav ─────────────────────────── */
const QUICK_LINKS = [
  { href: '#setup-includes',        label: "What's Included",       sub: 'Cooking · Cold · Warewash · SS Fab' },
  { href: '#setup-process',         label: 'Our Setup Process',      sub: '6 Steps — Visit to AMC' },
  { href: '#restaurants-we-set-up', label: 'Restaurants We Set Up',  sub: 'Fine-Dine · QSR · Café · Chains' },
  { href: '#qsr-cafe',              label: 'QSR & Café Kitchens',    sub: 'Low-Competition Lane' },
  { href: '#design-layout',         label: 'Design & Layout',        sub: 'Workflow-First Planning' },
  { href: '#why-choose-vsd',        label: 'Why Choose VSD',         sub: 'Design-First · One Contract' },
  { href: '#cost-guide',            label: 'Setup Cost Guide',       sub: '₹8 Lakh – ₹1.5 Crore+' },
  { href: '#restaurant-projects',   label: 'Featured Proof',         sub: 'Hyatt F&B · Indian-Cuisine Kit' },
  { href: '#cuisine-equipment',     label: 'Brands & Cuisine Kit',   sub: 'Rational · Tandoors · Chinese Ranges' },
  { href: '#cities-we-serve',       label: 'Cities We Serve',        sub: 'Delhi · Mumbai & More' },
  { href: '#faqs',                  label: 'FAQs',                   sub: '56 Answers — Cost, QSR & More' },
  { href: '#get-a-quote',           label: 'Get a Free Quote',       sub: 'CAD Layout · 4-hr Response' },
];

/* ─── §12 FAQs (AEO — answer-first, unique to this page, 56 Qs in 12 groups) ── */
const FAQS = [
  /* Cost & Budget */
  {
    category: 'Cost & Budget',
    q: 'How much does it cost to set up a restaurant kitchen in India?',
    a: 'A restaurant kitchen setup in India typically ranges from about ₹8–20 lakh for a café or small QSR to ₹50 lakh–₹1.5 crore or more for a fine-dining or large multi-cuisine restaurant, with casual-dining kitchens usually ₹20–50 lakh. The figure depends on kitchen size, cuisine and the share of imported equipment. VSD provides an itemised quotation after a free site visit and layout.',
  },
  {
    category: 'Cost & Budget',
    q: 'What does a small café or QSR kitchen cost?',
    a: 'A café or small QSR kitchen usually costs around ₹8–20 lakh, covering a compact cooking line, refrigeration, warewashing and custom fabrication sized to a limited footprint. The exact figure depends on your menu and output. We design these lean so the kitchen fits the space and the budget without losing throughput.',
  },
  {
    category: 'Cost & Budget',
    q: 'What does a fine-dining restaurant kitchen cost?',
    a: 'A fine-dining or large multi-cuisine restaurant kitchen typically costs ₹50 lakh to ₹1.5 crore or more, driven by multiple production stations, a full cold chain, higher-end imported equipment and extensive stainless-steel fabrication. We scope it to your menu and covers so the spend matches the concept rather than over-building.',
  },
  {
    category: 'Cost & Budget',
    q: 'What are the main cost drivers in a restaurant kitchen setup?',
    a: 'The biggest cost drivers are kitchen size, cuisine and menu complexity, the share of imported versus custom-fabricated equipment, and the cold-chain and ventilation requirements. Because we both manufacture fabrication and supply imported brands, we balance these to fit your budget rather than defaulting to the most expensive option.',
  },
  {
    category: 'Cost & Budget',
    q: 'Can I set up a restaurant kitchen on a limited budget?',
    a: 'Yes — we can build a lean, efficient kitchen by prioritising the essential cooking, cold and warewashing stations, using custom fabrication where it matches imported equipment for less, and phasing non-critical additions. A tight budget still buys a workable, compliant kitchen when the layout and equipment are chosen carefully.',
  },
  {
    category: 'Cost & Budget',
    q: 'How much of the budget goes to imported versus custom equipment?',
    a: 'Imported cooking and refrigeration equipment usually accounts for a significant share of a restaurant kitchen budget, while custom stainless-steel fabrication and Indian-cuisine equipment we build in-house often cost less than imported equivalents. We advise where an import is worth it and where in-house fabrication does the same job, so the split fits your budget.',
  },
  {
    category: 'Cost & Budget',
    q: 'Do you provide an itemised restaurant kitchen quote?',
    a: 'Yes — after a free site visit and layout we provide a fully itemised quotation covering each station, equipment item, capacity, brand and fabrication, so there are no hidden costs. This lets you and any investors or partners evaluate the kitchen line by line before committing.',
  },

  /* Timeline & Process */
  {
    category: 'Timeline & Process',
    q: 'How long does a restaurant kitchen setup take?',
    a: 'Most restaurant kitchens are designed, built and commissioned in about 21 to 45 days, depending on size, cuisine and the amount of custom fabrication. A compact café or QSR can be faster, while a large multi-cuisine kitchen runs toward the upper end. We confirm a fixed timeline at the proposal stage and work to your opening date.',
  },
  {
    category: 'Timeline & Process',
    q: 'What is the step-by-step process for setting up a restaurant kitchen?',
    a: 'Setting up a restaurant kitchen follows six stages: free site visit and brief, CAD layout and workflow design, an itemised equipment and fabrication plan, manufacturing and supply, installation and commissioning, then after-sales AMC. You approve the layout and costs before any order, so timeline and scope are agreed up front.',
  },
  {
    category: 'Timeline & Process',
    q: 'Can you set up a kitchen in time for my opening date?',
    a: 'Yes — we plan the project backwards from your opening date, fixing the layout, fabrication and equipment schedule to hit it. Sharing your target date early lets us sequence design, manufacturing and installation so the kitchen is commissioned and your team trained before launch.',
  },
  {
    category: 'Timeline & Process',
    q: 'Do you provide a CAD layout before I commit?',
    a: 'Yes — we provide a CAD-based kitchen layout as part of the proposal, before any order is placed. It maps stations, workflow, utilities and ventilation against your menu and space, so you can review and refine the design before committing budget.',
  },
  {
    category: 'Timeline & Process',
    q: 'Can you set up a kitchen in a running restaurant without a long closure?',
    a: 'Yes — for an existing restaurant we phase the work so sections are replaced while the rest stays usable, and schedule disruptive activities around service or off-days. We plan the sequence with you to minimise closure and protect revenue during the upgrade.',
  },
  {
    category: 'Timeline & Process',
    q: 'Do you handle installation and commissioning, or only supply?',
    a: 'VSD handles complete installation and commissioning, not just supply — our engineers position, connect, test and commission every station, train your team and provide a formal handover. This single-vendor turnkey model is what separates a design-led partner from a seller who only ships equipment.',
  },

  /* What's Included */
  {
    category: "What's Included",
    q: 'What is included in a turnkey restaurant kitchen setup?',
    a: 'A turnkey restaurant kitchen setup covers everything from design to handover under one contract: site assessment, CAD layout, equipment supply, custom stainless-steel fabrication, installation, commissioning, staff training and post-installation AMC. One team is accountable for the whole kitchen, rather than coordinating separate designers, fabricators and suppliers.',
  },
  {
    category: "What's Included",
    q: 'What equipment does a restaurant kitchen need?',
    a: 'A restaurant kitchen needs a cooking line (ranges, fryers, griddles, ovens, and a tandoor or Chinese range for Indian and multi-cuisine menus), preparation and cold stations, refrigeration, warewashing, exhaust ventilation and custom stainless-steel fabrication. The exact mix depends on your menu and covers, which is why we plan the station list around your concept.',
  },
  {
    category: "What's Included",
    q: "What's the difference between commercial and domestic kitchen equipment for a restaurant?",
    a: "Commercial restaurant equipment is built for continuous high-volume service with heavier-gauge steel, higher output and durability that domestic equipment can't sustain. It also meets the hygiene and safety standards inspections require. Using domestic equipment in a restaurant leads to early failure and compliance problems, so we specify commercial-grade throughout.",
  },
  {
    category: "What's Included",
    q: 'Do you supply the exhaust and ventilation too?',
    a: 'Yes — exhaust hoods, ducting and fresh-air systems are part of the setup, sized to your cooking load and fire code. Correct ventilation removes heat, smoke and grease and is usually required to pass inspections. We design and fabricate the hood system as an integral part of the kitchen, not a later add-on.',
  },
  {
    category: "What's Included",
    q: 'Do you supply refrigeration and cold storage?',
    a: 'Yes — we supply and install under-counter and vertical refrigeration, walk-in cold rooms, blast chillers and display units, sized to your storage volume and menu. The cold chain is planned with the rest of the kitchen so food stays safe and service flows smoothly.',
  },
  {
    category: "What's Included",
    q: 'Do you supply dishwashing and warewashing equipment?',
    a: 'Yes — we supply hood-type and rack-conveyor dishwashers, three-sink units, pre-rinse stations and grease traps, sized to your service-hour load. Warewashing is specified so it clears peak covers without becoming a bottleneck during busy service.',
  },

  /* Design & Layout */
  {
    category: 'Design & Layout',
    q: 'Do you design the kitchen layout, or only supply equipment?',
    a: "We design the layout first, then supply and install — we're a design-led turnkey partner, not an equipment-only seller. Our team plans the workflow from receiving to warewashing for speed, hygiene and ergonomics, shares a CAD layout for approval, and builds the kitchen to match. Good design is what makes a restaurant kitchen run well.",
  },
  {
    category: 'Design & Layout',
    q: 'Why does kitchen layout matter for a restaurant?',
    a: 'Layout decides how fast and safely a restaurant runs — a good design lets staff and food move without crossing paths, speeds up service, and keeps raw and cooked areas separated for hygiene. A poor layout slows every shift and creates safety and compliance problems. We plan the flow before specifying equipment.',
  },
  {
    category: 'Design & Layout',
    q: 'What kitchen layout is best for a small restaurant?',
    a: 'Small restaurants usually suit a tight galley or single-line layout where stations sit along one run for an efficient, compact workflow, while busier kitchens use island or zoned arrangements. The right choice depends on your space and menu. We design the configuration around your covers rather than applying a fixed template.',
  },
  {
    category: 'Design & Layout',
    q: 'How much space does a restaurant kitchen need?',
    a: 'The space a restaurant kitchen needs depends on covers, menu and number of stations, but the priority is workflow over raw area — clear zones for storage, prep, cooking, plating and warewashing with safe flow. Custom fabrication lets us fit a functional kitchen into compact or irregular spaces, which matters in city locations.',
  },
  {
    category: 'Design & Layout',
    q: 'Can you design a kitchen for an unusual or small space?',
    a: 'Yes — fitting a working kitchen into a tight, irregular or basement space is a particular strength, because we fabricate the stainless-steel stations in-house to your exact dimensions. We combine functions into fewer well-chosen units so a small or awkward footprint still delivers full service.',
  },

  /* QSR & Café */
  {
    category: 'QSR & Café',
    q: 'Do you set up QSR and fast-food kitchens?',
    a: 'Yes — QSR and fast-food kitchens are a particular strength, where we design compact, high-throughput lines built for speed and consistency in limited space. We standardise the kitchen so every outlet performs the same and scales cleanly as the brand adds locations, supplying equipment and fabrication as one package.',
  },
  {
    category: 'QSR & Café',
    q: 'What equipment does a QSR kitchen need?',
    a: 'A QSR kitchen needs a focused, high-output line matched to a fixed menu — typically fryers, griddles, a range or charbroiler, holding and assembly stations, refrigeration and compact warewashing — arranged for fast, repeatable service. We design the line around your specific menu so each station keeps pace at peak.',
  },
  {
    category: 'QSR & Café',
    q: 'How is a café kitchen different from a restaurant kitchen?',
    a: 'A café kitchen is smaller and more beverage- and display-led, combining a compact cooking section with coffee equipment, refrigeration and display in a tight footprint, while a full restaurant kitchen has larger, separated production stations. We design café kitchens for efficiency in limited space without sacrificing menu range.',
  },
  {
    category: 'QSR & Café',
    q: 'Can you also set up a cloud or delivery kitchen?',
    a: 'Yes — we set up cloud and delivery-only kitchens as well, with lean, high-efficiency layouts focused on throughput rather than dine-in service. Cloud kitchens differ from dine-in QSR, so we plan them specifically for delivery volume; this is covered in detail on our cloud kitchen setup page.',
  },
  {
    category: 'QSR & Café',
    q: 'How do you keep a QSR kitchen fast and consistent?',
    a: 'Speed and consistency come from a tight line layout, equipment sized to peak output, standardised stations and a workflow that minimises movement. We design QSR kitchens so the same spec can be repeated across outlets, which keeps service times and food quality consistent as the brand grows.',
  },

  /* Cuisine */
  {
    category: 'Cuisine',
    q: 'Can you set up a kitchen for an Indian restaurant?',
    a: "Yes — and it's an advantage, because we manufacture the cuisine-defining equipment ourselves: tandoors, Chinese ranges, bulk cookers and dosa plates, built in Delhi for daily high-output use. Combined with the global cooking and refrigeration brands we supply, an Indian restaurant gets authentic kit and reliable equipment from one partner.",
  },
  {
    category: 'Cuisine',
    q: 'Do you manufacture tandoors and Chinese ranges?',
    a: "Yes — tandoors, Chinese ranges (Chinese bhattis), bulk cookers and dosa plates are equipment we manufacture in-house in Delhi, built heavy-duty for continuous restaurant use. Making these ourselves means they're sized to your kitchen and priced better than imported equivalents, with direct support if anything needs service.",
  },
  {
    category: 'Cuisine',
    q: 'What equipment does a multi-cuisine restaurant need?',
    a: 'A multi-cuisine restaurant needs a versatile cooking line — ranges and combi ovens for continental, a Chinese range for Asian, and a tandoor and bulk cookers for Indian — plus shared prep, cold and warewashing stations. We zone the kitchen so each cuisine has the right equipment without duplicating everything.',
  },
  {
    category: 'Cuisine',
    q: 'Can you set up a kitchen for a pizzeria or Italian restaurant?',
    a: 'Yes — we set up pizzeria and Italian kitchens with the right ovens (deck or conveyor pizza ovens), dough preparation, refrigeration and prep stations, sized to your output. We supply the specialist equipment and fabricate the work and prep surfaces to fit your space.',
  },
  {
    category: 'Cuisine',
    q: 'What is special about a North Indian or tandoor kitchen setup?',
    a: 'A North Indian kitchen is built around high-heat tandoor and bulk cooking, which need heavy-duty, well-ventilated equipment and a layout that handles intense heat and volume. Because we manufacture tandoors and bulk cookers ourselves, we build this kind of kitchen to genuinely withstand daily high-output service.',
  },

  /* Stations & Equipment */
  {
    category: 'Stations & Equipment',
    q: 'What goes into the main cooking line of a restaurant?',
    a: 'The main cooking line typically includes gas or induction ranges, a tandoor or Chinese range for Indian and Asian menus, griddles, deep fryers, salamanders and combi ovens, with an exhaust hood above. We size and arrange the line to your menu and peak covers so production keeps pace during service.',
  },
  {
    category: 'Stations & Equipment',
    q: 'What is a Chinese range and does my restaurant need one?',
    a: "A Chinese range (Chinese bhatti) is a high-pressure burner cooktop designed for fast wok cooking at very high heat, essential for any restaurant serving Indian-Chinese or pan-Asian food. If your menu includes wok dishes, it's a core piece. We manufacture Chinese ranges in-house, built for continuous high-heat service.",
  },
  {
    category: 'Stations & Equipment',
    q: 'What refrigeration does a restaurant need?',
    a: 'A restaurant typically needs under-counter and upright refrigeration at the line, a walk-in cold room or freezer for bulk storage, and possibly a blast chiller for prepped food, sized to your menu and volume. We plan the cold chain alongside the kitchen so storage and service flow together and food stays safe.',
  },
  {
    category: 'Stations & Equipment',
    q: 'How important is exhaust and ventilation in a restaurant kitchen?',
    a: 'Exhaust and ventilation are essential for safety, air quality, comfort and fire compliance — a correctly sized hood-and-duct system removes heat, smoke and grease and is usually required to pass inspections. We design and fabricate the ventilation as part of the kitchen, balanced with fresh-air supply for a workable environment.',
  },
  {
    category: 'Stations & Equipment',
    q: 'Do you supply bar and beverage equipment for restaurants?',
    a: 'Yes — for restaurants with a bar we supply back-bar chillers, ice machines, glass washers, beverage dispensers and coffee equipment, coordinated with the kitchen so utilities and layout work together. The bar is planned alongside the kitchen rather than as a separate afterthought.',
  },
  {
    category: 'Stations & Equipment',
    q: 'What is a bain marie or hot pass used for?',
    a: 'A bain marie holds prepared food at safe serving temperature using a heated water bath, and a hot pass is the service counter where finished dishes are held and collected. Both keep food at the right temperature during service. We fabricate these to fit your pass and plating area.',
  },

  /* Stainless Steel & Fabrication */
  {
    category: 'Stainless Steel & Fabrication',
    q: 'Do you manufacture custom stainless steel for restaurant kitchens?',
    a: 'Yes — custom stainless-steel fabrication is a core strength, built in-house in our Delhi facilities: work tables, exhaust hoods, sinks, shelving, pass counters and storage racks made to your exact layout. In-house fabrication means the kitchen is built around your real space rather than forced to fit standard sizes.',
  },
  {
    category: 'Stainless Steel & Fabrication',
    q: 'Which stainless steel grade do you use?',
    a: "We use food-grade SS 304 as standard for restaurant kitchens because it's hygienic, corrosion-resistant and durable for daily service, with heavier or specialised grades where the environment demands. Food-safe stainless steel is essential for hygiene compliance and easy cleaning.",
  },
  {
    category: 'Stainless Steel & Fabrication',
    q: 'Can you fabricate equipment to fit my exact space?',
    a: "Yes — because we fabricate in-house, we build tables, counters, hoods and stations to your exact dimensions, which is a real advantage in compact, irregular or city-centre restaurant spaces where standard equipment won't fit. The kitchen is built to your footprint, not the other way round.",
  },

  /* Brands & Imports */
  {
    category: 'Brands & Imports',
    q: 'Which brands do you supply for restaurant kitchens?',
    a: 'We are an authorised dealer for leading global brands restaurants rely on, including Rational combi ovens, Robot Coupe food processors, Frymaster fryers and Scotsman ice machines, among others. All imported equipment comes with manufacturer warranty and our own service and spare-parts support in India.',
  },
  {
    category: 'Brands & Imports',
    q: 'Are imported machines better than Indian-made for a restaurant?',
    a: 'Imported machines often lead on precision and consistency for equipment like combi ovens and fryers, while well-built Indian-made and in-house-fabricated equipment offers strong value for ranges, tandoors and fabrication. The right choice is equipment-specific. Because we both supply and manufacture, we recommend based on what each station genuinely needs.',
  },
  {
    category: 'Brands & Imports',
    q: 'Do imported units come with warranty and service in India?',
    a: "Yes — imported equipment we supply carries the manufacturer's warranty and is backed by our local service and spare-parts support, so a fault is handled in-country rather than shipped abroad. Authorised supply plus in-country service is why restaurants choose a dealer over direct importing.",
  },

  /* Compliance & Licensing */
  {
    category: 'Compliance & Licensing',
    q: 'Is your restaurant kitchen equipment FSSAI compliant?',
    a: 'Yes — we design and equip restaurant kitchens to align with FSSAI hygiene norms and HACCP principles, using food-safe SS 304 surfaces, correct zoning and a temperature-controlled cold chain. Compliant materials, layout and ventilation are planned from the design stage so the kitchen supports licensing and audits rather than working against them.',
  },
  {
    category: 'Compliance & Licensing',
    q: 'Do I need an FSSAI licence for my restaurant?',
    a: 'Yes — any restaurant serving food in India must hold a valid FSSAI registration or licence, with the category depending on turnover and scale. While licensing is your responsibility, we design the kitchen with compliant surfaces, zoning and ventilation so the premises supports your application.',
  },
  {
    category: 'Compliance & Licensing',
    q: 'Do you handle fire-safety and exhaust compliance?',
    a: 'Yes — exhaust hoods, ducting and fresh-air systems are sized to the cooking load and fire code, which is essential for passing fire inspections and controlling heat and air quality. We plan fire-safety-relevant ventilation as an integral part of the kitchen design.',
  },

  /* Multi-Outlet & Chains */
  {
    category: 'Multi-Outlet & Chains',
    q: 'Can you set up multiple restaurant outlets or a chain?',
    a: "Yes — we develop a repeatable kitchen specification and roll it out consistently across outlets, so each new location opens to a proven, standardised kitchen. Centralised specification with our own fabrication keeps a chain's kitchens uniform while adapting to each site's space — critical for QSR and casual-dining brands scaling up.",
  },
  {
    category: 'Multi-Outlet & Chains',
    q: 'Can you replicate the same kitchen across my outlets?',
    a: "Yes — once we've designed and proven your kitchen, we can replicate the same layout, equipment spec and fabrication across new outlets, adjusting only for each site's dimensions. This gives consistent food quality, service speed and staff training across every location.",
  },

  /* Service & Getting Started */
  {
    category: 'Service & Getting Started',
    q: 'Do you provide AMC and after-sales service for restaurants?',
    a: 'Yes — our Annual Maintenance Contracts cover preventive maintenance, repairs, genuine spare parts and priority engineer response for the equipment we supply and build. Restaurant downtime directly costs covers and revenue, so an AMC protects uptime and extends equipment life. Terms are set out clearly in your contract.',
  },
  {
    category: 'Service & Getting Started',
    q: 'Do you set up restaurant kitchens outside Delhi?',
    a: 'Yes — based in Delhi NCR, we set up restaurant kitchens across India, including Mumbai, Bangalore, Hyderabad, Chennai, Pune and Jaipur, with our own engineers travelling for installation and commissioning. Our Delhi facilities support pan-India dispatch of both supplied equipment and custom fabrication.',
  },
  {
    category: 'Service & Getting Started',
    q: 'Are you a manufacturer or a dealer for restaurant equipment?',
    a: 'VSD is both: we manufacture the custom stainless-steel stations and Indian-cuisine equipment in our own Delhi facilities, and we supply global cooking and refrigeration brands as an authorised dealer. This means bespoke fit and factory pricing on the fabrication, genuine warranty on the imports, and one accountable partner for design, supply, install and service.',
  },
  {
    category: 'Service & Getting Started',
    q: 'Do you provide GST invoicing for restaurant purchases?',
    a: 'Yes — we provide proper GST invoicing and the quotations and documentation a business needs for procurement, financing or claiming input credit. This suits restaurant groups and franchises that need formal records for their accounts and approvals.',
  },
  {
    category: 'Service & Getting Started',
    q: 'How do I start setting up my restaurant kitchen?',
    a: "Share your restaurant type, cuisine, covers and location by phone or WhatsApp at +91-9250346370, or through the enquiry form, and we'll arrange a free site visit and layout. You'll receive a CAD design and an itemised quotation — typically within a few days — with proper GST invoicing for business purchases.",
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
        { '@type': 'ListItem', position: 3, name: 'Restaurant Kitchen Setup', item: 'https://vsdinternational.com/services/restaurant-kitchen-setup/' },
      ],
    },
    {
      '@type': 'ItemList',
      '@id': 'https://vsdinternational.com/services/restaurant-kitchen-setup/#page-sections',
      name: 'Restaurant Kitchen Setup Page Sections',
      description: 'Key sections of the restaurant kitchen setup page covering stations, process, restaurants served, QSR/café lane, design, pricing, proof, brands, FAQs and cities served.',
      numberOfItems: QUICK_LINKS.length,
      itemListElement: QUICK_LINKS.map((link, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        name: link.label,
        url: `https://vsdinternational.com/services/restaurant-kitchen-setup/${link.href}`,
        description: link.sub,
      })),
    },
    {
      '@type': 'Service',
      name: 'Restaurant Kitchen Setup & Equipment',
      serviceType: 'Restaurant Kitchen Setup',
      provider: {
        '@type': 'LocalBusiness',
        name: 'VSD International',
        telephone: '+91-9250346370',
        address: { '@type': 'PostalAddress', addressLocality: 'Delhi', addressCountry: 'IN' },
        geo: { '@type': 'GeoCoordinates', latitude: 28.6139, longitude: 77.2090 },
      },
      areaServed: { '@type': 'Country', name: 'India' },
      description:
        'Turnkey restaurant kitchen setup in India — design, custom stainless-steel fabrication, equipment supply and installation for restaurants, QSR chains and cafés.',
    },
    {
      '@type': 'HowTo',
      name: 'How We Set Up Your Restaurant Kitchen',
      step: SETUP_PROCESS.map((s, i) => ({
        '@type': 'HowToStep',
        position: i + 1,
        name: s.title,
        text: s.desc,
      })),
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
export default function RestaurantKitchenSetupPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <ServiceBreadcrumb crumbs={[{ label: 'Services', href: '/services' }, { label: 'Restaurant Kitchen Setup' }]} />

      {/* ── §1 Hero ───────────────────────────────────────────────────────── */}
      <section
        className="grain-overlay restaurant-hero"
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
            Restaurants &amp; QSR
          </p>

          <h1
            style={{
              fontFamily: 'var(--font-playfair)',
              fontSize: 'clamp(1.625rem, 3.8vw, 3rem)',
              fontWeight: 700,
              lineHeight: 1.12,
              letterSpacing: '-0.025em',
              color: 'var(--text-on-dark)',
              textAlign: 'center',
              marginBottom: '1rem',
            }}
          >
            Restaurant Kitchen Setup &amp; Equipment —{' '}
            <span className="gold-shimmer" style={{ fontWeight: 800, fontStyle: 'normal' }}>
              Design, Supply &amp; Install Across India
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
              maxWidth: '720px',
              margin: '0 auto 1.125rem',
              textAlign: 'center',
            }}
          >
            VSD International designs, supplies and installs complete restaurant kitchens — from fine-dining and
            casual restaurants to QSR chains and cafés — across India. We start with the layout, not the invoice:
            our team plans the workflow and equipment around your menu, covers and space, then manufactures the
            custom stainless-steel stations in our own Delhi facilities and supplies the cooking and refrigeration
            equipment as an authorised dealer of global brands. From a single restaurant to a multi-outlet rollout,
            we deliver the whole kitchen — design, fabrication, supply, installation and after-sales service —
            under one contract. ISO 9001:2015 certified and operating since 2009.
          </p>

          <div
            className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2"
            style={{ marginBottom: '1.25rem' }}
          >
            {[
              { icon: Shield, text: 'Turnkey Since 2009' },
              { icon: Award,  text: 'ISO 9001:2015' },
              { icon: ChefHat, text: 'Delhi-Made Fabrication' },
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
              href="https://wa.me/919250346370?text=Hi%20VSD%2C%20I%20need%20a%20restaurant%20kitchen%20setup.%20Please%20share%20details."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold inline-flex items-center gap-2"
              style={{ minHeight: '3rem', paddingLeft: '1.75rem', paddingRight: '1.75rem' }}
            >
              <MessageCircle size={15} aria-hidden="true" /> Get Restaurant Kitchen Quote
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
            <path d="M0,55 C180,90 360,20 540,55 C720,90 900,20 1080,55 C1260,90 1380,40 1440,55" fill="none" stroke="url(#restaurantWaveGold1)" strokeWidth="1.5" opacity="0.55" />
            <path d="M0,68 C160,42 340,82 520,68 C700,54 880,82 1060,68 C1240,54 1370,74 1440,68" fill="none" stroke="url(#restaurantWaveGold2)" strokeWidth="1" opacity="0.35" />
            <path d="M0,78 C200,62 400,88 600,78 C800,68 1000,86 1200,78 C1340,72 1400,80 1440,78" fill="none" stroke="rgba(201,168,76,0.2)" strokeWidth="0.75" />
            {[0, 180, 360, 540, 720, 900, 1080, 1260, 1440].map((x, i) => (
              <circle key={x} cx={x} cy={i % 2 === 0 ? 55 : 20} r="2.5" fill="rgba(201,168,76,0.45)" />
            ))}
            <defs>
              <linearGradient id="restaurantWaveGold1" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#C9A84C" stopOpacity="0.2" />
                <stop offset="30%" stopColor="#F0C442" stopOpacity="0.9" />
                <stop offset="60%" stopColor="#C9A84C" stopOpacity="0.7" />
                <stop offset="100%" stopColor="#A67C32" stopOpacity="0.3" />
              </linearGradient>
              <linearGradient id="restaurantWaveGold2" x1="0%" y1="0%" x2="100%" y2="0%">
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

      {/* ── §2 What a Setup Includes ─────────────────────────────────────────── */}
      <section id="setup-includes" aria-labelledby="includes-heading" style={{ background: '#FFFFFF', padding: 'clamp(3rem, 8vw, 5.5rem) 0' }}>
        <div className="container mx-auto" style={{ maxWidth: '80rem', padding: '0 1.25rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '3.25rem' }}>
            <p className="section-label" style={{ marginBottom: '0.75rem' }}>Station by Station</p>
            <h2 id="includes-heading" style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', color: 'var(--text-dark)', lineHeight: 1.12 }}>
              What&apos;s Included in a Restaurant Kitchen Setup
            </h2>
            <div aria-hidden="true" style={{ width: 56, height: 3, background: 'linear-gradient(90deg, var(--gold-bright), var(--gold), var(--gold-deep))', borderRadius: 2, margin: '1.125rem auto 0' }} />
            <p style={{ marginTop: '1.25rem', fontFamily: 'var(--font-inter)', fontSize: '0.9375rem', color: 'var(--text-body)', lineHeight: 1.72, maxWidth: 680, margin: '1.25rem auto 0' }}>
              A complete restaurant kitchen is built station by station around your menu and service flow.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SETUP_STATIONS.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="card-lift rounded-2xl" style={{ background: 'var(--surface)', border: '1px solid var(--border)', padding: '1.875rem' }}>
                <div style={{ width: 44, height: 44, borderRadius: 10, background: 'rgba(201,168,76,0.08)', border: '1px solid rgba(201,168,76,0.18)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }} aria-hidden="true">
                  <Icon size={20} style={{ color: 'var(--gold)' }} strokeWidth={1.6} />
                </div>
                <h3 style={{ fontFamily: 'var(--font-playfair)', fontWeight: 700, fontSize: '1.0625rem', color: 'var(--text-dark)', marginBottom: '0.75rem', lineHeight: 1.25 }}>{title}</h3>
                <p style={{ fontFamily: 'var(--font-inter)', fontSize: '0.9375rem', color: 'var(--text-body)', lineHeight: 1.7 }}>{desc}</p>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '2.25rem' }}>
            <Link href="/products/cooking" className="btn-ghost inline-flex items-center gap-2 text-sm">
              Browse Restaurant Kitchen Equipment <ArrowRight size={14} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── §3 Our Setup Process ─────────────────────────────────────────────── */}
      <section id="setup-process" aria-labelledby="process-heading" className="grain-overlay" style={{ background: 'var(--charcoal-light)', padding: 'clamp(3rem, 8vw, 5.5rem) 0', borderTop: '1px solid rgba(201,168,76,0.1)' }}>
        <div className="container mx-auto" style={{ maxWidth: '80rem', padding: '0 1.25rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <p className="section-label" style={{ marginBottom: '0.75rem' }}>The Turnkey Anchor</p>
            <h2 id="process-heading" style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', color: 'var(--text-on-dark)', lineHeight: 1.12 }}>
              How We Set Up Your Restaurant Kitchen
            </h2>
            <div aria-hidden="true" style={{ width: 56, height: 3, background: 'linear-gradient(90deg, var(--gold-bright), var(--gold), var(--gold-deep))', borderRadius: 2, margin: '1.125rem auto 0' }} />
          </div>
          <div style={{ maxWidth: '760px', margin: '0 auto' }}>
            {SETUP_PROCESS.map(({ title, desc }, i) => (
              <div key={title} className="flex gap-4" style={{ padding: '1.125rem 0', borderBottom: i < SETUP_PROCESS.length - 1 ? '1px solid rgba(201,168,76,0.12)' : 'none' }}>
                <div
                  style={{
                    width: 36, height: 36, flexShrink: 0,
                    borderRadius: 9,
                    background: 'var(--gold)',
                    color: '#1A1508',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontFamily: 'var(--font-inter)', fontWeight: 800, fontSize: '0.9375rem',
                  }}
                  aria-hidden="true"
                >
                  {i + 1}
                </div>
                <div>
                  <p style={{ fontFamily: 'var(--font-inter)', fontWeight: 700, fontSize: '0.9375rem', color: 'var(--text-on-dark)', marginBottom: '0.25rem' }}>{title}</p>
                  <p style={{ fontFamily: 'var(--font-inter)', fontSize: '0.875rem', color: 'rgba(245,240,232,0.6)', lineHeight: 1.6 }}>{desc}</p>
                </div>
              </div>
            ))}
          </div>
          <p style={{ textAlign: 'center', marginTop: '1.75rem', fontFamily: 'var(--font-inter)', fontSize: '0.875rem', color: 'rgba(245,240,232,0.45)' }}>
            You approve layout and costs before any order — no surprises.
          </p>
        </div>
      </section>

      {/* ── §4 Restaurants We Set Up ─────────────────────────────────────────── */}
      <section id="restaurants-we-set-up" aria-labelledby="restaurants-heading" style={{ background: 'var(--surface)', padding: 'clamp(3rem, 8vw, 4.5rem) 0', borderTop: '1px solid var(--border)' }}>
        <div className="container mx-auto" style={{ maxWidth: '80rem', padding: '0 1.25rem' }}>
          <div style={{ marginBottom: '2.5rem' }}>
            <p className="section-label" style={{ marginBottom: '0.75rem' }}>Who We Set Up</p>
            <h2 id="restaurants-heading" style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(1.5rem, 2.4vw, 2rem)', color: 'var(--text-dark)', lineHeight: 1.2 }}>
              Restaurants We Set Up Across India
            </h2>
            <div aria-hidden="true" style={{ width: 56, height: 3, background: 'linear-gradient(90deg, var(--gold-bright), var(--gold), var(--gold-deep))', borderRadius: 2, marginTop: '1rem' }} />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {RESTAURANTS_WE_SET_UP.map(({ icon: Icon, label, desc, href }) => {
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
                ['Kitchen Layout Design', '/services/kitchen-layout-design'],
                ['Kitchen Exhaust & Ventilation', '/services/kitchen-exhaust-ventilation'],
              ].map(([label, href]) => (
                <Link key={href} href={href} className="btn-ghost text-sm" style={{ minHeight: 'auto', padding: '0.5rem 1rem' }}>
                  {label} →
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── §5 QSR, Fast-Food & Café Kitchens ────────────────────────────────── */}
      <section id="qsr-cafe" aria-labelledby="qsr-heading" style={{ background: '#FFFFFF', padding: 'clamp(3rem, 8vw, 5rem) 0', borderTop: '1px solid var(--border)' }}>
        <div className="container mx-auto" style={{ maxWidth: '80rem', padding: '0 1.25rem' }}>
          <div style={{ maxWidth: '760px' }}>
            <div className="flex items-center gap-3" style={{ marginBottom: '0.75rem' }}>
              <p className="section-label" style={{ marginBottom: 0 }}>Your Best Lane</p>
              <span
                style={{
                  fontFamily: 'var(--font-inter)', fontSize: '0.625rem', fontWeight: 700,
                  letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--gold-deep)',
                  background: 'rgba(201,168,76,0.12)', border: '1px solid rgba(201,168,76,0.25)',
                  borderRadius: 20, padding: '0.2rem 0.6rem',
                }}
              >
                Low Competition
              </span>
            </div>
            <h2 id="qsr-heading" style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(1.5rem, 2.4vw, 2rem)', color: 'var(--text-dark)', lineHeight: 1.2, marginBottom: '1.25rem' }}>
              QSR, Fast-Food &amp; Café Kitchen Setup
            </h2>
            <p style={{ fontFamily: 'var(--font-inter)', fontSize: '0.9375rem', color: 'var(--text-body)', lineHeight: 1.75, marginBottom: '1.5rem' }}>
              Quick-service and café kitchens live or die on speed, consistency and footprint. We design compact,
              high-throughput lines that move orders fast in limited space, standardise the kitchen so every outlet
              performs the same, and scale cleanly as a brand adds locations. From a single café to a multi-city
              QSR rollout, we plan the layout, fabricate the stainless-steel stations and supply the cooking and
              refrigeration equipment as one package — so a new outlet opens to a proven, repeatable kitchen spec.
            </p>
            <Link href="/services/cloud-kitchen-setup" className="btn-ghost inline-flex items-center gap-2 text-sm">
              Explore Cloud Kitchen Setup (Delivery-Only) <ArrowRight size={14} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── §6 Design & Layout ───────────────────────────────────────────────── */}
      <section id="design-layout" aria-labelledby="design-heading" style={{ background: 'var(--surface)', padding: 'clamp(3rem, 8vw, 5rem) 0', borderTop: '1px solid var(--border)' }}>
        <div className="container mx-auto" style={{ maxWidth: '80rem', padding: '0 1.25rem' }}>
          <div style={{ maxWidth: '760px' }}>
            <p className="section-label" style={{ marginBottom: '0.75rem' }}>Differentiator</p>
            <h2 id="design-heading" style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(1.5rem, 2.4vw, 2rem)', color: 'var(--text-dark)', lineHeight: 1.2, marginBottom: '1.25rem' }}>
              Restaurant Kitchen Design &amp; Layout
            </h2>
            <p style={{ fontFamily: 'var(--font-inter)', fontSize: '0.9375rem', color: 'var(--text-body)', lineHeight: 1.75, marginBottom: '1.5rem' }}>
              Good kitchen design decides how fast and safely a restaurant runs. We plan the layout around a clean
              flow — receiving, storage, preparation, cooking, plating and warewashing — so staff and food move
              without crossing paths. The right configuration depends on your space and menu: a tight galley line
              for a compact QSR, an island arrangement for a busy production kitchen, or zoned stations for a
              multi-cuisine restaurant. We design for ergonomics, ventilation and hygiene compliance from the first
              drawing, then build the kitchen to match.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/services/kitchen-layout-design" className="btn-ghost inline-flex items-center gap-2 text-sm">
                Kitchen Layout Design <ArrowRight size={14} aria-hidden="true" />
              </Link>
              <Link href="/services/kitchen-exhaust-ventilation" className="btn-ghost inline-flex items-center gap-2 text-sm">
                Kitchen Exhaust &amp; Ventilation <ArrowRight size={14} aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── §7 Why Restaurants Choose VSD ────────────────────────────────────── */}
      <section id="why-choose-vsd" aria-labelledby="why-heading" className="grain-overlay" style={{ background: 'var(--charcoal-light)', padding: 'clamp(3rem, 8vw, 5.5rem) 0', borderTop: '1px solid rgba(201,168,76,0.1)' }}>
        <div className="container mx-auto" style={{ maxWidth: '80rem', padding: '0 1.25rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <p className="section-label" style={{ marginBottom: '0.75rem' }}>Why Choose Us</p>
            <h2 id="why-heading" style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', color: 'var(--text-on-dark)', lineHeight: 1.12 }}>
              Why Restaurants Choose VSD International
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

      {/* ── §8 Setup Cost Guide ──────────────────────────────────────────────── */}
      <section id="cost-guide" aria-labelledby="cost-heading" style={{ background: '#FFFFFF', padding: 'clamp(3rem, 8vw, 5.5rem) 0', borderTop: '1px solid var(--border)' }}>
        <div className="container mx-auto" style={{ maxWidth: '80rem', padding: '0 1.25rem' }}>
          <div style={{ maxWidth: '820px' }}>
            <p className="section-label" style={{ marginBottom: '0.75rem' }}>Indicative Budgets</p>
            <h2 id="cost-heading" style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', color: 'var(--text-dark)', lineHeight: 1.12, marginBottom: '1rem' }}>
              Restaurant Kitchen Setup Cost in India
            </h2>
            <div aria-hidden="true" style={{ width: 56, height: 3, background: 'linear-gradient(90deg, var(--gold-bright), var(--gold), var(--gold-deep))', borderRadius: 2, marginBottom: '1.5rem' }} />
            <p style={{ fontFamily: 'var(--font-inter)', fontSize: '0.9375rem', color: 'var(--text-body)', lineHeight: 1.72, marginBottom: '2rem' }}>
              Setup cost depends on restaurant type, kitchen size, cuisine and the share of imported equipment. The
              indicative ranges below help you plan; we provide an itemised quotation after a free site visit and
              layout.
            </p>
          </div>

          <div style={{ border: '1px solid var(--border)', borderRadius: 12, overflow: 'hidden' }}>
            <div className="hidden lg:grid lg:grid-cols-[1.1fr_1.8fr_0.9fr] lg:gap-4" style={{ background: 'var(--charcoal)', padding: '1rem 1.5rem' }}>
              {['Restaurant Type', 'Typical Scope', 'Indicative Range'].map(h => (
                <span key={h} style={{ fontFamily: 'var(--font-inter)', fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'rgba(245,240,232,0.5)', lineHeight: 1.3 }}>
                  {h}
                </span>
              ))}
            </div>
            {COST_GUIDE.map(({ type, scope, range }, i) => (
              <div
                key={type}
                className="grid grid-cols-1 gap-2 lg:grid-cols-[1.1fr_1.8fr_0.9fr] lg:gap-4 lg:items-start"
                style={{ padding: '1.25rem 1.5rem', background: i % 2 === 0 ? '#FFFFFF' : 'var(--surface)', borderTop: '1px solid var(--border)' }}
              >
                <span style={{ fontFamily: 'var(--font-inter)', fontWeight: 700, fontSize: '0.9375rem', color: 'var(--text-dark)' }}>{type}</span>
                <span style={{ fontFamily: 'var(--font-inter)', fontSize: '0.875rem', color: 'var(--text-body)', lineHeight: 1.5 }}>{scope}</span>
                <span style={{ fontFamily: 'var(--font-playfair)', fontWeight: 800, fontSize: '1rem', color: 'var(--gold)' }}>{range}</span>
              </div>
            ))}
          </div>

          <p style={{ marginTop: '1.5rem', fontFamily: 'var(--font-inter)', fontSize: '0.9375rem', color: 'var(--text-body)' }}>
            Want an itemised cost for your restaurant?{' '}
            <a
              href="https://wa.me/919250346370?text=Hi%20VSD%2C%20I%27d%20like%20a%20free%20layout%20%26%20quote%20for%20my%20restaurant%20kitchen."
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: 'var(--gold)', fontWeight: 700, textDecoration: 'none' }}
            >
              Request a free layout &amp; quote →
            </a>
          </p>
          <p style={{ marginTop: '0.5rem', fontFamily: 'var(--font-inter)', fontSize: '0.8125rem', color: 'var(--text-muted)' }}>
            All ranges are indicative. Final pricing is confirmed after a free site visit and layout.
          </p>
        </div>
      </section>

      {/* ── §9 Featured Proof & Clients ───────────────────────────────────────── */}
      <section id="restaurant-projects" aria-labelledby="proof-heading" style={{ background: 'var(--surface)', padding: 'clamp(3rem, 8vw, 5rem) 0', borderTop: '1px solid var(--border)' }}>
        <div className="container mx-auto" style={{ maxWidth: '80rem', padding: '0 1.25rem' }}>
          <p className="section-label" style={{ marginBottom: '0.75rem' }}>Proof</p>
          <h2 id="proof-heading" style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(1.5rem, 2.4vw, 2rem)', color: 'var(--text-dark)', marginBottom: '2rem', lineHeight: 1.2 }}>
            Restaurant &amp; F&amp;B Kitchens We&apos;ve Delivered
          </h2>

          <div className="rounded-2xl overflow-hidden" style={{ background: '#FFFFFF', border: '1px solid var(--border)' }}>
            <div style={{ background: 'linear-gradient(135deg, var(--charcoal) 0%, var(--charcoal-mid) 100%)', height: 160, display: 'flex', alignItems: 'center', justifyContent: 'center' }} aria-hidden="true">
              <UtensilsCrossed size={52} style={{ color: 'rgba(201,168,76,0.3)' }} strokeWidth={1} />
            </div>
            <div style={{ padding: '2rem' }}>
              <span style={{ fontFamily: 'var(--font-inter)', fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--gold)' }}>
                Hotel F&amp;B &amp; Indian-Cuisine Production
              </span>
              <p style={{ fontFamily: 'var(--font-inter)', fontSize: '0.9375rem', color: 'var(--text-body)', lineHeight: 1.75, maxWidth: 680, margin: '0.875rem 0 0' }}>
                Our restaurant and F&amp;B kitchen work includes the dining and all-day-restaurant outlets within
                the hotels we equip — among them the four-zone kitchen at{' '}
                <Link href="/services/hotel-kitchen-equipment" style={{ color: 'var(--gold)', fontWeight: 600, textDecoration: 'none' }}>
                  Hyatt Regency Delhi
                </Link>
                , delivered in 21 days — along with multi-cuisine production lines built around tandoor and
                Chinese-range cooking.
              </p>
            </div>
          </div>

          <Link href="/projects/" className="inline-flex items-center gap-1.5" style={{ marginTop: '1.75rem', color: 'var(--gold)', fontFamily: 'var(--font-inter)', fontWeight: 700, fontSize: '0.9375rem', textDecoration: 'none' }}>
            View All Projects <ArrowRight size={14} aria-hidden="true" />
          </Link>
        </div>
      </section>

      {/* ── §10 Cuisine Equipment We Build + Brands We Supply ────────────────── */}
      <section id="cuisine-equipment" aria-labelledby="cuisine-heading" className="grain-overlay" style={{ background: 'var(--charcoal)', padding: 'clamp(3rem, 8vw, 4rem) 0 0', borderTop: '1px solid rgba(201,168,76,0.1)' }}>
        <div className="container mx-auto" style={{ maxWidth: '80rem', padding: '0 1.25rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <p className="section-label" style={{ marginBottom: '0.75rem' }}>Make vs Import</p>
            <h2 id="cuisine-heading" style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(1.625rem, 2.6vw, 2.25rem)', color: 'var(--text-on-dark)', lineHeight: 1.15 }}>
              Indian-Cuisine Equipment We Manufacture
            </h2>
            <div aria-hidden="true" style={{ width: 56, height: 3, background: 'linear-gradient(90deg, var(--gold-bright), var(--gold), var(--gold-deep))', borderRadius: 2, margin: '1.125rem auto 0' }} />
            <p style={{ marginTop: '1rem', fontFamily: 'var(--font-inter)', fontSize: '0.9375rem', color: 'rgba(245,240,232,0.55)', maxWidth: 640, margin: '1rem auto 0' }}>
              For precision cooking and refrigeration we supply authorised global brands. For Indian and
              multi-cuisine restaurants, we manufacture the cuisine-defining equipment ourselves in Delhi.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3" style={{ maxWidth: 760, margin: '0 auto 2.5rem' }}>
            {CUISINE_EQUIPMENT.map(item => (
              <div key={item} className="flex items-start gap-2.5">
                <CheckCircle2 size={13} style={{ color: 'var(--gold)', flexShrink: 0, marginTop: '0.2rem' }} aria-hidden="true" />
                <span style={{ fontFamily: 'var(--font-inter)', fontSize: '0.9375rem', color: 'rgba(245,240,232,0.75)', lineHeight: 1.55 }}>{item}</span>
              </div>
            ))}
          </div>
        </div>

        <BrandsGrid
          brands={RESTAURANT_BRANDS}
          label="Authorised Dealer"
          heading={<>Brands We Supply &amp; Cuisine Equipment We Build</>}
          description="For precision cooking and refrigeration we supply authorised global brands — Rational, Robot Coupe, Frymaster, Scotsman and more — with manufacturer warranty and our own service support. This supply-plus-build model means a restaurant gets both global reliability and authentic, high-output Indian cooking kit from one partner."
          viewAllHref="/brands"
          viewAllText="View All Brands We Supply →"
        />
      </section>

      {/* ── §11 Cities We Serve ──────────────────────────────────────────────── */}
      <CitiesGrid serviceSlug="restaurant-kitchen-setup" />

      {/* ── §12 FAQ ──────────────────────────────────────────────────────────── */}
      <ServiceFAQ faqs={FAQS} heading="Frequently Asked Questions — Restaurant Kitchen Setup" />

      {/* ── §13 CTA ──────────────────────────────────────────────────────────── */}
      <ServiceCTA
        heading="Get a Free Restaurant Kitchen Layout & Quote"
        subtext="Tell us your concept, cuisine and covers — we'll design a kitchen layout and send an itemised quote. Free site visit, no obligation."
        serviceName="Restaurant Kitchen"
      />
    </>
  );
}
