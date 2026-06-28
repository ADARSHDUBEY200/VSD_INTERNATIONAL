'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Save, Globe, FileText, ArrowLeft, Loader2 } from 'lucide-react';
import RichEditor from './RichEditor';
import ImageUpload from './ImageUpload';
import { useBreakpoint } from '@/hooks/useBreakpoint';
import { useToast } from './Toast';

const CATEGORIES = [
  'Cloud Kitchen Guides', 'Hotel Kitchen Guides', 'Hospital Kitchen Guides',
  'Restaurant Kitchen Guides', 'Commercial Kitchen Guides',
  'Bakery & Confectionery', 'Industry News',
];

interface BlogData {
  title: string; slug: string; category: string; excerpt: string;
  content: string; mainImage: string; childImages: string[];
  metaTitle: string; metaDescription: string;
  schemaTitle: string; schemaDescription: string;
  author: string; status: 'draft' | 'published';
}

const EMPTY: BlogData = {
  title: '', slug: '', category: '', excerpt: '',
  content: '', mainImage: '', childImages: ['', '', '', ''],
  metaTitle: '', metaDescription: '',
  schemaTitle: '', schemaDescription: '',
  author: 'VSD International', status: 'draft',
};

function slugify(str: string) {
  return str.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
}

const inputStyle: React.CSSProperties = {
  width: '100%', padding: '0.625rem 0.875rem',
  border: '1px solid #CBD5E1', borderRadius: 8,
  fontSize: 14, color: '#1E293B', background: 'white',
  outline: 'none', boxSizing: 'border-box',
};
const labelStyle: React.CSSProperties = {
  display: 'block', fontSize: 13, fontWeight: 600,
  color: '#374151', marginBottom: '0.375rem',
};
const cardStyle: React.CSSProperties = {
  background: 'white', borderRadius: 12,
  padding: '1.125rem', border: '1px solid #E2E8F0',
};

export default function BlogForm({ id }: { id?: string }) {
  const router = useRouter();
  const isEdit = Boolean(id);
  const { isMobileTablet, isMobile } = useBreakpoint();

  const toast = useToast();
  const [data, setData]       = useState<BlogData>(EMPTY);
  const [loading, setLoading] = useState(isEdit);
  const [saving, setSaving]   = useState(false);
  const [error, setError]     = useState('');
  const [slugManual, setSlugManual] = useState(false);

  useEffect(() => {
    if (!isEdit) return;
    fetch(`/api/admin/blogs/${id}`)
      .then(r => r.json())
      .then(({ blog }) => {
        if (blog) {
          const childImages = [...(blog.childImages ?? [])];
          while (childImages.length < 4) childImages.push('');
          setData({ ...EMPTY, ...blog, childImages: childImages.slice(0, 4) });
          setSlugManual(true);
        }
      })
      .finally(() => setLoading(false));
  }, [id, isEdit]);

  function set<K extends keyof BlogData>(key: K, val: BlogData[K]) {
    setData(prev => {
      const next = { ...prev, [key]: val };
      if (key === 'title' && !slugManual) {
        next.slug = slugify(val as string);
        if (!next.metaTitle) next.metaTitle = val as string;
      }
      return next;
    });
  }

  const setChildImage = (i: number, url: string) => {
    const n = [...data.childImages]; n[i] = url; set('childImages', n);
  };

  async function handleSave(publish = false) {
    if (!data.title.trim() || !data.slug.trim() || !data.content.trim()) {
      setError('Title, slug and content are required.'); return;
    }
    setSaving(true); setError('');
    const payload = { ...data, childImages: data.childImages.filter(Boolean), status: publish ? 'published' : data.status } as BlogData;
    try {
      const url    = isEdit ? `/api/admin/blogs/${id}` : '/api/admin/blogs';
      const method = isEdit ? 'PUT' : 'POST';
      const res    = await fetch(url, { method, headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) });
      const json   = await res.json();
      if (!res.ok) throw new Error(json.error ?? 'Save failed');
      toast.success(publish ? 'Blog post published!' : 'Draft saved.', isEdit ? 'Your changes have been saved.' : 'New blog post created.');
      router.push('/admin/blogs');
      router.refresh();
    } catch (err) {
      const msg = err instanceof Error ? err.message : 'Save failed';
      setError(msg);
      toast.error('Save failed', msg);
    } finally {
      setSaving(false);
    }
  }

  if (loading) {
    return (
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: 300 }}>
        <Loader2 size={28} color="#2563EB" style={{ animation: 'spin 1s linear infinite' }} />
        <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
      </div>
    );
  }

  const p = isMobile ? '0.875rem' : '1.25rem';

  return (
    <div style={{ padding: p }}>

      {/* Top bar */}
      <div style={{
        display: 'flex', alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: '1.25rem',
        flexWrap: 'wrap', gap: '0.625rem',
      }}>
        <button
          onClick={() => router.push('/admin/blogs')}
          style={{ display: 'flex', alignItems: 'center', gap: '0.375rem', background: 'none', border: 'none', cursor: 'pointer', color: '#64748B', fontSize: 13 }}
        >
          <ArrowLeft size={15} /> Back
        </button>

        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
          <button onClick={() => handleSave(false)} disabled={saving} style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', padding: '0.5rem 0.875rem', borderRadius: 8, background: '#F1F5F9', border: '1px solid #E2E8F0', fontSize: 13, fontWeight: 600, color: '#374151', cursor: 'pointer' }}>
            <Save size={14} /> {saving ? 'Saving…' : 'Draft'}
          </button>
          <button onClick={() => handleSave(true)} disabled={saving} style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', padding: '0.5rem 1rem', borderRadius: 8, background: '#2563EB', border: 'none', fontSize: 13, fontWeight: 600, color: 'white', cursor: 'pointer' }}>
            <Globe size={14} /> {saving ? 'Publishing…' : 'Publish'}
          </button>
        </div>
      </div>

      {error && (
        <div style={{ background: '#FEF2F2', border: '1px solid #FECACA', borderRadius: 8, padding: '0.75rem 1rem', color: '#DC2626', fontSize: 13, marginBottom: '1rem' }}>
          {error}
        </div>
      )}

      {/* Responsive two-column → single-column */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: isMobileTablet ? '1fr' : '1fr 310px',
        gap: '1.125rem',
        alignItems: 'start',
      }}>

        {/* ── Main column ── */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>

          {/* Title + Slug */}
          <div style={cardStyle}>
            <label style={labelStyle}>Title *</label>
            <input
              value={data.title}
              onChange={e => set('title', e.target.value)}
              placeholder="Enter blog title…"
              style={{ ...inputStyle, fontSize: 16, fontWeight: 600, marginBottom: '0.875rem' }}
            />
            <label style={labelStyle}>Slug *</label>
            <div style={{ display: 'flex', gap: 0 }}>
              <span style={{ padding: '0.625rem 0.75rem', background: '#F1F5F9', borderRadius: '8px 0 0 8px', border: '1px solid #CBD5E1', borderRight: 'none', fontSize: 12, color: '#64748B', whiteSpace: 'nowrap' }}>
                /blog/
              </span>
              <input
                value={data.slug}
                onChange={e => { setSlugManual(true); set('slug', slugify(e.target.value)); }}
                placeholder="post-slug"
                style={{ ...inputStyle, borderRadius: '0 8px 8px 0', flex: 1 }}
              />
            </div>
          </div>

          {/* Content editor */}
          <div style={cardStyle}>
            <label style={{ ...labelStyle, marginBottom: '0.75rem' }}>Content *</label>
            <RichEditor value={data.content} onChange={v => set('content', v)} placeholder="Write your blog post here…" minHeight={isMobile ? 300 : 400} />
          </div>

          {/* SEO */}
          <div style={cardStyle}>
            <p style={{ fontSize: 13, fontWeight: 700, color: '#0F172A', margin: '0 0 0.875rem' }}>SEO Settings — Meta Tags</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <div>
                <label style={labelStyle}>Meta Title</label>
                <input value={data.metaTitle} onChange={e => set('metaTitle', e.target.value)} style={inputStyle} placeholder="SEO title — falls back to post title if left blank" />
                <p style={{ fontSize: 11, color: '#94A3B8', margin: '0.25rem 0 0' }}>{data.metaTitle.length}/60</p>
              </div>
              <div>
                <label style={labelStyle}>Meta Description</label>
                <textarea value={data.metaDescription} onChange={e => set('metaDescription', e.target.value)} rows={3} placeholder="150–160 chars ideal. Falls back to excerpt if left blank." style={{ ...inputStyle, resize: 'vertical' }} />
                <p style={{ fontSize: 11, color: '#94A3B8', margin: '0.25rem 0 0' }}>{data.metaDescription.length}/160</p>
              </div>
            </div>
          </div>

          {/* Schema.org overrides */}
          <div style={cardStyle}>
            <p style={{ fontSize: 13, fontWeight: 700, color: '#0F172A', margin: '0 0 0.375rem' }}>Schema.org (JSON-LD) Overrides</p>
            <p style={{ fontSize: 12, color: '#64748B', margin: '0 0 0.875rem' }}>
              Controls the <code>headline</code> and <code>description</code> fields in the structured data read by search engines and AI crawlers.
              The rest of the markup (author, breadcrumbs, dates) is generated automatically.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <div>
                <label style={labelStyle}>Schema Title</label>
                <input value={data.schemaTitle} onChange={e => set('schemaTitle', e.target.value)} style={inputStyle} placeholder="Falls back to post title if left blank" />
              </div>
              <div>
                <label style={labelStyle}>Schema Description</label>
                <textarea value={data.schemaDescription} onChange={e => set('schemaDescription', e.target.value)} rows={3} placeholder="Falls back to excerpt if left blank." style={{ ...inputStyle, resize: 'vertical' }} />
              </div>
            </div>
          </div>

          {/* Images */}
          <div style={cardStyle}>
            <ImageUpload value={data.mainImage} onChange={url => set('mainImage', url)} folder="vsd-international/blogs" label="Main Image *" />
          </div>

          <div style={cardStyle}>
            <p style={{ fontSize: 13, fontWeight: 700, color: '#0F172A', margin: '0 0 0.75rem' }}>Child Images (up to 4)</p>
            <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: '0.875rem' }}>
              {[0, 1, 2, 3].map(i => (
                <ImageUpload key={i} value={data.childImages[i] ?? ''} onChange={url => setChildImage(i, url)} folder="vsd-international/blogs" label={`Child Image ${i + 1}`} />
              ))}
            </div>
          </div>
        </div>

        {/* ── Sidebar column ── */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>

          {/* Publish settings */}
          <div style={cardStyle}>
            <p style={{ fontSize: 13, fontWeight: 700, color: '#0F172A', margin: '0 0 0.75rem' }}>Publish Settings</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
              <div>
                <label style={labelStyle}>Status</label>
                <select value={data.status} onChange={e => set('status', e.target.value as 'draft' | 'published')} style={inputStyle}>
                  <option value="draft">Draft</option>
                  <option value="published">Published</option>
                </select>
              </div>
              <div>
                <label style={labelStyle}>Author</label>
                <input value={data.author} onChange={e => set('author', e.target.value)} style={inputStyle} />
              </div>
              <div>
                <label style={labelStyle}>Category</label>
                <select value={data.category} onChange={e => set('category', e.target.value)} style={inputStyle}>
                  <option value="">Select category…</option>
                  {CATEGORIES.map(c => <option key={c} value={c}>{c}</option>)}
                </select>
              </div>
            </div>
          </div>

          {/* Excerpt */}
          <div style={cardStyle}>
            <label style={labelStyle}>Excerpt *</label>
            <textarea value={data.excerpt} onChange={e => set('excerpt', e.target.value)} rows={4} placeholder="Short description for listings…" style={{ ...inputStyle, resize: 'vertical' }} />
          </div>

          {/* Status badge */}
          <div style={{ ...cardStyle, display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <p style={{ fontSize: 12, color: '#64748B', margin: 0, fontWeight: 500 }}>Current status:</p>
            <span style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.375rem',
              padding: '0.25rem 0.75rem', borderRadius: 999, fontSize: 12, fontWeight: 600,
              background: data.status === 'published' ? '#DCFCE7' : '#FEF9C3',
              color: data.status === 'published' ? '#16A34A' : '#CA8A04',
            }}>
              {data.status === 'published' ? <Globe size={11} /> : <FileText size={11} />}
              {data.status === 'published' ? 'Published' : 'Draft'}
            </span>
          </div>
        </div>
      </div>

      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </div>
  );
}
