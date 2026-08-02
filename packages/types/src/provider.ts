import type { BookingCategory } from './booking-category';

export interface Provider {
  id: string;
  ownerId: string;
  name: string;
  categories: BookingCategory[];
  description?: string;
  location?: string;
  createdAt: string;
}
