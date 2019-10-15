import React from 'react';
import { shallow } from 'enzyme';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../tailwind.js';

import { Results } from './';

const options = {
  wrappingComponent: ThemeProvider,
  wrappingComponentProps: { theme }
};

const testProps = {
  location: {},
  destroyFacilities: jest.fn(),
  handleReceiveFacilities: jest.fn(),
  loading: false,
  error: false,
  data: {},
  hasResults: false,
  theme
};

describe('Results component', () => {
  describe('on mobile', () => {
    it('should expand filters by default if no location is set', () => {
      const component = shallow(<Results {...testProps} />, options);

      expect(component.exists('Connect(ReduxForm)')).toBe(true);
    });

    // Disabling because it requires mobile viewport -> `mount` -> Redux mock, etc...
    xit('should collapse filters by default if location is set', () => {
      const props = {
        ...testProps,
        location: { latLng: {} }
      };
      const component = shallow(<Results {...props} />, options);

      expect(component.exists('Connect(ReduxForm)')).toBe(false);
    });
  });
});
