import { useWeatherData } from "../../../store/storeWeatherData";
import "../../../styles/features/mainWeather.scss";
import type { WeatherApiResponseType } from "../../../types/weather";
import Card from "../../ui/card";

export default function MainWeather() {
  const weatherData: WeatherApiResponseType = useWeatherData(
    (state) => state.weatherData
  );

  const currentWeather = weatherData.current;
  const locationWeather = weatherData.location;

  // let weatherData: CurrentType | unknown = [];
  // if (getCurrentWeather.current.length !== 0) {
  //   weatherData = getCurrentWeather.current;
  // }

  // if (!navigator.geolocation) {
  //   // setError('Geolocation is not supported by your browser.');
  //   console.log("Geolocation is not supported by your browser.");
  //   return;
  // }

  // if (navigator.geolocation) {
  //   console.log("trigger geo");
  // }

  // let lat = 0;

  // navigator.geolocation.getCurrentPosition((position) => {
  //   lat = position.coords.latitude;
  //   console.log(position);
  //   console.log("latitude", position.coords.latitude);
  //   console.log("longitude", position.coords.longitude);
  // });

  // console.log("lat", lat);

  // useEffect(() => {
  //   let lat = 0;

  //   navigator.geolocation.getCurrentPosition((position) => {
  //     lat = position.coords.latitude;
  //     console.log(position);
  //     console.log("latitude", position.coords.latitude);
  //     console.log("longitude", position.coords.longitude);
  //   });

  //   console.log("lat effect", lat);
  // }, []);

  console.log("getCurrentWeather", weatherData);

  return (
    <>
      <Card>
        <div className="weather-block">
          {locationWeather.name && (
            <span className="location">{locationWeather.name}</span>
          )}
          {currentWeather.heatindex_c && (
            <span className="temp">
              {currentWeather.temp_c}
              <sup>&deg;C</sup>
            </span>
          )}
          {currentWeather.condition?.text && (
            <span className="condition-text">
              {currentWeather.condition?.text}
            </span>
          )}
        </div>
      </Card>
    </>
  );
}
