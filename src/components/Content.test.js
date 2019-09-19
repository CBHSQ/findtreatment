import React from 'react';
import { mount, shallow } from 'enzyme';
import { BrowserRouter } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import { Content } from './Content';

const testProps = {
  location: {},
  match: {
    params: {
      sectionID: 'understanding-addiction',
      subSectionID: 'addiction-can-affect-anyone'
    }
  }
};

describe('Content component', () => {
  it('should render metadata', () => {
    /* eslint-disable-next-line no-unused-vars */
    const wrapper = mount(
      <BrowserRouter>
        <Content {...testProps} />
      </BrowserRouter>
    );
    const helmet = Helmet.peek();
    expect(helmet.title).toEqual('Addiction can affect anyone');
  });

  it('displays NoMatch component if section id is not found', () => {
    const props = {
      ...testProps,
      match: {
        params: {
          sectionID: 'i-do-not-exist'
        }
      }
    };

    const component = shallow(<Content {...props} />);

    expect(component.find('NoMatch').length).toBe(1);
  });

  describe('sidebar', () => {
    it('it renders a link', () => {
      const component = shallow(<Content {...testProps} />);
      const link = component.find('Content___StyledNavLink').first();

      expect(link.prop('to')).toBe('/content/understanding-addiction');
      expect(link.text()).toBe('Understanding addiction');
    });

    it('it renders a sublink', () => {
      const component = shallow(<Content {...testProps} />);
      const link = component.find('Content___StyledNavLink2').first();

      expect(link.prop('to')).toBe(
        '/content/understanding-addiction/addiction-can-affect-anyone'
      );
      expect(link.text()).toBe('Addiction can affect anyone');
    });
  });

  describe('main', () => {
    it('it renders content', () => {
      const component = shallow(<Content {...testProps} />);
      const link = component.find('h2').first();

      expect(link.text()).toBe('Addiction can affect anyone');
    });
  });
});
