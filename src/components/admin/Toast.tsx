'use client';

import React, { createContext, useContext, useState, useCallback, useEffect } from 'react';
import { CheckCircle2, XCircle, AlertTriangle, Info, X } from 'lucide-react';

type ToastType = 'success' | 'error' | 'warning' | 'info';

interface ToastItem {
  id: string;
  type: ToastType;
  title: string;
  message?: string;
}

interface ToastContextValue {
  success: (title: string, message?: string) => void;
  error:   (title: string, message?: string) => void;
  warning: (title: string, message?: string) => void;
  info:    (title: string, message?: string) => void;
}

const ToastContext = createContext<ToastContextValue>({
  success: () => {}, error: () => {}, warning: () => {}, info: () => {},
});

const ICONS = { success: CheckCircle2, error: XCircle, warning: AlertTriangle, info: Info };

const COLORS = {
  success: { bg: '#F0FDF4', border: '#BBF7D0', iconColor: '#22C55E', accent: '#16A34A', text: '#14532D' },
  error:   { bg: '#FEF2F2', border: '#FECACA', iconColor: '#EF4444', accent: '#DC2626', text: '#7F1D1D' },
  warning: { bg: '#FFFBEB', border: '#FDE68A', iconColor: '#F59E0B', accent: '#D97706', text: '#78350F' },
  info:    { bg: '#EFF6FF', border: '#BFDBFE', iconColor: '#3B82F6', accent: '#2563EB', text: '#1E3A8A' },
};

function ToastEntry({ toast, onDismiss }: { toast: ToastItem; onDismiss: () => void }) {
  const [visible, setVisible] = useState(false);
  const { bg, border, iconColor, accent, text } = COLORS[toast.type];
  const Icon = ICONS[toast.type];

  useEffect(() => {
    const t = requestAnimationFrame(() => setVisible(true));
    return () => cancelAnimationFrame(t);
  }, []);

  function dismiss() {
    setVisible(false);
    setTimeout(onDismiss, 280);
  }

  return (
    <div style={{
      display: 'flex', alignItems: 'flex-start', gap: '0.75rem',
      padding: '0.875rem 1rem', background: bg,
      border: `1px solid ${border}`, borderLeft: `4px solid ${accent}`,
      borderRadius: 12, boxShadow: '0 8px 32px rgba(0,0,0,0.14)',
      minWidth: 280, maxWidth: 380,
      transform: visible ? 'translateX(0) scale(1)' : 'translateX(110%) scale(0.96)',
      opacity: visible ? 1 : 0,
      transition: 'transform 0.3s cubic-bezier(.4,0,.2,1), opacity 0.3s ease',
      userSelect: 'none',
    }}>
      <Icon size={17} color={iconColor} style={{ flexShrink: 0, marginTop: 2 }} />
      <div style={{ flex: 1, minWidth: 0 }}>
        <p style={{ fontSize: 13, fontWeight: 700, color: text, margin: toast.message ? '0 0 0.15rem' : 0, lineHeight: 1.3 }}>
          {toast.title}
        </p>
        {toast.message && (
          <p style={{ fontSize: 12, color: text, opacity: 0.7, margin: 0, lineHeight: 1.45 }}>
            {toast.message}
          </p>
        )}
      </div>
      <button
        onClick={dismiss}
        style={{
          background: 'none', border: 'none', cursor: 'pointer',
          color: iconColor, padding: 2, flexShrink: 0, opacity: 0.55,
          display: 'flex', alignItems: 'center', transition: 'opacity 0.15s',
        }}
        onMouseEnter={e => ((e.currentTarget as HTMLButtonElement).style.opacity = '1')}
        onMouseLeave={e => ((e.currentTarget as HTMLButtonElement).style.opacity = '0.55')}
      >
        <X size={14} />
      </button>
    </div>
  );
}

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = useState<ToastItem[]>([]);

  const add = useCallback((type: ToastType, title: string, message?: string) => {
    const id = `${Date.now()}-${Math.random().toString(36).slice(2)}`;
    setToasts(prev => [...prev.slice(-4), { id, type, title, message }]);
    setTimeout(() => setToasts(prev => prev.filter(t => t.id !== id)), 4800);
  }, []);

  const ctx: ToastContextValue = {
    success: (t, m) => add('success', t, m),
    error:   (t, m) => add('error',   t, m),
    warning: (t, m) => add('warning', t, m),
    info:    (t, m) => add('info',    t, m),
  };

  return (
    <ToastContext.Provider value={ctx}>
      {children}
      <div style={{
        position: 'fixed', bottom: 24, right: 24, zIndex: 9999,
        display: 'flex', flexDirection: 'column', gap: '0.5rem',
        pointerEvents: 'none',
      }}>
        {toasts.map(t => (
          <div key={t.id} style={{ pointerEvents: 'auto' }}>
            <ToastEntry
              toast={t}
              onDismiss={() => setToasts(prev => prev.filter(x => x.id !== t.id))}
            />
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
}

export const useToast = () => useContext(ToastContext);
