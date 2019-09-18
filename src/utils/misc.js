import qs from 'qs';
import { services, servicesOrder } from './services';

export const convertToSlug = string =>
  string
    .toLowerCase()
    .replace(/ /g, '-')
    .replace(/[^\w-]+/g, '');

export const removeHttp = url => {
  return url.replace(/(^\w+:|^)\/\//, '');
};

export const servicesToObject = array =>
  array.reduce((obj, item) => {
    obj[item['f2']] = {
      name: (services[item['f2']] || {}).name || item['f1'],
      values: item['f3']
        .split('; ')
        .map(
          value => ((services[item['f2']] || {}).values || {})[value] || value
        )
    };
    return obj;
  }, {});

export const sortServicesArray = array => {
  return array.sort(function(a, b) {
    return servicesOrder.indexOf(a) - servicesOrder.indexOf(b);
  });
};

export const linkToFacility = ({ frid, latitude, longitude }) => {
  return {
    pathname: `/details/${frid}`,
    search: qs.stringify({ sAddr: `${latitude}, ${longitude}` })
  };
};
