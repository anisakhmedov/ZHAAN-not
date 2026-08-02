import Link from 'next/link';
import { Badge, Card, PriceTag } from '@zhaan/ui';
import { CalendarIcon, MapPinIcon } from '@/components/icons';
import { getCategory } from '@/lib/categories';
import { getBookingsWithListing, type BookingStatus } from '@/lib/mock-bookings';

const STATUS_VARIANT: Record<BookingStatus, 'brand' | 'success' | 'danger'> = {
  upcoming: 'brand',
  completed: 'success',
  cancelled: 'danger',
};

const STATUS_LABEL: Record<BookingStatus, string> = {
  upcoming: 'Upcoming',
  completed: 'Completed',
  cancelled: 'Cancelled',
};

export default function AccountBookingsPage() {
  const bookings = getBookingsWithListing();

  return (
    <div className="space-y-4">
      {bookings.map(({ booking, listing }) => {
        const meta = getCategory(listing.category);
        return (
          <Card key={booking.id} padding="sm" className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <div className={`h-20 w-full shrink-0 rounded-xl bg-gradient-to-br sm:w-28 ${listing.gradient}`} />
            <div className="min-w-0 flex-1">
              <div className="flex flex-wrap items-center gap-2">
                {meta && (
                  <Badge variant={listing.category}>
                    <meta.icon className="h-3.5 w-3.5" />
                    {meta.label}
                  </Badge>
                )}
                <Badge variant={STATUS_VARIANT[booking.status]}>{STATUS_LABEL[booking.status]}</Badge>
              </div>
              <p className="mt-1.5 truncate font-semibold text-ink-900">{listing.title}</p>
              <p className="flex items-center gap-1.5 text-sm text-ink-500">
                <MapPinIcon className="h-3.5 w-3.5" />
                {listing.location}
              </p>
              <p className="mt-1 flex items-center gap-1.5 text-sm text-ink-500">
                <CalendarIcon className="h-3.5 w-3.5" />
                {booking.startDate}
                {booking.endDate ? ` – ${booking.endDate}` : ''}
              </p>
            </div>
            <div className="flex items-center justify-between gap-4 sm:flex-col sm:items-end">
              <PriceTag amount={booking.total} size="sm" />
              <Link href={`/${listing.category}/${listing.id}`} className="focus-ring text-sm font-medium text-brand-700 hover:text-brand-800">
                View details
              </Link>
            </div>
          </Card>
        );
      })}
    </div>
  );
}
