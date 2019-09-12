import React from 'react';
import tw from 'tailwind.macro';
import 'styled-components/macro';
import { OutboundLink } from 'react-ga';

import { HELPLINE_LINK, HELPLINE_TEXT } from '../utils/constants';

const NoLocation = () => (
  <div css={tw`shadow bg-white border border-gray-lighter rounded p-6 mb-6`}>
    <h1 css={tw`block font-bold font-heading text-2xl mb-6`}>
      Searching for treatment options
    </h1>
    <p css={tw`mb-4`}>
      Start by entering your ZIP code. Locations within 25 miles will be shown
      first, and you can change the distance to show more or fewer locations.
    </p>
    <p css={tw`mb-4`}>
      Use the search filters to find locations that match specific needs, like
      the type of treatment offered, groups served, or medication availability.
    </p>
    <p>
      If you need assistance, SAMHSA's national helpline is available 24/7 and
      can assist you with treatment referrals and information. Call{' '}
      <OutboundLink
        eventLabel="Helpline link from no results"
        to={`tel:${HELPLINE_LINK}`}
      >
        {HELPLINE_TEXT}
      </OutboundLink>{' '}
      to speak to someone.
    </p>
  </div>
);

export default NoLocation;
