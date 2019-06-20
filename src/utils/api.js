import axios from 'axios';

export default axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  responseType: 'json'
});

export const buildParams = query => {
  const params = new URLSearchParams();
  const { type, location, distance, page } = query;

  params.append('sType', type);
  params.append(
    'sAddr',
    location && `${location.location.lat}, ${location.location.lng}`
  );
  params.append('limitType', 2);
  params.append('limitValue', distance);
  params.append('pageSize', 10);
  params.append('page', page || 1);

  return params;
};
