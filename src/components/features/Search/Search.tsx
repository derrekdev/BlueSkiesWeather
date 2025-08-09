import "../../../styles/features/search.scss";

export default function Search() {
  return (
    <div className="search">
      <form>
        <input type="search" />
        <button type="submit">Search</button>
      </form>
    </div>
  );
}
