import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { TColorValue } from 'src/ts/extraTypes';

type TThemeSlice = {
  backgroundColor: string;
  backgroundValue: TColorValue[];
  currentBackgroundValue: TColorValue[];
};

const initialState: TThemeSlice = {
  backgroundColor:
    'linear-gradient(90deg, rgb(0, 151, 167), rgb(33, 150, 243))',
  backgroundValue: [
    { r: 0, g: 151, b: 167 },
    { r: 33, g: 150, b: 243 },
  ],
  currentBackgroundValue: [
    { r: 0, g: 151, b: 167 },
    { r: 33, g: 150, b: 243 },
  ],
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setBackgroundColor: (state, action: PayloadAction<TColorValue[]>) => {
      // eslint-disable-next-line no-param-reassign
      state.backgroundValue = action.payload;

      const firstColor = Object.values(action.payload[0]);
      const secondColor = Object.values(action.payload[1]);

      // eslint-disable-next-line no-param-reassign
      state.backgroundColor = `linear-gradient(90deg, rgb(${firstColor}), rgb(${secondColor}))`;
    },
    setCurrentBackgoundValue: (state) => {
      // eslint-disable-next-line no-param-reassign
      state.currentBackgroundValue = state.backgroundValue;
    },
  },
});

export const { setBackgroundColor, setCurrentBackgoundValue } =
  themeSlice.actions;

export default themeSlice.reducer;
