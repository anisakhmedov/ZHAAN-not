import Link from 'next/link';

export function Logo({ className }: { className?: string }) {
  return (
    <Link href="/" className={`flex items-center gap-2 ${className ?? ''}`}>
      <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-brand-600 text-white shadow-soft">
        <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 12l6-8 4 5 3-3 3 6" />
          <path d="M4 18h16" />
        </svg>
      </span>
      <span className="text-lg font-bold tracking-tight text-ink-900">Zhaan</span>
    </Link>
  );
}
