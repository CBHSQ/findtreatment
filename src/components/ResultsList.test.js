import React from 'react';
import { shallow } from 'enzyme';
import ResultsList from './ResultsList';
import Card from './Card';
import NoResults from './NoResults';

describe('Results component', () => {
  it('shows a provider card when there are results', () => {
    const props = {
      loading: false,
      page: 1,
      totalPages: 1,
      recordCount: 11,
      rows: [
        {
          frid:
            '811a908f82269778a2fe2a8bc603afa08df868f3e2fa56aa62e214d03997dea1'
        }
      ]
    };
    const component = shallow(<ResultsList {...props} />);
    expect(component.find('.results-loading').length).toBe(0);
    expect(component.find(NoResults).length).toBe(0);
    expect(component.find(Card).length).toBe(1);
  });

  it('shows no results message with empty array', () => {
    const props = {
      loading: false,
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
