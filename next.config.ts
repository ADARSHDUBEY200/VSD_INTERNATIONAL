import type { NextConfig } from 'next';
import path from 'path';

const nextConfig: NextConfig = {
  /* ── URL shape — one canonical form, no trailing slash ───────────────── */
  trailingSlash: false,

  /* ── Turbopack root — suppresses multi-lockfile warning ──────────────── */
  turbopack: {
    root: path.resolve(__dirname),
  },

  /* ── Image domains ───────────────────────────────────────────────────── */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'vsdinternational.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'plus.unsplash.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        pathname: '/**',
      },
    ],
    formats: ['image/avif', 'image/webp'],
  },

  /* ── Performance ─────────────────────────────────────────────────────── */
  compress: true,
  poweredByHeader: false,

  /* Tree-shake barrel imports so only the used modules ship to the client.
     lucide-react is optimized by Next by default; framer-motion (used by the
     LP's Reveal / TiltCard animations) is not, so we opt it in here. */
  experimental: {
    optimizePackageImports: ['framer-motion'],
  },

  /* ── Headers — security + caching ───────────────────────────────────── */
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Content-Type-Options',  value: 'nosniff' },
          { key: 'X-Frame-Options',         value: 'DENY' },
          { key: 'X-XSS-Protection',        value: '1; mode=block' },
          { key: 'Referrer-Policy',          value: 'strict-origin-when-cross-origin' },
          { key: 'Permissions-Policy',       value: 'camera=(), microphone=(), geolocation=()' },
        ],
      },
      {
        /* Cache static assets aggressively */
        source: '/images/(.*)',
        headers: [{ key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }],
      },
    ];
  },

  /* ── Redirects ───────────────────────────────────────────────────────── */
  async redirects() {
    return [
      /* Non-www → www (set appropriately on Vercel/CDN instead) */
    ];
  },
};

export default nextConfig;
