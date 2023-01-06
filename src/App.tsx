import { QueryClientProvider } from 'react-query';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import MuiWrapper from './components/MuiWrapper';
import Home from './pages/Home';
import { queryClient } from './plugins';
import { persistor, store } from './store';

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <MuiWrapper>
            <Home />
          </MuiWrapper>
        </PersistGate>
      </Provider>
    </QueryClientProvider>
  );
}

export default App;
