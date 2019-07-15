import React from 'react';
import 'styled-components/macro';
import tw from 'tailwind.macro';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import Button from './Form/Button';
import { OutboundLink } from 'react-ga';

const NoMatch = () => {
  return (
    <div css={tw`mx-auto p-6 mb-6 text-center`}>
      <h2 css={tw`text-3xl font-bold mb-10`}>
        This page isn’t here, but we can get you help.
      </h2>
      <div css={tw`max-w-xl mx-auto`}>
        <p css={tw`text-xl mb-6`}>
          Our national helpline is available 24/7 and can assist you with
          treatment referrals and information.
        </p>
        <OutboundLink eventLabel="Helpline link from 404" to="tel:18006624357">
          <Button primary>
            <FontAwesomeIcon icon={faPhone} css={tw`mr-2`} className="fa-lg" />
            1-800-662-HELP (4357)
          </Button>
        </OutboundLink>
      </div>
    </div>
  );
};

export default NoMatch;
