import { createBrowserHistory } from 'history';
import { applyMiddleware, compose, createStore } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { googleAnalytics } from './middleware/reactGA';
import createRootReducer from './reducers';

export const history = createBrowserHistory({
  basename: process.env.REACT_APP_FEDERALIST_BASEURL
});

const middleware = [routerMiddleware(history), thunk, googleAnalytics, logger];

export default function configureStore(preloadedState) {
  const store = createStore(
    createRootReducer(history),
    preloadedState,
    compose(applyMiddleware(...middleware))
  );

  return store;
}
