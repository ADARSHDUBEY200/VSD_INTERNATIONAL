'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { Home, ChevronRight, Bell } from 'lucide-react';

const PAGE_META: Record<string, { title: string; crumbs: Array<{ label: string; href?: string }> }> = {
  '/admin':              { title: 'Dashboard',    crumbs: [{ label: 'Dashboard' }] },
  '/admin/blogs':        { title: 'Blog Posts',   crumbs: [{ label: 'Dashboard', href: '/admin' }, { label: 'Blogs' }] },
  '/admin/blogs/new':    { title: 'New Blog Post',crumbs: [{ label: 'Dashboard', href: '/admin' }, { label: 'Blogs', href: '/admin/blogs' }, { label: 'New Post' }] },
  '/admin/products':     { title: 'Products',     crumbs: [{ label: 'Dashboard', href: '/admin' }, { label: 'Products' }] },
  '/admin/products/new': { title: 'New Product',  crumbs: [{ label: 'Dashboard', href: '/admin' }, { label: 'Products', href: '/admin/products' }, { label: 'New Product' }] },
  '/admin/enquiries':    { title: 'Enquiries',    crumbs: [{ label: 'Dashboard', href: '/admin' }, { label: 'Enquiries' }] },
};

function getMeta(pathname: string) {
  if (PAGE_META[pathname]) return PAGE_META[pathname];
  if (pathname.startsWith('/admin/blogs/'))     return { title: 'Edit Blog Post', crumbs: [{ label: 'Dashboard', href: '/admin' }, { label: 'Blogs', href: '/admin/blogs' }, { label: 'Edit Post' }] };
  if (pathname.startsWith('/admin/products/'))  return { title: 'Edit Product',   crumbs: [{ label: 'Dashboard', href: '/admin' }, { label: 'Products', href: '/admin/products' }, { label: 'Edit Product' }] };
  if (pathname.startsWith('/admin/enquiries/')) return { title: 'Enquiry Detail', crumbs: [{ label: 'Dashboard', href: '/admin' }, { label: 'Enquiries', href: '/admin/enquiries' }, { label: 'Detail' }] };
  return { title: '', crumbs: [] };
}

export default function AdminHeader() {
  const pathname = usePathname();
  const { title, crumbs } = getMeta(pathname);

  return (
    <header style={{
      height: 64, background: 'white',
      borderBottom: '1px solid #E8EDF4',
      display: 'flex', alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 1.25rem 0 3.75rem',
      position: 'sticky', top: 0, zIndex: 30,
      boxShadow: '0 1px 8px rgba(0,0,0,0.05)',
    }}>
      <style>{`@media (min-width: 1024px) { .adm-hdr { padding-left: 1.375rem !important; } }`}</style>

      <div className="adm-hdr" style={{ paddingLeft: '3.75rem', minWidth: 0 }}>
        {crumbs.length > 0 && (
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.2rem', marginBottom: '0.12rem' }}>
            <Home size={11} color="#94A3B8" />
            {crumbs.map((c, i) => (
              <React.Fragment key={i}>
                {i > 0 && <ChevronRight size={10} color="#CBD5E1" />}
                {c.href ? (
                  <Link href={c.href} style={{ fontSize: 11, color: '#94A3B8', textDecoration: 'none', fontWeight: 500, transition: 'color 0.1s' }}
                    onMouseEnter={e => ((e.currentTarget as HTMLAnchorElement).style.color = '#475569')}
                    onMouseLeave={e => ((e.currentTarget as HTMLAnchorElement).style.color = '#94A3B8')}
                  >{c.label}</Link>
                ) : (
                  <span style={{ fontSize: 11, color: '#475569', fontWeight: 600 }}>{c.label}</span>
                )}
              </React.Fragment>
            ))}
          </div>
        )}
        <h1 style={{ fontSize: 16, fontWeight: 700, color: '#0F172A', letterSpacing: '-0.02em', margin: 0, lineHeight: 1 }}>
          {title}
        </h1>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexShrink: 0 }}>
        <button style={{
          background: '#F8FAFC', border: '1px solid #E8EDF4', borderRadius: 9,
          width: 36, height: 36, display: 'flex', alignItems: 'center', justifyContent: 'center',
          cursor: 'pointer', color: '#64748B', flexShrink: 0, transition: 'all 0.15s',
        }}
          onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.background = '#F1F5F9'; (e.currentTarget as HTMLButtonElement).style.color = '#475569'; }}
          onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.background = '#F8FAFC'; (e.currentTarget as HTMLButtonElement).style.color = '#64748B'; }}
        >
          <Bell size={15} />
        </button>

        <div style={{
          display: 'flex', alignItems: 'center', gap: '0.5rem',
          padding: '0.25rem 0.75rem 0.25rem 0.3rem',
          borderRadius: 10, border: '1px solid #E8EDF4', background: '#F8FAFC',
          cursor: 'default',
        }}>
          <div style={{
            width: 28, height: 28, borderRadius: '50%', flexShrink: 0,
            background: 'linear-gradient(135deg, #1D4ED8, #3B82F6)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            color: 'white', fontWeight: 800, fontSize: 11,
          }}>A</div>
          <span className="hidden sm:inline" style={{ fontSize: 13, fontWeight: 600, color: '#374151' }}>
            Admin
          </span>
        </div>
      </div>
    </header>
  );
}
