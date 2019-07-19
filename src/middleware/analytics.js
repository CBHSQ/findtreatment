import ReactGA from 'react-ga';

const options = {};

const trackEvent = action => {
  ReactGA.event({
    category: `Form: ${action.meta.form}`,
    action: `Selected: ${action.payload}`,
    label: `Field: ${action.meta.field}`
  });
};

const trackPage = page => {
  ReactGA.set({
    page,
    ...options
  });
  ReactGA.pageview(page);
};

let currentPage = '';

export const analytics = store => next => action => {
  if (action.type === '@@router/LOCATION_CHANGE') {
    const nextPage = `${action.payload.location.pathname}${action.payload.location.search}`;
    if (currentPage !== nextPage) {
      currentPage = nextPage;
      trackPage(nextPage);
      window.CE_SNAPSHOT_NAME = 'findtreatmentbeta: ' + nextPage;
    }
  }

  if (action.type === '@@redux-form/CHANGE') {
    if (action.meta.field !== 'location') {
      trackEvent(action);
    }
  }

  return next(action);
};
