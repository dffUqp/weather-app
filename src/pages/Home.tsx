import { Container, Box, Grid } from '@mui/material';
import WeatherCard from '../components/WeatherCard';
import { useAppSelector } from '../store/hooks';
import { selectWeatherCards } from '../store/selectors';

export default function Home() {
  const favoriteCityArray = useAppSelector(selectWeatherCards);

  return (
    <Container maxWidth="lg">
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
              <WeatherCard active lat={city.lat} lon={city.lon} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
}
