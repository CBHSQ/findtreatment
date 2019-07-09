import React from 'react';
import ReactDOM from 'react-dom';
import { ConnectedRouter } from 'connected-react-router';
import { Provider } from 'react-redux';
import ReactGA from 'react-ga';
import ScrollToTop from './components/ScrollToTop';
import configureStore, { history } from './store';
import App from './components/App';

import './css/build/tailwind.css';

ReactGA.initialize('UA-143220884-1');

const store = configureStore({}, history);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter
      history={history}
      basename={process.env.REACT_APP_FEDERALIST_BASEURL}
    >
      <ScrollToTop>
        <App />
      </ScrollToTop>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);
