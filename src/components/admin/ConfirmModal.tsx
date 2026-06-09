'use client';

import { AlertTriangle, Trash2, X } from 'lucide-react';

interface Props {
  open: boolean;
  title: string;
  message: string;
  confirmLabel?: string;
  onConfirm: () => void;
  onCancel: () => void;
  loading?: boolean;
}

export default function ConfirmModal({ open, title, message, confirmLabel = 'Delete', onConfirm, onCancel, loading }: Props) {
  if (!open) return null;

  return (
    <div style={{
      position: 'fixed', inset: 0, zIndex: 9990,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      padding: '1rem',
    }}>
      {/* Backdrop */}
      <div
        onClick={onCancel}
        style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.55)', backdropFilter: 'blur(5px)' }}
      />

      {/* Card */}
      <div style={{
        position: 'relative', zIndex: 1,
        background: 'white', borderRadius: 18,
        padding: '2rem', width: '100%', maxWidth: 400,
        boxShadow: '0 24px 64px rgba(0,0,0,0.2)',
        animation: 'modalIn 0.22s cubic-bezier(.4,0,.2,1)',
      }}>
        {/* Close button */}
        <button
          onClick={onCancel}
          style={{
            position: 'absolute', top: 14, right: 14,
            background: '#F1F5F9', border: 'none', borderRadius: 8,
            width: 30, height: 30, display: 'flex', alignItems: 'center', justifyContent: 'center',
            cursor: 'pointer', color: '#64748B', transition: 'background 0.15s',
          }}
          onMouseEnter={e => ((e.currentTarget as HTMLButtonElement).style.background = '#E2E8F0')}
          onMouseLeave={e => ((e.currentTarget as HTMLButtonElement).style.background = '#F1F5F9')}
        >
          <X size={14} />
        </button>

        {/* Warning icon */}
        <div style={{
          width: 52, height: 52, borderRadius: 14,
          background: '#FEF2F2', border: '1px solid #FECACA',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          marginBottom: '1.25rem',
        }}>
          <AlertTriangle size={24} color="#EF4444" />
        </div>

        <h3 style={{ fontSize: 18, fontWeight: 800, color: '#0F172A', margin: '0 0 0.5rem', letterSpacing: '-0.02em' }}>
          {title}
        </h3>
        <p style={{ fontSize: 14, color: '#64748B', margin: '0 0 1.75rem', lineHeight: 1.65 }}>
          {message} This action cannot be undone.
        </p>

        <div style={{ display: 'flex', gap: '0.625rem' }}>
          <button
            onClick={onCancel}
            disabled={loading}
            style={{
              flex: 1, padding: '0.75rem', borderRadius: 11,
              background: '#F8FAFC', border: '1px solid #E2E8F0',
              fontSize: 14, fontWeight: 600, color: '#374151',
              cursor: 'pointer', transition: 'background 0.15s',
            }}
            onMouseEnter={e => ((e.currentTarget as HTMLButtonElement).style.background = '#F1F5F9')}
            onMouseLeave={e => ((e.currentTarget as HTMLButtonElement).style.background = '#F8FAFC')}
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            disabled={loading}
            style={{
              flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.4rem',
              padding: '0.75rem', borderRadius: 11,
              background: loading ? '#FECACA' : 'linear-gradient(135deg, #DC2626, #EF4444)',
              border: 'none', fontSize: 14, fontWeight: 700, color: 'white',
              cursor: loading ? 'not-allowed' : 'pointer',
              boxShadow: loading ? 'none' : '0 4px 14px rgba(239,68,68,0.3)',
              transition: 'all 0.15s',
            }}
          >
            {loading ? 'Deleting…' : <><Trash2 size={14} /> {confirmLabel}</>}
          </button>
        </div>
      </div>

      <style>{`
        @keyframes modalIn {
          from { opacity: 0; transform: scale(0.94) translateY(10px); }
          to   { opacity: 1; transform: scale(1) translateY(0); }
        }
      `}</style>
    </div>
  );
}
