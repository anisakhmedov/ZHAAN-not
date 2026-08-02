import { MarketingHero } from '@/components/layout/marketing-hero';
import { CATEGORIES } from '@/lib/categories';

const STATS = [
  { label: 'Active listings', value: '48K+' },
  { label: 'Countries covered', value: '92' },
  { label: 'Bookings completed', value: '3.2M' },
  { label: 'Average rating', value: '4.8/5' },
];

export default function AboutPage() {
  return (
    <div>
      <MarketingHero
        title="One platform for every kind of booking"
        subtitle="Zhaan brings hotels, salons, rentals, flights and trains together so you can plan a whole trip without switching apps."
      />

      <section className="container-page grid grid-cols-2 gap-6 py-12 sm:grid-cols-4">
        {STATS.map((stat) => (
          <div key={stat.label} className="text-center">
            <p className="text-2xl font-bold text-brand-700 sm:text-3xl">{stat.value}</p>
            <p className="mt-1 text-sm text-ink-500">{stat.label}</p>
          </div>
        ))}
      </section>

      <section className="container-page pb-16">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {CATEGORIES.slice(0, 3).map((c) => (
            <div key={c.slug} className="rounded-2xl border border-ink-200 p-6">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand-700">
                <c.icon className="h-5 w-5" />
              </span>
              <h3 className="mt-4 font-semibold text-ink-900">{c.label}</h3>
              <p className="mt-1.5 text-sm text-ink-500">{c.tagline}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
