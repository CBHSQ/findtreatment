import React from 'react';
import 'styled-components/macro';
import tw from 'tailwind.macro';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { OutboundLink } from 'react-ga';

import { HELPLINE_LINK, HELPLINE_TEXT } from '../../utils/constants';

const HeaderHelpLine = () => {
  return (
    <OutboundLink
      eventLabel="Header Helpline link`"
      to={`tel:${HELPLINE_LINK}`}
      css={tw`w-auto px-4 py-4 bg-gold flex items-center rounded-l-full`}
    >
      <FontAwesomeIcon
        icon={faUser}
        css={tw`text-white fill-current mr-2`}
        size="lg"
      />
      <div css={tw`text-gray-darkest`}>
        For help finding treatment{' '}
        <span css={tw`font-bold`}>{HELPLINE_TEXT}</span>
      </div>
    </OutboundLink>
  );
};

export default HeaderHelpLine;
