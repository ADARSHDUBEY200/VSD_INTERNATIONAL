'use client';

/**
 * Client Logos — Section ⑤
 * Purpose: Fastest trust signal — recognised brand association
 * SOP: Animated marquee, logos above fold or immediately below stats
 * SEO: Entity association (Hyatt, Radisson) — NLP quality signal
 */

const clients = [
  { name: 'Hyatt Regency',         abbr: 'Hyatt Regency' },
  { name: 'Radisson Blu',          abbr: 'Radisson Blu' },
  { name: 'Crowne Plaza',          abbr: 'Crowne Plaza' },
  { name: 'ITC Welcomhotel',       abbr: 'ITC Welcomhotel' },
  { name: 'Metro Hospital',        abbr: 'Metro Hospital' },
  { name: 'Election Commission',   abbr: 'Election Commission' },
  { name: 'Fortis Healthcare',     abbr: 'Fortis Healthcare' },
  { name: 'DoubleTree by Hilton',  abbr: 'DoubleTree Hilton' },
];

/* Duplicate for seamless loop */
const track = [...clients, ...clients];

function LogoChip({ name, abbr }: { name: string; abbr: string }) {
  return (
    /* Each chip: consistent height, generous horizontal padding, gold dot separator */
    <div
      className="flex items-center shrink-0"
      style={{ height: 68 }}
    >
      {/* Name */}
      <div
        className="text-hover-gold flex items-center"
        style={{ padding: '0 2rem' }}
        title={name}
        aria-label={name}
      >
        <span
          style={{
            fontFamily: 'var(--font-inter)',
            fontWeight: 700,
            fontSize: '0.8125rem',
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            whiteSpace: 'nowrap',
            color: 'rgba(201,168,76,0.55)',
          }}
        >
          {abbr}
        </span>
      </div>

      {/* Separator dot */}
      <span
        aria-hidden="true"
        style={{
          display: 'inline-block',
          width: '4px',
          height: '4px',
          borderRadius: '50%',
          background: 'rgba(201,168,76,0.25)',
          flexShrink: 0,
        }}
      />
    </div>
  );
}

export default function ClientLogos() {
  return (
    <section
      aria-label="Clients trusted by VSD International"
      style={{
        background: 'var(--charcoal)',
        borderBottom: '1px solid rgba(201,168,76,0.08)',
        overflow: 'hidden',
      }}
    >
      {/* Header label */}
      <div
        className="text-center"
        style={{ paddingTop: '1.5rem', paddingBottom: '0.75rem' }}
      >
        <p
          style={{
            fontFamily: 'var(--font-inter)',
            fontSize: '0.6875rem',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: 'rgba(201,168,76,0.40)',
            fontWeight: 600,
          }}
        >
          Trusted by India&apos;s Leading Establishments
        </p>
      </div>

      {/* Thin gold rule */}
      <div className="flex justify-center" style={{ paddingBottom: '0.5rem' }}>
        <div
          aria-hidden="true"
          style={{
            width: '48px',
            height: '1px',
            background: 'rgba(201,168,76,0.25)',
          }}
        />
      </div>

      {/* Marquee */}
      <div
        className="relative"
        style={{
          maskImage: 'linear-gradient(90deg, transparent, black 8%, black 92%, transparent)',
          WebkitMaskImage: 'linear-gradient(90deg, transparent, black 8%, black 92%, transparent)',
        }}
      >
        <div
          className="marquee-track"
          style={{ animationDuration: '36s' }}
          aria-hidden="true"
        >
          {track.map((client, i) => (
            <LogoChip
              key={`${client.name}-${i}`}
              name={client.name}
              abbr={client.abbr}
            />
          ))}
        </div>
      </div>

      <div style={{ height: '1.25rem' }} />
    </section>
  );
}
