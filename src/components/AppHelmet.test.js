import React from 'react';
import { mount, shallow } from 'enzyme';
import { AppHelmet } from './AppHelmet';

const testProps = {
  focusTarget: { current: { focus: jest.fn() } },
  location: {},
  setSRMessage: jest.fn()
};

describe('App Helmet component', () => {
  it('should return a `Helmet` component', () => {
    const wrapper = shallow(<AppHelmet {...testProps} />);
    expect(wrapper.is('HelmetWrapper')).toBe(true);
  });

  // it('should call `setSRMessage` on navigation', () => {
  //   const mockSetSRMessage = jest.fn();
  //   mount(<AppHelmet {...testProps} setSRMessage={mockSetSRMessage} />);
  //   expect(mockSetSRMessage.mock.calls.length).toBe(1);
  // });

  // it('should set focus on the provided ref', () => {
  //   const mockFocus = jest.fn();
  //   mount(
  //     <AppHelmet
  //       {...testProps}
  //       focusTarget={{ current: { focus: mockFocus } }}
  //     />
  //   );
  //   expect(mockFocus.mock.calls.length).toBe(1);
  // });

  // it('should scroll to the top of the page', () => {
  //   window.scrollTo = jest.fn();
  //   mount(<AppHelmet {...testProps} />);
  //   expect(window.scrollTo.mock.calls[0][0]).toBe(0);
  //   expect(window.scrollTo.mock.calls[0][1]).toBe(0);
  // });
});
