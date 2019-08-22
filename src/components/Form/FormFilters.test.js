import React from 'react';
import { shallow } from 'enzyme';
import { FormFilters } from './FormFilters';

const testProps = {
  advancedHidden: true,
  languages: [],
  dispatch: () => {},
  filtersHidden: false,
  handleSubmit: () => {},
  hasResults: true,
  initialValues: {},
  isDesktop: true,
  toggleAdvancedFilters: () => {},
  resetAllFilters: () => {},
  resultsHidden: false,
  toggleFilters: () => {},
  toggleResults: () => {}
};

describe('Filters component', () => {
  it('calls toggleAdvancedFilters() when filters are toggled', () => {
    const mockDispatch = jest.fn();
    const props = {
      ...testProps,
      toggleAdvancedFilters: mockDispatch
    };
    const component = shallow(<FormFilters {...props} />);
    const toggleBtn = component.find('.filter-link');

    expect(mockDispatch.mock.calls.length).toBe(0);

    toggleBtn.simulate('click');

    expect(mockDispatch.mock.calls.length).toBe(1);
  });

  it('calls resetFilters() when reset filter button is clicked', () => {
    const mockDispatch = jest.fn();
    const props = {
      ...testProps,
      resetAllFilters: mockDispatch
    };
    const component = shallow(<FormFilters {...props} />);
    const resetBtn = component.find('.reset-filters');

    resetBtn.simulate('click');

    expect(mockDispatch.mock.calls.length).toBe(1);
  });
});
