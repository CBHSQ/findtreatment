import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
import 'typeface-roboto-condensed';
import React from 'react';
import ReactDOM, { hydrate, render } from 'react-dom';
import { ConnectedRouter } from 'connected-react-router';
import { Provider } from 'react-redux';
import ReactGA from 'react-ga';
import { ThemeProvider } from 'styled-components';

import configureStore, { history } from './store';
import App from './components/App';
import { theme } from './tailwind.js';
import './tailwind.css';

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

const isReactSnap = navigator && navigator.userAgent === 'ReactSnap';

const Root = (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <ThemeProvider theme={theme}>
        <App isReactSnap={isReactSnap} />
      </ThemeProvider>
    </ConnectedRouter>
  </Provider>
);

const rootElement = document.getElementById('root');
if (rootElement.hasChildNodes()) {
  hydrate(Root, rootElement);
} else {
  render(Root, rootElement);
}
