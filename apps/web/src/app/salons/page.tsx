import { SearchBar } from '@/components/search/search-bar';

// Listing page for salons, e.g. /salons?location=...
export default function SalonsListPage() {
  return (
    <div>
      <h1>Salons</h1>
      <SearchBar />
      {/* Results grid populated from GET /api/salons */}
    </div>
  );
}
