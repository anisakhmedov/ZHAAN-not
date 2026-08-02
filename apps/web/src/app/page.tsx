import { CategoryNav } from '@/components/category/category-nav';
import { SearchBar } from '@/components/search/search-bar';

export default function HomePage() {
  return (
    <div>
      <CategoryNav />
      <SearchBar />
      {/* Featured hotels, salons, rentals, flights and trains */}
    </div>
  );
}
