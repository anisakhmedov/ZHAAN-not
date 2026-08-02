'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button, Input } from '@zhaan/ui';
import { CalendarIcon, MapPinIcon, SearchIcon } from '@/components/icons';
import { CATEGORIES, type CategorySlug } from '@/lib/categories';

export function SearchBar() {
  const router = useRouter();
  const [category, setCategory] = useState<CategorySlug>('hotels');
  const [location, setLocation] = useState('');
  const [destination, setDestination] = useState('');
  const [date, setDate] = useState('');

  const isRoute = category === 'flights' || category === 'trains';

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const params = new URLSearchParams({ category });
    if (location) params.set('location', location);
    if (destination) params.set('destination', destination);
    if (date) params.set('date', date);
    router.push(`/search?${params.toString()}`);
  }

  return (
    <div className="mx-auto w-full max-w-3xl rounded-3xl border border-ink-200 bg-white p-2 shadow-popover sm:p-3">
      <div className="scrollbar-thin flex gap-1 overflow-x-auto px-1 pb-2">
        {CATEGORIES.map((c) => (
          <button
            key={c.slug}
            type="button"
            onClick={() => setCategory(c.slug)}
            className={`focus-ring flex shrink-0 items-center gap-1.5 rounded-full px-3.5 py-1.5 text-sm font-medium transition-colors ${
              category === c.slug ? 'bg-brand-600 text-white' : 'text-ink-500 hover:bg-ink-100'
            }`}
          >
            <c.icon className="h-4 w-4" />
            {c.label}
          </button>
        ))}
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-2 sm:flex-row sm:items-end">
        <div className="flex-1">
          <Input
            leadingIcon={<MapPinIcon className="h-4 w-4" />}
            placeholder={isRoute ? 'From' : 'Where to?'}
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="border-none bg-ink-50 hover:bg-ink-100 focus-visible:bg-white"
          />
        </div>
        {isRoute && (
          <div className="flex-1">
            <Input
              leadingIcon={<MapPinIcon className="h-4 w-4" />}
              placeholder="To"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              className="border-none bg-ink-50 hover:bg-ink-100 focus-visible:bg-white"
            />
          </div>
        )}
        <div className="flex-1">
          <Input
            type="date"
            leadingIcon={<CalendarIcon className="h-4 w-4" />}
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="border-none bg-ink-50 hover:bg-ink-100 focus-visible:bg-white"
          />
        </div>
        <Button type="submit" size="lg" className="sm:w-auto">
          <SearchIcon className="h-4 w-4" />
          Search
        </Button>
      </form>
    </div>
  );
}
