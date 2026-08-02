import type { Metadata } from 'next';
import './globals.css';
import { AdminSidebar } from '@/components/layout/admin-sidebar';

export const metadata: Metadata = {
  title: 'Zhaan Admin',
  description: 'Operations dashboard for the Zhaan booking ecosystem',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div style={{ display: 'flex' }}>
          <AdminSidebar />
          <main style={{ flex: 1 }}>{children}</main>
        </div>
      </body>
    </html>
  );
}
