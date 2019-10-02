import React from 'react';
import { shallow } from 'enzyme';
import { SRAnnouncements } from './SRAnnouncements';

describe('SR Announcements component', () => {
  it('renders the message when present', () => {
    const message = 'hello, is it me?';
    const wrapper = shallow(<SRAnnouncements srMessage={message} />);
    expect(wrapper.html()).toMatch(message);
  });

  it('is only visible to screen readers', () => {
    const wrapper = shallow(<SRAnnouncements />);
    expect(wrapper.hasClass('sr-only')).toEqual(true);
  });
});
