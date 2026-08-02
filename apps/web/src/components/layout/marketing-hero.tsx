export function MarketingHero({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <section className="border-b border-ink-200 bg-ink-50 py-14">
      <div className="container-page text-center">
        <h1 className="text-3xl font-bold text-ink-900 sm:text-4xl">{title}</h1>
        <p className="mx-auto mt-3 max-w-xl text-ink-500">{subtitle}</p>
      </div>
    </section>
  );
}
