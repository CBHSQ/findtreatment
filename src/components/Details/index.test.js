import React from 'react';
import { shallow } from 'enzyme';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../tailwind.js';

import Error from '../Error';
import NoMatch from '../NoMatch';
import Loading from '../Loading';
import { Details } from './';

const options = {
  wrappingComponent: ThemeProvider,
  wrappingComponentProps: { theme }
};

const testProps = {
  data: {
    city: 'Tucson',
    frid: '2037b07b2bfb78e1bdaf2b46dd94ceb41c2da1493e7c0c22796d82762c4cbb53',
    latitude: '79.7833853960037',
    longitude: '27.2689918940887',
    miles: 5.57,
    name1: 'My Treatment Facility',
    name2: 'Tucson Northwest',
    phone: '520-123-4376',
    services: {
      TC: { name: 'Payment options', values: ['Substance use treatment'] },
      PAY: {
        name: 'Private health insurance',
        values: [
          'Cash or self-payment',
          'State-financed health insurance plan other than Medicaid'
        ]
      }
    },
    state: 'AZ',
    street1: '3295 West Desert Road',
    street2: 'Suite 150',
    website: 'http://www.mytreatmentfacility.com',
    zip: '85741'
  },
  error: false,
  loading: false,
  isReported: false,
  isInternalLink: false,
  reportFacility: jest.fn(),
  handleReceiveFacility: jest.fn(),
  destroyFacility: jest.fn(),
  location: {},
  match: { params: {} },
  history: {},
  frid: '12628952a59ffa4ab1ceed0db7c391715eabda9ab1b16745651dffc917af7602',
  theme
};

describe('Details component', () => {
  it('shows an error message if there is a problem fetching data', () => {
    const props = {
      ...testProps,
      error: true
    };
    const component = shallow(<Details {...props} />, options);
    expect(component.find(Error).length).toBe(1);
  });

  it('shows a loading message while fetching data', () => {
    const props = {
      ...testProps,
      loading: true
    };
    const component = shallow(<Details {...props} />, options);
    expect(component.find(Loading).length).toBe(1);
  });

  it('shows a a not found message when there are no results', () => {
    const props = {
      ...testProps,
      data: {}
    };
    const component = shallow(<Details {...props} />, options);
    expect(component.find(NoMatch).length).toBe(1);
  });

  it('calls reportFacility() when report facility button is clicked', () => {
    const reportFn = jest.fn();
    const props = {
      ...testProps,
      reportFacility: reportFn
    };
    const component = shallow(<Details {...props} />, options);
    const reporttBtn = component.find('.report-facility');

    reporttBtn.simulate('click');

    expect(reportFn.mock.calls.length).toBe(1);
  });

  it('shows back link if coming from a search results page', () => {
    const props = {
      ...testProps,
      isInternalLink: true
    };
    const component = shallow(<Details {...props} />, options);

    expect(component.find('BackToSearchResultsLink').length).toBe(1);
  });

  it('hides back link if accessing facility directly', () => {
    const component = shallow(<Details {...testProps} />, options);

    expect(component.find('BackToSearchResultsLink').length).toBe(0);
  });

  it('hides report facility button if facility has already been reported', () => {
    const props = {
      ...testProps,
      isReported: true
    };
    const component = shallow(<Details {...props} />, options);

    expect(component.find('.report-facility').length).toBe(0);
  });
});
