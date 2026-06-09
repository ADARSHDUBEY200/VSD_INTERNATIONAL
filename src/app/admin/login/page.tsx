'use client';

import { useState, FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import { Eye, EyeOff, Loader2, LogIn, CheckCircle2, Shield, Bell, BarChart3 } from 'lucide-react';

const FEATURES = [
  { icon: CheckCircle2, text: 'Write and publish blog posts with rich editor' },
  { icon: Shield,       text: 'Manage product listings, specs, and pricing' },
  { icon: Bell,         text: 'Handle customer enquiries in real-time' },
  { icon: BarChart3,    text: 'Track performance with live dashboard stats' },
];

export default function AdminLoginPage() {
  const router = useRouter();
  const [email, setEmail]       = useState('');
  const [password, setPassword] = useState('');
  const [showPwd, setShowPwd]   = useState(false);
  const [loading, setLoading]   = useState(false);
  const [error, setError]       = useState('');

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      const res  = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });
      const data = await res.json();
      if (!res.ok) { setError(data.error ?? 'Invalid credentials'); return; }
      router.push('/admin');
      router.refresh();
    } catch {
      setError('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div style={{ minHeight: '100vh', display: 'flex' }}>

      {/* ── Left branding panel (desktop only) ── */}
      <div
        className="hidden lg:flex"
        style={{
          width: 480, flexShrink: 0,
          background: 'linear-gradient(160deg, #080F1E 0%, #0D1C38 60%, #0A1628 100%)',
          position: 'relative', flexDirection: 'column',
          justifyContent: 'space-between', padding: '2.75rem',
          overflow: 'hidden',
        }}
      >
        {/* Decorative glows */}
        <div style={{ position: 'absolute', top: -120, right: -100, width: 420, height: 420, borderRadius: '50%', background: 'radial-gradient(circle, rgba(37,99,235,0.14) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', bottom: -100, left: -80, width: 360, height: 360, borderRadius: '50%', background: 'radial-gradient(circle, rgba(124,58,237,0.08) 0%, transparent 70%)', pointerEvents: 'none' }} />
        {/* Dot grid */}
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(255,255,255,0.06) 1px, transparent 1px)', backgroundSize: '28px 28px', pointerEvents: 'none' }} />

        {/* Brand */}
        <div style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.875rem' }}>
            <div style={{
              width: 46, height: 46, borderRadius: 12,
              background: 'linear-gradient(135deg, #2563EB 0%, #1E40AF 100%)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              color: 'white', fontWeight: 900, fontSize: 19,
              boxShadow: '0 8px 28px rgba(37,99,235,0.5)',
            }}>V</div>
            <div>
              <p style={{ color: 'white', fontWeight: 800, fontSize: 15.5, margin: 0, letterSpacing: '-0.02em' }}>VSD International</p>
              <p style={{ color: 'rgba(255,255,255,0.35)', fontSize: 11, margin: 0 }}>Kitchen Equipment CMS</p>
            </div>
          </div>
        </div>

        {/* Hero text + features */}
        <div style={{ position: 'relative', zIndex: 1 }}>
          <h1 style={{
            color: 'white', fontSize: 40, fontWeight: 900, letterSpacing: '-0.05em',
            margin: '0 0 0.75rem', lineHeight: 1.08,
          }}>
            Your kitchen<br />
            <span style={{
              background: 'linear-gradient(135deg, #60A5FA 0%, #818CF8 100%)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
            }}>command centre.</span>
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.42)', fontSize: 14, margin: '0 0 2.5rem', lineHeight: 1.65, maxWidth: 350 }}>
            Manage all your content, products, and customer relationships from one powerful dashboard.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
            {FEATURES.map(({ icon: Icon, text }) => (
              <div key={text} style={{ display: 'flex', alignItems: 'center', gap: '0.875rem' }}>
                <div style={{
                  width: 33, height: 33, borderRadius: 9,
                  background: 'rgba(37,99,235,0.18)', border: '1px solid rgba(37,99,235,0.3)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                }}>
                  <Icon size={15} color="#60A5FA" />
                </div>
                <p style={{ color: 'rgba(255,255,255,0.58)', fontSize: 13.5, margin: 0 }}>{text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <p style={{ position: 'relative', zIndex: 1, color: 'rgba(255,255,255,0.2)', fontSize: 11, margin: 0 }}>
          © {new Date().getFullYear()} VSD International. All rights reserved.
        </p>
      </div>

      {/* ── Right form panel ── */}
      <div style={{
        flex: 1, background: 'white',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        padding: '2rem',
      }}>
        <div style={{ width: '100%', maxWidth: 400 }}>

          {/* Mobile logo */}
          <div className="lg:hidden" style={{ textAlign: 'center', marginBottom: '2.25rem' }}>
            <div style={{
              width: 48, height: 48, borderRadius: 13,
              background: 'linear-gradient(135deg, #2563EB, #1E40AF)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              margin: '0 auto 0.875rem', color: 'white', fontWeight: 900, fontSize: 20,
              boxShadow: '0 8px 28px rgba(37,99,235,0.4)',
            }}>V</div>
            <p style={{ fontSize: 19, fontWeight: 800, color: '#0F172A', margin: '0 0 0.25rem', letterSpacing: '-0.02em' }}>
              VSD International
            </p>
            <p style={{ fontSize: 13, color: '#64748B', margin: 0 }}>Admin CMS</p>
          </div>

          <h2 style={{ fontSize: 26, fontWeight: 800, color: '#0F172A', letterSpacing: '-0.03em', margin: '0 0 0.375rem' }}>
            Welcome back
          </h2>
          <p style={{ fontSize: 14, color: '#64748B', margin: '0 0 2rem', lineHeight: 1.5 }}>
            Sign in to your admin account to continue
          </p>

          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            {error && (
              <div style={{
                background: '#FEF2F2', border: '1px solid #FECACA',
                borderLeft: '4px solid #EF4444', borderRadius: 10,
                padding: '0.75rem 1rem', color: '#DC2626', fontSize: 13, fontWeight: 500,
              }}>
                {error}
              </div>
            )}

            <div>
              <label style={{ display: 'block', fontSize: 13, fontWeight: 600, color: '#374151', marginBottom: '0.5rem' }}>
                Email Address
              </label>
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
                autoComplete="email"
                placeholder="admin@vsdinternational.com"
                style={{
                  width: '100%', padding: '0.8rem 1rem',
                  border: '1.5px solid #E2E8F0', borderRadius: 10,
                  fontSize: 14, color: '#0F172A', background: '#FAFBFC',
                  outline: 'none', boxSizing: 'border-box', transition: 'all 0.15s',
                }}
                onFocus={e => { e.target.style.borderColor = '#2563EB'; e.target.style.background = 'white'; e.target.style.boxShadow = '0 0 0 3px rgba(37,99,235,0.1)'; }}
                onBlur={e => { e.target.style.borderColor = '#E2E8F0'; e.target.style.background = '#FAFBFC'; e.target.style.boxShadow = 'none'; }}
              />
            </div>

            <div>
              <label style={{ display: 'block', fontSize: 13, fontWeight: 600, color: '#374151', marginBottom: '0.5rem' }}>
                Password
              </label>
              <div style={{ position: 'relative' }}>
                <input
                  type={showPwd ? 'text' : 'password'}
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  required
                  autoComplete="current-password"
                  placeholder="Enter your password"
                  style={{
                    width: '100%', padding: '0.8rem 3rem 0.8rem 1rem',
                    border: '1.5px solid #E2E8F0', borderRadius: 10,
                    fontSize: 14, color: '#0F172A', background: '#FAFBFC',
                    outline: 'none', boxSizing: 'border-box', transition: 'all 0.15s',
                  }}
                  onFocus={e => { e.target.style.borderColor = '#2563EB'; e.target.style.background = 'white'; e.target.style.boxShadow = '0 0 0 3px rgba(37,99,235,0.1)'; }}
                  onBlur={e => { e.target.style.borderColor = '#E2E8F0'; e.target.style.background = '#FAFBFC'; e.target.style.boxShadow = 'none'; }}
                />
                <button
                  type="button"
                  onClick={() => setShowPwd(p => !p)}
                  style={{
                    position: 'absolute', right: 12, top: '50%', transform: 'translateY(-50%)',
                    background: 'none', border: 'none', cursor: 'pointer',
                    color: '#94A3B8', padding: 4, display: 'flex', alignItems: 'center',
                    transition: 'color 0.15s',
                  }}
                  onMouseEnter={e => ((e.currentTarget as HTMLButtonElement).style.color = '#64748B')}
                  onMouseLeave={e => ((e.currentTarget as HTMLButtonElement).style.color = '#94A3B8')}
                >
                  {showPwd ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              style={{
                display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem',
                padding: '0.9rem', borderRadius: 11, marginTop: '0.25rem',
                background: loading ? '#BFDBFE' : 'linear-gradient(135deg, #1D4ED8 0%, #2563EB 100%)',
                border: 'none', color: 'white', fontSize: 15, fontWeight: 700,
                cursor: loading ? 'not-allowed' : 'pointer',
                boxShadow: loading ? 'none' : '0 4px 20px rgba(37,99,235,0.4)',
                transition: 'all 0.2s',
              }}
              onMouseEnter={e => { if (!loading) (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 6px 28px rgba(37,99,235,0.55)'; }}
              onMouseLeave={e => { if (!loading) (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 4px 20px rgba(37,99,235,0.4)'; }}
            >
              {loading
                ? <Loader2 size={18} style={{ animation: 'spin 1s linear infinite' }} />
                : <LogIn size={18} />}
              {loading ? 'Signing in…' : 'Sign In to CMS'}
            </button>
          </form>

          <p style={{ textAlign: 'center', fontSize: 11.5, color: '#CBD5E1', marginTop: '2rem', lineHeight: 1.5 }}>
            VSD International — Authorised Access Only
          </p>
        </div>
      </div>

      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </div>
  );
}
