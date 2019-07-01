import qs from 'qs';
import API, { buildParams } from '../utils/api';

export const RECEIVE_FACILITIES_BEGIN = 'RECEIVE_FACILITIES_BEGIN';
export const RECEIVE_FACILITIES_SUCCESS = 'RECEIVE_FACILITIES_SUCCESS';
export const RECEIVE_FACILITIES_FAILURE = 'RECEIVE_FACILITIES_FAILURE';

export const receiveFacilitiesBegin = () => {
  return {
    type: RECEIVE_FACILITIES_BEGIN
  };
};

export const receiveFacilitiesSucess = data => {
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
          dispatch(receiveFacilitiesSucess(response.data));
        } else {
          dispatch(receiveFacilitiesFailure());
        }
      })
      .catch(error => {
        dispatch(receiveFacilitiesFailure());
      });
  };
}
