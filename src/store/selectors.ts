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
