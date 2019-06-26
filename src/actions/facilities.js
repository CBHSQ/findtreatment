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

    return API.post('/listing', params)
      .then(response => {
        if (response.data) {
          dispatch(receiveFacilitiesSucess(response.data));
        } else {
          dispatch(receiveFacilitiesFailure());
        }
      })
      .catch(error => {
        console.log(error);
      });
  };
}
