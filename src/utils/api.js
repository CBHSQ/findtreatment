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

const serviceTypes = {
  SUBSTANCE_USE: 'SA', // Substance use only
  MENTAL_HEALTH: 'MH', // Mental health only
  BOTH: 'BOTH' // Subtance use and mental health
};

const serviceCodes = {
  MENTAL_HEALTH: 'Custom-Mental_Health', // Mental health services only
  PSYCHIATRIC_WALK_IN: 'WI', // Psychiatric emergency walk-in services
  CO_OCCURRING: 'CO' // Co-occurring mental health and substance use treatment
};

const setServiceType = (type = '') => {
  if (
    type.toLowerCase() === serviceCodes.MENTAL_HEALTH.toLowerCase() ||
    type === serviceCodes.PSYCHIATRIC_WALK_IN
  ) {
    return serviceTypes.MENTAL_HEALTH;
  }

  if (type === serviceCodes.CO_OCCURRING) {
    return serviceTypes.BOTH;
  }

  return serviceTypes.SUBSTANCE_USE;
};
