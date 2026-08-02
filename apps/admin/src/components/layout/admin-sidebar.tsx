const NAV_ITEMS = [
  { label: 'Dashboard', href: '/dashboard' },
  { label: 'Bookings', href: '/bookings' },
  { label: 'Providers', href: '/providers' },
  { label: 'Users', href: '/users' },
  { label: 'Hotels', href: '/categories/hotels' },
  { label: 'Salons', href: '/categories/salons' },
  { label: 'Rentals', href: '/categories/rentals' },
  { label: 'Flights', href: '/categories/flights' },
  { label: 'Trains', href: '/categories/trains' },
  { label: 'Payments', href: '/payments' },
  { label: 'Reviews', href: '/reviews' },
  { label: 'Reports', href: '/reports' },
  { label: 'Settings', href: '/settings' },
];

export function AdminSidebar() {
  return (
    <nav>
      {NAV_ITEMS.map((item) => (
        <a key={item.href} href={item.href}>
          {item.label}
        </a>
      ))}
    </nav>
  );
}
