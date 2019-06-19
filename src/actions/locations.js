import API from '../utils/api';

export const RECEIVE_LOCATIONS_BEGIN = 'RECEIVE_LOCATIONS_BEGIN';
export const RECEIVE_LOCATIONS_SUCCESS = 'RECEIVE_LOCATIONS_SUCCESS';

export const receiveLocationsBegin = () => {
  return {
    type: RECEIVE_LOCATIONS_BEGIN
  };
};

export const receiveLocationsSucess = data => {
  return {
    type: RECEIVE_LOCATIONS_SUCCESS,
    data
  };
};

export function handleReceiveLocations(query) {
  return dispatch => {
    dispatch(receiveLocationsBegin());

    const params = new URLSearchParams();

    params.append('sType', query.sType);
    params.append('sAddr', query.sAddr);
    params.append('pageSize', 10);
    params.append('limitType', 2);
    params.append('limitValue', 16093.44);

    return API.post('/listing', params)
      .then(response => {
        dispatch(receiveLocationsSucess(response.data));
      })
      .catch(error => {
        throw error;
      });
  };
}
