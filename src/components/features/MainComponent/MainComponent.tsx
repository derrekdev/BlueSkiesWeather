import { useCallback } from "react";
import { apiWeather } from "../../../services/apiWeather";
import { useWeatherData } from "../../../store/storeWeatherData";
import "../../../styles/features/mainComponent.scss";
import type { WeatherApiResponseType } from "../../../types/weather";
import MainWeather from "../MainWeather/MainWeather";

export default function MainComponent() {
  const addWeatherData = useWeatherData((state) => state.addWeatherData);
  const { getWeatherData } = apiWeather();

  // const fetchWeatherData = useCallback(async () => {
  //   fetch(
  //     `http://api.weatherapi.com/v1/forecast.json?key=32a55bd6f3a34377bb074242250808&q=Dumaguete&days=1&aqi=no&alerts=no`
  //   )
  //     .then((response) => {
  //       return response.json();
  //     })
  //     .then((data) => {
  //       addWeatherData(data);
  //       // console.log(data);
  //     });
  // }, []);

  // const fetchWeatherData = useCallback(async () => {
  //   try {
  //     const weatherData = await getWeatherData();

  //     addWeatherData(weatherData);
  //     console.log("response", weatherData);
  //   } catch (error) {
  //     console.log("error", (error as Error).message);
  //   }
  // }, []);

  const fetchWeatherData = useCallback(() => {
    getWeatherData()
      .then((data: WeatherApiResponseType) => {
        addWeatherData(data);
        // console.log("weather data", data);
      })
      .catch((error) => {
        console.log("error", (error as Error).message);
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
