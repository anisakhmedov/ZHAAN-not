import { Input } from '@zhaan/ui';
import { UserIcon } from '@/components/icons';

export default function AccountProfilePage() {
  return (
    <div className="max-w-xl rounded-2xl border border-ink-200 p-6">
      <div className="flex items-center gap-4">
        <span className="flex h-16 w-16 items-center justify-center rounded-full bg-brand-100 text-brand-700">
          <UserIcon className="h-7 w-7" />
        </span>
        <div>
          <p className="font-semibold text-ink-900">Jane Doe</p>
          <p className="text-sm text-ink-500">Member since 2024</p>
        </div>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-4 border-t border-ink-200 pt-6 sm:grid-cols-2">
        <Input label="Full name" defaultValue="Jane Doe" name="fullName" />
        <Input label="Email" type="email" defaultValue="jane@example.com" name="email" />
        <Input label="Phone" type="tel" placeholder="+1 555 123 4567" name="phone" />
        <Input label="Country" placeholder="United States" name="country" />
      </div>

      <div className="mt-6 flex justify-end border-t border-ink-200 pt-6">
        <button
          type="button"
          className="focus-ring inline-flex h-11 items-center justify-center rounded-xl bg-brand-600 px-6 text-sm font-medium text-white shadow-soft transition-colors hover:bg-brand-700"
        >
          Save changes
        </button>
      </div>
    </div>
  );
}
