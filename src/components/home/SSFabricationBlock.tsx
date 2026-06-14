'use client';

import Link from 'next/link';

const items = [
  { label: 'Work Tables & Counters', desc: 'Custom dimensions, SS 304, with or without under-shelves' },
  { label: 'Sinks & Wash Units', desc: 'Single, double and triple bowl; drainer options' },
  { label: 'Wall Shelving & Racks', desc: 'Fixed or adjustable; heavy-duty for bulk storage' },
  { label: 'Exhaust Hoods & Ducts', desc: 'Baffle-filter hoods sized to cooking load and fire code' },
  { label: 'Trolleys & Racks', desc: 'Plate, tray, GN pan and bain-marie trolleys' },
  { label: 'Custom Cabinets & Doors', desc: 'Cold-room doors, pass-through hatches, equipment enclosures' },
];

export default function SSFabricationBlock() {
  return (
    <section
      id="stainless-steel-fabrication"
      aria-labelledby="ss-fabrication-heading"
      style={{
        padding: '6rem 0',
        background: '#FDFCF9',
        borderTop: '1px solid var(--border)',
        borderBottom: '1px solid var(--border)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Subtle background texture */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage:
            'radial-gradient(circle at 20% 50%, rgba(200,169,107,0.05) 0%, transparent 55%), radial-gradient(circle at 80% 30%, rgba(200,169,107,0.04) 0%, transparent 50%)',
          pointerEvents: 'none',
        }}
      />

      <div
        style={{
          maxWidth: '72rem',
          margin: '0 auto',
          padding: '0 1.5rem',
          width: '100%',
          position: 'relative',
        }}
      >
        {/* Two-column layout: text left, grid right */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 26rem), 1fr))',
            gap: '3.5rem',
            alignItems: 'start',
          }}
        >
          {/* Left — copy */}
          <div>
            <p className="section-label" style={{ marginBottom: '1rem' }}>
              In-House Manufacturing
            </p>
            <h2
              id="ss-fabrication-heading"
              style={{
                fontFamily: 'var(--font-playfair)',
                fontSize: 'clamp(1.875rem, 3.5vw, 2.625rem)',
                color: 'var(--text-dark)',
                fontWeight: 700,
                letterSpacing: '-0.02em',
                lineHeight: 1.18,
                marginBottom: '1.25rem',
              }}
            >
              Stainless Steel Commercial Kitchen Equipment —{' '}
              <span className="accent-gold">Built to Your Dimensions</span>
            </h2>
            <div className="gold-divider" style={{ marginBottom: '1.5rem' }} />

            <p
              style={{
                color: 'var(--text-body)',
                fontSize: '1.0625rem',
                lineHeight: 1.8,
                marginBottom: '1.25rem',
              }}
            >
              VSD fabricates custom stainless steel commercial kitchen equipment at its
              own Delhi factories — worktables, sinks, hoods, shelving and exhaust
              systems built to the exact footprint of your kitchen, not forced into
              standard sizes.
            </p>
            <p
              style={{
                color: 'var(--text-body)',
                fontSize: '1.0625rem',
                lineHeight: 1.8,
                marginBottom: '2rem',
              }}
            >
              All SS fabrication uses{' '}
              <strong style={{ color: 'var(--text-dark)' }}>food-grade SS 304</strong>{' '}
              as standard, with SS 316 available for high-corrosion environments.
              In-house manufacturing cuts lead times and lets us match every piece to
              the CAD layout — no gaps, no compromises.
            </p>

            {/* Trust badges */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.625rem', marginBottom: '2rem' }}>
              {['SS 304 Standard', 'SS 316 Available', 'CAD-Matched Fit', 'Delhi Factory'].map((badge) => (
                <span
                  key={badge}
                  style={{
                    padding: '0.35rem 0.875rem',
                    borderRadius: '100px',
                    background: 'rgba(200,169,107,0.08)',
                    border: '1px solid rgba(200,169,107,0.25)',
                    fontSize: '0.725rem',
                    fontFamily: 'var(--font-inter)',
                    fontWeight: 600,
                    color: 'var(--gold-deep)',
                    letterSpacing: '0.03em',
                  }}
                >
                  {badge}
                </span>
              ))}
            </div>

            <Link
              href="/contact"
              className="btn-gold"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
              aria-label="Get a quote for custom stainless steel fabrication"
            >
              Get a Fabrication Quote →
            </Link>
          </div>

          {/* Right — items grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 13rem), 1fr))',
              gap: '1rem',
            }}
          >
            {items.map((item) => (
              <div
                key={item.label}
                style={{
                  padding: '1.25rem 1.375rem',
                  borderRadius: '12px',
                  background: '#FFFFFF',
                  border: '1px solid var(--border)',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
                  transition: 'border-color 0.2s ease, box-shadow 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(200,169,107,0.4)';
                  (e.currentTarget as HTMLDivElement).style.boxShadow = '0 4px 20px rgba(200,169,107,0.1)';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.borderColor = 'var(--border)';
                  (e.currentTarget as HTMLDivElement).style.boxShadow = '0 2px 8px rgba(0,0,0,0.04)';
                }}
              >
                <div
                  style={{
                    width: '32px',
                    height: '2px',
                    background: 'var(--gold)',
                    borderRadius: '2px',
                    marginBottom: '0.875rem',
                  }}
                />
                <p
                  style={{
                    fontFamily: 'var(--font-inter)',
                    fontWeight: 700,
                    fontSize: '0.875rem',
                    color: 'var(--text-dark)',
                    marginBottom: '0.4rem',
                    lineHeight: 1.35,
                  }}
                >
                  {item.label}
                </p>
                <p
                  style={{
                    fontFamily: 'var(--font-inter)',
                    fontSize: '0.775rem',
                    color: 'var(--text-muted)',
                    lineHeight: 1.55,
                  }}
                >
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
