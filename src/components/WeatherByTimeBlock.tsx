import { Box, Typography, Paper } from '@mui/material';
import { iconUrlFromCode } from 'src/utils';

type WeatherByTimeBlockProps = {
  time: string;
  icon: string;
  temp: number;
  details: string;
};

const WeatherByTimeBlock = ({
  time,
  icon,
  temp,
  details,
}: WeatherByTimeBlockProps): JSX.Element => {
  return (
    <Paper
      sx={{
        maxWidth: '100px',
        width: '100%',
        height: '105px',
        background: 'transparent',
        textAlign: 'center',
        p: '10px',
      }}
    >
      <Typography>{time}</Typography>
      <Box display="flex" alignItems="center">
        <img src={iconUrlFromCode(icon)} alt="" width={40} />
        <Typography>{`${temp.toFixed()}°C`}</Typography>
      </Box>
      <Typography fontSize={14}>{details}</Typography>
    </Paper>
  );
};

export default WeatherByTimeBlock;
