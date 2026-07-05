import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Check, Home, Clock, ShieldCheck, ClipboardCheck, PhoneCall, FileText } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Thank You — Your Request Is Received | VSD International',
  description: 'Thank you for contacting VSD International. A kitchen expert will call you within 1 business hour.',
  robots: { index: false, follow: false },
};

const GOLD = '#C9A84C';
const GOLD_BRIGHT = '#F0C442';
const GOLD_DEEP = '#A67C32';
const GOLD_LIGHT = '#E0B454';
const ON_DARK = '#F5F0E8';
const GREEN = '#1F9D55';
const GREEN_LIGHT = '#34D07A';
const GREEN_DEEP = '#157A40';

const STEPS = [
  { Icon: ClipboardCheck, title: 'We review your details', desc: 'Our team studies your requirement right away.' },
  { Icon: PhoneCall, title: 'An expert calls you', desc: 'Within 1 business hour, on your number.' },
  { Icon: FileText, title: 'Free layout + quote', desc: 'A CAD layout and a fixed, itemised quote.' },
];

const TRUST = [
  { Icon: ShieldCheck, label: 'ISO 9001 Certified' },
  { Icon: Clock, label: 'Reply in 1 business hour' },
  { Icon: Check, label: '200+ Kitchens Delivered' },
];

export default function ThankYouPage() {
  return (
    <main
      className="ty-main"
      style={{
        minHeight: '100dvh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '1.1rem',
        position: 'relative',
        overflow: 'hidden',
        background:
          'radial-gradient(ellipse 90% 55% at 50% -8%, rgba(240,196,66,0.18), transparent 60%), radial-gradient(ellipse 70% 55% at 50% 116%, rgba(166,124,50,0.16), transparent 62%), linear-gradient(180deg, #0B0A07 0%, #08080A 45%, #060604 100%)',
      }}
    >
      {/* Ambient gold orbs */}
      <div
        aria-hidden
        style={{
          position: 'absolute', width: '26rem', height: '26rem', top: '-8rem', left: '-6rem',
          borderRadius: '50%', filter: 'blur(70px)', pointerEvents: 'none',
          background: 'radial-gradient(circle, rgba(201,168,76,0.22), transparent 70%)',
          animation: 'ty-float-a 9s ease-in-out infinite',
        }}
      />
      <div
        aria-hidden
        style={{
          position: 'absolute', width: '22rem', height: '22rem', bottom: '-7rem', right: '-5rem',
          borderRadius: '50%', filter: 'blur(70px)', pointerEvents: 'none',
          background: 'radial-gradient(circle, rgba(240,196,66,0.14), transparent 70%)',
          animation: 'ty-float-b 11s ease-in-out infinite',
        }}
      />
      {/* Faint grid texture */}
      <div
        aria-hidden
        style={{
          position: 'absolute', inset: 0, opacity: 0.05, pointerEvents: 'none',
          backgroundImage:
            'linear-gradient(rgba(201,168,76,0.9) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,0.9) 1px, transparent 1px)',
          backgroundSize: '46px 46px',
          WebkitMaskImage: 'radial-gradient(circle at 50% 42%, black, transparent 70%)',
          maskImage: 'radial-gradient(circle at 50% 42%, black, transparent 70%)',
        }}
      />

      {/* Glass card */}
      <div
        className="ty-card"
        style={{
          position: 'relative',
          width: '100%',
          maxWidth: '38rem',
          textAlign: 'center',
          borderRadius: '24px',
          background: 'linear-gradient(180deg, rgba(30,26,18,0.92), rgba(13,11,7,0.95))',
          border: '1px solid rgba(201,168,76,0.28)',
          boxShadow:
            '0 40px 110px rgba(0,0,0,0.6), 0 0 60px rgba(201,168,76,0.09), inset 0 1px 0 rgba(255,255,255,0.05)',
          backdropFilter: 'blur(14px)',
          overflow: 'hidden',
          animation: 'ty-in 0.7s cubic-bezier(0.22,1,0.36,1) both',
        }}
      >
        {/* Top gold accent */}
        <span
          aria-hidden
          style={{
            position: 'absolute', top: 0, left: 0, right: 0, height: '3px',
            background: `linear-gradient(90deg, transparent, ${GOLD_BRIGHT}, ${GOLD}, ${GOLD_BRIGHT}, transparent)`,
          }}
        />

        {/* Logo */}
        <Image
          src="/VSD_LOGO_DARK.webp"
          alt="VSD International"
          width={168}
          height={100}
          priority
          style={{ width: 'auto', height: 'auto', maxWidth: '118px', margin: '0 auto 1.1rem', display: 'block' }}
        />

        {/* Animated check */}
        <div style={{ position: 'relative', width: '56px', height: '56px', margin: '0 auto 1rem' }}>
          <span
            aria-hidden
            style={{
              position: 'absolute', inset: 0, margin: 'auto',
              width: '56px', height: '56px',
              borderRadius: '50%', border: `1.5px solid ${GREEN}55`,
              animation: 'ty-ring 2.4s ease-out 0.5s infinite',
            }}
          />
          <span
            style={{
              position: 'absolute', inset: 0, margin: 'auto',
              width: '42px', height: '42px', borderRadius: '50%',
              display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff',
              background: `linear-gradient(135deg, ${GREEN_LIGHT}, ${GREEN}, ${GREEN_DEEP})`,
              boxShadow: `0 8px 22px ${GREEN}70, inset 0 1px 0 rgba(255,255,255,0.35)`,
              animation: 'ty-pop 0.6s cubic-bezier(0.22,1.5,0.36,1) 0.15s both',
            }}
          >
            <Check size={22} strokeWidth={3} style={{ display: 'block' }} />
          </span>
        </div>

        {/* Eyebrow */}
        <p style={{ fontFamily: 'var(--font-inter)', fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: GOLD, marginBottom: '0.55rem' }}>
          Request Received
        </p>

        {/* Title */}
        <h1 style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(1.45rem, 3.8vw, 2.1rem)', fontWeight: 800, lineHeight: 1.14, letterSpacing: '-0.02em', color: ON_DARK, margin: '0 auto 0.7rem', maxWidth: '20ch' }}>
          Thank You! Your Enquiry Is <span className="lp-gold-text">Confirmed</span>
        </h1>

        {/* Sub */}
        <p style={{ fontFamily: 'var(--font-inter)', fontSize: '0.9rem', lineHeight: 1.6, color: 'rgba(245,240,232,0.62)', maxWidth: '30rem', margin: '0 auto 1.25rem' }}>
          Sit back and relax — a kitchen expert will personally call you within{' '}
          <strong style={{ color: GOLD_BRIGHT, fontWeight: 700 }}>1 business hour</strong> with your free
          layout and an itemised quote.
        </p>

        {/* What happens next — 3 steps */}
        <div
          className="ty-steps"
          style={{
            maxWidth: '33rem',
            margin: '0 auto 1.25rem',
          }}
        >
          {STEPS.map(({ Icon, title, desc }, i) => (
            <div
              key={title}
              className="ty-step-card"
              style={{
                position: 'relative',
                padding: '1.15rem 0.8rem 0.9rem',
                borderRadius: '13px',
                background: 'rgba(255,255,255,0.035)',
                border: '1px solid rgba(201,168,76,0.2)',
                textAlign: 'center',
              }}
            >
              <span
                style={{
                  position: 'absolute', top: '-0.6rem', left: '50%', transform: 'translateX(-50%)',
                  width: '1.35rem', height: '1.35rem', borderRadius: '50%',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontFamily: 'var(--font-inter)', fontSize: '0.66rem', fontWeight: 800, color: '#1A1508',
                  background: `linear-gradient(135deg, ${GOLD_LIGHT}, ${GOLD_DEEP})`,
                  boxShadow: `0 3px 10px ${GOLD}73`,
                }}
              >
                {i + 1}
              </span>
              <span style={{ display: 'inline-flex', color: GOLD_BRIGHT, marginBottom: '0.45rem' }}>
                <Icon size={20} />
              </span>
              <h3 style={{ fontFamily: 'var(--font-inter)', fontSize: '0.82rem', fontWeight: 700, color: ON_DARK, marginBottom: '0.2rem' }}>
                {title}
              </h3>
              <p style={{ fontFamily: 'var(--font-inter)', fontSize: '0.72rem', lineHeight: 1.45, color: 'rgba(245,240,232,0.5)' }}>
                {desc}
              </p>
            </div>
          ))}
        </div>

        {/* Home link (navigation, not a CTA) */}
        <Link
          href="/lp/commercial-kitchen-setup"
          style={{
            display: 'inline-flex', alignItems: 'center', gap: '0.45rem',
            fontFamily: 'var(--font-inter)', fontSize: '0.88rem', fontWeight: 600,
            color: ON_DARK, textDecoration: 'none',
            padding: '0.5rem 1.3rem', borderRadius: '100px',
            border: `1px solid ${GOLD}59`, background: 'rgba(201,168,76,0.08)',
          }}
        >
          <Home size={15} style={{ color: GOLD }} /> Back to Home Page
        </Link>
      </div>

      {/* Trust line */}
      <div style={{ position: 'relative', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '0.6rem 1.5rem' }}>
        {TRUST.map(({ Icon, label }) => (
          <span key={label} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', fontFamily: 'var(--font-inter)', fontSize: '0.75rem', fontWeight: 500, color: 'rgba(245,240,232,0.5)' }}>
            <Icon size={13} style={{ color: GOLD, flexShrink: 0 }} /> {label}
          </span>
        ))}
      </div>
    </main>
  );
}
