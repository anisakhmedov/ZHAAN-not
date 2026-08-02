import { SearchBar } from '@/components/search/search-bar';

// Listing page for rentals, e.g. /rentals?location=...
export default function RentalsListPage() {
  return (
    <div>
      <h1>Rentals</h1>
      <SearchBar />
      {/* Results grid populated from GET /api/rentals */}
    </div>
  );
}
