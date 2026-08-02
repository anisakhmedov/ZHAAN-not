export function SearchBar() {
  return (
    <form action="/search">
      <input type="text" name="q" placeholder="Where to? Hotels, salons, rentals, flights, trains..." />
      <button type="submit">Search</button>
    </form>
  );
}
