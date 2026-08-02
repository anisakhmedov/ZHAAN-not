import { ListingDetailPage } from '@/components/category/listing-detail-page';

export default function SalonsDetailPage({ params }: { params: { id: string } }) {
  return <ListingDetailPage category="salons" id={params.id} />;
}
