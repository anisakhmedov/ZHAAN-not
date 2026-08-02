export function formatDateRange(startDate: string, endDate?: string): string {
  const start = new Date(startDate).toLocaleDateString();
  if (!endDate) return start;
  const end = new Date(endDate).toLocaleDateString();
  return `${start} - ${end}`;
}
