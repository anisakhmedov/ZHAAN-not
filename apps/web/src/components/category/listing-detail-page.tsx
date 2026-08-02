import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Badge, Card, PriceTag, Rating } from '@zhaan/ui';
import { ArrowLeftIcon, CalendarIcon, CheckIcon, HeartIcon, MapPinIcon } from '@/components/icons';
import { getCategory, type CategorySlug } from '@/lib/categories';
import { getListingById } from '@/lib/mock-listings';

const AMENITIES = ['Free cancellation', 'Verified provider', '24/7 support', 'Instant confirmation'];

export function ListingDetailPage({ category, id }: { category: CategorySlug; id: string }) {
  const listing = getListingById(id) ?? { id, category, title: 'Sample listing', location: 'Location unavailable', price: 120, rating: 4.7, reviewCount: 128, gradient: 'from-brand-400 to-brand-700' } as const;
  const meta = getCategory(category);
  if (!meta) notFound();

  return (
    <div className="container-page py-6">
      <Link href={`/${category}`} className="focus-ring inline-flex items-center gap-1.5 text-sm font-medium text-ink-600 hover:text-brand-700">
        <ArrowLeftIcon className="h-4 w-4" />
        Back to {meta.label}
      </Link>

      <div className={`relative mt-4 h-64 overflow-hidden rounded-3xl bg-gradient-to-br sm:h-80 ${listing.gradient}`}>
        <button
          type="button"
          aria-label="Save to favorites"
          className="focus-ring absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-ink-700 backdrop-blur hover:text-rose-500"
        >
          <HeartIcon className="h-5 w-5" />
        </button>
        <div className="absolute bottom-4 left-4">
          <Badge variant={category} className="bg-white/90">
            <meta.icon className="h-3.5 w-3.5" />
            {meta.label}
          </Badge>
        </div>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-8 lg:grid-cols-[1fr_360px]">
        <div>
          <div className="flex flex-wrap items-start justify-between gap-3">
            <div>
              <h1 className="text-2xl font-bold text-ink-900 sm:text-3xl">{listing.title}</h1>
              <p className="mt-1.5 flex items-center gap-1.5 text-ink-500">
                <MapPinIcon className="h-4 w-4" />
                {listing.location}
              </p>
            </div>
            <Rating value={listing.rating} reviewCount={listing.reviewCount} size="md" />
          </div>

          <div className="mt-8 border-t border-ink-200 pt-8">
            <h2 className="text-lg font-semibold text-ink-900">About this {category.slice(0, -1)}</h2>
            <p className="mt-3 leading-relaxed text-ink-600">
              A carefully vetted listing on Zhaan, offering a smooth booking experience from search to
              confirmation. Availability, exact pricing and full details are confirmed on the next step.
            </p>
          </div>

          <div className="mt-8 border-t border-ink-200 pt-8">
            <h2 className="text-lg font-semibold text-ink-900">What&apos;s included</h2>
            <ul className="mt-3 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
              {AMENITIES.map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-ink-600">
                  <CheckIcon className="h-4 w-4 text-brand-600" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-8 border-t border-ink-200 pt-8">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold text-ink-900">Reviews</h2>
              <Rating value={listing.rating} reviewCount={listing.reviewCount} />
            </div>
            <p className="mt-3 text-sm text-ink-500">Reviews will appear here once bookings are completed.</p>
          </div>
        </div>

        <div className="lg:sticky lg:top-24 lg:self-start">
          <Card className="space-y-4">
            <div className="flex items-baseline justify-between">
              <PriceTag amount={listing.price} suffix={'priceSuffix' in listing ? listing.priceSuffix : undefined} size="lg" />
            </div>

            <label className="block text-sm font-medium text-ink-800">
              Date
              <span className="focus-ring mt-1.5 flex h-11 items-center gap-2 rounded-xl border border-ink-300 px-3.5 text-sm text-ink-500">
                <CalendarIcon className="h-4 w-4" />
                <input type="date" className="w-full bg-transparent outline-none" />
              </span>
            </label>

            <label className="block text-sm font-medium text-ink-800">
              Guests
              <select className="focus-ring mt-1.5 h-11 w-full rounded-xl border border-ink-300 px-3.5 text-sm text-ink-900">
                <option>1 guest</option>
                <option>2 guests</option>
                <option>3 guests</option>
                <option>4+ guests</option>
              </select>
            </label>

            <Link
              href={`/booking/${listing.id}`}
              className="focus-ring mt-2 flex h-12 w-full items-center justify-center rounded-xl bg-brand-600 px-6 text-base font-medium text-white shadow-soft transition-colors hover:bg-brand-700"
            >
              Book now
            </Link>

            <p className="text-center text-xs text-ink-400">You won&apos;t be charged yet</p>
          </Card>
        </div>
      </div>
    </div>
  );
}
