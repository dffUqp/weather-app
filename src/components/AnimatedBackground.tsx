import { useState, useEffect } from 'react';
import { Box } from '@mui/material';
import { useAppDispatch, useAppSelector } from 'src/store/hooks';
import gradientAnimation from 'src/utils/gradientAnimation';
import { setCurrentBackgoundValue } from 'src/store/slices/themeSlice';
import {
  backgroundColorSelector,
  currentBackgroundValueSelector,
  newBackgroundValueSelector,
} from 'src/store/selectors';

const AnimatedBackground = () => {
  const newBackgroundValue = useAppSelector(newBackgroundValueSelector);
  const currentBackgroundValue = useAppSelector(currentBackgroundValueSelector);
  const backgroundColor = useAppSelector(backgroundColorSelector);
  const dispatch = useAppDispatch();

  const [animatedValue, setAnimatedValue] = useState(backgroundColor);

  useEffect(() => {
    if (
      JSON.stringify(newBackgroundValue) !==
      JSON.stringify(currentBackgroundValue)
    ) {
      gradientAnimation({
        updateColor: (color: string) => setAnimatedValue(color),
        currentGradient: currentBackgroundValue,
        newGradient: newBackgroundValue,
      });
      dispatch(setCurrentBackgoundValue());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [newBackgroundValue]);

  return (
    <Box
      sx={{
        position: 'absolute',
        background: animatedValue,
        height: '100vh',
        width: '100%',
        zIndex: -1,
      }}
    />
  );
};

export default AnimatedBackground;
