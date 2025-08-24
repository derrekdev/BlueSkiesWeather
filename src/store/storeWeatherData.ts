import { create } from "zustand";
import type { WeatherDataType } from "../types/store";
import type { WeatherApiResponseType } from "../types/weather";

export const useWeatherData = create<WeatherDataType>((set) => ({
  weatherData: { location: [], current: [], forecast: [] },
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
}));
