import React from 'react';
import { shallow } from 'enzyme';
import { Filters } from './Filters';

describe('Filters component', () => {
  it('displays correct toggle link text', () => {
    const component = shallow(<Filters isDesktop={true} />, {
      disableLifecycleMethods: true
    });
    const toggleBtn = component.find('.filter-link');

    expect(toggleBtn.text()).toBe('More filters');
    toggleBtn.simulate('click');
    expect(component.find('.filter-link').text()).toBe('Less filters');
  });

  it('toggle additional filter container', () => {
    const component = shallow(<Filters isDesktop={true} />, {
      disableLifecycleMethods: true
    });
    const toggleBtn = component.find('.filter-link');

    expect(component.find('.filter-container').length).toBe(0);
    toggleBtn.simulate('click');
    expect(component.find('.filter-container').length).toBe(1);
  });

  it('calls resetAdvancedFilters method when filters are hidden', () => {
    const mockDispatch = jest.fn();
    const component = shallow(
      <Filters isDesktop={true} resetAdvancedFilters={mockDispatch} />,
      {
        disableLifecycleMethods: true
      }
    );
    const toggleBtn = component.find('.filter-link');

    toggleBtn.simulate('click');

    expect(mockDispatch.mock.calls.length).toBe(0);

    toggleBtn.simulate('click');

    expect(mockDispatch.mock.calls.length).toBe(1);
  });

  it('calls resetFilters() when reset filter button is clicked', () => {
    const resetFn = jest.fn();
    const component = shallow(
      <Filters isDesktop={true} resetAllFilters={resetFn} />,
      {
        disableLifecycleMethods: true
      }
    );
    const resetBtn = component.find('.reset-filters');

    resetBtn.simulate('click');

    expect(resetFn.mock.calls.length).toBe(1);
  });
});
