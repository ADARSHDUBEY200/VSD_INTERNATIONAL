'use client';

import { useState } from 'react';
import { ChevronDown, Phone, MessageCircle } from 'lucide-react';

const faqGroups = [
  {
    group: 'Pricing & Budget',
    faqs: [
      {
        q: 'How much does it cost to set up a commercial kitchen in India?',
        a: 'A complete commercial kitchen in India generally costs between ₹8 lakh for a compact cloud kitchen and ₹85 lakh or more for a full-service five-star hotel kitchen. The final figure depends on the number of covers, equipment specification, and how much custom stainless-steel fabrication is involved. VSD International has delivered projects across this entire range, including a ₹42 lakh kitchen overhaul at Hyatt Regency Delhi.',
      },
      {
        q: 'What does a 5-star hotel kitchen setup cost?',
        a: 'A five-star hotel kitchen typically costs between ₹50 lakh and ₹2 crore, driven by banquet capacity, the number of kitchen zones, and the share of imported equipment such as Rational combi ovens. As a reference point, VSD completed a four-zone kitchen at Hyatt Regency Delhi for ₹42 lakh, including SS fabrication, a walk-in cold room and full installation.',
      },
      {
        q: 'How much does a cloud kitchen setup cost?',
        a: 'A single-brand cloud kitchen can be equipped for roughly ₹8 lakh to ₹25 lakh, depending on cuisine, throughput and whether refrigeration and exhaust are included. Multi-brand and shared formats cost more per added station. VSD focuses cloud-kitchen budgets on compact, high-efficiency layouts so operators launch faster without over-buying equipment.',
      },
      {
        q: 'What factors most affect commercial kitchen equipment prices?',
        a: 'Pricing is driven mainly by steel grade (SS 304 vs SS 202), brand (imported vs domestic), capacity, and the volume of custom fabrication. Energy type, warranty and after-sales coverage also matter. Because VSD manufactures its own fabrication and is an authorised dealer for international brands, it can balance these variables to fit a defined budget.',
      },
    ],
  },
  {
    group: 'Process, Timeline & Installation',
    faqs: [
      {
        q: 'How long does it take to set up a commercial kitchen?',
        a: 'Most commercial kitchen projects are completed in 21 to 45 days from order to commissioning, scaling with project size. A compact cloud kitchen can be commissioned in about 14 days, while a full hotel kitchen typically runs 21 to 30 days. VSD provides a fixed project timeline at the proposal stage so there are no surprises.',
      },
      {
        q: 'What is the process for setting up a commercial kitchen?',
        a: 'A commercial kitchen project follows six stages: a free site visit, CAD-based layout design, equipment selection, supply and delivery, installation and commissioning, and ongoing AMC support. The client approves the layout and equipment list before any order is placed. VSD runs every project on this same sequence so timelines and responsibilities stay clear.',
      },
      {
        q: 'Do you provide a free kitchen layout and site visit?',
        a: 'Yes — VSD International offers a free site visit and a professional CAD-based kitchen layout for projects above ₹5 lakh. An engineer measures the space, utilities, ventilation and workflow, then designs an optimised layout matched to your menu and covers. The design is provided as part of the proposal at no charge and with no obligation.',
      },
      {
        q: 'Do you handle installation and commissioning, or only supply?',
        a: 'VSD International handles complete installation and commissioning, not just supply. Certified engineers install each unit, test it, train the kitchen team and provide a formal handover. This turnkey approach — design, supply, install and after-sales from one vendor — is what distinguishes a manufacturer-led partner from a reseller who only ships equipment.',
      },
    ],
  },
  {
    group: 'Equipment & Scope',
    faqs: [
      {
        q: 'What types of commercial kitchen equipment does VSD International supply?',
        a: 'VSD supplies cooking equipment (combi ovens, ranges, fryers, salamanders, bratt pans), refrigeration (walk-in cold rooms, blast chillers, display units), bakery equipment, dishwashing machines, food-preparation equipment and exhaust systems. It also fabricates custom stainless-steel worktables, sinks and hoods in-house at its Delhi facilities.',
      },
      {
        q: 'What is the difference between commercial and domestic kitchen equipment?',
        a: 'Commercial kitchen equipment is built for continuous, high-volume use with heavier-gauge steel, higher power ratings and components rated for daily professional service, whereas domestic equipment is designed for occasional home use. Commercial units also meet hygiene and safety standards required by FSSAI and, for hospitals, NABH — which domestic equipment does not.',
      },
      {
        q: 'Do you manufacture custom stainless steel kitchen equipment?',
        a: 'Yes — VSD manufactures custom stainless-steel fabrication at its own two Delhi factories, including worktables, sinks, shelving, hoods and exhaust built to exact kitchen dimensions. In-house fabrication means a kitchen is designed around its real footprint rather than forced to fit standard sizes — a key advantage over distributor-only suppliers.',
      },
      {
        q: 'What grade of stainless steel is best for a commercial kitchen?',
        a: 'SS 304 is the standard grade for most commercial kitchens because it resists corrosion and is food-safe, while SS 316 is used where exposure to salt or harsh chemicals is higher. Lower grades such as SS 202 cost less but corrode faster. VSD typically fabricates in SS 304 and advises on grade selection based on the kitchen environment.',
      },
      {
        q: 'How important is kitchen exhaust and ventilation?',
        a: 'Kitchen exhaust and ventilation are essential for safety, air quality and fire compliance — a correctly sized hood and duct system removes heat, grease and smoke and is often required to pass fire inspections. VSD designs and installs exhaust and ventilation as an integrated part of the kitchen layout rather than an afterthought.',
      },
    ],
  },
  {
    group: 'Industry-Specific',
    faqs: [
      {
        q: 'What equipment does a hotel kitchen need?',
        a: 'A full hotel kitchen typically needs combi ovens, high-output ranges with griddles, deep fryers, blast chillers for HACCP compliance, walk-in cold rooms, dishwashing lines and custom SS fabrication sized to the banquet load. The exact mix depends on covers and cuisine. VSD has built complete hotel kitchens for Hyatt, Radisson Blu, Crowne Plaza and ITC Welcomhotel.',
      },
      {
        q: 'What equipment do I need to start a cloud kitchen?',
        a: 'A cloud kitchen needs a compact, high-throughput setup: a cooking range or combi, refrigeration, food-prep equipment, exhaust, storage and dishwashing — prioritising energy efficiency and a tight layout over floor space. VSD specialises in cloud-kitchen layouts that maximise output per square foot for delivery-first operators across India.',
      },
      {
        q: 'Do you supply equipment for hospital kitchens?',
        a: 'Yes — VSD builds hygiene-compliant hospital and healthcare kitchens designed around dietary, bulk-cooking and NABH requirements. Completed hospital projects include Metro Hospital, Yashoda Hospital, Sarvodaya Hospital and Hans Hospital. Hospital kitchens demand stricter material, hygiene and segregation standards than standard commercial kitchens, which VSD plans for from the layout stage.',
      },
      {
        q: 'Can you equip a bakery or cloud bakery?',
        a: 'Yes — VSD supplies and installs bakery equipment including deck ovens, rotary rack ovens, proofers, spiral mixers and refrigeration for bakeries, patisseries and cloud-bakery operations. Equipment is matched to production volume and product type, from a boutique patisserie to a high-output central bakery serving multiple outlets.',
      },
      {
        q: 'Do you take on government and institutional kitchen projects?',
        a: 'Yes — VSD has delivered institutional kitchen projects for government and large institutions, including work for the Election Commission of India. Institutional kitchens require bulk-cooking capacity, durability and documentation suited to tender and procurement processes, all of which VSD supports as a turnkey partner.',
      },
    ],
  },
  {
    group: 'Compliance & Technical',
    faqs: [
      {
        q: 'What are the NABH kitchen requirements for hospitals?',
        a: 'NABH-accredited hospital kitchens must meet defined standards for hygiene, food handling, staff segregation, pest control, storage temperatures and food-safety documentation, with surfaces and equipment that are easy to clean and corrosion-resistant. VSD designs hospital kitchens around these requirements from the layout stage so the facility supports accreditation rather than working against it.',
      },
      {
        q: 'Does a cloud kitchen need an FSSAI licence?',
        a: 'Yes — any cloud kitchen preparing food for sale in India must hold a valid FSSAI registration or licence, with the category depending on turnover and scale. Beyond licensing, the layout and equipment should support FSSAI hygiene norms. VSD plans cloud-kitchen layouts with compliant zoning, surfaces and storage built in.',
      },
      {
        q: 'How do you make sure a kitchen passes fire and safety inspections?',
        a: 'A kitchen passes inspection when exhaust, ventilation, gas lines, electrical loads and clearances are correctly sized and installed — which is why VSD integrates these into the layout from the start rather than retrofitting them. Proper hood-and-duct design, fire-rated clearances and tested installation reduce the risk of inspection failures and operational hazards.',
      },
      {
        q: 'What is the typical lifespan of commercial kitchen equipment?',
        a: 'Well-specified commercial kitchen equipment generally lasts 8 to 15 years with regular maintenance, and stainless-steel fabrication often lasts longer than powered units. Lifespan depends heavily on steel grade, build quality and servicing. VSD\'s AMC programme — preventive maintenance, genuine spare parts and engineer visits — is designed to protect that lifespan and reduce downtime.',
      },
    ],
  },
  {
    group: 'Brands & Imports',
    faqs: [
      {
        q: 'Which international brands does VSD International supply?',
        a: 'VSD is an authorised dealer for leading global brands including Rational (Germany), Robot Coupe (France), Frymaster (USA), Hamilton Beach Commercial (USA), Scotsman (Italy), BUNN (USA) and Vitamix (USA). All imported equipment is supplied with manufacturer warranty and local service support, combining global reliability with on-the-ground after-sales care.',
      },
      {
        q: 'Are you an authorised dealer for Rational combi ovens?',
        a: 'Yes — VSD International is an authorised Rational dealer in India and regularly specifies Rational iCombi Pro combi ovens for hotel and institutional kitchens. Authorised dealership means genuine equipment, valid manufacturer warranty and proper installation and training — which matters for high-value cooking systems central to a professional kitchen\'s output.',
      },
      {
        q: 'Do imported kitchen equipment come with warranty and service in India?',
        a: 'Yes — imported equipment supplied by VSD carries the manufacturer\'s warranty and is backed by local service support, so buyers are not left without parts or engineers after installation. This combination of authorised imports plus in-country AMC is a key reason hotels and hospitals choose a single accountable partner over direct imports.',
      },
    ],
  },
  {
    group: 'Trust, Manufacturing & Location',
    faqs: [
      {
        q: 'Is VSD International a manufacturer or a reseller?',
        a: 'VSD International is a manufacturer and turnkey kitchen partner, not a reseller — it operates two manufacturing facilities in Delhi for custom stainless-steel fabrication and is also an authorised dealer for international brands. This means it can design, fabricate, supply, install and maintain a complete kitchen from one source rather than only forwarding equipment from other suppliers.',
      },
      {
        q: 'Is VSD International ISO certified?',
        a: 'Yes — VSD International is an ISO 9001 certified manufacturer and supplier of commercial kitchen equipment, with quality processes covering sourcing, fabrication, quality control, installation and after-sales service. The company has been operating since 2009 and serves hotels, hospitals, restaurants, cloud kitchens and institutions across India.',
      },
      {
        q: 'Which hotels and institutions has VSD International worked with?',
        a: 'VSD has completed kitchen projects for leading establishments including Hyatt Regency Delhi, Radisson Blu Kaushambi, Crowne Plaza Rohini and ITC Welcomhotel Dwarka, hospitals such as Metro and Yashoda, and the Election Commission of India. This documented portfolio across hotels, healthcare and government is difficult for competitors to match.',
      },
      {
        q: 'Where are VSD International\'s factories and office located?',
        a: 'VSD International is headquartered in Mandawali, New Delhi (110092) and operates two manufacturing facilities in the Delhi region, with an additional unit in Ghaziabad, Uttar Pradesh. Being based in Delhi NCR allows same-day site visits, faster delivery across North India and direct factory support for project clients.',
      },
    ],
  },
  {
    group: 'Service & Getting Started',
    faqs: [
      {
        q: 'Does VSD International offer AMC and after-sales service?',
        a: 'Yes — VSD offers Annual Maintenance Contracts covering preventive maintenance visits, emergency repairs, genuine spare parts and priority response, supported by dedicated engineers based in Delhi NCR. An AMC protects equipment lifespan and uptime, which is especially important for hotels and hospitals where kitchen downtime is costly.',
      },
      {
        q: 'Do you deliver commercial kitchen equipment outside Delhi?',
        a: 'Yes — while VSD is based in Delhi NCR, it delivers and installs across India, including Mumbai, Bangalore, Pune, Hyderabad, Chennai and resort destinations such as Rishikesh. The Delhi factories support pan-India dispatch, and project teams travel for installation and commissioning nationwide.',
      },
      {
        q: 'How do I get a quote from VSD International?',
        a: 'You can request a quote by sharing your kitchen type, location and approximate covers by phone or WhatsApp at +91-9250346370, or through the website enquiry form. VSD typically responds within one business hour and provides a detailed proposal — including a suggested equipment list and free layout — within 24 hours.',
      },
    ],
  },
];

const allFaqs = faqGroups.flatMap((g) => g.faqs);

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: allFaqs.map((faq) => ({
    '@type': 'Question',
    name: faq.q,
    acceptedAnswer: { '@type': 'Answer', text: faq.a },
  })),
};

const groupColors: Record<string, string> = {
  'Pricing & Budget': '#C8A96B',
  'Process, Timeline & Installation': '#A0885A',
  'Equipment & Scope': '#B09060',
  'Industry-Specific': '#C8A96B',
  'Compliance & Technical': '#A0885A',
  'Brands & Imports': '#C8A96B',
  'Trust, Manufacturing & Location': '#A0885A',
  'Service & Getting Started': '#C8A96B',
};

export default function FAQSection() {
  const [open, setOpen] = useState<string | null>(null);

  const toggle = (key: string) => setOpen((prev) => (prev === key ? null : key));

  let globalIndex = 0;

  return (
    <section
      aria-labelledby="faq-heading"
      style={{
        padding: '6rem 0',
        background: 'var(--surface-alt)',
        borderTop: '1px solid var(--border)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Subtle warm glow */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: 0,
          left: '50%',
          transform: 'translateX(-50%)',
          width: '50rem',
          height: '18rem',
          background: 'radial-gradient(ellipse at top, rgba(200,169,107,0.08) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <div style={{ maxWidth: '64rem', margin: '0 auto', padding: '0 1.5rem', width: '100%', position: 'relative' }}>

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <p className="section-label" style={{ marginBottom: '1rem' }}>FAQ</p>
          <h2
            id="faq-heading"
            style={{
              fontFamily: 'var(--font-playfair)',
              fontSize: 'clamp(2rem, 3.5vw, 2.75rem)',
              color: 'var(--text-dark)',
              fontWeight: 700,
              letterSpacing: '-0.02em',
              lineHeight: 1.15,
              marginBottom: '1.25rem',
            }}
          >
            Frequently <span className="accent-gold">Asked</span> Questions
          </h2>
          <div className="gold-divider" style={{ marginBottom: '1.5rem' }} />
          <p
            style={{
              color: 'var(--text-muted)',
              fontSize: '1.0625rem',
              lineHeight: 1.8,
              maxWidth: '42rem',
              margin: '0 auto',
            }}
          >
            32 questions answered — from pricing and timelines to NABH compliance, stainless steel grades, and how to get started.
          </p>
        </div>

        {/* Groups */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
          {faqGroups.map((group) => (
            <div key={group.group}>
              {/* Group label */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  marginBottom: '1rem',
                }}
              >
                <span
                  style={{
                    display: 'inline-block',
                    width: '28px',
                    height: '2px',
                    background: groupColors[group.group] ?? 'var(--gold)',
                    borderRadius: '2px',
                    flexShrink: 0,
                  }}
                />
                <span
                  style={{
                    fontFamily: 'var(--font-inter)',
                    fontSize: '0.6875rem',
                    fontWeight: 700,
                    letterSpacing: '0.14em',
                    textTransform: 'uppercase',
                    color: groupColors[group.group] ?? 'var(--gold)',
                  }}
                >
                  {group.group}
                </span>
              </div>

              {/* Accordion items */}
              <dl style={{ display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
                {group.faqs.map((faq) => {
                  const key = `${group.group}-${globalIndex}`;
                  const idx = globalIndex;
                  globalIndex++;
                  const isOpen = open === key;
                  const num = String(idx + 1).padStart(2, '0');

                  return (
                    <div
                      key={key}
                      style={{
                        background: '#FFFFFF',
                        borderRadius: '12px',
                        border: '1px solid',
                        borderColor: isOpen ? 'rgba(200,169,107,0.4)' : 'var(--border)',
                        borderLeft: isOpen ? '3px solid var(--gold)' : '3px solid transparent',
                        boxShadow: isOpen
                          ? '0 4px 24px rgba(200,169,107,0.1), 0 2px 8px rgba(0,0,0,0.04)'
                          : '0 1px 4px rgba(0,0,0,0.04)',
                        transition: 'border-color 0.22s ease, box-shadow 0.22s ease',
                        overflow: 'hidden',
                      }}
                    >
                      <dt>
                        <button
                          onClick={() => toggle(key)}
                          className="w-full text-left"
                          style={{
                            display: 'flex',
                            alignItems: 'flex-start',
                            gap: '1rem',
                            padding: '1.125rem 1.375rem',
                            cursor: 'pointer',
                            background: 'transparent',
                            border: 'none',
                            width: '100%',
                          }}
                          aria-expanded={isOpen}
                          aria-controls={`faq-answer-${key}`}
                        >
                          {/* Number */}
                          <span
                            style={{
                              fontFamily: 'var(--font-inter)',
                              fontSize: '0.6875rem',
                              fontWeight: 700,
                              letterSpacing: '0.05em',
                              color: isOpen ? 'var(--gold)' : 'var(--text-muted)',
                              lineHeight: 1,
                              marginTop: '0.25rem',
                              flexShrink: 0,
                              transition: 'color 0.2s',
                              minWidth: '1.5rem',
                            }}
                            aria-hidden="true"
                          >
                            {num}
                          </span>

                          {/* Question */}
                          <span
                            style={{
                              fontFamily: 'var(--font-inter)',
                              fontWeight: 600,
                              fontSize: '0.9375rem',
                              color: isOpen ? 'var(--text-dark)' : 'var(--text-body)',
                              lineHeight: 1.5,
                              flex: 1,
                              transition: 'color 0.2s',
                              textAlign: 'left',
                            }}
                          >
                            {faq.q}
                          </span>

                          {/* Chevron */}
                          <span
                            style={{
                              flexShrink: 0,
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              width: '1.75rem',
                              height: '1.75rem',
                              borderRadius: '50%',
                              background: isOpen ? 'var(--gold)' : 'rgba(200,169,107,0.1)',
                              transition: 'background 0.22s ease, transform 0.3s ease',
                              transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                              marginTop: '0.1rem',
                            }}
                            aria-hidden="true"
                          >
                            <ChevronDown
                              size={13}
                              style={{ color: isOpen ? '#1A1508' : 'var(--gold)' }}
                            />
                          </span>
                        </button>
                      </dt>

                      <dd
                        id={`faq-answer-${key}`}
                        style={{
                          maxHeight: isOpen ? '800px' : 0,
                          overflow: 'hidden',
                          transition: 'max-height 0.38s cubic-bezier(0.4,0,0.2,1)',
                        }}
                        aria-hidden={!isOpen}
                      >
                        <p
                          style={{
                            fontFamily: 'var(--font-inter)',
                            fontSize: '0.9375rem',
                            color: 'var(--text-body)',
                            lineHeight: 1.85,
                            padding: '0 1.375rem 1.25rem 3.375rem',
                          }}
                        >
                          {faq.a}
                        </p>
                      </dd>
                    </div>
                  );
                })}
              </dl>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div
          style={{
            marginTop: '3.5rem',
            padding: '2rem',
            borderRadius: '16px',
            background: '#FFFFFF',
            border: '1px solid var(--border)',
            boxShadow: '0 2px 12px rgba(0,0,0,0.05)',
            textAlign: 'center',
          }}
        >
          <p
            style={{
              fontFamily: 'var(--font-inter)',
              fontSize: '1rem',
              color: 'var(--text-body)',
              fontWeight: 500,
              marginBottom: '1.25rem',
            }}
          >
            Have a specific question?{' '}
            <span style={{ color: 'var(--text-dark)', fontWeight: 600 }}>Our team responds within 1 hour.</span>
          </p>
          <div style={{ display: 'flex', gap: '0.875rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a
              href="https://wa.me/919250346370?text=Hi%20VSD%20International%2C%20I%20have%20a%20question%20about%20commercial%20kitchen%20equipment."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
              aria-label="Ask a question via WhatsApp"
            >
              <MessageCircle size={16} />
              Ask on WhatsApp
            </a>
            <a
              href="tel:+919250346370"
              className="btn-ghost"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
              aria-label="Call VSD International"
            >
              <Phone size={16} />
              +91-9250346370
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
