'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import {
  ArrowRight,
  Eye,
  Flame,
  Thermometer,
  ChefHat,
  Droplets,
  UtensilsCrossed,
  Monitor,
  Package,
  Utensils,
  Archive,
  Wine,
  Zap,
} from 'lucide-react';
import Image from 'next/image';

/* --- Types ---------------------------------------------------------------- */

type CategoryId =
  | 'preparation'
  | 'cooking'
  | 'refrigerators'
  | 'cold-display'
  | 'pantry'
  | 'food-service'
  | 'storage'
  | 'dishwashing'
  | 'bar-imported'
  | 'bakery'
  | 'fryer-combi';

type Category = {
  id: CategoryId;
  label: string;
  Icon: React.ComponentType<{ size?: number; strokeWidth?: number; 'aria-hidden'?: true }>;
};

type Product = {
  id: number;
  categoryId: CategoryId;
  name: string;
  brand: string;
  description: string;
  specs: string[];
  tag?: 'Bestseller' | 'Premium' | 'New';
  image: string;
};

/* --- Data ----------------------------------------------------------------- */

const CATEGORIES: Category[] = [
  { id: 'preparation',   label: 'Preparation Equipment',  Icon: UtensilsCrossed },
  { id: 'cooking',       label: 'Cooking Equipment',       Icon: Flame },
  { id: 'refrigerators', label: 'Refrigerators',           Icon: Thermometer },
  { id: 'cold-display',  label: 'Cold Display Counter',    Icon: Monitor },
  { id: 'pantry',        label: 'Pantry Equipments',       Icon: Package },
  { id: 'food-service',  label: 'Food Service Equipment',  Icon: Utensils },
  { id: 'storage',       label: 'Storage Equipment',       Icon: Archive },
  { id: 'dishwashing',   label: 'Dish Washing Machine',    Icon: Droplets },
  { id: 'bar-imported',  label: 'Bar & Imported Equipment',Icon: Wine },
  { id: 'bakery',        label: 'Bakery Equipment',        Icon: ChefHat },
  { id: 'fryer-combi',   label: 'Fryer Combi Oven',        Icon: Zap },
];

const IMG = 'https://plus.unsplash.com/premium_photo-1723823036427-b19e6d270bb6?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';

const PRODUCTS: Product[] = [
  /* Preparation Equipment */
  { id: 1,  categoryId: 'preparation',   name: 'Planetary Mixer',           brand: 'Robot Coupe',    description: 'Versatile planetary mixer with multi-attachments for dough, batter and cream whipping at high commercial volume.',      specs: ['7 L / 20 L Bowl', '3-Speed Drive', 'Multi-Attachment', 'SS Body'],        tag: 'Bestseller', image: IMG },
  { id: 2,  categoryId: 'preparation',   name: 'Vegetable Cutter',          brand: 'Robot Coupe',    description: 'High-throughput cutter with quick-change discs for every slice, dice and julienne cut your menu demands.',              specs: ['300 kg / hr', 'Quick-Change Discs', 'SS Construction'],                                     image: IMG },
  { id: 3,  categoryId: 'preparation',   name: 'Meat Mincer / Grinder',     brand: 'VSD Pro',        description: 'Heavy-duty electric mincer delivering consistent mince quality for butchery, catering and production kitchens.',        specs: ['22 kg / hr', 'SS Auger', 'Reversible Motor', 'FSSAI Safe'],                                image: IMG },
  /* Cooking Equipment */
  { id: 4,  categoryId: 'cooking',       name: 'Heavy Duty Gas Range',      brand: 'VSD Pro',        description: 'High-output 6-burner range engineered for peak-volume hotel and restaurant kitchens with daily heavy use.',             specs: ['6 Burners', 'LPG / PNG', 'SS 304 Body', 'Auto Ignition'],                 tag: 'Bestseller', image: IMG },
  { id: 5,  categoryId: 'cooking',       name: 'Tilting Bratt Pan',         brand: 'VSD Pro',        description: 'Multi-purpose tilting pan ideal for braising, boiling and frying large quantities in a single heavy-duty vessel.',      specs: ['40 L Capacity', 'Gas Heated', 'Tilt Mechanism', 'SS 304'],                                 image: IMG },
  { id: 6,  categoryId: 'cooking',       name: 'Commercial Tandoor',        brand: 'VSD Classic',    description: 'Traditional clay-body tandoor delivering authentic char and flavour for Indian cuisines in hotel and restaurant kitchens.', specs: ['Clay Inner Body', 'Gas Fired', 'SS Outer Shell'],                                        image: IMG },
  /* Refrigerators */
  { id: 7,  categoryId: 'refrigerators', name: 'Reach-In Refrigerator',     brand: 'VSD Cold',       description: 'Heavy-duty upright refrigerator keeping produce consistently fresh at 2–8 °C for high-volume commercial kitchens.',     specs: ['600 L / 1200 L', '2–8 °C', 'SS Interior', 'Digital Thermostat'],          tag: 'Bestseller', image: IMG },
  { id: 8,  categoryId: 'refrigerators', name: 'Blast Chiller / Freezer',   brand: 'VSD Cold',       description: 'HACCP-compliant rapid-chill unit that brings hot food to safe temperatures in minutes, protecting quality and compliance.', specs: ['3-Cycle Program', '−40 °C Blast', 'HACCP Probe'],                          tag: 'Premium',    image: IMG },
  { id: 9,  categoryId: 'refrigerators', name: 'Walk-In Cold Room',         brand: 'VSD Custom',     description: 'Custom-built insulated cold room manufactured precisely to your kitchen floor plan, dimensions and temperature needs.',  specs: ['Any Dimension', 'PUF Panels', 'Custom Layout', 'Remote Condenser'],                        image: IMG },
  /* Cold Display Counter */
  { id: 10, categoryId: 'cold-display',  name: 'Display Chiller Counter',   brand: 'VSD Cold',       description: 'LED-lit glass-top chiller counter for elegant front-of-house dessert, dairy and cold beverage display.',               specs: ['1.5 m / 2 m Length', 'Glass Top', 'LED Lit', '2–8 °C'],                  tag: 'Bestseller', image: IMG },
  { id: 11, categoryId: 'cold-display',  name: 'Prep Table Refrigerator',   brand: 'VSD Cold',       description: 'Refrigerated prep station with integrated GN pan inserts keeping ingredients chilled for live-line kitchen use.',       specs: ['Marble / SS Top', 'GN Pans Included', 'SS 304', 'Digital Control'],                       image: IMG },
  { id: 12, categoryId: 'cold-display',  name: 'Open Front Chiller',        brand: 'VSD Cold',       description: 'Open-front refrigerated showcase ideal for supermarket, café and deli environments with high grab-and-go demand.',       specs: ['Fan-Cooled', '1.5 m Wide', 'LED Canopy', 'Auto Defrost'],                                  image: IMG },
  /* Pantry Equipments */
  { id: 13, categoryId: 'pantry',        name: 'Commercial Microwave',      brand: 'Panasonic',      description: 'Heavy-duty commercial microwave built for continuous use in busy pantry and service kitchen environments.',             specs: ['1800 W Output', 'Multi-Stage Cooking', 'SS Interior', '25 L Capacity'], tag: 'Bestseller', image: IMG },
  { id: 14, categoryId: 'pantry',        name: 'Conveyor Toaster',          brand: 'VSD Pro',        description: 'High-speed conveyor toaster for consistent browning in high-turnover breakfast, banquet and café settings.',            specs: ['360 Slices / hr', 'Variable Speed', 'Removable Crumb Tray'],                              image: IMG },
  { id: 15, categoryId: 'pantry',        name: 'Juice Extractor',           brand: 'Hamilton Beach', description: 'High-yield centrifugal juicer extracting maximum juice from citrus and soft fruits for breakfast service.',             specs: ['120 Oranges / hr', 'Removable Parts', 'NSF Certified', 'Auto-Feed'],                       image: IMG },
  /* Food Service Equipment */
  { id: 16, categoryId: 'food-service',  name: 'Bain Marie Counter',        brand: 'VSD Pro',        description: 'Wet-heat bain marie keeping portioned dishes at safe serving temperature throughout long buffet and banquet service.',   specs: ['4 / 6 GN Pots', '70–90 °C Hold', 'SS 304 Body', 'Tap Drain'],            tag: 'Bestseller', image: IMG },
  { id: 17, categoryId: 'food-service',  name: 'Soup Kettle',               brand: 'VSD Pro',        description: 'Double-walled electric soup kettle maintaining precise serving temperature without scorching for all-day soup service.', specs: ['15 L / 30 L', 'Ladle Holder', 'Digital Display', 'Drip Tray'],                            image: IMG },
  { id: 18, categoryId: 'food-service',  name: 'Hot Plate Pass Counter',    brand: 'VSD Pro',        description: 'Heated pass-through counter keeping plated dishes at optimal serving temperature during peak-hour restaurant service.',  specs: ['3 / 6 Zone Heating', 'Infrared Element', 'SS Top', 'Thermostat Control'],                  image: IMG },
  /* Storage Equipment */
  { id: 19, categoryId: 'storage',       name: 'SS Wire Rack Shelving',     brand: 'VSD Store',      description: 'Adjustable chrome wire shelving units providing hygienic, well-ventilated dry-goods storage in commercial kitchens.',   specs: ['5-Tier', 'Adjustable Heights', 'Chrome Wire', 'NSF Listed'],              tag: 'Bestseller', image: IMG },
  { id: 20, categoryId: 'storage',       name: 'Mobile Trolley / Cart',     brand: 'VSD Store',      description: 'Heavy-duty stainless steel mobile trolley for safe, easy transfer of equipment and ingredients across kitchen areas.',   specs: ['200 kg Load', 'Locking Castors', 'SS 304', '2-Shelf Options'],                             image: IMG },
  { id: 21, categoryId: 'storage',       name: 'GN Pan & Container Set',    brand: 'VSD Classic',    description: 'Complete set of gastronorm pans in various depths for standardised, stackable storage and service operations.',         specs: ['1/1 to 1/9 Sizes', 'SS 304', '20–200 mm Deep', 'Stackable Design'],                       image: IMG },
  /* Dish Washing Machine */
  { id: 22, categoryId: 'dishwashing',   name: 'Rack Conveyor Dishwasher',  brand: 'VSD Wash',       description: 'High-capacity conveyor dishwasher built for large hotel, banquet and catering operations running all-day cycles.',       specs: ['1200 Racks / hr', 'Hot Water Rinse', 'Auto Chemical Dosing', 'Energy Save'], tag: 'Bestseller', image: IMG },
  { id: 23, categoryId: 'dishwashing',   name: 'Undercounter Glasswasher',  brand: 'VSD Wash',       description: 'Compact glasswasher delivering spot-free, hygienically clean results in rapid 90-second cycles for bar and pantry.',    specs: ['40 Cycles / hr', 'Low Water Use', 'SS Body', 'Chemical Dosing'],                           image: IMG },
  { id: 24, categoryId: 'dishwashing',   name: 'Pot & Pan Washer',          brand: 'VSD Wash',       description: 'High-pressure tank washer that blasts stubborn baked-on food from heavy commercial cookware in each cycle.',            specs: ['High-Pressure Arms', 'Chemical Dosing', 'SS Basket', '85 °C Rinse'],      tag: 'Premium',    image: IMG },
  /* Bar & Imported Equipment */
  { id: 25, categoryId: 'bar-imported',  name: 'Commercial Ice Machine',    brand: 'Scotsman',       description: 'Continuous-production cube ice machine for hotel bars, restaurants and high-volume banquet and buffet service.',         specs: ['80 kg / day', 'Water-Cooled', 'HACCP Compliant', 'Air-Cooled Option'],   tag: 'Bestseller', image: IMG },
  { id: 26, categoryId: 'bar-imported',  name: 'Bar Blender System',        brand: 'Vitamix',        description: 'High-performance commercial blender for cocktails, smoothies and professional beverage prep in busy bar environments.',  specs: ['3 HP Motor', 'Variable Speed', 'Quiet Shield', 'Advance Series'],         tag: 'Premium',    image: IMG },
  { id: 27, categoryId: 'bar-imported',  name: 'Espresso Coffee Machine',   brand: 'Imported',       description: 'Semi-automatic espresso machine delivering barista-quality shots for hotel lobbies, café bars and luxury dining.',      specs: ['2-Group Head', 'PID Temperature', 'Steam Wand', 'Italian Import'],                         image: IMG },
  /* Bakery Equipment */
  { id: 28, categoryId: 'bakery',        name: 'Deck Oven',                 brand: 'VSD Bake',       description: 'Stone-sole deck oven producing artisan-quality bread, pizza and pastry with even heat across every bake.',              specs: ['2 / 3 Deck', 'Stone Sole Plate', 'Steam Injection', 'Independent Control'], tag: 'Bestseller', image: IMG },
  { id: 29, categoryId: 'bakery',        name: 'Spiral Dough Mixer',        brand: 'VSD Bake',       description: 'High-torque spiral mixer delivering consistent dough development across commercial bread and pizza production volumes.',  specs: ['20 L / 40 L Bowl', 'Direct Drive', 'Timer Control', 'Safety Guard'],                       image: IMG },
  { id: 30, categoryId: 'bakery',        name: 'Rotary Rack Oven',          brand: 'VSD Bake',       description: 'Fan-forced rotary oven baking 18 trays simultaneously with even colour, crust and texture throughout.',                specs: ['18-Tray Rack', 'Gas / Electric', 'Fan-Forced', 'Digital Control'],        tag: 'Premium',    image: IMG },
  /* Fryer Combi Oven */
  { id: 31, categoryId: 'fryer-combi',   name: 'Twin Tank Deep Fryer',      brand: 'VSD Pro',        description: 'Twin-tank deep fryer with rapid heat recovery for continuous, high-volume frying output across hotel and QSR kitchens.', specs: ['18 L × 2 Tank', 'Fast Recovery', 'Safety Cutout', 'Oil Filter Tap'],     tag: 'Bestseller', image: IMG },
  { id: 32, categoryId: 'fryer-combi',   name: 'Rational Combi Steam Oven', brand: 'Rational',       description: 'Intelligent combi steamer that bakes, roasts and steams with total precision, self-cleaning and recipe memory.',        specs: ['Steam + Convection', '6 GN 1/1', 'Self-Cleaning', 'iCookingControl'],    tag: 'Premium',    image: IMG },
  { id: 33, categoryId: 'fryer-combi',   name: 'Pressure Fryer',            brand: 'VSD Pro',        description: 'Pressure fryer for faster cooking with sealed heat, locking moisture deep inside while delivering a perfect golden crust.', specs: ['20 L Vat', 'Pressure-Sealed Lid', 'Digital Timer', 'Cool-Zone Filter'],                   image: IMG },
];

/* --- Helpers -------------------------------------------------------------- */

const TAG_STYLES: Record<string, { bg: string; color: string; border: string }> = {
  Bestseller: { bg: 'rgba(201,168,76,0.18)', color: '#A67C32', border: 'rgba(201,168,76,0.45)' },
  Premium:    { bg: 'rgba(100,60,200,0.10)', color: '#7B5EA7', border: 'rgba(120,80,220,0.30)' },
  New:        { bg: 'rgba(30,150,90,0.10)',  color: '#1E7A50', border: 'rgba(30,150,90,0.30)' },
};

function TagBadge({ tag }: { tag: Product['tag'] }) {
  if (!tag) return null;
  const s = TAG_STYLES[tag];
  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        padding: '0.2rem 0.65rem',
        borderRadius: '999px',
        fontSize: '0.58rem',
        fontFamily: 'var(--font-inter)',
        fontWeight: 700,
        letterSpacing: '0.12em',
        textTransform: 'uppercase',
        background: s.bg,
        color: s.color,
        border: `1px solid ${s.border}`,
        backdropFilter: 'blur(4px)',
        flexShrink: 0,
      }}
    >
      {tag}
    </span>
  );
}

/* --- Card image with brand overlay --------------------------------------- */
function CardImageArea({ product }: { product: Product }) {
  return (
    <div
      style={{
        position: 'relative',
        height: 210,
        overflow: 'hidden',
        flexShrink: 0,
      }}
    >
      <Image
        src={product.image}
        alt={product.name}
        fill
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        style={{ objectFit: 'cover', transition: 'transform 0.5s ease' }}
        className="product-card-img"
      />
      {/* Bottom gradient so brand text is readable */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '65%',
          background: 'linear-gradient(to top, rgba(8,6,2,0.80) 0%, transparent 100%)',
          zIndex: 1,
        }}
      />
      {/* Brand name overlaid on image */}
      <p
        style={{
          position: 'absolute',
          bottom: 11,
          left: 14,
          zIndex: 2,
          fontFamily: 'var(--font-inter)',
          fontSize: '0.595rem',
          fontWeight: 700,
          letterSpacing: '0.20em',
          textTransform: 'uppercase',
          color: 'var(--gold-light)',
          margin: 0,
        }}
      >
        {product.brand}
      </p>
      {/* Tag badge */}
      {product.tag && (
        <div style={{ position: 'absolute', top: 11, right: 11, zIndex: 2 }}>
          <TagBadge tag={product.tag} />
        </div>
      )}
    </div>
  );
}

/* --- Product Card --------------------------------------------------------- */
function ProductCard({ product, shineDelay }: { product: Product; shineDelay: number }) {
  return (
    <article
      className="product-card card-lift group relative flex flex-col rounded-2xl overflow-hidden"
      style={{
        background: '#FFFFFF',
        border: '1px solid var(--border)',
        boxShadow: '0 2px 14px rgba(0,0,0,0.055)',
      }}
    >
      {/* Gold top accent — reveals on hover */}
      <div className="product-card-top-line" aria-hidden="true" />
      {/* Shine sweep overlay — loops continuously, staggered by index */}
      <div
        className="product-card-shine-overlay"
        aria-hidden="true"
        style={{ animationDelay: `${shineDelay}s` }}
      />

      <CardImageArea product={product} />

      {/* Content */}
      <div
        style={{
          padding: '1.125rem 1.375rem 1.25rem',
          display: 'flex',
          flexDirection: 'column',
          flex: 1,
          background: 'linear-gradient(180deg, #FFFFFF 0%, #FDFCF8 100%)',
        }}
      >
        {/* Product name */}
        <h3
          style={{
            fontFamily: 'var(--font-playfair)',
            fontWeight: 700,
            fontSize: '1.0625rem',
            lineHeight: 1.25,
            color: 'var(--text-dark)',
            marginBottom: '0.45rem',
          }}
        >
          {product.name}
        </h3>

        {/* Short description — 3 lines */}
        <p
          style={{
            fontFamily: 'var(--font-inter)',
            fontSize: '0.8125rem',
            color: 'var(--text-muted)',
            lineHeight: 1.58,
            marginBottom: '0.875rem',
            display: '-webkit-box',
            WebkitLineClamp: 3,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
            flexGrow: 1,
          }}
        >
          {product.description}
        </p>

        {/* Spec chips — gold-tinted */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '0.3rem',
            marginBottom: '1.125rem',
          }}
        >
          {product.specs.map((spec) => (
            <span
              key={spec}
              style={{
                padding: '0.2rem 0.625rem',
                borderRadius: '999px',
                fontSize: '0.6875rem',
                fontFamily: 'var(--font-inter)',
                fontWeight: 600,
                color: 'var(--gold-deep)',
                background: 'rgba(201,168,76,0.08)',
                border: '1px solid rgba(201,168,76,0.25)',
                whiteSpace: 'nowrap',
              }}
            >
              {spec}
            </span>
          ))}
        </div>

        {/* Dual action buttons */}
        <div style={{ display: 'flex', gap: '0.5rem' }}>
          <Link
            href={`/products?category=${product.categoryId}`}
            onClick={(e) => e.stopPropagation()}
            style={{
              flex: 1,
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.35rem',
              padding: '0.6rem 0.75rem',
              borderRadius: 8,
              border: '1.5px solid var(--border)',
              background: 'transparent',
              color: 'var(--text-body)',
              fontFamily: 'var(--font-inter)',
              fontSize: '0.8125rem',
              fontWeight: 600,
              textDecoration: 'none',
              transition: 'all 0.18s ease',
            }}
            className="product-view-btn"
            aria-label={`View details for ${product.name}`}
          >
            <Eye size={13} aria-hidden="true" />
            View
          </Link>

          <Link
            href={`/contact?product=${encodeURIComponent(product.name)}`}
            onClick={(e) => e.stopPropagation()}
            style={{
              flex: 2,
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.35rem',
              padding: '0.6rem 0.875rem',
              borderRadius: 8,
              background: 'linear-gradient(135deg, var(--gold-light) 0%, var(--gold) 50%, var(--gold-deep) 100%)',
              color: '#1A1508',
              fontFamily: 'var(--font-inter)',
              fontSize: '0.8125rem',
              fontWeight: 700,
              textDecoration: 'none',
              border: 'none',
              boxShadow: '0 3px 14px rgba(201,168,76,0.35)',
              letterSpacing: '0.01em',
            }}
            className="product-enquire-btn"
            aria-label={`Enquire about ${product.name}`}
          >
            <ArrowRight size={13} aria-hidden="true" />
            Enquire Now
          </Link>
        </div>
      </div>
    </article>
  );
}

/* --- Main Export ---------------------------------------------------------- */
export default function OurProductsShowcase() {
  const [activeId, setActiveId] = useState<CategoryId>('cooking');

  const activeCat = CATEGORIES.find((c) => c.id === activeId)!;
  const visibleProducts = PRODUCTS.filter((p) => p.categoryId === activeId);

  return (
    <section
      id="kitchen-equipment"
      aria-labelledby="products-heading"
      className="relative overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, #FFFFFF)',
        padding: '3.5rem 0',
        borderTop: '1px solid var(--border)',
      }}
    >
      {/* Warm gold dot pattern */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(201,168,76,0.12) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
          opacity: 0.5,
          maskImage: 'radial-gradient(ellipse 85% 70% at 50% 50%, black 40%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(ellipse 85% 70% at 50% 50%, black 40%, transparent 100%)',
        }}
      />
      <div
        aria-hidden="true"
        className="absolute pointer-events-none hidden lg:block"
        style={{
          top: '-60px', left: '-80px',
          width: '420px', height: '420px',
          background: 'radial-gradient(ellipse, rgba(201,168,76,0.10) 0%, transparent 65%)',
          filter: 'blur(48px)',
        }}
      />
      <div
        aria-hidden="true"
        className="absolute pointer-events-none hidden lg:block"
        style={{
          bottom: '-40px', right: '-60px',
          width: '360px', height: '360px',
          background: 'radial-gradient(ellipse, rgba(201,168,76,0.08) 0%, transparent 65%)',
          filter: 'blur(40px)',
        }}
      />

      <div className="container mx-auto" style={{ position: 'relative', zIndex: 1 }}>

        {/* Section header */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            marginBottom: '3rem',
          }}
        >
          <p className="section-label" style={{ marginBottom: '0.75rem' }}>
            Our Products
          </p>
          <h2
            id="products-heading"
            style={{
              fontFamily: 'var(--font-playfair)',
              fontSize: 'clamp(1.875rem, 3vw, 2.75rem)',
              color: 'var(--text-dark)',
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
            }}
          >
            Commercial Kitchen{' '}
            <span className="accent-gold" style={{ fontWeight: 800 }}>
              Equipment
            </span>{' '}
            We Supply
          </h2>
          <div
            aria-hidden="true"
            style={{
              width: '60px', height: '3px',
              background: 'linear-gradient(90deg, var(--gold-bright), var(--gold), var(--gold-deep))',
              borderRadius: '2px',
              marginTop: '1.25rem',
            }}
          />
          <p
            style={{
              marginTop: '1.25rem',
              color: 'var(--text-muted)',
              fontSize: '1rem',
              lineHeight: 1.75,
              maxWidth: '580px',
            }}
          >
            30+ product categories — from cooking suites to cold rooms. Select a category
            to explore equipment trusted by Hyatt, Radisson &amp; ITC.
          </p>
        </div>

        {/* Category tabs */}
        <div
          className="cat-tabs-scroll"
          style={{
            overflowX: 'auto',
            paddingBottom: '0.75rem',
            marginBottom: '2.75rem',
            scrollbarWidth: 'none',
          }}
        >
          <div
            role="tablist"
            aria-label="Filter products by category"
            style={{
              display: 'flex',
              gap: '0.5rem',
              flexWrap: 'nowrap',
              minWidth: 'max-content',
              margin: '0 auto',
            }}
          >
            {CATEGORIES.map((cat) => {
              const isActive = cat.id === activeId;
              const count = PRODUCTS.filter((p) => p.categoryId === cat.id).length;
              const CatIcon = cat.Icon;
              return (
                <button
                  key={cat.id}
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveId(cat.id)}
                  className={isActive ? 'cat-tab-active' : 'cat-tab-inactive'}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.45rem',
                    padding: '0.5rem 1.125rem',
                    borderRadius: '999px',
                    border: `1.5px solid ${isActive ? 'var(--gold)' : 'var(--border)'}`,
                    background: isActive
                      ? 'linear-gradient(135deg, var(--gold-light) 0%, var(--gold) 50%, var(--gold-deep) 100%)'
                      : '#FFFFFF',
                    color: isActive ? '#1A1508' : 'var(--text-body)',
                    fontFamily: 'var(--font-inter)',
                    fontSize: '0.8125rem',
                    fontWeight: isActive ? 700 : 500,
                    cursor: 'pointer',
                    whiteSpace: 'nowrap',
                    flexShrink: 0,
                    transition: 'all 0.18s ease',
                    boxShadow: isActive
                      ? '0 4px 18px rgba(201,168,76,0.35)'
                      : '0 1px 4px rgba(0,0,0,0.06)',
                  }}
                >
                  <CatIcon size={13} strokeWidth={isActive ? 2.2 : 1.7} aria-hidden />
                  {cat.label}
                  <span
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      minWidth: 18,
                      height: 18,
                      borderRadius: '999px',
                      fontSize: '0.6rem',
                      fontWeight: 700,
                      background: isActive ? 'rgba(26,21,8,0.18)' : 'var(--surface-alt)',
                      color: isActive ? '#1A1508' : 'var(--text-muted)',
                      padding: '0 4px',
                    }}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Products grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeId}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.26, ease: 'easeOut' }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6"
            role="region"
            aria-label={`${activeCat.label} products`}
          >
            {visibleProducts.map((product, idx) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: idx * 0.06, ease: 'easeOut' }}
              >
                <ProductCard product={product} shineDelay={parseFloat((idx * 1.2).toFixed(1))} />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Bottom CTA */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            marginTop: '3.5rem',
            gap: '1rem',
            flexWrap: 'wrap',
          }}
        >
          <Link
            href="/products"
            className="btn-ghost inline-flex items-center gap-2"
            aria-label="Browse the full VSD International product catalogue"
          >
            Full Product Catalogue
            <ArrowRight size={15} aria-hidden="true" />
          </Link>
          <Link
            href="/contact"
            className="btn-gold inline-flex items-center gap-2"
            aria-label="Request a quote for commercial kitchen equipment"
          >
            Request a Quote
            <ArrowRight size={15} aria-hidden="true" />
          </Link>
        </div>

      </div>
    </section>
  );
}
