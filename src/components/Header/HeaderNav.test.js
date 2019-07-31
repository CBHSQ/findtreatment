import React from 'react';
import { shallow } from 'enzyme';

import { HeaderNav } from './HeaderNav';

describe('HeaderNav component', () => {
  it('reveals menu when hamburger icon is clicked', () => {
    const props = {
      location: {}
    };
    const component = shallow(<HeaderNav {...props} />);
    const toggleBtn = component.find('HeaderNav___StyledButton');

    expect(component.find('HeaderNav__MobileNav').prop('isMenuHidden')).toBe(
      true
    );
    toggleBtn.simulate('click');
    expect(component.find('HeaderNav__MobileNav').prop('isMenuHidden')).toBe(
      false
    );
  });
});
