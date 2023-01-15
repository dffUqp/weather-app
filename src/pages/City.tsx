import Container from '@mui/material/Container';
import { Navigate, useLocation } from 'react-router-dom';
import CityWeatherInfo from '../components/City/CityWeatherInfo';

import type { TWeatherCoord } from '../ts/extraTypes';

export default function City() {
  const location = useLocation();
  const cityState = location.state as TWeatherCoord | null;

  if (!cityState) {
    return <Navigate to="/" />;
  }

  return (
    <Container maxWidth="xl">
      <CityWeatherInfo pathname={location.pathname} coord={cityState} />
    </Container>
  );
}
