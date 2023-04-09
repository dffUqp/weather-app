import { useQuery } from 'react-query';
import { Box, Typography, Paper } from '@mui/material';

import WeatherService from 'src/services/weatherServices';
import { iconUrlFromCode, toLocalTime } from 'src/utils';
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
          <Paper
            sx={{
              maxWidth: '100px',
              width: '100%',
              height: '105px',
              background: 'transparent',
              textAlign: 'center',
              p: '10px',
            }}
            key={item.dt}
          >
            <Typography>{`${toLocalTime(
              item.dt,
              timezone,
              'h:mm a'
            )}`}</Typography>
            <Box display="flex" alignItems="center">
              <img src={iconUrlFromCode(item.icon)} alt="" width={40} />
              <Typography>{`${item.temp.toFixed()}°C`}</Typography>
            </Box>
            <Typography fontSize={14}>{item.details}</Typography>
          </Paper>
        ))
      )}
    </Box>
  );
}
