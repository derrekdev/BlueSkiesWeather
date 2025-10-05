import { format } from "date-fns";
import { create } from "zustand";
import type { WeatherDataType } from "../types/store";
import type { WeatherApiResponseType } from "../types/weather";

export const useWeatherData = create<WeatherDataType>((set, get) => ({
  weatherData: { location: [], current: [], forecast: [] },
  currentLocation: "",
  addWeatherData: (weatherDataValue: WeatherApiResponseType) =>
    set(() => ({
      weatherData: weatherDataValue,
    })),

  getCurrentWeather: async () =>
    set((state) => {
      return state.weatherData && state.weatherData?.current;
    }),
  getCurrentTheme: () => {
    const currentPhrase = get().weatherData?.current?.condition?.text ?? "";
    let isDay: boolean = false;

    if (get().weatherData?.forecast.forecastday && get().weatherData?.current) {
      const currentTime = format(
        new Date(get().weatherData?.current.last_updated),
        "HH:mm"
      );
      const sunriseTime = format(
        new Date(
          get().weatherData?.forecast.forecastday[0].date +
            " " +
            get().weatherData?.forecast.forecastday[0].astro.sunrise
        ),
        "HH:mm"
      );
      const sunsetTime = format(
        new Date(
          get().weatherData?.forecast.forecastday[0].date +
            " " +
            get().weatherData?.forecast.forecastday[0].astro.sunset
        ),
        "HH:mm"
      );

      isDay = currentTime > sunriseTime && currentTime < sunsetTime;
    }

    // console.log("isDay", isDay);
    // return isDay ? "default" : "night";

    switch (currentPhrase.toLowerCase()) {
      case "partly cloudy":
      case "fog":
      case "mist":
        return "cloudy";

      case "light rain shower":
        return "rain";

      default:
        return isDay ? "default" : "night";
    }
  },
  setCurrentLocation: (weatherLocation: string) =>
    set(() => ({
      currentLocation: weatherLocation,
    })),
}));
