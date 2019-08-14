import React from 'react';
import 'styled-components/macro';
import tw from 'tailwind.macro';
import { OutboundLink } from 'react-ga';

const HeaderBeta = () => {
  return (
    <div css={tw`bg-yellow-300`}>
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
        <div css={tw`font-normal text-sm`}>
          Visit current site at{' '}
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
