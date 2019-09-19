import React from 'react';
import tw from 'tailwind.macro';
import 'styled-components/macro';

import flag from '../../images/us_flag_small.png';

const StyledBanner = tw.div`flex items-center py-1 text-xs leading-tight`;

const HeaderBanner = () => (
  <div css={tw`bg-gray-lighter`}>
    <StyledBanner className="container">
      <img src={flag} alt="U.S. Flag" css={tw`mr-2`} />
      An official website of the United States government
    </StyledBanner>
  </div>
);

export default HeaderBanner;
