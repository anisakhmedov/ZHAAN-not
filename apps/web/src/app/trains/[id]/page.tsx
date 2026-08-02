// Detail page for a single train and its booking flow entry point, e.g. /trains/[id]
export default function TrainsDetailPage({ params }: { params: { id: string } }) {
  return (
    <div>
      <h1>Trains #{params.id}</h1>
      {/* Details, availability calendar, "Book now" -> /booking/[id] */}
    </div>
  );
}
