import {
  TDetails,
  TMainWeatherInfo,
  TWeatherCoord,
  TWeatherDetails,
  TWeatherWind,
} from './extraTypes';

interface IWeatherResponse {
  base: string;
  clouds: { all: number };
  cod: number;
  coord: TWeatherCoord;
  dt: number;
  id: number;
  main: TMainWeatherInfo;
  name: string;
  sys: {
    country: string;
    sunrise: number;
    sunset: number;
  };
  timezone: number;
  visibility: number;
  weather: TWeatherDetails[];
  wind: TWeatherWind;
}

interface IFormattedWeather {
  lat: number;
  lon: number;
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  humidity: number;
  name: string;
  dt: number;
  country: string;
  sunrise: number;
  sunset: number;
  details: TDetails;
  icon: string;
  speed: number;
  timezone: number;
}

export type { IWeatherResponse, IFormattedWeather };
