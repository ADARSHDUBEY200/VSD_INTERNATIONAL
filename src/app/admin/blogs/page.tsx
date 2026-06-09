'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Plus, Edit2, Trash2, Search, Globe, FileText, ChevronLeft, ChevronRight } from 'lucide-react';
import ConfirmModal from '@/components/admin/ConfirmModal';
import { useBreakpoint } from '@/hooks/useBreakpoint';
import { useToast } from '@/components/admin/Toast';

interface Blog { _id: string; title: string; slug: string; category: string; status: string; author: string; createdAt: string; }

const StatusBadge = ({ s }: { s: string }) => (
  <span style={{
    display: 'inline-flex', alignItems: 'center', gap: '0.25rem',
    padding: '0.2rem 0.6rem', borderRadius: 999, fontSize: 11, fontWeight: 600,
    background: s === 'published' ? '#ECFDF5' : '#F8FAFC',
    color: s === 'published' ? '#16A34A' : '#64748B',
    whiteSpace: 'nowrap', flexShrink: 0,
    border: `1px solid ${s === 'published' ? '#BBF7D0' : '#E2E8F0'}`,
  }}>
    {s === 'published' ? <Globe size={10} /> : <FileText size={10} />}
    {s === 'published' ? 'Published' : 'Draft'}
  </span>
);

function SkeletonRow() {
  return (
    <tr>
      {[200, 100, 80, 70, 80, 56].map((w, i) => (
        <td key={i} style={{ padding: '0.875rem 1rem' }}>
          <div style={{ width: w, height: 12, borderRadius: 6, background: '#EEF2F7', animation: 'shimmer 1.5s ease-in-out infinite' }} />
        </td>
      ))}
    </tr>
  );
}

function SkeletonCard() {
  return (
    <div style={{ background: 'white', border: '1px solid #E2E8F0', borderRadius: 12, padding: '0.875rem', marginBottom: '0.625rem' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.625rem' }}>
        <div style={{ flex: 1 }}>
          <div style={{ width: '70%', height: 13, borderRadius: 6, background: '#EEF2F7', marginBottom: 8, animation: 'shimmer 1.5s ease-in-out infinite' }} />
          <div style={{ width: '45%', height: 10, borderRadius: 6, background: '#EEF2F7', animation: 'shimmer 1.5s ease-in-out infinite' }} />
        </div>
        <div style={{ width: 72, height: 22, borderRadius: 999, background: '#EEF2F7', flexShrink: 0, marginLeft: '0.75rem', animation: 'shimmer 1.5s ease-in-out infinite' }} />
      </div>
      <div style={{ height: 1, background: '#F1F5F9', margin: '0.625rem 0' }} />
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ width: 80, height: 10, borderRadius: 6, background: '#EEF2F7', animation: 'shimmer 1.5s ease-in-out infinite' }} />
        <div style={{ display: 'flex', gap: '0.375rem' }}>
          <div style={{ width: 58, height: 28, borderRadius: 6, background: '#EEF2F7', animation: 'shimmer 1.5s ease-in-out infinite' }} />
          <div style={{ width: 30, height: 28, borderRadius: 6, background: '#EEF2F7', animation: 'shimmer 1.5s ease-in-out infinite' }} />
        </div>
      </div>
    </div>
  );
}

export default function BlogsPage() {
  const router = useRouter();
  const { isMobile } = useBreakpoint();
  const toast = useToast();

  const [blogs, setBlogs]       = useState<Blog[]>([]);
  const [total, setTotal]       = useState(0);
  const [page, setPage]         = useState(1);
  const [pages, setPages]       = useState(1);
  const [loading, setLoading]   = useState(true);
  const [status, setStatus]     = useState('all');
  const [search, setSearch]     = useState('');
  const [deleting, setDeleting] = useState<string | null>(null);
  const [confirm, setConfirm]   = useState<{ id: string; title: string } | null>(null);

  const load = useCallback(() => {
    setLoading(true);
    const params = new URLSearchParams({ page: String(page) });
    if (status !== 'all') params.set('status', status);
    fetch(`/api/admin/blogs?${params}`)
      .then(r => r.json())
      .then(d => { setBlogs(d.blogs ?? []); setTotal(d.total ?? 0); setPages(d.pages ?? 1); })
      .finally(() => setLoading(false));
  }, [page, status]);

  useEffect(() => { load(); }, [load]);

  async function handleDelete() {
    if (!confirm) return;
    setDeleting(confirm.id);
    await fetch(`/api/admin/blogs/${confirm.id}`, { method: 'DELETE' });
    toast.success('Blog post deleted.', `"${confirm.title}" has been removed.`);
    setConfirm(null); setDeleting(null); load();
  }

  const filtered = search
    ? blogs.filter(b => b.title.toLowerCase().includes(search.toLowerCase()) || b.category?.toLowerCase().includes(search.toLowerCase()))
    : blogs;

  const p = isMobile ? '0.875rem' : '1.25rem';

  return (
    <div style={{ padding: p }}>
      <ConfirmModal
        open={Boolean(confirm)}
        title="Delete Blog Post"
        message={`"${confirm?.title}" will be permanently deleted.`}
        loading={Boolean(deleting)}
        onConfirm={handleDelete}
        onCancel={() => setConfirm(null)}
      />

      {/* Header */}
      <div style={{ display: 'flex', alignItems: isMobile ? 'flex-start' : 'center', justifyContent: 'space-between', marginBottom: '1.25rem', flexDirection: isMobile ? 'column' : 'row', gap: '0.75rem' }}>
        <div>
          <h2 style={{ fontSize: 18, fontWeight: 800, color: '#0F172A', margin: '0 0 0.2rem', letterSpacing: '-0.02em' }}>Blog Posts</h2>
          <p style={{ fontSize: 12.5, color: '#64748B', margin: 0 }}>{total} posts total</p>
        </div>
        <Link href="/admin/blogs/new" style={{
          display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
          padding: '0.55rem 1.125rem', borderRadius: 9,
          background: 'linear-gradient(135deg, #1D4ED8, #2563EB)',
          color: 'white', textDecoration: 'none', fontSize: 13, fontWeight: 600,
          whiteSpace: 'nowrap', boxShadow: '0 4px 14px rgba(37,99,235,0.3)',
          transition: 'all 0.15s',
        }}
          onMouseEnter={e => ((e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 6px 20px rgba(37,99,235,0.45)')}
          onMouseLeave={e => ((e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 4px 14px rgba(37,99,235,0.3)')}
        >
          <Plus size={15} /> New Post
        </Link>
      </div>

      {/* Filters */}
      <div style={{ background: 'white', borderRadius: 12, padding: '0.75rem', border: '1px solid #E2E8F0', marginBottom: '1rem', display: 'flex', gap: '0.625rem', flexWrap: 'wrap', alignItems: 'center', boxShadow: '0 1px 4px rgba(0,0,0,0.04)' }}>
        <div style={{ position: 'relative', flex: 1, minWidth: isMobile ? '100%' : 200 }}>
          <Search size={13} style={{ position: 'absolute', left: 10, top: '50%', transform: 'translateY(-50%)', color: '#94A3B8', pointerEvents: 'none' }} />
          <input
            value={search} onChange={e => setSearch(e.target.value)}
            placeholder="Search posts…"
            style={{ width: '100%', padding: '0.525rem 0.75rem 0.525rem 2rem', border: '1.5px solid #E2E8F0', borderRadius: 8, fontSize: 13, outline: 'none', boxSizing: 'border-box', transition: 'border-color 0.15s', background: '#FAFBFC' }}
            onFocus={e => (e.target.style.borderColor = '#2563EB')}
            onBlur={e => (e.target.style.borderColor = '#E2E8F0')}
          />
        </div>
        <select value={status} onChange={e => { setStatus(e.target.value); setPage(1); }} style={{ padding: '0.525rem 0.75rem', border: '1.5px solid #E2E8F0', borderRadius: 8, fontSize: 13, color: '#374151', background: '#FAFBFC', outline: 'none', minWidth: 140, cursor: 'pointer' }}>
          <option value="all">All Statuses</option>
          <option value="published">Published</option>
          <option value="draft">Draft</option>
        </select>
      </div>

      {/* Content */}
      <div style={{ background: 'white', borderRadius: 14, border: '1px solid #E2E8F0', overflow: 'hidden', boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}>
        {isMobile ? (
          <div style={{ padding: '0.625rem' }}>
            {loading
              ? Array(4).fill(0).map((_, i) => <SkeletonCard key={i} />)
              : filtered.length === 0 ? (
                <div style={{ textAlign: 'center', padding: '3rem 1rem', color: '#94A3B8' }}>
                  <FileText size={36} style={{ margin: '0 auto 0.875rem', display: 'block', opacity: 0.3 }} />
                  <p style={{ fontSize: 14, margin: '0 0 0.5rem', fontWeight: 600, color: '#64748B' }}>No blog posts found</p>
                  <Link href="/admin/blogs/new" style={{ fontSize: 13, color: '#2563EB', textDecoration: 'none', fontWeight: 500 }}>Create your first post →</Link>
                </div>
              ) : filtered.map(blog => (
                <div key={blog._id} style={{ background: 'white', border: '1px solid #E2E8F0', borderRadius: 12, padding: '0.875rem', marginBottom: '0.625rem', boxShadow: '0 1px 4px rgba(0,0,0,0.04)', transition: 'box-shadow 0.15s' }}
                  onMouseEnter={e => ((e.currentTarget as HTMLDivElement).style.boxShadow = '0 4px 12px rgba(0,0,0,0.08)')}
                  onMouseLeave={e => ((e.currentTarget as HTMLDivElement).style.boxShadow = '0 1px 4px rgba(0,0,0,0.04)')}
                >
                  <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '0.5rem', marginBottom: '0.625rem' }}>
                    <div style={{ minWidth: 0 }}>
                      <p style={{ fontSize: 14, fontWeight: 700, color: '#1E293B', margin: '0 0 0.2rem', lineHeight: 1.35 }}>{blog.title}</p>
                      <p style={{ fontSize: 11.5, color: '#94A3B8', margin: 0 }}>{blog.category || 'Uncategorised'}</p>
                    </div>
                    <StatusBadge s={blog.status} />
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: '0.625rem', borderTop: '1px solid #F1F5F9' }}>
                    <span style={{ fontSize: 11, color: '#94A3B8' }}>
                      {new Date(blog.createdAt).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}
                    </span>
                    <div style={{ display: 'flex', gap: '0.375rem' }}>
                      <button onClick={() => router.push(`/admin/blogs/${blog._id}`)} style={{ background: '#EFF6FF', border: 'none', borderRadius: 7, padding: '0.35rem 0.75rem', display: 'flex', alignItems: 'center', gap: '0.3rem', cursor: 'pointer', fontSize: 12, color: '#2563EB', fontWeight: 600 }}>
                        <Edit2 size={12} /> Edit
                      </button>
                      <button onClick={() => setConfirm({ id: blog._id, title: blog.title })} style={{ background: '#FEF2F2', border: 'none', borderRadius: 7, width: 30, height: 30, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
                        <Trash2 size={13} color="#EF4444" />
                      </button>
                    </div>
                  </div>
                </div>
              ))
            }
          </div>
        ) : (
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 600 }}>
              <thead>
                <tr style={{ background: '#F8FAFC', borderBottom: '1px solid #E2E8F0' }}>
                  {['Title', 'Category', 'Author', 'Status', 'Date', 'Actions'].map(h => (
                    <th key={h} style={{ padding: '0.75rem 1rem', textAlign: 'left', fontSize: 10.5, fontWeight: 700, color: '#94A3B8', textTransform: 'uppercase', letterSpacing: '0.08em', whiteSpace: 'nowrap' }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {loading
                  ? Array(5).fill(0).map((_, i) => <SkeletonRow key={i} />)
                  : filtered.length === 0 ? (
                    <tr>
                      <td colSpan={6} style={{ textAlign: 'center', padding: '3.5rem', color: '#94A3B8' }}>
                        <FileText size={32} style={{ margin: '0 auto 0.875rem', display: 'block', opacity: 0.3 }} />
                        <p style={{ fontSize: 14, margin: '0 0 0.625rem', fontWeight: 600, color: '#64748B' }}>No blog posts found</p>
                        <Link href="/admin/blogs/new" style={{ fontSize: 13, color: '#2563EB', textDecoration: 'none', fontWeight: 500 }}>Create your first post →</Link>
                      </td>
                    </tr>
                  ) : filtered.map((blog, i) => (
                    <tr key={blog._id} style={{ borderBottom: i < filtered.length - 1 ? '1px solid #F1F5F9' : 'none', transition: 'background 0.1s' }}
                      onMouseEnter={e => ((e.currentTarget as HTMLTableRowElement).style.background = '#FAFBFC')}
                      onMouseLeave={e => ((e.currentTarget as HTMLTableRowElement).style.background = 'transparent')}
                    >
                      <td style={{ padding: '0.875rem 1rem' }}>
                        <p style={{ fontSize: 13, fontWeight: 600, color: '#1E293B', margin: '0 0 0.15rem', maxWidth: 240, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{blog.title}</p>
                        <p style={{ fontSize: 11, color: '#94A3B8', margin: 0 }}>/blog/{blog.slug}</p>
                      </td>
                      <td style={{ padding: '0.875rem 1rem', fontSize: 13, color: '#64748B' }}>{blog.category || '—'}</td>
                      <td style={{ padding: '0.875rem 1rem', fontSize: 13, color: '#64748B' }}>{blog.author}</td>
                      <td style={{ padding: '0.875rem 1rem' }}><StatusBadge s={blog.status} /></td>
                      <td style={{ padding: '0.875rem 1rem', fontSize: 12, color: '#94A3B8', whiteSpace: 'nowrap' }}>
                        {new Date(blog.createdAt).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}
                      </td>
                      <td style={{ padding: '0.875rem 1rem' }}>
                        <div style={{ display: 'flex', gap: '0.375rem' }}>
                          <button onClick={() => router.push(`/admin/blogs/${blog._id}`)} style={{ background: '#EFF6FF', border: 'none', borderRadius: 7, width: 32, height: 32, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', transition: 'background 0.15s' }}
                            onMouseEnter={e => ((e.currentTarget as HTMLButtonElement).style.background = '#DBEAFE')}
                            onMouseLeave={e => ((e.currentTarget as HTMLButtonElement).style.background = '#EFF6FF')}
                          >
                            <Edit2 size={13} color="#2563EB" />
                          </button>
                          <button onClick={() => setConfirm({ id: blog._id, title: blog.title })} style={{ background: '#FEF2F2', border: 'none', borderRadius: 7, width: 32, height: 32, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', transition: 'background 0.15s' }}
                            onMouseEnter={e => ((e.currentTarget as HTMLButtonElement).style.background = '#FECACA')}
                            onMouseLeave={e => ((e.currentTarget as HTMLButtonElement).style.background = '#FEF2F2')}
                          >
                            <Trash2 size={13} color="#EF4444" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                }
              </tbody>
            </table>
          </div>
        )}

        {pages > 1 && (
          <div style={{ padding: '0.875rem 1.125rem', borderTop: '1px solid #F1F5F9', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <span style={{ fontSize: 12.5, color: '#64748B', fontWeight: 500 }}>
              Page <strong>{page}</strong> of <strong>{pages}</strong>
            </span>
            <div style={{ display: 'flex', gap: '0.375rem' }}>
              <button onClick={() => setPage(pg => pg - 1)} disabled={page === 1} style={{ background: '#F8FAFC', border: '1px solid #E2E8F0', borderRadius: 7, width: 32, height: 32, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: page === 1 ? 'not-allowed' : 'pointer', opacity: page === 1 ? 0.4 : 1, transition: 'background 0.15s' }}>
                <ChevronLeft size={14} color="#64748B" />
              </button>
              <button onClick={() => setPage(pg => pg + 1)} disabled={page === pages} style={{ background: '#F8FAFC', border: '1px solid #E2E8F0', borderRadius: 7, width: 32, height: 32, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: page === pages ? 'not-allowed' : 'pointer', opacity: page === pages ? 0.4 : 1, transition: 'background 0.15s' }}>
                <ChevronRight size={14} color="#64748B" />
              </button>
            </div>
          </div>
        )}
      </div>

      <style>{`
        @keyframes shimmer { 0%,100% { opacity: 1; } 50% { opacity: 0.55; } }
      `}</style>
    </div>
  );
}
