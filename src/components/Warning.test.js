import React from 'react';
import { shallow } from 'enzyme';
import Warning from './Warning';

const testProps = {
  children: () => <div>Test</div>,
  heading: 'My test warning'
};

describe('Warning component', () => {
  it('displays heading if present', () => {
    const props = { ...testProps };
    const component = shallow(<Warning {...props} />);

    expect(component.find('Warning___StyledSpan').text()).toBe(
      'My test warning'
    );
  });

  it('does not display heading if not present', () => {
    const component = shallow(<Warning />);

    expect(component.find('Warning___StyledSpan').length).toBe(0);
  });
});
