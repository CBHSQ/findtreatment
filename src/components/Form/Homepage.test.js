import React from 'react';
import { shallow } from 'enzyme';
import { Homepage } from './Homepage';

describe('HomePage component', () => {
  describe('with an invalid location prop', () => {
    it('disables the submit button without a valid location', () => {
      const component = shallow(<Homepage />, {
        disableLifecycleMethods: true
      });

      expect(component.find('Homepage___StyledButton').prop('disable')).toBe(
        true
      );
    });

    it('disallows form submission', () => {
      const mockSubmit = jest.fn();
      const props = {
        handleSubmit: mockSubmit
      };
      const component = shallow(<Homepage {...props} />, {
        disableLifecycleMethods: true
      });
      const form = component.find('Homepage__Form');

      form.simulate('submit', { preventDefault() {} });

      expect(mockSubmit.mock.calls.length).toBe(0);
    });
  });

  describe('with a valid location prop', () => {
    it('enables the submit button with a valid location', () => {
      const component = shallow(<Homepage location={{}} />, {
        disableLifecycleMethods: true
      });
      expect(component.find('Homepage___StyledButton').prop('disable')).toBe(
        false
      );
    });

    it('calls its handleSubmit prop when the form is submitted', () => {
      const mockSubmit = jest.fn();
      const props = {
        handleSubmit: mockSubmit,
        location: {}
      };
      const component = shallow(<Homepage {...props} />, {
        disableLifecycleMethods: true
      });
      const form = component.find('Homepage__Form');

      form.simulate('submit');

      expect(mockSubmit.mock.calls.length).toBe(1);
    });
  });
});
