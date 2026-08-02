import { CATEGORY_ICONS } from '@/components/icons';

export const CATEGORIES = [
  { slug: 'hotels', label: 'Hotels', tagline: 'Stays for every trip', icon: CATEGORY_ICONS.hotels },
  { slug: 'salons', label: 'Salons', tagline: 'Book beauty & wellness', icon: CATEGORY_ICONS.salons },
  { slug: 'rentals', label: 'Rentals', tagline: 'Cars & gear on demand', icon: CATEGORY_ICONS.rentals },
  { slug: 'flights', label: 'Flights', tagline: 'Fly anywhere for less', icon: CATEGORY_ICONS.flights },
  { slug: 'trains', label: 'Trains', tagline: 'City to city, relaxed', icon: CATEGORY_ICONS.trains },
] as const;

export type CategorySlug = (typeof CATEGORIES)[number]['slug'];

export function getCategory(slug: string) {
  return CATEGORIES.find((c) => c.slug === slug);
}
