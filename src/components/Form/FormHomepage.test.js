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
  describe('with an invalid location prop', () => {
    it('disables the submit button without a valid location', () => {
      const props = {
        ...testProps
      };
      const component = shallow(<FormHomepage {...props} />);

      expect(
        component
          .find('FormHomepage___StyledButton')
          .first()
          .prop('disabled')
      ).toBe(true);
    });

    it('disallows form submission', () => {
      const mockSubmit = jest.fn();
      const props = {
        ...testProps,
        handleSubmit: mockSubmit
      };
      const component = shallow(<FormHomepage {...props} />);
      const form = component.find('form');

      form.simulate('submit', { preventDefault() {} });

      expect(mockSubmit.mock.calls.length).toBe(0);
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
