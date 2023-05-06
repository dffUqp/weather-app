import { useQuery } from 'react-query';
import { Box } from '@mui/material';

import WeatherService from 'src/services/weatherServices';
import { toLocalTime } from 'src/utils';
import WeatherByTimeBlock from 'src/components/WeatherByTimeBlock';

import HourlyForecastLoader from './HourlyForecastLoader';

type THourlyForecastProps = {
  lat: number;
  lon: number;
  timezone: number;
};

export default function HourlyForecast({
  lat,
  lon,
  timezone,
}: THourlyForecastProps): JSX.Element {
  const { data, isRefetching } = useQuery('hourlyForecast', () =>
    WeatherService.getHourlyForecast({ lat, lon, units: 'metric' })
  );

  return (
    <Box
      display="flex"
      gap="10px"
      width="320px"
      flexWrap="wrap"
      justifyContent={{ sm: 'flex-end', xs: 'flex-start' }}
    >
      {isRefetching || data == null ? (
        <HourlyForecastLoader />
      ) : (
        data.map((item) => (
          <WeatherByTimeBlock
            key={item.dt}
            time={toLocalTime(item.dt, timezone, 'h:mm a')}
            icon={item.icon}
            temp={item.temp}
            details={item.details}
          />
        ))
      )}
    </Box>
  );
}
