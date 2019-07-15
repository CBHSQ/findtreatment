import React from 'react';
import 'styled-components/macro';
import tw from 'tailwind.macro';
import { OutboundLink } from 'react-ga';

const NoResults = () => {
  return (
    <div css={tw`shadow border rounded p-6 text-center mb-6`}>
      <h2 css={tw`mb-6`}>
        <span css={tw`block font-bold text-2xl mb-6`}>
          We couldn't find any providers near you.
        </span>
      </h2>
      <div css={tw`max-w-md mx-auto`}>
        <p css={tw`mb-6`}>
          Try expanding your search by applying fewer filters,
          <br /> like only your ZIP code and payment option.
        </p>
        <p css={tw`mb-6`}>
          If you need assistance, our national helpline is available 24/7 and
          can assist you with treatment referrals and information. Call{' '}
          <OutboundLink
            eventLabel="Helpline link from no results"
            to="tel:+1-800-662-4357"
          >
            1-800-662-HELP (4357)
          </OutboundLink>{' '}
          to speak to someone.
        </p>
      </div>
    </div>
  );
};

export default NoResults;
