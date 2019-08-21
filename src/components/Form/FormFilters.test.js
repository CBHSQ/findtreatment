import React from 'react';
import { shallow } from 'enzyme';
import { FormFilters } from './FormFilters';

const testProps = {
  languages: [],
  dispatch: () => {},
  filtersHidden: false,
  handleSubmit: () => {},
  hasResults: true,
  initialValues: {},
  isDesktop: true,
  location: {},
  resetAdvancedFilters: () => {},
  resetAllFilters: () => {},
  resultsHidden: false,
  toggleFilters: () => {},
  toggleResults: () => {}
};

describe('Filters component', () => {
  it('displays correct toggle link text', () => {
    const component = shallow(<FormFilters {...testProps} />, {
      disableLifecycleMethods: true
    });
    const toggleBtn = component.find('.filter-link');

    expect(toggleBtn.text()).toBe('More filters');
    toggleBtn.simulate('click');
    expect(component.find('.filter-link').text()).toBe('Less filters');
  });

  it('toggle additional filter container', () => {
    const component = shallow(<FormFilters {...testProps} />, {
      disableLifecycleMethods: true
    });
    const toggleBtn = component.find('.filter-link');

    expect(component.find('.filter-container').length).toBe(0);
    toggleBtn.simulate('click');
    expect(component.find('.filter-container').length).toBe(1);
  });

  it('calls resetAdvancedFilters method when filters are hidden', () => {
    const mockDispatch = jest.fn();
    const props = {
      ...testProps,
      resetAdvancedFilters: mockDispatch
    };
    const component = shallow(<FormFilters {...props} />, {
      disableLifecycleMethods: true
    });
    const toggleBtn = component.find('.filter-link');

    toggleBtn.simulate('click');

    expect(mockDispatch.mock.calls.length).toBe(0);

    toggleBtn.simulate('click');

    expect(mockDispatch.mock.calls.length).toBe(1);
  });

  it('calls resetFilters() when reset filter button is clicked', () => {
    const resetFn = jest.fn();
    const props = {
      ...testProps,
      resetAllFilters: resetFn
    };
    const component = shallow(<FormFilters {...props} />, {
      disableLifecycleMethods: true
    });
    const resetBtn = component.find('.reset-filters');

    resetBtn.simulate('click');

    expect(resetFn.mock.calls.length).toBe(1);
  });
});
