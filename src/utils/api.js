import axios from 'axios';
import { DEFAULT_PAGE_SIZE } from './constants';

export default axios.create({
  baseURL:
    process.env.REACT_APP_BRANCH === process.env.REACT_APP_PROD_BRANCH
      ? process.env.REACT_APP_PROD_API_URL
      : process.env.REACT_APP_DEV_API_URL,
  responseType: 'json'
});

const initialValues = {
  sType: 'BOTH',
  sCodes: '',
  pageSize: DEFAULT_PAGE_SIZE,
  page: 1,
  sort: 0
};

export const buildParams = query => {
  const params = Object.entries(query).reduce((memo, [key, value]) => {
    if (key === 'distance') {
      return value !== 'All'
        ? {
            ...memo,
            limitType: 2,
            limitValue: value
          }
        : memo;
    }

    if (key === 'languages') {
      return {
        ...memo,
        sLanguages: value
      };
    }

    if (key === 'location') {
      return {
        ...memo,
        sAddr: `${value.location.lat}, ${value.location.lng}`
      };
    }

    if (key === 'page') {
      return {
        ...memo,
        page: value
      };
    }

    if (key === 'type' && value === 'Intake') {
      return memo;
    }

    return {
      ...memo,
      sCodes: memo.sCodes
        .split(',')
        .filter(v => !!v)
        .concat(value)
        .join()
    };
  }, initialValues);

  if (!params.sCodes) {
    const { sCodes, ...finalParams } = params;

    return finalParams;
  }

  return params;
};
