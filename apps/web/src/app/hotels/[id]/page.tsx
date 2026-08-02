import { ListingDetailPage } from '@/components/category/listing-detail-page';

export default function HotelsDetailPage({ params }: { params: { id: string } }) {
  return <ListingDetailPage category="hotels" id={params.id} />;
}
