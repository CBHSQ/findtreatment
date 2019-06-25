import axios from 'axios';

export default axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  responseType: 'json'
});

export const buildParams = query => {
  const { type, location, distance, page, ...rest } = query;
  const codes = Object.values(rest);
  const hasCodes = codes.length >= 1;
  const params = new URLSearchParams();

  params.append('sType', type);
  hasCodes && params.append('sCodes', codes.toString());
  params.append(
    'sAddr',
    location && `${location.location.lat}, ${location.location.lng}`
  );
  params.append('limitType', 2);
  params.append('limitValue', distance);
  params.append('pageSize', 10);
  params.append('page', page || 1);
  params.append('sort', 0);

  return params;
};
