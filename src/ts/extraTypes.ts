type TColorValue = { r: number; g: number; b: number };

type TWeatherCoord = { lon: number; lat: number };
type TUnits = 'metric' | 'imperial' | 'standard';
type TDetails = 'Rain' | 'Clouds' | 'Clear' | 'Snow';

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
  main: TDetails;
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
  TDetails,
  TCityResponds,
  TWeatherCoord,
  TUnits,
  TWeatherSearchParams,
  TCitySearchParams,
  TMainWeatherInfo,
  TWeatherDetails,
  TWeatherWind,
  TColorValue,
};
