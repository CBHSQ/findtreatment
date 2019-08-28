import React from 'react';
import { shallow } from 'enzyme';
import { FormFilters } from './FormFilters';

const testProps = {
  languages: [],
  dispatch: jest.fn(),
  handleSubmit: jest.fn(),
  hasResults: true,
  initialValues: {},
  isDesktop: true,
  resetAllFilters: jest.fn()
};

describe('Filters component', () => {
  xit('calls resetFilters() when reset filter button is clicked', () => {
    const props = {
      ...testProps
    };
    const component = shallow(<FormFilters {...props} />);
    const resetBtn = component.find('.reset-filters');

    resetBtn.simulate('click');

    expect(props.resetAllFilters.mock.calls.length).toBe(1);
  });
});
