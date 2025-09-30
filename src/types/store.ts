import type { CurrentType, WeatherApiResponseType } from "./weather";

export type WeatherDataType = {
  weatherData: WeatherApiResponseType | unknown | any;
  currentLocation: string;
  addWeatherData: (weatherDataValue: WeatherApiResponseType) => void;
  getCurrentWeather: () => Partial<CurrentType>;
  getCurrentTheme: () => string | unknown;
  setCurrentLocation: (weatherLocation: string) => void;
};

export type LoadingType = {
  isLoading: boolean;
  openLoad: () => void;
  closeLoad: () => void;
  loadingStatus: () => void;
};
