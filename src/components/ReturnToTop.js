import React from 'react';
import { HashLink } from 'react-router-hash-link';
import tw from 'tailwind.macro';
import 'styled-components/macro';
import { TOP_ID } from '../utils/constants';

const ReturnToTop = () => {
  return (
    <div css={tw`pb-4 sm:hidden`} className="container">
      <HashLink
        to={`#${TOP_ID}`}
        aria-label="Return to top"
        css={tw`text-blue`}
        scroll={el => {
          el.scrollIntoView();
          el.focus();
        }}
      >
        Return to top
      </HashLink>
    </div>
  );
};

export default ReturnToTop;
