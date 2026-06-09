'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import {
  MessageSquare, FileText, Package, TrendingUp,
  Plus, ArrowRight, CheckCircle2, Clock, AlertCircle, Calendar,
} from 'lucide-react';
import { useBreakpoint } from '@/hooks/useBreakpoint';

interface Stats {
  totalEnquiries: number; newEnquiries: number;
  totalBlogs: number;     publishedBlogs: number;
  totalProducts: number;  activeProducts: number;
}
interface RecentEnquiry { _id: string; name: string; phone: string; status: string; createdAt: string; }
interface RecentBlog    { _id: string; title: string; status: string; createdAt: string; }

const STATUS_MAP: Record<string, { bg: string; color: string; dot: string; icon: React.ReactNode }> = {
  new:         { bg: '#EFF6FF', color: '#2563EB', dot: '#60A5FA', icon: <AlertCircle size={10} /> },
  in_progress: { bg: '#FFFBEB', color: '#D97706', dot: '#FCD34D', icon: <Clock size={10} /> },
  resolved:    { bg: '#F0FDF4', color: '#16A34A', dot: '#4ADE80', icon: <CheckCircle2 size={10} /> },
  published:   { bg: '#F0FDF4', color: '#16A34A', dot: '#4ADE80', icon: <CheckCircle2 size={10} /> },
  draft:       { bg: '#F8FAFC', color: '#64748B', dot: '#CBD5E1', icon: <Clock size={10} /> },
};

function StatusBadge({ status }: { status: string }) {
  const { bg, color, icon } = STATUS_MAP[status] ?? STATUS_MAP.draft;
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', gap: '0.25rem',
      padding: '0.2rem 0.6rem', borderRadius: 999, background: bg, color,
      fontSize: 11, fontWeight: 600, whiteSpace: 'nowrap', flexShrink: 0,
    }}>
      {icon} {status.replace('_', ' ')}
    </span>
  );
}

function SkeletonBar({ w, h = 10 }: { w: string | number; h?: number }) {
  return (
    <div style={{ width: w, height: h, borderRadius: 6, background: '#EEF2F7', animation: 'shimmer 1.5s ease-in-out infinite' }} />
  );
}

function StatCardSkeleton({ isMobile }: { isMobile: boolean }) {
  return (
    <div style={{ background: 'white', borderRadius: 14, padding: isMobile ? '0.875rem' : '1.375rem', border: '1px solid #E2E8F0', borderTop: '3px solid #E2E8F0' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          <SkeletonBar w={80} />
          <SkeletonBar w={56} h={32} />
          <SkeletonBar w={64} h={8} />
        </div>
        <div style={{ width: 44, height: 44, borderRadius: 11, background: '#EEF2F7', animation: 'shimmer 1.5s ease-in-out infinite' }} />
      </div>
    </div>
  );
}

export default function AdminDashboard() {
  const { isMobile, isMobileTablet } = useBreakpoint();
  const [stats, setStats]                     = useState<Stats | null>(null);
  const [recentEnquiries, setRecentEnquiries] = useState<RecentEnquiry[]>([]);
  const [recentBlogs, setRecentBlogs]         = useState<RecentBlog[]>([]);
  const [loading, setLoading]                 = useState(true);

  useEffect(() => {
    fetch('/api/admin/dashboard')
      .then(r => r.json())
      .then(d => {
        setStats(d.stats);
        setRecentEnquiries(d.recentEnquiries ?? []);
        setRecentBlogs(d.recentBlogs ?? []);
      })
      .finally(() => setLoading(false));
  }, []);

  const today = new Date().toLocaleDateString('en-IN', { weekday: 'long', day: 'numeric', month: 'long' });

  const statCards = [
    { label: 'Total Enquiries', value: stats?.totalEnquiries, sub: `${stats?.newEnquiries ?? 0} new`,         icon: MessageSquare, color: '#2563EB', bg: '#EFF6FF', accent: '#2563EB' },
    { label: 'Blog Posts',      value: stats?.totalBlogs,     sub: `${stats?.publishedBlogs ?? 0} published`, icon: FileText,      color: '#7C3AED', bg: '#F5F3FF', accent: '#7C3AED' },
    { label: 'Products',        value: stats?.totalProducts,  sub: `${stats?.activeProducts ?? 0} active`,    icon: Package,       color: '#059669', bg: '#ECFDF5', accent: '#059669' },
    { label: 'New Enquiries',   value: stats?.newEnquiries,   sub: 'awaiting response',                       icon: TrendingUp,    color: '#D97706', bg: '#FFFBEB', accent: '#D97706' },
  ];

  const p = isMobile ? '1rem' : '1.5rem';

  return (
    <div style={{ padding: p, maxWidth: 1200 }}>

      {/* Welcome */}
      <div style={{
        display: 'flex', alignItems: isMobile ? 'flex-start' : 'center',
        justifyContent: 'space-between', gap: '1rem',
        marginBottom: isMobile ? '1.25rem' : '1.875rem',
        flexDirection: isMobile ? 'column' : 'row',
      }}>
        <div>
          <h2 style={{ fontSize: isMobile ? 21 : 27, fontWeight: 900, color: '#0F172A', letterSpacing: '-0.04em', margin: '0 0 0.3rem' }}>
            Good day, Admin 👋
          </h2>
          <p style={{ color: '#64748B', fontSize: 13.5, margin: 0 }}>
            Here's what's happening with your store today.
          </p>
        </div>
        <div style={{
          display: 'flex', alignItems: 'center', gap: '0.5rem',
          padding: '0.5rem 0.875rem', borderRadius: 10,
          background: 'white', border: '1px solid #E2E8F0',
          flexShrink: 0,
        }}>
          <Calendar size={14} color="#64748B" />
          <span style={{ fontSize: 12.5, color: '#64748B', fontWeight: 500 }}>{today}</span>
        </div>
      </div>

      {/* Stat cards */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: isMobile ? '1fr 1fr' : 'repeat(4, 1fr)',
        gap: isMobile ? '0.625rem' : '1rem',
        marginBottom: isMobile ? '1.25rem' : '1.875rem',
      }}>
        {loading
          ? Array(4).fill(0).map((_, i) => <StatCardSkeleton key={i} isMobile={isMobile} />)
          : statCards.map(({ label, value, sub, icon: Icon, color, bg, accent }) => (
            <div
              key={label}
              style={{
                background: 'white', borderRadius: 14,
                padding: isMobile ? '1rem' : '1.375rem',
                border: '1px solid #E2E8F0',
                borderTop: `3px solid ${accent}`,
                boxShadow: '0 2px 8px rgba(0,0,0,0.045)',
                transition: 'transform 0.18s, box-shadow 0.18s',
                cursor: 'default',
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-3px)';
                (e.currentTarget as HTMLDivElement).style.boxShadow = '0 10px 28px rgba(0,0,0,0.1)';
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLDivElement).style.transform = 'translateY(0)';
                (e.currentTarget as HTMLDivElement).style.boxShadow = '0 2px 8px rgba(0,0,0,0.045)';
              }}
            >
              <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '0.5rem' }}>
                <div style={{ minWidth: 0 }}>
                  <p style={{ fontSize: isMobile ? 9.5 : 10.5, fontWeight: 700, color: '#94A3B8', margin: '0 0 0.5rem', textTransform: 'uppercase', letterSpacing: '0.08em' }}>{label}</p>
                  <p style={{ fontSize: isMobile ? 30 : 38, fontWeight: 900, color: '#0F172A', margin: '0 0 0.3rem', letterSpacing: '-0.06em', lineHeight: 1 }}>
                    {value ?? '—'}
                  </p>
                  <p style={{ fontSize: 11.5, color: '#94A3B8', margin: 0 }}>{sub}</p>
                </div>
                <div style={{
                  width: isMobile ? 36 : 46, height: isMobile ? 36 : 46, borderRadius: 11, background: bg,
                  display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                }}>
                  <Icon size={isMobile ? 17 : 22} color={color} />
                </div>
              </div>
            </div>
          ))
        }
      </div>

      {/* Quick actions */}
      <div style={{
        background: 'linear-gradient(135deg, #080F1E 0%, #0E1C3A 100%)',
        borderRadius: 14, padding: isMobile ? '1.125rem' : '1.5rem',
        marginBottom: isMobile ? '1.25rem' : '1.875rem',
        display: 'flex', alignItems: isMobile ? 'flex-start' : 'center',
        justifyContent: 'space-between',
        flexDirection: isMobile ? 'column' : 'row',
        gap: isMobile ? '1rem' : '1rem',
        border: '1px solid rgba(37,99,235,0.12)',
        boxShadow: '0 4px 28px rgba(0,0,0,0.22)',
      }}>
        <div>
          <p style={{ color: 'white', fontWeight: 700, fontSize: isMobile ? 14 : 15, margin: '0 0 0.25rem' }}>Quick Actions</p>
          <p style={{ color: 'rgba(255,255,255,0.35)', fontSize: 12, margin: 0 }}>Create and publish content fast</p>
        </div>
        <div style={{ display: 'flex', gap: '0.625rem', flexWrap: 'wrap' }}>
          {[
            { href: '/admin/blogs/new',    label: 'New Blog Post', icon: FileText, color: '#93C5FD', bg: 'rgba(37,99,235,0.18)', border: 'rgba(37,99,235,0.35)' },
            { href: '/admin/products/new', label: 'New Product',   icon: Package,  color: '#6EE7B7', bg: 'rgba(16,185,129,0.14)', border: 'rgba(16,185,129,0.3)' },
          ].map(({ href, label, icon: Icon, color, bg, border }) => (
            <Link key={href} href={href} style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
              padding: '0.6rem 1.125rem', borderRadius: 9,
              background: bg, border: `1px solid ${border}`,
              color, fontSize: 13, fontWeight: 600, textDecoration: 'none',
              transition: 'opacity 0.15s, transform 0.15s',
            }}
              onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.opacity = '0.85'; (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(-1px)'; }}
              onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.opacity = '1'; (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(0)'; }}
            >
              <Plus size={13} /> {label}
            </Link>
          ))}
        </div>
      </div>

      {/* Recent content */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: isMobileTablet ? '1fr' : '1fr 1fr',
        gap: '1.125rem',
      }}>

        {/* Recent Enquiries */}
        <div style={{ background: 'white', borderRadius: 14, border: '1px solid #E2E8F0', overflow: 'hidden' }}>
          <div style={{ padding: '1rem 1.125rem', borderBottom: '1px solid #F1F5F9', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <div style={{ width: 28, height: 28, borderRadius: 8, background: '#EFF6FF', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <MessageSquare size={13} color="#2563EB" />
              </div>
              <p style={{ fontSize: 14, fontWeight: 700, color: '#0F172A', margin: 0 }}>Recent Enquiries</p>
            </div>
            <Link href="/admin/enquiries" style={{ fontSize: 12, color: '#2563EB', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.2rem', fontWeight: 500 }}>
              View all <ArrowRight size={12} />
            </Link>
          </div>
          {loading ? (
            <div style={{ padding: '0.875rem 1.125rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {[1, 2, 3].map(i => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <div style={{ width: 34, height: 34, borderRadius: '50%', background: '#EEF2F7', flexShrink: 0, animation: 'shimmer 1.5s ease-in-out infinite' }} />
                  <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 6 }}>
                    <SkeletonBar w="55%" />
                    <SkeletonBar w="38%" h={8} />
                  </div>
                  <SkeletonBar w={64} h={22} />
                </div>
              ))}
            </div>
          ) : recentEnquiries.length === 0 ? (
            <div style={{ padding: '2.25rem', textAlign: 'center' }}>
              <MessageSquare size={28} color="#CBD5E1" style={{ margin: '0 auto 0.75rem', display: 'block' }} />
              <p style={{ color: '#94A3B8', fontSize: 13, margin: '0 0 0.5rem' }}>No enquiries yet</p>
              <p style={{ color: '#CBD5E1', fontSize: 12, margin: 0 }}>Customer enquiries will appear here</p>
            </div>
          ) : recentEnquiries.map(enq => (
            <Link key={enq._id} href={`/admin/enquiries/${enq._id}`} style={{
              display: 'flex', alignItems: 'center', gap: '0.75rem',
              padding: '0.75rem 1.125rem', borderBottom: '1px solid #F8FAFC',
              textDecoration: 'none', transition: 'background 0.12s',
            }}
              onMouseEnter={e => ((e.currentTarget as HTMLAnchorElement).style.background = '#FAFBFC')}
              onMouseLeave={e => ((e.currentTarget as HTMLAnchorElement).style.background = 'transparent')}
            >
              <div style={{
                width: 34, height: 34, borderRadius: '50%', flexShrink: 0,
                background: 'linear-gradient(135deg, #DBEAFE, #EFF6FF)',
                border: '1.5px solid #BFDBFE',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: '#1D4ED8', fontWeight: 800, fontSize: 12.5,
              }}>
                {enq.name.charAt(0).toUpperCase()}
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <p style={{ fontSize: 13, fontWeight: 600, color: '#1E293B', margin: '0 0 0.1rem', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{enq.name}</p>
                <p style={{ fontSize: 11.5, color: '#94A3B8', margin: 0 }}>{enq.phone}</p>
              </div>
              <StatusBadge status={enq.status} />
            </Link>
          ))}
        </div>

        {/* Recent Blogs */}
        <div style={{ background: 'white', borderRadius: 14, border: '1px solid #E2E8F0', overflow: 'hidden' }}>
          <div style={{ padding: '1rem 1.125rem', borderBottom: '1px solid #F1F5F9', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <div style={{ width: 28, height: 28, borderRadius: 8, background: '#F5F3FF', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <FileText size={13} color="#7C3AED" />
              </div>
              <p style={{ fontSize: 14, fontWeight: 700, color: '#0F172A', margin: 0 }}>Recent Blog Posts</p>
            </div>
            <Link href="/admin/blogs" style={{ fontSize: 12, color: '#2563EB', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.2rem', fontWeight: 500 }}>
              View all <ArrowRight size={12} />
            </Link>
          </div>
          {loading ? (
            <div style={{ padding: '0.875rem 1.125rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {[1, 2, 3].map(i => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '0.75rem' }}>
                  <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 6 }}>
                    <SkeletonBar w="70%" />
                    <SkeletonBar w="45%" h={8} />
                  </div>
                  <SkeletonBar w={72} h={22} />
                </div>
              ))}
            </div>
          ) : recentBlogs.length === 0 ? (
            <div style={{ padding: '2.25rem', textAlign: 'center' }}>
              <FileText size={28} color="#CBD5E1" style={{ margin: '0 auto 0.75rem', display: 'block' }} />
              <p style={{ color: '#94A3B8', fontSize: 13, margin: '0 0 0.5rem' }}>No blog posts yet</p>
              <Link href="/admin/blogs/new" style={{ fontSize: 12, color: '#2563EB', textDecoration: 'none' }}>
                Create your first post →
              </Link>
            </div>
          ) : recentBlogs.map(blog => (
            <Link key={blog._id} href={`/admin/blogs/${blog._id}`} style={{
              display: 'flex', alignItems: 'center', justifyContent: 'space-between',
              padding: '0.75rem 1.125rem', borderBottom: '1px solid #F8FAFC',
              textDecoration: 'none', gap: '0.75rem', transition: 'background 0.12s',
            }}
              onMouseEnter={e => ((e.currentTarget as HTMLAnchorElement).style.background = '#FAFBFC')}
              onMouseLeave={e => ((e.currentTarget as HTMLAnchorElement).style.background = 'transparent')}
            >
              <p style={{ fontSize: 13, fontWeight: 600, color: '#1E293B', margin: 0, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', flex: 1 }}>
                {blog.title}
              </p>
              <StatusBadge status={blog.status} />
            </Link>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes shimmer {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.55; }
        }
        @keyframes spin { to { transform: rotate(360deg); } }
      `}</style>
    </div>
  );
}
