'use client';

/* ───────────────────────────────────────────────────────────────────────────
   WoodFireCarousel — premium cinematic crossfade carousel for the
   Wood Fire Pizza Oven section. Images crossfade (opacity + subtle zoom)
   while the info panel slides up with AnimatePresence. Autoplay every 4.5s,
   pause on hover/touch, full swipe support on mobile.
   ─────────────────────────────────────────────────────────────────────────── */

import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';
import { useState, useEffect, useRef, useCallback } from 'react';
import { ChevronLeft, ChevronRight, Flame, Phone, MessageCircle, Check } from 'lucide-react';

export type OvenItem = {
  src: string;
  name: string;
  spec: string;
  tag: string;
  features: string[];
};

const PHONE_TEL = '+919250346370';
const WA = `https://wa.me/919250346370?text=${encodeURIComponent(
  "Hi VSD, I'm interested in your Wood Fire Pizza Oven. Please share details and pricing.",
)}`;

const INFO_VARIANTS = {
  enter: { opacity: 0, y: 22 },
  center: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -14 },
};

export default function WoodFireCarousel({ items }: { items: OvenItem[] }) {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const touchX = useRef(0);

  const goto = useCallback(
    (idx: number) => setActive(((idx % items.length) + items.length) % items.length),
    [items.length],
  );

  const next = useCallback(() => goto(active + 1), [active, goto]);
  const prev = useCallback(() => goto(active - 1), [active, goto]);

  useEffect(() => {
    if (typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    if (paused) return;
    const id = setInterval(next, 4500);
    return () => clearInterval(id);
  }, [paused, next]);

  const item = items[active];

  return (
    <div
      className="wfp-carousel"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchStart={(e) => { touchX.current = e.touches[0].clientX; }}
      onTouchEnd={(e) => {
        const diff = touchX.current - e.changedTouches[0].clientX;
        if (Math.abs(diff) > 44) diff > 0 ? next() : prev();
      }}
    >
      {/* ── Main card ────────────────────────────────────────────────────────── */}
      <div className="wfp-card">

        {/* Image column — crossfade layers.
            Each layer = a blurred cover-fill backdrop (no empty gaps) + the
            full sharp image on top via contain (nothing gets cropped). */}
        <div className="wfp-card-image">
          {items.map((it, i) => (
            <div
              key={it.src}
              className={`wfp-img-layer${i === active ? ' wfp-img-layer--active' : ''}`}
            >
              {/* Blurred backdrop — fills the whole box */}
              <Image
                src={it.src}
                alt=""
                fill
                aria-hidden="true"
                priority={i === 0}
                sizes="(max-width: 800px) 100vw, 55vw"
                className="wfp-img-bg"
                style={{ objectFit: 'cover' }}
              />
              {/* Sharp full image — never cropped */}
              <Image
                src={it.src}
                alt={it.name}
                fill
                priority={i === 0}
                sizes="(max-width: 800px) 100vw, 55vw"
                className="wfp-img-fg"
                style={{ objectFit: 'contain' }}
              />
            </div>
          ))}

          {/* Gradient overlay */}
          <div className="wfp-img-overlay" aria-hidden="true" />

          {/* Fire tag */}
          <AnimatePresence mode="wait">
            <motion.span
              key={item.tag}
              className="wfp-tag"
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.35 }}
            >
              <Flame size={11} /> {item.tag}
            </motion.span>
          </AnimatePresence>

          {/* Slide counter */}
          <div className="wfp-counter-badge" aria-hidden="true">
            <span className="wfp-cnt-n">{String(active + 1).padStart(2, '0')}</span>
            <span className="wfp-cnt-sep"> / </span>
            <span className="wfp-cnt-t">{String(items.length).padStart(2, '0')}</span>
          </div>
        </div>

        {/* Info column — slide-up on change */}
        <div className="wfp-card-info">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              className="wfp-info-inner"
              variants={INFO_VARIANTS}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="wfp-eyebrow">
                <Flame size={12} /> Wood Fire Pizza Oven
              </p>

              <h3 className="wfp-title">{item.name}</h3>

              <p className="wfp-spec">{item.spec}</p>

              <ul className="wfp-features">
                {item.features.map((f) => (
                  <li key={f}>
                    <Check size={13} className="wfp-feat-icon" />
                    {f}
                  </li>
                ))}
              </ul>

              <div className="wfp-btn-row">
                <a href={`tel:${PHONE_TEL}`} className="wfp-btn-call">
                  <Phone size={14} /> Call for Price
                </a>
                <a href={WA} target="_blank" rel="noopener noreferrer" className="wfp-btn-wa">
                  <MessageCircle size={14} /> WhatsApp
                </a>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation inside info panel (mobile uses these; desktop has outside arrows) */}
          <div className="wfp-nav-row">
            <button className="wfp-nav-btn" onClick={prev} aria-label="Previous oven">
              <ChevronLeft size={18} />
            </button>
            <div className="wfp-dots" role="tablist" aria-label="Pizza oven selection">
              {items.map((_, i) => (
                <button
                  key={i}
                  role="tab"
                  aria-selected={i === active}
                  aria-label={`View oven ${i + 1}`}
                  className={`wfp-dot${i === active ? ' wfp-dot--active' : ''}`}
                  onClick={() => goto(i)}
                />
              ))}
            </div>
            <button className="wfp-nav-btn" onClick={next} aria-label="Next oven">
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>

      {/* ── Outside arrows (desktop) ─────────────────────────────────────────── */}
      <button className="wfp-arrow wfp-arrow--prev" onClick={prev} aria-label="Previous oven">
        <ChevronLeft size={20} />
      </button>
      <button className="wfp-arrow wfp-arrow--next" onClick={next} aria-label="Next oven">
        <ChevronRight size={20} />
      </button>
    </div>
  );
}
