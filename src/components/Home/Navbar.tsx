'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  PhoneCall, Menu, X, ChevronDown, ArrowRight,
  Flame, Thermometer, ChefHat, Droplets, UtensilsCrossed, Wind,
  Package, PenTool, Wrench, Settings, Layers, Building2,
} from 'lucide-react';

/* ─── Types ──────────────────────────────────────────────────────────────── */
type DropKey = 'products' | 'services' | 'industries';

/* ─── Product category data ─────────────────────────────────────────────── */
const PRODUCT_CATS = [
  { Icon: Flame,           label: 'Cooking Equipment',  desc: 'Gas ranges, ovens, fryers & tandoors',    href: '/products/cooking'       },
  { Icon: Thermometer,     label: 'Refrigeration',       desc: 'Cold rooms, chillers & reach-in fridges', href: '/products/refrigeration' },
  { Icon: ChefHat,         label: 'Bakery Equipment',    desc: 'Deck ovens, spiral mixers & proofers',    href: '/products/bakery'        },
  { Icon: Droplets,        label: 'Dishwashing',         desc: 'Rack conveyors & glasswashers',           href: '/products/dishwashing'   },
  { Icon: UtensilsCrossed, label: 'Food Preparation',    desc: 'Processors, blenders & cutters',          href: '/products/food-prep'     },
  { Icon: Wind,            label: 'Ventilation',         desc: 'Exhaust hoods & UV odour systems',        href: '/products/ventilation'   },
];

/* Products shown per category in the dropdown */
const NAV_PRODUCTS: Record<string, { name: string; brand: string; tag?: string; img: string }[]> = {
  'Cooking Equipment': [
    { name: 'Heavy Duty Gas Range',       brand: 'VSD Pro',     tag: 'Bestseller', img: 'https://plus.unsplash.com/premium_photo-1723823036427-b19e6d270bb6?w=400&auto=format&fit=crop' },
    { name: 'Rational Combi Steam Oven',  brand: 'Rational',    tag: 'Premium',    img: 'https://plus.unsplash.com/premium_photo-1723823036427-b19e6d270bb6?w=400&auto=format&fit=crop' },
    { name: 'Commercial Tandoor',         brand: 'VSD Classic',                    img: 'https://plus.unsplash.com/premium_photo-1723823036427-b19e6d270bb6?w=400&auto=format&fit=crop' },
    { name: 'Deep Fat Fryer',             brand: 'VSD Pro',                        img: 'https://plus.unsplash.com/premium_photo-1723823036427-b19e6d270bb6?w=400&auto=format&fit=crop' },
  ],
  'Refrigeration': [
    { name: 'Reach-In Refrigerator',      brand: 'VSD Cold',    tag: 'Bestseller', img: 'https://plus.unsplash.com/premium_photo-1723823036427-b19e6d270bb6?w=400&auto=format&fit=crop' },
    { name: 'Blast Chiller / Freezer',    brand: 'VSD Cold',    tag: 'Premium',    img: 'https://plus.unsplash.com/premium_photo-1723823036427-b19e6d270bb6?w=400&auto=format&fit=crop' },
    { name: 'Walk-In Cold Room',          brand: 'VSD Custom',                     img: 'https://plus.unsplash.com/premium_photo-1723823036427-b19e6d270bb6?w=400&auto=format&fit=crop' },
    { name: 'Ice Flake Machine',          brand: 'Scotsman',                       img: 'https://plus.unsplash.com/premium_photo-1723823036427-b19e6d270bb6?w=400&auto=format&fit=crop' },
  ],
  'Bakery Equipment': [
    { name: 'Deck Oven',                  brand: 'VSD Bake',    tag: 'Bestseller', img: 'https://plus.unsplash.com/premium_photo-1723823036427-b19e6d270bb6?w=400&auto=format&fit=crop' },
    { name: 'Rotary Rack Oven',           brand: 'VSD Bake',    tag: 'Premium',    img: 'https://plus.unsplash.com/premium_photo-1723823036427-b19e6d270bb6?w=400&auto=format&fit=crop' },
    { name: 'Spiral Dough Mixer',         brand: 'VSD Bake',                       img: 'https://plus.unsplash.com/premium_photo-1723823036427-b19e6d270bb6?w=400&auto=format&fit=crop' },
    { name: 'Bread Proofer',              brand: 'VSD Bake',                       img: 'https://plus.unsplash.com/premium_photo-1723823036427-b19e6d270bb6?w=400&auto=format&fit=crop' },
  ],
  'Dishwashing': [
    { name: 'Rack Conveyor Dishwasher',   brand: 'VSD Wash',    tag: 'Bestseller', img: 'https://plus.unsplash.com/premium_photo-1723823036427-b19e6d270bb6?w=400&auto=format&fit=crop' },
    { name: 'Flight Type Dishwasher',     brand: 'VSD Wash',    tag: 'Premium',    img: 'https://plus.unsplash.com/premium_photo-1723823036427-b19e6d270bb6?w=400&auto=format&fit=crop' },
    { name: 'Undercounter Glasswasher',   brand: 'VSD Wash',                       img: 'https://plus.unsplash.com/premium_photo-1723823036427-b19e6d270bb6?w=400&auto=format&fit=crop' },
    { name: 'Pot & Pan Washer',           brand: 'VSD Wash',                       img: 'https://plus.unsplash.com/premium_photo-1723823036427-b19e6d270bb6?w=400&auto=format&fit=crop' },
  ],
  'Food Preparation': [
    { name: 'Planetary Mixer',            brand: 'Robot Coupe', tag: 'Bestseller', img: 'https://plus.unsplash.com/premium_photo-1723823036427-b19e6d270bb6?w=400&auto=format&fit=crop' },
    { name: 'Commercial Blender',         brand: 'Vitamix',     tag: 'Premium',    img: 'https://plus.unsplash.com/premium_photo-1723823036427-b19e6d270bb6?w=400&auto=format&fit=crop' },
    { name: 'Food Processor',             brand: 'Robot Coupe',                    img: 'https://plus.unsplash.com/premium_photo-1723823036427-b19e6d270bb6?w=400&auto=format&fit=crop' },
    { name: 'Immersion Blender',          brand: 'Hamilton Beach',                 img: 'https://plus.unsplash.com/premium_photo-1723823036427-b19e6d270bb6?w=400&auto=format&fit=crop' },
  ],
  'Ventilation': [
    { name: 'SS Exhaust Hood',            brand: 'VSD Air',     tag: 'Bestseller', img: 'https://plus.unsplash.com/premium_photo-1723823036427-b19e6d270bb6?w=400&auto=format&fit=crop' },
    { name: 'UV Odour Control System',    brand: 'VSD Air',     tag: 'Premium',    img: 'https://plus.unsplash.com/premium_photo-1723823036427-b19e6d270bb6?w=400&auto=format&fit=crop' },
    { name: 'Make-Up Air Unit',           brand: 'VSD Air',                        img: 'https://plus.unsplash.com/premium_photo-1723823036427-b19e6d270bb6?w=400&auto=format&fit=crop' },
    { name: 'Grease Trap & Drainage',     brand: 'VSD Air',                        img: 'https://plus.unsplash.com/premium_photo-1723823036427-b19e6d270bb6?w=400&auto=format&fit=crop' },
  ],
};

/* ─── Service items ──────────────────────────────────────────────────────── */
const SERVICE_ITEMS = [
  { Icon: Package,   label: 'Equipment Supply',             desc: 'Cooking, refrigeration, bakery & more',   href: '/services/equipment-supply'   },
  { Icon: PenTool,   label: 'Kitchen Design & Layout',      desc: 'CAD drawings & space flow planning',      href: '/services/kitchen-design'     },
  { Icon: Wrench,    label: 'Installation & Commissioning', desc: 'On-site setup, testing & handover',       href: '/services/installation'       },
  { Icon: Settings,  label: 'AMC & After-Sales',            desc: 'Maintenance contracts & spare parts',     href: '/services/amc'                },
  { Icon: Layers,    label: 'Custom SS Fabrication',        desc: 'Bespoke stainless steel & hoods',         href: '/services/custom-fabrication' },
  { Icon: Building2, label: 'Turnkey Kitchen Projects',     desc: 'Complete end-to-end delivery',            href: '/services/turnkey'            },
];

/* ─── Industry items ─────────────────────────────────────────────────────── */
const INDUSTRY_ITEMS = [
  { label: 'Hotels & Resorts',           desc: '5-star, boutique & heritage hotels',      href: '/industries/hotels'         },
  { label: 'Hospitals & Healthcare',     desc: 'NABH / FSSAI compliant kitchens',         href: '/industries/hospitals'      },
  { label: 'Restaurants',               desc: 'QSR, fine-dine, cafe & bar setups',       href: '/industries/restaurants'    },
  { label: 'Cloud Kitchens',            desc: 'Dark kitchen & delivery-first setups',     href: '/industries/cloud-kitchens' },
  { label: 'Bakeries & Confectionery',  desc: 'Deck ovens, proofers, mixers & more',      href: '/industries/bakeries'       },
  { label: 'Government & Institutions', desc: 'Defence, education & large institutions',  href: '/industries/government'     },
];

/* ─── Nav link list ──────────────────────────────────────────────────────── */
const NAV_LINKS: { label: string; href: string; drop: DropKey | null }[] = [
  { label: 'Products',   href: '/products',   drop: 'products'   },
  { label: 'Services',   href: '/services',   drop: 'services'   },
  { label: 'Industries', href: '/industries', drop: 'industries' },
  { label: 'Projects',   href: '/projects',   drop: null         },
  { label: 'About Us',   href: '/about',      drop: null         },
  { label: 'Contact Us', href: '/contact',    drop: null         },
];

/* ─── Shared shell ───────────────────────────────────────────────────────── */
const SHELL: React.CSSProperties = {
  position: 'absolute',
  top: '100%',
  left: 0,
  right: 0,
  background: 'rgb(0, 0, 0)',
  backdropFilter: 'blur(20px)',
  WebkitBackdropFilter: 'blur(20px)',
  borderBottom: '1px solid rgba(201,168,76,0.18)',
  boxShadow: '0 24px 72px rgba(0,0,0,0.80)',
  zIndex: 48,
};

function GoldStripe() {
  return (
    <div
      aria-hidden="true"
      style={{
        height: 2,
        background: 'linear-gradient(90deg, transparent 5%, var(--gold-bright) 35%, var(--gold) 65%, transparent 95%)',
      }}
    />
  );
}

/* ─── TAG BADGE ─────────────────────────────────────────────────────────── */
function TagBadge({ tag }: { tag?: string }) {
  if (!tag) return null;
  const isPremium = tag === 'Premium';
  return (
    <span
      style={{
        position: 'absolute',
        top: 7,
        right: 7,
        padding: '0.15rem 0.45rem',
        borderRadius: '999px',
        fontSize: '0.55rem',
        fontFamily: 'var(--font-inter)',
        fontWeight: 700,
        letterSpacing: '0.1em',
        textTransform: 'uppercase',
        background: isPremium ? 'rgba(100,60,200,0.85)' : 'rgba(201,168,76,0.90)',
        color: isPremium ? '#E8D8FF' : '#1A1208',
        border: isPremium ? '1px solid rgba(180,130,255,0.4)' : '1px solid rgba(255,220,100,0.4)',
        backdropFilter: 'blur(4px)',
      }}
    >
      {tag}
    </span>
  );
}

/* ─── PRODUCTS MEGA — left category list + right product grid ────────────── */
function ProductsMega({ on, off }: { on: () => void; off: () => void }) {
  const [activeCat, setActiveCat] = useState(PRODUCT_CATS[0]);
  const products = NAV_PRODUCTS[activeCat.label] ?? [];

  return (
    <div style={SHELL} onMouseEnter={on} onMouseLeave={off} role="region" aria-label="Products menu">
      <GoldStripe />

      <div style={{ display: 'grid', gridTemplateColumns: '220px 1fr' }}>

        {/* ── Left: category list ──────────────────────────────────────── */}
        <div
          style={{
            borderRight: '1px solid rgba(201,168,76,0.10)',
            padding: '1.125rem 0.625rem',
          }}
        >
          <p
            style={{
              fontFamily: 'var(--font-inter)',
              fontSize: '0.5875rem',
              fontWeight: 700,
              letterSpacing: '0.22em',
              textTransform: 'uppercase',
              color: 'var(--gold)',
              padding: '0 0.5rem',
              marginBottom: '0.75rem',
            }}
          >
            Categories
          </p>

          {PRODUCT_CATS.map((cat) => {
            const isActive = activeCat.label === cat.label;
            const CatIcon = cat.Icon;
            return (
              <button
                key={cat.label}
                onMouseEnter={() => setActiveCat(cat)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.625rem',
                  width: '100%',
                  padding: '0.7rem 0.75rem',
                  borderRadius: 8,
                  marginBottom: '0.2rem',
                  background: isActive ? 'rgba(201,168,76,0.10)' : 'transparent',
                  borderLeft: `3px solid ${isActive ? 'var(--gold)' : 'transparent'}`,
                  cursor: 'pointer',
                  textAlign: 'left',
                  transition: 'all 0.14s ease',
                }}
              >
                <div
                  style={{
                    width: 32,
                    height: 32,
                    borderRadius: 8,
                    background: isActive ? 'rgba(201,168,76,0.18)' : 'rgba(201,168,76,0.07)',
                    border: `1px solid ${isActive ? 'rgba(201,168,76,0.38)' : 'rgba(201,168,76,0.12)'}`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    transition: 'all 0.14s ease',
                  }}
                  aria-hidden="true"
                >
                  <CatIcon
                    size={14}
                    strokeWidth={1.7}
                    style={{ color: isActive ? 'var(--gold-bright)' : 'var(--gold)' }}
                    aria-hidden="true"
                  />
                </div>
                <span
                  style={{
                    fontFamily: 'var(--font-inter)',
                    fontSize: '0.8125rem',
                    fontWeight: isActive ? 600 : 500,
                    color: isActive ? '#F0EBE0' : 'rgba(245,240,232,0.55)',
                    lineHeight: 1.3,
                    transition: 'color 0.14s',
                  }}
                >
                  {cat.label}
                </span>
                {isActive && (
                  <ArrowRight
                    size={12}
                    style={{ color: 'var(--gold)', marginLeft: 'auto', flexShrink: 0 }}
                    aria-hidden="true"
                  />
                )}
              </button>
            );
          })}

          {/* ISO badge at bottom */}
          <div
            style={{
              margin: '1rem 0.5rem 0',
              padding: '0.75rem',
              borderRadius: 8,
              background: 'rgba(201,168,76,0.05)',
              border: '1px solid rgba(201,168,76,0.12)',
            }}
          >
            <p style={{ fontFamily: 'var(--font-inter)', fontSize: '0.625rem', fontWeight: 700, color: 'var(--gold)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '0.25rem' }}>
              ISO 9001 Certified
            </p>
            <p style={{ fontFamily: 'var(--font-inter)', fontSize: '0.625rem', color: 'rgba(245,240,232,0.35)', lineHeight: 1.45 }}>
              15+ yrs · Delhi manufacturing
            </p>
          </div>
        </div>

        {/* ── Right: product cards ─────────────────────────────────────── */}
        <div style={{ padding: '1.125rem 1.5rem 1rem' }}>
          {/* Header row */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
            <div>
              <p
                style={{
                  fontFamily: 'var(--font-inter)',
                  fontSize: '0.5875rem',
                  fontWeight: 700,
                  letterSpacing: '0.22em',
                  textTransform: 'uppercase',
                  color: 'var(--gold)',
                  marginBottom: '0.2rem',
                }}
              >
                {activeCat.label}
              </p>
              <p style={{ fontFamily: 'var(--font-inter)', fontSize: '0.75rem', color: 'rgba(245,240,232,0.38)' }}>
                {activeCat.desc}
              </p>
            </div>
            <Link
              href={activeCat.href}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.3rem',
                fontFamily: 'var(--font-inter)',
                fontSize: '0.75rem',
                fontWeight: 600,
                color: 'var(--gold)',
                textDecoration: 'none',
                whiteSpace: 'nowrap',
              }}
            >
              View all <ArrowRight size={12} aria-hidden="true" />
            </Link>
          </div>

          {/* Product cards grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '0.625rem' }}>
            {products.map((p) => (
              <Link
                key={p.name}
                href={`/contact?product=${encodeURIComponent(p.name)}`}
                style={{ textDecoration: 'none' }}
                aria-label={`Enquire about ${p.name}`}
              >
                <div
                  style={{
                    borderRadius: 10,
                    border: '1px solid rgba(201,168,76,0.10)',
                    background: 'rgba(255,255,255,0.03)',
                    overflow: 'hidden',
                    transition: 'border-color 0.15s, background 0.15s, transform 0.15s',
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.borderColor = 'rgba(201,168,76,0.35)';
                    el.style.background = 'rgba(201,168,76,0.06)';
                    el.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.borderColor = 'rgba(201,168,76,0.10)';
                    el.style.background = 'rgba(255,255,255,0.03)';
                    el.style.transform = 'translateY(0)';
                  }}
                >
                  {/* Image */}
                  <div style={{ position: 'relative', height: 100, overflow: 'hidden' }}>
                    <Image
                      src={p.img}
                      alt={p.name}
                      fill
                      sizes="160px"
                      style={{ objectFit: 'cover' }}
                    />
                    {/* Dark overlay */}
                    <div
                      aria-hidden="true"
                      style={{
                        position: 'absolute',
                        inset: 0,
                        background: 'linear-gradient(to top, rgba(0,0,0,0.55) 0%, transparent 55%)',
                      }}
                    />
                    <TagBadge tag={p.tag} />
                  </div>

                  {/* Info */}
                  <div style={{ padding: '0.6rem 0.7rem' }}>
                    <p
                      style={{
                        fontFamily: 'var(--font-inter)',
                        fontSize: '0.75rem',
                        fontWeight: 600,
                        color: '#F0EBE0',
                        lineHeight: 1.3,
                        marginBottom: '0.2rem',
                        display: '-webkit-box',
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden',
                      }}
                    >
                      {p.name}
                    </p>
                    <p
                      style={{
                        fontFamily: 'var(--font-inter)',
                        fontSize: '0.625rem',
                        fontWeight: 700,
                        letterSpacing: '0.1em',
                        textTransform: 'uppercase',
                        color: 'var(--gold)',
                      }}
                    >
                      {p.brand}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Bottom CTAs */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginTop: '1rem',
              paddingTop: '0.875rem',
              borderTop: '1px solid rgba(201,168,76,0.08)',
            }}
          >
            <span style={{ fontFamily: 'var(--font-inter)', fontSize: '0.6875rem', color: 'rgba(245,240,232,0.30)' }}>
              30+ categories · Pan-India supply
            </span>
            <div style={{ display: 'flex', gap: '0.875rem', alignItems: 'center' }}>
              <Link
                href="/products"
                style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', fontFamily: 'var(--font-inter)', fontSize: '0.8rem', fontWeight: 600, color: 'rgba(245,240,232,0.55)', textDecoration: 'none' }}
              >
                Full Catalogue <ArrowRight size={12} />
              </Link>
              <Link
                href="/contact"
                className="btn-gold"
                style={{ padding: '0.4rem 1rem', fontSize: '0.8rem', minHeight: 'auto', borderRadius: 6 }}
              >
                Request Quote
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── SERVICES MEGA ──────────────────────────────────────────────────────── */
function MegaItem({ href, IconEl, label, desc }: { href: string; IconEl?: React.ReactNode; label: string; desc: string }) {
  return (
    <Link
      href={href}
      style={{
        display: 'flex',
        alignItems: 'flex-start',
        gap: '0.75rem',
        padding: '0.875rem 1rem',
        borderRadius: 10,
        background: 'rgba(255,255,255,0.02)',
        border: '1px solid rgba(201,168,76,0.07)',
        textDecoration: 'none',
        transition: 'background 0.14s, border-color 0.14s',
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.background = 'rgba(201,168,76,0.07)';
        (e.currentTarget as HTMLElement).style.borderColor = 'rgba(201,168,76,0.28)';
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.02)';
        (e.currentTarget as HTMLElement).style.borderColor = 'rgba(201,168,76,0.07)';
      }}
    >
      {IconEl && (
        <div style={{ width: 36, height: 36, borderRadius: 9, flexShrink: 0, background: 'rgba(201,168,76,0.10)', border: '1px solid rgba(201,168,76,0.18)', display: 'flex', alignItems: 'center', justifyContent: 'center' }} aria-hidden="true">
          {IconEl}
        </div>
      )}
      <div>
        <p style={{ fontFamily: 'var(--font-inter)', fontSize: '0.8125rem', fontWeight: 600, color: '#F0EBE0', marginBottom: '0.2rem', lineHeight: 1.25 }}>{label}</p>
        <p style={{ fontFamily: 'var(--font-inter)', fontSize: '0.6875rem', color: 'rgba(245,240,232,0.38)', lineHeight: 1.4 }}>{desc}</p>
      </div>
    </Link>
  );
}

function ServicesMega({ on, off }: { on: () => void; off: () => void }) {
  return (
    <div style={SHELL} onMouseEnter={on} onMouseLeave={off} role="region" aria-label="Services menu">
      <GoldStripe />
      <div style={{ padding: '1.75rem 2rem 1.25rem' }}>
        <p style={{ fontFamily: 'var(--font-inter)', fontSize: '0.5875rem', fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '1rem' }}>
          What We Offer
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.4rem' }}>
          {SERVICE_ITEMS.map(({ Icon, label, desc, href }) => (
            <MegaItem key={label} href={href} label={label} desc={desc} IconEl={<Icon size={16} strokeWidth={1.6} style={{ color: 'var(--gold)' }} aria-hidden="true" />} />
          ))}
        </div>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0.75rem 2rem', borderTop: '1px solid rgba(201,168,76,0.08)', background: 'rgba(201,168,76,0.025)' }}>
        <span style={{ fontFamily: 'var(--font-inter)', fontSize: '0.75rem', color: 'rgba(245,240,232,0.32)' }}>Free site visit for projects above ₹5 Lakhs</span>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
          <Link href="/services" style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', fontFamily: 'var(--font-inter)', fontSize: '0.8125rem', fontWeight: 600, color: 'rgba(245,240,232,0.60)', textDecoration: 'none' }}>
            All Services <ArrowRight size={13} />
          </Link>
          <Link href="/contact" className="btn-gold" style={{ padding: '0.45rem 1.125rem', fontSize: '0.8125rem', minHeight: 'auto', borderRadius: 6 }}>
            Free Consultation
          </Link>
        </div>
      </div>
    </div>
  );
}

/* ─── INDUSTRIES DROPDOWN ────────────────────────────────────────────────── */
function IndustriesDrop({ on, off }: { on: () => void; off: () => void }) {
  return (
    <div style={SHELL} onMouseEnter={on} onMouseLeave={off} role="region" aria-label="Industries menu">
      <GoldStripe />
      <div style={{ padding: '1.75rem 2rem 1.25rem' }}>
        <p style={{ fontFamily: 'var(--font-inter)', fontSize: '0.5875rem', fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '1rem' }}>
          Industries We Serve
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.4rem' }}>
          {INDUSTRY_ITEMS.map(({ label, desc, href }) => (
            <MegaItem key={label} href={href} label={label} desc={desc} />
          ))}
        </div>
      </div>
      <div style={{ display: 'flex', justifyContent: 'flex-end', padding: '0.75rem 2rem', borderTop: '1px solid rgba(201,168,76,0.08)', background: 'rgba(201,168,76,0.025)' }}>
        <Link href="/industries" style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', fontFamily: 'var(--font-inter)', fontSize: '0.8125rem', fontWeight: 600, color: 'var(--gold)', textDecoration: 'none' }}>
          All Industries <ArrowRight size={13} />
        </Link>
      </div>
    </div>
  );
}

/* ─── MAIN NAVBAR ────────────────────────────────────────────────────────── */
export default function Navbar() {
  const [scrolled,       setScrolled]       = useState(false);
  const [activeDrop,     setActiveDrop]     = useState<DropKey | null>(null);
  const [mobileOpen,     setMobileOpen]     = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 1024) setMobileOpen(false); };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const openDrop    = (key: DropKey) => { if (closeTimer.current) clearTimeout(closeTimer.current); setActiveDrop(key); };
  const scheduleClose = ()           => { closeTimer.current = setTimeout(() => setActiveDrop(null), 160); };
  const cancelClose   = ()           => { if (closeTimer.current) clearTimeout(closeTimer.current); };
  const toggleExpand  = (l: string)  => setMobileExpanded((c) => (c === l ? null : l));

  return (
    <>
      {/* ── Sticky nav bar ───────────────────────────────────────────────── */}
      <nav
        aria-label="Primary navigation"
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 50,
          width: '100%',
          background: scrolled ? 'rgba(10,8,5,0.97)' : 'rgba(10,8,5,0.88)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          borderBottom: scrolled ? '1px solid rgba(201,168,76,0.22)' : '1px solid rgba(255,255,255,0.05)',
          boxShadow: scrolled ? '0 4px 32px rgba(0,0,0,0.55)' : 'none',
          transition: 'background 0.3s, border-color 0.3s, box-shadow 0.3s',
        }}
      >
        {/* ── Inner bar ─────────────────────────────────────────────────── */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: 68,
            padding: '0 1.5rem',
            width: '100%',
          }}
        >
          {/* Logo */}
          <Link
            href="/"
            style={{ display: 'flex', alignItems: 'center', overflow: 'hidden', background: '#fff', flexShrink: 0 }}
            aria-label="VSD International — Home"
            className='rounded-full'
          >
            <Image src="/VSD_LOGO.png" width={140} height={120} alt="VSD International Logo" priority />
          </Link>

          {/* ── Desktop nav — hidden below 1024px via CSS class ─────────── */}
          <div className="hidden lg:flex items-center" style={{ gap: '0.125rem' }}>
            {NAV_LINKS.map((link) => {
              const isActive = activeDrop === link.drop && link.drop !== null;
              return (
                <div
                  key={link.label}
                  onMouseEnter={() => {
                    if (link.drop) openDrop(link.drop);
                    else { cancelClose(); setActiveDrop(null); }
                  }}
                  onMouseLeave={link.drop ? scheduleClose : undefined}
                >
                  <Link
                    href={link.href}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.3rem',
                      padding: '0.45rem 0.875rem',
                      borderRadius: 8,
                      fontFamily: 'var(--font-inter)',
                      fontSize: '0.875rem',
                      fontWeight: 500,
                      color: isActive ? 'var(--gold-bright)' : '#D8D2C6',
                      textDecoration: 'none',
                      letterSpacing: '0.01em',
                      background: isActive ? 'rgba(201,168,76,0.08)' : 'transparent',
                      transition: 'color 0.15s, background 0.15s',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    {link.label}
                    {link.drop && (
                      <ChevronDown
                        size={12}
                        aria-hidden="true"
                        style={{
                          color: isActive ? 'var(--gold-bright)' : 'var(--gold)',
                          transform: isActive ? 'rotate(180deg)' : 'rotate(0deg)',
                          transition: 'transform 0.2s',
                        }}
                      />
                    )}
                  </Link>
                </div>
              );
            })}
          </div>

          {/* ── Desktop CTAs — hidden below 1024px via CSS class ────────── */}
          <div className="hidden lg:flex items-center" style={{ gap: '1.25rem', flexShrink: 0 }}>
            <a
              href="tel:+919250346370"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                fontFamily: 'var(--font-inter)',
                fontSize: '0.8125rem',
                color: '#B8B2A6',
                textDecoration: 'none',
              }}
              aria-label="Call VSD International"
            >
              <PhoneCall size={14} style={{ color: 'var(--gold)', flexShrink: 0 }} aria-hidden="true" />
              +91-9250346370
            </a>
            <Link
              href="/contact"
              className="btn-gold"
              style={{ padding: '0.55rem 1.375rem', fontSize: '0.875rem', minHeight: 'auto', borderRadius: 6, whiteSpace: 'nowrap' }}
            >
              Get Quote
            </Link>
          </div>

          {/* ── Mobile hamburger — hidden at 1024px+ via CSS class ──────── */}
          {/* NOTE: NO display property in inline style — Tailwind lg:hidden handles visibility */}
          <button
            onClick={() => setMobileOpen((v) => !v)}
            className="flex items-center justify-center lg:hidden"
            style={{
              padding: '0.5rem',
              borderRadius: 8,
              background: mobileOpen ? 'rgba(201,168,76,0.10)' : 'transparent',
              border: '1px solid rgba(201,168,76,0.15)',
              color: '#F0EBE0',
              cursor: 'pointer',
            }}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* ── Desktop mega menus (rendered inside sticky nav) ────────────── */}
        {activeDrop === 'products'   && <ProductsMega   on={cancelClose} off={scheduleClose} />}
        {activeDrop === 'services'   && <ServicesMega   on={cancelClose} off={scheduleClose} />}
        {activeDrop === 'industries' && <IndustriesDrop on={cancelClose} off={scheduleClose} />}
      </nav>

      {/* ── Mobile full-screen menu ─────────────────────────────────────── */}
      {mobileOpen && (
        <div
          className="lg:hidden"
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 40,
            background: 'rgba(8,6,4,0.98)',
            paddingTop: 68,
            flexDirection: 'column',
            /* NOTE: display handled by conditional render + lg:hidden, no inline display here */
          }}
        >
          <div style={{ height: 2, background: 'linear-gradient(90deg, transparent 5%, var(--gold-bright) 35%, var(--gold) 65%, transparent 95%)', flexShrink: 0 }} />

          <div style={{ flex: 1, overflowY: 'auto', padding: '1rem 1.25rem 2rem' }}>
            {NAV_LINKS.map((link) => {
              const isExpanded = mobileExpanded === link.label;
              const subItems =
                link.drop === 'products'   ? PRODUCT_CATS.map((c) => ({ label: c.label, href: c.href })) :
                link.drop === 'services'   ? SERVICE_ITEMS.map((s) => ({ label: s.label, href: s.href })) :
                link.drop === 'industries' ? INDUSTRY_ITEMS :
                null;

              return (
                <div key={link.label} style={{ borderBottom: '1px solid rgba(201,168,76,0.08)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <Link
                      href={link.href}
                      style={{
                        flex: 1,
                        padding: '1rem 0',
                        fontFamily: 'var(--font-inter)',
                        fontSize: '1rem',
                        fontWeight: 600,
                        color: isExpanded ? 'var(--gold-bright)' : '#F0EBE0',
                        textDecoration: 'none',
                      }}
                      onClick={() => { if (!link.drop) setMobileOpen(false); }}
                    >
                      {link.label}
                    </Link>
                    {link.drop && (
                      <button
                        onClick={() => toggleExpand(link.label)}
                        style={{ padding: '0.5rem', background: isExpanded ? 'rgba(201,168,76,0.12)' : 'transparent', border: '1px solid rgba(201,168,76,0.15)', borderRadius: 6, cursor: 'pointer' }}
                        aria-expanded={isExpanded}
                      >
                        <ChevronDown
                          size={15}
                          style={{ color: 'var(--gold)', transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.2s' }}
                          aria-hidden="true"
                        />
                      </button>
                    )}
                  </div>

                  {isExpanded && subItems && (
                    <div style={{ paddingBottom: '0.75rem' }}>
                      {subItems.map((sub) => (
                        <Link
                          key={sub.label}
                          href={sub.href}
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.5rem',
                            padding: '0.625rem 0.875rem',
                            marginBottom: '0.25rem',
                            borderRadius: 8,
                            fontFamily: 'var(--font-inter)',
                            fontSize: '0.9rem',
                            fontWeight: 500,
                            color: 'rgba(245,240,232,0.60)',
                            textDecoration: 'none',
                            background: 'rgba(201,168,76,0.04)',
                            border: '1px solid rgba(201,168,76,0.07)',
                          }}
                          onClick={() => setMobileOpen(false)}
                        >
                          <ArrowRight size={12} style={{ color: 'var(--gold)', flexShrink: 0 }} aria-hidden="true" />
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}

            {/* Mobile CTAs */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginTop: '2rem' }}>
              <a
                href="tel:+919250346370"
                style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', padding: '0.875rem', borderRadius: 10, border: '1.5px solid rgba(201,168,76,0.28)', background: 'rgba(201,168,76,0.06)', fontFamily: 'var(--font-inter)', fontSize: '0.9375rem', fontWeight: 600, color: 'var(--gold-light)', textDecoration: 'none' }}
                onClick={() => setMobileOpen(false)}
              >
                <PhoneCall size={16} aria-hidden="true" /> +91-9250346370
              </a>
              <a
                href="https://wa.me/919250346370?text=Hi%20VSD%20International%2C%20I%20need%20kitchen%20equipment."
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', padding: '0.875rem', borderRadius: 10, background: '#25D366', fontFamily: 'var(--font-inter)', fontSize: '0.9375rem', fontWeight: 600, color: '#fff', textDecoration: 'none' }}
                onClick={() => setMobileOpen(false)}
              >
                <span aria-hidden="true">💬</span> WhatsApp Now
              </a>
              <Link
                href="/contact"
                className="btn-gold"
                style={{ display: 'flex', justifyContent: 'center', padding: '0.875rem', borderRadius: 10, fontSize: '0.9375rem' }}
                onClick={() => setMobileOpen(false)}
              >
                Get Free Quote
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
