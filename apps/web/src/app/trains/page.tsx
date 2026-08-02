import { SearchBar } from '@/components/search/search-bar';

// Listing page for trains, e.g. /trains?location=...
export default function TrainsListPage() {
  return (
    <div>
      <h1>Trains</h1>
      <SearchBar />
      {/* Results grid populated from GET /api/trains */}
    </div>
  );
}
