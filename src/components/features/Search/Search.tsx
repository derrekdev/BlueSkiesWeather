import { useRef } from "react";
import { useWeatherData } from "../../../store/storeWeatherData";
import "../../../styles/features/search.scss";

export default function Search() {
  const refSearchValue = useRef<HTMLInputElement>(null);
  const addWeatherData = useWeatherData((state) => state.addWeatherData);

  const handleSearch = (event: React.FormEvent) => {
    event.preventDefault();
    const locationValue = refSearchValue.current?.value ?? "Philippines";

    console.log("search value", refSearchValue.current?.value);

    fetch(
      `http://api.weatherapi.com/v1/forecast.json?key=32a55bd6f3a34377bb074242250808&q=${locationValue}&days=1&aqi=no&alerts=no`
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        addWeatherData(data);
        console.log("search data", data);
      });
  };
  return (
    <div className="search">
      <form onSubmit={handleSearch}>
        <input type="search" ref={refSearchValue} />
        <button type="submit">Search</button>
      </form>
    </div>
  );
}
