import { SearchBar } from '@/components/search/search-bar';
import { ListingGrid } from '@/components/category/listing-grid';
import { CATEGORIES } from '@/lib/categories';
import { LISTINGS } from '@/lib/mock-listings';

export default function SearchPage({
  searchParams,
}: {
  searchParams: { q?: string; category?: string; location?: string };
}) {
  const { q, category, location } = searchParams;

  const results = LISTINGS.filter((listing) => {
    if (category && listing.category !== category) return false;
    const haystack = `${listing.title} ${listing.location}`.toLowerCase();
    if (q && !haystack.includes(q.toLowerCase())) return false;
    if (location && !haystack.includes(location.toLowerCase())) return false;
    return true;
  });

  const activeCategory = CATEGORIES.find((c) => c.slug === category);

  return (
    <div>
      <section className="border-b border-ink-200 bg-ink-50 py-8">
        <div className="container-page">
          <h1 className="text-2xl font-bold text-ink-900">
            {activeCategory ? `${activeCategory.label} results` : 'Search results'}
          </h1>
          {(q || location) && <p className="mt-1 text-sm text-ink-500">{[q, location].filter(Boolean).join(' · ')}</p>}
          <div className="mt-6">
            <SearchBar />
          </div>
        </div>
      </section>

      <div className="container-page py-8">
        <p className="mb-4 text-sm text-ink-500">{results.length} results</p>
        <ListingGrid listings={results} />
      </div>
    </div>
  );
}
