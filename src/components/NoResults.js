import React from 'react';
import tw from 'tailwind.macro';
import 'styled-components/macro';
import { OutboundLink } from 'react-ga';

import { HELPLINE_LINK, HELPLINE_TEXT } from '../utils/constants';

const NoResults = () => (
  <div css={tw`shadow border rounded p-6 text-center mb-6`}>
    <h2 css={tw`mb-6`}>
      <span css={tw`block font-bold text-2xl mb-6`}>
        We couldn't find any providers near you.
      </span>
    </h2>
    <div css={tw`max-w-md mx-auto`}>
      <p css={tw`mb-6`}>
        Try expanding your search by applying fewer filters, like only your ZIP
        code and payment option, or expanding your search distance.
      </p>
      <p css={tw`mb-6`}>
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
  </div>
);

export default NoResults;
