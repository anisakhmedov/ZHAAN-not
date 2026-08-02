import { Card } from '@zhaan/ui';
import { PageHeader } from '@/components/layout/page-header';
import { REVENUE_BY_CATEGORY } from '@/lib/mock-data';

const MONTHLY_BOOKINGS = [
  { month: 'Apr', value: 1820 },
  { month: 'May', value: 2140 },
  { month: 'Jun', value: 1990 },
  { month: 'Jul', value: 2430 },
  { month: 'Aug', value: 2710 },
  { month: 'Sep', value: 3105 },
];

export default function ReportsPage() {
  const maxRevenue = Math.max(...REVENUE_BY_CATEGORY.map((r) => r.amount));
  const maxBookings = Math.max(...MONTHLY_BOOKINGS.map((m) => m.value));

  return (
    <div>
      <PageHeader title="Reports" description="Revenue and booking performance across categories." />

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <Card>
          <h2 className="font-semibold text-ink-900">Bookings per month</h2>
          <div className="mt-6 flex h-48 items-end gap-3">
            {MONTHLY_BOOKINGS.map((m) => (
              <div key={m.month} className="flex flex-1 flex-col items-center gap-2">
                <div
                  className="w-full rounded-t-lg bg-brand-500"
                  style={{ height: `${(m.value / maxBookings) * 100}%` }}
                />
                <span className="text-xs text-ink-500">{m.month}</span>
              </div>
            ))}
          </div>
        </Card>

        <Card>
          <h2 className="font-semibold text-ink-900">Revenue by category</h2>
          <div className="mt-6 space-y-4">
            {REVENUE_BY_CATEGORY.map((row) => (
              <div key={row.category}>
                <div className="mb-1.5 flex items-center justify-between text-sm">
                  <span className="font-medium text-ink-700">{row.label}</span>
                  <span className="text-ink-500">${(row.amount / 1000).toFixed(0)}K</span>
                </div>
                <div className="h-2 overflow-hidden rounded-full bg-ink-100">
                  <div className="h-full rounded-full bg-brand-600" style={{ width: `${(row.amount / maxRevenue) * 100}%` }} />
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}
