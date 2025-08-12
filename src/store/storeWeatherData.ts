import { create } from "zustand";
import type { CurrentType, WeatherApiResponseType } from "../types/weather";

type WeatherDataType = {
  weatherData: WeatherApiResponseType | unknown | any;
  addWeatherData: (weatherDataValue: WeatherApiResponseType) => void;
  getCurrentWeather: () => Partial<CurrentType>;
};

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
