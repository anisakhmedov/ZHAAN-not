export interface DataTableColumn<T> {
  key: string;
  header: string;
  render: (row: T) => React.ReactNode;
  className?: string;
}

export interface DataTableProps<T> {
  columns: DataTableColumn<T>[];
  rows: T[];
  rowKey: (row: T) => string;
  emptyMessage?: string;
}

export function DataTable<T>({ columns, rows, rowKey, emptyMessage = 'No results found.' }: DataTableProps<T>) {
  return (
    <div className="overflow-hidden rounded-2xl border border-ink-200 bg-white">
      <div className="scrollbar-thin overflow-x-auto">
        <table className="w-full min-w-[640px] text-left text-sm">
          <thead>
            <tr className="border-b border-ink-200 bg-ink-50/60">
              {columns.map((column) => (
                <th key={column.key} className="whitespace-nowrap px-5 py-3 font-semibold text-ink-500">
                  {column.header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-ink-100">
            {rows.map((row) => (
              <tr key={rowKey(row)} className="transition-colors hover:bg-ink-50/60">
                {columns.map((column) => (
                  <td key={column.key} className={`px-5 py-3.5 text-ink-800 ${column.className ?? ''}`}>
                    {column.render(row)}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {rows.length === 0 && <p className="px-5 py-10 text-center text-sm text-ink-500">{emptyMessage}</p>}
    </div>
  );
}
