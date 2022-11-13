import React from 'react';
import { render } from 'react-dom';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.js';
import { Provider } from 'react-redux';
import store from './store.js';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { red } from '@mui/material/colors';
const theme = createTheme({
  palette: {
    primary: {
      light: 'rgba(255, 144, 130, 1)',
      main: 'rgba(235, 94, 85, 1)',
      dark: 'rgba(179, 43, 44, 1)',
    },
    secondary: {
      light: 'rgba(249, 255, 255, 1)',
      main: 'rgba(198, 216, 211, 1)',
      dark: 'rgba(149, 167, 162, 1)',
    },
    text: {
      primary: 'rgba(0, 0, 0, 0.87)',
    },
  },
});
const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline>
          <App />
        </CssBaseline>
      </ThemeProvider>
    </BrowserRouter>
  </Provider>
);
