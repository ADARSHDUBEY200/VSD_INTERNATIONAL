import Link from 'next/link';
import { Hotel, Heart, UtensilsCrossed, Truck, Cake, Landmark, ArrowRight } from 'lucide-react';

const industries = [
  {
    icon: Hotel,
    num: '01',
    title: 'Hotels & Resorts',
    desc: 'Full-service kitchen systems for 5-star, boutique and heritage hotels. Hyatt, Radisson, Crowne Plaza installations.',
    href: '/industries/hotels',
    clients: 'Hyatt · Radisson Blu · Crowne Plaza · ITC Welcomhotel',
    featured: true,
  },
  {
    icon: Heart,
    num: '02',
    title: 'Hospitals & Healthcare',
    desc: 'NABH & FSSAI compliant kitchen systems for hospitals, nursing homes and healthcare institutions.',
    href: '/industries/hospitals',
    clients: 'Metro Hospital · Fortis Healthcare',
    featured: false,
  },
  {
    icon: UtensilsCrossed,
    num: '03',
    title: 'Restaurants & QSRs',
    desc: 'Commercial kitchen equipment for fine-dine, quick service, cafe, bar, and multi-cuisine restaurants.',
    href: '/industries/restaurants',
    clients: 'Leading restaurant chains across Delhi NCR',
    featured: false,
  },
  {
    icon: Truck,
    num: '04',
    title: 'Cloud Kitchens',
    desc: 'High-efficiency, compact kitchen systems for dark kitchens and delivery-first cloud kitchen operators.',
    href: '/industries/cloud-kitchens',
    clients: 'Cloud kitchen operators across India',
    featured: false,
  },
  {
    icon: Cake,
    num: '05',
    title: 'Bakeries & Confectionery',
    desc: 'Professional deck ovens, rotary ovens, proofers, spiral mixers, and chocolate equipment.',
    href: '/industries/bakeries',
    clients: 'Bakeries and patisseries, pan India',
    featured: false,
  },
  {
    icon: Landmark,
    num: '06',
    title: 'Government & Institutions',
    desc: 'Large-scale institutional kitchens for defence canteens, universities, corporate cafeterias and government bodies.',
    href: '/industries/government',
    clients: 'Election Commission of India · Defence institutions',
    featured: false,
  },
];

function IndustryCard({ industry }: { industry: typeof industries[0] }) {
  const Icon = industry.icon;
  return (
    <Link
      href={industry.href}
      className="card-lift group block rounded-2xl overflow-hidden"
      style={{
        background: '#FFFFFF',
        border: industry.featured
          ? '1.5px solid rgba(201,168,76,0.45)'
          : '1px solid #E8E4D8',
        textDecoration: 'none',
        boxShadow: industry.featured
          ? '0 8px 36px rgba(201,168,76,0.14)'
          : '0 2px 14px rgba(0,0,0,0.05)',
      }}
      aria-label={`VSD International — ${industry.title}`}
    >
      {/* -- Gold Header Panel -- */}
      <div
        style={{
          background: industry.featured
            ? 'linear-gradient(135deg, #E8C65A 0%, #C9A84C 45%, #A67C32 100%)'
            : 'linear-gradient(135deg, #D4AA50 0%, #BF9840 50%, #9E7528 100%)',
          padding: '1.75rem 1.75rem 1.625rem',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Shimmer highlight strip */}
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '40%',
            background: 'linear-gradient(180deg, rgba(255,255,255,0.18) 0%, transparent 100%)',
            pointerEvents: 'none',
          }}
        />

        {/* Ghost number */}
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            right: '1.125rem',
            top: '50%',
            transform: 'translateY(-50%)',
            fontSize: '5rem',
            fontFamily: 'var(--font-playfair)',
            fontWeight: 900,
            color: 'rgba(255,255,255,0.14)',
            lineHeight: 1,
            userSelect: 'none',
            pointerEvents: 'none',
            letterSpacing: '-0.04em',
          }}
        >
          {industry.num}
        </div>

        {/* Featured badge */}
        {/* {industry.featured && (
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.25rem',
              background: 'rgba(255,255,255,0.22)',
              border: '1px solid rgba(255,255,255,0.35)',
              borderRadius: '999px',
              padding: '0.2rem 0.625rem',
              marginBottom: '1rem',
            }}
          >
            <span style={{ color: '#FFF', fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', fontFamily: 'var(--font-inter)' }}>
              ★ Flagship Vertical
            </span>
          </div>
        )} */}

        {/* Icon circle */}
        <div
          aria-hidden="true"
          style={{
            width: 54,
            height: 54,
            borderRadius: '50%',
            background: 'rgba(255,255,255,0.2)',
            border: '1.5px solid rgba(255,255,255,0.4)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '0.9rem',
            backdropFilter: 'blur(6px)',
            transition: 'background 0.25s ease, box-shadow 0.25s ease',
          }}
          className="group-hover:[background:rgba(255,255,255,0.32)] group-hover:[box-shadow:0_0_20px_rgba(255,255,255,0.25)]"
        >
          <Icon size={23} color="#FFFFFF" strokeWidth={1.6} />
        </div>

        {/* Title on gold */}
        <h3
          style={{
            fontFamily: 'var(--font-playfair)',
            fontWeight: 700,
            fontSize: '1.075rem',
            color: '#FFFFFF',
            lineHeight: 1.25,
            textShadow: '0 1px 3px rgba(0,0,0,0.18)',
          }}
        >
          {industry.title}
        </h3>
      </div>

      {/* -- White Content Panel -- */}
      <div style={{ padding: '1.5rem 1.75rem 1.875rem' }}>
        <p
          style={{
            fontFamily: 'var(--font-inter)',
            fontSize: '0.845rem',
            color: 'var(--text-body)',
            lineHeight: 1.72,
            marginBottom: '1.125rem',
          }}
        >
          {industry.desc}
        </p>

        {/* Client strip */}
        <p
          style={{
            fontFamily: 'var(--font-inter)',
            fontSize: '0.715rem',
            color: 'var(--gold-deep)',
            fontWeight: 600,
            lineHeight: 1.45,
            letterSpacing: '0.015em',
            marginBottom: '1.375rem',
            paddingTop: '0.875rem',
            borderTop: '1px solid rgba(201,168,76,0.18)',
          }}
        >
          {industry.clients}
        </p>

        {/* CTA row */}
        <div
          className="flex items-center gap-1.5"
          style={{
            color: 'var(--gold)',
            fontSize: '0.8125rem',
            fontFamily: 'var(--font-inter)',
            fontWeight: 700,
            letterSpacing: '0.01em',
          }}
        >
          Explore solutions
          <ArrowRight
            size={13}
            className="transition-transform duration-200 group-hover:translate-x-1"
            aria-hidden="true"
          />
        </div>
      </div>
    </Link>
  );
}

export default function IndustriesServed() {
  return (
    <section
      aria-labelledby="industries-heading"
      style={{
        background: '#FFFFFF',
        padding: '6rem 0',
        borderTop: '1px solid var(--border)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Decorative radial gold glow — top-center */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: '-8%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '900px',
          height: '420px',
          background: 'radial-gradient(ellipse at center, rgba(201,168,76,0.07) 0%, transparent 68%)',
          pointerEvents: 'none',
        }}
      />

      {/* Decorative gold rings — bottom corners */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          bottom: '-80px',
          left: '-80px',
          width: '320px',
          height: '320px',
          borderRadius: '50%',
          border: '1px solid rgba(201,168,76,0.07)',
          pointerEvents: 'none',
        }}
      />
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          bottom: '-40px',
          left: '-40px',
          width: '200px',
          height: '200px',
          borderRadius: '50%',
          border: '1px solid rgba(201,168,76,0.1)',
          pointerEvents: 'none',
        }}
      />
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: '-60px',
          right: '-60px',
          width: '260px',
          height: '260px',
          borderRadius: '50%',
          border: '1px solid rgba(201,168,76,0.07)',
          pointerEvents: 'none',
        }}
      />

      <div
        className="container mx-auto"
        style={{ maxWidth: '80rem', padding: '0 1.25rem', position: 'relative' }}
      >
        {/* -- Section Header -- */}
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>

          {/* Eyebrow with flanking lines */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.625rem',
              marginBottom: '1.125rem',
            }}
          >
            <div
              aria-hidden="true"
              style={{
                width: 28,
                height: 1.5,
                background: 'linear-gradient(90deg, transparent, var(--gold))',
                borderRadius: 1,
              }}
            />
            <p className="section-label">Industry Expertise</p>
            <div
              aria-hidden="true"
              style={{
                width: 28,
                height: 1.5,
                background: 'linear-gradient(90deg, var(--gold), transparent)',
                borderRadius: 1,
              }}
            />
          </div>

          <h2
            id="industries-heading"
            style={{
              fontFamily: 'var(--font-playfair)',
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              color: 'var(--text-dark)',
              lineHeight: 1.1,
              marginBottom: '1.375rem',
            }}
          >
            Industries We{' '}
            <span className="accent-gold">Serve</span>
          </h2>

          {/* Wider gold divider */}
          <div
            aria-hidden="true"
            style={{
              display: 'block',
              width: 80,
              height: 3,
              borderRadius: 2,
              background: 'linear-gradient(90deg, var(--gold-bright), var(--gold), var(--gold-deep))',
              margin: '0 auto 1.5rem',
            }}
          />

          <p
            style={{
              color: 'var(--text-body)',
              fontSize: '1rem',
              lineHeight: 1.78,
              maxWidth: '560px',
              margin: '0 auto',
            }}
          >
            Whether you&apos;re opening a hotel, hospital, cloud kitchen, or institution — VSD International
            has the equipment, expertise, and track record to deliver your project on time.
          </p>
        </div>

        {/* -- 3-Column Grid -- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((ind) => (
            <IndustryCard key={ind.title} industry={ind} />
          ))}
        </div>

        {/* -- Bottom CTA -- */}
        <div style={{ textAlign: 'center', marginTop: '3.75rem' }}>
          <Link
            href="/industries"
            className="btn-gold inline-flex items-center gap-2"
            aria-label="View all industries VSD International serves"
          >
            View All Industries <ArrowRight size={15} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
