import React from 'react';
import { shallow } from 'enzyme';
import { Results } from './Results';
import Loading from './Loading';
import NoResults from './NoResults';
import ResultsList from './ResultsList';

describe('Results component', () => {
  it('shows a loading message', () => {
    const props = {
      loading: true,
      data: {}
    };
    const component = shallow(<Results {...props} />);
    expect(component.find(Loading).length).toBe(1);
    expect(component.find(NoResults).length).toBe(0);
    expect(component.find(ResultsList).length).toBe(0);
  });
});
