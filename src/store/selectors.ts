import { AppState } from '.';

export const weatherCardsSelector = (state: AppState) =>
  state.persistedReducer.weatherCardsReducer.weatherCards;

export const isFavoriteSelector = (
  state: AppState,
  lat: number,
  lon: number
) => {
  return weatherCardsSelector(state).find(
    (value) => value.lat === lat && value.lon === lon
  );
};

export const isFullFavoriteListSelector = (state: AppState) =>
  state.persistedReducer.weatherCardsReducer.weatherCards.length >= 8;

export const newBackgroundValueSelector = (state: AppState) =>
  state.persistedReducer.themeReducer.backgroundValue;

export const currentBackgroundValueSelector = (state: AppState) =>
  state.persistedReducer.themeReducer.currentBackgroundValue;

export const backgroundColorSelector = (state: AppState) =>
  state.persistedReducer.themeReducer.backgroundColor;
