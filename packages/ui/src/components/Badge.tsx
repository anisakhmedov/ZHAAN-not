import type { HTMLAttributes } from 'react';

// Used for booking category tags (Hotel, Salon, Rental, Flight, Train) and status labels
export function Badge(props: HTMLAttributes<HTMLSpanElement>) {
  return <span {...props} />;
}
