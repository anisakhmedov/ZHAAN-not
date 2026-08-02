import { Input } from '@zhaan/ui';
import { AuthLink, AuthShell } from '@/components/auth/auth-shell';

export default function ForgotPasswordPage() {
  return (
    <AuthShell
      title="Reset your password"
      subtitle="Enter your email and we'll send you a link to reset your password."
      footer={<AuthLink href="/login">Back to log in</AuthLink>}
    >
      <form className="space-y-4">
        <Input label="Email" type="email" placeholder="jane@example.com" name="email" />
        <button
          type="submit"
          className="focus-ring flex h-11 w-full items-center justify-center rounded-xl bg-brand-600 text-sm font-semibold text-white shadow-soft transition-colors hover:bg-brand-700"
        >
          Send reset link
        </button>
      </form>
    </AuthShell>
  );
}
