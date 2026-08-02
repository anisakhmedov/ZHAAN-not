import type { SVGProps } from 'react';

export type IconProps = SVGProps<SVGSVGElement>;

function base(props: IconProps) {
  return { fill: 'none', stroke: 'currentColor', strokeWidth: 1.75, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const, viewBox: '0 0 24 24', ...props };
}

export function HotelIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M3 21V8l9-5 9 5v13" />
      <path d="M3 21h18" />
      <path d="M9 21v-6a3 3 0 016 0v6" />
    </svg>
  );
}

export function SalonIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <circle cx="6" cy="6" r="3" />
      <circle cx="6" cy="18" r="3" />
      <path d="M20 4L8.5 15.5" />
      <path d="M14.5 14.5L20 20" />
      <path d="M8.5 8.5L4 4" />
    </svg>
  );
}

export function RentalIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M3 13l1.6-4.8A2 2 0 016.5 7h11a2 2 0 011.9 1.2L21 13" />
      <path d="M3 13h18v5a1 1 0 01-1 1h-1a1 1 0 01-1-1v-1H6v1a1 1 0 01-1 1H4a1 1 0 01-1-1v-5z" />
      <circle cx="7.5" cy="16" r="1.25" />
      <circle cx="16.5" cy="16" r="1.25" />
    </svg>
  );
}

export function FlightIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M10.5 3.5L7 10l-4.5 1.3a.6.6 0 000 1.15L7 14l3.5 6.5.9-.3-1-6.6 4-1.1 4.7 3.3.9-.5-2.6-5.1 3-2.9a1.6 1.6 0 00-2-2.5l-3.4 2.3-5.3-3.9-.7.5z" />
    </svg>
  );
}

export function TrainIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <rect x="5" y="3" width="14" height="13" rx="4" />
      <path d="M5 11h14" />
      <circle cx="8.5" cy="13.5" r="0.6" fill="currentColor" stroke="none" />
      <circle cx="15.5" cy="13.5" r="0.6" fill="currentColor" stroke="none" />
      <path d="M8 20l-2 2M16 20l2 2" />
    </svg>
  );
}

export function SearchIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <circle cx="11" cy="11" r="7" />
      <path d="M21 21l-4.3-4.3" />
    </svg>
  );
}

export function MapPinIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 1116 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

export function CalendarIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <rect x="3" y="5" width="18" height="16" rx="2" />
      <path d="M3 10h18M8 3v4M16 3v4" />
    </svg>
  );
}

export function UserIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <circle cx="12" cy="8" r="4" />
      <path d="M4 21c1.5-4.5 5-6 8-6s6.5 1.5 8 6" />
    </svg>
  );
}

export function MenuIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
}

export function CloseIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M6 6l12 12M18 6L6 18" />
    </svg>
  );
}

export function ChevronRightIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M9 6l6 6-6 6" />
    </svg>
  );
}

export function StarIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" {...props}>
      <path d="M10 1.5l2.6 5.6 6.1.7-4.5 4.2 1.2 6-5.4-3-5.4 3 1.2-6-4.5-4.2 6.1-.7L10 1.5z" />
    </svg>
  );
}

export function HeartIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M12 20.5s-7.5-4.6-9.8-9.3C.6 7.6 2.3 4 6 4c2.1 0 3.6 1.2 6 3.6C14.4 5.2 15.9 4 18 4c3.7 0 5.4 3.6 3.8 7.2C19.5 15.9 12 20.5 12 20.5z" />
    </svg>
  );
}

export function CheckIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M5 13l4 4L19 7" />
    </svg>
  );
}

export function ArrowLeftIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M19 12H5M11 18l-6-6 6-6" />
    </svg>
  );
}

export const CATEGORY_ICONS = {
  hotels: HotelIcon,
  salons: SalonIcon,
  rentals: RentalIcon,
  flights: FlightIcon,
  trains: TrainIcon,
} as const;
