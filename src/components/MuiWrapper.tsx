import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import { blue, cyan } from '@mui/material/colors';

interface IMuiWrapperProps {
  children: JSX.Element;
}

export default function MuiWrapper({
  children,
}: IMuiWrapperProps): JSX.Element {
  const theme = createTheme({
    typography: {
      fontFamily: 'Roboto',
    },
    palette: {
      primary: {
        main: blue[500],
        light: blue[400],
        dark: blue[700],
      },
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          body: {
            backgroundColor: blue[500],
            backgroundImage: `linear-gradient(to right, ${cyan[700]} 0%, ${blue[500]} 100%)`,
          },
        },
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}
