import { useMemo } from 'react';
import { useQuery } from 'react-query';
import { Box, Paper, Typography, IconButton } from '@mui/material';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { selectWeatherCards } from '../../store/selectors';
import WeatherService from '../../services/weatherServices';
import type { TWeatherCoord } from '../../ts/extraTypes';
import HourlyForecast from '../HourlyForecast';
import { iconUrlFromCode, toLocalTime } from '../../utils';
import { addCards, deleteCards } from '../../store/slices/weatherCardsSlice';
import SecWeatherInfo from '../SecWeatherInfo';
import Loader from '../UI/Loader';

interface CityWeatherInfoProps {
  coord: TWeatherCoord;
  pathname: string;
}

const CityWeatherInfo = ({ pathname, coord }: CityWeatherInfoProps) => {
  const favoriteCityes = useAppSelector(selectWeatherCards);
  const dispatch = useAppDispatch();

  const { data, isRefetching } = useQuery(['city', pathname], () => {
    return WeatherService.getWeather({
      units: 'metric',
      ...coord,
    });
  });

  // Temporary function
  const isFavorite = useMemo(() => {
    return favoriteCityes.find(
      (value) => value.lat === coord.lat && value.lon === coord.lon
    );
  }, [favoriteCityes, coord]);

  if (isRefetching || data == null) {
    return <Loader />;
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
                ? dispatch(deleteCards(coord))
                : dispatch(addCards(coord))
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
