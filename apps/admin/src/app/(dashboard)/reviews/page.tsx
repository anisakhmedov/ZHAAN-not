import { Badge, Card } from '@zhaan/ui';
import { PageHeader } from '@/components/layout/page-header';
import { StarIcon } from '@/components/icons';
import { MOCK_REVIEWS } from '@/lib/mock-data';

export default function ReviewsPage() {
  return (
    <div>
      <PageHeader title="Reviews" description="Moderate customer reviews across every category." />

      <div className="space-y-4">
        {MOCK_REVIEWS.map((review) => (
          <Card key={review.id} className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <p className="font-semibold text-ink-900">{review.customer}</p>
                <span className="flex items-center gap-0.5 text-amber-500">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <StarIcon key={i} className={`h-3.5 w-3.5 ${i < review.rating ? 'opacity-100' : 'opacity-20'}`} />
                  ))}
                </span>
                <Badge variant={review.status === 'published' ? 'success' : 'warning'}>{review.status}</Badge>
              </div>
              <p className="mt-1 text-sm text-ink-500">
                {review.listing} · {review.date}
              </p>
              <p className="mt-2 text-sm text-ink-700">{review.comment}</p>
            </div>
            <div className="flex shrink-0 gap-2">
              <button className="focus-ring rounded-lg border border-ink-200 px-3 py-1.5 text-sm font-medium text-ink-600 hover:bg-ink-50">
                Reject
              </button>
              <button className="focus-ring rounded-lg bg-brand-600 px-3 py-1.5 text-sm font-medium text-white hover:bg-brand-700">
                Approve
              </button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
