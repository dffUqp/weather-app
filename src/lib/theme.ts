import {
  createTheme,
  TypographyVariantsOptions,
  PaletteOptions,
  Components,
  Theme,
} from '@mui/material';
import { BreakpointsOptions } from '@mui/material/styles';

const typography: TypographyVariantsOptions = {
  fontFamily: 'Roboto',
};

const palette: PaletteOptions = {
  primary: {
    main: '#2196f3',
    light: '#42a5f5',
    dark: '#1976d2',
  },
  text: {
    primary: '#ffffff',
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
      '*': {
        boxSizing: 'border-box',
      },
      body: {
        backgroundColor: '#0097a7',
        backgroundImage: 'linear-gradient(to right, #0097a7 0%, #2196f3 100%)',
      },
    },
  },
  MuiPaper: {
    styleOverrides: {
      root: {
        backgroundColor: 'transparent',
      },
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
