import type { AxiosResponse } from 'axios';

import { axios } from 'src/lib';
import {
  TCityResponds,
  TCitySearchParams,
  TWeatherSearchParams,
} from 'src/ts/extraTypes';
import { IHourlyWeatherResponds } from 'src/ts/hourlyWeatherTypes';
import type { IWeatherResponse } from 'src/ts/weatherTypes';
import { formatCurrentWeather, formatHourlyWeather } from 'src/utils';

const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

export default class WeatherService {
  static async getWeather(searchParams: TWeatherSearchParams) {
    return axios({
      method: 'GET',
      url: 'data/2.5/weather',
      params: { appid: API_KEY, ...searchParams },
    }).then((data: AxiosResponse<IWeatherResponse>) =>
      formatCurrentWeather(data.data)
    );
  }

  static async searchCity(searchParams: TCitySearchParams) {
    return axios({
      method: 'GET',
      url: 'geo/1.0/direct',
      params: { appid: API_KEY, limit: 5, ...searchParams },
    }).then((data: AxiosResponse<TCityResponds[]>) => data.data);
  }

  static async getHourlyForecast(searchParams: TWeatherSearchParams) {
    return axios({
      method: 'GET',
      url: 'data/2.5/forecast',
      params: { appid: API_KEY, cnt: 8, ...searchParams },
    }).then((data: AxiosResponse<IHourlyWeatherResponds>) =>
      formatHourlyWeather(data.data.list)
    );
  }
}
