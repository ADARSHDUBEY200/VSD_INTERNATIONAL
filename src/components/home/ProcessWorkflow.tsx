import { Fragment } from 'react';
import Link from 'next/link';
import {
  MapPin, PenTool, Package, Truck, Wrench, Shield, ArrowRight,
} from 'lucide-react';

const STEPS = [
  {
    num: '01', Icon: MapPin,
    title: 'Free Site Visit',
    desc:  'Our engineer visits your site to measure space, utilities, ventilation, and workflow — completely free, zero obligation.',
    time:  'Day 1 – 2',
    tag:   'Free',
  },
  {
    num: '02', Icon: PenTool,
    title: 'Kitchen Layout Design',
    desc:  'CAD-based kitchen layout tailored to your menu, throughput, and space. You review and approve before any order is placed.',
    time:  'Day 2 – 5',
    tag:   null,
  },
  {
    num: '03', Icon: Package,
    title: 'Equipment Selection',
    desc:  'We recommend best-fit equipment from domestic and international brands — Rational, Robot Coupe, Frymaster — within budget.',
    time:  'Day 3 – 6',
    tag:   null,
  },
  {
    num: '04', Icon: Truck,
    title: 'Supply & Delivery',
    desc:  'Equipment dispatched from our Delhi warehouses or imported, with secure packaging and insured door-step delivery.',
    time:  'Day 7 – 18',
    tag:   null,
  },
  {
    num: '05', Icon: Wrench,
    title: 'Installation & Testing',
    desc:  'Certified engineers install, test, and commission every unit. Full team training and formal sign-off handover included.',
    time:  'Day 18 – 21',
    tag:   '21-Day Promise',
  },
  {
    num: '06', Icon: Shield,
    title: 'AMC & Support',
    desc:  'Annual Maintenance Contract, genuine OEM parts, dedicated service hotline, and priority engineer visits across India.',
    time:  'Ongoing',
    tag:   'AMC Available',
  },
];

export default function ProcessWorkflow() {
  return (
    <section
      aria-labelledby="process-heading"
      style={{
        background: '#FFFFFF',
        padding: 'clamp(4.5rem, 8vw, 6.5rem) 0',
        borderTop: '1px solid var(--border)',
        borderBottom: '1px solid var(--border)',
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      <div className="container mx-auto" style={{ position: 'relative', zIndex: 1 }}>

        {/* Header */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', marginBottom: 'clamp(3rem, 5vw, 4.5rem)' }}>
          <p className="section-label" style={{ marginBottom: '0.75rem' }}>Our Process</p>
          <h2
            id="process-heading"
            style={{
              fontFamily: 'var(--font-playfair)',
              fontWeight: 800,
              fontSize: 'clamp(1.875rem, 3.2vw, 2.875rem)',
              color: 'var(--text-dark)',
              lineHeight: 1.1,
              letterSpacing: '-0.025em',
            }}
          >
            From First Call to Full Kitchen —{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, var(--gold-deep) 0%, var(--gold) 50%, var(--gold-bright) 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                fontStyle: 'italic',
              }}
            >
              In Just 21 Days
            </span>
          </h2>

          <div aria-hidden="true" style={{ width: 60, height: 3, background: 'linear-gradient(90deg, var(--gold-bright), var(--gold), var(--gold-deep))', borderRadius: 2, marginTop: '1.25rem' }} />

          <p style={{ marginTop: '1.125rem', fontFamily: 'var(--font-inter)', fontSize: '1rem', color: 'var(--text-muted)', lineHeight: 1.75, maxWidth: '520px' }}>
            Every project follows the same proven 6-step process — transparent, on-time, no surprises.
          </p>
        </div>

        {/* Desktop — two rows of 3 steps with horizontal connectors */}
        <div className="hidden lg:block">

          {/* Row 1: Steps 01–03 */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', alignItems: 'flex-start', marginBottom: '2rem' }}>
            {STEPS.slice(0, 3).map((step, idx) => {
              const { Icon } = step;
              const isFirst = idx === 0;
              return (
                <Fragment key={step.num}>
                  {/* Step */}
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      textAlign: 'center',
                      padding: '0 1rem',
                    }}
                  >
                    {/* Tag above */}
                    <div style={{ height: '1.75rem', marginBottom: '0.75rem', display: 'flex', alignItems: 'center' }}>
                      {step.tag && (
                        <span
                          style={{
                            padding: '0.2rem 0.65rem',
                            borderRadius: '999px',
                            background: 'linear-gradient(135deg, var(--gold-light), var(--gold))',
                            color: '#1A1208',
                            fontFamily: 'var(--font-inter)',
                            fontSize: '0.6rem',
                            fontWeight: 700,
                            letterSpacing: '0.12em',
                            textTransform: 'uppercase' as const,
                            boxShadow: '0 2px 8px rgba(201,168,76,0.20)',
                          }}
                        >
                          {step.tag}
                        </span>
                      )}
                    </div>

                    {/* Circle node */}
                    <div
                      style={{
                        width: 76,
                        height: 76,
                        borderRadius: '50%',
                        background: isFirst
                          ? 'linear-gradient(135deg, var(--gold-light) 0%, var(--gold) 60%, var(--gold-deep) 100%)'
                          : '#FBF7ED',
                        border: `2px solid ${isFirst ? 'var(--gold)' : 'rgba(201,168,76,0.35)'}`,
                        display: 'flex',
                        flexDirection: 'column' as const,
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '0.15rem',
                        boxShadow: isFirst
                          ? '0 6px 24px rgba(201,168,76,0.30)'
                          : '0 2px 12px rgba(201,168,76,0.10)',
                      }}
                    >
                      <Icon
                        size={22}
                        strokeWidth={1.6}
                        style={{ color: isFirst ? '#1A1208' : 'var(--gold-deep)' }}
                        aria-hidden="true"
                      />
                      <span
                        style={{
                          fontFamily: 'var(--font-inter)',
                          fontSize: '0.5rem',
                          fontWeight: 800,
                          letterSpacing: '0.1em',
                          color: isFirst ? '#1A1208' : 'var(--gold-deep)',
                          lineHeight: 1,
                        }}
                      >
                        {step.num}
                      </span>
                    </div>

                    {/* Title */}
                    <h3
                      style={{
                        fontFamily: 'var(--font-playfair)',
                        fontWeight: 700,
                        fontSize: '1rem',
                        color: 'var(--text-dark)',
                        lineHeight: 1.3,
                        marginTop: '1rem',
                        marginBottom: '0.5rem',
                      }}
                    >
                      {step.title}
                    </h3>

                    {/* Description */}
                    <p
                      style={{
                        fontFamily: 'var(--font-inter)',
                        fontSize: '0.8125rem',
                        color: 'var(--text-muted)',
                        lineHeight: 1.65,
                        maxWidth: '200px',
                        marginBottom: '0.625rem',
                      }}
                    >
                      {step.desc}
                    </p>

                    {/* Time badge */}
                    <span
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        padding: '0.2rem 0.65rem',
                        borderRadius: '999px',
                        background: 'rgba(201,168,76,0.07)',
                        border: '1px solid rgba(201,168,76,0.20)',
                        fontFamily: 'var(--font-inter)',
                        fontSize: '0.6625rem',
                        fontWeight: 600,
                        color: 'var(--gold-deep)',
                        letterSpacing: '0.05em',
                      }}
                    >
                      {step.time}
                    </span>
                  </div>

                  {/* Arrow connector (between steps, not after last) */}
                  {idx < 2 && (
                    <div
                      key={`arrow-${step.num}`}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        paddingTop: '2.5rem',
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: 0 }}>
                        <div
                          style={{
                            width: 40,
                            height: 2,
                            background: 'linear-gradient(90deg, rgba(201,168,76,0.30), rgba(201,168,76,0.70))',
                          }}
                        />
                        <div
                          style={{
                            width: 0,
                            height: 0,
                            borderTop: '5px solid transparent',
                            borderBottom: '5px solid transparent',
                            borderLeft: '8px solid rgba(201,168,76,0.70)',
                          }}
                        />
                      </div>
                    </div>
                  )}
                </Fragment>
              );
            })}
          </div>

          {/* U-turn connector */}
          <div style={{ display: 'flex', justifyContent: 'flex-end', paddingRight: '2rem', marginBottom: '1rem' }}>
            <svg aria-hidden="true" width="64" height="44" viewBox="0 0 64 44" fill="none">
              <path
                d="M4 4 Q58 4 58 22 Q58 40 4 40"
                stroke="rgba(201,168,76,0.55)"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
              />
              <polygon points="4,32 12,40 4,48" fill="rgba(201,168,76,0.70)" transform="translate(0,-8)" />
            </svg>
          </div>

          {/* Row 2: Steps 04–06 (reversed layout: arrows go right to left visually, left to right in DOM) */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', alignItems: 'flex-start' }}>
            {STEPS.slice(3).map((step, stepIdx) => {
              const { Icon } = step;
              const isLast = stepIdx === 2;
              return (
                <Fragment key={step.num}>
                  {/* Step */}
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      textAlign: 'center',
                      padding: '0 1rem',
                    }}
                  >
                    {/* Tag above */}
                    <div style={{ height: '1.75rem', marginBottom: '0.75rem', display: 'flex', alignItems: 'center' }}>
                      {step.tag && (
                        <span
                          style={{
                            padding: '0.2rem 0.65rem',
                            borderRadius: '999px',
                            background: isLast
                              ? 'linear-gradient(135deg, var(--gold-light), var(--gold))'
                              : 'rgba(201,168,76,0.10)',
                            border: isLast ? 'none' : '1px solid rgba(201,168,76,0.25)',
                            color: isLast ? '#1A1208' : 'var(--gold-deep)',
                            fontFamily: 'var(--font-inter)',
                            fontSize: '0.6rem',
                            fontWeight: 700,
                            letterSpacing: '0.12em',
                            textTransform: 'uppercase' as const,
                            boxShadow: isLast ? '0 2px 8px rgba(201,168,76,0.20)' : 'none',
                          }}
                        >
                          {step.tag}
                        </span>
                      )}
                    </div>

                    {/* Circle node */}
                    <div
                      style={{
                        width: 76,
                        height: 76,
                        borderRadius: '50%',
                        background: isLast
                          ? 'linear-gradient(135deg, var(--gold-light) 0%, var(--gold) 60%, var(--gold-deep) 100%)'
                          : '#FBF7ED',
                        border: `2px solid ${isLast ? 'var(--gold)' : 'rgba(201,168,76,0.35)'}`,
                        display: 'flex',
                        flexDirection: 'column' as const,
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '0.15rem',
                        boxShadow: isLast
                          ? '0 6px 24px rgba(201,168,76,0.30)'
                          : '0 2px 12px rgba(201,168,76,0.10)',
                      }}
                    >
                      <Icon
                        size={22}
                        strokeWidth={1.6}
                        style={{ color: isLast ? '#1A1208' : 'var(--gold-deep)' }}
                        aria-hidden="true"
                      />
                      <span
                        style={{
                          fontFamily: 'var(--font-inter)',
                          fontSize: '0.5rem',
                          fontWeight: 800,
                          letterSpacing: '0.1em',
                          color: isLast ? '#1A1208' : 'var(--gold-deep)',
                          lineHeight: 1,
                        }}
                      >
                        {step.num}
                      </span>
                    </div>

                    {/* Title */}
                    <h3
                      style={{
                        fontFamily: 'var(--font-playfair)',
                        fontWeight: 700,
                        fontSize: '1rem',
                        color: 'var(--text-dark)',
                        lineHeight: 1.3,
                        marginTop: '1rem',
                        marginBottom: '0.5rem',
                      }}
                    >
                      {step.title}
                    </h3>

                    {/* Description */}
                    <p
                      style={{
                        fontFamily: 'var(--font-inter)',
                        fontSize: '0.8125rem',
                        color: 'var(--text-muted)',
                        lineHeight: 1.65,
                        maxWidth: '200px',
                        marginBottom: '0.625rem',
                      }}
                    >
                      {step.desc}
                    </p>

                    {/* Time badge */}
                    <span
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        padding: '0.2rem 0.65rem',
                        borderRadius: '999px',
                        background: 'rgba(201,168,76,0.07)',
                        border: '1px solid rgba(201,168,76,0.20)',
                        fontFamily: 'var(--font-inter)',
                        fontSize: '0.6625rem',
                        fontWeight: 600,
                        color: 'var(--gold-deep)',
                        letterSpacing: '0.05em',
                      }}
                    >
                      {step.time}
                    </span>
                  </div>

                  {/* Arrow connector */}
                  {stepIdx < 2 && (
                    <div
                      key={`arrow2-${step.num}`}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        paddingTop: '2.5rem',
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: 0 }}>
                        <div
                          style={{
                            width: 40,
                            height: 2,
                            background: 'linear-gradient(90deg, rgba(201,168,76,0.30), rgba(201,168,76,0.70))',
                          }}
                        />
                        <div
                          style={{
                            width: 0,
                            height: 0,
                            borderTop: '5px solid transparent',
                            borderBottom: '5px solid transparent',
                            borderLeft: '8px solid rgba(201,168,76,0.70)',
                          }}
                        />
                      </div>
                    </div>
                  )}
                </Fragment>
              );
            })}
          </div>
        </div>

        {/* Mobile / Tablet — vertical timeline */}
        <div className="lg:hidden" style={{ position: 'relative', paddingLeft: '1.5rem' }}>

          {/* Vertical line */}
          <div
            aria-hidden="true"
            style={{
              position: 'absolute',
              top: '38px',
              bottom: '38px',
              left: '37px',
              width: '2px',
              background: 'linear-gradient(to bottom, var(--gold-bright), var(--gold) 70%, var(--gold-deep))',
              borderRadius: 1,
            }}
          />

          {STEPS.map((step, idx) => {
            const { Icon } = step;
            const isFirst = idx === 0;
            const isLast  = idx === STEPS.length - 1;
            const isHighlight = isFirst || isLast;

            return (
              <div
                key={step.num}
                style={{
                  display: 'flex',
                  gap: '1.25rem',
                  alignItems: 'flex-start',
                  marginBottom: idx < STEPS.length - 1 ? '2.25rem' : 0,
                  position: 'relative',
                }}
              >
                {/* Circle node */}
                <div style={{ flexShrink: 0, position: 'relative', zIndex: 1 }}>
                  <div
                    style={{
                      width: 76,
                      height: 76,
                      borderRadius: '50%',
                      background: isHighlight
                        ? 'linear-gradient(135deg, var(--gold-light) 0%, var(--gold) 60%, var(--gold-deep) 100%)'
                        : '#FBF7ED',
                      border: `2px solid ${isHighlight ? 'var(--gold)' : 'rgba(201,168,76,0.35)'}`,
                      display: 'flex',
                      flexDirection: 'column' as const,
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '0.15rem',
                      boxShadow: isHighlight
                        ? '0 6px 20px rgba(201,168,76,0.28)'
                        : '0 2px 10px rgba(201,168,76,0.08)',
                    }}
                  >
                    <Icon
                      size={22}
                      strokeWidth={1.6}
                      style={{ color: isHighlight ? '#1A1208' : 'var(--gold-deep)' }}
                      aria-hidden="true"
                    />
                    <span
                      style={{
                        fontFamily: 'var(--font-inter)',
                        fontSize: '0.5rem',
                        fontWeight: 800,
                        letterSpacing: '0.1em',
                        color: isHighlight ? '#1A1208' : 'var(--gold-deep)',
                        lineHeight: 1,
                      }}
                    >
                      {step.num}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div style={{ paddingTop: '0.5rem', flex: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '0.375rem' }}>
                    <h3
                      style={{
                        fontFamily: 'var(--font-playfair)',
                        fontWeight: 700,
                        fontSize: '1.0625rem',
                        color: 'var(--text-dark)',
                        lineHeight: 1.2,
                      }}
                    >
                      {step.title}
                    </h3>
                    {step.tag && (
                      <span
                        style={{
                          padding: '0.15rem 0.55rem',
                          borderRadius: '999px',
                          background: isHighlight
                            ? 'linear-gradient(135deg, var(--gold-light), var(--gold))'
                            : 'rgba(201,168,76,0.10)',
                          border: isHighlight ? 'none' : '1px solid rgba(201,168,76,0.25)',
                          color: isHighlight ? '#1A1208' : 'var(--gold-deep)',
                          fontFamily: 'var(--font-inter)',
                          fontSize: '0.58rem',
                          fontWeight: 700,
                          letterSpacing: '0.1em',
                          textTransform: 'uppercase' as const,
                        }}
                      >
                        {step.tag}
                      </span>
                    )}
                  </div>

                  <p
                    style={{
                      fontFamily: 'var(--font-inter)',
                      fontSize: '0.9rem',
                      color: 'var(--text-muted)',
                      lineHeight: 1.7,
                      marginBottom: '0.625rem',
                    }}
                  >
                    {step.desc}
                  </p>

                  <span
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      padding: '0.2rem 0.65rem',
                      borderRadius: '999px',
                      background: 'rgba(201,168,76,0.07)',
                      border: '1px solid rgba(201,168,76,0.18)',
                      fontFamily: 'var(--font-inter)',
                      fontSize: '0.6625rem',
                      fontWeight: 600,
                      color: 'var(--gold-deep)',
                    }}
                  >
                    {step.time}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer strip */}
        <div
          style={{
            marginTop: 'clamp(3rem, 5vw, 4rem)',
            padding: '1.5rem 2rem',
            borderRadius: 14,
            background: 'rgba(201,168,76,0.04)',
            border: '1px solid rgba(201,168,76,0.15)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1.25rem',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            {[
              { dot: true,  text: 'Step 01 is 100% free — no commitment' },
              { dot: false, text: '·' },
              { dot: false, text: 'Typical completion 21 – 45 days' },
              { dot: false, text: '·' },
              { dot: false, text: 'Projects from ₹8 Lakhs' },
            ].map(({ dot, text }, i) => (
              <span
                key={i}
                style={{
                  fontFamily: 'var(--font-inter)',
                  fontSize: '0.875rem',
                  color: text === '·' ? 'rgba(201,168,76,0.40)' : 'var(--text-muted)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                }}
              >
                {dot && (
                  <span
                    style={{
                      width: 6, height: 6, borderRadius: '50%',
                      background: 'linear-gradient(135deg, var(--gold-light), var(--gold))',
                      display: 'inline-block',
                      flexShrink: 0,
                    }}
                    aria-hidden="true"
                  />
                )}
                {text}
              </span>
            ))}
          </div>

          <Link
            href="/contact"
            className="btn-gold inline-flex items-center gap-2"
            style={{ fontSize: '0.9375rem', padding: '0.7rem 1.75rem', borderRadius: 8, whiteSpace: 'nowrap' }}
            aria-label="Book a free site visit"
          >
            Book Free Site Visit
            <ArrowRight size={15} aria-hidden="true" />
          </Link>
        </div>

      </div>
    </section>
  );
}
