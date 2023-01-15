import Paper from '@mui/material/Paper';
import { useQuery } from 'react-query';
import CachedIcon from '@mui/icons-material/Cached';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import WeatherService from '../../services/weatherServices';
import type { TWeatherCoord } from '../../ts/extraTypes';
import BgHover from '../UI/BgHover';
import WeatherCard from './WeatherCard';
import Loader from '../UI/Loader';

interface WeatherCardWithRefetchProps extends TWeatherCoord {}

const WeatherCardWithRefetch = ({ lat, lon }: WeatherCardWithRefetchProps) => {
  const navigate = useNavigate();
  const { data, isRefetching, refetch } = useQuery(
    `WeatherLat:${lat}Lon:${lon}`,
    () =>
      WeatherService.getWeather({
        lat,
        lon,
        units: 'metric',
      })
  );

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

  const refetchCurrentCity = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.stopPropagation();
    refetch();
  };

  return (
    <Box position="relative">
      <WeatherCard data={data} />
      <BgHover
        onClick={() => navigate(`/${data.name}`, { state: { lat, lon } })}
      >
        <IconButton
          disableTouchRipple
          sx={{ position: 'absolute', right: '0' }}
          onClick={refetchCurrentCity}
        >
          <CachedIcon />
        </IconButton>
      </BgHover>
    </Box>
  );
};

export default WeatherCardWithRefetch;
