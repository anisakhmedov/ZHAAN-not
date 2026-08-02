import { Badge } from '@zhaan/ui';
import { PageHeader } from '@/components/layout/page-header';
import { DataTable } from '@/components/tables/data-table';
import { StarIcon } from '@/components/icons';
import { MOCK_PROVIDERS } from '@/lib/mock-data';

const STATUS_VARIANT = {
  active: 'success',
  pending: 'warning',
  suspended: 'danger',
} as const;

export default function ProvidersPage() {
  return (
    <div>
      <PageHeader
        title="Providers"
        description="Vendors and businesses offering hotels, salons, rentals, flights and trains."
        action={
          <button className="focus-ring inline-flex h-10 items-center justify-center rounded-xl bg-brand-600 px-4 text-sm font-medium text-white shadow-soft hover:bg-brand-700">
            + Add provider
          </button>
        }
      />

      <DataTable
        rowKey={(row) => row.id}
        rows={MOCK_PROVIDERS}
        columns={[
          { key: 'name', header: 'Provider', render: (row) => <span className="font-medium text-ink-900">{row.name}</span> },
          { key: 'categories', header: 'Categories', render: (row) => row.categories.join(', ') },
          { key: 'location', header: 'Location', render: (row) => row.location },
          { key: 'listings', header: 'Listings', render: (row) => row.listings },
          {
            key: 'rating',
            header: 'Rating',
            render: (row) => (
              <span className="flex items-center gap-1">
                <StarIcon className="h-3.5 w-3.5 text-amber-500" />
                {row.rating.toFixed(1)}
              </span>
            ),
          },
          { key: 'status', header: 'Status', render: (row) => <Badge variant={STATUS_VARIANT[row.status]}>{row.status}</Badge> },
        ]}
      />
    </div>
  );
}
