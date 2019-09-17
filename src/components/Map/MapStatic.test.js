import React from 'react';
import { shallow } from 'enzyme';
import MapStatic from './MapStatic';

const testProps = {
  city: 'Tucson',
  latitude: '79.7833853960037',
  longitude: '27.2689918940887',
  miles: 5.57,
  name1: 'My Treatment Facility',
  state: 'AZ',
  street1: '3295 West Desert Road',
  street2: 'Suite 150',
  zip: '85741'
};

describe('MapStatic component', () => {
  it('displays 0 miles', () => {
    const props = { ...testProps, miles: 0 };
    const component = shallow(<MapStatic {...props} />);

    expect(component.find('.map-static-miles').text()).toBe('0 miles');
  });

  it('does not pluralize 1 mile', () => {
    const props = { ...testProps, miles: 1 };
    const component = shallow(<MapStatic {...props} />);

    expect(component.find('.map-static-miles').text()).toBe('1 mile');
  });
});
