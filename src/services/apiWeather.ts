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

    return fetch(
      `${import.meta.env.VITE_WEATHER_API_URL}/${
        import.meta.env.VITE_WEATHER_API_VERSION
      }/forecast.json?key=${
        import.meta.env.VITE_WEATHER_API_KEY
      }&q=${location}&days=1&aqi=no&alerts=no`
    ).then((response) => {
      return response.json();
    });
  };

  const getLocationData = async (locationValue: string) => {
    return fetch(
      `${import.meta.env.VITE_WEATHER_API_URL}/${
        import.meta.env.VITE_WEATHER_API_VERSION
      }/search.json?key=${
        import.meta.env.VITE_WEATHER_API_KEY
      }&q=${locationValue}`
    ).then((response) => {
      return response.json();
    });
  };

  return {
    getWeatherData,
    getLocationData,
  };
};
