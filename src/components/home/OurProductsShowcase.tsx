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
  Wind,
} from 'lucide-react';
import Image from 'next/image';

/* --- Types ---------------------------------------------------------------- */

type CategoryId = 'cooking' | 'refrigeration' | 'bakery' | 'dishwashing' | 'food-prep' | 'ventilation';

type Category = {
  id: CategoryId;
  label: string;
  accentFrom: string;
  accentTo: string;
  Icon: React.ComponentType<{ size?: number; strokeWidth?: number; style?: React.CSSProperties; 'aria-hidden'?: true }>;
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
  { id: 'cooking', label: 'Cooking Equipment', accentFrom: 'rgba(240,120,60,0.12)', accentTo: 'rgba(201,168,76,0.18)', Icon: Flame },
  { id: 'refrigeration', label: 'Refrigeration', accentFrom: 'rgba(80,160,220,0.10)', accentTo: 'rgba(201,168,76,0.14)', Icon: Thermometer },
  { id: 'bakery', label: 'Bakery Equipment', accentFrom: 'rgba(220,150,60,0.12)', accentTo: 'rgba(201,168,76,0.18)', Icon: ChefHat },
  { id: 'dishwashing', label: 'Dishwashing', accentFrom: 'rgba(60,190,180,0.10)', accentTo: 'rgba(201,168,76,0.14)', Icon: Droplets },
  { id: 'food-prep', label: 'Food Preparation', accentFrom: 'rgba(80,180,100,0.10)', accentTo: 'rgba(201,168,76,0.16)', Icon: UtensilsCrossed },
  { id: 'ventilation', label: 'Ventilation', accentFrom: 'rgba(130,130,180,0.10)', accentTo: 'rgba(201,168,76,0.14)', Icon: Wind },
];

const PRODUCTS: Product[] = [
  /* -- Cooking ------------------------------------------------------------ */
  { id: 1,  categoryId: 'cooking',       name: 'Heavy Duty Gas Range',         brand: 'VSD Pro',       description: 'High-output 6-burner range built for peak-volume hotel and restaurant kitchens.',         specs: ['6 Burners', 'LPG / PNG', 'SS 304 Body'],              tag: 'Bestseller', image: "https://plus.unsplash.com/premium_photo-1723823036427-b19e6d270bb6?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { id: 2,  categoryId: 'cooking',       name: 'Rational Combi Steam Oven',    brand: 'Rational',      description: 'Intelligent combi steamer that bakes, roasts and steams with precision and consistency.',  specs: ['Steam + Convection', '6 GN 1/1', 'Self-Cleaning'],    tag: 'Premium',    image: "https://plus.unsplash.com/premium_photo-1723823036427-b19e6d270bb6?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { id: 3,  categoryId: 'cooking',       name: 'Commercial Tandoor',            brand: 'VSD Classic',   description: 'Traditional clay-body tandoor delivering authentic char and flavour for Indian cuisines.',  specs: ['Clay Inner Body', 'Gas Fired', 'SS Outer Shell'],                        image: "https://plus.unsplash.com/premium_photo-1723823036427-b19e6d270bb6?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { id: 4,  categoryId: 'cooking',       name: 'Deep Fat Fryer',                brand: 'VSD Pro',       description: 'Twin-tank fryer with rapid heat recovery for continuous, high-volume fry output.',         specs: ['18 L × 2 Tank', 'Fast Recovery', 'Safety Cutout'],                       image: "https://plus.unsplash.com/premium_photo-1723823036427-b19e6d270bb6?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { id: 5,  categoryId: 'cooking',       name: 'Tilting Bratt Pan',             brand: 'VSD Pro',       description: 'Multi-purpose tilting pan ideal for braising, boiling and frying in a single vessel.',     specs: ['40 L Capacity', 'Gas Heated', 'Tilt Mechanism'],                          image: "https://plus.unsplash.com/premium_photo-1723823036427-b19e6d270bb6?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { id: 6,  categoryId: 'cooking',       name: 'Salamander Grill',              brand: 'VSD Pro',       description: 'Overhead radiant grill for finishing dishes, glazing sauces and rapid surface melting.',   specs: ['Radiant Heat', 'Adjustable Shelf', '800 °C Max'],                         image: "https://plus.unsplash.com/premium_photo-1723823036427-b19e6d270bb6?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  /* -- Refrigeration ------------------------------------------------------ */
  { id: 7,  categoryId: 'refrigeration', name: 'Reach-In Refrigerator',         brand: 'VSD Cold',      description: 'Heavy-duty upright refrigerator keeping produce consistently fresh at 2–8 °C.',           specs: ['600 L / 1200 L', '2 – 8 °C', 'SS Interior'],         tag: 'Bestseller', image: "https://plus.unsplash.com/premium_photo-1723823036427-b19e6d270bb6?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { id: 8,  categoryId: 'refrigeration', name: 'Blast Chiller / Freezer',       brand: 'VSD Cold',      description: 'HACCP-compliant rapid-chill unit that brings hot food to safe temperatures in minutes.',    specs: ['3-Cycle Program', '−40 °C Blast', 'HACCP Probe'],     tag: 'Premium',    image: "https://plus.unsplash.com/premium_photo-1723823036427-b19e6d270bb6?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { id: 9,  categoryId: 'refrigeration', name: 'Walk-In Cold Room',             brand: 'VSD Custom',    description: 'Custom-built insulated cold room manufactured to your exact kitchen floor plan.',           specs: ['Any Dimension', 'PUF Panels', 'Custom Layout'],                           image: "https://plus.unsplash.com/premium_photo-1723823036427-b19e6d270bb6?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { id: 10, categoryId: 'refrigeration', name: 'Prep Table Refrigerator',       brand: 'VSD Cold',      description: 'Refrigerated prep station with integrated GN pan inserts for live-line kitchen use.',      specs: ['Marble Top', 'GN Pans Included', 'SS 304'],                               image: "https://plus.unsplash.com/premium_photo-1723823036427-b19e6d270bb6?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { id: 11, categoryId: 'refrigeration', name: 'Display Chiller Counter',       brand: 'VSD Cold',      description: 'LED-lit glass-top chiller counter for front-of-house dessert and drinks display.',         specs: ['1.5 m / 2 m Length', 'Glass Top', 'LED Lit'],                            image: "https://plus.unsplash.com/premium_photo-1723823036427-b19e6d270bb6?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { id: 12, categoryId: 'refrigeration', name: 'Ice Flake Machine',             brand: 'Scotsman',      description: 'Continuous-production ice flaker for food display, bar service and cold-chain use.',       specs: ['30 kg / day', 'Water-Cooled', 'Hygienic Ice'],                            image: "https://plus.unsplash.com/premium_photo-1723823036427-b19e6d270bb6?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  /* -- Bakery ------------------------------------------------------------- */
  { id: 13, categoryId: 'bakery',        name: 'Deck Oven',                     brand: 'VSD Bake',      description: 'Stone-sole deck oven producing artisan-quality bread, pizza and pastry every bake.',       specs: ['2 / 3 Deck', 'Stone Sole Plate', 'Steam Injection'], tag: 'Bestseller', image: "https://plus.unsplash.com/premium_photo-1723823036427-b19e6d270bb6?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { id: 14, categoryId: 'bakery',        name: 'Spiral Dough Mixer',            brand: 'VSD Bake',      description: 'High-torque spiral mixer delivering consistent dough development at commercial volume.',    specs: ['20 L / 40 L Bowl', 'Direct Drive', 'Timer Control'],                     image: "https://plus.unsplash.com/premium_photo-1723823036427-b19e6d270bb6?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { id: 15, categoryId: 'bakery',        name: 'Rotary Rack Oven',              brand: 'VSD Bake',      description: 'Fan-forced rotary oven baking 18 trays simultaneously with even colour and texture.',      specs: ['18-Tray Rack', 'Gas / Electric', 'Fan-Forced'],       tag: 'Premium',    image: "https://plus.unsplash.com/premium_photo-1723823036427-b19e6d270bb6?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { id: 16, categoryId: 'bakery',        name: 'Bread Proofer',                 brand: 'VSD Bake',      description: 'Humidity-controlled proofing cabinet ensuring perfect dough fermentation every batch.',     specs: ['16 / 32 Tray', 'Humidity Control', 'Digital Display'],                   image: "https://plus.unsplash.com/premium_photo-1723823036427-b19e6d270bb6?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { id: 17, categoryId: 'bakery',        name: 'Dough Sheeter',                 brand: 'VSD Bake',      description: 'Motorised sheeter rolling dough to precise, uniform thickness — reversible for all types.', specs: ['520 mm Wide', 'Adjustable Thickness', 'Reversible'],                     image: "https://plus.unsplash.com/premium_photo-1723823036427-b19e6d270bb6?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  /* -- Dishwashing -------------------------------------------------------- */
  { id: 18, categoryId: 'dishwashing',   name: 'Rack Conveyor Dishwasher',      brand: 'VSD Wash',      description: 'High-capacity conveyor dishwasher built for large hotel, banquet and catering operations.', specs: ['1 200 Racks / hr', 'Hot Water Rinse', 'Auto Dosing'],  tag: 'Bestseller', image: "https://plus.unsplash.com/premium_photo-1723823036427-b19e6d270bb6?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { id: 19, categoryId: 'dishwashing',   name: 'Undercounter Glasswasher',      brand: 'VSD Wash',      description: 'Compact glasswasher delivering spot-free, hygienically clean results in 90-second cycles.',  specs: ['40 Cycles / hr', 'Low Water Use', 'SS Body'],                            image: "https://plus.unsplash.com/premium_photo-1723823036427-b19e6d270bb6?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { id: 20, categoryId: 'dishwashing',   name: 'Flight Type Dishwasher',        brand: 'VSD Wash',      description: 'Continuous-feed flight washer handling very high plate volumes for institutional kitchens.', specs: ['2 400 Plates / hr', 'Continuous Feed', 'Energy Save'],  tag: 'Premium',    image: "https://plus.unsplash.com/premium_photo-1723823036427-b19e6d270bb6?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { id: 21, categoryId: 'dishwashing',   name: 'Pot & Pan Washer',              brand: 'VSD Wash',      description: 'High-pressure tank washer that blasts stubborn baked-on food from heavy commercial pots.',  specs: ['High-Pressure Arms', 'Chemical Dosing', 'SS Basket'],                     image: "https://plus.unsplash.com/premium_photo-1723823036427-b19e6d270bb6?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  /* -- Food Prep ---------------------------------------------------------- */
  { id: 22, categoryId: 'food-prep',     name: 'Planetary Mixer',               brand: 'Robot Coupe',   description: 'Versatile planetary mixer with multi-attachments for dough, batter and whipping at volume.',  specs: ['7 L / 20 L Bowl', '3-Speed', 'Multi-Attachment'],    tag: 'Bestseller', image: "https://plus.unsplash.com/premium_photo-1723823036427-b19e6d270bb6?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { id: 23, categoryId: 'food-prep',     name: 'Food Processor',                brand: 'Robot Coupe',   description: 'Heavy-duty food processor that chops, slices, dices and purées ingredients at speed.',       specs: ['10 L Bowl', 'S-Blade', 'Vegetable Discs'],                               image: "https://plus.unsplash.com/premium_photo-1723823036427-b19e6d270bb6?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { id: 24, categoryId: 'food-prep',     name: 'Vegetable Cutter',              brand: 'Robot Coupe',   description: 'High-throughput veg cutter with quick-change discs for every slice, dice and julienne.',    specs: ['300 kg / hr', 'Quick-Change Discs', 'SS Construction'],                  image: "https://plus.unsplash.com/premium_photo-1723823036427-b19e6d270bb6?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { id: 25, categoryId: 'food-prep',     name: 'Immersion Blender',             brand: 'Hamilton Beach', description: 'Powerful stick blender for bulk soups, sauces and puréeing directly in cooking vessels.',    specs: ['500 W – 1 HP', 'Variable Speed', 'SS Shaft'],                            image: "https://plus.unsplash.com/premium_photo-1723823036427-b19e6d270bb6?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { id: 26, categoryId: 'food-prep',     name: 'Commercial Blender',            brand: 'Vitamix',       description: 'High-performance commercial blender for smoothies, cocktails and professional prep tasks.',  specs: ['3 HP Motor', 'Variable Speed', 'Quiet Shield'],       tag: 'Premium',    image: "https://plus.unsplash.com/premium_photo-1723823036427-b19e6d270bb6?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  /* -- Ventilation -------------------------------------------------------- */
  { id: 27, categoryId: 'ventilation',   name: 'SS Exhaust Hood',               brand: 'VSD Air',       description: 'Custom SS 304 hood designed to capture grease, heat and smoke from any cooking line.',       specs: ['SS 304 Body', 'Baffle Filters', 'Custom Sizes'],      tag: 'Bestseller', image: "https://plus.unsplash.com/premium_photo-1723823036427-b19e6d270bb6?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { id: 28, categoryId: 'ventilation',   name: 'Make-Up Air Unit',              brand: 'VSD Air',       description: 'Tempered fresh-air supply unit that balances kitchen pressure for safe daily operation.',    specs: ['Positive Pressure', 'Tempered Air', 'Auto Damper'],                       image: "https://plus.unsplash.com/premium_photo-1723823036427-b19e6d270bb6?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { id: 29, categoryId: 'ventilation',   name: 'UV Odour Control System',       brand: 'VSD Air',       description: 'UV-C lamp array neutralising kitchen odours and grease vapour before atmospheric discharge.', specs: ['UV-C Lamp Array', 'Odour Neutralise', 'Low Maintenance'], tag: 'Premium',  image: "https://plus.unsplash.com/premium_photo-1723823036427-b19e6d270bb6?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { id: 30, categoryId: 'ventilation',   name: 'Grease Trap & Drainage',        brand: 'VSD Air',       description: 'Pre-treatment grease interceptor preventing FOG build-up from blocking commercial drains.',  specs: ['GI / SS Body', 'Custom Flow Rate', 'Easy-Clean'],                        image: "https://plus.unsplash.com/premium_photo-1723823036427-b19e6d270bb6?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
];

/* --- Helpers -------------------------------------------------------------- */

const TAG_STYLES: Record<string, { bg: string; color: string; border: string }> = {
  Bestseller: { bg: 'rgba(201,168,76,0.14)', color: '#A67C32', border: 'rgba(201,168,76,0.35)' },
  Premium: { bg: 'rgba(100,60,200,0.08)', color: '#7B5EA7', border: 'rgba(120,80,220,0.25)' },
  New: { bg: 'rgba(30,150,90,0.09)', color: '#1E7A50', border: 'rgba(30,150,90,0.28)' },
};

function TagBadge({ tag }: { tag: Product['tag'] }) {
  if (!tag) return null;
  const s = TAG_STYLES[tag];
  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        padding: '0.18rem 0.6rem',
        borderRadius: '999px',
        fontSize: '0.6rem',
        fontFamily: 'var(--font-inter)',
        fontWeight: 700,
        letterSpacing: '0.12em',
        textTransform: 'uppercase',
        background: s.bg,
        color: s.color,
        border: `1px solid ${s.border}`,
        flexShrink: 0,
      }}
    >
      {tag}
    </span>
  );
}

/* --- Card image area ------------------------------------------------------ */
function CardImageArea({ cat, product }: { cat: Category; product: Product }) {
  const CatIcon = cat.Icon;
  return (
    <div
      style={{
        position: 'relative',
        height: 168,
        overflow: 'hidden',
        flexShrink: 0,
        borderBottom: '1px solid var(--border)',
      }}
    >
      {/* Product image */}
      <Image
        src={product.image}
        alt={product.name}
        fill
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        style={{ objectFit: 'cover' }}
      />
      {product.tag && (
        <div style={{ position: 'absolute', top: 10, right: 10, zIndex: 2 }}>
          <TagBadge tag={product.tag} />
        </div>
      )}
    </div>
  );
}

/* --- Product Card --------------------------------------------------------- */
function ProductCard({ product, cat }: { product: Product; cat: Category }) {
  return (
    <article
      className="product-card card-lift group relative flex flex-col rounded-2xl overflow-hidden"
      style={{
        background: '#FFFFFF',
        border: '1px solid var(--border)',
      }}
    >
      {/* Gold top accent — reveals on hover via CSS */}
      <div className="product-card-top-line" aria-hidden="true" />

      {/* Branded image area */}
      <CardImageArea cat={cat} product={product} />

      {/* Content */}
      <div
        style={{
          padding: '1.25rem 1.5rem 1.375rem',
          display: 'flex',
          flexDirection: 'column',
          flex: 1,
        }}
      >
        {/* Brand */}
        <p
          style={{
            fontFamily: 'var(--font-inter)',
            fontSize: '0.625rem',
            fontWeight: 700,
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            color: 'var(--gold-deep)',
            marginBottom: '0.3rem',
          }}
        >
          {product.brand}
        </p>

        {/* Product name */}
        <h3
          style={{
            fontFamily: 'var(--font-playfair)',
            fontWeight: 700,
            fontSize: '1.0625rem',
            lineHeight: 1.25,
            color: 'var(--text-dark)',
            marginBottom: '0.5rem',
          }}
        >
          {product.name}
        </h3>

        {/* Short description */}
        <p
          style={{
            fontFamily: 'var(--font-inter)',
            fontSize: '0.8125rem',
            color: 'var(--text-muted)',
            lineHeight: 1.55,
            marginBottom: '0.75rem',
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
            flexGrow: 1,
          }}
        >
          {product.description}
        </p>

        {/* Spec chips */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '0.3rem',
            marginBottom: '1.25rem',
          }}
        >
          {product.specs.map((spec) => (
            <span
              key={spec}
              style={{
                padding: '0.2rem 0.6rem',
                borderRadius: '999px',
                fontSize: '0.6875rem',
                fontFamily: 'var(--font-inter)',
                fontWeight: 500,
                color: 'var(--text-muted)',
                background: 'var(--surface-alt)',
                border: '1px solid var(--border)',
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
              gap: '0.3rem',
              padding: '0.55rem 0.75rem',
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
              flex: 1,
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.3rem',
              padding: '0.55rem 0.75rem',
              borderRadius: 8,
              background: 'linear-gradient(135deg, var(--gold-light), var(--gold))',
              color: '#1A1508',
              fontFamily: 'var(--font-inter)',
              fontSize: '0.8125rem',
              fontWeight: 700,
              textDecoration: 'none',
              border: 'none',
              transition: 'all 0.18s ease',
              boxShadow: '0 2px 10px rgba(201,168,76,0.28)',
            }}
            aria-label={`Enquire about ${product.name}`}
          >
            <ArrowRight size={13} aria-hidden="true" />
            Enquire
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
      aria-labelledby="products-heading"
      className="relative overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, #FFFFFF)',
        padding: '5.5rem 0',
        borderTop: '1px solid var(--border)',
      }}
    >
      {/* -- Warm gold dot pattern — very subtle --------------------------- */}
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

      {/* -- Soft top-left gold bloom --------------------------------------- */}
      <div
        aria-hidden="true"
        className="absolute pointer-events-none hidden lg:block"
        style={{
          top: '-60px',
          left: '-80px',
          width: '420px',
          height: '420px',
          background: 'radial-gradient(ellipse, rgba(201,168,76,0.10) 0%, transparent 65%)',
          filter: 'blur(48px)',
        }}
      />
      <div
        aria-hidden="true"
        className="absolute pointer-events-none hidden lg:block"
        style={{
          bottom: '-40px',
          right: '-60px',
          width: '360px',
          height: '360px',
          background: 'radial-gradient(ellipse, rgba(201,168,76,0.08) 0%, transparent 65%)',
          filter: 'blur(40px)',
        }}
      />

      <div className="container mx-auto" style={{ position: 'relative', zIndex: 1 }}>

        {/* -- Section header ------------------------------------------------ */}
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
            <span className="accent-gold" style={{ fontStyle: 'italic', fontWeight: 800 }}>
              Equipment
            </span>{' '}
            We Supply
          </h2>

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

        {/* -- Category tabs -------------------------------------------------- */}
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
                      ? '0 4px 16px rgba(201,168,76,0.30)'
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

        {/* -- Products grid --------------------------------------------------- */}
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
                transition={{ duration: 0.3, delay: idx * 0.05, ease: 'easeOut' }}
              >
                <ProductCard product={product} cat={activeCat} />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* -- Bottom CTA ----------------------------------------------------- */}
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
