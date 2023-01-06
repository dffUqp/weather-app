import { useMemo } from 'react';
import {
  CircularProgress,
  Box,
  Paper,
  Typography,
  Container,
  IconButton,
} from '@mui/material';
import { useQuery } from 'react-query';
import { Navigate, useLocation } from 'react-router-dom';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';

import type { TWeatherCoord } from '../ts/extraTypes';
import WeatherService from '../services/watherServices';
import HourlyForecast from '../components/HourlyForecast';
import SecWeatherInfo from '../components/SecWeatherInfo';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { selectWeatherCards } from '../store/selectors';
import { addCards, deleteCards } from '../store/slices/weatherCardsSlice';
import { iconUrlFromCode, toLocalTime } from '../utils';

export default function City() {
  const location = useLocation();
  const cityState = location.state as TWeatherCoord;
  const favoriteCityes = useAppSelector(selectWeatherCards);
  const dispatch = useAppDispatch();

  const { data, isError, isRefetching } = useQuery(
    ['city', location.pathname],
    () => {
      if (cityState == null) {
        throw new Error('Oh no!');
      }
      return WeatherService.getWeather({
        lat: cityState.lat,
        lon: cityState.lon,
        units: 'metric',
      });
    }
  );

  // Temporary function
  const isFavorite = useMemo(() => {
    if (cityState != null) {
      return favoriteCityes.find(
        (v) => v.lat === cityState.lat && v.lon === cityState.lon
      );
    }
    return false;
  }, [favoriteCityes, cityState]);

  if (isError) {
    return <Navigate to="/" />;
  }

  if (isRefetching || data == null) {
    return (
      <Box
        color="gray"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <CircularProgress color="inherit" />
      </Box>
    );
  }

  return (
    <Container maxWidth="xl">
      <Paper
        sx={{
          backgroundColor: 'transparent',
          marginTop: '24px',
          p: '20px',
          display: 'flex',
          alignItems: 'flex-start',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          gap: '25px',
          minHeight: '375px',
        }}
        elevation={2}
      >
        <Box>
          <Box display="flex" alignItems="start">
            <Box>
              <img src={iconUrlFromCode(data.icon)} alt="" width={115} />

              <Typography fontSize="24px" borderBottom="1px solid #D3D3D3">
                {data.name}, {data.country}
              </Typography>

              <Typography fontSize="48px">{`${data.temp.toFixed()}°C`}</Typography>

              <Box display="flex" columnGap="5px" color="white">
                <Typography>{`High: ${data.temp_max.toFixed()}°C`}</Typography>|
                <Typography>{`Low: ${data.temp_min.toFixed()}°C`}</Typography>
              </Box>
            </Box>
            <IconButton
              onClick={() =>
                isFavorite
                  ? dispatch(deleteCards(cityState))
                  : dispatch(addCards(cityState))
              }
            >
              {isFavorite ? <BookmarkIcon /> : <BookmarkBorderIcon />}
            </IconButton>
          </Box>

          <SecWeatherInfo
            mt={2}
            humidity={data.humidity}
            speed={data.speed}
            feels_like={data.feels_like}
          />
        </Box>

        <Box order={{ md: 0, sm: 3 }}>
          <Typography fontSize={18}>
            Local time:{' '}
            {`${toLocalTime(data.dt, data.timezone, 'dddd, h:mm a')}`}
          </Typography>
        </Box>

        <Box textAlign={{ sm: 'end', xs: 'start' }} order={{ md: 0, xs: 2 }}>
          <Typography fontSize={18}>Hourly Forecast</Typography>
          <HourlyForecast
            lat={data.lat}
            lon={data.lon}
            timezone={data.timezone}
          />
        </Box>
      </Paper>
    </Container>
  );
}
