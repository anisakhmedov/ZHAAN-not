'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  BuildingIcon,
  CalendarIcon,
  ChartBarIcon,
  CreditCardIcon,
  FlightIcon,
  GridIcon,
  HotelIcon,
  LogOutIcon,
  RentalIcon,
  SalonIcon,
  SettingsIcon,
  StarIcon,
  TrainIcon,
  UsersIcon,
} from '@/components/icons';

const NAV_SECTIONS = [
  {
    label: 'Overview',
    items: [{ label: 'Dashboard', href: '/dashboard', icon: GridIcon }],
  },
  {
    label: 'Operations',
    items: [
      { label: 'Bookings', href: '/bookings', icon: CalendarIcon },
      { label: 'Providers', href: '/providers', icon: BuildingIcon },
      { label: 'Users', href: '/users', icon: UsersIcon },
    ],
  },
  {
    label: 'Categories',
    items: [
      { label: 'Hotels', href: '/categories/hotels', icon: HotelIcon },
      { label: 'Salons', href: '/categories/salons', icon: SalonIcon },
      { label: 'Rentals', href: '/categories/rentals', icon: RentalIcon },
      { label: 'Flights', href: '/categories/flights', icon: FlightIcon },
      { label: 'Trains', href: '/categories/trains', icon: TrainIcon },
    ],
  },
  {
    label: 'Business',
    items: [
      { label: 'Payments', href: '/payments', icon: CreditCardIcon },
      { label: 'Reviews', href: '/reviews', icon: StarIcon },
      { label: 'Reports', href: '/reports', icon: ChartBarIcon },
    ],
  },
];

export function AdminSidebar({ onNavigate }: { onNavigate?: () => void }) {
  const pathname = usePathname();

  return (
    <div className="flex h-full flex-col bg-ink-950 text-ink-200">
      <div className="flex h-16 items-center gap-2 px-5">
        <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-brand-500 text-white">
          <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 12l6-8 4 5 3-3 3 6" />
            <path d="M4 18h16" />
          </svg>
        </span>
        <span className="text-base font-bold tracking-tight text-white">Zhaan Admin</span>
      </div>

      <nav className="scrollbar-thin flex-1 space-y-6 overflow-y-auto px-3 py-4">
        {NAV_SECTIONS.map((section) => (
          <div key={section.label}>
            <p className="px-3 text-xs font-semibold uppercase tracking-wider text-ink-500">{section.label}</p>
            <div className="mt-2 space-y-0.5">
              {section.items.map((item) => {
                const isActive = pathname === item.href || pathname?.startsWith(`${item.href}/`);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={onNavigate}
                    className={`focus-ring flex items-center gap-2.5 rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                      isActive ? 'bg-brand-600 text-white' : 'text-ink-300 hover:bg-white/5 hover:text-white'
                    }`}
                  >
                    <item.icon className="h-4 w-4" />
                    {item.label}
                  </Link>
                );
              })}
            </div>
          </div>
        ))}
      </nav>

      <div className="border-t border-white/10 p-3">
        <Link
          href="/settings"
          className="focus-ring flex items-center gap-2.5 rounded-lg px-3 py-2 text-sm font-medium text-ink-300 hover:bg-white/5 hover:text-white"
        >
          <SettingsIcon className="h-4 w-4" />
          Settings
        </Link>
        <Link
          href="/login"
          className="focus-ring flex items-center gap-2.5 rounded-lg px-3 py-2 text-sm font-medium text-ink-300 hover:bg-white/5 hover:text-white"
        >
          <LogOutIcon className="h-4 w-4" />
          Log out
        </Link>
      </div>
    </div>
  );
}
