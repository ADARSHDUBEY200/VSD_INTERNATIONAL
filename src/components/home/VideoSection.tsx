'use client';

import { useState } from 'react';
import { Play, Shield, Award, Clock } from 'lucide-react';

const videoSchema = {
  '@context': 'https://schema.org',
  '@type': 'VideoObject',
  name: 'VSD International Factory Tour — Commercial Kitchen Equipment Manufacturer Delhi',
  description:
    "Tour of VSD International's manufacturing facility in New Delhi. ISO 9001 certified. See our production process, installed kitchens at Hyatt, Radisson, and leading hospitals.",
  thumbnailUrl: 'https://vsdinternational.com/video-thumbnail.jpg',
  uploadDate: '2026-01-15',
  duration: 'PT8M24S',
  contentUrl: 'https://vsdinternational.com/factory-tour.mp4',
  embedUrl: 'https://www.youtube.com/embed/YOUR_VIDEO_ID',
  publisher: {
    '@type': 'Organization',
    name: 'VSD International',
    url: 'https://vsdinternational.com',
  },
};

export default function VideoSection() {
  const [playing, setPlaying] = useState(false);

  return (
    <section
      aria-labelledby="video-heading"
      className="grain-overlay"
      style={{
        padding: '6rem 0',
        background: 'var(--charcoal)',
        borderTop: '1px solid rgba(200,169,107,0.1)',
      }}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(videoSchema) }}
      />

      <div style={{ maxWidth: '72rem', margin: '0 auto', padding: '0 1.5rem', width: '100%' }}>

        {/* -- Header -- */}
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <p className="section-label" style={{ marginBottom: '1rem' }}>Factory Tour</p>
          <h2
            id="video-heading"
            style={{
              fontFamily: 'var(--font-playfair)',
              fontSize: 'clamp(2rem, 3.5vw, 2.75rem)',
              color: 'var(--text-on-dark)',
              fontWeight: 700,
              letterSpacing: '-0.02em',
              lineHeight: 1.15,
              marginBottom: '1.25rem',
            }}
          >
            See Our Factory &amp; Project Work
          </h2>
          <div className="gold-divider" style={{ marginBottom: '1.5rem' }} />
          <p
            style={{
              color: 'var(--text-dim)',
              fontSize: '1.0625rem',
              lineHeight: 1.85,
              maxWidth: '38rem',
              margin: '0 auto',
            }}
          >
            Watch how we manufacture, supply, and install commercial kitchen
            equipment for India&apos;s leading hotels, hospitals, and institutions.
          </p>
        </div>

        {/* -- Video player -- */}
        <div style={{ maxWidth: '60rem', margin: '0 auto', width: '100%' }}>

          {/* Gold gradient border frame */}
          <div
            style={{
              padding: '1.5px',
              borderRadius: '20px',
              background:
                'linear-gradient(135deg, rgba(200,169,107,0.5) 0%, rgba(200,169,107,0.12) 50%, rgba(200,169,107,0.45) 100%)',
              boxShadow:
                '0 48px 110px rgba(0,0,0,0.75), 0 0 70px rgba(200,169,107,0.05)',
            }}
          >
            <div
              className="relative overflow-hidden cursor-pointer group"
              style={{
                aspectRatio: '16/9',
                background: '#0C0C0A',
                borderRadius: '18.5px',
              }}
              onClick={() => setPlaying(true)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') setPlaying(true);
              }}
              aria-label="Play VSD International factory tour video"
            >
              {!playing ? (
                <>
                  {/* Cinematic background */}
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        'radial-gradient(ellipse at 30% 60%, #1C1408 0%, #0C0C0A 60%), radial-gradient(ellipse at 70% 40%, #14100A 0%, transparent 60%)',
                    }}
                  />

                  {/* Subtle scanline texture */}
                  <div
                    className="absolute inset-0"
                    style={{
                      backgroundImage:
                        'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.08) 2px, rgba(0,0,0,0.08) 4px)',
                      pointerEvents: 'none',
                    }}
                  />

                  {/* Viewfinder corner brackets */}
                  {(['top-left', 'top-right', 'bottom-left', 'bottom-right'] as const).map(
                    (corner) => {
                      const isTop = corner.includes('top');
                      const isLeft = corner.includes('left');
                      return (
                        <div
                          key={corner}
                          className="absolute"
                          style={{
                            top: isTop ? 20 : undefined,
                            bottom: isTop ? undefined : 20,
                            left: isLeft ? 20 : undefined,
                            right: isLeft ? undefined : 20,
                            width: 36,
                            height: 36,
                            borderTop: isTop
                              ? '1.5px solid rgba(200,169,107,0.55)'
                              : undefined,
                            borderBottom: !isTop
                              ? '1.5px solid rgba(200,169,107,0.55)'
                              : undefined,
                            borderLeft: isLeft
                              ? '1.5px solid rgba(200,169,107,0.55)'
                              : undefined,
                            borderRight: !isLeft
                              ? '1.5px solid rgba(200,169,107,0.55)'
                              : undefined,
                            borderRadius: isTop && isLeft
                              ? '3px 0 0 0'
                              : isTop
                              ? '0 3px 0 0'
                              : isLeft
                              ? '0 0 0 3px'
                              : '0 0 3px 0',
                          }}
                        />
                      );
                    }
                  )}

                  {/* Center content */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <p
                      style={{
                        fontFamily: 'var(--font-inter)',
                        fontSize: '0.6875rem',
                        fontWeight: 700,
                        letterSpacing: '0.22em',
                        textTransform: 'uppercase',
                        color: 'var(--gold)',
                        marginBottom: '1.75rem',
                      }}
                    >
                      VSD International
                    </p>

                    {/* Play button with concentric rings */}
                    <div style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      {/* Outer ring */}
                      <div
                        className="absolute group-hover:scale-110 transition-transform duration-500"
                        style={{
                          width: '7rem',
                          height: '7rem',
                          borderRadius: '50%',
                          border: '1px solid rgba(200,169,107,0.14)',
                        }}
                      />
                      {/* Mid ring */}
                      <div
                        className="absolute group-hover:scale-110 transition-transform duration-400"
                        style={{
                          width: '5.75rem',
                          height: '5.75rem',
                          borderRadius: '50%',
                          border: '1px solid rgba(200,169,107,0.28)',
                        }}
                      />
                      {/* Button */}
                      <div
                        className="flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                        style={{
                          width: '4.5rem',
                          height: '4.5rem',
                          borderRadius: '50%',
                          background:
                            'linear-gradient(135deg, var(--gold-light) 0%, var(--gold) 50%, var(--gold-deep) 100%)',
                          boxShadow:
                            '0 8px 32px rgba(200,169,107,0.45), 0 2px 8px rgba(0,0,0,0.5)',
                        }}
                        aria-hidden="true"
                      >
                        <Play
                          size={24}
                          style={{ color: '#1A1508', marginLeft: 3 }}
                          fill="currentColor"
                        />
                      </div>
                    </div>

                    <p
                      style={{
                        fontFamily: 'var(--font-playfair)',
                        fontSize: '1.125rem',
                        color: 'rgba(245,240,232,0.65)',
                        marginTop: '1.75rem',
                        fontWeight: 600,
                      }}
                    >
                      Factory Tour
                    </p>
                    <p
                      style={{
                        fontFamily: 'var(--font-inter)',
                        fontSize: '0.8125rem',
                        color: 'rgba(200,169,107,0.5)',
                        marginTop: '0.4rem',
                        letterSpacing: '0.01em',
                      }}
                    >
                      Commercial Kitchen Equipment Manufacturer, Delhi
                    </p>
                  </div>

                  {/* Duration badge */}
                  <div
                    className="absolute"
                    style={{
                      bottom: '1.1rem',
                      right: '1.1rem',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.35rem',
                      padding: '0.3rem 0.65rem',
                      borderRadius: '6px',
                      background: 'rgba(0,0,0,0.6)',
                      backdropFilter: 'blur(12px)',
                      border: '1px solid rgba(200,169,107,0.18)',
                    }}
                  >
                    <Clock size={11} style={{ color: 'var(--gold)' }} />
                    <span
                      style={{
                        color: '#F5F0E8',
                        fontSize: '0.75rem',
                        fontFamily: 'var(--font-inter)',
                        fontWeight: 600,
                      }}
                    >
                      8:24
                    </span>
                  </div>

                  {/* Hover radial glow */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none"
                    style={{
                      background:
                        'radial-gradient(ellipse at center, rgba(200,169,107,0.06) 0%, transparent 68%)',
                    }}
                  />
                </>
              ) : (
                <iframe
                  src="https://www.youtube.com/embed/YOUR_VIDEO_ID?autoplay=1&rel=0"
                  title="VSD International Factory Tour — Commercial Kitchen Equipment Manufacturer Delhi"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full"
                  loading="lazy"
                />
              )}
            </div>
          </div>

          {/* -- Below-video info strip -- */}
          <div
            style={{
              marginTop: '1.25rem',
              padding: '1.25rem 1.5rem',
              borderRadius: '12px',
              background: 'rgba(255,255,255,0.025)',
              border: '1px solid rgba(200,169,107,0.1)',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.875rem',
            }}
          >
            <div>
              <p
                style={{
                  fontFamily: 'var(--font-inter)',
                  fontSize: '0.9375rem',
                  color: 'var(--text-on-dark)',
                  fontWeight: 500,
                  marginBottom: '0.25rem',
                }}
              >
                VSD International — Factory Tour &amp; Commercial Kitchen Installation, Delhi
              </p>
              <p
                style={{
                  fontSize: '0.8125rem',
                  color: 'var(--text-dim)',
                  fontFamily: 'var(--font-inter)',
                }}
              >
                Featuring Hyatt Regency &amp; Radisson Blu kitchen projects
              </p>
            </div>

            <div style={{ height: '1px', background: 'rgba(200,169,107,0.1)' }} />

            <div>
              <button
                type="button"
                onClick={() => window.dispatchEvent(new Event('vsd:open-enquiry'))}
                className="btn-gold inline-flex items-center gap-2"
                aria-label="Get a free commercial kitchen quote"
              >
                Get Free Quote
              </button>
            </div>

            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
              {[
                { icon: <Shield size={13} style={{ color: 'var(--gold)' }} />, label: 'ISO 9001 Certified' },
                { icon: <Award size={13} style={{ color: 'var(--gold)' }} />, label: 'Authorised Dealer' },
              ].map(({ icon, label }) => (
                <div
                  key={label}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.45rem',
                    padding: '0.35rem 0.875rem',
                    borderRadius: '100px',
                    background: 'rgba(200,169,107,0.07)',
                    border: '1px solid rgba(200,169,107,0.2)',
                  }}
                >
                  {icon}
                  <span
                    style={{
                      color: 'var(--gold-light)',
                      fontSize: '0.75rem',
                      fontFamily: 'var(--font-inter)',
                      fontWeight: 600,
                      letterSpacing: '0.025em',
                    }}
                  >
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
