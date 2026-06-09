// TODO: Replace mockProduct with db.getProduct(params.slug) when DB is connected

import type { Metadata } from 'next';
import { Cormorant_Garamond, DM_Sans } from 'next/font/google';
import { notFound } from 'next/navigation';

import { mockProduct } from '@/lib/productData';
import { SITE_URL } from '@/lib/config';

import Breadcrumb from '@/components/product/Breadcrumb';
import ProductHero from '@/components/product/ProductHero';
import ProductOverview from '@/components/product/ProductOverview';
import ProductSpecs from '@/components/product/ProductSpecs';
import ProductFeatures from '@/components/product/ProductFeatures';
import ProductBestFor from '@/components/product/ProductBestFor';
import ProductTechnical from '@/components/product/ProductTechnical';
import ProductWhyVSD from '@/components/product/ProductWhyVSD';
import ProductComparison from '@/components/product/ProductComparison';
import ProductProof from '@/components/product/ProductProof';
import ProductReviews from '@/components/product/ProductReviews';
import ProductFAQ from '@/components/product/ProductFAQ';
import ProductRelated from '@/components/product/ProductRelated';
import ProductCTA from '@/components/product/ProductCTA';
import StickyEnquiryBar from '@/components/product/StickyEnquiryBar';

/* ── Fonts ──────────────────────────────────────────────────────────────────── */
const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  variable: '--font-cormorant',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
});

/* ── Types ──────────────────────────────────────────────────────────────────── */
type PageParams = Promise<{ category: string; slug: string }>;

/* ── generateMetadata ────────────────────────────────────────────────────────  */
export async function generateMetadata({ params }: { params: PageParams }): Promise<Metadata> {
  const { slug } = await params;

  // TODO: fetch from DB — const product = await db.getProduct(slug);
  const product = slug === mockProduct.slug ? mockProduct : null;
  if (!product) return { title: 'Product Not Found' };

  const canonicalUrl = `${SITE_URL}${product.seo.canonicalSlug}`;
  const firstImage = product.images[0];

  return {
    title: product.seo.title,
    description: product.seo.metaDescription,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: product.seo.title,
      description: product.seo.metaDescription,
      url: canonicalUrl,
      type: 'website',
      images: [
        {
          url: firstImage.startsWith('http') ? firstImage : `${SITE_URL}${firstImage}`,
          width: 1200,
          height: 900,
          alt: `${product.brand} ${product.fullName} — front view`,
        },
      ],
    },
  };
}

/* ── Page Component ─────────────────────────────────────────────────────────── */
export default async function ProductPage({ params }: { params: PageParams }) {
  const { slug } = await params;

  // TODO: fetch from DB — const product = await db.getProduct(slug);
  const product = slug === mockProduct.slug ? mockProduct : null;
  if (!product) notFound();

  return (
    <>
      {/* Skip-to-content link for accessibility */}
      <a
        href="#product-content"
        style={{
          position: 'absolute',
          left: '-9999px',
          top: 'auto',
          width: '1px',
          height: '1px',
          overflow: 'hidden',
          zIndex: -1,
        }}
        className="focus-visible:left-4 focus-visible:top-4 focus-visible:w-auto focus-visible:h-auto focus-visible:overflow-visible focus-visible:z-[200] focus-visible:bg-white focus-visible:px-4 focus-visible:py-2 focus-visible:rounded"
      >
        Skip to content
      </a>

      {/* JSON-LD Schema — server-rendered for crawlers & LLM retrievers */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(product.schema) }}
      />

      {/* Font variable scope — Cormorant Garamond + DM Sans for this page */}
      <div className={`${cormorant.variable} ${dmSans.variable}`}>

        <main id="product-content" tabIndex={-1}>
          <article itemScope itemType="https://schema.org/Product">
            <meta itemProp="name" content={product.fullName} />
            <meta itemProp="brand" content={product.brand} />
            <meta itemProp="description" content={product.overview} />

            {/* 01 — Breadcrumb */}
            <Breadcrumb
              product={{ fullName: product.fullName, category: product.category }}
            />

            {/* 02 — Product Hero: image gallery + identity + primary CTA */}
            <ProductHero
              product={{
                brand: product.brand,
                fullName: product.fullName,
                tagline: product.tagline,
                images: product.images,
                keyFacts: product.keyFacts,
                priceContext: product.priceContext,
                leadTime: product.leadTime,
                whatsappMessage: product.whatsappMessage,
              }}
              heroCtaId="hero-cta"
            />

            {/* 03 — Answer-first overview (primary AI citation asset) */}
            <ProductOverview
              overview={product.overview}
              fullName={product.fullName}
              category={product.category}
            />

            {/* 04 — Specifications table (primary AEO asset) */}
            <ProductSpecs specs={product.specs} fullName={product.fullName} />

            {/* 05 — Features & benefits */}
            <ProductFeatures features={product.features} />

            {/* 06 — Best for / use cases */}
            <ProductBestFor bestFor={product.bestFor} />

            {/* 07 — Technical details & compliance */}
            <ProductTechnical
              technical={product.technical}
              compliance={product.compliance}
              fullName={product.fullName}
            />

            {/* 08 — Why buy from VSD */}
            <ProductWhyVSD whyVSD={product.whyVSD} />

            {/* 09 — Comparison / alternatives */}
            <ProductComparison
              comparison={product.comparison}
              comparisonModels={product.comparisonModels}
              fullName={product.fullName}
              category={product.category}
            />

            {/* 10 — Real project proof */}
            <ProductProof projectProof={product.projectProof} fullName={product.fullName} />

            {/* 11 — Reviews & ratings */}
            <ProductReviews
              reviews={product.reviews}
              aggregateRating={product.aggregateRating}
              reviewCount={product.reviewCount}
              fullName={product.fullName}
            />

            {/* 12 — FAQ accordion (AEO / GEO play) */}
            <ProductFAQ faq={product.faq} fullName={product.fullName} />
          </article>

          {/* 13 — Related products */}
          <ProductRelated relatedProducts={product.relatedProducts} />

          {/* 14 — Final CTA + WhatsApp */}
          <ProductCTA fullName={product.fullName} whatsappMessage={product.whatsappMessage} />
        </main>

        {/* Sticky enquiry bar — fixed, shown when hero CTA scrolls out of view */}
        <StickyEnquiryBar
          product={{ fullName: product.fullName, whatsappMessage: product.whatsappMessage }}
          heroCTASelector="#hero-cta"
        />
      </div>
    </>
  );
}
