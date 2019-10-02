import React from 'react';
import { shallow } from 'enzyme';

import { Results } from './';

const testProps = {
  location: {},
  dispatch: jest.fn(),
  loading: false,
  error: false,
  data: {},
  hasResults: false
};

describe('Results component', () => {
  describe('on mobile', () => {
    it('should expand filters by default if no location is set', () => {
      const component = shallow(<Results {...testProps} />, {
        context: { isDesktop: false }
      });

      expect(component.exists('Connect(ReduxForm)')).toBe(true);
    });

    it('should collapse filters by default if location is set', () => {
      const props = {
        ...testProps,
        location: { latLng: {} }
      };
      const component = shallow(<Results {...props} />, {
        context: { isDesktop: false }
      });

      expect(component.exists('Connect(ReduxForm)')).toBe(false);
    });
  });
});
