import {
  createTheme,
  TypographyVariantsOptions,
  PaletteOptions,
  Components,
  Theme,
} from '@mui/material';
import { blue, cyan } from '@mui/material/colors';
import { BreakpointsOptions } from '@mui/material/styles';

const typography: TypographyVariantsOptions = {
  fontFamily: 'Roboto',
};

const palette: PaletteOptions = {
  primary: {
    main: blue[500],
    light: blue[400],
    dark: blue[700],
  },
};

const breakpoints: BreakpointsOptions = {
  values: {
    xs: 0,
    sm: 600,
    md: 900,
    lg: 1200,
    xl: 1536,
  },
};

const components: Components<Omit<Theme, 'components'>> = {
  MuiCssBaseline: {
    styleOverrides: {
      body: {
        backgroundColor: blue[500],
        backgroundImage: `linear-gradient(to right, ${cyan[700]} 0%, ${blue[500]} 100%)`,
      },
    },
  },
  MuiTypography: {
    defaultProps: {
      color: 'white',
    },
  },
};

const theme = createTheme({
  typography,
  palette,
  components,
  breakpoints,
});

export default theme;
