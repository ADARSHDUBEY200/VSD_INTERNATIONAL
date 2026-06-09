'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { use } from 'react';
import { ArrowLeft, Mail, Phone, Building2, MapPin, MessageSquare, Calendar, Tag, IndianRupee, Loader2, Trash2 } from 'lucide-react';
import ConfirmModal from '@/components/admin/ConfirmModal';
import { useBreakpoint } from '@/hooks/useBreakpoint';
import { useToast } from '@/components/admin/Toast';

interface Enquiry {
  _id: string; name: string; email: string; phone: string;
  source: string; company?: string; city?: string; service?: string;
  budget?: string; message?: string; status: string; createdAt: string;
}

const STATUS_OPTIONS = ['new', 'in_progress', 'resolved'] as const;

const STATUS_COLORS: Record<string, { bg: string; color: string; border: string }> = {
  new:         { bg: '#EFF6FF', color: '#2563EB', border: '#BFDBFE' },
  in_progress: { bg: '#FEF9C3', color: '#CA8A04', border: '#FDE68A' },
  resolved:    { bg: '#DCFCE7', color: '#16A34A', border: '#BBF7D0' },
};

export default function EnquiryDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id }  = use(params);
  const router  = useRouter();
  const { isMobile, isMobileTablet } = useBreakpoint();
  const toast = useToast();

  const [enquiry, setEnquiry]   = useState<Enquiry | null>(null);
  const [loading, setLoading]   = useState(true);
  const [updating, setUpdating] = useState(false);
  const [confirm, setConfirm]   = useState(false);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    fetch(`/api/admin/enquiries/${id}`)
      .then(r => r.json())
      .then(d => setEnquiry(d.enquiry ?? null))
      .finally(() => setLoading(false));
  }, [id]);

  async function updateStatus(status: string) {
    if (!enquiry) return;
    setUpdating(true);
    const res  = await fetch(`/api/admin/enquiries/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ status }),
    });
    const data = await res.json();
    if (data.enquiry) { setEnquiry(data.enquiry); toast.success('Status updated.', `Marked as ${status.replace('_', ' ')}.`); }
    setUpdating(false);
  }

  async function handleDelete() {
    setDeleting(true);
    await fetch(`/api/admin/enquiries/${id}`, { method: 'DELETE' });
    toast.success('Enquiry deleted.', 'The enquiry has been permanently removed.');
    router.push('/admin/enquiries');
    router.refresh();
  }

  if (loading) {
    return (
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '60vh' }}>
        <Loader2 size={28} color="#2563EB" style={{ animation: 'spin 1s linear infinite' }} />
        <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
      </div>
    );
  }

  if (!enquiry) {
    return (
      <div style={{ padding: '2rem', textAlign: 'center' }}>
        <p style={{ color: '#64748B', fontSize: 14, marginBottom: '1rem' }}>Enquiry not found.</p>
        <button onClick={() => router.push('/admin/enquiries')} style={{ padding: '0.5rem 1.25rem', background: '#2563EB', color: 'white', border: 'none', borderRadius: 8, cursor: 'pointer', fontSize: 14 }}>
          ← Back
        </button>
      </div>
    );
  }

  const { bg, color, border } = STATUS_COLORS[enquiry.status] ?? STATUS_COLORS.new;

  const p = isMobile ? '0.875rem' : '1.25rem';

  return (
    <div style={{ padding: p, maxWidth: 860 }}>
      <ConfirmModal
        open={confirm}
        title="Delete Enquiry"
        message={`Enquiry from "${enquiry.name}" will be permanently deleted.`}
        loading={deleting}
        onConfirm={handleDelete}
        onCancel={() => setConfirm(false)}
      />

      {/* Back */}
      <button onClick={() => router.push('/admin/enquiries')} style={{ display: 'flex', alignItems: 'center', gap: '0.375rem', background: 'none', border: 'none', cursor: 'pointer', color: '#64748B', fontSize: 13, marginBottom: '1.125rem' }}>
        <ArrowLeft size={15} /> Back to Enquiries
      </button>

      {/* Responsive grid: two-column on desktop, stacked on mobile */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: isMobileTablet ? '1fr' : '1fr 260px',
        gap: '1.125rem',
        alignItems: 'start',
      }}>

        {/* ── Detail card ── */}
        <div style={{ background: 'white', borderRadius: 14, border: '1px solid #E2E8F0', overflow: 'hidden' }}>
          {/* Card header */}
          <div style={{ padding: '1rem 1.25rem', borderBottom: '1px solid #F1F5F9', background: '#FAFBFC', display: 'flex', alignItems: isMobile ? 'flex-start' : 'center', justifyContent: 'space-between', flexDirection: isMobile ? 'column' : 'row', gap: '0.5rem' }}>
            <div>
              <h2 style={{ fontSize: isMobile ? 18 : 20, fontWeight: 800, color: '#0F172A', margin: '0 0 0.375rem' }}>{enquiry.name}</h2>
              <span style={{ display: 'inline-flex', padding: '0.2rem 0.7rem', borderRadius: 999, fontSize: 11, fontWeight: 600, background: bg, color, border: `1px solid ${border}` }}>
                {enquiry.status.replace('_', ' ')}
              </span>
            </div>
            <span style={{ fontSize: 11, color: '#94A3B8', whiteSpace: isMobile ? 'normal' : 'nowrap' }}>
              {new Date(enquiry.createdAt).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })}
              {' '}
              {new Date(enquiry.createdAt).toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' })}
            </span>
          </div>

          {/* Fields */}
          <div style={{ padding: '0 1.25rem' }}>
            {([
              { icon: Mail,        label: 'Email',   value: enquiry.email },
              { icon: Phone,       label: 'Phone',   value: enquiry.phone },
              { icon: Building2,   label: 'Company', value: enquiry.company },
              { icon: MapPin,      label: 'City',    value: enquiry.city },
              { icon: Tag,         label: 'Service', value: enquiry.service },
              { icon: IndianRupee, label: 'Budget',  value: enquiry.budget },
              { icon: Calendar,    label: 'Source',  value: enquiry.source === 'contact_form' ? 'Contact Page Form' : 'Home Page Form' },
            ] as { icon: React.ElementType; label: string; value?: string }[]).filter(f => f.value).map(({ icon: Icon, label, value }) => (
              <div key={label} style={{ display: 'flex', gap: '0.875rem', padding: '0.75rem 0', borderBottom: '1px solid #F8FAFC' }}>
                <div style={{ width: 34, height: 34, borderRadius: 8, background: '#EFF6FF', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <Icon size={15} color="#2563EB" />
                </div>
                <div>
                  <p style={{ fontSize: 10, color: '#94A3B8', margin: '0 0 0.2rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em' }}>{label}</p>
                  <p style={{ fontSize: 14, color: '#1E293B', margin: 0, fontWeight: 500, lineHeight: 1.5 }}>{value}</p>
                </div>
              </div>
            ))}

            {enquiry.message && (
              <div style={{ padding: '0.75rem 0' }}>
                <div style={{ display: 'flex', gap: '0.875rem' }}>
                  <div style={{ width: 34, height: 34, borderRadius: 8, background: '#EFF6FF', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 2 }}>
                    <MessageSquare size={15} color="#2563EB" />
                  </div>
                  <div style={{ flex: 1 }}>
                    <p style={{ fontSize: 10, color: '#94A3B8', margin: '0 0 0.5rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em' }}>Message</p>
                    <p style={{ fontSize: 14, color: '#374151', margin: 0, lineHeight: 1.75, background: '#F8FAFC', borderRadius: 10, padding: '0.75rem 1rem', border: '1px solid #E2E8F0', wordBreak: 'break-word' }}>
                      {enquiry.message}
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* ── Action panel ── */}
        <div style={{ display: 'flex', flexDirection: isMobile ? 'row' : 'column', gap: '0.875rem', flexWrap: 'wrap' }}>

          {/* Status update */}
          <div style={{ background: 'white', borderRadius: 12, border: '1px solid #E2E8F0', padding: '1rem', flex: isMobile ? '1 1 200px' : undefined }}>
            <p style={{ fontSize: 13, fontWeight: 700, color: '#0F172A', margin: '0 0 0.75rem' }}>Update Status</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
              {STATUS_OPTIONS.map(s => {
                const { bg: sbg, color: sc, border: sb } = STATUS_COLORS[s];
                return (
                  <button
                    key={s}
                    onClick={() => updateStatus(s)}
                    disabled={updating || enquiry.status === s}
                    style={{
                      padding: '0.55rem 1rem', borderRadius: 8, fontSize: 13, fontWeight: 600,
                      border: enquiry.status === s ? `2px solid ${sb}` : '2px solid transparent',
                      background: enquiry.status === s ? sbg : '#F8FAFC',
                      color: enquiry.status === s ? sc : '#64748B',
                      cursor: enquiry.status === s ? 'default' : 'pointer',
                      transition: 'all 0.15s', textTransform: 'capitalize',
                    }}
                  >
                    {updating ? '…' : s.replace('_', ' ')}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Quick contact */}
          <div style={{ background: 'white', borderRadius: 12, border: '1px solid #E2E8F0', padding: '1rem', flex: isMobile ? '1 1 160px' : undefined }}>
            <p style={{ fontSize: 13, fontWeight: 700, color: '#0F172A', margin: '0 0 0.75rem' }}>Quick Contact</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
              <a href={`tel:${enquiry.phone}`} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.55rem 1rem', borderRadius: 8, background: '#F0FDF4', color: '#15803D', fontSize: 13, fontWeight: 600, textDecoration: 'none' }}>
                <Phone size={14} /> Call {enquiry.name.split(' ')[0]}
              </a>
              <a href={`mailto:${enquiry.email}`} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.55rem 1rem', borderRadius: 8, background: '#EFF6FF', color: '#1D4ED8', fontSize: 13, fontWeight: 600, textDecoration: 'none' }}>
                <Mail size={14} /> Send Email
              </a>
            </div>
          </div>

          {/* Delete */}
          <button
            onClick={() => setConfirm(true)}
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', padding: '0.625rem', borderRadius: 10, background: '#FEF2F2', border: '1px solid #FECACA', color: '#DC2626', fontSize: 13, fontWeight: 600, cursor: 'pointer', flex: isMobile ? '0 0 auto' : undefined }}
          >
            <Trash2 size={14} /> Delete
          </button>
        </div>
      </div>

      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </div>
  );
}
