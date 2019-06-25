import API, { buildParams } from '../utils/api';

export const RECEIVE_LOCATIONS_BEGIN = 'RECEIVE_LOCATIONS_BEGIN';
export const RECEIVE_LOCATIONS_SUCCESS = 'RECEIVE_LOCATIONS_SUCCESS';
export const RECEIVE_LOCATIONS_FAILURE = 'RECEIVE_LOCATIONS_FAILURE';

export const receiveLocationsBegin = () => {
  return {
    type: RECEIVE_LOCATIONS_BEGIN
  };
};

export const receiveLocationsSucess = data => {
  return {
    type: RECEIVE_LOCATIONS_SUCCESS,
    payload: { data }
  };
};

export const receiveLocationsFailure = error => {
  return {
    type: RECEIVE_LOCATIONS_FAILURE
  };
};

export function handleReceiveLocations(query) {
  return dispatch => {
    dispatch(receiveLocationsBegin());

    const params = buildParams(query);

    return API.post('/listing', params)
      .then(response => {
        if (response.data) {
          dispatch(receiveLocationsSucess(response.data));
        } else {
          dispatch(receiveLocationsFailure());
        }
      })
      .catch(error => {
        console.log(error);
      });
  };
}
