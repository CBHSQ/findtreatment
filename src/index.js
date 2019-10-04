import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
import React from 'react';
import ReactDOM from 'react-dom';
import { ConnectedRouter } from 'connected-react-router';
import { Provider } from 'react-redux';
import ReactGA from 'react-ga';
import ScrollToTop from './components/ScrollToTop';
import configureStore, { history } from './store';
import App from './components/App';
import { hydrate, render } from 'react-dom';

import './tailwind.css';
import 'typeface-roboto-condensed';

if (process.env.NODE_ENV !== 'production') {
  var axe = require('react-axe');
  axe(React, ReactDOM, 1000);
}

ReactGA.initialize(
  process.env.REACT_APP_BRANCH === process.env.REACT_APP_PROD_BRANCH
    ? process.env.REACT_APP_PROD_GA_TRACKING_ID
    : process.env.REACT_APP_DEV_GA_TRACKING_ID
);

const store = configureStore({}, history);

const rootElement = document.getElementById('root');
if (rootElement.hasChildNodes()) {
  hydrate(
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <ScrollToTop>
          <App />
        </ScrollToTop>
      </ConnectedRouter>
    </Provider>,
    rootElement
  );
} else {
  render(
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <ScrollToTop>
          <App />
        </ScrollToTop>
      </ConnectedRouter>
    </Provider>,
    rootElement
  );
}
