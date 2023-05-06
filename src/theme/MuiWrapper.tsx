import { CssBaseline, ThemeProvider } from '@mui/material';
import { useAppSelector } from 'src/store/hooks';
import AnimatedBackground from './AnimatedBackground';
import MuiTheme from './theme';

interface IMuiWrapperProps {
  children: JSX.Element;
}

export default function MuiWrapper({
  children,
}: IMuiWrapperProps): JSX.Element {
  const backgroundColor = useAppSelector(
    (state) => state.persistedReducer.themeReducer.backgroundColor
  );

  const theme = MuiTheme({ backgroundColor });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AnimatedBackground />
      {children}
    </ThemeProvider>
  );
}
