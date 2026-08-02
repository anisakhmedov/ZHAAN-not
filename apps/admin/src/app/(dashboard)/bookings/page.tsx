import { Badge } from '@zhaan/ui';
import { PageHeader } from '@/components/layout/page-header';
import { DataTable } from '@/components/tables/data-table';
import { SearchIcon } from '@/components/icons';
import { MOCK_BOOKINGS, type BookingStatus } from '@/lib/mock-data';

const STATUS_VARIANT: Record<BookingStatus, 'brand' | 'warning' | 'danger' | 'success'> = {
  confirmed: 'brand',
  pending: 'warning',
  cancelled: 'danger',
  completed: 'success',
};

const CATEGORY_LABEL: Record<string, string> = {
  hotels: 'Hotels',
  salons: 'Salons',
  rentals: 'Rentals',
  flights: 'Flights',
  trains: 'Trains',
};

export default function BookingsPage() {
  return (
    <div>
      <PageHeader title="Bookings" description="All bookings across every category." />

      <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center">
        <label className="relative flex-1 sm:max-w-xs">
          <SearchIcon className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-400" />
          <input
            type="search"
            placeholder="Search by booking or customer..."
            className="focus-ring h-10 w-full rounded-xl border border-ink-200 bg-white pl-10 pr-3 text-sm text-ink-900 placeholder:text-ink-400"
          />
        </label>
        <select className="focus-ring h-10 rounded-xl border border-ink-200 bg-white px-3.5 text-sm text-ink-700 sm:w-48">
          <option>All statuses</option>
          <option>Confirmed</option>
          <option>Pending</option>
          <option>Completed</option>
          <option>Cancelled</option>
        </select>
      </div>

      <DataTable
        rowKey={(row) => row.id}
        rows={MOCK_BOOKINGS}
        columns={[
          { key: 'id', header: 'Booking', render: (row) => <span className="font-medium text-ink-900">{row.id}</span> },
          { key: 'customer', header: 'Customer', render: (row) => row.customer },
          { key: 'category', header: 'Category', render: (row) => CATEGORY_LABEL[row.category] },
          { key: 'listing', header: 'Listing', render: (row) => row.listing },
          { key: 'date', header: 'Date', render: (row) => row.date },
          { key: 'amount', header: 'Amount', render: (row) => `$${row.amount}` },
          { key: 'status', header: 'Status', render: (row) => <Badge variant={STATUS_VARIANT[row.status]}>{row.status}</Badge> },
        ]}
      />
    </div>
  );
}
