'use client';
import { useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Shield, Clock, Award, Star } from 'lucide-react';

/**
 * Hero Section — Section ③
 * H1 target: 2 lines — "India's Finest Commercial Kitchen" / "Equipment Manufacturer"
 * Stats bar removed — TrustMetrics section directly below already shows stats
 */
/** Round trig values to 3 dp to prevent server/client float mismatch */
const r = (n: number) => +n.toFixed(3);

export default function Hero() {

  useEffect(() => {
    const glow = document.getElementById('hero-glow');
    if (!glow) return;
    const handle = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth  - 0.5) * 22;
      const y = (e.clientY / window.innerHeight - 0.5) * 14;
      glow.style.transform = `translate(${x}px, ${y}px)`;
    };
    window.addEventListener('mousemove', handle, { passive: true });
    return () => window.removeEventListener('mousemove', handle);
  }, []);

  return (
    <section
      id="hero"
      aria-label="VSD International — Commercial Kitchen Equipment Manufacturer"
      className="relative flex flex-col justify-center overflow-hidden"
      style={{ minHeight: 'min(86vh, 780px)', background: 'var(--charcoal-warm)' }}
    >
      {/* -- Top gold line --------------------------------------------------- */}
      <div
        aria-hidden="true"
        className="absolute top-0 left-0 right-0"
        style={{
          height: '2px',
          background: 'linear-gradient(90deg, transparent 5%, var(--gold-bright) 35%, var(--gold) 65%, transparent 95%)',
          zIndex: 2,
        }}
      />

      {/* -- Golden glow layers (parallax) ----------------------------------- */}
      <div
        id="hero-glow"
        aria-hidden="true"
        className="absolute inset-0 transition-transform duration-500 ease-out pointer-events-none"
        style={{ zIndex: 1 }}
      >
        {/* Central warm aura */}
        <div style={{
          position: 'absolute', top: '50%', left: '50%',
          transform: 'translate(-50%,-50%)',
          width: '100%', height: '90%',
          background: 'radial-gradient(ellipse 68% 58% at 50% 44%, rgba(201,168,76,0.23) 0%, rgba(166,124,50,0.10) 44%, transparent 72%)',
          filter: 'blur(54px)',
        }} />
        {/* Top highlight */}
        <div style={{
          position: 'absolute', top: '-5%', left: '50%',
          transform: 'translateX(-50%)',
          width: '55%', height: '45%',
          background: 'radial-gradient(ellipse, rgba(240,196,66,0.09) 0%, transparent 70%)',
          filter: 'blur(30px)',
        }} />
        {/* Dark base */}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(160deg, #0F0D0A 0%, #0C0A07 50%, #080808 100%)',
        }} />
      </div>

      {/* -- Grid texture ---------------------------------------------------- */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          zIndex: 1, opacity: 0.04,
          backgroundImage: `
            linear-gradient(rgba(201,168,76,0.7) 1px, transparent 1px),
            linear-gradient(90deg, rgba(201,168,76,0.7) 1px, transparent 1px)
          `,
          backgroundSize: '72px 72px',
          maskImage: 'radial-gradient(ellipse 90% 80% at 50% 50%, black 20%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(ellipse 90% 80% at 50% 50%, black 20%, transparent 100%)',
        }}
      />

      {/* -- Decorative rings ------------------------------------------------ */}
      <div aria-hidden="true" className="hidden lg:block" style={{ zIndex: 1, pointerEvents: 'none' }}>
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: '600px', height: '600px', border: '1px solid rgba(201,168,76,0.18)', borderRadius: '50%' }} />
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: '420px', height: '420px', border: '1px solid rgba(201,168,76,0.13)', borderRadius: '50%' }} />
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: '260px', height: '260px', border: '1px solid rgba(240,196,66,0.20)', borderRadius: '50%' }} />
      </div>

      {/* -- Kitchen Equipment SVG Backgrounds -------------------------------
          All decoratives are aria-hidden, pointer-events:none, z-index:1.
          Responsive visibility: md+ burners · lg+ hood/steam/range · xl+ utensils/stockpot · 2xl+ whisk/tongs
         ------------------------------------------------------------------- */}

      {/* === Large Commercial Gas Burner — bottom-left corner === */}
      <svg
        aria-hidden="true"
        viewBox="0 0 320 320"
        fill="none"
        className="hidden lg:block"
        style={{
          position: 'absolute', bottom: '-95px', left: '-80px',
          width: '410px', height: '410px',
          zIndex: 1, pointerEvents: 'none',
          animation: 'hero-burner-glow 4s ease-in-out infinite',
        }}
      >
        {/* Grate outer ring */}
        <circle cx="160" cy="160" r="148" stroke="#C9A84C" strokeWidth="2"/>
        <circle cx="160" cy="160" r="128" stroke="#C9A84C" strokeWidth="1.2" strokeDasharray="6 10"/>
        {/* Main burner rings */}
        <circle cx="160" cy="160" r="108" stroke="#C9A84C" strokeWidth="2.5"/>
        <circle cx="160" cy="160" r="90"  stroke="#C9A84C" strokeWidth="1"   strokeDasharray="4 7"/>
        <circle cx="160" cy="160" r="70"  stroke="#C9A84C" strokeWidth="2"/>
        <circle cx="160" cy="160" r="50"  stroke="#C9A84C" strokeWidth="1"   strokeDasharray="3 6"/>
        <circle cx="160" cy="160" r="30"  stroke="#C9A84C" strokeWidth="2"/>
        {/* Center cap */}
        <circle cx="160" cy="160" r="18"  stroke="#C9A84C" strokeWidth="1.5" fill="rgba(201,168,76,0.18)"/>
        <circle cx="160" cy="160" r="8"   fill="rgba(201,168,76,0.40)"/>
        {/* 8 main grate spokes */}
        {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => {
          const rad = (deg * Math.PI) / 180;
          return <line key={deg}
            x1={r(160 + 18 * Math.cos(rad))} y1={r(160 + 18 * Math.sin(rad))}
            x2={r(160 + 148 * Math.cos(rad))} y2={r(160 + 148 * Math.sin(rad))}
            stroke="#C9A84C" strokeWidth="1.5"
          />;
        })}
        {/* 8 inner secondary spokes */}
        {[22.5, 67.5, 112.5, 157.5, 202.5, 247.5, 292.5, 337.5].map((deg) => {
          const rad = (deg * Math.PI) / 180;
          return <line key={deg}
            x1={r(160 + 30 * Math.cos(rad))} y1={r(160 + 30 * Math.sin(rad))}
            x2={r(160 + 108 * Math.cos(rad))} y2={r(160 + 108 * Math.sin(rad))}
            stroke="#C9A84C" strokeWidth="1"
          />;
        })}
        {/* Flame-port dots around burner ring */}
        {Array.from({ length: 24 }).map((_, i) => {
          const angle = (i * 15 * Math.PI) / 180;
          return <circle key={i}
            cx={r(160 + 90 * Math.cos(angle))} cy={r(160 + 90 * Math.sin(angle))}
            r="2.5" fill="rgba(201,168,76,0.45)"
          />;
        })}
      </svg>

      {/* === Smaller Burner — bottom-right corner === */}
      <svg
        aria-hidden="true"
        viewBox="0 0 240 240"
        fill="none"
        className="hidden md:block"
        style={{
          position: 'absolute', bottom: '-55px', right: '-45px',
          width: '300px', height: '300px',
          zIndex: 1, pointerEvents: 'none', opacity: 0.50,
        }}
      >
        <circle cx="120" cy="120" r="112" stroke="#C9A84C" strokeWidth="2"/>
        <circle cx="120" cy="120" r="94"  stroke="#C9A84C" strokeWidth="1.2" strokeDasharray="5 9"/>
        <circle cx="120" cy="120" r="76"  stroke="#C9A84C" strokeWidth="2"/>
        <circle cx="120" cy="120" r="58"  stroke="#C9A84C" strokeWidth="1"   strokeDasharray="3 6"/>
        <circle cx="120" cy="120" r="42"  stroke="#C9A84C" strokeWidth="2"/>
        <circle cx="120" cy="120" r="24"  stroke="#C9A84C" strokeWidth="1.5" fill="rgba(201,168,76,0.12)"/>
        <circle cx="120" cy="120" r="10"  fill="rgba(201,168,76,0.35)"/>
        {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => {
          const rad = (deg * Math.PI) / 180;
          return <line key={deg}
            x1={r(120 + 24 * Math.cos(rad))} y1={r(120 + 24 * Math.sin(rad))}
            x2={r(120 + 112 * Math.cos(rad))} y2={r(120 + 112 * Math.sin(rad))}
            stroke="#C9A84C" strokeWidth="1.2"
          />;
        })}
        {Array.from({ length: 20 }).map((_, i) => {
          const angle = (i * 18 * Math.PI) / 180;
          return <circle key={i}
            cx={r(120 + 76 * Math.cos(angle))} cy={r(120 + 76 * Math.sin(angle))}
            r="2" fill="rgba(201,168,76,0.4)"
          />;
        })}
      </svg>

      {/* === Kitchen Exhaust Hood — top-right corner === */}
      <svg
        aria-hidden="true"
        viewBox="0 0 340 190"
        fill="none"
        className="hidden lg:block"
        style={{
          position: 'absolute', top: '0', right: '5%',
          width: '290px', height: '155px',
          zIndex: 1, pointerEvents: 'none', opacity: 0.45,
        }}
      >
        {/* Hood body */}
        <path d="M30 185 L75 15 L265 15 L310 185 Z" stroke="#C9A84C" strokeWidth="2" fill="rgba(201,168,76,0.04)"/>
        {/* Ventilation slats */}
        {[35, 57, 79, 101, 123, 145, 167].map((y) => {
          const inset = (y - 35) * 0.38;
          return <line key={y} x1={30 + inset} y1={y} x2={310 - inset} y2={y} stroke="#C9A84C" strokeWidth="1.2"/>;
        })}
        {/* Duct collar */}
        <rect x="115" y="0" width="110" height="18" stroke="#C9A84C" strokeWidth="1.5" fill="rgba(201,168,76,0.07)"/>
        {/* Filter panels */}
        <rect x="44"  y="162" width="112" height="20" rx="2" stroke="#C9A84C" strokeWidth="1.2"/>
        <rect x="163" y="162" width="112" height="20" rx="2" stroke="#C9A84C" strokeWidth="1.2"/>
        {/* Filter mesh dots */}
        {[4, 9, 14].map((yOff) =>
          [54, 70, 86, 102, 118, 174, 190, 206, 222, 238].map((x) => (
            <circle key={`${x}-${yOff}`} cx={x} cy={162 + yOff} r="1.2" fill="rgba(201,168,76,0.5)"/>
          ))
        )}
        {/* Mounting brackets */}
        <line x1="75"  y1="15" x2="75"  y2="0" stroke="#C9A84C" strokeWidth="1"/>
        <line x1="265" y1="15" x2="265" y2="0" stroke="#C9A84C" strokeWidth="1"/>
        {/* Rim strip */}
        <line x1="30" y1="185" x2="310" y2="185" stroke="#C9A84C" strokeWidth="2"/>
      </svg>

      {/* === Chef's Knife — left side === */}
      <svg
        aria-hidden="true"
        viewBox="0 0 72 360"
        fill="none"
        className="hidden xl:block"
        style={{
          position: 'absolute', top: '14%', left: '3%',
          width: '50px', height: '250px',
          zIndex: 1, pointerEvents: 'none', opacity: 0.58,
          transform: 'rotate(14deg)',
        }}
      >
        {/* Blade */}
        <path d="M36 10 L54 215 L18 220 Z" stroke="#C9A84C" strokeWidth="2" fill="rgba(201,168,76,0.10)" strokeLinejoin="round"/>
        {/* Spine */}
        <line x1="36" y1="10" x2="36" y2="215" stroke="#C9A84C" strokeWidth="1" strokeDasharray="8 5" opacity="0.7"/>
        {/* Bolster */}
        <rect x="14" y="218" width="44" height="14" rx="2" stroke="#C9A84C" strokeWidth="1.5" fill="rgba(201,168,76,0.12)"/>
        {/* Handle */}
        <rect x="17" y="232" width="38" height="104" rx="5" stroke="#C9A84C" strokeWidth="1.5" fill="rgba(201,168,76,0.06)"/>
        {/* Wood-grain lines */}
        {[248, 260, 272].map((y) => (
          <line key={y} x1="22" y1={y} x2="50" y2={y} stroke="#C9A84C" strokeWidth="1" opacity="0.6"/>
        ))}
        {/* Rivets */}
        {[280, 302, 322].map((y) => (
          <circle key={y} cx="36" cy={y} r="4.5" stroke="#C9A84C" strokeWidth="1.5" fill="rgba(201,168,76,0.18)"/>
        ))}
      </svg>

      {/* === Ladle — right side === */}
      <svg
        aria-hidden="true"
        viewBox="0 0 88 380"
        fill="none"
        className="hidden xl:block"
        style={{
          position: 'absolute', top: '8%', right: '3.5%',
          width: '58px', height: '256px',
          zIndex: 1, pointerEvents: 'none', opacity: 0.55,
          transform: 'rotate(-11deg)',
        }}
      >
        {/* Bowl */}
        <ellipse cx="44" cy="52" rx="34" ry="26" stroke="#C9A84C" strokeWidth="2" fill="rgba(201,168,76,0.10)"/>
        <path d="M18 52 Q44 84 70 52" stroke="#C9A84C" strokeWidth="1.2" fill="none"/>
        <ellipse cx="44" cy="50" rx="22" ry="14" stroke="#C9A84C" strokeWidth="1" fill="none" opacity="0.7"/>
        {/* Reflection highlight */}
        <path d="M30 40 Q44 34 58 40" stroke="#C9A84C" strokeWidth="1" fill="none" opacity="0.6"/>
        {/* Neck */}
        <path d="M42 78 Q40 100 38 118" stroke="#C9A84C" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
        {/* Handle */}
        <path d="M38 118 Q35 210 32 342" stroke="#C9A84C" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
        {/* Grip rings */}
        {[185, 205, 225, 248, 268].map((y) => {
          const x = 38 - (y - 118) * 0.018;
          return <line key={y} x1={x - 9} y1={y} x2={x + 9} y2={y} stroke="#C9A84C" strokeWidth="1.2" opacity="0.75"/>;
        })}
        {/* End cap */}
        <circle cx="32" cy="347" r="8"   stroke="#C9A84C" strokeWidth="1.5" fill="rgba(201,168,76,0.10)"/>
        <circle cx="32" cy="347" r="3.5" fill="rgba(201,168,76,0.3)"/>
      </svg>

      {/* === Precision Dial Gauge — right side mid (between ladle & spatula) === */}
      <svg
        aria-hidden="true"
        viewBox="0 0 100 165"
        fill="none"
        className="hidden xl:block"
        style={{
          position: 'absolute', top: '43%', right: '2%',
          width: '76px', height: '126px',
          zIndex: 1, pointerEvents: 'none', opacity: 0.50,
          transform: 'rotate(5deg)',
        }}
      >
        {/* Outer bezel */}
        <circle cx="50" cy="48" r="46" stroke="#C9A84C" strokeWidth="2"/>
        {/* Knurled bezel ring */}
        <circle cx="50" cy="48" r="42" stroke="#C9A84C" strokeWidth="0.8" strokeDasharray="3 4" opacity="0.65"/>
        {/* Dial face */}
        <circle cx="50" cy="48" r="38" stroke="#C9A84C" strokeWidth="1.5" fill="rgba(201,168,76,0.04)"/>
        {/* Inner detail ring */}
        <circle cx="50" cy="48" r="27" stroke="#C9A84C" strokeWidth="0.6" fill="none" opacity="0.35"/>
        {/* High-zone arc (top 25% of scale) — subtle emphasis band */}
        <path
          d="M 63.4 80.3 A 35 35 0 0 1 25.2 72.7"
          stroke="#C9A84C" strokeWidth="2.8" strokeLinecap="round" opacity="0.45"
        />
        {/* Tick marks — major every 30° (i%5===0), minor every 6° */}
        {Array.from({ length: 46 }).map((_, i) => {
          const angle = (225 + i * 6) * Math.PI / 180;
          const isMajor = i % 5 === 0;
          return (
            <line key={i}
              x1={r(50 + 38 * Math.cos(angle))} y1={r(48 + 38 * Math.sin(angle))}
              x2={r(50 + (isMajor ? 27 : 33) * Math.cos(angle))} y2={r(48 + (isMajor ? 27 : 33) * Math.sin(angle))}
              stroke="#C9A84C" strokeWidth={isMajor ? 1.8 : 0.8} opacity={isMajor ? 1 : 0.55}
            />
          );
        })}
        {/* Main needle — pointing at ~68% of scale */}
        <line
          x1={50} y1={48}
          x2={r(50 + 28 * Math.cos((225 + 0.68 * 270) * Math.PI / 180))}
          y2={r(48 + 28 * Math.sin((225 + 0.68 * 270) * Math.PI / 180))}
          stroke="#C9A84C" strokeWidth="2.2" strokeLinecap="round"
        />
        {/* Counterweight tail */}
        <line
          x1={50} y1={48}
          x2={r(50 - 9 * Math.cos((225 + 0.68 * 270) * Math.PI / 180))}
          y2={r(48 - 9 * Math.sin((225 + 0.68 * 270) * Math.PI / 180))}
          stroke="#C9A84C" strokeWidth="3" strokeLinecap="round"
        />
        {/* Center pivot cap */}
        <circle cx="50" cy="48" r="5.5" stroke="#C9A84C" strokeWidth="1.5" fill="rgba(201,168,76,0.22)"/>
        <circle cx="50" cy="48" r="2.2" fill="rgba(201,168,76,0.60)"/>
        {/* Mounting flange */}
        <rect x="38" y="92" width="24" height="8" rx="2" stroke="#C9A84C" strokeWidth="1.5" fill="rgba(201,168,76,0.10)"/>
        {/* Probe tube */}
        <rect x="46" y="100" width="8" height="54" rx="4" stroke="#C9A84C" strokeWidth="1.5" fill="rgba(201,168,76,0.06)"/>
        {/* Thread marks on probe */}
        {[109, 117, 125, 133, 141, 149].map((y) => (
          <line key={y} x1="46" y1={y} x2="54" y2={y} stroke="#C9A84C" strokeWidth="0.7" opacity="0.45"/>
        ))}
        {/* Probe tip */}
        <circle cx="50" cy="158" r="6" stroke="#C9A84C" strokeWidth="1.5" fill="rgba(201,168,76,0.14)"/>
        <circle cx="50" cy="158" r="2.5" fill="rgba(201,168,76,0.50)"/>
      </svg>

      {/* === Whisk — top-left (2xl+) === */}
      <svg
        aria-hidden="true"
        viewBox="0 0 68 280"
        fill="none"
        className="hidden 2xl:block"
        style={{
          position: 'absolute', top: '7%', left: '11%',
          width: '42px', height: '175px',
          zIndex: 1, pointerEvents: 'none', opacity: 0.52,
          transform: 'rotate(-9deg)',
        }}
      >
        {/* Balloon wires */}
        <path d="M34 14 C72 55 74 118 34 152 C-6 118 -4 55 34 14"  stroke="#C9A84C" strokeWidth="2"   fill="none"/>
        <path d="M34 14 C62 58 60 118 34 152"                       stroke="#C9A84C" strokeWidth="1.5" fill="none"/>
        <path d="M34 14 C6 58 8 118 34 152"                         stroke="#C9A84C" strokeWidth="1.5" fill="none"/>
        <path d="M34 14 C52 62 50 122 34 152"                       stroke="#C9A84C" strokeWidth="1.2" fill="none" opacity="0.8"/>
        <path d="M34 14 C16 62 18 122 34 152"                       stroke="#C9A84C" strokeWidth="1.2" fill="none" opacity="0.8"/>
        {/* Collar ring */}
        <ellipse cx="34" cy="152" rx="7" ry="5" stroke="#C9A84C" strokeWidth="2" fill="rgba(201,168,76,0.15)"/>
        {/* Handle */}
        <line x1="34" y1="157" x2="34" y2="258" stroke="#C9A84C" strokeWidth="3" strokeLinecap="round"/>
        {/* Grip wraps */}
        {[180, 196, 212, 228, 244].map((y) => (
          <line key={y} x1="28" y1={y} x2="40" y2={y} stroke="#C9A84C" strokeWidth="1.2" opacity="0.7"/>
        ))}
        {/* Hook end */}
        <path d="M27 252 Q34 265 41 252" stroke="#C9A84C" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
      </svg>

      {/* === Spatula — bottom-right === */}
      <svg
        aria-hidden="true"
        viewBox="0 0 58 330"
        fill="none"
        className="hidden xl:block"
        style={{
          position: 'absolute', bottom: '14%', right: '7.5%',
          width: '38px', height: '215px',
          zIndex: 1, pointerEvents: 'none', opacity: 0.52,
          transform: 'rotate(-19deg)',
        }}
      >
        {/* Head */}
        <rect x="5" y="5" width="48" height="72" rx="4" stroke="#C9A84C" strokeWidth="2" fill="rgba(201,168,76,0.08)"/>
        <path d="M5 16 Q29 7 53 16" stroke="#C9A84C" strokeWidth="1" fill="none" opacity="0.7"/>
        {/* Perforations 3×5 */}
        {[22, 34, 46, 58, 70].map((y) =>
          [17, 29, 41].map((x) => (
            <circle key={`${x}-${y}`} cx={x} cy={y} r="3" stroke="#C9A84C" strokeWidth="1.2" fill="none"/>
          ))
        )}
        {/* Neck taper */}
        <path d="M24 77 L22 100 M34 77 L36 100" stroke="#C9A84C" strokeWidth="2"/>
        {/* Handle */}
        <rect x="17" y="100" width="24" height="210" rx="5" stroke="#C9A84C" strokeWidth="2" fill="rgba(201,168,76,0.08)"/>
        {[122, 148, 174, 200, 226, 252].map((y) => (
          <line key={y} x1="22" y1={y} x2="36" y2={y} stroke="#C9A84C" strokeWidth="1" opacity="0.6"/>
        ))}
        {/* End cap */}
        <rect x="17" y="305" width="24" height="10" rx="4" stroke="#C9A84C" strokeWidth="1" fill="rgba(201,168,76,0.1)"/>
      </svg>

      {/* === Tongs — bottom-left (2xl+) === */}
      <svg
        aria-hidden="true"
        viewBox="0 0 70 280"
        fill="none"
        className="hidden 2xl:block"
        style={{
          position: 'absolute', bottom: '18%', left: '5.5%',
          width: '48px', height: '185px',
          zIndex: 1, pointerEvents: 'none', opacity: 0.52,
          transform: 'rotate(12deg)',
        }}
      >
        {/* Arms */}
        <path d="M22 8 Q20 80 16 268"  stroke="#C9A84C" strokeWidth="2"   fill="none" strokeLinecap="round"/>
        <path d="M48 8 Q50 80 54 268"  stroke="#C9A84C" strokeWidth="2"   fill="none" strokeLinecap="round"/>
        {/* Spring arc */}
        <path d="M22 8 Q35 28 48 8"    stroke="#C9A84C" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
        {/* Ring loop */}
        <ellipse cx="35" cy="16" rx="16" ry="10" stroke="#C9A84C" strokeWidth="1.5" fill="none"/>
        {/* Cross bar */}
        <line x1="18" y1="118" x2="52" y2="118" stroke="#C9A84C" strokeWidth="1.5" strokeDasharray="4 3"/>
        {/* Grip tips */}
        <path d="M16 268 Q19 278 22 268" stroke="#C9A84C" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
        <path d="M54 268 Q51 278 48 268" stroke="#C9A84C" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
      </svg>

      {/* === Commercial Stockpot — left side, right of knife === */}
      <svg
        aria-hidden="true"
        viewBox="0 0 200 265"
        fill="none"
        className="hidden xl:block"
        style={{
          position: 'absolute', top: '10%', left: '7%',
          width: '148px', height: '192px',
          zIndex: 1, pointerEvents: 'none', opacity: 0.48,
          transform: 'rotate(-8deg)',
        }}
      >
        {/* Lid knob cap */}
        <ellipse cx="100" cy="22" rx="11" ry="5" stroke="#C9A84C" strokeWidth="1.5" fill="rgba(201,168,76,0.18)"/>
        {/* Lid knob stem */}
        <rect x="93" y="22" width="14" height="13" rx="3" stroke="#C9A84C" strokeWidth="1.5" fill="rgba(201,168,76,0.12)"/>
        {/* Lid dome arc */}
        <path d="M19 74 Q100 38 181 74" stroke="#C9A84C" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
        {/* Lid rim ellipse */}
        <ellipse cx="100" cy="76" rx="82" ry="19" stroke="#C9A84C" strokeWidth="2" fill="rgba(201,168,76,0.07)"/>
        {/* Lid inner dashed ring */}
        <ellipse cx="100" cy="66" rx="60" ry="12" stroke="#C9A84C" strokeWidth="1" strokeDasharray="6 7" fill="none" opacity="0.65"/>
        {/* Pot top rim */}
        <ellipse cx="100" cy="82" rx="80" ry="17" stroke="#C9A84C" strokeWidth="2" fill="rgba(201,168,76,0.04)"/>
        {/* Pot side walls */}
        <line x1="20" y1="82" x2="17" y2="248" stroke="#C9A84C" strokeWidth="2.2"/>
        <line x1="180" y1="82" x2="183" y2="248" stroke="#C9A84C" strokeWidth="2.2"/>
        {/* Pot bottom ellipse */}
        <ellipse cx="100" cy="248" rx="83" ry="17" stroke="#C9A84C" strokeWidth="2" fill="rgba(201,168,76,0.05)"/>
        {/* Bottom inner rim detail */}
        <ellipse cx="100" cy="248" rx="70" ry="11" stroke="#C9A84C" strokeWidth="0.8" fill="none" opacity="0.5"/>
        {/* Left handle loop */}
        <path d="M22 104 Q4 99 3 114 Q2 129 20 124" stroke="#C9A84C" strokeWidth="2.2" fill="none" strokeLinecap="round"/>
        <line x1="20" y1="104" x2="20" y2="124" stroke="#C9A84C" strokeWidth="1" opacity="0.4"/>
        {/* Right handle loop */}
        <path d="M178 104 Q196 99 197 114 Q198 129 180 124" stroke="#C9A84C" strokeWidth="2.2" fill="none" strokeLinecap="round"/>
        <line x1="180" y1="104" x2="180" y2="124" stroke="#C9A84C" strokeWidth="1" opacity="0.4"/>
        {/* Volume level ellipses */}
        {[128, 165, 204].map((y) => (
          <ellipse key={y} cx="100" cy={y} rx="58" ry="10" stroke="#C9A84C" strokeWidth="0.8" fill="none" opacity="0.4"/>
        ))}
        {/* Weld seam band */}
        <path d="M17 150 Q100 162 183 150" stroke="#C9A84C" strokeWidth="1.2" fill="none" opacity="0.55" strokeDasharray="4 6"/>
      </svg>

      {/* === Animated Steam Wisps — left side, above burner === */}
      <svg
        aria-hidden="true"
        viewBox="0 0 200 200"
        fill="none"
        className="hidden lg:block"
        style={{
          position: 'absolute', bottom: '22%', left: '2%',
          width: '190px', height: '185px',
          zIndex: 1, pointerEvents: 'none',
        }}
      >
        {[
          { d: 'M55 190 C60 162 44 142 54 116 C64 90 49 70 57 44',    delay: '0s',   dur: '3.8s' },
          { d: 'M100 190 C93 160 110 138 97 112 C84 86 102 62 94 30',  delay: '1.3s', dur: '4.2s' },
          { d: 'M145 190 C153 163 136 141 148 115 C160 89 143 63 151 36', delay: '2.5s', dur: '3.6s' },
        ].map(({ d, delay, dur }, i) => (
          <path
            key={i}
            d={d}
            stroke="#C9A84C"
            strokeWidth="1.5"
            fill="none"
            strokeLinecap="round"
            style={{ animation: `hero-steam ${dur} ease-in-out ${delay} infinite` }}
          />
        ))}
      </svg>

      {/* === Large Commercial Range Silhouette — bottom-centre backdrop === */}
      <svg
        aria-hidden="true"
        viewBox="0 0 900 360"
        fill="none"
        className="hidden lg:block"
        style={{
          position: 'absolute', bottom: '0', left: '50%',
          transform: 'translateX(-50%)',
          width: '80%', maxWidth: '900px',
          zIndex: 1, pointerEvents: 'none', opacity: 0.13,
        }}
      >
        {/* Range body */}
        <rect x="8" y="70" width="884" height="288" rx="6" stroke="#C9A84C" strokeWidth="2.5" fill="rgba(201,168,76,0.025)"/>
        {/* Control panel */}
        <rect x="8" y="30" width="884" height="42"  rx="4" stroke="#C9A84C" strokeWidth="2"   fill="rgba(201,168,76,0.04)"/>
        {/* Knobs */}
        {[80, 175, 270, 365, 460, 555, 650, 745, 838].map((x) => (
          <g key={x}>
            <circle cx={x} cy={51} r="13" stroke="#C9A84C" strokeWidth="1.5" fill="rgba(201,168,76,0.05)"/>
            <circle cx={x} cy={51} r="5"  fill="rgba(201,168,76,0.12)"/>
            <line x1={x} y1={38} x2={x} y2={44} stroke="#C9A84C" strokeWidth="1.2"/>
          </g>
        ))}
        {/* 4 burners — top-left cooking zone */}
        {[{ cx: 130, cy: 170 }, { cx: 300, cy: 170 }, { cx: 130, cy: 278 }, { cx: 300, cy: 278 }].map(({ cx, cy }) => (
          <g key={`${cx}-${cy}`}>
            <circle cx={cx} cy={cy} r="58" stroke="#C9A84C" strokeWidth="1.5"/>
            <circle cx={cx} cy={cy} r="42" stroke="#C9A84C" strokeWidth="0.75" strokeDasharray="4 6"/>
            <circle cx={cx} cy={cy} r="26" stroke="#C9A84C" strokeWidth="1.5"/>
            <circle cx={cx} cy={cy} r="12" stroke="#C9A84C" strokeWidth="1" fill="rgba(201,168,76,0.08)"/>
            {[0, 60, 120, 180, 240, 300].map((deg) => {
              const rad = deg * Math.PI / 180;
              return <line key={deg}
                x1={r(cx + 12 * Math.cos(rad))} y1={r(cy + 12 * Math.sin(rad))}
                x2={r(cx + 58 * Math.cos(rad))} y2={r(cy + 58 * Math.sin(rad))}
                stroke="#C9A84C" strokeWidth="0.75"
              />;
            })}
          </g>
        ))}
        {/* Oven section — right half */}
        <rect x="400" y="78"  width="484" height="200" rx="3" stroke="#C9A84C" strokeWidth="1"/>
        {/* Oven window */}
        <rect x="440" y="92"  width="180" height="150" rx="6" stroke="#C9A84C" strokeWidth="1" fill="rgba(201,168,76,0.02)"/>
        {/* Oven handle */}
        <line x1="420" y1="168" x2="640" y2="168" stroke="#C9A84C" strokeWidth="2.5"/>
        {/* Griddle surface */}
        <rect x="645" y="82"  width="230" height="190" rx="3" stroke="#C9A84C" strokeWidth="1"/>
        {[100, 118, 136, 154, 172, 190, 208, 226, 244].map((y) => (
          <line key={y} x1="648" y1={y} x2="872" y2={y} stroke="#C9A84C" strokeWidth="1" opacity="0.7"/>
        ))}
        {/* Backsplash / shelf */}
        <rect x="8" y="2" width="884" height="30" rx="3" stroke="#C9A84C" strokeWidth="1" fill="rgba(201,168,76,0.015)"/>
        {/* Drip tray */}
        <rect x="8" y="356" width="884" height="6" rx="2" stroke="#C9A84C" strokeWidth="1" fill="rgba(201,168,76,0.05)"/>
      </svg>

      {/* ══════════════════════════════════════════════════════════════════════
          CONTENT — centered
         ══════════════════════════════════════════════════════════════════════ */}
      <div
        className="relative container mx-auto"
        style={{
          paddingTop: '3rem',
          paddingBottom: '5rem',
          zIndex: 2,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',   /* centres every child block horizontally */
        }}
      >

        {/* ① ISO pill — eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.08 }}
          className="flex flex-wrap items-center justify-center gap-3"
          style={{ marginBottom: '1.75rem' }}
        >
          <span
            className="inline-flex items-center gap-1.5 rounded-full"
            style={{
              padding: '0.3rem 0.9rem',
              background: 'rgba(201,168,76,0.13)',
              border: '1px solid rgba(201,168,76,0.32)',
              fontSize: '0.6875rem',
              fontFamily: 'var(--font-inter)',
              fontWeight: 700,
              letterSpacing: '0.16em',
              textTransform: 'uppercase',
              color: 'var(--gold-bright)',
            }}
          >
            <Shield size={10} aria-hidden="true" />
            ISO 9001 Certified
          </span>
          <span
            style={{
              fontSize: '0.6875rem',
              fontFamily: 'var(--font-inter)',
              color: 'rgba(201,168,76,0.45)',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              fontWeight: 600,
            }}
          >
            Founded 2019 · Delhi, India
          </span>
        </motion.div>

        {/* ② H1 ---------------------------------------------------------- */}
        <motion.h1
          style={{
            fontFamily: 'var(--font-playfair)',
            fontWeight: 700,
            fontSize: 'clamp(2rem, 4.8vw, 3.75rem)',
            lineHeight: 1.12,
            letterSpacing: '-0.025em',
            color: '#F5F0E8',
            textAlign: 'center',
            width: '100%',
          }}
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.18 }}
        >
          <span
            className="gold-shimmer"
            style={{fontWeight: 800 }}
          >
            Commercial Kitchen Equipment
          </span>
          <br />
          Manufacturer in India
        </motion.h1>

        {/* ③ Gold rule --------------------------------------------------- */}
        <motion.div
          className="flex justify-center"
          style={{ marginTop: '1.5rem' }}
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.44, ease: 'easeOut' }}
          aria-hidden="true"
        >
          <div style={{
            width: '72px',
            height: '3px',
            background: 'linear-gradient(90deg, var(--gold-bright), var(--gold), var(--gold-deep))',
            borderRadius: '2px',
          }} />
        </motion.div>

        {/* ④ Sub-headline ------------------------------------------------ */}
        <motion.div
          style={{ marginTop: '1.5rem', display: 'flex', justifyContent: 'center', width: '100%' }}
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.34 }}
        >
          <p
            style={{
              fontFamily: 'var(--font-inter)',
              fontSize: 'clamp(0.9375rem, 1.25vw, 1.0625rem)',
              color: 'rgba(245,240,232,0.60)',
              lineHeight: 1.72,
              maxWidth: '600px',
              textAlign: 'center',
            }}
          >
            Trusted by{' '}
            <strong style={{ color: 'var(--gold-light)', fontWeight: 600 }}>
              Hyatt · Radisson Blu · ITC Welcomhotel · Crowne Plaza
            </strong>
            {' '}and 200+ hotels, hospitals &amp; institutions — engineered &amp; installed from our Delhi factory.
          </p>
        </motion.div>

        {/* ④-b Citable AEO proof paragraph ------------------------------ */}
        <motion.div
          style={{ marginTop: '1.25rem', display: 'flex', justifyContent: 'center', width: '100%' }}
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.42 }}
        >
          <p
            style={{
              fontFamily: 'var(--font-inter)',
              fontSize: 'clamp(0.8125rem, 1vw, 0.9375rem)',
              color: 'rgba(245,240,232,0.38)',
              lineHeight: 1.75,
              maxWidth: '580px',
              textAlign: 'center',
            }}
          >
            VSD International is an ISO 9001-certified commercial kitchen equipment manufacturer in Delhi, supplying and installing turnkey kitchens for hotels, hospitals and cloud kitchens across India — including a ₹42-lakh kitchen at Hyatt Regency Delhi, commissioned in 21 days.
          </p>
        </motion.div>

        {/* ⑤ Trust microbadges ------------------------------------------- */}
        <motion.div
          className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2"
          style={{ marginTop: '1.25rem', width: '100%', textAlign: 'center' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          {[
            { icon: Clock,  text: '7+ Years Experience' },
            { icon: Award,  text: 'Rational & Robot Coupe Dealer' },
            { icon: Star,   text: '5★ · 312 Reviews' },
          ].map(({ icon: Icon, text }) => (
            <div
              key={text}
              className="flex items-center gap-1.5"
              style={{
                color: 'rgba(245,240,232,0.38)',
                fontSize: '0.8125rem',
                fontFamily: 'var(--font-inter)',
              }}
            >
              <Icon size={12} style={{ color: 'var(--gold)', flexShrink: 0 }} aria-hidden="true" />
              <span>{text}</span>
            </div>
          ))}
        </motion.div>

        {/* ⑥ CTA Buttons ------------------------------------------------- */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          style={{ marginTop: '2.5rem' }}
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <button
            onClick={() => window.dispatchEvent(new CustomEvent('vsd:open-enquiry'))}
            className="btn-gold inline-flex items-center justify-center gap-2"
            style={{ minHeight: '3.125rem', paddingLeft: '2rem', paddingRight: '2rem', fontSize: '0.9375rem' }}
            aria-label="Get free kitchen layout and quote from VSD International"
          >
            Get Free Kitchen Layout &amp; Quote
            <ArrowRight size={15} aria-hidden="true" />
          </button>

          {/* View Projects — desktop only (mobile uses fixed footer) */}
          <div className="hidden sm:contents">
            <Link
              href="/projects"
              className="btn-ghost-dark inline-flex items-center justify-center gap-2"
              style={{ minHeight: '3.125rem', fontSize: '0.9375rem' }}
              aria-label="View completed VSD International projects"
            >
              View Our Projects
            </Link>
          </div>
        </motion.div>

        {/* ⑦ Price anchor ------------------------------------------------ */}
        <motion.p
          style={{
            marginTop: '1rem',
            color: 'rgba(245,240,232,0.28)',
            fontSize: '0.8125rem',
            fontFamily: 'var(--font-inter)',
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.76 }}
        >
          Projects from{' '}
          <strong style={{ color: 'var(--gold)', fontWeight: 600 }}>₹8 Lakhs</strong>
          {' '}· Currently accepting Q3 2026 projects
        </motion.p>

      </div>

      {/* -- Scroll indicator ---------------------------------------------- */}
      <motion.div
        className="absolute bottom-7 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ delay: 1.2, duration: 0.7 }}
        aria-hidden="true"
        style={{ zIndex: 2 }}
      >
        <div style={{
          width: '1px',
          height: '36px',
          background: 'linear-gradient(to bottom, var(--gold-bright), transparent)',
          animation: 'scroll-bounce 2.2s ease-in-out infinite',
        }} />
        <span style={{
          fontSize: '0.6rem',
          letterSpacing: '0.22em',
          color: 'var(--gold)',
          textTransform: 'uppercase',
          fontFamily: 'var(--font-inter)',
          fontWeight: 600,
        }}>
          Scroll
        </span>
      </motion.div>
    </section>
  );
}
