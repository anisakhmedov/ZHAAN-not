import { cn } from '../lib/cn';

export interface RatingProps {
  value: number;
  reviewCount?: number;
  size?: 'sm' | 'md';
  className?: string;
}

export function Rating({ value, reviewCount, size = 'sm', className }: RatingProps) {
  return (
    <span className={cn('inline-flex items-center gap-1', className)}>
      <svg
        className={cn('text-amber-500', size === 'sm' ? 'h-4 w-4' : 'h-5 w-5')}
        viewBox="0 0 20 20"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M10 1.5l2.6 5.6 6.1.7-4.5 4.2 1.2 6-5.4-3-5.4 3 1.2-6-4.5-4.2 6.1-.7L10 1.5z" />
      </svg>
      <span className={cn('font-semibold text-ink-900', size === 'sm' ? 'text-sm' : 'text-base')}>
        {value.toFixed(1)}
      </span>
      {typeof reviewCount === 'number' && (
        <span className="text-sm text-ink-500">({reviewCount.toLocaleString()})</span>
      )}
    </span>
  );
}
