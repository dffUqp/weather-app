import { IFormateWeather, IWeatherResponds } from './weatherTypes';

interface IHourlyWeatherResponds {
  cod: string;
  message: number;
  cnt: number;
  list: IHourlyWeather[];
}

interface IFormatedHourlyWeather
  extends Omit<
    IFormateWeather,
    'lat' | 'lon' | 'sunrise' | 'sunset' | 'country' | 'name' | 'timezone'
  > {
  dt_txt: number;
}

interface IHourlyWeather
  extends Omit<
    IWeatherResponds,
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

export type { IHourlyWeatherResponds, IHourlyWeather, IFormatedHourlyWeather };
