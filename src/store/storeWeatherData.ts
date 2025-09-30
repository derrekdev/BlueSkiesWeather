import { create } from "zustand";
import type { WeatherDataType } from "../types/store";
import type { WeatherApiResponseType } from "../types/weather";

export const useWeatherData = create<WeatherDataType>((set, get) => ({
  weatherData: { location: {}, current: [], forecast: [] },
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

    switch (currentPhrase.toLowerCase()) {
      case "partly cloudy":
      case "fog":
        return "cloudy";

      default:
        return "default";
    }
  },
  setCurrentLocation: (weatherLocation: string) =>
    set(() => ({
      currentLocation: weatherLocation,
    })),
}));
