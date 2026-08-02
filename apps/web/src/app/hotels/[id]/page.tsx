// Detail page for a single hotel and its booking flow entry point, e.g. /hotels/[id]
export default function HotelsDetailPage({ params }: { params: { id: string } }) {
  return (
    <div>
      <h1>Hotels #{params.id}</h1>
      {/* Details, availability calendar, "Book now" -> /booking/[id] */}
    </div>
  );
}
