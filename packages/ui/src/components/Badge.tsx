import type { HTMLAttributes } from 'react';
import { cn } from '../lib/cn';

export type BadgeVariant =
  | 'neutral'
  | 'brand'
  | 'success'
  | 'warning'
  | 'danger'
  | 'hotels'
  | 'salons'
  | 'rentals'
  | 'flights'
  | 'trains';

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
}

const VARIANT_CLASSES: Record<BadgeVariant, string> = {
  neutral: 'bg-ink-100 text-ink-700',
  brand: 'bg-brand-100 text-brand-800',
  success: 'bg-emerald-100 text-emerald-800',
  warning: 'bg-amber-100 text-amber-800',
  danger: 'bg-rose-100 text-rose-800',
  hotels: 'bg-sky-100 text-sky-800',
  salons: 'bg-pink-100 text-pink-800',
  rentals: 'bg-amber-100 text-amber-800',
  flights: 'bg-indigo-100 text-indigo-800',
  trains: 'bg-violet-100 text-violet-800',
};

export function Badge({ className, variant = 'neutral', ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-medium',
        VARIANT_CLASSES[variant],
        className,
      )}
      {...props}
    />
  );
}
