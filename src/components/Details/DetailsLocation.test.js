import React from 'react';
import { shallow } from 'enzyme';

import DetailsLocation from './DetailsLocation';

const testProps = {
  data: {
    city: 'Tucson',
    frid: '2037b07b2bfb78e1bdaf2b46dd94ceb41c2da1493e7c0c22796d82762c4cbb53',
    latitude: '79.7833853960037',
    longitude: '27.2689918940887',
    name1: 'My Treatment Facility',
    phone: '520-123-4376',
    services: {},
    state: 'AZ',
    street1: '3295 West Desert Road',
    street2: 'Suite 150',
    zip: '85741'
  }
};

describe('DetailsLocation component', () => {
  it('shows warning if transportation is not offered', () => {
    const component = shallow(<DetailsLocation {...testProps} />);

    expect(component.find('.transportation-text').text()).toBe(
      'This facility does not offer transportation assistance. Ask them about it when you call.'
    );
  });

  it('show infobox if transportation is offered', () => {
    const props = {
      data: {
        ...testProps.data,
        services: {
          AS: {
            values: ['Transportation assistance']
          }
        }
      }
    };

    const component = shallow(<DetailsLocation {...props} />);

    expect(component.find('.transportation-text').text()).toBe(
      'This facility offers transportation assistance. Ask them about it when you call.'
    );
  });
});
