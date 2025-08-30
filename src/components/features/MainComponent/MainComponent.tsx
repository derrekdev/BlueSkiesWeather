import { useCallback } from "react";
import { apiWeather } from "../../../services/apiWeather";
import { useLoading } from "../../../store/storeLoading";
import { useWeatherData } from "../../../store/storeWeatherData";
import "../../../styles/features/mainComponent.scss";
import type { WeatherApiResponseType } from "../../../types/weather";
import MainWeather from "../MainWeather/MainWeather";
import SubWeather from "../SubWeather/SubWeather";

export default function MainComponent() {
  const addWeatherData = useWeatherData((state) => state.addWeatherData);
  const openLoad = useLoading((state) => state.openLoad);
  const closeLoad = useLoading((state) => state.closeLoad);
  // const loadingStatus = useLoading((state) => state.loadingStatus);
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
    openLoad();
    // for loading test
    // setTimeout(() => {
    getWeatherData()
      // .then(() => {
      //   openLoad();
      // })
      .then((data: WeatherApiResponseType) => {
        addWeatherData(data);

        // console.log("weather data", data);
      })
      .catch((error) => {
        console.log("error", (error as Error).message);
      })
      .finally(() => {
        closeLoad();
      });
    // for loading test
    // }, 50000);
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

  // console.log("isLoading", loadingStatus());
  return (
    <main>
      <div className="current-container">
        <MainWeather />
        {/* {isLoading ? <p>loading</p> : <MainWeather />} */}
      </div>
      <div className="min-container">
        <SubWeather />
      </div>
    </main>
  );
}
