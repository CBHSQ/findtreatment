import React from 'react';
import 'styled-components/macro';
import tw from 'tailwind.macro';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { OutboundLink } from 'react-ga';

import { HELPLINE_LINK, HELPLINE_TEXT } from '../../utils/constants';

const HeaderHelpLine = () => {
  return (
    <OutboundLink
      eventLabel="Header Helpline link`"
      to={`tel:${HELPLINE_LINK}`}
      css={tw`w-full lg:w-auto lg:absolute lg:right-0 lg:top-0 lg:mr-6 bg-teal-700 text-white hover:text-white text-sm lg:rounded-b hidden lg:flex items-center lg:items-stretch justify-center lg:justify-start shadow-md`}
    >
      <div css={tw`lg:bg-teal-800 py-2 lg:px-4 lg:rounded-bl`}>
        <FontAwesomeIcon icon={faPhone} css={tw`fill-current w-4 h-4`} />
      </div>
      <div css={tw`py-2 px-2 lg:px-4`}>
        <strong css={tw`block lg:inline`}>Need help finding treatment?</strong>{' '}
        Call us <span css={tw`font-semibold`}>{HELPLINE_TEXT}</span>
      </div>
    </OutboundLink>
  );
};

export default HeaderHelpLine;
