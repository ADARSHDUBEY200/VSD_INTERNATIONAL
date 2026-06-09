'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import {
  LayoutDashboard, FileText, Package, MessageSquare,
  LogOut, Menu, X,
} from 'lucide-react';
import { useState, useEffect } from 'react';

const NAV = [
  { href: '/admin',           label: 'Dashboard', icon: LayoutDashboard, exact: true },
  { href: '/admin/blogs',     label: 'Blogs',     icon: FileText },
  { href: '/admin/products',  label: 'Products',  icon: Package },
  { href: '/admin/enquiries', label: 'Enquiries', icon: MessageSquare },
];

function NavLink({ href, label, icon: Icon, active }: { href: string; label: string; icon: React.ElementType; active: boolean }) {
  const [hovered, setHovered] = useState(false);

  return (
    <Link
      href={href}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: 'flex', alignItems: 'center', gap: '0.75rem',
        padding: '0.625rem 0.875rem', borderRadius: 10,
        color: active ? 'white' : hovered ? 'rgba(255,255,255,0.82)' : 'rgba(255,255,255,0.45)',
        background: active
          ? 'rgba(37,99,235,0.22)'
          : hovered ? 'rgba(255,255,255,0.05)' : 'transparent',
        borderLeft: `3px solid ${active ? '#3B82F6' : 'transparent'}`,
        textDecoration: 'none', fontSize: 13.5, fontWeight: active ? 600 : 400,
        transition: 'all 0.15s ease',
        boxShadow: active ? 'inset 0 0 0 1px rgba(37,99,235,0.18)' : 'none',
      }}
    >
      <div style={{
        width: 30, height: 30, borderRadius: 8, flexShrink: 0,
        background: active
          ? 'rgba(59,130,246,0.28)'
          : hovered ? 'rgba(255,255,255,0.08)' : 'rgba(255,255,255,0.05)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        transition: 'background 0.15s',
      }}>
        <Icon size={15} />
      </div>
      <span>{label}</span>
    </Link>
  );
}

export default function Sidebar() {
  const pathname = usePathname();
  const router   = useRouter();
  const [open, setOpen] = useState(false);

  useEffect(() => { setOpen(false); }, [pathname]);

  function isActive(href: string, exact?: boolean) {
    return exact ? pathname === href : pathname.startsWith(href);
  }

  async function handleLogout() {
    await fetch('/api/auth/logout', { method: 'POST' });
    router.push('/admin/login');
    router.refresh();
  }

  const SidebarInner = () => (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>

      {/* Brand */}
      <div style={{
        padding: '1.375rem 1.125rem 1.25rem',
        borderBottom: '1px solid rgba(255,255,255,0.06)',
        display: 'flex', alignItems: 'center', gap: '0.75rem',
      }}>
        <div style={{
          width: 40, height: 40, borderRadius: 11, flexShrink: 0,
          background: 'linear-gradient(135deg, #2563EB 0%, #1E40AF 100%)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontWeight: 900, fontSize: 17, color: 'white',
          boxShadow: '0 6px 20px rgba(37,99,235,0.45)',
        }}>V</div>
        <div>
          <p style={{ color: 'white', fontWeight: 700, fontSize: 13.5, letterSpacing: '-0.01em', margin: 0, lineHeight: 1.25 }}>
            VSD International
          </p>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', marginTop: 3 }}>
            <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#34D399', boxShadow: '0 0 5px rgba(52,211,153,0.5)' }} />
            <p style={{ color: 'rgba(255,255,255,0.3)', fontSize: 10, margin: 0 }}>Admin CMS</p>
          </div>
        </div>
      </div>

      {/* Nav */}
      <nav style={{ flex: 1, padding: '1.25rem 0.875rem', display: 'flex', flexDirection: 'column', gap: 3 }}>
        <p style={{
          color: 'rgba(255,255,255,0.18)', fontSize: 9.5, fontWeight: 700,
          letterSpacing: '0.13em', textTransform: 'uppercase',
          padding: '0 0.625rem', margin: '0 0 0.75rem',
        }}>Navigation</p>
        {NAV.map(({ href, label, icon, exact }) => (
          <NavLink key={href} href={href} label={label} icon={icon} active={isActive(href, exact)} />
        ))}
      </nav>

      {/* User + Logout */}
      <div style={{ padding: '0.875rem', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <div style={{
          display: 'flex', alignItems: 'center', gap: '0.625rem',
          padding: '0.625rem 0.75rem', marginBottom: '0.5rem',
          borderRadius: 10, background: 'rgba(255,255,255,0.04)',
          border: '1px solid rgba(255,255,255,0.06)',
        }}>
          <div style={{
            width: 32, height: 32, borderRadius: '50%', flexShrink: 0,
            background: 'linear-gradient(135deg, #1D4ED8, #3B82F6)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            color: 'white', fontWeight: 800, fontSize: 12,
          }}>A</div>
          <div style={{ minWidth: 0 }}>
            <p style={{ color: 'rgba(255,255,255,0.82)', fontSize: 12.5, fontWeight: 600, margin: 0 }}>Admin</p>
            <p style={{ color: 'rgba(255,255,255,0.28)', fontSize: 10.5, margin: 0, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>Administrator</p>
          </div>
        </div>
        <LogoutButton onLogout={handleLogout} />
      </div>
    </div>
  );

  return (
    <>
      {/* Desktop sidebar */}
      <aside
        className="hidden lg:flex"
        style={{
          width: 252, flexShrink: 0,
          background: 'linear-gradient(180deg, #090F1C 0%, #0A1628 100%)',
          height: '100vh', position: 'sticky', top: 0,
          flexDirection: 'column',
          boxShadow: '2px 0 24px rgba(0,0,0,0.3)',
        }}
      >
        <SidebarInner />
      </aside>

      {/* Mobile hamburger */}
      <button
        onClick={() => setOpen(true)}
        className="lg:hidden"
        aria-label="Open menu"
        style={{
          position: 'fixed', top: 14, left: 14, zIndex: 50,
          background: '#0A1628', border: '1px solid rgba(255,255,255,0.1)',
          borderRadius: 10, width: 40, height: 40,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          cursor: 'pointer', color: 'white',
          boxShadow: '0 4px 20px rgba(0,0,0,0.45)',
        }}
      >
        <Menu size={19} />
      </button>

      {/* Mobile backdrop */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          style={{
            position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.62)',
            zIndex: 55, backdropFilter: 'blur(4px)',
          }}
        />
      )}

      {/* Mobile drawer */}
      <aside
        className="lg:hidden"
        style={{
          position: 'fixed', top: 0, left: 0, bottom: 0,
          width: 264,
          background: 'linear-gradient(180deg, #090F1C 0%, #0A1628 100%)',
          zIndex: 60, flexDirection: 'column', display: 'flex',
          transform: open ? 'translateX(0)' : 'translateX(-100%)',
          transition: 'transform 0.28s cubic-bezier(.4,0,.2,1)',
          boxShadow: open ? '8px 0 48px rgba(0,0,0,0.6)' : 'none',
        }}
      >
        <button
          onClick={() => setOpen(false)}
          aria-label="Close menu"
          style={{
            position: 'absolute', top: 12, right: 12, zIndex: 1,
            background: 'rgba(255,255,255,0.08)', border: 'none',
            borderRadius: 8, width: 30, height: 30,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            cursor: 'pointer', color: 'rgba(255,255,255,0.7)',
          }}
        >
          <X size={15} />
        </button>
        <SidebarInner />
      </aside>
    </>
  );
}

function LogoutButton({ onLogout }: { onLogout: () => void }) {
  const [hovered, setHovered] = useState(false);
  return (
    <button
      onClick={onLogout}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        width: '100%', display: 'flex', alignItems: 'center', gap: '0.625rem',
        padding: '0.6rem 0.875rem', borderRadius: 8,
        color: hovered ? '#FCA5A5' : 'rgba(255,255,255,0.3)',
        background: hovered ? 'rgba(239,68,68,0.1)' : 'transparent',
        border: 'none', cursor: 'pointer', fontSize: 13, fontWeight: 500,
        transition: 'all 0.15s',
      }}
    >
      <LogOut size={15} />
      <span>Sign out</span>
    </button>
  );
}
