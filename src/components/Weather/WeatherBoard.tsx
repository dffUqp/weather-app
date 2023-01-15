import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { useAppSelector } from '../../store/hooks';
import { selectWeatherCards } from '../../store/selectors';
import WeatherCardWithRefetch from './WeatherCardWithRefetch';

function WeatherBoard() {
  const favoriteCityArray = useAppSelector(selectWeatherCards);

  return (
    <Box
      sx={{
        maxWidth: 1145,
        width: '100%',
        minHeight: 650,
        height: 'auto',
        margin: '10px auto 5px',
        p: '12px',
        border: '1px solid black',
      }}
    >
      <Grid container rowSpacing={2} columnSpacing={{ xs: 3, md: 6 }}>
        {favoriteCityArray.map((city, index) => (
          <Grid
            item
            xs="auto"
            sm={4}
            md={3}
            key={index}
            data-testid="card-item"
          >
            <WeatherCardWithRefetch lat={city.lat} lon={city.lon} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default WeatherBoard;
