import { Badge, Card } from '@zhaan/ui';
import { PageHeader } from '@/components/layout/page-header';
import { StatCard } from '@/components/charts/stat-card';
import { DataTable } from '@/components/tables/data-table';
import { BuildingIcon, CalendarIcon, CreditCardIcon, StarIcon } from '@/components/icons';
import { MOCK_BOOKINGS, REVENUE_BY_CATEGORY, type BookingStatus } from '@/lib/mock-data';

const STATUS_VARIANT: Record<BookingStatus, 'brand' | 'warning' | 'danger' | 'success'> = {
  confirmed: 'brand',
  pending: 'warning',
  cancelled: 'danger',
  completed: 'success',
};

export default function DashboardPage() {
  const maxRevenue = Math.max(...REVENUE_BY_CATEGORY.map((r) => r.amount));

  return (
    <div>
      <PageHeader title="Dashboard" description="Overview of bookings, revenue and provider activity." />

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard label="Total bookings" value="24,318" delta="+8.2% this month" trend="up" icon={CalendarIcon} />
        <StatCard label="Revenue" value="$1.15M" delta="+12.4% this month" trend="up" icon={CreditCardIcon} />
        <StatCard label="Active providers" value="342" delta="+3 this week" trend="up" icon={BuildingIcon} />
        <StatCard label="Average rating" value="4.7 / 5" delta="-0.1 this month" trend="down" icon={StarIcon} />
      </div>

      <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-[1.1fr_1fr]">
        <Card>
          <h2 className="font-semibold text-ink-900">Recent bookings</h2>
          <div className="mt-4">
            <DataTable
              rowKey={(row) => row.id}
              rows={MOCK_BOOKINGS.slice(0, 5)}
              columns={[
                { key: 'id', header: 'Booking', render: (row) => <span className="font-medium text-ink-900">{row.id}</span> },
                { key: 'customer', header: 'Customer', render: (row) => row.customer },
                { key: 'amount', header: 'Amount', render: (row) => `$${row.amount}` },
                {
                  key: 'status',
                  header: 'Status',
                  render: (row) => <Badge variant={STATUS_VARIANT[row.status]}>{row.status}</Badge>,
                },
              ]}
            />
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
                  <div
                    className="h-full rounded-full bg-brand-600"
                    style={{ width: `${(row.amount / maxRevenue) * 100}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}
