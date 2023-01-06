type TWeatherCoord = { lon: number; lat: number };
type TUnits = 'metric' | 'imperial' | 'standard';

type TWeatherSearchParams = TWeatherCoord & { units: TUnits };

type TCitySearchParams = { q: string; limit?: number };

type TMainWeatherInfo = {
  feels_like: number;
  grnd_level: number;
  humidity: number;
  pressure: number;
  sea_level: number;
  temp: number;
  temp_max: number;
  temp_min: number;
};

type TWeatherDetails = {
  id: number;
  main: string;
  description: string;
  icon: string;
};

type TWeatherWind = {
  deg: number;
  gust: number;
  speed: number;
};

type TCityResponds = {
  name: string;
  country: string;
  state?: string;
} & TWeatherCoord;

export type {
  TCityResponds,
  TWeatherCoord,
  TUnits,
  TWeatherSearchParams,
  TCitySearchParams,
  TMainWeatherInfo,
  TWeatherDetails,
  TWeatherWind,
};
