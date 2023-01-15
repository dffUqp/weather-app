import { QueryClientProvider } from 'react-query';
import { BrowserRouter } from 'react-router-dom';
import { describe, it } from 'vitest';

import Home from '../pages/Home';
import { queryClient } from '../lib';
import renderWithRedux from './renderWithRedux';

describe('HomePage', () => {
  it('should render list', () => {
    const { getAllByTestId } = renderWithRedux(
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Home />
        </BrowserRouter>
      </QueryClientProvider>,
      {
        persistedReducer: {
          weatherCardsReducer: {
            weatherCards: [
              { lat: 37.1289771, lon: -84.0832646 },
              { lat: 35.6828387, lon: 139.7594549 },
              { lat: 46.4843023, lon: 30.7322878 },
            ],
          },
        },
      }
    );

    const tickers = getAllByTestId('card-item');

    expect(tickers.length).toBe(3);
  });

  it('should not render list', () => {
    const { queryAllByTestId } = renderWithRedux(
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Home />
        </BrowserRouter>
      </QueryClientProvider>,
      {
        persistedReducer: {
          weatherCardsReducer: {
            weatherCards: [],
          },
        },
      }
    );

    const tickers = queryAllByTestId('card-item');

    expect(tickers.length).toBe(0);
  });
});
