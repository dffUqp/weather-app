import {
  createTheme,
  TypographyVariantsOptions,
  PaletteOptions,
  Components,
  Theme,
} from '@mui/material';
import { BreakpointsOptions } from '@mui/material/styles';

const MuiTheme = ({ backgroundColor }: { backgroundColor: string }) => {
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
          backgroundImage: backgroundColor,
          height: '100vh',
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
    MuiAutocomplete: {
      styleOverrides: {
        paper: {
          color: 'black',
          backgroundColor: 'white',
        },
      },
    },
  };

  return createTheme({
    typography,
    palette,
    components,
    breakpoints,
  });
};

export default MuiTheme;
