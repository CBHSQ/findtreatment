import ReactGA from 'react-ga';
import { RECEIVE_FACILITIES_FAILURE } from '../actions/facilities';
import { RECEIVE_FACILITY_FAILURE } from '../actions/facility';

import { reportFailure } from '../utils/api';

const trackEvent = action => {
  ReactGA.event({
    category: `Form: ${action.meta.form}`,
    action: `Selected: ${action.payload}`,
    label: `Field: ${action.meta.field}`
  });
};

export const trackPage = (dap, page, title) => {
  // Send virtual pageviews to both DAP and configured ReactGA endpoint
  ReactGA.pageview(page, null, title);
  if (dap) {
    window.gas('send', 'pageview', page, title);
  }
};

let currentPage = '';

export const analytics = store => next => action => {
  if (action.type === '@@router/LOCATION_CHANGE') {
    const nextPage = `${action.payload.location.pathname}${action.payload.location.search}`;
    if (currentPage !== nextPage) {
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

  if (
    action.type === RECEIVE_FACILITIES_FAILURE ||
    action.type === RECEIVE_FACILITY_FAILURE
  ) {
    reportFailure(action.error);
  }

  return next(action);
};
