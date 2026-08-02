import { ListingGrid } from '@/components/category/listing-grid';
import { LISTINGS } from '@/lib/mock-listings';

export default function AccountFavoritesPage() {
  const favorites = LISTINGS.filter((l) => ['h2', 's2', 'r1', 'f3'].includes(l.id));

  return <ListingGrid listings={favorites} />;
}
