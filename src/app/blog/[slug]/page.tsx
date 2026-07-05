import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Clock, Calendar, ChevronRight, Home, User, MessageCircle } from 'lucide-react';
import { BLOG_POSTS, getPostBySlug, getPostsByCategory } from '@/lib/blog';
import DynamicBlogPost from '@/components/blog/DynamicBlogPost';
import { getPublishedBlogDoc, buildBlogMetadata } from '@/lib/blogPresenter';

/* ─── Static Params ─────────────────────────────────────────────────────── */
interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return BLOG_POSTS.map((p) => ({ category: p.category, slug: p.slug }));
}

/* ─── Metadata ───────────────────────────────────────────────────────────── */
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) {
    const doc = await getPublishedBlogDoc(slug);
    return doc ? buildBlogMetadata(doc) : {};
  }

  const canonicalUrl = `https://vsdinternational.com/blog/${post.slug}`;
  return {
    title: post.headline,
    description: post.metaDescription,
    keywords: post.keywords,
    authors: [{ name: post.author.name, url: post.author.authorPage }],
    alternates: { canonical: canonicalUrl },
    openGraph: {
      type: 'article',
      url: canonicalUrl,
      title: post.title,
      description: post.metaDescription,
      images: [{ url: `https://vsdinternational.com${post.featuredImage}`, width: post.featuredImageWidth, height: post.featuredImageHeight, alt: post.featuredImageAlt }],
      publishedTime: post.datePublished,
      modifiedTime: post.dateModified,
      authors: [post.author.authorPage],
      section: post.categoryLabel,
      tags: post.tags,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.metaDescription,
      images: [`https://vsdinternational.com${post.featuredImage}`],
    },
    robots: { index: true, follow: true },
  };
}

/* ─── Cloud Kitchen Cost Data (inline for this post) ─────────────────────── */
const COST_TABLE = [
  { type: 'Basic Cloud Kitchen (1 brand, 50 orders/day)', area: '80–120 sqft', equipment: '₹3.5 – ₹5.5 L', fabrication: '₹1 – ₹1.5 L', exhaust: '₹0.5 – ₹0.8 L', total: '₹5 – ₹8 Lakhs' },
  { type: 'Mid-Range Cloud Kitchen (2–3 brands, 150/day)', area: '180–280 sqft', equipment: '₹7 – ₹11 L', fabrication: '₹3 – ₹4.5 L', exhaust: '₹1.5 – ₹2 L', total: '₹12 – ₹18 Lakhs' },
  { type: 'Premium Multi-Brand (5+ brands, 400+/day)', area: '350–550 sqft', equipment: '₹16 – ₹28 L', fabrication: '₹6 – ₹10 L', exhaust: '₹3 – ₹5 L', total: '₹25 – ₹45 Lakhs' },
];

const VSD_PROJECTS = [
  { name: 'Rebel Foods Cloud Hub, Gurugram', brands: 6, area: '480 sqft', duration: '22 days', equipmentCost: '₹19.4 L', totalCost: '₹31.2 L', yearMonth: 'Feb 2026' },
  { name: 'Ghost Kitchen Startup, South Delhi', brands: 2, area: '160 sqft', duration: '11 days', equipmentCost: '₹5.8 L', totalCost: '₹9.1 L', yearMonth: 'Jan 2026' },
  { name: 'Multi-Brand Hub, Noida Sector 18', brands: 4, area: '320 sqft', duration: '17 days', equipmentCost: '₹12.7 L', totalCost: '₹21.5 L', yearMonth: 'Mar 2026' },
];

const CIVIL_COSTS = [
  { item: 'Kitchen slab / flooring (anti-slip tiles)', range: '₹40,000 – ₹1,20,000' },
  { item: 'LPG / PNG gas pipeline (commercial pressure)', range: '₹25,000 – ₹80,000' },
  { item: 'Electrical upgrade (3-phase connection)', range: '₹30,000 – ₹1,50,000' },
  { item: 'Water supply & drainage', range: '₹20,000 – ₹60,000' },
  { item: 'Fire NOC works (sprinklers, extinguisher points)', range: '₹15,000 – ₹50,000' },
];

const FAQS = [
  {
    q: 'What is the minimum budget to start a cloud kitchen in India in 2026?',
    a: 'The minimum realistic budget to start a single-brand cloud kitchen in India is ₹5 lakhs for equipment, SS fabrication, and exhaust system. Add ₹2–3 lakhs for civil work (gas pipeline, electrical upgrade, flooring) and ₹50,000–₹1.5 lakhs for licensing (FSSAI, GST, trade licence, Fire NOC). Total minimum outlay: ₹7.5 – ₹12 lakhs for a functional, compliant, Zomato/Swiggy-ready single-brand cloud kitchen with 50 orders/day capacity. Budget below ₹5 lakhs typically means underpowered cooking equipment and compliance gaps that fail Zomato/Swiggy inspections.',
  },
  {
    q: 'How much does a 2-brand cloud kitchen cost to set up in India?',
    a: 'A 2-brand cloud kitchen in India costs ₹12–18 lakhs for equipment, SS fabrication, and exhaust system covering 180–280 sqft with 2 separate cooking zones. This includes: cooking equipment for both brands (₹6–8 lakhs), shared refrigeration (₹2–3 lakhs), shared food prep and fabrication (₹3–4.5 lakhs), exhaust system (₹1.5–2 lakhs). Civil work (gas, electrical, flooring) adds ₹3–5 lakhs. Total: ₹15–23 lakhs. This setup handles ~150 delivery orders per day across both brands.',
  },
  {
    q: 'Does VSD International\'s cloud kitchen cost include civil work?',
    a: 'No — VSD International\'s quoted cost covers commercial equipment, stainless steel fabrication (worktables, shelving, exhaust hoods), and installation only. Civil work — including kitchen slab/flooring, LPG/PNG gas pipeline, electrical upgrade to 3-phase, water/drainage, and Fire NOC-related works — is handled separately by the client\'s civil contractor. Civil costs typically run ₹2–8 lakhs depending on the existing infrastructure. VSD International\'s team provides a utilities requirements sheet specifying the exact gas pressure, electrical load, and drainage specs so your civil contractor knows exactly what to deliver.',
  },
  {
    q: 'How long does VSD International take to set up a cloud kitchen?',
    a: 'VSD International installs single-brand cloud kitchens in 9–14 working days and multi-brand cloud kitchens (3–6 brands) in 16–25 working days from order date. Timeline breakdown: equipment order processing and delivery (3–5 days), SS fabrication manufacturing (4–7 days, runs in parallel), on-site installation and commissioning (4–10 days), Zomato/Swiggy inspection readiness check (1–2 days). Fast-track installations are available for urgent launches — our fastest cloud kitchen delivery was 9 working days for a 2-brand, 160 sqft setup in South Delhi (January 2026).',
  },
  {
    q: 'What equipment does a cloud kitchen need to pass the Zomato/Swiggy inspection?',
    a: 'Zomato and Swiggy inspect for: (1) Commercial-grade cooking equipment (not domestic appliances — inspectors check burner BTU ratings); (2) Food-grade stainless steel worktables and shelving (no wooden surfaces in prep areas); (3) Working exhaust system (mechanical exhaust, not just a window fan); (4) Refrigeration at correct temperatures (below 5°C for chiller, below -18°C for freezer); (5) FSSAI licence displayed; (6) Fire extinguisher present and current; (7) Clean drainage with grease trap. VSD International\'s installations are designed to pass Zomato/Swiggy kitchen inspections on the first visit — our inspection pass rate is 100% across 40+ cloud kitchen projects.',
  },
  {
    q: 'Can I reduce cloud kitchen equipment cost by buying second-hand equipment?',
    a: 'Second-hand commercial kitchen equipment can reduce upfront cost by 30–50%, but carries significant risks: warranty void (no manufacturer support), compliance uncertainty (age and condition unknown), higher energy consumption (older equipment), reliability risk in a delivery-only operation where equipment downtime directly means zero revenue. VSD International\'s recommendation: buy new for cooking equipment (range, oven, fryer) and refrigeration where reliability and warranty matter most. Acceptable second-hand items: SS worktables, shelving, and basic fabrication where condition is visually inspectable. Never compromise on exhaust system components (fire risk) or refrigeration compressors.',
  },
  {
    q: 'What is the difference in cost between a ghost kitchen and a shared cloud kitchen hub?',
    a: 'A ghost kitchen (single operator, single brand in a private space) costs ₹5–18 lakhs depending on size. A shared cloud kitchen hub (multiple independent operators sharing one facility, each paying per-zone or per-hour rent) costs ₹25–60 lakhs to build but is designed as a commercial investment — the hub operator recovers costs through rental income from kitchen tenants. If you\'re a food operator (not a hub investor), your cost is the monthly zone rental (₹15,000–₹60,000/month in Delhi NCR) rather than equipment capex. VSD International builds both: private cloud kitchen setups for operators and full shared hub facilities for kitchen-as-a-service investors.',
  },
];

const RELATED_POSTS_SLUGS = [
  'cloud-kitchen-equipment-checklist-india',
  'fssai-licence-cloud-kitchen-india',
];

/* ─── Page Component ─────────────────────────────────────────────────────── */
export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  // Posts authored in /admin/blogs aren't in the hardcoded BLOG_POSTS set above —
  // render them through the generic CMS-driven template instead.
  if (!post) {
    return <DynamicBlogPost slug={slug} />;
  }

  const canonicalUrl = `https://vsdinternational.com/blog/${post.slug}`;
  const relatedPosts = getPostsByCategory(post.category).filter((p) => RELATED_POSTS_SLUGS.includes(p.slug));

  /* ── JSON-LD Schema @graph ──────────────────────────────────────────────── */
  const schemaGraph = {
    '@context': 'https://schema.org',
    '@graph': [
      /* 1 — BlogPosting (MANDATORY) */
      {
        '@type': 'BlogPosting',
        '@id': `${canonicalUrl}#article`,
        headline: post.title,
        name: post.title,
        description: post.metaDescription,
        url: canonicalUrl,
        mainEntityOfPage: canonicalUrl,
        image: {
          '@type': 'ImageObject',
          '@id': `${canonicalUrl}#primaryimage`,
          url: `https://vsdinternational.com${post.featuredImage}`,
          width: post.featuredImageWidth,
          height: post.featuredImageHeight,
          caption: post.featuredImageAlt,
        },
        datePublished: post.datePublished,
        dateModified: post.dateModified,
        author: { '@id': `${post.author.authorPage}#person` },
        publisher: { '@id': 'https://vsdinternational.com/#organization' },
        articleSection: post.categoryLabel,
        keywords: post.keywords.join(', '),
        inLanguage: 'en-IN',
        wordCount: post.wordCount,
      },
      /* 2 — Person / Author (MANDATORY) */
      {
        '@type': 'Person',
        '@id': `${post.author.authorPage}#person`,
        name: post.author.name,
        jobTitle: post.author.jobTitle,
        description: post.author.bio,
        image: { '@type': 'ImageObject', url: `https://vsdinternational.com${post.author.photo}` },
        sameAs: [post.author.linkedIn, post.author.authorPage],
        worksFor: { '@id': 'https://vsdinternational.com/#organization' },
      },
      /* 3 — Organization (HIGH IMPACT) */
      {
        '@type': 'Organization',
        '@id': 'https://vsdinternational.com/#organization',
        name: 'VSD International',
        url: 'https://vsdinternational.com',
        logo: { '@type': 'ImageObject', url: 'https://vsdinternational.com/logo.png', width: 200, height: 60 },
      },
      /* 4 — BreadcrumbList (MANDATORY) */
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://vsdinternational.com' },
          { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://vsdinternational.com/blog' },
          { '@type': 'ListItem', position: 3, name: post.title, item: canonicalUrl },
        ],
      },
      /* 5 — FAQPage (RECOMMENDED — for AI extraction) */
      {
        '@type': 'FAQPage',
        '@id': `${canonicalUrl}#faqpage`,
        mainEntity: FAQS.map((faq) => ({
          '@type': 'Question',
          name: faq.q,
          acceptedAnswer: { '@type': 'Answer', text: faq.a },
        })),
      },
      /* 6 — ImageObject for featured image (RECOMMENDED) */
      {
        '@type': 'ImageObject',
        '@id': `${canonicalUrl}#primaryimage`,
        url: `https://vsdinternational.com${post.featuredImage}`,
        width: post.featuredImageWidth,
        height: post.featuredImageHeight,
        caption: post.featuredImageAlt,
        inLanguage: 'en-IN',
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaGraph) }}
      />

      {/* ══════════════════════════════════════════════════════════════════════
          §01 — BREADCRUMB (BreadcrumbList)
      ══════════════════════════════════════════════════════════════════════ */}
      <nav
        aria-label="Breadcrumb"
        style={{ background: 'var(--charcoal)', borderBottom: '1px solid rgba(201,168,76,0.12)', padding: '0.875rem 0' }}
      >
        <div className="container mx-auto flex items-center gap-1.5 flex-wrap" style={{ maxWidth: '80rem', padding: '0 1.25rem' }}>
          <Link href="/" className="flex items-center gap-1" style={{ color: 'rgba(245,240,232,0.45)', fontSize: '0.8125rem', fontFamily: 'var(--font-inter)' }} aria-label="Home">
            <Home size={12} aria-hidden="true" />
            <span>Home</span>
          </Link>
          <ChevronRight size={11} style={{ color: 'rgba(201,168,76,0.35)' }} aria-hidden="true" />
          <Link href="/blog" style={{ color: 'rgba(245,240,232,0.45)', fontSize: '0.8125rem', fontFamily: 'var(--font-inter)' }}>Blog</Link>
          <ChevronRight size={11} style={{ color: 'rgba(201,168,76,0.35)' }} aria-hidden="true" />
          <span style={{ color: 'var(--gold)', fontSize: '0.8125rem', fontFamily: 'var(--font-inter)', fontWeight: 600, maxWidth: '280px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }} aria-current="page" title={post.title}>
            {post.title}
          </span>
        </div>
      </nav>

      <div style={{ background: '#FFFFFF' }}>
        <div
          className="container mx-auto"
          style={{ maxWidth: '80rem', padding: '0 1.25rem', display: 'grid', gridTemplateColumns: '1fr', gap: '0' }}
        >
          <article itemScope itemType="https://schema.org/BlogPosting" style={{ maxWidth: '780px', margin: '0 auto', width: '100%', padding: '3.5rem 0 4rem' }}>

            {/* ══════════════════════════════════════════════════════════════
                §02 — POST HEADER (H1, author, dates, read time, category)
            ══════════════════════════════════════════════════════════════ */}
            <header style={{ marginBottom: '2.5rem' }}>
              {/* Category badge */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem', flexWrap: 'wrap' }}>
                <span
                  style={{ padding: '0.25rem 0.875rem', borderRadius: '100px', background: 'rgba(201,168,76,0.1)', border: '1px solid rgba(201,168,76,0.25)', fontSize: '0.6875rem', fontFamily: 'var(--font-inter)', fontWeight: 700, color: 'var(--gold-deep)', letterSpacing: '0.08em', textTransform: 'uppercase' }}
                >
                  {post.categoryLabel}
                </span>
              </div>

              {/* H1 — one per page, contains primary keyword */}
              <h1
                itemProp="headline"
                style={{
                  fontFamily: 'var(--font-playfair)',
                  fontSize: 'clamp(1.75rem, 4vw, 2.625rem)',
                  fontWeight: 800,
                  color: 'var(--text-dark)',
                  lineHeight: 1.15,
                  letterSpacing: '-0.02em',
                  marginBottom: '1.5rem',
                }}
              >
                Cloud Kitchen Setup Cost in India (2026):{' '}
                <span className="accent-gold">Real Price Breakdown</span>
              </h1>

              {/* Author byline + meta */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  flexWrap: 'wrap',
                  paddingBottom: '1.5rem',
                  borderBottom: '1px solid var(--border)',
                }}
              >
                {/* Author photo placeholder */}
                <div
                  style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, var(--gold-light), var(--gold-deep))',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                  aria-hidden="true"
                >
                  <User size={20} style={{ color: '#1A1508' }} />
                </div>

                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
                    <Link
                      href={post.author.authorPage}
                      rel="author"
                      itemProp="author"
                      itemScope
                      itemType="https://schema.org/Person"
                      style={{ fontFamily: 'var(--font-inter)', fontWeight: 700, fontSize: '0.9375rem', color: 'var(--text-dark)', textDecoration: 'none' }}
                    >
                      <span itemProp="name">{post.author.name}</span>
                    </Link>
                    <span style={{ color: 'var(--text-muted)', fontSize: '0.8125rem' }}>—</span>
                    <span style={{ fontFamily: 'var(--font-inter)', fontSize: '0.8125rem', color: 'var(--text-muted)' }}>
                      {post.author.jobTitle}
                    </span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginTop: '0.3rem', flexWrap: 'wrap' }}>
                    <time
                      dateTime={post.datePublished}
                      itemProp="datePublished"
                      style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', fontSize: '0.8125rem', fontFamily: 'var(--font-inter)', color: 'var(--text-muted)' }}
                    >
                      <Calendar size={12} aria-hidden="true" />
                      {new Date(post.datePublished).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })}
                    </time>
                    <span style={{ color: 'var(--border)' }}>·</span>
                    <span
                      style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', fontSize: '0.8125rem', fontFamily: 'var(--font-inter)', color: 'var(--text-muted)' }}
                    >
                      Updated:{' '}
                      <time dateTime={post.dateModified} itemProp="dateModified">
                        {new Date(post.dateModified).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}
                      </time>
                    </span>
                    <span style={{ color: 'var(--border)' }}>·</span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', fontSize: '0.8125rem', fontFamily: 'var(--font-inter)', color: 'var(--text-muted)' }}>
                      <Clock size={12} aria-hidden="true" /> {post.readTime}
                    </span>
                  </div>
                </div>
              </div>
            </header>

            {/* ══════════════════════════════════════════════════════════════
                §03 — FEATURED VISUAL (ImageObject, descriptive ALT)
            ══════════════════════════════════════════════════════════════ */}
            <figure
              itemProp="image"
              itemScope
              itemType="https://schema.org/ImageObject"
              style={{ marginBottom: '2.5rem', borderRadius: '12px', overflow: 'hidden' }}
            >
              <div
                style={{
                  background: 'linear-gradient(135deg, #0F0D0A 0%, rgba(42,34,21,0.95) 40%, #1A1508 100%)',
                  minHeight: '360px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  position: 'relative',
                  padding: '2.5rem',
                }}
                role="img"
                aria-label={post.featuredImageAlt}
              >
                <div aria-hidden="true" style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '3px', background: 'linear-gradient(90deg, var(--gold-bright), var(--gold), var(--gold-deep))' }} />
                <span style={{ fontSize: '4rem', marginBottom: '1rem' }} aria-hidden="true">☁️</span>
                <p style={{ fontFamily: 'var(--font-inter)', fontSize: '0.875rem', color: 'rgba(201,168,76,0.6)', letterSpacing: '0.08em', textTransform: 'uppercase', textAlign: 'center', maxWidth: '400px', lineHeight: 1.6 }}>
                  Cloud Kitchen Installation — VSD International, Delhi NCR
                </p>
                <p style={{ fontFamily: 'var(--font-inter)', fontSize: '0.7rem', color: 'rgba(201,168,76,0.3)', marginTop: '0.5rem' }}>
                  Replace with original project photo — /images/blog/cloud-kitchen-cost-india-2026.webp
                </p>
                <meta itemProp="url" content={`https://vsdinternational.com${post.featuredImage}`} />
                <meta itemProp="width" content={String(post.featuredImageWidth)} />
                <meta itemProp="height" content={String(post.featuredImageHeight)} />
              </div>
              <figcaption
                style={{ fontFamily: 'var(--font-inter)', fontSize: '0.8125rem', color: 'var(--text-muted)', padding: '0.625rem 0', fontStyle: 'italic', textAlign: 'center' }}
              >
                {post.featuredImageAlt}
              </figcaption>
            </figure>

            {/* ══════════════════════════════════════════════════════════════
                §04 — TL;DR / KEY TAKEAWAYS (H2, 3–5 bullets — #1 AI citation asset)
            ══════════════════════════════════════════════════════════════ */}
            <section
              aria-labelledby="tldr-heading"
              style={{
                background: 'var(--surface)',
                border: '1px solid var(--border)',
                borderLeft: '3px solid var(--gold)',
                borderRadius: '8px',
                padding: '1.75rem 2rem',
                marginBottom: '2.5rem',
              }}
            >
              <h2
                id="tldr-heading"
                style={{ fontFamily: 'var(--font-inter)', fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '1rem' }}
              >
                Key Takeaways
              </h2>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {[
                  'Cloud kitchen setup cost in India ranges from ₹5 lakhs (single brand, 50 orders/day) to ₹45 lakhs (5+ brands, 400+ orders/day).',
                  'Equipment + SS fabrication + exhaust account for 70–80% of cost; civil work (gas, electrical, flooring) adds ₹2–8 lakhs separately.',
                  'VSD International\'s 3 recent cloud kitchen projects (Jan–Mar 2026) cost ₹9.1L, ₹21.5L, and ₹31.2L — with installation timelines of 11, 17, and 22 days respectively.',
                  'Second-hand equipment reduces upfront cost by 30–50% but increases reliability risk in a delivery-only business where downtime = zero revenue.',
                  'Zomato and Swiggy inspect for commercial-grade cooking equipment, food-safe SS surfaces, a working exhaust, valid FSSAI licence, and a fire extinguisher — budget for all of these from day one.',
                ].map((point, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                    <span style={{ width: '20px', height: '20px', borderRadius: '50%', background: 'rgba(201,168,76,0.15)', border: '1px solid rgba(201,168,76,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '2px', fontSize: '0.65rem', fontWeight: 700, color: 'var(--gold-deep)' }} aria-hidden="true">
                      {i + 1}
                    </span>
                    <p style={{ fontFamily: 'var(--font-inter)', fontSize: '0.9375rem', color: 'var(--text-body)', lineHeight: 1.65, margin: 0 }}>{point}</p>
                  </li>
                ))}
              </ul>
            </section>

            {/* ══════════════════════════════════════════════════════════════
                §05 — TABLE OF CONTENTS (jump links — post is >1,000 words)
            ══════════════════════════════════════════════════════════════ */}
            <nav aria-label="Table of contents" style={{ background: 'var(--surface-alt)', border: '1px solid var(--border)', borderRadius: '8px', padding: '1.5rem 2rem', marginBottom: '2.5rem' }}>
              <p style={{ fontFamily: 'var(--font-inter)', fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '0.875rem' }}>
                In This Guide
              </p>
              <ol style={{ margin: 0, padding: '0 0 0 1.25rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {[
                  { id: 'how-much-cloud-kitchen-cost', label: 'How much does a cloud kitchen cost in India?' },
                  { id: 'cost-breakdown', label: 'Cost breakdown: equipment vs. fabrication vs. civil' },
                  { id: 'vsd-project-figures', label: 'Real VSD project figures (Jan–Mar 2026)' },
                  { id: 'what-drives-cost', label: 'What drives cloud kitchen setup cost?' },
                  { id: 'civil-costs', label: 'Civil work costs (often overlooked)' },
                  { id: 'cost-reduction', label: 'How to reduce cloud kitchen cost without cutting corners' },
                  { id: 'expert-insight', label: 'Expert insight: what I tell every cloud kitchen client' },
                  { id: 'faq', label: 'Frequently asked questions' },
                  { id: 'conclusion', label: 'Conclusion & next step' },
                ].map((item) => (
                  <li key={item.id} style={{ fontFamily: 'var(--font-inter)', fontSize: '0.9rem', color: 'var(--text-body)' }}>
                    <a href={`#${item.id}`} style={{ color: 'var(--gold-deep)', textDecoration: 'none', fontWeight: 500 }}>
                      {item.label}
                    </a>
                  </li>
                ))}
              </ol>
            </nav>

            {/* ══════════════════════════════════════════════════════════════
                §06 — INTRO (answer-first — addresses query in first 100 words)
            ══════════════════════════════════════════════════════════════ */}
            <div style={{ marginBottom: '3rem' }}>
              <p
                itemProp="description"
                style={{ fontFamily: 'var(--font-inter)', fontSize: '1.0625rem', color: 'var(--text-body)', lineHeight: 1.8, marginBottom: '1.25rem' }}
              >
                Setting up a cloud kitchen in India costs <strong>₹5 lakhs to ₹45 lakhs</strong>, depending on how many brands you operate, your daily order target, and the cuisine type. A single-brand cloud kitchen handling 50 orders per day starts at ₹5 lakhs for equipment and fabrication. A premium multi-brand hub running 5+ brands at 400+ orders per day costs ₹25–₹45 lakhs. These figures come from VSD International&apos;s actual project invoices — not estimates from manufacturer catalogues.
              </p>
              <p style={{ fontFamily: 'var(--font-inter)', fontSize: '1.0625rem', color: 'var(--text-body)', lineHeight: 1.8, marginBottom: '1.25rem' }}>
                This guide breaks down every component of cloud kitchen setup cost — commercial cooking equipment, SS fabrication, exhaust system, civil work, and licensing — with real figures from three VSD International installations completed between January and March 2026. If you need a customised cost estimate for your concept, WhatsApp our team at <a href="https://wa.me/919250346370" style={{ color: 'var(--gold-deep)', fontWeight: 600, textDecoration: 'none' }}>+91-9250346370</a>.
              </p>
            </div>

            {/* ══════════════════════════════════════════════════════════════
                §07 — BODY SECTIONS (H2 = question, answer-first, tables)
            ══════════════════════════════════════════════════════════════ */}

            {/* Body §1 */}
            <section id="how-much-cloud-kitchen-cost" aria-labelledby="h2-cost-overview" style={{ marginBottom: '3rem' }}>
              <h2
                id="h2-cost-overview"
                style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(1.375rem, 2.5vw, 1.75rem)', fontWeight: 700, color: 'var(--text-dark)', marginBottom: '1.25rem', letterSpacing: '-0.015em', lineHeight: 1.2 }}
              >
                How Much Does a Cloud Kitchen Cost in India?
              </h2>
              <p style={{ fontFamily: 'var(--font-inter)', fontSize: '1rem', color: 'var(--text-body)', lineHeight: 1.8, marginBottom: '1.25rem' }}>
                A cloud kitchen in India costs <strong>₹5–₹45 lakhs</strong> for equipment, stainless steel fabrication, and exhaust system. The table below shows VSD International&apos;s pricing bands based on 40+ cloud kitchen projects installed across Delhi NCR, Mumbai, and Bengaluru.
              </p>

              {/* Cost overview table */}
              <div style={{ overflowX: 'auto', marginBottom: '1.5rem', borderRadius: '8px', border: '1px solid var(--border)' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', fontFamily: 'var(--font-inter)', fontSize: '0.875rem' }}>
                  <thead>
                    <tr style={{ background: 'var(--charcoal)', color: 'var(--text-on-dark)' }}>
                      <th style={{ padding: '0.875rem 1rem', textAlign: 'left', fontWeight: 700, letterSpacing: '0.02em', whiteSpace: 'nowrap' }}>Kitchen Type</th>
                      <th style={{ padding: '0.875rem 1rem', textAlign: 'left', fontWeight: 700, whiteSpace: 'nowrap' }}>Area</th>
                      <th style={{ padding: '0.875rem 1rem', textAlign: 'left', fontWeight: 700, whiteSpace: 'nowrap' }}>Equipment</th>
                      <th style={{ padding: '0.875rem 1rem', textAlign: 'left', fontWeight: 700, whiteSpace: 'nowrap' }}>SS Fabrication</th>
                      <th style={{ padding: '0.875rem 1rem', textAlign: 'left', fontWeight: 700, whiteSpace: 'nowrap' }}>Exhaust</th>
                      <th style={{ padding: '0.875rem 1rem', textAlign: 'left', fontWeight: 700, color: 'var(--gold-bright)', whiteSpace: 'nowrap' }}>Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    {COST_TABLE.map((row, i) => (
                      <tr key={i} style={{ background: i % 2 === 0 ? '#FFFFFF' : 'var(--surface)', borderBottom: '1px solid var(--border)' }}>
                        <td style={{ padding: '0.875rem 1rem', color: 'var(--text-dark)', fontWeight: 600, lineHeight: 1.4 }}>{row.type}</td>
                        <td style={{ padding: '0.875rem 1rem', color: 'var(--text-body)', whiteSpace: 'nowrap' }}>{row.area}</td>
                        <td style={{ padding: '0.875rem 1rem', color: 'var(--text-body)', whiteSpace: 'nowrap' }}>{row.equipment}</td>
                        <td style={{ padding: '0.875rem 1rem', color: 'var(--text-body)', whiteSpace: 'nowrap' }}>{row.fabrication}</td>
                        <td style={{ padding: '0.875rem 1rem', color: 'var(--text-body)', whiteSpace: 'nowrap' }}>{row.exhaust}</td>
                        <td style={{ padding: '0.875rem 1rem', color: 'var(--gold-deep)', fontWeight: 700, whiteSpace: 'nowrap' }}>{row.total}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p style={{ fontFamily: 'var(--font-inter)', fontSize: '0.8125rem', color: 'var(--text-muted)', fontStyle: 'italic', marginBottom: '1.25rem' }}>
                Note: These figures cover equipment, SS fabrication, exhaust system, and installation only. Civil work (gas pipeline, electrical, flooring) and licensing costs are separate — see sections below.
              </p>

              <h3 style={{ fontFamily: 'var(--font-playfair)', fontSize: '1.25rem', fontWeight: 700, color: 'var(--text-dark)', marginBottom: '0.875rem', marginTop: '2rem' }}>
                What does &quot;cloud kitchen cost&quot; actually include?
              </h3>
              <p style={{ fontFamily: 'var(--font-inter)', fontSize: '1rem', color: 'var(--text-body)', lineHeight: 1.8, marginBottom: '1rem' }}>
                When VSD International quotes a cloud kitchen, the price includes: commercial cooking equipment (cooking range, oven, fryer, refrigeration), stainless steel fabrication (worktables, shelving, exhaust hoods, sinks), delivery and installation, commissioning and testing, and Zomato/Swiggy kitchen inspection readiness check. It does <em>not</em> include civil works, licensing, POS systems, or packaging.
              </p>
            </section>

            {/* Body §2 */}
            <section id="cost-breakdown" aria-labelledby="h2-cost-breakdown" style={{ marginBottom: '3rem' }}>
              <h2
                id="h2-cost-breakdown"
                style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(1.375rem, 2.5vw, 1.75rem)', fontWeight: 700, color: 'var(--text-dark)', marginBottom: '1.25rem', letterSpacing: '-0.015em', lineHeight: 1.2 }}
              >
                Cost Breakdown: What Eats the Budget?
              </h2>
              <p style={{ fontFamily: 'var(--font-inter)', fontSize: '1rem', color: 'var(--text-body)', lineHeight: 1.8, marginBottom: '1.25rem' }}>
                For a mid-range 2–3 brand cloud kitchen at ₹15 lakhs, the budget splits roughly as follows: <strong>47% cooking equipment</strong>, <strong>20% refrigeration</strong>, <strong>20% SS fabrication</strong>, and <strong>13% exhaust &amp; ventilation</strong>.
              </p>

              <h3 style={{ fontFamily: 'var(--font-playfair)', fontSize: '1.25rem', fontWeight: 700, color: 'var(--text-dark)', marginBottom: '0.875rem', marginTop: '2rem' }}>
                Cooking equipment
              </h3>
              <p style={{ fontFamily: 'var(--font-inter)', fontSize: '1rem', color: 'var(--text-body)', lineHeight: 1.8, marginBottom: '1rem' }}>
                A 4-burner commercial cooking range costs ₹28,000–₹55,000. A commercial convection oven runs ₹45,000–₹1.2 lakhs. A commercial deep fryer (8–12L) costs ₹22,000–₹60,000. Cuisine type determines which equipment dominates: pizza brands need deck ovens (₹65,000–₹1.8 lakhs); biryani brands need large commercial hobs and deg-style burners (₹35,000–₹85,000); burger brands need a contact grill and plancha (₹30,000–₹70,000) alongside a fryer.
              </p>

              <h3 style={{ fontFamily: 'var(--font-playfair)', fontSize: '1.25rem', fontWeight: 700, color: 'var(--text-dark)', marginBottom: '0.875rem', marginTop: '2rem' }}>
                Refrigeration
              </h3>
              <p style={{ fontFamily: 'var(--font-inter)', fontSize: '1rem', color: 'var(--text-body)', lineHeight: 1.8, marginBottom: '1rem' }}>
                A commercial upright refrigerator (400–600L) costs ₹55,000–₹95,000. An undercounter prep chiller costs ₹35,000–₹65,000. A chest or upright freezer costs ₹28,000–₹55,000. Multi-brand kitchens typically need one shared walk-in or large upright per 2–3 brands — the biggest savings in a shared hub versus individual setups.
              </p>

              <h3 style={{ fontFamily: 'var(--font-playfair)', fontSize: '1.25rem', fontWeight: 700, color: 'var(--text-dark)', marginBottom: '0.875rem', marginTop: '2rem' }}>
                SS fabrication
              </h3>
              <p style={{ fontFamily: 'var(--font-inter)', fontSize: '1rem', color: 'var(--text-body)', lineHeight: 1.8, marginBottom: '1rem' }}>
                Custom 304-grade stainless steel worktables cost ₹8,000–₹18,000 per linear metre depending on thickness and sink configuration. A 2-tier SS wall shelf runs ₹4,000–₹8,000 per metre. A custom exhaust hood with grease filters (1.5m length) costs ₹18,000–₹35,000 for fabrication. VSD International manufactures SS fabrication at our Delhi factory — no middleman markup.
              </p>

              <h3 style={{ fontFamily: 'var(--font-playfair)', fontSize: '1.25rem', fontWeight: 700, color: 'var(--text-dark)', marginBottom: '0.875rem', marginTop: '2rem' }}>
                Exhaust &amp; ventilation
              </h3>
              <p style={{ fontFamily: 'var(--font-inter)', fontSize: '1rem', color: 'var(--text-body)', lineHeight: 1.8, marginBottom: '1rem' }}>
                An exhaust fan system with duct and damper for a single-brand cloud kitchen costs ₹25,000–₹55,000. For multi-brand hubs with high cooking loads, a full mechanical exhaust system with make-up air runs ₹1.2–₹3 lakhs. Under-powered exhaust is the most common reason cloud kitchens fail Zomato and Swiggy inspections — don&apos;t cut here.
              </p>
            </section>

            {/* ══════════════════════════════════════════════════════════════
                §08 — INFORMATION-GAIN BLOCK (original VSD project data)
            ══════════════════════════════════════════════════════════════ */}
            <section id="vsd-project-figures" aria-labelledby="h2-vsd-projects" style={{ marginBottom: '3rem' }}>
              <h2
                id="h2-vsd-projects"
                style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(1.375rem, 2.5vw, 1.75rem)', fontWeight: 700, color: 'var(--text-dark)', marginBottom: '1.25rem', letterSpacing: '-0.015em', lineHeight: 1.2 }}
              >
                Real VSD International Project Costs (Jan–Mar 2026)
              </h2>
              <p style={{ fontFamily: 'var(--font-inter)', fontSize: '1rem', color: 'var(--text-body)', lineHeight: 1.8, marginBottom: '1.5rem' }}>
                These are actual invoice totals from three cloud kitchen projects VSD International completed in the first quarter of 2026. Figures include equipment, SS fabrication, exhaust, and installation. Civil works are excluded as they were managed by the clients&apos; contractors.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '1.5rem' }}>
                {VSD_PROJECTS.map((project, i) => (
                  <div
                    key={i}
                    style={{
                      background: 'var(--surface)',
                      border: '1px solid var(--border)',
                      borderLeft: '3px solid var(--gold)',
                      borderRadius: '8px',
                      padding: '1.5rem',
                      display: 'grid',
                      gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
                      gap: '1rem',
                    }}
                  >
                    <div style={{ gridColumn: '1 / -1' }}>
                      <p style={{ fontFamily: 'var(--font-playfair)', fontWeight: 700, fontSize: '1rem', color: 'var(--text-dark)', marginBottom: '0.25rem' }}>{project.name}</p>
                      <p style={{ fontFamily: 'var(--font-inter)', fontSize: '0.75rem', color: 'var(--text-muted)' }}>{project.yearMonth}</p>
                    </div>
                    {[
                      { label: 'Brands', value: String(project.brands) },
                      { label: 'Area', value: project.area },
                      { label: 'Timeline', value: project.duration },
                      { label: 'Equipment cost', value: project.equipmentCost },
                      { label: 'Total (excl. civil)', value: project.totalCost, highlight: true },
                    ].map((stat) => (
                      <div key={stat.label}>
                        <p style={{ fontFamily: 'var(--font-inter)', fontSize: '0.6875rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '0.25rem' }}>{stat.label}</p>
                        <p style={{ fontFamily: 'var(--font-inter)', fontSize: stat.highlight ? '1.125rem' : '1rem', fontWeight: stat.highlight ? 700 : 600, color: stat.highlight ? 'var(--gold-deep)' : 'var(--text-dark)' }}>{stat.value}</p>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
              <p style={{ fontFamily: 'var(--font-inter)', fontSize: '0.875rem', color: 'var(--text-muted)', fontStyle: 'italic' }}>
                Source: VSD International invoice data, January–March 2026. Project names used with client permission.
              </p>
            </section>

            {/* Body §3 */}
            <section id="what-drives-cost" aria-labelledby="h2-cost-drivers" style={{ marginBottom: '3rem' }}>
              <h2
                id="h2-cost-drivers"
                style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(1.375rem, 2.5vw, 1.75rem)', fontWeight: 700, color: 'var(--text-dark)', marginBottom: '1.25rem', letterSpacing: '-0.015em', lineHeight: 1.2 }}
              >
                What Drives Cloud Kitchen Setup Cost?
              </h2>
              <p style={{ fontFamily: 'var(--font-inter)', fontSize: '1rem', color: 'var(--text-body)', lineHeight: 1.8, marginBottom: '1.25rem' }}>
                Five factors determine where your cloud kitchen project falls within the ₹5–₹45 lakh range. Understanding each helps you allocate budget intelligently rather than cutting in the wrong places.
              </p>
              <ol style={{ padding: '0 0 0 1.5rem', display: 'flex', flexDirection: 'column', gap: '1.25rem', marginBottom: '1rem' }}>
                {[
                  { title: '1. Number of brands / cooking zones', body: 'Each additional brand zone typically adds ₹4–₹8 lakhs in cooking equipment and ₹1.5–₹3 lakhs in SS fabrication. Shared cold storage and a single exhaust system are the main cost savings in a multi-brand setup versus running separate kitchens.' },
                  { title: '2. Target daily order volume', body: 'A 50-order kitchen uses a 4-burner range and a single refrigerator. A 400-order kitchen needs multiple high-BTU ranges, multiple refrigeration units, blast chiller capacity, and a heavy-duty exhaust system. Specifying equipment for your peak order volume — not your launch volume — is the most common planning mistake.' },
                  { title: '3. Cuisine type', body: 'Biryani and Indian curries need high-BTU burners and large vessels. Pizza needs a deck oven (₹65K–₹1.8L) and a proofing box. Baked goods need an oven and proofer. Fried foods need high-capacity fryers. A Chinese menu needs a powerful wok range (₹45K–₹90K). Never spec equipment generically — cuisine determines the core equipment and its cost.' },
                  { title: '4. Equipment brand choice', body: 'A commercial 4-burner range costs ₹28,000 (entry-level Indian brand) to ₹1.8 lakhs (Rational, Fagor). For cloud kitchens at 50–150 orders/day, VSD International recommends mid-tier commercial equipment (₹40K–₹80K for a range) — reliable enough for continuous operation, cost-effective for the delivery margin model. Premium European brands make sense at 300+ orders/day where equipment downtime has significant revenue impact.' },
                  { title: '5. Kitchen space and layout efficiency', body: 'A well-designed 150 sqft cloud kitchen can outperform a poorly designed 300 sqft space. VSD International\'s kitchen layout service reduces equipment count by 15–20% through workflow optimisation — fewer metres of worktable, fewer storage units, shared exhaust zones — without reducing capacity.' },
                ].map((item) => (
                  <li key={item.title} style={{ fontFamily: 'var(--font-inter)', lineHeight: 1.75 }}>
                    <strong style={{ color: 'var(--text-dark)', display: 'block', marginBottom: '0.35rem', fontSize: '1rem' }}>{item.title}</strong>
                    <span style={{ color: 'var(--text-body)', fontSize: '0.9375rem' }}>{item.body}</span>
                  </li>
                ))}
              </ol>
            </section>

            {/* Body §4 — Civil costs */}
            <section id="civil-costs" aria-labelledby="h2-civil" style={{ marginBottom: '3rem' }}>
              <h2
                id="h2-civil"
                style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(1.375rem, 2.5vw, 1.75rem)', fontWeight: 700, color: 'var(--text-dark)', marginBottom: '1.25rem', letterSpacing: '-0.015em', lineHeight: 1.2 }}
              >
                Civil Work Costs — The Budget Item Every New Operator Forgets
              </h2>
              <p style={{ fontFamily: 'var(--font-inter)', fontSize: '1rem', color: 'var(--text-body)', lineHeight: 1.8, marginBottom: '1.25rem' }}>
                Civil work — the infrastructure your equipment runs on — is separate from VSD International&apos;s equipment quote and is consistently underestimated by first-time cloud kitchen operators. Plan ₹2–₹8 lakhs for civil, depending on the existing condition of your space.
              </p>
              <div style={{ overflowX: 'auto', marginBottom: '1.25rem', borderRadius: '8px', border: '1px solid var(--border)' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', fontFamily: 'var(--font-inter)', fontSize: '0.875rem' }}>
                  <thead>
                    <tr style={{ background: 'var(--charcoal)', color: 'var(--text-on-dark)' }}>
                      <th style={{ padding: '0.875rem 1rem', textAlign: 'left', fontWeight: 700 }}>Civil Work Item</th>
                      <th style={{ padding: '0.875rem 1rem', textAlign: 'left', fontWeight: 700, color: 'var(--gold-bright)', whiteSpace: 'nowrap' }}>Cost Range</th>
                    </tr>
                  </thead>
                  <tbody>
                    {CIVIL_COSTS.map((row, i) => (
                      <tr key={i} style={{ background: i % 2 === 0 ? '#FFFFFF' : 'var(--surface)', borderBottom: '1px solid var(--border)' }}>
                        <td style={{ padding: '0.875rem 1rem', color: 'var(--text-body)' }}>{row.item}</td>
                        <td style={{ padding: '0.875rem 1rem', color: 'var(--gold-deep)', fontWeight: 600, whiteSpace: 'nowrap' }}>{row.range}</td>
                      </tr>
                    ))}
                    <tr style={{ background: 'var(--surface-alt)', borderBottom: '1px solid var(--border)' }}>
                      <td style={{ padding: '0.875rem 1rem', color: 'var(--text-dark)', fontWeight: 700 }}>Total civil work (typical range)</td>
                      <td style={{ padding: '0.875rem 1rem', color: 'var(--gold-deep)', fontWeight: 700 }}>₹2 – ₹8 Lakhs</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p style={{ fontFamily: 'var(--font-inter)', fontSize: '0.875rem', color: 'var(--text-muted)', lineHeight: 1.7 }}>
                VSD International provides a <strong>utilities requirements sheet</strong> with every project — specifying gas pressure, electrical load (kW), water supply spec, and drainage requirements so your civil contractor can quote accurately before any equipment is ordered.
              </p>
            </section>

            {/* Body §5 */}
            <section id="cost-reduction" aria-labelledby="h2-reduce-cost" style={{ marginBottom: '3rem' }}>
              <h2
                id="h2-reduce-cost"
                style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(1.375rem, 2.5vw, 1.75rem)', fontWeight: 700, color: 'var(--text-dark)', marginBottom: '1.25rem', letterSpacing: '-0.015em', lineHeight: 1.2 }}
              >
                How to Reduce Cloud Kitchen Cost Without Cutting Corners
              </h2>
              <p style={{ fontFamily: 'var(--font-inter)', fontSize: '1rem', color: 'var(--text-body)', lineHeight: 1.8, marginBottom: '1.25rem' }}>
                There are legitimate ways to reduce cloud kitchen setup cost that don&apos;t compromise compliance or reliability — and ways that look like savings but create expensive problems within 6 months.
              </p>

              <h3 style={{ fontFamily: 'var(--font-playfair)', fontSize: '1.125rem', fontWeight: 700, color: 'var(--text-dark)', marginBottom: '0.75rem', marginTop: '1.75rem' }}>Smart reductions</h3>
              <ul style={{ padding: '0 0 0 1.25rem', display: 'flex', flexDirection: 'column', gap: '0.625rem', marginBottom: '1.5rem' }}>
                {[
                  'Start with a leaner equipment list — add capacity when your order volume justifies it. A 2-burner range at launch, adding a 4-burner when you hit 80 orders/day, costs less upfront than over-speccing.',
                  'Share cold storage across brands. Refrigeration is expensive; a single large upright or walk-in shared between 2–3 brands costs far less than one unit per brand.',
                  'Choose Indian commercial brands for workhorse items (cooking ranges, fryers) and international brands only for equipment where consistency is critical (combi ovens for baked goods, blast chillers).',
                  'Buy used SS worktables and shelving where condition is visually verifiable — save 40–50% on fabrication without reliability risk.',
                ].map((item, i) => (
                  <li key={i} style={{ fontFamily: 'var(--font-inter)', fontSize: '0.9375rem', color: 'var(--text-body)', lineHeight: 1.75 }}>✓ {item}</li>
                ))}
              </ul>

              <h3 style={{ fontFamily: 'var(--font-playfair)', fontSize: '1.125rem', fontWeight: 700, color: 'var(--text-dark)', marginBottom: '0.75rem' }}>Where not to cut</h3>
              <ul style={{ padding: '0 0 0 1.25rem', display: 'flex', flexDirection: 'column', gap: '0.625rem', marginBottom: '1rem' }}>
                {[
                  'Exhaust system — under-powered exhaust fails Zomato/Swiggy inspection and creates a fire risk. Never downgrade here.',
                  'Refrigeration compressors — cheap compressors fail under continuous operation and create food safety risk and Swiggy FSSAI compliance issues.',
                  'SS grade — 201 SS looks identical to 304 SS but corrodes within 2 years under commercial kitchen conditions. Insist on 304 grade, especially for fabrication near water and heat.',
                ].map((item, i) => (
                  <li key={i} style={{ fontFamily: 'var(--font-inter)', fontSize: '0.9375rem', color: 'var(--text-body)', lineHeight: 1.75 }}>✗ {item}</li>
                ))}
              </ul>
            </section>

            {/* ══════════════════════════════════════════════════════════════
                §09 — EXPERT INSIGHT CALLOUT (first-hand experience — E-E-A-T)
            ══════════════════════════════════════════════════════════════ */}
            <aside
              aria-label="Expert insight from Rajesh Kumar"
              style={{
                background: 'var(--charcoal-warm)',
                border: '1px solid rgba(201,168,76,0.2)',
                borderLeft: '3px solid var(--gold)',
                borderRadius: '8px',
                padding: '2rem',
                marginBottom: '3rem',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', marginBottom: '1.25rem' }}>
                <div style={{ width: '44px', height: '44px', borderRadius: '50%', background: 'linear-gradient(135deg, var(--gold-light), var(--gold-deep))', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }} aria-hidden="true">
                  <User size={20} style={{ color: '#1A1508' }} />
                </div>
                <div>
                  <p style={{ fontFamily: 'var(--font-inter)', fontWeight: 700, fontSize: '0.9375rem', color: 'var(--gold-light)', marginBottom: '0.15rem' }}>{post.author.name}</p>
                  <p style={{ fontFamily: 'var(--font-inter)', fontSize: '0.8125rem', color: 'var(--text-dim)' }}>{post.author.jobTitle}</p>
                </div>
              </div>
              <blockquote style={{ margin: 0, borderLeft: 'none', padding: 0 }}>
                <p style={{ fontFamily: 'var(--font-inter)', fontSize: '1rem', color: 'var(--text-on-dark)', lineHeight: 1.8, fontStyle: 'italic', marginBottom: '1rem' }}>
                  &ldquo;The most expensive mistake I see cloud kitchen operators make is speccing equipment for 400 orders a day when they&apos;re launching at 50. You pay for capacity you won&apos;t use for 18 months. Start lean — a well-chosen 2-burner setup for ₹5.5 lakhs, with a clear upgrade path in mind, beats a ₹15-lakh over-spec that kills your working capital before you even hit profitability.
                </p>
                <p style={{ fontFamily: 'var(--font-inter)', fontSize: '1rem', color: 'var(--text-on-dark)', lineHeight: 1.8, fontStyle: 'italic' }}>
                  The second mistake: ignoring civil work in the budget. Every client who comes to us having already signed a lease underestimates the gas pipeline and electrical upgrade cost. Build that ₹2–₹5 lakh buffer into your financial model before you sign the lease.&rdquo;
                </p>
              </blockquote>
            </aside>

            {/* ══════════════════════════════════════════════════════════════
                §10 — FAQ SECTION (PAA-targeted, answer-first, FAQPage schema)
            ══════════════════════════════════════════════════════════════ */}
            <section id="faq" aria-labelledby="faq-heading" style={{ marginBottom: '3rem' }}>
              <h2
                id="faq-heading"
                style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(1.375rem, 2.5vw, 1.75rem)', fontWeight: 700, color: 'var(--text-dark)', marginBottom: '0.5rem', letterSpacing: '-0.015em' }}
              >
                Frequently Asked Questions
              </h2>
              <p style={{ fontFamily: 'var(--font-inter)', fontSize: '0.875rem', color: 'var(--text-muted)', marginBottom: '2rem' }}>
                Based on questions VSD International receives from cloud kitchen operators daily.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
                {FAQS.map((faq, i) => (
                  <div
                    key={i}
                    itemScope
                    itemProp="mainEntity"
                    itemType="https://schema.org/Question"
                    style={{ borderBottom: '1px solid var(--border)', padding: '1.5rem 0' }}
                  >
                    <h3
                      itemProp="name"
                      style={{ fontFamily: 'var(--font-inter)', fontSize: '1rem', fontWeight: 700, color: 'var(--text-dark)', lineHeight: 1.4, marginBottom: '0.875rem' }}
                    >
                      {faq.q}
                    </h3>
                    <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                      <p
                        itemProp="text"
                        style={{ fontFamily: 'var(--font-inter)', fontSize: '0.9375rem', color: 'var(--text-body)', lineHeight: 1.8, margin: 0 }}
                      >
                        {faq.a}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* ══════════════════════════════════════════════════════════════
                §11 — CONCLUSION + NEXT STEP (decision/action, not summary)
            ══════════════════════════════════════════════════════════════ */}
            <section id="conclusion" aria-labelledby="conclusion-heading" style={{ marginBottom: '3rem' }}>
              <h2
                id="conclusion-heading"
                style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(1.375rem, 2.5vw, 1.75rem)', fontWeight: 700, color: 'var(--text-dark)', marginBottom: '1.25rem', letterSpacing: '-0.015em' }}
              >
                Your Next Step: Get a Real Quote for Your Cloud Kitchen
              </h2>
              <p style={{ fontFamily: 'var(--font-inter)', fontSize: '1rem', color: 'var(--text-body)', lineHeight: 1.8, marginBottom: '1.25rem' }}>
                Budget ranges are useful for planning, but your actual cost depends on your specific cuisine, order volume, kitchen space, and the equipment specifications you choose. VSD International provides free, itemised cloud kitchen equipment quotes — with a layout drawing, equipment list, and cost breakdown — based on your exact concept.
              </p>
              <p style={{ fontFamily: 'var(--font-inter)', fontSize: '1rem', color: 'var(--text-body)', lineHeight: 1.8, marginBottom: '1.25rem' }}>
                WhatsApp us at <a href="https://wa.me/919250346370" style={{ color: 'var(--gold-deep)', fontWeight: 600, textDecoration: 'none' }}>+91-9250346370</a> with your cloud kitchen details — cuisine type, number of brands, target daily orders, and available space — and we&apos;ll send a customised cost estimate within 24 hours. No commitment required.
              </p>
            </section>

            {/* ══════════════════════════════════════════════════════════════
                §12 — CONTEXTUAL CTA (specific money page this post supports)
            ══════════════════════════════════════════════════════════════ */}
            <aside
              aria-label="Cloud kitchen setup service"
              style={{
                background: 'var(--charcoal-warm)',
                border: '1px solid rgba(201,168,76,0.2)',
                borderRadius: '12px',
                padding: '2.5rem',
                marginBottom: '3rem',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              <div aria-hidden="true" style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '3px', background: 'linear-gradient(90deg, var(--gold-bright), var(--gold), var(--gold-deep))' }} />
              <p className="section-label" style={{ marginBottom: '0.75rem' }}>Ready to Start?</p>
              <h3
                style={{
                  fontFamily: 'var(--font-playfair)',
                  fontSize: 'clamp(1.25rem, 2.5vw, 1.75rem)',
                  color: 'var(--text-on-dark)',
                  fontWeight: 700,
                  marginBottom: '1rem',
                  lineHeight: 1.2,
                }}
              >
                VSD International — Cloud Kitchen Setup &amp; Equipment
              </h3>
              <p style={{ fontFamily: 'var(--font-inter)', fontSize: '0.9375rem', color: 'var(--text-dim)', lineHeight: 1.75, marginBottom: '1.75rem' }}>
                40+ cloud kitchen projects delivered across Delhi NCR, Mumbai &amp; Bengaluru. Itemised quote in 24 hours. 100% Zomato/Swiggy inspection pass rate. From ₹5 lakhs. WhatsApp <strong style={{ color: 'var(--gold-light)' }}>+91-9250346370</strong>.
              </p>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <Link href={post.pillarPage} className="btn-gold">
                  View Cloud Kitchen Setup Service <ArrowRight size={15} aria-hidden="true" />
                </Link>
                <a
                  href="https://wa.me/919250346370?text=Hi%2C%20I%20need%20a%20cloud%20kitchen%20cost%20estimate"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-ghost-dark"
                >
                  <MessageCircle size={15} aria-hidden="true" /> WhatsApp for Quote
                </a>
              </div>
            </aside>

            {/* ══════════════════════════════════════════════════════════════
                §13 — AUTHOR BIO BOX (Person schema, photo, title, credentials, sameAs)
            ══════════════════════════════════════════════════════════════ */}
            <footer
              itemScope
              itemType="https://schema.org/Person"
              style={{
                background: 'var(--surface)',
                border: '1px solid var(--border)',
                borderRadius: '12px',
                padding: '2rem',
                marginBottom: '3rem',
                display: 'flex',
                gap: '1.5rem',
                alignItems: 'flex-start',
                flexWrap: 'wrap',
              }}
            >
              {/* Author photo */}
              <div
                style={{ width: '72px', height: '72px', borderRadius: '50%', background: 'linear-gradient(135deg, var(--gold-light), var(--gold-deep))', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, border: '3px solid rgba(201,168,76,0.3)' }}
                aria-hidden="true"
              >
                <User size={30} style={{ color: '#1A1508' }} />
              </div>

              <div style={{ flex: 1, minWidth: '200px' }}>
                <p style={{ fontFamily: 'var(--font-inter)', fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '0.375rem' }}>
                  About the Author
                </p>
                <Link
                  href={post.author.authorPage}
                  itemProp="url"
                  style={{ textDecoration: 'none' }}
                >
                  <h3
                    itemProp="name"
                    style={{ fontFamily: 'var(--font-playfair)', fontSize: '1.25rem', fontWeight: 700, color: 'var(--text-dark)', marginBottom: '0.25rem' }}
                  >
                    {post.author.name}
                  </h3>
                </Link>
                <p itemProp="jobTitle" style={{ fontFamily: 'var(--font-inter)', fontSize: '0.875rem', color: 'var(--gold-deep)', fontWeight: 600, marginBottom: '0.75rem' }}>
                  {post.author.jobTitle}
                </p>
                <p itemProp="description" style={{ fontFamily: 'var(--font-inter)', fontSize: '0.9rem', color: 'var(--text-body)', lineHeight: 1.75, marginBottom: '1rem' }}>
                  {post.author.bio}
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
                  <span style={{ fontFamily: 'var(--font-inter)', fontSize: '0.8125rem', color: 'var(--text-muted)', background: 'rgba(201,168,76,0.08)', border: '1px solid rgba(201,168,76,0.2)', borderRadius: '4px', padding: '0.25rem 0.625rem' }}>
                    {post.author.credentials}
                  </span>
                  <a
                    href={post.author.linkedIn}
                    target="_blank"
                    rel="noopener noreferrer me"
                    itemProp="sameAs"
                    style={{ fontFamily: 'var(--font-inter)', fontSize: '0.8125rem', color: 'var(--gold-deep)', fontWeight: 600, textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.25rem' }}
                    aria-label={`${post.author.name} on LinkedIn`}
                  >
                    LinkedIn →
                  </a>
                </div>
              </div>
            </footer>

            {/* ══════════════════════════════════════════════════════════════
                §14 — RELATED POSTS (2–4 same-cluster posts + link to pillar)
            ══════════════════════════════════════════════════════════════ */}
            <aside aria-labelledby="related-heading">
              <h2
                id="related-heading"
                style={{ fontFamily: 'var(--font-playfair)', fontSize: '1.5rem', fontWeight: 700, color: 'var(--text-dark)', marginBottom: '0.375rem' }}
              >
                Related in {post.categoryLabel}
              </h2>
              <p style={{ fontFamily: 'var(--font-inter)', fontSize: '0.875rem', color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
                More guides from the{' '}
                <strong style={{ color: 'var(--text-dark)' }}>{post.categoryLabel} cluster</strong>
                {' '}→ all linking to the{' '}
                <Link href={post.pillarPage} style={{ color: 'var(--gold-deep)', fontWeight: 600, textDecoration: 'none' }}>
                  {post.pillarLabel}
                </Link>.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5" style={{ marginBottom: '1.5rem' }}>
                {relatedPosts.map((related) => (
                  <Link
                    key={related.slug}
                    href={`/blog/${related.slug}`}
                    className="card-lift group block rounded-xl overflow-hidden border"
                    style={{ borderColor: 'var(--border)', background: '#FFFFFF', textDecoration: 'none' }}
                  >
                    <div style={{ background: 'var(--charcoal-light)', height: '100px', position: 'relative' }}>
                      <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'linear-gradient(135deg, #0F0D0A, rgba(42,34,21,0.9))' }}>
                        <span style={{ fontSize: '1.75rem' }} aria-hidden="true">☁</span>
                      </div>
                      <div aria-hidden="true" style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '2px', background: 'linear-gradient(90deg, transparent, var(--gold), transparent)' }} />
                    </div>
                    <div style={{ padding: '1rem 1.25rem' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem', fontSize: '0.75rem', fontFamily: 'var(--font-inter)', color: 'var(--text-muted)' }}>
                        <Clock size={10} aria-hidden="true" /> {related.readTime}
                      </div>
                      <h3 style={{ fontFamily: 'var(--font-playfair)', fontSize: '1rem', fontWeight: 700, color: 'var(--text-dark)', lineHeight: 1.3, marginBottom: '0.5rem' }}>
                        {related.title}
                      </h3>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', color: 'var(--gold)', fontSize: '0.8125rem', fontFamily: 'var(--font-inter)', fontWeight: 600 }}>
                        Read <ArrowRight size={12} className="transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" />
                      </span>
                    </div>
                  </Link>
                ))}
              </div>

              {/* Link up to pillar (required by SOP) */}
              <div style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '8px', padding: '1.25rem 1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1rem', flexWrap: 'wrap' }}>
                <p style={{ fontFamily: 'var(--font-inter)', fontSize: '0.9375rem', color: 'var(--text-body)', lineHeight: 1.5 }}>
                  <strong style={{ color: 'var(--text-dark)' }}>Ready to install?</strong> Visit the{' '}
                  <Link href={post.pillarPage} style={{ color: 'var(--gold-deep)', fontWeight: 600, textDecoration: 'none' }}>
                    {post.pillarLabel} page
                  </Link>{' '}
                  for equipment details, pricing, and to request a free site visit.
                </p>
                <Link href={post.pillarPage} className="btn-gold" style={{ flexShrink: 0, fontSize: '0.875rem', padding: '0.625rem 1.25rem' }}>
                  Service page <ArrowRight size={13} aria-hidden="true" />
                </Link>
              </div>
            </aside>

          </article>
        </div>
      </div>
    </>
  );
}
