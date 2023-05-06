import { Box, Grid, Typography } from '@mui/material';
import { useAppSelector } from 'src/store/hooks';
import { weatherCardsSelector } from 'src/store/selectors';
import WeatherCardWithActions from './WeatherCardWithActions';

function WeatherBoard() {
  const favoriteCityArray = useAppSelector(weatherCardsSelector);

  return (
    <Box
      sx={{
        maxWidth: 1145,
        width: '100%',
        minHeight: 650,
        height: 'auto',
        margin: '10px auto 5px',
        p: '10px',
      }}
    >
      <Grid container rowSpacing={2} columnSpacing={{ xs: 3, md: 6 }}>
        {favoriteCityArray.length === 0 && (
          <Box display="flex" width="100%" justifyContent="center">
            <Typography color="lightgrey">
              You have no cities added, try to use search
            </Typography>
          </Box>
        )}
        {favoriteCityArray.map((city) => (
          <Grid item xs="auto" sm={4} md={3} key={`${city.lat}-${city.lon}`}>
            <WeatherCardWithActions lat={city.lat} lon={city.lon} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default WeatherBoard;
