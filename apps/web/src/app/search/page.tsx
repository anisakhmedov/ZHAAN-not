import { SearchBar } from '@/components/search/search-bar';

// Cross-category search results, e.g. /search?q=paris&category=hotels
export default function SearchPage({ searchParams }: { searchParams: { q?: string; category?: string } }) {
  return (
    <div>
      <SearchBar />
      {/* Results for searchParams.q filtered by searchParams.category */}
    </div>
  );
}
