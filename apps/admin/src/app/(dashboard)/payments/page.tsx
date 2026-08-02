import { Badge } from '@zhaan/ui';
import { PageHeader } from '@/components/layout/page-header';
import { StatCard } from '@/components/charts/stat-card';
import { DataTable } from '@/components/tables/data-table';
import { CreditCardIcon, TrendUpIcon } from '@/components/icons';
import { MOCK_PAYMENTS } from '@/lib/mock-data';

const STATUS_VARIANT = {
  succeeded: 'success',
  refunded: 'warning',
  failed: 'danger',
} as const;

export default function PaymentsPage() {
  return (
    <div>
      <PageHeader title="Payments" description="Transactions, refunds and payout status." />

      <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
        <StatCard label="Processed this month" value="$1.15M" delta="+12.4%" icon={CreditCardIcon} />
        <StatCard label="Successful rate" value="98.2%" delta="+0.4%" icon={TrendUpIcon} />
        <StatCard label="Refunded" value="$8,940" trend="down" delta="-2.1%" icon={CreditCardIcon} />
      </div>

      <DataTable
        rowKey={(row) => row.id}
        rows={MOCK_PAYMENTS}
        columns={[
          { key: 'id', header: 'Payment', render: (row) => <span className="font-medium text-ink-900">{row.id}</span> },
          { key: 'bookingId', header: 'Booking', render: (row) => row.bookingId },
          { key: 'customer', header: 'Customer', render: (row) => row.customer },
          { key: 'method', header: 'Method', render: (row) => row.method },
          { key: 'date', header: 'Date', render: (row) => row.date },
          { key: 'amount', header: 'Amount', render: (row) => `$${row.amount}` },
          { key: 'status', header: 'Status', render: (row) => <Badge variant={STATUS_VARIANT[row.status]}>{row.status}</Badge> },
        ]}
      />
    </div>
  );
}
