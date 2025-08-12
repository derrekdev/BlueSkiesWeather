import type { WeatherApiResponseType } from "../types/weather";

const DEFAULT_LOCATION = "Dumaguete";

export const apiWeather = () => {
  const getWeatherData = async (
    locationValue: string = DEFAULT_LOCATION
  ): Promise<WeatherApiResponseType> => {
    const location =
      locationValue !== ""
        ? locationValue ?? DEFAULT_LOCATION
        : DEFAULT_LOCATION;

    console.log("location", location);

    return fetch(
      `http://api.weatherapi.com/v1/forecast.json?key=32a55bd6f3a34377bb074242250808&q=${location}&days=1&aqi=no&alerts=no`
    ).then((response) => {
      return response.json();
    });
  };

  return {
    getWeatherData,
  };
};
