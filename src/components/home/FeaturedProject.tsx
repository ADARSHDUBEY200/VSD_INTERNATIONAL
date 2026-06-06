'use client';

import { useRef, useEffect, useState } from 'react';
import Link from 'next/link';
import {
  ArrowRight, MapPin, Clock, IndianRupee, CheckCircle2,
  Flame, Thermometer, Wind, Package,
} from 'lucide-react';

/* --- Animated Counter Hook ------------------------------------------------ */
function useCounter(target: number, started: boolean, duration = 1900) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!started) return;
    let raf = 0;
    let t0: number | null = null;
    const tick = (ts: number) => {
      if (!t0) t0 = ts;
      const p = Math.min((ts - t0) / duration, 1);
      setCount(Math.floor((1 - Math.pow(2, -10 * p)) * target));
      if (p < 1) raf = requestAnimationFrame(tick);
      else setCount(target);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [started, target, duration]);
  return count;
}

/* --- Kitchen Blueprint SVG ------------------------------------------------ */
function KitchenBlueprint() {
  const G = '#C9A84C';
  const gd = (o: number) => `rgba(201,168,76,${o})`;
  const mono = "'Courier New', Courier, monospace";

  const Burner = ({ cx, cy }: { cx: number; cy: number }) => (
    <g>
      <circle cx={cx} cy={cy} r={21} stroke={G} strokeWidth="1.4" fill={gd(0.03)} />
      <circle cx={cx} cy={cy} r={13} stroke={G} strokeWidth="0.75" strokeDasharray="3 5" />
      <circle cx={cx} cy={cy} r={7}  stroke={G} strokeWidth="1"   fill={gd(0.12)} />
      {[0,45,90,135,180,225,270,315].map(deg => {
        const r = (deg * Math.PI) / 180;
        return <line key={deg} x1={cx + 7*Math.cos(r)} y1={cy + 7*Math.sin(r)} x2={cx + 21*Math.cos(r)} y2={cy + 21*Math.sin(r)} stroke={G} strokeWidth="0.7" />;
      })}
      {Array.from({ length: 16 }).map((_, i) => {
        const a = (i * 22.5 * Math.PI) / 180;
        return <circle key={i} cx={cx + 13*Math.cos(a)} cy={cy + 13*Math.sin(a)} r="1.5" fill={gd(0.45)} />;
      })}
    </g>
  );

  return (
    <svg
      viewBox="0 0 600 420"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      {/* Base */}
      <rect width="600" height="420" fill="#060402" />

      {/* Blueprint grid */}
      {Array.from({ length: 20 }).map((_, i) => (
        <line key={`v${i}`} x1={(i + 1) * 30} y1="0" x2={(i + 1) * 30} y2="420" stroke={gd(0.06)} strokeWidth="1" />
      ))}
      {Array.from({ length: 14 }).map((_, i) => (
        <line key={`h${i}`} x1="0" y1={(i + 1) * 30} x2="600" y2={(i + 1) * 30} stroke={gd(0.06)} strokeWidth="1" />
      ))}

      {/* -- ZONE A · MAIN KITCHEN ------------------------------ */}
      <rect x="24" y="24" width="400" height="148" stroke={G} strokeWidth="1.5" fill={gd(0.025)} rx="2" />
      <text x="36" y="40" fontFamily={mono} fontSize="7.5" fill={G} opacity="0.85" letterSpacing="3">MAIN KITCHEN</text>

      <Burner cx={82} cy={96} />
      <Burner cx={152} cy={96} />
      <Burner cx={222} cy={96} />
      {[82, 152, 222].map((x, i) => (
        <text key={x} x={x} y={126} textAnchor="middle" fontFamily={mono} fontSize="5.5" fill={G} opacity="0.45">{`BURNER ${i+1}`}</text>
      ))}

      {/* Combi oven */}
      <rect x="272" y="46" width="62" height="108" stroke={G} strokeWidth="1.5" fill={gd(0.04)} rx="2" />
      <rect x="278" y="52" width="50" height="70" stroke={G} strokeWidth="1" strokeDasharray="2 3" rx="1" />
      <line x1="272" y1="118" x2="334" y2="118" stroke={G} strokeWidth="1.5" />
      <circle cx="303" cy="132" r="4.5" stroke={G} strokeWidth="1" fill={gd(0.08)} />
      <text x="303" y="163" textAnchor="middle" fontFamily={mono} fontSize="5.5" fill={G} opacity="0.45">COMBI OVEN</text>

      {/* Salamander */}
      <rect x="350" y="46" width="54" height="40" stroke={G} strokeWidth="1.5" fill={gd(0.04)} rx="2" />
      {[54, 60, 66, 72, 78].map(y => <line key={y} x1="354" y1={y} x2="400" y2={y} stroke={G} strokeWidth="0.8" opacity="0.6" />)}
      <text x="377" y="97" textAnchor="middle" fontFamily={mono} fontSize="5.5" fill={G} opacity="0.45">SALAMANDER</text>

      {/* Fryer */}
      <rect x="350" y="102" width="54" height="52" stroke={G} strokeWidth="1.5" fill={gd(0.04)} rx="2" />
      <ellipse cx="377" cy="128" rx="18" ry="16" stroke={G} strokeWidth="1" fill={gd(0.04)} />
      <text x="377" y="165" textAnchor="middle" fontFamily={mono} fontSize="5.5" fill={G} opacity="0.45">FRYER</text>

      {/* -- ZONE B · PREP AREA --------------------------------- */}
      <rect x="24" y="185" width="174" height="117" stroke={G} strokeWidth="1.5" fill={gd(0.02)} rx="2" />
      <text x="36" y="200" fontFamily={mono} fontSize="7" fill={G} opacity="0.85" letterSpacing="2">PREP AREA</text>
      <rect x="34" y="210" width="154" height="52" stroke={G} strokeWidth="1" fill={gd(0.03)} rx="1" />
      {Array.from({ length: 16 }).map((_, i) => (
        <line key={i} x1={34 + i * 10} y1="210" x2={34 + i * 10 - 52} y2="262" stroke={G} strokeWidth="0.35" opacity="0.2" />
      ))}
      <text x="111" y="277" textAnchor="middle" fontFamily={mono} fontSize="5.5" fill={G} opacity="0.38">WORK TABLE</text>

      {/* -- ZONE C · COLD ROOM --------------------------------- */}
      <rect x="210" y="185" width="118" height="57" stroke={G} strokeWidth="1.5" fill="rgba(80,160,220,0.03)" rx="2" />
      <text x="222" y="200" fontFamily={mono} fontSize="7" fill={G} opacity="0.85" letterSpacing="1.5">COLD ROOM</text>
      {[0, 60, 120].map(deg => {
        const r1 = (deg * Math.PI) / 180;
        const r2 = ((deg + 180) * Math.PI) / 180;
        return <line key={deg} x1={269 + 17*Math.cos(r1)} y1={222 + 17*Math.sin(r1)} x2={269 + 17*Math.cos(r2)} y2={222 + 17*Math.sin(r2)} stroke={G} strokeWidth="1.2" opacity="0.6" />;
      })}
      <circle cx="269" cy="222" r="4" fill={G} opacity="0.55" />

      {/* -- ZONE D · DISHWASH ---------------------------------- */}
      <rect x="210" y="253" width="118" height="49" stroke={G} strokeWidth="1.5" fill="rgba(60,190,180,0.025)" rx="2" />
      <text x="222" y="268" fontFamily={mono} fontSize="7" fill={G} opacity="0.85" letterSpacing="1.5">DISHWASH</text>
      {[279, 285, 291].map(y => (
        <path key={y} d={`M222 ${y} Q234 ${y-4} 246 ${y} Q258 ${y+4} 270 ${y} Q282 ${y-4} 294 ${y} Q306 ${y+4} 318 ${y}`} stroke={G} strokeWidth="0.85" fill="none" opacity="0.4" />
      ))}

      {/* -- ZONE E · BAKERY ------------------------------------ */}
      <rect x="340" y="185" width="84" height="117" stroke={G} strokeWidth="1.5" fill="rgba(220,150,60,0.025)" rx="2" />
      <text x="352" y="200" fontFamily={mono} fontSize="7" fill={G} opacity="0.85" letterSpacing="1.5">BAKERY</text>
      <rect x="350" y="208" width="64" height="84" stroke={G} strokeWidth="1" fill={gd(0.04)} rx="1" />
      {[224, 240, 256, 272].map(y => <line key={y} x1="350" y1={y} x2="414" y2={y} stroke={G} strokeWidth="0.7" opacity="0.5" />)}
      <text x="382" y="303" textAnchor="middle" fontFamily={mono} fontSize="5" fill={G} opacity="0.38">DECK OVEN</text>

      {/* -- ZONE F · CAFETERIA --------------------------------- */}
      <rect x="436" y="185" width="140" height="117" stroke={G} strokeWidth="1.5" fill={gd(0.015)} rx="2" />
      <text x="448" y="200" fontFamily={mono} fontSize="7" fill={G} opacity="0.85" letterSpacing="1.5">CAFETERIA</text>
      {[208, 225, 242, 259, 276].map(y => (
        <rect key={y} x="447" y={y} width="120" height="12" stroke={G} strokeWidth="0.6" fill={gd(0.03)} rx="1" />
      ))}

      {/* -- Dimension annotations --------------------------- */}
      <line x1="24" y1="13" x2="576" y2="13" stroke={G} strokeWidth="0.6" opacity="0.3" />
      <line x1="24" y1="9"  x2="24"  y2="17" stroke={G} strokeWidth="0.75" opacity="0.3" />
      <line x1="576" y1="9" x2="576" y2="17" stroke={G} strokeWidth="0.75" opacity="0.3" />
      <text x="300" y="11" textAnchor="middle" fontFamily={mono} fontSize="6" fill={G} opacity="0.5">← 12.5 METRES →</text>

      <line x1="12" y1="24" x2="12" y2="302" stroke={G} strokeWidth="0.6" opacity="0.3" />
      <line x1="8" y1="24"  x2="16" y2="24"  stroke={G} strokeWidth="0.75" opacity="0.3" />
      <line x1="8" y1="302" x2="16" y2="302" stroke={G} strokeWidth="0.75" opacity="0.3" />
      <text x="7" y="163" textAnchor="middle" fontFamily={mono} fontSize="6" fill={G} opacity="0.5" transform="rotate(-90,7,163)">↕ 8 M</text>

      {/* -- Compass rose ------------------------------------ */}
      <circle cx="558" cy="47" r="20" stroke={G} strokeWidth="0.8" fill={gd(0.04)} opacity="0.65" />
      <line x1="558" y1="29" x2="558" y2="65" stroke={G} strokeWidth="0.75" opacity="0.55" />
      <line x1="540" y1="47" x2="576" y2="47" stroke={G} strokeWidth="0.75" opacity="0.55" />
      <polygon points="558,29 553,43 563,43" fill={G} opacity="0.75" />
      <text x="558" y="25" textAnchor="middle" fontFamily={mono} fontSize="7" fill={G} opacity="0.75">N</text>

      {/* -- Title block ------------------------------------- */}
      <rect x="0" y="314" width="600" height="106" fill={gd(0.05)} />
      <line x1="0" y1="314" x2="600" y2="314" stroke={G} strokeWidth="1" opacity="0.45" />

      <text x="300" y="330" textAnchor="middle" fontFamily="'Playfair Display',Georgia,serif" fontSize="13" fill={G} fontWeight="700" letterSpacing="5">
        HYATT REGENCY NEW DELHI
      </text>
      <line x1="80" y1="338" x2="520" y2="338" stroke={G} strokeWidth="0.5" opacity="0.22" />
      <text x="300" y="349" textAnchor="middle" fontFamily={mono} fontSize="6.5" fill={G} opacity="0.48" letterSpacing="3.5">
        COMMERCIAL KITCHEN LAYOUT · BHIKAJI CAMA PLACE
      </text>

      <text x="24" y="363" fontFamily={mono} fontSize="5.5" fill={G} opacity="0.38">PROJECT REF: VSD/HYT/DEL/2024-01</text>
      <text x="24" y="373" fontFamily={mono} fontSize="5.5" fill={G} opacity="0.38">SHEET 1 OF 1 · SCALE 1:50</text>
      <text x="576" y="363" textAnchor="end" fontFamily={mono} fontSize="5.5" fill={G} opacity="0.38">DRAWN: VSD DESIGN TEAM</text>
      <text x="576" y="373" textAnchor="end" fontFamily={mono} fontSize="5.5" fill={G} opacity="0.38">APPROVED: MARCH 2024</text>

      {/* Scale bar */}
      <rect x="222" y="385" width="80" height="7" fill={gd(0.08)} stroke={G} strokeWidth="0.5" opacity="0.42" />
      <rect x="222" y="385" width="40" height="7" fill={gd(0.22)} opacity="0.5" />
      <text x="217" y="391" textAnchor="end" fontFamily={mono} fontSize="5.5" fill={G} opacity="0.42">0</text>
      <text x="262" y="382" textAnchor="middle" fontFamily={mono} fontSize="5.5" fill={G} opacity="0.42">5m</text>
      <text x="307" y="391" textAnchor="start" fontFamily={mono} fontSize="5.5" fill={G} opacity="0.42">10m</text>

      {/* Watermark */}
      <text x="300" y="406" textAnchor="middle" fontFamily="'Playfair Display',Georgia,serif" fontSize="8" fill={G} opacity="0.20" letterSpacing="5">
        VSD INTERNATIONAL · ISO 9001 CERTIFIED
      </text>
    </svg>
  );
}

/* --- Deliverable Group Card ----------------------------------------------- */
type DeliverableGroup = {
  Icon: React.ComponentType<{ size?: number; strokeWidth?: number; style?: React.CSSProperties }>;
  category: string;
  items: string[];
};

function DeliverableCard({ group, delay }: { group: DeliverableGroup; delay: number }) {
  const { Icon } = group;
  return (
    <div
      style={{
        background: 'var(--charcoal-mid)',
        border: '1px solid var(--charcoal-edge)',
        borderRadius: 16,
        padding: '1.625rem 1.75rem',
        position: 'relative',
        overflow: 'hidden',
        animationDelay: `${delay}ms`,
      }}
    >
      {/* Subtle gold top line */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute', top: 0, left: 0, right: 0, height: '2px',
          background: 'linear-gradient(90deg, var(--gold-bright), var(--gold), transparent)',
        }}
      />

      <div
        style={{
          width: 44, height: 44, borderRadius: 12,
          background: 'rgba(201,168,76,0.10)',
          border: '1px solid rgba(201,168,76,0.20)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          marginBottom: '1rem',
        }}
        aria-hidden="true"
      >
        <Icon size={20} strokeWidth={1.6} style={{ color: 'var(--gold)' }} />
      </div>

      <h4
        style={{
          fontFamily: 'var(--font-playfair)',
          fontWeight: 700,
          fontSize: '1.0625rem',
          color: 'var(--text-on-dark)',
          marginBottom: '1rem',
          lineHeight: 1.2,
        }}
      >
        {group.category}
      </h4>

      <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
        {group.items.map((item) => (
          <li
            key={item}
            style={{
              display: 'flex',
              alignItems: 'flex-start',
              gap: '0.5rem',
              fontFamily: 'var(--font-inter)',
              fontSize: '0.875rem',
              color: 'rgba(245,240,232,0.60)',
              lineHeight: 1.5,
            }}
          >
            <CheckCircle2 size={14} style={{ color: 'var(--gold)', flexShrink: 0, marginTop: '0.15rem' }} aria-hidden="true" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

/* --- Main Export ---------------------------------------------------------- */
const PROJECT_DETAILS = [
  { Icon: MapPin,       label: 'Location',    value: 'Bhikaji Cama Place, New Delhi' },
  { Icon: Clock,        label: 'Timeline',    value: '21 days — order to commissioning' },
  { Icon: IndianRupee,  label: 'Order Value', value: '₹42 Lakhs (complete overhaul)' },
  { Icon: CheckCircle2, label: 'Scope',       value: 'Main · Banquet · Bakery · Cafeteria' },
];

const DELIVERABLE_GROUPS: DeliverableGroup[] = [
  {
    Icon: Flame,
    category: 'Premium Equipment',
    items: [
      'Rational iCombi Pro combi ovens (×4)',
      'Robot Coupe food processors & blenders',
      'Scotsman ice machines (×3)',
      'Heavy-duty gas ranges & fryers',
    ],
  },
  {
    Icon: Thermometer,
    category: 'Custom Fabrication',
    items: [
      'SS 304 fabrication — 186 sq ft',
      'Walk-in cold room installation',
      'Exhaust hood & ventilation system',
      'Dishwashing line setup',
    ],
  },
  {
    Icon: Package,
    category: 'Services Delivered',
    items: [
      'Full on-site installation',
      'Equipment testing & commissioning',
      'Kitchen team training',
      '2-year AMC agreement',
    ],
  },
];

export default function FeaturedProject() {
  const statsRef = useRef<HTMLDivElement>(null);
  const [statsOn, setStatsOn] = useState(false);

  useEffect(() => {
    const el = statsRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setStatsOn(true); obs.disconnect(); } },
      { threshold: 0.25 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  /* Individual counters */
  const val42  = useCounter(42,  statsOn, 1600);
  const val21  = useCounter(21,  statsOn, 1400);
  const val186 = useCounter(186, statsOn, 2000);
  const val4   = useCounter(4,   statsOn, 1000);

  return (
    <section
      aria-labelledby="project-heading"
      className="relative overflow-hidden"
      style={{ background: 'var(--charcoal)', padding: '5.5rem 0' }}
    >
      {/* -- Gold top bar --------------------------------------------------- */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute', top: 0, left: 0, right: 0, height: '2px',
          background: 'linear-gradient(90deg, transparent 5%, var(--gold-bright) 35%, var(--gold) 65%, transparent 95%)',
        }}
      />

      {/* -- Background grid ------------------------------------------------ */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          opacity: 0.028,
          backgroundImage: `
            linear-gradient(rgba(201,168,76,0.9) 1px, transparent 1px),
            linear-gradient(90deg, rgba(201,168,76,0.9) 1px, transparent 1px)
          `,
          backgroundSize: '72px 72px',
          maskImage: 'radial-gradient(ellipse 90% 85% at 50% 50%, black 30%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(ellipse 90% 85% at 50% 50%, black 30%, transparent 100%)',
        }}
      />

      {/* -- Corner glows --------------------------------------------------- */}
      <div aria-hidden="true" className="absolute pointer-events-none" style={{ top: '-80px', right: '-80px', width: '500px', height: '500px', background: 'radial-gradient(ellipse, rgba(201,168,76,0.07) 0%, transparent 66%)', filter: 'blur(50px)' }} />
      <div aria-hidden="true" className="absolute pointer-events-none" style={{ bottom: '-60px', left: '-60px', width: '400px', height: '400px', background: 'radial-gradient(ellipse, rgba(201,168,76,0.06) 0%, transparent 66%)', filter: 'blur(42px)' }} />

      <div className="container mx-auto" style={{ position: 'relative', zIndex: 1 }}>

        {/* -- Section header ------------------------------------------------ */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', marginBottom: '3.5rem' }}>
          <p className="section-label" style={{ marginBottom: '0.75rem' }}>Case Study</p>
          <h2
            id="project-heading"
            style={{
              fontFamily: 'var(--font-playfair)',
              fontSize: 'clamp(1.875rem, 3vw, 2.875rem)',
              color: 'var(--text-on-dark)',
              lineHeight: 1.1,
              letterSpacing: '-0.025em',
            }}
          >
            Featured Project:{' '}
            <em className="gold-shimmer" style={{ fontStyle: 'italic', fontWeight: 800 }}>
              Hyatt Regency Delhi
            </em>
          </h2>
          <div aria-hidden="true" style={{ width: 60, height: 3, background: 'linear-gradient(90deg, var(--gold-bright), var(--gold), var(--gold-deep))', borderRadius: 2, marginTop: '1.25rem' }} />
          <p style={{ marginTop: '1.125rem', color: 'rgba(245,240,232,0.48)', fontSize: '1rem', fontFamily: 'var(--font-inter)', lineHeight: 1.75, maxWidth: '560px' }}>
            A ₹42-lakh complete kitchen overhaul across 4 zones — delivered in 21 days with zero disruption to hotel operations.
          </p>
        </div>

        {/* -- Main showcase card --------------------------------------------- */}
        <div
          className="grid grid-cols-1 lg:grid-cols-5 rounded-2xl overflow-hidden"
          style={{ border: '1px solid rgba(201,168,76,0.18)' }}
        >
          {/* Left — blueprint image (lg: 3 of 5 columns) */}
          <div
            className="lg:col-span-3 relative"
            style={{ minHeight: 'clamp(300px, 55vw, 540px)' }}
            aria-label="VSD International kitchen layout blueprint for Hyatt Regency Delhi"
          >
            <KitchenBlueprint />

            {/* Overlay gradient bottom-to-top */}
            <div
              aria-hidden="true"
              className="hidden lg:block"
              style={{
                position: 'absolute', bottom: 0, left: 0, right: 0, height: '30%',
                background: 'linear-gradient(to top, rgba(8,8,6,0.55), transparent)',
                pointerEvents: 'none',
              }}
            />

            {/* Completed badge */}
            <div
              style={{
                position: 'absolute', top: 16, left: 16,
                display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                padding: '0.35rem 0.875rem',
                borderRadius: '999px',
                background: 'rgba(201,168,76,0.12)',
                border: '1px solid rgba(201,168,76,0.28)',
                backdropFilter: 'blur(8px)',
                zIndex: 2,
              }}
            >
              <span aria-hidden="true" style={{ width: 7, height: 7, borderRadius: '50%', background: '#4ade80', display: 'inline-block', boxShadow: '0 0 6px #4ade80' }} />
              <span style={{ fontSize: '0.6875rem', fontFamily: 'var(--font-inter)', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#F5F0E8' }}>Completed — March 2024</span>
            </div>

            {/* Floating stat chips */}
            {[
              { label: '₹42 Lakhs', sub: 'Project Value', top: '16px', right: '16px' },
              { label: '21 Days',   sub: 'Full Delivery',  bottom: '20px', left: '16px' },
              { label: 'ISO 9001', sub: 'Certified',       bottom: '20px', right: '16px' },
            ].map(({ label, sub, ...pos }) => (
              <div
                key={label}
                style={{
                  position: 'absolute',
                  ...pos,
                  padding: '0.5rem 0.875rem',
                  borderRadius: 10,
                  background: 'rgba(12,10,7,0.82)',
                  border: '1px solid rgba(201,168,76,0.28)',
                  backdropFilter: 'blur(12px)',
                  zIndex: 2,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}
              >
                <span style={{ fontFamily: 'var(--font-playfair)', fontWeight: 800, fontSize: '1rem', color: 'var(--gold)', lineHeight: 1 }}>{label}</span>
                <span style={{ fontFamily: 'var(--font-inter)', fontSize: '0.625rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(245,240,232,0.50)', marginTop: '0.2rem' }}>{sub}</span>
              </div>
            ))}
          </div>

          {/* Right — project details (lg: 2 of 5 columns) */}
          <div
            className="lg:col-span-2 flex flex-col"
            style={{ background: 'var(--charcoal-light)', borderLeft: '1px solid rgba(201,168,76,0.12)' }}
          >
            {/* Hotel header */}
            <div
              style={{
                padding: '2rem 2rem 1.625rem',
                borderBottom: '1px solid rgba(201,168,76,0.10)',
              }}
            >
              <p style={{ fontFamily: 'var(--font-inter)', fontSize: '0.625rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '0.5rem' }}>
                Client
              </p>
              <h3
                style={{
                  fontFamily: 'var(--font-playfair)',
                  fontWeight: 800,
                  fontSize: 'clamp(1.375rem, 2vw, 1.75rem)',
                  color: 'var(--text-on-dark)',
                  lineHeight: 1.15,
                  marginBottom: '0.625rem',
                }}
              >
                Hyatt Regency<br />New Delhi
              </h3>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.375rem' }}>
                <MapPin size={12} style={{ color: 'var(--gold)', flexShrink: 0 }} aria-hidden="true" />
                <span style={{ fontFamily: 'var(--font-inter)', fontSize: '0.875rem', color: 'rgba(245,240,232,0.50)' }}>
                  Bhikaji Cama Place, New Delhi
                </span>
              </div>
              {/* 5 stars */}
              <div style={{ marginTop: '0.875rem', display: 'flex', gap: '0.2rem' }} aria-label="5-star hotel project">
                {[1,2,3,4,5].map(s => (
                  <svg key={s} width="14" height="14" viewBox="0 0 14 14" fill="var(--gold)" aria-hidden="true">
                    <path d="M7 1l1.545 3.13 3.455.503-2.5 2.435.59 3.44L7 8.895l-3.09 1.623.59-3.44L2 4.633l3.455-.503L7 1z" />
                  </svg>
                ))}
                <span style={{ fontFamily: 'var(--font-inter)', fontSize: '0.75rem', color: 'rgba(245,240,232,0.40)', marginLeft: '0.375rem', lineHeight: '14px' }}>5-Star Hotel</span>
              </div>
            </div>

            {/* Project detail rows */}
            <div style={{ flex: 1, padding: '0.25rem 0' }}>
              {PROJECT_DETAILS.map(({ Icon, label, value }, idx) => (
                <div
                  key={label}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '0.875rem',
                    padding: '1.125rem 2rem',
                    borderBottom: idx < PROJECT_DETAILS.length - 1 ? '1px solid rgba(201,168,76,0.08)' : 'none',
                  }}
                >
                  <div
                    style={{
                      width: 36, height: 36, borderRadius: 9, flexShrink: 0,
                      background: 'rgba(201,168,76,0.09)',
                      border: '1px solid rgba(201,168,76,0.16)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                    }}
                    aria-hidden="true"
                  >
                    <Icon size={15} strokeWidth={1.8} style={{ color: 'var(--gold)' }} />
                  </div>
                  <div>
                    <p style={{ fontFamily: 'var(--font-inter)', fontSize: '0.5625rem', fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '0.25rem' }}>
                      {label}
                    </p>
                    <p style={{ fontFamily: 'var(--font-inter)', fontSize: '0.875rem', color: 'rgba(245,240,232,0.65)', lineHeight: 1.5 }}>
                      {value}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* -- Stats band ----------------------------------------------------- */}
        <div
          ref={statsRef}
          className="grid grid-cols-2 lg:grid-cols-4 rounded-2xl overflow-hidden"
          style={{
            background: 'var(--charcoal-mid)',
            border: '1px solid rgba(201,168,76,0.15)',
            marginTop: '1.25rem',
          }}
        >
          {[
            { prefix: '₹', value: val42,  suffix: 'L',       label: 'Project Value'       },
            { prefix: '',  value: val21,  suffix: ' Days',    label: 'Delivery Timeline'   },
            { prefix: '',  value: val186, suffix: ' sq.ft',   label: 'Custom Fabrication'  },
            { prefix: '',  value: val4,   suffix: ' Zones',   label: 'Kitchen Areas'        },
          ].map(({ prefix, value, suffix, label }, idx) => (
            <div
              key={label}
              style={{
                padding: '2.25rem 1.5rem',
                textAlign: 'center',
                borderRight: idx < 3 ? '1px solid rgba(201,168,76,0.10)' : 'none',
                borderBottom: idx < 2 ? '1px solid rgba(201,168,76,0.10)' : 'none',
              }}
              className={idx < 2 ? 'lg:[border-bottom:none]' : ''}
            >
              <div
                style={{
                  fontFamily: 'var(--font-playfair)',
                  fontWeight: 800,
                  fontSize: 'clamp(2rem, 3.5vw, 3rem)',
                  color: 'var(--gold)',
                  lineHeight: 1,
                  letterSpacing: '-0.02em',
                }}
              >
                {prefix}{value}{suffix}
              </div>
              <div
                style={{
                  fontFamily: 'var(--font-inter)',
                  fontSize: '0.6875rem',
                  fontWeight: 700,
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                  color: 'rgba(245,240,232,0.38)',
                  marginTop: '0.625rem',
                }}
              >
                {label}
              </div>
            </div>
          ))}
        </div>

        {/* -- Deliverables grid ---------------------------------------------- */}
        <div style={{ marginTop: '2.5rem' }}>
          <p
            style={{
              fontFamily: 'var(--font-inter)',
              fontSize: '0.625rem',
              fontWeight: 700,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: 'var(--gold)',
              marginBottom: '1.25rem',
              textAlign: 'center',
            }}
          >
            Equipment &amp; Services Delivered
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {DELIVERABLE_GROUPS.map((group, i) => (
              <DeliverableCard key={group.category} group={group} delay={i * 80} />
            ))}
          </div>
        </div>

        {/* -- Testimonial ---------------------------------------------------- */}
        <div
          style={{
            marginTop: '2.5rem',
            padding: 'clamp(2rem, 4vw, 3rem)',
            borderRadius: 20,
            background: 'var(--charcoal-mid)',
            border: '1px solid rgba(201,168,76,0.18)',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* Gold left border */}
          <div
            aria-hidden="true"
            style={{
              position: 'absolute', top: 0, left: 0, bottom: 0, width: '3px',
              background: 'linear-gradient(180deg, var(--gold-bright), var(--gold), var(--gold-deep))',
            }}
          />

          {/* Decorative large quote marks */}
          <svg
            aria-hidden="true"
            width="72"
            height="52"
            viewBox="0 0 72 52"
            fill="none"
            style={{ marginBottom: '1.25rem', opacity: 0.22 }}
          >
            <text x="0" y="50" fontFamily="'Playfair Display',Georgia,serif" fontSize="90" fill="var(--gold)">&ldquo;</text>
          </svg>

          <blockquote style={{ margin: 0 }}>
            <p
              style={{
                fontFamily: 'var(--font-playfair)',
                fontSize: 'clamp(1.0625rem, 2vw, 1.375rem)',
                fontStyle: 'italic',
                fontWeight: 500,
                color: 'rgba(245,240,232,0.82)',
                lineHeight: 1.72,
                maxWidth: '760px',
                marginBottom: '1.75rem',
              }}
            >
              &ldquo;VSD International delivered the complete kitchen overhaul at Hyatt Regency Delhi in just
              21 days — on budget and with zero disruption to hotel operations. Their team&apos;s
              professionalism, technical expertise, and post-commissioning support have been exceptional.
              We have already engaged them for our second property.&rdquo;
            </p>

            <footer style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', flexWrap: 'wrap' }}>
              {/* Avatar placeholder */}
              <div
                style={{
                  width: 48, height: 48, borderRadius: '50%',
                  background: 'rgba(201,168,76,0.12)',
                  border: '1.5px solid rgba(201,168,76,0.28)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  flexShrink: 0,
                }}
                aria-hidden="true"
              >
                <span style={{ fontFamily: 'var(--font-playfair)', fontSize: '1.25rem', color: 'var(--gold)', fontWeight: 700 }}>F</span>
              </div>

              <div>
                <p style={{ fontFamily: 'var(--font-inter)', fontWeight: 700, fontSize: '0.9375rem', color: 'var(--gold)', marginBottom: '0.1rem' }}>
                  F&amp;B Director
                </p>
                <p style={{ fontFamily: 'var(--font-inter)', fontSize: '0.875rem', color: 'rgba(245,240,232,0.45)' }}>
                  Hyatt Regency New Delhi
                </p>
              </div>

              {/* Star rating */}
              <div style={{ marginLeft: 'auto', display: 'flex', gap: '0.2rem' }} aria-label="5 star review">
                {[1,2,3,4,5].map(s => (
                  <svg key={s} width="16" height="16" viewBox="0 0 14 14" fill="var(--gold)" aria-hidden="true">
                    <path d="M7 1l1.545 3.13 3.455.503-2.5 2.435.59 3.44L7 8.895l-3.09 1.623.59-3.44L2 4.633l3.455-.503L7 1z" />
                  </svg>
                ))}
              </div>
            </footer>
          </blockquote>
        </div>

        {/* -- CTAs ----------------------------------------------------------- */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '1rem',
            flexWrap: 'wrap',
            marginTop: '3rem',
          }}
        >
          <Link
            href="/projects"
            className="btn-gold inline-flex items-center gap-2"
            aria-label="View all VSD International projects"
          >
            View All Projects
            <ArrowRight size={15} aria-hidden="true" />
          </Link>
          <Link
            href="/contact"
            className="btn-ghost-dark inline-flex items-center gap-2"
            aria-label="Get a quote for your kitchen project"
          >
            Get a Quote for Your Project
          </Link>
        </div>

      </div>
    </section>
  );
}
