import { QueryClientProvider } from 'react-query';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import MuiWrapper from './components/MuiWrapper';
import { queryClient } from './plugins';
import router from './routes/router';

import { persistor, store } from './store';

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
