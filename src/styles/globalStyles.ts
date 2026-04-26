import { createGlobalStyle } from 'styled-components';
import { colorTextPrimary } from './colors';

export const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  html,
  body,
  #root {
    min-height: 100vh;
    /* Recorte na largura da viewport — conteúdo pode vazar do card, mas não alonga a página. */
    overflow-x: hidden;
  }

  body {
    margin: 0;
    background: #ffffff;
    color: ${colorTextPrimary};
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell',
      'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
  }
`;
