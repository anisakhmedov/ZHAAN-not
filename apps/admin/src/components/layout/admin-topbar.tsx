import { BellIcon, MenuIcon, SearchIcon, UsersIcon } from '@/components/icons';

export function AdminTopbar({ onMenuClick }: { onMenuClick?: () => void }) {
  return (
    <header className="sticky top-0 z-30 flex h-16 items-center gap-4 border-b border-ink-200 bg-white/90 px-4 backdrop-blur sm:px-6 lg:px-8">
      <button
        type="button"
        onClick={onMenuClick}
        className="focus-ring flex h-9 w-9 items-center justify-center rounded-lg text-ink-600 hover:bg-ink-100 lg:hidden"
        aria-label="Open menu"
      >
        <MenuIcon className="h-5 w-5" />
      </button>

      <label className="relative hidden max-w-sm flex-1 sm:block">
        <SearchIcon className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-400" />
        <input
          type="search"
          placeholder="Search bookings, providers, users..."
          className="focus-ring h-10 w-full rounded-xl border border-ink-200 bg-ink-50 pl-10 pr-3 text-sm text-ink-900 placeholder:text-ink-400"
        />
      </label>

      <div className="ml-auto flex items-center gap-3">
        <button
          type="button"
          className="focus-ring relative flex h-9 w-9 items-center justify-center rounded-lg text-ink-600 hover:bg-ink-100"
          aria-label="Notifications"
        >
          <BellIcon className="h-5 w-5" />
          <span className="absolute right-1.5 top-1.5 h-2 w-2 rounded-full bg-brand-500" />
        </button>
        <div className="flex items-center gap-2.5 border-l border-ink-200 pl-3">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-100 text-brand-700">
            <UsersIcon className="h-4 w-4" />
          </span>
          <div className="hidden sm:block">
            <p className="text-sm font-medium text-ink-900">Alex Morgan</p>
            <p className="text-xs text-ink-500">Operations admin</p>
          </div>
        </div>
      </div>
    </header>
  );
}
