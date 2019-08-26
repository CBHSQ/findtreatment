import React from 'react';
import { shallow } from 'enzyme';

import { HeaderNav } from './HeaderNav';

describe('HeaderNav component', () => {
  it('reveals menu when hamburger icon is clicked', () => {
    const props = {
      location: {}
    };
    const component = shallow(<HeaderNav {...props} />);
    const toggleBtn = component.find('button');

    expect(
      component.find('HeaderNav__StyledNav').prop('isMobileMenuHidden')
    ).toBe(true);
    toggleBtn.simulate('click');
    expect(
      component.find('HeaderNav__StyledNav').prop('isMobileMenuHidden')
    ).toBe(false);
  });
});
