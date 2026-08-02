import { LISTINGS } from './mock-listings';

export type BookingStatus = 'upcoming' | 'completed' | 'cancelled';

export interface MockBooking {
  id: string;
  listingId: string;
  status: BookingStatus;
  startDate: string;
  endDate?: string;
  total: number;
}

export const MOCK_BOOKINGS: MockBooking[] = [
  { id: 'bk-1', listingId: 'h2', status: 'upcoming', startDate: '2026-09-14', endDate: '2026-09-18', total: 1368 },
  { id: 'bk-2', listingId: 'f1', status: 'upcoming', startDate: '2026-10-02', total: 612 },
  { id: 'bk-3', listingId: 's2', status: 'completed', startDate: '2026-06-20', total: 120 },
  { id: 'bk-4', listingId: 'r1', status: 'completed', startDate: '2026-05-11', endDate: '2026-05-13', total: 108 },
  { id: 'bk-5', listingId: 't2', status: 'cancelled', startDate: '2026-04-02', total: 74 },
];

export function getBookingsWithListing() {
  return MOCK_BOOKINGS.map((booking) => ({
    booking,
    listing: LISTINGS.find((l) => l.id === booking.listingId)!,
  })).filter((b) => b.listing);
}
