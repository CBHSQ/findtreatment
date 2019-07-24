import { createBrowserHistory } from 'history';
import { applyMiddleware, compose, createStore } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { analytics } from './middleware/analytics';
import createRootReducer from './reducers';

export const history = createBrowserHistory({
  basename: process.env.PUBLIC_URL
});

const middleware = [routerMiddleware(history), thunk];

if (process.env.NODE_ENV !== 'production') {
  const logger = createLogger({
    collapsed: true
  });
  middleware.push(logger);
} else {
  middleware.push(analytics);
}

export default function configureStore(preloadedState) {
  const store = createStore(
    createRootReducer(history),
    preloadedState,
    compose(applyMiddleware(...middleware))
  );

  return store;
}
