import type { BookingCategory } from './booking-category';

export type BookingStatus = 'pending' | 'confirmed' | 'cancelled' | 'completed';

export interface Booking {
  id: string;
  userId: string;
  providerId: string;
  listingId: string;
  category: BookingCategory;
  status: BookingStatus;
  startDate: string;
  endDate?: string;
  totalPrice: number;
  currency: string;
  createdAt: string;
}
