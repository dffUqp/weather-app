import { AppState } from '.';

// eslint-disable-next-line import/prefer-default-export
export const selectWeatherCards = (state: AppState) =>
  state.persistedReducer.weatherCardsReducer.weatherCards;
