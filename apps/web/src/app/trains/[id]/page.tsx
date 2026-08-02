import { ListingDetailPage } from '@/components/category/listing-detail-page';

export default function TrainsDetailPage({ params }: { params: { id: string } }) {
  return <ListingDetailPage category="trains" id={params.id} />;
}
