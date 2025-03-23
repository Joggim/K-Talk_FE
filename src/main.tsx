import { createRoot } from 'react-dom/client';
import { RecoilRoot } from 'recoil';
import { ThemeProvider } from 'styled-components';

import GlobalStyles from './styles/GlobalStyles';
import theme from './styles/theme';

import './styles/fonts/font.css';

import App from './App';

createRoot(document.getElementById('root')!).render(
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <RecoilRoot>
      <App />
    </RecoilRoot>
  </ThemeProvider>
);
