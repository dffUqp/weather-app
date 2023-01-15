import { useQuery } from 'react-query';
import { Box, Typography, Paper } from '@mui/material';

import WeatherService from '../services/weatherServices';
import { iconUrlFromCode, toLocalTime } from '../utils';

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
  const { data } = useQuery('hourlyForecast', () =>
    WeatherService.getHourlyForecast({ lat, lon, units: 'metric' })
  );

  const today = toLocalTime(Math.floor(Date.now() / 1000), timezone, 'D');

  return (
    <Box
      display="flex"
      gap="10px"
      maxWidth="320px"
      flexWrap="wrap"
      justifyContent={{ sm: 'flex-end', xs: 'flex-start' }}
    >
      {[...(data ?? [])].map(
        (item) =>
          `${toLocalTime(item.dt, timezone, 'D')}` === `${today}` && (
            <Paper
              sx={{
                maxWidth: '100px',
                width: '100%',
                heigth: '140px',
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
          )
      )}
    </Box>
  );
}
