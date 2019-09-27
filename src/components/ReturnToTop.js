import React from 'react';
import { HashLink } from 'react-router-hash-link';
import tw from 'tailwind.macro';
import 'styled-components/macro';

const ReturnToTop = () => {
  return (
    <div css={tw`pb-4 sm:hidden`} className="container">
      <HashLink to="/#top" aria-label="Return to top" css={tw`text-blue`}>
        Return to top
      </HashLink>
    </div>
  );
};

export default ReturnToTop;
