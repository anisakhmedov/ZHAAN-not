export default function AdminLoginPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-ink-950 px-4">
      <div className="w-full max-w-sm rounded-2xl border border-white/10 bg-ink-900 p-8 shadow-popover">
        <div className="mb-6 flex items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-brand-500 text-white">
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 12l6-8 4 5 3-3 3 6" />
              <path d="M4 18h16" />
            </svg>
          </span>
          <span className="text-base font-bold text-white">Zhaan Admin</span>
        </div>

        <h1 className="text-xl font-bold text-white">Sign in</h1>
        <p className="mt-1 text-sm text-ink-400">Access the operations dashboard.</p>

        <form className="mt-6 space-y-4">
          <div>
            <label className="mb-1.5 block text-sm font-medium text-ink-200">Email</label>
            <input
              type="email"
              placeholder="alex@zhaan.com"
              className="focus-ring h-11 w-full rounded-xl border border-white/10 bg-ink-950 px-3.5 text-sm text-white placeholder:text-ink-500"
            />
          </div>
          <div>
            <label className="mb-1.5 block text-sm font-medium text-ink-200">Password</label>
            <input
              type="password"
              placeholder="••••••••"
              className="focus-ring h-11 w-full rounded-xl border border-white/10 bg-ink-950 px-3.5 text-sm text-white placeholder:text-ink-500"
            />
          </div>
          <button
            type="submit"
            className="focus-ring flex h-11 w-full items-center justify-center rounded-xl bg-brand-600 text-sm font-semibold text-white shadow-soft transition-colors hover:bg-brand-700"
          >
            Sign in
          </button>
        </form>
      </div>
    </div>
  );
}
