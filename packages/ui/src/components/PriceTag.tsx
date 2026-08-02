import { cn } from '../lib/cn';

export interface PriceTagProps {
  amount: number;
  currency?: string;
  suffix?: string;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const SIZE_CLASSES = {
  sm: 'text-base',
  md: 'text-xl',
  lg: 'text-2xl',
};

export function PriceTag({ amount, currency = 'USD', suffix, size = 'md', className }: PriceTagProps) {
  const formatted = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
    maximumFractionDigits: 0,
  }).format(amount);

  return (
    <span className={cn('font-bold text-ink-900', SIZE_CLASSES[size], className)}>
      {formatted}
      {suffix && <span className="ml-1 text-sm font-normal text-ink-500">{suffix}</span>}
    </span>
  );
}
