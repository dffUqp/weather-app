type TWeatherCoord = { lon: number; lat: number };

type TSearchParams = { q: string } | TWeatherCoord;

interface IWeatherResponds {
  base: string;
  clouds: { all: number };
  cod: number;
  coord: TWeatherCoord;
  dt: number;
  id: number;
  main: {
    feels_like: number;
    grnd_level: number;
    humidity: number;
    pressure: number;
    sea_level: number;
    temp: number;
    temp_max: number;
    temp_min: number;
  };
  name: string;
  sys: {
    country: string;
    sunrise: number;
    sunset: number;
  };
  timezone: number;
  visibility: number;
  weather: { id: number; main: string; description: string; icon: string }[];
  wind: { deg: number; gust: number; speed: number };
}

interface IFormateWeather {
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
  details: string;
  icon: string;
  speed: number;
}

export type { TSearchParams, IWeatherResponds, IFormateWeather };
