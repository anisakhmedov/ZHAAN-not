import Link from 'next/link';
import { Logo } from '@/components/layout/logo';

export function AuthShell({
  title,
  subtitle,
  children,
  footer,
}: {
  title: string;
  subtitle: string;
  children: React.ReactNode;
  footer?: React.ReactNode;
}) {
  return (
    <div className="grid min-h-[calc(100vh-4rem)] grid-cols-1 lg:grid-cols-2">
      <div className="flex flex-col justify-center px-6 py-12 sm:px-16">
        <div className="mx-auto w-full max-w-sm">
          <Logo className="mb-8" />
          <h1 className="text-2xl font-bold text-ink-900">{title}</h1>
          <p className="mt-1.5 text-sm text-ink-500">{subtitle}</p>

          <div className="mt-8">{children}</div>

          {footer && <div className="mt-6 text-center text-sm text-ink-500">{footer}</div>}
        </div>
      </div>

      <div className="relative hidden overflow-hidden bg-ink-950 lg:block">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(42,159,147,0.4),transparent_45%),radial-gradient(circle_at_80%_80%,rgba(129,140,248,0.3),transparent_45%)]" />
        <div className="relative flex h-full flex-col items-start justify-end p-16 text-white">
          <p className="max-w-sm text-2xl font-semibold leading-snug">
            &ldquo;Zhaan made booking our whole trip — hotel, car and train tickets — take five minutes.&rdquo;
          </p>
          <p className="mt-4 text-sm text-ink-300">Amara K. · Verified traveler</p>
        </div>
      </div>
    </div>
  );
}

export function AuthDivider() {
  return (
    <div className="my-5 flex items-center gap-3 text-xs uppercase tracking-wide text-ink-400">
      <span className="h-px flex-1 bg-ink-200" />
      or
      <span className="h-px flex-1 bg-ink-200" />
    </div>
  );
}

export function AuthLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="focus-ring font-medium text-brand-700 hover:text-brand-800">
      {children}
    </Link>
  );
}
