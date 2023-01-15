import type { AxiosResponse } from 'axios';

import { axios } from '../lib';
import {
  TCityResponds,
  TCitySearchParams,
  TWeatherSearchParams,
} from '../ts/extraTypes';
import { IHourlyWeatherResponds } from '../ts/hourlyWeatherTypes';
import type { IWeatherResponds } from '../ts/weatherTypes';
import { formatCurrentWeather, formatHourlyWeather } from '../utils';

const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

export default class WeatherService {
  static async getWeather(searchParams: TWeatherSearchParams) {
    return axios({
      method: 'GET',
      url: 'data/2.5/weather',
      params: { appid: API_KEY, ...searchParams },
    }).then(async (data: AxiosResponse<Promise<IWeatherResponds>>) =>
      formatCurrentWeather(await data.data)
    );
  }

  static async searchCity(searchParams: TCitySearchParams) {
    return axios({
      method: 'GET',
      url: 'geo/1.0/direct',
      params: { appid: API_KEY, limit: 5, ...searchParams },
    }).then((data: AxiosResponse<Promise<TCityResponds[]>>) => data.data);
  }

  static async getHourlyForecast(searchParams: TWeatherSearchParams) {
    return axios({
      method: 'GET',
      url: 'data/2.5/forecast',
      params: { appid: API_KEY, cnt: 8, ...searchParams },
    }).then(async (data: AxiosResponse<Promise<IHourlyWeatherResponds>>) =>
      formatHourlyWeather((await data.data).list)
    );
  }
}
