import { Box, Paper, Typography, PaperProps } from '@mui/material';
import { iconUrlFromCode } from 'src/utils';
import { IFormattedWeather } from 'src/ts/weatherTypes';
import WeatherInfoBlock from './WeatherInfoBlock';

type TWeatherCardProps = {
  data: IFormattedWeather;
} & PaperProps<'div'>;

export default function WeatherCard({ data, ...props }: TWeatherCardProps) {
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

      <img src={iconUrlFromCode(icon)} alt="" width="100" />

      <Box alignSelf="start" px="15px" width="100%">
        <Typography borderBottom="1px solid #D3D3D3">{`${data.details}`}</Typography>

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
