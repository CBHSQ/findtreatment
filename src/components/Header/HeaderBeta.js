import React from 'react';
import tw from 'tailwind.macro';
import 'styled-components/macro';
import { OutboundLink } from 'react-ga';

const HeaderBeta = () => {
  return (
    <div css={tw`bg-blue-lighter`}>
      <div className="container" css={tw`py-4 font-bold`}>
        We are testing a new design for our substance use treatment locator.
        Have feedback?{' '}
        <OutboundLink
          eventLabel="Header feedback form link"
          to="https://forms.gle/35ZHQCGBkxCsJcs78"
          css={tw`underline`}
        >
          We want to hear from you.
        </OutboundLink>
        <div css={tw`inline lg:block font-normal text-sm`}>
          {' '}
          Visit the current site at{' '}
          <OutboundLink
            eventLabel="findtreatment.samhsa.gov link clicked"
            css={tw`underline`}
            to="https://findtreatment.samhsa.gov"
          >
            findtreatment.samhsa.gov
          </OutboundLink>
        </div>
      </div>
    </div>
  );
};

export default HeaderBeta;
