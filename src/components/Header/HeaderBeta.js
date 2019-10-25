import React from 'react';
import tw from 'tailwind.macro';
import 'styled-components/macro';
import OutboundLink from '../OutboundLink';

const HeaderBeta = () => {
  return (
    <div css={tw`bg-blue-lighter`}>
      <div className="container" css={tw`py-4 font-bold`}>
        We are testing a new design for our substance use treatment locator.
        Have feedback?{' '}
        <OutboundLink
          eventLabel="Header feedback form link"
          to={process.env.REACT_APP_FEEDBACK_FORM_URL}
          css={tw`underline`}
        >
          We want to hear from you.
        </OutboundLink>
      </div>
    </div>
  );
};

export default HeaderBeta;
