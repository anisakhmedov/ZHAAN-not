// Booking flow (date/time, guests/seats, add-ons) for a given listing id
export default function BookingPage({ params }: { params: { id: string } }) {
  return (
    <div>
      <h1>Book listing #{params.id}</h1>
      {/* Booking form -> /checkout */}
    </div>
  );
}
