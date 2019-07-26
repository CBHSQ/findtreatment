import axios from 'axios';
import {
  DEFAULT_PAGE_SIZE,
  DEFAULT_LIMIT_TYPE,
  DEFAULT_SORT
} from './constants';

export default axios.create({
  baseURL:
    process.env.REACT_APP_BRANCH === process.env.REACT_APP_PROD_BRANCH
      ? process.env.REACT_APP_PROD_API_URL
      : process.env.REACT_APP_DEV_API_URL,
  responseType: 'json'
});

export const buildParams = query => {
  const { distance, language, location, page, type, ...sCodes } = query;
  const serviceCodes = Object.values(sCodes);

  const params = {
    sType: setServiceType(type),
    sCodes: combineServiceTypeAndServiceCodes(type, serviceCodes),
    pageSize: DEFAULT_PAGE_SIZE,
    page: page || 1,
    sAddr: location && `${location.location.lat}, ${location.location.lng}`,
    limitType: distance && DEFAULT_LIMIT_TYPE,
    limitValue: distance || null,
    sLanguages: language || null,
    sort: DEFAULT_SORT
  };

  Object.keys(params).forEach(
    key => typeof params[key] !== 'number' && !params[key] && delete params[key]
  );

  return params;
};

// Combines service type and service codes into string, omitting custom values
// Custom values should be prepended with "Custom-""
const combineServiceTypeAndServiceCodes = (type = '', serviceCodes = []) => {
  return type.toLowerCase().startsWith('custom-')
    ? serviceCodes.toString()
    : serviceCodes
        .concat(type)
        .filter(code => !!code)
        .toString();
};

// Set the service type (sType) based on filter choices
// sType: SA = Substance use only, MH = Mental health only, BOTH = SA and MH
const setServiceType = (type = '') => {
  // If the service type is set to one of the following, set sType = MH
  // * Custom-Mental_Health = Mental health services only
  // * WI = Psychiatric emergency walk-in services
  if (type.toLowerCase() === 'custom-mental_health' || type === 'WI') {
    return 'MH';
  }

  // If the service type is set to one of the following, set sType = BOTH
  // * CO = Co-occurring mental health and substance use treatment
  if (type === 'CO') {
    return 'BOTH';
  }

  // If the previous conditions are not met, default to sType = SA
  return 'SA';
};
