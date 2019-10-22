import React from 'react';
import { mount, shallow } from 'enzyme';
import { BrowserRouter } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { ThemeProvider } from 'styled-components';
import { theme } from '../tailwind.js';

import { Content } from './Content';

const options = {
  wrappingComponent: ThemeProvider,
  wrappingComponentProps: { theme }
};

const testProps = {
  isInternalLink: false,
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
      </BrowserRouter>,
      options
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

    const component = shallow(<Content {...props} />, options);

    expect(component.find('NoMatch').length).toBe(1);
  });

  describe('sidebar', () => {
    it('it renders a link', () => {
      const component = shallow(<Content {...testProps} />, options);
      const link = component.find('Content___StyledNavLink').first();

      expect(link.prop('to')).toBe('/content/treatment-options');
      expect(link.text()).toBe('Treatment options');
    });

    it('it renders a sublink', () => {
      const component = shallow(<Content {...testProps} />, options);
      const link = component.find('Content___StyledNavLink2').first();

      expect(link.prop('to')).toBe(
        '/content/understanding-addiction/addiction-can-affect-anyone'
      );
      expect(link.text()).toBe('Addiction can affect anyone');
    });
  });

  describe('main', () => {
    it('it renders content', () => {
      const component = shallow(<Content {...testProps} />, options);
      const link = component.find('h2').first();

      expect(link.text()).toBe('Addiction can affect anyone');
    });
  });

  it('shows back link if coming from a search results page', () => {
    const props = {
      ...testProps,
      isInternalLink: true
    };
    const component = shallow(<Content {...props} />, options);

    expect(component.find('BackToSearchResultsLink').length).toBe(1);
  });

  it('hides back link if accessing facility directly', () => {
    const component = shallow(<Content {...testProps} />, options);

    expect(component.find('BackToSearchResultsLink').length).toBe(0);
  });
});
