import { Badge, Card, PriceTag } from '@zhaan/ui';
import { MapPinIcon } from '@/components/icons';
import { getCategory } from '@/lib/categories';
import type { Listing } from '@/lib/mock-listings';

export function BookingSummary({ listing, nights = 1 }: { listing: Listing; nights?: number }) {
  const meta = getCategory(listing.category);
  const serviceFee = Math.round(listing.price * 0.08);
  const total = listing.price * nights + serviceFee;

  return (
    <Card className="space-y-5">
      <div className="flex gap-3">
        <div className={`h-16 w-16 shrink-0 rounded-xl bg-gradient-to-br ${listing.gradient}`} />
        <div className="min-w-0">
          {meta && (
            <Badge variant={listing.category} className="mb-1">
              <meta.icon className="h-3.5 w-3.5" />
              {meta.label}
            </Badge>
          )}
          <p className="truncate font-semibold text-ink-900">{listing.title}</p>
          <p className="flex items-center gap-1 truncate text-sm text-ink-500">
            <MapPinIcon className="h-3.5 w-3.5 shrink-0" />
            {listing.location}
          </p>
        </div>
      </div>

      <div className="space-y-2.5 border-t border-ink-200 pt-4 text-sm">
        <div className="flex justify-between text-ink-600">
          <span>
            {listing.priceSuffix ? `Base price × ${nights}` : 'Base price'}
          </span>
          <span>${listing.price * nights}</span>
        </div>
        <div className="flex justify-between text-ink-600">
          <span>Service fee</span>
          <span>${serviceFee}</span>
        </div>
      </div>

      <div className="flex items-center justify-between border-t border-ink-200 pt-4">
        <span className="font-semibold text-ink-900">Total</span>
        <PriceTag amount={total} size="lg" />
      </div>
    </Card>
  );
}
