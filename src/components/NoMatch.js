import React from 'react';
import tw from 'tailwind.macro';
import 'styled-components/macro';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { OutboundLink } from 'react-ga';
import { Helmet } from 'react-helmet';

import { HELPLINE_LINK, HELPLINE_TEXT } from '../utils/constants';

import { Button } from './Input';

const NoMatch = () => (
  <div css={tw`mx-auto p-6 mb-6 text-center`}>
    <Helmet>
      <title>Not found</title>
    </Helmet>
    <h2 css={tw`text-3xl font-bold mb-10`}>
      This page isn’t here, but we can get you help.
    </h2>
    <div css={tw`max-w-xl mx-auto`}>
      <p css={tw`text-xl mb-6`}>
        SAMHSA's national helpline is available 24/7 and can assist you with
        treatment referrals and information.
      </p>
      <OutboundLink
        eventLabel="Helpline link from 404"
        to={`tel:${HELPLINE_LINK}`}
      >
        <Button primary>
          <FontAwesomeIcon icon={faPhone} css={tw`mr-2`} className="fa-lg" />
          {HELPLINE_TEXT}
        </Button>
      </OutboundLink>
    </div>
  </div>
);

export default NoMatch;
