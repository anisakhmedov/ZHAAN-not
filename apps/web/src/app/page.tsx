import Link from 'next/link';
import { SearchBar } from '@/components/search/search-bar';
import { ListingGrid } from '@/components/category/listing-grid';
import { ChevronRightIcon } from '@/components/icons';
import { CATEGORIES } from '@/lib/categories';
import { getFeaturedListings } from '@/lib/mock-listings';

export default function HomePage() {
  const featured = getFeaturedListings(8);

  return (
    <div>
      <section className="relative overflow-hidden bg-ink-950">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(42,159,147,0.35),transparent_45%),radial-gradient(circle_at_85%_0%,rgba(129,140,248,0.25),transparent_40%)]" />
        <div className="container-page relative flex flex-col items-center gap-8 py-16 text-center sm:py-24">
          <h1 className="max-w-2xl text-balance text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Book anything for your next trip, all in one place
          </h1>
          <p className="max-w-xl text-balance text-base text-ink-300 sm:text-lg">
            Hotels, salons, rentals, flights and trains — search, compare and book in a few taps.
          </p>
          <SearchBar />
        </div>
      </section>

      <section className="container-page py-14">
        <h2 className="text-xl font-bold text-ink-900">Browse by category</h2>
        <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {CATEGORIES.map((c) => (
            <Link
              key={c.slug}
              href={`/${c.slug}`}
              className="group focus-ring flex flex-col gap-3 rounded-2xl border border-ink-200 p-5 transition-all hover:-translate-y-0.5 hover:border-brand-300 hover:shadow-card"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand-700 transition-colors group-hover:bg-brand-600 group-hover:text-white">
                <c.icon className="h-5 w-5" />
              </span>
              <div>
                <p className="font-semibold text-ink-900">{c.label}</p>
                <p className="text-sm text-ink-500">{c.tagline}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="container-page pb-16">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold text-ink-900">Handpicked for you</h2>
          <Link href="/search" className="focus-ring flex items-center gap-1 text-sm font-medium text-brand-700 hover:text-brand-800">
            View all
            <ChevronRightIcon className="h-4 w-4" />
          </Link>
        </div>
        <div className="mt-6">
          <ListingGrid listings={featured} />
        </div>
      </section>

      <section className="container-page pb-20">
        <div className="flex flex-col items-center gap-4 rounded-3xl bg-brand-900 px-6 py-12 text-center text-white sm:px-16">
          <h2 className="text-2xl font-bold">Have a business to list?</h2>
          <p className="max-w-lg text-brand-100">
            Join thousands of hotels, salons, rental agencies and carriers already growing with Zhaan.
          </p>
          <Link
            href="/contact"
            className="focus-ring mt-2 inline-flex h-11 items-center justify-center rounded-xl bg-white px-6 text-sm font-semibold text-brand-900 transition-colors hover:bg-brand-50"
          >
            Get in touch
          </Link>
        </div>
      </section>
    </div>
  );
}
