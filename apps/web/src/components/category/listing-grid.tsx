import { ListingCard } from './listing-card';
import type { Listing } from '@/lib/mock-listings';

export function ListingGrid({ listings }: { listings: Listing[] }) {
  if (listings.length === 0) {
    return (
      <div className="rounded-2xl border border-dashed border-ink-300 py-16 text-center text-ink-500">
        No results found. Try adjusting your search.
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {listings.map((listing) => (
        <ListingCard key={listing.id} listing={listing} />
      ))}
    </div>
  );
}
