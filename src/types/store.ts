import type { CurrentType, WeatherApiResponseType } from "./weather";

export type WeatherDataType = {
  weatherData: WeatherApiResponseType | unknown | any;
  addWeatherData: (weatherDataValue: WeatherApiResponseType) => void;
  getCurrentWeather: () => Partial<CurrentType>;
};

export type LoadingType = {
  isLoading: boolean;
  openLoad: () => void;
  closeLoad: () => void;
  loadingStatus: () => void;
};
