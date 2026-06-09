'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Save, ArrowLeft, Plus, X, Loader2, Star } from 'lucide-react';
import ImageUpload from './ImageUpload';
import { useBreakpoint } from '@/hooks/useBreakpoint';
import { useToast } from './Toast';

const CATEGORIES = [
  'Combi Ovens', 'Cooking Ranges', 'Bakery Equipment',
  'Refrigeration', 'Preparation Equipment', 'Exhaust & Ventilation',
  'Custom Fabrication', 'Dishwashers', 'International Brands',
];

interface Spec { key: string; value: string; }
interface ProductData {
  name: string; slug: string; category: string; brand: string;
  tagline: string; description: string; images: string[];
  priceRange: string; features: string[]; specifications: Spec[];
  status: 'active' | 'inactive'; featured: boolean;
}

const EMPTY: ProductData = {
  name: '', slug: '', category: '', brand: '', tagline: '', description: '',
  images: [], priceRange: '', features: [''], specifications: [{ key: '', value: '' }],
  status: 'active', featured: false,
};

function slugify(s: string) {
  return s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
}

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

export default function ProductForm({ id }: { id?: string }) {
  const router = useRouter();
  const isEdit = Boolean(id);
  const { isMobileTablet, isMobile } = useBreakpoint();

  const toast = useToast();
  const [data, setData]           = useState<ProductData>(EMPTY);
  const [loading, setLoading]     = useState(isEdit);
  const [saving, setSaving]       = useState(false);
  const [error, setError]         = useState('');
  const [slugManual, setSlugManual] = useState(false);

  useEffect(() => {
    if (!isEdit) return;
    fetch(`/api/admin/products/${id}`)
      .then(r => r.json())
      .then(({ product }) => {
        if (product) {
          setData({
            ...EMPTY, ...product,
            features:       product.features?.length       ? product.features       : [''],
            specifications: product.specifications?.length ? product.specifications : [{ key: '', value: '' }],
          });
          setSlugManual(true);
        }
      })
      .finally(() => setLoading(false));
  }, [id, isEdit]);

  function set<K extends keyof ProductData>(key: K, val: ProductData[K]) {
    setData(prev => {
      const next = { ...prev, [key]: val };
      if (key === 'name' && !slugManual) next.slug = slugify(val as string);
      return next;
    });
  }

  const addFeature    = () => set('features', [...data.features, '']);
  const removeFeature = (i: number) => set('features', data.features.filter((_, x) => x !== i));
  const setFeature    = (i: number, v: string) => { const n = [...data.features]; n[i] = v; set('features', n); };

  const addSpec    = () => set('specifications', [...data.specifications, { key: '', value: '' }]);
  const removeSpec = (i: number) => set('specifications', data.specifications.filter((_, x) => x !== i));
  const setSpec    = (i: number, f: 'key' | 'value', v: string) => {
    const n = [...data.specifications]; n[i] = { ...n[i], [f]: v }; set('specifications', n);
  };

  const addImage    = (url: string) => set('images', [...data.images, url]);
  const removeImage = (i: number)   => set('images', data.images.filter((_, x) => x !== i));

  async function handleSave() {
    if (!data.name.trim() || !data.slug.trim() || !data.category) {
      setError('Name, slug and category are required.'); return;
    }
    setSaving(true); setError('');
    const payload = {
      ...data,
      features:       data.features.filter(f => f.trim()),
      specifications: data.specifications.filter(s => s.key.trim() && s.value.trim()),
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
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem', flexWrap: 'wrap', gap: '0.625rem' }}>
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

      <div style={{ display: 'grid', gridTemplateColumns: isMobileTablet ? '1fr' : '1fr 300px', gap: '1.125rem', alignItems: 'start' }}>

        {/* ── Main ── */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>

          {/* Basic info */}
          <div style={cardStyle}>
            <p style={{ fontSize: 13, fontWeight: 700, color: '#0F172A', margin: '0 0 0.875rem' }}>Basic Information</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <div>
                <label style={labelStyle}>Product Name *</label>
                <input value={data.name} onChange={e => set('name', e.target.value)} placeholder="e.g. Rational iCombi Pro 10-1/1" style={{ ...inputStyle, fontWeight: 600 }} />
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: '0.625rem' }}>
                <div>
                  <label style={labelStyle}>Slug *</label>
                  <input value={data.slug} onChange={e => { setSlugManual(true); set('slug', slugify(e.target.value)); }} placeholder="product-slug" style={inputStyle} />
                </div>
                <div>
                  <label style={labelStyle}>Brand</label>
                  <input value={data.brand} onChange={e => set('brand', e.target.value)} placeholder="e.g. Rational" style={inputStyle} />
                </div>
              </div>
              <div>
                <label style={labelStyle}>Tagline</label>
                <input value={data.tagline} onChange={e => set('tagline', e.target.value)} placeholder="One-line product tagline" style={inputStyle} />
              </div>
              <div>
                <label style={labelStyle}>Description</label>
                <textarea value={data.description} onChange={e => set('description', e.target.value)} rows={5} placeholder="Full product description…" style={{ ...inputStyle, resize: 'vertical' }} />
              </div>
            </div>
          </div>

          {/* Features */}
          <div style={cardStyle}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.875rem' }}>
              <p style={{ fontSize: 13, fontWeight: 700, color: '#0F172A', margin: 0 }}>Key Features</p>
              <button type="button" onClick={addFeature} style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', background: '#EFF6FF', border: 'none', borderRadius: 6, padding: '0.35rem 0.75rem', fontSize: 12, color: '#2563EB', fontWeight: 600, cursor: 'pointer' }}>
                <Plus size={12} /> Add
              </button>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {data.features.map((f, i) => (
                <div key={i} style={{ display: 'flex', gap: '0.5rem' }}>
                  <input value={f} onChange={e => setFeature(i, e.target.value)} placeholder={`Feature ${i + 1}`} style={{ ...inputStyle, flex: 1 }} />
                  {data.features.length > 1 && (
                    <button type="button" onClick={() => removeFeature(i)} style={{ background: '#FEF2F2', border: 'none', borderRadius: 6, width: 34, height: 34, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', flexShrink: 0 }}>
                      <X size={13} color="#EF4444" />
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Specifications */}
          <div style={cardStyle}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.875rem' }}>
              <p style={{ fontSize: 13, fontWeight: 700, color: '#0F172A', margin: 0 }}>Technical Specifications</p>
              <button type="button" onClick={addSpec} style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', background: '#EFF6FF', border: 'none', borderRadius: 6, padding: '0.35rem 0.75rem', fontSize: 12, color: '#2563EB', fontWeight: 600, cursor: 'pointer' }}>
                <Plus size={12} /> Add
              </button>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {data.specifications.map((s, i) => (
                <div key={i} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr auto', gap: '0.5rem', alignItems: 'center' }}>
                  <input value={s.key}   onChange={e => setSpec(i, 'key',   e.target.value)} placeholder="e.g. Power"  style={inputStyle} />
                  <input value={s.value} onChange={e => setSpec(i, 'value', e.target.value)} placeholder="e.g. 12.5 kW" style={inputStyle} />
                  {data.specifications.length > 1 && (
                    <button type="button" onClick={() => removeSpec(i)} style={{ background: '#FEF2F2', border: 'none', borderRadius: 6, width: 34, height: 34, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
                      <X size={13} color="#EF4444" />
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Sidebar ── */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>

          {/* Settings */}
          <div style={cardStyle}>
            <p style={{ fontSize: 13, fontWeight: 700, color: '#0F172A', margin: '0 0 0.75rem' }}>Product Settings</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
              <div>
                <label style={labelStyle}>Category *</label>
                <select value={data.category} onChange={e => set('category', e.target.value)} style={inputStyle}>
                  <option value="">Select category…</option>
                  {CATEGORIES.map(c => <option key={c} value={c}>{c}</option>)}
                </select>
              </div>
              <div>
                <label style={labelStyle}>Price Range</label>
                <input value={data.priceRange} onChange={e => set('priceRange', e.target.value)} placeholder="e.g. ₹8,00,000 – ₹12,00,000" style={inputStyle} />
              </div>
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

          {/* Images */}
          <div style={cardStyle}>
            <p style={{ fontSize: 13, fontWeight: 700, color: '#0F172A', margin: '0 0 0.75rem' }}>Product Images</p>

            {data.images.length > 0 && (
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem', marginBottom: '0.75rem' }}>
                {data.images.map((img, i) => (
                  <div key={i} style={{ position: 'relative', borderRadius: 8, overflow: 'hidden', border: '1px solid #E2E8F0' }}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={img} alt={`Product ${i + 1}`} style={{ width: '100%', height: 72, objectFit: 'cover', display: 'block' }} />
                    <button type="button" onClick={() => removeImage(i)} style={{ position: 'absolute', top: 4, right: 4, background: 'rgba(0,0,0,0.6)', border: 'none', borderRadius: 4, width: 22, height: 22, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', color: 'white' }}>
                      <X size={11} />
                    </button>
                  </div>
                ))}
              </div>
            )}

            <ImageUpload value="" onChange={url => { if (url) addImage(url); }} folder="vsd-international/products" label="Add Image" />
          </div>
        </div>
      </div>

      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </div>
  );
}
