const CATEGORIES = [
  { label: 'Hotels', href: '/hotels' },
  { label: 'Salons', href: '/salons' },
  { label: 'Rentals', href: '/rentals' },
  { label: 'Flights', href: '/flights' },
  { label: 'Trains', href: '/trains' },
];

export function CategoryNav() {
  return (
    <nav>
      {CATEGORIES.map((c) => (
        <a key={c.href} href={c.href}>
          {c.label}
        </a>
      ))}
    </nav>
  );
}
