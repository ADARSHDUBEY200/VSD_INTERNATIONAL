import Link from 'next/link';
import { MapPin } from 'lucide-react';

const CITIES = [
  { name: 'Delhi NCR',   slug: 'delhi'     },
  { name: 'Mumbai',      slug: 'mumbai'    },
  { name: 'Pune',        slug: 'pune'      },
  { name: 'Bangalore',   slug: 'bangalore' },
  { name: 'Hyderabad',   slug: 'hyderabad' },
  { name: 'Chennai',     slug: 'chennai'   },
  { name: 'Kolkata',     slug: 'kolkata'   },
  { name: 'Jaipur',      slug: 'jaipur'    },
  { name: 'Lucknow',     slug: 'lucknow'   },
  { name: 'Ahmedabad',   slug: 'ahmedabad' },
  { name: 'Chandigarh',  slug: 'chandigarh'},
  { name: 'Surat',       slug: 'surat'     },
];

/** §7 — City Coverage — Local SEO Grid
 *  Links to city-specific service pages.
 *  Compact text-based layout — crawl & internal linking tool. */
export default function CitiesGrid({ serviceSlug }: { serviceSlug: string }) {
  return (
    <section
      id="cities-we-serve"
      aria-labelledby="cities-heading"
      style={{
        background: '#FFFFFF',
        padding: '4.5rem 0',
        borderTop: '1px solid var(--border)',
      }}
    >
      <div className="container mx-auto" style={{ maxWidth: '80rem', padding: '0 1.25rem' }}>
        {/* Header */}
        <div style={{ marginBottom: '2.25rem' }}>
          <p className="section-label" style={{ marginBottom: '0.625rem' }}>Pan-India Coverage</p>
          <h2
            id="cities-heading"
            style={{
              fontFamily: 'var(--font-playfair)',
              fontSize: 'clamp(1.5rem, 2.4vw, 2rem)',
              color: 'var(--text-dark)',
              lineHeight: 1.2,
            }}
          >
            Commercial Kitchen Equipment Across India — Cities We Serve
          </h2>
          <div
            aria-hidden="true"
            style={{
              width: 56, height: 3,
              background: 'linear-gradient(90deg, var(--gold-bright), var(--gold), var(--gold-deep))',
              borderRadius: 2, marginTop: '1rem',
            }}
          />
          <p
            style={{
              marginTop: '1rem',
              fontFamily: 'var(--font-inter)',
              fontSize: '0.9375rem',
              color: 'var(--text-body)',
              maxWidth: 640,
            }}
          >
            We supply and install commercial kitchen equipment across India — serving clients in major metros and Tier 2 cities. Our Delhi NCR factories enable fast delivery nationwide.
          </p>
        </div>

        {/* City pills */}
        <div className="flex flex-wrap gap-3">
          {CITIES.map((city) => (
            <Link
              key={city.slug}
              href={`/commercial-kitchen-equipment-${city.slug}`}
              className="inline-flex items-center gap-2 rounded-full transition-colors duration-150"
              style={{
                background: 'var(--surface)',
                border: '1px solid var(--border)',
                padding: '0.5rem 1rem',
                fontFamily: 'var(--font-inter)',
                fontSize: '0.875rem',
                fontWeight: 500,
                color: 'var(--text-body)',
                textDecoration: 'none',
              }}
            >
              <MapPin size={12} style={{ color: 'var(--gold)', flexShrink: 0 }} aria-hidden="true" />
              {city.name}
            </Link>
          ))}
          <span
            className="inline-flex items-center rounded-full"
            style={{
              padding: '0.5rem 1rem',
              fontFamily: 'var(--font-inter)',
              fontSize: '0.875rem',
              color: 'var(--text-muted)',
            }}
          >
            + 40 more cities
          </span>
        </div>

        <p
          style={{
            marginTop: '1.5rem',
            fontFamily: 'var(--font-inter)',
            fontSize: '0.875rem',
            color: 'var(--text-muted)',
          }}
        >
          Don&apos;t see your city?{' '}
          <a
            href="https://wa.me/919250346370?text=Hi%20VSD%20International%2C%20I%20need%20kitchen%20equipment%20in%20my%20city."
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: 'var(--gold)', fontWeight: 600, textDecoration: 'none' }}
          >
            WhatsApp us
          </a>{' '}
          — we deliver to 50+ cities across India.
        </p>
      </div>
    </section>
  );
}
