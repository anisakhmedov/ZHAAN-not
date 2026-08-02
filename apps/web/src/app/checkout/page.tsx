import { Input } from '@zhaan/ui';
import { BookingSummary } from '@/components/booking/booking-summary';
import { CheckIcon } from '@/components/icons';
import { getListingById, LISTINGS } from '@/lib/mock-listings';

const STEPS = ['Trip details', 'Payment', 'Confirmation'];

export default function CheckoutPage({ searchParams }: { searchParams: { listingId?: string } }) {
  const listing = (searchParams.listingId && getListingById(searchParams.listingId)) || LISTINGS[0];

  return (
    <div className="container-page py-8">
      <h1 className="text-2xl font-bold text-ink-900">Checkout</h1>

      <ol className="mt-6 flex items-center gap-3 text-sm">
        {STEPS.map((step, i) => (
          <li key={step} className="flex items-center gap-3">
            <span
              className={`flex items-center gap-2 rounded-full px-3 py-1.5 font-medium ${
                i === 1 ? 'bg-brand-600 text-white' : i < 1 ? 'bg-brand-100 text-brand-800' : 'bg-ink-100 text-ink-500'
              }`}
            >
              {i < 1 ? <CheckIcon className="h-3.5 w-3.5" /> : <span className="flex h-4 w-4 items-center justify-center text-xs">{i + 1}</span>}
              {step}
            </span>
            {i < STEPS.length - 1 && <span className="h-px w-8 bg-ink-200" />}
          </li>
        ))}
      </ol>

      <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-[1fr_360px]">
        <div className="space-y-6 rounded-2xl border border-ink-200 p-6">
          <div>
            <h2 className="text-base font-semibold text-ink-900">Payment method</h2>
            <div className="mt-4 grid grid-cols-1 gap-4">
              <Input label="Card number" placeholder="4242 4242 4242 4242" name="cardNumber" inputMode="numeric" />
              <div className="grid grid-cols-2 gap-4">
                <Input label="Expiry" placeholder="MM/YY" name="expiry" />
                <Input label="CVC" placeholder="123" name="cvc" inputMode="numeric" />
              </div>
              <Input label="Name on card" placeholder="Jane Doe" name="cardName" />
            </div>
          </div>

          <div className="border-t border-ink-200 pt-6">
            <h2 className="text-base font-semibold text-ink-900">Billing address</h2>
            <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <Input label="Country" placeholder="United States" name="country" className="sm:col-span-2" />
              <Input label="City" placeholder="New York" name="city" />
              <Input label="Postal code" placeholder="10001" name="postalCode" />
            </div>
          </div>

          <label className="flex items-start gap-2.5 border-t border-ink-200 pt-6 text-sm text-ink-600">
            <input type="checkbox" className="mt-0.5 h-4 w-4 accent-brand-600" />
            I agree to the Terms of Service and Cancellation Policy.
          </label>
        </div>

        <div className="space-y-4 lg:sticky lg:top-24 lg:self-start">
          <BookingSummary listing={listing} />
          <button
            type="button"
            className="focus-ring flex h-12 w-full items-center justify-center rounded-xl bg-brand-600 px-6 text-base font-medium text-white shadow-soft transition-colors hover:bg-brand-700"
          >
            Confirm & pay
          </button>
          <p className="text-center text-xs text-ink-400">Payments are securely processed. Free cancellation up to 24h before.</p>
        </div>
      </div>
    </div>
  );
}
