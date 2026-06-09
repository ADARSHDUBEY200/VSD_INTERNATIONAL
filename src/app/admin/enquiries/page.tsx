'use client';

import { useState, useEffect, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { MessageSquare, Trash2, Search, ChevronLeft, ChevronRight, CheckCircle2, Clock, AlertCircle, Phone, Mail } from 'lucide-react';
import ConfirmModal from '@/components/admin/ConfirmModal';
import { useBreakpoint } from '@/hooks/useBreakpoint';
import { useToast } from '@/components/admin/Toast';

interface Enquiry {
  _id: string; name: string; email: string; phone: string;
  source: string; service?: string; city?: string;
  status: string; createdAt: string;
}

const STATUS_MAP: Record<string, { bg: string; color: string; border: string; icon: React.ReactNode; label: string }> = {
  new:         { bg: '#EFF6FF', color: '#2563EB', border: '#BFDBFE', icon: <AlertCircle size={10} />,  label: 'New' },
  in_progress: { bg: '#FFFBEB', color: '#D97706', border: '#FDE68A', icon: <Clock size={10} />,        label: 'In Progress' },
  resolved:    { bg: '#ECFDF5', color: '#16A34A', border: '#BBF7D0', icon: <CheckCircle2 size={10} />, label: 'Resolved' },
};

function SkeletonCard() {
  return (
    <div style={{ background: 'white', border: '1px solid #E2E8F0', borderRadius: 12, padding: '0.875rem', marginBottom: '0.625rem' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.625rem' }}>
        <div>
          <div style={{ width: 120, height: 13, borderRadius: 6, background: '#EEF2F7', marginBottom: 7, animation: 'shimmer 1.5s ease-in-out infinite' }} />
          <div style={{ width: 160, height: 10, borderRadius: 6, background: '#EEF2F7', animation: 'shimmer 1.5s ease-in-out infinite' }} />
        </div>
        <div style={{ width: 72, height: 22, borderRadius: 999, background: '#EEF2F7', animation: 'shimmer 1.5s ease-in-out infinite' }} />
      </div>
      <div style={{ height: 1, background: '#F1F5F9', margin: '0.5rem 0' }} />
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ width: 90, height: 10, borderRadius: 6, background: '#EEF2F7', animation: 'shimmer 1.5s ease-in-out infinite' }} />
        <div style={{ display: 'flex', gap: '0.375rem' }}>
          <div style={{ width: 50, height: 28, borderRadius: 6, background: '#EEF2F7', animation: 'shimmer 1.5s ease-in-out infinite' }} />
          <div style={{ width: 50, height: 28, borderRadius: 6, background: '#EEF2F7', animation: 'shimmer 1.5s ease-in-out infinite' }} />
        </div>
      </div>
    </div>
  );
}

function SkeletonRow() {
  return (
    <tr>
      {[150, 100, 130, 60, 90, 80, 32].map((w, i) => (
        <td key={i} style={{ padding: '0.875rem 1rem' }}>
          <div style={{ width: w, height: 12, borderRadius: 6, background: '#EEF2F7', animation: 'shimmer 1.5s ease-in-out infinite' }} />
        </td>
      ))}
    </tr>
  );
}

export default function EnquiriesPage() {
  const router = useRouter();
  const { isMobile } = useBreakpoint();
  const toast = useToast();

  const [enquiries, setEnquiries]       = useState<Enquiry[]>([]);
  const [total, setTotal]               = useState(0);
  const [page, setPage]                 = useState(1);
  const [pages, setPages]               = useState(1);
  const [loading, setLoading]           = useState(true);
  const [statusFilter, setStatusFilter] = useState('all');
  const [sourceFilter, setSourceFilter] = useState('all');
  const [search, setSearch]             = useState('');
  const [deleting, setDeleting]         = useState<string | null>(null);
  const [confirm, setConfirm]           = useState<{ id: string; name: string } | null>(null);

  const load = useCallback(() => {
    setLoading(true);
    const params = new URLSearchParams({ page: String(page) });
    if (statusFilter !== 'all') params.set('status', statusFilter);
    if (sourceFilter !== 'all') params.set('source', sourceFilter);
    fetch(`/api/admin/enquiries?${params}`)
      .then(r => r.json())
      .then(d => { setEnquiries(d.enquiries ?? []); setTotal(d.total ?? 0); setPages(d.pages ?? 1); })
      .finally(() => setLoading(false));
  }, [page, statusFilter, sourceFilter]);

  useEffect(() => { load(); }, [load]);

  async function handleDelete() {
    if (!confirm) return;
    setDeleting(confirm.id);
    await fetch(`/api/admin/enquiries/${confirm.id}`, { method: 'DELETE' });
    toast.success('Enquiry deleted.', `Enquiry from "${confirm.name}" removed.`);
    setConfirm(null); setDeleting(null); load();
  }

  async function updateStatus(id: string, status: string) {
    await fetch(`/api/admin/enquiries/${id}`, {
      method: 'PATCH', headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ status }),
    });
    toast.info('Status updated.', `Marked as ${status.replace('_', ' ')}.`);
    load();
  }

  const filtered = search
    ? enquiries.filter(e =>
        e.name.toLowerCase().includes(search.toLowerCase()) ||
        e.email.toLowerCase().includes(search.toLowerCase()) ||
        e.phone.includes(search))
    : enquiries;

  const newCount = enquiries.filter(e => e.status === 'new').length;
  const p = isMobile ? '0.875rem' : '1.25rem';

  return (
    <div style={{ padding: p }}>
      <ConfirmModal
        open={Boolean(confirm)}
        title="Delete Enquiry"
        message={`Enquiry from "${confirm?.name}" will be permanently deleted.`}
        loading={Boolean(deleting)}
        onConfirm={handleDelete}
        onCancel={() => setConfirm(null)}
      />

      {/* Header */}
      <div style={{ marginBottom: '1.125rem', display: 'flex', alignItems: isMobile ? 'flex-start' : 'center', justifyContent: 'space-between', flexDirection: isMobile ? 'column' : 'row', gap: '0.5rem' }}>
        <div>
          <h2 style={{ fontSize: 18, fontWeight: 800, color: '#0F172A', margin: '0 0 0.2rem', letterSpacing: '-0.02em' }}>Enquiries</h2>
          <p style={{ fontSize: 12.5, color: '#64748B', margin: 0 }}>
            {total} total
            {newCount > 0 && (
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.3rem', marginLeft: '0.5rem' }}>
                <span style={{ display: 'inline-block', width: 7, height: 7, borderRadius: '50%', background: '#3B82F6', animation: 'pulse 1.5s ease-in-out infinite' }} />
                <span style={{ color: '#2563EB', fontWeight: 600 }}>{newCount} new</span>
              </span>
            )}
          </p>
        </div>
      </div>

      {/* Status chip filters */}
      <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.875rem', flexWrap: 'wrap' }}>
        {[
          { key: 'all', label: `All (${total})`, isActive: statusFilter === 'all' },
          ...Object.entries(STATUS_MAP).map(([key, { color, bg, border, icon, label }]) => ({
            key, label: `${label} (${enquiries.filter(e => e.status === key).length})`,
            isActive: statusFilter === key, color, bg, border, icon,
          })),
        ].map(chip => (
          <button
            key={chip.key}
            onClick={() => setStatusFilter(statusFilter === chip.key ? 'all' : chip.key)}
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.3rem',
              padding: '0.38rem 0.875rem', borderRadius: 999, fontSize: 12, fontWeight: 600, cursor: 'pointer',
              background: chip.isActive ? ('bg' in chip ? chip.bg : '#0A1628') : 'white',
              color: chip.isActive ? ('color' in chip ? chip.color : 'white') : '#64748B',
              border: `1px solid ${chip.isActive ? ('border' in chip ? chip.border : '#0A1628') : '#E2E8F0'}`,
              transition: 'all 0.15s',
            }}
          >
            {'icon' in chip && chip.icon}
            {chip.label}
          </button>
        ))}
      </div>

      {/* Search + source filter */}
      <div style={{ background: 'white', borderRadius: 12, padding: '0.75rem', border: '1px solid #E2E8F0', marginBottom: '1rem', display: 'flex', gap: '0.625rem', flexWrap: 'wrap', alignItems: 'center', boxShadow: '0 1px 4px rgba(0,0,0,0.04)' }}>
        <div style={{ position: 'relative', flex: 1, minWidth: isMobile ? '100%' : 200 }}>
          <Search size={13} style={{ position: 'absolute', left: 10, top: '50%', transform: 'translateY(-50%)', color: '#94A3B8', pointerEvents: 'none' }} />
          <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search name, email, phone…"
            style={{ width: '100%', padding: '0.525rem 0.75rem 0.525rem 2rem', border: '1.5px solid #E2E8F0', borderRadius: 8, fontSize: 13, outline: 'none', boxSizing: 'border-box', background: '#FAFBFC', transition: 'border-color 0.15s' }}
            onFocus={e => (e.target.style.borderColor = '#2563EB')}
            onBlur={e => (e.target.style.borderColor = '#E2E8F0')}
          />
        </div>
        <select value={sourceFilter} onChange={e => { setSourceFilter(e.target.value); setPage(1); }} style={{ padding: '0.525rem 0.75rem', border: '1.5px solid #E2E8F0', borderRadius: 8, fontSize: 13, background: '#FAFBFC', outline: 'none', cursor: 'pointer' }}>
          <option value="all">All Sources</option>
          <option value="home_form">Home Form</option>
          <option value="contact_form">Contact Form</option>
        </select>
      </div>

      {/* Content */}
      <div style={{ background: 'white', borderRadius: 14, border: '1px solid #E2E8F0', overflow: 'hidden', boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}>
        {isMobile ? (
          <div style={{ padding: '0.625rem' }}>
            {loading
              ? Array(4).fill(0).map((_, i) => <SkeletonCard key={i} />)
              : filtered.length === 0 ? (
                <div style={{ textAlign: 'center', padding: '3rem 1rem' }}>
                  <MessageSquare size={36} color="#CBD5E1" style={{ margin: '0 auto 0.875rem', display: 'block' }} />
                  <p style={{ fontSize: 14, fontWeight: 600, color: '#64748B', margin: '0 0 0.375rem' }}>No enquiries found</p>
                  <p style={{ fontSize: 12, color: '#94A3B8', margin: 0 }}>Customer enquiries will appear here</p>
                </div>
              ) : filtered.map(enq => {
                const { bg, color, border, icon, label } = STATUS_MAP[enq.status] ?? STATUS_MAP.new;
                return (
                  <div
                    key={enq._id}
                    onClick={() => router.push(`/admin/enquiries/${enq._id}`)}
                    style={{ background: 'white', border: '1px solid #E2E8F0', borderRadius: 12, padding: '0.875rem', marginBottom: '0.625rem', cursor: 'pointer', boxShadow: '0 1px 4px rgba(0,0,0,0.04)', transition: 'box-shadow 0.15s' }}
                    onMouseEnter={e => ((e.currentTarget as HTMLDivElement).style.boxShadow = '0 4px 12px rgba(0,0,0,0.08)')}
                    onMouseLeave={e => ((e.currentTarget as HTMLDivElement).style.boxShadow = '0 1px 4px rgba(0,0,0,0.04)')}
                  >
                    <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '0.5rem', marginBottom: '0.5rem' }}>
                      <div style={{ minWidth: 0 }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.375rem', marginBottom: '0.1rem' }}>
                          {enq.status === 'new' && <span style={{ display: 'inline-block', width: 7, height: 7, borderRadius: '50%', background: '#3B82F6', animation: 'pulse 1.5s ease-in-out infinite', flexShrink: 0 }} />}
                          <p style={{ fontSize: 14, fontWeight: 700, color: '#1E293B', margin: 0 }}>{enq.name}</p>
                        </div>
                        <p style={{ fontSize: 11.5, color: '#94A3B8', margin: 0, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{enq.email}</p>
                      </div>
                      <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.25rem', padding: '0.2rem 0.6rem', borderRadius: 999, background: bg, color, border: `1px solid ${border}`, fontSize: 11, fontWeight: 600, flexShrink: 0 }}>
                        {icon} {label}
                      </span>
                    </div>
                    <div style={{ display: 'flex', gap: '1rem', marginBottom: '0.625rem', flexWrap: 'wrap' }}>
                      <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.3rem', fontSize: 12, color: '#374151', fontWeight: 500 }}>
                        <Phone size={11} color="#64748B" /> {enq.phone}
                      </span>
                      {enq.service && <span style={{ fontSize: 12, color: '#64748B', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', maxWidth: 180 }}>{enq.service}</span>}
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: '0.625rem', borderTop: '1px solid #F1F5F9' }} onClick={e => e.stopPropagation()}>
                      <div style={{ display: 'flex', gap: '0.4rem' }}>
                        <a href={`tel:${enq.phone}`} style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', padding: '0.3rem 0.625rem', borderRadius: 7, background: '#F0FDF4', border: '1px solid #BBF7D0', color: '#16A34A', fontSize: 12, fontWeight: 600, textDecoration: 'none' }}>
                          <Phone size={11} /> Call
                        </a>
                        <a href={`mailto:${enq.email}`} style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', padding: '0.3rem 0.625rem', borderRadius: 7, background: '#EFF6FF', border: '1px solid #BFDBFE', color: '#2563EB', fontSize: 12, fontWeight: 600, textDecoration: 'none' }}>
                          <Mail size={11} /> Email
                        </a>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                        <select value={enq.status} onChange={e => updateStatus(enq._id, e.target.value)} style={{ padding: '0.3rem 0.5rem', border: '1.5px solid #E2E8F0', borderRadius: 6, fontSize: 12, background: 'white', outline: 'none', cursor: 'pointer' }}>
                          <option value="new">New</option>
                          <option value="in_progress">In Progress</option>
                          <option value="resolved">Resolved</option>
                        </select>
                        <button onClick={() => setConfirm({ id: enq._id, name: enq.name })} style={{ background: '#FEF2F2', border: 'none', borderRadius: 7, width: 30, height: 30, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', flexShrink: 0 }}>
                          <Trash2 size={13} color="#EF4444" />
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })
            }
          </div>
        ) : (
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 700 }}>
              <thead>
                <tr style={{ background: '#F8FAFC', borderBottom: '1px solid #E2E8F0' }}>
                  {['Name', 'Contact', 'Service / City', 'Source', 'Status', 'Date', 'Actions'].map(h => (
                    <th key={h} style={{ padding: '0.75rem 1rem', textAlign: 'left', fontSize: 10.5, fontWeight: 700, color: '#94A3B8', textTransform: 'uppercase', letterSpacing: '0.08em', whiteSpace: 'nowrap' }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {loading
                  ? Array(5).fill(0).map((_, i) => <SkeletonRow key={i} />)
                  : filtered.length === 0 ? (
                    <tr>
                      <td colSpan={7} style={{ textAlign: 'center', padding: '3.5rem' }}>
                        <MessageSquare size={32} color="#CBD5E1" style={{ margin: '0 auto 0.875rem', display: 'block' }} />
                        <p style={{ fontSize: 14, fontWeight: 600, color: '#64748B', margin: '0 0 0.25rem' }}>No enquiries found</p>
                        <p style={{ fontSize: 12, color: '#94A3B8', margin: 0 }}>Customer enquiries will appear here</p>
                      </td>
                    </tr>
                  ) : filtered.map((enq, i) => {
                    const { bg, color, border, icon, label } = STATUS_MAP[enq.status] ?? STATUS_MAP.new;
                    return (
                      <tr key={enq._id} onClick={() => router.push(`/admin/enquiries/${enq._id}`)}
                        style={{ borderBottom: i < filtered.length - 1 ? '1px solid #F1F5F9' : 'none', cursor: 'pointer', transition: 'background 0.1s' }}
                        onMouseEnter={e => ((e.currentTarget as HTMLTableRowElement).style.background = '#FAFBFC')}
                        onMouseLeave={e => ((e.currentTarget as HTMLTableRowElement).style.background = 'transparent')}
                      >
                        <td style={{ padding: '0.875rem 1rem' }}>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '0.375rem', marginBottom: '0.1rem' }}>
                            {enq.status === 'new' && <span style={{ display: 'inline-block', width: 7, height: 7, borderRadius: '50%', background: '#3B82F6', flexShrink: 0, animation: 'pulse 1.5s ease-in-out infinite' }} />}
                            <p style={{ fontSize: 13, fontWeight: 600, color: '#1E293B', margin: 0 }}>{enq.name}</p>
                          </div>
                          <p style={{ fontSize: 11, color: '#94A3B8', margin: 0 }}>{enq.email}</p>
                        </td>
                        <td style={{ padding: '0.875rem 1rem', fontSize: 13, color: '#374151', whiteSpace: 'nowrap' }}>{enq.phone}</td>
                        <td style={{ padding: '0.875rem 1rem' }}>
                          {enq.service && <p style={{ fontSize: 12, color: '#374151', margin: '0 0 0.1rem', maxWidth: 160, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{enq.service}</p>}
                          {enq.city   && <p style={{ fontSize: 11, color: '#94A3B8', margin: 0 }}>{enq.city}</p>}
                          {!enq.service && !enq.city && <span style={{ color: '#CBD5E1' }}>—</span>}
                        </td>
                        <td style={{ padding: '0.875rem 1rem' }}>
                          <span style={{ display: 'inline-flex', padding: '0.2rem 0.6rem', borderRadius: 999, fontSize: 11, fontWeight: 600, background: enq.source === 'contact_form' ? '#F0FDF4' : '#EFF6FF', color: enq.source === 'contact_form' ? '#16A34A' : '#2563EB', border: `1px solid ${enq.source === 'contact_form' ? '#BBF7D0' : '#BFDBFE'}` }}>
                            {enq.source === 'contact_form' ? 'Contact' : 'Home'}
                          </span>
                        </td>
                        <td style={{ padding: '0.875rem 1rem' }} onClick={e => e.stopPropagation()}>
                          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.25rem', padding: '0.25rem 0.625rem', borderRadius: 999, background: bg, color, border: `1px solid ${border}`, fontSize: 11, fontWeight: 600 }}>
                            {icon} {label}
                          </span>
                        </td>
                        <td style={{ padding: '0.875rem 1rem', fontSize: 12, color: '#94A3B8', whiteSpace: 'nowrap' }}>
                          {new Date(enq.createdAt).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}
                        </td>
                        <td style={{ padding: '0.875rem 1rem' }} onClick={e => e.stopPropagation()}>
                          <button onClick={() => setConfirm({ id: enq._id, name: enq.name })} style={{ background: '#FEF2F2', border: 'none', borderRadius: 7, width: 32, height: 32, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', transition: 'background 0.15s' }}
                            onMouseEnter={e => ((e.currentTarget as HTMLButtonElement).style.background = '#FECACA')}
                            onMouseLeave={e => ((e.currentTarget as HTMLButtonElement).style.background = '#FEF2F2')}
                          >
                            <Trash2 size={13} color="#EF4444" />
                          </button>
                        </td>
                      </tr>
                    );
                  })
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
              <button onClick={() => setPage(pg => pg - 1)} disabled={page === 1} style={{ background: '#F8FAFC', border: '1px solid #E2E8F0', borderRadius: 7, width: 32, height: 32, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: page === 1 ? 'not-allowed' : 'pointer', opacity: page === 1 ? 0.4 : 1 }}>
                <ChevronLeft size={14} color="#64748B" />
              </button>
              <button onClick={() => setPage(pg => pg + 1)} disabled={page === pages} style={{ background: '#F8FAFC', border: '1px solid #E2E8F0', borderRadius: 7, width: 32, height: 32, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: page === pages ? 'not-allowed' : 'pointer', opacity: page === pages ? 0.4 : 1 }}>
                <ChevronRight size={14} color="#64748B" />
              </button>
            </div>
          </div>
        )}
      </div>

      <style>{`
        @keyframes shimmer { 0%,100% { opacity: 1; } 50% { opacity: 0.55; } }
        @keyframes pulse { 0%,100% { opacity: 1; transform: scale(1); } 50% { opacity: 0.55; transform: scale(0.85); } }
      `}</style>
    </div>
  );
}
