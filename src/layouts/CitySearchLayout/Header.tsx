import { Link } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import { IconButton, Box } from '@mui/material';
import CitySearch from 'src/components/CitySearch';

const Header = () => {
  return (
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
  );
};

export default Header;
