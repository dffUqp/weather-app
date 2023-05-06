import { IFormattedWeather, IWeatherResponse } from './weatherTypes';

interface IHourlyWeatherResponds {
  cod: string;
  message: number;
  cnt: number;
  list: IHourlyWeather[];
}

interface IFormattedHourlyWeather
  extends Omit<
    IFormattedWeather,
    'lat' | 'lon' | 'sunrise' | 'sunset' | 'country' | 'name' | 'timezone'
  > {
  dt_txt: number;
}

interface IHourlyWeather
  extends Omit<
    IWeatherResponse,
    'coord' | 'sys' | 'timezone' | 'id' | 'base' | 'name'
  > {
  sys: {
    pod: string;
  };
  rain: {
    '3h': number;
  };
  dt_txt: number;
}

export type { IHourlyWeatherResponds, IHourlyWeather, IFormattedHourlyWeather };
