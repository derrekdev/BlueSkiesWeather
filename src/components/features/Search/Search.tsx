import { useRef } from "react";
import { apiWeather } from "../../../services/apiWeather";
import { useWeatherData } from "../../../store/storeWeatherData";
import "../../../styles/features/search.scss";
import type { WeatherApiResponseType } from "../../../types/weather";

export default function Search() {
  const refSearchValue = useRef<HTMLInputElement>(null);
  const addWeatherData = useWeatherData((state) => state.addWeatherData);
  const { getWeatherData } = apiWeather();

  const handleSearch = (event: React.FormEvent) => {
    event.preventDefault();

    getWeatherData(refSearchValue.current?.value)
      .then((data: WeatherApiResponseType) => {
        addWeatherData(data);
      })
      .catch((error) => {
        console.log("error", (error as Error).message);
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
