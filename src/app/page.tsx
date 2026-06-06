import type { Metadata } from 'next';
import AnnouncementBar from '@/components/home/AnnouncementBar';
import Navbar from '@/components/home/Navbar';
import Hero from '@/components/home/Hero';
import OurProductsShowcase from '@/components/home/OurProductsShowcase';
import EnquireNow from '@/components/home/EnquireNow';
import TrustMetrics from '@/components/home/TrustMetrics';
import ClientLogos from '@/components/home/ClientLogos';
import ServicesOverview from '@/components/home/ServicesOverview';
import IndustriesServed from '@/components/home/IndustriesServed';
import FeaturedProject from '@/components/home/FeaturedProject';
import ProcessWorkflow from '@/components/home/ProcessWorkflow';
import BrandsStrip from '@/components/home/BrandsStrip';
import VideoSection from '@/components/home/VideoSection';
import Testimonials from '@/components/home/Testimonials';
import FAQSection from '@/components/home/FAQSection';
import BlogPreview from '@/components/home/BlogPreview';
import CitiesWeServe from '@/components/home/CitiesWeServe';
import CTABanner from '@/components/home/CTABanner';
import WhatsAppFloat from '@/components/home/WhatsAppFloat';
import MobileFooterCTA from '@/components/home/MobileFooterCTA';
import Footer from '@/components/home/Footer';

/* --- Page Metadata ------------------------------------------------------- */
export const metadata: Metadata = {
  title:
    'VSD International — Commercial Kitchen Equipment Manufacturer | ISO 9001 | Hyatt · Radisson · ITC',
  description:
    'ISO 9001 certified commercial kitchen equipment supplier. Trusted by Hyatt, Radisson, Crowne Plaza & ITC. Hotel, hospital & cloud kitchen setup. Delhi factories. WhatsApp +91-9250346370.',
  alternates: { canonical: 'https://vsdinternational.com' },
  openGraph: {
    url: 'https://vsdinternational.com',
    title:
      'VSD International — #1 Commercial Kitchen Equipment Manufacturer India | ISO 9001 | Hyatt · Radisson · ITC',
    description:
      'Complete Kitchen Solutions — 4.9★ · 312 reviews. ISO 9001 certified. Supply, design, install & AMC. Delhi factories. From ₹8 Lakhs. WhatsApp +91-9250346370.',
    images: [{ url: 'https://vsdinternational.com/og-image.jpg', width: 1200, height: 630 }],
  },
};

/* --- HomePage — Server Component ------------------------------------------- */
export default function HomePage() {
  return (
    <>
      {/* ① Announcement Bar */}
      <AnnouncementBar />

      {/* ② Sticky Navbar + Mega Navigation */}
      <Navbar />

      <main id="main-content" className="pb-20 sm:pb-0">

        <Hero />


        <TrustMetrics />


        <OurProductsShowcase />


        <EnquireNow />


        <ServicesOverview />


        <ClientLogos />


        <IndustriesServed />


        <FeaturedProject />


        <ProcessWorkflow />


        <BrandsStrip />


        <VideoSection />


        <Testimonials />


        <GoogleReviewsSection />


        <FAQSection />


        <BlogPreview />


        <CitiesWeServe />


        <CTABanner />
      </main>


      <Footer />


      <WhatsAppFloat />
      <MobileFooterCTA />
    </>
  );
}

/* --- Google Reviews Section ------------------------------------------------ */
function GoogleReviewsSection() {
  return (
    <section
      aria-labelledby="google-reviews-heading"
      style={{
        padding: '5.5rem 0',
        background: '#FFFFFF',
        borderTop: '1px solid var(--border)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Warm gold radial bloom — centre */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '64rem',
          height: '32rem',
          background:
            'radial-gradient(ellipse at center, rgba(200,169,107,0.07) 0%, transparent 65%)',
          pointerEvents: 'none',
        }}
      />

      <div
        style={{
          maxWidth: '56rem',
          margin: '0 auto',
          padding: '0 1.5rem',
          width: '100%',
          position: 'relative',
          textAlign: 'center',
        }}
      >
        {/* Header */}
        <p className="section-label" style={{ marginBottom: '1rem' }}>Verified Reviews</p>
        <h2
          id="google-reviews-heading"
          style={{
            fontFamily: 'var(--font-playfair)',
            fontSize: 'clamp(2rem, 3.5vw, 2.75rem)',
            color: 'var(--text-dark)',
            fontWeight: 700,
            letterSpacing: '-0.02em',
            lineHeight: 1.15,
            marginBottom: '1.25rem',
          }}
        >
          India&apos;s Most Trusted Kitchen Partner
        </h2>
        <div className="gold-divider" style={{ marginBottom: '1.5rem' }} />
        <p
          style={{
            color: 'var(--text-muted)',
            fontSize: '1.0625rem',
            lineHeight: 1.8,
            maxWidth: '36rem',
            margin: '0 auto 3rem',
          }}
        >
          Verified by 312 real clients across India&apos;s leading hotels,
          hospitals, and institutions on Google Business Profile.
        </p>

        {/* Rating card */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 0,
            maxWidth: '30rem',
            margin: '0 auto',
            borderRadius: '20px',
            background: '#FDFCF9',
            border: '1px solid var(--border)',
            boxShadow:
              '0 8px 48px rgba(0,0,0,0.07), 0 2px 12px rgba(200,169,107,0.08)',
            overflow: 'hidden',
          }}
          itemScope
          itemType="https://schema.org/AggregateRating"
        >
          {/* Top gold bar */}
          <div
            style={{
              width: '100%',
              height: '3px',
              background:
                'linear-gradient(90deg, var(--gold-bright), var(--gold), var(--gold-deep))',
              flexShrink: 0,
            }}
          />

          <div style={{ padding: '2.5rem 2.5rem 2rem', width: '100%' }}>
            {/* Stars */}
            <div
              className="stars"
              style={{ fontSize: '1.75rem', letterSpacing: '0.08em', marginBottom: '1.25rem', display: 'block' }}
              aria-label="4.9 out of 5 stars"
              role="img"
            >
              ★★★★★
            </div>

            {/* Big number */}
            <div
              style={{
                display: 'flex',
                alignItems: 'baseline',
                justifyContent: 'center',
                gap: '0.4rem',
                marginBottom: '0.75rem',
              }}
            >
              <span
                style={{
                  fontFamily: 'var(--font-playfair)',
                  fontSize: '4.5rem',
                  fontWeight: 800,
                  color: 'var(--text-dark)',
                  lineHeight: 1,
                  letterSpacing: '-0.03em',
                }}
                itemProp="ratingValue"
              >
                4.9
              </span>
              <span
                style={{
                  fontFamily: 'var(--font-inter)',
                  fontSize: '1.25rem',
                  color: 'var(--text-muted)',
                  fontWeight: 500,
                }}
              >
                / 5
              </span>
            </div>

            {/* Review count */}
            <p
              style={{
                fontFamily: 'var(--font-inter)',
                fontSize: '0.875rem',
                color: 'var(--text-muted)',
                marginBottom: '1.75rem',
              }}
              itemProp="reviewCount"
            >
              Based on{' '}
              <strong style={{ color: 'var(--text-dark)', fontWeight: 700 }}>312</strong>{' '}
              Google reviews
            </p>

            <meta itemProp="bestRating" content="5" />
            <meta itemProp="worstRating" content="1" />

            {/* Divider */}
            <div
              style={{
                height: '1px',
                background: 'var(--border)',
                marginBottom: '1.75rem',
              }}
            />

            {/* Three mini trust chips */}
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                gap: '0.5rem',
                flexWrap: 'wrap',
                marginBottom: '1.75rem',
              }}
            >
              {['ISO 9001 Certified', '15+ Years Active', 'Pan-India Delivery'].map((label) => (
                <span
                  key={label}
                  style={{
                    padding: '0.3rem 0.75rem',
                    borderRadius: '100px',
                    background: 'rgba(200,169,107,0.08)',
                    border: '1px solid rgba(200,169,107,0.22)',
                    fontSize: '0.72rem',
                    fontFamily: 'var(--font-inter)',
                    fontWeight: 600,
                    color: 'var(--gold-deep)',
                    letterSpacing: '0.02em',
                  }}
                >
                  {label}
                </span>
              ))}
            </div>

            {/* CTA */}
            <a
              href="https://g.page/vsd-international-delhi/review"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold"
              style={{ width: '100%', justifyContent: 'center' }}
              aria-label="View VSD International reviews on Google"
            >
              View on Google Maps →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
