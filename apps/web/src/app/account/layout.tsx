'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { CalendarIcon, HeartIcon, UserIcon } from '@/components/icons';

const NAV_ITEMS = [
  { label: 'My bookings', href: '/account/bookings', icon: CalendarIcon },
  { label: 'Profile', href: '/account/profile', icon: UserIcon },
  { label: 'Payment methods', href: '/account/payments', icon: UserIcon },
  { label: 'Favorites', href: '/account/favorites', icon: HeartIcon },
];

export default function AccountLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <div className="container-page py-8">
      <h1 className="text-2xl font-bold text-ink-900">My account</h1>
      <div className="mt-6 grid grid-cols-1 gap-8 lg:grid-cols-[220px_1fr]">
        <aside className="space-y-1">
          {NAV_ITEMS.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`focus-ring flex items-center gap-2.5 rounded-xl px-3.5 py-2.5 text-sm font-medium transition-colors ${
                  isActive ? 'bg-brand-50 text-brand-800' : 'text-ink-600 hover:bg-ink-100'
                }`}
              >
                <item.icon className="h-4 w-4" />
                {item.label}
              </Link>
            );
          })}
        </aside>
        <div>{children}</div>
      </div>
    </div>
  );
}
