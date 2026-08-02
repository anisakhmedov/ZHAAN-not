import { Card } from '@zhaan/ui';

const CARDS = [
  { id: 'c1', brand: 'Visa', last4: '4242', expiry: '09/28' },
  { id: 'c2', brand: 'Mastercard', last4: '8891', expiry: '02/27' },
];

export default function AccountPaymentsPage() {
  return (
    <div className="max-w-xl space-y-4">
      {CARDS.map((card) => (
        <Card key={card.id} padding="sm" className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-14 items-center justify-center rounded-lg bg-ink-900 text-xs font-bold text-white">
              {card.brand}
            </span>
            <div>
              <p className="font-medium text-ink-900">•••• {card.last4}</p>
              <p className="text-sm text-ink-500">Expires {card.expiry}</p>
            </div>
          </div>
          <button type="button" className="focus-ring text-sm font-medium text-rose-600 hover:text-rose-700">
            Remove
          </button>
        </Card>
      ))}

      <button
        type="button"
        className="focus-ring flex h-11 w-full items-center justify-center rounded-xl border border-dashed border-ink-300 text-sm font-medium text-ink-600 hover:border-brand-400 hover:text-brand-700"
      >
        + Add payment method
      </button>
    </div>
  );
}
