import { create } from "zustand";
import type { WeatherDataType } from "../types/store";
import type { WeatherApiResponseType } from "../types/weather";

export const useWeatherData = create<WeatherDataType>((set, get) => ({
  weatherData: { location: {}, current: [], forecast: [] },
  currentTheme: "",
  currentLocation: "",
  // weatherData: [],
  addWeatherData: (weatherDataValue: WeatherApiResponseType) =>
    //  {
    //     const currentPhrase = get().weatherData?.current?.condition?.text ?? "";
    //     let themeString = '';

    //     switch (currentPhrase.toLowerCase()) {
    //       case "partly cloudy":
    //         themeString =  "cloudy";

    //         break;
    //       default:
    //         themeString =   "root";
    //         break;
    //   }
    set((state) => ({
      weatherData: weatherDataValue,
      currentTheme: state.weatherData?.current?.condition?.text,
    })),
  //  },

  getCurrentWeather: async () =>
    set((state) => {
      // return get().weatherData?.current;
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
