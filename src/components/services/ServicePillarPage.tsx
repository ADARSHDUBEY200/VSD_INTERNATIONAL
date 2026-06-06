/**
 * ServicePillarPage — reusable shell for P2/P3 service pages.
 * All 10 sections of the SOP template in a single composable component.
 * P1 pages use custom inline code for maximum content; P2/P3 use this component.
 */

import Link from 'next/link';
import { CheckCircle2, ArrowRight, MessageCircle, MapPin } from 'lucide-react';
import ServiceBreadcrumb  from '@/components/services/ServiceBreadcrumb';
import ServiceFAQ         from '@/components/services/ServiceFAQ';
import ServiceTestimonial from '@/components/services/ServiceTestimonial';
import BrandsGrid         from '@/components/services/BrandsGrid';
import CitiesGrid         from '@/components/services/CitiesGrid';
import ServiceCTA         from '@/components/services/ServiceCTA';
import type { Testimonial } from '@/components/services/ServiceTestimonial';
import type { FAQ } from '@/components/services/ServiceFAQ';

export interface PillarData {
  /** §1 Hero */
  h1: string;
  tagline: string; /** ~120 word intro */
  heroStats: { label: string; value: string }[];
  ctaServiceName?: string;
  whatsAppText: string;

  /** §2 What We Offer */
  offerTitle: string;
  offerDesc?: string;
  offerCategories: { title: string; items: string[] }[];

  /** §3 Industries Served */
  industries: { label: string; href: string; desc: string }[];
  relatedServices: { label: string; href: string }[];

  /** §4 Why VSD */
  whyPoints: { title: string; body: string }[];

  /** §5 Featured Project */
  projectTitle: string;
  projectCategory: string;
  projectDesc: string;
  projectValue: string;
  otherProjects: string[];

  /** §8 Testimonial */
  testimonial: Testimonial;

  /** §9 FAQ */
  faqs: FAQ[];
  faqHeading?: string;

  /** §10 CTA */
  ctaSubtext?: string;

  /** Breadcrumb */
  breadcrumbLabel: string;

  /** Service slug for CitiesGrid */
  serviceSlug: string;
}

export default function ServicePillarPage({ data }: { data: PillarData }) {
  return (
    <>
      <ServiceBreadcrumb
        crumbs={[
          { label: 'Services', href: '/services' },
          { label: data.breadcrumbLabel },
        ]}
      />

      {/* §1 Hero */}
      <section
        className="grain-overlay"
        style={{
          background: 'var(--charcoal-warm)',
          padding: '5rem 0 4.5rem',
          position: 'relative',
          borderBottom: '1px solid rgba(201,168,76,0.15)',
        }}
      >
        <div
          aria-hidden="true"
          style={{
            position: 'absolute', top: 0, left: 0, right: 0, height: '2px',
            background: 'linear-gradient(90deg, transparent 5%, var(--gold-bright) 35%, var(--gold) 65%, transparent 95%)',
          }}
        />
        <div className="container mx-auto" style={{ maxWidth: '80rem', padding: '0 1.25rem' }}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="section-label" style={{ marginBottom: '1rem' }}>Commercial Kitchen Services</p>
              <h1
                style={{
                  fontFamily: 'var(--font-playfair)',
                  fontSize: 'clamp(1.875rem, 3.8vw, 3rem)',
                  fontWeight: 700,
                  lineHeight: 1.1,
                  letterSpacing: '-0.02em',
                  color: 'var(--text-on-dark)',
                  marginBottom: '1.25rem',
                }}
              >
                {data.h1}
              </h1>
              <div
                aria-hidden="true"
                style={{
                  width: 60, height: 3,
                  background: 'linear-gradient(90deg, var(--gold-bright), var(--gold), var(--gold-deep))',
                  borderRadius: 2, marginBottom: '1.5rem',
                }}
              />
              <p
                style={{
                  fontFamily: 'var(--font-inter)',
                  fontSize: '1.0625rem',
                  color: 'rgba(245,240,232,0.7)',
                  lineHeight: 1.75,
                  marginBottom: '2rem',
                }}
              >
                {data.tagline}
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href={`https://wa.me/919250346370?text=${encodeURIComponent(data.whatsAppText)}`}
                  target="_blank" rel="noopener noreferrer"
                  className="btn-gold inline-flex items-center gap-2"
                >
                  <MessageCircle size={15} aria-hidden="true" />
                  Get Free Quote
                </a>
                <Link href="/services" className="btn-ghost-dark inline-flex items-center gap-2">
                  All Services <ArrowRight size={14} aria-hidden="true" />
                </Link>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              {data.heroStats.map(({ label, value }) => (
                <div
                  key={label}
                  className="rounded-xl flex flex-col items-center justify-center text-center"
                  style={{
                    background: 'rgba(255,255,255,0.03)',
                    border: '1px solid rgba(201,168,76,0.15)',
                    padding: '1.75rem 1rem',
                  }}
                >
                  <span style={{ fontFamily: 'var(--font-playfair)', fontSize: '2.25rem', fontWeight: 800, color: 'var(--gold-bright)', lineHeight: 1 }}>
                    {value}
                  </span>
                  <span style={{ fontFamily: 'var(--font-inter)', fontSize: '0.8125rem', color: 'rgba(245,240,232,0.45)', marginTop: '0.5rem', lineHeight: 1.3 }}>
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* §2 What We Offer */}
      <section aria-labelledby="offer-heading" style={{ background: '#FFFFFF', padding: '5.5rem 0' }}>
        <div className="container mx-auto" style={{ maxWidth: '80rem', padding: '0 1.25rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '3.25rem' }}>
            <p className="section-label" style={{ marginBottom: '0.75rem' }}>Our Range</p>
            <h2
              id="offer-heading"
              style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', color: 'var(--text-dark)', lineHeight: 1.12 }}
            >
              {data.offerTitle}
            </h2>
            <div aria-hidden="true" style={{ width: 56, height: 3, background: 'linear-gradient(90deg, var(--gold-bright), var(--gold), var(--gold-deep))', borderRadius: 2, margin: '1.125rem auto 0' }} />
            {data.offerDesc && (
              <p style={{ marginTop: '1.25rem', fontFamily: 'var(--font-inter)', fontSize: '0.9375rem', color: 'var(--text-body)', lineHeight: 1.72, maxWidth: 640, margin: '1.25rem auto 0' }}>
                {data.offerDesc}
              </p>
            )}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.offerCategories.map(({ title, items }) => (
              <div key={title} className="card-lift rounded-2xl" style={{ background: 'var(--surface)', border: '1px solid var(--border)', padding: '1.75rem' }}>
                <h3 style={{ fontFamily: 'var(--font-playfair)', fontWeight: 700, fontSize: '1.0625rem', color: 'var(--text-dark)', marginBottom: '1rem', lineHeight: 1.25 }}>
                  {title}
                </h3>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  {items.map(item => (
                    <li key={item} className="flex items-start gap-2">
                      <CheckCircle2 size={13} style={{ color: 'var(--gold)', flexShrink: 0, marginTop: '0.2rem' }} aria-hidden="true" />
                      <span style={{ fontFamily: 'var(--font-inter)', fontSize: '0.875rem', color: 'var(--text-body)', lineHeight: 1.5 }}>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* §3 Industries */}
      <section aria-labelledby="industries-heading" style={{ background: 'var(--surface)', padding: '4.5rem 0', borderTop: '1px solid var(--border)' }}>
        <div className="container mx-auto" style={{ maxWidth: '80rem', padding: '0 1.25rem' }}>
          <h2 id="industries-heading" style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(1.5rem, 2.4vw, 2rem)', color: 'var(--text-dark)', marginBottom: '2rem' }}>
            Industries We Serve
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4" style={{ marginBottom: '2rem' }}>
            {data.industries.map(({ label, href, desc }) => (
              <Link key={label} href={href} className="card-lift flex flex-col items-center gap-2 text-center rounded-xl p-4" style={{ background: '#FFFFFF', border: '1px solid var(--border)', textDecoration: 'none' }}>
                <MapPin size={18} style={{ color: 'var(--gold)' }} aria-hidden="true" />
                <div>
                  <p style={{ fontFamily: 'var(--font-inter)', fontWeight: 700, fontSize: '0.875rem', color: 'var(--text-dark)', marginBottom: '0.2rem' }}>{label}</p>
                  <p style={{ fontFamily: 'var(--font-inter)', fontSize: '0.75rem', color: 'var(--text-muted)', lineHeight: 1.4 }}>{desc}</p>
                </div>
              </Link>
            ))}
          </div>
          {data.relatedServices.length > 0 && (
            <div style={{ padding: '1.25rem 1.5rem', background: '#FFFFFF', border: '1px solid var(--border)', borderRadius: 8 }}>
              <p style={{ fontFamily: 'var(--font-inter)', fontWeight: 600, fontSize: '0.875rem', color: 'var(--text-dark)', marginBottom: '0.75rem' }}>Related Services</p>
              <div className="flex flex-wrap gap-3">
                {data.relatedServices.map(({ label, href }) => (
                  <Link key={href} href={href} className="btn-ghost text-sm" style={{ minHeight: 'auto', padding: '0.5rem 1rem' }}>{label} →</Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* §4 Why VSD */}
      <section aria-labelledby="why-heading" className="grain-overlay" style={{ background: 'var(--charcoal-light)', padding: '5.5rem 0', borderTop: '1px solid rgba(201,168,76,0.1)' }}>
        <div className="container mx-auto" style={{ maxWidth: '80rem', padding: '0 1.25rem' }}>
          <h2
            id="why-heading"
            style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', color: 'var(--text-on-dark)', lineHeight: 1.12, textAlign: 'center', marginBottom: '3rem' }}
          >
            Why Choose VSD International
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {data.whyPoints.map(({ title, body }) => (
              <div key={title} className="card-lift-dark rounded-2xl" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(201,168,76,0.12)', padding: '2rem' }}>
                <div style={{ width: 10, height: 10, borderRadius: '50%', background: 'var(--gold)', marginBottom: '1rem' }} aria-hidden="true" />
                <h3 style={{ fontFamily: 'var(--font-playfair)', fontWeight: 700, fontSize: '1.0625rem', color: 'var(--text-on-dark)', marginBottom: '0.75rem' }}>{title}</h3>
                <p style={{ fontFamily: 'var(--font-inter)', fontSize: '0.9375rem', color: 'rgba(245,240,232,0.6)', lineHeight: 1.72 }}>{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* §5 Featured Project */}
      <section aria-labelledby="project-heading" style={{ background: '#FFFFFF', padding: '5rem 0', borderTop: '1px solid var(--border)' }}>
        <div className="container mx-auto" style={{ maxWidth: '80rem', padding: '0 1.25rem' }}>
          <h2 id="project-heading" style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(1.5rem, 2.4vw, 2rem)', color: 'var(--text-dark)', marginBottom: '2rem' }}>
            Recent {data.breadcrumbLabel} Projects
          </h2>
          <div className="rounded-2xl overflow-hidden" style={{ border: '1px solid var(--border)', marginBottom: '2rem' }}>
            <div
              style={{ background: 'linear-gradient(135deg, var(--charcoal) 0%, var(--charcoal-mid) 100%)', height: 140, display: 'flex', alignItems: 'center', justifyContent: 'center' }}
              aria-hidden="true"
            >
              <span style={{ fontFamily: 'var(--font-playfair)', fontSize: '1.5rem', color: 'rgba(201,168,76,0.3)', fontWeight: 800, letterSpacing: '-0.02em' }}>VSD</span>
            </div>
            <div style={{ padding: '2rem' }}>
              <span style={{ fontFamily: 'var(--font-inter)', fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--gold)' }}>
                {data.projectCategory}
              </span>
              <h3 style={{ fontFamily: 'var(--font-playfair)', fontWeight: 700, fontSize: '1.375rem', color: 'var(--text-dark)', margin: '0.625rem 0 0.875rem' }}>
                {data.projectTitle}
              </h3>
              <p style={{ fontFamily: 'var(--font-inter)', fontSize: '0.9375rem', color: 'var(--text-body)', lineHeight: 1.72, maxWidth: 680 }}>
                {data.projectDesc}
              </p>
              <p style={{ marginTop: '1rem', fontFamily: 'var(--font-inter)', fontWeight: 700, fontSize: '0.9375rem', color: 'var(--gold)' }}>
                {data.projectValue}
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {data.otherProjects.map(p => (
              <div key={p} className="flex items-start gap-2">
                <CheckCircle2 size={12} style={{ color: 'var(--gold)', flexShrink: 0, marginTop: '0.15rem' }} aria-hidden="true" />
                <span style={{ fontFamily: 'var(--font-inter)', fontSize: '0.875rem', color: 'var(--text-body)' }}>{p}</span>
              </div>
            ))}
          </div>
          <Link href="/projects" className="inline-flex items-center gap-1.5 mt-4" style={{ color: 'var(--gold)', fontFamily: 'var(--font-inter)', fontWeight: 700, fontSize: '0.9375rem', textDecoration: 'none' }}>
            View All Projects <ArrowRight size={14} aria-hidden="true" />
          </Link>
        </div>
      </section>

      {/* §6 Brands */}
      <BrandsGrid />

      {/* §7 Cities */}
      <CitiesGrid serviceSlug={data.serviceSlug} />

      {/* §8 Testimonial */}
      <ServiceTestimonial testimonial={data.testimonial} />

      {/* §9 FAQ */}
      <ServiceFAQ
        faqs={data.faqs}
        heading={data.faqHeading ?? `Frequently Asked Questions — ${data.breadcrumbLabel}`}
      />

      {/* §10 CTA */}
      <ServiceCTA
        serviceName={data.ctaServiceName ?? data.breadcrumbLabel}
        subtext={data.ctaSubtext}
      />
    </>
  );
}
