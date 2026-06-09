'use client';

import { useRef, useState } from 'react';
import { Upload, X, Loader2, Image as ImageIcon } from 'lucide-react';
import Image from 'next/image';

interface Props {
  value: string;
  onChange: (url: string) => void;
  folder?: string;
  label?: string;
}

export default function ImageUpload({ value, onChange, folder = 'vsd-international', label = 'Featured Image' }: Props) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState('');

  async function handleFile(file: File) {
    setError('');
    setUploading(true);
    try {
      const fd = new FormData();
      fd.append('file', file);
      fd.append('folder', folder);
      const res = await fetch('/api/admin/upload', { method: 'POST', body: fd });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error ?? 'Upload failed');
      onChange(data.url);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Upload failed');
    } finally {
      setUploading(false);
    }
  }

  function onInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (file) handleFile(file);
    e.target.value = '';
  }

  function onDrop(e: React.DragEvent) {
    e.preventDefault();
    const file = e.dataTransfer.files?.[0];
    if (file && file.type.startsWith('image/')) handleFile(file);
  }

  return (
    <div>
      <label style={{ display: 'block', fontSize: 13, fontWeight: 600, color: '#374151', marginBottom: '0.5rem' }}>
        {label}
      </label>

      {value ? (
        <div style={{ position: 'relative', borderRadius: 10, overflow: 'hidden', border: '1px solid #E2E8F0' }}>
          <div style={{ position: 'relative', height: 180, background: '#F8FAFC' }}>
            <Image src={value} alt="Upload preview" fill style={{ objectFit: 'cover' }} />
          </div>
          <button
            type="button"
            onClick={() => onChange('')}
            style={{
              position: 'absolute', top: 8, right: 8,
              background: 'rgba(0,0,0,0.6)', border: 'none', borderRadius: 6,
              width: 28, height: 28, display: 'flex', alignItems: 'center',
              justifyContent: 'center', cursor: 'pointer', color: 'white',
            }}
          >
            <X size={14} />
          </button>
        </div>
      ) : (
        <div
          onDrop={onDrop}
          onDragOver={e => e.preventDefault()}
          onClick={() => !uploading && inputRef.current?.click()}
          style={{
            border: '2px dashed #CBD5E1', borderRadius: 10, padding: '2rem',
            display: 'flex', flexDirection: 'column', alignItems: 'center',
            justifyContent: 'center', gap: '0.75rem', cursor: uploading ? 'default' : 'pointer',
            background: '#F8FAFC', transition: 'border-color 0.15s',
            minHeight: 140,
          }}
        >
          {uploading ? (
            <Loader2 size={28} color="#2563EB" style={{ animation: 'spin 1s linear infinite' }} />
          ) : (
            <>
              <div style={{
                width: 44, height: 44, borderRadius: 10,
                background: '#EFF6FF', display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <ImageIcon size={22} color="#2563EB" />
              </div>
              <div style={{ textAlign: 'center' }}>
                <p style={{ fontSize: 13, fontWeight: 600, color: '#374151', margin: 0 }}>
                  Click to upload or drag & drop
                </p>
                <p style={{ fontSize: 12, color: '#94A3B8', margin: '0.25rem 0 0' }}>
                  PNG, JPG, WebP up to 10 MB
                </p>
              </div>
              <div style={{
                display: 'flex', alignItems: 'center', gap: '0.5rem',
                padding: '0.375rem 1rem', borderRadius: 6,
                background: '#2563EB', color: 'white', fontSize: 12, fontWeight: 600,
              }}>
                <Upload size={13} /> Upload Image
              </div>
            </>
          )}
        </div>
      )}

      {error && (
        <p style={{ fontSize: 12, color: '#EF4444', marginTop: '0.375rem' }}>{error}</p>
      )}

      <input ref={inputRef} type="file" accept="image/*" onChange={onInputChange} style={{ display: 'none' }} />
    </div>
  );
}
