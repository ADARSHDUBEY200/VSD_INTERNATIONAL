export interface Faq {
  q: string;
  a: string;
}

export interface FaqGroup {
  group: string;
  faqs: Faq[];
}

export const faqGroups: FaqGroup[] = [
  {
    group: 'Pricing & Budget',
    faqs: [
      {
        q: 'How much does it cost to set up a commercial kitchen in India?',
        a: 'A complete commercial kitchen in India generally costs from about ₹8 lakh for a compact cloud kitchen to ₹85 lakh or more for a full-service five-star hotel kitchen. The final figure depends on covers, equipment specification and how much custom stainless-steel fabrication is involved. VSD has delivered projects across this whole range, including a ₹42-lakh overhaul at Hyatt Regency Delhi.',
      },
      {
        q: 'What does a 5-star hotel kitchen setup cost?',
        a: 'A five-star hotel kitchen typically costs between ₹50 lakh and ₹2 crore, driven by banquet capacity, the number of kitchen zones and the share of imported equipment. As a reference, VSD completed a four-zone kitchen at Hyatt Regency Delhi for ₹42 lakh including SS fabrication, a walk-in cold room and full installation.',
      },
      {
        q: 'How much does a cloud kitchen setup cost?',
        a: 'A single-brand cloud kitchen can be equipped for roughly ₹8 lakh to ₹25 lakh, depending on cuisine, throughput and whether refrigeration and exhaust are included. VSD focuses cloud-kitchen budgets on compact, high-efficiency layouts so operators launch faster without over-buying.',
      },
      {
        q: 'What factors most affect commercial kitchen equipment prices?',
        a: 'Pricing is driven mainly by steel grade (SS 304 vs SS 202), brand (imported vs domestic), capacity and the volume of custom fabrication. Because VSD manufactures its own fabrication and is an authorised dealer for global brands, it can balance these to fit a defined budget.',
      },
    ],
  },
  {
    group: 'Process, Timeline & Installation',
    faqs: [
      {
        q: 'How long does it take to set up a commercial kitchen?',
        a: 'Most commercial kitchen projects are completed in 21 to 45 days from order to commissioning, scaling with size. A compact cloud kitchen can be ready in about 14 days; a full hotel kitchen typically runs 21 to 30 days. VSD confirms a fixed timeline at the proposal stage.',
      },
      {
        q: 'What is the process for setting up a commercial kitchen?',
        a: 'A project follows six stages: free site visit, CAD layout design, equipment selection, supply and delivery, installation and commissioning, then ongoing AMC support. You approve the layout and equipment list before any order is placed, so timelines and responsibilities stay clear.',
      },
      {
        q: 'Do you provide a free kitchen layout and site visit?',
        a: 'Yes — VSD offers a free site visit and a professional CAD-based kitchen layout for projects above ₹5 lakh. An engineer measures space, utilities, ventilation and workflow, then designs an optimised layout as part of the proposal, at no charge and no obligation.',
      },
      {
        q: 'Do you handle installation and commissioning, or only supply?',
        a: 'VSD handles complete installation and commissioning, not just supply — certified engineers install, test, train your team and provide a formal handover. This turnkey approach from one vendor is what distinguishes a manufacturer-led partner from a reseller who only ships equipment.',
      },
    ],
  },
  {
    group: 'Equipment & Scope',
    faqs: [
      {
        q: 'What types of commercial kitchen equipment does VSD supply?',
        a: 'VSD supplies cooking equipment, refrigeration, bakery equipment, dishwashing, food-preparation machines and exhaust systems, and fabricates custom SS worktables, sinks and hoods in-house. It serves hotels, restaurants, cloud kitchens, hospitals and institutions across India.',
      },
      {
        q: 'What is the difference between commercial and domestic kitchen equipment?',
        a: 'Commercial equipment is built for continuous high-volume use with heavier-gauge steel and higher power ratings, while domestic equipment is for occasional home use. Commercial units also meet FSSAI hygiene and, for hospitals, NABH standards that domestic equipment does not.',
      },
      {
        q: 'Do you manufacture custom stainless steel kitchen equipment?',
        a: 'Yes — custom SS fabrication is a core strength, built in-house to exact kitchen dimensions including worktables, sinks, shelving, hoods and exhaust. In-house fabrication means a kitchen is designed around its real footprint rather than forced into standard sizes.',
      },
      {
        q: 'Which grade of stainless steel is best for a commercial kitchen?',
        a: 'SS 304 is the standard grade for most commercial kitchens because it resists corrosion and is food-safe, with SS 316 used in harsher environments and SS 202 where budget is the priority. VSD typically fabricates in SS 304 and advises on grade by kitchen environment.',
      },
      {
        q: 'How important is kitchen exhaust and ventilation?',
        a: 'Exhaust and ventilation are essential for safety, air quality and fire compliance — a correctly sized hood-and-duct system removes heat, grease and smoke and is often required to pass inspections. VSD designs and installs ventilation as an integrated part of the layout.',
      },
    ],
  },
  {
    group: 'Industry-Specific',
    faqs: [
      {
        q: 'What equipment does a hotel kitchen need?',
        a: 'A full hotel kitchen typically needs combi ovens, high-output ranges, fryers, blast chillers, walk-in cold rooms, dishwashing lines and custom SS fabrication sized to the banquet load. VSD has built complete hotel kitchens for Hyatt, Radisson Blu, Crowne Plaza and ITC Welcomhotel.',
      },
      {
        q: 'What equipment do I need to start a cloud kitchen?',
        a: 'A cloud kitchen needs a compact, high-throughput setup: a cooking range or combi, refrigeration, food-prep equipment, exhaust, storage and dishwashing, prioritising efficiency over floor space. VSD specialises in layouts that maximise output per square foot for delivery-first operators.',
      },
      {
        q: 'Do you supply equipment for hospital kitchens?',
        a: 'Yes — VSD builds hygiene-compliant hospital kitchens designed around dietary, bulk-cooking and NABH requirements, with completed projects including Metro, Yashoda, Sarvodaya and Hans hospitals. Hospital kitchens demand stricter material, hygiene and segregation standards, planned from the layout stage.',
      },
      {
        q: 'Can you equip a bakery or cloud bakery?',
        a: 'Yes — VSD supplies and installs bakery equipment including deck ovens, rotary rack ovens, proofers, spiral mixers and refrigeration for bakeries, patisseries and cloud-bakery operations. Equipment is matched to production volume and product type.',
      },
      {
        q: 'Do you take on government and institutional projects?',
        a: 'Yes — VSD has delivered institutional kitchen projects for government and large institutions, including work for the Election Commission of India. These require bulk-cooking capacity, durability and documentation suited to tender and procurement processes.',
      },
    ],
  },
  {
    group: 'Compliance & Technical',
    faqs: [
      {
        q: 'What are the NABH kitchen requirements for hospitals?',
        a: 'NABH-accredited hospital kitchens must meet defined standards for hygiene, food handling, staff segregation, pest control, storage temperatures and documentation, with easy-to-clean, corrosion-resistant surfaces. VSD designs hospital kitchens around these requirements so the facility supports accreditation.',
      },
      {
        q: 'Does a cloud kitchen need an FSSAI licence?',
        a: 'Yes — any cloud kitchen preparing food for sale in India must hold a valid FSSAI registration or licence, with the category depending on turnover and scale. VSD plans cloud-kitchen layouts with compliant zoning, surfaces and storage built in.',
      },
      {
        q: 'What is the typical lifespan of commercial kitchen equipment?',
        a: "Well-specified commercial kitchen equipment generally lasts 8 to 15 years with regular maintenance, and SS fabrication often lasts longer than powered units. VSD's AMC programme — preventive maintenance, genuine parts and engineer visits — is designed to protect that lifespan.",
      },
    ],
  },
  {
    group: 'Brands & Imports',
    faqs: [
      {
        q: 'Which international brands does VSD supply?',
        a: 'VSD is an authorised dealer for leading global brands including Rational, Robot Coupe, Frymaster, Hamilton Beach, Scotsman, BUNN and Vitamix. All imported equipment is supplied with manufacturer warranty and local service support.',
      },
      {
        q: 'Are you an authorised dealer for Rational combi ovens?',
        a: 'Yes — VSD is an authorised Rational dealer in India and regularly specifies Rational combi ovens for hotel and institutional kitchens. Authorised dealership means genuine equipment, valid warranty and proper installation and training.',
      },
      {
        q: 'Do imported equipment come with warranty and service in India?',
        a: "Yes — imported equipment carries the manufacturer's warranty and is backed by local service support, so buyers are not left without parts or engineers after installation. Authorised imports plus in-country AMC is why hotels and hospitals choose a single accountable partner over direct imports.",
      },
    ],
  },
  {
    group: 'Trust, Manufacturing & Location',
    faqs: [
      {
        q: 'Is VSD International a manufacturer or a reseller?',
        a: 'VSD is a manufacturer and turnkey partner, not a reseller — it operates manufacturing facilities in the Delhi region for custom SS fabrication and is also an authorised dealer for international brands. It can design, fabricate, supply, install and maintain a complete kitchen from one source.',
      },
      {
        q: 'Is VSD International ISO certified?',
        a: 'Yes — VSD is an ISO 9001:2015 certified manufacturer and supplier, with quality processes covering sourcing, fabrication, quality control, installation and after-sales service. The company has operated since 2009, serving hotels, hospitals, restaurants, cloud kitchens and institutions across India.',
      },
      {
        q: "Where are VSD's factories and office located?",
        a: 'VSD is headquartered at A-347 Saraswati Gali, Mandawali, New Delhi 110092, with manufacturing facilities in the Delhi region. Being based in Delhi NCR allows same-day site visits, faster delivery across North India and direct factory support for project clients.',
      },
    ],
  },
  {
    group: 'Service & Getting Started',
    faqs: [
      {
        q: 'Does VSD offer AMC and after-sales service?',
        a: 'Yes — VSD offers Annual Maintenance Contracts covering preventive maintenance, repairs, genuine spare parts and priority response, supported by dedicated engineers in Delhi NCR. An AMC protects uptime and lifespan, critical for hotels and hospitals.',
      },
      {
        q: 'Do you deliver commercial kitchen equipment outside Delhi?',
        a: 'Yes — while based in Delhi NCR, VSD delivers and installs across India, including Mumbai, Bangalore, Pune, Hyderabad, Chennai and resort destinations such as Rishikesh. The Delhi factories support pan-India dispatch, and project teams travel for installation.',
      },
      {
        q: 'How do I get a quote from VSD International?',
        a: 'Share your kitchen type, location and approximate covers by phone or WhatsApp at +91-9250346370, or through the website enquiry form. VSD typically responds within one business hour and provides a detailed proposal — with a suggested equipment list and free layout — within 24 hours.',
      },
    ],
  },
];

export const allFaqs = faqGroups.flatMap((g) => g.faqs);
