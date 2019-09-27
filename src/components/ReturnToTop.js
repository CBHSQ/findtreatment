import React from 'react';
import tw from 'tailwind.macro';
import 'styled-components/macro';

const ReturnToTop = () => {
  return (
    <div css={tw`pb-4 sm:hidden`} className="container">
      <a href="#top" aria-label="Return to top" css={tw`text-blue`}>
        Return to top
      </a>
    </div>
  );
};

export default ReturnToTop;
