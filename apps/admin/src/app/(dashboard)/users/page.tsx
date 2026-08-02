import { Badge } from '@zhaan/ui';
import { PageHeader } from '@/components/layout/page-header';
import { DataTable } from '@/components/tables/data-table';
import { MOCK_USERS } from '@/lib/mock-data';

const ROLE_VARIANT = {
  customer: 'neutral',
  provider: 'brand',
  admin: 'success',
} as const;

export default function UsersPage() {
  return (
    <div>
      <PageHeader title="Users" description="Everyone with a Zhaan account — customers, providers and admins." />

      <DataTable
        rowKey={(row) => row.id}
        rows={MOCK_USERS}
        columns={[
          {
            key: 'name',
            header: 'User',
            render: (row) => (
              <div>
                <p className="font-medium text-ink-900">{row.name}</p>
                <p className="text-xs text-ink-500">{row.email}</p>
              </div>
            ),
          },
          { key: 'role', header: 'Role', render: (row) => <Badge variant={ROLE_VARIANT[row.role]}>{row.role}</Badge> },
          { key: 'joined', header: 'Joined', render: (row) => row.joined },
          { key: 'bookings', header: 'Bookings', render: (row) => row.bookings },
        ]}
      />
    </div>
  );
}
