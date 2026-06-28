'use client';

import { useState, useEffect, useMemo } from 'react';
import { useRouter } from 'next/navigation';
import { Save, ArrowLeft, Plus, X, Loader2, Star, Search } from 'lucide-react';
import ImageUpload from './ImageUpload';
import { useBreakpoint } from '@/hooks/useBreakpoint';
import { useToast } from './Toast';
import { CATEGORIES } from '@/lib/categories';

/* ── Types ─────────────────────────────────────────────────────────────── */
interface KeyFact { label: string; value: string; }
interface Spec { name: string; value: string; }
interface Feature { title: string; description: string; }
interface BestForItem { industry: string; description: string; }
interface TechnicalDetail { label: string; value: string; }
interface WhyVSDPoint { point: string; detail: string; }
interface ComparisonRow { attribute: string; thisModel: string; alternative1: string; alternative2: string; }
interface ComparisonModel { name: string; slug: string; }
interface ProjectProof { client: string; city: string; scope: string; year: string; }
interface Review { name: string; company: string; rating: number; text: string; date: string; }
interface FAQ { question: string; answer: string; }

interface ProductData {
  fullName: string; modelNumber: string; slug: string; category: string; brand: string; tagline: string;
  mainImage: string; childImages: string[];
  keyFacts: KeyFact[]; priceContext: string; priceMin: string; priceMax: string; leadTime: string; whatsappMessage: string;
  overview: string; description: string[];
  specs: Spec[]; features: Feature[]; bestFor: BestForItem[]; technical: TechnicalDetail[]; compliance: string[];
  whyVSD: WhyVSDPoint[]; comparison: ComparisonRow[]; comparisonModels: ComparisonModel[];
  projectProof: ProjectProof[]; reviews: Review[]; faq: FAQ[]; relatedProducts: string[];
  metaTitle: string; metaDescription: string; schemaTitle: string; schemaDescription: string;
  status: 'active' | 'inactive'; featured: boolean;
}

interface RelatedOption { _id: string; fullName: string; slug: string; category: string; }

const EMPTY: ProductData = {
  fullName: '', modelNumber: '', slug: '', category: '', brand: '', tagline: '',
  mainImage: '', childImages: ['', '', '', ''],
  keyFacts: [], priceContext: '', priceMin: '', priceMax: '', leadTime: '', whatsappMessage: '',
  overview: '', description: [],
  specs: [], features: [], bestFor: [], technical: [], compliance: [],
  whyVSD: [], comparison: [], comparisonModels: [], projectProof: [], reviews: [], faq: [], relatedProducts: [],
  metaTitle: '', metaDescription: '', schemaTitle: '', schemaDescription: '',
  status: 'active', featured: false,
};

function slugify(s: string) {
  return s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
}

/* ── Style tokens ──────────────────────────────────────────────────────── */
const inputStyle: React.CSSProperties = {
  width: '100%', padding: '0.625rem 0.875rem',
  border: '1px solid #CBD5E1', borderRadius: 8,
  fontSize: 14, color: '#1E293B', background: 'white',
  outline: 'none', boxSizing: 'border-box',
};
const labelStyle: React.CSSProperties = {
  display: 'block', fontSize: 13, fontWeight: 600, color: '#374151', marginBottom: '0.375rem',
};
const cardStyle: React.CSSProperties = {
  background: 'white', borderRadius: 12, padding: '1.125rem', border: '1px solid #E2E8F0',
};
const addBtnStyle: React.CSSProperties = {
  display: 'flex', alignItems: 'center', gap: '0.3rem', background: '#EFF6FF', border: 'none',
  borderRadius: 6, padding: '0.35rem 0.75rem', fontSize: 12, color: '#2563EB', fontWeight: 600, cursor: 'pointer',
};
const removeBtnStyle: React.CSSProperties = {
  background: '#FEF2F2', border: 'none', borderRadius: 6, width: 34, height: 34,
  display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', flexShrink: 0,
};
const removeBtnSmallStyle: React.CSSProperties = {
  position: 'absolute', top: 6, right: 6, background: '#FEF2F2', border: 'none', borderRadius: 6,
  width: 26, height: 26, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer',
};
const emptyHintStyle: React.CSSProperties = { fontSize: 12.5, color: '#94A3B8', margin: 0, fontStyle: 'italic' };

/* ── Generic array editors ─────────────────────────────────────────────── */
function StringListEditor({
  label, items, onChange, placeholder, multiline = false,
}: { label: string; items: string[]; onChange: (items: string[]) => void; placeholder?: string; multiline?: boolean; }) {
  const add = () => onChange([...items, '']);
  const remove = (i: number) => onChange(items.filter((_, x) => x !== i));
  const set = (i: number, v: string) => { const n = [...items]; n[i] = v; onChange(n); };
  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.625rem' }}>
        <p style={{ fontSize: 13, fontWeight: 700, color: '#0F172A', margin: 0 }}>{label}</p>
        <button type="button" onClick={add} style={addBtnStyle}><Plus size={12} /> Add</button>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
        {items.map((v, i) => (
          <div key={i} style={{ display: 'flex', gap: '0.5rem' }}>
            {multiline ? (
              <textarea value={v} onChange={e => set(i, e.target.value)} rows={2} placeholder={placeholder} style={{ ...inputStyle, flex: 1, resize: 'vertical' }} />
            ) : (
              <input value={v} onChange={e => set(i, e.target.value)} placeholder={placeholder} style={{ ...inputStyle, flex: 1 }} />
            )}
            <button type="button" onClick={() => remove(i)} style={removeBtnStyle}><X size={13} color="#EF4444" /></button>
          </div>
        ))}
        {items.length === 0 && <p style={emptyHintStyle}>None added yet.</p>}
      </div>
    </div>
  );
}

function ObjectListEditor<T extends object>({
  label, items, onChange, fields, empty,
}: {
  label: string; items: T[]; onChange: (items: T[]) => void;
  fields: { key: keyof T; placeholder: string; multiline?: boolean }[]; empty: T;
}) {
  const add = () => onChange([...items, { ...empty }]);
  const remove = (i: number) => onChange(items.filter((_, x) => x !== i));
  const set = (i: number, key: keyof T, v: string) => {
    const n = [...items]; n[i] = { ...n[i], [key]: v } as T; onChange(n);
  };
  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.625rem' }}>
        <p style={{ fontSize: 13, fontWeight: 700, color: '#0F172A', margin: 0 }}>{label}</p>
        <button type="button" onClick={add} style={addBtnStyle}><Plus size={12} /> Add</button>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
        {items.map((item, i) => (
          <div key={i} style={{ border: '1px solid #E2E8F0', borderRadius: 8, padding: '0.625rem', display: 'flex', flexDirection: 'column', gap: '0.5rem', position: 'relative' }}>
            <button type="button" onClick={() => remove(i)} style={removeBtnSmallStyle}><X size={12} color="#EF4444" /></button>
            {fields.map(f => f.multiline ? (
              <textarea key={String(f.key)} value={String(item[f.key] ?? '')} onChange={e => set(i, f.key, e.target.value)} rows={2} placeholder={f.placeholder} style={{ ...inputStyle, resize: 'vertical', paddingRight: '1.75rem' }} />
            ) : (
              <input key={String(f.key)} value={String(item[f.key] ?? '')} onChange={e => set(i, f.key, e.target.value)} placeholder={f.placeholder} style={{ ...inputStyle, paddingRight: '1.75rem' }} />
            ))}
          </div>
        ))}
        {items.length === 0 && <p style={emptyHintStyle}>None added yet.</p>}
      </div>
    </div>
  );
}

function ReviewsEditor({ items, onChange }: { items: Review[]; onChange: (items: Review[]) => void; }) {
  const add = () => onChange([...items, { name: '', company: '', rating: 5, text: '', date: '' }]);
  const remove = (i: number) => onChange(items.filter((_, x) => x !== i));
  const set = (i: number, key: keyof Review, v: string | number) => {
    const n = [...items]; n[i] = { ...n[i], [key]: v }; onChange(n);
  };
  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.625rem' }}>
        <p style={{ fontSize: 13, fontWeight: 700, color: '#0F172A', margin: 0 }}>Customer Reviews</p>
        <button type="button" onClick={add} style={addBtnStyle}><Plus size={12} /> Add Review</button>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
        {items.map((r, i) => (
          <div key={i} style={{ border: '1px solid #E2E8F0', borderRadius: 8, padding: '0.625rem', display: 'flex', flexDirection: 'column', gap: '0.5rem', position: 'relative' }}>
            <button type="button" onClick={() => remove(i)} style={removeBtnSmallStyle}><X size={12} color="#EF4444" /></button>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 80px', gap: '0.5rem' }}>
              <input value={r.name} onChange={e => set(i, 'name', e.target.value)} placeholder="Reviewer name" style={inputStyle} />
              <input value={r.company} onChange={e => set(i, 'company', e.target.value)} placeholder="Company / role" style={inputStyle} />
              <select value={r.rating} onChange={e => set(i, 'rating', Number(e.target.value))} style={inputStyle}>
                {[5, 4, 3, 2, 1].map(n => <option key={n} value={n}>{n} ★</option>)}
              </select>
            </div>
            <textarea value={r.text} onChange={e => set(i, 'text', e.target.value)} rows={2} placeholder="Review text" style={{ ...inputStyle, resize: 'vertical' }} />
            <input value={r.date} onChange={e => set(i, 'date', e.target.value)} placeholder="YYYY-MM-DD" style={{ ...inputStyle, maxWidth: 180 }} />
          </div>
        ))}
        {items.length === 0 && <p style={emptyHintStyle}>None added yet.</p>}
      </div>
    </div>
  );
}

function RelatedProductsPicker({
  selected, onChange, excludeId,
}: { selected: string[]; onChange: (ids: string[]) => void; excludeId?: string; }) {
  const [options, setOptions] = useState<RelatedOption[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');

  useEffect(() => {
    fetch('/api/admin/products?limit=200&status=all')
      .then(r => r.json())
      .then(d => setOptions((d.products ?? []).filter((p: RelatedOption) => p._id !== excludeId)))
      .finally(() => setLoading(false));
  }, [excludeId]);

  const filtered = useMemo(
    () => options.filter(o => o.fullName.toLowerCase().includes(search.toLowerCase())),
    [options, search]
  );

  const toggle = (id: string) => {
    onChange(selected.includes(id) ? selected.filter(x => x !== id) : [...selected, id]);
  };

  return (
    <div>
      <p style={{ fontSize: 13, fontWeight: 700, color: '#0F172A', margin: '0 0 0.625rem' }}>Related Products</p>
      <div style={{ position: 'relative', marginBottom: '0.625rem' }}>
        <Search size={13} style={{ position: 'absolute', left: 10, top: '50%', transform: 'translateY(-50%)', color: '#94A3B8' }} />
        <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search products…" style={{ ...inputStyle, paddingLeft: '2rem' }} />
      </div>
      <div style={{ maxHeight: 220, overflowY: 'auto', border: '1px solid #E2E8F0', borderRadius: 8 }}>
        {loading ? (
          <div style={{ padding: '1rem', textAlign: 'center' }}><Loader2 size={18} color="#2563EB" style={{ animation: 'spin 1s linear infinite' }} /></div>
        ) : filtered.length === 0 ? (
          <p style={{ ...emptyHintStyle, padding: '0.75rem' }}>No products found.</p>
        ) : filtered.map(o => (
          <label key={o._id} style={{ display: 'flex', alignItems: 'center', gap: '0.625rem', padding: '0.5rem 0.75rem', borderBottom: '1px solid #F1F5F9', cursor: 'pointer' }}>
            <input type="checkbox" checked={selected.includes(o._id)} onChange={() => toggle(o._id)} style={{ accentColor: '#2563EB', width: 14, height: 14, flexShrink: 0 }} />
            <span style={{ fontSize: 13, color: '#374151' }}>{o.fullName}</span>
          </label>
        ))}
      </div>
      {selected.length > 0 && <p style={{ fontSize: 12, color: '#64748B', margin: '0.5rem 0 0' }}>{selected.length} selected</p>}
    </div>
  );
}

/* ── Tabs ──────────────────────────────────────────────────────────────── */
const TABS = ['Basic & Images', 'Commercial', 'Content', 'Trust & Proof', 'FAQ & Related', 'SEO & Schema'] as const;
type Tab = typeof TABS[number];

export default function ProductForm({ id }: { id?: string }) {
  const router = useRouter();
  const isEdit = Boolean(id);
  const { isMobileTablet, isMobile } = useBreakpoint();

  const toast = useToast();
  const [data, setData]             = useState<ProductData>(EMPTY);
  const [loading, setLoading]       = useState(isEdit);
  const [saving, setSaving]         = useState(false);
  const [error, setError]           = useState('');
  const [slugManual, setSlugManual] = useState(false);
  const [tab, setTab]               = useState<Tab>('Basic & Images');

  useEffect(() => {
    if (!isEdit) return;
    fetch(`/api/admin/products/${id}`)
      .then(r => r.json())
      .then(({ product }) => {
        if (product) {
          const childImages = [...(product.childImages ?? [])];
          while (childImages.length < 4) childImages.push('');
          setData({
            ...EMPTY, ...product,
            childImages: childImages.slice(0, 4),
            priceMin: product.priceMin != null ? String(product.priceMin) : '',
            priceMax: product.priceMax != null ? String(product.priceMax) : '',
            relatedProducts: (product.relatedProducts ?? []).map((r: string | { _id: string }) => (typeof r === 'string' ? r : r._id)),
          });
          setSlugManual(true);
        }
      })
      .finally(() => setLoading(false));
  }, [id, isEdit]);

  function set<K extends keyof ProductData>(key: K, val: ProductData[K]) {
    setData(prev => {
      const next = { ...prev, [key]: val };
      if (key === 'fullName' && !slugManual) next.slug = slugify(val as string);
      return next;
    });
  }

  const setChildImage = (i: number, url: string) => {
    const n = [...data.childImages]; n[i] = url; set('childImages', n);
  };

  async function handleSave() {
    if (!data.fullName.trim() || !data.slug.trim() || !data.category) {
      setError('Product name, slug and category are required.'); setTab('Basic & Images'); return;
    }
    setSaving(true); setError('');
    const payload = {
      ...data,
      childImages: data.childImages.filter(Boolean),
      priceMin: data.priceMin.trim() ? Number(data.priceMin) : undefined,
      priceMax: data.priceMax.trim() ? Number(data.priceMax) : undefined,
      description: data.description.filter(d => d.trim()),
      compliance: data.compliance.filter(c => c.trim()),
      specs: data.specs.filter(s => s.name.trim() && s.value.trim()),
      features: data.features.filter(f => f.title.trim()),
      bestFor: data.bestFor.filter(b => b.industry.trim()),
      technical: data.technical.filter(t => t.label.trim()),
      keyFacts: data.keyFacts.filter(k => k.label.trim()),
      whyVSD: data.whyVSD.filter(w => w.point.trim()),
      comparison: data.comparison.filter(c => c.attribute.trim()),
      comparisonModels: data.comparisonModels.filter(c => c.name.trim()),
      projectProof: data.projectProof.filter(p => p.client.trim()),
      reviews: data.reviews.filter(r => r.name.trim() && r.text.trim()),
      faq: data.faq.filter(f => f.question.trim() && f.answer.trim()),
    };
    try {
      const url    = isEdit ? `/api/admin/products/${id}` : '/api/admin/products';
      const method = isEdit ? 'PUT' : 'POST';
      const res    = await fetch(url, { method, headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) });
      const json   = await res.json();
      if (!res.ok) throw new Error(json.error ?? 'Save failed');
      toast.success(isEdit ? 'Product updated!' : 'Product created!', 'Changes have been saved successfully.');
      router.push('/admin/products');
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
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem', flexWrap: 'wrap', gap: '0.625rem' }}>
        <button onClick={() => router.push('/admin/products')} style={{ display: 'flex', alignItems: 'center', gap: '0.375rem', background: 'none', border: 'none', cursor: 'pointer', color: '#64748B', fontSize: 13 }}>
          <ArrowLeft size={15} /> Back
        </button>
        <button onClick={handleSave} disabled={saving} style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', padding: '0.5rem 1.125rem', borderRadius: 8, background: '#2563EB', border: 'none', fontSize: 13, fontWeight: 600, color: 'white', cursor: 'pointer' }}>
          <Save size={14} /> {saving ? 'Saving…' : isEdit ? 'Update Product' : 'Create Product'}
        </button>
      </div>

      {error && (
        <div style={{ background: '#FEF2F2', border: '1px solid #FECACA', borderRadius: 8, padding: '0.75rem 1rem', color: '#DC2626', fontSize: 13, marginBottom: '1rem' }}>{error}</div>
      )}

      {/* Tab bar */}
      <div style={{ display: 'flex', gap: '0.375rem', marginBottom: '1rem', overflowX: 'auto', paddingBottom: '0.25rem' }}>
        {TABS.map(t => (
          <button key={t} type="button" onClick={() => setTab(t)} style={{
            padding: '0.5rem 0.875rem', borderRadius: 8, fontSize: 12.5, fontWeight: 600, whiteSpace: 'nowrap', cursor: 'pointer',
            border: tab === t ? '1px solid #2563EB' : '1px solid #E2E8F0',
            background: tab === t ? '#EFF6FF' : 'white',
            color: tab === t ? '#1D4ED8' : '#64748B',
          }}>
            {t}
          </button>
        ))}
      </div>

      {/* ── Basic & Images ── */}
      {tab === 'Basic & Images' && (
        <div style={{ display: 'grid', gridTemplateColumns: isMobileTablet ? '1fr' : '1fr 300px', gap: '1.125rem', alignItems: 'start' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div style={cardStyle}>
              <p style={{ fontSize: 13, fontWeight: 700, color: '#0F172A', margin: '0 0 0.875rem' }}>Basic Information</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <div>
                  <label style={labelStyle}>Product Name *</label>
                  <input value={data.fullName} onChange={e => set('fullName', e.target.value)} placeholder="e.g. Rational iCombi Pro 10-1/1 Combi Oven" style={{ ...inputStyle, fontWeight: 600 }} />
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: '0.625rem' }}>
                  <div>
                    <label style={labelStyle}>Slug *</label>
                    <input value={data.slug} onChange={e => { setSlugManual(true); set('slug', slugify(e.target.value)); }} placeholder="product-slug" style={inputStyle} />
                  </div>
                  <div>
                    <label style={labelStyle}>Model / SKU</label>
                    <input value={data.modelNumber} onChange={e => set('modelNumber', e.target.value)} placeholder="e.g. iCombi Pro 10-1/1" style={inputStyle} />
                  </div>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: '0.625rem' }}>
                  <div>
                    <label style={labelStyle}>Brand</label>
                    <input value={data.brand} onChange={e => set('brand', e.target.value)} placeholder="e.g. Rational" style={inputStyle} />
                  </div>
                  <div>
                    <label style={labelStyle}>Category *</label>
                    <select value={data.category} onChange={e => set('category', e.target.value)} style={inputStyle}>
                      <option value="">Select category…</option>
                      {CATEGORIES.map(c => <option key={c.slug} value={c.slug}>{c.label}</option>)}
                    </select>
                  </div>
                </div>
                <div>
                  <label style={labelStyle}>Tagline</label>
                  <input value={data.tagline} onChange={e => set('tagline', e.target.value)} placeholder="One-line product tagline" style={inputStyle} />
                </div>
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div style={cardStyle}>
              <p style={{ fontSize: 13, fontWeight: 700, color: '#0F172A', margin: '0 0 0.75rem' }}>Product Settings</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
                <div>
                  <label style={labelStyle}>Status</label>
                  <select value={data.status} onChange={e => set('status', e.target.value as 'active' | 'inactive')} style={inputStyle}>
                    <option value="active">Active</option>
                    <option value="inactive">Inactive</option>
                  </select>
                </div>
                <label style={{ display: 'flex', alignItems: 'center', gap: '0.625rem', cursor: 'pointer', padding: '0.625rem 0.75rem', borderRadius: 8, border: '1px solid #E2E8F0', background: data.featured ? '#EFF6FF' : 'white' }}>
                  <input type="checkbox" checked={data.featured} onChange={e => set('featured', e.target.checked)} style={{ accentColor: '#2563EB', width: 15, height: 15, flexShrink: 0 }} />
                  <Star size={14} color={data.featured ? '#2563EB' : '#94A3B8'} />
                  <span style={{ fontSize: 13, fontWeight: 600, color: data.featured ? '#1D4ED8' : '#374151' }}>Featured Product</span>
                </label>
              </div>
            </div>

            <div style={cardStyle}>
              <ImageUpload value={data.mainImage} onChange={url => set('mainImage', url)} folder="vsd-international/products" label="Main Image *" />
            </div>

            <div style={cardStyle}>
              <p style={{ fontSize: 13, fontWeight: 700, color: '#0F172A', margin: '0 0 0.75rem' }}>Child Images (up to 4)</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
                {[0, 1, 2, 3].map(i => (
                  <ImageUpload key={i} value={data.childImages[i] ?? ''} onChange={url => setChildImage(i, url)} folder="vsd-international/products" label={`Child Image ${i + 1}`} />
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ── Commercial ── */}
      {tab === 'Commercial' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div style={cardStyle}>
            <p style={{ fontSize: 13, fontWeight: 700, color: '#0F172A', margin: '0 0 0.875rem' }}>Pricing & Lead Time</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <div>
                <label style={labelStyle}>Price Context (display text)</label>
                <input value={data.priceContext} onChange={e => set('priceContext', e.target.value)} placeholder="e.g. ₹4,50,000 – ₹6,00,000 (indicative, ex-works Delhi)" style={inputStyle} />
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr 1fr', gap: '0.625rem' }}>
                <div>
                  <label style={labelStyle}>Price Min (₹, for schema)</label>
                  <input type="number" value={data.priceMin} onChange={e => set('priceMin', e.target.value)} placeholder="450000" style={inputStyle} />
                </div>
                <div>
                  <label style={labelStyle}>Price Max (₹, for schema)</label>
                  <input type="number" value={data.priceMax} onChange={e => set('priceMax', e.target.value)} placeholder="600000" style={inputStyle} />
                </div>
                <div>
                  <label style={labelStyle}>Lead Time</label>
                  <input value={data.leadTime} onChange={e => set('leadTime', e.target.value)} placeholder="e.g. 10–15 working days" style={inputStyle} />
                </div>
              </div>
              <div>
                <label style={labelStyle}>WhatsApp Enquiry Message</label>
                <textarea value={data.whatsappMessage} onChange={e => set('whatsappMessage', e.target.value)} rows={3} placeholder="Hi VSD International, I'm interested in…" style={{ ...inputStyle, resize: 'vertical' }} />
              </div>
            </div>
          </div>

          <div style={cardStyle}>
            <ObjectListEditor<KeyFact>
              label="Key Facts (hero quick-facts grid)"
              items={data.keyFacts}
              onChange={v => set('keyFacts', v)}
              empty={{ label: '', value: '' }}
              fields={[{ key: 'label', placeholder: 'Label, e.g. Capacity' }, { key: 'value', placeholder: 'Value, e.g. 10 × 1/1 GN Trays' }]}
            />
          </div>
        </div>
      )}

      {/* ── Content ── */}
      {tab === 'Content' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div style={cardStyle}>
            <label style={labelStyle}>Overview (answer-first summary paragraph)</label>
            <textarea value={data.overview} onChange={e => set('overview', e.target.value)} rows={5} placeholder="A clear, citable summary of the product…" style={{ ...inputStyle, resize: 'vertical' }} />
          </div>

          <div style={cardStyle}>
            <StringListEditor label="Description Paragraphs" items={data.description} onChange={v => set('description', v)} placeholder="Write a paragraph…" multiline />
          </div>

          <div style={cardStyle}>
            <ObjectListEditor<Spec>
              label="Specifications"
              items={data.specs} onChange={v => set('specs', v)} empty={{ name: '', value: '' }}
              fields={[{ key: 'name', placeholder: 'e.g. Power' }, { key: 'value', placeholder: 'e.g. 18.6 kW' }]}
            />
          </div>

          <div style={cardStyle}>
            <ObjectListEditor<Feature>
              label="Features & Benefits"
              items={data.features} onChange={v => set('features', v)} empty={{ title: '', description: '' }}
              fields={[{ key: 'title', placeholder: 'Feature title' }, { key: 'description', placeholder: 'Feature description', multiline: true }]}
            />
          </div>

          <div style={cardStyle}>
            <ObjectListEditor<BestForItem>
              label="Best For (industries / use cases)"
              items={data.bestFor} onChange={v => set('bestFor', v)} empty={{ industry: '', description: '' }}
              fields={[{ key: 'industry', placeholder: 'Industry, e.g. 5-Star Hotels' }, { key: 'description', placeholder: 'Why it fits', multiline: true }]}
            />
          </div>

          <div style={cardStyle}>
            <ObjectListEditor<TechnicalDetail>
              label="Technical & Installation Details"
              items={data.technical} onChange={v => set('technical', v)} empty={{ label: '', value: '' }}
              fields={[{ key: 'label', placeholder: 'e.g. Electrical Connection' }, { key: 'value', placeholder: 'e.g. 400 V / 3N~ / 50 Hz' }]}
            />
          </div>

          <div style={cardStyle}>
            <StringListEditor label="Compliance / Certifications" items={data.compliance} onChange={v => set('compliance', v)} placeholder="e.g. CE Certified (EU Directive)" />
          </div>
        </div>
      )}

      {/* ── Trust & Proof ── */}
      {tab === 'Trust & Proof' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div style={cardStyle}>
            <ObjectListEditor<WhyVSDPoint>
              label="Why Buy From VSD"
              items={data.whyVSD} onChange={v => set('whyVSD', v)} empty={{ point: '', detail: '' }}
              fields={[{ key: 'point', placeholder: 'Point, e.g. Authorised Dealer' }, { key: 'detail', placeholder: 'Detail', multiline: true }]}
            />
          </div>

          <div style={cardStyle}>
            <ObjectListEditor<ComparisonRow>
              label="Comparison Table Rows"
              items={data.comparison} onChange={v => set('comparison', v)} empty={{ attribute: '', thisModel: '', alternative1: '', alternative2: '' }}
              fields={[
                { key: 'attribute', placeholder: 'Attribute, e.g. Capacity' },
                { key: 'thisModel', placeholder: 'This model value' },
                { key: 'alternative1', placeholder: 'Alternative 1 value' },
                { key: 'alternative2', placeholder: 'Alternative 2 value' },
              ]}
            />
          </div>

          <div style={cardStyle}>
            <ObjectListEditor<ComparisonModel>
              label="Comparison — Alternative Model Labels"
              items={data.comparisonModels} onChange={v => set('comparisonModels', v)} empty={{ name: '', slug: '' }}
              fields={[{ key: 'name', placeholder: 'e.g. Unox ChefTop Mind 10-1/1' }, { key: 'slug', placeholder: 'alternative-model-slug' }]}
            />
          </div>

          <div style={cardStyle}>
            <ObjectListEditor<ProjectProof>
              label="Project Proof / Case Studies"
              items={data.projectProof} onChange={v => set('projectProof', v)} empty={{ client: '', city: '', scope: '', year: '' }}
              fields={[
                { key: 'client', placeholder: 'Client name' },
                { key: 'city', placeholder: 'City' },
                { key: 'scope', placeholder: 'Scope of work', multiline: true },
                { key: 'year', placeholder: 'Year, e.g. 2024' },
              ]}
            />
          </div>

          <div style={cardStyle}>
            <ReviewsEditor items={data.reviews} onChange={v => set('reviews', v)} />
          </div>
        </div>
      )}

      {/* ── FAQ & Related ── */}
      {tab === 'FAQ & Related' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div style={cardStyle}>
            <ObjectListEditor<FAQ>
              label="Frequently Asked Questions"
              items={data.faq} onChange={v => set('faq', v)} empty={{ question: '', answer: '' }}
              fields={[{ key: 'question', placeholder: 'Question' }, { key: 'answer', placeholder: 'Answer', multiline: true }]}
            />
          </div>

          <div style={cardStyle}>
            <RelatedProductsPicker selected={data.relatedProducts} onChange={v => set('relatedProducts', v)} excludeId={id} />
          </div>
        </div>
      )}

      {/* ── SEO & Schema ── */}
      {tab === 'SEO & Schema' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div style={cardStyle}>
            <p style={{ fontSize: 13, fontWeight: 700, color: '#0F172A', margin: '0 0 0.875rem' }}>Meta Tags (page &lt;title&gt; &amp; search snippet)</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <div>
                <label style={labelStyle}>Meta Title</label>
                <input value={data.metaTitle} onChange={e => set('metaTitle', e.target.value)} style={inputStyle} placeholder="Falls back to product name if left blank" />
                <p style={{ fontSize: 11, color: '#94A3B8', margin: '0.25rem 0 0' }}>{data.metaTitle.length}/60</p>
              </div>
              <div>
                <label style={labelStyle}>Meta Description</label>
                <textarea value={data.metaDescription} onChange={e => set('metaDescription', e.target.value)} rows={3} placeholder="150–160 chars ideal. Falls back to tagline if left blank." style={{ ...inputStyle, resize: 'vertical' }} />
                <p style={{ fontSize: 11, color: '#94A3B8', margin: '0.25rem 0 0' }}>{data.metaDescription.length}/160</p>
              </div>
            </div>
          </div>

          <div style={cardStyle}>
            <p style={{ fontSize: 13, fontWeight: 700, color: '#0F172A', margin: '0 0 0.375rem' }}>Schema.org (JSON-LD) Overrides</p>
            <p style={{ fontSize: 12, color: '#64748B', margin: '0 0 0.875rem' }}>
              Controls the <code>name</code> and <code>description</code> fields in the structured data read by search engines and AI crawlers.
              The rest of the markup (breadcrumbs, reviews, FAQ, offers) is generated automatically from the content above.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <div>
                <label style={labelStyle}>Schema Title</label>
                <input value={data.schemaTitle} onChange={e => set('schemaTitle', e.target.value)} style={inputStyle} placeholder="Falls back to product name if left blank" />
              </div>
              <div>
                <label style={labelStyle}>Schema Description</label>
                <textarea value={data.schemaDescription} onChange={e => set('schemaDescription', e.target.value)} rows={3} placeholder="Falls back to overview if left blank." style={{ ...inputStyle, resize: 'vertical' }} />
              </div>
            </div>
          </div>
        </div>
      )}

      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </div>
  );
}
