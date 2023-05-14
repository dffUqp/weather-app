import { useQuery } from 'react-query';
import { Paper, useMediaQuery, useTheme } from '@mui/material';
import WeatherService from 'src/services/weatherServices';
import type { TWeatherCoord } from 'src/ts/extraTypes';

import Loader from 'src/components/UI/Loader';
import WeatherCard from 'src/components/WeatherCard';
import BgHover from './BgHover';

interface WeatherCardWithActionsProps extends TWeatherCoord {}

const WeatherCardWithActions = ({ lat, lon }: WeatherCardWithActionsProps) => {
  const { data, isRefetching, refetch } = useQuery(
    `WeatherLat:${lat}Lon:${lon}`,
    () =>
      WeatherService.getWeather({
        lat,
        lon,
        units: 'metric',
      })
  );

  const theme = useTheme();
  const centredWeatherCard = useMediaQuery(theme.breakpoints.down('sm'));

  if (data == null || isRefetching) {
    return (
      <Paper
        sx={{
          display: 'flex',
          height: '320px',
        }}
      >
        <Loader />
      </Paper>
    );
  }

  return (
    <BgHover lat={lat} lon={lon} refetch={refetch} name={data.name}>
      <WeatherCard data={data} centredView={centredWeatherCard} />
    </BgHover>
  );
};

export default WeatherCardWithActions;
