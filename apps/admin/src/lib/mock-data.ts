export type BookingStatus = 'confirmed' | 'pending' | 'cancelled' | 'completed';

export interface MockBooking {
  id: string;
  customer: string;
  category: 'hotels' | 'salons' | 'rentals' | 'flights' | 'trains';
  listing: string;
  date: string;
  amount: number;
  status: BookingStatus;
}

export const MOCK_BOOKINGS: MockBooking[] = [
  { id: 'BK-1042', customer: 'Jane Doe', category: 'hotels', listing: 'The Meridian Grand', date: '2026-09-14', amount: 756, status: 'confirmed' },
  { id: 'BK-1041', customer: 'Marco Silva', category: 'flights', listing: 'Nonstop to Tokyo Haneda', date: '2026-09-12', amount: 612, status: 'pending' },
  { id: 'BK-1040', customer: 'Amara K.', category: 'salons', listing: 'Velvet & Co. Spa', date: '2026-09-11', amount: 120, status: 'completed' },
  { id: 'BK-1039', customer: 'Liu Wei', category: 'trains', listing: 'High-speed to Kyoto', date: '2026-09-10', amount: 98, status: 'completed' },
  { id: 'BK-1038', customer: 'Sofia Rossi', category: 'rentals', listing: 'Tesla Model 3', date: '2026-09-09', amount: 267, status: 'cancelled' },
  { id: 'BK-1037', customer: 'Noah Becker', category: 'hotels', listing: 'Azure Bay Resort', date: '2026-09-08', amount: 1026, status: 'confirmed' },
];

export interface MockProvider {
  id: string;
  name: string;
  categories: MockBooking['category'][];
  location: string;
  listings: number;
  rating: number;
  status: 'active' | 'pending' | 'suspended';
}

export const MOCK_PROVIDERS: MockProvider[] = [
  { id: 'PR-01', name: 'Meridian Hospitality Group', categories: ['hotels'], location: 'Lisbon, Portugal', listings: 12, rating: 4.8, status: 'active' },
  { id: 'PR-02', name: 'Velvet & Co.', categories: ['salons'], location: 'New York, USA', listings: 4, rating: 4.7, status: 'active' },
  { id: 'PR-03', name: 'DriveShare Rentals', categories: ['rentals'], location: 'Los Angeles, USA', listings: 28, rating: 4.6, status: 'pending' },
  { id: 'PR-04', name: 'SkyLink Partners', categories: ['flights'], location: 'London, UK', listings: 56, rating: 4.4, status: 'active' },
  { id: 'PR-05', name: 'EuroRail Connect', categories: ['trains'], location: 'Zurich, Switzerland', listings: 19, rating: 4.9, status: 'suspended' },
];

export interface MockUser {
  id: string;
  name: string;
  email: string;
  role: 'customer' | 'provider' | 'admin';
  joined: string;
  bookings: number;
}

export const MOCK_USERS: MockUser[] = [
  { id: 'U-001', name: 'Jane Doe', email: 'jane@example.com', role: 'customer', joined: '2024-02-11', bookings: 12 },
  { id: 'U-002', name: 'Marco Silva', email: 'marco@example.com', role: 'customer', joined: '2024-05-03', bookings: 7 },
  { id: 'U-003', name: 'Meridian Hospitality', email: 'ops@meridian.com', role: 'provider', joined: '2023-11-20', bookings: 0 },
  { id: 'U-004', name: 'Alex Morgan', email: 'alex@zhaan.com', role: 'admin', joined: '2023-01-05', bookings: 0 },
  { id: 'U-005', name: 'Sofia Rossi', email: 'sofia@example.com', role: 'customer', joined: '2025-01-17', bookings: 3 },
];

export interface MockPayment {
  id: string;
  bookingId: string;
  customer: string;
  amount: number;
  method: string;
  date: string;
  status: 'succeeded' | 'refunded' | 'failed';
}

export const MOCK_PAYMENTS: MockPayment[] = [
  { id: 'PAY-9001', bookingId: 'BK-1042', customer: 'Jane Doe', amount: 756, method: 'Visa •••• 4242', date: '2026-09-14', status: 'succeeded' },
  { id: 'PAY-9000', bookingId: 'BK-1038', customer: 'Sofia Rossi', amount: 267, method: 'Mastercard •••• 8891', date: '2026-09-09', status: 'refunded' },
  { id: 'PAY-8999', bookingId: 'BK-1037', customer: 'Noah Becker', amount: 1026, method: 'Visa •••• 1187', date: '2026-09-08', status: 'succeeded' },
  { id: 'PAY-8998', bookingId: 'BK-1035', customer: 'Liu Wei', amount: 98, method: 'Amex •••• 3001', date: '2026-09-05', status: 'failed' },
];

export interface MockReview {
  id: string;
  customer: string;
  category: MockBooking['category'];
  listing: string;
  rating: number;
  comment: string;
  date: string;
  status: 'published' | 'pending';
}

export const MOCK_REVIEWS: MockReview[] = [
  { id: 'RV-501', customer: 'Jane Doe', category: 'hotels', listing: 'The Meridian Grand', rating: 5, comment: 'Impeccable service and a beautiful room with a view.', date: '2026-08-20', status: 'published' },
  { id: 'RV-500', customer: 'Amara K.', category: 'salons', listing: 'Velvet & Co. Spa', rating: 4, comment: 'Great experience, would book again.', date: '2026-08-18', status: 'published' },
  { id: 'RV-499', customer: 'Marco Silva', category: 'flights', listing: 'Nonstop to Tokyo Haneda', rating: 3, comment: 'Flight was delayed by an hour.', date: '2026-08-15', status: 'pending' },
];

export const REVENUE_BY_CATEGORY: { category: MockBooking['category']; label: string; amount: number }[] = [
  { category: 'hotels', label: 'Hotels', amount: 482000 },
  { category: 'flights', label: 'Flights', amount: 356000 },
  { category: 'rentals', label: 'Rentals', amount: 158000 },
  { category: 'trains', label: 'Trains', amount: 96000 },
  { category: 'salons', label: 'Salons', amount: 61000 },
];

export function getCategoryListings(category: MockBooking['category']) {
  const seed: Record<MockBooking['category'], { title: string; location: string; price: number }[]> = {
    hotels: [
      { title: 'The Meridian Grand', location: 'Lisbon, Portugal', price: 189 },
      { title: 'Azure Bay Resort', location: 'Santorini, Greece', price: 342 },
      { title: 'Northlight Boutique Hotel', location: 'Reykjavik, Iceland', price: 156 },
    ],
    salons: [
      { title: 'Lumière Hair Studio', location: 'Paris, France', price: 65 },
      { title: 'Velvet & Co. Spa', location: 'New York, USA', price: 120 },
    ],
    rentals: [
      { title: 'Classic Mini Cooper', location: 'London, UK', price: 54 },
      { title: 'Tesla Model 3', location: 'Los Angeles, USA', price: 89 },
    ],
    flights: [
      { title: 'Nonstop to Tokyo Haneda', location: 'JFK → HND', price: 612 },
      { title: 'Economy to Dubai', location: 'LHR → DXB', price: 289 },
    ],
    trains: [
      { title: 'High-speed to Kyoto', location: 'Tokyo → Kyoto', price: 98 },
      { title: 'Eurostar to Paris', location: 'London → Paris', price: 74 },
    ],
  };

  return seed[category].map((item, i) => ({ id: `${category}-${i}`, status: i === 0 ? 'active' : 'active', ...item }));
}
