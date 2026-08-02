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
  gradient: string;
}

const GRADIENTS = [
  'from-brand-400 to-brand-700',
  'from-sky-400 to-indigo-600',
  'from-amber-300 to-rose-500',
  'from-violet-400 to-fuchsia-600',
  'from-emerald-400 to-teal-700',
  'from-rose-400 to-orange-500',
];

function gradientFor(seed: number) {
  return GRADIENTS[seed % GRADIENTS.length];
}

export const LISTINGS: Listing[] = [
  { id: 'h1', category: 'hotels', title: 'The Meridian Grand', location: 'Lisbon, Portugal', price: 189, priceSuffix: '/ night', rating: 4.8, reviewCount: 1204, gradient: gradientFor(0) },
  { id: 'h2', category: 'hotels', title: 'Azure Bay Resort', location: 'Santorini, Greece', price: 342, priceSuffix: '/ night', rating: 4.9, reviewCount: 2310, gradient: gradientFor(1) },
  { id: 'h3', category: 'hotels', title: 'Northlight Boutique Hotel', location: 'Reykjavik, Iceland', price: 156, priceSuffix: '/ night', rating: 4.6, reviewCount: 587, gradient: gradientFor(2) },
  { id: 'h4', category: 'hotels', title: 'Kyoto Garden Ryokan', location: 'Kyoto, Japan', price: 210, priceSuffix: '/ night', rating: 4.9, reviewCount: 941, gradient: gradientFor(3) },

  { id: 's1', category: 'salons', title: 'Lumière Hair Studio', location: 'Paris, France', price: 65, priceSuffix: '/ session', rating: 4.7, reviewCount: 412, gradient: gradientFor(4) },
  { id: 's2', category: 'salons', title: 'Velvet & Co. Spa', location: 'New York, USA', price: 120, priceSuffix: '/ session', rating: 4.8, reviewCount: 890, gradient: gradientFor(5) },
  { id: 's3', category: 'salons', title: 'Sakura Nail Bar', location: 'Seoul, South Korea', price: 40, priceSuffix: '/ session', rating: 4.6, reviewCount: 233, gradient: gradientFor(0) },
  { id: 's4', category: 'salons', title: 'Bloom Wellness Lounge', location: 'Barcelona, Spain', price: 78, priceSuffix: '/ session', rating: 4.7, reviewCount: 356, gradient: gradientFor(1) },

  { id: 'r1', category: 'rentals', title: 'Classic Mini Cooper', location: 'London, UK', price: 54, priceSuffix: '/ day', rating: 4.9, reviewCount: 178, gradient: gradientFor(2) },
  { id: 'r2', category: 'rentals', title: 'Overland 4x4 Camper', location: 'Cape Town, South Africa', price: 96, priceSuffix: '/ day', rating: 4.8, reviewCount: 264, gradient: gradientFor(3) },
  { id: 'r3', category: 'rentals', title: 'City Electric Scooter', location: 'Amsterdam, Netherlands', price: 18, priceSuffix: '/ day', rating: 4.5, reviewCount: 512, gradient: gradientFor(4) },
  { id: 'r4', category: 'rentals', title: 'Tesla Model 3', location: 'Los Angeles, USA', price: 89, priceSuffix: '/ day', rating: 4.9, reviewCount: 401, gradient: gradientFor(5) },

  { id: 'f1', category: 'flights', title: 'Nonstop to Tokyo Haneda', location: 'JFK → HND', price: 612, rating: 4.4, reviewCount: 3021, gradient: gradientFor(0) },
  { id: 'f2', category: 'flights', title: 'Economy to Dubai', location: 'LHR → DXB', price: 289, rating: 4.3, reviewCount: 2117, gradient: gradientFor(1) },
  { id: 'f3', category: 'flights', title: 'Direct to São Paulo', location: 'MAD → GRU', price: 445, rating: 4.5, reviewCount: 986, gradient: gradientFor(2) },
  { id: 'f4', category: 'flights', title: 'Business to Singapore', location: 'SYD → SIN', price: 1180, rating: 4.7, reviewCount: 654, gradient: gradientFor(3) },

  { id: 't1', category: 'trains', title: 'High-speed to Kyoto', location: 'Tokyo → Kyoto', price: 98, rating: 4.8, reviewCount: 1502, gradient: gradientFor(4) },
  { id: 't2', category: 'trains', title: 'Eurostar to Paris', location: 'London → Paris', price: 74, rating: 4.6, reviewCount: 2894, gradient: gradientFor(5) },
  { id: 't3', category: 'trains', title: 'Alpine Scenic Route', location: 'Zurich → Milan', price: 52, rating: 4.9, reviewCount: 721, gradient: gradientFor(0) },
  { id: 't4', category: 'trains', title: 'Coastal Express', location: 'Barcelona → Valencia', price: 39, rating: 4.5, reviewCount: 468, gradient: gradientFor(1) },
];

export function getListingsByCategory(category: CategorySlug) {
  return LISTINGS.filter((l) => l.category === category);
}

export function getFeaturedListings(limit = 8) {
  return LISTINGS.filter((l) => l.rating >= 4.7).slice(0, limit);
}

export function getListingById(id: string) {
  return LISTINGS.find((l) => l.id === id);
}
