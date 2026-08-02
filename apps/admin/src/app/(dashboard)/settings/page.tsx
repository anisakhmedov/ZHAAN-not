import { Card, Input } from '@zhaan/ui';
import { PageHeader } from '@/components/layout/page-header';

export default function SettingsPage() {
  return (
    <div>
      <PageHeader title="Settings" description="Manage your workspace preferences." />

      <div className="max-w-2xl space-y-6">
        <Card>
          <h2 className="font-semibold text-ink-900">General</h2>
          <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
            <Input label="Platform name" defaultValue="Zhaan" name="platformName" />
            <Input label="Support email" defaultValue="support@zhaan.com" name="supportEmail" />
          </div>
        </Card>

        <Card>
          <h2 className="font-semibold text-ink-900">Notifications</h2>
          <div className="mt-4 space-y-3">
            {['New bookings', 'Cancellations', 'New provider applications', 'Weekly summary'].map((item) => (
              <label key={item} className="flex items-center justify-between text-sm text-ink-700">
                {item}
                <input type="checkbox" defaultChecked className="h-4 w-4 accent-brand-600" />
              </label>
            ))}
          </div>
        </Card>

        <Card>
          <h2 className="font-semibold text-ink-900">Security</h2>
          <div className="mt-4 space-y-4">
            <Input label="Current password" type="password" name="currentPassword" />
            <Input label="New password" type="password" name="newPassword" />
          </div>
        </Card>

        <div className="flex justify-end">
          <button className="focus-ring inline-flex h-11 items-center justify-center rounded-xl bg-brand-600 px-6 text-sm font-semibold text-white shadow-soft hover:bg-brand-700">
            Save changes
          </button>
        </div>
      </div>
    </div>
  );
}
