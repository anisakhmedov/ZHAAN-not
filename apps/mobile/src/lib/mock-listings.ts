import type { CategorySlug } from './categories';

export interface Listing {
  id: string;
  category: CategorySlug;
  title: string;
  location: string;
  price: number;
  priceSuffix?: string;
  rating: number;
  reviewCount: number;
  gradient: [string, string];
}

export const LISTINGS: Listing[] = [
  { id: 'h1', category: 'hotels', title: 'The Meridian Grand', location: 'Lisbon, Portugal', price: 189, priceSuffix: '/ night', rating: 4.8, reviewCount: 1204, gradient: ['#46bcae', '#1c6862'] },
  { id: 'h2', category: 'hotels', title: 'Azure Bay Resort', location: 'Santorini, Greece', price: 342, priceSuffix: '/ night', rating: 4.9, reviewCount: 2310, gradient: ['#38bdf8', '#4338ca'] },
  { id: 'h3', category: 'hotels', title: 'Kyoto Garden Ryokan', location: 'Kyoto, Japan', price: 210, priceSuffix: '/ night', rating: 4.9, reviewCount: 941, gradient: ['#a78bfa', '#c026d3'] },

  { id: 's1', category: 'salons', title: 'Lumière Hair Studio', location: 'Paris, France', price: 65, priceSuffix: '/ session', rating: 4.7, reviewCount: 412, gradient: ['#34d399', '#0f766e'] },
  { id: 's2', category: 'salons', title: 'Velvet & Co. Spa', location: 'New York, USA', price: 120, priceSuffix: '/ session', rating: 4.8, reviewCount: 890, gradient: ['#fb7185', '#ea580c'] },

  { id: 'r1', category: 'rentals', title: 'Classic Mini Cooper', location: 'London, UK', price: 54, priceSuffix: '/ day', rating: 4.9, reviewCount: 178, gradient: ['#fbbf24', '#dc2626'] },
  { id: 'r2', category: 'rentals', title: 'Tesla Model 3', location: 'Los Angeles, USA', price: 89, priceSuffix: '/ day', rating: 4.9, reviewCount: 401, gradient: ['#fb7185', '#ea580c'] },

  { id: 'f1', category: 'flights', title: 'Nonstop to Tokyo Haneda', location: 'JFK → HND', price: 612, rating: 4.4, reviewCount: 3021, gradient: ['#46bcae', '#1c6862'] },
  { id: 'f2', category: 'flights', title: 'Economy to Dubai', location: 'LHR → DXB', price: 289, rating: 4.3, reviewCount: 2117, gradient: ['#38bdf8', '#4338ca'] },

  { id: 't1', category: 'trains', title: 'High-speed to Kyoto', location: 'Tokyo → Kyoto', price: 98, rating: 4.8, reviewCount: 1502, gradient: ['#a78bfa', '#c026d3'] },
  { id: 't2', category: 'trains', title: 'Eurostar to Paris', location: 'London → Paris', price: 74, rating: 4.6, reviewCount: 2894, gradient: ['#34d399', '#0f766e'] },
];

export function getListingsByCategory(category: CategorySlug) {
  return LISTINGS.filter((l) => l.category === category);
}

export function getFeaturedListings(limit = 6) {
  return LISTINGS.filter((l) => l.rating >= 4.7).slice(0, limit);
}

export function getListingById(id: string) {
  return LISTINGS.find((l) => l.id === id);
}
