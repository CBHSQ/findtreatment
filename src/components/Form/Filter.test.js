import React from 'react';
import { shallow } from 'enzyme';
import Filter from './Filter';

describe('Filter component', () => {
  it('displays correct toggle link text', () => {
    const props = {
      query: {},
      handleInputChange: jest.fn()
    };
    const component = shallow(<Filter {...props} />);
    const toggleBtn = component.find('.filter-link');

    expect(toggleBtn.text()).toBe('More filters');
    toggleBtn.simulate('click');
    expect(component.find('.filter-link').text()).toBe('Less filters');
  });

  it('toggle additional filter container', () => {
    const props = {
      query: {},
      handleInputChange: jest.fn()
    };
    const component = shallow(<Filter {...props} />);
    const toggleBtn = component.find('.filter-link');

    expect(component.find('.filter-container').length).toBe(0);
    toggleBtn.simulate('click');
    expect(component.find('.filter-container').length).toBe(1);
  });
});
