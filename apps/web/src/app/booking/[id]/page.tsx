import Link from 'next/link';
import { Input } from '@zhaan/ui';
import { BookingSummary } from '@/components/booking/booking-summary';
import { ArrowLeftIcon, CalendarIcon } from '@/components/icons';
import { getListingById, LISTINGS } from '@/lib/mock-listings';

export default function BookingPage({ params }: { params: { id: string } }) {
  const listing = getListingById(params.id) ?? LISTINGS[0];

  return (
    <div className="container-page py-8">
      <Link href={`/${listing.category}/${listing.id}`} className="focus-ring inline-flex items-center gap-1.5 text-sm font-medium text-ink-600 hover:text-brand-700">
        <ArrowLeftIcon className="h-4 w-4" />
        Back to listing
      </Link>

      <div className="mt-6 grid grid-cols-1 gap-8 lg:grid-cols-[1fr_360px]">
        <div>
          <h1 className="text-2xl font-bold text-ink-900">Confirm your booking</h1>

          <div className="mt-6 space-y-6 rounded-2xl border border-ink-200 p-6">
            <div>
              <h2 className="text-base font-semibold text-ink-900">Trip details</h2>
              <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
                <Input label="Start date" type="date" leadingIcon={<CalendarIcon className="h-4 w-4" />} />
                <Input label="End date" type="date" leadingIcon={<CalendarIcon className="h-4 w-4" />} />
              </div>
              <div className="mt-4">
                <label className="block text-sm font-medium text-ink-800">
                  Guests
                  <select className="focus-ring mt-1.5 h-11 w-full rounded-xl border border-ink-300 px-3.5 text-sm text-ink-900 sm:w-48">
                    <option>1 guest</option>
                    <option>2 guests</option>
                    <option>3 guests</option>
                    <option>4+ guests</option>
                  </select>
                </label>
              </div>
            </div>

            <div className="border-t border-ink-200 pt-6">
              <h2 className="text-base font-semibold text-ink-900">Contact information</h2>
              <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
                <Input label="Full name" placeholder="Jane Doe" name="fullName" />
                <Input label="Email" type="email" placeholder="jane@example.com" name="email" />
                <Input label="Phone" type="tel" placeholder="+1 555 123 4567" name="phone" className="sm:col-span-2" />
              </div>
            </div>

            <div className="border-t border-ink-200 pt-6">
              <h2 className="text-base font-semibold text-ink-900">Notes (optional)</h2>
              <textarea
                rows={3}
                placeholder="Any special requests..."
                className="focus-ring mt-3 w-full rounded-xl border border-ink-300 px-3.5 py-2.5 text-sm text-ink-900 placeholder:text-ink-400"
              />
            </div>
          </div>
        </div>

        <div className="space-y-4 lg:sticky lg:top-24 lg:self-start">
          <BookingSummary listing={listing} />
          <Link
            href="/checkout"
            className="focus-ring flex h-12 w-full items-center justify-center rounded-xl bg-brand-600 px-6 text-base font-medium text-white shadow-soft transition-colors hover:bg-brand-700"
          >
            Continue to checkout
          </Link>
        </div>
      </div>
    </div>
  );
}
