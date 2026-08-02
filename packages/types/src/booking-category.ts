export const BOOKING_CATEGORIES = ['hotels', 'salons', 'rentals', 'flights', 'trains'] as const;

export type BookingCategory = (typeof BOOKING_CATEGORIES)[number];
