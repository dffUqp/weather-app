import { useQuery } from 'react-query';
import CachedIcon from '@mui/icons-material/Cached';
import { useNavigate } from 'react-router-dom';
import { Box, Paper } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import WeatherService from 'src/services/weatherServices';
import type { TWeatherCoord } from 'src/ts/extraTypes';
import { useAppDispatch, useAppSelector } from 'src/store/hooks';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import { addCards, deleteCards } from 'src/store/slices/weatherCardsSlice';

import { isFavoriteSelector } from 'src/store/selectors';
import Loader from 'src/components/UI/Loader';
import WeatherCard from 'src/components/WeatherCard';
import BgHover from 'src/components/UI/BgHover';

interface WeatherCardWithActionsProps extends TWeatherCoord {}

const WeatherCardWithActions = ({ lat, lon }: WeatherCardWithActionsProps) => {
  const navigate = useNavigate();
  const isFavorite = useAppSelector((state) =>
    isFavoriteSelector(state, lat, lon)
  );
  const dispatch = useAppDispatch();

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

  const handleFavorite = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.stopPropagation();

    if (isFavorite) {
      dispatch(deleteCards({ lat, lon }));
      return;
    }
    dispatch(addCards({ lat, lon }));
  };

  return (
    <Box position="relative">
      <WeatherCard data={data} />
      <BgHover
        onClick={() => navigate(`/${data.name}`, { state: { lat, lon } })}
      >
        <IconButton
          disableTouchRipple
          sx={{ position: 'absolute', left: '0' }}
          onClick={handleFavorite}
        >
          {isFavorite ? <BookmarkIcon /> : <BookmarkBorderIcon />}
        </IconButton>

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

export default WeatherCardWithActions;
