export interface Hotel {
  id: string;
  providerId: string;
  name: string;
  location: string;
  pricePerNight: number;
  rooms: number;
}

export interface Salon {
  id: string;
  providerId: string;
  name: string;
  location: string;
  services: string[];
}

export interface Rental {
  id: string;
  providerId: string;
  name: string;
  location: string;
  pricePerDay: number;
}

export interface Flight {
  id: string;
  providerId: string;
  origin: string;
  destination: string;
  departureTime: string;
  arrivalTime: string;
  price: number;
}

export interface Train {
  id: string;
  providerId: string;
  origin: string;
  destination: string;
  departureTime: string;
  arrivalTime: string;
  price: number;
}
