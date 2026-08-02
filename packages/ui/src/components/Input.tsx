import { forwardRef, type InputHTMLAttributes } from 'react';
import { cn } from '../lib/cn';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  hint?: string;
  leadingIcon?: React.ReactNode;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  { className, label, error, hint, leadingIcon, id, ...props },
  ref,
) {
  const inputId = id ?? props.name;

  return (
    <label className="block" htmlFor={inputId}>
      {label && <span className="mb-1.5 block text-sm font-medium text-ink-800">{label}</span>}
      <span className="relative flex items-center">
        {leadingIcon && <span className="pointer-events-none absolute left-3.5 text-ink-400">{leadingIcon}</span>}
        <input
          ref={ref}
          id={inputId}
          className={cn(
            'focus-ring h-11 w-full rounded-xl border border-ink-300 bg-white px-3.5 text-sm text-ink-900 placeholder:text-ink-400 transition-colors hover:border-ink-400',
            leadingIcon && 'pl-10',
            error && 'border-rose-400 focus-visible:ring-rose-500',
            className,
          )}
          {...props}
        />
      </span>
      {error ? (
        <span className="mt-1.5 block text-xs font-medium text-rose-600">{error}</span>
      ) : hint ? (
        <span className="mt-1.5 block text-xs text-ink-500">{hint}</span>
      ) : null}
    </label>
  );
});
