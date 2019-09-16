import React from 'react';
import { shallow } from 'enzyme';
import { FormHomepage } from './FormHomepage';

const testProps = {
  destroyFacilities: jest.fn(),
  handleSubmit: jest.fn(),
  initialValues: {},
  location: {}
};

describe('FormHomepage component', () => {
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
