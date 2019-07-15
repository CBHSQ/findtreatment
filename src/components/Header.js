import React from 'react';
import 'styled-components/macro';
import tw from 'tailwind.macro';
import HelpLine from './HelpLine';
import Banner from './Banner';
import Nav from './Nav';
import { OutboundLink } from 'react-ga';

const Header = () => {
  return (
    <>
      <div css={tw`bg-yellow-400`}>
        <div className="container" css={tw`py-4 font-bold`}>
          We are testing a new design for our treatment locator. Have feedback?{' '}
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
      <div css={tw`bg-gray-200`}>
        <div
          css={tw`lg:relative lg:mx-auto max-w-full lg:max-w-5xl xl:max-w-7xl`}
        >
          <Banner />
          <HelpLine />
        </div>
      </div>
      <Nav />
    </>
  );
};

export default Header;
