import qs from 'qs';
import API from '../utils/api';
import * as facilitiesActions from './facilities';

export const RECEIVE_FACILITY_BEGIN = 'RECEIVE_FACILITY_BEGIN';
export const RECEIVE_FACILITY_SUCCESS = 'RECEIVE_FACILITY_SUCCESS';
export const RECEIVE_FACILITY_FAILURE = 'RECEIVE_FACILITY_FAILURE';

export const receiveFacilityBegin = () => {
  return {
    type: RECEIVE_FACILITY_BEGIN
  };
};

export const receiveFacilitySucess = data => {
  return {
    type: RECEIVE_FACILITY_SUCCESS,
    payload: { data }
  };
};

export const receiveFacilityFailure = error => {
  return {
    type: RECEIVE_FACILITY_FAILURE
  };
};

export function handleReceiveFacility({ slug, encodedParamString }) {
  return async dispatch => {
    dispatch(receiveFacilityBegin());

    const [coordinates, limitValue] = encodedParamString.split(':');
    const defaultParams = {
      sType: 'BOTH',
      pageSize: 10,
      sort: 0,
      limitType: limitValue ? 2 : undefined
    };

    const params = {
      ...defaultParams,
      sAddr: decodeURIComponent(coordinates),
      limitValue
    };
    const options = {
      method: 'POST',
      headers: { 'content-type': 'application/x-www-form-urlencoded' },
      url: '/listing'
    };

    try {
      // fetch pageSize of 1 first just to see how many records there are
      const recordCount = (await API({
        ...options,
        data: qs.stringify({ ...params, pageSize: 1 })
      })).data.recordCount;
      // now fetch all records for given centroid and distance
      const response = await API({
        ...options,
        data: qs.stringify({ ...params, pageSize: recordCount })
      });
      if (response.data) {
        dispatch(
          facilitiesActions.receiveFacilitiesSucess(response.data, params)
        );
      } else {
        dispatch(receiveFacilityFailure());
      }
    } catch {
      dispatch(receiveFacilityFailure());
    }
  };
}
