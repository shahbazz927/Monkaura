import {StrictMode} from 'react';
import {renderToString} from 'react-dom/server';
import {StaticRouter} from 'react-router-dom/server';
import {HelmetProvider} from 'react-helmet-async';
import App from './App';
import './index.css';

export function render(url: string) {
  const helmetContext: any = {};
  
  const html = renderToString(
    <StrictMode>
      <HelmetProvider context={helmetContext}>
        <StaticRouter location={url}>
          <App />
        </StaticRouter>
      </HelmetProvider>
    </StrictMode>
  );
  
  const { helmet } = helmetContext;
  
  return { html, helmet };
}
