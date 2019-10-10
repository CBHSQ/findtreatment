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
      const component = shallow(<Results {...testProps} />);

      expect(component.exists('Connect(ReduxForm)')).toBe(true);
    });

    // Disabling because it requires mobile viewport -> `mount` -> Redux mock, etc...
    xit('should collapse filters by default if location is set', () => {
      const props = {
        ...testProps,
        location: { latLng: {} }
      };
      const component = shallow(<Results {...props} />);

      expect(component.exists('Connect(ReduxForm)')).toBe(false);
    });
  });
});
