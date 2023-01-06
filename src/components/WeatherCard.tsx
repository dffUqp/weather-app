import {
  Box,
  Paper,
  Typography,
  IconButton,
  CircularProgress,
} from '@mui/material';
import CachedIcon from '@mui/icons-material/Cached';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';

import BgHover from './UI/BgHover';
import WeatherService from '../services/watherServices';
import SecWeatherInfo from './SecWeatherInfo';
import { iconUrlFromCode } from '../utils';

type TWeatherCardProps = {
  lat: number;
  lon: number;
  active?: boolean;
};

export default function WeatherCard({
  lat,
  lon,
  active = false,
}: TWeatherCardProps) {
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
          backgroundColor: 'transparent',
          height: '320px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          color: 'gray',
        }}
      >
        <CircularProgress color="inherit" />
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
    <Paper
      sx={{
        position: 'relative',
        backgroundColor: 'transparent',
        height: '320px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        p: '5px',
      }}
    >
      {active && (
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
      )}

      <Typography
        maxWidth="140px"
        textOverflow="ellipsis"
        whiteSpace="nowrap"
        overflow="hidden"
        textTransform="capitalize"
      >
        {data.name}, {data.country}
      </Typography>

      <img src={iconUrlFromCode(data.icon)} alt="" width="100" />

      <Box alignSelf="start" px="15px" width="100%">
        <Typography borderBottom="1px solid #D3D3D3">{`${data.details}`}</Typography>

        <Typography fontSize={48}>{`${data.temp.toFixed()}°C`}</Typography>

        <SecWeatherInfo
          humidity={data.humidity}
          speed={data.speed}
          feels_like={data.feels_like}
        />
      </Box>
    </Paper>
  );
}
