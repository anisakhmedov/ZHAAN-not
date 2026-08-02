'use client';

import Link from 'next/link';
import { Badge, Card, PriceTag, Rating } from '@zhaan/ui';
import { HeartIcon } from '@/components/icons';
import type { Listing } from '@/lib/mock-listings';
import { getCategory } from '@/lib/categories';

export function ListingCard({ listing }: { listing: Listing }) {
  const category = getCategory(listing.category);
  const Icon = category?.icon;

  return (
    <Link href={`/${listing.category}/${listing.id}`} className="group block">
      <Card padding="none" hoverable className="overflow-hidden">
        <div className={`relative flex h-44 items-end bg-gradient-to-br p-4 ${listing.gradient}`}>
          <button
            type="button"
            aria-label="Save to favorites"
            className="focus-ring absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-ink-700 backdrop-blur transition-colors hover:text-rose-500"
            onClick={(e) => e.preventDefault()}
          >
            <HeartIcon className="h-4 w-4" />
          </button>
          <Badge variant={listing.category} className="bg-white/90">
            {Icon && <Icon className="h-3.5 w-3.5" />}
            {category?.label}
          </Badge>
        </div>
        <div className="space-y-2 p-4">
          <div className="flex items-start justify-between gap-2">
            <h3 className="line-clamp-1 font-semibold text-ink-900 group-hover:text-brand-700">{listing.title}</h3>
          </div>
          <p className="text-sm text-ink-500">{listing.location}</p>
          <div className="flex items-center justify-between pt-1">
            <Rating value={listing.rating} reviewCount={listing.reviewCount} />
            <PriceTag amount={listing.price} suffix={listing.priceSuffix} size="sm" />
          </div>
        </div>
      </Card>
    </Link>
  );
}
