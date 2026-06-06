import Link from 'next/link';
import {
  ChefHat, PenTool, Wrench, Package, Settings, Building2,
  ArrowRight,
} from 'lucide-react';

/** SOP Section ⑥ — Services Grid
 *  H2: "Our Commercial Kitchen Services"
 *  6 service cards → link to pillar pages
 *  Purpose: Navigation + keyword distribution
 *  CRO: Shows full capability instantly
 */
const services = [
  {
    icon: Package,
    title:    'Commercial Kitchen Equipment Supply',
    desc:     'Cooking equipment, refrigeration, bakery equipment, dishwashing, food service, pantry, bar equipment — imported & domestic brands.',
    href:     '/services/equipment-supply',
    keywords: ['cooking equipment', 'refrigeration', 'bakery equipment'],
  },
  {
    icon: PenTool,
    title:    'Kitchen Design & Layout',
    desc:     'Professional CAD-based kitchen layout design, workflow analysis, space planning, and free site visit for projects above ₹5 Lakhs.',
    href:     '/services/kitchen-design',
    keywords: ['kitchen layout design', 'CAD drawing', 'site visit'],
  },
  {
    icon: Wrench,
    title:    'Installation & Commissioning',
    desc:     'On-site installation, equipment testing, team training, and project handover. 21–45 days from order to commissioning.',
    href:     '/services/installation',
    keywords: ['kitchen installation', 'commissioning', 'handover'],
  },
  {
    icon: ChefHat,
    title:    'International Brand Dealership',
    desc:     'Authorised dealer for Rational, Robot Coupe, Frymaster, Hamilton Beach, Scotsman, BUNN, and Vitamix across India.',
    href:     '/brands',
    keywords: ['Rational', 'Robot Coupe', 'Frymaster', 'authorised dealer'],
  },
  {
    icon: Settings,
    title:    'AMC & After-Sales Service',
    desc:     'Annual Maintenance Contracts, dedicated service engineers, genuine spare parts, and priority support across India.',
    href:     '/services/amc',
    keywords: ['AMC', 'after-sales', 'spare parts', 'service engineers'],
  },
  {
    icon: Building2,
    title:    'Turnkey Kitchen Projects',
    desc:     'Complete end-to-end kitchen delivery: site visit → layout → equipment → supply → install → commissioning → AMC.',
    href:     '/services/turnkey',
    keywords: ['turnkey kitchen', 'complete kitchen solution', 'end-to-end'],
  },
];

function ServiceCard({ service }: { service: typeof services[0] }) {
  const Icon = service.icon;
  return (
    <Link
      href={service.href}
      className="card-hover group flex flex-col rounded-2xl border"
      style={{
        background: '#FFFFFF',
        borderColor: 'var(--border)',
        textDecoration: 'none',
        padding: '2rem 2rem 1.75rem',  /* generous internal padding */
        minHeight: '260px',
      }}
      aria-label={service.title}
    >
      {/* Icon badge */}
      <div
        className="flex items-center justify-center rounded-xl"
        style={{
          width: '52px',
          height: '52px',
          background: 'rgba(201,168,76,0.10)',
          border: '1px solid rgba(201,168,76,0.18)',
          marginBottom: '1.375rem',
          flexShrink: 0,
        }}
        aria-hidden="true"
      >
        <Icon
          size={24}
          style={{ color: 'var(--gold)' }}
          strokeWidth={1.6}
        />
      </div>

      {/* Title */}
      <h3
        style={{
          fontFamily: 'var(--font-playfair)',
          fontWeight: 700,
          fontSize: '1.125rem',
          color: 'var(--text-primary)',
          lineHeight: 1.25,
          marginBottom: '0.75rem',
        }}
      >
        {service.title}
      </h3>

      {/* Description — flex-1 pushes arrow to bottom */}
      <p
        style={{
          fontFamily: 'var(--font-inter)',
          fontSize: '0.9375rem',
          color: 'var(--text-secondary)',
          lineHeight: 1.7,
          flexGrow: 1,
        }}
      >
        {service.desc}
      </p>

      {/* Hidden keywords for NLP */}
      <span className="sr-only">{service.keywords.join(', ')}</span>

      {/* Learn more arrow — always at card bottom */}
      <div
        className="flex items-center gap-1.5"
        style={{
          color: 'var(--gold)',
          fontSize: '0.875rem',
          fontFamily: 'var(--font-inter)',
          fontWeight: 600,
          marginTop: '1.5rem',
        }}
      >
        Learn more
        <ArrowRight
          size={14}
          className="transition-transform duration-200 group-hover:translate-x-1"
          aria-hidden="true"
        />
      </div>
    </Link>
  );
}

export default function ServicesOverview() {
  return (
    <section
      aria-labelledby="services-heading"
      style={{ padding: '5.5rem 0', background: '#FFFFFF' }}
    >
      <div className="container mx-auto">

        {/* ── Section header — flex column so centering is explicit ──────── */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            marginBottom: '3.5rem',
          }}
        >
          <p className="section-label" style={{ marginBottom: '0.75rem' }}>
            What We Do
          </p>

          <h2
            id="services-heading"
            style={{
              fontFamily: 'var(--font-playfair)',
              fontSize: 'clamp(1.875rem, 3vw, 2.75rem)',
              color: 'var(--text-primary)',
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
            }}
          >
            Our Commercial Kitchen Services
          </h2>

          {/* Gold divider — inline block inside flex column = perfectly centered */}
          <div
            aria-hidden="true"
            style={{
              width: '60px',
              height: '3px',
              background: 'linear-gradient(90deg, var(--gold-bright), var(--gold), var(--gold-deep))',
              borderRadius: '2px',
              marginTop: '1.25rem',
            }}
          />

          <p
            style={{
              marginTop: '1.25rem',
              color: 'var(--text-secondary)',
              fontSize: '1rem',
              lineHeight: 1.75,
              maxWidth: '640px',
              textAlign: 'center',
            }}
          >
            From a single equipment supply to a complete turnkey kitchen — VSD International
            delivers commercial kitchen solutions for hotels, hospitals, restaurants, cloud kitchens,
            bakeries, and institutions across India.
          </p>
        </div>

        {/* ── Service cards — 3-column grid ────────────────────────────── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {services.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </div>

        {/* ── Bottom CTA ───────────────────────────────────────────────── */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            marginTop: '3rem',
          }}
        >
          <Link
            href="/services"
            className="btn-ghost inline-flex items-center gap-2"
            aria-label="View all VSD International services"
          >
            Explore All Services <ArrowRight size={15} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
