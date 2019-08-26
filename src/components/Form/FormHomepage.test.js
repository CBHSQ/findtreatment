import React from 'react';
import { shallow } from 'enzyme';
import { FormHomepage } from './FormHomepage';

const testProps = {
  clearValues: jest.fn(),
  handleSubmit: jest.fn(),
  initialValues: {},
  location: {}
};

describe('HomePage component', () => {
  describe('componentDidMount()', () => {
    it('does not clear values if location is not set', () => {
      const props = {
        ...testProps
      };
      shallow(<FormHomepage {...props} />);

      expect(testProps.clearValues.mock.calls.length).toBe(0);
    });

    it('clears values if location is already set', () => {
      const props = {
        ...testProps,
        location: { latLng: {} }
      };
      shallow(<FormHomepage {...props} />);

      expect(props.clearValues.mock.calls.length).toBe(1);
    });
  });

  describe('with a valid location prop', () => {
    it('calls its handleSubmit prop when the form is submitted', () => {
      const props = {
        ...testProps,
        location: { latLng: {} }
      };
      const component = shallow(<FormHomepage {...props} />);
      const form = component.find('form');

      form.simulate('submit');

      expect(props.handleSubmit.mock.calls.length).toBe(1);
    });
  });
});
