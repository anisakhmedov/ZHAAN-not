import { MarketingHero } from '@/components/layout/marketing-hero';
import { CalendarIcon, CheckIcon, SearchIcon } from '@/components/icons';

const STEPS = [
  { icon: SearchIcon, title: 'Search', description: 'Pick a category and tell us where and when — we surface the best matching options.' },
  { icon: CalendarIcon, title: 'Book', description: 'Choose dates, add guest details and review the price breakdown before you commit.' },
  { icon: CheckIcon, title: 'Confirm', description: 'Pay securely and get an instant confirmation, viewable anytime from your account.' },
];

export default function HowItWorksPage() {
  return (
    <div>
      <MarketingHero title="How Zhaan works" subtitle="From search to confirmation in three simple steps." />

      <section className="container-page py-14">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
          {STEPS.map((step, i) => (
            <div key={step.title} className="relative rounded-2xl border border-ink-200 p-6">
              <span className="absolute -top-4 left-6 flex h-8 w-8 items-center justify-center rounded-full bg-ink-900 text-sm font-bold text-white">
                {i + 1}
              </span>
              <span className="mt-2 flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand-700">
                <step.icon className="h-5 w-5" />
              </span>
              <h3 className="mt-4 font-semibold text-ink-900">{step.title}</h3>
              <p className="mt-1.5 text-sm text-ink-500">{step.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
