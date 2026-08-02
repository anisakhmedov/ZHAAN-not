'use client';

import { useMemo, useState } from 'react';
import { SearchBar } from '@/components/search/search-bar';
import { ListingGrid } from './listing-grid';
import { getCategory, type CategorySlug } from '@/lib/categories';
import { getListingsByCategory } from '@/lib/mock-listings';

type SortOption = 'recommended' | 'price-asc' | 'price-desc' | 'rating-desc';

const SORT_LABELS: Record<SortOption, string> = {
  recommended: 'Recommended',
  'price-asc': 'Price: low to high',
  'price-desc': 'Price: high to low',
  'rating-desc': 'Top rated',
};

export function CategoryListingPage({ category }: { category: CategorySlug }) {
  const meta = getCategory(category)!;
  const [sort, setSort] = useState<SortOption>('recommended');
  const [minRating, setMinRating] = useState(0);

  const listings = useMemo(() => {
    let results = getListingsByCategory(category).filter((l) => l.rating >= minRating);
    if (sort === 'price-asc') results = [...results].sort((a, b) => a.price - b.price);
    if (sort === 'price-desc') results = [...results].sort((a, b) => b.price - a.price);
    if (sort === 'rating-desc') results = [...results].sort((a, b) => b.rating - a.rating);
    return results;
  }, [category, sort, minRating]);

  return (
    <div>
      <section className="border-b border-ink-200 bg-ink-50 py-8">
        <div className="container-page">
          <div className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-600 text-white">
              <meta.icon className="h-5 w-5" />
            </span>
            <div>
              <h1 className="text-2xl font-bold text-ink-900">{meta.label}</h1>
              <p className="text-sm text-ink-500">{meta.tagline}</p>
            </div>
          </div>
          <div className="mt-6">
            <SearchBar />
          </div>
        </div>
      </section>

      <div className="container-page grid grid-cols-1 gap-8 py-8 lg:grid-cols-[240px_1fr]">
        <aside className="space-y-6">
          <div>
            <h3 className="mb-3 text-sm font-semibold text-ink-900">Sort by</h3>
            <div className="space-y-1.5">
              {(Object.keys(SORT_LABELS) as SortOption[]).map((option) => (
                <button
                  key={option}
                  type="button"
                  onClick={() => setSort(option)}
                  className={`focus-ring block w-full rounded-lg px-3 py-2 text-left text-sm transition-colors ${
                    sort === option ? 'bg-brand-50 font-medium text-brand-800' : 'text-ink-600 hover:bg-ink-100'
                  }`}
                >
                  {SORT_LABELS[option]}
                </button>
              ))}
            </div>
          </div>

          <div className="border-t border-ink-200 pt-6">
            <h3 className="mb-3 text-sm font-semibold text-ink-900">Minimum rating</h3>
            <div className="space-y-1.5">
              {[0, 4, 4.5, 4.8].map((rating) => (
                <label key={rating} className="flex cursor-pointer items-center gap-2 rounded-lg px-3 py-2 text-sm text-ink-600 hover:bg-ink-100">
                  <input
                    type="radio"
                    name="min-rating"
                    className="h-4 w-4 accent-brand-600"
                    checked={minRating === rating}
                    onChange={() => setMinRating(rating)}
                  />
                  {rating === 0 ? 'Any rating' : `${rating}+`}
                </label>
              ))}
            </div>
          </div>
        </aside>

        <div>
          <p className="mb-4 text-sm text-ink-500">{listings.length} results</p>
          <ListingGrid listings={listings} />
        </div>
      </div>
    </div>
  );
}
