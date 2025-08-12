import { format } from "date-fns";
import { useWeatherData } from "../../../store/storeWeatherData";
import "../../../styles/features/subWeather.scss";
import type { WeatherApiResponseType } from "../../../types/weather";
import Card from "../../ui/card";

export default function SubWeather() {
  const weatherData: WeatherApiResponseType = useWeatherData(
    (state) => state.weatherData
  );

  const forecastWeather = weatherData.forecast.forecastday;

  console.log("forecastWeather length", forecastWeather);
  console.log("forecastWeather", forecastWeather);

  return (
    <>
      {/* {forecastWeather &&
        forecastWeather.map((weatherData, i) => {
          console.log("data", weatherData);

          weatherData.hour.map((hourlyData, n) => (
            <span key={n}>{hourlyData.heatindex_c}</span>
          ));

          return <p key={i}>{weatherData.date}</p>;
        })} */}

      {forecastWeather &&
        forecastWeather.map((weatherData) => {
          console.log("data", weatherData);

          return weatherData.hour.map((hourlyData, i) => (
            <Card key={i} className="min-card">
              <span>{format(new Date(hourlyData.time), "hh:mm a")}</span>
              <img
                src={hourlyData.condition.icon}
                className="sub-weather-image"
              />
              <span>{hourlyData.heatindex_c}</span>
            </Card>
          ));
        })}
    </>
  );
}
