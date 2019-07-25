import axios from 'axios';
import { DEFAULT_PAGE_SIZE } from './constants';

export default axios.create({
  baseURL:
    process.env.REACT_APP_BRANCH === process.env.REACT_APP_PROD_BRANCH
      ? process.env.REACT_APP_PROD_API_URL
      : process.env.REACT_APP_DEV_API_URL,
  responseType: 'json'
});

export const buildParams = query => {
  const { distance, language, location, page, type, ...codes } = query;
  const codeValues = Object.values(codes);

  const params = {
    sType: parseType(type),
    sCodes: parseCodes(type, codeValues),
    pageSize: DEFAULT_PAGE_SIZE,
    page: page || 1,
    sAddr: location && `${location.location.lat}, ${location.location.lng}`,
    limitType: distance && 2,
    limitValue: distance && distance,
    sLanguages: language && language
  };

  Object.keys(params).forEach(
    key => (params[key] == null || !params[key]) && delete params[key]
  );

  return params;
};

const parseCodes = (type, codes) => {
  const skipTypeCodes = ['Intake', 'MH'];

  return !skipTypeCodes.includes(type)
    ? codes
        .concat(type)
        .filter(code => !!code)
        .toString()
    : codes.toString();
};

const parseType = type => {
  if (type === 'MH' || type === 'WI') {
    return 'MH';
  }

  if (type === 'CO') {
    return 'BOTH';
  }

  return 'SA';
};
