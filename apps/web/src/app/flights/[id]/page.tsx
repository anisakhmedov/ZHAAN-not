import { ListingDetailPage } from '@/components/category/listing-detail-page';

export default function FlightsDetailPage({ params }: { params: { id: string } }) {
  return <ListingDetailPage category="flights" id={params.id} />;
}
