import ReactGA from 'react-ga';

const options = {};

const trackEvent = action => {
  ReactGA.event({
    category: `Form: ${action.meta.form}`,
    action: `Selected: ${action.payload}`,
    label: `Field: ${action.meta.field}`
  });
};

const trackPage = (action, page) => {
  ReactGA.set({
    page,
    ...options
  });

  // Allow page title to update before sending
  setTimeout(() => {
    if (action === 'PUSH') {
      // When we change pages, send virtual pageview to DAP
      window.gas('send', 'pageview', page);
    }
    ReactGA.pageview(page);
  }, 0);
};

let currentPage = '';

export const analytics = store => next => action => {
  if (
    action.type === '@@router/LOCATION_CHANGE' &&
    ['PUSH', 'POP'].includes(action.payload.action)
  ) {
    const nextPage = `${action.payload.location.pathname}${action.payload.location.search}`;
    if (currentPage !== nextPage) {
      currentPage = nextPage;
      trackPage(action.payload.action, nextPage);
      window.CE_SNAPSHOT_NAME = 'findtreatmentbeta: ' + nextPage;
    }
  }

  if (action.type === '@@redux-form/CHANGE') {
    if (action.meta.field !== 'location') {
      trackEvent(action);
    }
  }

  if (action.type === 'REPORT_FACILITY') {
    ReactGA.event({
      category: `Listing Data Report`,
      action: `Data issue reported for frid`,
      label: action.frid
    });
  }

  return next(action);
};
