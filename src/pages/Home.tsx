import { Container } from '@mui/material';
import WeatherBoard from '../components/Weather/WeatherBoard';

export default function Home() {
  return (
    <Container maxWidth="lg">
      <WeatherBoard />
    </Container>
  );
}
