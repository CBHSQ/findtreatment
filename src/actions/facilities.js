import qs from 'qs';
import API, { buildParams } from '../utils/api';
import ReactGA from 'react-ga';

export const RECEIVE_FACILITIES_BEGIN = 'RECEIVE_FACILITIES_BEGIN';
export const RECEIVE_FACILITIES_SUCCESS = 'RECEIVE_FACILITIES_SUCCESS';
export const RECEIVE_FACILITIES_FAILURE = 'RECEIVE_FACILITIES_FAILURE';
export const REPORT_FACILITY = 'REPORT_FACILITY';
export const DESTROY_FACILITIES = 'DESTROY_FACILITIES';

const trackSearchResults = (params, results) => {
  ReactGA.event({
    category: `Search`,
    action: `Paramaters and # of results`,
    label: params,
    value: results
  });
};

export const receiveFacilitiesBegin = () => {
  return {
    type: RECEIVE_FACILITIES_BEGIN
  };
};

export const receiveFacilitiesSuccess = data => {
  return {
    type: RECEIVE_FACILITIES_SUCCESS,
    payload: { data }
  };
};

export const receiveFacilitiesFailure = error => {
  return {
    type: RECEIVE_FACILITIES_FAILURE
  };
};

export const reportFacility = frid => {
  return {
    type: REPORT_FACILITY,
    frid
  };
};

export const destroyFacilities = () => {
  return {
    type: DESTROY_FACILITIES
  };
};

export function handleReceiveFacilities(query) {
  return dispatch => {
    dispatch(receiveFacilitiesBegin());

    const params = buildParams(query);
    const options = {
      method: 'POST',
      headers: { 'content-type': 'application/x-www-form-urlencoded' },
      data: qs.stringify(params),
      url: '/listing'
    };

    return API(options)
      .then(response => {
        if (response.data) {
          trackSearchResults(qs.stringify(params), response.data.recordCount);
          dispatch(receiveFacilitiesSuccess(response.data));
        } else {
          dispatch(receiveFacilitiesFailure());
        }
      })
      .catch(error => {
        dispatch(receiveFacilitiesFailure());
      });
  };
}
