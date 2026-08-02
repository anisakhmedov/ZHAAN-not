'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Logo } from './logo';
import { CategoryNav } from '@/components/category/category-nav';
import { CloseIcon, MenuIcon } from '@/components/icons';
import { CATEGORIES } from '@/lib/categories';

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-ink-200 bg-white/90 backdrop-blur">
      <div className="container-page flex h-16 items-center justify-between gap-4">
        <Logo />

        <CategoryNav className="hidden lg:flex" />

        <div className="hidden items-center gap-2 sm:flex">
          <Link
            href="/login"
            className="focus-ring rounded-xl px-3.5 py-2 text-sm font-medium text-ink-700 hover:bg-ink-100"
          >
            Log in
          </Link>
          <Link
            href="/register"
            className="focus-ring inline-flex h-11 items-center justify-center rounded-xl bg-brand-600 px-5 text-sm font-medium text-white shadow-soft transition-colors hover:bg-brand-700"
          >
            Sign up
          </Link>
        </div>

        <button
          type="button"
          className="focus-ring flex h-10 w-10 items-center justify-center rounded-xl text-ink-700 hover:bg-ink-100 sm:hidden"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <CloseIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="animate-fade-in border-t border-ink-200 bg-white px-4 pb-4 pt-2 sm:hidden">
          <nav className="flex flex-col gap-1">
            {CATEGORIES.map((c) => (
              <Link
                key={c.slug}
                href={`/${c.slug}`}
                className="focus-ring flex items-center gap-2.5 rounded-xl px-3 py-2.5 text-sm font-medium text-ink-700 hover:bg-ink-100"
                onClick={() => setMobileOpen(false)}
              >
                <c.icon className="h-5 w-5" />
                {c.label}
              </Link>
            ))}
          </nav>
          <div className="mt-3 flex gap-2 border-t border-ink-200 pt-3">
            <Link
              href="/login"
              className="focus-ring flex h-11 flex-1 items-center justify-center rounded-xl border border-ink-300 text-sm font-medium text-ink-700"
              onClick={() => setMobileOpen(false)}
            >
              Log in
            </Link>
            <Link
              href="/register"
              className="focus-ring flex h-11 flex-1 items-center justify-center rounded-xl bg-brand-600 text-sm font-medium text-white"
              onClick={() => setMobileOpen(false)}
            >
              Sign up
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
