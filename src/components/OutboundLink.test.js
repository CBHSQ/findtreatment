import React from 'react';
import { shallow } from 'enzyme';
import { OutboundLink as OL } from 'react-ga';
import OutboundLink from './OutboundLink';

const ATTRS_SELECTOR = 'a[target="_blank"][rel="noopener noreferrer"]';

const defaultProps = {
  to: '',
  eventLabel: ''
};

describe.only('Outbound Link component', () => {
  it('returns a Google Analytics Outbound Link component', () => {
    const wrapper = shallow(<OutboundLink {...defaultProps} />);
    expect(wrapper.is(OL)).toEqual(true);
  });

  it('sets new tab attributes when targetBlank is true', () => {
    const props = {
      ...defaultProps,
      targetBlank: true
    };

    const wrapper = shallow(<OutboundLink {...props} />).dive();
    expect(wrapper.exists(ATTRS_SELECTOR)).toEqual(true);
  });

  it('targetBlank is true by default', () => {
    const wrapper = shallow(<OutboundLink {...defaultProps} />).dive();
    expect(wrapper.exists(ATTRS_SELECTOR)).toEqual(true);
  });

  it('does not set new tab attributes for telephone links', () => {
    const props = {
      ...defaultProps,
      to: 'tel:'
    };

    const wrapper = shallow(<OutboundLink {...props} />).dive();
    expect(wrapper.exists(ATTRS_SELECTOR)).toEqual(false);
  });

  it('does not set new tab attributes for email links', () => {
    const props = {
      ...defaultProps,
      to: 'email:'
    };

    const wrapper = shallow(<OutboundLink {...props} />).dive();
    expect(wrapper.exists(ATTRS_SELECTOR)).toEqual(false);
  });

  it('does not set new tab attributes when targetBlank is false', () => {
    const props = {
      ...defaultProps,
      targetBlank: false
    };

    const wrapper = shallow(<OutboundLink {...props} />).dive();
    expect(wrapper.exists(ATTRS_SELECTOR)).toEqual(false);
  });
});
