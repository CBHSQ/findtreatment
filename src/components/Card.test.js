import React from 'react';
import { shallow } from 'enzyme';

import Card from './Card';

const testProps = {
  city: 'Tucson',
  frid: '2037b07b2bfb78e1bdaf2b46dd94ceb41c2da1493e7c0c22796d82762c4cbb53',
  latitude: '79.7833853960037',
  longitude: '27.2689918940887',
  miles: 5.57,
  name1: 'My Treatment Facility',
  name2: 'Tucson Northwest',
  phone: '520-123-4376',
  services: {
    TC: { name: 'Type of Care', values: ['Substance use treatment'] }
  },
  state: 'AZ',
  street1: '3295 West Desert Road',
  street2: 'Suite 150',
  website: 'http://www.mytreatmentfacility.com',
  zip: '85741'
};

describe('Card component', () => {
  describe('heading', () => {
    it('does not display name2 if empty', () => {
      const props = {
        ...testProps,
        name2: ''
      };
      const component = shallow(<Card {...props} />);

      expect(component.find('.card-name2').length).toBe(0);
    });

    it('displays name2 if present', () => {
      const component = shallow(<Card {...testProps} />);

      expect(component.find('.card-name2').text()).toBe('Tucson Northwest');
    });
  });

  describe('address', () => {
    it('formats properly', () => {
      const props = {
        ...testProps,
        street2: ''
      };
      const component = shallow(<Card {...props} />);

      expect(component.find('Card___StyledAddress').text()).toBe(
        '3295 West Desert Road, Tucson, AZ 85741'
      );
    });

    it('displays street2 if present', () => {
      const component = shallow(<Card {...testProps} />);

      expect(component.find('Card___StyledAddress').text()).toBe(
        '3295 West Desert Road, Suite 150, Tucson, AZ 85741'
      );
    });
  });

  describe('details', () => {
    it('does not display website if empty', () => {
      const props = {
        ...testProps,
        website: 'http://'
      };
      const component = shallow(<Card {...props} />);

      expect(component.find('.card-website').length).toBe(0);
    });

    it('displays website if present', () => {
      const component = shallow(<Card {...testProps} />);

      expect(component.find('Card___StyledOutboundLink2').prop('to')).toBe(
        'http://www.mytreatmentfacility.com'
      );
    });
  });
});
