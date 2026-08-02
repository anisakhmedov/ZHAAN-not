import type { Ionicons } from '@expo/vector-icons';

export type CategorySlug = 'hotels' | 'salons' | 'rentals' | 'flights' | 'trains';

export const CATEGORIES: { slug: CategorySlug; label: string; tagline: string; icon: keyof typeof Ionicons.glyphMap }[] = [
  { slug: 'hotels', label: 'Hotels', tagline: 'Stays for every trip', icon: 'bed-outline' },
  { slug: 'salons', label: 'Salons', tagline: 'Beauty & wellness', icon: 'cut-outline' },
  { slug: 'rentals', label: 'Rentals', tagline: 'Cars & gear', icon: 'car-outline' },
  { slug: 'flights', label: 'Flights', tagline: 'Fly for less', icon: 'airplane-outline' },
  { slug: 'trains', label: 'Trains', tagline: 'City to city', icon: 'train-outline' },
];

export function getCategory(slug: CategorySlug) {
  return CATEGORIES.find((c) => c.slug === slug)!;
}
