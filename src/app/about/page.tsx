import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ArrowRight, PhoneCall, Shield, Award, Clock, Star,
  MapPin, Users, Factory, CheckCircle2, Zap, Heart, Layers, Globe,
} from 'lucide-react';
import AnnouncementBar   from '@/components/home/AnnouncementBar';
import Navbar            from '@/components/home/Navbar';
import Footer            from '@/components/home/Footer';
import WhatsAppFloat     from '@/components/home/WhatsAppFloat';
import StatsCounter      from '@/components/about/StatsCounter';

/* --- Metadata ------------------------------------------------------------- */
export const metadata: Metadata = {
  title: 'About Us — VSD International | ISO 9001 Kitchen Equipment Manufacturer Since 2009',
  description:
    'Learn about VSD International — ISO 9001 certified commercial kitchen equipment manufacturer in Delhi since 2009. Trusted by Hyatt, Radisson & ITC. 15+ years, 200+ clients, pan-India service.',
  alternates: { canonical: '/about' },
};

/* --- Timeline milestones -------------------------------------------------- */
const MILESTONES = [
  { year: '2009', title: 'Founded in Delhi',         desc: 'Started with local restaurant equipment supply from a single workshop in Mandawali.'   },
  { year: '2011', title: 'First Hotel Project',       desc: 'Completed first luxury hotel kitchen setup in New Delhi, marking our premium entry.'    },
  { year: '2013', title: 'Manufacturing Unit',        desc: 'Launched dedicated SS fabrication unit for custom kitchen equipment and modular setups.' },
  { year: '2015', title: 'ISO 9001 Certified',        desc: 'Achieved ISO 9001:2015 quality certification — a milestone in our quality journey.'     },
  { year: '2017', title: 'International Brands',      desc: 'Became authorised dealer for Rational, Robot Coupe, Scotsman, Vitamix & more.'         },
  { year: '2020', title: '100+ Hotel Projects',       desc: 'Crossed 100 completed hotel kitchen projects across North and Central India.'           },
  { year: '2022', title: 'Pan-India Expansion',       desc: 'Extended service network to 50+ cities with dedicated installation teams across India.'  },
  { year: '2024', title: 'Industry Leader',           desc: 'Trusted by Hyatt, Radisson Blu, ITC Welcomhotel & Crowne Plaza. 312 Google reviews.'   },
];

/* --- Core values ---------------------------------------------------------- */
const VALUES = [
  { Icon: Shield,  title: 'Uncompromising Quality',  desc: 'Every product we supply or fabricate meets ISO 9001 standards. Quality is not a target — it is our culture.' },
  { Icon: Heart,   title: 'Client-First Mindset',    desc: 'We understand that your kitchen is your business. We listen, plan, and deliver solutions that work for you.'  },
  { Icon: Zap,     title: 'Speed & Reliability',     desc: '21-day delivery benchmark. We respect timelines and honour commitments — every single project, every time.'   },
  { Icon: Globe,   title: 'Pan-India Reach',          desc: 'From J&K to Kerala, we deliver and commission equipment across India with our own trained service teams.'    },
];

/* --- Why VSD differentiators (on gold background) ------------------------ */
const DIFFERENTIATORS = [
  { Icon: Award,   title: 'ISO 9001:2015 Certified',       body: 'Internationally recognised quality management system covering manufacturing, supply, and after-sales service.' },
  { Icon: Clock,   title: '15+ Years Track Record',         body: 'Founded in 2009 with a clear mission. Years of on-time delivery and satisfied clients speak for us.' },
  { Icon: Layers,  title: 'Premium International Brands',  body: 'Rational, Robot Coupe, Scotsman, Vitamix, Hamilton Beach, BUNN — the world\'s best, available through VSD.'        },
  { Icon: Users,   title: 'Dedicated After-Sales Team',    body: 'Dedicated AMC engineers, genuine spare parts, and 24/7 support so your kitchen never faces unplanned downtime.'     },
];

/* --- Client names --------------------------------------------------------- */
const CLIENTS = [
  'Hyatt Regency New Delhi', 'Radisson Blu', 'ITC Welcomhotel', 'Crowne Plaza',
  'Fortis Hospitals', 'Metro Hospitals', 'Novotel', 'Holiday Inn',
  'Lemon Tree Hotels', 'AIIMS Delhi', 'Army Wellness Centre', 'DPS Schools',
];

/* --- About Page ----------------------------------------------------------- */
export default function AboutPage() {
  return (
    <>
      <AnnouncementBar />
      <Navbar />

      <main id="main-content">

        {/* ══════════════════════════════════════════════════════════════════
            HERO — warm cream with gold geometric rings
           ══════════════════════════════════════════════════════════════════ */}
        <section
          aria-label="About VSD International"
          style={{
            position: 'relative',
            overflow: 'hidden',
            background: 'linear-gradient(150deg, #FBF5E6 0%, #F5EAC8 45%, #FAFAF8 100%)',
            padding: 'clamp(4rem, 8vw, 7rem) 0 clamp(3rem, 6vw, 5rem)',
          }}
        >
          {/* Decorative gold rings */}
          <svg
            aria-hidden="true"
            viewBox="0 0 560 560"
            fill="none"
            style={{ position: 'absolute', top: '-120px', right: '-120px', width: '560px', height: '560px', pointerEvents: 'none' }}
          >
            <circle cx="280" cy="280" r="270" stroke="rgba(201,168,76,0.18)" strokeWidth="1.5" />
            <circle cx="280" cy="280" r="210" stroke="rgba(201,168,76,0.14)" strokeWidth="1" />
            <circle cx="280" cy="280" r="150" stroke="rgba(201,168,76,0.20)" strokeWidth="1.5" />
            <circle cx="280" cy="280" r="90"  stroke="rgba(201,168,76,0.12)" strokeWidth="1" />
          </svg>
          <svg
            aria-hidden="true"
            viewBox="0 0 420 420"
            fill="none"
            style={{ position: 'absolute', bottom: '-100px', left: '-80px', width: '420px', height: '420px', pointerEvents: 'none' }}
          >
            <circle cx="210" cy="210" r="200" stroke="rgba(201,168,76,0.12)" strokeWidth="1.5" />
            <circle cx="210" cy="210" r="140" stroke="rgba(201,168,76,0.10)" strokeWidth="1" />
            <circle cx="210" cy="210" r="80"  stroke="rgba(201,168,76,0.14)" strokeWidth="1.5" />
          </svg>

          {/* Gold dot pattern overlay */}
          <div
            aria-hidden="true"
            style={{
              position: 'absolute', inset: 0, pointerEvents: 'none',
              backgroundImage: 'radial-gradient(circle, rgba(201,168,76,0.14) 1px, transparent 1px)',
              backgroundSize: '28px 28px',
              opacity: 0.6,
              maskImage: 'radial-gradient(ellipse 80% 70% at 50% 50%, black 30%, transparent 100%)',
              WebkitMaskImage: 'radial-gradient(ellipse 80% 70% at 50% 50%, black 30%, transparent 100%)',
            }}
          />

          <div className="container mx-auto" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>

            {/* Breadcrumb */}
            <nav aria-label="Breadcrumb" style={{ marginBottom: '2rem' }}>
              <ol style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', listStyle: 'none', fontFamily: 'var(--font-inter)', fontSize: '0.8125rem', color: 'var(--text-muted)' }}>
                <li><Link href="/" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Home</Link></li>
                <li aria-hidden="true" style={{ color: 'var(--gold)' }}>›</li>
                <li style={{ color: 'var(--gold)', fontWeight: 600 }}>About Us</li>
              </ol>
            </nav>

            {/* Eyebrow */}
            <div style={{ display: 'flex', justifyContent: 'center', gap: '0.75rem', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
              <span
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
                  padding: '0.3rem 0.875rem', borderRadius: '999px',
                  background: 'rgba(201,168,76,0.12)', border: '1px solid rgba(201,168,76,0.30)',
                  fontFamily: 'var(--font-inter)', fontSize: '0.6875rem', fontWeight: 700,
                  letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--gold-deep)',
                }}
              >
                <Shield size={11} aria-hidden="true" />
                ISO 9001:2015 Certified
              </span>
              <span
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
                  padding: '0.3rem 0.875rem', borderRadius: '999px',
                  background: 'rgba(201,168,76,0.08)', border: '1px solid rgba(201,168,76,0.20)',
                  fontFamily: 'var(--font-inter)', fontSize: '0.6875rem', fontWeight: 600,
                  letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--text-muted)',
                }}
              >
                Est. 2019 · Delhi, India
              </span>
            </div>

            {/* H1 */}
            <h1
              style={{
                fontFamily: 'var(--font-playfair)',
                fontWeight: 800,
                fontSize: 'clamp(2.25rem, 5vw, 4rem)',
                lineHeight: 1.08,
                letterSpacing: '-0.025em',
                color: 'var(--text-dark)',
                maxWidth: '780px',
                margin: '0 auto 1.25rem',
              }}
            >
              India&apos;s Premier{' '}
              <span
                style={{
                  background: 'linear-gradient(135deg, var(--gold-deep) 0%, var(--gold) 50%, var(--gold-bright) 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  fontStyle: 'italic',
                }}
              >
                Commercial Kitchen
              </span>{' '}
              Equipment Manufacturer
            </h1>

            {/* Gold rule */}
            <div aria-hidden="true" style={{ width: 72, height: 3, background: 'linear-gradient(90deg, var(--gold-bright), var(--gold), var(--gold-deep))', borderRadius: 2, margin: '0 auto 1.5rem' }} />

            {/* Subtitle */}
            <p
              style={{
                fontFamily: 'var(--font-inter)',
                fontSize: 'clamp(1rem, 1.5vw, 1.125rem)',
                color: 'var(--text-body)',
                lineHeight: 1.75,
                maxWidth: '640px',
                margin: '0 auto 2.5rem',
              }}
            >
              Since 2009, VSD International has been the trusted partner for hotels, hospitals, and
              institutions across India — delivering world-class kitchen equipment with ISO 9001 quality
              and unmatched after-sales support.
            </p>

            {/* Quick metrics strip */}
            <div
              style={{
                display: 'inline-grid',
                gridTemplateColumns: 'repeat(4, auto)',
                gap: '0',
                background: '#FFFFFF',
                border: '1.5px solid var(--border)',
                borderRadius: 14,
                boxShadow: '0 8px 32px rgba(201,168,76,0.12)',
                overflow: 'hidden',
              }}
            >
              {[
                { val: '15+',  label: 'Years'     },
                { val: '200+', label: 'Clients'   },
                { val: '5★',   label: 'Google'    },
                { val: '50+',  label: 'Cities'    },
              ].map(({ val, label }, idx) => (
                <div
                  key={label}
                  style={{
                    padding: '1rem 2rem',
                    textAlign: 'center',
                    borderRight: idx < 3 ? '1px solid var(--border)' : 'none',
                  }}
                >
                  <div style={{ fontFamily: 'var(--font-playfair)', fontWeight: 800, fontSize: '1.5rem', color: 'var(--gold-deep)', lineHeight: 1 }}>
                    {val}
                  </div>
                  <div style={{ fontFamily: 'var(--font-inter)', fontSize: '0.6875rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--text-muted)', marginTop: '0.3rem' }}>
                    {label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom gold border */}
          <div aria-hidden="true" style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '1px', background: 'linear-gradient(90deg, transparent 5%, rgba(201,168,76,0.35) 50%, transparent 95%)' }} />
        </section>

        {/* ══════════════════════════════════════════════════════════════════
            OUR STORY — white, 2-col split
           ══════════════════════════════════════════════════════════════════ */}
        <section
          aria-labelledby="story-heading"
          style={{ background: '#FFFFFF', padding: 'clamp(4rem, 7vw, 6rem) 0' }}
        >
          <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20" style={{ alignItems: 'center' }}>

              {/* Left — story text */}
              <div>
                <p className="section-label" style={{ marginBottom: '0.875rem' }}>Our Story</p>
                <h2
                  id="story-heading"
                  style={{
                    fontFamily: 'var(--font-playfair)',
                    fontWeight: 800,
                    fontSize: 'clamp(1.75rem, 3vw, 2.625rem)',
                    color: 'var(--text-dark)',
                    lineHeight: 1.12,
                    letterSpacing: '-0.02em',
                    marginBottom: '1.25rem',
                  }}
                >
                  From a Workshop in Delhi to{' '}
                  <span style={{ color: 'var(--gold-deep)', fontStyle: 'italic' }}>India&apos;s Most Trusted</span>{' '}
                  Kitchen Partner
                </h2>

                <div aria-hidden="true" style={{ width: 56, height: 3, background: 'linear-gradient(90deg, var(--gold-bright), var(--gold))', borderRadius: 2, marginBottom: '1.75rem' }} />

                {/* Story paragraphs — gold left border */}
                <div style={{ borderLeft: '3px solid rgba(201,168,76,0.35)', paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1.125rem' }}>
                  <p style={{ fontFamily: 'var(--font-inter)', fontSize: '1rem', color: 'var(--text-body)', lineHeight: 1.8 }}>
                    VSD International was founded in 2009 with a singular vision: to make world-class commercial
                    kitchen equipment accessible to every hospitality establishment across India. What began in a
                    small workshop in Mandawali, Delhi has grown into one of the country&apos;s most trusted
                    kitchen equipment suppliers and manufacturers.
                  </p>
                  <p style={{ fontFamily: 'var(--font-inter)', fontSize: '1rem', color: 'var(--text-body)', lineHeight: 1.8 }}>
                    Today, we operate a manufacturing unit in Delhi, serve 200+ clients — including India&apos;s
                    finest hotels, hospital groups, and cloud kitchen operators — and are the authorised dealer for
                    premium international brands including Rational, Robot Coupe, Scotsman, and Vitamix.
                  </p>
                  <p style={{ fontFamily: 'var(--font-inter)', fontSize: '1rem', color: 'var(--text-body)', lineHeight: 1.8 }}>
                    Our ISO 9001:2015 certification reflects our unwavering commitment to quality — from the raw
                    materials we source to the final commissioning of your kitchen. Our 312 Google reviews (5★)
                    are not just a number; they are the voice of 200+ satisfied clients.
                  </p>
                </div>

                {/* Founder quote */}
                <blockquote
                  style={{
                    marginTop: '2rem',
                    padding: '1.25rem 1.5rem',
                    borderRadius: 12,
                    background: 'linear-gradient(135deg, rgba(201,168,76,0.07) 0%, rgba(201,168,76,0.03) 100%)',
                    border: '1px solid rgba(201,168,76,0.20)',
                    borderLeft: '4px solid var(--gold)',
                  }}
                >
                  <p style={{ fontFamily: 'var(--font-playfair)', fontStyle: 'italic', fontSize: '1.0625rem', color: 'var(--text-dark)', lineHeight: 1.65, marginBottom: '0.75rem' }}>
                    &ldquo;Our mission has always been simple — to give every kitchen, regardless of its size, access to
                    the best equipment and the best service. That belief has guided every decision we have made for
                    15 years.&rdquo;
                  </p>
                  <footer style={{ fontFamily: 'var(--font-inter)', fontSize: '0.875rem', fontWeight: 700, color: 'var(--gold-deep)' }}>
                    — Founder &amp; Managing Director, VSD International
                  </footer>
                </blockquote>
              </div>

              {/* Right — animated stat counters */}
              <div>
                {/* Decorative large "15" watermark */}
                <div style={{ position: 'relative' }}>
                  <div
                    aria-hidden="true"
                    style={{
                      position: 'absolute',
                      top: '-20px',
                      right: '-20px',
                      fontFamily: 'var(--font-playfair)',
                      fontSize: 'clamp(8rem, 14vw, 11rem)',
                      fontWeight: 900,
                      color: 'rgba(201,168,76,0.07)',
                      lineHeight: 1,
                      userSelect: 'none',
                      pointerEvents: 'none',
                      letterSpacing: '-0.05em',
                    }}
                  >
                    15
                  </div>
                  <StatsCounter />
                </div>

                {/* CTA links below stats */}
                <div style={{ marginTop: '1.5rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                  <Link
                    href="/contact"
                    className="btn-gold inline-flex items-center gap-2"
                    style={{ fontSize: '0.9375rem', borderRadius: 8 }}
                  >
                    Get a Free Quote <ArrowRight size={14} aria-hidden="true" />
                  </Link>
                  <Link
                    href="/projects"
                    className="btn-ghost inline-flex items-center gap-2"
                    style={{ fontSize: '0.9375rem', borderRadius: 8 }}
                  >
                    View Our Projects
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════════
            JOURNEY TIMELINE — warm cream, horizontal scroll
           ══════════════════════════════════════════════════════════════════ */}
        <section
          aria-labelledby="timeline-heading"
          style={{ background: 'var(--surface-alt)', padding: 'clamp(4rem, 7vw, 6rem) 0', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}
        >
          <div className="container mx-auto">
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', marginBottom: '3rem' }}>
              <p className="section-label" style={{ marginBottom: '0.75rem' }}>Our Journey</p>
              <h2
                id="timeline-heading"
                style={{
                  fontFamily: 'var(--font-playfair)',
                  fontWeight: 800,
                  fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
                  color: 'var(--text-dark)',
                  letterSpacing: '-0.02em',
                }}
              >
                15 Years of{' '}
                <span style={{ color: 'var(--gold-deep)', fontStyle: 'italic' }}>Building Excellence</span>
              </h2>
              <div aria-hidden="true" style={{ width: 56, height: 3, background: 'linear-gradient(90deg, var(--gold-bright), var(--gold))', borderRadius: 2, marginTop: '1.25rem' }} />
            </div>

            {/* Timeline — horizontal scroll on desktop, vertical on mobile */}
            <div style={{ position: 'relative', overflowX: 'auto', paddingBottom: '1rem' }}>
              {/* Gold connecting line (desktop) */}
              <div
                aria-hidden="true"
                className="hidden md:block"
                style={{
                  position: 'absolute',
                  top: '36px',
                  left: '2rem',
                  right: '2rem',
                  height: '2px',
                  background: 'linear-gradient(90deg, rgba(201,168,76,0.2) 0%, rgba(201,168,76,0.6) 50%, rgba(201,168,76,0.2) 100%)',
                  zIndex: 0,
                }}
              />

              <div
                className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-4"
                style={{ position: 'relative', zIndex: 1 }}
              >
                {MILESTONES.map(({ year, title, desc }, idx) => {
                  const isEven = idx % 2 === 0;
                  return (
                    <div
                      key={year}
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        textAlign: 'center',
                        paddingTop: '0',
                      }}
                    >
                      {/* Gold dot + year */}
                      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '1rem' }}>
                        <div
                          style={{
                            width: 48,
                            height: 48,
                            borderRadius: '50%',
                            background: isEven
                              ? 'linear-gradient(135deg, var(--gold-light), var(--gold))'
                              : '#FFFFFF',
                            border: `2.5px solid var(--gold)`,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            boxShadow: '0 4px 20px rgba(201,168,76,0.28)',
                            zIndex: 2,
                          }}
                        >
                          <span
                            style={{
                              fontFamily: 'var(--font-inter)',
                              fontSize: '0.625rem',
                              fontWeight: 800,
                              color: isEven ? '#1A1208' : 'var(--gold-deep)',
                              letterSpacing: '0.04em',
                            }}
                          >
                            {year.slice(2)}
                          </span>
                        </div>
                        <div
                          style={{
                            fontFamily: 'var(--font-playfair)',
                            fontSize: '1.125rem',
                            fontWeight: 700,
                            color: 'var(--gold-deep)',
                            marginTop: '0.5rem',
                          }}
                        >
                          {year}
                        </div>
                      </div>

                      {/* Card */}
                      <div
                        style={{
                          background: '#FFFFFF',
                          border: '1.5px solid var(--border)',
                          borderRadius: 12,
                          padding: '1.125rem 1rem',
                          boxShadow: isEven ? '0 6px 24px rgba(201,168,76,0.10)' : '0 2px 12px rgba(0,0,0,0.04)',
                          flex: 1,
                          borderTop: `3px solid ${isEven ? 'var(--gold)' : 'var(--border)'}`,
                        }}
                      >
                        <p style={{ fontFamily: 'var(--font-inter)', fontWeight: 700, fontSize: '0.9375rem', color: 'var(--text-dark)', marginBottom: '0.5rem' }}>
                          {title}
                        </p>
                        <p style={{ fontFamily: 'var(--font-inter)', fontSize: '0.8125rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
                          {desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════════
            OUR CORE VALUES — white, 2x2 card grid
           ══════════════════════════════════════════════════════════════════ */}
        <section
          aria-labelledby="values-heading"
          style={{ background: '#FFFFFF', padding: 'clamp(4rem, 7vw, 6rem) 0' }}
        >
          <div className="container mx-auto">
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', marginBottom: '3rem' }}>
              <p className="section-label" style={{ marginBottom: '0.75rem' }}>What We Stand For</p>
              <h2
                id="values-heading"
                style={{ fontFamily: 'var(--font-playfair)', fontWeight: 800, fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', color: 'var(--text-dark)', letterSpacing: '-0.02em' }}
              >
                Our Core{' '}
                <span style={{ color: 'var(--gold-deep)', fontStyle: 'italic' }}>Values &amp; Philosophy</span>
              </h2>
              <div aria-hidden="true" style={{ width: 56, height: 3, background: 'linear-gradient(90deg, var(--gold-bright), var(--gold))', borderRadius: 2, marginTop: '1.25rem' }} />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {VALUES.map(({ Icon, title, desc }) => (
                <div
                  key={title}
                  className="card-lift group"
                  style={{
                    background: '#FFFFFF',
                    border: '1.5px solid var(--border)',
                    borderRadius: 16,
                    padding: '2rem 1.5rem',
                    position: 'relative',
                    overflow: 'hidden',
                  }}
                >
                  {/* Gold top line on hover */}
                  <div
                    aria-hidden="true"
                    style={{
                      position: 'absolute', top: 0, left: 0, right: 0, height: 3,
                      background: 'linear-gradient(90deg, var(--gold-bright), var(--gold), var(--gold-deep))',
                    }}
                  />

                  {/* Icon */}
                  <div
                    style={{
                      width: 56, height: 56, borderRadius: 14,
                      background: 'linear-gradient(135deg, rgba(201,168,76,0.12) 0%, rgba(201,168,76,0.06) 100%)',
                      border: '1.5px solid rgba(201,168,76,0.25)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      marginBottom: '1.5rem',
                    }}
                    aria-hidden="true"
                  >
                    <Icon size={24} strokeWidth={1.6} style={{ color: 'var(--gold-deep)' }} />
                  </div>

                  <h3 style={{ fontFamily: 'var(--font-playfair)', fontWeight: 700, fontSize: '1.125rem', color: 'var(--text-dark)', marginBottom: '0.75rem', lineHeight: 1.2 }}>
                    {title}
                  </h3>
                  <p style={{ fontFamily: 'var(--font-inter)', fontSize: '0.9375rem', color: 'var(--text-muted)', lineHeight: 1.7 }}>
                    {desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════════
            WHY VSD — GOLD GRADIENT SECTION (the standout)
           ══════════════════════════════════════════════════════════════════ */}
        <section
          aria-labelledby="why-heading"
          style={{
            position: 'relative',
            overflow: 'hidden',
            background: 'linear-gradient(135deg, #D4A843 0%, #F0C442 40%, #C9A84C 70%, #A67C32 100%)',
            padding: 'clamp(4rem, 7vw, 6rem) 0',
          }}
        >
          {/* Subtle dot pattern on gold */}
          <div
            aria-hidden="true"
            style={{
              position: 'absolute', inset: 0, pointerEvents: 'none',
              backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.18) 1px, transparent 1px)',
              backgroundSize: '24px 24px',
            }}
          />
          {/* Decorative rings on gold */}
          <svg aria-hidden="true" viewBox="0 0 400 400" fill="none" style={{ position: 'absolute', top: '-80px', right: '-80px', width: '400px', height: '400px', pointerEvents: 'none', opacity: 0.2 }}>
            <circle cx="200" cy="200" r="190" stroke="rgba(255,255,255,0.6)" strokeWidth="1.5" />
            <circle cx="200" cy="200" r="130" stroke="rgba(255,255,255,0.4)" strokeWidth="1" />
          </svg>

          <div className="container mx-auto" style={{ position: 'relative', zIndex: 1 }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', marginBottom: '3rem' }}>
              <span
                style={{
                  display: 'inline-block',
                  padding: '0.3rem 0.875rem',
                  borderRadius: '999px',
                  background: 'rgba(26,18,8,0.15)',
                  border: '1px solid rgba(26,18,8,0.20)',
                  fontFamily: 'var(--font-inter)',
                  fontSize: '0.6875rem',
                  fontWeight: 700,
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  color: '#1A1208',
                  marginBottom: '1.25rem',
                }}
              >
                Why Choose VSD
              </span>
              <h2
                id="why-heading"
                style={{
                  fontFamily: 'var(--font-playfair)',
                  fontWeight: 800,
                  fontSize: 'clamp(1.875rem, 3.5vw, 3rem)',
                  color: '#1A1208',
                  lineHeight: 1.1,
                  letterSpacing: '-0.025em',
                  maxWidth: '680px',
                }}
              >
                India&apos;s Most Trusted Commercial Kitchen Partner — Since 2009
              </h2>
              <div aria-hidden="true" style={{ width: 60, height: 3, background: 'rgba(26,18,8,0.3)', borderRadius: 2, marginTop: '1.25rem' }} />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {DIFFERENTIATORS.map(({ Icon, title, body }) => (
                <div
                  key={title}
                  style={{
                    background: 'rgba(255,255,255,0.92)',
                    borderRadius: 16,
                    padding: '1.75rem 1.5rem',
                    boxShadow: '0 8px 32px rgba(26,18,8,0.15)',
                    backdropFilter: 'blur(8px)',
                  }}
                >
                  <div
                    style={{
                      width: 48, height: 48, borderRadius: 12,
                      background: 'linear-gradient(135deg, rgba(201,168,76,0.18), rgba(201,168,76,0.08))',
                      border: '1.5px solid rgba(201,168,76,0.35)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      marginBottom: '1.25rem',
                    }}
                    aria-hidden="true"
                  >
                    <Icon size={22} strokeWidth={1.6} style={{ color: 'var(--gold-deep)' }} />
                  </div>
                  <h3 style={{ fontFamily: 'var(--font-playfair)', fontWeight: 700, fontSize: '1.0625rem', color: 'var(--text-dark)', marginBottom: '0.75rem', lineHeight: 1.25 }}>
                    {title}
                  </h3>
                  <p style={{ fontFamily: 'var(--font-inter)', fontSize: '0.875rem', color: 'var(--text-body)', lineHeight: 1.7 }}>
                    {body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════════
            CERTIFICATIONS — warm cream
           ══════════════════════════════════════════════════════════════════ */}
        <section
          aria-labelledby="cert-heading"
          style={{ background: 'var(--surface)', padding: 'clamp(4rem, 7vw, 6rem) 0', borderTop: '1px solid var(--border)' }}
        >
          <div className="container mx-auto">
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', marginBottom: '3rem' }}>
              <p className="section-label" style={{ marginBottom: '0.75rem' }}>Quality Standards</p>
              <h2 id="cert-heading" style={{ fontFamily: 'var(--font-playfair)', fontWeight: 800, fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', color: 'var(--text-dark)', letterSpacing: '-0.02em' }}>
                Certified for{' '}
                <span style={{ color: 'var(--gold-deep)', fontStyle: 'italic' }}>Excellence &amp; Safety</span>
              </h2>
              <div aria-hidden="true" style={{ width: 56, height: 3, background: 'linear-gradient(90deg, var(--gold-bright), var(--gold))', borderRadius: 2, marginTop: '1.25rem' }} />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

              {/* ISO 9001 — featured large */}
              <div
                style={{
                  gridColumn: 'span 1',
                  background: 'linear-gradient(135deg, rgba(201,168,76,0.10) 0%, rgba(201,168,76,0.04) 100%)',
                  border: '2px solid rgba(201,168,76,0.30)',
                  borderRadius: 18,
                  padding: '2.5rem',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                <div aria-hidden="true" style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 4, background: 'linear-gradient(90deg, var(--gold-bright), var(--gold), var(--gold-deep))' }} />
                <div style={{ width: 72, height: 72, borderRadius: '50%', background: 'linear-gradient(135deg, var(--gold-light), var(--gold))', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem', boxShadow: '0 8px 24px rgba(201,168,76,0.35)' }} aria-hidden="true">
                  <Shield size={32} strokeWidth={1.5} style={{ color: '#1A1208' }} />
                </div>
                <h3 style={{ fontFamily: 'var(--font-playfair)', fontWeight: 800, fontSize: '1.375rem', color: 'var(--text-dark)', marginBottom: '0.5rem' }}>ISO 9001:2015</h3>
                <p style={{ fontFamily: 'var(--font-inter)', fontWeight: 700, fontSize: '0.75rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--gold-deep)', marginBottom: '1rem' }}>Quality Management System</p>
                <p style={{ fontFamily: 'var(--font-inter)', fontSize: '0.9375rem', color: 'var(--text-body)', lineHeight: 1.7 }}>
                  Our ISO 9001:2015 certification covers manufacturing, procurement, supply, installation, and
                  after-sales service — ensuring consistent quality at every touchpoint.
                </p>
              </div>

              {/* Quality commitments */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {[
                  { icon: CheckCircle2, label: 'SS 304 Grade Fabrication', note: 'All custom fabrication in food-grade stainless steel' },
                  { icon: CheckCircle2, label: 'FSSAI Compliant Designs', note: 'Kitchen layouts compliant with FSSAI & HACCP standards' },
                  { icon: CheckCircle2, label: 'Genuine Spare Parts',       note: 'OEM parts from authorised brand distributors only' },
                ].map(({ icon: Icon, label, note }) => (
                  <div key={label} style={{ background: '#FFFFFF', border: '1.5px solid var(--border)', borderRadius: 12, padding: '1.25rem 1.5rem', display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                    <div style={{ width: 38, height: 38, borderRadius: 10, background: 'rgba(201,168,76,0.10)', border: '1px solid rgba(201,168,76,0.22)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }} aria-hidden="true">
                      <Icon size={18} strokeWidth={1.6} style={{ color: 'var(--gold-deep)' }} />
                    </div>
                    <div>
                      <p style={{ fontFamily: 'var(--font-inter)', fontWeight: 700, fontSize: '0.9375rem', color: 'var(--text-dark)', marginBottom: '0.25rem' }}>{label}</p>
                      <p style={{ fontFamily: 'var(--font-inter)', fontSize: '0.8125rem', color: 'var(--text-muted)' }}>{note}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Factory facts */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {[
                  { icon: Factory, label: '1 Manufacturing Unit', note: 'Located in Delhi NCR for fast delivery' },
                  { icon: Users,   label: '50+ Trained Engineers',  note: 'In-house installation and commissioning team' },
                  { icon: Star,    label: '5★ Google Rating',        note: 'Based on 312 verified Google reviews' },
                ].map(({ icon: Icon, label, note }) => (
                  <div key={label} style={{ background: '#FFFFFF', border: '1.5px solid var(--border)', borderRadius: 12, padding: '1.25rem 1.5rem', display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                    <div style={{ width: 38, height: 38, borderRadius: 10, background: 'rgba(201,168,76,0.10)', border: '1px solid rgba(201,168,76,0.22)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }} aria-hidden="true">
                      <Icon size={18} strokeWidth={1.6} style={{ color: 'var(--gold-deep)' }} />
                    </div>
                    <div>
                      <p style={{ fontFamily: 'var(--font-inter)', fontWeight: 700, fontSize: '0.9375rem', color: 'var(--text-dark)', marginBottom: '0.25rem' }}>{label}</p>
                      <p style={{ fontFamily: 'var(--font-inter)', fontSize: '0.8125rem', color: 'var(--text-muted)' }}>{note}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════════
            OUR CLIENTS — white, elegant name grid
           ══════════════════════════════════════════════════════════════════ */}
        <section
          aria-labelledby="clients-heading"
          style={{ background: '#FFFFFF', padding: 'clamp(4rem, 7vw, 6rem) 0', borderTop: '1px solid var(--border)' }}
        >
          <div className="container mx-auto">
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', marginBottom: '3rem' }}>
              <p className="section-label" style={{ marginBottom: '0.75rem' }}>Trusted By</p>
              <h2 id="clients-heading" style={{ fontFamily: 'var(--font-playfair)', fontWeight: 800, fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', color: 'var(--text-dark)', letterSpacing: '-0.02em' }}>
                India&apos;s Finest Hotels, Hospitals{' '}
                <span style={{ color: 'var(--gold-deep)', fontStyle: 'italic' }}>&amp; Institutions</span>
              </h2>
              <div aria-hidden="true" style={{ width: 56, height: 3, background: 'linear-gradient(90deg, var(--gold-bright), var(--gold))', borderRadius: 2, marginTop: '1.25rem', marginBottom: '1rem' }} />
              <p style={{ fontFamily: 'var(--font-inter)', fontSize: '1rem', color: 'var(--text-muted)', maxWidth: '520px', lineHeight: 1.7 }}>
                200+ clients across North and Central India have trusted VSD International to build and equip their commercial kitchens.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {CLIENTS.map((name) => (
                <div
                  key={name}
                  className="card-lift"
                  style={{
                    background: 'var(--surface)',
                    border: '1.5px solid var(--border)',
                    borderRadius: 12,
                    padding: '1.25rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textAlign: 'center',
                    minHeight: '72px',
                  }}
                >
                  <span style={{ fontFamily: 'var(--font-inter)', fontSize: '0.875rem', fontWeight: 600, color: 'var(--text-body)', lineHeight: 1.3 }}>
                    {name}
                  </span>
                </div>
              ))}
            </div>

            <p style={{ textAlign: 'center', marginTop: '2rem', fontFamily: 'var(--font-inter)', fontSize: '0.875rem', color: 'var(--text-muted)' }}>
              + 180 more hotels, restaurants, hospitals, cloud kitchens &amp; institutions across India
            </p>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════════
            CTA — warm gold gradient
           ══════════════════════════════════════════════════════════════════ */}
        <section
          aria-label="Contact VSD International"
          style={{
            background: 'linear-gradient(135deg, #FBF5E6 0%, #F5EAC8 50%, #FAFAF8 100%)',
            padding: 'clamp(4rem, 7vw, 6rem) 0',
            borderTop: '1px solid rgba(201,168,76,0.25)',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <div aria-hidden="true" style={{ position: 'absolute', top: '-60px', right: '-60px', width: '360px', height: '360px', borderRadius: '50%', background: 'radial-gradient(ellipse, rgba(201,168,76,0.18) 0%, transparent 65%)', filter: 'blur(40px)' }} />
          <div aria-hidden="true" style={{ position: 'absolute', bottom: '-40px', left: '-40px', width: '280px', height: '280px', borderRadius: '50%', background: 'radial-gradient(ellipse, rgba(201,168,76,0.12) 0%, transparent 65%)', filter: 'blur(32px)' }} />

          <div className="container mx-auto" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
            <p className="section-label" style={{ marginBottom: '0.875rem' }}>Start Today</p>
            <h2
              style={{
                fontFamily: 'var(--font-playfair)',
                fontWeight: 800,
                fontSize: 'clamp(1.875rem, 3.5vw, 3rem)',
                color: 'var(--text-dark)',
                lineHeight: 1.1,
                letterSpacing: '-0.025em',
                marginBottom: '1.25rem',
              }}
            >
              Ready to Build Your{' '}
              <span
                style={{
                  background: 'linear-gradient(135deg, var(--gold-deep) 0%, var(--gold) 50%, var(--gold-bright) 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  fontStyle: 'italic',
                }}
              >
                Dream Kitchen?
              </span>
            </h2>

            <div aria-hidden="true" style={{ width: 60, height: 3, background: 'linear-gradient(90deg, var(--gold-bright), var(--gold), var(--gold-deep))', borderRadius: 2, margin: '0 auto 1.5rem' }} />

            <p style={{ fontFamily: 'var(--font-inter)', fontSize: '1.0625rem', color: 'var(--text-body)', maxWidth: '540px', margin: '0 auto 2.5rem', lineHeight: 1.75 }}>
              Get a free kitchen layout consultation, equipment list, and competitive quote from our experts — within 24 hours. No obligation.
            </p>

            <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap', marginBottom: '2rem' }}>
              <Link
                href="/contact"
                className="btn-gold inline-flex items-center gap-2"
                style={{ fontSize: '1rem', padding: '0.875rem 2.25rem', borderRadius: 8 }}
              >
                Get Free Quote &amp; Layout <ArrowRight size={16} aria-hidden="true" />
              </Link>
              <Link
                href="tel:+919250346370"
                className="btn-ghost inline-flex items-center gap-2"
                style={{ fontSize: '1rem', padding: '0.875rem 2.25rem', borderRadius: 8 }}
                aria-label="Call VSD International"
              >
                <PhoneCall size={16} aria-hidden="true" /> +91-9250346370
              </Link>
            </div>

            <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap' }}>
              {[
                { icon: CheckCircle2, text: 'Free Site Visit'       },
                { icon: CheckCircle2, text: '24-Hour Response'      },
                { icon: CheckCircle2, text: 'No Obligation Quote'   },
              ].map(({ icon: Icon, text }) => (
                <div key={text} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontFamily: 'var(--font-inter)', fontSize: '0.9375rem', color: 'var(--text-muted)' }}>
                  <Icon size={16} style={{ color: 'var(--gold-deep)', flexShrink: 0 }} aria-hidden="true" />
                  {text}
                </div>
              ))}
            </div>
          </div>
        </section>

      </main>

      <Footer />
      <WhatsAppFloat />
    </>
  );
}
