import Link from 'next/link';
import { Logo } from './logo';
import { CATEGORIES } from '@/lib/categories';

const SUPPORT_LINKS = [
  { label: 'How it works', href: '/how-it-works' },
  { label: 'Contact us', href: '/contact' },
  { label: 'About Zhaan', href: '/about' },
];

const ACCOUNT_LINKS = [
  { label: 'My bookings', href: '/account/bookings' },
  { label: 'Profile', href: '/account/profile' },
  { label: 'Favorites', href: '/account/favorites' },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-ink-200 bg-ink-50">
      <div className="container-page grid grid-cols-2 gap-8 py-12 sm:grid-cols-4">
        <div className="col-span-2 sm:col-span-1">
          <Logo />
          <p className="mt-3 max-w-xs text-sm text-ink-500">
            One platform to search and book hotels, salons, rentals, flights and trains.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-ink-900">Explore</h3>
          <ul className="mt-3 space-y-2">
            {CATEGORIES.map((c) => (
              <li key={c.slug}>
                <Link href={`/${c.slug}`} className="text-sm text-ink-500 hover:text-brand-700">
                  {c.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-ink-900">Support</h3>
          <ul className="mt-3 space-y-2">
            {SUPPORT_LINKS.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-sm text-ink-500 hover:text-brand-700">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-ink-900">Account</h3>
          <ul className="mt-3 space-y-2">
            {ACCOUNT_LINKS.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-sm text-ink-500 hover:text-brand-700">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-ink-200 py-6">
        <div className="container-page flex flex-col items-center justify-between gap-3 text-xs text-ink-500 sm:flex-row">
          <p>© {new Date().getFullYear()} Zhaan. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="/about" className="hover:text-brand-700">
              Terms
            </Link>
            <Link href="/about" className="hover:text-brand-700">
              Privacy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
