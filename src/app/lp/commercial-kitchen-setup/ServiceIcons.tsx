/* ───────────────────────────────────────────────────────────────────────────
   ServiceIcons — a small hand-drawn icon set for the "Our Services" cards.
   Plain inline SVG (no raster images), single consistent line-weight + one
   gold fill accent per icon, so the set reads as one cohesive family rather
   than mismatched stock icons. Sized via the `size` prop, colour inherits
   from the gold/charcoal CSS variables already used across the page.
   ─────────────────────────────────────────────────────────────────────────── */

type IconProps = { size?: number };
const STROKE = 'var(--gold-deep)';
const FILL = 'var(--gold)';

export function SiteVisitIcon({ size = 56 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none">
      <path d="M32 8c-9.4 0-17 7.4-17 16.6C15 36.4 32 56 32 56s17-19.6 17-31.4C49 15.4 41.4 8 32 8z" stroke={STROKE} strokeWidth="2.4" strokeLinejoin="round" />
      <circle cx="32" cy="25" r="7.5" fill={FILL} fillOpacity="0.18" stroke={STROKE} strokeWidth="2.2" />
      <path d="M28.2 25l2.6 2.6 5-5.2" stroke={STROKE} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function DesignIcon({ size = 56 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none">
      <rect x="11" y="13" width="34" height="26" rx="2.5" stroke={STROKE} strokeWidth="2.2" />
      <path d="M16 32l6-7 5 4 7-9" stroke={STROKE} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="34" cy="20" r="2.4" fill={FILL} stroke={STROKE} strokeWidth="1.6" />
      <path d="M40 36l11 11M48 44l5 5-3 3-5-5" stroke={STROKE} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function FabricationIcon({ size = 56 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none">
      <path d="M12 46h40M16 46V32l9-6 9 6v14M34 46V26l9-6 9 6v20" stroke={STROKE} strokeWidth="2.2" strokeLinejoin="round" strokeLinecap="round" />
      <path d="M25 16l2.6 5.4L33 24l-5.4 2.6L25 32l-2.6-5.4L17 24l5.4-2.6z" fill={FILL} fillOpacity="0.85" />
    </svg>
  );
}

export function SupplyIcon({ size = 56 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none">
      <path d="M32 9l19 10.5v23L32 53 13 42.5v-23z" stroke={STROKE} strokeWidth="2.2" strokeLinejoin="round" />
      <path d="M13 19.5L32 30l19-10.5M32 30v23" stroke={STROKE} strokeWidth="2.2" strokeLinejoin="round" />
      <path d="M22 14.5l19 10.5" stroke={STROKE} strokeWidth="2" strokeLinecap="round" />
      <circle cx="32" cy="30" r="3.4" fill={FILL} />
    </svg>
  );
}

export function InstallIcon({ size = 56 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none">
      <path d="M22 14a8 8 0 0 0 11.3 11.3L41 33l-4 4-7.7-7.7A8 8 0 0 0 18 18l4 4-3 3-5.5-1.5L12 18l3.5-3.5L20 16z" stroke={STROKE} strokeWidth="2.1" strokeLinejoin="round" />
      <path d="M34 32l13 13a3.6 3.6 0 1 1-5 5L29 37" stroke={STROKE} strokeWidth="2.1" strokeLinejoin="round" strokeLinecap="round" />
      <circle cx="44" cy="48" r="2.2" fill={FILL} />
    </svg>
  );
}

export function VentilationIcon({ size = 56 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none">
      <path d="M17 26l4-12h22l4 12z" stroke={STROKE} strokeWidth="2.2" strokeLinejoin="round" />
      <rect x="20" y="26" width="24" height="6" stroke={STROKE} strokeWidth="2.2" />
      <path d="M28 38v6M36 38v6" stroke={STROKE} strokeWidth="2.2" strokeLinecap="round" />
      <path d="M24 14c1.5-3 1.5-5 0-8M32 14c1.5-3 1.5-5 0-8M40 14c1.5-3 1.5-5 0-8" stroke={FILL} strokeWidth="2.2" strokeLinecap="round" opacity="0.85" />
    </svg>
  );
}

export function TrainingIcon({ size = 56 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none">
      <circle cx="32" cy="20" r="8" stroke={STROKE} strokeWidth="2.2" />
      <path d="M16 48c0-8.8 7.2-16 16-16s16 7.2 16 16" stroke={STROKE} strokeWidth="2.2" strokeLinecap="round" />
      <path d="M40 16a8 8 0 0 1 0 14" stroke={FILL} strokeWidth="2.2" strokeLinecap="round" opacity="0.85" />
      <path d="M46 46l4 4-4 4" stroke={FILL} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function AmcIcon({ size = 56 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none">
      <path d="M32 9l17 6v15c0 12-8 19.5-17 25-9-5.5-17-13-17-25V15z" stroke={STROKE} strokeWidth="2.2" strokeLinejoin="round" />
      <circle cx="32" cy="31" r="7.5" fill={FILL} fillOpacity="0.16" stroke={STROKE} strokeWidth="2" />
      <path d="M32 27v4l3 2" stroke={STROKE} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
