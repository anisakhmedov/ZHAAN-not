export function StatCard({ label, value }: { label: string; value: string | number }) {
  return (
    <div>
      <p>{label}</p>
      <strong>{value}</strong>
    </div>
  );
}
