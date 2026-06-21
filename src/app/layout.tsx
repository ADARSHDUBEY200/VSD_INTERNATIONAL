import type { Metadata } from 'next';
import { Playfair_Display, Inter } from 'next/font/google';
import Script from 'next/script';
import './globals.css';

/* --- Fonts ---------------------------------------------------------------- */
const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800', '900'],
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700', '800'],
});

/* --- SEO Metadata --------------------------------------------------------- */
export const metadata: Metadata = {
  metadataBase: new URL('https://vsdinternational.com'),

  title: {
    default:
      'VSD International — Commercial Kitchen Equipment Manufacturer | ISO 9001 | Hyatt · Radisson · ITC',
    template: '%s | VSD International',
  },

  description:
    'ISO 9001 certified commercial kitchen equipment supplier. Trusted by Hyatt, Radisson, Crowne Plaza & ITC. Hotel, hospital & cloud kitchen setup. Delhi factories. WhatsApp +91-9250346370.',

  keywords: [
    'commercial kitchen equipment manufacturer India',
    'commercial kitchen equipment supplier Delhi',
    'hotel kitchen equipment India',
    'hospital kitchen equipment',
    'cloud kitchen equipment',
    'turnkey kitchen solutions India',
    'VSD International',
    'kitchen equipment Delhi',
    'Rational combi oven India',
    'Robot Coupe India dealer',
    'ISO 9001 kitchen equipment',
    'stainless steel fabrication kitchen',
    'restaurant kitchen equipment',
    'bakery equipment India',
    'AMC kitchen equipment',
  ],

  authors: [{ name: 'VSD International', url: 'https://vsdinternational.com' }],
  creator: 'VSD International',
  publisher: 'VSD International',

  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 },
  },

  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://vsdinternational.com',
    siteName: 'VSD International',
    title:
      'VSD International — #1 Commercial Kitchen Equipment Manufacturer India | ISO 9001 | Hyatt · Radisson · ITC',
    description:
      'Complete Kitchen Solutions by VSD International — 5★ · 312 reviews. ISO 9001 certified. Hotel, hospital & cloud kitchen equipment. Hyatt · Radisson · Crowne Plaza · ITC clients. Supply, design, install & AMC. Delhi factory. From ₹8 Lakhs. WhatsApp +91-9250346370.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'VSD International — Commercial Kitchen Equipment Manufacturer India',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title:
      'VSD International — Commercial Kitchen Equipment Manufacturer | ISO 9001',
    description:
      'ISO 9001 certified. Trusted by Hyatt, Radisson, Crowne Plaza & ITC. Hotel, hospital & cloud kitchen equipment. WhatsApp +91-9250346370.',
    images: ['/og-image.jpg'],
  },

  alternates: {
    canonical: 'https://vsdinternational.com',
  },

  other: {
    'geo.region': 'IN-DL',
    'geo.placename': 'New Delhi',
    'geo.position': '28.6139;77.2090',
    'ICBM': '28.6139, 77.2090',
  },
};

/* --- JSON-LD Schema Stack ------------------------------------------------- */
const schemaGraph = {
  '@context': 'https://schema.org',
  '@graph': [
    // 1. ORGANIZATION — Entity anchor for Knowledge Panel
    {
      '@type': 'Organization',
      '@id': 'https://vsdinternational.com/#organization',
      name: 'VSD International',
      url: 'https://vsdinternational.com',
      logo: {
        '@type': 'ImageObject',
        url: 'https://vsdinternational.com/logo.png',
        width: 200,
        height: 60,
      },
      foundingDate: '2019',
      description:
        'ISO 9001 certified manufacturer and supplier of commercial kitchen equipment for hotels, hospitals, restaurants, cloud kitchens, and institutional clients across India.',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'A-347 Saraswati Gali Mandawali',
        addressLocality: 'New Delhi',
        addressRegion: 'Delhi',
        postalCode: '110092',
        addressCountry: 'IN',
      },
      telephone: '+91-9250346370',
      email: 'sales@vsdinternational.com',
      sameAs: [
        'https://www.linkedin.com/company/vsd-international',
        'https://www.indiamart.com/vsd-international',
        'https://maps.app.goo.gl/kzyGxozpqqGEK13i6',
      ],
    },

    // 2. LOCAL BUSINESS — For local SERP + map pack
    {
      '@type': 'LocalBusiness',
      '@id': 'https://vsdinternational.com/#localbusiness',
      name: 'VSD International',
      image: 'https://vsdinternational.com/og-image.jpg',
      url: 'https://vsdinternational.com',
      telephone: '+91-9250346370',
      email: 'sales@vsdinternational.com',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'A-347 Saraswati Gali Mandawali',
        addressLocality: 'New Delhi',
        addressRegion: 'Delhi',
        postalCode: '110092',
        addressCountry: 'IN',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 28.6139,
        longitude: 77.209,
      },
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
          opens: '09:00',
          closes: '18:00',
        },
      ],
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '5',
        reviewCount: '312',
        bestRating: '5',
        worstRating: '1',
      },
      priceRange: '₹₹₹',
      currenciesAccepted: 'INR',
      paymentAccepted: 'Cash, Bank Transfer, Cheque, RTGS, NEFT',
      areaServed: {
        '@type': 'Country',
        name: 'India',
      },
    },

    // 3. WEBSITE — Enables Sitelinks Search Box
    {
      '@type': 'WebSite',
      '@id': 'https://vsdinternational.com/#website',
      name: 'VSD International',
      url: 'https://vsdinternational.com',
      publisher: { '@id': 'https://vsdinternational.com/#organization' },
      potentialAction: {
        '@type': 'SearchAction',
        target: {
          '@type': 'EntryPoint',
          urlTemplate: 'https://vsdinternational.com/?s={search_term_string}',
        },
        'query-input': 'required name=search_term_string',
      },
    },

    // 4. SITE NAVIGATION ELEMENT — Sitelinks signal
    {
      '@type': 'SiteNavigationElement',
      name: ['Services', 'Industries', 'Projects', 'Brands', 'About', 'Contact'],
      url: [
        'https://vsdinternational.com/services/',
        'https://vsdinternational.com/industries/',
        'https://vsdinternational.com/projects/',
        'https://vsdinternational.com/brands/',
        'https://vsdinternational.com/about/',
        'https://vsdinternational.com/contact/',
      ],
    },

    // 5. VIDEO OBJECT — Enables video snippet in SERP
    {
      '@type': 'VideoObject',
      name: 'VSD International Factory Tour — Commercial Kitchen Equipment Manufacturer Delhi',
      description:
        'Tour of VSD International\'s manufacturing facility in Delhi. ISO 9001 certified. Supplier to Hyatt, Radisson, Crowne Plaza, and leading hospitals.',
      thumbnailUrl: 'https://vsdinternational.com/video-thumbnail.jpg',
      uploadDate: '2026-01-15',
      duration: 'PT8M24S',
      publisher: { '@id': 'https://vsdinternational.com/#organization' },
    },
  ],
};

/* --- Root Layout ---------------------------------------------------------- */
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${inter.variable} scroll-smooth`}
    >
      <head>
        {/* Preconnect for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* JSON-LD Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaGraph) }}
        />

        {/* Theme color for mobile browser chrome */}
        <meta name="theme-color" content="#0C0C0A" />

        {/* Geo tags for local SEO */}
        <meta name="geo.region" content="IN-DL" />
        <meta name="geo.placename" content="New Delhi" />
        <meta name="geo.position" content="28.6139;77.2090" />

        {/* Business verification tags */}
        <meta name="rating" content="general" />
        <meta name="revisit-after" content="7 days" />
        <meta name="language" content="English" />
        <meta name="category" content="commercial kitchen equipment" />
        <meta name="classification" content="Business, Industrial Equipment" />

        {/* Structured contact info */}
        <link rel="me" href="tel:+919250346370" />
      </head>

      <body className="antialiased min-h-screen">
        {children}

        {/* Google Analytics placeholder — add GA4 measurement ID */}
        {/* <Script src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID" strategy="afterInteractive" /> */}
      </body>
    </html>
  );
}
