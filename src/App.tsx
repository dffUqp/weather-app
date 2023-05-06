import { QueryClientProvider } from 'react-query';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';

import router from 'src/routes/router';
import { queryClient } from 'src/lib';
import { persistor, store } from 'src/store';

import MuiWrapper from './theme/MuiWrapper';

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <MuiWrapper>
            <RouterProvider router={router} />
          </MuiWrapper>
        </PersistGate>
      </Provider>
    </QueryClientProvider>
  );
}

export default App;
