// Detail page for a single salon and its booking flow entry point, e.g. /salons/[id]
export default function SalonsDetailPage({ params }: { params: { id: string } }) {
  return (
    <div>
      <h1>Salons #{params.id}</h1>
      {/* Details, availability calendar, "Book now" -> /booking/[id] */}
    </div>
  );
}
