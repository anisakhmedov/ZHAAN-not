import { Input } from '@zhaan/ui';
import { AuthDivider, AuthLink, AuthShell } from '@/components/auth/auth-shell';

export default function LoginPage() {
  return (
    <AuthShell
      title="Welcome back"
      subtitle="Log in to manage your bookings and continue exploring."
      footer={
        <>
          Don&apos;t have an account? <AuthLink href="/register">Sign up</AuthLink>
        </>
      }
    >
      <form className="space-y-4">
        <Input label="Email" type="email" placeholder="jane@example.com" name="email" />
        <div>
          <Input label="Password" type="password" placeholder="••••••••" name="password" />
          <div className="mt-1.5 text-right">
            <AuthLink href="/forgot-password">Forgot password?</AuthLink>
          </div>
        </div>
        <button
          type="submit"
          className="focus-ring flex h-11 w-full items-center justify-center rounded-xl bg-brand-600 text-sm font-semibold text-white shadow-soft transition-colors hover:bg-brand-700"
        >
          Log in
        </button>
      </form>

      <AuthDivider />

      <button
        type="button"
        className="focus-ring flex h-11 w-full items-center justify-center gap-2 rounded-xl border border-ink-300 text-sm font-medium text-ink-700 hover:bg-ink-50"
      >
        Continue with Google
      </button>
    </AuthShell>
  );
}
