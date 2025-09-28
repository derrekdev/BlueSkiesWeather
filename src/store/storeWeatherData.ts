import { create } from "zustand";
import type { WeatherDataType } from "../types/store";
import type { WeatherApiResponseType } from "../types/weather";

export const useWeatherData = create<WeatherDataType>((set, get) => ({
  weatherData: { location: {}, current: [], forecast: [] },
  // weatherData: [],
  addWeatherData: (weatherDataValue: WeatherApiResponseType) =>
    set(() => ({
      weatherData: weatherDataValue,
    })),

  getCurrentWeather: async () =>
    set((state) => {
      // return get().weatherData?.current;
      return state.weatherData && state.weatherData?.current;
    }),
  getCurrentTheme: () => {
    const currentPhrase = get().weatherData?.current?.condition?.text ?? "";

    switch (currentPhrase) {
      case "Partly cloudy":
        return "cloudy";

      default:
        return "root";
    }
  },
}));
