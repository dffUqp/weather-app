import { CssBaseline, ThemeProvider } from '@mui/material';
import { muiTheme } from 'src/lib';
import { useAppSelector } from 'src/store/hooks';
import AnimatedBackground from './AnimatedBackground';

interface IMuiWrapperProps {
  children: JSX.Element;
}

export default function MuiWrapper({
  children,
}: IMuiWrapperProps): JSX.Element {
  const backgroundColor = useAppSelector(
    (state) => state.persistedReducer.themeReducer.backgroundColor
  );

  const theme = muiTheme({ backgroundColor });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AnimatedBackground />
      {children}
    </ThemeProvider>
  );
}
