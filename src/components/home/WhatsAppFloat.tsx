'use client';

import { useEffect, useState } from 'react';
import { X } from 'lucide-react';

const WaIcon = ({ size = 28, fill = 'white' }: { size?: number; fill?: string }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill={fill} xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
  </svg>
);

const chatOptions = [
  { label: '🏨 Hotel Kitchen Equipment', msg: 'Hi%2C%20I%20need%20kitchen%20equipment%20for%20a%20hotel%20project.' },
  { label: '🏥 Hospital Kitchen',        msg: 'Hi%2C%20I%20need%20kitchen%20equipment%20for%20a%20hospital%20or%20healthcare%20facility.' },
  { label: '🍔 Cloud Kitchen Setup',     msg: 'Hi%2C%20I%20am%20setting%20up%20a%20cloud%20kitchen%20and%20need%20equipment%20guidance.' },
  { label: '💬 General Enquiry',         msg: 'Hi%20VSD%20International%2C%20I%20need%20commercial%20kitchen%20equipment.%20Please%20share%20details.' },
];

export default function WhatsAppFloat() {
  const [visible,   setVisible]   = useState(false);   // entrance slide-up
  const [pulse,     setPulse]     = useState(false);   // ping ring
  const [attention, setAttention] = useState(false);   // wiggle
  const [open,      setOpen]      = useState(false);
  const [badge,     setBadge]     = useState(false);   // red "1" badge

  /* Entrance — slide up after 1.4s */
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 1400);
    return () => clearTimeout(t);
  }, []);

  /* Show notification badge 3s after entering */
  useEffect(() => {
    if (!visible) return;
    const t = setTimeout(() => setBadge(true), 3000);
    return () => clearTimeout(t);
  }, [visible]);

  /* Attention cycle: wiggle + pulse every 8s */
  useEffect(() => {
    const tick = () => {
      setAttention(true);
      setPulse(true);
      setTimeout(() => setAttention(false), 800);
      setTimeout(() => setPulse(false), 1600);
    };
    const id = setInterval(tick, 8000);
    return () => clearInterval(id);
  }, []);

  /* Hide badge once user opens chat */
  const handleToggle = () => {
    setOpen(v => !v);
    setBadge(false);
  };

  return (
    <>
      <style>{`
        @keyframes wa-enter {
          from { opacity: 0; transform: translateY(72px) scale(0.8); }
          to   { opacity: 1; transform: translateY(0)   scale(1); }
        }
        @keyframes wa-in {
          from { opacity: 0; transform: translateY(16px) scale(0.92); }
          to   { opacity: 1; transform: translateY(0)   scale(1); }
        }
        @keyframes wa-ping {
          0%        { transform: scale(1);   opacity: 0.75; }
          75%, 100% { transform: scale(2.2); opacity: 0; }
        }
        @keyframes wa-wiggle {
          0%,  100% { transform: rotate(0deg) scale(1); }
          15%        { transform: rotate(-14deg) scale(1.08); }
          30%        { transform: rotate(12deg) scale(1.05); }
          45%        { transform: rotate(-10deg) scale(1.04); }
          60%        { transform: rotate(8deg) scale(1.02); }
          75%        { transform: rotate(-4deg) scale(1.01); }
        }
        @keyframes badge-pop {
          0%   { transform: scale(0); opacity: 0; }
          60%  { transform: scale(1.3); opacity: 1; }
          100% { transform: scale(1); opacity: 1; }
        }
        @keyframes badge-pulse {
          0%, 100% { box-shadow: 0 0 0 0 rgba(255,59,59,0.55); }
          50%      { box-shadow: 0 0 0 5px rgba(255,59,59,0); }
        }
      `}</style>

      <div
        className="fixed bottom-24 right-4 sm:bottom-6 sm:right-6 z-50 flex flex-col items-end gap-3"
        role="complementary"
        aria-label="WhatsApp contact widget"
        style={{
          opacity:    visible ? 1 : 0,
          transform:  visible ? 'translateY(0)' : 'translateY(72px)',
          transition: 'opacity 0.55s cubic-bezier(0.34,1.4,0.64,1), transform 0.55s cubic-bezier(0.34,1.4,0.64,1)',
        }}
      >
        {/* ── Card ── */}
        {open && (
          <div
            role="dialog"
            aria-label="WhatsApp chat options"
            style={{
              width: 310,
              borderRadius: 20,
              overflow: 'hidden',
              boxShadow: '0 24px 64px rgba(0,0,0,0.22), 0 4px 16px rgba(0,0,0,0.10)',
              animation: 'wa-in 0.32s cubic-bezier(0.34,1.4,0.64,1) both',
              transformOrigin: 'bottom right',
            }}
          >
            {/* Header */}
            <div style={{
              background: 'linear-gradient(135deg, #055046 0%, #128C7E 100%)',
              padding: '14px 14px 16px',
              display: 'flex',
              alignItems: 'center',
              gap: 12,
            }}>
              <div style={{ position: 'relative', flexShrink: 0 }}>
                <div style={{
                  width: 46, height: 46,
                  borderRadius: '50%',
                  background: 'rgba(255,255,255,0.14)',
                  border: '2px solid rgba(255,255,255,0.3)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <WaIcon size={24} fill="white" />
                </div>
                <span style={{
                  position: 'absolute', bottom: 1, right: 1,
                  width: 13, height: 13,
                  background: '#4ADE80',
                  borderRadius: '50%',
                  border: '2.5px solid #055046',
                }} />
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ color: '#fff', fontWeight: 700, fontSize: 14.5, lineHeight: 1.25 }}>
                  VSD International
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 5, marginTop: 3 }}>
                  <span style={{ width: 7, height: 7, background: '#4ADE80', borderRadius: '50%', display: 'inline-block', flexShrink: 0 }} />
                  <span style={{ color: 'rgba(255,255,255,0.8)', fontSize: 11.5 }}>Online · Replies instantly</span>
                </div>
              </div>
              <button
                onClick={() => setOpen(false)}
                aria-label="Close"
                style={{
                  background: 'rgba(255,255,255,0.14)', border: 'none', cursor: 'pointer',
                  borderRadius: '50%', width: 30, height: 30,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  flexShrink: 0, transition: 'background 0.15s',
                }}
                onMouseEnter={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.25)')}
                onMouseLeave={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.14)')}
              >
                <X size={15} color="#fff" strokeWidth={2.5} />
              </button>
            </div>

            {/* Chat area */}
            <div style={{ background: '#E5DDD5', padding: '14px 13px 12px' }}>
              {/* Message bubble */}
              <div style={{
                background: '#fff',
                borderRadius: '2px 14px 14px 14px',
                padding: '11px 13px 8px',
                fontSize: 13, lineHeight: 1.57, color: '#1a1a18',
                boxShadow: '0 1px 3px rgba(0,0,0,0.12)',
                marginBottom: 11, position: 'relative',
              }}>
                <span style={{
                  position: 'absolute', top: 0, left: -7,
                  width: 0, height: 0, borderStyle: 'solid',
                  borderWidth: '8px 8px 0 0',
                  borderColor: '#fff transparent transparent transparent',
                }} />
                👋 Welcome to <strong>VSD International</strong> — ISO&nbsp;9001 certified kitchen equipment partner.
                <br /><br />
                Trusted by <strong>Hyatt, Radisson, Crowne&nbsp;Plaza</strong> &amp; leading hospitals across India.
                <br /><br />
                <span style={{ color: '#555' }}>How can I help you today?</span>
                <div style={{ textAlign: 'right', fontSize: 10.5, color: '#aab8c2', marginTop: 5 }}>
                  now &nbsp;✓✓
                </div>
              </div>

              {/* Quick-reply buttons */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 7 }}>
                {chatOptions.map(({ label, msg }) => (
                  <a
                    key={label}
                    href={`https://wa.me/919250346370?text=${msg}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      padding: '9px 14px', borderRadius: 11,
                      background: '#25D366', color: '#fff',
                      fontSize: 12.5, fontWeight: 600, textDecoration: 'none',
                      boxShadow: '0 2px 8px rgba(37,211,102,0.28)',
                      transition: 'filter 0.15s, transform 0.12s',
                    }}
                    onMouseEnter={e => { e.currentTarget.style.filter = 'brightness(0.9)'; e.currentTarget.style.transform = 'translateY(-1px)'; }}
                    onMouseLeave={e => { e.currentTarget.style.filter = 'none'; e.currentTarget.style.transform = 'none'; }}
                  >
                    {label}
                  </a>
                ))}
              </div>
            </div>

            {/* Footer */}
            <div style={{
              background: '#F0F2F5',
              borderTop: '1px solid rgba(0,0,0,0.06)',
              padding: '7px 14px',
              display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 5,
            }}>
              <WaIcon size={13} fill="#25D366" />
              <span style={{ fontSize: 10.5, color: '#9aacba', fontWeight: 500 }}>Powered by WhatsApp</span>
            </div>
          </div>
        )}

        {/* ── FAB ── */}
        <button
          onClick={handleToggle}
          aria-label={open ? 'Close WhatsApp chat' : 'Chat with us on WhatsApp'}
          aria-expanded={open}
          style={{
            width: 62, height: 62,
            borderRadius: '50%',
            background: 'linear-gradient(145deg, #2edb6e 0%, #20bf5a 100%)',
            border: 'none', cursor: 'pointer',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            boxShadow: '0 8px 28px rgba(37,211,102,0.52), 0 2px 8px rgba(0,0,0,0.12)',
            transition: 'box-shadow 0.2s',
            position: 'relative',
            outline: 'none',
            animation: attention && !open ? 'wa-wiggle 0.75s ease' : 'none',
          }}
          onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 12px 36px rgba(37,211,102,0.62), 0 4px 12px rgba(0,0,0,0.15)'; }}
          onMouseLeave={e => { e.currentTarget.style.boxShadow = '0 8px 28px rgba(37,211,102,0.52), 0 2px 8px rgba(0,0,0,0.12)'; }}
        >
          {/* Pulse ring */}
          {pulse && !open && (
            <span
              aria-hidden="true"
              style={{
                position: 'absolute', inset: -4, borderRadius: '50%',
                background: 'rgba(37,211,102,0.38)',
                animation: 'wa-ping 1.2s cubic-bezier(0,0,0.2,1) forwards',
                pointerEvents: 'none',
              }}
            />
          )}

          {/* Notification badge */}
          {badge && !open && (
            <span
              aria-label="1 new message"
              style={{
                position: 'absolute', top: -3, right: -3,
                width: 20, height: 20,
                background: '#FF3B3B',
                borderRadius: '50%',
                border: '2.5px solid white',
                fontSize: 10, fontWeight: 800, color: '#fff',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                animation: 'badge-pop 0.35s cubic-bezier(0.34,1.5,0.64,1) both, badge-pulse 2s ease-in-out 0.5s infinite',
                zIndex: 2,
                lineHeight: 1,
              }}
            >
              1
            </span>
          )}

          {open
            ? <X size={24} color="#fff" strokeWidth={2.5} />
            : <WaIcon size={32} fill="white" />
          }
        </button>
      </div>
    </>
  );
}
