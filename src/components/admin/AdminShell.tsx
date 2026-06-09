'use client';

import { usePathname } from 'next/navigation';
import Sidebar from './Sidebar';
import AdminHeader from './AdminHeader';
import { ToastProvider } from './Toast';

export default function AdminShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  if (pathname === '/admin/login') {
    return <ToastProvider>{children}</ToastProvider>;
  }

  return (
    <ToastProvider>
      <div style={{ display: 'flex', minHeight: '100vh', background: '#F0F4FF' }}>
        <Sidebar />
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', minWidth: 0, overflow: 'hidden' }}>
          <AdminHeader />
          <main style={{ flex: 1, overflowY: 'auto', overflowX: 'hidden' }}>
            {children}
          </main>
        </div>
      </div>
    </ToastProvider>
  );
}
