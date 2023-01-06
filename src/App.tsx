import { QueryClientProvider } from 'react-query';
import MuiWrapper from './components/MuiWrapper';
import { queryClient } from './plugins';

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <MuiWrapper>
        <div>Hello World</div>
      </MuiWrapper>
    </QueryClientProvider>
  );
}

export default App;
