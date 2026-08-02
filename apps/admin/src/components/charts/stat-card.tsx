import { Card } from '@zhaan/ui';
import { TrendUpIcon } from '@/components/icons';

export interface StatCardProps {
  label: string;
  value: string;
  delta?: string;
  trend?: 'up' | 'down';
  icon: React.ComponentType<{ className?: string }>;
}

export function StatCard({ label, value, delta, trend = 'up', icon: Icon }: StatCardProps) {
  return (
    <Card className="flex items-start justify-between">
      <div>
        <p className="text-sm text-ink-500">{label}</p>
        <p className="mt-1.5 text-2xl font-bold text-ink-900">{value}</p>
        {delta && (
          <p className={`mt-1.5 flex items-center gap-1 text-xs font-medium ${trend === 'up' ? 'text-emerald-600' : 'text-rose-600'}`}>
            <TrendUpIcon className={`h-3.5 w-3.5 ${trend === 'down' ? 'rotate-180' : ''}`} />
            {delta}
          </p>
        )}
      </div>
      <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-50 text-brand-700">
        <Icon className="h-5 w-5" />
      </span>
    </Card>
  );
}
