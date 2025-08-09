import { useCallback } from "react";
import { useWeatherData } from "../../../store/storeWeatherData";
import "../../../styles/features/mainComponent.scss";
import MainWeather from "../MainWeather/MainWeather";

export default function MainComponent() {
  const addWeatherData = useWeatherData((state) => state.addWeatherData);

  const fetchWeatherData = useCallback(() => {
    fetch(
      `http://api.weatherapi.com/v1/forecast.json?key=32a55bd6f3a34377bb074242250808&q=Dumaguete&days=1&aqi=no&alerts=no`
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        addWeatherData(data);
        // console.log(data);
      });
  }, []);

  fetchWeatherData();

  // useEffect(() => {
  //   fetch(
  //     `http://api.weatherapi.com/v1/forecast.json?key=32a55bd6f3a34377bb074242250808&q=Dumaguete&days=1&aqi=no&alerts=no`
  //   )
  //     .then((response) => {
  //       return response.json();
  //     })
  //     .then((data) => {
  //       console.log(data);
  //     });
  // }, []);
  return (
    <main>
      <div className="current-container">
        <MainWeather />
      </div>
      <div className="sub-container"></div>
    </main>
  );
}
