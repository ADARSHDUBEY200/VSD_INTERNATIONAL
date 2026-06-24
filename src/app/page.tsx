import type { Metadata } from 'next';
import { allFaqs } from '@/data/faqs';
import AnnouncementBar from '@/components/home/AnnouncementBar';
import HomepageQuickLinks from '@/components/home/HomepageQuickLinks';
import Navbar from '@/components/home/Navbar';
import Hero from '@/components/home/Hero';
import OurProductsShowcase from '@/components/home/OurProductsShowcase';
import EnquireNow from '@/components/home/EnquireNow';
import PreparationCarousel from '@/components/home/PreparationCarousel';
import CookingEquipmentCarousel from '@/components/home/CookingEquipmentCarousel';
import RefrigeratorsCarousel from '@/components/home/RefrigeratorsCarousel';
import TrustMetrics from '@/components/home/TrustMetrics';
import ClientLogos from '@/components/home/ClientLogos';
import ServicesOverview from '@/components/home/ServicesOverview';
import MadeInHouseSection from '@/components/home/MadeInHouseSection';
import IndustriesServed from '@/components/home/IndustriesServed';
import FeaturedProject from '@/components/home/FeaturedProject';
import ProcessWorkflow from '@/components/home/ProcessWorkflow';
import BrandsStrip from '@/components/home/BrandsStrip';
import SSFabricationBlock from '@/components/home/SSFabricationBlock';
import VideoSection from '@/components/home/VideoSection';
import DelhiLocalSection from '@/components/home/DelhiLocalSection';
import Testimonials from '@/components/home/Testimonials';
import FAQSection from '@/components/home/FAQSection';
import BlogPreview from '@/components/home/BlogPreview';
import CitiesWeServe from '@/components/home/CitiesWeServe';
import CTABanner from '@/components/home/CTABanner';
import WhatsAppFloat from '@/components/home/WhatsAppFloat';
import MobileFooterCTA from '@/components/home/MobileFooterCTA';
import EnquiryModal from '@/components/home/EnquiryModal';
import LeadPopup from '@/components/home/LeadPopup';
import Footer from '@/components/home/Footer';

/* --- Page Metadata ------------------------------------------------------- */
export const metadata: Metadata = {
  title: 'Commercial Kitchen Equipment Manufacturer India | VSD International',
  description:
    'ISO 9001 certified commercial kitchen equipment manufacturer in Delhi. Turnkey supply, design, fabrication & installation for hotels, hospitals & cloud kitchens. 500+ projects across India since 2009.',
  keywords: [
    'commercial kitchen equipment manufacturers in India',
    'commercial kitchen equipment manufacturers in Delhi',
    'hotel kitchen equipment supplier India',
    'hospital kitchen equipment NABH',
    'cloud kitchen setup India',
    'stainless steel kitchen fabrication Delhi',
    'turnkey commercial kitchen India',
    'kitchen layout design',
    'kitchen equipment AMC India',
    'VSD International Delhi',
    'Rational combi oven dealer India',
    'commercial kitchen manufacturer Delhi NCR',
  ],
  authors: [{ name: 'VSD International', url: 'https://vsdinternational.com' }],
  creator: 'VSD International',
  publisher: 'VSD International',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: { canonical: 'https://vsdinternational.com/' },
  openGraph: {
    type: 'website',
    url: 'https://vsdinternational.com/',
    siteName: 'VSD International',
    locale: 'en_IN',
    title: 'Commercial Kitchen Equipment Manufacturer in India | VSD International',
    description:
      'ISO 9001 certified. Trusted by Hyatt, Radisson, ITC & Crowne Plaza. Turnkey kitchen supply, design, install & AMC from our Delhi factory. 500+ projects since 2009. ☎ +91-9250346370.',
    images: [
      {
        url: 'https://vsdinternational.com/VSD_LOGO.png',
        width: 1200,
        height: 630,
        alt: 'VSD International — Commercial Kitchen Equipment Manufacturer India',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Commercial Kitchen Equipment Manufacturer in India | VSD International',
    description:
      'ISO 9001 certified. Trusted by Hyatt, Radisson & 500+ clients. Turnkey kitchen supply, design & installation across India.',
    images: ['https://vsdinternational.com/VSD_LOGO.png'],
  },
};

/* --- JSON-LD Home Page Schema -------------------------------------------- */
const homePageSchema = {
  '@context': 'https://schema.org',
  '@graph': [

    /* ── 1. WebSite — enables Sitelinks Searchbox in Google ──────────────── */
    {
      '@type': 'WebSite',
      '@id': 'https://vsdinternational.com/#website',
      url: 'https://vsdinternational.com/',
      name: 'VSD International',
      alternateName: ['VSD International India', 'VSD Kitchen Equipment'],
      description:
        'ISO 9001 certified commercial kitchen equipment manufacturer and supplier in India. Serving hotels, hospitals, restaurants & cloud kitchens since 2009.',
      publisher: { '@id': 'https://vsdinternational.com/#organization' },
      inLanguage: 'en-IN',
      potentialAction: {
        '@type': 'SearchAction',
        target: {
          '@type': 'EntryPoint',
          urlTemplate: 'https://vsdinternational.com/search?q={search_term_string}',
        },
        'query-input': 'required name=search_term_string',
      },
    },

    /* ── 2. Organization + LocalBusiness — AggregateRating → Google stars ── */
    {
      '@type': ['Organization', 'LocalBusiness'],
      '@id': 'https://vsdinternational.com/#organization',
      name: 'VSD International',
      legalName: 'VSD International',
      alternateName: 'VSD International India',
      url: 'https://vsdinternational.com/',
      logo: {
        '@type': 'ImageObject',
        '@id': 'https://vsdinternational.com/#logo',
        url: 'https://vsdinternational.com/VSD_LOGO.png',
        contentUrl: 'https://vsdinternational.com/VSD_LOGO.png',
        width: 200,
        height: 60,
        caption: 'VSD International — Commercial Kitchen Equipment Manufacturer India',
      },
      image: {
        '@type': 'ImageObject',
        url: 'https://vsdinternational.com/og-image.jpg',
        width: 1200,
        height: 630,
        caption: 'VSD International Commercial Kitchen Equipment — Delhi NCR',
      },
      description:
        'ISO 9001:2015 certified manufacturer and turnkey supplier of commercial kitchen equipment. Operating from Delhi NCR manufacturing facility since 2009, VSD International has completed 500+ projects for hotels, hospitals, restaurants, cloud kitchens, and government institutions across India.',
      foundingDate: '2009',
      slogan: "India's Trusted Commercial Kitchen Partner Since 2009",
      telephone: '+91-9250346370',
      email: 'info.vsdinternational@gmail.com',
      vatID: '07AABFV5120K1ZZ',
      priceRange: '₹₹₹',
      currenciesAccepted: 'INR',
      paymentAccepted: 'Cash, Bank Transfer, NEFT, RTGS, Cheque',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'A-347, Saraswati Gali, Mandawali',
        addressLocality: 'New Delhi',
        addressRegion: 'Delhi',
        postalCode: '110092',
        addressCountry: 'IN',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: '28.6273',
        longitude: '77.3088',
      },
      hasMap: 'https://maps.app.goo.gl/kzyGxozpqqGEK13i6',
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
          opens: '09:00',
          closes: '18:00',
        },
      ],
      contactPoint: [
        {
          '@type': 'ContactPoint',
          telephone: '+91-9250346370',
          contactType: 'sales',
          areaServed: 'IN',
          availableLanguage: ['en', 'hi'],
        },
        {
          '@type': 'ContactPoint',
          telephone: '+91-9250346370',
          contactType: 'customer service',
          areaServed: 'IN',
          availableLanguage: ['en', 'hi'],
        },
        {
          '@type': 'ContactPoint',
          email: 'info.vsdinternational@gmail.com',
          contactType: 'sales',
          areaServed: 'IN',
          availableLanguage: ['en', 'hi'],
        },
      ],
      sameAs: [
        'https://www.linkedin.com/company/vsd-international',
        'https://www.indiamart.com/vsd-international',
        'https://maps.app.goo.gl/kzyGxozpqqGEK13i6',
      ],
      knowsAbout: [
        'Commercial Kitchen Equipment',
        'Hotel Kitchen Setup',
        'Hospital Kitchen Equipment',
        'Cloud Kitchen Setup',
        'Stainless Steel Kitchen Fabrication',
        'Kitchen Layout Design',
        'Commercial Refrigeration',
        'Rational Combi Ovens',
        'Annual Maintenance Contracts',
        'Restaurant Kitchen Setup',
        'Bakery Equipment',
        'Kitchen Exhaust and Ventilation',
      ],
      areaServed: [
        { '@type': 'Country', name: 'India' },
        { '@type': 'City', name: 'New Delhi' },
        { '@type': 'City', name: 'Mumbai' },
        { '@type': 'City', name: 'Bangalore' },
        { '@type': 'City', name: 'Hyderabad' },
        { '@type': 'City', name: 'Chennai' },
        { '@type': 'City', name: 'Pune' },
        { '@type': 'City', name: 'Kolkata' },
        { '@type': 'City', name: 'Jaipur' },
        { '@type': 'City', name: 'Lucknow' },
        { '@type': 'City', name: 'Ahmedabad' },
      ],
      /* AggregateRating — sourced from 312 verified Google Business Profile reviews */
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '5',
        reviewCount: '312',
        bestRating: '5',
        worstRating: '1',
      },
      /* Services offered via OfferCatalog — all 14 service lines */
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Commercial Kitchen Equipment & Services — VSD International',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              '@id': 'https://vsdinternational.com/services/commercial-kitchen-equipment#service',
              name: 'Commercial Kitchen Equipment Supply',
              description:
                'Complete commercial kitchen equipment supply — cooking ranges, refrigeration, food preparation, dishwashing, and custom stainless steel fabrication from our Delhi NCR factory.',
              url: 'https://vsdinternational.com/services/commercial-kitchen-equipment',
              provider: { '@id': 'https://vsdinternational.com/#organization' },
              areaServed: { '@type': 'Country', name: 'India' },
              serviceType: 'Commercial Kitchen Equipment Supply',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              '@id': 'https://vsdinternational.com/services/hotel-kitchen-equipment#service',
              name: 'Hotel Kitchen Equipment',
              description:
                'End-to-end 5-star hotel kitchen setups for banquet, restaurant, bar, and staff kitchens. Trusted by Hyatt Regency, Radisson Blu, Crowne Plaza, and ITC Welcomhotel.',
              url: 'https://vsdinternational.com/services/hotel-kitchen-equipment',
              provider: { '@id': 'https://vsdinternational.com/#organization' },
              areaServed: { '@type': 'Country', name: 'India' },
              serviceType: 'Hotel Kitchen Equipment Setup',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              '@id': 'https://vsdinternational.com/services/restaurant-kitchen-setup#service',
              name: 'Restaurant Kitchen Setup',
              description:
                'Complete restaurant kitchen setup for fine-dining, QSR, café chains, and casual dining — design, equipment supply, installation, and commissioning.',
              url: 'https://vsdinternational.com/services/restaurant-kitchen-setup',
              provider: { '@id': 'https://vsdinternational.com/#organization' },
              areaServed: { '@type': 'Country', name: 'India' },
              serviceType: 'Restaurant Kitchen Setup',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              '@id': 'https://vsdinternational.com/services/cloud-kitchen-setup#service',
              name: 'Cloud Kitchen Setup',
              description:
                'Complete cloud kitchen equipment packages for Zomato, Swiggy, and Rebel Foods operators. Multi-brand ghost kitchen setups designed for maximum throughput per square foot.',
              url: 'https://vsdinternational.com/services/cloud-kitchen-setup',
              provider: { '@id': 'https://vsdinternational.com/#organization' },
              areaServed: { '@type': 'Country', name: 'India' },
              serviceType: 'Cloud Kitchen Setup',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              '@id': 'https://vsdinternational.com/services/hospital-kitchen-equipment#service',
              name: 'Hospital Kitchen Equipment',
              description:
                'NABH and FSSAI compliant dietary kitchen equipment for hospitals and healthcare institutions. Projects at Metro Hospitals, Yashoda, Sarvodaya, and Hans hospitals.',
              url: 'https://vsdinternational.com/services/hospital-kitchen-equipment',
              provider: { '@id': 'https://vsdinternational.com/#organization' },
              areaServed: { '@type': 'Country', name: 'India' },
              serviceType: 'Hospital Kitchen Equipment Supply',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              '@id': 'https://vsdinternational.com/services/bakery-equipment#service',
              name: 'Commercial Bakery Equipment',
              description:
                'Commercial bakery equipment supply and installation — deck ovens, rotary rack ovens, proofers, spiral mixers, sheeting machines, and blast freezers.',
              url: 'https://vsdinternational.com/services/bakery-equipment',
              provider: { '@id': 'https://vsdinternational.com/#organization' },
              areaServed: { '@type': 'Country', name: 'India' },
              serviceType: 'Commercial Bakery Equipment',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              '@id': 'https://vsdinternational.com/services/stainless-steel-fabrication#service',
              name: 'Custom Stainless Steel Fabrication',
              description:
                'In-house SS 304 fabrication for worktables, sinks, shelving, exhaust hoods, trolleys, and bespoke kitchen furniture — manufactured to exact dimensions at our Delhi NCR factory.',
              url: 'https://vsdinternational.com/services/stainless-steel-fabrication',
              provider: { '@id': 'https://vsdinternational.com/#organization' },
              areaServed: { '@type': 'Country', name: 'India' },
              serviceType: 'Stainless Steel Kitchen Fabrication',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              '@id': 'https://vsdinternational.com/services/industrial-kitchen-equipment#service',
              name: 'Industrial & Institutional Kitchen Equipment',
              description:
                'Heavy-duty institutional kitchen equipment for defence canteens, factories, government institutions, and large-scale bulk catering operations across India.',
              url: 'https://vsdinternational.com/services/industrial-kitchen-equipment',
              provider: { '@id': 'https://vsdinternational.com/#organization' },
              areaServed: { '@type': 'Country', name: 'India' },
              serviceType: 'Industrial Kitchen Equipment',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              '@id': 'https://vsdinternational.com/services/cafeteria-kitchen-equipment#service',
              name: 'Cafeteria Kitchen Equipment',
              description:
                'Cafeteria kitchen solutions for corporate offices, schools, and colleges — high-volume serving counters, hot cases, and complete cafeteria equipment packages.',
              url: 'https://vsdinternational.com/services/cafeteria-kitchen-equipment',
              provider: { '@id': 'https://vsdinternational.com/#organization' },
              areaServed: { '@type': 'Country', name: 'India' },
              serviceType: 'Cafeteria Kitchen Equipment',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              '@id': 'https://vsdinternational.com/services/kitchen-layout-design#service',
              name: 'Professional Kitchen Layout Design',
              description:
                'CAD-based commercial kitchen layout design — workflow analysis, space planning, AutoCAD drawings, and free site visit for projects above ₹5 lakh.',
              url: 'https://vsdinternational.com/services/kitchen-layout-design',
              provider: { '@id': 'https://vsdinternational.com/#organization' },
              areaServed: { '@type': 'Country', name: 'India' },
              serviceType: 'Kitchen Layout Design',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              '@id': 'https://vsdinternational.com/services/kitchen-exhaust-ventilation#service',
              name: 'Kitchen Exhaust & Ventilation Systems',
              description:
                'Commercial kitchen exhaust hoods, fresh air systems, UV filtration, and fire suppression — FIRE NOC compliant ventilation design and installation.',
              url: 'https://vsdinternational.com/services/kitchen-exhaust-ventilation',
              provider: { '@id': 'https://vsdinternational.com/#organization' },
              areaServed: { '@type': 'Country', name: 'India' },
              serviceType: 'Kitchen Exhaust and Ventilation',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              '@id': 'https://vsdinternational.com/services/kitchen-equipment-amc#service',
              name: 'Kitchen Equipment Annual Maintenance Contract (AMC)',
              description:
                'AMC covering scheduled preventive servicing, priority breakdown support, genuine spare parts, and dedicated engineer visits. 80+ active AMC clients across India.',
              url: 'https://vsdinternational.com/services/kitchen-equipment-amc',
              provider: { '@id': 'https://vsdinternational.com/#organization' },
              areaServed: { '@type': 'Country', name: 'India' },
              serviceType: 'Kitchen Equipment Annual Maintenance Contract',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              '@id': 'https://vsdinternational.com/services/bar-equipment#service',
              name: 'Commercial Bar Equipment',
              description:
                'Commercial bar equipment for hotel bars, nightclubs, and event venues — ice machines, blenders, dispensers, and custom bar furniture.',
              url: 'https://vsdinternational.com/services/bar-equipment',
              provider: { '@id': 'https://vsdinternational.com/#organization' },
              areaServed: { '@type': 'Country', name: 'India' },
              serviceType: 'Commercial Bar Equipment',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              '@id': 'https://vsdinternational.com/services/imported-kitchen-equipment#service',
              name: 'Imported Commercial Kitchen Equipment',
              description:
                'Authorised Indian dealer for Rational, Robot Coupe, Frymaster, Hamilton Beach, Scotsman, BUNN, and Vitamix — genuine imported equipment with Indian warranty and local service.',
              url: 'https://vsdinternational.com/services/imported-kitchen-equipment',
              provider: { '@id': 'https://vsdinternational.com/#organization' },
              areaServed: { '@type': 'Country', name: 'India' },
              serviceType: 'Imported Kitchen Equipment Distribution',
            },
          },
        ],
      },
    },

    /* ── 3. WebPage Schema ────────────────────────────────────────────────── */
    {
      '@type': 'WebPage',
      '@id': 'https://vsdinternational.com/#webpage',
      url: 'https://vsdinternational.com/',
      name: 'Commercial Kitchen Equipment Manufacturer India | VSD International',
      isPartOf: { '@id': 'https://vsdinternational.com/#website' },
      about: { '@id': 'https://vsdinternational.com/#organization' },
      primaryImageOfPage: {
        '@type': 'ImageObject',
        url: 'https://vsdinternational.com/og-image.jpg',
        width: 1200,
        height: 630,
      },
      description:
        'ISO 9001 certified commercial kitchen equipment manufacturer in Delhi. Turnkey supply, fabrication, design, installation & AMC for hotels, hospitals & cloud kitchens across India. 500+ projects since 2009.',
      breadcrumb: { '@id': 'https://vsdinternational.com/#breadcrumb' },
      inLanguage: 'en-IN',
      datePublished: '2009-01-01T00:00:00+05:30',
      dateModified: '2026-06-14T00:00:00+05:30',
      potentialAction: {
        '@type': 'ReadAction',
        target: ['https://vsdinternational.com/'],
      },
    },

    /* ── 4. BreadcrumbList ────────────────────────────────────────────────── */
    {
      '@type': 'BreadcrumbList',
      '@id': 'https://vsdinternational.com/#breadcrumb',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: 'https://vsdinternational.com/',
        },
      ],
    },

    /* ── 5. ItemList — page sections → reinforces Jump Links signal ──────── */
    {
      '@type': 'ItemList',
      '@id': 'https://vsdinternational.com/#page-sections',
      name: 'VSD International Homepage Sections',
      description: 'Key sections of the VSD International homepage covering services, equipment, industries, projects, process, brands, reviews, FAQs, and cities served.',
      numberOfItems: 12,
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Commercial Kitchen Services',
          url: 'https://vsdinternational.com/#commercial-kitchen-services',
          description: 'Equipment supply, kitchen design, installation, AMC, brand dealership, and turnkey projects.',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Kitchen Equipment Categories',
          url: 'https://vsdinternational.com/#kitchen-equipment',
          description: 'Cooking equipment, refrigeration, bakery equipment, food preparation, dishwashing, and bar equipment.',
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Industries We Serve',
          url: 'https://vsdinternational.com/#industries-we-serve',
          description: 'Hotels, hospitals, restaurants, cloud kitchens, bakeries, and institutional clients.',
        },
        {
          '@type': 'ListItem',
          position: 4,
          name: 'Featured Projects',
          url: 'https://vsdinternational.com/#featured-projects',
          description: 'Completed kitchen projects at Hyatt Regency Delhi, Metro Hospitals, and Rebel Foods.',
        },
        {
          '@type': 'ListItem',
          position: 5,
          name: 'How We Work — Our Process',
          url: 'https://vsdinternational.com/#our-process',
          description: 'Six-step turnkey process: site visit, layout design, equipment selection, supply, installation, and AMC.',
        },
        {
          '@type': 'ListItem',
          position: 6,
          name: 'Stainless Steel Fabrication',
          url: 'https://vsdinternational.com/#stainless-steel-fabrication',
          description: 'In-house SS 304 fabrication of worktables, sinks, shelving, exhaust hoods, trolleys, and custom kitchen furniture.',
        },
        {
          '@type': 'ListItem',
          position: 7,
          name: 'International Kitchen Equipment Brands',
          url: 'https://vsdinternational.com/#international-brands',
          description: 'Authorised dealer for Rational, Robot Coupe, Frymaster, Hamilton Beach, Scotsman, BUNN, and Vitamix.',
        },
        {
          '@type': 'ListItem',
          position: 8,
          name: 'Client Testimonials & Reviews',
          url: 'https://vsdinternational.com/#client-testimonials',
          description: '5 star rating from 312 verified Google reviews from hotels, hospitals, and cloud kitchen clients.',
        },
        {
          '@type': 'ListItem',
          position: 9,
          name: 'Frequently Asked Questions',
          url: 'https://vsdinternational.com/#faqs',
          description: '30 detailed answers covering pricing, timelines, equipment types, compliance, and how to get started.',
        },
        {
          '@type': 'ListItem',
          position: 10,
          name: 'Cities We Serve Across India',
          url: 'https://vsdinternational.com/#cities-we-serve',
          description: 'Commercial kitchen equipment supply and installation in Delhi, Mumbai, Bangalore, Hyderabad, Chennai, Pune, Kolkata, and 50+ cities.',
        },
        {
          '@type': 'ListItem',
          position: 11,
          name: 'Industry Guides & Kitchen Planning Blogs',
          url: 'https://vsdinternational.com/#blog-guides',
          description: 'Expert guides on hotel kitchen setup, cloud kitchen equipment checklists, and commercial kitchen planning.',
        },
        {
          '@type': 'ListItem',
          position: 12,
          name: 'Get a Free Quote',
          url: 'https://vsdinternational.com/#get-a-quote',
          description: 'Request a free site visit, kitchen layout, and itemised equipment quote. Response within 1 business hour.',
        },
      ],
    },

    /* ── 6. FAQPage — 30 Q&As → expandable rich results in Google ────────── */
    {
      '@type': 'FAQPage',
      '@id': 'https://vsdinternational.com/#faqpage',
      mainEntity: allFaqs.map((faq) => ({
        '@type': 'Question',
        name: faq.q,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.a,
        },
      })),
    },
  ],
};

/* --- HomePage — Server Component ------------------------------------------- */
export default function HomePage() {
  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homePageSchema) }}
      />

      {/* ① Announcement Bar */}
      <AnnouncementBar />

      {/* ② Sticky Navbar + Mega Navigation */}
      <Navbar />

      <main id="main-content" className="pb-20 sm:pb-0">

        <Hero />

        <TrustMetrics />

        <HomepageQuickLinks />


        <OurProductsShowcase />


        <EnquireNow />


        <PreparationCarousel />


        <ServicesOverview />


        <MadeInHouseSection />


        <CookingEquipmentCarousel />


        <ClientLogos />


        <IndustriesServed />


        <RefrigeratorsCarousel />


        <FeaturedProject />


        <ProcessWorkflow />


        <BrandsStrip />


        <SSFabricationBlock />


        <VideoSection />


        <DelhiLocalSection />


        <Testimonials />


        <GoogleReviewsSection />


        <FAQSection />


        <CitiesWeServe />


        <CTABanner />
        
      </main>


      <Footer />


      <WhatsAppFloat />
      <MobileFooterCTA />
      <EnquiryModal />
      <LeadPopup />
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
              aria-label="5 out of 5 stars"
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
                5.0
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
              href="https://maps.app.goo.gl/kzyGxozpqqGEK13i6"
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
