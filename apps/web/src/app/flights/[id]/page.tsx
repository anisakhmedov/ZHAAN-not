// Detail page for a single flight and its booking flow entry point, e.g. /flights/[id]
export default function FlightsDetailPage({ params }: { params: { id: string } }) {
  return (
    <div>
      <h1>Flights #{params.id}</h1>
      {/* Details, availability calendar, "Book now" -> /booking/[id] */}
    </div>
  );
}
