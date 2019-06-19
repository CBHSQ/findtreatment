import API from '../utils/api';

export const RECEIVE_LOCATIONS = 'RECEIVE_LOCATIONS';

export const receiveLocations = data => {
  return {
    type: RECEIVE_LOCATIONS,
    data
  };
};

export const handleReceiveLocations = query => {
  const params = new URLSearchParams();

  params.append('sType', query.sType);
  params.append('sAddr', query.sAddr);
  params.append('pageSize', 10);
  params.append('limitType', 2);
  params.append('limitValue', 16093.44);

  return dispatch => {
    return API.post('/listing', params)
      .then(response => {
        dispatch(receiveLocations(response.data));
      })
      .catch(error => {
        throw error;
      });
  };
};
