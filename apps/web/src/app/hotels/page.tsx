import { SearchBar } from '@/components/search/search-bar';

// Listing page for hotels, e.g. /hotels?location=...
export default function HotelsListPage() {
  return (
    <div>
      <h1>Hotels</h1>
      <SearchBar />
      {/* Results grid populated from GET /api/hotels */}
    </div>
  );
}
