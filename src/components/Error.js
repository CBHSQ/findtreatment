import React from 'react';
import tw from 'tailwind.macro';
import 'styled-components/macro';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { OutboundLink } from 'react-ga';
import { Helmet } from 'react-helmet';

import { HELPLINE_LINK, HELPLINE_TEXT } from '../utils/constants';

import { Button } from './Input';

const Error = () => (
  <div css={tw`mx-auto p-6 mb-6 text-center`}>
    <Helmet>
      <title>Error</title>
    </Helmet>
    <h2 css={tw`text-3xl font-bold mb-10`}>Something's wrong on our side.</h2>
    <div css={tw`max-w-xl mx-auto`}>
      <p css={tw`text-xl mb-6`}>
        We're having technical issues right now. The problem should be fixed
        soon, and in the meantime SAMHSA's national helpline is available 24/7
        and can assist you with treatment referrals and information.
      </p>
      <Button
        eventLabel="Helpline link from error page"
        to={`tel:${HELPLINE_LINK}`}
        as={OutboundLink}
        primary
      >
        <FontAwesomeIcon icon={faPhone} css={tw`mr-2`} className="fa-lg" />
        {HELPLINE_TEXT}
      </Button>
    </div>
  </div>
);

export default Error;
