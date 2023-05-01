import { useEffect } from 'react';
import { useQuery } from 'react-query';
import { Box, Paper, Typography, IconButton } from '@mui/material';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';

import { useAppDispatch, useAppSelector } from 'src/store/hooks';
import {
  isFavoriteSelector,
  isFullFavoriteListSelector,
} from 'src/store/selectors';
import WeatherService from 'src/services/weatherServices';
import Loader from 'src/components/UI/Loader';
import type { TWeatherCoord } from 'src/ts/extraTypes';
import { backgroundValuesMap, iconUrlFromCode, toLocalTime } from 'src/utils';
import { addCards, deleteCards } from 'src/store/slices/weatherCardsSlice';
import { setBackgroundColor } from 'src/store/slices/themeSlice';

import WeatherInfo from '../WeatherInfo';
import { HourlyForecast } from '../HourlyForecast';

interface CityWeatherInfoProps {
  coord: TWeatherCoord;
  pathname: string;
}

const CityWeatherInfo = ({ pathname, coord }: CityWeatherInfoProps) => {
  const isFavorite = useAppSelector((state) =>
    isFavoriteSelector(state, coord.lat, coord.lon)
  );
  const isFullFavoriteList = useAppSelector(isFullFavoriteListSelector);
  const dispatch = useAppDispatch();

  const { data, isRefetching } = useQuery(
    ['city', pathname],
    () => {
      return WeatherService.getWeather({
        units: 'metric',
        ...coord,
      });
    },
    {
      onSuccess: (data) => {
        dispatch(
          setBackgroundColor(
            backgroundValuesMap[data.details] ?? backgroundValuesMap.default
          )
        );
      },
    }
  );

  const handleFavorite = () => {
    if (isFavorite) {
      dispatch(deleteCards(coord));
      return;
    }
    dispatch(addCards(coord));
  };

  if (isRefetching || data == null) {
    return (
      <Box height="95vh">
        <Loader />
      </Box>
    );
  }

  return (
    <Paper
      sx={{
        marginTop: '24px',
        p: '20px',
        display: 'flex',
        width: '100%',
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

            <Box display="flex" borderBottom="1px solid #D3D3D3">
              <Typography
                fontSize="24px"
                maxWidth="140px"
                textOverflow="ellipsis"
                whiteSpace="nowrap"
                overflow="hidden"
                textTransform="capitalize"
                marginRight={1}
              >
                {data.name},
              </Typography>
              <Typography fontSize="24px">{data.country}</Typography>
            </Box>

            <Typography fontSize="48px">{`${data.temp.toFixed()}°C`}</Typography>

            <Box display="flex" columnGap="5px" color="white">
              <Typography>{`High: ${data.temp_max.toFixed()}°C`}</Typography>|
              <Typography>{`Low: ${data.temp_min.toFixed()}°C`}</Typography>
            </Box>
          </Box>
          <IconButton
            onClick={handleFavorite}
            disabled={isFullFavoriteList && !isFavorite}
          >
            {isFavorite ? <BookmarkIcon /> : <BookmarkBorderIcon />}
          </IconButton>
        </Box>

        <WeatherInfo
          mt={2}
          humidity={data.humidity}
          speed={data.speed}
          feels_like={data.feels_like}
        />
      </Box>

      <Box order={{ md: 0, xs: 3 }}>
        <Typography fontSize={18}>
          Local time: {`${toLocalTime(data.dt, data.timezone, 'dddd, h:mm a')}`}
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
  );
};

export default CityWeatherInfo;
