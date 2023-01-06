import { IFormateWeather, IWeatherResponds } from '../ts/weatherTypes';

const formatCurrentWeather = (data: IWeatherResponds): IFormateWeather => {
  const {
    coord: { lat, lon },
    // eslint-disable-next-line @typescript-eslint/naming-convention
    main: { temp, feels_like, temp_min, temp_max, humidity },
    name,
    dt,
    weather,
    timezone,
    sys: { country, sunrise, sunset },
    wind: { speed },
  } = data;

  const { main: details, icon } = weather[0];

  return {
    lat,
    lon,
    temp,
    timezone,
    feels_like,
    temp_min,
    temp_max,
    humidity,
    name,
    dt,
    country,
    sunrise,
    sunset,
    details,
    icon,
    speed,
  };
};

export default formatCurrentWeather;
