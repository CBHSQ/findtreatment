import React from 'react';
import { mount } from 'enzyme';

import Error from './Error';

describe('Error component', () => {
  it('should set fous to the header on render', () => {
    const component = mount(<Error />);

    expect(component.exists('h1:focus')).toBe(true);
  });
});
