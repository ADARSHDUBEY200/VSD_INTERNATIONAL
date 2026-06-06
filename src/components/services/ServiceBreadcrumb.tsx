import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';

interface Crumb { label: string; href?: string }

/** Breadcrumb — Home › Services › [Service Name]
 *  Used at the top of every service pillar page.
 *  Schema is added per-page in the page's JSON-LD. */
export default function ServiceBreadcrumb({ crumbs }: { crumbs: Crumb[] }) {
  return (
    <nav
      aria-label="Breadcrumb"
      style={{
        background: 'var(--charcoal)',
        borderBottom: '1px solid rgba(201,168,76,0.12)',
        padding: '0.875rem 0',
      }}
    >
      <div
        className="container mx-auto flex items-center gap-1.5 flex-wrap"
        style={{ maxWidth: '80rem', padding: '0 1.25rem' }}
      >
        <Link
          href="/"
          className="flex items-center gap-1 transition-colors duration-150"
          style={{ color: 'rgba(245,240,232,0.45)', fontSize: '0.8125rem', fontFamily: 'var(--font-inter)' }}
          aria-label="Home"
        >
          <Home size={12} aria-hidden="true" />
          <span>Home</span>
        </Link>

        {crumbs.map((crumb, i) => (
          <div key={i} className="flex items-center gap-1.5">
            <ChevronRight size={11} style={{ color: 'rgba(201,168,76,0.35)', flexShrink: 0 }} aria-hidden="true" />
            {crumb.href ? (
              <Link
                href={crumb.href}
                className="transition-colors duration-150"
                style={{ color: 'rgba(245,240,232,0.45)', fontSize: '0.8125rem', fontFamily: 'var(--font-inter)' }}
              >
                {crumb.label}
              </Link>
            ) : (
              <span
                style={{ color: 'var(--gold)', fontSize: '0.8125rem', fontFamily: 'var(--font-inter)', fontWeight: 600 }}
                aria-current="page"
              >
                {crumb.label}
              </span>
            )}
          </div>
        ))}
      </div>
    </nav>
  );
}
