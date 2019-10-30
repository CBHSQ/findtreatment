import axios from 'axios';
import ReactGA from 'react-ga';

import {
  DEFAULT_PAGE_SIZE,
  DEFAULT_LIMIT_TYPE,
  DEFAULT_SORT,
  DEFAULT_STYPE
} from './constants';

const baseURL = process.env.REACT_APP_BRANCH
  ? process.env.REACT_APP_PROD_API_URL
  : 'http://localhost:9011/locator/listing';

export default axios.create({
  baseURL,
  responseType: 'json'
});

export const reportFailure = error => {
  if (error) {
    ReactGA.event({
      category: `search`,
      action: `Fail`,
      label: error.message
    });
  }
};

export const buildParams = query => {
  const {
    distance,
    language,
    location,
    page,
    pageSize,
    type,
    ...sCodes
  } = query;
  const serviceCodes = flattenServiceCodes(sCodes);

  const params = {
    sType: DEFAULT_STYPE,
    sCodes: combineServiceTypeAndServiceCodes(type, serviceCodes),
    pageSize: pageSize || DEFAULT_PAGE_SIZE,
    page: page || 1,
    sAddr: location && `${location.latLng.lat}, ${location.latLng.lng}`,
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
// Custom values should be prepended with "Custom-"
const combineServiceTypeAndServiceCodes = (type = '', serviceCodes = []) => {
  return type.toLowerCase().startsWith('custom-')
    ? serviceCodes.toString()
    : serviceCodes
        .concat(type)
        .filter(code => !!code)
        .toString();
};

const flattenServiceCodes = sCodes => {
  return Object.values(sCodes).reduce((memo, item) => {
    if (Array.isArray(item)) {
      return memo.concat(item);
    } else {
      memo.push(item);
    }
    return memo;
  }, []);
};
