import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
import React from 'react';
import ReactDOM from 'react-dom';
import { ConnectedRouter } from 'connected-react-router';
import { Provider } from 'react-redux';
import ReactGA from 'react-ga';
import { ThemeProvider } from 'styled-components';
import ScrollToTop from './components/ScrollToTop';
import configureStore, { history } from './store';
import App from './components/App';
import { hydrate, render } from 'react-dom';
import { theme } from './tailwind.js';
import './tailwind.css';
import 'typeface-roboto-condensed';

if (process.env.NODE_ENV !== 'production') {
  var axe = require('react-axe');
  axe(React, ReactDOM, 1000);
}

ReactGA.initialize(
  process.env.REACT_APP_BRANCH === process.env.REACT_APP_PROD_BRANCH
    ? process.env.REACT_APP_PROD_GA_TRACKING_ID
    : process.env.REACT_APP_DEV_GA_TRACKING_ID,
  { debug: process.env.REACT_APP_LOCAL_ANALYTICS_TESTING }
);

const store = configureStore({}, history);

const Root = (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <ScrollToTop>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </ScrollToTop>
    </ConnectedRouter>
  </Provider>
);

const rootElement = document.getElementById('root');
if (rootElement.hasChildNodes()) {
  hydrate(Root, rootElement);
} else {
  render(Root, rootElement);
}
