import { Input } from '@zhaan/ui';
import { AuthLink, AuthShell } from '@/components/auth/auth-shell';

export default function RegisterPage() {
  return (
    <AuthShell
      title="Create your account"
      subtitle="Book hotels, salons, rentals, flights and trains in one place."
      footer={
        <>
          Already have an account? <AuthLink href="/login">Log in</AuthLink>
        </>
      }
    >
      <form className="space-y-4">
        <Input label="Full name" placeholder="Jane Doe" name="fullName" />
        <Input label="Email" type="email" placeholder="jane@example.com" name="email" />
        <Input label="Password" type="password" placeholder="At least 8 characters" name="password" hint="Use 8+ characters with a mix of letters and numbers." />
        <button
          type="submit"
          className="focus-ring flex h-11 w-full items-center justify-center rounded-xl bg-brand-600 text-sm font-semibold text-white shadow-soft transition-colors hover:bg-brand-700"
        >
          Create account
        </button>
        <p className="text-center text-xs text-ink-400">
          By signing up you agree to Zhaan&apos;s Terms of Service and Privacy Policy.
        </p>
      </form>
    </AuthShell>
  );
}
