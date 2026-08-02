import { SearchBar } from '@/components/search/search-bar';

// Listing page for flights, e.g. /flights?location=...
export default function FlightsListPage() {
  return (
    <div>
      <h1>Flights</h1>
      <SearchBar />
      {/* Results grid populated from GET /api/flights */}
    </div>
  );
}
