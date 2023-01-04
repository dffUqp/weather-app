import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './assets/styles/main.css';
import MuiWrapper from './components/MuiWrapper';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <MuiWrapper>
      <App />
    </MuiWrapper>
  </React.StrictMode>
);
