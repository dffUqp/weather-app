import { Link, Outlet } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import { IconButton, Box } from '@mui/material';
import CitySearch from '../components/CitySearch';

export default function RootLayout() {
  return (
    <>
      <header>
        <Box display="flex" px="14px">
          <Link to="/">
            <IconButton disableRipple>
              <HomeIcon fontSize="large" />
            </IconButton>
          </Link>
          <CitySearch />
        </Box>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
}
