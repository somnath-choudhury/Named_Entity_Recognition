import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.tsx';
import './index.css';
import { NERProvider } from './context/NERContext';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <NERProvider>
        <App />
      </NERProvider>
    </BrowserRouter>
  </StrictMode>
);