import qs from 'qs';

import API from '../utils/api';
import { DEFAULT_STYPE } from '../utils/constants';

export const RECEIVE_FACILITY_BEGIN = 'RECEIVE_FACILITY_BEGIN';
export const RECEIVE_FACILITY_SUCCESS = 'RECEIVE_FACILITY_SUCCESS';
export const RECEIVE_FACILITY_FAILURE = 'RECEIVE_FACILITY_FAILURE';
export const DESTROY_FACILITY = 'DESTROY_FACILITY';

export const receiveFacilityBegin = () => {
  return {
    type: RECEIVE_FACILITY_BEGIN
  };
};

export const receiveFacilitySuccess = (data, frid) => {
  return {
    type: RECEIVE_FACILITY_SUCCESS,
    payload: { data },
    frid
  };
};

export const receiveFacilityFailure = error => {
  return {
    type: RECEIVE_FACILITY_FAILURE
  };
};

export const destroyFacility = () => {
  return {
    type: DESTROY_FACILITY
  };
};

export function handleReceiveFacility(frid, query) {
  return dispatch => {
    dispatch(receiveFacilityBegin());

    const params = {
      sType: DEFAULT_STYPE,
      pageSize: 100, // Return up to 100 results in initial fetch
      sAddr: query.sAddr,
      limitType: 2, // Limit by distance
      limitValue: 0 // Match the exact lat/lng only
    };

    const options = {
      method: 'POST',
      headers: { 'content-type': 'application/x-www-form-urlencoded' },
      data: qs.stringify(params),
      url: '/listing'
    };

    return API(options)
      .then(response => {
        if (response.data) {
          dispatch(receiveFacilitySuccess(response.data, frid));
        } else {
          dispatch(receiveFacilityFailure());
        }
      })
      .catch(error => {
        dispatch(receiveFacilityFailure());
      });
  };
}
