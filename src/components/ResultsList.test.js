import React from 'react';
import { shallow } from 'enzyme';
import Loading from './Loading';
import { ResultsList } from './ResultsList';
import Card from './Card';
import NoResults from './NoResults';

describe('Results component', () => {
  it('shows a loading message', () => {
    const props = {
      hasResults: true,
      loading: true,
      location: {},
      data: {}
    };
    const component = shallow(<ResultsList {...props} />);
    expect(component.find(Loading).length).toBe(1);
  });

  it('shows a provider card when there are results', () => {
    const props = {
      hasResults: true,
      loading: false,
      location: { address: '' },
      page: 1,
      totalPages: 1,
      recordCount: 11,
      rows: [
        {
          city: 'Tucson',
          frid:
            '2037b07b2bfb78e1bdaf2b46dd94ceb41c2da1493e7c0c22796d82762c4cbb53',
          miles: 5.57,
          name1: 'My Treatment Facility',
          name2: 'Tucson Northwest',
          phone: '520-123-4376',
          services: {},
          state: 'AZ',
          street1: '3295 West Desert Road',
          street2: 'Suite 150',
          website: 'http://www.mytreatmentfacility.com',
          zip: '85741'
        }
      ]
    };
    const component = shallow(<ResultsList {...props} />);
    expect(component.find('.results-loading').length).toBe(0);
    expect(component.find(NoResults).length).toBe(0);
    expect(component.find(Card).length).toBe(1);
  });

  it('shows no results message if hasResults is false', () => {
    const props = {
      hasResults: false,
      loading: false,
      location: {},
      page: 1,
      totalPages: 0,
      recordCount: 0,
      rows: []
    };
    const component = shallow(<ResultsList {...props} />);
    expect(component.find('.results-loading').length).toBe(0);
    expect(component.find(NoResults).length).toBe(1);
    expect(component.find(Card).length).toBe(0);
  });
});
