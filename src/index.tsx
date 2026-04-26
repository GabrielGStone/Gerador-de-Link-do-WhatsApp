import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { GlobalStyle } from './styles/globalStyles';

const rootElement = document.getElementById('root');

if (rootElement === null) {
  throw new Error('Elemento #root não encontrado');
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <StrictMode>
    <GlobalStyle />
    <App />
  </StrictMode>,
);
