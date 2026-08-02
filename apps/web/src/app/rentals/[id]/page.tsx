// Detail page for a single rental and its booking flow entry point, e.g. /rentals/[id]
export default function RentalsDetailPage({ params }: { params: { id: string } }) {
  return (
    <div>
      <h1>Rentals #{params.id}</h1>
      {/* Details, availability calendar, "Book now" -> /booking/[id] */}
    </div>
  );
}
