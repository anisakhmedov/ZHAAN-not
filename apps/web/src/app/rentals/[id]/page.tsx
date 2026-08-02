import { ListingDetailPage } from '@/components/category/listing-detail-page';

export default function RentalsDetailPage({ params }: { params: { id: string } }) {
  return <ListingDetailPage category="rentals" id={params.id} />;
}
