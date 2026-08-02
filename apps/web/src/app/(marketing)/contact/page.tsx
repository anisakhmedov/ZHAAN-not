import { Input } from '@zhaan/ui';
import { MarketingHero } from '@/components/layout/marketing-hero';

export default function ContactPage() {
  return (
    <div>
      <MarketingHero title="Get in touch" subtitle="Questions, feedback or partnership ideas — we'd love to hear from you." />

      <section className="container-page grid grid-cols-1 gap-10 py-14 lg:grid-cols-[1fr_1.2fr]">
        <div className="space-y-6">
          <div>
            <h2 className="font-semibold text-ink-900">Support</h2>
            <p className="mt-1 text-sm text-ink-500">support@zhaan.com</p>
          </div>
          <div>
            <h2 className="font-semibold text-ink-900">Business & partnerships</h2>
            <p className="mt-1 text-sm text-ink-500">partners@zhaan.com</p>
          </div>
          <div>
            <h2 className="font-semibold text-ink-900">Headquarters</h2>
            <p className="mt-1 text-sm text-ink-500">1 Market Street, San Francisco, CA</p>
          </div>
        </div>

        <form className="space-y-4 rounded-2xl border border-ink-200 p-6">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <Input label="Full name" placeholder="Jane Doe" name="fullName" />
            <Input label="Email" type="email" placeholder="jane@example.com" name="email" />
          </div>
          <Input label="Subject" placeholder="How can we help?" name="subject" />
          <label className="block text-sm font-medium text-ink-800">
            Message
            <textarea
              rows={5}
              placeholder="Tell us more..."
              className="focus-ring mt-1.5 w-full rounded-xl border border-ink-300 px-3.5 py-2.5 text-sm text-ink-900 placeholder:text-ink-400"
            />
          </label>
          <button
            type="submit"
            className="focus-ring inline-flex h-11 items-center justify-center rounded-xl bg-brand-600 px-6 text-sm font-semibold text-white shadow-soft transition-colors hover:bg-brand-700"
          >
            Send message
          </button>
        </form>
      </section>
    </div>
  );
}
