import React from 'react';
import 'styled-components/macro';
import tw from 'tailwind.macro';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import ReactGA from 'react-ga';

const sendClick = () => {
  ReactGA.event({
    category: `Link`,
    action: `Helpline link clicked`
  });
};

const HelpLine = () => {
  return (
    <a
      onClick={() => sendClick()}
      href="tel:18006624357"
      css={tw`w-full lg:w-auto lg:absolute lg:right-0 lg:top-0 lg:mr-6 bg-red-700 text-white hover:text-white text-sm lg:rounded-b flex items-center lg:items-stretch justify-center lg:justify-start shadow-md`}
    >
      <div css={tw`lg:bg-red-800 py-2 lg:px-4 lg:rounded-bl`}>
        <FontAwesomeIcon icon={faPhone} css={tw`fill-current w-4 h-4`} />
      </div>
      <div css={tw`py-2 px-2 lg:px-4`}>
        <strong>Need help now?</strong> Call us{' '}
        <span css={tw`font-semibold`}>1-800-662-HELP (4357)</span>
      </div>
    </a>
  );
};

export default HelpLine;
