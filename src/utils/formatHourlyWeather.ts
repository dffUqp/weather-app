/* eslint-disable @typescript-eslint/naming-convention */

import {
  IFormattedHourlyWeather,
  IHourlyWeather,
} from 'src/ts/hourlyWeatherTypes';

const formatHourlyWeather = (
  data: IHourlyWeather[]
): IFormattedHourlyWeather[] => {
  return data.map((value) => {
    const {
      main: { temp, feels_like, temp_min, temp_max, humidity },
      dt,
      weather,
      dt_txt,
      wind: { speed },
    } = value;

    const { main: details, icon } = weather[0];

    return {
      dt_txt,
      temp,
      feels_like,
      temp_min,
      temp_max,
      humidity,
      dt,
      details,
      icon,
      speed,
    };
  });
};

export default formatHourlyWeather;
