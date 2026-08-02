'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { CATEGORIES } from '@/lib/categories';

export function CategoryNav({ className }: { className?: string }) {
  const pathname = usePathname();

  return (
    <nav className={`scrollbar-thin flex items-center gap-1.5 overflow-x-auto ${className ?? ''}`}>
      {CATEGORIES.map((category) => {
        const isActive = pathname?.startsWith(`/${category.slug}`);
        const Icon = category.icon;
        return (
          <Link
            key={category.slug}
            href={`/${category.slug}`}
            className={`focus-ring flex shrink-0 items-center gap-1.5 rounded-full px-3.5 py-2 text-sm font-medium transition-colors ${
              isActive ? 'bg-ink-900 text-white' : 'text-ink-600 hover:bg-ink-100'
            }`}
          >
            <Icon className="h-4 w-4" />
            {category.label}
          </Link>
        );
      })}
    </nav>
  );
}
