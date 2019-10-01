import React from 'react';
import { shallow } from 'enzyme';

import DetailsPayment from './DetailsPayment';

const testProps = {
  services: {}
};

describe('DetailsLocation component', () => {
  it('shows message if payment options are not available', () => {
    const component = shallow(<DetailsPayment {...testProps} />);

    expect(component.find('.no-payment-options').text()).toBe(
      'Check with the facility for payment options'
    );
  });

  it('shows correct number of payment options when present', () => {
    const props = {
      services: {
        PAY: {
          values: [
            'Private health insurance',
            'Cash or self-payment',
            'State-financed health insurance plan other than Medicaid'
          ]
        }
      }
    };

    const component = shallow(<DetailsPayment {...props} />);

    expect(component.find('DetailsPayment___StyledLi').length).toBe(3);
  });
});
