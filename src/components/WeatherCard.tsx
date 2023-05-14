import { Box, Paper, Typography, PaperProps } from '@mui/material';
import { iconUrlFromCode } from 'src/utils';
import { IFormattedWeather } from 'src/ts/weatherTypes';
import WeatherInfoBlock from './WeatherInfoBlock';

type TWeatherCardProps = {
  data: IFormattedWeather;
  centredView?: boolean;
} & PaperProps<'div'>;

export default function WeatherCard({
  data,
  centredView = false,
  ...props
}: TWeatherCardProps) {
  const {
    name,
    country,
    icon,
    temp,
    humidity,
    speed,
    feels_like: feelsLike,
  } = data;

  return (
    <Paper
      sx={{
        position: 'relative',
        height: '320px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        p: '5px',
      }}
      {...props}
    >
      <Typography
        maxWidth="140px"
        textOverflow="ellipsis"
        whiteSpace="nowrap"
        overflow="hidden"
        textTransform="capitalize"
      >
        {name}, {country}
      </Typography>

      <img
        src={iconUrlFromCode(icon)}
        alt="weather icon"
        width="100"
        height="100"
      />

      <Box
        display="flex"
        flexDirection="column"
        px="15px"
        width="100%"
        sx={{
          alignItems: centredView ? 'center' : 'flex-start',
        }}
      >
        <Typography>{`${data.details}`}</Typography>

        <Box
          width="100%"
          marginY="5px"
          height="0.5px"
          sx={{ backgroundColor: '#D3D3D3' }}
        />

        <Typography fontSize={48}>{`${temp.toFixed()}°C`}</Typography>

        <WeatherInfoBlock
          humidity={humidity}
          speed={speed}
          feels_like={feelsLike}
        />
      </Box>
    </Paper>
  );
}
