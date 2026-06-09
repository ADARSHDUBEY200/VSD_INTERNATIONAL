import type { Product } from '@/types/product';
import { SITE_URL, ORG_ID } from '@/lib/config';

// Production images should follow the pattern: [brand]-[model-slug]-[view].webp
// e.g. rational-icombi-pro-10-1-1-front.webp

export const mockProduct: Product = {
  id: 'rational-icombi-pro-10-1-1',
  slug: 'rational-icombi-pro-10-1-1',
  category: 'combi-ovens',
  brand: 'Rational',
  model: 'iCombi Pro 10-1/1',
  fullName: 'Rational iCombi Pro 10-1/1 Combi Oven',
  tagline:
    '10-tray electric combi oven engineered for precision cooking in hotel, hospital and cloud kitchen environments.',

  images: [
    '/images/products/rational-icombi-pro-10-1-1/rational-icombi-pro-10-1-1-front.webp',
    '/images/products/rational-icombi-pro-10-1-1/rational-icombi-pro-10-1-1-open-door.webp',
    '/images/products/rational-icombi-pro-10-1-1/rational-icombi-pro-10-1-1-control-panel.webp',
    '/images/products/rational-icombi-pro-10-1-1/rational-icombi-pro-10-1-1-installed.webp',
  ],

  keyFacts: [
    { label: 'Capacity', value: '10 × 1/1 GN Trays' },
    { label: 'Power', value: '18.6 kW, 3-Phase' },
    { label: 'Cooking Modes', value: 'Combi / Steam / Hot Air' },
    { label: 'Control', value: 'iCombi Pro Touchscreen' },
    { label: 'Material', value: '304 Stainless Steel' },
    { label: 'Warranty', value: '2 Years (VSD + Rational)' },
  ],

  priceContext: '₹4,50,000 – ₹6,00,000 (indicative, ex-works Delhi)',
  leadTime: '10–15 working days',

  overview:
    'The Rational iCombi Pro 10-1/1 is a 10-tray (1/1 GN) electric combi oven delivering precise steam, convection and combination cooking for high-volume professional kitchens. Operating at 18.6 kW on a 3-phase supply, it features Rational\'s iCombi Pro touchscreen controller with 100+ pre-set cooking programmes, HiDensityControl for uniform heat distribution, and an integrated self-cleaning system. It is certified CE and HACCP-suitable, making it the standard specification for hotel, hospital and central production kitchens across India. VSD International is an authorised Rational dealer supplying and commissioning this unit pan-India.',

  specs: [
    { name: 'Model', value: 'Rational iCombi Pro 10-1/1' },
    { name: 'Capacity', value: '10 × 1/1 GN (530 × 325 mm)' },
    { name: 'Tray Spacing', value: '68 mm' },
    { name: 'Cooking Modes', value: 'Steam (30–130°C), Hot Air (30–300°C), Combi' },
    { name: 'Electrical Supply', value: '400 V / 3N~ / 50 Hz' },
    { name: 'Total Power', value: '18.6 kW' },
    { name: 'Current Draw', value: '3 × 26 A' },
    { name: 'Dimensions (W×D×H)', value: '847 × 771 × 1,072 mm' },
    { name: 'Unit Weight', value: '105 kg (net)' },
    { name: 'Water Connection', value: 'Ø 3/4" cold water inlet, Ø 1" drain' },
    { name: 'Water Pressure', value: '100–600 kPa (1–6 bar)' },
    { name: 'Max Temperature', value: '300 °C' },
    { name: 'Cabinet Material', value: 'Stainless Steel 304 (interior & exterior)' },
    { name: 'Door Glazing', value: 'Triple-glazed thermal door' },
    { name: 'Control System', value: 'Rational iCombi Pro Touchscreen (7-inch)' },
    { name: 'Cooking Programmes', value: '100+ factory presets + custom save' },
    { name: 'Self-Cleaning', value: 'Integrated (5 levels), CareControl automatic' },
    { name: 'Connectivity', value: 'WLAN, LAN (ConnectedCooking compatible)' },
    { name: 'Food Probe', value: 'Included (6-point multi-sensor)' },
    { name: 'Certification', value: 'CE, CB, NSF, HACCP-suitable' },
  ],

  features: [
    {
      title: 'HiDensityControl — Even Heat, Every Tray',
      description:
        "Rational's HiDensityControl fan system ensures ±1°C temperature uniformity across all 10 trays simultaneously, eliminating hot spots and reducing re-cooking. Ideal for banquet finishing where every cover must match.",
    },
    {
      title: 'iProductionManager — Parallel Cooking Intelligence',
      description:
        'Load different dishes simultaneously and the iCombi Pro automatically sequences cooking time and temperature for each item, reducing kitchen labour by up to 30% and freeing chefs for plating and service.',
    },
    {
      title: 'Triple-Glazed Thermal Door — Lower AC Load',
      description:
        'The triple-glazed door maintains a cool outer surface even at 300°C, reducing ambient kitchen heat. This measurably lowers AC load in enclosed kitchens — a significant running cost benefit for hotels and hospitals in Indian climate.',
    },
    {
      title: 'Integrated CareControl Self-Cleaning',
      description:
        'Five selectable cleaning programmes (from rinse to intensive) run automatically at end of service. No manual scrubbing, no chemical residue in food, and consistent HACCP compliance without depending on kitchen porter skill.',
    },
    {
      title: 'ConnectedCooking — Remote Fleet Management',
      description:
        'Via Rational ConnectedCooking, operators can push recipe updates, monitor energy usage and track HACCP data logs remotely across multiple kitchen locations — essential for hotel chains and hospital networks.',
    },
    {
      title: '100+ Pre-Set Cooking Programmes',
      description:
        'Includes pre-programmed recipes for Continental, Indian and Bakery applications validated by Rational chefs. Reduces training time for new kitchen staff and ensures dish consistency across shifts without relying on individual cook expertise.',
    },
  ],

  bestFor: [
    {
      industry: '5-Star & Luxury Hotels',
      description:
        'Handles à la carte breakfast, banquet finishing for 200+ pax, and multi-outlet production — the standard specification in Hyatt and Radisson kitchens.',
    },
    {
      industry: 'Hospital & Healthcare',
      description:
        'HACCP-suitable steam and combination cooking meets clinical nutrition protocols. Ideal for NABH-accredited hospitals requiring documented temperature control and self-cleaning audit trails.',
    },
    {
      industry: 'Central Production Kitchens',
      description:
        'High-volume cook-chill production for cloud kitchens, airline catering and institutional caterers. Pairs with a blast chiller for HACCP-compliant cook-chill workflows.',
    },
    {
      industry: 'Standalone Restaurants & QSR',
      description:
        'Reduces cooking dependency on skilled staff for high-consistency items. One unit replaces multiple conventional appliances and cuts energy usage by up to 70% versus conventional ovens.',
    },
    {
      industry: 'Bakery & Patisserie',
      description:
        'Precise humidity control enables croissant, soufflé, bread and pastry production in a single cabinet. Consistent crust colour across all 10 trays without rotation.',
    },
  ],

  technical: [
    { label: 'Electrical Connection', value: '400 V / 3N~ / 50 Hz' },
    { label: 'Power Requirement', value: '18.6 kW (3-phase)' },
    { label: 'Fuse / MCB Rating', value: '3 × 32 A (Type C recommended)' },
    { label: 'Water Inlet', value: 'Ø 3/4" cold water, 100–600 kPa' },
    { label: 'Drain', value: 'Ø 1" direct floor drain or siphon trap' },
    { label: 'Ventilation Clearance', value: '50 mm sides, 100 mm rear, 150 mm top' },
    { label: 'Installation Surface', value: 'Legs included (adjustable 80–120 mm)' },
    { label: 'Hood Requirement', value: 'Exhaust hood recommended above unit' },
    { label: 'Noise Level', value: '< 70 dB(A)' },
    { label: 'Operating Temperature', value: '5°C to 40°C ambient' },
  ],

  compliance: [
    'CE Certified (EU Directive)',
    'HACCP Suitable',
    'NABH-Compatible (India)',
    'NSF Certified (Food Safety)',
    'CB Scheme Certified',
    'FSSAI Food Safety Compliant',
  ],

  whyVSD: [
    {
      point: 'Authorised Rational Dealer',
      detail:
        'VSD International is an authorised Indian dealer for Rational AG. Every unit comes with a valid Indian warranty backed by Rational-certified service engineers, not third-party technicians.',
    },
    {
      point: 'Site Survey & Kitchen Design',
      detail:
        'Our engineers visit your site before order confirmation to verify electrical supply (3-phase availability), water pressure, drain access, and exhaust hood sizing — preventing costly surprises during installation.',
    },
    {
      point: 'Professional Installation & Commissioning',
      detail:
        'VSD technicians handle delivery, positioning, connection, test-run and commissioning. We have installed Rational equipment in 30+ hotel and hospital kitchens across India.',
    },
    {
      point: 'Chef Training Included',
      detail:
        'Two-hour on-site training session for your kitchen team is included with every Rational iCombi Pro purchase — covering programme selection, daily cleaning and basic troubleshooting.',
    },
    {
      point: 'AMC & Post-Warranty Support',
      detail:
        'Annual Maintenance Contracts available from Year 3 onwards. Spare parts sourced from Rational-authorised inventory. Response time commitment: within 48 hours across Delhi NCR, 72 hours pan-India.',
    },
  ],

  comparison: [
    {
      attribute: 'Capacity',
      thisModel: '10 × 1/1 GN',
      alternative1: '10 × 1/1 GN',
      alternative2: '10 × 1/1 GN',
    },
    {
      attribute: 'Power',
      thisModel: '18.6 kW',
      alternative1: '17.4 kW',
      alternative2: '16.0 kW',
    },
    {
      attribute: 'Control System',
      thisModel: 'Rational iCombi Pro Touch (7")',
      alternative1: 'Digital + Manual Dial',
      alternative2: 'Mechanical / Digital',
    },
    {
      attribute: 'Self-Cleaning',
      thisModel: 'Automatic (5 levels)',
      alternative1: 'Semi-Automatic',
      alternative2: 'Manual',
    },
    {
      attribute: 'Connectivity',
      thisModel: 'WLAN + LAN (ConnectedCooking)',
      alternative1: 'LAN only (optional)',
      alternative2: 'None',
    },
    {
      attribute: 'Food Probe',
      thisModel: '6-point multi-sensor (included)',
      alternative1: 'Single-point (optional)',
      alternative2: 'Not available',
    },
    {
      attribute: 'Warranty (India)',
      thisModel: '2 years (authorised)',
      alternative1: '1 year',
      alternative2: '1 year',
    },
    {
      attribute: 'Indicative Price',
      thisModel: '₹4.5L – ₹6.0L',
      alternative1: '₹3.2L – ₹4.2L',
      alternative2: '₹2.2L – ₹3.0L',
    },
  ],

  comparisonModels: [
    { name: 'Electrolux Air-O-Steam 10-1/1', slug: 'electrolux-air-o-steam-10-1-1' },
    { name: 'Unox ChefTop Mind 10-1/1', slug: 'unox-cheftop-mind-10-1-1' },
  ],

  projectProof: [
    {
      client: 'Hyatt Regency Delhi',
      city: 'New Delhi',
      scope:
        '3 units of Rational iCombi Pro 10-1/1 installed in main production and banquet kitchens. Commissioned within 21 days of order.',
      year: '2024',
    },
    {
      client: 'Fortis Hospital',
      city: 'Gurugram',
      scope:
        '2 units installed in the central diet kitchen for clinical nutrition meal production. HACCP documentation and staff training completed.',
      year: '2024',
    },
    {
      client: 'Lemon Tree Premier',
      city: 'Ahmedabad',
      scope:
        '2 units for all-day dining kitchen. Paired with Rational iVario Pro for banquet cooking. Full commissioning + chef training.',
      year: '2023',
    },
    {
      client: 'Azure Hospitality (Mamagoto)',
      city: 'Mumbai',
      scope:
        '1 unit for central production kitchen supplying 3 restaurant outlets. Integrated with cook-chill workflow using VSD blast chiller.',
      year: '2023',
    },
  ],

  reviews: [
    {
      name: 'Chef Rajesh Nair',
      company: 'Executive Chef, Hyatt Regency Delhi',
      rating: 5,
      text: 'We have been running three Rational iCombi Pro units supplied by VSD International for over a year. Consistency across all trays is exceptional. The VSD installation team was professional and the commissioning was done on time with zero snags. Their AMC response time has been within 24 hours every time.',
      date: '2025-03-10',
    },
    {
      name: 'Priya Sharma',
      company: 'Facility Manager, Fortis Hospital Gurugram',
      rating: 5,
      text: 'Hospital kitchens require equipment that delivers HACCP compliance every single day. The Rational iCombi Pro from VSD meets our clinical nutrition protocols and the HACCP data logging is invaluable for our audits. VSD\'s team completed installation within the scheduled window with minimal disruption to patient meal service.',
      date: '2025-01-22',
    },
    {
      name: 'Rahul Mehta',
      company: 'Operations Head, Lemon Tree Hotels',
      rating: 5,
      text: 'The iCombi Pro has reduced our kitchen team\'s workload significantly. iProductionManager handles the sequencing so chefs focus on plating. VSD International\'s aftersales support is the best we have experienced — they assigned a dedicated service engineer for our Ahmedabad property.',
      date: '2024-11-05',
    },
    {
      name: 'Chef Ananya Bose',
      company: 'Head Chef, Azure Hospitality',
      rating: 4,
      text: 'Very impressed with the build quality and the control panel. The ConnectedCooking feature lets me monitor cooking from my phone. VSD guided us well on the installation and the training session was practical and thorough. Minor feedback: more Indian recipe presets would be welcome in the next firmware update.',
      date: '2024-09-18',
    },
  ],

  aggregateRating: 4.8,
  reviewCount: 4,

  faq: [
    {
      question: 'What is the price of the Rational iCombi Pro 10-1/1 in India?',
      answer:
        'The Rational iCombi Pro 10-1/1 is indicatively priced between ₹4,50,000 and ₹6,00,000 (ex-works Delhi), depending on the year of procurement and applicable GST. This price includes the standard accessory set and food probe. Installation, commissioning and training are quoted separately. Contact VSD International via WhatsApp or the quote form for a current price and lead time.',
    },
    {
      question: 'What electrical supply does the Rational iCombi Pro 10-1/1 require?',
      answer:
        'The iCombi Pro 10-1/1 requires a 400 V, 3-phase (3N~, 50 Hz) electrical supply drawing 18.6 kW at full load. A dedicated 3 × 32 A MCB (Type C) is recommended. Single-phase supply is not compatible with this model. VSD International\'s engineers verify your site electrical supply during the pre-order site visit.',
    },
    {
      question: 'Is the Rational iCombi Pro 10-1/1 suitable for Indian gas supply?',
      answer:
        'The iCombi Pro 10-1/1 in this listing is the electric version. Rational does not manufacture a gas combi oven — the electric model is the global standard. If your kitchen runs on LPG or PNG, VSD International can supply an LPG-based combi from alternative brands such as Unox, or recommend a hybrid cooking solution.',
    },
    {
      question: 'Does VSD International provide installation and commissioning for the iCombi Pro?',
      answer:
        'Yes. VSD International provides end-to-end delivery, installation, plumbing connection, electrical connection, test-run and full commissioning for every Rational iCombi Pro unit. A two-hour chef training session is included. Installation is charged separately and depends on site location and complexity.',
    },
    {
      question: 'What is the difference between the iCombi Pro and the iCombi Classic?',
      answer:
        'The iCombi Pro features Rational\'s latest 7-inch touchscreen controller with HiDensityControl (±1°C uniformity), iProductionManager for parallel multi-dish cooking, ConnectedCooking WLAN connectivity, and an integrated 5-level self-cleaning system. The iCombi Classic uses a simpler rotary-knob controller, lacks WLAN connectivity, and has a 3-level cleaning system. For hotel and hospital applications requiring HACCP data logging and fleet management, the iCombi Pro is the recommended choice.',
    },
    {
      question: 'Does the Rational iCombi Pro 10-1/1 come with a warranty in India?',
      answer:
        'Yes. VSD International provides a 2-year warranty on every Rational iCombi Pro 10-1/1 unit — 1 year manufacturer warranty + 1 year extended VSD warranty. Service is performed by Rational-certified engineers with genuine Rational spare parts. AMC (Annual Maintenance Contract) is available from Year 3 onwards.',
    },
    {
      question: 'How long does delivery and installation take?',
      answer:
        'Lead time for the Rational iCombi Pro 10-1/1 is 10–15 working days from order confirmation to delivery at your site. Installation and commissioning typically takes 1–2 days depending on site readiness (3-phase power, water and drain availability). VSD International has delivered urgent pre-opening kitchen installations in as few as 8 working days for hotel projects.',
    },
    {
      question: 'Can the Rational iCombi Pro be used for Indian cooking — tandoor, biryani, dal makhani?',
      answer:
        'Yes. The iCombi Pro is highly effective for Indian cuisine: slow steam cooking for dal makhani and gravies, combination mode for roasting and tikka, high-temp convection for naan and rotis (with the right accessories). Rational\'s ChefLine India team provides localised Indian recipe programmes. It does not replace a tandoor for live tandoor bread service, but handles Indian production cooking at scale efficiently.',
    },
  ],

  relatedProducts: [
    {
      name: 'Rational iCombi Pro 20-1/1',
      slug: 'rational-icombi-pro-20-1-1',
      category: 'combi-ovens',
      image: '/images/products/rational-icombi-pro-20-1-1/rational-icombi-pro-20-1-1-front.webp',
      tagline: '20-tray high-capacity combi oven for banquet and central production kitchens.',
    },
    {
      name: 'Rational iVario Pro 2-XS',
      slug: 'rational-ivario-pro-2-xs',
      category: 'multifunctional-cooking',
      image: '/images/products/rational-ivario-pro-2-xs/rational-ivario-pro-2-xs-front.webp',
      tagline: '2 × 14 L multifunctional cooking system — pressure, sous-vide, frying and braising.',
    },
    {
      name: 'Rational iCombi Classic 10-1/1',
      slug: 'rational-icombi-classic-10-1-1',
      category: 'combi-ovens',
      image:
        '/images/products/rational-icombi-classic-10-1-1/rational-icombi-classic-10-1-1-front.webp',
      tagline: 'Entry-level 10-tray combi oven — reliable, simple and cost-effective.',
    },
  ],

  seo: {
    title: 'Rational iCombi Pro 10-1/1 Price & Specs | VSD',
    metaDescription:
      'Rational iCombi Pro 10-1/1 combi oven — 18.6 kW, 10-tray, CE certified. Authorised dealer in India. Indicative price ₹4.5L–₹6L. Free installation & commissioning. WhatsApp VSD International.',
    canonicalSlug: '/products/combi-ovens/rational-icombi-pro-10-1-1/',
  },

  schema: {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Product',
        '@id': `${SITE_URL}/products/combi-ovens/rational-icombi-pro-10-1-1/#product`,
        name: 'Rational iCombi Pro 10-1/1 Combi Oven',
        brand: { '@type': 'Brand', name: 'Rational', sameAs: 'https://www.rational-online.com' },
        category: 'Commercial Combi Oven',
        mpn: 'ICP-10-1-1',
        sku: 'RATIONAL-ICOMBI-PRO-10-1-1',
        image: [
          `${SITE_URL}/images/products/rational-icombi-pro-10-1-1/rational-icombi-pro-10-1-1-front.webp`,
          `${SITE_URL}/images/products/rational-icombi-pro-10-1-1/rational-icombi-pro-10-1-1-open-door.webp`,
        ],
        description:
          '10-tray (1/1 GN) electric combi oven with HiDensityControl, iProductionManager and integrated self-cleaning. CE certified, HACCP-suitable. Authorised Rational dealer supply and commissioning by VSD International across India.',
        additionalProperty: [
          { '@type': 'PropertyValue', name: 'Capacity', value: '10 × 1/1 GN' },
          { '@type': 'PropertyValue', name: 'Power', value: '18.6 kW, 3-phase' },
          { '@type': 'PropertyValue', name: 'Dimensions', value: '847 × 771 × 1,072 mm' },
          { '@type': 'PropertyValue', name: 'Weight', value: '105 kg' },
          { '@type': 'PropertyValue', name: 'Certification', value: 'CE, HACCP, NSF' },
          { '@type': 'PropertyValue', name: 'Warranty', value: '2 years' },
        ],
        sameAs: 'https://www.rational-online.com/en_in/products/icombi-pro/',
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: '4.8',
          reviewCount: '4',
          bestRating: '5',
          worstRating: '1',
        },
        review: [
          {
            '@type': 'Review',
            author: { '@type': 'Person', name: 'Chef Rajesh Nair' },
            reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
            reviewBody:
              'Consistency across all trays is exceptional. The VSD installation team was professional.',
            datePublished: '2025-03-10',
          },
        ],
        offers: {
          '@type': 'Offer',
          availability: 'https://schema.org/InStock',
          priceCurrency: 'INR',
          priceSpecification: {
            '@type': 'PriceSpecification',
            minPrice: '450000',
            maxPrice: '600000',
            priceCurrency: 'INR',
          },
          seller: { '@id': ORG_ID },
          url: `${SITE_URL}/products/combi-ovens/rational-icombi-pro-10-1-1/`,
        },
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Products',
            item: `${SITE_URL}/products/`,
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: 'Combi Ovens',
            item: `${SITE_URL}/products/combi-ovens/`,
          },
          {
            '@type': 'ListItem',
            position: 4,
            name: 'Rational iCombi Pro 10-1/1',
            item: `${SITE_URL}/products/combi-ovens/rational-icombi-pro-10-1-1/`,
          },
        ],
      },
      {
        '@type': 'Organization',
        '@id': ORG_ID,
        name: 'VSD International',
        url: SITE_URL,
        logo: `${SITE_URL}/logo.png`,
        sameAs: [
          'https://www.linkedin.com/company/vsd-international',
          'https://www.indiamart.com/vsd-international',
        ],
      },
      {
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'What is the price of the Rational iCombi Pro 10-1/1 in India?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'The Rational iCombi Pro 10-1/1 is indicatively priced between ₹4,50,000 and ₹6,00,000 (ex-works Delhi), depending on the year of procurement and applicable GST.',
            },
          },
          {
            '@type': 'Question',
            name: 'What electrical supply does the Rational iCombi Pro 10-1/1 require?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'The iCombi Pro 10-1/1 requires a 400 V, 3-phase (3N~, 50 Hz) electrical supply drawing 18.6 kW at full load. A dedicated 3 × 32 A MCB (Type C) is recommended.',
            },
          },
        ],
      },
    ],
  },

  whatsappMessage:
    "Hi VSD International, I'm interested in the Rational iCombi Pro 10-1/1 Combi Oven. Please share pricing, availability and installation details. My project: ",

  updatedAt: '2026-06-07',
};
