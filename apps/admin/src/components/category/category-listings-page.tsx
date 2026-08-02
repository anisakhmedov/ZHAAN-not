import { Badge } from '@zhaan/ui';
import { PageHeader } from '@/components/layout/page-header';
import { DataTable } from '@/components/tables/data-table';
import { getCategoryListings, type MockBooking } from '@/lib/mock-data';

const CATEGORY_LABEL: Record<MockBooking['category'], string> = {
  hotels: 'Hotels',
  salons: 'Salons',
  rentals: 'Rentals',
  flights: 'Flights',
  trains: 'Trains',
};

export function CategoryListingsPage({ category }: { category: MockBooking['category'] }) {
  const listings = getCategoryListings(category);

  return (
    <div>
      <PageHeader
        title={CATEGORY_LABEL[category]}
        description={`Manage ${CATEGORY_LABEL[category].toLowerCase()} listings.`}
        action={
          <button className="focus-ring inline-flex h-10 items-center justify-center rounded-xl bg-brand-600 px-4 text-sm font-medium text-white shadow-soft hover:bg-brand-700">
            + Add listing
          </button>
        }
      />

      <DataTable
        rowKey={(row) => row.id}
        rows={listings}
        columns={[
          { key: 'title', header: 'Title', render: (row) => <span className="font-medium text-ink-900">{row.title}</span> },
          { key: 'location', header: 'Location', render: (row) => row.location },
          { key: 'price', header: 'Price', render: (row) => `$${row.price}` },
          { key: 'status', header: 'Status', render: () => <Badge variant="success">active</Badge> },
          {
            key: 'actions',
            header: '',
            render: () => (
              <div className="flex justify-end gap-3">
                <button className="focus-ring text-sm font-medium text-ink-600 hover:text-brand-700">Edit</button>
                <button className="focus-ring text-sm font-medium text-rose-600 hover:text-rose-700">Remove</button>
              </div>
            ),
            className: 'text-right',
          },
        ]}
      />
    </div>
  );
}
