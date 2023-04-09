import { Typography, Box, BoxProps } from '@mui/material';
import DeviceThermostatIcon from '@mui/icons-material/DeviceThermostat';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import AirIcon from '@mui/icons-material/Air';

type WeatherInfoProps = {
  feels_like: number;
  humidity: number;
  speed: number;
} & BoxProps<'div'>;

export default function WeatherInfo({
  feels_like,
  humidity,
  speed,
  ...props
}: WeatherInfoProps) {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      color="white"
      fontSize={{ xs: 12, md: 16 }}
      {...props}
    >
      <Box display="flex" alignItems="center">
        <DeviceThermostatIcon fontSize="small" sx={{ mr: 1 }} />
        Real feel:
        <Typography
          display="inline"
          ml={1}
          fontSize={{ xs: 12, md: 16 }}
        >{`${feels_like.toFixed()}°`}</Typography>
      </Box>
      <Box display="flex" alignItems="center">
        <FilterAltIcon fontSize="small" sx={{ mr: 1 }} />
        Humidity:
        <Typography
          display="inline"
          ml={1}
          fontSize={{ xs: 12, md: 16 }}
        >{`${humidity.toFixed()}%`}</Typography>
      </Box>
      <Box display="flex" alignItems="center">
        <AirIcon fontSize="small" sx={{ mr: 1 }} />
        Wind:
        <Typography
          display="inline"
          ml={1}
          fontSize={{ xs: 12, md: 16 }}
        >{`${speed.toFixed()} km/h`}</Typography>
      </Box>
    </Box>
  );
}
