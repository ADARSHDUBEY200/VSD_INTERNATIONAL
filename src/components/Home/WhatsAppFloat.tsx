'use client';

import { useEffect, useState } from 'react';
import { MessageCircle, X } from 'lucide-react';

/** SOP — Floating WhatsApp Button
 *  Always visible on all pages
 *  Pulse animation every 8 seconds (SOP: WhatsApp pulsing every 8s)
 *  Pre-filled message for homepage
 *  Mobile: floating bottom-right
 *  CRO: Mobile users converted via WhatsApp at 3-5x rate of forms
 */
export default function WhatsAppFloat() {
  const [pulse,  setPulse]  = useState(false);
  const [open,   setOpen]   = useState(false);
  const [hidden, setHidden] = useState(false);

  /* Pulse animation every 8 seconds */
  useEffect(() => {
    const tick = () => {
      setPulse(true);
      setTimeout(() => setPulse(false), 1500);
    };
    tick(); /* First pulse immediately */
    const interval = setInterval(tick, 8000);
    return () => clearInterval(interval);
  }, []);

  if (hidden) return null;

  return (
    <div
      className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3"
      role="complementary"
      aria-label="WhatsApp contact widget"
    >
      {/* Tooltip / mini panel */}
      {open && (
        <div
          className="rounded-2xl overflow-hidden"
          style={{
            width: 280,
            background: '#FFFFFF',
            boxShadow: '0 20px 60px rgba(0,0,0,0.25)',
            border: '1px solid rgba(0,0,0,0.06)',
          }}
          role="dialog"
          aria-label="WhatsApp chat options"
        >
          {/* Panel header */}
          <div
            className="flex items-center justify-between px-4 py-3"
            style={{ background: '#075E54' }}
          >
            <div className="flex items-center gap-2">
              <MessageCircle size={18} style={{ color: '#fff' }} aria-hidden="true" />
              <span style={{ fontFamily: 'var(--font-inter)', fontWeight: 700, fontSize: '0.875rem', color: '#fff' }}>
                VSD International
              </span>
            </div>
            <button
              onClick={() => setOpen(false)}
              aria-label="Close WhatsApp widget"
              style={{ background: 'transparent', border: 'none', cursor: 'pointer', color: 'rgba(255,255,255,0.7)' }}
            >
              <X size={16} />
            </button>
          </div>

          {/* Chat bubble */}
          <div className="p-4">
            <div
              className="rounded-lg p-3 mb-3"
              style={{
                background: '#E8F5E9',
                fontSize: '0.875rem',
                fontFamily: 'var(--font-inter)',
                color: '#1a1a18',
                lineHeight: 1.5,
              }}
            >
              👋 Thank you for visiting VSD International — ISO 9001 certified kitchen equipment partner.
              <br /><br />
              We supply <strong>Hyatt, Radisson, Crowne Plaza</strong> &amp; leading hospitals across India.
              <br /><br />
              How can we help you today?
            </div>

            {/* CTA buttons */}
            <div className="flex flex-col gap-2">
              {[
                { label: '🏨 Hotel Kitchen Equipment', msg: 'Hi%2C%20I%20need%20kitchen%20equipment%20for%20a%20hotel%20project.' },
                { label: '🏥 Hospital Kitchen',        msg: 'Hi%2C%20I%20need%20kitchen%20equipment%20for%20a%20hospital%20or%20healthcare%20facility.' },
                { label: '🍔 Cloud Kitchen Setup',     msg: 'Hi%2C%20I%20am%20setting%20up%20a%20cloud%20kitchen%20and%20need%20equipment%20guidance.' },
                { label: '💬 General Enquiry',        msg: 'Hi%20VSD%20International%2C%20I%20need%20commercial%20kitchen%20equipment.%20Please%20share%20details.' },
              ].map(({ label, msg }) => (
                <a
                  key={label}
                  href={`https://wa.me/919250346370?text=${msg}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center py-2.5 px-4 rounded-lg text-sm font-semibold transition-opacity hover:opacity-80"
                  style={{
                    background: '#25D366',
                    color: '#fff',
                    fontFamily: 'var(--font-inter)',
                    textDecoration: 'none',
                    fontSize: '0.8125rem',
                  }}
                  aria-label={label}
                >
                  {label}
                </a>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Main floating button */}
      <button
        onClick={() => setOpen((v) => !v)}
        className="relative flex items-center justify-center rounded-full transition-transform duration-200 hover:scale-105 active:scale-95"
        style={{
          width: 56,
          height: 56,
          background: '#25D366',
          boxShadow: '0 8px 24px rgba(37,211,102,0.45)',
          border: 'none',
          cursor: 'pointer',
        }}
        aria-label={open ? 'Close WhatsApp chat' : 'Open WhatsApp chat with VSD International'}
        aria-expanded={open}
      >
        {/* Pulse ring */}
        {pulse && !open && (
          <span
            className="absolute inset-0 rounded-full"
            style={{
              border: '2px solid #25D366',
              animation: 'ping 1s cubic-bezier(0,0,0.2,1)',
              opacity: 0.6,
            }}
            aria-hidden="true"
          />
        )}

        {open ? (
          <X size={22} style={{ color: '#fff' }} aria-hidden="true" />
        ) : (
          <MessageCircle size={24} style={{ color: '#fff' }} aria-hidden="true" />
        )}
      </button>
    </div>
  );
}
