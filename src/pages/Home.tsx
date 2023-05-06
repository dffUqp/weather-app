import { Container } from '@mui/material';
import { WeatherBoard } from 'src/modules/WeatherBoard';

export default function Home() {
  return (
    <Container maxWidth="lg">
      <WeatherBoard />
    </Container>
  );
}
