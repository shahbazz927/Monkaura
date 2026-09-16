import { StrictMode } from 'react';
import { hydrateRoot, createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import App from './App.tsx';
import './index.css';

const rootElement = document.getElementById('root')!;
const isPrerendered = rootElement.innerHTML.trim() !== '<!--app-html-->' && rootElement.innerHTML.trim() !== '';

const app = (
  <StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </HelmetProvider>
  </StrictMode>
);

if (isPrerendered) {
  hydrateRoot(rootElement, app);
} else {
  createRoot(rootElement).render(app);
}
