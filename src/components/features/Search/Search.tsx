import { useEffect, useRef, useState } from "react";
import { apiWeather } from "../../../services/apiWeather";
import { useWeatherData } from "../../../store/storeWeatherData";
import "../../../styles/features/search.scss";
import type { LocationListType } from "../../../types/location";
import SearchIcon from "../../ui/icons/SearchIcon";

export default function Search() {
  const refSearchValue = useRef<HTMLInputElement>(null);
  const [searchValue, setSearchValue] = useState<string>();
  const [locationList, setLocationList] = useState<LocationListType | null>([]);
  const setCurrentLocation = useWeatherData(
    (state) => state.setCurrentLocation
  );
  const { getLocationData } = apiWeather();

  const handleSearch = (event: React.FormEvent) => {
    event.preventDefault();

    handleSearchLocation(refSearchValue.current?.value);
  };

  const handleSearchLocation = (location: string | undefined) => {
    setLocationList([]);
    refSearchValue.current?.value == location;
    setCurrentLocation(location!);
  };

  useEffect(() => {
    if (searchValue && searchValue.length > 2) {
      getLocationData(searchValue)
        .then((data) => {
          console.log("location data", data);
          setLocationList(data);
        })
        .catch((error) => {
          console.log("error", (error as Error).message);
        });
    } else {
      setLocationList([]);
    }
  }, [searchValue]);

  return (
    <div className="search">
      <form onSubmit={handleSearch}>
        <input
          name="searchPlace"
          type="search"
          ref={refSearchValue}
          onChange={(event) => setSearchValue(event.target.value)}
        />
        <button type="submit">
          <SearchIcon strokeWidth={1} width={20} height={20} />
        </button>
        {locationList && locationList?.length > 0 && (
          <div className="search-list">
            {locationList.map((location, i) => (
              <div
                className="search-list-item"
                key={i}
                onClick={() => handleSearchLocation(location.name)}
              >
                {location.name}, {location.country}
              </div>
            ))}
          </div>
        )}
      </form>
    </div>
  );
}
