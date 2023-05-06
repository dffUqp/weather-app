import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TWeatherCoord } from 'src/ts/extraTypes';

type TWeatherCard = {
  weatherCards: TWeatherCoord[];
};

const initialState: TWeatherCard = {
  weatherCards: [
    { lat: 37.1289771, lon: -84.0832646 },
    { lat: 35.6828387, lon: 139.7594549 },
    { lat: 46.4843023, lon: 30.7322878 },
    { lat: -0.2802724, lon: 36.0712048 },
  ],
};

const weatherCardsSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    addCards: (state, action: PayloadAction<TWeatherCoord>) => {
      state.weatherCards.push(action.payload);
    },
    deleteCards: (state, action: PayloadAction<TWeatherCoord>) => {
      // eslint-disable-next-line no-param-reassign
      state.weatherCards = state.weatherCards.filter(
        (v) => !(v.lat === action.payload.lat && v.lon === action.payload.lon)
      );
    },
  },
});

export const { addCards, deleteCards } = weatherCardsSlice.actions;

export default weatherCardsSlice.reducer;
