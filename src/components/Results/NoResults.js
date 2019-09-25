import React from 'react';
import tw from 'tailwind.macro';
import 'styled-components/macro';
import { OutboundLink } from 'react-ga';

import { HELPLINE_LINK, HELPLINE_TEXT } from '../../utils/constants';

const NoResults = () => (
  <div css={tw`shadow bg-white border border-gray-lighter rounded p-6 mb-6`}>
    <h1 css={tw`block font-bold font-heading text-2xl mb-6`}>
      We couldn't find any providers near you.
    </h1>
    <p css={tw`mb-4 pb-4 border-b border-gray-lighter`}>
      Try expanding your search by applying fewer filters, like only your ZIP
      code and payment option, or expanding your search distance.
    </p>
    <p css={tw`text-sm`}>
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

export default NoResults;
